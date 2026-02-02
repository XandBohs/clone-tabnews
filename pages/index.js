export default function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
        fontFamily: "Arial, Helvetica, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "600px",
          padding: "40px",
          textAlign: "center",
          color: "#ffffff",
          background: "rgba(255, 255, 255, 0.08)",
          borderRadius: "12px",
          backdropFilter: "blur(6px)",
        }}
      >
        <h1>🚧 Em construção</h1>

        <p>
          Prazer, me chamo Alexandre e estou aprofundando meus conhecimentos em
          desenvolvimento web.
        </p>

        <p>
          LinkedIn:
          <br />
          <a
            href="https://www.linkedin.com/in/alexandrekb25/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#00c6ff", fontWeight: "bold" }}
          >
            linkedin.com/in/alexandrekb25
          </a>
        </p>

        <span
          style={{
            display: "inline-block",
            padding: "8px 16px",
            border: "1px solid rgba(255,255,255,0.3)",
            borderRadius: "20px",
            fontSize: "0.9rem",
          }}
        >
          Portfólio em breve
        </span>
      </div>
    </div>
  );
}
