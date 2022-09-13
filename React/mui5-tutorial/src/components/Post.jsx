import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ShareIcon from "@mui/icons-material/Share";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";

const Post = () => {
  return (
    <Card sx={{ margin: 5 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red" }} aria-label='post'>
            P
          </Avatar>
        }
        action={
          <IconButton aria-label='settings'>
            <MoreVertIcon />
          </IconButton>
        }
        title='Perfect Post'
        subheader='September 14, 2016'
      />
      <CardMedia
        component='img'
        height='400'
        image='https://media.istockphoto.com/photos/complex-telecommunications-picture-id1310495674?k=20&m=1310495674&s=612x612&w=0&h=AcuLwWJaszZZSGu8rXwNxobeKt5VC97Fs6lasGcpnEE='
        alt='Rare picture of a post'
      />
      <CardContent>
        <Typography variant='body2' color='text.secondary'>
          This impressive post is a perfect mess and a fun job to work together
          with your technicians. Add a dozen of cable connections along with the
          rest, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label='add to favorites'>
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite sx={{ color: "red" }} />}
          />
        </IconButton>
        <IconButton aria-label='share'>
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Post;
