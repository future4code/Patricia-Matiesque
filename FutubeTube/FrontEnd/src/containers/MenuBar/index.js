import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../Router";
import { StyledMenuBar, ListMenu, ListItem } from './styled'


class MenuBar extends Component {


    render() {
        return (
            <StyledMenuBar>
                <ListMenu>
                    <ListItem>Inicio</ListItem>
                    <ListItem>Incriçoes</ListItem>
                    <ListItem>Seus Videos</ListItem>
                </ListMenu>
            </StyledMenuBar>
        );
    }
}

const mapStateToProps = state => ({
    allFeed: state.feed.allFeed,
})

const mapDispatchToProps = dispatch => ({
    goToLogin: () => dispatch(push(routes.root)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MenuBar);
