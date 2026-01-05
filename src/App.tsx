import { Analytics } from "@vercel/analytics/react";
import Linktree from "./components/Linktree";
import type { Profile, Link } from "./types";

const profile: Profile = {
  name: "Hikari Crochê",
  bio: "Todos os meus links em um só lugar",
  logo: "https://p77-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/f5538ff375a45c80461f581ff15788a8~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=a98757c5&x-expires=1767733200&x-signature=xAqR3xMagPVUd3MdL0I1SQ%2FStrw%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=my2",
};

const links: Link[] = [
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
