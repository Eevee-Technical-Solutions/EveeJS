import React, { useState, useEffect } from 'react';

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
  Paper,
  makeStyles,
} from '@material-ui/core';

const Timer = (props) => {
  // const timeNow = Date.now();
  // const [time, setTime] = useState({ time: timeNow });
  //time in milliseconds since UTC 1970 blah

  // const [winner, setWinner] = useState({
  //   userName: '',
  //   itemName: '',
  //   bidPrice: 0,
  // });

  // // setInterval(() => {
  // if (time + 30000) {
  //   const options = {
  //     method: 'GET',
  //     body: JSON.stringify({ itemName: props.item.name }),
  //   };

  // fetch('/api/winner', options)
  //   .then((data) => data.json())
  //   .then((data) => setWinner(data))
  //   .catch((e) => console.log('error in fetching winner =>', e));

  // fetch('/api/homepage')
  //   .then((data) => data.json())
  //   .then((data) => setItemData(data[0]))
  //   .catch((e) => console.log('error in updating item', e));
  // }
  // }, 10000);

  const handleGetWinner = () => {
    // console.log("do you exist?", props.item.name)
    const options = {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ itemName: props.item.name }),
    };

    fetch('/api/winner', options)
      .then((data) => data.json())
      .then((data) => {
        console.log('bkdjkjsadfkjsfkjhdf');
        console.log(data[0]['userName']);
      })
      .catch((e) => console.log('error in fecting winner,', e));
  };

  return (
    <>
      <h1>timer component</h1>
      <Button onClick={handleGetWinner}>Get Winner</Button>
    </>
  );
};

export default Timer;
/* <Card>
        <Typography>display timer here</Typography>
      </Card>
      <Paper>
        <Typography>
          {winner.userName} has Won the last bid for {winner.itemName} for{' '}
          {winner.bidPrice}
        </Typography>
      </Paper>  */
