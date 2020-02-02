import React from 'react';
import { AppConstants } from '../constants/App.constants';
import PropTypes from 'prop-types';

export default class Scorer extends React.Component {
    render() {
        return (
            <div>
                <h5>{AppConstants.ScoreText}</h5>
                <label>{this.props.player1Score} : {this.props.player2Score}</label>
            </div>
        );
    }
}

Scorer.propTypes = {
    player1Score: PropTypes.number,
    player2Score: PropTypes.number
}