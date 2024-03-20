import { Bike } from "@/types";
import ProductCard from "@/components/shared/ProductCard";
import styles from "./index.module.scss";
import { bikeQuery } from "@/lib/queries";
import { sanityFetch } from "@/lib/client";

const Products = async () => {
  const query = bikeQuery;
  const data = await sanityFetch<Bike>({ query, tags: ["bikes"] });

  return (
    <section className={`${styles.wrapper} section`}>
      <div className={styles.inner}>
        {data.map((bike: Bike, idx: number) => {
          return (
            <ProductCard
              key={idx}
              title={bike.title}
              image={bike.image}
              description={bike.description}
              kf_url={bike.kf_url}
              price={bike.price}
            />
          );
        })}
      </div>
      <div className="button_container">
        <a
          href="https://www.kajakk-fritid.no/el-sykkel"
          className="button button_primary"
        >
          Se alle modeller
        </a>
      </div>
    </section>
  );
};

export default Products;
