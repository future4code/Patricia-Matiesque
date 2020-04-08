import { User } from "../entities/user";

export interface UserGateway {
  createUser(user: User): Promise<void>;
  loginUser(email: string): Promise<User | undefined>;
  getUserByEmail(email: string): Promise<User | undefined>;

}
