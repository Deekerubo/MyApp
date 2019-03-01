import React from "react";
import { SocialIcon } from "react-social-icons";

export default class Social extends React.Component{
render(){
    return(
        <div >
        <SocialIcon className="social" url="https://twitter.com/miss_deekerubo" 
                    style={{ height: 50, width: 50 }} target="_blank" 
                    fgColor="#fff"
        />

        <SocialIcon className="social" url="https://www.linkedin.com/in/diana-kerubo/" 
                    style={{ height: 50, width: 50 }} target="_blank"
                    fgColor="#fff"
        />

        <SocialIcon className="social" url="https://github.com/Deekerubo"  
                    style={{ height: 50, width: 50 }} 
                    target="_blank"  fgColor="#fff"  bgColor="#000"
        />
        </div>
    );
}
}
