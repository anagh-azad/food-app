import express from "express";
const displayDataRouter = express.Router();

displayDataRouter.post("/foodData", (req, res) => {
  try {
    res.send([global.food_items, global.foodCategory]);
    //console.log([global.food_items, global.foodCategory]);
  } catch (error) {
    console.log(error.message);
    res.send("Server Error");
  }
});

export default displayDataRouter;
