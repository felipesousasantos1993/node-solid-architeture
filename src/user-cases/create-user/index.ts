import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";
import { PostgresUserRepostory } from "../../repositories/implementations/PostgresUserRepostory";
import { MailtrapMailProvider } from "../../providers/implementations/MailtrapMailProvider";
const mailtrapMailProvider = new MailtrapMailProvider();
const postgresUserRepostory = new PostgresUserRepostory();

const createUserUseCase = new CreateUserUseCase(
  postgresUserRepostory,
  mailtrapMailProvider
);

const createUserController = new CreateUserController(createUserUseCase);

export { createUserUseCase, createUserController };
