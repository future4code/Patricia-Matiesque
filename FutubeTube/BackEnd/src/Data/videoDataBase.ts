import { BaseDB } from "./baseDatabase";
import { VideoGateway } from "../business/gateway/videoGateway";
import { Video } from "../business/entities/videos";
import { DuplicateUserError } from "../business/error/DuplicateUserError";


export class VideoDB extends BaseDB implements VideoGateway {
    private videoTableName = "Videos";

    async createVideo(video: Video) {
        try {
            await this.connection
                .insert({
                    id: video.getId(),
                    title: video.getTitle(),
                    link: video.getLink(),
                    description: video.getDescription(),
                    createDate: video.getCreateDate(),
                    userId: video.getUserId(),
                })
                .into(this.videoTableName);
        } catch (err) {
            console.log(err)
            if (err.code === 'ER_DUP_ENTRY') {
                throw new DuplicateUserError()
            } else {
                throw err
            }
        }
    }


}
