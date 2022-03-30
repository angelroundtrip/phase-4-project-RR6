import Posts from './Posts'
import react from 'react';

function PostsContainer({posts}) {

   const allPosts= posts.map((post =>
     <Posts  key={post.id} post={post} />));
    return (
     <div>
         < Posts />
     </div>
    );
  }
  
  export default PostsContainer;