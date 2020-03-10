import React from "react"


class SplashCarousel extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            slideIndex: 0
        }

        this.showSlide = this.showSlide.bind(this)
        this.prevSlide = this.prevSlide.bind(this)
    }

   componentDidMount() {
       this.timer = setInterval( () => this.nextSlide(this.state.slideIndex +1), 5000)
   }

   componentWillUnmount() {
       clearInterval(this.timer)
   }

  

    prevSlide(i) {
        let x = i - 1
        if (x < 0) {x = 2}
        if (x > 2) {x = 0}
        this.showSlide(x % 3)
    }

    nextSlide(i) {
        let x = i + 1
        if (x < 0) {x = 2}
        if (x > 2) {x = 0}
        this.showSlide(x % 3)
    }
    

    showSlide(n) {
     
        
            for(let i = 0; i < 3; i++) {
                $(`.slide-${i}`).css("font-weight", "300");
      
      
            }
            $(`.slide-${n}`).css("font-weight","450");
          
            this.setState({ slideIndex: n })
    }

    render() {

   

    let content =   [<div className="Splash-Slide"  id="Slide-1">
                        <div className="Splash-Carousel-Slide-Image">

                        <img src="/assets/splash-trailing.png" className="Splash-Carousel-Image" />
                        </div>

                        <div className="Splash-Carousel-Slide-Text">
                            <div className="Splash-Carousel-Slide-Text-Title">
                            Learn As You Grow
                            </div>
                            <div className="Splash-Carousel-Slide-Text-Description">
                            Our goal is to make investing in financial markets more affordable, more intuitive, and more fun, no matter how much experience you have (or don’t have).
                            </div>
                        </div>
                </div>,

                <div className="Splash-Slide" id="Slide-2">
                        <div className="Splash-Carousel-Slide-Image">
                            <img src="/assets/splash-meow.png" className="Splash-Carousel-Image" />


                        </div>

                        <div className="Splash-Carousel-Slide-Text">
                            <div className="Splash-Carousel-Slide-Text-Title">                       
                            Manage Your Portfolio
                            </div>
                            <div className="Splash-Carousel-Slide-Text-Description">
                            Keep your portfolio in your pocket. Everything you need to manage your assets is available in a single app. 
                            </div>
                        </div>
                </div>,

                <div className="Splash-Slide" id="Slide-3">
                    <div className="Splash-Carousel-Slide-Image">
                    <img src="/assets/splash-messages.png" className="Splash-Carousel-Image" />


                    </div>

                    <div className="Splash-Carousel-Slide-Text">
                        <div className="Splash-Carousel-Slide-Text-Title">
                        Keep Tabs on Your Money
                        </div>  
                        <div className="Splash-Carousel-Slide-Text-Description">
                        Set up customized news and notifications to stay on top of your assets as casually or as relentlessly as you like. Controlling the flow of info is up to you.
                        </div>
                    </div>
                </div>]

    
      
        //  let result =    


        return(

               
        <div className="Splash-Carousel-Container">
                
            <div className="Splash-Carousel-Nav">
                <div onClick={() => this.prevSlide(this.state.slideIndex)}
                className="Splash-Carousel-Nav-Arrow">
                    <img src="/assets/down_arrow.svg" className="Splash-Arrow" />
                </div>
                <div onClick={() => this.showSlide(0)} className="slide-0 carosel-nav-items">
                    Learn
                </div>
                <div onClick={() => this.showSlide(1)} className="slide-1
                carosel-nav-items">
                    Manage
                </div>
                <div onClick={() => this.showSlide(2)} className="slide-2
                carosel-nav-items">
                    Customize
                </div>
                <div onClick={() => this.nextSlide(this.state.slideIndex)}
                className="Splash-Carousel-Nav-Arrow">
                    <img src="/assets/arrow.svg" className="Splash-Arrow" />
                </div>
                <div className="Splash-Filler">

                </div>
            </div>

            <div className="Splash-Carousel-Content">
                {content[this.state.slideIndex]}  
            </div>
        </div>
  
        )
        
    }


}

export default SplashCarousel