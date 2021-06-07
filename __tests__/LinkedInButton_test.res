open Jest;
open JestDom;
open ReactTestingLibrary;

let handleClick = (_: ReactEvent.Mouse.t) => ()

test("LinkedIn Button renders with expected text", () =>
  <LinkedInButton text="LinkedIn" handleClick={handleClick} />
  |> render
  |> getByRole(~matcher=#Str("button"))
  |> expect
  |> toHaveTextContent(#Str("LinkedIn"))
)
