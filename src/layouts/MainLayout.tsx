import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div>
      {/* header */}
      <main>
        <Outlet />
      </main>
      {/* footer */}
    </div>
  );
};

export default MainLayout;
