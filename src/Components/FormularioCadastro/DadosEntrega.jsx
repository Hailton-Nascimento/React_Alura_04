import { Button, TextField, } from '@material-ui/core';

import React, { useState } from 'react';
import useErros from '../../hooks/useErros';

function DadosEntrega({ aoEnviar }) {
    const [cep, setCep] = useState("");
    const [endereco, setEndereco] = useState("");
    const [numero, setNumero] = useState("");
    const [bairro, setBairro] = useState("");
    const [municipio, setMunicipio] = useState("");
    const [estado, setEstado] = useState("");
    const [erros, validar, possoEnviar] = useErros();




    return (
        <form
            onSubmit={(event) => {
                event.preventDefault();
                if (possoEnviar())
                    aoEnviar({ cep, endereco, numero, bairro, municipio, estado })

            }}
        >

            <TextField
                value={cep}
                onChange={(event) => {
                    setCep(event.target.value);
               
                }}
                onBlur={validar}
                error={!erros.cep.valido}
                helperText={erros.cep.texto}
                id="cep"
                label="CEP"
                placeholder="Ex. 00000-000"
                required
                margin="normal"
                variant="outlined"
                type="text"
            />

            <TextField
                value={endereco}
                onChange={(event) => {
                    setEndereco(event.target.value);
                }}
                id="endereco"
                disabled="true"
                fullWidth
                label="Endereco"
                placeholder="Ex. Rau Nove de julho"
                required
                variant="outlined"
                margin="normal"
                type="text"
            />
            <TextField
                value={numero}
                onChange={(event) => {
                    setNumero(event.target.value);
                }}
                id="numero"

                label="Numero"
                placeholder="Ex. 67"
                required
                variant="outlined"
                margin="normal"
                type="number"
            />
            <TextField
                value={bairro}
                onChange={(event) => {
                    setBairro(event.target.value);
                }}
                id="bairro"
                label="Bairro"
                placeholder="Ex. Jardim Europa"
                required
                variant="outlined"
                margin="normal"
                type="text"
            />
            <TextField
                value={municipio}
                onChange={(event) => {
                    setMunicipio(event.target.value);
                }}
                id="municipio"

                label="Municipio"
                placeholder="Ex. Sao Paulo"
                required
                variant="outlined"
                margin="normal"
                type="text"
            />
            <TextField
                value={estado}
                onChange={(event) => {
                    setEstado(event.target.value);
                }}
                id="estado"
                label="Estado"
                placeholder="Ex. SP"
                required
                variant="outlined"
                margin="normal"
                type="text"

            />

            <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                size="small"
            >
                Finalizar Cadastro
            </Button>

        </form>
    );
}
export default DadosEntrega;