import React from 'react';
import { mount } from 'enzyme';
import TennisGame from "../component/TennisGame";
import Player from "../component/Player";
import Scorer from "../component/Scorer";

describe(("<TennisGame/> component"), () => {
  let wrapper, player1ScoreButton, player2ScoreButton;
  beforeEach(() => {
    wrapper = mount(< TennisGame />);
    player1ScoreButton = wrapper.find(Player).at(0).find("button");
    player2ScoreButton = wrapper.find(Player).at(1).find("button");
  });

  it("should render correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it("should have two players and one scorer", () => {
    expect(wrapper.find(Player).length).toBe(2);
    expect(wrapper.find(Scorer).length).toBe(1);
  });
  it("should increase the score of player on appropriate event", () => {
    player1ScoreButton.simulate('click');
    expect(wrapper.find(Scorer).props().player1Score).toBe(1);
    player2ScoreButton.simulate('click');
    expect(wrapper.find(Scorer).props().player2Score).toBe(1);
  });
});
describe(("<TennisGame/> Game functionality"), () => {
  let wrapper, scoreLabel, player1ScoreButton, player2ScoreButton;
  beforeEach(() => {
    wrapper = mount(< TennisGame />);
    scoreLabel = wrapper.find(Scorer).find("label");
    player1ScoreButton = wrapper.find(Player).at(0).find("button");
    player2ScoreButton = wrapper.find(Player).at(1).find("button");
  });

  it("On Game Start, Score Should be Love All", () => {
    expect(scoreLabel.text()).toEqual("Love all ");
  });
  it("On Player 1 Scores once, Score Should be Fifteen Love", () => {
    player1ScoreButton.simulate('click');
    expect(scoreLabel.text()).toEqual("Fifteen,Love ");
  });
  it("On Player 2 Scores once, Score Should be Love Fifteen", () => {
    player2ScoreButton.simulate('click');
    expect(scoreLabel.text()).toEqual("Love,Fifteen ");
  });
  it("On both Players Scores once, Score Should be Fifteen all", () => {
    player1ScoreButton.simulate('click');
    player2ScoreButton.simulate('click');
    expect(scoreLabel.text()).toEqual("Fifteen all ");
  });
  it("On both Player Scores twice, Score Should be Thirty all", () => {
    player1ScoreButton.simulate('click');
    player1ScoreButton.simulate('click');
    player2ScoreButton.simulate('click');
    player2ScoreButton.simulate('click');
    expect(scoreLabel.text()).toEqual("Thirty all ");
  });
  it("On Player 1 Scores twice and Player 2 Scores thrice, Score Should be Thirty,Forty", () => {
    player1ScoreButton.simulate('click');
    player1ScoreButton.simulate('click');
    player2ScoreButton.simulate('click');
    player2ScoreButton.simulate('click');
    player2ScoreButton.simulate('click');
    expect(scoreLabel.text()).toEqual("Thirty,Forty ");
  });
  it("On both Player Scores thrice, Score Should be Deuce", () => {
    player1ScoreButton.simulate('click');
    player1ScoreButton.simulate('click');
    player1ScoreButton.simulate('click');
    player2ScoreButton.simulate('click');
    player2ScoreButton.simulate('click');
    player2ScoreButton.simulate('click');
    expect(scoreLabel.text()).toEqual("Deuce ");
  });
  it("On Player 1 Scores five times and Player 2 Scores four times, Score Should be Advantage Player 1", () => {
    player1ScoreButton.simulate('click');
    player1ScoreButton.simulate('click');
    player1ScoreButton.simulate('click');
    player1ScoreButton.simulate('click');
    player1ScoreButton.simulate('click');
    player2ScoreButton.simulate('click');
    player2ScoreButton.simulate('click');
    player2ScoreButton.simulate('click');
    player2ScoreButton.simulate('click');
    expect(scoreLabel.text()).toEqual("Advantage Player 1 ");
  });
  it("On Player 1 Scores four times and Player 2 Scores five times, Score Should be Advantage Player 2", () => {
    player1ScoreButton.simulate('click');
    player1ScoreButton.simulate('click');
    player1ScoreButton.simulate('click');
    player1ScoreButton.simulate('click');
    player2ScoreButton.simulate('click');
    player2ScoreButton.simulate('click');
    player2ScoreButton.simulate('click');
    player2ScoreButton.simulate('click');
    player2ScoreButton.simulate('click');
    expect(scoreLabel.text()).toEqual("Advantage Player 2 ");
  });
  it("On Player 1 Scores four times, Score Should be Player 1 wins", () => {
    player1ScoreButton.simulate('click');
    player1ScoreButton.simulate('click');
    player1ScoreButton.simulate('click');
    player1ScoreButton.simulate('click');
    expect(scoreLabel.text()).toEqual("Player 1 wins ");
  });
});