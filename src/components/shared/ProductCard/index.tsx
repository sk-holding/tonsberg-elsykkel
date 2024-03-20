import { Bike } from "@/types";
import styles from "./index.module.scss";

const ProductCard: React.FC<Bike> = (props) => {
  let priceInNOK = new Intl.NumberFormat("no-nb", {
    style: "currency",
    currency: "NOK",
    maximumSignificantDigits: 6,
  });

  return (
    <a href={props.kf_url}>
      <div className={styles.wrapper}>
        <img src={props.image} alt={props.title} />
        <div>
          <p className={styles.title}>{props.title}</p>
          <p className={styles.description}>{props.description}</p>
          <p className={styles.price}>{priceInNOK.format(props.price)}</p>
        </div>
      </div>
    </a>
  );
};

export default ProductCard;
