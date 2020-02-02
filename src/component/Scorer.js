import React from 'react';
import { AppConstants } from '../constants/App.constants';
import PropTypes from 'prop-types';

export default class Scorer extends React.Component {
    updateScore = () => {
        const player1Score = this.props.player1Score, player2Score = this.props.player2Score;

        if (player1Score >= 4 && this.isPlayer1OnePointGreaterThanPlayer2())
            return AppConstants.AdvantagePlayer1Text;
        if (player2Score >= 4 && this.isPlayer2OnePointGreaterThanPlayer1())
            return AppConstants.AdvantagePlayer2Text;
        if (this.isDeuce())
            return AppConstants.DeuceText;
        if (player1Score <= 3 && player2Score <= 3) {
            if (this.isBothPlayerScoredEqual())
                return AppConstants.Score[player1Score] + AppConstants.AllText;
            return AppConstants.Score[player1Score] + AppConstants.Comma + AppConstants.Score[player2Score];
        }
        return player1Score + " : " + player2Score;
    }

    isPlayer1OnePointGreaterThanPlayer2 = () => {
        const player1Score = this.props.player1Score, player2Score = this.props.player2Score;
        return player1Score === player2Score + 1;
    }

    isPlayer2OnePointGreaterThanPlayer1 = () => {
        const player1Score = this.props.player1Score, player2Score = this.props.player2Score;
        return player2Score === player1Score + 1;
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
    player2Score: PropTypes.number
}