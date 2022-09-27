import { SessionProvider } from "next-auth/react";

function App({ Component, pageProps }) {
  return (
    <SessionProvider
      session={pageProps.session}
      basePath={`${process.env.NEXT_PUBLIC_PORTAL_BASE_PATH}/api/auth`}
    >
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default App;
