import axios from 'axios';

class UsersApi {

  /*https://api.github.com/users*/
  url = 'https://api.github.com';
  endpoint = '/users';


  getUsers = async () => {
    const res = await axios.get(`${this.url}${this.endpoint}`);
    const data = await res.data;

    return data.map(this._transformUserInfo);
  }

  _transformUserInfo = (person) => {
    return {
      id: person.id,
      username: person.login,
      avatarUrl: person.avatar_url,
      url: person.html_url,
      type: person.type,
    };
  }
}

export default UsersApi;