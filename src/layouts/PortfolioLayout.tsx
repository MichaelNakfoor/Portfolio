import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import RouteScroll from "../components/RouteScroll";
import PageMetadata from "../components/PageMetadata";

export default function PortfolioLayout() {
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  const [theme, setTheme] = useState<"dark" | "light">(() => {
    const saved = localStorage.getItem("theme");
    return saved === "light" ? "light" : "dark";
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="pf" data-theme={theme}>
      <RouteScroll />
      <PageMetadata />
      <div className="pf-top">
        <Header
          theme={theme}
          onToggleTheme={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
        />
        {isHome && <Hero />}
      </div>
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
