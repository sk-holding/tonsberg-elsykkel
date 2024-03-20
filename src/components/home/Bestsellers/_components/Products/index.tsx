import { Bike } from "@/types";
import { sanityFetch } from "@/functions/getData";
import styles from "./index.module.scss";
import ProductCard from "@/components/shared/ProductCard";
import { featuredBikesQuery } from "@/lib/queries";

const Products = async () => {
  const query = featuredBikesQuery;
  const data = await sanityFetch(query);

  return (
    <div className={styles.wrapper}>
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
  );
};

export default Products;
