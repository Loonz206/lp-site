import React from "react";
import renderer from "react-test-renderer";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";

import Layout from "./Layout";

describe("Layout", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Layout />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

test("do something simple", () => {
  render(<Layout />);

  expect(true).toBe(true);
});
