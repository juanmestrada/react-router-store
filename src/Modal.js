import './Modal.css';

const Modal = ({resetModal, category, name, quantity, image, price, details}) => {
    const handleClose = () =>{
        resetModal();
    }
    return (
        <div className="modal fade" id="itemModal" data-bs-backdrop="static" tabIndex="-1" aria-labelledby="itemModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl">
                <div className="modal-content">
                    <div className="modal-header border-0">
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleClose}></button>
                    </div>
                    <div className="modal-body">
                        <div className="modal-item-info">
                            <div className="modal-item-img">
                                <img src={image} alt={name} />
                            </div>
                            <div className="modal-item-data">
                                <div className="modal-item-category">{category}</div>
                                <div className="modal-item-title">{name}</div>
                                <div className="modal-item-price">${price}</div>
                                <div className='modal-item-reviews'>
                                    <i className="si ld-StarFill" aria-hidden="true">&#9733;</i>
                                    <i className="si ld-StarFill" aria-hidden="true">&#9733;</i>
                                    <i className="si ld-StarFill" aria-hidden="true">&#9733;</i>
                                    <i className="si ld-StarFill" aria-hidden="true">&#9733;</i>
                                    <i className="si ld-StarFill" aria-hidden="true">&#9734;</i>
                                </div>
                                <div className="modal-item-qty">{quantity}</div>
                                <hr/>
                                <button disabled>Add to cart</button>
                            </div>
                        </div>
                        <div className="modal-item-about"><h3>About this item</h3>{details}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;