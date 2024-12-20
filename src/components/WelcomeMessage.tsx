import { FC } from "react";

type WelcomeMessageProps = {
  isLoggedIn: boolean;
  user?: {
    name: string;
    type: "admin" | "moderator" | "guest";
  };
};
const WelcomeMessage: FC<WelcomeMessageProps> = ({ isLoggedIn, user }) => {
  if (user?.type === "moderator") {
    return <p>Ask admin for access</p>;
  } else if (user?.type === "guest") {
    return <p>No access</p>;
  }
  
  return (
    <div>
      {isLoggedIn ? <h1>User logged in</h1> : <h1>User logged out</h1>}
      {user && <h1>Hello, {user.name}</h1>}
    </div>
  );
};

export default WelcomeMessage;
