import { Socket } from "socket.io";
import { EDriving } from "../service/config";
let oldSession: any;
export const GamepadManager = (socket: Socket) => {
      const drivingSession = async (session: any) => {
            if (JSON.stringify(oldSession) !== JSON.stringify(session)) {
                 await socket.broadcast.emit(EDriving.gamepad_receiver, session)
                  console.log(session,"oko")
                  oldSession = session
            }
      }

      socket.on(EDriving.gamepad_sender, drivingSession)
}