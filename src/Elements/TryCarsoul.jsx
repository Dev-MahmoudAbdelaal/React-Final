


const slideIndex = 1;
    const plusSlides=(n)=>{
        showSlides(slideIndex += n);
      }
    const currentSlide=(n)=> {
        showSlides(slideIndex = n);
    }
    const showSlides=(n)=>{
        let i;
        let slides = document.getElementsByClassName("mySlides");
        let dots = document.getElementsByClassName("dot");
        if (n > slides.length) {slideIndex = 1}    
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";  
        }
        for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex-1].style.display = "block";  
        dots[slideIndex-1].className += " active";
       
      }
      setInterval(function(){ plusSlides(1)}, 2000);
return(  
  
       <div className={styles.mySlider}>

            <div className={styles.mySlider}>
                <img className={styles.slideImage}src="./slider1.jpg"/>
            </div>

            <div className={styles.fade1}>
                <img className={styles.slideImage}  src="./slider2.jpg"/>
            </div>

            <div className={styles.fade1}>
                <img className={styles.slideImage} src="./slider3.jpg"/>
            </div>

            <div className={styles.fade1}>
                <img className={styles.slideImage}  src="./slider4.jpg"/>
            </div>

            <div className={styles.fade1}>
                <img className={styles.slideImage}  src="./slider5.jpg"/>
            </div>

            {/* <a className="prev" onclick="plusSlides(-1)">❮</a>
            <a className="next" onclick="plusSlides(1)">❯</a> */}

            {/* <div className="dotContainer">
                <span className="dot" onClick="currentSlide(1)"></span> 
                <span className="dot" onClick="currentSlide(2)"></span> 
                <span className="dot" onClick="currentSlide(3)"></span> 
                <span className="dot" onClick="currentSlide(4)"></span> 
                <span className="dot" onClick="currentSlide(5)"></span> 
            </div> */}
        </div>