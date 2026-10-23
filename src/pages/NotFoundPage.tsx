import { Link } from "react-router-dom";

/** Mirrors Components/Pages/NotFound.razor */
export default function NotFoundPage() {
  return (
    <article className="inner-page case-page">
      <h1>Page not found</h1>
      <p>
        <Link to="/">Back to work</Link>
      </p>
    </article>
  );
}
