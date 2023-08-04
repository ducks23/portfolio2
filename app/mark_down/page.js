"use client";
import React, { useState } from "react";
import "./style.css";
import ReactMarkdown from "react-markdown";

function TextBoxToDiv() {
  const [markdown, setMarkdown] = useState("");

  return (
    <div>
      <section className="markdown">
        <textarea
          className="input"
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
        ></textarea>
        <article className="result">
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </article>
      </section>
    </div>
  );
}

export default TextBoxToDiv;
