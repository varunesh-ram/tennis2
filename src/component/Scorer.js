import React from 'react';
import { AppConstants } from '../constants/App.constants';
import PropTypes from 'prop-types';

export default class Scorer extends React.Component {
    updateScore = () => {
        const player1Score = this.props.player1Score, player2Score = this.props.player2Score;

        if (this.hasWinner()) {
            this.props.isGameOver();
            return this.playerWithHighestScore() + AppConstants.WinnerText;
        }
        if (this.hasAdvantage())
            return AppConstants.AdvantageText + this.playerWithHighestScore();
        if (this.isDeuce())
            return AppConstants.DeuceText;
        if (this.isBothPlayerScoredEqual())
            return AppConstants.Score[player1Score] + AppConstants.AllText;
        return AppConstants.Score[player1Score] + AppConstants.Comma + AppConstants.Score[player2Score];
    }

    hasWinner = () => {
        const player1Score = this.props.player1Score, player2Score = this.props.player2Score;
        if (player1Score >= 4 && this.isPlayer1TwoOrMorePointsGreaterThanPlayer2())
            return true;
        if (player2Score >= 4 && this.isPlayer2TwoOrMorePointsGreaterThanPlayer1())
            return true;
        return false;
    }

    isPlayer1TwoOrMorePointsGreaterThanPlayer2 = () => {
        const player1Score = this.props.player1Score, player2Score = this.props.player2Score;
        return player1Score >= player2Score + 2;
    }

    isPlayer2TwoOrMorePointsGreaterThanPlayer1 = () => {
        const player1Score = this.props.player1Score, player2Score = this.props.player2Score;
        return player2Score >= player1Score + 2;
    }

    hasAdvantage = () => {
        const player1Score = this.props.player1Score, player2Score = this.props.player2Score;
        if (player1Score >= 4 && this.isPlayer1OnePointGreaterThanPlayer2())
            return true;
        if (player2Score >= 4 && this.isPlayer2OnePointGreaterThanPlayer1())
            return true;
        return false;
    }

    isPlayer1OnePointGreaterThanPlayer2 = () => {
        const player1Score = this.props.player1Score, player2Score = this.props.player2Score;
        return player1Score === player2Score + 1;
    }

    isPlayer2OnePointGreaterThanPlayer1 = () => {
        const player1Score = this.props.player1Score, player2Score = this.props.player2Score;
        return player2Score === player1Score + 1;
    }

    playerWithHighestScore = () => {
        if (this.props.player1Score > this.props.player2Score) {
            return AppConstants.Player1Name;
        } else {
            return AppConstants.Player2Name;
        }
    }

    isDeuce = () => {
        return this.props.player1Score >= 3 && this.isBothPlayerScoredEqual();
    }

    isBothPlayerScoredEqual = () => {
        const player1Score = this.props.player1Score, player2Score = this.props.player2Score;
        return player1Score === player2Score;
    }

    render() {
        return (
            <div>
                <h5>{AppConstants.ScoreText}</h5>
                <label>{this.updateScore()} </label>
            </div>
        );
    }
}

Scorer.propTypes = {
    player1Score: PropTypes.number,
    player2Score: PropTypes.number,
    isGameOver: PropTypes.func
}