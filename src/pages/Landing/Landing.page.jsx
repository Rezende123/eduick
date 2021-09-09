import style from './Landing.module.scss'
import Header from './components/Header'
import FindBestTeacher from './components/FindBestTeacher'
import Image from 'next/image'
import shape1 from '../../../public/images/group_1_descktop.svg'
import shape2 from '../../../public/images/group_2.svg'

export default function Landing() {
  return (
    <section className={style.content}>
      <div className={style.content__header}>
        <Header></Header>
      </div>

      <div className={style.content__main}>
        <figure id={style["shape-1"]}>
          <Image src={shape1}/>
        </figure>
        <div id={style["form"]}>
          <FindBestTeacher></FindBestTeacher>
        </div>
        <figure id={style["shape-2"]}>
          <Image src={shape2} height="700"/>
        </figure>
      </div>
      
      <footer className={style.content__footer}></footer>
    </section>
  )
}
  