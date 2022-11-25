import React, {useEffect, useState} from 'react';
import {Table} from 'antd';
import {Link} from "react-router-dom"
import {getAccounts} from "../../services/accounts";

const columns = [
    {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
    },
    {
        title: 'Name',
        dataIndex: 'title',
        key: 'name',
    },
    {
        title: 'Created On',
        dataIndex: 'createdAt',
        key: 'created',
    },
    {
        title: 'Owner',
        dataIndex: 'owner',
        key: 'owner',
    },

    {
        title: 'Action',
        dataIndex: '',
        key: 'x',
        render: (record) => (
            <Link to={"/accounts/" + record.id}>View</Link>
        ),
    },
];

const Accounts = () => {
    const [accounts, setAccounts] = useState([])

    useEffect(() => {
        getAccounts().then(accountsData => setAccounts(accountsData))
    }, [])
    return (
        <Table
            columns={columns}
            dataSource={accounts}
            rowKey="id"
        />
    )
}
export default Accounts;
