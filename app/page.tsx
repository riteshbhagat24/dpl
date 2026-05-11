import TopBar from "@/components/TopBar";
import SiteHeader from "@/components/SiteHeader";
import ScoreStrip from "@/components/ScoreStrip";
import FeaturedMatch from "@/components/FeaturedMatch";
import NewsBlock from "@/components/NewsBlock";
import RankingsSidebar from "@/components/RankingsSidebar";
import Schedule from "@/components/Schedule";
import VideosStrip from "@/components/VideosStrip";
import TeamsStrip from "@/components/TeamsStrip";
import SponsorBar from "@/components/SponsorBar";
import SiteFooter from "@/components/SiteFooter";
import LinkPopup from "@/components/LinkPopup";

export default function Page() {
  return (
    <div id="top" className="min-h-screen bg-page">
      <TopBar />
      <SiteHeader />
      <ScoreStrip />

      <main className="container-x py-6">
        {/* Primary content + sidebar */}
        <div className="grid gap-6 lg:grid-cols-12">
          <div className="space-y-8 lg:col-span-8">
            <FeaturedMatch />
            <NewsBlock />
            <Schedule />
          </div>
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-24">
              <RankingsSidebar />
            </div>
          </div>
        </div>

        {/* Wide sections */}
        <div className="mt-10 space-y-10">
          <VideosStrip />
          <TeamsStrip />
          <SponsorBar />
        </div>
      </main>

      <SiteFooter />
      <LinkPopup />
    </div>
  );
}
