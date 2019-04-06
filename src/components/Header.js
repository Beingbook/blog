import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

const Header = ({ siteTitle }) => (
  <AppBar>
    <Toolbar>
      <Link to="/">
        <Typography variant="h6" color="inherit">
          {siteTitle}
        </Typography>
      </Link>
    </Toolbar>
  </AppBar>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
