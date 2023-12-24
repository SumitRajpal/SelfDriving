const driversArray: string[] = []


export const addDriver = (driverId: string) => {
      driversArray.push(driverId);
}

export const removeDriver = (driverId: string) => {
      const index = driversArray.indexOf(driverId);
      if (index !== -1) {
            driversArray.splice(index, 1);
      }
}

export const getDriver = () => {
      return driversArray;
}