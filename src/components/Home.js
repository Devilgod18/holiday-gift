import React, { useState, useEffect } from "react";
import { Form, Navigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import UserService from "../services/user.service";
import './homeCSS.css';
import PurchaseApi from "../apis/PurchaseApi";

const Home = () => {
  const [content, setContent] = useState("");
  const { user: currentUser } = useSelector((state) => state.auth);

  const username = JSON.parse(localStorage.getItem("username"));
  const userId = JSON.parse(localStorage.getItem("userId"));

  const[purchaseList, setPurchaseList] = useState([]);
  
  const[ toEdit, setToEdit ] = useState({
    purchase_id: 0,
    product_id: '',
    quantity: '',
    user_id: '',
  });
  
  // get full list of purchases made by user
  useEffect( () => {
    PurchaseApi.getAll(setPurchaseList)
  }, [] )

  useEffect(() => {
    UserService.getPublicContent().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();

        setContent(_content);
      }
    );
  }, []);

  // if user is not logged in, go back to login
  if (!currentUser) {
    return <Navigate to="/login" />;
  } 

  return (
    <div className="EntirePage">
        <div className="headertable">
          <h1>Home</h1>
          <div className="Header">
          </div>
          <div className="items">
            <h1>Items by Product Id</h1>
            <ol>
              <li className="orderlist">Fidget Spinner</li>
              <img src="https://media0.giphy.com/media/1Ubrzxvik2puE/giphy.gif?cid=790b761135fbf0137bf691309b8e19286e276e1c48d52b6d&rid=giphy.gif&ct=g" alt="" className="listimgs" />
              <li className="orderlist">Ps5</li>
              <img src="https://media2.giphy.com/media/Sl1PEQk8fKeqcPDCEl/giphy.gif?cid=790b761181cb7402b8b9c0b40e3e14162a101f6c7df74e0a&rid=giphy.gif&ct=g" alt="ps5" className="listimgs" />
              <li className="orderlist"> Heat active Mug</li>
              <img src="https://media4.giphy.com/media/u48BPBrBpaqBOq3HrT/200w.webp?cid=ecf05e47w0bff612bbml1p3gvfgsdtehk8fnm4fi0q2ocxa4&rid=200w.webp&ct=g" alt="" className="listimgs" />
              <li className="orderlist">Turtle Neck Sweater</li>
              <img src="https://m.media-amazon.com/images/I/713qaHeOnDL._AC_UY1000_.jpg" alt="" className="listimgs" />
              <li className="orderlist">Coffin</li>
              <img src="https://64.media.tumblr.com/77b80b2a4979ca2abd22c86da11d23ae/tumblr_nnn7e9fHVO1qedb29o1_500.gif" alt="coffin" className="listimgs" />
            </ol>
          </div>
          <div className="UserDetails" style={{}}>
            <img src="https://www.ecsphilly.org/wp-content/uploads/2017/01/blank-profile-picture-973460_960_720.jpg" className="img1" alt="new" />
            <ul>
              <li> <h1 className="btn">{username}</h1> </li>
              <li><form action="./purchase"><button className="btn">Make Purchase</button></form></li>
              <li><form action="./delete"><button className="btn">Delete Purchase</button></form></li>
            </ul>
            <div>
            <div className="Your Orders">
              <table>
                <tbody><tr>
                    <th>Purchase ID</th>
                    <th>Product ID</th>
                    <th>Quantity</th>
                  </tr>
                  <tr>2
                    <td>3</td>
                    <td>2</td>
                  </tr>
                  <tr>4
                    <td>4</td>
                    <td>1</td>
                  </tr>
                  <tr>5
                    <td>1</td>
                    <td>1</td>
                  </tr>
                  <tr>7
                    <td>5</td>
                    <td>4</td>
                  </tr>
                  <tr>9
                    <td>3</td>
                    <td>2</td>
                  </tr>
                  <tr>10
                    <td>2</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td />
                    <td />
                  </tr>
                  <tr>
                    <td />
                    <td />
                  </tr>
                  <tr>
                    <td />
                    <td />
                  </tr>
                  <tr>
                    <td />
                    <td />
                  </tr>
                  <tr>
                    <td />
                    <td />
                  </tr>
                  <tr>
                    <td />
                    <td />
                  </tr>
                  <tr>
                    <td />
                    <td />
                  </tr>
                  <tr>
                    <td />
                    <td />
                  </tr>
                </tbody></table>
            </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Home;