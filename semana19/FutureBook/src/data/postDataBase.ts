import { BaseDB } from "./baseDataBase";
import { PostGateway } from "../business/gateways/postGateway";
import { Post } from "../business/entities/post";
import { DuplicateUserError } from "../business/Error/DuplicateUserError";

export class PostDB extends BaseDB implements PostGateway {
    private postTableName = "post";
    private userTableName = "users";
    private relationTableName = "friend_user";

    async createPost(post: Post) {
        try {
            await this.connection
                .insert({
                    id: post.getId(),
                    image: post.getImage(),
                    description: post.getDescription(),
                    creationDate: post.getCreationDate(),
                    postType: post.getPostType(),
                    userId: post.getUserId(),


                })
                .into(this.postTableName);
        } catch (err) {
            if (err.code === 'ER_DUP_ENTRY') {
                throw new DuplicateUserError()
            } else {
                throw err
            }
        }
    }

}