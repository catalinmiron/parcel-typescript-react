import React from "react";
import { shallow } from "enzyme";

import Root, {Greeting} from "./index";

it("renders the heading", () => {
    const result = shallow(<Root name="Catalin" />).contains(<Greeting>Zalut, Catalin!</Greeting>);
    expect(result).toBeTruthy();
});