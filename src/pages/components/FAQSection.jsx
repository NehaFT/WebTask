import { Plus, Minus } from "lucide-react";
import { useState, useEffect } from "react";
import { FAQS_CONST } from "../constants/webPage.constants";
import LOCAL_IMAGES from "../../assets/images/Local_Images";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* FAQ Section */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          padding: isMobile ? "30px 15px" : "40px 20px",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "20px",
            fontFamily: "Segoe UI, sans-serif",
            justifyContent: "center",
            width: isMobile ? "100%" : "85%",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              marginBottom: "30px",
              fontSize: "24px",
              color: "#0a3866",
            }}
          >
            FAQ
          </h2>

          {FAQS_CONST.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                style={{
                  borderBottom: "1px solid #e0e0e0",
                  padding: "15px 0",
                }}
              >
                <div
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    cursor: "pointer",
                    color: isOpen ? "#0a3866" : "#333",
                    fontSize: "15px",
                    fontWeight: isOpen ? "500" : "400",
                    gap: "1rem",
                  }}
                >
                  {item.question}
                  <div
                    style={{
                      borderRadius: "50%",
                      border: "1px solid #555",
                      width: "20px",
                      height: "20px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      minWidth: "20px",
                    }}
                  >
                    {isOpen ? (
                      <Minus size={14} strokeWidth={2.5} />
                    ) : (
                      <Plus size={14} strokeWidth={2.5} />
                    )}
                  </div>
                </div>
                {isOpen && item.answer && (
                  <p
                    style={{
                      fontSize: "14px",
                      color: "#333",
                      marginTop: "15px",
                      lineHeight: "1.6",
                    }}
                  >
                    {item.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Subscribe Section */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          padding: isMobile ? "30px 15px" : "40px 20px",
          backgroundColor: "#fff",
          position: !isMobile && "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            justifyContent: "space-between",
            alignItems: isMobile ? "flex-start" : "center",
            padding: "20px",
            width: isMobile ? "100%" : "85%",
            fontFamily: "Segoe UI, sans-serif",
            gap: isMobile ? "20px" : "0px",
          }}
        >
          {/* Left Side */}
          <div style={{ flex: 1 }}>
            <h2
              style={{
                color: "#0a3866",
                fontSize: "24px",
                marginBottom: "10px",
              }}
            >
              Subscribe
            </h2>
            <p
              style={{
                color: "#555",
                fontSize: "14px",
                maxWidth: "400px",
                marginBottom: "20px",
              }}
            >
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna
            </p>

            <div
              style={{
                display: "flex",
                flexDirection: isMobile ? "column" : "row",
                gap: "10px",
                maxWidth: "500px",
                width: "100%",
              }}
            >
              <input
                type="email"
                placeholder="Enter your Email Address"
                style={{
                  padding: "12px 16px",
                  borderRadius: "8px",
                  border: "1px solid #ddd",
                  flex: 1,
                  fontSize: "14px",
                  outline: "none",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
                  width: isMobile ? "100%" : "auto",
                }}
              />
              <button
                style={{
                  backgroundColor: "#0a3866",
                  color: "#fff",
                  border: "none",
                  padding: "12px 20px",
                  borderRadius: "8px",
                  cursor: "pointer",
                  fontSize: "14px",
                  boxShadow: "0 3px 6px rgba(0,0,0,0.2)",
                  width: isMobile ? "100%" : "auto",
                }}
              >
                Subscribe Now ▶
              </button>
            </div>
          </div>

          {/* Right Side - Image */}
          <div
            style={{
              flex: 1,
              textAlign: "center",
              position: isMobile ? "relative" : "absolute",
              right: isMobile ? "0" : "50px",
              bottom: isMobile ? "0" : "0px",
              marginTop: isMobile ? "20px" : "0px",
            }}
          >
            <img
              src={LOCAL_IMAGES?.mailImg}
              alt="Subscribe illustration"
              style={{
                maxWidth: "100%",
                height: isMobile ? "10rem" : "15rem",
                objectFit: "contain",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQSection;
