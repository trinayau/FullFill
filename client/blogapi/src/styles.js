import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    appBar: {
		borderBottom: `1px solid ${theme.palette.divider}`,
	},
  root: {
    display: "flex",
    justifyContent: "center"
  },
  layout: {
    minHeight: "230px"
  }
}));

export default useStyles;
