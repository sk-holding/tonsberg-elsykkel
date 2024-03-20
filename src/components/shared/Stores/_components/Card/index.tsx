import { Store } from "@/types";
import styles from "./index.module.scss";

const Card: React.FC<Store> = (props) => {
  return (
    <a href={props.url}>
      <div className={styles.wrapper}>
        <img src={props.image} alt={props.storeName} />
        <div>
          <p>{props.storeName}</p>
          <p>{props.storeAddress}</p>
        </div>
      </div>
    </a>
  );
};

export default Card;
