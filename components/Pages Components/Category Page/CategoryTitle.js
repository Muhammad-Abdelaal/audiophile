import classes from './CategoryTitle.module.css';

function CategoryTitle (props) {
    
    const categoryTitle = props.pathName.toUpperCase();

    return (
        <div className= {classes['category-title']}>
                {categoryTitle}
        </div>
    )
}

export default CategoryTitle;