import Actions from "./pages/Admin/Actions/Actions";
import AdminPanel from "./pages/Admin/AdminPanel";
import AdminPanelIndex from "./pages/Admin/AdminPanelIndex/AdminPanelIndex";
import News from "./pages/Admin/News/News";
import Home from "./pages/Home/Home";
import KhabarDetails from "./pages/KhabarDetails/KhabarDetails";
import NewsList from "./pages/NewsList/NewsList";
import Pics from "./pages/Pics/Pics";
const routes = [
    { path: "/", element: <Home /> },
    { path: "/newsList", element: <NewsList /> },
    { path: "/newsList/:id", element: <KhabarDetails /> },
    { path: "/pics", element: <Pics /> },
    {
        path: "/adminPanel/*",
        element: <AdminPanel />,
        children: [
            { path: "", element: <AdminPanelIndex /> },
            { path: "news", element: <News /> },
            { path: "actions", element: <Actions /> },
        ]
    },
];



export default routes;