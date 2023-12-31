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
exports.CreatePackageController = void 0;
class CreatePackageController {
    constructor(createPackageUseCase) {
        this.createPackageUseCase = createPackageUseCase;
    }
    run(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = req.body;
            try {
                const pkg = yield this.createPackageUseCase.run(data.name, data.status);
                if (pkg)
                    res.status(201).send({
                        status: "Success",
                        data: {
                            id: pkg === null || pkg === void 0 ? void 0 : pkg.id,
                            name: pkg === null || pkg === void 0 ? void 0 : pkg.name,
                            status: pkg === null || pkg === void 0 ? void 0 : pkg.status,
                            create_at: pkg === null || pkg === void 0 ? void 0 : pkg.create_at,
                            update_at: pkg === null || pkg === void 0 ? void 0 : pkg.update_at,
                        },
                    });
                else
                    res.status(404).send({
                        status: "error",
                        data: "NO fue posible agregar el registro",
                    });
            }
            catch (error) {
                res.status(404).send({
                    status: "error",
                    data: "Ocurrio un error",
                    msn: error,
                });
            }
        });
    }
}
exports.CreatePackageController = CreatePackageController;
