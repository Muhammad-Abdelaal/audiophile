import classes from './UI.module.css';
import classNames from 'classnames';
function Card (props) {

    const cardClasses = classNames(props.className, classes.card)

    return (
        <div  className={cardClasses}>
            {props.children}
        </div>
    )
}

export default Card