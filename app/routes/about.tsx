import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "About Us" },
    { name: "description", content: "Learn more about our company" },
  ];
};

export default function About() {
  return (
    <div>
      <h1>About Us</h1>
      <p>This is the about page of our website.</p>
    </div>
  );
}
