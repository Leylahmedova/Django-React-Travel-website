import React, { useEffect, useState } from "react";
import { GrPrevious, GrNext } from "react-icons/gr";
import BlogPagination from "./BlogPagination";
import {Link } from "react-router-dom"
import { MdKeyboardDoubleArrowRight} from 'react-icons/md';
function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  useEffect(() => {
    fetch(`http://127.0.0.1:8000/blog/bloglist?page=${currentPage}`)
      .then((response) => response.json())
      .then((data) => {
        setBlogs(data);
        
    
      });
  }, [currentPage]);
  useEffect(() => {
    fetch(`http://127.0.0.1:8000/blog/bloglist2?page=${currentPage}`)
      .then((response) => response.json())
      .then((data) => {
        
        setTotalPage(Math.ceil(data.length / 3));
        console.log(totalPage)
      });
  },[]);


  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <div className="container">
        <section className="blog__section">
          <div className="blog__title">
            <h1>Travel articles</h1>
            <p>Lorem ipsum is placeholder text commonly used in sites.</p>
          </div>

          <div className="blogs">
            {blogs.map((blog) => (
              <div key={blog.id}>
                <div>
                  <img src={blog.image} alt="" />
                  
                </div>
                <div>
                <span>{blog.created_date}</span>
                    <h3><Link to={`/blogs/${blog.id}`}>{blog.title}</Link></h3>
                    <p>{blog.paragraf.slice(0, 120)}...</p>
                     <h4>Read More <MdKeyboardDoubleArrowRight/></h4>
                </div>
              </div>
            ))}
          </div>

          <div className="blog__pagination">
          <BlogPagination
        currentPage={currentPage}
        totalPages={totalPage}
        onPageChange={handlePageChange}
      />
          </div>
        </section>
      </div>
    </>
  );
}

export default Blog;
