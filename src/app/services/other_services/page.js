"use client";
import React from "react";
import Link from 'next/link'
import Services from "../Services";
import styles from "../main.module.css";

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
