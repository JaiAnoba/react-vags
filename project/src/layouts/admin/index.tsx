import React from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Navbarr from "@/components/navbar/index";
import Sidebar from "@/components/sidebar";
import Footer from "@/components/footer/Footer";
import routes from "@/routes";

type RouteType = {
  name: string;
  layout: string;
  path: string;
  icon: JSX.Element | string;
  component: JSX.Element;
  secondary?: boolean; 
};

export default function Admin(props: { [x: string]: any }) {
  const { ...rest } = props;
  const location = useLocation();
  const [open, setOpen] = React.useState(true);
  const [currentRoute, setCurrentRoute] = React.useState("Main Dashboard");

  React.useEffect(() => {
    window.addEventListener("resize", () =>
      window.innerWidth < 1200 ? setOpen(false) : setOpen(true)
    );
  }, []);

  React.useEffect(() => {
    getActiveRoute(routes);
  }, [location.pathname]);

  const getActiveRoute = (routes: RouteType[]): void => {
    for (let i = 0; i < routes.length; i++) {
      if (
        window.location.href.indexOf(
          routes[i].layout + "/" + routes[i].path
        ) !== -1
      ) {
        setCurrentRoute(routes[i].name); 
        return;
      }
    }
    setCurrentRoute("Main Dashboard"); 
  };

  const getActiveNavbar = (routes: RouteType[]): boolean => {
    for (let i = 0; i < routes.length; i++) {
      if (
        window.location.href.indexOf(routes[i].layout + routes[i].path) !== -1
      ) {
        return routes[i].secondary ?? false; 
      } 
    }
    return false; 
  };

  const getRoutes = (routes: RouteType[]): JSX.Element[] => {
    return routes
      .filter((route) => route.layout === "/admin") 
      .map((prop, key) => (
        <Route path={`/${prop.path}`} element={prop.component} key={key} />
      ));
  };

  document.documentElement.dir = "ltr";

  return (
    <div className="flex h-full w-full">
      <Sidebar open={open} onClose={() => setOpen(false)} />
      {/* Navbar & Main Content */}
      <div className="h-full w-full bg-lightPrimary dark:!bg-navy-900">
        {/* Main Content */}
        <main
          className={`mx-[12px] h-full flex-none transition-all md:pr-2 xl:ml-[313px]`}
        >
          {/* Routes */}
          <div className="h-full">
            <Navbarr
              onOpenSidenav={() => setOpen(true)}
              brandText={currentRoute}
              secondary={getActiveNavbar(routes)}
              {...rest}
            />
            <div className="pt-5 mx-auto mb-auto h-full min-h-[84vh] p-2 md:pr-2">
              <Routes>
                {getRoutes(routes)}

                <Route
                  path="/"
                  element={<Navigate to="/admin/default" replace />}
                />
              </Routes>
            </div>
            <div className="p-3">
              <Footer />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
