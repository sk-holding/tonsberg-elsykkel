interface Map {
  location: string;
}

const Map: React.FC<Map> = ({ location }) => {
  return (
    <div>
      <iframe
        src={location}
        width="100%"
        height="450"
        loading="lazy"
        style={{ border: "none" }}
        title="map"
        aria-hidden="true"
      ></iframe>
    </div>
  );
};

export default Map;
