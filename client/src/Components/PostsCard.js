import {Link} from "react-router-dom";

function PostsCard({post}) {
    const {title, budget, genre, image, id} = post
    console.log(post)
    return (
      <Link to={`/posts/${id}`}>
      <tr className="table-row" >
       <td>{title}</td>
       <td>{genre}</td>
       <td>$ {budget}</td>
       <td><img style={{width:'100px'}} src={image}/></td>
      </tr>
      </Link>
    );
  }
  
  export default PostsCard;