import React, { Component } from 'react';
import Card from  "../Card";
import clickCards from "../../clickCards.json";

class GameContainer extends Component {
    state = {
     cards: clickCards,
     score: 0
    };

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
                <p>{this.state.score}</p>
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
