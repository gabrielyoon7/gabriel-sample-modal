var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState } from "react";
import styled from 'styled-components';
var ModalOverlay = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"], ["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"])));
var Modal = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background-color: white;\n  border-radius: 10px;\n  padding: 20px;\n  width: 500px; /* \uC218\uC815 */\n  height: 500px; /* \uC218\uC815 */\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n"], ["\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background-color: white;\n  border-radius: 10px;\n  padding: 20px;\n  width: 500px; /* \uC218\uC815 */\n  height: 500px; /* \uC218\uC815 */\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n"])));
var MyModal = function (_a) {
    var trigger = _a.trigger, children = _a.children;
    var _b = useState(false), isModalOpen = _b[0], setIsModalOpen = _b[1];
    var handleOpenModal = function () {
        setIsModalOpen(true);
    };
    var handleCloseModal = function () {
        setIsModalOpen(false);
    };
    return (_jsxs(_Fragment, { children: [React.cloneElement(trigger, { onClick: handleOpenModal }), isModalOpen && (_jsx(ModalOverlay, __assign({ onClick: handleCloseModal }, { children: _jsx(Modal, __assign({ onClick: function (e) { return e.stopPropagation(); } }, { children: children })) })))] }));
};
export default MyModal;
var templateObject_1, templateObject_2;
