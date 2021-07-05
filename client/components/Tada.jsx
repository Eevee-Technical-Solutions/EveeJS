import React from 'react';

import { Button } from '@material-ui/core';

import { Link } from 'react-router-dom';

const Tada = () => {
  return (
    <>
      <h1>hello world</h1>
      <Link to='/'>
        <Button variant='contained' color='secondary'>
          Go back Home
        </Button>
      </Link>
    </>
  );
};

export default Tada;
