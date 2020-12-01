const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51HtAKzLAPROtMe74PN1OE0S0OoS0ZbcbNZrt9RWQxPSnmwzK5Kf6EVq9HTNnrAqoiXcK3l4AegydO4afInaywSOi00KRon0IEK"
);

// - API

// - APP Config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (req, res) => {
  return res.status(200).send("Hello World");
});

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("payment request received BOOM!!!", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // sub units of currency
    currency: "usd",
    description: "Amazon Clone products",
    shipping: {
      name: "Jenny Rosen",
      address: {
        line1: "510 Townsend St",
        postal_code: "98140",
        city: "San Francisco",
        state: "CA",
        country: "US",
      },
    },
  });

  // OK - Created
  return response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
exports.api = functions.https.onRequest(app);
