import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
// import { classNames } from "./util/lang"


const Sidebar = ({ }: QuartzComponentProps) => {
  return (
    <nav className="custom-sidebar">
      <ul>
        <li><a href="/research">Research</a></li>
        <li><a href="/personal">Personal</a></li>
      </ul>
    </nav>
  )
}

Sidebar.css = `
.custom-sidebar ul {
  list-style: none;
  padding-left: 0;
}

.custom-sidebar li {
  margin: 0.5rem 0;
}

.custom-sidebar a {
  text-decoration: none;
  color: var(--secondary);
  font-family: "Markazi Text", serif;
  font-size: 1.5rem;
}

.custom-sidebar a:hover {
  color: var(--tertiary)
}
`

export default (() => Sidebar) satisfies QuartzComponentConstructor