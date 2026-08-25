import { useEffect, useState } from "react";
import Cliente from "@/core/Cliente";
import Entrada from "./Entrada";
import Botao from "./Botao";

interface FormularioProps {
 cliente: Cliente
 clienteMudou?: (cliente: Cliente) => void
 cancelado?: () => void
}

export default function Formulario(props: FormularioProps) {
  const id = props.cliente?.id ?? '';
  const [nome, setNome] = useState(props.cliente?.nome ?? '');
  const [idade, setIdade] = useState(props.cliente?.idade ?? 0);

  useEffect(() => {
    setNome(props.cliente?.nome ?? '');
    setIdade(props.cliente?.idade ?? 0);
  }, [props.cliente]);

  return (
    <div>
        {id ? ( 
            <Entrada somenteLeitura={true} texto="Código" valor={id} className="mb-5"/>
        ) : false}
        <Entrada texto="Nome" valor={nome} valorMudou={setNome} className="mb-5" />
        <Entrada texto="Idade" tipo="number" valor={idade} valorMudou={setIdade}/>
        <div className="flex justify-end !mt-7">
            <Botao onClick={() => props.clienteMudou?.(new Cliente(nome, idade, id))} cor="blue" className="!mr-2">
                {id ? 'Editar' : 'Salvar'}
            </Botao>
            
            <Botao onClick={props.cancelado} cor="gray">
                Cancelar
            </Botao>
        </div>
    </div>
  );
}