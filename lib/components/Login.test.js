import React from "react"
import { shallow, configure } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import Login from "./Login"
import Button from "@material-ui/core/Button"

configure({ adapter: new Adapter() })

describe("Login", () => {
  const props = {
    buttons: ["orcid", "google", "linkedin", "facebook"],
  }
  const wrapper = shallow(<Login {...props} />)
  describe("initial render", () => {
    it("renders without crashing", () => {
      expect(wrapper).toHaveLength(1)
    })
    it("always renders one div element", () => {
      expect(wrapper.find("div")).toHaveLength(1)
    })
    it("renders expected number of buttons based on props", () => {
      expect(wrapper.find(Button)).toHaveLength(4)
    })
  })
})
