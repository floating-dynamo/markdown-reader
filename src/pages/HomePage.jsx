import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import img1 from "../assets/img1.png";
import { useEffect, useState } from "react";

import "./HomePage.css";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [markdown, setMarkdown] = useState("");
  const [isUploaded, setIsUploaded] = useState(false);
  const [file, setFile] = useState([{ name: "" }]);
  const navigate = useNavigate();

  const previewMarkdown = () => {
    console.log(markdown);
    navigate("/preview", { state: { markdown: markdown } });
  };

  useEffect(() => {
    if (file[0].name !== "") {
      setIsUploaded(false);
    } else {
      setIsUploaded(true);
    }
    console.log(file[0].name);
    console.log(isUploaded);
  }, [file]);

  return (
    <div className="home">
      <h1 id="app-title">Markdown App</h1>
      <img className="my-avatar" src={img1} alt="sridhar" />
      <p>Upload your markdown file to preview it!</p>
      <label htmlFor="upload-file" id="upload-file-label">
        Select the File
        <br />
        <img
          src="https://cdn-icons-png.flaticon.com/512/1092/1092220.png"
          alt=""
          className="upload-icon"
        />
        {!isUploaded && <p className="selected-file">{file[0].name}</p>}
        <input
          accept=".md"
          type="file"
          id="upload-file"
          onChange={(event) => {
            setFile(Array.from(event.target.files));
            const reader = new FileReader();
            reader.onload = (event) => {
              setMarkdown(event.target.result);
            };
            reader.readAsText(Array.from(event.target.files)[0]);
          }}
        />
      </label>
      <button
        className="upload-file-btn"
        disabled={isUploaded}
        onClick={previewMarkdown}
      >
        View Markdown
      </button>
    </div>
  );
};

export default HomePage;
