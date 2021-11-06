import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  buyMobile,
  sellMobile,
  getAllUsers,
  getSingleUser,
} from "./../redux/actions/mobile-action";

// gh'' GH""
function MobileDetails({
  buyMobile,
  sellMobile,
  noOfMobiles,
  users,
  getAllUsers,
  user,
  getSingleUser
}) {
  const styles = {
    btn: {
      padding: 30,
      margin: 10,
      borderRadius: 10,
      border: 0,
      cursor: "pointer",
    },
  };
  return (
    <div>
      <h1>
        Number of Mobiles {noOfMobiles} and Users {users.length} and Details {user.name}
      </h1>
      <button style={styles.btn} onClick={() => buyMobile()}>
        Buy Mobile
      </button>
      <button style={styles.btn} onClick={() => sellMobile()}>
        Sell Mobile
      </button>
      <button style={styles.btn} onClick={() => getAllUsers()}>
        Add User
      </button>
      <button style={styles.btn} onClick={() => getAllUsers()}>
        Gett All Users
      </button>
      <button style={styles.btn} onClick={() => getSingleUser(1)}>
        Gett Single Users
      </button>
      <button style={styles.btn} onClick={() => {}}>
        Edit User
      </button>
      <button style={styles.btn} onClick={() => {}}>
        Delete User
      </button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    noOfMobiles: state.noOfMobiles,
    users: state.users,
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      buyMobile,
      sellMobile,
      getAllUsers,
      getSingleUser,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(MobileDetails);
