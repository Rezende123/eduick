import style from './FindBestTeacher.module.scss'

export default function FindBestTeacher() {
    return (
        <main>
            <section>
                <h1>
                    Find your <br/> best teacher
                </h1>

                <p>
                    Whether you are a student trying to find your ideal private language teachers/tutors
                    or a teacher trying to find great students for your customised private lessons!
                </p>
            </section>
            <section>
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