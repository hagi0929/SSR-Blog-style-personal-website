import React from 'react'

interface SidebarItem {
  name: string;
  href: string;
}

interface SidebarProps {
  title: string;
  list: SidebarItem[];
}

const Sidebar: React.FC<SidebarProps> = ({ title, list}) => {
  return (
    <div>Sidebar</div>
  )
}

export default Sidebar