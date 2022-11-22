import React from 'react'
import styles from '../styles/Footer.module.css'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'

const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.coded}>
          <h2>Coded By Pedro Velosa</h2>
          <div className={styles.social}>
            <a
              href='https://github.com/Pedr0Velosa'
              target={'_blank'}
              rel="noopener noreferrer"
            >
              <AiFillGithub
                size={'2em'}
                fill={'#000'}
              />
            </a>
            <a
              href='https://www.linkedin.com/in/pedrovelosa/'
              target={'_blank'}
              rel="noopener noreferrer"
            >
              <AiFillLinkedin
                size={'2em'}
                fill={'#0a66c2'}
              />
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer