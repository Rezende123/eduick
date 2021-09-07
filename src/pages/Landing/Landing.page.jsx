import style from './Landing.module.scss'
import Header from './components/Header'

export default function Landing() {
  return (
    <div className={style.content}>
      <Header></Header>
      
      <div className={style.content__footer}></div>
    </div>
  )
}
  