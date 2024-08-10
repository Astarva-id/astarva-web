import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import { Box, Flex } from "astarva-ui";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Flex>
          <Flex flexDirection="column" backgroundColor="red10" padding="1rem">
            <Box as="p">
              Get started by editing&nbsp;
            </Box>
            <Box>
              <Box
                as="a"
                href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/vercel.svg"
                  alt="Vercel Logo"
                
                  width={100}
                  height={24}
                  priority
                />
              </Box>
            </Box>
          </Flex>
          <Flex flexDirection="column" backgroundColor="red10" padding="1rem">
            <Box as="p">
              Get started by editing&nbsp;
            </Box>
            <Box>
              <Box
                as="a"
                href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/vercel.svg"
                  alt="Vercel Logo"
                
                  width={100}
                  height={24}
                  priority
                />
              </Box>
            </Box>
          </Flex>
          <Flex flexDirection="column" backgroundColor="red10" padding="1rem">
            <Box as="p">
              Get started by editing&nbsp;
            </Box>
            <Box>
              <Box
                as="a"
                href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/vercel.svg"
                  alt="Vercel Logo"
                
                  width={100}
                  height={24}
                  priority
                />
              </Box>
            </Box>
          </Flex>
        </Flex>
      </main>
    </>
  );
}
