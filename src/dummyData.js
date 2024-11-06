export const Users = [
  {
    id:1,
    profilePicture: "assets/person/1.jpeg",
    username: "Sudhanshu Badole",
  },
  {
    id:2,
    profilePicture: "assets/person/2.jpeg",
    username: "Sanket Alane",
  },
  {
    id:3,
    profilePicture: "assets/person/3.jpeg",
    username: "Rishikesh Tigalwar",
  },
  {
    id:4,
    profilePicture: "assets/person/4.jpeg",
    username: "Dhiraj Pujari",
  },
  {
    id:5,
    profilePicture: "assets/person/5.jpeg",
    username: "Sujit Sutar",
  },
  {
    id:6,
    profilePicture: "assets/person/6.jpeg",
    username: "Rushikesh Pawar",
  },
  {
    id:7,
    profilePicture: "assets/person/7.jpeg",
    username: "Suraj Bhosle",
  },
  {
    id:8,
    profilePicture: "assets/person/8.jpeg",
    username: "Dipak Rathod",
  },
  {
    id:9,
    profilePicture: "assets/person/9.jpeg",
    username: "Satish Shighane",
  },
  {
    id:10,
    profilePicture: "assets/person/10.jpeg",
    username: "Suraj Rathod",
  },
];

// export const Posts = [
//   {
//     id: 1,
//     desc: "Love For All, Hatred For None.",
//     photo: "assets/post/1.jpeg",
//     date: "5 mins ago",
//     userId: 1,
//     like: 32,
//     comment: 9,
//   },
//   {
//     id: 2,
//     photo: "assets/post/2.jpeg",
//     date: "15 mins ago",
//     userId: 2,
//     like: 2,
//     comment: 1,
//   },
//   {
//     id: 3,
//     desc: "Every moment is a fresh beginning.",
//     photo: "assets/post/3.jpeg",
//     date: "1 hour ago",
//     userId: 3,
//     like: 61,
//     comment: 2,
//   },
//   {
//     id: 4,
//     photo: "assets/post/4.jpeg",
//     date: "4 hours ago",
//     userId: 4,
//     like: 7,
//     comment: 3,
//   },
//   {
//     id: 5,
//     photo: "assets/post/5.jpeg",
//     date: "5 hours ago",
//     userId: 5,
//     like: 23,
//     comment: 5,
//   },
//   {
//     id: 6,
//     photo: "assets/post/6.jpeg",
//     date: "1 day ago",
//     userId: 6,
//     like: 44,
//     comment: 6,
//   },
//   {
//     id: 7,
//     desc: "Never regret anything that made you smile.",
//     photo: "assets/post/7.jpeg",
//     date: "2 days ago",
//     userId: 7,
//     like: 52,
//     comment: 3,
//   },
//   {
//     id: 8,
//     photo: "assets/post/8.jpeg",
//     date: "3 days ago",
//     userId: 8,
//     like: 15,
//     comment: 1,
//   },
//   {
//     id: 9,
//     desc: "Change the world by being yourself.",
//     photo: "assets/post/9.jpeg",
//     date: "5 days ago",
//     userId: 9,
//     like: 11,
//     comment: 2,
//   },
//   {
//     id: 10,
//     photo: "assets/post/10.jpeg",
//     date: "1 week ago",
//     userId: 10,
//     like: 104,
//     comment: 12,
//   },
// ];


// dummyData.js

export const Posts = [
  {
    id: 1,
    desc: "Loading...1", // default desc, will be replaced
    photo: "assets/post/1.jpeg",
    date: "5 mins ago",
    userId: 1,
    like: 32,
    comment: 9,
  },
  {
    id: 2,
    desc: "Loading...2",
    photo: "assets/post/2.jpeg",
    date: "15 mins ago",
    userId: 2,
    like: 2,
    comment: 1,
  },
];

// Function to fetch data from Frappe API and update 'Posts' array
export async function fetchPostsFromFrappe() {
  try {
    const response = await fetch("http://127.0.0.1:8000/api/resource/Post", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "token 271b1b4bedf0fa2:1a6d148b0108dff",  // Replace with your token if needed
      },
    });
    const data = await response.json();
    console.log('data',data)
    if (data.data && data.data.length) {
      const promises = data.data.slice(0, 2).map((post) =>
        fetch(`http://127.0.0.1:8000/api/resource/Post/${post.name}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": "token 271b1b4bedf0fa2:1a6d148b0108dff",            },
        })
          .then((res) => res.json())
          .then((postData) => postData.data.content)
      );

      const contents = await Promise.all(promises);
      console.log('contents',contents)
      Posts.forEach((post, index) => {
        console.log('contents[index]',post.desc,post.id)
        if (contents[index]) {
          post.desc = contents[index]; 
          console.log("should change here:---",post.id,post.desc)
        }
      });
    }
  } catch (error) {
    console.error("Error fetching posts from Frappe:", error);
  }
}
fetchPostsFromFrappe();
