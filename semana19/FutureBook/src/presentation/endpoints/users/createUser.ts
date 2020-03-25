import { Request, Response } from "express";
import { CreateUserUC } from "../../../business/usecase/users/createUser";
import { UserDB } from "../../../data/userDataBase";

export const createUserEndpoint = async (req: Request, res: Response) => {
  try {
    const createUserUC = new CreateUserUC(new UserDB());
    const result = await createUserUC.execute({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });

    res.status(200).send(result);
  } catch (err) {
    res.status(400).send({
      message: err.message,
      ...err
    });
  }
};
 