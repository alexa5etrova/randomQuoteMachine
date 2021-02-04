import React from 'react';
import { connect } from 'react-redux';
import { requestNewQuote } from '../redux/quote-reducer';
import s from './Quote.module.scss';


class QuoteMachine extends React.Component {
  constructor(props){
    super(props);
    this.changeQuote = this.changeQuote.bind(this);
    this.state ={
      color: "#817f46"
    }

  }
  
  changeQuote(){
    this.props.requestNewQuote();
    this.setState({
      color: this.props.colors[Math.floor(Math.random() * this.props.colors.length)]
    
  })
}
  componentDidMount(){
    this.props.requestNewQuote();
    }


  render(){
    return(<div className={s.quoteBox} style={{backgroundColor: this.state.color}} id={"quote-box"}>
        <div className={s.text} id={"text"}>"{this.props.quoteData.content}"</div>
        <div className={s.author}  id={"author"}>-{this.props.quoteData.author}</div>
        <button className={s.button} onClick={this.changeQuote} id={"new-quote"}>New quote</button>
        <div className={s.icons}>
          <a  href={"https://twitter.com/intent/tweet"} target={"_blank"}id={"tweet-quote"}><img className={s.image} src={"https://cdn.iconscout.com/icon/free/png-256/twitter-1722376-1466162.png"}/></a>
        </div>
        
    </div>
    )
  }
}

let mapStateToProps =(state)=>({
  quoteData: state.quote.quoteData,
  colors: state.quote.colors

});

export default connect(mapStateToProps, {requestNewQuote})(QuoteMachine);  