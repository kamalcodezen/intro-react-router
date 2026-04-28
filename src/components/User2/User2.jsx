import { use } from "react";

const User2 = ({ user2Data }) => {
  const user = use(user2Data);
  console.log("user2 Data", user);
  return (
    <div>
      <h2>This is User2</h2>
    </div>
  );
};

export default User2;
