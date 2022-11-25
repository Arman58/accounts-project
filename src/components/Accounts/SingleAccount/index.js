import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {getAccount} from "../../../services/accounts";
import {Table} from "antd";

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
        title: 'Owner',
        dataIndex: 'owner',
        key: 'owner',
    },
    {
        title: 'Created On',
        dataIndex: 'createdAt',
        key: 'created',
    },
    {
        title: 'Updated On',
        dataIndex: 'updatedAt',
        key: 'updated',
    }
];

const SingleAccount = () => {
    const {id} = useParams()
    const [account, setAccount] = useState([])

    useEffect(() => {
        getAccount(id).then(accountData => setAccount([accountData]))
    }, [id])

    return <Table columns={columns} dataSource={account} size="small" pagination={false} rowKey="id"/>
}

export default SingleAccount
