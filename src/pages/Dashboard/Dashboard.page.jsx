import style from './Dashboard.module.scss'
import Header from './components/Header'
import Image from 'next/dist/client/image'
import fig1 from '../../../public/images/dashboard_yellow.svg'
import fig2 from '../../../public/images/dashboard_fig2.svg'
import ellipsis from '../../../public/icons/ellipsis.svg'
import CardModules from './components/CardModules'

export default function Dashboard() {
  const cards = []
  const amountCards = 6

  for (let i = 0; i < amountCards; i++) {
    cards.push(<CardModules key={i}></CardModules>)
  }

  return (
    <section className={style.content}>
      <div className={style.content__header}>
        <Header></Header>
      </div>

      <main className={style.content__main}>
        <div className={style['content__presentation-card']}>
          <figure className={style['content__presentation-card--fig1']}>
            <Image src={fig1} />
          </figure>
          <article>
            <h1 className={style['content__presentation-card--title']}>
              Hello <strong>Student.</strong>
            </h1>
            <p className={style['content__presentation-card--text']}>
              Whether you are a student trying to find your ideal private
              language teachers/tutors
            </p>
          </article>
          <figure className={style['content__presentation-card--fig2']}>
            <Image src={fig2} />
          </figure>
        </div>
        <div className={style.content__cards}>{cards}</div>
        <figure className={style.content__ellipsis}>
          <Image src={ellipsis} />
        </figure>
      </main>

      <footer className={style.content__footer}>
        <p>
          Copyright © 2020 Eduick. <span>Todos os direitos reservados.</span>
        </p>
      </footer>
    </section>
  )
}
