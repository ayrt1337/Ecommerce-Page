import Content from './components/content';
import { createGlobalStyle } from 'styled-components';

function App() {
  return (
    <>
      <GlobalStyle />
      <Content />
    </>
  )
}

const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    color: inherit;
    box-sizing: border-box;
    list-style: none;
    font-family: "Kumbh Sans", sans-serif;
  }
  
  body, html, #root{
    min-height: 100vh;
  }

  #root{
    position: relative;
  }
`

export default App;
