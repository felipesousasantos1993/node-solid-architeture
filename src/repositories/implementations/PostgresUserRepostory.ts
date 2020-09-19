import { User } from "../../entities/Users";
import { IusersRepository } from "./../IUsersRepository";
export class PostgresUserRepostory implements IusersRepository {
  private users: User[] = [];

  async findByEmail(email: string): Promise<User> {
    const user = this.users.find((user) => user.email === email);
    return user;
  }
  async save(user: User): Promise<void> {
    this.users.push(user);
  }
}
