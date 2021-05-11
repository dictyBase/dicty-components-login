%%raw(`
import React from "react"
import Button from "@material-ui/core/Button"
import SvgIcon from "@material-ui/core/SvgIcon"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"
import GoogleIcon from "./icons/GoogleIcon.bs"

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

const GoogleButton = ({ text, handleClick }) => {
  const classes = useButtonStyles()
  return (
    <Button
      variant="contained"
      size="large"
      fullWidth={true}
      startIcon={<GoogleIcon />}
      className={classes.button}
      onClick={handleClick}
    >
      <Typography
        variant="h6"
        align="center"
        color="textSecondary"
        className={classes.subtitle}
      >
        {text}
      </Typography>
    </Button>
  )
}

export default GoogleButton
`)