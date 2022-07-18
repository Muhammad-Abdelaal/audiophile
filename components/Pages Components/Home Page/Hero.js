import Section from "../../Layout/Section";
import Button from "../../UI/Button";
import classes from './Hero.module.css'

function Hero () {

    return (
        <Section backgroundColor = '#191919' >
            <div className={classes['hero-section-content']}>
                <div className={classes['hero-section-container']}>
                    <h4 className={classes['hero-section__product-state']}>NEW PRODUCT</h4>
                    <h1 className={classes['hero-section__product-title']} >XX99 Mark II Headphones</h1>
                    <p className={classes['hero-section__product-features']}>
                        Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
                    </p>
                    <Button itemSlug = 'xx99-mark-two-headphones' buttonUsage = 'see-product' buttonText = 'SEE PRODUCT' backgroundColor ='rgb(216, 125, 74)' afterBackgroundColor = 'rgb(227, 145, 98)' />
                    
                </div>
            </div>
            
        </Section>
    )
}

export default Hero