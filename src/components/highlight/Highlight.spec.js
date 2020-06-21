import React from "react";
import { render } from "@testing-library/react";
import Highlight from "./Highlight";

describe("Highlight component", () => {
  const props = {
    text:'some data',
    highlight:'So',
    style:{
      fontWeight:700
    }
  };

  it("should render Highlight when highlight is present", () => {
    const {baseElement} = render(<Highlight {...props} />);

    expect(baseElement).toMatchSnapshot();
  });

  it("should not have mark tag when highlight is empty", () => {
    const newProps = {
      ...props,
      highlight: ''
    };
    const {baseElement} = render(<Highlight {...newProps} />);

    expect(baseElement.querySelector('mark')).not.toBeInTheDocument()
  });

});
