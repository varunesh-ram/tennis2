import React from 'react';
import Player from './Player';
import Scorer from './Scorer';
import { AppConstants } from '../constants/App.constants';

export default class TennisGame extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            player1Score: 0,
            player2Score: 0,
            isGameOver: false
        }
    }

    incrementPlayer1Score = () => {
        this.setState((prevState, props) => ({
            player1Score: prevState.player1Score + 1
        }));
    }

    incrementPlayer2Score = () => {
        this.setState((prevState, props) => ({
            player2Score: prevState.player2Score + 1
        }));
    }

    notifyGameOver = () => {
        if (!this.state.isGameOver) {
            this.setState((prevState, props) => ({
                isGameOver: !prevState.isGameOver
            }));
        }
    }

    render() {
        return (
            <div>
                <div className="playerContainer">
                    <div className="leftContainer">
                        <Player name={AppConstants.Player1Name} updateScore={this.incrementPlayer1Score} isGameOver={this.state.isGameOver} />
                    </div>
                    <Player name={AppConstants.Player2Name} updateScore={this.incrementPlayer2Score} isGameOver={this.state.isGameOver} />
                </div>
                <Scorer player1Score={this.state.player1Score} player2Score={this.state.player2Score} isGameOver={this.notifyGameOver} />
            </div>);
    }
}