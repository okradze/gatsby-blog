import React from 'react'
import { Link } from 'gatsby'
import styles from './header.module.scss'

const Header = () => (
    <header className={styles.header}>
        <h1>
            <Link className={styles.title} to="/">
                Mirian Okradze
            </Link>
        </h1>
        <nav>
            <ul className={styles.navList}>
                <li>
                    <Link
                        activeClassName={styles.navItemActive}
                        className={styles.navItem}
                        to="/"
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <Link
                        activeClassName={styles.navItemActive}
                        className={styles.navItem}
                        to="/about"
                    >
                        About
                    </Link>
                </li>
                <li>
                    <Link
                        activeClassName={styles.navItemActive}
                        className={styles.navItem}
                        to="/contact"
                    >
                        Contact
                    </Link>
                </li>
                <li>
                    <Link
                        activeClassName={styles.navItemActive}
                        className={styles.navItem}
                        to="/blog"
                    >
                        Blog
                    </Link>
                </li>
            </ul>
        </nav>
    </header>
)

export default Header
