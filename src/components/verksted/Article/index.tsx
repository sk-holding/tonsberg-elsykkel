import ArticleCard from "@/components/shared/ArticleCard";
import styles from "./index.module.scss";

const Article = () => {
  return (
    <section className={styles.wrapper}>
      <ArticleCard
        title="Reparasjon av din elsykkel"
        content="Trenger du service eller reparasjon for din elsykkel i Drammen? På E-Mexx Drammen er våre erfarne teknikere klare til å hjelpe deg. Vi har bred kompetanse innen elsykler og sørger for kvalitetsreparasjoner for alle produkter kjøpt hos oss. Vårt tjenestespekter omfatter alt fra enkle oppgaver som utskifting av punkterte dekk til vårklargjøring og full service. La vår profesjonelle assistanse sørge for at din elsykkel er i topp stand. Besøk oss i Drammen for den hjelpen du trenger."
        image="/images/mekaniker.jpg"
        url="https://e-mexx.no/book-service/"
        buttonText="Book service"
      />
    </section>
  );
};

export default Article;
