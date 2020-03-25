import { Request, Response } from "express";
import { UserDB } from "../../../data/userDataBase";
import { JWTAuthentication } from "../../../utils/JWTAuthentication";
import { DeleteFriendUC } from "../../../business/usecase/users/deleteFriend";

export const deleteFriendEndpoint = async (req: Request, res: Response) => {
  try {
    const jwtAuth = new JWTAuthentication();

    const userDataBase = new UserDB();

    const userId = jwtAuth.verifyToken(req.headers.auth as string);

    const useCase = new DeleteFriendUC(userDataBase);

    const input = {
      userId,
      friend_id: req.body.friend_id
    };
    
    await useCase.execute(input);
    res.send({
      message: "User delete Successfully"
    });
  } catch (err) {
    console.log(err);
    res.status(400).send({
      message: err.message
    });
  }
};
