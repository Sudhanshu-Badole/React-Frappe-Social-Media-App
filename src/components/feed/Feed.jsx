import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";
import { Posts } from "../../dummyData";

export default function Feed() {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {Posts.map((p) => (
          <Post key={p.id} post={p} />
        ))}
      </div>
    </div>
  );
}

// import { useEffect, useState } from "react";
// import Post from "../post/Post";
// import Share from "../share/Share";
// import "./feed.css";

// export default function Feed() {
//   const [posts, setPosts] = useState([]); // State to store posts from Frappe

//   useEffect(() => {
//     // Fetch posts from Frappe's SocialPost Doctype
//     const fetchPosts = async () => {
//       try {
//         const response = await fetch("http://127.0.0.1:8000/api/resource/Post", {
//           method: "GET",
//           headers: {
//             "Content-Type": "application/json",
//             "Authorization": "token 271b1b4bedf0fa2:1a6d148b0108dff"  // Replace with your authentication if needed
//           },
//         });
//         if (!response.ok) {
//           throw new Error("Failed to fetch posts");
//         }

//         const data = await response.json();
//         // Set posts data to the state
//         console.log('response.data',response.data)
//         setPosts(data.data);
//       } catch (error) {
//         console.error("Error fetching posts:", error);
//       }
//     };

//     fetchPosts();
//   }, []); // Empty dependency array means this runs only once when the component mounts

//   return (
//     <div className="feed">
//       <div className="feedWrapper">
//         <Share />
//         {posts.map((p) => (
//           <Post key={p.name} post={p} />  // 'name' is Frappe's unique ID for records
//         ))}
//       </div>
//     </div>
//   );
// }
