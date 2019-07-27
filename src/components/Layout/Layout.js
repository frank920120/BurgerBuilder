import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./style";
const Layout = ({ classes, children }) => (
  <>
    <div>Toolbar,SideDrawer,Backdrop</div>
    <main className={classes.Content}>{children}</main>
  </>
);

export default withStyles(styles)(Layout);
