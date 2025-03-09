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
exports.addMember = exports.getMembers = void 0;
const memberRepository_1 = require("../../infrastructure/repositories/memberRepository");
const memberRepository = new memberRepository_1.MemberRepository();
const getMembers = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield memberRepository.getAll();
});
exports.getMembers = getMembers;
const addMember = (member) => __awaiter(void 0, void 0, void 0, function* () {
    yield memberRepository.add(member);
});
exports.addMember = addMember;
