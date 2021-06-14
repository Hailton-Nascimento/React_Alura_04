import { Switch, TextField, FormControlLabel, Button } from '@material-ui/core';
import React, { useState } from 'react';



function FormularioCadastro({ getDadosForm, validarCPF }) {
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [cpf, setCpf] = useState("");
    const [promocoes, setPromocoes] = useState(true);
    const [novidades, setNovidades] = useState(true);
    const [erros, setErros] = useState({cpf:{valido:true, texto:""}})
  


    return (
        <form
            onSubmit={(event) => {
                event.preventDefault();

                getDadosForm({ nome, sobrenome, cpf, novidades, promocoes });
            }}
        >

            <TextField
                value={nome}
                onChange={(event) => {
                    setNome(event.target.value);
    
                }}
                id="nome"
                fullWidth
                label="Nome"
                placeholder="Ex. Hailton"
                required
                margin="normal"
                variant="outlined"
            />
            <TextField
                value={sobrenome}
                onChange={(event) => {
                    setSobrenome(event.target.value);
                }}
                id="sobrenome"
                fullWidth
                label="Sobrenome"
                placeholder="Ex. Nascimento"
                required
                variant="outlined"
                margin="normal"
            />
            <TextField
                value={cpf}
                onChange={(event) => {
                    setCpf(event.target.value);
               
                }}
                onBlur={(event)=>{
                    const ehValido = validarCPF(cpf);
                    setErros({cpf:ehValido})
                  }}
                       
                error={!erros.cpf.valido}
                helperText={erros.cpf.texto}
                id="cpf"
                type="number"
                pattern="([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})"
                fullWidth
                label="CPF"
       
                required
                variant="outlined"
                margin="normal"
            />

            <FormControlLabel
                control={
                    <Switch
                        checked={promocoes}
                        onChange={(event) => {
                            setPromocoes(event.target.checked);
                        }}
                        name="promocoes"
                        color="primary"
                    />
                }
                label="Promoções"
            />
            <FormControlLabel
                control={
                    <Switch
                        checked={novidades}
                        onChange={(event) => {
                            setNovidades(event.target.checked);
                        }}
                        name="novidades"
                        color="primary"
                    />
                }
                label="Novidades"
            />


            <Button type="submit" variant="contained" color="primary">
                Cadastrar
            </Button>

        </form >
    );

}

export default FormularioCadastro;