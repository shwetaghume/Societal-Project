import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@mui/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import QR from "./QR.png";
import { Link } from "react-router-dom";
import FileCopyIcon from "@mui/icons-material/FileCopy";
// import SchoolLogo from "./School Logo.png";
import SchoolLogo from "./Matrix-removebg-preview.png";
import SmallSchoolLogo from "./MatrixSmall.png";
import "./Navbar.css";

const drawerWidth = 240;
const navItems = [
  { label: "Home", path: "/" },
  { label: "Staff Details", path: "/staff" },
  { label: "Admission", path: "/admission" },
  { label: "Gallery", path: "/gallery/event" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
  { label: "Developers", path: "/developers" },
];

const useStyles = makeStyles((theme) => ({
  listItemButton: {
    textAlign: "center",
    "&:hover": {
      color: "green",
    },
  },
}));

function CustomDialog({ open, onClose }) {
  const [isCopied, setIsCopied] = useState(false);
  const textAreaRef = useRef(null);

  const handleCopyClick = () => {
    if (textAreaRef.current) {
      textAreaRef.current.select();
      document.execCommand("copy");
      setIsCopied(true);
    }
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Scan to pay with any UPI app</DialogTitle>
      <DialogContent
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <img src={QR} alt="QR-Pic" style={{ height: "200px" }} />
        <div>
          <DialogTitle>
            UPI ID: ganeshkugaji@okksbi
            <input
              ref={textAreaRef}
              readOnly
              value="ganeshkugaji@okksbi"
              style={{ position: "absolute", left: "-9999px" }}
            />
            <IconButton
              onClick={handleCopyClick}
              sx={{
                color: isCopied ? "green" : "black",
                marginLeft: "10px",
                "&:hover": {
                  backgroundColor: "transparent",
                },
              }}
            >
              <FileCopyIcon />
            </IconButton>
          </DialogTitle>
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
}

function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const classes = useStyles();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "90px" }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ backgroundColor: "black" }}>
        <Toolbar sx={{ height: "90px" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{
              mr: 2,
              display: { lg: "none", xs: "block" }, // Show toggle button for lg and hide for xs
            }}
          >
            <MenuIcon />
          </IconButton>
          <img
            src={SchoolLogo}
            alt="School Logo"
            className="schL"
            // display: { xs: "none", lg: "block" }, // Hide for xs and show for lg
            style={{
              height: "70px",
              margin: "0 10px",
              marginTop: "5px",
            }}
            xs={{ height: "40px" }}
          />

          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "none", lg: "block" },
            }}
          >
            Great Imperial University Michigan
          </Typography>
          <Box sx={{ display: { xs: "none", lg: "block" } }}>
            {navItems.map((item) => (
              <Button
                key={item.label}
                component={Link}
                to={item.path}
                sx={{
                  color: "#fff",
                  margin: "3px",
                  "&:hover": {
                    color: "#76ff03",
                  },
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>
          <Button
            onClick={handleOpenModal}
            className="Donate"
            sx={{
              color: "black",
              padding: " 10px 10px",
              borderRadius: "20px",
              backgroundColor: "#42de4e",
              "&:hover": {
                backgroundColor: "#76ff03",
              },
              display: { xs: "none", lg: "block" }, // Show button for xs and hide for lg
            }}
          >
            Donate US
          </Button>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
            <img
              src={SmallSchoolLogo}
              alt="School Logo"
              style={{ height: "60px", margin: "0 10px", marginTop: "5px" }}
            />
            <Typography variant="h6">
            Great Imperial University Michigan
            </Typography>
            <Divider />
            <List>
              {navItems.map((item) => (
                <ListItem key={item.label} disablePadding>
                  <ListItemButton className={classes.listItemButton}>
                    <Link
                      to={item.path}
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <ListItemText primary={item.label} />
                    </Link>
                  </ListItemButton>
                </ListItem>
              ))}
            </List>

            <Button
              onClick={handleOpenModal}
              sx={{
                color: "black",
                marginRight: "80px",
                padding: " 10px 25px",
                borderRadius: "20px",
                backgroundColor: "#42de4e",
                "&:hover": {
                  backgroundColor: "#76ff03",
                },
                // display: { xs: "none", lg: "block" }, // Show button for xs and hide for lg
              }}
            >
              Donate US
            </Button>
          </Box>
        </Drawer>
      </nav>
      <CustomDialog open={openModal} onClose={handleCloseModal} />
    </Box>
  );
}

Navbar.propTypes = {
  window: PropTypes.func,
};

export default Navbar;
