
const Item = ({id, name, category, quantity, image, price, desc, showmodal}) => {
    const handleClick = () => {
        showmodal(name, category, quantity, image, price, desc);
    }
    return (
        <div className="Item col">
            <div className="card h-100" onClick={handleClick} data-bs-toggle="modal" data-bs-target="#itemModal">
                <img src={image} className="card-img-top" alt={name} />
                <div className="card-body">
                    <h5 className="card-title">${price}</h5>
                    <p className="card-text">{name}</p>
                    <p className="card-text"><small className="text-muted">{quantity}</small></p>
                </div>
            </div>
        </div>
    )
}

export default Item;