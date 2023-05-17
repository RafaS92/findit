import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function ActionAreaCard({ name, position, img }) {
  return (
    <Card
      className="cardActionArea"
      sx={{ minWidth: "350px", backgroundColor: "rgb(199, 211, 224)" }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          image={img}
          alt="green iguana"
          object-fit="scale-down"
          sx={{ objectFit: "scale-down" }}
        />
        <CardContent sx={{ backgroundColor: "#efefef" }}>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {position}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
