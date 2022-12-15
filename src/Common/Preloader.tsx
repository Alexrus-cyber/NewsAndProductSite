import React from "react";

let Preloader = () => {
    return(
        <div style={{display:"flex", justifyContent:"center", alignItems: "center", width: "100%", height: "100vh", background: "#191f26"}}>
            <img  style={{display:"flex", justifyContent:"center", alignItems: "center"}} src={'https://acegif.com/wp-content/uploads/loading-2.gif'} alt={'helloWorld'}/>
        </div>
    )
}

export default Preloader;