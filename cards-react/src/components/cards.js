import React, {Component} from 'react';
import "./cards.css"
import "./card2.css"
import "./Card3.css"

// import { Container } from './styles';

export default class Cards extends Component{
  constructor(props) {
    super(props)
    this.state = {
        card: true,
        btn: true,
        text: false,
    }
    this.mudaCor = this.mudaCor.bind(this)
}
  mudaCor(e){
    this.setState({
      card: !this.state.card,
      btn: !this.state.card,
      paragraph: !this.state.paragraph,
    })
    e.preventDefault(e)
  }

  render(){
    let Card = this.state.card ? "Card" : "Card2" || "Card3"
    let Btn = this.state.btn ? "button" : "button2" || "button3"
    let paragraph = this.state.paragraph ? "paragraph" : "paragraph3" ||"paragraph2"
   
    return (
      <div className={Card}>
          <h1> SpeedTest </h1>
          <p className={paragraph}>Somos o mais tradicional provedor de internet fibra optica da região localizada em Conceição do mato Dentro...</p>
          <button onClick={this.mudaCor.bind(this)} className={Btn} >Conhecer</button>
      </div>
    )
  }
}