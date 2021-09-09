import style from './Landing.module.scss'
import Header from './components/Header'
import FindBestTeacher from './components/FindBestTeacher'

export default function Landing() {
  return (
    <section className={style.content}>
      <div className={style.content__header}>
        <Header></Header>
      </div>

      <div className={style.content__main}>
        <FindBestTeacher></FindBestTeacher>
      </div>
      
      <footer className={style.content__footer}></footer>
    </section>
  )
}
  