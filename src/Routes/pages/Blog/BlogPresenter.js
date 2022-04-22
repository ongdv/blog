import React from 'react';
import { useParams } from 'react-router-dom';

const BlogPresenter = () => {
  /* Router */
  const { blogId } = useParams();
  console.log(blogId);
  /* State */
  /* Functions */
  /* Hooks */
  /* Render */
  return blogId ? <div>Blog {blogId} 게시글</div> : <div>Blog</div>;
};

export default BlogPresenter;
