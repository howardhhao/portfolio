import Head from 'next/head';
import Navbar from '@/components/Navbar';
import SkillsSection from "@/components/SkillsSection";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import { projects } from "@/data/projects";
import ExperiencesSection from "@/components/ExperiencesSection";
import FooterSection from "@/components/FooterSection";
import { experienceList } from '@/data/experienceList';

export default function Home() {
  return (
    <main className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white scroll-smooth">
      <Head>
  <title>Wen Hao | Portfolio</title>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="icon" href="/logo.png" />
</Head>

      <Navbar />
      <HeroSection />
      <SkillsSection />
      <ProjectsSection projects={projects} />
      <ExperiencesSection experienceList={experienceList} />
      <FooterSection />
    </main>
  );
}