import { User } from "../interfaces/User";
export const searchUser = async (username: string): Promise<User> => {
  try {
    const resp = await fetch(`https://api.github.com/users/${username}`);
    if (!resp.ok) {
      if (resp.status === 404) throw new Error("Error not found user");
      throw new Error("Error searching user");
    }
    const data = await resp.json();
    return data as User;
  } catch (error) {
    throw error;
  }
};
