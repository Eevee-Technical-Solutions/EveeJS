import React, { useState } from 'react';

// importing Link from react router dom
import { Link } from 'react-router-dom';

// component imports form material-UI
import {
  Drawer,
  Button,
  List,
  Divider,
  ListItem,
  ListItemText,
} from '@material-ui/core';

// imports for customizing styles
// clsx allows for conditional styling to be used - unsure if we will need clsx
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  list: {
    width: 500,
  },
  fullList: {
    width: 'auto',
  },
});

const Main = () => {
  // state to determine if menu is open or close
  const [state, setState] = useState({ open: false });

  // creating a classes variable to customize styles
  const classes = useStyles();
  // function that return menu items
  const menuItems = () => {
    return (
      <div
        role='presentation'
        onClick={() => setState({ open: false })}
        className={classes.list}
      >
        <List>
          {/* list item 1 */}
          <Link to='tada'>
          <ListItem button key='Mode'>
            <ListItemText primary='Tada' />
            </ListItem>
          </Link>
          <Divider />
          {/* list item 2 */}
          <ListItem button key='darkMode'>
            <ListItemText primary='Wassup' />
            <Link to='wassup'></Link>
          </ListItem>
        </List>
      </div>
    );
  };

  return (
    <div>
      <React.Fragment>
        <Button onClick={() => setState({ open: true })}>Open Menu</Button>
        <Drawer
          anchor='left'
          open={state.open}
          onClose={() => setState({ open: false })}
        >
          {state.open ? menuItems() : null}
        </Drawer>
      </React.Fragment>
    </div>
  );
};

export default Main;
