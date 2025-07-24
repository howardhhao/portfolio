import "@/styles/globals.css";
import CustomCursor from "@/components/CustomCursor";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true, 
    });
  }, []);

  return (
    <>
      <CustomCursor />
      <Component {...pageProps} />
    </>
  );
}
