import { useState } from "react";
import { changePasswordApi } from "../../api/auth.api";

export default function ChangePassword() {
  const [form, setForm] = useState({
    currentPassword: "",
    password: "",
    rePassword: "",
  });

  const submit = async () => {
    await changePasswordApi(form);
    alert("Password changed successfully");
  };

  return (
    <div>
      <h2>Change Password</h2>

      <input
        type="password"
        placeholder="Current Password"
        onChange={(e) =>
          setForm({ ...form, currentPassword: e.target.value })
        }
      />
      <input
        type="password"
        placeholder="New Password"
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />
      <input
        type="password"
        placeholder="Confirm New Password"
        onChange={(e) => setForm({ ...form, rePassword: e.target.value })}
      />
      <button onClick={submit}>Change Password</button>
    </div>
  );
}
