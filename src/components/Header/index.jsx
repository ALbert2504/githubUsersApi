import React, {Component} from "react";

//styles
import styles from './Header.module.scss';

//common components
import Wrapper from "../../common/Wrapper";

//components
import Navigation from "./Navigation";

class Header extends Component {
  render() {

    const {onSearch} = this.props;

    return (
      <header className={styles.header}>
        <Wrapper>
          <div className={styles.header__content}>
            <h1 className={styles.header__logo}>
              Users API
            </h1>
            <Navigation />
            <input
              onChange={(e) => onSearch(e.target.value)}
              type="text"
              name="search"
              className={styles.header__search}
              placeholder="Search users"
            />
          </div>
        </Wrapper>
      </header>
    );
  }
}

export default Header