import { Typography, Button } from "@material-ui/core"
import { styled } from "@material-ui/core/styles"
import { Link } from "gatsby"

export const DefaultLink = styled(Link)({
  boxShadow: `none`,
  textDecoration: `none`,
  color: `inherit`,
  fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
  "&:hover": {
    textDecoration: `none`,
  },
})

export const TitleLink = styled(Link)({
  fontSize: "20px",
  lineHeight: "1",
  borderBottom: "3px solid #78909c",
  color: "#000000",
  "&:hover": {
    textDecoration: `none`,
  },
})

export const TitleButton = styled(Button)({
  color: "#424242",
  paddingLeft: "0",
  paddingRight: "0",
  paddingBottom: "0",
})

export const TitleTypography = styled(Typography)({
  fontSize: "30px",
  lineHeight: "1.5",
  color: "#000000",
})

export const DateTypography = styled(Typography)({
  fontSize: "14px",
  color: "#9e9e9e",
  textAlign: "right",
  marginRight: "1rem",
})

export const PreViewTypography = styled(Typography)({
  fontSize: "16px",
  color: "#9e9e9e",
  marginBottom: "4rem",
})

export const ContentTypography = styled(Typography)({
  fontSize: "18px",
  color: "#000000",
  marginTop: "2rem",
  marginBottom: "1rem",
  lineHeight: "1.8",
})

export const NavButton = styled(Button)({
  border: "1px solid #9e9e9e",
  color: "#424242",
})
