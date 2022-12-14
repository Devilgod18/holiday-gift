import axios from "axios";
import { Navigate } from 'react-router-dom';
import { useSelector } from "react-redux";

const BASE = "http://localhost:8080";
const URI = BASE 

const user = JSON.parse(localStorage.getItem("user"));

const PurchaseApi = {
    
    //getAll Request be made here
    getAll: (setPurchasesList) => {
        axios(URI + "/purchases/" + user.id, {
            method: 'get', // other options: post, put, delete, etc.
            headers: {}, //Put in tokens
          })
          .then(response => console.log(response.data))
          .catch( error => { 
            console.log(error);
          })
    },

    //add Request be made here
    add: (purchase) => {
        axios(URI + "/purchases/" + user.id, {
            method: 'post', // other options: post, put, delete, etc.
            headers: { "Content-Type": "application/json" }, //Put in tokens
            data: JSON.stringify(purchase)
          })
          .then(response => console.log(response.data))
          .catch( error => { 
            console.log(error);
          })
    },

    //update Request be made here
    update: (purchase, purchaseList, setPurchasesList) => {
        axios(URI + "/purchases/" + user.id, {
            method: 'put', // other options: post, put, delete, etc.
            headers: { "Content-Type": "application/json" }, //Put in tokens
            data: JSON.stringify(purchase)
          })
          .then(response => console.log(response.data))
          .catch( error => {
            console.log(error);
          })
    },

    //delete Request be made here
    delete: (id) => {
        axios(URI + "/purchases/delete/" + user.id + "/" + id, {
            method: 'delete', // other options: post, put, delete, etc.
          })
          .then(response => console.log(response.data))
          .catch( error => {
            console.log(error);
          })
    }
}

export default PurchaseApi;