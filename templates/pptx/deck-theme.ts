/**
 * PPTXGenJS deck theme — copy into your project or run from outputs/scripts/
 * Business presentation defaults: 16:9, consulting-grade margins, reusable masters
 */
import pptxgen from "pptxgenjs";

export type DeckBrand = {
  name: string;
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  text: string;
  muted: string;
  fontTitle: string;
  fontBody: string;
};

export const BRANDS: Record<string, DeckBrand> = {
  neutral: {
    name: "Neutral Business",
    primary: "1a1a2e",
    secondary: "16213e",
    accent: "0f3460",
    background: "ffffff",
    text: "1a1a2e",
    muted: "64748b",
    fontTitle: "Arial",
    fontBody: "Arial",
  },
  stampedEnergy: {
    name: "Stamped Energy",
    primary: "051F13",
    secondary: "191c1a",
    accent: "F75440",
    background: "f7faf5",
    text: "191c1a",
    muted: "5a403c",
    fontTitle: "Plus Jakarta Sans",
    fontBody: "Arial",
  },
  contentOs: {
    name: "Content OS",
    primary: "1a2e1a",
    secondary: "2d4a2d",
    accent: "e85d26",
    background: "fafaf9",
    text: "1c1917",
    muted: "78716c",
    fontTitle: "Jost",
    fontBody: "Source Sans 3",
  },
};

const MARGIN = 0.5;
const SLIDE_W = 10;
const SLIDE_H = 5.625;

export function createDeck(brandKey: keyof typeof BRANDS = "neutral") {
  const brand = BRANDS[brandKey];
  const pptx = new pptxgen();
  pptx.layout = "LAYOUT_16x9";
  pptx.author = brand.name;
  pptx.company = brand.name;
  pptx.subject = "Business Presentation";
  pptx.title = "Presentation";

  return { pptx, brand };
}

export function addTitleSlide(
  pptx: pptxgen,
  brand: DeckBrand,
  title: string,
  subtitle?: string
) {
  const slide = pptx.addSlide();
  slide.background = { color: brand.primary };
  slide.addText(title, {
    x: MARGIN,
    y: 1.8,
    w: SLIDE_W - MARGIN * 2,
    h: 1.2,
    fontSize: 36,
    bold: true,
    color: "FFFFFF",
    fontFace: brand.fontTitle,
  });
  if (subtitle) {
    slide.addText(subtitle, {
      x: MARGIN,
      y: 3.1,
      w: SLIDE_W - MARGIN * 2,
      h: 0.6,
      fontSize: 18,
      color: brand.accent,
      fontFace: brand.fontBody,
    });
  }
}

/** Consulting-style slide: action title + bullets */
export function addInsightSlide(
  pptx: pptxgen,
  brand: DeckBrand,
  actionTitle: string,
  bullets: string[],
  footnote?: string
) {
  const slide = pptx.addSlide();
  slide.background = { color: brand.background };

  slide.addShape(pptx.ShapeType.rect, {
    x: 0,
    y: 0,
    w: SLIDE_W,
    h: 0.08,
    fill: { color: brand.accent },
  });

  slide.addText(actionTitle, {
    x: MARGIN,
    y: 0.35,
    w: SLIDE_W - MARGIN * 2,
    h: 0.9,
    fontSize: 22,
    bold: true,
    color: brand.text,
    fontFace: brand.fontTitle,
    valign: "top",
  });

  const body = bullets.map((b) => ({ text: b, options: { bullet: true, breakLine: true } }));
  slide.addText(body, {
    x: MARGIN,
    y: 1.4,
    w: SLIDE_W - MARGIN * 2,
    h: 3.5,
    fontSize: 16,
    color: brand.text,
    fontFace: brand.fontBody,
    paraSpaceAfter: 8,
  });

  if (footnote) {
    slide.addText(footnote, {
      x: MARGIN,
      y: 5.2,
      w: SLIDE_W - MARGIN * 2,
      h: 0.3,
      fontSize: 9,
      color: brand.muted,
      fontFace: brand.fontBody,
    });
  }
}

/** Section divider */
export function addSectionSlide(pptx: pptxgen, brand: DeckBrand, section: string) {
  const slide = pptx.addSlide();
  slide.background = { color: brand.secondary };
  slide.addText(section, {
    x: MARGIN,
    y: 2.2,
    w: SLIDE_W - MARGIN * 2,
    h: 1,
    fontSize: 32,
    bold: true,
    color: "FFFFFF",
    fontFace: brand.fontTitle,
  });
}

export async function writeDeck(pptx: pptxgen, path: string) {
  await pptx.writeFile({ fileName: path });
}
