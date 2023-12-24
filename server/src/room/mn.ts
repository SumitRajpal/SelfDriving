import { Socket } from "socket.io";
import { EDriving } from "../service/config";
import { addDrivingSession } from "../service/drivingsession";

export const MN = (socket: Socket) => {



      const drivingSession = async (session: string) => {
            addDrivingSession(session)
            socket.emit(EDriving.session_created, session)

      }

      socket.on(EDriving.create_session, drivingSession)

}