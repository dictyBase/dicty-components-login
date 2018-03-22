import React from "react"
import renderer from "react-test-renderer"
import LinkedInButton from "./LinkedInButton"
import "jest-styled-components"

test("matching a snapshot of LinkedInButton", () => {
  const component = renderer.create(<LinkedInButton />)
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
