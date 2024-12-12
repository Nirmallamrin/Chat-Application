import express from "express"
import { protect } from "../middleware/protect.js"
import { getUserForSidebar } from "../controllers/sidebarCntr.js"

const sidebarRoute = express.Router()

sidebarRoute.get("/", protect, getUserForSidebar)

export default sidebarRoute