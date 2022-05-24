import { Link, NavLink, useParams } from "react-router-dom";
import styles from "./style.module.css";

const items = [
  { name: "Home", to: "/" },
  {name : 'NewComment' , to : '/newcomment'}, 
];

const Navigation = (props) => {
  console.log(props);
  const {params} = useParams();
  console.log(params);
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        {items.map((item) => (
          <li key={item.to} className={styles.item}>
            {<NavLink to={item.to} /* className={(data) => data.isActive ? `${styles.active}` : "" }  */ > {item.name} </NavLink> }
          </li>
        ))}

        {/* <li className={styles.item}>
          <Link to='/'> Home</Link>
        </li>
        <li className={styles.item}>
          <Link to='/Profile'> Profile</Link>
        </li>
        <li className={styles.item}>
          <Link to='/About-Us'> AboutUs </Link>
        </li>
        <li className={styles.item}>
          <Link to='/blogs'> BlogPage </Link>
        </li>
        <li className={styles.item}>
          <Link to='/post'> PostPage </Link>
        </li> */}
      </ul>
    </nav>
  );
};

export default Navigation;
