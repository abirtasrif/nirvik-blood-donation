import React from "react";

const BlogPost = () => {
  return (
    <div className="blog-post container mx-auto grid grid-cols-8 grid-rows-6 gap-3 text-center py-3">
      <div className="blog-grid1 row-start-1 col-start-1 row-span-3 col-span-3 relative h-60">
        <div className="blog-details pt-20">
          <h2 className="blog-header">Blog Post 1</h2>
          <p className="blog-author">by Abir Tasrif, 28-Jan-22</p>
          <p className="blog-description z-20">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>
      <div className="blog-grid2 row-start-4 col-start-1 row-span-3 col-span-3 relative pt-20">
        <div className="blog-details">
          <h2 className="blog-header">Blog Post 2</h2>
          <p className="blog-author">by Abir Tasrif, 28-Jan-22</p>
          <p className="blog-description">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>
      <div className="blog-grid3 col-start-4 col-span-2 row-start-1 row-span-4 relative pt-32">
        <div className="blog-details">
          <h2 className="blog-header">Blog Post 3</h2>
          <p className="blog-author">by Abir Tasrif, 28-Jan-22</p>
          <p className="blog-description">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>
      <div className="blog-grid4 col-start-6 col-span-3 row-start-1 row-span-2 relative pt-10">
        <div className="blog-details">
          <h2 className="blog-header">Blog Post 4</h2>
          <p className="blog-author">by Abir Tasrif, 28-Jan-22</p>
          <p className="blog-description">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>
      <div className="blog-grid5 col-start-6 col-span-3 row-start-3 row-span-2 relative pt-10">
        <div className="blog-details">
          <h2 className="blog-header">Blog Post 5</h2>
          <p className="blog-author">by Abir Tasrif, 28-Jan-22</p>
          <p className="blog-description">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>
      <div className="blog-grid6 col-start-4 col-span-5 row-start-5 row-span-2 relative pt-10">
        <div className="blog-details">
          <h2 className="blog-header">Blog Post 6</h2>
          <p className="blog-author">by Abir Tasrif, 28-Jan-22</p>
          <p className="blog-description">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
