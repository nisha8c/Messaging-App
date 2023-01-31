import { Avatar } from "antd";
import { Header } from "antd/lib/layout/layout";
import React, { FunctionComponent } from "react";

interface AppHeaderProps {
  userName: string;
}

const AppHeader: FunctionComponent<AppHeaderProps> = ({userName}) => {
  return (
    <Header className="app-header">
      <span style={{ fontSize: 30 }}>Msg App</span>

      {userName && 
      <div>
        <Avatar style={{ backgroundColor: 'green'}} size="large">{userName[0].toUpperCase()}</Avatar> {userName}
      </div>
      }
    </Header>
  );
};

export default AppHeader;