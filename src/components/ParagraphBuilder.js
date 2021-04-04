import React from "react";
import { v4 as uuidv4 } from 'uuid';


function ParagraphBuilder({ text, list, qoute }) {
  return (
    <>
      <p className="font-weight-light">{text && text}</p>
      {list && (
        <ol className="list">
          {list.map((li) => (
            <li key={uuidv4()} className="list-item">{li}</li>
          ))}
        </ol>
      )}
      {qoute && <blockquote>{qoute}</blockquote>}
    </>
  );
}

export default ParagraphBuilder;
