import { useState } from "react";
import "./index.css";

export default function AccordionItem({ num, title, text }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`item ${isOpen ? "open" : ""}`}
      onClick={() => setIsOpen((open) => !open)}
    >
      <p className="number">{num < 9 ? `0${num}` : num}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen && (
        <div className="content-box">
          <p>{text}</p>
        </div>
      )}
    </div>
  );
}
