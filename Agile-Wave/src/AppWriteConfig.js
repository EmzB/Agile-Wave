import { Client, Account, ID } from 'appwrite';
const client = new Client();
const account = new Account(client);
import dotenv from 'dotenv';
dotenv.config();

client.setEndpoint('https://cloud.appwrite.io/v1')
.setProject(process.env.MY_APPWRITE_PROJECT_ID);


account.create(ID.unique(),
'shee@example.com',
'password345',
'She Her').then((res)=>{
    console.log(res);
}, (err)=>{
    console.log(err);
});