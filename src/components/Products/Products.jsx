import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import auth from "../../Firebase/Firebase.init";

const Products = () => {
  const [porducts, setPorducts] = useState([]);
  const [user] = useAuthState(auth);

  useEffect(() => {
    const url = `https://gadget-freak-sujon.herokuapp.com/products`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPorducts(data));
  }, []);

  const handleOrder = (product) => {
    const { name, price } = product;
    // console.log(product, user.email);
    const url = `https://gadget-freak-sujon.herokuapp.com/addOrder`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        name,
        price,
        email: user.email,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        toast("Order Completed Successfully!!");
      });
  };

  return (
    <div>
      <h1 className="text-center">Products</h1>
      <div className="row">
        {porducts.map((pd) => (
          <div key={pd._id} className="col-4 g-2">
            <div className="card text-center">
              <div className="card-body">
                <h5 className="card-title">{pd.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  Price: {pd.price} $
                </h6>
                <button
                  onClick={() => handleOrder(pd)}
                  className="btn btn-link"
                >
                  Order Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
