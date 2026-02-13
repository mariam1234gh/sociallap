import { useEffect, useState } from "react";
import { getProfileApi } from "../../api/auth.api";

export default function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    getProfileApi().then((res) => {
      setUser(res.data.user || res.data.data);
    });
  }, []);

  if (!user) return <p>Loading...</p>;

  return (
    <div>
      <h2>Profile</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}
