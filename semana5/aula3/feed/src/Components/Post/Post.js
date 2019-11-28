import React from 'react'
import './Post.css'

class Post extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            like: false,
            numeroLikes: 0,
            comentario: false,
            numeroComentarios: 0,
            usuario: ""
        }

    }

    aoClicarNoLike = () => {
        if (this.state.like){
            this.setState({ 
                like: false, 
                numeroLikes: this.state.numeroLikes -1 })
        }else{
            this.setState({
                like: true,
                numeroLikes: this.state.numeroLikes + 1

            })
        }
    }
    clicarComentar =() => {
        this.setState ({numeroComentarios: this.state.numeroComentarios +1})
    }

    aoClicarNoComentario = () => {
        if (this.state.comentario){
            this.setState({
                comentario:false,
                numeroComentarios: this.state.numeroComentarios -1 })
        }else{
            this.setState({
                comentario: true,
                numeroComentarios: this.state.numeroComentarios +1,
                 })

        }

    }

render(){

    let likeBotao
    if(this.state.like){
        likeBotao = require('../../Components/Icones/favorite_black.png')
    }else{
        likeBotao = require('../../Components/Icones/favorite.png')
    }

    let campoComentario
    if(this.state.comentario){
        campoComentario = (<div> <input placeholder="Escreva seu comentario"/>
        <button onClick="clicarComentar">Comentar</button> </div>)
    }

    return (
        <div>
            <p>future4.br</p>
            <img src="https://picsum.photos/id/5/200/200" />
            <div>
            <button onClick={this.aoClicarNoLike} ><img src={likeBotao} /></button>
            <p>{this.state.numeroLikes}</p>
            <button onClick={this.aoClicarNoComentario} ><img src={require('../../Components/Icones/coment.png')} /></button>
            <p>{this.state.numeroComentarios}</p>
            {campoComentario}
            </div>
        </div>

    )

}
}

export default Post;