const userArray: string[] = []


export const setUsers = (userId: string) => {
      userArray.push(userId);
}

export const getUsers = () => {
      return userArray;
}