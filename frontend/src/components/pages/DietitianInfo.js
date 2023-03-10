import React from "react";
import { makeStyles } from "@mui/styles";
import {
  Typography,
  Dialog,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
import AlignedText from "../ui/AlignedText";

const useStyles = makeStyles((theme) => ({
  title: {
    marginBottom: "25px",
  },
}));

const displayedColumns = [
  { displayedName: "Name", key: "name" },
  { displayedName: "Work Unit", key: "work_unit" },
  { displayedName: "Domain", key: "arrDomain" },
  { displayedName: "Available Time", key: "arrAvailTime" },
  { displayedName: "Gender", key: "gender" },
  { displayedName: "Introduction", key: "introduction" },
];

export default function DietitianInfo({ showDialog, setShowDialog, data }) {
  const classes = useStyles();

  return (
    <Dialog open={showDialog} maxWidth="md" fullWidth={true}>
      <DialogContent sx={{ padding: "25px 30px" }}>
        <Typography variant="h4" className={classes.title}>
          Dietitian Information
        </Typography>
        {displayedColumns.map((col) => {
          if (col.key === "arrAvailTime") {
            return (
              <AlignedText
                text={col.displayedName}
                type="available_time"
                childrenType="available_time"
              >
                <Typography variant="body1">
                  {data &&
                    data.length !== 0 &&
                    data[0][col.key] !== undefined &&
                    data[0][col.key].join(" · ")}
                </Typography>
              </AlignedText>
            );
          } else if (col.key === "arrDomain") {
            return (
              <AlignedText text={col.displayedName} childrenType="text">
                <Typography variant="body1">
                  {data &&
                    data.length !== 0 &&
                    data[0][col.key] !== undefined &&
                    data[0][col.key].join(" / ")}
                </Typography>
              </AlignedText>
            );
          } else {
            return (
              <AlignedText text={col.displayedName} childrenType="text">
                <Typography variant="body1">{data[0][col.key]}</Typography>
              </AlignedText>
            );
          }
        })}
      </DialogContent>
      <DialogActions>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setShowDialog(false)}
          disableElevation
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}
