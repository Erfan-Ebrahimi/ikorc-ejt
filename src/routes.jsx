import Actions from "./pages/Admin/Actions/Actions";
import AdminPanel from "./pages/Admin/AdminPanel";
import AdminPanelIndex from "./pages/Admin/AdminPanelIndex/AdminPanelIndex";
import News from "./pages/Admin/News/News";
import Home from "./pages/Home/Home"
import Pics from "./pages/Pics/Pics";
const routes = [
    { path: "/", element: <Home /> },
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