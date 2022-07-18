import classes from './CategoryItems.module.css';

function CategoryItems (props) {

    return(
        <div className={classes.category}>
            {props.children}
        </div>
    )
}

export default CategoryItems;