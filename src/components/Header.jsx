const headerLinks = [
    {
        id: 1,
        text: 'CHARACTERS',
        url: '#',
    },
    {
        id: 2,
        text: 'COMICS',
        url: '#',
    },
    {
        id: 3,
        text: 'MOVIES',
        url: '#',
    },
    {
        id: 4,
        text: 'TV',
        url: '#',
    },
    {
        id: 5,
        text: 'GAMES',
        url: '#',
    },
    {
        id: 6,
        text: 'COLLECTIBLES',
        url: '#',
    },
    {
        id: 7,
        text: 'VIDEOS',
        url: '#',
    },
    {
        id: 8,
        text: 'FANS',
        url: '#',
    },
    {
        id: 9,
        text: 'NEWS',
        url: '#',
    },
    {
        id: 10,
        text: 'SHOP',
        url: '#',
    },

]
export default function Header(){
    return <header className="container">
        <img src="./img/dc-logo.png" alt="" />
        <nav className="main-nav">
            <ul>
                {
                    headerLinks.map((headerLink) =>{
                        return(
                            <li key={headerLink.id}>
                                <a href={headerLink.url}>{ headerLink.text}</a>
                            </li>
                        );
                    })
                }
            </ul>
        </nav>
        
    </header>
}