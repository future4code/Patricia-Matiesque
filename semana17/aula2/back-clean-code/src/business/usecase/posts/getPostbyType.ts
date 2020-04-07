import { PostDB } from "../../../data/postDataBase";
import { PostType } from "../../entities/post";
import { NotFoundError } from "../../error/NotFoundError";

export class GetPostByTypeUC {
  constructor(private db: PostDB) {}

  public async execute(input: GetPostByTypeUCInput): Promise<GetPostByTypeUCOutput> {
    const post = await this.db.getPostByType(input.type);

    if (!post) {
      throw new NotFoundError("Post not found");
    }

    return{
      id: post.getId(),
      title: post.getTitle(),
      content: post.getContent(),
      image: post.getImage(),
      type: post.getType(),
      userId: post.getUserId(),
      userName: post.getUser().getName()
    }
  } 
}

export interface GetPostByTypeUCInput {
  type: string;
}

export interface GetPostByTypeUCOutput {
  id: string;
  title: string;
  content: string;
  image?: string;
  type: PostType;
  userId: string;
  userName: string;
}
