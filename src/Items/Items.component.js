import './Items.styles.css';

const Items=(props)=> {
    return(
        <div className='items-structure-container'>
            <img className='items-image' src={props.productInfo.image}></img>

            <div className='items-info-container'>
                <h1 className='item-name'>{props.productInfo.name}</h1>
                <p className='item-mrp'>MRP:{props.productInfo.mrp}</p>
                <p className='item-price'>Price:{props.productInfo.price}</p>
            </div>
        </div>
            
    )
}
export default Items;