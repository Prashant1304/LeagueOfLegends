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
            data:""
        }
        this.handleCountDec = this.handleCountDec.bind(this)
        this.handleCountInc = this.handleCountInc.bind(this) 
        this.handleTargetValue = this.handleTargetValue.bind(this)

    }


    handleCountInc() {
        this.setState({ count:this.state.count+1 })
    }
    handleCountDec() {
        this.setState({ count:this.state.count-1 })

    }

    handleTargetValue(e) {
        let target = e.target.src
        this.setState({value:target})
        // console.log(this.state.value)
    }
    render() {
        return(
            <div className = "mainPage">
                {/* {this.state.value} */}
                <div className = "img-div-main">
                    <div className = "confused">
                        <img onClick = {this.handleTargetValue} value = "1" className = "LOL-images" src = {this.state.value}></img>
                    </div>
                    
                    <div className = "img-div-sub">
                        <div className = "LOL-img-right-padding">
                            <div className = "LOL-img-bottom-padding">
                                <img onClick = {this.handleTargetValue} value = "2" className = "LOL-images" src = {img2}></img>
                            </div>

                            <div>
                                <img onClick = {this.handleTargetValue} value = "3" className = "LOL-images" src = {img3}></img>
                            </div>
                        </div>

                        <div>
                            <div className = "LOL-img-bottom-padding">
                                <img onClick = {this.handleTargetValue} value = "4" className = "LOL-images" src = {img4}></img>
                            </div>

                            <div>
                                <img onClick = {this.handleTargetValue} value = "5" className = "LOL-images" src = {img5}></img>
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
                                from a Text passage and going through the cities of the world in classical literature, discovered the undoubtable source.
                            </p>
                        </div>
                    </div>
                </div>
        </div>
      
        )
    }
}

export default Main