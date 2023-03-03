import Header from "./components/Header";
import Home from "./components/Home";
import SelectedCountryPage from "./components/SelectedCountryPage";
import { Routes, Route } from "react-router-dom";
import { CountryContextProvider } from "./context/CountryContext";
import { ThemeProvider } from "./context/ThemeContext";

const App = () => {

  return (
    <ThemeProvider>
      <Header/>
        <Routes>
          <Route path="/" element={<CountryContextProvider><Home/></CountryContextProvider>}/>
          <Route path="/:name" element={<CountryContextProvider><SelectedCountryPage/></CountryContextProvider>}/>
        </Routes>
    </ThemeProvider>
  );
}

export default App;
