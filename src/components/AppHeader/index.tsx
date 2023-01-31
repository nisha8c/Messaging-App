import { Avatar } from "antd";
import { Header } from "antd/lib/layout/layout";
import React, { FunctionComponent } from "react";

interface AppHeaderProps {
  userName: string;
}

const AppHeader: FunctionComponent<AppHeaderProps> = ({userName}) => {
  return (
    <Header className="app-header">
      <span style={{ fontSize: 30 }}>Chat App</span>

      {userName && 
      <div>
        <Avatar>{userName[0].toUpperCase()}</Avatar> {userName}
      </div>
      }
    </Header>
  );
};

export default AppHeader;