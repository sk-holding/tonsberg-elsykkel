import styles from "./index.module.scss";
import { Article } from "@/types";
import Link from "next/link";

const ArticleCard: React.FC<Article> = (props) => {
  return (
    <div className={styles.wrapper} style={props.style}>
      <div>
        <img src={props.image} alt={props.title} />
      </div>
      <div>
        <p className={styles.title}>{props.title}</p>
        <div className={styles.content}>
          {typeof props.content === "object" ? (
            props.content.map((block: any, idx: number) => (
              <p key={idx}>{block.children[0].text}</p>
            ))
          ) : (
            <p>{props.content}</p>
          )}
        </div>
        <div>
          <Link className="button button_primary" href={props.url}>
            {props.buttonText}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
