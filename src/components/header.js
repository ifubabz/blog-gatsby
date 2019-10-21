import React from "react"
import { AppBar, Toolbar } from "@material-ui/core"
import { withStyles } from "@material-ui/core/styles"
import { Link } from "gatsby"

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
    const { title, classes } = this.props
    return (
      <div>
        <AppBar position="fixed" color="#ffffff">
          <Toolbar>
            <Link
              style={{
                boxShadow: `none`,
                textDecoration: `none`,
                color: `inherit`,
                fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
              }}
              to={`/`}
            >
              {title}
            </Link>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

export default withStyles(useStyles)(Header)
