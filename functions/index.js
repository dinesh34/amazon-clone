const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");

const stripe = require("stripe")(
  "sk_test_51HQrxgAws83KagKdpYshvhastmx42XgsfZHlKGWyZ3kMxm1Lst2Lo2YHaSDUeVdbZO1pqPrMxyRAjkQm5MAdO3mz00zSwNn9rK"
);

//API

//APP config
const app = express();

//Middleware
app.use(cors({ origin: true }));
app.use(express.json());

//API Routes
app.get("/", (req, res) => {
  res.status(200).send("Hello World");
});

app.post("/payments/create", async (req, res) => {
  const total = req.query.total;

  console.log("Payment Request Received!! for the amount >> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, //subunits in the currency
    currency: "usd",
  });

  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

//Listen
exports.api = functions.https.onRequest(app);

//Example endpoint
//http://localhost:5001/challenge-b41cb/us-central1/api
