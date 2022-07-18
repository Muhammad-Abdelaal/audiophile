
import classes from './CategoriesSection.module.css'
import headphoneImage from '../../../assets/shared/desktop/image-headphones.png';
import speakerImage from '../../../assets/shared/desktop/image-speakers.png';
import earphoneImage from '../../../assets/shared/desktop/image-earphones.png';
import rightArrow from '../../../assets/shared/desktop/icon-arrow-right.svg'
import { Fragment } from "react";
import { Link } from 'react-router-dom';
function CategoriesSection ({usagePlace, menuStateHandler}) {

    function closeMenu () {
        if(usagePlace === 'menu') menuStateHandler('menu', false) ;
    }

    return (
        <Fragment>
            <div className={classes['categories-section-container']}>
                <Link onClick={closeMenu} to = '/headphones' className={classes['category-section__item']}>
                    <img className={classes['category-section__item-image']} alt='*' src={`${headphoneImage}`} />
                    <p className={classes['category-section__item-title']}>HEADPHONES</p>
                    <span className={classes['category-section__item-link']}>SHOP <img alt='*' src={`${rightArrow}`} /></span>
                </Link>
                <Link onClick={closeMenu} to = '/speakers' className={classes['category-section__item']}>
                    <img className={classes['category-section__item-image']} alt='*' src={`${speakerImage}`} />
                    <p className={classes['category-section__item-title']}>SPEAKERS</p>
                    <span className={classes['category-section__item-link']}>SHOP <img alt='*' src={`${rightArrow}`} /></span>
                </Link>
                <Link onClick={closeMenu} to = '/earphones' className={classes['category-section__item']}>
                    <img className={classes['category-section__item-image']} alt='*' src={`${earphoneImage}`} />
                    <p className={classes['category-section__item-title']}>EARPHONES</p>
                    <span className={classes['category-section__item-link']}>SHOP <img alt='*' src={`${rightArrow}`} /></span>
                </Link>
            </div>
        </Fragment>
    )
}

export default CategoriesSection;