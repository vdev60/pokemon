import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

export default function Spinner({color}) {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <CircularProgress sx={{color: color}} />
    </Box>
  );
}
