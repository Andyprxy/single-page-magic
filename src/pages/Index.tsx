import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    window.location.href = "/sh-events.html";
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center" style={{ backgroundColor: "#1A1A1A", color: "#F5F0E8" }}>
      <p style={{ fontFamily: "sans-serif", opacity: 0.5 }}>Redirecting...</p>
    </div>
  );
};

export default Index;
