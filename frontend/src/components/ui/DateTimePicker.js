import React from "react";
import { makeStyles } from "@mui/styles";
import moment from "moment";
import { useState, useEffect } from "react";
import { DayPicker } from "react-day-picker";
import {
  Button,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import "./day-picker.css";
import "react-day-picker/dist/style.css";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "row",
  },
  dayPicker: {
    // marginLeft: "15px",
  },
  timeSlotsGroup: {
    width: "470px",
    maxWidth: "500px",
    flexWrap: "wrap",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  dateResult: {
    marginLeft: "25px",
  },
}));

const timeSlots = [
  "09:00-10:00",
  "10:00-11:00",
  "11:00-12:00",
  "12:00-13:00",
  "13:00-14:00",
  "14:00-15:00",
  "15:00-16:00",
  "16:00-17:00",
  "17:00-18:00",
  "18:00-19:00",
  "19:00-20:00",
  "20:00-21:00",
];

export default function DateTimePicker({
  selectedDate,
  setSelectedDate,
  selectedTime,
  setSelectedTime,
}) {
  const classes = useStyles();
  const [day, setDay] = useState(null);
  const handleSelectedTime = (
    event: React.MouseEvent<HTMLElement>,
    newFormats: string[]
  ) => {
    setSelectedTime(newFormats);
  };
  useEffect(() => {
    if (day !== null) {
      setSelectedDate(
        day.getFullYear() +
          "/" +
          ("0" + (day.getMonth() + 1)).slice(-2) +
          "/" +
          ("0" + day.getDate()).slice(-2)
      );
    }
  });

  return (
    <div className={classes.container}>
      <div className={classes.dayPicker}>
        <DayPicker
          mode="single"
          selected={day}
          onSelect={setDay}
          showOutsideDays
        />
      </div>
      <div className={classes.timeSlotsGroup}>
        <div className={classes.dateResult}>
          <Typography variant="body1">
            {/* {
              selectedDate.getUTCFullYear() +
                "/" +
                ("0" + (selectedDate.getUTCMonth() + 1)).slice(-2) +
                "/" +
                ("0" + selectedDate.getUTCDate()).slice(-2)
              // " " +
              // ("0" + selectedDate.getUTCHours()).slice(-2) +
              // ":" +
              // ("0" + selectedDate.getUTCMinutes()).slice(-2) +
              // ":" +
              // ("0" + selectedDate.getUTCSeconds()).slice(-2)}
            } */}
          </Typography>
        </div>
        <ToggleButtonGroup
          sx={{
            display: "grid",
            gridTemplateColumns: "130px 130px 130px",
            gridGap: "20px",
            padding: "20px",
            flexWrap: "wrap",
          }}
          value={selectedTime}
          onChange={handleSelectedTime}
        >
          {timeSlots.map((slot) => {
            return (
              <ToggleButton
                value={slot}
                sx={{
                  borderLeft: "solid",
                  borderRadius: "2px",
                  borderColor: "#000000",
                }}
              >
                {slot}
              </ToggleButton>
              //<Button>{slot}</Button>
            );
          })}
        </ToggleButtonGroup>
      </div>
    </div>
  );
}
