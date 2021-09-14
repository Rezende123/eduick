import style from './Dashboard.module.scss'
import Header from './components/Header'

export default function Dashboard() {
  return (
    <section className={style.content}>
      <div className={style.content__header}>
        <Header></Header>
      </div>

      <main className={style.content__main}>
        <div className={style["content__presentation-card"]}>
          <figure></figure>
          <article>
            <h1 className={style["content__presentation-card--title"]}>
              Hello <strong>Student.</strong>
            </h1>
            <p className={style["content__presentation-card--text"]}>
              Whether you are a student trying to find your ideal private language teachers/tutors
            </p>
          </article>
          <figure></figure>
        </div>
      </main>

      <footer className={style.content__footer}>
        <p>
          Copyright © 2020 Eduick. <span>Todos os direitos reservados.</span>
        </p>
      </footer>
    </section>
  )
}