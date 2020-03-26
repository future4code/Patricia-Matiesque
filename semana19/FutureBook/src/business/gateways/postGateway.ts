import { Post } from "../entities/post";

export interface PostGateway {
    createPost(post: Post): Promise<void>;
    likePost(user_id: string,post_id: string): Promise<void>;
    dislikePost(user_id: string,post_id: string): Promise<void>;
}