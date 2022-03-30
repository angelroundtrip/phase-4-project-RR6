import Posts from './Posts'


function PostsContainer({posts}) {

      posts.map((post =>
     <Posts  key={post.id} post={post} />));

    return (
     <div>
         < Posts  />
     </div>
    );
  }
  
  export default PostsContainer;