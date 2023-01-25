import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import hdphn from "../images/hdphn.jpg";
import Grid from "@mui/material/Grid";


const headphones = [
  {
    name: "Beats Studio3 Wireless",
    price: "$50",
    description: "Great Sound Quality",
  },
  {
    name: "Bose QuietComfort 35 II",
    price: "$75",
    description: "Comfortable and Durable",
  },
  { name: "Sony WH-1000XM4", price: "$100", description: "Noise Cancellation" },
  {
    name: "Sennheiser HD 660 S",
    price: "$150",
    description: "Wireless and Bluetooth",
  },
  {
    name: "Audio-Technica ATH-M50x",
    price: "$200",
    description: "High-Resolution Audio",
  },
  {
    name: "AKG Pro Audio K371",
    price: "$250",
    description: "In-Ear Noise Cancellation",
  }
];

export default function ActionAreaCard() {
  return (
    <Grid container spacing={2}>
      {headphones.map((elem,index) => {
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
                  <Typography gutterBottom variant="h6" color="#F44336" component="div">
                    {elem.name}
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
