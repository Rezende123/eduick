import style from './FindBestTeacher.module.scss'

export default function FindBestTeacher() {
  return (
    <main>
      <section className={style.context}>
        <h1 className={style.context__title}>
          Find your <br />
          <span className={style['context__title--highlight']}>
            best teacher
          </span>
        </h1>

        <p>
          Whether you are a student trying to find your ideal private language
          teachers/tutors or a teacher trying to find great students for your
          customised private lessons!
        </p>
      </section>
      <section className={style['search-form']}>
        <form>
          <input placeholder="Type here what are you looking for" type="text" />
          <div className={style['search-form__row']}>
            <div className={style['search-form__options']}>
              <input name="search-by" id="teacher" type="radio" />
              <span
                className={style['search-form__options--checkmarck']}
              ></span>
              <label htmlFor="teacher">i’m a teacher</label>
            </div>
            <div className={style['search-form__options']}>
              <input name="search-by" id="student" type="radio" />
              <span
                className={style['search-form__options--checkmarck']}
              ></span>
              <label htmlFor="student">i’m a student</label>
            </div>
            <button
              className={`landing_page_buttom landing_page_buttom--font ${style['search-form__buttom']}`}
            >
              Search
            </button>
          </div>
        </form>
      </section>
    </main>
  )
}
