import React, { Component } from 'react'

export default class Model extends Component {
    arrProduct = [
        {
            "id": 1,
            "price": 30,
            "name": "GUCCI G8850U",
            "url": "./glassesImage/v1.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 2,
            "price": 50,
            "name": "GUCCI G8759H",
            "url": "./glassesImage/v2.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 3,
            "price": 30,
            "name": "DIOR D6700HQ",
            "url": "./glassesImage/v3.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 4,
            "price": 70,
            "name": "DIOR D6005U",
            "url": "./glassesImage/v4.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 5,
            "price": 40,
            "name": "PRADA P8750",
            "url": "./glassesImage/v5.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 6,
            "price": 60,
            "name": "PRADA P9700",
            "url": "./glassesImage/v6.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 7,
            "price": 80,
            "name": "FENDI F8750",
            "url": "./glassesImage/v7.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 8,
            "price": 100,
            "name": "FENDI F8500",
            "url": "./glassesImage/v8.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 9,
            "price": 60,
            "name": "FENDI F4300",
            "url": "./glassesImage/v9.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        }
    ];

    state={
        imgSRC: this.arrProduct[6].url,
        name: this.arrProduct[6].name,
        desc: this.arrProduct[6].desc
    }

    handleGL = (idex)=>{
        this.setState({
            imgSRC: this.arrProduct[idex].url,
        name: this.arrProduct[idex].name,
        desc: this.arrProduct[idex].desc
        })
    }
   
    renderIMG = () => {
        let arrResult = this.arrProduct.map((img, index) => {
            return <img className="gl__img mb-4" src={img.url} alt="..." onClick={()=>{
                this.handleGL(index)
            }}/>


        })

        return arrResult;
    }
    render() {
        return (
            <div>
                <div className="d-flex justify-content-around container mt-5">
                    <div className="model" style={{ backgroundImage: "url(/glassesImage/model.jpg)", backgroundSize: "cover", height: 400, width: 300 }}>
                        <div className="model__gl">
                            <img src={this.state.imgSRC} alt="..."></img>
                        </div>
                        <div className="model__text">
                            <p className="gl__name mb-1">{this.state.name}</p>
                            <p className="drc">{this.state.desc}</p>
                        </div>
                    </div>
                    <div className="model" style={{ backgroundImage: "url(/glassesImage/model.jpg)", backgroundSize: "cover", height: 400, width: 300 }}>

                    </div>
                </div>
                <div className="container product__List mt-5 pb-4 pt-5 pl-5 bg-white position-relative ">
                    {this.renderIMG()}
                </div>
            </div>


        )
    }
}
