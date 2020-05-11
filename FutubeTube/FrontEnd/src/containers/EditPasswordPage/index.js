import React from 'react';
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../Router";
import { edditPassword } from "../../action/login"


const EditPasswordForm = [
    {
        name: 'newPassword',
        type: 'text',
        label: 'newPassword ',
        placeholder: 'Senha nova',
    },
    {
        name: 'oldPassword',
        type: 'text',
        label: 'oldPassword',
        placeholder: 'Senha antiga',
    }
]

export class EditPasswordPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            form: {}
        }
    }

    componentDidMount() {
        const token = window.localStorage.getItem("token")
        if (token === null) {
            this.props.goToLoginPage()
        }
    }

    handleChange = event => {
        this.setState({
            form: {
                ...this.state.form,
                [event.target.name]: event.target.value

            }
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { newPassword, oldPassword } = this.state.form
        this.props.edditPassword(newPassword, oldPassword)
    }

    render() {

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    {EditPasswordForm.map(input => (
                        <input
                            onChange={this.handleChange}
                            name={input.name}
                            type={input.type}
                            value={this.state.form[input.name]}
                            label={input.label}
                            placeholder={input.placeholder}
                        />
                    ))}
                    <button type="submit">Enviar </button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => ({
    goToLoginPage: () => dispatch(push(routes.login)),
    edditPassword: (newPassword, oldPassword) => dispatch(edditPassword(newPassword, oldPassword)),
})

export default connect(mapStateToProps, mapDispatchToProps)(EditPasswordPage);
