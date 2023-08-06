import Head from "next/head";
import '../styles/globals.css';
import { ThemeProvider } from "next-themes";
import Footer from "../components/layouts/Footer";
import Header from "@/components/layouts/Header";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Head>
        <title>FriendsCraft Official</title>
        <link
          rel="icon"
          href="/img/banner.png"
        />
      </Head>
      <meta property="og:local" content="th_TH" />
      <meta property="og:type" content="article" />
      <meta
        property="og:title"
        content="เว็ปไซต์แสดงข่าวสารของกลุ่มเฟรนด์คราฟ - FriendsCraft Official"
      />
      <meta
        property="og:site_name"
        content="FriendsCraft - Official Website."
      />
      <meta
        property="og:description"
        content="สามารถเข้ามาดูกันได้ที่นี่เลย!!, อยากรู้อะไรเกี่ยวกับกลุ่มของเฟรนด์คราฟรวมไว้ที่นี่ทั้งหมดแล้วเหลือแค่พวกคุณกดเข้ามาดูแค่นั้นเอง!!"
      />
      <meta
        property="og:image"
        content="/img/banner.png"
      />
      <meta property="og:url" content="https://www.facebook.com/friendscraft.official" />
      <Header/>
      <Component {...pageProps} />
      <Footer/>
    </ThemeProvider>
  );
}
