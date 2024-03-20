import React from "react";
import Products from "@/components/vare-sykler/Products";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Våre sykler - Tønsberg elsykkel",
  description:
    "Hos Kajakk & Fritid har vi noe for enhver smak! Ta en titt på en av våre prisvinnende elsykler og finn ditt neste eventyr hos oss.",
};

const Page = () => {
  return (
    <main className="max-width">
      <div className="title-block">
        <h1>Våre sykler</h1>
        <h2>
          Hos Kajakk & Fritid har vi noe for enhver smak! Ta en titt på en av
          våre prisvinnende elsykler og finn ditt neste eventyr hos oss.
        </h2>
      </div>
      <Products />
    </main>
  );
};

export default Page;
