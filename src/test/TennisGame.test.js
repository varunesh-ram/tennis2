import React from 'react';
import { mount } from 'enzyme';
import TennisGame from "../component/TennisGame";
import Player from "../component/Player";
import Scorer from "../component/Scorer";

describe(("<TennisGame/> component"), () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(< TennisGame />);
  });

  it("should render correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it("should have two players and one scorer", () => {
    expect(wrapper.find(Player).length).toBe(2);
    expect(wrapper.find(Scorer).length).toBe(1);
  });
  it("should increase the score of player on appropriate event", () => {
    wrapper.find(Player).at(0).find("button").simulate('click');
    expect(wrapper.find(Scorer).props().player1Score).toBe(1);
    wrapper.find(Player).at(1).find("button").simulate('click');
    expect(wrapper.find(Scorer).props().player2Score).toBe(1);
  });
});