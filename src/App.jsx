import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header"
import SimpleBottomNavigation from './components/Navbar/Navbar';
import Container from '@mui/material/Container';
import Movie from "./pages/movies/Movies"
import Latest from "./pages/latest/Latest"
import Language from "./pages/languages/languages"
import Search from "./pages/Search/Search"
function App() {
  return (
    <>
    <BrowserRouter>
   
      <Header/>
      <div className="app">
       <Container className="text-black">
        <Routes>
          <Route path='/' element={<Movie/>} exact />
          <Route path='/latest' element={<Latest/>}></Route>
          <Route path='/language' element={<Language/>}></Route>
          <Route path='/search' element={<Search/>}></Route>
         
        </Routes>
       </Container>
      </div>
      <SimpleBottomNavigation/>
      </BrowserRouter>
    </>
    
  );
}

export default App;
