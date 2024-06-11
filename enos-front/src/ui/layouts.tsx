import { Outlet } from "react-router-dom";
// import { Header, Footer } from "@/components";

export const LayoutApp = () => (
    <>
        {/* <Header /> */}
        <div className="container mt-3">
            <Outlet />
        </div>
        {/* <Footer /> */}
    </>
);



export const LayoutAuth = () => {
    return (
        <>
            {/* <Header visuallyHidden /> */}
            <div className="container mt-3">
                <Outlet />
            </div>
        </>
    );
};

