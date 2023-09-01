import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { GiPlainCircle } from 'react-icons/gi';
function BlogDetails() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/blog/bloglist/${id}/`)
      .then((response) => response.json())
      .then((data) => {
        setBlog(data);
      });
  }, [id]);

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="container">
        <section className="blog__section__details">
          <div className="blog__title">
            <h1>{blog.title}</h1>
            <p>{blog.created_date}</p>
          </div>

          <div className="blog__content">
            <div>

            <img src={blog.image} alt="" />          
            <img src="https://images.pexels.com/photos/3278215/pexels-photo-3278215.jpeg?cs=srgb&dl=pexels-oleksandr-p-3278215.jpg&fm=jpg" alt="" />
            </div>
            <div>
            <h1>What makes a good brand book?</h1>
            <p>{blog.paragraf}</p>
            <p> <GiPlainCircle className="paragraf__circle"/>Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida.</p>
            <p>
            <GiPlainCircle className="paragraf__circle"/>At urna condimentum mattis pellentesque id nibh. Laoreet non curabitur </p>
            <p>
            <GiPlainCircle className="paragraf__circle"/>Magna etiam tempor orci eu lobortis elementum. </p>
            <p>
            <GiPlainCircle className="paragraf__circle"/>Bibendum est ultricies integer quis. Semper eget duis at tellus.</p>
             <div><h2>“Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Diam phasellus vestibulum lorem sed risus ultricies. Magna sit amet purus gravida quis blandit. Arcu cursus vitae congue mauris.“</h2></div>
             <p>“Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Diam phasellus vestibulum lorem sed risus ultricies. Magna sit amet purus gravida quis blandit. Arcu cursus vitae congue mauris.“</p>
            
            <div>
              <img src="https://gotrip-next.vercel.app/img/blog/single/2.png" alt="" />
              <img src="https://gotrip-next.vercel.app/img/blog/single/3.png" alt="" />
              </div>
              <p>Donec purus posuere nullam lacus aliquam egestas arcu. A egestas a, tellus massa, ornare vulputate. Erat enim eget laoreet ullamcorper lectus aliquet nullam tempus id. Dignissim convallis quam aliquam rhoncus, lectus nullam viverra. Bibendum dignissim tortor, phasellus pellentesque commodo, turpis vel eu. Donec consectetur ipsum nibh lobortis elementum mus velit tincidunt elementum. Ridiculus eu convallis eu mattis iaculis et, in dolor. Sem libero, tortor suspendisse et, purus euismod posuere sit. Risus dui ut viverra venenatis ipsum tincidunt non, proin. Euismod pharetra sit ac nisi. Erat lacus, amet quisque urna faucibus. Rhoncus praesent faucibus rhoncus nec adipiscing tristique sed facilisis velit.</p>
              <div>
                <img src="https://secure.gravatar.com/avatar/e93616c6d8116aa5375e95e0458ce064?s=90&d=mm&r=g" alt="" />
              </div>
              <div>
                <span>About the author</span>
                <h2>John Smith</h2>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantic.
</p>
              </div>
              </div>
            
          </div>
        </section>
      </div>
    </>
  );
}

export default BlogDetails;
