import React from "react";
import renderer from "react-test-renderer";

import Header from "./Header";

describe("Header", () => {
  it("renders correctly", () => {
    const links = [
      {
        name: "hello",
        path: "/hello",
        id: "4"
      }
    ];
    const tree = renderer.create(<Header links={links} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
// testin
