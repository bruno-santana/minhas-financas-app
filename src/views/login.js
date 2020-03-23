import React from 'react'
import Card from '../components/card'
import FormGroup from '../components/form-group'
import { withRouter } from 'react-router-dom'
import Axios from 'axios'

class Login extends React.Component {

    state = {
        email : '',
        senha : ''
    }
    
    entrar = () => {
       Axios.post('http://localhost:8080/api/usuarios/autenticar', {
           email : this.state.email,
           senha : this.state.senha
       }).then( response => {
           console.log(response)
       }).catch ( erro => {
           console.log(erro.response)
       })
    }

    prepareCadastro = () => {
        this.props.history.push('/cadastro-usuario')
    }

    render(){
        return(
                <div className="row">
                    <div className="col-md-6" style={{position: "relative", left: '300px'}}>
                        <div className="bs-docs-section">
                            <Card title="Login">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="bs-component">
                                            <fieldset>
                                                <FormGroup label="Email: *" htmlFor="InputEmail">
                                                    <input type="email"
                                                        value={this.state.email}
                                                        onChange={e => this.setState({email: e.target.value})}
                                                        className="form-control"
                                                        id="InputEmail"
                                                        aria-describedby="emailHelp"
                                                        placeholder="Digite o email" />
                                                </FormGroup>
                                                <FormGroup label="Senha: *" htmlFor="InputSenha">
                                                    <input type="password"
                                                        value={this.state.senha}
                                                        onChange={e => this.setState({senha: e.target.value})}
                                                        className="form-control"
                                                        id="InputSenha"
                                                        placeholder="Digite a senha"  />
                                                </FormGroup>
                                                <button onClick={this.entrar} className="btn btn-success">Entrar</button>&nbsp;
                                                <button onClick={this.prepareCadastro} className="btn btn-warning">Cadastrar</button>
                                            </fieldset>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
        )
        
    }
}

export default withRouter( Login )