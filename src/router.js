import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom"
import App from "./App"
import Index from "./pages/Index"
import { bookmarksLoader, showLoader } from "./loader"
import Show from "./pages/Show"

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App></App>}>
            <Route path="" element={<Index></Index>} loader={bookmarksLoader}></Route>
            <Route path="/:id" element={<Show></Show>} loader={showLoader}></Route>
        </Route>
    )
)

export default router