import { createBrowserRouter } from "react-router-dom"
import Home from "../../pages/Home"
import Layout from "../../Layout"
import FakeStoreApi from "../../pages/FakeStoreApi"
import RandomUser from "../../pages/RandomUser"
import PokeApi from "../../pages/PokeApi"

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <Layout />,
            children: [
                {
                    path: "/",
                    element: <Home />,
                },
                {
                    path: "/storeApi",
                    element: <FakeStoreApi />,
                },
                {
                    path: "/randomUser",
                    element: <RandomUser />,
                },
                {
                    path: "/pokeApi",
                    element: <PokeApi />,
                },
                {
                    path: "/pokeApi/:id",
                    element: <PokeApi />,
                },
            ],
        }
    ]
)

export default router;
