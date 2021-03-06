import React from 'react';
import { shallow } from 'enzyme';
import Player from '../component/Player';
import CheckPropTypes from 'check-prop-types';

describe(("<Player/> component no props"), () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(< Player />);
  });

  it("should render correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it("should display default heading", () => {
    expect(wrapper.find("h5").text()).toEqual("Props not passed");
    expect(wrapper.find("button").length).toBe(0);
  });
});

describe(("<Player/> component with props"), () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(< Player name="Player 1" updateScore={() => { }} isGameOver={false} />);
  });

  it("should render correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it("should have passed heading from props", () => {
    expect(wrapper.find("h5").text()).toEqual("Player 1");
  });
  it("should display button for scoring", () => {
    expect(wrapper.find("button").length).toBe(1);
  });
  it("should have one heading and no button on gameover", () => {
    wrapper = shallow(< Player name="Player 1" updateScore={() => { }} isGameOver={true} />);
    expect(wrapper.find("h5").text()).toEqual("Player 1");
    expect(wrapper.find("button").length).toBe(0);
  });

  describe(("checking prop types"), () => {
    it("should not throw a warning", () => {
      const expectedProps = {
        name: "Player 2",
        updateScore: () => { },
        isGameOver: false
      };
      const propsError = CheckPropTypes(Player.propTypes, expectedProps, 'props', Player.name);
      expect(propsError).toBeUndefined();
    });
  });
});