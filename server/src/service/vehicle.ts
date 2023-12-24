const vehicleArray: string[] = []


export const addVehicle = (vehicleId: string) => {
      vehicleArray.push(vehicleId);
}

export const removeVehicle = (vehicleId: string) => {
      const index = vehicleArray.indexOf(vehicleId);
      if (index !== -1) {
            vehicleArray.splice(index, 1);
      }
}

export const getVehicle = () => {
      return vehicleArray;
}