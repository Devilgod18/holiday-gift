import axios from "axios";
import { Navigate, useRevalidator } from 'react-router-dom';
import { useSelector } from "react-redux";
import authHeader from "./auth-header";

const BASE = "54.157.103.186:8080";
const URI = BASE 

const user = JSON.parse(localStorage.getItem("user"));
const userId = JSON.parse(localStorage.getItem("userId"));

const PurchaseApi = {
    
    //getAll Request be made here
    getAll: (setPurchasesList) => {
        axios(URI + "/purchases/" + userId.id, {
            method: 'get', // other options: post, put, delete, etc.
            headers: { authHeader } //Put in tokens
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
            headers: { authHeader ,"Content-Type": "application/json" }, //Put in tokens
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
            headers: { authHeader ,"Content-Type": "application/json" }, //Put in tokens
            data: JSON.stringify(purchase)
          })
          .then(response => console.log(response.data))
          .catch( error => {
            console.log(error);
          })
    },

    //delete Request be made here
    delete: (id) => {
        axios(URI + "/purchasesList/delete/" + user.id + "/" + id, {
            method: 'delete', // other options: post, put, delete, etc.
            headers: { authHeader }
          })
          .then(response => console.log(response.data))
          .catch( error => {
            console.log(error);
          })
    }
}

export default PurchaseApi;