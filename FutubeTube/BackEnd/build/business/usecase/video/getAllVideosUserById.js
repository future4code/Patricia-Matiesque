"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class GetAllVideosUserByIdUC {
    constructor(videoGateway, authenticationGateway) {
        this.videoGateway = videoGateway;
        this.authenticationGateway = authenticationGateway;
    }
    execute(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const userInfo = yield this.authenticationGateway.getUsersInfoFromToken(input.token);
            let videos;
            if (!userInfo) {
                throw new Error("User not found!");
            }
            if (input.id) {
                videos = yield this.videoGateway.getAllVideosUserById(input.id);
            }
            else if (!input.id) {
                videos = yield this.videoGateway.getAllVideosUserById(userInfo.id);
            }
            if (!videos) {
                throw new Error("nao tem");
            }
            return videos.map(video => {
                return {
                    id: video.getId(),
                    title: video.getTitle(),
                    link: video.getLink(),
                    description: video.getDescription(),
                    creationDate: video.getCreateDate(),
                    userId: video.getUserId(),
                    name: video.getName(),
                    image: video.getImage()
                };
            });
        });
    }
}
exports.GetAllVideosUserByIdUC = GetAllVideosUserByIdUC;
