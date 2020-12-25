import React, {Component} from 'react'
import "./home.css"
import mobileTrack from './mobile-track.png'
import mblsks from './mbl-sks.png'
import logo from './bt-logo_1.png'
import stock from './skid-steer-ware.jpg'
import cat from './cat-logo.png'
import bobcat from './bobcat.png'
import kubota from './kubota.png'
import tak from './tak.png'
import deere from './deere.png'
import navTap from './nav-tap.png'
import catSide from './cat-side.jpg'
import catFront from './cat-front.jpg'
import catClose from './cat-close.jpg'
import scrollLeft from './scroll-left.png'
import scrollRight from './scroll-right.png'

class Home extends Component {

    constructor() {
        super();
        this.onPhotoOneScrollRight();
    }

    state = {
        oneTouch: false,
        twoTouch: false,
        threeTouch: false,
        fourTouch: false,
        fiveTouch: false,
        scrollPhotoOne: 'one'
    }

    scrollView = window.addEventListener('scroll', () => {
        const scrolled = window.scrollY
        if(scrolled < 65) {
            document.getElementById('steer').className="mobile-steer"
        }else if(scrolled === 70) {
            document.getElementById('steer').className="mobile-steer-one"
        } else if (scrolled === 80) {
            document.getElementById('steer').className="mobile-steer-two"
        } else if (scrolled === 90) {
            document.getElementById('steer').className="mobile-steer-three"
        } else if (scrolled === 100) {
            document.getElementById('steer').className="mobile-steer-four"
        } else if (scrolled === 110) {
            document.getElementById('steer').className="mobile-steer-five"
        }else if (scrolled === 120) {
            document.getElementById('steer').className="mobile-steer-six"
        }else if (scrolled === 130) {
            document.getElementById('steer').className="mobile-steer-seven"
        }else if (scrolled === 140) {
            document.getElementById('steer').className="mobile-steer-eight"
        }else if (scrolled === 150) {
            document.getElementById('steer').className="mobile-steer-nine"
        }else if (scrolled === 160) {
            document.getElementById('steer').className="mobile-steer-ten"
        }else if (scrolled === 170) {
            document.getElementById('steer').className="mobile-steer-eleven"
        }else if (scrolled === 180) {
            document.getElementById('steer').className="mobile-steer-twelve"
        }else if (scrolled === 190) {
            document.getElementById('steer').className="mobile-steer-thirteen"
        }else if (scrolled === 200) {
            document.getElementById('steer').className="mobile-steer-fourteen"
        }else if (scrolled === 210) {
            document.getElementById('steer').className="mobile-steer-fifteen"
        }else if (scrolled === 220) {
            document.getElementById('steer').className="mobile-steer-sixteen"
        }else if (scrolled === 230) {
            document.getElementById('steer').className="mobile-steer-seventeen"
        }else if (scrolled === 240) {
            document.getElementById('steer').className="mobile-steer-eighteen"
        }else if (scrolled === 250) {
            document.getElementById('steer').className="mobile-steer-nineteen"
        }else if (scrolled === 260) {
            document.getElementById('steer').className="mobile-steer-twenty"
        }else if (scrolled === 270) {
            document.getElementById('steer').className="mobile-steer-twenty-one"
        }else if (scrolled === 280) {
            document.getElementById('steer').className="mobile-steer-twenty-two"
        }else if (scrolled === 290) {
            document.getElementById('steer').className="mobile-steer-twenty-three"
        }else if (scrolled > 290) {
            document.getElementById('steer').className="mobile-steer-twenty-three"
        }
    })

