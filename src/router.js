import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom"
import App from "./App"
import Index from "./pages/Index"
import { bookmarksLoader, showLoader } from "./loader"
import Show from "./pages/Show"
import { createAction, deleteAction, updateAction } from "./action"
import Update from "./pages/Update"

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App></App>}>
            <Route path="" element={<Index></Index>} loader={bookmarksLoader}></Route>
            <Route path=":id" element={<Show></Show>} loader={showLoader}></Route>
            <Route path=":id/edit" element={<Update></Update>} loader={showLoader}></Route>
            <Route path="create" action={createAction}></Route>
            <Route path="update/:id" action={updateAction}></Route>
            <Route path="delete/:id" action={deleteAction}></Route>
        </Route>
    )
)

export default router