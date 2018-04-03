import React from "react"
import { render } from "react-dom"
import Grid from "material-ui/Grid"
import Login from "../../src/components/Login"
import { Container } from "../../src/styles/Container"

// array of buttons to display
const buttons = ["orcid", "google", "linkedin", "facebook"]

// renders Login component with buttons array as well as size/variant props for use with Material-UI
const Demo = () => {
  return (
    <Container>
      <Grid container justify="center">
        <Grid item xs={9} sm={9} md={6} lg={6}>
          <Grid container justify="center">
            <Grid item xs={9}>
              <Login buttons={buttons} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  )
}

render(<Demo />, document.querySelector("#demo"))
