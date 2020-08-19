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
    },
  };

  componentDidMount() {
    //get users from API
    const {getUsers} = this.usersApi;

    getUsers().then((res) => {
      this.setState(prevState => {
        return {
          ...prevState,
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

    console.log(this.state);
  };

  handleAddSubmit = (e, modalClose, modalCloseState) => {
    e.preventDefault();
    const newAddedUser = this.state.newUser;

    this.setState({
      users: [newAddedUser, ...this.state.users]
    });

    modalClose(modalCloseState);

  };


  handleEditStart = (id) => {
    const {users} = this.state;
    const newUsers = users.map((user) => {
      return {
        ...user,
        isEditing: user.id === id
      };
    });

    this.setState({
      users: newUsers
    })

  };

  handleEdit = (id, prop, value) => {
    const {users} = this.state;
    const newUsers = users.map((user) => {
      if(user.id === id) {
        return {
          ...user,
          [prop]: value
        };
      } else {
        return user;
      }
    });


    this.setState({
      users: newUsers
    });


  };

  handleEditSubmit = () => {
    const {users} = this.state;
    const newUsers = users.map((user) => {
      return {
        ...user,
        isEditing: false
      };
    });

    this.setState({
      users: newUsers
    });

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
                      isEditing={user.isEditing}

                      onDelete={this.handleUserDelete}
                      onEditStart={this.handleEditStart}
                      onEdit={this.handleEdit}
                      onEditSubmit={this.handleEditSubmit}
                    />

                  );
                })
              }


            </div>
          </div>
        </Wrapper>
      </div>
    );
  };
}

export default Users;