
import IntroPagination from "../Components/IntroPagination";
import { useState } from "react";
const vid1='intro-video.mp4'
const vid1Path=`/static/${vid1}`

const vid2='beach.mp4'
const vid2Path=`/static/${vid2}`

const vid3='beach2.mp4'
const vid3Path=`/static/${vid3}`
function Vidoes() {
  const videos = [
    {
      link: vid1Path,
    },
    {
      link: vid2Path,
    },
    {
      link: vid3Path,
    },
  ];
  const [activePage, setActivePage] = useState(1);
  const productPerPage = 1;
  const totalPageCount = Math.ceil(videos.length / productPerPage);
  const start = (activePage - 1) * productPerPage;
  const end = start + productPerPage;
 
  return (
    <>
      <div className="intro-video">
        {
            videos.slice(start, end).map((a,b)=>(
                <video key={b} id="introVideo" muted autoPlay loop src={a.link}></video>
        
            ))
        }
          
     
      </div>
      <IntroPagination  
        totalPageCount={totalPageCount}
        setActivePage={setActivePage}
        activePage={activePage}/>
     
 
    </>
  );
}

export default Vidoes;