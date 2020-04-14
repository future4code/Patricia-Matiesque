import { Video } from "../entities/videos";

export interface VideoGateway {
  createVideo(user: Video): Promise<void>;
  

}
