import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Skeleton, Spin, Table, Tag } from "antd"

const dataSource = [
    {
        key: '1',
        name: 'Mike',
        age: 32,
        address: '10 Downing Street',
    },
    {
        key: '2',
        name: 'John',
        age: 42,
        address: '10 Downing Street',
    },
    {
        key: '3',
        name: 'Peter',
        age: 2,
        address: '10 Downing Street',
    },
    {
        key: '4',
        name: 'Kate',
        age: 22,
        address: '10 Downing Street',
    },
    {
        key: '5',
        name: 'Chris',
        age: 35,
        address: '10 Downing Street',
    },
    {
        key: '6',
        name: 'Henry',
        age: 62,
        address: '10 Downing Street',
    },
    {
        key: '7',
        name: 'Johan',
        age: 10,
        address: '10 Downing Street',
    },
];


const TableEl = () => {
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },  
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: 'Address',
            key: 'address',
            render: (item: any) => (
                <label>#{item.address}</label>
            )
        },
        {
            title: 'Category',
            key: 'category',
            render: (item: any) => (
                <Tag color="lime">✅ Delivered</Tag>
            )

        },
        {
            title: 'Actions',
            key: 'action',
            render: (item: any) => (
                <div className="space-x-2">
                    <Button type="primary" name="edit" icon={<EditOutlined/>} onClick={() => console.log(item)} />
                    <Button type="primary" name="delete" icon={<DeleteOutlined/>} danger />
                </div>
            )
        }
    ];
    
  return (
    <div className="w-2/3 mx-auto py-16 space-y-12">
        <Skeleton active/>
        <Spin size="large"/>
        <Table 
            columns={columns}
            dataSource={dataSource}
            pagination={false}
        />
    </div>
  )
}

export default TableEl
