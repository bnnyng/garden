import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [
    Component.ConditionalRender({
      component: Component.RecentNotes({ 
        // filter: (file) => {
        //     return file.frontmatter?.publish == true
        // },
        title: "Recently Edited",
        limit: 5,
        showTags: false,
        filter: (file: { frontmatter?: { publish?: unknown, tags?: unknown[] } }): boolean => {
            // Explicit return type ensures boolean output
            const publishFlag = file.frontmatter?.publish === true || 
                              file.frontmatter?.publish === "true";
            const tags = file.frontmatter?.tags ?? []; // Nullish coalescing as fallback
            const hasPermanentTag = tags.some((tag: unknown) => 
              String(tag).toLowerCase().trim() === "permanent-note"
            );
            return Boolean(publishFlag && hasPermanentTag); // Force boolean conversion
        },
        sort: (a: any, b: any) => {
            const getDate = (file: any) => 
              file.frontmatter?.lastmod || file.dates?.created || "1970-01-01";
            return new Date(getDate(b)).getTime() - new Date(getDate(a)).getTime();
        },
      }),  
      condition: (page) => page.fileData.slug == "index",
    })
  ],
  footer: Component.Footer({
    links: {
      // GitHub: "https://github.com/jackyzha0/quartz",
      // "Discord Community": "https://discord.gg/cRFFHYye7t",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    // Component.ConditionalRender({
    //   component: Component.Breadcrumbs(),
    //   condition: (page) => page.fileData.slug !== "index",
    // }),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        // { Component: Component.Darkmode() },
      ],
    }),
    // Component.Explorer(),
    // Component.Graph(),
    // Component.Backlinks(),
    Component.DesktopOnly(Component.TableOfContents()),
  ],
  right: [
    Component.Graph(),
    // Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [
    // Component.Breadcrumbs(), 
    Component.ArticleTitle(), 
    Component.ContentMeta()
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        // { Component: Component.Darkmode() },
      ],
    }),
    // Component.Explorer(),
    
    Component.DesktopOnly(Component.TableOfContents()),
  ],
  right: [
    Component.Graph(),
    Component.Backlinks(),
  ]
}
