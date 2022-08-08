import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import materias from "../pages/api/subjects.json";

export default function BasicList() {
  return (
    <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper", marginTop: "8vh" }}>
      <nav aria-label="main mailbox folders">
        <List>
          {materias.subjects.map((option) => (
            <ListItem>
              <ListItemButton  sx={{ border: 1, borderColor: "gray", borderRadius: 2}} >
                <ListItemText
                  primary={option.label}
                  sx={{ textAlign: "center" }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </nav>
    </Box>
  );
}
