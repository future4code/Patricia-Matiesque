import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../Router";
import { getVideoDetails } from '../../action/video'

class VideoDetailsPage extends Component {

    componentDidMount() {
        this.props.getVideoDetails(this.props.selectVideoId)
            if (this.props.selectVideoId !== "") {
            this.props.getVideoDetails(this.props.selectVideoId)
        } else {
            this.props.goToFeed()
        }
    }

    render() {
        const {title, link, description} = this.props.videoDetails

        return (
            <div>
                <h1>Feed</h1>
                <p>titulo: {title}</p>

            </div>
        );
    }
}

const mapStateToProps = state => ({
    videoDetails: state.feed.videoDetails,
    selectVideoId: state.feed.selectVideoId,
})

const mapDispatchToProps = dispatch => ({
    getVideoDetails: (videoId) => dispatch(getVideoDetails(videoId)),
    goToFeed: () => dispatch(push(routes.root)),
});

export default connect(mapStateToProps, mapDispatchToProps)(VideoDetailsPage);
