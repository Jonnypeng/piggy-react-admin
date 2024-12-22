import { HomeOutlined, UserOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import Home from '../../pages/Home';
import UserManagement from '../../pages/UserManagement';
import Settings from '../../pages/Settings';
import GoodBye from '../../pages/GoodBye';
import { ReactNode } from 'react';



export interface MenuItem {
  key: string;
  icon: React.ReactNode;
  label: string;
  path?: string;
  element?: ReactNode,
  children?: MenuItem[];
}

export interface RouteConfig {
  path: string;
  element: React.ReactNode;
  exact?: boolean;
}

export const menuConfig: MenuItem[] = [
  {
    key: 'Home',
    icon: <HomeOutlined />,
    label: 'Home',
    children: [
      {
        key: 'Settings3',
        icon: <SettingOutlined />,
        label: 'Settings',
        children: [
          {
            key: 'goodBye',
            icon: <UserOutlined />,
            label: 'Goodbye',
            path: '/bye',
            element: <GoodBye /> 
          }
        ]
      }
    ],
  },
  {
    key: 'UserManagement2',
    icon: <UserOutlined />,
    label: 'User Management',
    path: '/users',
    element: <UserManagement />
  },
];
