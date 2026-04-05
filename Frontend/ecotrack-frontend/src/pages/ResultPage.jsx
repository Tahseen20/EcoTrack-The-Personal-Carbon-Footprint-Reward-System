import logoImg from "../assets/Untitled (1).png";
import forestImg from "../assets/forest_by_OGQ__1_-removebg-preview.png";
import plantImg from "../assets/newimag.png";

export default function EcoTrackerDashboard() {
  return (
    <div style={{
      position: "relative",
      width: "1400px",
      height: "1000px",
      background: "#fff",
      fontFamily: "sans-serif",
      overflow: "hidden",
      border: "10px solid #9ACD9A",
      borderRadius: "8px",
    }}>
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Archivo+Black&family=Goldman&display=swap');
      `}</style>

      {/* ── HEADER ── */}
      {/* Logo Image */}
      <img
        src={logoImg}
        alt="logo"
        style={{
          position: "absolute",
          width: "297px",
          height: "198px",
          left: "-52px",
          top: "-25px"
        }}
      />

      {/* EcoTracker title */}
      <div style={{
        position: "absolute",
        left: 180,
        top: 36,
        fontFamily: "'Archivo Black', sans-serif",
        fontWeight: 400,
        fontSize: "52px",
        lineHeight: "70px",
        color: "#568730",
        whiteSpace: "nowrap",
      }}>
        EcoTracker
      </div>

      {/* ── GREEN RECTANGLE CARD ── */}
      <div style={{
        position: "absolute",
        left: 85,
        top: 100,
        width: "1223px",
        height: "783px",
        background: "#CCF3CC",
        borderRadius: "4px",
      }}>

        {/* YOUR DAILY RESULT heading */}
        <div style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 40,
          textAlign: "center",
          fontFamily: "'Goldman', sans-serif",
          fontWeight: 400,
          fontSize: "56px",
          color: "#0D3311",
          letterSpacing: "2px",
          textTransform: "uppercase",
        }}>
          Your daily result
        </div>

        {/* ── DONUT CHART AREA ── */}
        <div style={{
          position: "absolute",
          left: 60,
          top: 150,
          width: "457px",
          height: "427px",
        }}>
          {/* Donut SVG */}
          <svg width="457" height="427" viewBox="0 0 457 427" fill="none">
            {/* Blue/gray background circle (full) */}
            <circle
              cx="228" cy="213" r="180"
              fill="none"
              stroke="#B1D4EA"
              strokeWidth="70"
            />
            {/* Green arc — ~75% of circle */}
            <circle
              cx="228" cy="213" r="180"
              fill="none"
              stroke="#779A70"
              strokeWidth="70"
              strokeDasharray={`${2 * Math.PI * 180 * 0.62} ${2 * Math.PI * 180}`}
              strokeDashoffset={`${2 * Math.PI * 180 * 0.25}`}
              strokeLinecap="butt"
              transform="rotate(-90 228 213)"
            />
            {/* White inner circle to make donut hole */}
            <circle cx="228" cy="213" r="140" fill="#CCF3CC"/>
          </svg>

          {/* Center content: leaf + 25 kg */}
          <div style={{
            position: "absolute",
            top: 0, left: 0, right: 0, bottom: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
          }}>
            {/* Leaf icon */}
            <svg width="60" height="50" viewBox="0 0 60 50" fill="none">
              <path d="M5 45 Q15 5 55 3 Q50 42 5 45Z" fill="#299825"/>
              <path d="M5 45 Q30 24 55 3" stroke="#1a6b14" strokeWidth="2" fill="none"/>
            </svg>
            {/* 25 kg */}
            <div style={{
              fontFamily: "'Goldman', sans-serif",
              fontWeight: 400,
              fontSize: "52px",
              lineHeight: "77px",
              color: "#000000",
              textAlign: "center",
            }}>
              25 kg
            </div>
          </div>
        </div>

        {/* ── RIGHT SIDE: stats ── */}
        <div style={{
          position: "absolute",
          left: 580,
          top: 220,
          display: "flex",
          flexDirection: "column",
          gap: "60px",
        }}>

          {/* Transportation row */}
          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            {/* Car icon */}
            <svg width="52" height="36" viewBox="0 0 52 36" fill="none">
              <rect x="4" y="10" width="44" height="18" rx="5" fill="none" stroke="#B8860B" strokeWidth="2.5"/>
              <path d="M10 10 L14 2 L38 2 L42 10" stroke="#B8860B" strokeWidth="2.5" strokeLinejoin="round"/>
              <circle cx="13" cy="29" r="5" fill="#B8860B"/>
              <circle cx="39" cy="29" r="5" fill="#B8860B"/>
            </svg>
            <span style={{
              fontFamily: "'Goldman', sans-serif",
              fontSize: "34px",
              color: "#0D3311",
              minWidth: "260px",
            }}>Transportation</span>
            <span style={{
              fontFamily: "'Goldman', sans-serif",
              fontSize: "34px",
              color: "#0D3311",
            }}>5.2 kg</span>
          </div>

          {/* Electricity row */}
          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            {/* Plug icon */}
            <svg width="44" height="50" viewBox="0 0 44 50" fill="none">
              <rect x="16" y="0" width="12" height="20" rx="3" fill="none" stroke="#2F047E" strokeWidth="2.5"/>
              <rect x="20" y="6" width="2" height="10" fill="#2F047E"/>
              <rect x="24" y="6" width="2" height="10" fill="#2F047E"/>
              <path d="M8 20 Q22 34 36 20" fill="none" stroke="#2F047E" strokeWidth="2.5"/>
              <rect x="19" y="32" width="6" height="16" rx="3" fill="#2F047E"/>
            </svg>
            <span style={{
              fontFamily: "'Goldman', sans-serif",
              fontSize: "34px",
              color: "#0D3311",
              minWidth: "260px",
            }}>Electricity</span>
            <span style={{
              fontFamily: "'Goldman', sans-serif",
              fontSize: "34px",
              color: "#0D3311",
            }}>3.5 kg</span>
          </div>
        </div>

        {/* Today's total text */}
        <div style={{
          position: "absolute",
          left: 130,
          bottom: 40,
          fontFamily: "'Goldman', sans-serif",
          fontWeight: 400,
          fontSize: "52px",
          lineHeight: "77px",
          color: "#0D3311",
        }}>
          Today's total
        </div>
      </div>

           {/* Left Plant Image */}
      <img
        src={forestImg}
        alt="plant"
        style={{
          position: "absolute",
          width: "228px",
          height: "228px",
          left: "-1px",
          top: "754px"
        }}
      />

      {/* Right Watering Can Image */}
      <img
        src={plantImg}
        alt="watering"
        style={{
          position: "absolute",
          width: "324px",
          height: "324px",
          left: "1110px",
          top: "693px",
          opacity: 0.8
        }}
      />

    </div>
  );
}