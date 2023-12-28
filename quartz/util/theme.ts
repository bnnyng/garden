export interface ColorScheme {
  light: string
  lightgray: string
  gray: string
  darkgray: string
  dark: string
  secondary: string
  tertiary: string
  highlight: string
  tag1: string
  tag2: string
  tag3: string
  tag4: string
  tag5: string
  tag6: string
  tag7: string
  tag8: string
  tag9: string
  tag10: string
}

export interface Theme {
  typography: {
    header: string
    body: string
    code: string
  }
  colors: {
    lightMode: ColorScheme
    darkMode: ColorScheme
  }
}

const DEFAULT_SANS_SERIF =
  '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif'
const DEFAULT_MONO = "ui-monospace, SFMono-Regular, SF Mono, Menlo, monospace"

export function googleFontHref(theme: Theme) {
  const { code, header, body } = theme.typography
  return `https://fonts.googleapis.com/css2?family=${code}&family=${header}:wght@400;700&family=${body}:ital,wght@0,400;0,600;1,400;1,600&display=swap`
}

export function joinStyles(theme: Theme, ...stylesheet: string[]) {
  return `
${stylesheet.join("\n\n")}

:root {
  --light: ${theme.colors.lightMode.light};
  --lightgray: ${theme.colors.lightMode.lightgray};
  --gray: ${theme.colors.lightMode.gray};
  --darkgray: ${theme.colors.lightMode.darkgray};
  --dark: ${theme.colors.lightMode.dark};
  --secondary: ${theme.colors.lightMode.secondary};
  --tertiary: ${theme.colors.lightMode.tertiary};
  --highlight: ${theme.colors.lightMode.highlight};

  --tag1: ${theme.colors.lightMode.tag1};
  --tag2: ${theme.colors.lightMode.tag2};
  --tag3: ${theme.colors.lightMode.tag3};
  --tag4: ${theme.colors.lightMode.tag4};
  --tag5: ${theme.colors.lightMode.tag5};
  --tag6: ${theme.colors.lightMode.tag6};
  --tag7: ${theme.colors.lightMode.tag7};
  --tag8: ${theme.colors.lightMode.tag8};
  --tag9: ${theme.colors.lightMode.tag9};
  --tag10: ${theme.colors.lightMode.tag10};

  --headerFont: "${theme.typography.header}", ${DEFAULT_SANS_SERIF};
  --bodyFont: "${theme.typography.body}", ${DEFAULT_SANS_SERIF};
  --codeFont: "${theme.typography.code}", ${DEFAULT_MONO};
}

:root[saved-theme="dark"] {
  --light: ${theme.colors.darkMode.light};
  --lightgray: ${theme.colors.darkMode.lightgray};
  --gray: ${theme.colors.darkMode.gray};
  --darkgray: ${theme.colors.darkMode.darkgray};
  --dark: ${theme.colors.darkMode.dark};
  --secondary: ${theme.colors.darkMode.secondary};
  --tertiary: ${theme.colors.darkMode.tertiary};
  --highlight: ${theme.colors.darkMode.highlight};

  --tag1: ${theme.colors.darkMode.tag1};
  --tag2: ${theme.colors.darkMode.tag2};
  --tag3: ${theme.colors.darkMode.tag3};
  --tag4: ${theme.colors.darkMode.tag4};
  --tag5: ${theme.colors.darkMode.tag5};
  --tag6: ${theme.colors.darkMode.tag6};
  --tag7: ${theme.colors.darkMode.tag7};
  --tag8: ${theme.colors.darkMode.tag8};
  --tag9: ${theme.colors.darkMode.tag9};
  --tag10: ${theme.colors.darkMode.tag10};
}
`
}
