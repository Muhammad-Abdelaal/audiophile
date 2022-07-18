import { Fragment, useState } from "react";
import { useLocation } from "react-router-dom";
import CategoryTitle from "../components/Pages Components/Category Page/CategoryTitle";
import Section from '../components/Layout/Section'
import data from '../data.json';
import CategoryItems from "../components/Pages Components/Category Page/CategoryItems";
import CategoryItem from "../components/Pages Components/Category Page/CategoryItem";

function CategoryPage () {
    window.scrollTo(0, 0)

    var current = window.innerWidth;
    const initialWidthState = current < 768 ? 'mobile' : current <= 992 && current >= 768 ? 'tablet' : current > 992 ? 'desktop' :'';
    const [widthState, setWidthState] = useState(initialWidthState);
    window.addEventListener('resize', () => {
        if (window.innerWidth < 768 && current > 768) {
            current = window.innerWidth;
            setWidthState('mobile');
        }
        else if (window.innerWidth >= 768 && window.innerWidth <= 992 && (current < 768 || current > 992)) {
            current = window.innerWidth;
            setWidthState('tablet');
        }
        else if (window.innerWidth > 992 && current <= 992) {
            current = window.innerWidth;
            setWidthState('desktop');
        }
        
    })


    const pathName = useLocation().pathname.slice(useLocation().pathname.indexOf('/') + 1);
    const categoryContentList = pathName === 'headphones' ? [data[1], data[2], data[3]] 
    : pathName === 'speakers' ? [data[4], data[5]] : pathName === 'earphones' ? [data[0]] : '' ;

    const categoryItem = categoryContentList.map( (item, index) => {
        return (
            <CategoryItem 
            key = {index}
            index = {index}
            screenWidth = {widthState}
            itemName = {item.name} 
            itemSlug = {item.slug}
            itemImage = {item.image}
            isNew = {item.new}
            itemDescription = {item.description}
            />
        )
    })

    return(
        <Fragment>
            <CategoryTitle pathName = {pathName} />
            <Section>
                <CategoryItems>
                    {categoryItem}
                </CategoryItems>
            </Section>
        </Fragment>
    )
}

export default CategoryPage;