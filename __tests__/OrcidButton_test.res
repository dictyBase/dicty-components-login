open Jest;
open JestDom;
open ReactTestingLibrary;

let handleClick = (_: ReactEvent.Mouse.t) => ()

test("ORCID Button renders with expected text", () =>
  <OrcidButton text="ORCID" handleClick={handleClick} />
  |> render
  |> getByRole(~matcher=#Str("button"))
  |> expect
  |> toHaveTextContent(#Str("ORCID"))
)
