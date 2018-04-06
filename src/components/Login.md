```js
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
        marginBottom: "5px"
      }
    }
  }
}

const handleClick = name => {
  alert(`You clicked ${name}`)
  console.log(`You clicked ${name}`)
}

;<Login buttons={buttons} theme={theme} onClick={handleClick} />
```
