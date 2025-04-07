// import React, { useEffect, useState } from "react";
// import { SidebarProvider, SidebarTrigger } from "./components/ui/sidebar";
// import { AppSidebar } from "./components/AppSidebar";
import { Outlet } from "react-router-dom";
import Header from "./components/header";

function App() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
  // return (
  //   <SidebarProvider>
  //     <AppSidebar />
  //     <main>
  //       <SidebarTrigger />
  //       <Outlet />
  //     </main>
  //   </SidebarProvider>
  // );
}

export default App;
