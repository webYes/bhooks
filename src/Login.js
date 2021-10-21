import { useState, useCallback } from "react";

export default function Login() {
  // 自定义登录hooks
  const useLogin = () => {
    // 设置用户信息
    const [user, setUser] = useState(null);

    const [account, setAccount] = useState("");
    const [password, setPassword] = useState("");

    // 登录方法
    const login = useCallback(() => {
      if (account && password) {
        setTimeout(() => {
          setUser({
            account,
            password
          });
        }, 1000);
      } else {
        alert("请输入账号密码");
      }
    }, [account, password]);

    // 登出方法
    const logout = () => {
      setUser(null);
    };

    return {
      user,
      loginInfo: {
        account,
        password
      },
      setAccount,
      setPassword,
      login,
      logout
    };
  };

  const {
    user,
    loginInfo,
    setAccount,
    setPassword,
    login,
    logout
  } = useLogin();

  return (
    <>
      {!user && (
        <div style={{ display: "flex" }}>
          <input
            placeholder="账号"
            value={loginInfo.account}
            onChange={(e) => setAccount(e.target.value)}
          />
          <input
            placeholder="密码"
            value={loginInfo.password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={login}>登录</button>
        </div>
      )}
      {user && (
        <div style={{ display: "flex" }}>
          <div>
            账号：{user.account},密码：{user.password}
          </div>
          <button onClick={logout}>登出</button>
        </div>
      )}
    </>
  );
}
