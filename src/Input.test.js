import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr, checkProps } from "../test/testUtils";
import Input from "./Input";

const setup = (secretWord = "party") => {
  return shallow(<Input />);
};

test("Input component renders without any error", () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, "component-input");
  expect(component.length).toBe(1);
});

test("does not throw any warning with expected props", () => {
  checkProps(Input, { secretWord: "party" });
});
