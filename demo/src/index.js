import React, { Component } from "react"
import { render } from "react-dom"
import Grid from "@material-ui/core/Grid"
import Login from "../../src/components/Login"
import "typeface-roboto"

// array of buttons to display
const buttons = ["orcid", "google", "linkedin", "facebook"]

// renders Login component with buttons array
class Demo extends Component {
  handleClick = name => {
    alert(`You clicked ${name}`)
    console.log(`You clicked ${name}`)
  }
  render() {
    return (
      <Grid container justify="center">
        <Grid item xs={8}>
          <center>
            <h1>Log in</h1>
          </center>
          <Grid container style={{ textAlign: "center" }}>
            <Grid item xs={1} md={3} />
            <Grid item xs={10} md={6}>
              <Login buttons={buttons} onClick={this.handleClick} />
            </Grid>
            <Grid item xs={1} md={3} />
          </Grid>
        </Grid>
      </Grid>
    )
  }
}

render(<Demo />, document.querySelector("#demo"))
