import { Route, Routes } from "react-router-dom";
import PortfolioLayout from "./layouts/PortfolioLayout";
import HomePage from "./pages/HomePage";
import ResumePage from "./pages/ResumePage";
import AboutPage from "./pages/AboutPage";
import WorkEaPage from "./pages/WorkEaPage";
import TigerWoodsCaseStudyPage from "./pages/TigerWoodsCaseStudyPage";
import MaddenCaseStudyPage from "./pages/MaddenCaseStudyPage";
import CentralUiCaseStudyPage from "./pages/CentralUiCaseStudyPage";
import NcaaCaseStudyPage from "./pages/NcaaCaseStudyPage";
import WorkMldPage from "./pages/WorkMldPage";
import MaestroFeaturePage from "./pages/MaestroFeaturePage";
import NotFoundPage from "./pages/NotFoundPage";
import WorkshopPage from "./pages/WorkshopPage";

/**
 * Blazor → React map
 * ------------------
 * PortfolioLayout.razor  → layouts/PortfolioLayout.tsx
 * @page + Routes.razor   → <Routes> / <Route>
 * NavLink                → react-router <NavLink>
 * @page "/portfolio/..." → path="work/maestro/:slug"
 */
export default function App() {
  return (
    <Routes>
      <Route element={<PortfolioLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/resume" element={<ResumePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/work/ea" element={<WorkEaPage />} />
        <Route path="/work/ea/madden-nfl" element={<MaddenCaseStudyPage />} />
        <Route path="/work/ea/central-ui" element={<CentralUiCaseStudyPage />} />
        <Route path="/work/ea/ncaa-football" element={<NcaaCaseStudyPage />} />
        <Route path="/work/ea/tiger-woods-pga-tour" element={<TigerWoodsCaseStudyPage />} />
        <Route path="/work/maestro" element={<WorkMldPage />} />
        <Route path="/work/workshop" element={<WorkshopPage />} />
        <Route
          path="/work/maestro/:slug"
          element={<MaestroFeaturePage />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
