

import Carousel from 'react-bootstrap/Carousel';
import styles from './styles.module.css'
const CarouselFunc=()=>
{   return(
    <>
    <div>
        <div className={styles.bannerStyle1}>
            <div className="banner1">
                <img src="./banner1.jpg" className={styles.bannerImg1} />
            </div>
            <div className="offer d-block">
                <span style={{position:"relative",bottom:"280px",right:"10%",padding:"8px",fontWeight:"bolder",fontSize:"24px",color:"white",backgroundColor:"#26ADFF",float:"right"}}>50% OFF</span>
                <span style={{position:"relative",bottom:"220px",left:"5%",padding:"8px",fontWeight:"bolder",fontSize:"28px",color:"white",float:"right"}}>Now U Can Save Up To %50 </span>
                <span style={{position:"relative",marginTop:"8px",bottom:"200px",left:"52%",padding:"8px",fontWeight:"bolder",fontSize:"24px",color:"white",float:"right"}}>29$ </span>

            </div>
            <button style={{position:"relative",marginTop:"8px",bottom:"100px",left:"64%",border:"none",backgroundColor:"black",padding:"20px",fontWeight:"bold",fontSize:"20px",color:"white",float:"right"}}>SHOPPING NOW</button>
        </div>

        <div className={styles.mySlider}>
            <Carousel fade >
                <Carousel.Item>
                <img
                    className={styles.slideImage}
                    src="./slider1.jpg"
                    alt="First slide"
                
                />
                <Carousel.Caption>
                    
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img
                    className={styles.slideImage}
                    src="./slider2.jpg"
                    alt="Second slide"
                
                />

                <Carousel.Caption>

                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img
                    className={styles.slideImage}
                    src="./slider3.jpg"
                    alt="Third slide"
                    
                />

                <Carousel.Caption>
                    
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img
                    className={styles.slideImage}
                    src="./slider4.jpg"
                    alt="Third slide"
                    
                />

                <Carousel.Caption>
                    
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img
                className={styles.slideImage}
                    src="./slider5.jpg"
                    alt="Third slide"
                    
                />

                <Carousel.Caption>
                    
                </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
        </div>
    </div>
    
    </>
);
}
export default CarouselFunc;