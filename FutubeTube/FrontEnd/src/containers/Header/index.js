import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../Router";
import Logo from '../../Assets/logo.png'
import CreateVideo from '../../Assets/createvideo.svg'
import Usuario from '../../Assets/usuario.jpeg'
import { ImgUser, StyledHeader, ImgCreateVideo, StyledIconesUser, ImgLogo } from './styled'
import TextField from '@material-ui/core/TextField';

class Header extends Component {

    render() {
        return (
            <StyledHeader>
                <ImgLogo src={Logo} alt="Labetube" />
                <TextField label="search"></TextField>
                <StyledIconesUser>
                <ImgCreateVideo src={CreateVideo} alt="Create Video" />
                <ImgUser src={Usuario} alt="Foto Usuario" />
                </StyledIconesUser>
            </StyledHeader>

        )
    }
}

const mapStateToProps = state => ({
    allFeed: state.feed.allFeed,
})

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
