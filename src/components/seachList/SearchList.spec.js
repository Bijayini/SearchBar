import React from "react";
import { render } from "@testing-library/react";
import SearchList from "./SearchList";

describe("SearchList component", () => {
  const props = {
    text:'some data',
    highlight:'So',
    pointer:0,
    activeItem:{
      current:<li>dfghjk</li>
    },
    setPointer:jest.fn(),
    input:'Jo',
    lists:[
      {
            "id": "123-s2-546",
            'name': "John Jacobs",
            "items": ["bucket", "bottle", 'john'],
            "address": "1st Cross, 9th Main, abc Apartment",
            "pincode": "5xx012"
      }
    ]
  };

  it("should render SearchList when input is present", () => {
    const {baseElement} = render(<SearchList {...props} />);

    expect(baseElement).toMatchSnapshot();
  });

  it("should not have items when input is empty", () => {
    const newProps = {
      ...props,
      input: ''
    };
    const {baseElement} = render(<SearchList {...newProps} />);

    expect(baseElement.querySelector('.suggestion-item')).not.toBeInTheDocument();
  });

  it("should not have items when items are not having string", () => {
    const newProps = {
      ...props,
      input: 'Ja'
    };
    const {baseElement} = render(<SearchList {...newProps} />);

    expect(baseElement.querySelector('.suggestion-item')).not.toBeInTheDocument();
  });

});
