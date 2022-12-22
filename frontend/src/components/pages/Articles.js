import { Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import CustomTable from "../ui/CustomTable";
import { makeStyles } from "@mui/styles";

// import Icon from "./icon/index";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: "100px",
    marginLeft: "18vw",
    width: "64%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
}));

// response format
// id: int
// advertiser_id: int
// post_time: datetime
// title: str
// context: str
const data = [
  {
    advertiser_id: "牙具工廠",
    post_time: "2022/10/12 20:00",
    title: "牙刷特賣會",
    context: "別再等啦！別再等啦！",
    path: "/articles/1", // format: `/articles/${id}`
  },
  {
    advertiser_id: "健身工廠",
    post_time: "2022/10/15 13:00",
    title: "健身比賽",
    context: "別再等啦！別再等啦！別再等啦！別再等啦！別再等啦！",
    path: "/articles/2", // format: `/articles/${id}`
  },
  {
    advertiser_id: "營養餐盒廠商",
    post_time: "2022/10/20 14:00",
    title: "秋葵餐盒跳樓大拍賣",
    context:
      "別再等啦！別再等啦！別再等啦！別再等啦！別再等啦！別再等啦！別再等啦！別再等啦！別再等啦！別再等啦！別再等啦！別再等啦！別再等啦！別再等啦！別再等啦！別再等啦！別再等啦！別再等啦！別再等啦！別再等啦！別再等啦！別再等啦！別再等啦！別再等啦！別再等啦！",
    path: "/articles/3", // format: `/articles/${id}`
  },
];

export default function Articles() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Typography variant="h3">Articles</Typography>
      <CustomTable
        data={data}
        columns={[
          {
            id: "title",
            label: "Title",
            minWidth: 200,
            width: 200,
            align: "center",
          },
          {
            id: "advertiser_id",
            label: "Advertiser",
            minWidth: 150,
            width: 150,
            align: "center",
          },
          {
            id: "post_time",
            label: "Post Time",
            minWidth: 200,
            width: 200,
            align: "center",
          },
          {
            id: "context",
            label: "Context",
            minWidth: 200,
            width: 455,
            align: "center",
          },
        ]}
        hasLink
        nextStep="readArticles"
        //nextStepOnClick={handleReadArticles} TODO
      />
    </div>
  );
}