import React from 'react';

export default props => {
    const rows = props.lancamentos.map( lancamento => {
        return (
            <tr key={lancamento.id}>
                <td>{lancamento.descricao}</td>
                <td>{Intl
                        .NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'})
                        .format(lancamento.valor)}
                </td>
                <td>{lancamento.tipo}</td>
                <td>{lancamento.mes}</td>
                <td>{lancamento.status}</td>
                <td>
                    <button type="button"   title="Efetivar"
                            disabled={lancamento.status !== 'PENDENTE'}
                            className="btn btn-success btn-sm"
                            onClick={e => props.alterarStatus(lancamento, 'EFETIVADO')}>
                                <i className="pi pi-check"></i>
                    </button>
                    &nbsp;
                    <button type="button"   title="Cancelar"
                            disabled={lancamento.status !== 'PENDENTE'}
                            className="btn btn-warning btn-sm"
                            onClick={e => props.alterarStatus(lancamento, 'CANCELADO')}>
                                <i className="pi pi-trash"></i>
                    </button>
                    &nbsp;
                    <button type="button"   title="Editar"
                            className="btn btn-primary btn-sm"
                            onClick={e => props.editAction(lancamento.id)}>
                                <i className="pi pi-pencil"></i>
                    </button>
                    &nbsp;
                    <button
                            type="button"   title="Excluir"
                            className="btn btn-danger btn-sm"
                            onClick={e => props.deleteAction(lancamento)}>
                                <i className="pi pi-times"></i>
                    </button>
                </td>
            </tr>
        )
    })

    return (
        <table className="table table-hover">
            <thead>
                <tr>
                    <th scope="col">Descrição</th>
                    <th scope="col">Valor</th>
                    <th scope="col">Tipo</th>
                    <th scope="col">Mês</th>
                    <th scope="col">Situação</th>
                    <th scope="col">Ações</th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    )
}