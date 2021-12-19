export default function NotFound() {
  return (
    <div style={styleDiv0}>
      <h1 style={styleH1}>404</h1>
      <div style={styleDiv1}>
        <h2 style={styleH2}>This page could not be found.</h2>
      </div>
    </div>
  );
}

const styleDiv0: object = {
  display: "block",
};

const styleH1: object = {
  display: "inline-block",
  borderRight: "1px solid rgba(0, 0, 0,.3)",
  margin: 0,
  marginRight: "20px",
  padding: "10px 23px 10px 0",
  fontSize: "24px",
  fontWeight: 500,
  verticalAlign: "top",
};

const styleDiv1: object = {
  display: "inline-block",
  textAlign: "left",
  lineHeight: "49px",
  height: "49px",
  verticalAlign: "middle",
};

const styleH2: object = {
  fontSize: "14px",
  fontWeight: "normal",
  lineHeight: "inherit",
  margin: 0,
  padding: 0,
};
