import axios from "axios";
import { Navigate, useRevalidator } from 'react-router-dom';
import { useSelector } from "react-redux";
import authHeader from "../services/auth-header";

const BASE = "http://54.157.103.186:8080";
const URI = BASE 

const user = JSON.parse(localStorage.getItem("user"));
const username = JSON.parse(localStorage.getItem("username"));
/**
 * API for aquiring purchase data
 */
const PurchaseApi = {
    
    //getAll Request be made here
    getAll: async (setPurchasesList) => {
        axios(URI + "/purchase/purchaseList/" + username, {
            method: 'get', // other options: post, put, delete, etc.
            headers: authHeader //Put in tokens
          })
          .then(response => { 
            console.log(response.data);
            setPurchasesList(response.data)
          })
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