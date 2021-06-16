import { useContext, useState } from 'react';
import ValidacoesCadastro from '../contexts/ValidacoesCadastro';

function useErros() {

    const validacoes = useContext(ValidacoesCadastro);
    const [erros, setErros] = useState(criaEstadoInicial(validacoes));


    function validar(event) {

        const { id, value } = event.target;
        const novoEstado = { ...erros };
        novoEstado[id] = validacoes[id](value);
        setErros(novoEstado);

    }
    function possoEnviar() {

        for (let campo in erros) {
            if (!erros[campo].valido) {
                return false
            }
        } return true;
    }


    return [erros, validar, possoEnviar];
}
function criaEstadoInicial(validacoes){
    const estadoInicial = {};
    for (let campo in validacoes) {
        estadoInicial[campo] = { valido: true, texto: "" }
    }
    return estadoInicial
}
export default useErros;