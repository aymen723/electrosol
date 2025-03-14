import { Outlet } from "react-router-dom";
import Header from "./components/header";

function App() {
  return (
    <>
      <Header></Header>
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
