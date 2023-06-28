"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const signale_1 = require("signale");
//import { loadRouter } from "./event/LoadRouter";
const ProductRouter_1 = require("./product/infrastructure/ProductRouter");
const PackageRouter_1 = require("./Package/infrastructure/PackageRouter");
const app = (0, express_1.default)();
const signale = new signale_1.Signale();
app.use(express_1.default.json());
app.use("/products", ProductRouter_1.productRouter);
//app.use("/load", loadRouter);
app.use("/package", PackageRouter_1.packageRouter);
app.listen(3000, () => {
    signale.success("Server online in port 3000");
});
