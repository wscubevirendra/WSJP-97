import React, { useEffect, useState } from 'react'

export default function App() {
  const [product, setProduct] = useState([])
  async function getproduct() {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json()
    setProduct(data.products)

  }

  useEffect(
    () => {
      getproduct()
    },
    []
  )



  return (
    <div className='container-xl'>
      <div className='row'>
        {
          product.map(
            (data, index) => {
              return (
                <div key={data.id} class="card col-4" >
                  <img src={data.thumbnail} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{data.title}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                  </div>
                </div>
              )
            }
          )
        }

      </div>
    </div>
  )
}
