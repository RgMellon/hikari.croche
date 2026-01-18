import { Analytics } from "@vercel/analytics/react";
import Linktree from "./components/Linktree";
import type { Profile, Link } from "./types";

const profile: Profile = {
  name: "Hikari Crochê",
  bio: "Todos os meus links em um só lugar",
  logo: "https://i.imgur.com/3UI5pal.jpeg",
};

const links: Link[] = [
  {
    id: "0",
    title: "Receitas em PDF",
    url: "https://example.com/receitas",
    icon: "📄",
  },
  {
    id: "1",
    title: "Instagram",
    url: "https://www.instagram.com/hikari.croche/",
    icon: "📷",
  },
  {
    id: "2",
    title: "Tiktok",
    url: "https://www.tiktok.com/@hikaricroche",
    icon: "🎵",
  },
  {
    id: "3",
    title: "YouTube",
    url: "https://www.youtube.com/@hikaricroche",
    icon: "🎥",
  },
  {
    id: "4",
    title: "Email",
    url: "mailto:hikaricroche@gmail.com",
    icon: "✉️",
  },
  {
    id: "5",
    title: "Calculadora de Preços",
    url: "#calculator",
    icon: "🧮",
  },
];

function App() {
  return (
    <>
      <Linktree profile={profile} links={links} />
      <Analytics />
    </>
  );
}

export default App;
