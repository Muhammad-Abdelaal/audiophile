
import Button from '../../UI/Button'
import Section from "../../Layout/Section"
import classes from './ShowcaseProductsSection.module.css'
import ringPattern from '../../../assets/home/desktop/pattern-circles.svg';
import zx9ImageMobile from '../../../assets/home/desktop/image-speaker-zx9.png'

function ShowcaseProductsSection () {
   

    return (
        <Section>
            <div  className={classes['showcase-section-container']}>
                <div className={classes['zx9-speaker-container']}>
                    <div className={classes['zx9-speaker__ring-image-container']}>
                        <img className={classes['zx9-speaker__ring']} alt='*' src={ringPattern} />
                        <img className={classes['zx9-speaker__image']} alt='*' src={zx9ImageMobile} />
                    </div>
                    <div className={classes['zx9-speaker__details-container']}>
                        <h1 className={classes['zx9-speaker__title']}>ZX9 SPEAKER</h1>
                        <p>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
                        <Button itemSlug = "zx9-speaker" buttonUsage = 'see-product' buttonText = 'SEE PRODUCT' backgroundColor = {'black'} afterBackgroundColor ={'rgb(88, 88, 88)'} />
                    </div>
                    
                </div>
                <div className={classes['zx7-speaker-container']}>
                    <h1 className={classes['zx7-speaker__title']}>ZX7 SPEAKER</h1>
                    <Button itemSlug = "zx7-speaker" buttonUsage = 'see-product' buttonText = 'SEE PRODUCT' hoverColor = 'white' border ='black solid 1px' color = 'black' backgroundColor = {'transparent'} afterBackgroundColor ={'black'} />
                </div>
                <div className={classes['yx1-earphones-container']}>
                    <div className={classes['yx1-earphones__image']} />
                    <div className={classes['yx1-earphones__see-product__container']}>
                        <h1 className={classes['yx1-earphones__title']}>YX1 EARPHONES</h1>
                        <Button itemSlug = "yx1-earphones" buttonUsage = 'see-product' buttonText = 'SEE PRODUCT' hoverColor = 'white' border ='black solid 1px' color = 'black' backgroundColor = {'transparent'} afterBackgroundColor ={'black'} />
                    </div>
                </div>
            </div>
        </Section>
    )
}

export default ShowcaseProductsSection;



/*


        var current = window.innerWidth;
        const initialWidthState = current < 768 ? 'mobile' : current <= 992 && current >= 768 ? 'tablet' : current > 992 ? 'desktop' :'';
        const [widthState, setWidthState] = useState(initialWidthState)
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


*/