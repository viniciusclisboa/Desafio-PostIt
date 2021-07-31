import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import "./botoes.css";


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));


function email() {
  let resposta;
  let email = prompt("Informe seu e-mail", "meuemail@exemplo.com");
  if (email == null || email == "") {
    resposta = "Compra cancelada";
  } else {
    resposta = "Compra cadastrada!";
  }
  alert(resposta)
}



export default class Botoes extends Component {
  constructor(props) {
    super(props);}
    
  render() {
  return (
    <div className="confirmar">
     <h2 id="preco">
      Meu Post-It: R$ {(this.props.tamanho == "PEQUENO"?this.props.valor:this.props.valor*2)},00
      </h2>
    <div className="concluir">
      <Button variant="contained" color="primary" className="botoes" id="limpar" onClick={this.props.click}>Limpar Post-it</Button>
      <Button variant="contained" color="primary" className="botoes" onClick={email}>
        Adicionar ao carrinho
      </Button>
    </div>
    </div>
  );
}
}