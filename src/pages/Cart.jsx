import React, { useContext } from "react";
import Announcement from "../components/Announcement";
import Navba from "../components/Navba";
import { CartContext } from "../components/CartContext";

const Cart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #1a1a1a 60%, #FFD700 100%)",
        fontFamily: "'Montserrat', 'Segoe UI', Arial, sans-serif",
      }}
    >
      <Announcement />
      <Navba />
      <div
        style={{
          margin: "40px auto",
          maxWidth: "700px",
          background: "rgba(255,255,255,0.95)",
          borderRadius: "18px",
          boxShadow: "0 4px 24px rgba(0,0,0,0.15)",
          padding: "32px 24px",
        }}
      >
        <h2
          style={{
            color: "#FFD700",
            fontWeight: 700,
            fontSize: "2.2rem",
            textAlign: "center",
            marginBottom: "32px",
            letterSpacing: "2px",
          }}
        >
          Your Cart
        </h2>
        {cartItems.length === 0 ? (
          <div
            style={{
              color: "#333",
              fontSize: "1.2rem",
              textAlign: "center",
              padding: "32px 0",
            }}
          >
            No items in cart.
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "24px",
            }}
          >
            {cartItems.map((item) => (
              <div
                key={item.id}
                style={{
                  display: "flex",
                  alignItems: "center",
                  background: "#fffbe6",
                  borderRadius: "12px",
                  boxShadow: "0 2px 8px rgba(255,215,0,0.12)",
                  padding: "18px 20px",
                  gap: "24px",
                }}
              >
                <img
                  src={item.img}
                  alt=""
                  style={{
                    width: "90px",
                    height: "90px",
                    objectFit: "cover",
                    borderRadius: "10px",
                    border: "2px solid #FFD700",
                    boxShadow: "0 1px 6px rgba(255,215,0,0.15)",
                  }}
                />
                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      fontWeight: 600,
                      fontSize: "1.1rem",
                      color: "#333",
                    }}
                  >
                    {item.title || "Gold Item"}
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  style={{
                    background:
                      "linear-gradient(90deg, #FFD700 60%, #fffbe6 100%)",
                    color: "#1a1a1a",
                    border: "none",
                    borderRadius: "8px",
                    padding: "10px 18px",
                    fontWeight: 600,
                    fontSize: "1rem",
                    cursor: "pointer",
                    boxShadow: "0 2px 8px rgba(255,215,0,0.10)",
                    transition: "background 0.2s",
                  }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.background = "#FFD700")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.background =
                      "linear-gradient(90deg, #FFD700 60%, #fffbe6 100%)")
                  }
                >
                  Remove this item
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
