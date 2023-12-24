import { Socket } from "socket.io";
import { v4 as uuidV4 } from 'uuid';
import { getUsers, setUsers } from "../service/users";


export const RoomHandler = (socket: Socket) => {
      const rooms: Record<string, string[]> = {}
      interface IRoomParams {
            roomId: string
            peerId: string
      }
      // interface IVehicle {
      //       status: string
      //       vehicle: string
      //       driver: string
      // }
      // interface IVehicleControl {
      //       vehicle: string
      //       control: any
      // }
      interface IUserId {
            userId: string
      }
      interface VehicleEvent {
            event: string
      }
      const onLeave = ({ roomId, peerId }: IRoomParams) => {
            console.log(roomId, peerId)
      }

      const joinroom = ({ roomId, peerId }: IRoomParams) => {
            if (rooms[roomId]) {
                  console.log("user joined the room", roomId, peerId)
                  rooms[roomId].push(peerId);
                  socket.join(roomId);
                  socket.to(roomId).emit('user-joined', { peerId })
                  socket.emit('get-users', { roomId, participants: rooms[roomId] })
            }
            socket.on('disconnect', () => {
                  onLeave({ roomId, peerId })
            })
      }


      const createroom = async () => {
            const roomId = uuidV4();
            rooms[roomId] = []
            socket.emit('room-created', roomId)
      }
      const newUser = async ({ userId }: IUserId) => {
            setUsers(userId)
            socket.emit('user-list', getUsers())
            console.log(getUsers())
      }

      const getUsersList = async () => {
            socket.emit('user-list', getUsers())
      }

      const setVehicleEvent = async ({ event }: VehicleEvent) => {
            socket.emit('vehicle-event', event)
      }


      socket.on("join-room", joinroom)
      socket.on("create-room", createroom)
      socket.on('new-user', newUser)
      socket.on('get-userList', getUsersList)
      socket.on('vehicle-event', setVehicleEvent)
}