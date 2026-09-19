(() => {
  const primary = { deep: "#075985", strong: "#397A9D", base: "#83ACC2", soft: "#A6C3D3", pale: "#C8DAE4", mist: "#E6EEF3" };
  const secondary = { deep: "#155E75", strong: "#447E91", base: "#8AAFBA", soft: "#ABC5CD", pale: "#CCDCE1", mist: "#E8EFF1" };
  const tertiary = { deep: "#0E7490", strong: "#3E90A6", base: "#87BAC8", soft: "#A8CDD7", pale: "#CAE0E7", mist: "#E7F1F4" };
  const warning = { deep: "#D98C00", strong: "#E1A333", base: "#ECC680", soft: "#F1D6A3", pale: "#F7E6C7", mist: "#FBF3E5" };
  const success = { deep: "#059669", strong: "#37AB87", base: "#82CBB4", soft: "#A5D9C9", pale: "#C8E8DE", mist: "#E6F5F0" };
  const danger = { deep: "#BE123C", strong: "#CB4163", base: "#DF899E", soft: "#E8AAB9", pale: "#F1CBD4", mist: "#F9E7EB" };
  const neutral = { deep: "#334A5E", strong: "#5C6E7E", base: "#99A4AF", soft: "#B6BEC5", pale: "#D2D7DC", mist: "#EBEDEF", white: "#FFFFFF" };

  const cScalePalette = [primary.pale, warning.pale, secondary.pale, tertiary.pale, danger.pale, success.pale, primary.mist, warning.mist, secondary.mist, tertiary.mist, danger.mist];
  const cScaleVars = cScalePalette.reduce((acc, color, i) => {
    acc[`cScale${i}`] = color;
    acc[`cScalePeer${i}`] = color;
    acc[`cScaleInv${i}`] = color;
    acc[`cScaleLabel${i}`] = neutral.strong;
    return acc;
  }, {});

  const cssVariables = `
      * {
        --diagram-bg: ${neutral.white};
        --diagram-surface: ${neutral.white};
        --diagram-text: ${neutral.deep};
        --diagram-text-muted: ${neutral.strong};
        --diagram-title: ${neutral.strong};
        --diagram-line: ${neutral.base};
        --diagram-border-light: ${neutral.pale};
        --diagram-primary-deep: ${primary.deep};
        --diagram-primary-strong: ${primary.strong};
        --diagram-primary-base: ${primary.base};
        --diagram-primary-soft: ${primary.soft};
        --diagram-primary-mist: ${primary.mist};
        --diagram-secondary-pale: ${secondary.pale};
        --diagram-secondary-strong: ${secondary.strong};
        --diagram-tertiary-pale: ${tertiary.pale};
        --diagram-tertiary-strong: ${tertiary.strong};
        --diagram-warning-pale: ${warning.pale};
        --diagram-warning-strong: ${warning.strong};
        --diagram-danger-pale: ${danger.pale};
        --diagram-danger-strong: ${danger.strong};
        --c4-text: ${neutral.white};
        --treemap-1: ${primary.mist};
        --treemap-2: ${tertiary.mist};
        --treemap-3: ${primary.pale};
        --treemap-4: ${tertiary.pale};
        --treemap-5: ${primary.soft};
        --treemap-6: ${tertiary.soft};
        --treemap-7: ${primary.mist};
        --treemap-8: ${tertiary.mist};
        --treemap-9: ${primary.pale};
        --treemap-10: ${tertiary.pale};
        --treemap-11: ${primary.soft};
        --treemap-12: ${tertiary.soft};
      }`;

  const mindmapCSS = `
      /* mindmap */
      .mindmap-node.section-root .node-bkg {
        fill: var(--diagram-primary-mist) !important;
        stroke-width: 0px !important;
      }

      .mindmap-node.section-root .nodeLabel,
      .mindmap-node.section-root .nodeLabel p,
      .mindmap-node.section-root .label,
      .mindmap-node.section-root text {
        font-weight: 700 !important;
      }

      .mindmap-node > line[class*="node-line-"] {
        stroke-width: 0.75px !important;
        stroke-opacity: 0.45 !important;
      }

      .mindmap-edges path {
        stroke-width: 1.25px !important;
        stroke-opacity: 0.75 !important;
      }`;

  const vennCSS = `
      /* venn-beta */
      .venn-circle path {
        fill-opacity: 0.28 !important;
        stroke-width: 1px !important;
        stroke-opacity: 0.65 !important;
        font-size: 20px;
      }`;

  const swimlaneCSS = `
      /* swimlane-beta */
      .swimlane.cluster rect {
        fill: var(--diagram-primary-mist) !important;
        stroke: var(--diagram-primary-base) !important;
        stroke-width: 0.75px !important;
      }`;

  const kanbanCSS = `
      /* kanban */
      .sections .section-1 rect,
      .sections .section-6 rect,
      .sections .section-11 rect {
        fill: var(--diagram-secondary-pale) !important;
        stroke: var(--diagram-secondary-pale) !important;
      }

      .sections .section-2 rect,
      .sections .section-7 rect,
      .sections .section-12 rect {
        fill: var(--diagram-warning-pale) !important;
        stroke: var(--diagram-warning-pale) !important;
      }

      .sections .section-3 rect,
      .sections .section-8 rect {
        fill: var(--diagram-tertiary-pale) !important;
        stroke: var(--diagram-tertiary-pale) !important;
      }

      .sections .section-4 rect,
      .sections .section-9 rect {
        fill: var(--diagram-danger-pale) !important;
        stroke: var(--diagram-danger-pale) !important;
      }

      .sections .section-5 rect,
      .sections .section-10 rect {
        fill: var(--diagram-primary-mist) !important;
        stroke: var(--diagram-primary-mist) !important;
      }

      .sections [class*="section-"] rect {
        stroke-width: 1px !important;
      }

      .sections [class*="section-"] text {
        fill: var(--diagram-text-muted) !important;
      }

      .items .node rect,
      .items .node path,
      .items .node circle,
      .items .node ellipse,
      .items .node polygon {
        fill: var(--diagram-surface) !important;
        stroke: var(--diagram-border-light) !important;
        stroke-width: 0.75px !important;
      }

      .items .node text,
      .items .node .nodeLabel,
      .items .node .nodeLabel p {
        color: var(--diagram-text) !important;
        fill: var(--diagram-text) !important;
      }`;

  const treeViewCSS = `
      /* treeView-beta */
      .treeView-node-description {
        font-size: 12px !important;
        font-weight: 700 !important;
        fill: var(--diagram-primary-strong) !important;
        color: var(--diagram-primary-strong) !important;
      }`;

  const timelineCSS = `
      /* timeline */
      .lineWrapper line {
        display: none !important;
      }`;

  const xyChartCSS = `
      /* xychart-beta */
      g.main > rect.background {
        fill: var(--diagram-bg) !important;
      }`;

  const ganttCSS = `
      /* gantt */
      .grid .tick {
        stroke-width: 0.5px !important;
      }

      .today {
        stroke-width: 1px !important;
      }

      .task {
        stroke-width: 1px !important;
      }`;

  const radarCSS = `
      /* radar-beta */
      .radarGraticule {
        fill: none !important;
        fill-opacity: 0 !important;
      }`;

  const sequenceCSS = `
      /* sequenceDiagram */
      [id$="-sequencenumber"] {
        fill: var(--diagram-primary-base) !important;
      }

      .sequenceNumber {
        fill: var(--diagram-bg) !important;
      }`;

  const ishikawaCSS = `
      /* ishikawa */
      .ishikawa .ishikawa-head,
      .ishikawa .ishikawa-label-box {
        stroke: var(--diagram-primary-base) !important;
      }`;

  const c4CSS = `
      /* C4 */
      .c4-shape {
        color: var(--c4-text) !important;
      }

      .c4-shape.c4-external {
        color: var(--c4-text) !important;
      }

      .c4-shape .basic,
      .c4-shape rect,
      .c4-shape path,
      .c4-shape circle,
      .c4-shape ellipse,
      .c4-shape line {
        stroke-width: 1px !important;
      }

      .relation {
        stroke: var(--diagram-line) !important;
      }

      .relationLabel {
        color: var(--diagram-text-muted) !important;
        fill: var(--diagram-text-muted) !important;
      }`;

  const treemapCSS = `
      /* treemap-beta */
      .treemapSection > rect.treemapSection {
        fill-opacity: 0.5 !important;
        stroke-width: 2px !important;
        stroke: #ffffff !important;
      }

      .treemapSectionHeader {
        fill: var(--diagram-bg) !important;
        fill-opacity: 0.58 !important;
      }

      .treemapLeaf {
        fill-opacity: 0.5 !important;
        stroke-width: 2px !important;
        stroke: #ffffff !important;
      }

      .treemapSection.section0,
      .treemapLeafGroup.leaf0x .treemapLeaf {
        fill: var(--treemap-1) !important;
      }

      .treemapSection.section1,
      .treemapLeafGroup.leaf1x .treemapLeaf {
        fill: var(--treemap-2) !important;
      }

      .treemapSection.section2,
      .treemapLeafGroup.leaf2x .treemapLeaf {
        fill: var(--treemap-3) !important;
      }

      .treemapSection.section3,
      .treemapLeafGroup.leaf3x .treemapLeaf {
        fill: var(--treemap-4) !important;
      }

      .treemapSection.section4,
      .treemapLeafGroup.leaf4x .treemapLeaf {
        fill: var(--treemap-5) !important;
      }

      .treemapSection.section5,
      .treemapLeafGroup.leaf5x .treemapLeaf {
        fill: var(--treemap-6) !important;
      }

      .treemapSection.section6,
      .treemapLeafGroup.leaf6x .treemapLeaf {
        fill: var(--treemap-7) !important;
      }

      .treemapSection.section7,
      .treemapLeafGroup.leaf7x .treemapLeaf {
        fill: var(--treemap-8) !important;
      }

      .treemapSection.section8,
      .treemapLeafGroup.leaf8x .treemapLeaf {
        fill: var(--treemap-9) !important;
      }

      .treemapSection.section9,
      .treemapLeafGroup.leaf9x .treemapLeaf {
        fill: var(--treemap-10) !important;
      }

      .treemapSection.section10,
      .treemapLeafGroup.leaf10x .treemapLeaf {
        fill: var(--treemap-11) !important;
      }

      .treemapSection.section11,
      .treemapLeafGroup.leaf11x .treemapLeaf {
        fill: var(--treemap-12) !important;
      }

      .treemapSectionLabel,
      .treemapLabel {
        fill: var(--diagram-text) !important;
      }

      .treemapSectionValue,
      .treemapValue {
        fill: var(--diagram-text-muted) !important;
      }

      .treemapTitle {
        fill: var(--diagram-title) !important;
        font-weight: 700 !important;
      }`;

  const themeCSS = [
    cssVariables,
    mindmapCSS,
    vennCSS,
    swimlaneCSS,
    kanbanCSS,
    treeViewCSS,
    sequenceCSS,
    ishikawaCSS,
    radarCSS,
    timelineCSS,
    xyChartCSS,
    ganttCSS,
    c4CSS,
    treemapCSS
  ].join("\n");

  return ({
  katexConfig: {
    "macros": {}
  },

  mathjaxConfig: {
    "tex": {},
    "options": {
      "enableEnrichment": false
    },
    "loader": {}
  },

  mermaidConfig: {
    "startOnLoad": false,
    "theme": "base",
    themeCSS,
    "c4": {
      "person_bg_color": secondary.deep,
      "person_border_color": neutral.deep,
      "external_person_bg_color": secondary.strong,
      "external_person_border_color": neutral.deep,
      "system_bg_color": primary.deep,
      "system_border_color": neutral.deep,
      "external_system_bg_color": primary.strong,
      "external_system_border_color": neutral.deep
    },
    "treemap": {
      "sectionStrokeWidth": "1",
      "leafStrokeWidth": "1",
      "labelColor": neutral.deep,
      "valueColor": neutral.strong,
      "titleColor": neutral.strong,
      "labelFontSize": "12px",
      "valueFontSize": "10px",
      "titleFontSize": "16px"
    },
    "quadrantChart": {
      "quadrantExternalBorderStrokeWidth": 0.75,
      "quadrantInternalBorderStrokeWidth": 0.5
    },
    "themeVariables": {
      /* all diagrams */
      "darkMode": false,
      "background": primary.soft,
      "fontFamily": "Noto Sans JP, sans-serif",
      "fontSize": "16px",

      "primaryColor": primary.soft,
      "primaryTextColor": neutral.strong,
      "primaryBorderColor": primary.strong,
      "secondaryColor": secondary.soft,
      "secondaryTextColor": neutral.strong,
      "secondaryBorderColor": secondary.strong,
      "tertiaryColor": tertiary.soft,
      "tertiaryTextColor": neutral.strong,
      "tertiaryBorderColor": tertiary.strong,
      "lineColor": neutral.soft,
      "textColor": neutral.strong,
      "titleColor": neutral.strong,

      /* flowchart */
      "defaultLinkColor": neutral.soft,
      "arrowheadColor": neutral.soft,
      "mainBkg": primary.mist,
      "nodeBorder": primary.soft,
      "nodeTextColor": neutral.strong,
      "edgeLabelBackground": neutral.white,
      "clusterBkg": primary.mist,
      "clusterBorder": primary.mist,

      /* sequenceDiagram, classDiagram, stateDiagram-v2 */
      "noteBkgColor": warning.pale,
      "noteTextColor": neutral.deep,
      "noteBorderColor": warning.strong,

      /* erDiagram */
      "rowOdd": neutral.white,
      "rowEven": neutral.white,

      /* sequenceDiagram */
      "actorBkg": secondary.pale,
      "actorBorder": secondary.strong,
      "actorTextColor": neutral.deep,
      "actorLineColor": neutral.base,
      "signalColor": neutral.base,
      "signalTextColor": neutral.deep,
      "labelBoxBkgColor": warning.pale,
      "labelBoxBorderColor": warning.strong,
      "labelTextColor": neutral.deep,
      "loopTextColor": neutral.deep,
      "activationBkgColor": tertiary.pale,
      "activationBorderColor": tertiary.strong,
      "sequenceNumberColor": primary.strong,

      /* gantt */
      "sectionBkgColor": secondary.mist,
      "altSectionBkgColor": neutral.white,
      "sectionBkgColor2": warning.pale,
      "excludeBkgColor": neutral.soft,
      "taskBkgColor": primary.mist,
      "taskBorderColor": primary.strong,
      "activeTaskBkgColor": secondary.mist,
      "activeTaskBorderColor": secondary.strong,
      "doneTaskBkgColor": tertiary.mist,
      "doneTaskBorderColor": tertiary.strong,
      "critBkgColor": danger.pale,
      "critBorderColor": danger.strong,
      "taskTextColor": neutral.deep,
      "taskTextDarkColor": neutral.deep,
      "taskTextLightColor": neutral.deep,
      "taskTextOutsideColor": neutral.strong,
      "taskTextClickableColor": neutral.strong,
      "gridColor": primary.strong,
      "todayLineColor": primary.deep,
      "vertLineColor": primary.base,

      /* journey */
      "personBkg": primary.base,
      "personBorder": primary.strong,
      "fillType0": primary.mist,
      "fillType1": primary.mist,
      "fillType2": primary.mist,
      "fillType3": primary.mist,
      "fillType4": primary.mist,
      "fillType5": primary.mist,
      "fillType6": primary.mist,
      "fillType7": primary.mist,

      /* stateDiagram-v2 */
      "stateBkg": primary.mist,
      "stateLabelColor": neutral.deep,
      "transitionColor": neutral.base,
      "transitionLabelColor": neutral.deep,
      "labelBackgroundColor": warning.pale,
      "compositeBackground": neutral.white,
      "altBackground": secondary.base,
      "compositeTitleBackground": neutral.white,
      "innerEndBackground": primary.strong,
      "specialStateColor": primary.strong,

      /* classDiagram */
      "relationColor": neutral.base,

      /* architecture-beta */
      "archEdgeColor": neutral.base,
      "archEdgeArrowColor": neutral.base,

      /* pie */
      "pie1": primary.pale,
      "pie2": warning.pale,
      "pie3": secondary.pale,
      "pie4": tertiary.pale,
      "pie5": danger.pale,
      "pie6": success.pale,
      "pie7": primary.base,
      "pie8": tertiary.base,
      "pieStrokeColor": neutral.white,
      "pieOuterStrokeColor": neutral.soft,
      "pieTitleTextColor": neutral.deep,
      "pieSectionTextColor": neutral.deep,
      "pieLegendTextColor": neutral.deep,

      /* venn-beta */
      "venn1": primary.pale,
      "venn2": secondary.pale,
      "venn3": tertiary.pale,
      "venn4": warning.pale,
      "venn5": danger.pale,
      "venn6": success.pale,
      "venn7": primary.base,
      "venn8": tertiary.base,
      "vennTitleTextColor": neutral.strong,
      "vennSetTextColor": neutral.deep,

      /* gitGraph */
      "commitLineColor": neutral.base,
      "git0": primary.pale,
      "git1": secondary.pale,
      "git2": tertiary.pale,
      "git3": warning.pale,
      "git4": danger.pale,
      "git5": success.pale,
      "git6": primary.base,
      "git7": tertiary.base,
      "gitInv0": primary.strong,
      "gitInv1": primary.strong,
      "gitInv2": primary.strong,
      "gitInv3": primary.strong,
      "gitInv4": primary.strong,
      "gitInv5": primary.strong,
      "gitInv6": primary.strong,
      "gitInv7": primary.strong,
      "branchLabelColor": neutral.deep,
      "gitBranchLabel0": neutral.deep,
      "gitBranchLabel1": neutral.deep,
      "gitBranchLabel2": neutral.deep,
      "gitBranchLabel3": neutral.deep,
      "gitBranchLabel4": neutral.deep,
      "gitBranchLabel5": neutral.deep,
      "gitBranchLabel6": neutral.deep,
      "gitBranchLabel7": neutral.deep,
      "commitLabelColor": neutral.deep,
      "commitLabelBackground": neutral.white,
      "tagLabelColor": neutral.deep,
      "tagLabelBackground": warning.pale,
      "tagLabelBorder": warning.strong,

      /* mindmap, timeline, journey */
      ...cScaleVars,

      /* quadrantChart */
      "quadrant1Fill": primary.mist,
      "quadrant2Fill": warning.mist,
      "quadrant3Fill": danger.mist,
      "quadrant4Fill": success.mist,
      "quadrant1TextFill": primary.strong,
      "quadrant2TextFill": warning.strong,
      "quadrant3TextFill": danger.strong,
      "quadrant4TextFill": success.strong,
      "quadrantPointFill": neutral.deep,
      "quadrantPointTextFill": neutral.deep,
      "quadrantXAxisTextFill": neutral.deep,
      "quadrantYAxisTextFill": neutral.deep,
      "quadrantTitleFill": neutral.deep,
      "quadrantInternalBorderStrokeFill": neutral.soft,
      "quadrantExternalBorderStrokeFill": neutral.soft,

      /* xychart-beta */
      "xyChart": {
        "backgroundColor": neutral.white,
        "titleColor": neutral.base,
        "xAxisLabelColor": neutral.base,
        "xAxisTitleColor": neutral.base,
        "xAxisTickColor": primary.strong,
        "xAxisLineColor": primary.strong,
        "yAxisLabelColor": neutral.base,
        "yAxisTitleColor": neutral.base,
        "yAxisTickColor": primary.strong,
        "yAxisLineColor": primary.strong,
        "plotColorPalette": primary.strong
      }
    }
  }
  });
})()
