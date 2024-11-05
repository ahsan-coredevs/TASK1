// import round from './assets/about/shape-46';

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";

import MainLayout from "./Layout/MainLayout";
import Categories from "./components/Categories/Categories";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import News from "./components/News/News";
import Partners from "./components/Partners/Partners";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import Feedback from "./components/feedback/Feedback";
import Profile from "./components/profile/Profile";
import AddBlogs from "./pages/admin/blogs/AddBlogs";
import ManageBlogs from "./pages/admin/blogs/ManageBlogs";
import AddCourses from "./pages/admin/courses/AddCourses";
import ManageCourses from "./pages/admin/courses/ManageCourses";
import AddInstructor from "./pages/admin/instructors/AddInstructor";
import ManageInstructor from "./pages/admin/instructors/ManageInstructor";
import UsersList from "./pages/admin/users/UsersList";
import Blog from "./pages/blog/Blog";
import BlogView from "./pages/blog/BlogView";
import Courses from "./pages/course/Courses";
import ViewCourse from "./pages/course/ViewCourse";
import OrderDetails from "./pages/orders/OrderDetails";
import OrderOwnerInfo from "./pages/orders/OrderOwnerInfo";
import Orders from "./pages/orders/Orders";
import AdminLayout from "./Layout/AdminLayout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer />
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Categories" element={<Categories />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/courses/:operation" element={<ViewCourse />} />
            <Route path="/news" element={<News />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:operation" element={<BlogView />} />
            <Route path="/Partners" element={<Partners />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/profile" element={<Profile />} />

            <Route path="/SignIn" element={<SignIn />} />
            <Route path="/SignUp" element={<SignUp />} />
          </Route>
        </Routes>

        <Routes>
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="/admin/course" element={<ManageCourses />} />
            <Route path="/admin/course/:operation" element={<AddCourses />} />
            <Route path="/admin/blog" element={<ManageBlogs />} />
            <Route path="/admin/blog/:operation" element={<AddBlogs />} />
            <Route path="/admin/instructor" element={<ManageInstructor />} />
            <Route
              path="/admin/instructor/:operation"
              element={<AddInstructor />}
            />
            <Route path="/admin/order" element={<Orders />} />
            <Route
              path="/admin/orders/order_details"
              element={<OrderDetails />}
            />
            <Route
              path="/admin/orders/order_owner_info"
              element={<OrderOwnerInfo />}
            />
            <Route path="/admin/users" element={<UsersList />} />
            <Route
              path="/admin/users/order_owner_info"
              element={<OrderOwnerInfo />}
            />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
