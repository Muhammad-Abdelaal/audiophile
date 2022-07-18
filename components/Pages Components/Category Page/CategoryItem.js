import classes from './CategoryItems.module.css';
import Button from '../../UI/Button';

function CategoryItem (props) {

    const screenWidth = props.screenWidth;
    const categoryItemImage = screenWidth === 'mobile' ? `${props.itemImage.mobile.slice(1)}` 
    :screenWidth === 'tablet' ? `${props.itemImage.tablet.slice(1)}` : screenWidth === 'desktop' ? `${props.itemImage.desktop.slice(1)}` : '';
    function isOdd(num) { return num % 2;}

    return(
            <div style={screenWidth !== 'mobile' && isOdd(props.index) === 1 ? { flexDirection:'row-reverse'} :{}} className={classes['category-item']}>
                <img className={classes['category-item__img']} src = {categoryItemImage} alt = 'item-img' />
                <div className={classes['category-item__details']}>
                    {props.isNew ? <div className={classes['category-item__new-product']}> NEW PRODUCT </div> : '' }
                    <h1 className={classes['category-item__name']} > {props.itemName}</h1>
                    <p className={classes['category-item__description']} > {props.itemDescription}</p>
                    <Button buttonUsage = 'see-product' itemSlug = {props.itemSlug} buttonText = 'SEE PRODUCT' backgroundColor ='rgb(216, 125, 74)' afterBackgroundColor = {'rgb(227, 145, 98)'}/>
                </div>
            </div> 
    )
}

export default CategoryItem;