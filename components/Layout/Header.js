import classes from './Header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCartShopping } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';
import {useContext } from 'react';
import { NavLink, Link } from 'react-router-dom';
import Context from '../../store/context';
// eslint-disable-next-line
const heroSection = document.querySelector('.hero-section-content');
function Header ({cartStateHandler, menuStateHandler, isMenuOpen}) {

    const ctx = useContext(Context);

    function openCart () {
        cartStateHandler('open-cart')
    }
    function menuState () {
        menuStateHandler('menu', !isMenuOpen)
    }

    return (
        <header className={classes.header}>
            <nav className={classes.nav}>
                <div onClick={menuState} className={classNames(classes['burger-btn-container'] , isMenuOpen === true ? classes['open'] : '')}>
                    <div className={classes['burger-btn']}></div>    
                </div> 
                <Link to = '/home'><div className={classes.logo}>audiophile</div></Link>
                <ul className={classes.navs}>
                    <li className={classes['navs-item']}> <NavLink to= '/home'>HOME</NavLink> </li>
                    <li className={classes['navs-item']}> <NavLink to= '/headphones'>HEADPHONES</NavLink> </li>
                    <li className={classes['navs-item']}> <NavLink to= '/speakers'>SPEAKERS</NavLink> </li>
                    <li className={classes['navs-item']}> <NavLink to= '/earphones'>EARPHONES</NavLink> </li>
                </ul>
                <div onClick={openCart} className={classes['cart-icon__container']}>
                    <FontAwesomeIcon className={classes['cart-icon']} icon={faCartShopping} />
                    {ctx.cartQuantity > 0 ? <span>{ctx.cartQuantity}</span> : ''}
                </div>
            </nav>
        </header>
    )
}

export default Header;