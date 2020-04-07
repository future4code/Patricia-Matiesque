import { Request, Response } from "express";
import { UserDB } from "../../data/userDataBase";
import { GetAllUsersUC } from "../../business/usecase/getAllUsers";

export const getAllUsersEndpoint = async (req: Request, res: Response) => {
  try {
    const getAllUserUC = new GetAllUsersUC(new UserDB)
    const result = await getAllUserUC.execute();
     res.status(200).send({result});
  } catch (err) {
    console.log(err);
    res.status(400).send({
      message: err.message,
      ...err
    });
  }
};