    onPhotoOneScrollRight = (photo) => {
        if(this.state.scrollPhotoOne === '' || this.state.scrollPhotoOne === 'one') {
            this.state.scrollPhotoOne = 'one'
        }else if (this.state.scrollPhotoOne === 'two') {
            this.state.scrollPhotoOne = 'three'
        } else if(this.state.scrollPhotoOne === 'three') {
            this.state.scrollPhotoOne = 'one'
        }
        console.log(this.state.scrollPhotoOne)
    }

    
    render() {


        let photoOnePhoto = catSide


        //  const photo = () => { if(this.state.scrollPhotoOne === 'one' || this.state.scrollPhotoOne === '' && this.state.scrollPhotoOne != 'two' && this.state.scrollPhotoOne != 'three'){
        //     photoOnePhoto = catSide
        // }else if (this.state.scrollPhotoOne === 'two' && this.state.scrollPhotoOne != 'three' && this.state.scrollPhotoOne != 'one'){
        //     photoOnePhoto = catFront
        // }else if (this.state.scrollPhotoOne === 'three' && this.state.scrollPhotoOne != 'two' && this.state.scrollPhotoOne != 'one'){
        //     photoOnePhoto = catClose
        // }}

        console.log(photoOnePhoto)

        let oneTouchClass = "brand-one"
        let steerClass = "mobile-steer"
        let productOnePhotoOneClass = "product-one-photo-one"
        let productOnePhotoTwoClass = "product-one-photo-two-hide"
        let productOnePhotoThreeClass = "product-one-photo-three-hide"

        // if(this.state.scrollPhotoOne === 'one' || this.state.scrollPhotoOne === '' && this.state.scrollPhotoOne != 'two' && this.state.scrollPhotoOne != 'three'){
        //     productOnePhotoOneClass = "product-one-photo-one-show"
        //     productOnePhotoTwoClass = "product-one-photo-two-hide"
        //     productOnePhotoThreeClass = "product-one-photo-three-hide"
        // }else if (this.state.scrollPhotoOne === 'two' && this.state.scrollPhotoOne != 'one' && this.state.scrollPhotoOne != 'three'){
        //     productOnePhotoOneClass = "product-one-photo-one-hide"
        //     productOnePhotoTwoClass = "product-one-photo-two-show"
        //     productOnePhotoThreeClass = "product-one-photo-three-hide"
        // }else if (this.state.scrollPhotoOne === 'three' && this.state.scrollPhotoOne != 'one' && this.state.scrollPhotoOne != 'two'){
        //     productOnePhotoOneClass = "product-one-photo-one-hide"
        //     productOnePhotoTwoClass = "product-one-photo-two-hide"
        //     productOnePhotoThreeClass = "product-one-photo-three-show"
        // }

        return( 
            <div id="home" className="home-container">
                <img src={navTap} className="nav-tap"/>
                <img src={logo} className="logo"/>
                <div className="home-title" > 
                    
                </div>
                <div className="home-space-one">
                <div className="body-words" > 
                    We<br/>know<br/>the<br/>feeling.
                </div>
                
                <img id="tracks" className="mobile-track" src={mobileTrack} />
                <div className="body-finish-words" > 
                    We
                </div>
                <div className="intro-finish" > 
                    Have your track.
                </div>
                <img id='steer' className={steerClass} src={mblsks} />

                <div className="top-brands">
                    Shop our Top Selling Brands:
                </div>
                <div className='logo-wrapper'>
                    {/* <div className="logo-scroll-container"> */}
                    <div onTouchStart={this.onTouchChangeOne} className={oneTouchClass}>
                        <img src={cat} className='brand-one-img'/>
                    </div>
                    <div className="brand-two">
                        <img src={bobcat} className='brand-two-img'/>
                    </div>
                    <div className="brand-three">
                        <img src={kubota} className='brand-three-img'/>
                    </div>
                    <div className="brand-four">
                        <img src={tak} className='brand-four-img'/>
                    </div> 
                    <div className="brand-five">
                        <img src={deere} className='brand-five-img'/>
                    </div>
                </div>    
                        
                <div className="stock-title">
                    We have everythig you need. 
                </div>

                <img src={stock} className="stock-img"/>
                </div>
                <div className="home-space-two">
                <div className='product-wrapper'>
                    {/* /* <div className="logo-scroll-container">  */}
                    <div className="product-one">
                        {/* <img src={scrollLeft} className="product-one-photo-scroll-left"/> */}
                        <div className="product-one-photo">
                            <img src={catSide} className="product-one-photo-one"/>
                            {/* <img src={catFront} className={productOnePhotoTwoClass}/>
                            <img src={catClose} className={productOnePhotoThreeClass}/> */}
                        </div>
                        {/* <img onClick={this.onPhotoOneScrollRight} src={scrollRight} className="product-one-photo-scroll-right"/> */}
                        <div className="product-one-title">
                            Caterpillar 279D Track - Z-Lug
                        </div>
                        <select name="qty" className="product-one-qty">
                            <option value="1"> 1</option>
                            <option value="2"> 2</option>
                            <option value="3"> 3</option>
                            <option value="4"> 4</option>
                            <option value="5"> 5</option>
                            <option value="6"> 6</option>
                            <option value="7"> 7</option>
                            <option value="8"> 8</option>
                            <option value="9"> 9</option>
                            <option value="10"> 10</option>
                        </select>
                        <div className="product-one-price">
                            $1,194.00
                        </div>
                        <button className="product-one-add">
                            add to quote
                        </button>
                    </div>
                    <div className="product-two">
                        {/* <img src={scrollLeft} className="product-one-photo-scroll-left"/> */}
                        <div className="product-two-photo">
                            <img src={catSide} className="product-two-photo-one"/>
                            {/* <img src={catFront} className={productOnePhotoTwoClass}/>
                            <img src={catClose} className={productOnePhotoThreeClass}/> */}
                        </div>
                        {/* <img onClick={this.onPhotoOneScrollRight} src={scrollRight} className="product-one-photo-scroll-right"/> */}
                        <div className="product-two-title">
                            Caterpillar 279D Track - Z-Lug
                        </div>
                        <select name="qty" className="product-two-qty">
                            <option value="1"> 1</option>
                            <option value="2"> 2</option>
                            <option value="3"> 3</option>
                            <option value="4"> 4</option>
                            <option value="5"> 5</option>
                            <option value="6"> 6</option>
                            <option value="7"> 7</option>
                            <option value="8"> 8</option>
                            <option value="9"> 9</option>
                            <option value="10"> 10</option>
                        </select>
                        <div className="product-two-price">
                            $1,194.00
                        </div>
                        <button className="product-two-add">
                            add to quote
                        </button>
                    </div>
                    {/* <div className="product-two">
                        <img src={bobcat} className='product-two-img'/>
                    </div> */}
                     <div className="product-three">
                        {/* <img src={scrollLeft} className="product-one-photo-scroll-left"/> */}
                        <div className="product-three-photo">
                            <img src={catSide} className="product-three-photo-one"/>
                            {/* <img src={catFront} className={productOnePhotoTwoClass}/>
                            <img src={catClose} className={productOnePhotoThreeClass}/> */}
                        </div>
                        {/* <img onClick={this.onPhotoOneScrollRight} src={scrollRight} className="product-one-photo-scroll-right"/> */}
                        <div className="product-three-title">
                            Caterpillar 279D Track - Z-Lug
                        </div>
                        <select name="qty" className="product-three-qty">
                            <option value="1"> 1</option>
                            <option value="2"> 2</option>
                            <option value="3"> 3</option>
                            <option value="4"> 4</option>
                            <option value="5"> 5</option>
                            <option value="6"> 6</option>
                            <option value="7"> 7</option>
                            <option value="8"> 8</option>
                            <option value="9"> 9</option>
                            <option value="10"> 10</option>
                        </select>
                        <div className="product-three-price">
                            $1,194.00
                        </div>
                        <button className="product-three-add">
                            add to quote
                        </button>
                    </div>

                    {/* <div className="product-four">
                        <img src={tak} className='product-four-img'/>
                    </div> 
                    <div className="product-five">
                        <img src={deere} className='product-five-img'/>
                    </div>  */}
                </div>
                </div>

            </div>
        )
    }
}

export default Home;