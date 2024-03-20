import Map from "@/components/shared/Stores/_components/Map";
import { Metadata } from "next";
import Kontakt from "@/components/kontakt-oss/Kontakt";

export const metadata: Metadata = {
  title: "Kontakt - ",
  description: "",
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
