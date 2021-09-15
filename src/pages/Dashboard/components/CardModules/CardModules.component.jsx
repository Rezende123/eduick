import style from './CardModules.module.scss'
import stars from '../../../../../public/images/stars.svg'
import picture from '../../../../../public/images/Rectangle415.svg'
import Image from 'next/image'

export default function CardModules() {
  return (
    <div className={style.card}>
      <figure className={style.card__picture}>
        <Image src={picture} />
      </figure>
      <div className={style.card__info}>
        <figure>
          <Image src={stars} />
        </figure>
        <button>
          <span>10 lessons</span>
        </button>
      </div>
      <h2 className={style.card__title}>
        Master English: Improve Your Speaking
      </h2>
    </div>
  )
}
