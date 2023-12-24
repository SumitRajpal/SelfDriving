export const drivingRoom: Record<string, string[]> = {}




export const getDrivingSession = async() => {
      return drivingRoom
}

export const pushDrivingSession = async(roomId:string,peerId:string) => {
      if (drivingRoom[roomId]) {

      drivingRoom[roomId].push(peerId);
      }
}
export const removeDrivingSession = (roomId:string,peerId: string) => {
      if (drivingRoom[roomId]) {
      const index = drivingRoom[roomId].indexOf(peerId);
      if (index !== -1) {
            drivingRoom[roomId].splice(index, 1);
      }
}
}
export const addDrivingSession =  (session:string) => {
      drivingRoom[session] = []
}