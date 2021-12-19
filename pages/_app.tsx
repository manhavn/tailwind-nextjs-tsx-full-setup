import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import store from "../root/store";
import Footer from "../components/footer";
import Header from "../components/header";
import Toast from "../components/toast";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Header />
      <Toast />
      <div className={"overflow-auto mt-20 grid justify-center"}>
        <Component {...pageProps} />
        <Footer />
      </div>
    </Provider>
  );
}
