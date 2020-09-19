import { Router } from "express";
import { createUserController } from "./user-cases/create-user";
import { findUserByEmailController } from "./user-cases/find-user-by-email";

const router = Router();

router.post("/users", (req, res) => {
  return createUserController.handle(req, res);
});

router.get("/users/:email", (req, res) => {
  return findUserByEmailController.handle(req, res);
});

export { router };
