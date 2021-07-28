import React, { useEffect, useState } from 'react';

// importing Link from react router dom
import { Link } from 'react-router-dom';

// importing componenets from Material UI
import {
  Button,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  CardActions,
  Divider,
  Typography,
  Input,
  makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles({
  list: {
    width: 500,
  },
  fullList: {
    width: 'auto',
  },
});

const Main = () => {
  // creating a classes variable to customize styles
  const classes = useStyles();

  // creating state to hold data

  const [itemData, setItemData] = useState({
    itemid: 0,
    name: '',
    description: '',
    startingPrice: 0,
    Url: '',
    isComplete: false,
  });

  useEffect(() => {
    fetch('/api/homepage')
      .then((data) => data.json())
      .then((data) => {
        console.log('item data fetched /api/homepage =>', data);
        setItemData(data[0]);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Card className='main'>
      <CardActionArea>
        <CardMedia className={classes.media} image='' title='Auction' />
        <CardContent>
          <Typography gutterBottom variant='h5' component='h2'>
            {itemData.name}
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
            {itemData.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Card size='small' color='primary'>
          {itemData.startingPrice}
        </Card>
        <Button size='small' color='primary'>
          Bid
        </Button>
      </CardActions>
    </Card>
  );
};

export default Main;
