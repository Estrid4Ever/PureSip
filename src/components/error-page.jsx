import { useRouteError } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);
  //lala

  return (
    <>
      <Header />
      <div id="error-page">
        <h1>Ojdå!</h1>
        <p>Något gick fel.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
      <Footer />
    </>
  );
}