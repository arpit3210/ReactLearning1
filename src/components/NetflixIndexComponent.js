import './NetflixIndexComponent.css'
import NetflixHeaderComponent from './NetflixHeaderComponent'
import NetflixMainComponents from './NetflixMainComponent'
import NetflixRegisterComponent from './NetflixRegisterComponent'
import NetflixFooterComponent from './NetflixFooterComponent'
import LoginComponent from './LoginComponent'

export default function NetflixIndexComponent() {
    return (
        <div className="container-fluid ">
            <div className='box'>

                <header>
                    <NetflixHeaderComponent />

                </header>

                <section className='d-flex justify-content-center align-items-center'>
                    <main>
                        <NetflixMainComponents />
                        <NetflixRegisterComponent />
                        <LoginComponent />
                    </main>
                </section>


            </div>

            <section>
                <footer className=' bg-black'>
                    <NetflixFooterComponent />
                </footer>
            </section>
        </div>
    )
}