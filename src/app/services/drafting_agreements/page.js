import React from 'react'
import Link from 'next/link'
import Services from '../Services'
import styles from '../main.module.css'


export const generateMetadata = () => {
  return {
    title: "Drafting agreement",
    description:
      "We are the best CA firm in pune providing ",
    keywords: [
      "Company formation",
      "Company Registration"
    ],
    canonical:
      "https://www.cadhirajostwal.com/services/drafting_agreements",
  };
};

const DraftingAgreements = () => {

  return (
    <div>
        <Services title={"Drafting Agreements"} />
        <div className={styles.datacontainer}>
            <Link href={"/services/drafting_agreements/Drafting"} className={styles.data} >
            <h3>Drafting</h3>
            <p>Professional drafting services for various legal and business documents.</p>
            </Link>
            <Link href={"/services/drafting_agreements/PartDeed"} className={styles.data} >
            <h3>Partnership Deed</h3>
            <p>Expert drafting of partnership deeds tailored to your business needs.</p>  
            </Link>
            <Link href={"/services/drafting_agreements/AOA"} className={styles.data} >
            <h3>Article of Association</h3>
            <p>Precise drafting of Articles of Association for company incorporation.</p>   
            </Link>
            <Link href={"/services/drafting_agreements/MOA"} className={styles.data} >
            <h3>Memorandum of Association</h3>
            <p>Memorandum of Association is a legal document that explains why the organization was founded.</p>   
            </Link>
            <Link href={"/services/drafting_agreements/ShareAgree"} className={styles.data} >
            <h3>Shareholders Agreement</h3>
            <p>Crafting comprehensive shareholder agreements to protect all parties' interests.</p>   
            </Link>
            <Link href={"/services/drafting_agreements/DebentAgree"} className={styles.data} >
            <h3>Debentures Agreement</h3>
            <p>Specialized drafting of debenture agreements for debt instruments.</p>  
            </Link>
            <Link href={"/services/drafting_agreements/HirePurc"} className={styles.data} >
            <h3>Hire Purchase</h3>
            <p>Expert drafting of hire purchase agreements for asset acquisition.</p> 
            </Link>
            <Link href={"/services/drafting_agreements/LeaseDeed"} className={styles.data} >
            <h3>Lease Deed</h3>
            <p>Professional preparation of lease deeds for property transactions.</p>   
            </Link>
            <Link href={"/services/drafting_agreements/ContractAgree"} className={styles.data} >
            <h3>Contract and Agreement</h3>
            <p>Comprehensive drafting services for various business contracts and agreements.</p> 
            </Link>

        </div>
    </div>
  )
}

export default DraftingAgreements
