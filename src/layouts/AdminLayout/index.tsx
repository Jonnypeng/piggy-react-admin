import React from 'react';
import { Layout, Menu } from 'antd';
import { Link, Route, Routes } from 'react-router-dom';
import { MenuItem, menuConfig } from './config';
import { RouteObject } from 'react-router-dom';

const { Header, Content, Sider } = Layout;

const AdminLayout: React.FC = () => {
  const mapMenuItems = (menuItems: MenuItem[]): any => {
    return menuItems.map((item: MenuItem) => {
      if (item.children) {
        return {
          key: item.key,
          icon: item.icon,
          label: item.label,
          children: mapMenuItems(item.children),
        };
      } else {
        return {
          key: item.key,
          icon: item.icon,
          label: item?.path && <Link to={item.path}>{item.label}</Link>,
        };
      }
    });
  };

  const generateRouteConfig = (menuItems: typeof menuConfig): RouteObject[] => {
    let routes: RouteObject[] = [];
    menuItems.forEach(item => {
      if (item.path && item.element) {
        routes.push({
          path: item.path,
          element: item.element,
        });
      }
      if (item.children) {
        routes = routes.concat(generateRouteConfig(item.children));
      }
    });
    return routes;
  };

  const mappedMenuConfig = mapMenuItems(menuConfig);
  const routeConfig = generateRouteConfig(menuConfig);

  return (
    <Layout style={{ minHeight: '100vh', width: '100vw' }}>
      <Header className="header" style={{ background: '#fff', padding: 0 }}>
        <div className="logo" style={{ padding: '0 20px', fontSize: '20px' }}>
          Admin Dashboard
        </div>
      </Header>

      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu
            style={{ height: '100%', borderRight: 0 }}
            defaultSelectedKeys={['1']}
            mode="inline"
            items={mappedMenuConfig}
          />
        </Sider>

        <Layout style={{ padding: '0 24px 24px' }}>
          <Content
            style={{
              padding: 24,
              margin: '16px 0',
              minHeight: 280,
            }}
          >
            <Routes>
              {routeConfig.map(r => <Route key={r.path} path={r.path} element={r.element} />)}
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default AdminLayout;
