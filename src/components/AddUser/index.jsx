import React, {useState} from "react";

import {makeStyles} from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

//styles
import styles from './AddUser.module.scss';

//assets
import plusIcon from '../../assets/plus-icon-27.jpg';


// modal
const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width: '50%'
  },
}));


const AddUser = ({onAdd, onAddSubmit}) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={styles.addUser__container}>
      <button
        type="button"
        className={styles.addUser}
        onClick={handleOpen}
      >
        <div className={styles.addUser__icon}>
          <img src={plusIcon} alt="plus icon"/>
        </div>
        <p className={styles.addUser__text}>
          Add user
        </p>
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">
              Add a new user
            </h2>
            <form className={styles.newUser} onSubmit={(e) => onAddSubmit(e, setOpen, false)}>
              <input
                onChange={(e) => onAdd(e.target.name, e.target.value)}
                className={styles.newUser__field}
                type="text"
                name="username"
                placeholder="Username"
              />
              <input
                onChange={(e) => onAdd(e.target.name, e.target.value)}
                className={styles.newUser__field}
                type="text"
                name="avatarUrl"
                placeholder="Avatar URL"
              />
              <input
                onChange={(e) => onAdd(e.target.name, e.target.value)}
                className={styles.newUser__field}
                type="text"
                name="url"
                placeholder="GtiHub profile URL"
              />
              <input
                onChange={(e) => onAdd(e.target.name, e.target.value)}
                className={styles.newUser__field}
                type="text"
                name="type"
                placeholder="User type"
              />
              <button
                className={styles.newUser__btn}
              >
                + Add
              </button>
            </form>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

export default AddUser;