import useLogin from '../../hooks/useLogin';
import styles from './index.module.scss'

export default function Login() {
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
      {!user &&
        <div className={`${styles.container} ${styles['logo-login']}`}>
          <div className={styles['container-login']}>
            <form>
              <div className={styles.row}>
                <input type="text" placeholder="账号" value={loginInfo.account} onChange={(e) => setAccount(e.target.value)} />
              </div>
              <div className={styles.row}>
                <input type="password" placeholder="密码" value={loginInfo.password} onChange={(e) => setPassword(e.target.value)} />
              </div>
              <div className={styles.row}>
                <button className={`${styles.btn} ${styles['btn']} ${styles['btn-login']}`} onClick={(e) => { e.preventDefault(); login() }}>登录</button>
              </div>
            </form>
          </div>
        </div >}
      {user && <div className={`${styles.container} ${styles['logo-welcome']}`}>
        <div className={styles['container-login']}>
          <form>
            <div className={styles.row}>
              <input type="text" placeholder="账号" value={loginInfo.account} disabled="disabled" />
            </div>
            <div className={styles.row}>
              <input type="password" placeholder="密码" value={loginInfo.password} disabled="disabled" />
            </div>
            <div className={styles.row}>
              <button onClick={logout} className={`${styles.btn} ${styles['btn']} ${styles['btn-welcome']}`} onClick={(e) => { e.preventDefault(); logout() }}>登出</button>
            </div>
          </form>
        </div>
      </div >}
    </>
  );
}
