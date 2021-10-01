import React,{Component} from "react";

import "./main.css"
import img1 from "./images/img1.jpeg"
import img2 from "./images/ing2.jpeg"
import img3 from "./images/img3.jpeg"
import img4 from "./images/img4.jpeg"
import img5 from "./images/ing5.jpeg"


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count:0,
            value:img1,
            value2:img2,
            value3:img3,
            value4:img4,
            value5:img5,
            divValue:"",
        }
        this.handleCountDec = this.handleCountDec.bind(this)
        this.handleCountInc = this.handleCountInc.bind(this) 
        this.handleTargetValue = this.handleTargetValue.bind(this)
        this.handleMultipleClick = this.handleMultipleClick.bind(this)
    }


    handleCountInc() {
        this.setState({ count:this.state.count+1 })
    }

    handleCountDec() {
        this.setState({ count:this.state.count-1 })
    }

    handleTargetValue(e) {
        let target = e.target.src
        let target3 = e.target.className
         setTimeout(() => {
             
             this.setState({value:target})
             console.log("done1")
             
          }, 1006);

        let target2 = e.target.alt
       if (target2 == "img2" ) {
          setTimeout(()=>{
              this.setState({value2:this.state.value})
              console.log("done")
          },1000)

          return this.handleMultipleClick

        } else if (target2 == "img3") {
            setTimeout(()=>{
                
                this.setState({value3:this.state.value})
                console.log("done")
            },1000)
        return this.handleMultipleClick


        } else if (target2 == "img4") {
            setTimeout(()=>{
                
                this.setState({value4:this.state.value})
                console.log("done")
            },1000)
        return this.handleMultipleClick


        } else if (target2 == "img5") {
            setTimeout(()=>{
                
                this.setState({value5:this.state.value})
                console.log("done")
            },1000)
        return this.handleMultipleClick

        }
        console.log(target2)

    }

    handleMultipleClick(e) {
        if (e==1) {
            console.log("Adawdad")
            return "1s"
        }
    }
    render() {
        
        return(
            <div className = "mainPage">
                {/* {this.state.value} */}
                <div className = "img-div-main">
                    <div >
                        <img   style={{ transition: this.handleMultipleClick(1)}} onClick = {this.handleTargetValue} alt="img1"  className = "LOL-images" src = {this.state.value}></img>
                    </div>
                    
                    <div className = "img-div-sub">
                        <div className = "LOL-img-right-padding">
                            <div className = "LOL-img-bottom-padding" >
                                <img  onClick = {this.handleTargetValue} alt="img2" valuee = "2" className = "LOL-images1" src = {this.state.value2}></img>
                            </div>

                            <div >
                                <img  onClick = {this.handleTargetValue} alt="img3" value = "3" className = "LOL-images2" src = {this.state.value3}></img>
                            </div>
                        </div>

                        <div>
                            <div className = "LOL-img-bottom-padding" >
                                <img  onClick = {this.handleTargetValue} alt="img4" value = "4" className = "LOL-images3" src = {this.state.value4}></img>
                            </div>

                            <div >
                                <img onClick = {this.handleTargetValue}  alt="img5" value = "5" className = "LOL-images4" src = {this.state.value5}></img>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className = "LOL-disc-main">
                    <div className = "LOL-disc-header" >
                        LEAGUE OF LEGENDS
                    </div>

                    <div>
                        5 card in packs
                    </div>

                    <div className = "LOL-disc-price">
                        $ 49.00
                    </div>

                    <div className = "LOL-disc-Quantity" >
                        <div className = "LOL-disc-btn-container">
                            <div className = "LOL-disc-btn-subContainer">
                                <div onClick ={this.handleCountDec}>- </div>
                                <div>
                                    <button className = "LOL-disc-pack-Qutn">{this.state.count}</button>
                                </div>
                                <div onClick ={this.handleCountInc}>+</div>
                            </div>
                        </div>

                        <div>
                            <button className = "LOL-disc-pack">BUY PACKS</button>
                        </div>
                    </div>

                    <div className = "LOL-disc-total">
                        35 563 Total
                    </div>

                    <div className = "LOL-disc-line"></div>

                    <div className = "LOL-disc-about">
                        <div className = "LOL-disc-pack-detail-head">
                            PACK DETAILS
                        </div>

                        <div className = "LOL-disc-pack-detail">
                            <p className = "LOL-disc-pack-detail-sub">    
                                Contrary to popular belief, Lorem Ipsum is not simple random text,it has roots
                                in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                            </p>

                            <p className = "LOL-disc-pack-detail-sub">
                                Richard McClintock, a Latin professor at hampden-Sydney College in Virgnia, looked up one of the most obscure Latin words,Consectrtur,
                                from a Text passage and going through the cities of the world
                            </p>
                        </div>
                    </div>
                </div>
        </div>
      
        )
    }
}

export default Main