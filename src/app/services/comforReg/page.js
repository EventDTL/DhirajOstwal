"use client";
import React from "react";
import Link from "next/link";
import Services from "../Services";
import styles from "../main.module.css";

const CompanyFormation = () => {
  return (
    <div>
      <Services title={" Company Formation and Registration"} />
      <div className={styles.datacontainer}>
        <Link href="/services/comforReg/CompF" className={styles.data}>
          <h3>Company Formation</h3>
          <p>
            End-to-end support in incorporating and setting up new companies.
          </p>
        </Link>
        <Link href="/services/comforReg/BusReg" className={styles.data}>
          <h3>Bussiness Registration</h3>
          <p>
            Streamlined services for registering various forms of businesses.
          </p>
        </Link>
        <Link href="/services/comforReg/Shopact" className={styles.data}>
          <h3>Shop act</h3>
          <p>Assistance in obtaining and maintaining Shop Act licenses.</p>
        </Link>
        <Link href="/services/comforReg/MSME" className={styles.data}>
          <h3>Ministry of Micro, Small & Medium Enterprises</h3>
          <p>Guidance on MSME registration and accessing related benefits.</p>
        </Link>
        <Link href="/services/comforReg/PartReg" className={styles.data}>
          <h3>Partnership Registration</h3>
          <p>
            Efficient services for registering and formalizing business
            partnerships.
          </p>
        </Link>
        <div href="/services/comforReg/LLP" className={styles.data}>
          <h3>Limited Liability Partnership</h3>
          <p>
            Specialized support in forming and managing Limited Liability
            Partnerships.
          </p>
        </div>
        <Link href="/services/comforReg/NonProf" className={styles.data}>
          <h3>Non-Profit Company</h3>
          <p>
            Expert assistance in establishing and managing non-profit
            organizations.
          </p>
        </Link>
        <Link href="/services/comforReg/CharTrust" className={styles.data}>
          <h3>Charitable Trust</h3>
          <p>
            Comprehensive services for setting up and managing charitable
            trusts.
          </p>
        </Link>
        <Link href="/services/comforReg/Association" className={styles.data}>
          <h3>Association</h3>
          <p>
            Support in forming and registering various types of associations.
          </p>
        </Link>
      </div>
    </div>
  );
};

export default CompanyFormation;
