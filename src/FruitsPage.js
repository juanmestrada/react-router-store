import fruits from "./fruits";
import Item from "./Item";

const FruitsPage = ({showmodal}) => {
    return (
        <div className="FruitsPage">
            <div className="FruitsPage group-title">Fresh Fruit <a href="#" className="view-more link-secondary text-decoration-underline">View all</a></div>
            <div className="group-container row row-cols-2 row-cols-md-4 g-2 g-md-4">
                {fruits.map((e,i) => {
                    return (<Item key={i} id={e.id} name={e.name} category="Fresh Fruits" price={e.price} quantity={e.qty_available} image={e.image} desc={e.desc} showmodal={showmodal}/>)
                })}
            </div>
        </div>
    )
}

export default FruitsPage;