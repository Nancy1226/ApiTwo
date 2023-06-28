"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Package = void 0;
class Package {
    constructor(id, name, status, create_at, update_at) {
        this.id = id;
        this.name = name;
        this.status = status;
        this.create_at = create_at;
        this.update_at = update_at;
    }
}
exports.Package = Package;
