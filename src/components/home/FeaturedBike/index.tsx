import { featuredBikeQuery } from "@/lib/queries";
import styles from "./index.module.scss";
import { sanityFetch } from "@/lib/client";
import { FeaturedBike } from "@/types";
import Link from "next/link";

const FeaturedBike = async () => {
  const query = featuredBikeQuery;
  const bikes = await sanityFetch<FeaturedBike>({ query, tags: ["bikes"] });
  const bike = bikes[0];

  return (
    <section className={styles.wrapper}>
      <div className={`max-width ${styles.inner}`}>
        <div className={styles.imageWrapper}>
          <img src={bike.image} alt={bike.title} />
        </div>
        <div className={styles.content}>
          <h3>{bike.title}</h3>
          <div>
            {typeof bike.content === "object" ? (
              bike.content.map((block: any, idx: number) => (
                <p key={idx}>{block.children[0].text}</p>
              ))
            ) : (
              <p>{bike.content}</p>
            )}
          </div>
          <div>
            <Link className="button button_tertiary" href={bike.url}>
              {bike.buttonText}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedBike;
