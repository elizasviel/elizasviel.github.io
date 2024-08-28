import { useEffect } from "react";
import { useNavigate } from "@remix-run/react";
import resumePdf from "../images/Norman Qian Resume 2024 V.1.pdf";

export default function Resume() {
  const navigate = useNavigate();

  useEffect(() => {
    window.location.href = resumePdf;
  }, []);

  return null;
}
