import style from './FindBestTeacher.module.scss'

export default function FindBestTeacher() {
    return (
        <main>
            <section className={style.context}>
                <h1 className={style.context__title}>
                    Find your <br/>
                    <span className={style["context__title--highlight"]}>best teacher</span>
                </h1>

                <p>
                    Whether you are a student trying to find your ideal private language teachers/tutors
                    or a teacher trying to find great students for your customised private lessons!
                </p>
            </section>
            <section className={style["search-form"]}>
                <form>
                    <input placeholder="Type here what are you looking for" type="text"/>
                    <div>
                        <div>
                            <label htmlFor="teacher">i’m a teacher</label>
                            <input id="teacher" type="radio"/>
                        </div>
                        <div>
                            <label htmlFor="teacher">i’m a student</label>
                            <input id="teacher" type="radio"/>
                        </div>
                        <button>
                            Search
                        </button>
                    </div>
                </form>
            </section>
        </main>
    )
}