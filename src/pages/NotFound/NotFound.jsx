import classes from './NotFound.module.css';

const NotFound = () => {
  const clickHandler = () => {
    window.location.href="http://localhost:5173/";
  }

  return(
    <div className={classes.container}>
      <h1 className={classes.h1}>404 - Page Not Found</h1>
        <div className={classes.conbtn}>
        <h3>Oops, nothing here...</h3>
        <p className={classes.perror}>Please Click here to refresh</p>
        <button className={classes.btnerror} onClick={clickHandler}> Click Here</button>
      </div>
    </div>
  )
}

export default NotFound;