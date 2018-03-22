import React from "react"
import renderer from "react-test-renderer"
import GoogleButton from "./GoogleButton"
import "jest-styled-components"

test("matching a snapshot of GoogleButton", () => {
  const component = renderer.create(<GoogleButton />)
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
