import { redirect } from "@remix-run/node";
import type { LoaderFunction } from "@remix-run/node";
import resumePdf from "../images/Norman Qian Resume 2024 V.1.pdf";

export const loader: LoaderFunction = async () => {
  return redirect(resumePdf);
};

export default function Resume() {
  return null;
}
