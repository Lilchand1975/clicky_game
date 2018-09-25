import React, { Component } from 'react';
import Card from  "../Card";
import clickCards from "../../clickCards.json";
import Header from "../Header";
import Navbar from "../Navbar";



class GameContainer extends Component {
    state = {
     cards: clickCards,
     score: 0,
     topScore:0
    };

    componentDidMount(){
        this.setState({cards:this.shuffleArray(this.state.cards)});
    }

    handleClick = (letter) => {
        const newCards = this.state.cards.map(card =>{
            if(card.letter === letter){
                card.clicked = true;
            }
        return card;
        });
        this.setState({cards: this.shuffleArray(newCards), 
            score: this.state.score + 1});
    };
    handleCorrectGuess = newCards => {
        const { topScore, score } = this.state;
        const newScore = score + 1;
        const newTopScore = newScore > topScore ? newScore : topScore;
        this.setState({
            clickCards: this.shuffleArray(newCards),
            score: newScore,
            topScore: newTopScore
        });
    };
    handleIncorrectGuess = cards => {
        this.setState({
            clickCards: this.resetCards(cards),
            score: 0
        });
    };
     shuffleArray = cards => {
        for (let i = cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [cards[i], cards[j]] = [cards[j], cards[i]]; 
            // eslint-disable-line no-param-reassign
        }
        return cards;
    };

    render (){
        return(
            <div>
                <Navbar score={this.state.score}/>
                <Header/>

                {this.state.cards.map(card => {
                    return (
                        <Card
                            key={card.letter}
                            clicked={card.clicked}
                            handleClick={this.handleClick}
                            letter={card.letter}
                            image={card.image}
                        />
                    );
                })}
            </div>
        );    
    }
}

export default GameContainer;
