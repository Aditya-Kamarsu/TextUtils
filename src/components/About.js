import React, {useState} from 'react'

export default function About() {
    const [myDarkMode, setDarkStyle] = useState({
        color: 'black',
        backgroundColor: 'white',
        border: '2px solid white'
    }
    )
    const [btnText, setBtText] = useState("Enable Dark Mode")
    const toggleStyle = () =>{
        if(myDarkMode.backgroundColor === 'white'){
            setDarkStyle({
                color: 'white',
                backgroundColor: 'black',
                border: '1px solid white'
            })
            setBtText("Enable Light Mode")
        }
        else{
            setDarkStyle({
                color: 'black',
                backgroundColor: 'white'
            })
            setBtText("Enable Dark Mode")
        }
    }
    return (
        <div className="container" style={myDarkMode}>
            <div className="accordion" id="accordionExample">
                <h2 className="my-3">About Us</h2>
                <div className="accordion-item" style={myDarkMode}>
                    <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myDarkMode}>
                        Accordion Item #1
                    </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample" style={myDarkMode}>
                    <div className="accordion-body" >
                        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                    </div>
                </div>
                <div className="accordion-item" style={myDarkMode}>
                    <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"  style={myDarkMode}>
                        Accordion Item #2
                    </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                    </div>
                </div>
                <div className="accordion-item" style={myDarkMode}>
                    <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree"  style={myDarkMode}>
                        Accordion Item #3
                    </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                    </div>
                </div>
            </div>
            <div className="container">
            <button className="btn btn-primary my-3" onClick={toggleStyle}>{btnText}</button>
            </div>
        </div>
    )
}
