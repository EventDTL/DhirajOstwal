import Carousel from "../components/home/Carousel";
import About from "../components/home/About";
import Youtube from "../components/home/Youtube";
import FollowUs from "../components/home/FollowUs";
import Achievements from "../components/home/Achievements";
import Award from "../components/home/Award"
import GalleryContainer from "./gallery/Gallery11"
import Employee from "../components/home/Employee"
import Head from "next/head";

export const generateMetadata = () => {
  return {
    title: "CA Dhiraj Ostwal",
    description:
      "We are the best CA firm in pune providing all services related to finance",
    keywords: [
      "CA dhiraj ostwal",
      "Best Ca firm in pune",
      "dhiraj ostwal",
      "Ca firm"
    ],
    canonical:
      "https://www.cadhirajostwal.com",
  };
};

export default function Home() {

  return (
    <div>
    <Head>
    <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "AccountingService",
            "name": "CA Dhiraj Ostwal",
            "url": "https://www.cadhirajostwal.com",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "2nd Floor, Shree Krishna, 7, Shirole Lane, opp. Kiosk Koffee, off Fergusson College Road, Shivajinagar, Pune, Maharashtra 411004",
              "city": "Pune",
              "postalCode": "411004",
              "country": "India"
            },
            "telephone": "+91 7020045454",
            "email": "dhiraj.ostwal@gmail.com",
            "openingHours": "Mo-sa 10:00-19:00",
            "offers": [
              {
                "@type": "Article",
                "name": "Income Tax Filing Service",
                "url": "https://www.cadhirajostwal.com/services/tax_services/IncomeTax"
              },
              {
                "@type": "Article",
                "name": "TDS Filing Service",
                "url": "https://www.cadhirajostwal.com/services/tax_services/TDS"
              },
              {
                "@type": "Article",
                "name": "GST Filing Service",
                "url": "https://www.cadhirajostwal.com/services/tax_services/GST"
              },
              {
                "@type": "Article",
                "name": "Company Formation Guide",
                "url": "https://www.cadhirajostwal.com/services/comforReg/CompF"
              },{
                "@type": "Article",
                "name": "MSME Guide",
                "url": "https://www.cadhirajostwal.com/services/comforReg/MSME"
              },{
                "@type": "Article",
                "name": "Tax Audit Service",
                "url": "https://www.cadhirajostwal.com/services/auditservices/TaxAudit"
              }
            ]
          }`}
        </script>
    </Head>
        <Carousel/>
        <About/>
        <Achievements/>
        <Youtube/> 
        <Employee/>
        <GalleryContainer/>  
        <Award/> 
        <FollowUs/>  
    </div>

  );
}
