import React from "react"


class NewUserCarousel extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            slideIndex: 0
        }

        this.showSlide = this.showSlide.bind(this)
        this.prevSlide = this.prevSlide.bind(this)
    }

   componentDidMount() {
        let video = document.getElementsByClassName(`new-user-video-${this.state.slideIndex}`)[0]
        video.load();
        video.play();
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
            for(let x = 0; x < 3; x++) {    
                $(`.New-User-Slide-${x}`).css("display", "none");
                $(`.new-user-video-${x}`).css("display", "none");
                
            }
            this.setState({ slideIndex: n });
            $(`.New-User-Slide-${this.state.slideIndex}`).css("display", "block")
            $(`.new-user-video-${this.state.slideIndex}`).show();
            let video = document.getElementsByClassName(`new-user-video-${this.state.slideIndex}`)[0]
            video.load();
            video.play();
   
    }

    render() {

   

    let content =   [
        <div className='New-User-Slide-0'>
            <div className='New-User-Video-Container'>   
                <video   className='new-user-video-0' muted type='video/mp4'>
                    <source src="/FirstExperienceLockMovie.mp4"  />
                </video>
            <div className='New-User-Video-Text'>
                <div className='New-User-Video-Text-row-1'>
                    Commission-free stock trading.
                </div>
            <div className='New-User-Video-Text-row-2'>
                We've cut the fat that makes other brokerages costly, like manual account management and hundreds of storefront locations, so we can offer zero commission trading.
            </div>
            </div>
            </div>
        </div>   ,

        <div className='New-User-Slide-1'>
        <div className='New-User-Video-Container'>   
            <video   className='new-user-video-1' muted type='video/mp4'>
                <source src="/FirstExperienceStopwatchMovie.mp4"  />
            </video>
        <div className='New-User-Video-Text'>
            <div className='New-User-Video-Text-row-1'>
                Keep tabs on your money.
            </div>
        <div className='New-User-Video-Text-row-2'>
            WSet up customized news and notifications to stay on top of your assets as casually or as relentlessly as you like. Controlling the flow of info is up to you.
        </div>
        </div>
        </div>
        </div>
        ,

        <div className='New-User-Slide-2'>
        <div className='New-User-Video-Container'>   
            <video  className='new-user-video-2' muted type='video/mp4'>
                <source src="/FirstExperienceMoneyMovie.mp4"  />
            </video>
        <div className='New-User-Video-Text'>
            <div className='New-User-Video-Text-row-1'>
                Account Protection.
            </div>
        <div className='New-User-Video-Text-row-2'>
        Robinhood Financial is a member of SIPC. Securities in your account are protected up to $500,000. For details, please see www.sipc.org.
        </div>
        </div>
        </div>
    </div>   ,
    ]

    
      

        return(

               
        <div className="New-User-Carousel-Container">
                
            
                <div onClick={() => this.prevSlide(this.state.slideIndex)}
                className="New-User-Carousel-Nav-Arrow-Left">
                    <img src="/left_arrow.svg" className="Splash-Arrow" />
                </div>
                
                
                <div className="New-User-Carousel-Content">
                    {content[this.state.slideIndex]}  
                </div>
                
                
                <div onClick={() => this.nextSlide(this.state.slideIndex)}
                className="New-User-Carousel-Nav-Arrow-Right">
                    <img src="/right_arrow.svg" className="Splash-Arrow" />
                </div>
                
            

         
        </div>
  
        )
        
    }


}

export default NewUserCarousel