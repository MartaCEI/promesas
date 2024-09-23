import { createBrowserRouter } from "react-router-dom"
import Home from "../../pages/Home"
import Layout from "../../Layout"
import FakeStoreApi from "../../pages/FakeStoreApi"
import RandomUser from "../../pages/RandomUser"
import PokeApi from "../../pages/PokeApi"
import Pokemon from "../../pages/Pokemon"
import Producto from "../../pages/Producto"
import User from "../../pages/User"

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
                    path: "/products",
                    element: <FakeStoreApi />,
                },
                {
                    path: "/products/:id",
                    element: <Producto />,
                },
                {
                    path: "/randomUser",
                    element: <RandomUser />,
                },
                {
                    path: "/randomUser/:id",
                    element: <User />,
                },
                {
                    path: "/pokeApi",
                    element: <PokeApi />,
                },
                {
                    path: "/pokeApi/:id",
                    element: <Pokemon />,
                },
            ],
        }
    ]
)

export default router;
