import { storeQuery } from "@/lib/queries";
import { sanityFetch } from "@/lib/client";
import { Store } from "@/types";
import Card from "@/components/shared/Stores/_components/Card";
import styles from "./index.module.scss";

const Butikker = async () => {
  const query = storeQuery;
  const data = await sanityFetch<Store>({ query, tags: ["stores"] });

  return (
    <section className={styles.wrapper}>
      <div className={styles.inner}>
        {data.map((store: Store, idx: number) => {
          return (
            <Card
              key={idx}
              storeName={store.storeName}
              image={store.image}
              storeAddress={store.storeAddress}
              url={store.url}
            />
          );
        })}
      </div>
      <div>
        <a
          href="https://www.kajakk-fritid.no/butikker"
          className="button button_primary"
        >
          Se alle butikker
        </a>
      </div>
    </section>
  );
};

export default Butikker;
