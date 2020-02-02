import React from 'react';
import { AppConstants } from '../constants/App.constants';
import PropTypes from 'prop-types';

export default class Scorer extends React.Component {
    updateScore = () => {
        const player1Score = this.props.player1Score, player2Score = this.props.player2Score;
        if (player1Score === 0 && player2Score === 0)
            return AppConstants.LoveAll;
        if (player1Score === 1 && player2Score === 0)
            return AppConstants.Player1ScoredOnce;
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