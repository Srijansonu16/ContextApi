import React, { UserContext, useContext } from "react";

const ClassC = () => {
  const user = useContext(UserContext);
  return (
    <div>
      <p>this is {user} from class C component</p>
    </div>
  );
};
export default ClassC;
