import Search from "../../components/Search/Search";
import User from "../../components/User/User";


import { UserProps } from "../../types/user";

import { useState } from "react";

const Home = () => {
  const [user, setUser] = useState<UserProps | null>(null);

  const loaderUser = async (userName: string) => {
    const res = await fetch(`https://api.github.com/users/${userName}`);

    const data = await res.json();
    
    // resgatando apenas dados que vou precisar:
    const {avatar_url, login, location, followers, following} = data;

    const userData: UserProps = {
      avatar_url,
      login,
      location,
      followers,
      following
    };

    setUser(userData);
  };


  return (
    <div>
      <Search loadUser={loaderUser} />
      {user && <User {...user}/>}
    </div>
  );
};

export default Home;
