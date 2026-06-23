import { useState, useEffect, lazy, Suspense } from "react";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import LoadingSkeleton from "./components/ui/LoadingSkeleton";
import mockProfile, { defaultAvatar } from "./data/mockProfile";

const HeroSection = lazy(() => import("./components/sections/HeroSection"));
const SkillsSection = lazy(() => import("./components/sections/SkillsSection"));
const ExperienceSection = lazy(() => import("./components/sections/ExperienceSection"));
const ProjectsSection = lazy(() => import("./components/sections/ProjectsSection"));
const CertificationsSection = lazy(() => import("./components/sections/CertificationsSection"));
const AwardsSection = lazy(() => import("./components/sections/AwardsSection"));
const ContactSection = lazy(() => import("./components/sections/ContactSection"));

const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:5117";
const API_URL = `${API_BASE}/api/profile`;

function App() {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    fetch(API_URL, { signal: controller.signal })
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((data) => {
        if (data.profileImageUrl) {
          const imagePath = data.profileImageUrl.startsWith("/")
            ? data.profileImageUrl
            : `/${data.profileImageUrl}`;

          data.profileImageUrl = `${API_BASE}${imagePath}`;
        } else {
          data.profileImageUrl = defaultAvatar;
        }

        if (data.resumeUrl && !data.resumeUrl.startsWith("http")) {
          const resumePath = data.resumeUrl.startsWith("/")
            ? data.resumeUrl
            : `/${data.resumeUrl}`;

          data.resumeUrl = `${API_BASE}${resumePath}`;
        }

        setProfile(data);
      })
      .catch((err) => {
        if (err.name === "AbortError") return;
        console.warn("API unavailable, using mock data:", err.message);
        setProfile({
          ...mockProfile,
          profileImageUrl: mockProfile.profileImageUrl || defaultAvatar,
        });
      })
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, []);

  useEffect(() => {
    if (profile) {
      document.title = `${profile.fullName} | ${profile.jobTitle}`;
    }
  }, [profile]);

  if (loading || !profile) return <LoadingSkeleton />;

  return (
    <div className="noise-bg grid-bg relative min-h-screen">
      <Navbar />

      <main>
        <Suspense fallback={<LoadingSkeleton />}>
          <HeroSection profile={profile} />
          <SkillsSection skills={profile.skills} />
          <ExperienceSection experiences={profile.experiences} />
          <AwardsSection awards={profile.awards} />
          <CertificationsSection certifications={profile.certifications} />
          <ProjectsSection projects={profile.projects} />
          <ContactSection profile={profile} />
        </Suspense>
      </main>

      <Footer profile={profile} />
    </div>
  );
}

export default App;
