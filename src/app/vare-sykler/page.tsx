import React from "react";
import Products from "@/components/vare-sykler/Products";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Våre sykler - ",
  description: "",
};

const Page = () => {
  return (
    <main className="max-width">
      <div className="title-block">
        <h1>Våre sykler</h1>
        <h2>
          Utforsk vårt mangfoldige utvalg, inkludert våre førsteklasses
          egenproduserte sykler fra Momas, Fosna og Avelo - flere ganger kåret
          til best i test.
        </h2>
      </div>
      <Products />
    </main>
  );
};

export default Page;
