const secondSectionLink = [
    {
        id: 1,
        text: 'DIGITAL COMICS',
        src: "./img/buy-comics-digital-comics.png",
        url:'#',
    },
    {
        id: 2,
        text: 'DC MERCHANDISE',
        src: './img/buy-comics-merchandise.png',
        url:'#',
    },
    {
        id: 3,
        text: 'SUBSCRIPTION',
        src: './img/buy-comics-subscriptions.png',
        url:'#',
    },
    {
        id: 4,
        text: 'COMIC SHOP LOCATOR',
        src: './img/buy-comics-shop-locator.png',
        url:'#',
    },
    {
        id: 5,
        text: 'DC POWER VISA',
        src: './img/buy-dc-power-visa.svg',
        url:'#',
    }
]

import mainMenù from "../data/mainMenù";

export default function Main(){
    return <main>
        <section className="products-nav">
            <div className="container">
                {
                    secondSectionLink.map((link) =>{
                        return(
                            <div className="col" key={link.id}>
                                <img src={link.src} alt="" />
                                <a href={link.url}>{link.text}</a>
                            </div>
                        )
                    })
                }
            </div>
        </section>
        <section className="main-nav">
            <div className="container row">
                {
                    mainMenù.map((mainCol)=>{
                        return(
                            <div className="col" key={mainCol.id}>
                                <h3>{mainCol.title}</h3>
                                <ul>
                                    {
                                        mainCol.links.map((link) =>{
                                            return(
                                                <li key={link.id}>
                                                    <a href={link.url}>{link.text}</a>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        )
                    })
                }
            </div>
            <div className="row">
                <img src="./img/dc-logo-bg.png" alt="" />
            </div>
        </section>
    </main>
}