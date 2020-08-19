import React, {Component} from "react";


//styles
import styles from './User.module.scss';



class User extends Component {

  state = {
    isEditing: this.props.isEditing,
  }


  render() {

    const {
      avatarUrl,
      username,
      type,
      profileUrl,
      onDelete,
      key,
      id,
      isEditing,
      onEditStart,
      onEdit,
      onEditSubmit
    } = this.props;

    return (

      /* https://www.imgworlds.com/wp-content/uploads/2015/12/18-CONTACTUS-HEADER.jpg" */

      <div className={styles.user}>

        {
          !isEditing ? (
            <img
              src={avatarUrl}
              alt={`${username} avatar`}
              className={styles.user__img}
            />
          ) : (
            <div className={styles.user__avatarEdit}>
              <input
                type="text"
                placeholder="Avatat URL"
                name="avatarUrl"
                onChange={(e) => onEdit(id, e.target.name, e.target.value)}
              />
            </div>
          )
        }
        <div className={styles.user__info}>
            {!isEditing ? (
              <span className={styles.user__info_username}>
                {username}
              </span>
            ) : (
              <input
                className={styles.user__info_edit}
                type="text"
                placeholder="Username"
                value={username}
                name="username"
                onChange={(e) => onEdit(id, e.target.name, e.target.value)}
              />
            )}
            {!isEditing ? (
              <span className={styles.user__info_type}>
                {`User type: ${type}`}
              </span>
            ) : (
              <input
                className={styles.user__info_edit}
                type="text"
                placeholder="User type"
                value={type}
                name="type"
                onChange={(e) => onEdit(id, e.target.name, e.target.value)}
              />
            )}
          <div className={styles.user__info_manipulation}>
            <a
              href={profileUrl}
              className={styles.manipulation__user_page}
              target="_blank"
            >
              open user page
            </a>

            {
              !isEditing ? (
                <button
                  className={styles.manipulation__user_edit}
                  type="button"
                  onClick={() => onEditStart(id)}
                >
                  edit user
                </button>
              ) : (
                <button
                  className={styles.manipulation__user_edit}
                  type="button"
                  onClick={onEditSubmit}
                >
                  submit
                </button>
              )
            }
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