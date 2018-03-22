import React from "react"
import renderer from "react-test-renderer"
import OrcidButton from "./OrcidButton"
import "jest-styled-components"

test("matching a snapshot of OrcidButton", () => {
  const component = renderer.create(<OrcidButton />)
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
