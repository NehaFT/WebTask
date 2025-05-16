import { Plus, Minus } from "lucide-react";
import { useState } from "react";
import { FAQS_CONST } from "../constants/webPage.constants";
import LOCAL_IMAGES from "../../assets/images/Local_Images";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(1);

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          padding: "40px 20px",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "20px 20px",
            fontFamily: "Segoe UI, sans-serif",
            justifyContent: "center",
            width: "85%",
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
                style={{ borderBottom: "1px solid #e0e0e0", padding: "15px 0" }}
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
                    gap: "2rem",
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
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0px 40px 30px",
            backgroundColor: "#fff",
            fontFamily: "Segoe UI, sans-serif",
            width: "85%",
          }}
        >
          {/* Left Side - Text & Input */}
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

            <div style={{ display: "flex", gap: "10px", maxWidth: "500px" }}>
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
              position: "absolute",
              right: 50,
              bottom: 0,
            }}
          >
            <img
              src={LOCAL_IMAGES?.mailImg}
              alt="Subscribe illustration"
              style={{ maxWidth: "100%", height: "15rem" }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQSection;
