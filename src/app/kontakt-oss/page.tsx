import Map from "@/components/shared/Stores/_components/Map";
import { Metadata } from "next";
import Kontakt from "@/components/kontakt-oss/Kontakt";

export const metadata: Metadata = {
  title: "Kontakt - Tønsberg elsykkel",
  description:
    "Hos oss i Kajakk & Fritid kan du være trygg på at du blir tatt godt vare på. Våre flinke medarbeidere står klare til å hjelpe deg med det du lurer på. Kontakt oss i dag enten via telefon, epost eller kontaktskjema.",
};

const Page = () => {
  return (
    <main className="max-width">
      <div className="title-block">
        <h1>Kontakt oss</h1>
        <h2>
          Noe du lurer på? Ta kontakt med oss eller sjekk ut vårt{" "}
          <a href="https://www.kajakk-fritid.no/kontaktoss">kundesenter</a>
        </h2>
      </div>
      <Kontakt />
    </main>
  );
};

export default Page;
