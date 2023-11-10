import { type AppType } from "next/app";

import { api } from "~/utils/api";

import "~/styles/globals.css";

import { Open_Sans } from 'next/font/google'
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from '@clerk/themes';

//👇 Configure our font object
const openSans = Open_Sans({
  subsets: ['latin'],
})

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ClerkProvider appearance={{
      baseTheme: dark
    }}>
      <main className={openSans.className}>
        <Component {...pageProps} />
      </main>
    </ClerkProvider>
  );
};

export default api.withTRPC(MyApp);
