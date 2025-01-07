"use client";

import styles from "./index.module.scss";
import Navigation from "./_components/Navigation";
import { main, support } from "@/lib/menus";

const Footer = () => {
  return (
    <footer className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.header_inner}>
          <div>
            <img src="/images/logo_white.png" alt="E-Wheels logo" />
            <p>
              Siden 2004 har Kajakk og Fritid vært en pålitelig leverandør av
              førsteklasses utstyr til friluftsentusiaster over hele Norge. Fra
              dag én har vi vært forpliktet til å tilby et bredt spekter av
              produkter og tjenester samtidig som vi opprettholder en
              uovertruffen standard for kvalitet og kundeservice.
            </p>
          </div>
          <Navigation menu={main} title="Info" />
          <Navigation menu={support} title="Kontakt oss" />
        </div>
      </div>
      <div className={styles.footer}>
        <div className={`${styles.footer_inner} max-width`}>
          <p>Copyright © 2025 Kajakk og Fritid AS - All rights reserved</p>
          <ul>
            <li>
              <a href="https://www.facebook.com/kajakkogfritid">
                <img src="/icons/facebook.svg" alt="Facebook icon" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/kajakkogfritid/?hl=en">
                <img src="/icons/instagram.svg" alt="Instagram icon" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
