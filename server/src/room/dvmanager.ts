import { Socket } from "socket.io";
import { EDriving } from "../service/config";
import { addDrivingSession, drivingRoom, pushDrivingSession, removeDrivingSession } from "../service/drivingsession";
interface IRoomParams {
      roomId: string
      peerId: string
}
export const DVManager = (socket: Socket) => {



      const drivingSession = async (session: string) => {
            addDrivingSession(session)
            socket.emit(EDriving.session_created, session)

      }
      const joinUser = async ({ roomId, peerId }: IRoomParams) => {
            if (drivingRoom[roomId]) {
                  pushDrivingSession(roomId,peerId)
                  await socket.join(roomId);
                  await socket.to(roomId).emit(EDriving.user_joined, { peerId })
            }
            console.log(roomId, peerId, drivingRoom[roomId], "joined")
            socket.on('disconnect', () => {
                  removeDrivingSession(roomId,peerId)
                  console.log(roomId, peerId, drivingRoom[roomId], "joined")
            })
      }
      socket.on(EDriving.create_session, drivingSession)
      socket.on(EDriving.join_user, joinUser)
}