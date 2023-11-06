import "./App.css";
import PostalCode from "./components/PostalCode";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FetchData } from "./components/FetchData";

function App() {
  return (
    <>
      <h1></h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PostalCode />} />
          <Route path="/:countryName/:pCode" element={<FetchData />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
