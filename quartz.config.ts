import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

const config: QuartzConfig = {
  configuration: {
    pageTitle: "Bonnie's Notes",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    baseUrl: "by2328.github.io/garden",
    ignorePatterns: [".obsidian"],
    defaultDateType: "modified",
    theme: {
      typography: {
        header: "Schibsted Grotesk",
        body: "Source Sans Pro",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#F7F8F9",
          lightgray: "#CCCCCC",
          gray: "#999999",
          darkgray: "#666666",
          dark: "#222222",
          secondary: "#454C53",
          tertiary: "#999999",
          highlight: "#E8EBED",
          tag1: "#454C53",
          tag2: "#cf4e4e",
          tag3: "#53b8d4",
          tag4: "#e6ae40",
          tag5: "#855db0",
          tag6: "#3b71b8",
          tag7: "#999999",
          tag8: "#999999",
          tag9: "#999999",
          tag10: "#999999",
        },
        darkMode: {
          light: "#161618",
          lightgray: "#393639",
          gray: "#646464",
          darkgray: "#d4d4d4",
          dark: "#ebebec",
          secondary: "#7b97aa",
          tertiary: "#84a59d",
          highlight: "rgba(143, 159, 169, 0.15)",
          tag1: "#72787F",
          tag2: "#B95050",
          tag3: "#347A98",
          tag4: "#D1952E",
          tag5: "#7047AE",
          tag6: "#28538A",
          tag7: "#999999",
          tag8: "#999999",
          tag9: "#999999",
          tag10: "#999999",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.TableOfContents(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"], // you can add 'git' here for last modified from Git but this makes the build slower
      }),
      Plugin.Latex({ renderEngine: "katex" }),
      Plugin.SyntaxHighlighting(),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
    ],
    filters: [Plugin.ExplicitPublish()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources({ fontOrigin: "googleFonts" }),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
