import { useState } from "react";
import { Search, ChevronDown } from "lucide-react";
import { NAVIGATION_CONST } from "../constants/webPage.constants";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState({
    qualifications: false,
    organizations: false,
    research: false,
    lorem1: false,
    lorem2: false,
  });

  const toggleDropdown = (menu) => {
    setIsOpen({
      ...isOpen,
      [menu]: !isOpen[menu],
    });
  };

  const navLinkStyle = {
    background: "none",
    border: "none",
    color: "white",
    fontSize: "14px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    gap: "4px",
    padding: "6px 8px",
    fontWeight: 500,
  };

  const dropdownMenuStyle = {
    position: "absolute",
    top: "30px",
    left: "0",
    backgroundColor: "white",
    color: "black",
    minWidth: "160px",
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
    zIndex: 1,
    borderRadius: "4px",
    overflow: "hidden",
    flexDirection: "column",
  };

  const dropdownItemStyle = {
    padding: "10px 16px",
    display: "block",
    textDecoration: "none",
    color: "#0a3866",
    fontSize: "14px",
    whiteSpace: "nowrap",
  };

  return (
    <nav
      style={{
        backgroundColor: "#0a3866",
        display: "flex",
        height: "50px",
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
        gap: "4rem",
        padding: "10px 40px",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <div style={{ color: "white", fontSize: "18px", fontWeight: "bold" }}>
        LOGO
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "4rem" }}>
          <div style={{ display: "flex", gap: "1rem", position: "relative" }}>
            {NAVIGATION_CONST.map(({ key, label, items }) => (
              <div key={key} style={{ position: "relative" }}>
                <button
                  style={navLinkStyle}
                  onClick={() => toggleDropdown(key)}
                >
                  {label} <ChevronDown size={16} />
                </button>
                {isOpen[key] && (
                  <div style={dropdownMenuStyle}>
                    {items.map((item, index) => (
                      <a key={index} href="#" style={dropdownItemStyle}>
                        {item}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <button
            style={{
              background: "none",
              border: "none",
              color: "white",
              padding: "6px",
              cursor: "pointer",
            }}
          >
            <Search size={20} />
          </button>
          <button
            style={{
              backgroundColor: "white",
              color: "#0a3866",
              padding: "6px 16px",
              border: "none",
              borderRadius: "24px",
              fontWeight: 500,
              cursor: "pointer",
              height: "2rem",
            }}
          >
            Enrolment
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
