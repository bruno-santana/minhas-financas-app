import React from 'react';

import UsuarioService from '../app/service/usuarioService';
import { AuthContext } from '../main/provedorAutenticacao';

class Home extends React.Component{

    state = {
        saldo: 0
    }

    constructor(){
        super();
        this.usuarioService = new UsuarioService();
    }

    componentDidMount(){
        const usuarioLogado = this.context.usuarioAutenticado;

        this.usuarioService
            .obterSaldoPorUsuario(usuarioLogado.id)
            .then( response => {
                this.setState({ saldo: response.data});
            }).catch(error => {
                console.error(error.response);
            });
    }

    render(){
        return (
            <div className="jumbotron">
                <h1 className="display-3">Bem vindo!</h1>
                <p className="lead">Esse é seu sistema de finanças.</p>
                <p className="lead">Seu saldo para o mês atual é de {Intl
                        .NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'})
                        .format(this.state.saldo)}</p>
                <hr className="my-4" />
                <p>E essa é sua área administrativa, utilize o menu no topo da página ou botões abaixo para navegar pelo sistema.</p>
                <p className="lead">
                    <a className="btn btn-primary btn-lg" 
                    href="#/cadastro-usuarios" 
                    role="button"><i className="pi pi-user-plus"></i>  
                     Cadastrar Usuário
                    </a>
                    &nbsp;
                    <a className="btn btn-warning btn-lg" 
                    href="#/cadastro-lancamentos" 
                    role="button"><i className="pi pi-money-bill"></i>  
                     Cadastrar Lançamento
                    </a>
                </p>
            </div>
        )
    }
}

Home.contextType = AuthContext;

export default Home;