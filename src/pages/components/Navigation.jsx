import { useState } from "react";
import { Search, ChevronDown, Menu, X } from "lucide-react";
import { NAVIGATION_CONST } from "../constants/webPage.constants";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState({});
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleDropdown = (menu) => {
    setIsOpen((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
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
    width: "100%",
    justifyContent: "space-between",
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
        padding: "10px 20px",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      {/* Top Row */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ color: "white", fontSize: "18px", fontWeight: "bold" }}>
          LOGO
        </div>

        {/* Hamburger Button */}
        <button
          className="hamburger"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            background: "none",
            border: "none",
            color: "white",
            cursor: "pointer",
            display: "none",
          }}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Nav Links */}
        <div
          className="nav-desktop"
          style={{ display: "flex", gap: "2rem", alignItems: "center" }}
        >
          {NAVIGATION_CONST.map(({ key, label, items }) => (
            <div key={key} style={{ position: "relative" }}>
              <button style={navLinkStyle} onClick={() => toggleDropdown(key)}>
                {label} <ChevronDown size={16} />
              </button>
              {isOpen[key] && (
                <div
                  style={{
                    position: "absolute",
                    top: "36px",
                    left: 0,
                    background: "white",
                    borderRadius: "4px",
                    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
                    zIndex: 10,
                    minWidth: "160px",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  {items.map((item, i) => (
                    <a key={i} href="#" style={dropdownItemStyle}>
                      {item}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Search and Enrolment */}
          <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
            <button
              style={{
                background: "none",
                border: "none",
                color: "white",
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
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          className="mobile-menu"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            marginTop: "1rem",
          }}
        >
          {NAVIGATION_CONST.map(({ key, label, items }) => (
            <div key={key}>
              <button style={navLinkStyle} onClick={() => toggleDropdown(key)}>
                {label} <ChevronDown size={16} />
              </button>
              {isOpen[key] && (
                <div
                  style={{
                    backgroundColor: "white",
                    borderRadius: "4px",
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                    marginTop: "4px",
                  }}
                >
                  {items.map((item, index) => (
                    <a key={index} href="#" style={dropdownItemStyle}>
                      {item}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}

          <div style={{ display: "flex", gap: "1rem" }}>
            <button
              style={{
                background: "none",
                border: "1px solid white",
                color: "white",
                padding: "6px",
                cursor: "pointer",
                borderRadius: "6px",
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
              }}
            >
              Enrolment
            </button>
          </div>
        </div>
      )}

      {/* Media Queries */}
      <style>{`
        @media (max-width: 768px) {
          .nav-desktop {
            display: none !important;
          }
          .hamburger {
            display: block !important;
          }
        }

        @media (min-width: 769px) {
          .mobile-menu {
            display: none !important;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
