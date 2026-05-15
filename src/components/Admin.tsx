import { ApiOutlined, CarryOutOutlined, ContactsOutlined, DashboardOutlined, KeyOutlined, MenuOutlined, MoreOutlined, ProductOutlined } from "@ant-design/icons";
import { Button, Card, Layout, Menu } from "antd"
import { Content, Header } from "antd/es/layout/layout";
import { useState } from "react";

const Admin = () => {
    const { Sider } = Layout; 
    const [collapsed, setCollapsed] = useState(false);

    const menus = [
        {
            icon: <DashboardOutlined/>,
            label: 'Dashboard',
            key: 'dashboard'
        },
        {
            icon: <ProductOutlined/>,
            label: 'Products',
            key: 'products'
        },
        {
            icon: <MoreOutlined/>,
            label: 'More',
            key: 'more',
            children: [
                {
                    icon: <ContactsOutlined/>,
                    label: 'Contact Us',
                    key: 'contact-us'
                },
                {
                    icon: <KeyOutlined/>,
                    label: 'Privacy',
                    key: 'privacy'
                },
                {
                    icon: <ApiOutlined/>,
                    label: 'API Keys',
                    key: 'api-keys'
                },
            ]
        }
    ]

  return (
    <Layout className="h-screen">
        <Sider className="h-full" collapsed={collapsed} onCollapse={() => setCollapsed(!collapsed)}>
            <Menu 
                items={menus}
                theme="dark"
                // className="h-full"
            />
        </Sider>
        <Layout>
            <Header>
                <div className="flex items-center justify-between h-full">
                    <h1 className="text-white font-bold text-2xl">Besties</h1>
                    <Button icon={<MenuOutlined/>} onClick={() => setCollapsed(!collapsed)}/>
                </div>
            </Header>
            <Content className="p-16">
                <div className="grid grid-cols-4 gap-8">
                {
                    Array(12).fill(0).map((item, index) => (
                        <Card className="space-y-12" key={index} hoverable>
                            <Card.Meta 
                                title="Dummy text"
                                description="This is a dummy text for user"
                            />
                        </Card>
                    ))
                }
                </div>
            </Content>
        </Layout>
    </Layout>       
  )
}

export default Admin
