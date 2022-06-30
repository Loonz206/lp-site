import React from "react";
import renderer from "react-test-renderer";
import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent } from "@testing-library/react";

import Layout from "./Layout";

describe("Layout", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Layout />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("the header to toggle the UI", () => {
    render(<Layout />);
    // Arrange
    expect(document.querySelector("#wrap")).toHaveClass("wrap");
    // Act
    fireEvent.click(document.querySelector(".menu-link"));
    // Assert
    expect(document.querySelector("#wrap")).toHaveClass("wrap active");
  });
});
