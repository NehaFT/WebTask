const StatsSection = () => {
  const stats = [
    {
      heading: "Lorem ipsum",
      value: "123+",
      subheading: "Lorem ipsum",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat",
    },
    {
      heading: "Lorem ipsum",
      value: "12+",
      subheading: "Lorem ipsum",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et",
    },
    {
      heading: "Lorem ipsum",
      value: "12+",
      subheading: "Lorem ipsum",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et",
    },
    {
      heading: "Lorem ipsum",
      value: "123",
      subheading: "Lorem ipsum",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut",
    },
  ];

  return (
    <div
      style={{
        backgroundColor: "#f8f9fb",
        padding: "60px 80px",
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      {stats.map((item, idx) => (
        <div key={idx} style={{ maxWidth: "220px", margin: "0 10px" }}>
          <div style={{ color: "#0a3866", fontSize: "14px", marginBottom: "8px" }}>
            {item.heading}
          </div>
          <div style={{ color: "#0a3866", fontSize: "36px", fontWeight: 700, margin: "0 0 5px" }}>
            {item.value}
          </div>
          <div style={{ color: "#0a3866", fontSize: "16px", fontWeight: 600, marginBottom: "10px" }}>
            {item.subheading}
          </div>
          <p style={{ fontSize: "14px", color: "#334", lineHeight: "1.5", margin: 0 }}>
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default StatsSection;
