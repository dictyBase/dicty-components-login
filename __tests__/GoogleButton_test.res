open Jest;
open JestDom;
open ReactTestingLibrary;

let handleClick = (_: ReactEvent.Mouse.t) => ()

test("Google Button renders with expected text", () =>
  <GoogleButton text="Google" handleClick={handleClick} />
  |> render
  |> getByRole(~matcher=#Str("button"))
  |> expect
  |> toHaveTextContent(#Str("Google"))
)
