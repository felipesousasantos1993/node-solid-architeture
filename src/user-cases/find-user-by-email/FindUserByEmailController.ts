import { FindUserByEmailUseCase } from "./FindUserByEmailUseCase";
import { Request, Response } from "express";

export class FindUserByEmailController {
  constructor(private findUserByEmailUseCase: FindUserByEmailUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { email } = req.params;

    try {
      let data = await this.findUserByEmailUseCase.execute({
        email,
      });
      return res.status(200).send({ data });
    } catch (err) {
      return res.status(400).json({
        message: err.message || "Unexpected error.",
      });
    }
  }
}
