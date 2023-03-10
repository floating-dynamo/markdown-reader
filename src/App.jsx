import { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MarkdownFile from "./components/MarkdownFile";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/preview" element={<MarkdownFile/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
