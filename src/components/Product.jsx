import { Link } from "react-router-dom"
function Product({product,sellItems,buyItems,basket,total,balance}) {
  let check=basket.find((a)=>a.id==product.id)
  return (
    <>
    <div className="product">
        <div className='img_bar'>
            <img src={product.image} alt="" />
            <h2>Title:<Link to={`/product/${product.id}`}>{product.title.slice(0,13)}...</Link></h2>
            <h3>Price:${product.price}</h3>
        </div>
        <div className="basket">
            <div><button disabled={balance-total<product.price} onClick={()=>buyItems(product.id)} className='buy'>Buy</button></div>
            <div>{check?check.count:'0'}</div>
            <div><button disabled={!check} onClick={()=>sellItems(product.id)}  className='sell'>Sell</button></div>

        </div>
        </div>
        </>
  )
}

export default Product