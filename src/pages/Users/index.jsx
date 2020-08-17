import React, {Component} from "react";


//styles
import styles from './Users.module.scss';

//common components
import Wrapper from "../../common/Wrapper";

//components
import User from "../../components/User";
import AddUser from "../../components/AddUser";

//util
import UsersApi from "../../util/usersApi";


class Users extends Component {

  usersApi = new UsersApi();

  state = {
    users: [],
    newUser: {
      username: '',
      avatarUrl: '',
      url: '',
      type: '',
    }
  };

  componentDidMount() {
    const {getUsers} = this.usersApi;

    getUsers().then((res) => {
      this.setState((prevState) => {
        return {
          users: res
        };
      });
    });
  };

  handleUserDelete = (id) => {
    const {users} = this.state;

    const newUsers = users.filter((user) => user.id !== id);

    this.setState({
      users: newUsers
    });
  };

  handleAddUser = (prop, value) => {
    this.setState({
      newUser: {...this.state.newUser, [prop]: value}
    });
  };

  handleAddSubmit = (e, modalClose, modalCloseState) => {
    e.preventDefault();
    const newAddedUser = this.state.newUser;

    this.setState({
      users: [newAddedUser, ...this.state.users]
    });

    modalClose(modalCloseState)

  };


  render() {

    const {users} = this.state;

    return (
      <div className={styles.users}>
        <Wrapper>
          <div className={styles.users__content}>
            <h2 className={styles.users__heading}>
              Users from GitHub users API
            </h2>

            <div className={styles.users__list}>

              <AddUser
                onAdd={this.handleAddUser}
                onAddSubmit={this.handleAddSubmit}
              />

              {
                users.map((user) => {
                  return (
                    <User
                      key={user.id}
                      id={user.id}
                      username={user.username}
                      avatarUrl={user.avatarUrl}
                      type={user.type}
                      profileUrl={user.url}

                      onDelete={this.handleUserDelete}
                    />

                  );
                })
              }
            </div>
          </div>
        </Wrapper>
      </div>
    );
  }
}

export default Users;