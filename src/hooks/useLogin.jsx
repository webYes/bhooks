import { useState, useCallback } from "react";
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
            alert("输入账号或密码不对");
        }
    }, [account, password]);

    // 登出方法
    const logout = () => {
        setUser(null);
        setAccount("");
        setPassword("");
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

export default useLogin