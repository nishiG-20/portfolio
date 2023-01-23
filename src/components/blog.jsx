import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Grid from "@mui/material/Grid";
import sanityClient from "../client.js";

function Blog() {
  const [earPhnData, setEarPhnData] = React.useState();
  React.useEffect(() => {
    (async () => {
      const data = await sanityClient.fetch(
        `*[_type=="post"]{
      title,
      slug,
      mainImage{
        asset->{
          _id,
          url
        },
        alt
      }
    }`
      );
      setEarPhnData(data);
    })();
  }, []);

  const cardStyle = {
    maxWidth: 320,
    height: 200,
    mt: 3,
    ml:5,
    "&:hover": {
      transform: "scale(1.2)",
    },
  };

  return (
    <Grid container spacing={2}>
      {earPhnData &&
        earPhnData.map((elem, index) => {
          let { mainImage, title } = elem;
          return (
            <Grid item xs={4} key={index}>
              <Card sx={[cardStyle]}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={mainImage.asset.url}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                    ></Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          );
        })}
    </Grid>
  );
}

export default Blog;
