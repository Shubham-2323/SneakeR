import React from 'react'
import './Slider.css'
import review from './Assests/review-1.png'
import men from './Assests/men.png'
import woman from './Assests/woman.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Sliderr from "react-slick";



function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "black",}}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "green",}}
            onClick={onClick}
        />
    );
}

// function Arrow(props) {
//     const { className, style, onClick } = props;
//     return (
//       <div
//         className={className}
//         style={{ ...style, display: "block", background: "red" }}
//         onClick={onClick}
//       />
//     );
//   }
const Slider = () => {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        // nextArrow: <Arrow />,

        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    const data = [{
        name: 'Shubham',
        img:review,
        para1: 'Lorem Ipsum is simply dummy text of the printing and types',
        para2: "etting industry. Lorem Ipsum has been the industry's ",
        para3: "standard dummy text ever since the 1500s"

    }, {
        name: 'XYZ-Ab',
        img:men,
        para1: 'Lorem Ipsum is simply dummy text of the printing and types',
        para2: "etting industry. Lorem Ipsum has been the industry's ",
        para3: "standard dummy text ever since the 1500s"
        
    }, {
        name: 'AbcD',
        img:woman,
        para1: 'Lorem Ipsum is simply dummy text of the printing and types',
        para2: "etting industry. Lorem Ipsum has been the industry's ",
        para3: "standard dummy text ever since the 1500s"

    },]

    return (

        <>

            <div className="rewiess">
                <p className="review">
                    REVIEWS
                </p>
            </div>

            <div className='data-div'>

                <div className="data-d">
                    <Sliderr {...settings} >

                        {data.map((item,i) => {
                            return <>
                            
                                <div  className="card">
                                    <div key={item.name}className='slider-image'>
                                        <img className='image-slider' key={item.img} src={item.img} alt="" />
                                    </div>
                                    <div  className='slider-name'>
                                        <p className='name-slider'key={item.para1}>{item.name}</p>
                                    </div>
                                    <div className='slider-para' >
                                        <p className='para-slider' >{item.para1}</p>
                                        <p className='para-slider'key={item.para2} >{item.para2}</p>
                                        <p className='para-slider' key={item.para3}>{item.para3}</p>
                                    </div>
                                </div>
                            </>

                        })}
                    </Sliderr>
                </div>
            </div>
        </>
    )
}

export default Slider
