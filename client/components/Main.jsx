import React, { useEffect, useState } from 'react';
import Timer from './Timer';
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
  wrapper: {
    display: 'grid'
  },
  media: {
    display: 'flex',
    flexDirection: "column",
  }

});

const Main = () => {
  // creating a classes variable to customize styles
  const classes = useStyles();

  // creating state to hold data

  const [itemData, setItemData] = useState([]);

  useEffect(() => {
    fetch('/api/homepage')
      .then((data) => data.json())
      .then((data) => {
        console.log('item data fetched /api/homepage =>', data);
        //data is now an array of items
        //modify handle submit and send it when the function with unique identifier
        setItemData(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleBid = (e) => {
    e.preventDefault();
    const etargetID = e.target.id
    const bid = Number(itemData.startingPrice) + 20;
    const user = 'player1';
    const itemName = itemData.name;

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ bid: bid, user: user, itemName: itemName }),
    };

    console.log(options.body);

    fetch('/api/bid', options)
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        setItemData({ ...itemData, startingPrice: data.bidPrice })
      })
      .catch((e) => console.log('error in sending bid => ', e));

  };

  return (
    <React.Fragment>
      <Card className={classes.wrapper}
        {itemData.map(el => (
          <div className={classes.media} >
            <CardActionArea>
              <CardMedia image='' title='Auction' />
              <CardContent>
                <Typography gutterBottom variant='h5' component='h2' >
                  {el.name}
                </Typography>
                <Typography variant='body2' color='textSecondary' component='p'>
                  {el.description}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Card size='small' color='primary'>
                {el.startingPrice}
              </Card>
              <button id = {String(el.itemId)} onClick={handleBid} size='small' color='primary'>
                Bid
              </button>
            </CardActions>
          </div >
        ))}
      </Card>
    </React.Fragment>
  );
};

export default Main;
{/* <Timer item={itemData} setItem={setItemData} /> */ }