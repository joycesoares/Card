import React, {Component} from 'react';
import "./cards.css"

// import { Container } from './styles';

export default class Cards extends Component{
  constructor(props){
    super(props);
    this.state={

    }
    this.mudaCor= this.mudaCor.bind(this);
  }
  mudaCor(){
    const btn = document.getElementById("btn");
    btn.addEventListener("click", this.mudaCor)
    console.log("funciona");

  }

  render(){
    return (
      <div className="Card" id="card">
          <h1> Titulo</h1>
          <p>Progressively extend an expanded array of internal or "organic" sources after cross-media internal or "organic" sources. Synergistically transition open-source networks with.</p>
          <button id ="btn" onClick={this.mudaCor()}>Clique aqui</button>
      </div>
    )
  }
}