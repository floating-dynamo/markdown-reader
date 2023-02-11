import React, { useEffect } from "react";
import "./MarkdownFile.css";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useLocation, useNavigate } from "react-router-dom";

const MarkdownFile = () => {
  const location = useLocation();
  console.log(location.state.markdown);
  return (
    <div className="markdown-file">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {location.state.markdown}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownFile;
