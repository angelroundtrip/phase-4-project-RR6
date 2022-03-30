import PostsCard from './PostsCard'


function PostsContainer({posts}) {
    return (
     <div>
         <table>{posts.map(post => <PostsCard  key={post.id} production={post} />)}</table>
     </div>
    );
  }
  
  export default PostsContainer;