import { Request, Response } from "express";
import { PostDB } from "../../../data/postDataBase";
import { CreatePostUC } from "../../../business/usecase/post/createPost";

export const createPostEndpoint = async (req: Request, res: Response) => {
  try {
    const createPostUC = new CreatePostUC(new PostDB());
    
    const result = await createPostUC.execute({
      image: req.body.image,
      description: req.body.description,
      postType: req.body.postType,
      userId: req.body.userId,
    });

    res.status(200).send(result);
  } catch (err) {
    res.status(400).send({
      message: err.message,
      ...err
    });
  }
};
 