import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import styles from './layout.module.scss'

const Layout = ({ children }) => (
    <div className={styles.container}>
        <div className={styles.content}>
            <Header />
            {children}
        </div>
        <Footer />
    </div>
)

export default Layout
