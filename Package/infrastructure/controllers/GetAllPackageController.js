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
exports.GetAllPackageController = void 0;
class GetAllPackageController {
    constructor(getAllPackageUseCase) {
        this.getAllPackageUseCase = getAllPackageUseCase;
    }
    run(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const packages = yield this.getAllPackageUseCase.run();
                console.log(packages);
                if (packages) {
                    res.status(200).send({
                        status: "success",
                        data: packages.map((pkg) => {
                            return {
                                id: pkg.id,
                                name: pkg.name,
                                status: pkg.status,
                                create_at: pkg.create_at,
                                update_at: pkg.update_at
                            };
                        }),
                    });
                }
                else {
                    res.status(400).send({
                        status: "error",
                        msn: "Ocurrio algún problema",
                    });
                }
            }
            catch (error) {
                res.status(204).send({
                    status: "error",
                    data: "Ocurrio un error",
                    msn: error,
                });
            }
        });
    }
}
exports.GetAllPackageController = GetAllPackageController;
