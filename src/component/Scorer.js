import React from 'react';
import { AppConstants } from '../constants/App.constants';
import PropTypes from 'prop-types';

export default class Scorer extends React.Component {
    updateScore = () => {
        const player1Score = this.props.player1Score, player2Score = this.props.player2Score;
        if (player1Score <= 1 && player2Score <= 1) {
            if (player1Score === player2Score)
                return AppConstants.Score[player1Score] + AppConstants.AllText;
            return AppConstants.Score[player1Score] + AppConstants.Comma + AppConstants.Score[player2Score];
        }
        return player1Score + " : " + player2Score;
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