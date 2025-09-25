import axios from "axios";

//  Інтерфейс Post
interface Post {
  id: number;
  title: string;
  body: string;
}

//  Функція з типізацією
async function fetchPosts(): Promise<Post[]> {
  const response = await axios.get<Post[]>(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return response.data;
}


fetchPosts().then((posts) => {
  console.log(posts[0].title); 
});
