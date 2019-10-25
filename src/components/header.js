import React from "react"
import { AppBar, Toolbar } from "@material-ui/core"
import { withStyles } from "@material-ui/core/styles"
import { DefaultLink } from "../components/styledTemplate"

const useStyles = theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
})

class Header extends React.Component {
  render() {
    const { title } = this.props
    return (
      <div style={{ marginBottom: 50 }}>
        <AppBar position="fixed" color="default">
          <Toolbar>
            <DefaultLink to={`/`}>{title}</DefaultLink>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

export default withStyles(useStyles)(Header)
