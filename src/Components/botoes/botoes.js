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

export default class ContainedButtons extends Component {
  constructor(props) {
    super(props);}
    
  render() {
  return (
    <div className="confirmar">
     <h2 id="preco">
      Meu Post-It: R$ {(this.props.tamanho == "PEQUENO"?this.props.valor:this.props.valor*2)},00
      </h2>
    <div>
      <Button variant="contained" color="primary" className="botoes">
        Adicionar ao carrinho
      </Button>
      <Button variant="contained" color="secondary" className="botoes">
        Limpar Post-It
      </Button>
       <Button variant="contained" color="secondary" className="botoes">
        Limpar Post-It
      </Button>
    </div>
    </div>
  );
}
}