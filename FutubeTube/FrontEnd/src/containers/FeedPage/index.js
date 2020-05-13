import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../Router";
import { getFeed } from '../../action/index';
import { deleteVideo, setVideoId } from '../../action/video';
import Video from '../../Assets/video.png';
import Header from '../Header';
import MenuBar from '../MenuBar';
import YouTube from 'react-youtube-component';


import { Containner, ContainnerCard, Card, CardImg, ImgVideo } from './styled';

class FeedPage extends Component {

    componentDidMount() {
        this.props.getFeed()
    }

    handleVideoDelete = (id) => {
        this.props.deleteVideo(id)
    }
    handleVideoDetails = (videoId) => {
        this.props.setVideoId(videoId)
        this.props.goToVideoDetails()
    }

    render() {
        return (
            <Containner>
                <Header></Header>
                <MenuBar></MenuBar>
                <ContainnerCard>
                    {this.props.allFeed.map((feed) =>
                        <Card>
                            <CardImg>
                                <YouTube height=" 640 "
                                    width=" 390 "
                                    videoId=" h_D3VFfhvs4 " />
                            </CardImg>
                            <div>

                                <h3>{feed.title}</h3>
                                <p>{feed.description}</p>
                            </div>
                            <div>
                                <button onClick={() => this.handleVideoDelete(feed.id)} >Deletar</button>
                                <button onClick={() => this.handleVideoDetails(feed.id)} >Detalhes</button>
                            </div>
                        </Card>

                    )}
                </ContainnerCard>


            </Containner>
        );
    }
}

const mapStateToProps = state => ({
    allFeed: state.feed.allFeed,
})

const mapDispatchToProps = dispatch => ({
    getFeed: () => dispatch(getFeed()),
    goToLogin: () => dispatch(push(routes.root)),
    deleteVideo: (id) => dispatch(deleteVideo(id)),
    setVideoId: (videoId) => dispatch(setVideoId(videoId)),
    goToVideoDetails: () => dispatch(push(routes.videoDetails))


});

export default connect(mapStateToProps, mapDispatchToProps)(FeedPage);
