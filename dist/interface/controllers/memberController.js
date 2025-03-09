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
exports.createMember = exports.getAllMembers = void 0;
const memberUseCases_1 = require("../../application/useCases/memberUseCases");
const member_1 = require("../../domain/models/member");
const getAllMembers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const members = yield (0, memberUseCases_1.getMembers)();
    res.json(members);
});
exports.getAllMembers = getAllMembers;
const createMember = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { code, name } = req.body;
    const member = new member_1.Member(0, code, name, null);
    yield (0, memberUseCases_1.addMember)(member);
    res.status(201).send('Member added');
});
exports.createMember = createMember;
