import Head from 'next/head';

const Home = () => {
    return (
        <>
            <Head>
                <meta name="description" content="Cursos de programacióon en español y 100% GRATIS"/>
            </Head>
            <main className='main'>
                <div className="logo" data-aos='zoom-in'>
                    <img className="logo-img" src="/img/LionCode.png" alt="logo LionCode" />
                </div>
            </main>

            <div style={{height: '50vh'}}></div>

            <div className="description" data-aos="fade-down" data-aos-duration="1000">
                <p>LionCode es un proyecto de blog. Espero que te guste!</p>
            </div>

            <div style={{height: '50vh'}}></div>

            <div>
                <h1 style={{textAlign: 'center'}} data-aos="fade-up" data-aos-duration="1000">LionCode es la plataforma ideal para aprender a programar</h1>
            </div>
            <img className="logo" src="/img/programming-1873854.png" data-aos="zoom-in" data-aos="1500" width="1300" />
            <div style={{height: '50vh'}}></div>
            <div className="description"><h1 style={{textAlign: 'center'}} data-aos="zoom-in-left">Metodologia Unica donde te sera muy facil aprender</h1>
            </div>

            <div style={{height: '50vh'}}></div>
            <div className="description"><h1 style={{textAlign: 'center'}} data-aos="zoom-in-left">¿No lo crees?</h1>
                <div style={{height: '50vh'}}></div>
                <h1 style={{textAlign: 'center'}} data-aos="zoom-in-left">Pues Intentalo....</h1>
            </div>
            <p></p>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <a data-aos="fade-up" data-aos-duration="1500" className="boton" style={{textAlign: 'center', height: '40px', width:'40px'}} href="cursos.html"  >ES GRATIS</a>
            </div>

            <div style={{height: '50vh'}}></div>
            <img src="/img/web-2389250.jpg" alt="" data-aos="zoom-in-left" width="1300" />
        </>
    );
}

export default Home;