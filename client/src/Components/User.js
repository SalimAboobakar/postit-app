import user from "../Images/user.png";

import { useSelector } from "react-redux";

const User = () => {
  const email = useSelector((state) => state.users.user.email);

  const name = useSelector((state) => state.users.user.name);

  return (
    <div>
      <h1>User</h1>

      <img src={user} className="userImage" />

      <p>
        {name}

        <br />
      </p>
      <p>
        {email}

        <br />
      </p>
    </div>
  );
};

export default User;
