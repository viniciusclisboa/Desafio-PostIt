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

let PostIt





export default class Botoes extends Component {
  constructor(props) {
    super(props);}
    
cadastrarPostIt (){
  this.setState ( state => ({
    PostIt: {
      "tamanho": this.props.tamanho,
      "cor": this.props.cor,
      "formato": this.props.formato,
      "quantidade": this.props.formato
    }
}))
}

email() {
  let resposta;
  let email = prompt("Informe seu e-mail", "meuemail@exemplo.com");
  if (email == null || email == "") {
    resposta = "Compra cancelada";
  } else {
    resposta = "Compra cadastrada!";
  }
  alert(resposta)
  
var xmlhttp = new XMLHttpRequest();
var Url = "https://qnq8ppynub.execute-api.us-east-2.amazonaws.com/default/DesafioPostIt";
xmlhttp.open("POST", Url);
xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
xmlhttp.send(JSON.stringify({ "email": email, "PostIt": this.state.PostIt}));
}
    
  render() {
  return (
    <div className="confirmar">
     <h2 id="preco">
      Meu Post-It: R$ {(this.props.tamanho == "PEQUENO"?this.props.valor:this.props.valor*2)},00
      </h2>
    <div className="concluir">
      <Button variant="contained" color="primary" className="botoes" id="limpar" onClick={this.props.click}>Limpar Post-it</Button>
      <Button variant="contained" color="primary" className="botoes" onClick={this.cadastrarPostIt.bind(this)}>
        Adicionar ao carrinho
      </Button>
       <Button variant="contained" color="primary" className="botoes" onClick={this.email.bind(this)}>
        Enviar pedido 
      </Button>
    </div>
    </div>
  );
}
}

