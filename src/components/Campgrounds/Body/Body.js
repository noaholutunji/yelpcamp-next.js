import Link from 'next/link';
import classes from './Body.css';

const Body = props => {

  const logout = () => {
    localStorage.setItem('token', '');
    localStorage.clear();

    Router.push('/');
  };

  return (
    <div className="col-md-3 col-sm-6">
      <div className={classes.thumbnail}>
        <img className={classes.img} alt="" src={props.obj.image} />
        <div className={classes.caption}>
          <h4>{props.obj.name}</h4>
        </div>

        <p>
          <Link href={`/campground/[${props.obj._id}]`}
            as= {`/campground/${props.obj._id}`}>
            <a className="btn btn-primary"> More Info</a>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Body;
