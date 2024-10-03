import Navbar from "@/component/Navbar";
import "@/styles/globals.css";
import "../styles/NavbarCSS.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar></Navbar>
      <Component {...pageProps} />
    </>
  );
}
