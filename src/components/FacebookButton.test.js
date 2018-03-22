import React from "react"
import renderer from "react-test-renderer"
import FacebookButton from "./FacebookButton"
import "jest-styled-components"

test("matching a snapshot of FacebookButton", () => {
  const component = renderer.create(<FacebookButton />)
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
