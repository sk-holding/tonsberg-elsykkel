import styles from "./page.module.scss";

import Hero from "@/components/home/Hero";
import Bestsellers from "@/components/home/Bestsellers";
import Articles from "@/components/home/Articles";
import FeaturedBike from "@/components/home/FeaturedBike";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tønsberg elsykkel",
  description:
    "Velkommen til Kajakk & Fritid Tønsberg! Din lokale leverandør av elsykkel. Vi har elsykler for en hver. Fulldempet elsykkel, lastesykkel, elsykkel til barn, vi har det meste. Kom innom oss i dag!",
};

export const revalidate = 10;

const Page = () => {
  return (
    <main className={styles.wrapper}>
      <Hero />
      <Bestsellers />
      <Articles />
      <FeaturedBike />
    </main>
  );
};

export default Page;
