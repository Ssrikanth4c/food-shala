import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './fontawesome';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from './navBar.module.css';

/**
* @author
* @class navBar
**/

class NavBar extends Component {
 render() {
  return(
    <>
      <nav className={styles.navbar}>
        <input type="checkbox" name="checkbox" id="check" hidden />
        <div className={styles.foodshalaMenu}>
          <label htmlFor="check" className='menu'>
            <div className="menu-lne menu-line-1"></div>
            <div className="menu-lne menu-line-2"></div>
            <div className="menu-lne menu-line-3"></div>
          </label>
        </div>
        <div className={styles.navbarNavigation}>
          <ul className="nav-list">
            <li className="nav-list-item">
              <Link to='/' className={styles.navLink}>Home</Link>
            </li>
            <li className="nav-list-item">
              <Link to='/menu' className={styles.navLink}>Menu</Link>
            </li>
            <li className="nav-list-item">
              <input hidden type="checkbox"  className={styles.authCheck} name="authCheck" id="authcheck"/>
              <div className={`${styles.navLink} ${styles.auth}`} htmlFor='authcheck'>
                <label htmlFor="authcheck">
                  Authentication
                </label>
                <div className={styles.authType}>
                  <Link to='/customer/login' className={styles.navLink} >
                      <p>Customer</p>
                  </Link>
                  <Link to='/restaurant/login' className={styles.navLink} >
                      <p>Restaurant</p>
                  </Link>
                </div>
              </div>

            </li>
            <li className="nav-list-item">
              <Link to='/cart' className={styles.navLink}>Cart</Link>
            </li>
          </ul>
        </div>

        <div className={styles.navbarLogo}>
           <FontAwesomeIcon icon='hamburger'   className={styles.logo} />
           <div>
             <h2 className={styles.fontLogo}>Food shala</h2>
             <p className='text-center'>Restaurant</p>
           </div>
        </div>
      </nav>
    </>
    )
   }
 }

export default NavBar