import React, {useState} from 'react';
// import scrollsvg from "../svg/scroll.svg"
const ScrollButton = () =>{

const [visible, setVisible] = useState(false)
const scroll='scroll.svg'
const scrollPath=`/static/${scroll}`

const toggleVisible = () => {
	const scrolled = document.documentElement.scrollTop;
	if (scrolled > 300){
	setVisible(true)
	}
	else if (scrolled <= 300){
	setVisible(false)
	}
};

const scrollToTop = () =>{
	window.scrollTo({
	top: 0,
	behavior: 'smooth'

	});
};

window.addEventListener('scroll', toggleVisible);

return (
	<div className={visible? "showScroll scroll_top":"scroll_top"} onClick={scrollToTop}>
	 <img src={scrollPath} alt="" />
	
	</div>
);
}

export default ScrollButton;