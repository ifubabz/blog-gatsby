import React from "react"
import { rhythm } from "../utils/typography"
import Header from "./header"

class Layout extends React.Component {
  render() {
    const { title, children } = this.props
    // const rootPath = `${__PATH_PREFIX__}/`
    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(30),
          padding: `${rhythm(1.7)} ${rhythm(3 / 4)}`,
        }}
      >
        <Header title={title} />
        <main>{children}</main>
        <footer></footer>
      </div>
    )
  }
}

export default Layout
