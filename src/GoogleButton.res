%%raw(`
import { makeStyles } from "@material-ui/core/styles"
const useButtonStyles = makeStyles((theme) => ({
  button: {
    padding: theme.spacing(1.5, 3, 1.5, 3),
    textTransform: "none",
    backgroundColor: "#cfd8dc",
    "&:hover": {
      backgroundColor: "#cfd8dc"
    }
  },
  subtitle: {
    width: "100%"
  }
}))
`)

module Button = {
  @module("@material-ui/core/Button") @react.component
  external make: (
    ~variant: string=?,
    ~size: string=?,
    ~fullWidth: bool=?,
    ~startIcon: React.element=?,
    ~className: string=?,
    ~onClick: ReactEvent.Mouse.t => unit=?,
    ~children: 'children=?,
  ) => React.element = "default"
}

module Typography = {
  @module("@material-ui/core/Typography") @react.component
  external make: (
    ~variant: string=?,
    ~align: string=?,
    ~color: string=?,
    ~className: string=?,
    ~children: 'children=?,
  ) => React.element = "default"
}

@react.component
let make = (~text: string, ~handleClick: ReactEvent.Mouse.t => unit) => {
  // let classes = useButtonStyles()

  <Button
    variant="contained"
    size="large"
    fullWidth={true}
    startIcon={<GoogleIcon />}
    // className={classes.button}
    onClick={handleClick}>
    // className={classes.subtitle} is used in Typography
    <Typography variant="h6" align="center" color="textSecondary"> {text} </Typography>
  </Button>
}

let default = make
