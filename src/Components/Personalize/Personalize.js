import React, { Component } from "react";
import GroupOrientation from "../menu/menu.js";
import ContainedButtons from "../botoes/botoes.js"
import "./Personalize.css"

export default class Personalize extends Component{
    
    render(){
    const mystyle = {

    };
        return(
    <div className="container">
    <ul id="menuSuperior">
    <li className="opcao">Quem somos</li>
    <li className="opcao">Nosso papel</li>
    <li className="opcao">Outros produtos</li>
    <li className="opcao">Contato</li>
    </ul>
    <h1 className= "titulo">Monte seu Post-It</h1>
    <p>Nossos post-its são impressos com papel reciclado nas principais capitais do país, e, por isso, podem ser personalizados com o menor preço final para o cliente e entregues no mesmo dia do pedido. Monte seu post-it único e receba hoje mesmo (para pedidos feitos até as 17h)!</p>
    <p><strong>Escolha tamanho, cor, formato e quantidade de Post-Its por bloco antes de adicionar ao carrinho</strong></p>
    <GroupOrientation/>
    </div>
            )
    }
    
}