import { NavLink, Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div>
      <section className="flex">
        <div className="w-1/4 bg-emerald-300 h-screen shadow-lg p-5">

        <nav
          id="dashboard"
          className=" flex flex-col gap-5"
        >
          <NavLink 
            to="/dashboard"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-yellow-600" : ""
            }
          >
            Dashboard
          </NavLink>
          <NavLink 
            to="/dashboard/profile"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-yellow-600" : ""
            }
          >
           Profile
          </NavLink>
          <NavLink 
            to="/dashboard/edit"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-yellow-600" : ""
            }
          >
           Edit Profile
          </NavLink>
          {/* <NavLink to={"/dashboard"}>Dashboard</NavLink> */}
          {/* <NavLink to={"/dashboard/profile"}>Profile</NavLink> */}
          {/* <NavLink to={"/dashboard/edit"}>Edit</NavLink> */}
        </nav>
        </div>
        <div className="w-3/4 p-5">
          <Outlet></Outlet>
        </div>
      </section>
    </div>
  );
};

export default DashboardLayout;
