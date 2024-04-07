import React from 'react'
import Product from './Product'

const Home = () => {
    return (
        <>
        <div>
    <style>
    {`
    /* Custom CSS for carousel */
    .carousel-item {
        transition: transform 0.6s ease;
    }

    /* Make the active slide larger */
    .carousel-item.active {
        transform: scale(1.1);
    }

    /* Hide bottom indicators */
    .carousel-indicators {
        display: none;
    }
    `}

    </style>

    <div id="carouselIndicators" class="carousel slide" data-bs-ride="carousel">

        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="https://homephotossellphy.s3.amazonaws.com/home1.png" class="d-block w-100" alt="IPhone" height="400px"/>
            </div>
            <div class="carousel-item">
                <img src="https://homephotossellphy.s3.amazonaws.com/home2.png" class="d-block w-100" alt="IPhone" height="400px"/>
            </div>
            <div class="carousel-item">
                <img src="https://homephotossellphy.s3.amazonaws.com/home3.png" class="d-block w-100" alt="IPhone" height="400px"/>
            </div>
            <div class="carousel-item">
                <img src="https://homephotossellphy.s3.amazonaws.com/home4.png" class="d-block w-100" alt="IPhone" height="400px"/>
            </div>
        </div>
    </div>
</div>
<Product/>
<script>
{`
$('.carousel').carousel({
    interval: 5000
});
`}
</script>
        </>

    )
}
export default Home
