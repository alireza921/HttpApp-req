
import styles from './style.module.css'
const Comment = ({name,email,onClick}) => { 
    return (
        <section className={styles.holder} onClick={onClick}> 
             <p> {name} </p>
        <p> {email} </p>
        </section>
      );
}
 
export default Comment;