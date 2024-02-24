import { useState, useEffect } from "react"
import { connect } from "react-redux"
import { useLocation } from "react-router-dom"
import Product from "../components/Product"
function Home({dispatch}) {
  const {pathname}=useLocation()
  const [data, setData] = useState({})
  const [loading, setLoading] = useState(true)
  const controller=new AbortController()
  useEffect(() => {
    fetch('https://fakestoreapi.com/products',{
      siqnal:controller.siqnal
    })
      .then(res => res.json())
      .then(json => {
        setData(json)
        setLoading(false)
      })

      return ()=>controller.abort()
  }, [pathname])



  let temp =localStorage.getItem('basket')
  const [basket,setBasket]=useState(temp? JSON.parse(temp):[])
  useEffect(()=>{
    if(!loading){
    localStorage.setItem('basket',JSON.stringify(basket))
    
    }
  },[basket])

  !loading&&dispatch({
    type:'setBasket',
    payload:basket
  })


  let balance = 300
  const sellItems = (id) => {
    let check = basket.find((a) => (a.id === id))
    if (!check) { return }
    if (check.count == 1) {
      setBasket([...basket.filter((a) => (a.id !== id))])
      return
    }
    if (check) {
      check.count--
      setBasket([...basket])
      return
    }
  }

  const buyItems = (id) => {
    let check = basket.find((a) => (a.id === id))
    if (check) {
      check.count++
      setBasket([...basket])
      return
    }
    setBasket([...basket, { id: id, count: 1 }])


  }
  let total = !loading&& +basket.reduce((a, b) => a + data.find((t) => (t.id === b.id))?.price * b.count, 0).toFixed(2)
  

  return (
    <>
      <section className="products">
        {loading ? <h2>Loading...</h2> : data.map((a) => <Product 
        key={a.id}
         product={a}
         buyItems={buyItems}
         sellItems={sellItems}
         balance={balance}
         total={total}
         basket={basket} />)}
      </section>
    </>
  )
}

export default connect() (Home)