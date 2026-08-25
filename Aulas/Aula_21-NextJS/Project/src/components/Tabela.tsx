import Cliente from "@/core/Cliente";
import { IconeEdicao, IconeLixo } from "./Icones";

interface TabelaProps {
    clientes: Cliente[]
    clienteSelecionado?: (cliente: Cliente) => void
    clienteExcluido?: (cliente: Cliente) => void
}
export default function Tabela(props: TabelaProps) {
    const exibirAcoes = props.clienteExcluido || props.clienteSelecionado

    function renderizarCabecalho() {
        return (
            <tr >
                <th>Código</th>
                <th>Nome</th>
                <th>Idade</th>
                {exibirAcoes ? <th>Ações</th> : false}
            </tr>
        )
    }

    function renderizarDados() {
        return props.clientes?.map((cliente, i) => {
            return (
                <tr key={cliente.id} className={`${i % 2 === 0 ? 'bg-purple-200' : 'bg-purple-100'}`}>
                    <td className="text-center">{cliente.id}</td>
                    <td className="text-center">{cliente.nome}</td>
                    <td className="text-center">{cliente.idade}</td>
                    {exibirAcoes ? renderizarAcoes(cliente) : false}
                </tr>
            )
        })
    }

    function renderizarAcoes(cliente: Cliente) {
        return (
            <td className="flex justify-center items-center">
                {props.clienteSelecionado ? (
                    <button  className="flex justify-center items-center
                         bg-green-500 hover:bg-green-600 rounded-full p-2 m-1"
                        onClick={() => props.clienteSelecionado?.(cliente)}>
                        {IconeEdicao}
                    </button>
                ) : false}
                {props.clienteExcluido ? (
                <button className="flex justify-center items-center
                         bg-red-500 hover:bg-red-600 rounded-full p-2 m-1"
                        onClick={() => props.clienteExcluido?.(cliente)}>
                        {IconeLixo}
                    </button>
                ) : false}
            </td>       
        )
    }

    return (
        <table className="w-full rounded-md overflow-hidden">
            <thead className="bg-purple-500 text-white">
                {renderizarCabecalho()}
            </thead>
            <tbody>
                {renderizarDados()}
            </tbody>
        </table>
    )
}