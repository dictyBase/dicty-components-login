external styleToString: ReactDOM.Style.t => string = "%identity"

module Styles = %makeStyles(
  theme => {
    button: ReactDOM.Style.make(
      ~paddingTop=`${theme.spacing(2)->string_of_int}px`,
      ~paddingBottom=`${theme.spacing(2)->string_of_int}px`,
      ~paddingLeft=`${theme.spacing(3)->string_of_int}px`,
      ~paddingRight=`${theme.spacing(3)->string_of_int}px`,
      ~textTransform=`none`,
      ~backgroundColor="#a6ce39",
      (),
    )->ReactDOM.Style.unsafeAddProp(
      "&:hover",
      ReactDOM.Style.make(~backgroundColor="#739d00", ())->styleToString,
    ),
    subtitle: ReactDOM.Style.make(~width="100%", ~color="#4D4D4D", ~fontWeight="600", ()),
  }
)

@genType @react.component
let make = (~text: string, ~handleClick: ReactEvent.Mouse.t => unit) => {
  let classes = Styles.useStyles()

  <MaterialUi_Button
    variant=#Contained
    size=#Large
    fullWidth={true}
    startIcon={<OrcidIcon />}
    className={classes.button}
    onClick={handleClick}>
    <MaterialUi_Typography
      className={classes.subtitle} variant=#Inherit align=#Center color=#TextSecondary>
      {text}
    </MaterialUi_Typography>
  </MaterialUi_Button>
}

let default = make
