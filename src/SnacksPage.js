import snacks from "./snacks";
import Item from "./Item";

const SnacksPage = ({showmodal}) => {
    return (
        <div className="SnacksPage">
            <div className="SnacksPage group-title">Snacks & Candy <a href="#" className="view-more link-secondary text-decoration-underline">View all</a></div>
            <div className="group-container row row-cols-2 row-cols-md-4 g-2 g-md-4">
                {snacks.map((e,i) => {
                    return (<Item key={i} id={e.id} name={e.name} category="Snacks & Candy" price={e.price} quantity={e.qty_available} image={e.image} desc={e.desc} showmodal={showmodal}/>)
                })}
            </div>
        </div>
    )
}

export default SnacksPage;