import CategoriesSection from '../../Pages Components/Home Page/CategoriesSection';
import classes from './Menu.module.css';


function Menu ({isMenuOpen, menuStateHandler}) {

    return (
        <div style={isMenuOpen ? {width:'100%'} :{width:'0' , visibility:'hidden'}} className={classes.menu}>
            <CategoriesSection menuStateHandler = {menuStateHandler} usagePlace = 'menu'/>
        </div>
    )
}


export default Menu;