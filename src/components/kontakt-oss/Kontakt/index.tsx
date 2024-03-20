import { location } from "@/lib/locations";
import styles from "./index.module.scss";

const Kontakt = () => {
  return (
    <section className={styles.wrapper}>
      <img src="/images/customer-service.jpg" alt="" />
      <div>
        <div className={styles.inner}>
          <h3>Telefonsupport</h3>
          <div className={styles.usp}>
            <img src="/icons/phone.svg" alt="phone icon" />
            <a href="tel:004722020022">22 02 00 22</a>
          </div>
          <p>Du når oss på telefon mandag - fredag mellom 10.00 og 14.00.</p>
        </div>
        <div className={styles.inner}>
          <h3>Mail</h3>
          <div className={styles.usp}>
            <img src="/icons/mail.svg" alt="mail icon" />
            <a href="mailto:hjelp@kajakk-fritid.no">hjelp@kajakk-fritid.no</a>
          </div>
          <p>
            Du kan også nå oss via{" "}
            <a
              href="https://kajakk-fritid.zendesk.com/hc/no/requests/new"
              target="_blank"
            >
              {" "}
              dette kontaktskjemaet
            </a>
            , så svarer vi deg i løpet av kort tid.
          </p>
        </div>
        <div className={styles.inner}>
          <h3>Butikk</h3>
          <div className={styles.usp}>
            <img src="/icons/house.svg" alt="house icon" />
            <a target="_blank" href={location.butikk}>
              Dikeveien 21B, 1661 Rolvsøy
            </a>
          </div>
          <p>
            Våre dyktige medarbeidere står klare til å ta deg i mot i vår flotte
            butikk.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Kontakt;
