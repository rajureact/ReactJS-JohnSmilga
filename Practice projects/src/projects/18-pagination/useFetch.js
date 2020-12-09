import { useEffect, useState } from "react";
import paginate from "./utils";
const url = "https://api.github.com/users/john-smilga/followers?per_page=100";
export function useFetch() {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const getUsers = async () => {
    const response = await fetch(url);
    const users = await response.json();
    setUser(paginate(users));
    setLoading(false);
  };
  useEffect(() => {
    getUsers();
  }, []);
  return { loading, user };
}
