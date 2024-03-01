import React from 'react'
import './Products.css'
import img_1 from './Assests/img_1.png'
import img_2 from './Assests/img_2.png'
import img_3 from './Assests/img_3.png'
import img_4 from './Assests/img_4.png'
import img_5 from './Assests/img_5.png'
import img_6 from './Assests/img_6.png'
import img_7 from './Assests/img_7.png'
import img_8 from './Assests/img_8.png'
import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

let products = [{
    id: 1,
    name: 'ZARA',
    // img: img_1,
    old_price: 15000,
    new_price: 12000
}, {
    id: 2,
    // img: img_2,
    name: 'K-SWISS',
    old_price: 13000,
    new_price: 9000
}, {
    id: 3,
    // img: img_3,
    name: 'REDTAPE',
    old_price: 10000,
    new_price: 5000
}, {
    id: 4,
    // img: img_4,
    name: 'ZARA',
    old_price: 55000,
    new_price: 37000
}, {
    id: 5,
    name: 'US-POLO',
    old_price: 12000,
    new_price: 8000
},{
    id: 6,
    name: 'NIKE',
    old_price: 19000,
    new_price: 17000
},{
    id: 7,
    name: 'JORDAN',
    old_price: 60000,
    new_price: 59000
},{
    id: 8,
    name: 'NIKE',
    old_price: 63000,
    new_price: 55000
}]



const Products = () => {
    

    return (
        <>

            <div className="describe">
                <h1 className='product-name'> OUR PRODUCTS</h1>
            </div>

            <div  className='view'>

                {

                    products.map((items,i) => {
                        return (
                            <div key={items.id} className='item'>
                                <div className="details">

                                    <div className="images">
                                        {/* <img className='images-image' src={items.img} alt="" /> */}

                                    </div>
                                    <p className='brand-name'key={items.id}>{items.name}</p>
                                </div>
                                <div className="i-prices">
                                    <div className="pp">
                                        <p className='item-price-old' key={items.old_price}> RS {items.old_price} <hr /></p>
                                        <span className='para' key={items.new_price}> RS {items.new_price}</span>
                                    </div>

                                </div>
                                <div className="button">
                                    <button className='btn-btn'>BUY NOW</button>
                                </div>



                            </div>


                        )
                    })
                }
            </div>
            <div className="to-set">
                <img className='images-image1' src={img_1} alt="" />
                <img className='images-image2' src={img_2} alt="" />
                <img className='images-image3' src={img_3} alt="" />
                <img className='images-image4' src={img_4} alt="" />
            </div>

            <div  className="to-set2">
                
                <img className='images-image5' src={img_5} alt="" />
                <img className='images-image6' src={img_6} alt="" />
                <img className='images-image7' src={img_7} alt="" />
                <img className='images-image8' src={img_8} alt="" />
            </div>

        </>
    )
}

export default Products


// {products.map((item) => {

// })}



// {
//     products.map((item, i) => {
//         return (
//             <>

//                 <div className='items'>
//                     <div className="images">
//                         <img src="" alt="" />
//                     </div>
//                     <p>{item.name}</p>
//                     <div className="i-prices">
//                         <div className="item-price-old">
//                             {item.old_price} <hr />
//                         </div>
//                         <div className="item-price-new">
//                             Rs 12000
//                         </div>

//                     </div>
//                     <div className="button">
//                         <button>Buy Now</button>
//                     </div>

//                 </div>
//             </>
//         )
//     })
// }







