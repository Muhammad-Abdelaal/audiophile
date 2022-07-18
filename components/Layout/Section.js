import classes from './Section.module.css';
function Section (props) {
    
    return (
        <section className={classes.section} style = {{background:`${props.backgroundColor}`}}>
            {props.children}
        </section>
    )
}

export default Section;