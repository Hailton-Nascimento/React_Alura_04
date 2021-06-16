import { Button, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import useErros from '../../hooks/useErros';

function DadosUsuario({ aoEnviar }) {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [erros, validar, possoEnviar] = useErros();


    

    return (
        <form
            onSubmit={(event) => {
                event.preventDefault();
                if (possoEnviar())
                    aoEnviar({ email, senha });

            }}
        >

            <TextField
                value={email}
                onChange={(event) => {
                    setEmail(event.target.value);


                }}

                id="email"
                fullWidth
                label="Email"
                placeholder="Ex. fulano@email.com"
                required
                margin="normal"
                variant="outlined"
                type="email"
            />

            <TextField
                value={senha}
                onChange={(event) => {
                    setSenha(event.target.value);


                }}
                onBlur={validar}
                error={!erros.senha.valido}
                helperText={erros.senha.texto}
                id="senha"
                fullWidth
                label="Senha"
                placeholder=""
                titulo="deve conter no minino 8 digitos."
                required
                variant="outlined"
                margin="normal"
                type="password"
            />

            <Button type="submit" variant="contained" color="primary">
                Proximo
            </Button>
        </form>
    );
}
export default DadosUsuario;