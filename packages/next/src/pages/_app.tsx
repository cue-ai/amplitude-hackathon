import { type AppType } from "next/dist/shared/lib/utils";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "@/Theme";
import "@/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {

  return <ChakraProvider><Component {...pageProps} /> </ChakraProvider>;
};

export default MyApp;
