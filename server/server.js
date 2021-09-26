require("dotenv").config();
const express = require("express"); // import express app
const cors = require("cors");
const db = require("./db");

const app = express(); // create an instance of express app and store it in the app variable
app.use(cors());
app.use(express.json());

// get all housing entries
app.get("/api/getAllhousing", async (req, res) => {
  try {
    const results = await db.query("select * from housing");
    res.status(200).json({
      status: "success",
      results: results.rows.length,
      data: {
        housing: results.rows,
      },
    });
  } catch (err) {
    console.log(err);
  }
});

//get an entry by id
app.get("/api/getHousing/:id", async (req, res) => {
  try {
    const result = await db.query("select * from housing where id = $1", [
      req.params.id,
    ]);
    res.status(200).json({
      status: "success",
      data: {
        housing: result.rows,
      },
    });
  } catch (err) {
    console.log(err);
  }
});

// input an entry
app.post("/api/inputHousing", async (req, res) => {
  try {
    const entry = await db.query(
      "INSERT INTO housing (name, address, monthly_rent_price) values($1, $2, $3) returning *",
      [req.body.name, req.body.address, req.body.monthly_rent_price]
    );
    res.status(201).json({
      status: "success",
      data: {
        housing: entry.rows[0],
      },
    });
  } catch (err) {
    console.log(err);
  }
});

// update housing
app.put("/api/updateHousing/:id", async (req, res) => {
  try {
    const results = await db.query(
      "UPDATE housing SET name = $1, address = $2, monthly_rent_price = $3 where id = $4 returning *",
      [
        req.body.name,
        req.body.address,
        req.body.monthly_rent_price,
        req.params.id,
      ]
    );
    console.log(results);
    res.status(200).json({
      status: "success",
      data: {
        updatedEntry: results.rows[0],
      },
    });
  } catch (err) {
    console.log(err);
  }
});

//delete housing
app.delete("/api/deleteHousing/:id", async (req, res) => {
  try {
    const results = await db.query("DELETE FROM housing where id = $1", [
      req.params.id,
    ]);
    res.status(204).json({
      status: "success",
    });
  } catch (err) {
    console.log(err);
  }
});

console.log("test");
const port = 4000;
app.listen(port, () => {
  console.log("server is up and listening on port", port);
});
