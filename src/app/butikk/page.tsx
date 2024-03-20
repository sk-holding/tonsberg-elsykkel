import { Metadata } from "next";
import Butikker from "@/components/butikk/Butikker";

export const metadata: Metadata = {
  title: "Butikk - Tønsberg elsykkel",
  description:
    "I vår flotte butikk i Tønsberg kan du prøvekjøre en av våre prisvinnende elsykler. Fulldemper, lastesykkel eller elsykkel for barn? Vi har noe for en hver. ",
};

const Page = () => {
  return (
    <main className="max-width">
      <div className="title-block">
        <h1>Våre butikker</h1>
        <h2>
          Kom innom vår flotte butikk i Tønsberg og prøvekjør en av våre
          prisvinnende elsykler.
        </h2>
      </div>
      <Butikker />
    </main>
  );
};

export default Page;
