import React from "react";
import Link from 'next/link'
import Services from "../Services";
import styles from "../main.module.css";

export const generateMetadata = () => {
  return {
    title: "Co-operative trust",
    description:
      "We are the best CA firm in pune providing Co-operative trust registration",
    keywords: [
      "Co-operative trust",
      "Services"
    ],
    canonical:
      "https://www.cadhirajostwal.com/services/other_services",
  };
};


const OtherServices = () => {
  return (
    <div>
      <Services title={"Other Services"} />
      <div className={styles.datacontainer}>
        <Link
          href="/services/other_services/CoperativeTrust"
          className={styles.data}
        >
          <h3>Co-operative trust</h3>
          <p>
            Specialized guidance in forming and managing co-operative trusts.
          </p>
        </Link>
      </div>
    </div>
  );
};

export default OtherServices;
