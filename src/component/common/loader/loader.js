import React,{useState,useEffect} from 'react';

const Loader = (props) => {

    const [show, setShow] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setShow(false)
          }, 1000);
        
    },[show]);

    return (
        <div className={`loader-wrapper ${show ? '' : 'loderhide'}`}>
            <div className="typewriter">
            <img src={require("../../../assets/images/logo/vosoLogo.jpg")} alt="" style={{height:"50%",width:"50%"}}></img>
                <h1>WELCOME TO VOSO VYAPAR!!!!!!!!!!!</h1>
            </div>
        </div>
    );
}

export default Loader;