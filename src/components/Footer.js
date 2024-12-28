import React from 'react'
import { Link } from 'gatsby'

import logo from '../../static/img/logo.svg'
// import facebook from "../img/social/facebook.svg";
// import instagram from '../img/social/instagram.svg'
// import twitter from "../img/social/twitter.svg";
// import vimeo from '../img/social/vimeo.svg'
import { FaWifi } from '@react-icons/all-files/fa/FaWifi'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter">
        <div className="content has-text-centered">
          <img
            src={logo}
            alt="Kaldi"
            style={{ width: '14em', height: '10em' }}
          />
        </div>
        <div className="content has-text-centered has-background-black has-text-white-ter">
          <div className="container has-background-black has-text-white-ter">
            <div style={{ maxWidth: '100vw' }} className="columns">
              <div className="column is-4">
                <section>
                  <ul className="menu-list">
                    <li>
                      <Link to="/" className="navbar-item">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/about/">
                        About
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/committee/">
                        Committee
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/submission/">
                        Submission
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/program/">
                        Program
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4">
                <section>
                  <ul className="menu-list">
                    <li>
                      <Link className="navbar-item" to="/blog/">
                        News and Announcements
                      </Link>
                    </li>
                    <li>
                      <a
                        className="navbar-item"
                        href="https://events.vtsociety.org/vtc2025-spring/"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="The 2024 IEEE 99th Vehicular Technology Conference: VTC2024-Spring"
                      >
                        VTC2025-Spring in Oslo
                      </a>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4 social">
                <a
                  className="navbar-item has-text-grey-darker"
                  href="https://yamazato.nuee.nagoya-u.ac.jp/en/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Nagoya University Yamazato Laboratory"
                >
                  <FaWifi />
                  &nbsp;&nbsp;Yamazato Laboratory
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
