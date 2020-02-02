import React from 'react';
import { shallow } from 'enzyme';
import Scorer from '../component/Scorer';
import CheckPropTypes from 'check-prop-types';

describe(("<Scorer/> component no props"), () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(< Scorer />);
  });

  it("should render correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it("should have one heading, label", () => {
    expect(wrapper.find("h5").text()).toEqual("Score");
    expect(wrapper.find("label").length).toBe(1);
  });
});

describe(("<Scorer/> component with props"), () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(< Scorer player1Score={0} player2Score={0} isGameOver={() => { }} />);
  });

  it("should render correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it("should have one heading, label", () => {
    expect(wrapper.find("h5").text()).toEqual("Score");
    expect(wrapper.find("label").length).toBe(1);
  });
  describe(("checking prop types"), () => {
    it("should not throw a warning", () => {
      const expectedProps = {
        player1Score: 0,
        player2Score: 0,
        isGameOver: () => { }
      };
      const propsError = CheckPropTypes(Scorer.propTypes, expectedProps, 'props', Scorer.name);
      expect(propsError).toBeUndefined();
    });
  });
});