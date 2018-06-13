import React, { Component } from "react"
import { render } from "react-dom"
import Grid from "@material-ui/core/Grid"
import Login from "../../src/components/Login"
import { Container } from "../../src/styles/Container"

// array of buttons to display
const buttons = ["orcid", "google", "linkedin", "facebook"]

const theme = {
  overrides: {
    MuiButton: {
      // name of the styleSheet
      root: {
        // name of the rule
        borderRadius: 3,
        color: "white",
        width: "80%",
        justifyContent: "start",
        minHeight: "55px",
        marginBottom: "5px",
      },
    },
  },
}

// renders Login component with buttons array
class Demo extends Component {
  handleClick = name => {
    alert(`You clicked ${name}`)
    console.log(`You clicked ${name}`)
  }
  render() {
    return (
      <Container>
        <Grid container justify="center">
          <Grid item xs={9} sm={9} md={6} lg={6}>
            <Grid container justify="center">
              <Grid item xs={9}>
                <Login
                  buttons={buttons}
                  theme={theme}
                  onClick={this.handleClick}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    )
  }
}

render(<Demo />, document.querySelector("#demo"))
