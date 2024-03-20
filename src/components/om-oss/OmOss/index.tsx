import Link from "next/link";
import styles from "./index.module.scss";

const OmOss = () => {
  return (
    <section className={styles.wrapper}>
      <img
        src="/images/om-oss-image.webp"
        alt="Syklist på en sti med en Momas Jason elsykkel"
      />
      <div>
        <h3>Vår historie</h3>
        <p>
          I vår butikk i hjertet av Tønsberg sentrum ønsker vi å tilby deg den
          beste opplevelsen når det gjelder elsykler. Vi er stolte av å
          presentere vårt testsenter for elsykler, hvor du kan prøvekjøre alle
          våre modeller i ulike terreng og forhold. Vår dedikerte stab av
          erfarne butikkmedarbeidere er tilgjengelige for å gi deg
          ekspertveiledning og hjelpe deg med å finne den perfekte elsykkelen
          som passer dine behov og preferanser.
        </p>
        <p>
          I tillegg til vårt omfattende utvalg av elsykler og tilbehør, tilbyr
          vi også et fullt serviceverksted for reparasjoner og vedlikehold av
          din elsykkel. Våre dyktige teknikere står klare til å utføre alt fra
          enkle reparasjoner til omfattende service, slik at du kan holde deg på
          veien og fortsette å nyte dine eventyr på to hjul. Du kan enkelt booke
          din time via vår nettside eller ved å kontakte oss direkte.
        </p>
        <p>
          Når du handler hos oss, kan du være trygg på en sikker og problemfri
          handel. Vi legger stor vekt på å skape en positiv og tillitsfull
          opplevelse for våre kunder, og vårt mål er å sikre at du får den beste
          oppfølgingen og støtten gjennom hele kjøpsprosessen. Velkommen til en
          verden av elsykkelopplevelser hos oss!
        </p>
        <p>Velkommen til Kajakk & Fritid - hvor eventyret begynner!</p>

        <Link href="/vare-sykler" className="button button_primary">
          Se våre elsykler
        </Link>
      </div>
    </section>
  );
};

export default OmOss;
