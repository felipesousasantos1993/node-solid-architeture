import { IMailProvider } from "../../providers/IMailProvider";
import { User } from "../../entities/Users";
import { ICreateUserRequestDTO } from "./CreateUserDTO";
import { IusersRepository } from "../../repositories/IUsersRepository";

export class CreateUserUseCase {
  constructor(
    private usersRepository: IusersRepository,
    private mailProvider: IMailProvider
  ) {}

  async execute(data: ICreateUserRequestDTO) {
    const userAlreadyExsts = await this.usersRepository.findByEmail(data.email);

    if (userAlreadyExsts) {
      throw new Error("User already exists");
    }

    const user = new User(data);

    await this.usersRepository.save(user);

    await this.mailProvider.sendMail({
      to: {
        name: data.name,
        email: data.email,
      },
      from: {
        name: "Ciclic",
        email: "noreply@ciclic.com.br",
      },
      subject: "Bem vindo à Ciclic",
      body: "<p>Já tem acesso à plataforma</p>",
    });
  }
}
