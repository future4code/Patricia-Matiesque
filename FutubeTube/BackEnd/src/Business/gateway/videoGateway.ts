import { Video } from "../entities/videos";
import { FeedVideos } from "../entities/feedVideos";

export interface VideoGateway {
  createVideo(user: Video): Promise<void>;
  getVideoById(id: string): Promise<FeedVideos[]>;


}
