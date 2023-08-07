import * as React from "react";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Grid from "@mui/material/Grid";

import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import Link from "next/link";
import ListItem from "@mui/material/ListItem";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import ListItemIcon from "@mui/material/ListItemIcon";
import MenuIcon from "@mui/icons-material/Menu";
import YouTubeIcon from "@mui/icons-material/YouTube";
import DescriptionIcon from "@mui/icons-material/Description";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);
  const size = "35px";

  const variant = "left";
  return (
    <Grid container justifyContent="flex-start" alignItems="center">
      <Grid item>
        <Drawer
          open={open}
          anchor="right"
          onClose={() => setOpen(false)}
          PaperProps={{
            sx: {
              backgroundColor: "#3749ad",
              width: 250,
            },
          }}
        >
          <List>
            <Link href={`/`}>
              <ListItem button onClick={() => setOpen(false)}>
                <ListItemIcon>
                  <ListItem
                    style={{
                      textDecoration: "none",
                      color: "#fff",
                      fontWeight: "bolder",
                    }}
                    to="/"
                  >
                    <HomeIcon className="mr-3" sx={{ color: "white" }} /> Home
                  </ListItem>
                </ListItemIcon>
              </ListItem>
            </Link>
            <Link href={`/resume`}>
              <ListItem button onClick={() => setOpen(false)}>
                <ListItemIcon>
                  <ListItem
                    style={{
                      textDecoration: "none",
                      color: "#fff",
                      fontWeight: "bolder",
                    }}
                  >
                    <DescriptionIcon className="mr-3" sx={{ color: "white" }} />
                    Resume
                  </ListItem>
                </ListItemIcon>
              </ListItem>
            </Link>
            <Link href={`/blog`}>
              <ListItem button onClick={() => setOpen(false)}>
                <ListItemIcon>
                  <ListItem
                    style={{
                      textDecoration: "none",
                      color: "#fff",
                      fontWeight: "bolder",
                    }}
                    to="/about"
                  >
                    <RssFeedIcon className="mr-3" sx={{ color: "white" }} />
                    Blog
                  </ListItem>
                </ListItemIcon>
              </ListItem>
            </Link>
            <Link href={`https://github.com/ducks23`}>
              <ListItem button onClick={() => setOpen(false)}>
                <ListItemIcon>
                  <ListItem
                    style={{
                      textDecoration: "none",
                      color: "#fff",
                      fontWeight: "bolder",
                    }}
                  >
                    <GitHubIcon className="mr-3" sx={{ color: "white" }} />
                    Github
                  </ListItem>
                </ListItemIcon>
              </ListItem>
            </Link>
            <Link
              href={`https://www.youtube.com/channel/UCsbiWRPPhj6BfmqGqQeIhVw`}
            >
              <ListItem button onClick={() => setOpen(false)}>
                <ListItemIcon>
                  <ListItem
                    style={{
                      textDecoration: "none",
                      color: "#fff",
                      fontWeight: "bolder",
                    }}
                    to="/about"
                  >
                    <YouTubeIcon className="mr-3" sx={{ color: "white" }} />
                    Youtube
                  </ListItem>
                </ListItemIcon>
              </ListItem>
            </Link>
          </List>
        </Drawer>
      </Grid>

      <Grid item>
        <Button
          style={{
            maxWidth: size,
            maxHeight: size,
            minWidth: size,
            minHeight: size,
          }}
          onClick={() => setOpen(!open)}
        >
          <MenuIcon />
        </Button>
      </Grid>
    </Grid>
  );
}
