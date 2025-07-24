import "@/styles/globals.css";
import CustomCursor from "@/components/CustomCursor";
import SpotlightWrapper from "@/components/SpotlightWrapper";

export default function App({ Component, pageProps }) {
  return (
    <SpotlightWrapper>
      <CustomCursor />
      <Component {...pageProps} />
    </SpotlightWrapper>
      
  );
}
