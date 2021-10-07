import "./loader.css";

export const Loader = (props) => {
  const { className, style } = props;
  return (
    <div className={className || ""} style={style || {}}>
      <div className="container py-3" style={{ width: "max-content" }}>
        <div className="loader"></div>;
      </div>
    </div>
  );
};
