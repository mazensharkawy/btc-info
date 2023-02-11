import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

type Props = { link: string; buttonText: string };
function NavigationButton({ link, buttonText }: Props) {
  return (
    <Link to={link} className="navigation-button">
      <p>{buttonText}</p>
    </Link>
  );
}

export default NavigationButton;
