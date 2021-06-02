module Styles = %makeStyles(
  theme => {
    button: ReactDOM.Style.make(
      ~paddingTop=`${theme.spacing(2)->string_of_int}px`,
      ~paddingBottom=`${theme.spacing(2)->string_of_int}px`,
      ~paddingLeft=`${theme.spacing(3)->string_of_int}px`,
      ~paddingRight=`${theme.spacing(3)->string_of_int}px`,
      ~textTransform=`none`,
      ~backgroundColor="#1565c0",
      (),
    ),
    subtitle: ReactDOM.Style.make(~width="100%", ~color="#fff", ()),
  }
)

@react.component
let make = (~text: string, ~handleClick: ReactEvent.Mouse.t => unit) => {
  let classes = Styles.useStyles()

  <MaterialUi_Button
    variant=#Contained
    size=#Large
    fullWidth={true}
    startIcon={<LinkedInIcon />}
    className={classes.button}
    onClick={handleClick}>
    <MaterialUi_Typography
      className={classes.subtitle} variant=#H6 align=#Center color=#TextSecondary>
      {text}
    </MaterialUi_Typography>
  </MaterialUi_Button>
}

let default = make
