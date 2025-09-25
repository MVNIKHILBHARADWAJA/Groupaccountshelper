import mongoose from "mongoose";
import transactions from "./Transactionsdata.js";
import Transaction from "../models/Transaction.js";

async function main()
{
    await mongoose.connect("mongodb+srv://mvnikhilbharadwaja_db_user:MaBxZbitJx2mwgqm@cluster0.c3wotqe.mongodb.net/finance-tracker?retryWrites=true&w=majority&appName=Cluster0");
}
main().then(()=>{
    console.log("MongoDB connection succesful")
})
.catch((err)=>{
    console.log(err);
});

const initData=async ()=>
{
    await Transaction.deleteMany({});
     let newTransactions = transactions.map((transaction) => ({
    ...transaction,
    user: new mongoose.Types.ObjectId("68d542a582ad3f210856ee8f"), 
}));
    await Transaction.insertMany(newTransactions);
    console.log("Inserted Transactions");
    mongoose.connection.close();
}

initData();