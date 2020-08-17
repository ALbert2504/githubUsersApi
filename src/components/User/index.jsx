import React, {Component} from "react";

//styles
import styles from './User.module.scss';


class User extends Component {
  render() {

    const {
      avatarUrl,
      username,
      type,
      profileUrl,
      onDelete,
      id,
    } = this.props;


    return (
      /* https://www.imgworlds.com/wp-content/uploads/2015/12/18-CONTACTUS-HEADER.jpg" */

      <div className={styles.user}>
        <img
          src={avatarUrl}
          alt={`${username} avatar`}
          className={styles.user__img}
        />
        <div className={styles.user__info}>
          <span className={styles.user__info_username}>
            {username}
          </span>
          <span className={styles.user__info_type}>
            User type: {type}
          </span>
          <div className={styles.user__info_manipulation}>
            <a
              href={profileUrl}
              className={styles.manipulation__user_page}
              target="_blank"
            >
              open user page
            </a>
            <button
              className={styles.manipulation__user_edit}
              type="button"
            >
              edit user
            </button>
            <button
              className={styles.manipulation__user_delete}
              type="button"
              onClick={() => onDelete(id)}
            >
              delete user
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default User;