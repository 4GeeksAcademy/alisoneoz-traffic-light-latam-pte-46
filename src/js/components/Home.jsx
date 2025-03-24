import React from "react";
import { useState } from "react";
//create your first component
const Home = () => {
const [shineRed, setShineRed] = useState(false);
const [shineYellow, setShineYellow] = useState(false);
const [shineGreen, setShineGreen] = useState(false);
//buenas, hay alguna manera de hacerlo sin usar tres declaraciones de estado sino una sola?

	return (
		<div className="container">
            
<div className="semaforo">
	<div className={`red light ${shineRed? "resplandor":""}`}  onClick={()=>{setShineRed(true); setShineYellow(false); setShineGreen(false) }}></div>
	<div className={`yellow light ${shineYellow? "resplandor":""}`} onClick={()=>{setShineRed(false); setShineYellow(true); setShineGreen(false) }}></div>
	<div className={`green light ${shineGreen? "resplandor":""}`} onClick={()=>{setShineRed(false); setShineYellow(false); setShineGreen(true) }}></div>
	
</div>

		</div>
	);
};

export default Home;