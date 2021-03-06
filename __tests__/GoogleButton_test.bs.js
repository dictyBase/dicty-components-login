// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Jest from "@glennsl/bs-jest/src/jest.bs.js";
import * as Curry from "@rescript/std/lib/es6/curry.js";
import * as React from "react";
import * as JestDom from "bs-jest-dom/src/JestDom.bs.js";
import * as ReactTestingLibrary from "@tomvardasca/rescript-react-testing-library/src/ReactTestingLibrary.bs.js";
import * as GoogleButton$DictyComponentsLogin from "../src/GoogleButton.bs.js";

function handleClick(param) {
  
}

Jest.test("Google Button renders with expected text", (function (param) {
        var partial_arg = {
          NAME: "Str",
          VAL: "Google"
        };
        var arg = function (param) {
          return JestDom.toHaveTextContent(partial_arg, param);
        };
        var partial_arg$1 = {
          NAME: "Str",
          VAL: "button"
        };
        var arg$1 = function (param, param$1) {
          return ReactTestingLibrary.getByRole(partial_arg$1, param, param$1);
        };
        return Curry._2(arg, undefined, expect(Curry._2(arg$1, undefined, ReactTestingLibrary.render(undefined, undefined, undefined, undefined, undefined, React.createElement(GoogleButton$DictyComponentsLogin.make, {
                                    text: "Google",
                                    handleClick: handleClick
                                  })))));
      }));

export {
  handleClick ,
  
}
/*  Not a pure module */
