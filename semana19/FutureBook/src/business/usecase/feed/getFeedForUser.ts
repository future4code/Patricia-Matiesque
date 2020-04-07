import { FeedGateway } from "../../gateways/feedGateway";
import { PostType } from "../../entities/post";

export class GetFeedForUserUC {
  constructor(private feedGateway: FeedGateway) { }

  async execute(input: GetFeedInput): Promise<GetFeedOutput[]> {
    const post = await this.feedGateway.getFeedForUser(input.userId);

    return post.map(post => {
      return {
        id: post.getId(),
        image: post.getImage(),
        description: post.getDescription(),
        creationDate: post.getCreationDate(),
        postType: post.getPostType(),
        userId: post.getUserId(),
        name: post.getName()
      };
    });
  }
}

export interface GetFeedOutput {
  id: string;
  image: string;
  description: string;
  creationDate: Date;
  postType: PostType,
  userId: string;
  name: string;
}
export interface GetFeedInput {
  userId: string;
}
