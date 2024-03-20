import dynamic from "next/dynamic";

const Map = dynamic(
  () => import("@/components/shared/Stores/_components/Map"),
  { ssr: false }
);

interface Store {
  title?: string;
  description?: string;
  location: string;
  button?: {
    href: string;
    content: string;
  };
}

const Stores: React.FC<Store> = (props) => {
  return (
    <section className="max-width section">
      <div>
        <h3>{props.title}</h3>
        <h4>{props.description}</h4>
      </div>
      <Map location={props.location} />
      {props.button ? (
        <div style={{ margin: "auto" }}>
          <a href={props.button.href} className="button button_primary">
            {props.button.content}
          </a>
        </div>
      ) : null}
    </section>
  );
};

export default Stores;
