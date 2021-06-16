
import { Component } from 'react';
import '../src/assets/App.css';
import FormularioCadastro from './Components/FormularioCadastro';
import { Container, Typography } from '@material-ui/core'

import { validarCPF, validarSenha,validarNome, validarCep } from './models/cadastro';
import ValidacoesCadastro from './contexts/ValidacoesCadastro';

class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Typography variant="h3" component="h1" align="center" >Formulário de cadastro</Typography>
        <ValidacoesCadastro.Provider
        value={{ cpf: validarCPF, senha: validarSenha, nome:validarNome, cep:validarCep }}
        >

          <FormularioCadastro aoEnviar={getDadosForm} />

        </ValidacoesCadastro.Provider>
      </Container>
    );
  }

}
function getDadosForm(dados) {
  console.log(dados);
}



export default App;
