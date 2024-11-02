import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyle, { darkTheme, lightTheme } from "./Constants/Styles";
import { Outlet } from "react-router-dom";
import { Moon, FlaskConical, Earth } from "lucide-react";
// import type { MenuProps } from "antd";
import { icons } from "lucide-react";
import { Breadcrumb, Layout, Menu, MenuProps, theme } from "antd";
import Home from "./Screens/Home";
const { Content, Sider, Header } = Layout;
type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  onClick?: () => void
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    onClick,
  } as MenuItem;
}

export const Icon = ({
  name,
  color,
  size,
  darkmode,
}: {
  name: string | null;
  color?: string | "black";
  size: number;
  darkmode?: boolean | undefined;
}) => {
  const LucideIcon = icons[name];
  let iconcolor = color;

  if (darkmode != undefined) {
    iconcolor = darkmode ? "white" : "black";
  }
  return <LucideIcon color={iconcolor} size={size} />;
};
function App() {
  const [isDarkMode, setDarkMode] = useState(false);
  const [collapsed, setCollapsed] = useState(true);

  const items: MenuItem[] = [
    getItem(
      "In-stitu",
      "1",
      <Earth color={isDarkMode ? "white" : "black"} size={16} />,
      // <Icon name={"Earth"} darkmode={isDarkMode} size={16} />,
      [getItem("Portance", "2"), getItem("Tassement", "3")]
    ),
    getItem(
      "Labo",
      "4",
      <FlaskConical color={isDarkMode ? "white" : "black"} size={16} />,
      // <Icon name={"FlaskConical"} darkmode={isDarkMode} size={16} />,
      [getItem("Portance", "5"), getItem("Tassement", "6")]
    ),

    getItem(
      "Dark",
      "10",
      <Moon color={isDarkMode ? "white" : "black"} size={16} />,
      undefined,
      () => {
        console.log("test");
        setDarkMode(!isDarkMode);
      }
    ),
  ];

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyle />

      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          collapsible
          theme={isDarkMode ? "dark" : "light"}
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
        >
          <div className="demo-logo-vertical">
            <Menu
              theme={isDarkMode ? "dark" : "light"}
              defaultSelectedKeys={["1"]}
              mode="inline"
              items={items}
            />
          </div>
        </Sider>
        <Layout>
          <Header></Header>
          <Content style={{ margin: "0 16px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
            </Breadcrumb>
            {/* <Outlet /> */}
            <Home></Home>
          </Content>
        </Layout>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
