import React from 'react'
import "./Hero.css"


const Hero = () => {
  return (
    <>
    <section className="hero">
      <div className="container">
        <div className="hero__wrapper">
           <h1 className='future-h1'>Что меня ждет впереди</h1>
          <div className="future">
           
            <div className="block">
              <img src="https://abbos29.github.io/dream/img/icon1.png" alt="" />
              <h1>Свободное время</h1>
              <p>Мне нужно свободное время на семью и самое настоящее</p>
            </div>

        

            <div className="block">
              <img src="https://abbos29.github.io/dream/img/icon2.png" alt="" />
              <h1>Яркие путешествия </h1>
              <p>Работать откуда угодно - что может быть лучше? </p>
            </div>

 
    <div className=" block ">
              <img  src="https://abbos29.github.io/dream/img/icon3.png" alt="" />
              <h1> Создание ценности</h1>
              <p> Нет ничего сильнее, чем жить не просто так, создавая ценность</p>
           
           
            </div>


          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Hero