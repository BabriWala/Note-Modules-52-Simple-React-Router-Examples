import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import FriendDetails from './components/FriendDetails/FriendDetails';
import Friends from './components/Friends/Friends';
import Home from './components/Home/Home';
import Main from './components/Layout/Main';
import Posts from './components/Posts/Posts';
import Products from './components/Products/Products';
import PostDetails from './components/PostDetails/PostDetails';

function App() {
  const router = createBrowserRouter([
    {path: '/', element: <Main></Main>, children: [
      {path: '/', element: <Home></Home>},
      {path: '/home', element: <Home></Home>},
      {path: '/about', element: <About></About>},
      {path: 'products', element: <Products></Products>},
      {path: 'friends', 
      loader: async()=>{
        return fetch('https://jsonplaceholder.typicode.com/users');
      },
      element: <Friends></Friends>},
      {path: 'products', element: <Products></Products>},
      {path: 'posts',
        loader: async()=>{
          return fetch('https://jsonplaceholder.typicode.com/posts');
        },
        element: <Posts></Posts>,
      },
      {path: '/friend/:friendId', 
      loader: async({params}) =>{
        // console.log(params.friendId);
        return fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`)
      },
      element: <FriendDetails></FriendDetails>},
      {path: '/post/:postId',
      loader: async({params})=>{
        // console.log(params.postId);
        return fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
      },
      element: <PostDetails></PostDetails>,
      },
      {path: '*', element: <div>This route not found</div>}
    ]}
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
