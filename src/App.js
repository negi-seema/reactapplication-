import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Component/Home';
import Summery from './Component/Summery';
import Form from './Component/Form';
import Navbar from './Navbar';
import Success from './Component/Success'
import styled,{ThemeProvider} from 'styled-components'
import GlobalStyle from './Globalstyle';
import PageNotFound from './Component/PageNotFound';
function App() {
  const theme = { }
  return (
   <>
  <Wrapper>
  <ThemeProvider theme={theme}>
   <GlobalStyle/>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route  path='/' element={<Home/>} />
          <Route  path='/summery/:id/' element={<Summery/>} />
          <Route  path='/form/:id/' element={<Form/>} />
          <Route  path='/success' element={<Success/>} />
          <Route  path='/*' element={<PageNotFound/>} />
        </Routes>
      </BrowserRouter>
      </ThemeProvider>
  </Wrapper>
   </>
  );
}

const Wrapper = styled.section`
height:100vh;
`
export default App;
