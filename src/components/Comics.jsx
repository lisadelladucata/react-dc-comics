import comicsList from "../data/comicsList";

export default function Comics(){
    return(
        <>
        <div className="hero">
            <div className="current">
                <h3>CURRENT SERIES</h3>
            </div>
        </div>
        <div className="comics-nav">
            <div className="row container">
                {
                    comicsList.map((comics) =>{
                        return(
                            <div className="col" key={comics.id}>
                                <img src={comics.thumb} />
                                <p>{comics.title}</p>
                            </div>
                        )
                    })
                }
            </div>
            <div className="row">
            <button className="comics-btn">LOAD MORE</button>
            </div>
        </div>
        </>
    )
}