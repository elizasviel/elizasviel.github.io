import { useEffect } from "react";
import resumePdf from "../images/Norman Qian Resume 2024 V.1.pdf";

export default function Resume() {
  useEffect(() => {
    window.location.href = resumePdf;
  }, []);

  return null;
}
