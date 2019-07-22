import React from "react"
import { shallow, configure } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import Login from "./Login"
import { StyledButton } from "./loginStyles"

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
    it("renders expected number of buttons based on props", () => {
      expect(wrapper.find(StyledButton)).toHaveLength(4)
    })
  })
})
