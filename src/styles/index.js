import { injectGlobal } from "styled-components"

// these are the styles injected into every page of the app
injectGlobal([
  `
  *, :after, :before {
      box-sizing: border-box;
  }
  
  body {
      font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
      font-size: 14px;
      line-height: 1.42857;
      color: #333;
      background-color: #fff;
      margin: auto;
  
      h1, h2, h3, h4, h5, h6 {
          font-family: inherit;
          font-weight: 500;
          line-height: 1.1;
          color: inherit;
      }
  
      h4, h5, h6 {
          margin-top: 10px;
          margin-bottom: 10px;
      }
  
      h4 {
          font-size: 18px;
      }
  
      h5 {
          font-size: 14px;
      }
  }
  
  a {
      color: #337ab7;
      text-decoration: none;
  }
  `
])
