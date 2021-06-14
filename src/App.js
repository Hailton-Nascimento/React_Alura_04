
import { Component } from 'react';
import '../src/assets/App.css';
import FormularioCadastro from './Components/FormularioCadastro';
import { Container, Typography} from '@material-ui/core'

class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Typography variant="h3" component="h1" align="center" >Formulário de cadastro</Typography>
        <FormularioCadastro getDadosForm={getDadosForm}  validarCPF={validarCPF} />
      </Container>
    );
  }

}
function getDadosForm(dados) {
console.log(dados);
}

function validarCPF(cpf){
  if(cpf.length !== 11){
    return {valido:false, texto:"CPF deve ter 11 digitos."}
  }else{
    return {valido:true, texto:""}
  }
  
}




export default App;
