import { Request, Response } from "express";
import { CreateVideoUC } from "../../../business/usecase/video/createVideo";
import { VideoDB } from "../../../data/videoDataBase";
import { JwtAuthorizer } from "../../../services/jwtAuthorizer";

export const createVideoEndpoint = async (req: Request, res: Response) => {
  try {
    const createVideoUC = new CreateVideoUC(
      new VideoDB(),
    );
    const jwtAuthorizer = new JwtAuthorizer();
    const userId = jwtAuthorizer.getUsersInfoFromToken(req.headers.auth as string);

    const result = await createVideoUC.execute({
      title: req.body.title,
      link: req.body.link,
      description: req.body.description,
      userId: userId.id,
    });

    res.status(200).send(result);
  } catch (err) {
    res.status(400).send({
      message: err.message,
      ...err
    });
  }
};
