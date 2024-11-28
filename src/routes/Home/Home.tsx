// Components
import Search from "../../components/Search/Search";
import User from "../../components/User/User";
import Error from "../../components/Error/Error";
import Loader from "../../components/Loader/Loader";

import { UserProps } from "../../types/user";

import { useState } from "react";

const Home = () => {
  const [user, setUser] = useState<UserProps | null>(null);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoad] = useState(false);

  const loaderUser = async (userName: string) => {
    setIsLoad(true);
    setError(false);
    setUser(null);

    const res = await fetch(`https://api.github.com/users/${userName}`);

    const data = await res.json();

    setIsLoad(false);

    if (res.status === 404) {
      setError(true);
      return;
    }

    // resgatando apenas dados que vou precisar:
    const { avatar_url, login, location, followers, following } = data;

    const userData: UserProps = {
      avatar_url,
      login,
      location,
      followers,
      following,
    };

    setUser(userData);
  };

  return (
    <div>
      <Search loadUser={loaderUser} />
      {isLoading && <Loader />}
      {user && <User {...user} />}
      {error && <Error />}
    </div>
  );
};

export default Home;
