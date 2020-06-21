import React from "react";
import { render, act, fireEvent } from "@testing-library/react";
import SearchBar from "./SearchBar";

let component;
global.fetch = jest.fn(() => Promise.resolve({ json: () => [{
    "id": "123-s2-546",
    "name": "John Jacobs",
    "items": ["bucket", "bottle"],
    "address": "1st Cross, 9th Main, abc Apartment",
    "pincode": "5xx012"
  }]
}));

beforeEach(async() => {
  await act(async () => {
    component = render(<SearchBar />).container;
  });
});

describe("SearchBar component", () => {
  it("should render SearchBar without lists", () => {
    expect(component).toMatchSnapshot();
  });
});
