import classes from './title.module.css';

const Title = () => {
    return(
        <>
           <div className={classes.title}>
                <h1>Order Menu</h1>
            </div>

            <div className={classes.title1}>
                <h2>Daftar Menu</h2>
            </div>

            <div className={classes.title2}>
                <h2>Makanan</h2>
            </div> 
        </>
    )
}

export default Title;