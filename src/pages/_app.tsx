import { type AppType } from "next/app";

import { api } from "~/utils/api";

import "~/styles/globals.css";

import { Noto_Serif } from 'next/font/google'

//👇 Configure our font object
const notoSerif = Noto_Serif({
  subsets: ['latin'],
})

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <main className={notoSerif.className}>
      <Component {...pageProps} />;
    </main>
  );
};

export default api.withTRPC(MyApp);
