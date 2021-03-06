import React from "react";
// import { shallow } from "enzyme";
import { mount } from "enzyme";
import { findByTestAttr } from "../test/testUtils";
import App from "./App";
import hookActions from "./actions/hookActions";

const mockGetSecretWord = jest.fn();

/**
 * Setup function for app component.
 * @returns {ReactWrapper}
 */

const setup = () => {
  mockGetSecretWord.mockClear();
  hookActions.getSecretWord = mockGetSecretWord;

  return mount(<App />);
  // use mount, because useEffect is not called on 'shallow'
};

test("App renders without error", () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, "component-app");
  expect(component.length).toBe(1);
});

describe("getSecretWord calls", () => {
  test("getSecretWord gets called on App mount", () => {
    setup();

    // check to see if secret word was updated
    expect(mockGetSecretWord).toHaveBeenCalled();
  });
  test("secret word does not update on App update", () => {
    const wrapper = setup();
    mockGetSecretWord.mockClear();

    // wrapper.update() doesn't trigger update
    wrapper.setProps();

    expect(mockGetSecretWord).not.toHaveBeenCalled();
  });
});
