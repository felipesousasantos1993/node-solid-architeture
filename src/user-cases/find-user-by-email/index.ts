import { FindUserByEmailController } from "./FindUserByEmailController";
import { FindUserByEmailUseCase } from "./FindUserByEmailUseCase";
import { PostgresUserRepostory } from "../../repositories/implementations/PostgresUserRepostory";
const postgresUserRepostory = new PostgresUserRepostory();

const findUserByEmailUseCase = new FindUserByEmailUseCase(
  postgresUserRepostory
);

const findUserByEmailController = new FindUserByEmailController(
  findUserByEmailUseCase
);

export { findUserByEmailUseCase, findUserByEmailController };
