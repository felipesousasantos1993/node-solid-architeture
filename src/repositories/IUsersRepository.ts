import { User } from "./../entities/Users";

export interface IusersRepository {
  findByEmail(email: string): Promise<User>;
  save(user: User): Promise<void>;
}
