// ModalComponent.js
"use client"; // This ensures the component uses client-side rendering

import React, { useState } from "react";
import Modal from "../services/Enquery";
import styles from "../styles/Blog.module.css";

const ModalComponent = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <>
    <div className={styles.Ads} >
    <div className={styles.blogButton}>
        <div className={styles.whatsappButton}>
          <button
            className={styles.blogBtn}
            onClick={() =>
              window.open(
                "https://calendar.app.google/PFzcBiidS59cvDgT9",
                "_blank",
                "noopener noreferrer"
              )
            }
          >
            <img
              width="25"
              height="25"
              src="https://img.icons8.com/color/48/whatsapp--v1.png"
              alt="whatsapp"
            />
            Connect with WhatsApp
          </button>
        </div>
        <div className={styles.appointmentButton}>
          <button
            className={styles.blogBtn}
            onClick={() => setModalOpen(true)}
          >
            <img
              width="25"
              height="25"
              src="https://img.icons8.com/color/48/tear-off-calendar--v1.png"
              alt="appointment"
            />
            Book an Appointment
          </button>
        </div>
      </div>
    </div>      
      {isModalOpen && <Modal closeModal={() => setModalOpen(false)} />}
    </>
  );
};

export default ModalComponent;