import { CalendarClock } from "lucide-react";
import { EXAM_DATA } from "../constants/webPage.constants";

const UpcomingExams = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        padding: "40px 60px",
        backgroundColor: "white",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        justifyItems: "start",
        gap: "50px",
      }}
    >
      {/* Left Title Section */}
      <div
        style={{
          maxWidth: "200px",
          borderRight: "1px solid #e0e0e0",
          paddingRight: "20px",
          display: "flex",
          flexDirection: "column",
          width: "100%",
        }}
      >
        <h2 style={{ color: "#0a3866", margin: 0 }}>
          Upcoming
          <br />
          Examinations
        </h2>
        <p style={{ fontSize: "14px", color: "gray", marginTop: "10px" }}>
          Enquire about the examination & <br />
          register for the exams
        </p>
      </div>

      {/* Exam Cards */}
      <div style={{ display: "flex", gap: "6rem" }}>
        {EXAM_DATA.map((exam, index) => (
          <div
            key={index}
            style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}
          >
            <CalendarClock color="#0a3866" size={40} strokeWidth={1} />
            <div
              style={{ display: "flex", gap: "5px", flexDirection: "column" }}
            >
              <div
                style={{
                  fontWeight: "bold",
                  color: "#0a3866",
                  fontSize: "14px",
                }}
              >
                {exam.date}
              </div>
              <div style={{ fontSize: "14px", color: "#333" }}>
                {exam.title}
              </div>
              {exam.subtitle && (
                <div
                  style={{
                    fontSize: "14px",
                    color: "#555",
                    whiteSpace: "pre-line",
                  }}
                >
                  {exam.subtitle}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingExams;
