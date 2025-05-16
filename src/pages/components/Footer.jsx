import {
  Facebook,
  Linkedin,
  Instagram,
  Twitter,
  Youtube,
  Search,
} from "lucide-react";
import { FOOTER_LOCATION_CONST } from "../constants/webPage.constants";

const Footer = () => {
  return (
    <div
      style={{
        backgroundColor: "#0a3866",
        color: "white",
        fontFamily: "Segoe UI, sans-serif",
        padding: "40px 60px 20px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          marginBottom: "30px",
        }}
      >
        {/* Contact Us */}
        <div style={{ maxWidth: "300px", marginBottom: "20px" }}>
          <h3 style={{ fontSize: "16px", marginBottom: "10px" }}>Contact us</h3>
          <p style={{ fontSize: "14px", margin: "6px 0" }}>
            Address: amet, consetetur sadipscing elitr, sed diam
          </p>
          <p style={{ fontSize: "14px", margin: "6px 0" }}>
            Email id: eirmod tempor invidunt ut labore et dolore
          </p>
          <p style={{ fontSize: "14px", margin: "6px 0" }}>
            Phone no: <strong>123456789</strong>
          </p>
        </div>

        {/* Social Icons */}
        <div style={{ textAlign: "center", marginBottom: "20px" }}>
          <h3 style={{ fontSize: "16px", marginBottom: "12px" }}>Follow us</h3>
          <div
            style={{ display: "flex", gap: "2rem", justifyContent: "center" }}
          >
            <Facebook size={25} />
            <Linkedin size={25} />
            <Instagram size={25} />
            <Twitter size={25} />
            <Youtube size={25} />
            <Search size={25} />
          </div>
        </div>

        {/* Head Office */}
        <div style={{ maxWidth: "350px", marginBottom: "20px" }}>
          <h3 style={{ fontSize: "16px", marginBottom: "10px" }}>
            Head Office
          </h3>
          {FOOTER_LOCATION_CONST.map((each, idx) => (
            <p
              key={idx}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "1rem",
                fontSize: "14px",
                marginBottom: "6px",
              }}
            >
              <each.icon size={16} />{" "}
              <span style={{ flex: 1 }}>{each.name}</span>
            </p>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          borderTop: "1px solid #164a78",
          textAlign: "center",
          paddingTop: "10px",
          fontSize: "13px",
        }}
      >
        © 2021 All Rights Reserved.{" "}
        <a href="#" style={{ color: "#ccc", textDecoration: "underline" }}>
          Privacy Policy
        </a>
      </div>
    </div>
  );
};

export default Footer;
