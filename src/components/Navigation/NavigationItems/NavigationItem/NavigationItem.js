import Link from 'next/link';

const navigationItem = props => (
  <li>
    <Link href={props.link}>{props.children}</Link>
  </li>
);

export default navigationItem;
