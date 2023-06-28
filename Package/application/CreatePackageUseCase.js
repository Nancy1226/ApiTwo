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
exports.CreatePackageUseCase = void 0;
class CreatePackageUseCase {
    constructor(packageRepository) {
        this.packageRepository = packageRepository;
    }
    run(name, status) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const packageCreated = yield this.packageRepository.createPackage(name, status);
                return packageCreated;
            }
            catch (error) {
                return null;
            }
        });
    }
}
exports.CreatePackageUseCase = CreatePackageUseCase;
