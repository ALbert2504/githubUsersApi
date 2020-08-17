import React, {Component} from "react";
import {Link} from 'react-router-dom';

//styles
import styles from './Navigation.module.scss';

//constants
import navItems from "../../../constants/navItems";


class Navigation extends Component {
  render() {
    return (
      <nav className={styles.nav}>
        <ul className={styles.nav__items}>
          {
            navItems.map((navItem) => {
              const {id, value, href} = navItem;
              return (
                <li key={id} className={styles.nav__items_item}>
                  <Link to={href}>{value}</Link>
                </li>
              );
            })
          }
        </ul>
      </nav>
    )
  }
}

export default Navigation;