import { GlobalStyle } from "@/styles/global-styled";
import { Flex } from "astarva-ui";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Flex>
      <GlobalStyle />
      <Component {...pageProps} />
    </Flex>
  )
}
