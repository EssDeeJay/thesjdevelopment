import Head from "next/head";
import Announcement from "./announcement";
import Navbar from "./navbar";
import Footer from "./footer";
import PopupWidget from "../components/popupWidget";

export const siteTitle = 'The SJ Development | Shopify Experts'

export default function Layout({ children }) {
    return (
        <div>
            <Head>
                <link rel="icon" href="img/thesjlogo.svg" />
                <meta charset="utf-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="website" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-J0J6VSXH6T"></script>
                <script type="text/javascript" dangerouslySetInnerHTML={{ __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                  
                    gtag('config', 'G-J0J6VSXH6T');
                
                `}} />
            </Head>
            <Announcement />
            <Navbar />
            <main>
                {children}
            </main>
            <Footer />
            <PopupWidget />
        </div>
    )
}