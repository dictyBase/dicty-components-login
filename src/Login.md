```js
const buttons = ["orcid", "google", "linkedin"]

const handleClick = name => {
  alert(`You clicked ${name}`)
  console.log(`You clicked ${name}`)
}

;<Login buttons={buttons} onClick={handleClick} />
```
