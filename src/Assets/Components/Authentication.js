import React from 'react'
import logo from './images/logo.svg';
import MaterialIcon from 'react-google-material-icons'
import './Authentication.css'
import google_img from './images/Google Logo.svg'
import str_user from './images/str_user.svg'
import Signup_page from './Signup_page';
import Login_page from './Login_page';
import Forgot_password_page from './Forgot_password_page';
import Email_confirm_page from './Email_confirm_page';

const Authentication = () => {
  return (
    <body>
        <main>
            <Email_confirm_page />
            <section className="section2">
                <div>
                    <p className='q'><em>"</em></p>
                    <p className='quote'>Creating seamless exchange procedure for everyone. Buy, sell, save, trade and exchange fiat currencies with 3 simple steps. </p>
                    <p className="author">Abisola Omotayo</p>
                    <p className="role">Founder, GirlsInTech</p>
                </div>
            </section>
        </main>
    </body>
  )
}

export default Authentication