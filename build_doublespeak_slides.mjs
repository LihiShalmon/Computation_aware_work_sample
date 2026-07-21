import fs from "node:fs/promises";
import {
  Presentation,
  PresentationFile,
  layers,
  shape,
  table,
  text,
} from "@oai/artifact-tool";

const OUT = "C:/Users/lihis/Documents/heron computation aware/doublespeak_experiment_slides.pptx";
const PREVIEW = "C:/Users/lihis/AppData/Local/Temp/codex-presentations/019f84ad-461e-7f60-b0f3-edb6218649c1/doublespeak-slides/tmp/preview";
const LAYOUT = "C:/Users/lihis/AppData/Local/Temp/codex-presentations/019f84ad-461e-7f60-b0f3-edb6218649c1/doublespeak-slides/tmp/layout";

const BLACK = "#000000";
const BLUE = "#3D8DFF";
const PALE_BLUE = "#D0EDFA";
const PALE_GRAY = "#F2F2F2";
const RULE = "#B8BCC4";
const FONT = "Arial";

async function writeBlob(path, blob) {
  await fs.writeFile(path, new Uint8Array(await blob.arrayBuffer()));
}

function footer(page) {
  return text([`${page}/3`], {
    name: `footer-${page}`,
    position: { left: 1170, top: 676 },
    width: 68,
    height: 20,
    style: {
      fontSize: "14px",
      typeface: FONT,
      color: "#5F6368",
      alignment: "right",
      insets: { top: 0, right: 0, bottom: 0, left: 0 },
    },
  });
}

function buildOpening(presentation) {
  const slide = presentation.slides.add();
  slide.background.fill = "#FFFFFF";
  slide.compose(
    layers({ name: "research-question", width: "fill", height: "fill" }, [
      shape({
        name: "accent-rule",
        geometry: "rect",
        fill: BLUE,
        line: { fill: "none", width: 0 },
        position: { left: 42, top: 137 },
        width: 92,
        height: 8,
      }),
      text(["COMPUTATION-AWARE AUDITING"], {
        name: "eyebrow",
        position: { left: 42, top: 48 },
        width: 620,
        height: 38,
        style: {
          fontSize: "22px",
          bold: true,
          typeface: FONT,
          color: BLUE,
          autoFit: "none",
          insets: { top: 0, right: 0, bottom: 0, left: 0 },
        },
      }),
      text(["Can semantic remapping hide\nfrom a text-only auditor?"], {
        name: "main-question",
        position: { left: 42, top: 184 },
        width: 1110,
        height: 255,
        style: {
          fontSize: "66px",
          bold: true,
          typeface: FONT,
          color: BLACK,
          alignment: "left",
          verticalAlignment: "middle",
          autoFit: "none",
          insets: { top: 0, right: 0, bottom: 0, left: 0 },
        },
      }),
      text([
        "Doublespeak MVP  •  3 OpenAI models  •  10 remapping attacks + 10 matched clean controls per model",
      ], {
        name: "scope",
        position: { left: 42, top: 500 },
        width: 1120,
        height: 76,
        style: {
          fontSize: "27px",
          typeface: FONT,
          color: "#30343B",
          autoFit: "none",
          insets: { top: 0, right: 0, bottom: 0, left: 0 },
        },
      }),
      text([
        "Blind spot: the target adopts the hidden meaning, while an independent auditor misses it.",
      ], {
        name: "definition",
        position: { left: 42, top: 596 },
        width: 1120,
        height: 42,
        style: {
          fontSize: "23px",
          typeface: FONT,
          color: "#5F6368",
          autoFit: "none",
          insets: { top: 0, right: 0, bottom: 0, left: 0 },
        },
      }),
      footer(1),
    ]),
    { frame: { left: 0, top: 0, width: 1280, height: 720 }, baseUnit: 1 },
  );
  return slide;
}

