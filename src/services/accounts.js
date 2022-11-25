import axios from "axios";


export async function getAccount(accountId) {
    const {data} = await axios.get(`https://mockend.com/rawmediamarketing/vue-assignment-api/accounts/${accountId}`);
    return data;
}

export async function getAccounts() {
    const {data} = await axios.get('https://mockend.com/rawmediamarketing/vue-assignment-api/accounts');
    return data;
}

