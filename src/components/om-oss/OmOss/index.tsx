import Link from "next/link";
import styles from "./index.module.scss";

const OmOss = () => {
  return (
    <section className={styles.wrapper}>
      <img src="/images/girl-with-bike.jpg" alt="" />
      <div>
        <h3>Vår historie</h3>
        <p>
          Med røtter tilbake til 2004, ble Kajakk og Fritid grunnlagt med en
          lidenskap for å tilby førsteklasses utstyr til friluftsentusiaster som
          elsker å utforske naturen. Vår visjon har alltid vært tydelig: å
          levere et bredt spekter av høykvalitetsprodukter og tjenester samtidig
          som vi prioriterer kundetilfredshet.
        </p>
        <p>
          Vi er stolte av å tilby et mangfoldig utvalg av utstyr for
          utendørsaktiviteter, fra el-sykler til SUP-brett og kajakker, nøye
          kuratert for å imøtekomme behovene til alle, uavhengig av erfaring
          eller ferdighetsnivå. Vår overbevisning om å tilby det beste utstyret
          til konkurransedyktige priser sikrer at våre kunder har uforglemmelige
          opplevelser når de utforsker naturen og alt den har å tilby.
        </p>
        <p>
          Vårt dedikerte team av ansatte deler en felles lidenskap for
          friluftsliv og besitter omfattende ekspertise som gjør oss i stand til
          å veilede våre kunder til å finne det perfekte utstyret for deres
          eventyr. Vi setter stor pris på den personlige servicen vi tilbyr og
          streber etter å gjøre hvert besøk til en positiv opplevelse for våre
          kunder.
        </p>
        <p>
          Opprinnelig startet vi vår reise i Drammen, men på grunn av økende
          etterspørsel har vi utvidet og åpnet flere butikker. Vi er nå til
          stede i Drammen, Tønsberg, Kristiansand, Lillehammer, Fredrikstad og
          Stavanger, og ser frem til å fortsette vår vekst og ekspansjon. Vårt
          hovedlager, kundeservice og administrasjon er sentralt plassert i
          nærheten av vår butikk i Drammen for å sikre en smidig drift.
        </p>
        <p>
          Februar 2024 markerer begynnelsen på en ny epoke for Kajakk & Fritid.
          Vi er stolte av vår nye butikk i Østfoldhallene, men enda mer spent på
          reisen som ligger foran oss. Sammen med våre kunder ser vi frem til å
          utforske naturen, skape minner og dele lidenskapen for det store
          utendørs.
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
