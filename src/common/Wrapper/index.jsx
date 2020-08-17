import React, {Component} from "react";

//styles
import styles from './Wrapper.module.scss';


class Wrapper extends Component {
  render() {
    return (
      <div className={styles.Wrapper}>
        {this.props.children}
      </div>
    )
  }
}

export default Wrapper