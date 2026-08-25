import { useEffect, useState } from "react";
import Cliente from "@/core/Cliente";
import ColecaoCliente from "@/backend/db/ColecaoCliente";
import useTabForm from "./useTabForm";

export default function useClientes() {
      const repo = new ColecaoCliente();
      const { exibirFormulario, exibirTabela , tabelaVisivel} = useTabForm();

      const [cliente, setCliente] = useState<Cliente>(Cliente.vazio());
      const [clientes, setClientes] = useState<Cliente[]>([]);
    
      useEffect(() => {
        obterTodos();
      }, []);
    
      function obterTodos() {
        repo.obterTodos().then((clientes) => {
          setClientes(clientes);
          exibirTabela();
        });
      }
    
      async function clienteSelecionado(cliente: Cliente) {
        setCliente(cliente);
        exibirFormulario();
      }
    
      async function clienteExcluido(cliente: Cliente) {
        await repo.excluir(cliente);
        obterTodos();
      }
    
      async function clienteSalvo(cliente: Cliente) {
        await repo.salvar(cliente);
        obterTodos();
      }
    
        function novoCliente() {
        setCliente(Cliente.vazio());
        exibirFormulario();
      }
    
      return {
        cliente,
        clientes,
        obterTodos,
        clienteSelecionado,
        clienteExcluido,
        clienteSalvo,
        exibirTabela,
        exibirFormulario,
        tabelaVisivel,
        novoCliente
      }
}