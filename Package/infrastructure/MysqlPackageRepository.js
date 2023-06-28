"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MysqlPackageRepository = void 0;
const mysql_1 = require("../../database/mysql");
const Package_1 = require("../domain/Package");
class MysqlPackageRepository {
    getById(packageID) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = "SELECT * FROM Package where id=?";
            const params = [packageID];
            try {
                const [result] = yield (0, mysql_1.query)(sql, params);
                return new Package_1.Package(result[0].id, result[0].name, result[0].status, result[0].create_at, result[0].update_at);
            }
            catch (error) {
                return null;
            }
        });
    }
    createPackage(name, status) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = "INSERT INTO Package (name, status) VALUES (?,?)";
            const params = [name, status];
            try {
                const [result] = yield (0, mysql_1.query)(sql, params);
                console.log("Imprimiendo el result en la insercion: ");
                console.log(result);
                return new Package_1.Package(result.insertId, name, status, result.create_at, result.update_at);
            }
            catch (error) {
                return null;
            }
        });
    }
    updatePackage(packageID, status) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = "UPDATE Package set status = ? where id = ?";
            const params = [status, packageID];
            try {
                const [result] = yield (0, mysql_1.query)(sql, params);
                console.log(result);
                return new Package_1.Package(packageID, result.name, status, result.create_at, result.update_at);
            }
            catch (error) {
                return null;
            }
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = "SELECT * FROM Package";
            try {
                const [data] = yield (0, mysql_1.query)(sql, []);
                const dataPackages = Object.values(JSON.parse(JSON.stringify(data)));
                return dataPackages.map((pkg) => new Package_1.Package(pkg.id, pkg.name, pkg.status, pkg.create_at, pkg.update_at));
            }
            catch (error) {
                return null;
            }
        });
    }
}
exports.MysqlPackageRepository = MysqlPackageRepository;
