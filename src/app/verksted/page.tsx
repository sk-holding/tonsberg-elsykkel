import Stores from "@/components/shared/Stores";
import Article from "@/components/verksted/Article";
import { Metadata } from "next";
import { location } from "@/lib/locations";

export const metadata: Metadata = {
  title: "Verksted - ",
  description: "",
};

const Page = () => {
  return (
    <main className="max-width">
      <div className="title-block">
        <h1>Verksted</h1>
        <h2>
          Våre dyktige mekanikere står klare til å hjelpe deg med reperasjon av
          din elsykkel.
        </h2>
      </div>
      <Article />
      <Stores
        title="E-Mexx Kristiansand"
        description="Vårt verksted finner du i Kjøita 19"
        location={location.verksted}
        button={{
          href: "https://e-mexx.no/verksteder/kristiansand/",
          content: "Se verksted",
        }}
      />
    </main>
  );
};

export default Page;
