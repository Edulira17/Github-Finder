import Search from "../../components/Search/Search"

import { UserProps } from "../../types/user"

import { useState } from "react"

const Home = () => {
  const [user, setUser] = useState<UserProps | null>(null);

  const loaderUser = async (userName: string) => {

    const res = await fetch(`https://api.github.com/users/${userName}`)

    const data = await res.json()

    console.log(data)

  }

  return (
    <div>
      <Search loadUser={loaderUser}/>
    </div>
  )
}

export default Home