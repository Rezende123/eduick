import style from './Dashboard.module.scss'
import Header from './components/Header'

export default function Dashboard() {
  return (
    <section className={style.content}>
      <div className={style.content__header}>
        <Header></Header>
      </div>

      <main className={style.content__main}>
      </main>

      <footer className={style.content__footer}>
        <p>
          Copyright © 2020 Eduick. <span>Todos os direitos reservados.</span>
        </p>
      </footer>
    </section>
  )
}