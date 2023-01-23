import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import hdphn from "../images/hdphn.jpg";
import Grid from "@mui/material/Grid";

export default function ActionAreaCard() {
  return (
    <Grid container spacing={2}>
      {[1, 2, 3, 4, 5, 6].map((elem,index) => {
        return (
          <Grid item xs={4} key={index}>
            <Card sx={{ maxWidth: 320,height:200, mt: 3 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={hdphn}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Headphone {index+1}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
}
