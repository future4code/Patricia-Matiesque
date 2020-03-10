import { Request, Response } from "express";
import { EditPostUC } from "../../../business/usecase/posts/editPost";
import { PostDB } from "../../../data/postDataBase";

export const editPostEndpoint = async (req: Request, res: Response) => {
  try {
    const editPostUC = new EditPostUC(new PostDB());
    const result = await editPostUC.execute({
      id: req.body.id,
      title: req.body.title,
      content: req.body.content,
      image: req.body.image,
      type: req.body.type,
    });
    res.status(200).send(result);
  } catch (err) {
    res.status(400).send({
      message: err.message,
      ...err
    });
  }
};
  