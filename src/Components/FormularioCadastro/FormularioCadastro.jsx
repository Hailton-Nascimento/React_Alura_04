import { Stepper, Typography,Step,StepLabel } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import DadosEntrega from './DadosEntrega';
import DadosPessoais from './DadosPessoais';
import DadosUsuario from './DadosUsuario';


function FormularioCadastro({ aoEnviar}) {
    const [etapaAtual, setEtapaAtual] = useState(0);
    const [dadosColetados, setDadosColetados] = useState({});

    useEffect(()=>{
        if(etapaAtual === formulario.length-1){
            aoEnviar(dadosColetados)
        }
    })

    function coletarDados(dados) {
        setDadosColetados({ ...dadosColetados,...dados });
        proximo();
    }
    function proximo() {
        setEtapaAtual(etapaAtual + 1)
    }

    const formulario = [
        <DadosUsuario aoEnviar={coletarDados}/>,
        <DadosPessoais aoEnviar={coletarDados}/>,
        <DadosEntrega aoEnviar={coletarDados}/>,
        <Typography  variant="h5"align="center" color="textSecondary">Cadastro efetuado sucesso!</Typography>
    ]
    return (
        <>
        <Stepper activeStep={etapaAtual}>
        <Step><StepLabel>Login</StepLabel></Step>
        <Step><StepLabel>Pessoal</StepLabel></Step>
        <Step><StepLabel>Entrega</StepLabel></Step>
        <Step><StepLabel>Finalziar</StepLabel></Step>

        </Stepper>
            {formulario[etapaAtual]}
        </>
    );


}

export default FormularioCadastro;