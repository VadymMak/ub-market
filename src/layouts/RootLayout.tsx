import { Outlet } from "react-router-dom";

import Header from "../navigation/header/Header";

const RootLayout = () => {
  return (
    <div>
      <Header />
      <main style={{ height: 600 }}>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
