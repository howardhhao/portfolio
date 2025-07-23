import "@/styles/globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import CustomCursor from "@/components/CustomCursor";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <CustomCursor />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
