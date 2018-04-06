import React from "react"
import Login from "./Login"
import renderer from "react-test-renderer"

jest.mock("react-dom", () => ({
  findDOMNode: () => ({})
}))

const buttons = ["orcid", "google", "linkedin", "facebook"]

test("matching a snapshot of Login", () => {
  const component = renderer.create(<Login buttons={buttons} />)
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
