import classes from './EditProdukFoto.module.css';

const EditProdukFoto = ({imageURL, name}) => {
    console.log(imageURL);
    return(
        <div className={classes.editFoto}>
            <img src={imageURL} alt={imageURL} />

            <div className={classes.editiFotoNama}>
                <h2> {name} </h2>
            </div>
        </div>
    )
}

export default EditProdukFoto;