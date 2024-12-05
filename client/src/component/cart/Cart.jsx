import React, { useContext, useEffect, useState } from "react";
import Navbar from "../../pages/Navbar";
import AppContext from "../../context/AppContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, decreaseQuantity, addToCart, removeFromCart } =
    useContext(AppContext);
  const [qty, setQty] = useState(0);
  const [price, setPrice] = useState(0);
  useEffect(() => {
    let qty = 0;
    let price = 0;
    if (cart?.items) {
      for (let i = 0; i < cart.items?.length; i++) {
        qty += cart.items[i].qty;
        price += cart.items[i].price;
      }
    }
    setPrice(price);
    setQty(qty);
  }, [cart]);

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 font-sans">
        {/* Header Section */}
        <header className="bg-white py-6 shadow-md">
          <div className="container mx-auto px-4">
            <h1 className="text-2xl font-bold">Cart</h1>
            <p className="text-gray-600">Home &gt; Cart</p>
          </div>
        </header>

        {/* Main Section */}
        <main className="container mx-auto mt-6 px-4">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
            {/* Cart Table */}

            <div className="col-span-2 rounded-lg bg-white p-6 shadow-sm">
              <div className="grid grid-cols-6 border-b pb-4 font-bold text-gray-700">
                <div>Product</div>
                <div>Title</div>
                <div>Price</div>
                <div>Quantity</div>
                <div>Subtotal</div>
                <div></div>
              </div>
              {/* Product Row */}
              {cart?.items?.map((product) => (
                <div
                  key={product._id}
                  className="mt-4 grid grid-cols-6 items-center border-b pb-4"
                >
                  <div>
                    <img
                      src={product.imgSrc}
                      alt=""
                      style={{ width: "100px", height: "100px" }}
                    />
                  </div>
                  <div>{product.title}</div>
                  <div>{product.price}</div>
                  <div>
                    <button
                      className="mr-2"
                      onClick={() => decreaseQuantity(product?.productId, 1)}
                    >
                      -
                    </button>
                    {product.quantity}
                    <button
                      onClick={() =>
                        addToCart(
                          product?.productId,
                          product.title,
                          product.price,
                          1,
                          product.imgSrc,
                        )
                      }
                    >
                      +
                    </button>
                  </div>
                  <div>{price}</div>
                  <button
                    onClick={() => {
                      if (confirm("Are you sure, want to remove form cart")) {
                        removeFromCart(product?.productId);
                      }
                    }}
                    className="rounded-md bg-red-200 p-2 text-lg text-white hover:bg-red-500"
                  >
                    remove
                  </button>
                </div>
              ))}
              {/* <div className="grid grid-cols-4 items-center mt-4 border-b pb-4">
              <div className="flex items-center">
                <img
                  src=""
                  alt="Product"
                  className="w-16 h-16 rounded-lg object-cover"
                />
                
              </div>
              <div>Rs. 250,000.00</div>
              <div>
                <input
                  type="number"
                  className="w-12 border border-gray-300 rounded px-2"
                  defaultValue="1"
                  />
              </div>
              <div>Rs. 250,000.00</div>
            </div> */}
            </div>

            {/* Cart Totals Section */}
            <div className="rounded-lg bg-[#FFF9E5] p-6 shadow-sm">
              <h2 className="text-lg font-bold">Cart Totals</h2>
              <div className="mt-4 flex justify-between">
                <span>Subtotal</span>
                <span>Rs. {price}</span>
              </div>
              <div className="mt-4 flex justify-between font-bold">
                <span>Total</span>
                <span>Rs. {price}</span>
              </div>
              <Link to={'Checkout'}>
              <button className="mt-6 w-full rounded-lg bg-transparent py-2 text-[#000000] shadow hover:bg-orange-100">
                Check Out
              </button>
              </Link>
            </div>
          </div>
        </main>

        {/* Footer Section */}
        <footer className="mt-12 bg-gray-100 py-12">
          <div className="container mx-auto grid grid-cols-3 gap-6 px-4">
            <div className="text-center">
              <h3 className="font-bold">Free Delivery</h3>
              <p>For all orders over $50, consectetur adipiscing elit.</p>
            </div>
            <div className="text-center">
              <h3 className="font-bold">90 Days Return</h3>
              <p>If goods have problems, consectetur adipiscing elit.</p>
            </div>
            <div className="text-center">
              <h3 className="font-bold">Secure Payment</h3>
              <p>100% secure payment, consectetur adipiscing elit.</p>
            </div>
          </div>
          <div className="mt-6 border-t pt-6 text-center">
            <p>&copy; 2022 Muebbl House. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Cart;
