// Substitua 'GA_MEASUREMENT_ID' pelo seu ID do Google Analytics
const GA_MEASUREMENT_ID = "G-FM93BCRY1K";

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];
  }
}

// Inicializar Google Analytics
export const initGA = () => {
  if (typeof window !== "undefined") {
    // Carregar script do Google Analytics
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script);

    // Configurar gtag
    window.dataLayer = window.dataLayer || [];
    window.gtag = function (...args: unknown[]) {
      window.dataLayer.push(args);
    };
    window.gtag("js", new Date());
    window.gtag("config", GA_MEASUREMENT_ID);
  }
};

// Rastrear clique em link
export const trackLinkClick = (linkTitle: string, linkUrl: string) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "click", {
      event_category: "Link",
      event_label: linkTitle,
      value: linkUrl,
    });
  }

  // Fallback: localStorage para métricas locais
  const clicks = JSON.parse(localStorage.getItem("linkClicks") || "{}");
  clicks[linkTitle] = (clicks[linkTitle] || 0) + 1;
  localStorage.setItem("linkClicks", JSON.stringify(clicks));
};

// Rastrear acesso à página
export const trackPageView = () => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "page_view");
  }

  // Fallback: localStorage para métricas locais
  const views = parseInt(localStorage.getItem("pageViews") || "0");
  localStorage.setItem("pageViews", (views + 1).toString());
};

// Obter métricas locais (para debug)
export const getLocalMetrics = () => {
  if (typeof window !== "undefined") {
    return {
      pageViews: parseInt(localStorage.getItem("pageViews") || "0"),
      linkClicks: JSON.parse(localStorage.getItem("linkClicks") || "{}"),
    };
  }
  return { pageViews: 0, linkClicks: {} };
};
