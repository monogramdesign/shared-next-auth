import { SessionProvider } from "next-auth/react";

function App({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider
      session={session}
      basePath={`${process.env.NEXT_PUBLIC_PORTAL_BASE_PATH}/api/auth`}
    >
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default App;
