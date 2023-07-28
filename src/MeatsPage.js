import meats from "./meats";
import Item from "./Item";

const MeatsPage = ({showmodal}) => {
    return (
        <div className="MeatsPage">
            <div className="MeatsPage group-title">Meat & Seafood <a href="#" className="view-more link-secondary text-decoration-underline">View all</a></div>
            <div className="group-container row row-cols-2 row-cols-md-4 g-2 g-md-4">
                {meats.map((e,i) => {
                    return (<Item key={i} id={e.id} name={e.name} category="Meat & Seafood" price={e.price} quantity={e.qty_available} image={e.image} desc={e.desc} showmodal={showmodal}/>)
                })}
            </div>
        </div>
    )
}

export default MeatsPage;