import styles from "./Navbar.module.css"
import {NavLink} from "react-router-dom";
import Friends from "./Friends/Friends";

const Navbar = () => {
    const myId=27521
    return (
        <div className={styles.navbar}>
            <div className={styles.menu}>
                <div className={`${styles.item}`}>
                    <NavLink to={`/profile/${myId}`} className={navData=>navData.isActive ? styles.activeLink : ""}>
                        Profile
                    </NavLink>
                </div>
                <div className={styles.item}>
                    <NavLink to='/dialogs' className={navData=>navData.isActive ? styles.activeLink : ""}>
                        Messages
                    </NavLink>
                </div>
                <div className={styles.item}>
                    <NavLink to='/find_users' className={navData=>navData.isActive ? styles.activeLink : ""}>
                        Find users
                    </NavLink>
                </div>
                <div className={styles.item}>
                    <NavLink to='/news' className={navData=>navData.isActive ? styles.activeLink : ""}>
                        News
                    </NavLink>
                </div>
                <div className={styles.item}>
                    <NavLink to='/music' className={navData=>navData.isActive ? styles.activeLink : ""}>
                        Music
                    </NavLink>
                </div>
                <div className={styles.item}>
                    <NavLink to='/settings' className={navData=>navData.isActive ? styles.activeLink : ""}>
                        Settings
                    </NavLink>
                </div>
                <div>
                    <Friends />
                </div>
            </div>
        </div>
    );
}

export default Navbar;