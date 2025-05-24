import express from "express";
import * as dashboard from "../controllers/dashboardController.js";
import authenticateAdmin from "../middlewares/authenticateAdmin.js";

const router = express.Router();

router.use(authenticateAdmin);

router.get("/overview", dashboard.getOverview);
router.get("/charts", dashboard.getCharts);
router.get("/users/active-by-country", dashboard.getActiveByCountry);
router.get("/revenue", dashboard.getRevenue);
router.get("/users/active", dashboard.getActiveUsers);
router.get("/users/registered", dashboard.getRegisteredUsers);
router.get("/users/most-active", dashboard.getMostActiveUsers);
router.get("/engagements/modules", dashboard.getModuleEngagements);
router.get("/users/active-list", dashboard.getActiveUserList);

export default router;
