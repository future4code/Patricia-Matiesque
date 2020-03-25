import { v4 } from "uuid";
import { PostGateway } from "../../gateways/postGateway";
import { Post } from "../../entities/post";

export class CreatePostUC {
  constructor(private postGateway: PostGateway) {}

  public async execute(input: CreatePostUCInput): Promise<CreatePostUCOutput> {
    
      const id = v4();
      const post = new Post(
          id,  
          input.image, 
          input.description, 
          new Date(),
          Post.mapStringsPostType(input.postType),
          input.userId);
      
      await this.postGateway.createPost(post);
  
      return {
        message: "Post criado com sucesso"
      };
  }
}
export interface CreatePostUCInput {
    image: string;
    description: string;
    postType: string,
    userId: string
}

export interface CreatePostUCOutput {
  message: string;
}