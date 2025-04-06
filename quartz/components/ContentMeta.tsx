import { Date, getDate } from "./Date"
import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import readingTime from "reading-time"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"
import { JSX } from "preact"
import style from "./styles/contentMeta.scss"

interface ContentMetaOptions {
  /**
   * Whether to display reading time
   */
  showReadingTime: boolean
  showComma: boolean
}

const defaultOptions: ContentMetaOptions = {
  showReadingTime: true,
  showComma: true,
}

export default ((opts?: Partial<ContentMetaOptions>) => {
  // Merge options with defaults
  const options: ContentMetaOptions = { ...defaultOptions, ...opts }

  function ContentMetadata({ cfg, fileData, displayClass }: QuartzComponentProps) {
    const text = fileData.text

    if (text) {
      const segments: (string | JSX.Element)[] = []

      if (fileData.dates) {
        // CUSTOM CODE
        // segments.push(<Date date={getDate(cfg, fileData)!} locale={cfg.locale} />)
        segments.push(<Date date={fileData.dates.created!} locale={cfg.locale} />)
        segments.push(<Date date={fileData.dates.modified!} locale={cfg.locale} />)
      }

      // Display reading time if enabled
      if (options.showReadingTime) {
        const { minutes, words: _words } = readingTime(text)
        const displayedTime = i18n(cfg.locale).components.contentMeta.readingTime({
          minutes: Math.ceil(minutes),
        })
        segments.push(<span>{displayedTime}</span>)
      }

      // CUSTOM CODE
      return (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginTop: "0.25rem",
          }}
        >
          <span className="content-meta">Planted: {segments[0]}</span>
          <span className="content-meta" style={{ margin: "0 10px" }}>
            |
          </span>{" "}
          {/* Adjust margin as needed */}
          <span className="content-meta">Last tended: {segments[1]}</span>
          <span className="content-meta" style={{ margin: "0 10px" }}>
            |
          </span>{" "}
          {/* Adjust margin as needed */}
          <span className="content-meta">{segments[2]}</span>
        </div>
      )
      // return (
      //   <p show-comma={options.showComma} class={classNames(displayClass, "content-meta")}>
      //     {segments}
      //   </p>
      // )
    } else {
      return null
    }
  }

  ContentMetadata.css = style

  return ContentMetadata
}) satisfies QuartzComponentConstructor

//ContentMeta.tsx
