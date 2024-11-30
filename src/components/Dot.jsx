export const Dot = ({ position }) => (
  <div
    style={{
      position: "absolute",
      top: position.top,
      left: position.left,
      width: "20px",
      height: "20px",
      borderRadius: "50%",
      backgroundColor: "red",
      cursor: "pointer",
      transform: "translate(-50%, -50%)", // Center the dot
    }}
  ></div>
);
