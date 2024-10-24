import React from 'react'
import "./Footer.css"


const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer__wrapper">
            <h1 className='footer-h1'>Форма заказа билета в будущее </h1>


            <div className="footer-inp">
              <input placeholder='  имя' type="text" name="" id="" className="input" />
              <input placeholder='  e-mail' type="text" name="" id="" className="input" />
              <input placeholder='  телефон' type="text" name="" id="" className="input" />
              <input placeholder='  куда я полечу в ближайшее время?' type="text" name="" id="" className="input" />

              <button className="footer-btn">двигаться к мечте!</button>
            </div>
          <div className="footer-end">
            <h1>© Все мои мечты защищены моим трудолюбием</h1>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer