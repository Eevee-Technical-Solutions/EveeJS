import React,{ useState, useEffect } from 'react';

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

  const timeNow = Date.now()
  const [time, setTime] = useState({time: timeNow})
 //time in milliseconds since UTC 1970 blah

  const [winner, setWinner] = useState({userName:'', itemName: '', bidPrice: 0})
  
 setInterval( ()=> {
  if (time + 30000) {

    const options = {
      method: 'GET',
      body: JSON.stringify({itemName: props.item.name})
    }

    fetch("/api/winner", options)
    .then(data => data.json())
    .then(data => setWinner(data))
    .catch(e => console.log("error in fetching winner =>", e))

    fetch("/api/homepage")
    .then(data => data.json())
    .then(data => setItemData(data[0]))
    .catch(e=> console.log("error in updating item", e))
  }
 }, 10000)

   
  
  
  return (
    <>
     <Card>
       <Typography>
        display timer here
       </Typography>
     </Card>
    <Paper> 
      <Typography>
    {winner.userName} has Won the last bid for {winner.itemName} for {winner.bidPrice}
      </Typography>
      </Paper>

    </>
  );
};

export default Timer;