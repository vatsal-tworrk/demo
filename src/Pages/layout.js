import { Outlet } from "react-router-dom";

export const Layout = () => {
    return (
        <div>
            <Outlet />
        </div>
    )
}

export const ChildLayout = () => {
    return (
        <div>
            <Outlet />
        </div>
    )
}

export default Layout;