const rateRouter = require("express").Router();

const {
    getAllRates,
    getRateById,
    calculatePrice,
    getAllLocations,
    postNewRate,
    updateRateById,
    updateRateStatusById,
    deleteRateById,
} = require("./rate.controller");

rateRouter.get("/locations", getAllLocations);
rateRouter.get("/calculateprice", calculatePrice);
rateRouter.get("/", getAllRates);
rateRouter.get("/:id", getRateById);
rateRouter.post("/", postNewRate);
rateRouter.put("/:id", updateRateById);
rateRouter.patch("/status/:id", updateRateStatusById);
rateRouter.delete("/:id", deleteRateById);

module.exports = rateRouter;