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
exports.UpdatePackageController = void 0;
class UpdatePackageController {
    constructor(updatePackageUseCase) {
        this.updatePackageUseCase = updatePackageUseCase;
    }
    run(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = req.body;
            try {
                const newPackage = yield this.updatePackageUseCase.run(data.id, data.status);
                if (newPackage)
                    res.status(201).send({
                        status: "success",
                        data: {
                            id: newPackage === null || newPackage === void 0 ? void 0 : newPackage.id,
                            name: newPackage === null || newPackage === void 0 ? void 0 : newPackage.name,
                            status: newPackage === null || newPackage === void 0 ? void 0 : newPackage.status,
                            create_at: newPackage === null || newPackage === void 0 ? void 0 : newPackage.create_at,
                            update_at: newPackage === null || newPackage === void 0 ? void 0 : newPackage.update_at
                        },
                    });
                else
                    res.status(204).send({
                        status: "error",
                        data: "NO fue posible actualizar el registro",
                    });
            }
            catch (error) {
                res.status(204).send({
                    status: "error",
                    data: "Ocurrio un error al actualizar el registro",
                    msn: error,
                });
            }
        });
    }
}
exports.UpdatePackageController = UpdatePackageController;