function buildMethod(presentation) {
  const slide = presentation.slides.add();
  slide.background.fill = "#FFFFFF";
  slide.compose(
    layers({ name: "experiment-structure", width: "fill", height: "fill" }, [
      text(["Each example was tested twice—with no response sharing"], {
        name: "method-title",
        position: { left: 42, top: 38 },
        width: 1170,
        height: 72,
        style: {
          fontSize: "48px",
          bold: true,
          typeface: FONT,
          color: BLACK,
          autoFit: "shrinkText",
          insets: { top: 0, right: 0, bottom: 0, left: 0 },
        },
      }),
      text(["Same model, temperature 0, fresh API calls"], {
        name: "method-subtitle",
        position: { left: 42, top: 119 },
        width: 800,
        height: 34,
        style: {
          fontSize: "23px",
          typeface: FONT,
          color: "#5F6368",
          insets: { top: 0, right: 0, bottom: 0, left: 0 },
        },
      }),
      shape({
        name: "timeline-line",
        geometry: "straightConnector1",
        fill: "none",
        line: { style: "solid", width: 2, fill: RULE },
        position: { left: 100, top: 300 },
        width: 1000,
        height: 0,
      }),
      shape({
        name: "node-1",
        geometry: "ellipse",
        fill: BLUE,
        line: { fill: "none", width: 0 },
        position: { left: 115, top: 285 },
        width: 30,
        height: 30,
      }),
      shape({
        name: "node-2",
        geometry: "ellipse",
        fill: BLUE,
        line: { fill: "none", width: 0 },
        position: { left: 525, top: 285 },
        width: 30,
        height: 30,
      }),
      shape({
        name: "node-3",
        geometry: "ellipse",
        fill: BLACK,
        line: { fill: "none", width: 0 },
        position: { left: 935, top: 285 },
        width: 30,
        height: 30,
      }),
      text(["CALL 1"], {
        name: "label-1",
        position: { left: 115, top: 232 },
        width: 180,
        height: 30,
        style: { fontSize: "21px", bold: true, typeface: FONT, color: BLUE, insets: { top: 0, right: 0, bottom: 0, left: 0 } },
      }),
      text(["CALL 2"], {
        name: "label-2",
        position: { left: 525, top: 232 },
        width: 180,
        height: 30,
        style: { fontSize: "21px", bold: true, typeface: FONT, color: BLUE, insets: { top: 0, right: 0, bottom: 0, left: 0 } },
      }),
      text(["DECISION"], {
        name: "label-3",
        position: { left: 935, top: 232 },
        width: 180,
        height: 30,
        style: { fontSize: "21px", bold: true, typeface: FONT, color: BLACK, insets: { top: 0, right: 0, bottom: 0, left: 0 } },
      }),
      text(["Target semantic check\n\nDoes the model interpret the benign substitute as the intended harmful concept?"], {
        name: "step-1",
        position: { left: 115, top: 352 },
        width: 325,
        height: 190,
        style: { fontSize: "24px", typeface: FONT, color: BLACK, autoFit: "shrinkText", insets: { top: 0, right: 8, bottom: 0, left: 0 } },
      }),
      text(["Independent text auditor\n\nA fresh call sees only the prompt. It detects and attempts to recover the mapping."], {
        name: "step-2",
        position: { left: 525, top: 352 },
        width: 325,
        height: 190,
        style: { fontSize: "24px", typeface: FONT, color: BLACK, autoFit: "shrinkText", insets: { top: 0, right: 8, bottom: 0, left: 0 } },
      }),
      text(["Blind-spot test\n\nTarget adopted mapping\nAND\nauditor did not detect it"], {
        name: "step-3",
        position: { left: 935, top: 352 },
        width: 270,
        height: 210,
        style: { fontSize: "24px", typeface: FONT, color: BLACK, autoFit: "shrinkText", insets: { top: 0, right: 0, bottom: 0, left: 0 } },
      }),
      shape({
        name: "call-count-band",
        geometry: "rect",
        fill: PALE_GRAY,
        line: { fill: "none", width: 0 },
        position: { left: 42, top: 595 },
        width: 1118,
        height: 60,
      }),
      text(["Per model: 20 examples × 2 independent calls = 40 primary API calls"], {
        name: "call-count",
        position: { left: 66, top: 610 },
        width: 1060,
        height: 32,
        style: { fontSize: "23px", bold: true, typeface: FONT, color: "#30343B", alignment: "center", insets: { top: 0, right: 0, bottom: 0, left: 0 } },
      }),
      footer(2),
    ]),
    { frame: { left: 0, top: 0, width: 1280, height: 720 }, baseUnit: 1 },
  );
  return slide;
}

