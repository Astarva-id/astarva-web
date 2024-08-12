import usePageRender from "@/hooks/usePageRender";
import { GlobalStyle } from "@/styles/global-styled";
import { Flex } from "astarva-ui";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  const { isReadyMounted } = usePageRender()

  return (
    <Flex>
      <GlobalStyle />
      {isReadyMounted && (
        <Component {...pageProps} />
      )}
    </Flex>
  )
}
