import { IFindUserByEmailDTO } from "./FindUserByEmailDTO";
import { IusersRepository } from "../../repositories/IUsersRepository";

export class FindUserByEmailUseCase {
  constructor(private usersRepository: IusersRepository) {}

  async execute(data: IFindUserByEmailDTO) {
    return await this.usersRepository.findByEmail(data.email);
  }
}