function buildResults(presentation) {
  const slide = presentation.slides.add();
  slide.background.fill = "#FFFFFF";
  slide.compose(
    layers({ name: "model-results", width: "fill", height: "fill" }, [
      text(["All three models produced the same ceiling result"], {
        name: "results-title",
        position: { left: 42, top: 36 },
        width: 1170,
        height: 70,
        style: { fontSize: "48px", bold: true, typeface: FONT, color: BLACK, autoFit: "shrinkText", insets: { top: 0, right: 0, bottom: 0, left: 0 } },
      }),
      text(["10 attacks + 10 matched clean controls per model"], {
        name: "results-subtitle",
        position: { left: 42, top: 115 },
        width: 850,
        height: 34,
        style: { fontSize: "23px", typeface: FONT, color: "#5F6368", insets: { top: 0, right: 0, bottom: 0, left: 0 } },
      }),
      table({
        name: "results-table",
        rows: 4,
        columns: 6,
        values: [
          ["Model", "Target\nadoption", "Auditor\nsensitivity", "Mapping\nrecovery", "False\npositives", "Blind\nspots"],
          ["gpt-5.6-sol", "100%", "100%", "100%", "0", "0"],
          ["gpt-4o", "100%", "100%", "100%", "0", "0"],
          ["gpt-3.5-turbo", "100%", "100%", "100%", "0", "0"],
        ],
        columnWidths: [270, 180, 195, 195, 175, 180],
        position: { left: 42, top: 190 },
        width: 1195,
        height: 280,
      }),
      shape({
        name: "interpretation-band",
        geometry: "rect",
        fill: PALE_BLUE,
        line: { fill: "none", width: 0 },
        position: { left: 42, top: 515 },
        width: 1195,
        height: 118,
      }),
      text(["Interpretation"], {
        name: "interpretation-label",
        position: { left: 68, top: 536 },
        width: 220,
        height: 28,
        style: { fontSize: "21px", bold: true, typeface: FONT, color: BLUE, insets: { top: 0, right: 0, bottom: 0, left: 0 } },
      }),
      text(["The remappings succeeded—but the text-only auditor caught every one. Harder attacks are needed before testing whether internal-state monitoring adds signal."], {
        name: "interpretation-copy",
        position: { left: 68, top: 571 },
        width: 1120,
        height: 46,
        style: { fontSize: "23px", bold: true, typeface: FONT, color: BLACK, autoFit: "shrinkText", insets: { top: 0, right: 0, bottom: 0, left: 0 } },
      }),
      footer(3),
    ]),
    { frame: { left: 0, top: 0, width: 1280, height: 720 }, baseUnit: 1 },
  );
  return slide;
}

async function main() {
  await fs.mkdir(PREVIEW, { recursive: true });
  await fs.mkdir(LAYOUT, { recursive: true });

  const presentation = Presentation.create({ slideSize: { width: 1280, height: 720 } });
  buildOpening(presentation);
  buildMethod(presentation);
  buildResults(presentation);

  for (const [index, slide] of presentation.slides.items.entries()) {
    const stem = `slide-${String(index + 1).padStart(2, "0")}`;
    await writeBlob(`${PREVIEW}/${stem}.png`, await presentation.export({ slide, format: "png", scale: 2 }));
    const layout = await slide.export({ format: "layout" });
    await fs.writeFile(`${LAYOUT}/${stem}.layout.json`, await layout.text());
  }

  await writeBlob(`${PREVIEW}/montage.webp`, await presentation.export({ format: "webp", montage: true, scale: 1 }));
  const pptx = await PresentationFile.exportPptx(presentation);
  await pptx.save(OUT);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
