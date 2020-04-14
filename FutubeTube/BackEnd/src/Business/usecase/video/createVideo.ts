import { VideoGateway } from "../../gateway/videoGateway";
import { v4 } from "uuid";
import { Video } from "../../entities/videos";

export class CreateVideoUC {
  constructor(
    private videoGateway: VideoGateway,
    ) {}

  public async execute(input: CreateUserUCInput): Promise<CreateUserUCOutput> {
      const id = v4();
      const video = new Video(
          id,  
          input.title, 
          input.link, 
          input.description,  
          new Date(),
          input.userId);
     
      await this.videoGateway.createVideo(video);

   
      return {
        message: "Video created successfully " 
      };
  }
}
export interface CreateUserUCInput {
  title: string;
  link: string;
  description:string;
  userId: string;
}

export interface CreateUserUCOutput {
  message: string;
}
