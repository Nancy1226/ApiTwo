"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.packageRouter = void 0;
const express_1 = __importDefault(require("express"));
const dependencies_1 = require("./dependencies");
const dependencies_2 = require("./dependencies");
const dependencies_3 = require("./dependencies");
const dependencies_4 = require("./dependencies");
exports.packageRouter = express_1.default.Router();
exports.packageRouter.get("/getAll", dependencies_2.getAllPackageController.run.bind(dependencies_2.getAllPackageController));
exports.packageRouter.get("/getById/:id", dependencies_3.getByIdPackageController.run.bind(dependencies_3.getByIdPackageController));
exports.packageRouter.post("/create", dependencies_1.createPackageController.run.bind(dependencies_1.createPackageController));
exports.packageRouter.post("/update", dependencies_4.updatePackageController.run.bind(dependencies_4.updatePackageController));
