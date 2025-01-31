import headerLinks from "../data/headerLinks";
export default function Header(){
    return <header className="container">
        <img src="./img/dc-logo.png" alt="" />
        <nav className="header-nav">
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