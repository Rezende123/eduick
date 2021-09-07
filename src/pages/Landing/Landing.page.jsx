import style from './Landing.module.scss'
import Header from './components/Header'

export default function Landing() {
  return (
    <div className={style.content}>
      <div className={style.content__header}>
        <Header></Header>
      </div>
      
      <div className={style.content__footer}></div>
    </div>
  )
}
  