import { Avatar, Button, Card, CardActionArea, CardActions, CardContent, CardHeader, CardMedia, Typography } from "@mui/material";
import { Product } from "../../app/Models/product";
import { Link } from "react-router-dom";
import { speakMessage } from '../../app/layout/SpeakMessage'; // Import speakMessage function
import ViewButtonClickSound from '@sounds/Product-View-Sound.mp3'; // Header menu clicking sound

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {

  const playSound = (soundFile: string) => {
    try {
        const sound = new Audio(soundFile);
        sound.play();
    } catch (error) {
        console.error('Error playing sound:', error);
    }
};
  // Method to handle click event and speak a message after one second
  const handleClick = () => {
    playSound(ViewButtonClickSound); // Play the sound
    setTimeout(() => {
      speakMessage(`You are Viewing ${product.name} product details`);
    }, 1000); // Delay execution by one second (1000 milliseconds)
  };

  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: 'secondary.main' }}>
            {product.name.charAt(0).toUpperCase()}
          </Avatar>
        }
        title={product.name}
        titleTypographyProps={{
          sx: { fontWeight: 'bold', color: 'primary.main' }
        }}
      />
      <CardActionArea>
        <CardMedia
          sx={{ height: 140, backgroundSize: 'contain', bgcolor: 'primary.light' }}
          image={product.pictureUrl}
          title={product.name}
        />
        <CardContent>
          <Typography gutterBottom color='secondary' variant="h5" component="div">
            ${(product.price / 100).toFixed(2)}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product.brand} / {product.type}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small"> Add to Cart</Button>
        <Button
          component={Link} to={`/catalog/${product.id}`}
          size="small"
          onClick={handleClick}> {/* Call handleClick function when the button is clicked */}
          View
        </Button>
      </CardActions>
    </Card>
  )
}
