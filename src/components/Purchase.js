/**
 *  Purchase Page
 * @returns 
 */
const Purchase = () => {


    return(
        <div>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title> Login Page </title>
        <link rel="stylesheet" href="PurchaseCss.css" />
        <center> <h1> Holiday Purchase </h1> </center>
        <center>
          <form>
            <div className="container">
              <label>Item ID </label>
              <input type="text" />
              <label>Quantity </label>
              <input />
              <button type="submit">BUY!</button>
            </div>
          </form>
        </center>
      </div>
    );
};

export default Purchase;