// import React from 'react';
import Link from 'next/link';
// import { NavLink } from 'react-router-dom';

const navigationItem = props => (
  <li>
    <Link href={props.link}>{props.children}</Link>
  </li>
);
export default navigationItem;
