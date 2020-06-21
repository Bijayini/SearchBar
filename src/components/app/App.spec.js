import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

jest.mock('../header/Header', () => () => (
  <div>Header</div>
));
jest.mock('../searchBar/SearchBar', () => () => (
  <div>Search Bar</div>
));

describe("App component", () => {
  it("should render App", () => {
    const {baseElement} = render(<App/>);

    expect(baseElement).toMatchSnapshot();
  });
});
