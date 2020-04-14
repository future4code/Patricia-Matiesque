import { Request, Response } from "express";
import { UserDB } from "../../../data/userDataBase";
import { JwtAuthorizer } from "../../../services/jwtAuthorizer";
import { BcryptService } from "../../../services/bcryptService";
import { UpdatePasswordUC } from "../../../business/usecase/user/updatePassword";

export const updatePasswordEndpoint = async (req: Request, res: Response) => {
  const updatePasswordUC = new UpdatePasswordUC(
    new UserDB(),
    new JwtAuthorizer(),
    new BcryptService()
  );

  try {
    const token = await updatePasswordUC.execute({
      token: req.headers.auth as string,
      newPassword: req.body.newPassword,
      oldPassword: req.body.oldPassword

    });
    console.log("token", token)
    res.send({ message: "User successfully logged in", token });
  } catch (err) {
    res.status(400).send({
      message: err.message,
      ...err
    });
  }
};
