'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var styled = require('styled-components');
var styledSystem = require('styled-system');
var get = require('lodash/get');
var uniqueId = require('lodash/uniqueId');
var lodash = require('lodash');
var reactDom = require('react-dom');
var reactPopper = require('react-popper');
var noop = require('lodash/noop');
var debounce = require('lodash/debounce');
var throttle = require('lodash/throttle');
var reactRouterDom = require('react-router-dom');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);
var get__default = /*#__PURE__*/_interopDefaultLegacy(get);
var uniqueId__default = /*#__PURE__*/_interopDefaultLegacy(uniqueId);
var noop__default = /*#__PURE__*/_interopDefaultLegacy(noop);
var debounce__default = /*#__PURE__*/_interopDefaultLegacy(debounce);
var throttle__default = /*#__PURE__*/_interopDefaultLegacy(throttle);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __spreadArray(to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}

var getThemeValue = function (path, fallback) {
    return function (theme) {
        return get__default['default'](theme, path, fallback);
    };
};

var rotate = styled.keyframes(templateObject_1$19 || (templateObject_1$19 = __makeTemplateObject(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"], ["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"])));
var spinStyle = styled.css(templateObject_2$v || (templateObject_2$v = __makeTemplateObject(["\n  animation: ", " 2s linear infinite;\n"], ["\n  animation: ", " 2s linear infinite;\n"])), rotate);
var Svg = styled__default['default'].svg(templateObject_3$f || (templateObject_3$f = __makeTemplateObject(["\n  align-self: center; // Safari fix\n  fill: ", ";\n  flex-shrink: 0;\n  ", "\n  ", "\n"], ["\n  align-self: center; // Safari fix\n  fill: ", ";\n  flex-shrink: 0;\n  ", "\n  ", "\n"])), function (_a) {
    var theme = _a.theme, color = _a.color;
    return getThemeValue("colors." + color, color)(theme);
}, function (_a) {
    var spin = _a.spin;
    return spin && spinStyle;
}, styledSystem.space);
Svg.defaultProps = {
    color: "text",
    width: "20px",
    xmlns: "http://www.w3.org/2000/svg",
    spin: false,
};
var templateObject_1$19, templateObject_2$v, templateObject_3$f;

var Icon$2a = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM15.88 8.29L10 14.17L8.12 12.29C7.73 11.9 7.1 11.9 6.71 12.29C6.32 12.68 6.32 13.31 6.71 13.7L9.3 16.29C9.69 16.68 10.32 16.68 10.71 16.29L17.3 9.7C17.69 9.31 17.69 8.68 17.3 8.29C16.91 7.9 16.27 7.9 15.88 8.29Z" })));
};

var Icon$29 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M12 7C12.55 7 13 7.45 13 8V12C13 12.55 12.55 13 12 13C11.45 13 11 12.55 11 12V8C11 7.45 11.45 7 12 7ZM11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM13 17H11V15H13V17Z" })));
};

var Icon$28 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22ZM12 4C16.42 4 20 7.58 20 12C20 13.85 19.37 15.55 18.31 16.9L7.1 5.69C8.45 4.63 10.15 4 12 4ZM5.69 7.1L16.9 18.31C15.55 19.37 13.85 20 12 20C7.58 20 4 16.42 4 12C4 10.15 4.63 8.45 5.69 7.1Z" })));
};

var Icon$27 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M11 7H13V9H11V7ZM12 17C12.55 17 13 16.55 13 16V12C13 11.45 12.55 11 12 11C11.45 11 11 11.45 11 12V16C11 16.55 11.45 17 12 17ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" })));
};

var getColor = function (_a) {
    var color = _a.color, theme = _a.theme;
    return getThemeValue("colors." + color, color)(theme);
};
var getFontSize = function (_a) {
    var fontSize = _a.fontSize, small = _a.small;
    return small ? "14px" : fontSize || "16px";
};
var Text = styled__default['default'].div(templateObject_1$18 || (templateObject_1$18 = __makeTemplateObject(["\n  color: ", ";\n  font-size: ", ";\n  font-weight: ", ";\n  line-height: 1.5;\n  ", "\n  ", "\n\n  ", "\n  ", "\n  ", "\n"], ["\n  color: ", ";\n  font-size: ", ";\n  font-weight: ", ";\n  line-height: 1.5;\n  ", "\n  ",
    "\n\n  ", "\n  ", "\n  ", "\n"])), getColor, getFontSize, function (_a) {
    var bold = _a.bold;
    return (bold ? 600 : 400);
}, function (_a) {
    var textTransform = _a.textTransform;
    return textTransform && "text-transform: " + textTransform + ";";
}, function (_a) {
    var ellipsis = _a.ellipsis;
    return ellipsis &&
        "white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;";
}, styledSystem.space, styledSystem.typography, styledSystem.layout);
Text.defaultProps = {
    color: "text",
    small: false,
    ellipsis: false,
};
var templateObject_1$18;

var TooltipText = styled__default['default'](Text)(templateObject_1$17 || (templateObject_1$17 = __makeTemplateObject(["\n  text-decoration: ", ";\n  text-underline-offset: 0.1em;\n"], ["\n  text-decoration: ", ";\n  text-underline-offset: 0.1em;\n"])), function (_a) {
    var theme = _a.theme;
    return "underline dotted " + theme.colors.textSubtle;
});
var templateObject_1$17;

var getExternalLinkProps = function () { return ({
    target: "_blank",
    rel: "noreferrer noopener",
}); };

var scales$8 = {
    MD: "md",
    SM: "sm",
    XS: "xs",
};
var variants$6 = {
    PRIMARY: "primary",
    SECONDARY: "secondary",
    TERTIARY: "tertiary",
    TEXT: "text",
    DANGER: "danger",
    SUBTLE: "subtle",
    SUCCESS: "success",
    LIGHT: "light",
};

var _a$4, _b$3;
var scaleVariants$1 = (_a$4 = {},
    _a$4[scales$8.MD] = {
        height: "48px",
        padding: "0 24px",
    },
    _a$4[scales$8.SM] = {
        height: "32px",
        padding: "0 16px",
    },
    _a$4[scales$8.XS] = {
        height: "20px",
        fontSize: "12px",
        padding: "0 8px",
    },
    _a$4);
var styleVariants$2 = (_b$3 = {},
    _b$3[variants$6.PRIMARY] = {
        backgroundColor: "primary",
        color: "white",
    },
    _b$3[variants$6.SECONDARY] = {
        backgroundColor: "transparent",
        border: "2px solid",
        borderColor: "primary",
        boxShadow: "none",
        color: "primary",
        ":disabled": {
            backgroundColor: "transparent",
        },
    },
    _b$3[variants$6.TERTIARY] = {
        backgroundColor: "tertiary",
        boxShadow: "none",
        color: "primary",
    },
    _b$3[variants$6.SUBTLE] = {
        backgroundColor: "textSubtle",
        color: "backgroundAlt",
    },
    _b$3[variants$6.DANGER] = {
        backgroundColor: "failure",
        color: "white",
    },
    _b$3[variants$6.SUCCESS] = {
        backgroundColor: "success",
        color: "white",
    },
    _b$3[variants$6.TEXT] = {
        backgroundColor: "transparent",
        color: "primary",
        boxShadow: "none",
    },
    _b$3[variants$6.LIGHT] = {
        backgroundColor: "input",
        color: "textSubtle",
        boxShadow: "none",
    },
    _b$3);

var getDisabledStyles = function (_a) {
    var $isLoading = _a.$isLoading, theme = _a.theme;
    if ($isLoading === true) {
        return "\n      &:disabled,\n      &.pancake-button--disabled {\n        cursor: not-allowed;\n      }\n    ";
    }
    return "\n    &:disabled,\n    &.pancake-button--disabled {\n      background-color: " + theme.colors.backgroundDisabled + ";\n      border-color: " + theme.colors.backgroundDisabled + ";\n      box-shadow: none;\n      color: " + theme.colors.textDisabled + ";\n      cursor: not-allowed;\n    }\n  ";
};
/**
 * This is to get around an issue where if you use a Link component
 * React will throw a invalid DOM attribute error
 * @see https://github.com/styled-components/styled-components/issues/135
 */
var getOpacity = function (_a) {
    var _b = _a.$isLoading, $isLoading = _b === void 0 ? false : _b;
    return $isLoading ? ".5" : "1";
};
var StyledButton = styled__default['default'].button(templateObject_1$16 || (templateObject_1$16 = __makeTemplateObject(["\n  align-items: center;\n  border: 0;\n  border-radius: 16px;\n  box-shadow: 0px -1px 0px 0px rgba(14, 14, 44, 0.4) inset;\n  cursor: pointer;\n  display: inline-flex;\n  font-family: inherit;\n  font-size: 16px;\n  font-weight: 600;\n  justify-content: center;\n  letter-spacing: 0.03em;\n  line-height: 1;\n  opacity: ", ";\n  outline: 0;\n  transition: background-color 0.2s, opacity 0.2s;\n\n  &:hover:not(:disabled):not(.pancake-button--disabled):not(.pancake-button--disabled):not(:active) {\n    opacity: 0.65;\n  }\n\n  &:active:not(:disabled):not(.pancake-button--disabled):not(.pancake-button--disabled) {\n    opacity: 0.85;\n    transform: translateY(1px);\n    box-shadow: none;\n  }\n\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"], ["\n  align-items: center;\n  border: 0;\n  border-radius: 16px;\n  box-shadow: 0px -1px 0px 0px rgba(14, 14, 44, 0.4) inset;\n  cursor: pointer;\n  display: inline-flex;\n  font-family: inherit;\n  font-size: 16px;\n  font-weight: 600;\n  justify-content: center;\n  letter-spacing: 0.03em;\n  line-height: 1;\n  opacity: ", ";\n  outline: 0;\n  transition: background-color 0.2s, opacity 0.2s;\n\n  &:hover:not(:disabled):not(.pancake-button--disabled):not(.pancake-button--disabled):not(:active) {\n    opacity: 0.65;\n  }\n\n  &:active:not(:disabled):not(.pancake-button--disabled):not(.pancake-button--disabled) {\n    opacity: 0.85;\n    transform: translateY(1px);\n    box-shadow: none;\n  }\n\n  ", "\n  ",
    "\n  ",
    "\n  ", "\n  ", "\n"])), getOpacity, getDisabledStyles, styledSystem.variant({
    prop: "scale",
    variants: scaleVariants$1,
}), styledSystem.variant({
    variants: styleVariants$2,
}), styledSystem.layout, styledSystem.space);
var templateObject_1$16;

var Button = function (props) {
    var startIcon = props.startIcon, endIcon = props.endIcon, external = props.external, className = props.className, isLoading = props.isLoading, disabled = props.disabled, children = props.children, rest = __rest(props, ["startIcon", "endIcon", "external", "className", "isLoading", "disabled", "children"]);
    var internalProps = external ? getExternalLinkProps() : {};
    var isDisabled = isLoading || disabled;
    var classNames = className ? [className] : [];
    if (isLoading) {
        classNames.push("pancake-button--loading");
    }
    if (isDisabled && !isLoading) {
        classNames.push("pancake-button--disabled");
    }
    return (React__default['default'].createElement(StyledButton, __assign({ "$isLoading": isLoading, className: classNames.join(" "), disabled: isDisabled }, internalProps, rest),
        React__default['default'].createElement(React__default['default'].Fragment, null,
            React.isValidElement(startIcon) &&
                React.cloneElement(startIcon, {
                    mr: "0.5rem",
                }),
            children,
            React.isValidElement(endIcon) &&
                React.cloneElement(endIcon, {
                    ml: "0.5rem",
                }))));
};
Button.defaultProps = {
    isLoading: false,
    external: false,
    variant: variants$6.PRIMARY,
    scale: scales$8.MD,
    disabled: false,
};

var IconButton = styled__default['default'](Button)(templateObject_1$15 || (templateObject_1$15 = __makeTemplateObject(["\n  padding: 0;\n  width: ", ";\n"], ["\n  padding: 0;\n  width: ", ";\n"])), function (_a) {
    var scale = _a.scale;
    return (scale === "sm" ? "32px" : "48px");
});
var templateObject_1$15;

var Icon$26 = function (props) { return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
    React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 14.2619C9.69993 14.2619 7.57238 14.6197 5.98327 15.2327C5.19201 15.5379 4.48317 15.9258 3.95486 16.4076C3.42611 16.8898 3 17.544 3 18.3476C3 20.0992 4.33478 21.5622 6.07901 21.7223L6.21662 21.735C10.0641 22.0883 13.9359 22.0883 17.7834 21.735L17.921 21.7223C19.6652 21.5622 21 20.0992 21 18.3476C21 17.544 20.5739 16.8898 20.0451 16.4076C19.5168 15.9258 18.808 15.5379 18.0167 15.2327C16.4276 14.6197 14.3001 14.2619 12 14.2619ZM5 18.3476C5 18.2991 5.0216 18.1416 5.3025 17.8854C5.58383 17.6289 6.04656 17.3519 6.70302 17.0987C8.00934 16.5948 9.88179 16.2619 12 16.2619C14.1182 16.2619 15.9907 16.5948 17.297 17.0987C17.9534 17.3519 18.4162 17.6289 18.6975 17.8854C18.9784 18.1416 19 18.2991 19 18.3476C19 19.0655 18.453 19.6651 17.7381 19.7307L17.6005 19.7434C13.8747 20.0855 10.1253 20.0855 6.39952 19.7434L6.26191 19.7307C5.54705 19.6651 5 19.0655 5 18.3476Z" }),
    React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M17.5 7.7619C17.5 10.7995 15.0376 13.2619 12 13.2619C8.96243 13.2619 6.5 10.7995 6.5 7.7619C6.5 4.72433 8.96243 2.2619 12 2.2619C15.0376 2.2619 17.5 4.72433 17.5 7.7619ZM15.5 7.7619C15.5 9.6949 13.933 11.2619 12 11.2619C10.067 11.2619 8.5 9.6949 8.5 7.7619C8.5 5.82891 10.067 4.2619 12 4.2619C13.933 4.2619 15.5 5.82891 15.5 7.7619Z" }))); };

var Icon$25 = function (props) { return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
    React__default['default'].createElement("path", { d: "M5.98327 15.2932C7.57238 14.6803 9.69993 14.3224 12 14.3224C14.3001 14.3224 16.4276 14.6803 18.0167 15.2932C18.808 15.5984 19.5168 15.9864 20.0451 16.4682C20.5739 16.9503 21 17.6045 21 18.4081C21 20.1597 19.6652 21.6227 17.921 21.7829L17.7834 21.7955C13.9359 22.1489 10.0641 22.1489 6.21662 21.7955L6.07901 21.7829C4.33478 21.6227 3 20.1597 3 18.4081C3 17.6045 3.42611 16.9503 3.95486 16.4682C4.48317 15.9864 5.19201 15.5984 5.98327 15.2932Z" }),
    React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.7256 1C8.72367 1 7.96795 1.90072 8.15187 2.87568L8.58709 5.18266C7.11275 5.82653 6 6.93833 6 8.33333V9.18182C6 10.3351 6.77077 11.3007 7.84829 11.9526C8.93423 12.6095 10.4033 13 12 13C13.5967 13 15.0658 12.6095 16.1517 11.9526C17.2292 11.3007 18 10.3351 18 9.18182V8.33333C18 6.9309 16.8757 5.81482 15.3888 5.17222L15.8221 2.87568C16.006 1.90072 15.2503 1 14.2483 1C13.3642 1 12.6474 1.70952 12.6474 2.58476V4.53674C12.4347 4.52247 12.2187 4.51515 12 4.51515C11.7724 4.51515 11.5477 4.52308 11.3265 4.53853V2.58476C11.3265 1.70952 10.6098 1 9.7256 1Z" }))); };

var Icon$24 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M18 13H13V18C13 18.55 12.55 19 12 19C11.45 19 11 18.55 11 18V13H6C5.45 13 5 12.55 5 12C5 11.45 5.45 11 6 11H11V6C11 5.45 11.45 5 12 5C12.55 5 13 5.45 13 6V11H18C18.55 11 19 11.45 19 12C19 12.55 18.55 13 18 13Z" })));
};

var Icon$23 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M19 11H7.82998L12.71 6.12C13.1 5.73 13.1 5.09 12.71 4.7C12.32 4.31 11.69 4.31 11.3 4.7L4.70998 11.29C4.31998 11.68 4.31998 12.31 4.70998 12.7L11.3 19.29C11.69 19.68 12.32 19.68 12.71 19.29C13.1 18.9 13.1 18.27 12.71 17.88L7.82998 13H19C19.55 13 20 12.55 20 12C20 11.45 19.55 11 19 11Z" })));
};

var Icon$22 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M11 5V16.17L6.11997 11.29C5.72997 10.9 5.08997 10.9 4.69997 11.29C4.30997 11.68 4.30997 12.31 4.69997 12.7L11.29 19.29C11.68 19.68 12.31 19.68 12.7 19.29L19.29 12.7C19.68 12.31 19.68 11.68 19.29 11.29C18.9 10.9 18.27 10.9 17.88 11.29L13 16.17V5C13 4.45 12.55 4 12 4C11.45 4 11 4.45 11 5Z" })));
};

var Icon$21 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M8.71005 11.71L11.3001 14.3C11.6901 14.69 12.3201 14.69 12.7101 14.3L15.3001 11.71C15.9301 11.08 15.4801 10 14.5901 10H9.41005C8.52005 10 8.08005 11.08 8.71005 11.71Z" })));
};

var Icon$20 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M8.71005 12.29L11.3001 9.69997C11.6901 9.30997 12.3201 9.30997 12.7101 9.69997L15.3001 12.29C15.9301 12.92 15.4801 14 14.5901 14H9.41005C8.52005 14 8.08005 12.92 8.71005 12.29Z" })));
};

var Icon$1$ = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M21 11.1835L9.83 11.1835L14.71 6.30347C15.1 5.91347 15.1 5.27347 14.71 4.88347C14.32 4.49347 13.69 4.49347 13.3 4.88347L6.71 11.4735C6.32 11.8635 6.32 12.4935 6.71 12.8835L13.29 19.4835C13.68 19.8735 14.31 19.8735 14.7 19.4835C15.09 19.0935 15.09 18.4635 14.7 18.0735L9.83 13.1835L21 13.1835C21.55 13.1835 22 12.7335 22 12.1835C22 11.6335 21.55 11.1835 21 11.1835Z" }),
        React__default['default'].createElement("path", { d: "M4 19.1835C3.44771 19.1835 3 18.7358 3 18.1835L3 6.18347C3 5.63119 3.44772 5.18347 4 5.18347C4.55229 5.18347 5 5.63119 5 6.18347L5 18.1835C5 18.7358 4.55228 19.1835 4 19.1835Z" })));
};

var Icon$1_ = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M5 13H16.17L11.29 17.88C10.9 18.27 10.9 18.91 11.29 19.3C11.68 19.69 12.31 19.69 12.7 19.3L19.29 12.71C19.68 12.32 19.68 11.69 19.29 11.3L12.71 4.7C12.32 4.31 11.69 4.31 11.3 4.7C10.91 5.09 10.91 5.72 11.3 6.11L16.17 11H5C4.45 11 4 11.45 4 12C4 12.55 4.45 13 5 13Z" })));
};

var Icon$1Z = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M3 13.1835H14.17L9.29 18.0635C8.9 18.4535 8.9 19.0935 9.29 19.4835C9.68 19.8735 10.31 19.8735 10.7 19.4835L17.29 12.8935C17.68 12.5035 17.68 11.8735 17.29 11.4835L10.71 4.88347C10.32 4.49347 9.69 4.49347 9.3 4.88347C8.91 5.27347 8.91 5.90347 9.3 6.29347L14.17 11.1835H3C2.45 11.1835 2 11.6335 2 12.1835C2 12.7335 2.45 13.1835 3 13.1835Z" }),
        React__default['default'].createElement("path", { d: "M20 5.18347C20.5523 5.18347 21 5.63119 21 6.18347V18.1835C21 18.7358 20.5523 19.1835 20 19.1835C19.4477 19.1835 19 18.7358 19 18.1835V6.18347C19 5.63119 19.4477 5.18347 20 5.18347Z" })));
};

var Icon$1Y = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M13 19V7.83001L17.88 12.71C18.27 13.1 18.91 13.1 19.3 12.71C19.69 12.32 19.69 11.69 19.3 11.3L12.71 4.71001C12.32 4.32001 11.69 4.32001 11.3 4.71001L4.69997 11.29C4.30997 11.68 4.30997 12.31 4.69997 12.7C5.08997 13.09 5.71997 13.09 6.10997 12.7L11 7.83001V19C11 19.55 11.45 20 12 20C12.55 20 13 19.55 13 19Z" })));
};

var Icon$1X = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M12 6V7.79C12 8.24 12.54 8.46 12.85 8.14L15.64 5.35C15.84 5.15 15.84 4.84 15.64 4.64L12.85 1.85C12.54 1.54 12 1.76 12 2.21V4C7.58 4 4 7.58 4 12C4 13.04 4.2 14.04 4.57 14.95C4.84 15.62 5.7 15.8 6.21 15.29C6.48 15.02 6.59 14.61 6.44 14.25C6.15 13.56 6 12.79 6 12C6 8.69 8.69 6 12 6ZM17.79 8.71C17.52 8.98 17.41 9.4 17.56 9.75C17.84 10.45 18 11.21 18 12C18 15.31 15.31 18 12 18V16.21C12 15.76 11.46 15.54 11.15 15.86L8.36 18.65C8.16 18.85 8.16 19.16 8.36 19.36L11.15 22.15C11.46 22.46 12 22.24 12 21.8V20C16.42 20 20 16.42 20 12C20 10.96 19.8 9.96 19.43 9.05C19.16 8.38 18.3 8.2 17.79 8.71Z" })));
};

var Icon$1W = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 16 16" }, props),
        React__default['default'].createElement("circle", { cx: "8", cy: "8", r: "8", fill: "#F0B90B" }),
        React__default['default'].createElement("path", { d: "M5.01656 8.00006L3.79256 9.23256L2.56006 8.00006L3.79256 6.76756L5.01656 8.00006ZM8.00006 5.01656L10.1081 7.12456L11.3406 5.89206L9.23256 3.79256L8.00006 2.56006L6.76756 3.79256L4.66806 5.89206L5.90056 7.12456L8.00006 5.01656ZM12.2076 6.76756L10.9836 8.00006L12.2161 9.23256L13.4401 8.00006L12.2076 6.76756ZM8.00006 10.9836L5.89206 8.87556L4.66806 10.1081L6.77606 12.2161L8.00006 13.4401L9.23256 12.2076L11.3406 10.0996L10.1081 8.87556L8.00006 10.9836ZM8.00006 9.23256L9.23256 8.00006L8.00006 6.76756L6.76756 8.00006L8.00006 9.23256Z", fill: "#FFFDFA" })));
};

var Icon$1V = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 40 40" }, props),
        React__default['default'].createElement("path", { d: "M14.2487 9.59637L10.7888 7.58546L20.1999 2.08337L29.6387 7.58546L26.1787 9.59637L20.1999 6.13313L14.2487 9.59637ZM32.1022 13.0596V17.1094L35.5622 15.0985V11.0487L32.1022 9.00986L28.6422 11.0208L32.1022 13.0596ZM16.7399 11.0487L20.1999 13.0596L23.6599 11.0487L20.1999 9.00986L16.7399 11.0487ZM29.6387 14.5119L26.1787 12.501L20.1999 15.9643L14.2487 12.501L10.7888 14.5119V18.5617L16.7399 22.0249V28.9514L20.1999 30.9623L23.6599 28.9514V22.0249L29.6387 18.5617V14.5119ZM32.1022 26.9405L26.1511 30.4038V34.4535L35.5899 28.9514V17.9752L32.1022 20.014V26.9405ZM26.1511 27.527L29.611 25.5161V21.4384L26.1511 23.4493V27.527ZM16.7399 31.8561V35.9058L20.1999 37.9168L23.6599 35.9058V31.8561L20.1999 33.867L16.7399 31.8561ZM4.80992 15.0985L8.2699 17.1094V13.0596L11.7299 11.0487L8.29758 9.00986L4.8376 11.0208V15.0985H4.80992ZM8.29758 20.014L4.8376 18.0031V28.9794L14.2764 34.4814V30.4317L8.29758 26.9405V20.014ZM14.2487 23.4773L10.7888 21.4664V25.5161L14.2487 27.527V23.4773Z", fill: "#F1BA0D" })));
};

var Icon$1U = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 64 64" }, props),
        React__default['default'].createElement("path", { d: "M58.6666 34.1665C58.6666 48.8523 46.7275 59.6665 31.9999 59.6665C17.2723 59.6665 5.33325 48.8523 5.33325 34.1665C5.33325 19.4808 17.2723 8.6665 31.9999 8.6665C46.7275 8.6665 58.6666 19.4808 58.6666 34.1665Z", fill: "#EB8C00" }),
        React__default['default'].createElement("path", { d: "M58.6666 29.8335C58.6666 44.5192 46.7275 55.3335 31.9999 55.3335C17.2723 55.3335 5.33325 44.5192 5.33325 29.8335C5.33325 15.1477 17.2723 4.3335 31.9999 4.3335C46.7275 4.3335 58.6666 15.1477 58.6666 29.8335Z", fill: "#FFD800" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M50.4313 11.0848C48.0923 9.01961 45.3538 7.36511 42.3351 6.21094L7.60376 40.5648C8.9535 43.3887 10.8247 45.9001 13.0998 48.0105L50.4313 11.0848ZM24.6139 54.2485C22.7419 53.762 20.9537 53.0928 19.2734 52.259L55.1875 16.7354C56.1366 18.2849 56.918 19.9495 57.5084 21.7116L24.6139 54.2485Z", fill: "#FFE971" }),
        React__default['default'].createElement("path", { d: "M53.6667 29.5002C53.6667 41.2698 44.0409 49.6668 32.1667 49.6668C20.2926 49.6668 10.6667 41.2698 10.6667 29.5002C10.6667 17.7305 20.2926 9.3335 32.1667 9.3335C44.0409 9.3335 53.6667 17.7305 53.6667 29.5002Z", fill: "#FFC700" }),
        React__default['default'].createElement("path", { d: "M51.6667 20.6615C45.1982 12.2514 33.2898 9.7153 23.8129 15.1469C14.5027 20.483 10.7276 31.6814 14.4875 41.3335C12.0783 38.0902 10.6667 34.0691 10.6667 29.5527C10.6667 17.7524 20.303 9.3335 32.19 9.3335C40.7965 9.33349 48.2231 13.7468 51.6667 20.6615Z", fill: "#FFAF00" }),
        React__default['default'].createElement("path", { d: "M23.4077 30.5L19.8827 34.0117L16.3333 30.5L19.8827 26.9883L23.4077 30.5ZM31.9999 21.9992L38.0708 28.0055L41.6202 24.4938L35.5494 18.5117L31.9999 15L28.4504 18.5117L22.4041 24.4938L25.9536 28.0055L31.9999 21.9992ZM44.1171 26.9883L40.5921 30.5L44.1416 34.0117L47.6666 30.5L44.1171 26.9883ZM31.9999 39.0008L25.9291 32.9945L22.4041 36.5063L28.4749 42.5125L31.9999 46L35.5494 42.4883L41.6202 36.482L38.0708 32.9945L31.9999 39.0008ZM31.9999 34.0117L35.5494 30.5L31.9999 26.9883L28.4504 30.5L31.9999 34.0117Z", fill: "#191326" })));
};

var Icon$1T = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 22C17.5228 22 22 17.5228 22 12C22 11.7792 21.9928 11.5602 21.9788 11.343C18.6515 16.824 10.797 19.3967 6.32085 20.232C7.93393 21.3469 9.8907 22 12 22ZM3.6987 17.5775C2.62604 15.9842 2 14.0652 2 12C2 6.47715 6.47715 2 12 2C16.6548 2 20.5667 5.18031 21.6815 9.48656C20.7816 11.0755 19.4244 12.3811 17.8282 13.4444V7.27607C17.8282 6.86948 17.4986 6.53988 17.092 6.53988H15.3742C14.9676 6.53988 14.638 6.86948 14.638 7.27607V15.0795C14.638 15.1034 14.6392 15.1269 14.6413 15.1501C14.2758 15.3076 13.906 15.4562 13.5337 15.5963V9.36196C13.5337 8.95537 13.2041 8.62577 12.7975 8.62577H11.0798C10.6732 8.62577 10.3436 8.95537 10.3436 9.36196V16.592C9.97218 16.6864 9.60348 16.7732 9.23926 16.8528V11.4479C9.23926 11.0413 8.90966 10.7117 8.50307 10.7117H6.78528C6.37869 10.7117 6.04908 11.0413 6.04908 11.4479V17.3941C5.17906 17.4987 4.38348 17.5575 3.6987 17.5775Z" })));
};

var Icon$1S = function (props) {
    var id = uniqueId__default['default']("svg");
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 64 64" }, props),
        React__default['default'].createElement("g", { clipPath: "url(#" + id + ")" },
            React__default['default'].createElement("rect", { width: "32", height: "40", rx: "5.33333", transform: "matrix(-0.866025 -0.5 -0.5 0.866025 65.6667 24.29)", fill: "#7645D9" }),
            React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M47.988 26.8647C48.913 25.2625 50.9618 24.7135 52.5641 25.6386C54.3798 26.6868 54.7973 29.1264 53.4335 30.7188L49.9995 34.7284C51.4808 37.0281 52.089 39.7267 50.7938 41.97C49.6296 43.9866 47.3505 44.856 44.9724 44.9153C42.5675 44.9753 39.8188 44.2341 37.2483 42.7501C34.6778 41.266 32.6615 39.2561 31.5111 37.1434C30.3734 35.0542 29.9868 32.6458 31.1511 30.6292C32.4387 28.3989 35.0576 27.5731 37.7711 27.694L39.534 22.694C40.2312 20.7167 42.5527 19.8585 44.3684 20.9068C45.9706 21.8318 46.5196 23.8807 45.5945 25.4829L43.4518 29.1943C43.8691 29.3931 44.2848 29.6114 44.6966 29.8492C45.0944 30.0788 45.4782 30.3206 45.847 30.573L47.988 26.8647ZM39.6099 34.0874C39.0216 35.1064 37.9767 35.6046 37.2761 35.2001C36.5755 34.7956 36.4845 33.6416 37.0728 32.6226C37.6612 31.6035 38.7061 31.1053 39.4067 31.5098C40.1073 31.9143 40.1982 33.0683 39.6099 34.0874ZM43.9649 39.0619C44.6655 39.4663 45.7104 38.9681 46.2987 37.9491C46.8871 36.93 46.7961 35.776 46.0955 35.3715C45.3949 34.9671 44.35 35.4653 43.7616 36.4843C43.1733 37.5034 43.2643 38.6574 43.9649 39.0619Z", fill: "#523193" }),
            React__default['default'].createElement("path", { opacity: "0.7", d: "M49.6666 15.0524L42.5726 10.9566C40.0217 9.48387 36.7599 10.3579 35.2871 12.9088L20.6205 38.3122C19.1477 40.8631 20.0217 44.1249 22.5726 45.5976L26.7339 48.0002L44.3333 48.0002C47.2788 48.0002 49.6666 45.6124 49.6666 42.6668L49.6666 15.0524Z", fill: "#452A7A" }),
            React__default['default'].createElement("path", { d: "M33.7371 52.0434L43.094 46.6412C45.6449 45.1684 46.5189 41.9066 45.0461 39.3557L32.532 17.6807L20.6205 38.3121C19.1477 40.863 20.0217 44.1249 22.5726 45.5976L33.7371 52.0434Z", fill: "#452A7A" }),
            React__default['default'].createElement("rect", { x: "16", y: "6.3335", width: "32", height: "40", rx: "5.33333", fill: "#9A6AFF" }),
            React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M33.3938 16.122C33.3938 14.113 35.0224 12.4844 37.0314 12.4844C39.3079 12.4844 41.0251 14.5519 40.6071 16.7897L39.5548 22.4247C42.1963 23.783 44.2335 25.9905 44.2335 28.8033C44.2335 31.3318 42.5623 33.3867 40.3582 34.7336C38.1293 36.0958 35.142 36.8911 31.919 36.8911C28.696 36.8911 25.7087 36.0958 23.4798 34.7336C21.2757 33.3867 19.6045 31.3318 19.6045 28.8033C19.6045 26.0068 21.6189 23.8083 24.2362 22.4489L23.1794 16.7898C22.7615 14.5519 24.4786 12.4844 26.7552 12.4844C28.7642 12.4844 30.3928 14.113 30.3928 16.122L30.3928 20.7755C30.8932 20.7359 31.4026 20.7155 31.919 20.7155C32.4177 20.7155 32.9099 20.7345 33.3938 20.7715V16.122ZM29.4367 27.4631C29.4367 28.7408 28.7246 29.7766 27.8461 29.7766C26.9677 29.7766 26.2556 28.7408 26.2556 27.4631C26.2556 26.1854 26.9677 25.1496 27.8461 25.1496C28.7246 25.1496 29.4367 26.1854 29.4367 27.4631ZM36.233 29.7763C37.1115 29.7763 37.8236 28.7405 37.8236 27.4627C37.8236 26.185 37.1115 25.1492 36.233 25.1492C35.3546 25.1492 34.6425 26.185 34.6425 27.4627C34.6425 28.7405 35.3546 29.7763 36.233 29.7763Z", fill: "#7645D9" }),
            React__default['default'].createElement("path", { opacity: "0.7", d: "M21.3333 46.3334C18.3878 46.3334 16 43.9456 16 41.0001L16 15.2882L23.4272 11.0001C25.9781 9.52733 29.24 10.4013 30.7127 12.9522L45.3794 38.3556C46.8521 40.9065 45.9781 44.1684 43.4273 45.6411L42.2282 46.3334H21.3333Z", fill: "#7645D9" }),
            React__default['default'].createElement("rect", { x: "-1.66675", y: "24.29", width: "32", height: "40", rx: "5.33333", transform: "rotate(-30 -1.66675 24.29)", fill: "#CAB3F8" }),
            React__default['default'].createElement("path", { opacity: "0.7", fillRule: "evenodd", clipRule: "evenodd", d: "M19.5708 25.8631C18.6224 24.2205 19.1853 22.12 20.828 21.1715C22.6894 20.0968 25.0695 20.9767 25.7842 23.0038L27.584 28.1082C30.3851 27.9718 33.0929 28.8151 34.4208 31.1151C35.6144 33.1825 35.218 35.6517 34.0517 37.7935C32.8722 39.9595 30.805 42.0202 28.1697 43.5417C25.5344 45.0632 22.7162 45.8231 20.2507 45.7615C17.8126 45.7007 15.476 44.8094 14.2824 42.7419C12.9623 40.4553 13.5715 37.7068 15.0698 35.3595L11.5341 31.2312C10.136 29.5986 10.564 27.0975 12.4255 26.0228C14.0681 25.0743 16.1686 25.6372 17.1171 27.2799L19.3139 31.0849C19.7043 30.8162 20.1112 30.5591 20.5335 30.3153C20.9413 30.0799 21.3527 29.8631 21.7658 29.6649L19.5708 25.8631ZM21.6892 37.0043C22.2924 38.049 22.1991 39.2322 21.4809 39.6469C20.7626 40.0615 19.6913 39.5508 19.0881 38.506C18.485 37.4613 18.5782 36.2781 19.2965 35.8634C20.0148 35.4487 21.086 35.9595 21.6892 37.0043ZM28.3382 35.6877C29.0564 35.273 29.1497 34.0898 28.5465 33.0451C27.9433 32.0003 26.8721 31.4896 26.1538 31.9043C25.4355 32.3189 25.3422 33.5021 25.9454 34.5468C26.5486 35.5916 27.6199 36.1024 28.3382 35.6877Z", fill: "#9A6AFF" }),
            React__default['default'].createElement("g", { opacity: "0.1" },
                React__default['default'].createElement("path", { d: "M13.0716 49.8608L8.23887 41.4903L26.0423 10.6538C27.1289 11.0794 28.0839 11.8629 28.7127 12.952L31.5468 17.8608L13.0716 49.8608Z", fill: "white" }),
                React__default['default'].createElement("path", { d: "M30.936 51.698L26.3172 54.3647L39.4698 31.5838L41.0094 34.2505L30.936 51.698Z", fill: "white" }),
                React__default['default'].createElement("path", { d: "M24.0449 10.2847L7.1336 39.5759L5.59399 36.9092L20.1155 11.7572L21.4272 10.9999C22.2535 10.5229 23.1544 10.292 24.0449 10.2847Z", fill: "white" }))),
        React__default['default'].createElement("defs", null,
            React__default['default'].createElement("clipPath", { id: id },
                React__default['default'].createElement("rect", { width: "64", height: "64", fill: "white" })))));
};

var Icon$1R = function (props) {
    var theme = styled.useTheme();
    var primaryColor = theme.isDark ? "#3C3742" : "#e9eaeb";
    var secondaryColor = theme.isDark ? "#666171" : "#bdc2c4";
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 72 72" }, props),
        React__default['default'].createElement("path", { d: "M72 36C72 55.8823 55.8823 72 36 72C16.1177 72 0 55.8823 0 36C0 16.1177 16.1177 0 36 0C55.8823 0 72 16.1177 72 36Z", fill: primaryColor }),
        React__default['default'].createElement("mask", { id: "mask0", "mask-type": "alpha", maskUnits: "userSpaceOnUse", x: "3", y: "3", width: "66", height: "66" },
            React__default['default'].createElement("path", { d: "M68.25 36C68.25 53.8112 53.8112 68.25 36 68.25C18.1888 68.25 3.75 53.8112 3.75 36C3.75 18.1888 18.1888 3.75 36 3.75C53.8112 3.75 68.25 18.1888 68.25 36Z", fill: "#C4C4C4" })),
        React__default['default'].createElement("g", { mask: "url(#mask0)" },
            React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M20.9927 23.2654C26.1289 23.1362 30.0824 27.7278 29.2039 32.7879L27.6838 41.5445C30.2298 41.0514 32.9304 40.7875 35.7229 40.7875C37.7063 40.7875 39.6424 40.9206 41.5089 41.1741L49.2862 29.5726C51.7713 25.8657 56.7909 24.8751 60.4978 27.3602C64.7827 30.2326 65.3155 36.33 61.5938 39.9021L55.2585 45.9828C59.9045 49.0009 63.1305 53.2977 63.1306 58.4066V62.322C63.1306 67.644 59.6097 72.0998 54.6877 75.1077C49.7272 78.1391 43.0165 79.9412 35.7229 79.9412C28.4292 79.9412 21.7186 78.1391 16.7581 75.1077C11.836 72.0998 8.31519 67.644 8.31519 62.322V58.4067C8.31522 54.4286 10.2963 50.9169 13.3384 48.1585L13.0101 31.6154C12.9208 27.115 16.4929 23.3785 20.9927 23.2654ZM15.617 49.1514C15.6003 49.0112 15.5903 48.8688 15.5874 48.7246L15.2471 31.571C15.1822 28.3014 17.7798 25.5842 21.049 25.502C24.7712 25.4084 27.637 28.733 26.9996 32.4052L24.8971 44.5163C25.6681 44.2915 26.4607 44.0899 27.2726 43.9131C29.9138 43.338 32.7585 43.0248 35.7229 43.0248C38.1625 43.0248 40.5211 43.237 42.7519 43.6326C42.8725 43.2609 43.0459 42.8995 43.2742 42.5589L51.1446 30.8185C52.9416 28.1379 56.5714 27.4216 59.252 29.2186C62.3505 31.2957 62.7358 35.7049 60.0446 38.2879L51.5469 46.4441C52.264 46.7988 52.9486 47.1771 53.5975 47.577C58.1074 50.3568 60.8932 54.1829 60.8932 58.4066V62.322C60.8932 70.8172 49.6241 77.7039 35.7229 77.7039C21.8217 77.7039 10.5525 70.8172 10.5525 62.322V58.4067C10.5526 54.9322 12.4377 51.7266 15.617 49.1514Z", fill: secondaryColor }),
            React__default['default'].createElement("path", { d: "M60.8932 62.3221C60.8932 70.8173 49.624 77.704 35.7228 77.704C21.8216 77.704 10.5525 70.8173 10.5525 62.3221V58.4067H60.8932V62.3221Z", fill: primaryColor }),
            React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M26.9995 32.4051C27.637 28.733 24.7711 25.4083 21.0489 25.5019C17.7797 25.5842 15.1821 28.3013 15.247 31.5709L15.5874 48.7245C15.5903 48.8687 15.6002 49.0111 15.617 49.1513C12.4376 51.7266 10.5525 54.9321 10.5525 58.4066C10.5525 66.9018 21.8216 73.7885 35.7228 73.7885C49.624 73.7885 60.8932 66.9018 60.8932 58.4066C60.8932 53.5752 57.2481 49.264 51.5468 46.444L60.0445 38.2879C62.7358 35.7048 62.3504 31.2956 59.252 29.2185C56.5714 27.4215 52.9416 28.1378 51.1446 30.8184L43.2742 42.5588C43.0458 42.8994 42.8724 43.2609 42.7519 43.6326C40.521 43.2369 38.1625 43.0248 35.7228 43.0248C31.8473 43.0248 28.1763 43.56 24.897 44.5162L26.9995 32.4051Z", fill: primaryColor }),
            React__default['default'].createElement("path", { d: "M32.0873 57.2881C32.0873 59.6049 30.8352 61.4831 29.2906 61.4831C27.746 61.4831 26.4939 59.6049 26.4939 57.2881C26.4939 54.9712 27.746 53.093 29.2906 53.093C30.8352 53.093 32.0873 54.9712 32.0873 57.2881Z", fill: secondaryColor }),
            React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M28.891 54.0353C29.461 54.8903 29.8499 56.1359 29.8499 57.5677C29.8499 58.1855 30.3508 58.6864 30.9686 58.6864C31.5864 58.6864 32.0873 58.1855 32.0873 57.5677C32.0873 55.7558 31.5997 54.0649 30.7526 52.7943C29.9107 51.5314 28.6248 50.5759 27.0532 50.5759C25.4816 50.5759 24.1957 51.5314 23.3538 52.7943C22.5067 54.0649 22.0191 55.7558 22.0191 57.5677C22.0191 58.55 22.1622 59.4908 22.4244 60.3463C22.6055 60.937 23.2311 61.2691 23.8218 61.088C24.4125 60.9069 24.7446 60.2813 24.5635 59.6906C24.3685 59.0543 24.2565 58.3349 24.2565 57.5677C24.2565 56.1359 24.6454 54.8903 25.2154 54.0353C25.7906 53.1725 26.4624 52.8133 27.0532 52.8133C27.644 52.8133 28.3158 53.1725 28.891 54.0353Z", fill: secondaryColor }),
            React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M48.1883 54.0353C48.7582 54.8903 49.1472 56.1359 49.1472 57.5677C49.1472 58.1855 49.648 58.6864 50.2658 58.6864C50.8837 58.6864 51.3845 58.1855 51.3845 57.5677C51.3845 55.7558 50.8969 54.0649 50.0498 52.7943C49.208 51.5314 47.9221 50.5759 46.3505 50.5759C44.7788 50.5759 43.4929 51.5314 42.6511 52.7943C41.804 54.0649 41.3164 55.7558 41.3164 57.5677C41.3164 58.55 41.4594 59.4908 41.7216 60.3463C41.9027 60.937 42.5284 61.2691 43.1191 61.088C43.7098 60.9069 44.0418 60.2813 43.8608 59.6906C43.6657 59.0543 43.5538 58.3349 43.5538 57.5677C43.5538 56.1359 43.9427 54.8903 44.5127 54.0353C45.0879 53.1725 45.7597 52.8133 46.3505 52.8133C46.9412 52.8133 47.613 53.1725 48.1883 54.0353Z", fill: secondaryColor }),
            React__default['default'].createElement("path", { d: "M51.3844 57.2881C51.3844 59.6049 50.1323 61.4831 48.5877 61.4831C47.0431 61.4831 45.791 59.6049 45.791 57.2881C45.791 54.9712 47.0431 53.093 48.5877 53.093C50.1323 53.093 51.3844 54.9712 51.3844 57.2881Z", fill: secondaryColor }),
            React__default['default'].createElement("path", { d: "M34.0221 25.9463V25.2697C34.0221 24.32 34.2121 23.5247 34.5919 22.8836C34.9956 22.2426 35.5297 21.6134 36.1945 20.9961C36.8118 20.4026 37.4172 19.8921 38.0108 19.4648C38.6043 19.0374 39.091 18.5863 39.4709 18.1115C39.8508 17.6367 40.0407 17.0787 40.0407 16.4377C40.0407 15.5118 39.7083 14.8589 39.0436 14.479C38.4025 14.0754 37.3223 13.8736 35.8028 13.8736C34.8056 13.8736 33.8203 14.0041 32.8469 14.2653C31.8735 14.5027 31.0425 14.8114 30.354 15.1912V10.3835C31.2325 9.95615 32.2652 9.61189 33.4523 9.35073C34.6632 9.08957 35.9808 8.95898 37.4054 8.95898C40.1594 8.95898 42.2606 9.5644 43.7088 10.7752C45.1571 11.9623 45.8812 13.6005 45.8812 15.6898C45.8812 17.0194 45.6082 18.0996 45.0621 18.9306C44.5161 19.7378 43.7207 20.5688 42.6761 21.4235C41.7976 22.1595 41.0616 22.8005 40.4681 23.3466C39.8745 23.8689 39.5777 24.5812 39.5777 25.4834V25.9463H34.0221ZM33.7728 32.2498V28.1187H39.7914V32.2498H33.7728Z", fill: secondaryColor })),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M71.9838 37.09L69.7348 37.0231C69.7449 36.6834 69.75 36.3423 69.75 36C69.75 35.6577 69.7449 35.3166 69.7348 34.9769L71.9838 34.91C71.9946 35.272 72 35.6354 72 36C72 36.3646 71.9946 36.728 71.9838 37.09ZM71.8544 32.7398L69.6134 32.941C69.5523 32.2603 69.471 31.5857 69.3702 30.9176L71.5949 30.5818C71.7025 31.2945 71.7892 32.014 71.8544 32.7398ZM71.2052 28.4414L69.0048 28.9115C68.8622 28.2441 68.6999 27.5841 68.5185 26.932L70.6861 26.3289C70.8798 27.0248 71.053 27.7292 71.2052 28.4414ZM70.0397 24.2525L67.9128 24.9864C67.6906 24.3424 67.4494 23.7072 67.1899 23.0815L69.2683 22.2196C69.5452 22.8874 69.8026 23.5652 70.0397 24.2525ZM68.3746 20.237L66.3524 21.2235C66.0538 20.6114 65.7373 20.0097 65.4034 19.419L67.3622 18.3119C67.7183 18.942 68.0561 19.584 68.3746 20.237ZM66.2353 16.4517L64.347 17.6751C63.977 17.104 63.5901 16.5448 63.1872 15.998L64.9984 14.6631C65.4281 15.2462 65.8407 15.8426 66.2353 16.4517ZM63.656 12.952L61.9283 14.3934C61.4925 13.8711 61.0413 13.3621 60.5752 12.8671L62.2132 11.3246C62.7102 11.8523 63.1914 12.3951 63.656 12.952ZM60.6754 9.78678L59.1329 11.4248C58.6379 10.9587 58.1289 10.5074 57.6066 10.0717L59.048 8.34397C59.6049 8.80865 60.1477 9.28984 60.6754 9.78678ZM57.3369 7.00159L56.002 8.8128C55.4552 8.40985 54.896 8.02303 54.3249 7.65302L55.5482 5.76468C56.1574 6.15933 56.7538 6.57187 57.3369 7.00159ZM53.6881 4.63782L52.581 6.5966C51.9903 6.26271 51.3886 5.94615 50.7765 5.64759L51.7629 3.62536C52.416 3.94392 53.058 4.28165 53.6881 4.63782ZM49.7804 2.7317L48.9185 4.81008C48.2928 4.55061 47.6576 4.30943 47.0136 4.08723L47.7475 1.96028C48.4348 2.19743 49.1126 2.4548 49.7804 2.7317ZM45.6711 1.31385L45.068 3.48152C44.4159 3.3001 43.7559 3.13777 43.0885 2.99517L43.5586 0.794831C44.2708 0.947003 44.9752 1.12024 45.6711 1.31385ZM41.4182 0.405049L41.0824 2.62985C40.4143 2.529 39.7397 2.44772 39.059 2.38662L39.2602 0.14563C39.986 0.210778 40.7055 0.297466 41.4182 0.405049ZM37.09 0.0161859C36.728 0.0054207 36.3646 0 36 0C35.6354 0 35.272 0.00542073 34.91 0.016186L34.9769 2.26519C35.3166 2.25509 35.6577 2.25 36 2.25C36.3423 2.25 36.6834 2.25509 37.0231 2.26519L37.09 0.0161859ZM32.7398 0.145631L32.941 2.38662C32.2603 2.44772 31.5857 2.529 30.9176 2.62985L30.5818 0.405049C31.2945 0.297467 32.014 0.210779 32.7398 0.145631ZM28.4414 0.794832L28.9115 2.99517C28.2441 3.13777 27.5841 3.3001 26.932 3.48152L26.3289 1.31386C27.0248 1.12024 27.7292 0.947004 28.4414 0.794832ZM24.2525 1.96028L24.9864 4.08723C24.3424 4.30944 23.7072 4.55061 23.0815 4.81008L22.2196 2.7317C22.8874 2.45481 23.5652 2.19743 24.2525 1.96028ZM20.237 3.62536L21.2235 5.64759C20.6114 5.94616 20.0097 6.26272 19.419 6.5966L18.3119 4.63783C18.942 4.28165 19.584 3.94392 20.237 3.62536ZM16.4517 5.76469L17.6751 7.65302C17.104 8.02303 16.5448 8.40985 15.998 8.81281L14.6631 7.00159C15.2462 6.57188 15.8426 6.15933 16.4517 5.76469ZM12.952 8.34398L14.3934 10.0717C13.8711 10.5075 13.3621 10.9587 12.8671 11.4248L11.3246 9.78679C11.8523 9.28984 12.3951 8.80865 12.952 8.34398ZM9.78678 11.3246L11.4248 12.8671C10.9587 13.3621 10.5074 13.8711 10.0717 14.3934L8.34397 12.952C8.80865 12.3951 9.28984 11.8523 9.78678 11.3246ZM7.00159 14.6631L8.8128 15.998C8.40985 16.5448 8.02303 17.104 7.65302 17.6751L5.76468 16.4518C6.15933 15.8426 6.57187 15.2462 7.00159 14.6631ZM4.63782 18.3119L6.5966 19.419C6.26271 20.0097 5.94615 20.6114 5.64759 21.2235L3.62536 20.2371C3.94392 19.584 4.28165 18.942 4.63782 18.3119ZM2.7317 22.2196L4.81008 23.0815C4.55061 23.7072 4.30943 24.3424 4.08723 24.9864L1.96028 24.2525C2.19743 23.5652 2.4548 22.8874 2.7317 22.2196ZM1.31385 26.3289L3.48152 26.932C3.3001 27.5841 3.13777 28.2441 2.99517 28.9115L0.794831 28.4414C0.947003 27.7292 1.12024 27.0248 1.31385 26.3289ZM0.405049 30.5818L2.62985 30.9176C2.529 31.5857 2.44772 32.2603 2.38662 32.941L0.14563 32.7398C0.210778 32.014 0.297466 31.2945 0.405049 30.5818ZM0.0161859 34.91C0.0054207 35.272 0 35.6354 0 36C0 36.3646 0.00542073 36.728 0.016186 37.09L2.26519 37.0231C2.25509 36.6834 2.25 36.3423 2.25 36C2.25 35.6577 2.25509 35.3166 2.26519 34.9769L0.0161859 34.91ZM0.145631 39.2602L2.38662 39.059C2.44772 39.7397 2.529 40.4143 2.62985 41.0824L0.40505 41.4182C0.297467 40.7055 0.210779 39.986 0.145631 39.2602ZM0.794833 43.5586L2.99517 43.0885C3.13777 43.7559 3.3001 44.4159 3.48152 45.068L1.31386 45.6711C1.12024 44.9752 0.947004 44.2708 0.794833 43.5586ZM1.96028 47.7475L4.08723 47.0136C4.30944 47.6576 4.55061 48.2928 4.81008 48.9185L2.7317 49.7804C2.45481 49.1126 2.19743 48.4348 1.96028 47.7475ZM3.62536 51.763L5.64759 50.7765C5.94616 51.3886 6.26272 51.9903 6.5966 52.581L4.63783 53.6881C4.28165 53.058 3.94392 52.416 3.62536 51.763ZM5.76469 55.5482L7.65302 54.3249C8.02303 54.896 8.40985 55.4552 8.81281 56.002L7.00159 57.3369C6.57188 56.7538 6.15933 56.1574 5.76469 55.5482ZM8.34398 59.048L10.0717 57.6066C10.5075 58.1289 10.9587 58.6379 11.4248 59.1329L9.78679 60.6754C9.28984 60.1477 8.80865 59.6049 8.34398 59.048ZM11.3246 62.2132L12.8671 60.5752C13.3621 61.0413 13.8711 61.4925 14.3934 61.9283L12.952 63.656C12.3951 63.1914 11.8523 62.7102 11.3246 62.2132ZM14.6631 64.9984L15.998 63.1872C16.5448 63.5901 17.104 63.977 17.6751 64.347L16.4518 66.2353C15.8426 65.8407 15.2462 65.4281 14.6631 64.9984ZM18.3119 67.3622L19.419 65.4034C20.0097 65.7373 20.6114 66.0538 21.2235 66.3524L20.2371 68.3746C19.584 68.0561 18.942 67.7184 18.3119 67.3622ZM22.2196 69.2683L23.0815 67.1899C23.7072 67.4494 24.3424 67.6906 24.9864 67.9128L24.2525 70.0397C23.5652 69.8026 22.8874 69.5452 22.2196 69.2683ZM26.3289 70.6861L26.932 68.5185C27.5841 68.6999 28.2441 68.8622 28.9115 69.0048L28.4414 71.2052C27.7292 71.053 27.0248 70.8798 26.3289 70.6861ZM30.5818 71.595L30.9176 69.3702C31.5857 69.471 32.2603 69.5523 32.941 69.6134L32.7398 71.8544C32.014 71.7892 31.2945 71.7025 30.5818 71.595ZM34.91 71.9838L34.9769 69.7348C35.3166 69.7449 35.6577 69.75 36 69.75C36.3423 69.75 36.6834 69.7449 37.0231 69.7348L37.09 71.9838C36.728 71.9946 36.3646 72 36 72C35.6354 72 35.272 71.9946 34.91 71.9838ZM39.2602 71.8544L39.059 69.6134C39.7397 69.5523 40.4143 69.471 41.0824 69.3702L41.4182 71.5949C40.7055 71.7025 39.986 71.7892 39.2602 71.8544ZM43.5586 71.2052L43.0885 69.0048C43.7559 68.8622 44.4159 68.6999 45.068 68.5185L45.6711 70.6861C44.9752 70.8798 44.2708 71.053 43.5586 71.2052ZM47.7475 70.0397L47.0136 67.9128C47.6576 67.6906 48.2928 67.4494 48.9185 67.1899L49.7804 69.2683C49.1126 69.5452 48.4348 69.8026 47.7475 70.0397ZM51.7629 68.3746L50.7765 66.3524C51.3886 66.0538 51.9903 65.7373 52.581 65.4034L53.6881 67.3622C53.058 67.7183 52.416 68.0561 51.7629 68.3746ZM55.5482 66.2353L54.3249 64.347C54.896 63.977 55.4552 63.5901 56.002 63.1872L57.3369 64.9984C56.7538 65.4281 56.1574 65.8407 55.5482 66.2353ZM59.048 63.656L57.6066 61.9283C58.1289 61.4925 58.6379 61.0413 59.1329 60.5752L60.6754 62.2132C60.1477 62.7102 59.6049 63.1914 59.048 63.656ZM62.2132 60.6754L60.5752 59.1329C61.0413 58.6379 61.4925 58.1289 61.9283 57.6066L63.656 59.048C63.1914 59.6049 62.7102 60.1477 62.2132 60.6754ZM64.9984 57.3369L63.1872 56.002C63.5901 55.4552 63.977 54.896 64.347 54.3249L66.2353 55.5482C65.8407 56.1574 65.4281 56.7538 64.9984 57.3369ZM67.3622 53.6881L65.4034 52.581C65.7373 51.9903 66.0538 51.3886 66.3524 50.7765L68.3746 51.7629C68.0561 52.416 67.7184 53.058 67.3622 53.6881ZM69.2683 49.7804L67.1899 48.9185C67.4494 48.2928 67.6906 47.6576 67.9128 47.0136L70.0397 47.7475C69.8026 48.4348 69.5452 49.1126 69.2683 49.7804ZM70.6861 45.6711L68.5185 45.068C68.6999 44.4159 68.8622 43.7559 69.0048 43.0885L71.2052 43.5586C71.053 44.2708 70.8798 44.9752 70.6861 45.6711ZM71.595 41.4182L69.3702 41.0824C69.471 40.4143 69.5523 39.7397 69.6134 39.059L71.8544 39.2602C71.7892 39.986 71.7025 40.7055 71.595 41.4182Z", fill: secondaryColor })));
};

var Icon$1Q = function (props) { return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
    React__default['default'].createElement("path", { d: "M15 12.1757C15 13.8325 13.6569 15.1757 12 15.1757C10.3431 15.1757 9 13.8325 9 12.1757C9 10.5188 10.3431 9.17566 12 9.17566C13.6569 9.17566 15 10.5188 15 12.1757Z" }),
    React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M16.83 4.17566H20C21.1 4.17566 22 5.07566 22 6.17566V18.1757C22 19.2757 21.1 20.1757 20 20.1757H4C2.9 20.1757 2 19.2757 2 18.1757V6.17566C2 5.07566 2.9 4.17566 4 4.17566H7.17L8.4 2.82566C8.78 2.41566 9.32 2.17566 9.88 2.17566H14.12C14.68 2.17566 15.22 2.41566 15.59 2.82566L16.83 4.17566ZM7 12.1757C7 14.9357 9.24 17.1757 12 17.1757C14.76 17.1757 17 14.9357 17 12.1757C17 9.41566 14.76 7.17566 12 7.17566C9.24 7.17566 7 9.41566 7 12.1757Z" }))); };

var Icon$1P = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.0967 17.8521L7.87565 20.2891C6.91907 20.8414 5.69589 20.5136 5.1436 19.557L0.999729 12.3796C0.447444 11.4231 0.775193 10.1999 1.73178 9.64759L6.31754 7C6.53486 6.87453 6.76593 6.79448 6.99977 6.75691V6C6.99977 4.89543 7.8952 4 8.99977 4H14.9998C16.1043 4 16.9998 4.89543 16.9998 6V6.73545C17.299 6.75379 17.5986 6.83993 17.8759 7L22.4616 9.64759C23.4182 10.1999 23.746 11.4231 23.1937 12.3796L19.0498 19.557C18.4975 20.5136 17.2743 20.8414 16.3178 20.2891L12.0967 17.8521ZM8.99977 6L14.9998 6L14.9998 7.98154L11.2363 14.5H8.99977L8.99977 6ZM6.99977 14.5L6.99977 8.91551L2.73178 11.3796L6.87565 18.557L10.4386 16.5H8.99977C7.8952 16.5 6.99977 15.6046 6.99977 14.5ZM16.8759 8.73205L21.4616 11.3796L17.3178 18.557L12.732 15.9094L16.8759 8.73205Z" })));
};

var Icon$1O = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M4.5 12H7.5C8.05 12 8.5 11.55 8.5 11V7C8.5 6.45 8.05 6 7.5 6H4.5C3.95 6 3.5 6.45 3.5 7V11C3.5 11.55 3.95 12 4.5 12ZM4.5 19H7.5C8.05 19 8.5 18.55 8.5 18V14C8.5 13.45 8.05 13 7.5 13H4.5C3.95 13 3.5 13.45 3.5 14V18C3.5 18.55 3.95 19 4.5 19ZM10.5 19H13.5C14.05 19 14.5 18.55 14.5 18V14C14.5 13.45 14.05 13 13.5 13H10.5C9.95 13 9.5 13.45 9.5 14V18C9.5 18.55 9.95 19 10.5 19ZM16.5 19H19.5C20.05 19 20.5 18.55 20.5 18V14C20.5 13.45 20.05 13 19.5 13H16.5C15.95 13 15.5 13.45 15.5 14V18C15.5 18.55 15.95 19 16.5 19ZM10.5 12H13.5C14.05 12 14.5 11.55 14.5 11V7C14.5 6.45 14.05 6 13.5 6H10.5C9.95 6 9.5 6.45 9.5 7V11C9.5 11.55 9.95 12 10.5 12ZM15.5 7V11C15.5 11.55 15.95 12 16.5 12H19.5C20.05 12 20.5 11.55 20.5 11V7C20.5 6.45 20.05 6 19.5 6H16.5C15.95 6 15.5 6.45 15.5 7Z" })));
};

var Icon$1N = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19Z" }),
        React__default['default'].createElement("path", { d: "M11.25 7.72H6.25V9.22H11.25V7.72Z" }),
        React__default['default'].createElement("path", { d: "M18 15.75H13V17.25H18V15.75Z" }),
        React__default['default'].createElement("path", { d: "M18 13.25H13V14.75H18V13.25Z" }),
        React__default['default'].createElement("path", { d: "M8 18H9.5V16H11.5V14.5H9.5V12.5H8V14.5H6V16H8V18Z" }),
        React__default['default'].createElement("path", { d: "M14.09 10.95L15.5 9.54L16.91 10.95L17.97 9.89L16.56 8.47L17.97 7.06L16.91 6L15.5 7.41L14.09 6L13.03 7.06L14.44 8.47L13.03 9.89L14.09 10.95Z" })));
};

var Icon$1M = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" })));
};

var Icon$1L = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M5 7C5 6.44772 4.55228 6 4 6C3.44772 6 3 6.44772 3 7V18C3 19.1046 3.89543 20 5 20H20C20.5523 20 21 19.5523 21 19C21 18.4477 20.5523 18 20 18H5V7Z" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M19 17H7C6.44772 17 6 16.5523 6 16V12C6 11.4477 6.44772 11 7 11H10V10C10 9.44772 10.4477 9 11 9H14V7C14 6.44772 14.4477 6 15 6H19C19.5523 6 20 6.44772 20 7V16C20 16.5523 19.5523 17 19 17ZM16 8H18V15H16V8ZM12 15H14V11H12V15ZM10 13H8V15H10V13Z" })));
};

var Icon$1K = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M9.00012 16.2L5.50012 12.7C5.11012 12.31 4.49012 12.31 4.10012 12.7C3.71012 13.09 3.71012 13.71 4.10012 14.1L8.29012 18.29C8.68012 18.68 9.31012 18.68 9.70012 18.29L20.3001 7.70001C20.6901 7.31001 20.6901 6.69001 20.3001 6.30001C19.9101 5.91001 19.2901 5.91001 18.9001 6.30001L9.00012 16.2Z" })));
};

var Icon$1J = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M12 2.75711C6.48 2.75711 2 7.23711 2 12.7571C2 18.2771 6.48 22.7571 12 22.7571C17.52 22.7571 22 18.2771 22 12.7571C22 7.23711 17.52 2.75711 12 2.75711ZM9.29 17.0471L5.7 13.4571C5.31 13.0671 5.31 12.4371 5.7 12.0471C6.09 11.6571 6.72 11.6571 7.11 12.0471L10 14.9271L16.88 8.04711C17.27 7.65711 17.9 7.65711 18.29 8.04711C18.68 8.43711 18.68 9.06711 18.29 9.45711L10.7 17.0471C10.32 17.4371 9.68 17.4371 9.29 17.0471Z" })));
};

var Icon$1I = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M8.11997 9.29006L12 13.1701L15.88 9.29006C16.27 8.90006 16.9 8.90006 17.29 9.29006C17.68 9.68006 17.68 10.3101 17.29 10.7001L12.7 15.2901C12.31 15.6801 11.68 15.6801 11.29 15.2901L6.69997 10.7001C6.30997 10.3101 6.30997 9.68006 6.69997 9.29006C7.08997 8.91006 7.72997 8.90006 8.11997 9.29006Z" })));
};

var Icon$1H = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M14.71 15.88L10.83 12L14.71 8.12001C15.1 7.73001 15.1 7.10001 14.71 6.71001C14.32 6.32001 13.69 6.32001 13.3 6.71001L8.70998 11.3C8.31998 11.69 8.31998 12.32 8.70998 12.71L13.3 17.3C13.69 17.69 14.32 17.69 14.71 17.3C15.09 16.91 15.1 16.27 14.71 15.88Z" })));
};

var Icon$1G = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M9.29006 15.88L13.1701 12L9.29006 8.12001C8.90006 7.73001 8.90006 7.10001 9.29006 6.71001C9.68006 6.32001 10.3101 6.32001 10.7001 6.71001L15.2901 11.3C15.6801 11.69 15.6801 12.32 15.2901 12.71L10.7001 17.3C10.3101 17.69 9.68006 17.69 9.29006 17.3C8.91006 16.91 8.90006 16.27 9.29006 15.88Z" })));
};

var Icon$1F = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M8.11997 14.7101L12 10.8301L15.88 14.7101C16.27 15.1001 16.9 15.1001 17.29 14.7101C17.68 14.3201 17.68 13.6901 17.29 13.3001L12.7 8.7101C12.31 8.3201 11.68 8.3201 11.29 8.7101L6.69997 13.3001C6.30997 13.6901 6.30997 14.3201 6.69997 14.7101C7.08997 15.0901 7.72997 15.1001 8.11997 14.7101Z" })));
};

var Icon$1E = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M18.3 5.70997C17.91 5.31997 17.28 5.31997 16.89 5.70997L12 10.59L7.10997 5.69997C6.71997 5.30997 6.08997 5.30997 5.69997 5.69997C5.30997 6.08997 5.30997 6.71997 5.69997 7.10997L10.59 12L5.69997 16.89C5.30997 17.28 5.30997 17.91 5.69997 18.3C6.08997 18.69 6.71997 18.69 7.10997 18.3L12 13.41L16.89 18.3C17.28 18.69 17.91 18.69 18.3 18.3C18.69 17.91 18.69 17.28 18.3 16.89L13.41 12L18.3 7.10997C18.68 6.72997 18.68 6.08997 18.3 5.70997Z" })));
};

var Icon$1D = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M19.43 12.98C19.47 12.66 19.5 12.34 19.5 12C19.5 11.66 19.47 11.34 19.43 11.02L21.54 9.37C21.73 9.22 21.78 8.95 21.66 8.73L19.66 5.27C19.54 5.05 19.27 4.97 19.05 5.05L16.56 6.05C16.04 5.65 15.48 5.32 14.87 5.07L14.49 2.42C14.46 2.18 14.25 2 14 2H9.99996C9.74996 2 9.53996 2.18 9.50996 2.42L9.12996 5.07C8.51996 5.32 7.95996 5.66 7.43996 6.05L4.94996 5.05C4.71996 4.96 4.45996 5.05 4.33996 5.27L2.33996 8.73C2.20996 8.95 2.26996 9.22 2.45996 9.37L4.56996 11.02C4.52996 11.34 4.49996 11.67 4.49996 12C4.49996 12.33 4.52996 12.66 4.56996 12.98L2.45996 14.63C2.26996 14.78 2.21996 15.05 2.33996 15.27L4.33996 18.73C4.45996 18.95 4.72996 19.03 4.94996 18.95L7.43996 17.95C7.95996 18.35 8.51996 18.68 9.12996 18.93L9.50996 21.58C9.53996 21.82 9.74996 22 9.99996 22H14C14.25 22 14.46 21.82 14.49 21.58L14.87 18.93C15.48 18.68 16.04 18.34 16.56 17.95L19.05 18.95C19.28 19.04 19.54 18.95 19.66 18.73L21.66 15.27C21.78 15.05 21.73 14.78 21.54 14.63L19.43 12.98ZM12 15.5C10.07 15.5 8.49996 13.93 8.49996 12C8.49996 10.07 10.07 8.5 12 8.5C13.93 8.5 15.5 10.07 15.5 12C15.5 13.93 13.93 15.5 12 15.5Z" })));
};

var Icon$1C = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 40 40" }, props),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M3.13298 26.6579C3.13253 26.6921 3.1323 26.7263 3.1323 26.7606C3.1323 30.9564 6.53367 34.3577 10.7295 34.3577C14.9253 34.3577 18.3266 30.9564 18.3266 26.7606C18.3266 26.7263 18.3264 26.6921 18.326 26.6579H14.732C14.7329 26.692 14.7333 26.7262 14.7333 26.7606C14.7333 28.9719 12.9407 30.7645 10.7294 30.7645C8.51812 30.7645 6.7255 28.9719 6.7255 26.7606C6.7255 26.7262 6.72593 26.692 6.72679 26.6579H3.13298ZM10.7295 5.71436C15.6624 5.71436 19.6613 9.71326 19.6613 14.6462C19.6613 19.5791 15.6624 23.578 10.7295 23.578C5.79663 23.578 1.79773 19.5791 1.79773 14.6462C1.79773 9.71326 5.79663 5.71436 10.7295 5.71436ZM10.7295 9.3076C13.6779 9.3076 16.0681 11.6977 16.0681 14.6461C16.0681 17.5945 13.6779 19.9847 10.7295 19.9847C7.78111 19.9847 5.39096 17.5945 5.39096 14.6461C5.39096 11.6977 7.78111 9.3076 10.7295 9.3076ZM11.3454 12.9033C12.0632 13.157 12.5775 13.8415 12.5775 14.6462C12.5775 15.6668 11.7501 16.4941 10.7295 16.4941C9.70893 16.4941 8.88157 15.6668 8.88157 14.6462C8.88157 13.8416 9.39577 13.1571 10.1135 12.9034V11.6689H11.3454V12.9033ZM22.7464 16.9552C22.154 15.8735 21.8172 14.6318 21.8172 13.3115C21.8172 9.11573 25.2186 5.71436 29.4144 5.71436C33.6102 5.71436 37.0115 9.11573 37.0115 13.3115C37.0115 14.6319 36.6747 15.8735 36.0823 16.9553C35.1444 16.216 34.0807 15.6291 32.9286 15.232C33.2408 14.6618 33.4183 14.0074 33.4183 13.3115C33.4183 11.1002 31.6257 9.30761 29.4144 9.30761C27.2031 9.30761 25.4105 11.1002 25.4105 13.3115C25.4105 14.0074 25.588 14.6618 25.9002 15.2319C24.7481 15.629 23.6844 16.2159 22.7464 16.9552ZM29.4144 34.3577C34.3473 34.3577 38.3462 30.3588 38.3462 25.4259C38.3462 20.493 34.3473 16.4941 29.4144 16.4941C24.4815 16.4941 20.4826 20.493 20.4826 25.4259C20.4826 30.3588 24.4815 34.3577 29.4144 34.3577ZM29.4144 30.7645C32.3628 30.7645 34.7529 28.3743 34.7529 25.4259C34.7529 22.4775 32.3628 20.0874 29.4144 20.0874C26.466 20.0874 24.0758 22.4775 24.0758 25.4259C24.0758 28.3743 26.466 30.7645 29.4144 30.7645ZM30.0303 27.1688C30.7481 26.9151 31.2624 26.2306 31.2624 25.4259C31.2624 24.4053 30.435 23.578 29.4144 23.578C28.3938 23.578 27.5665 24.4053 27.5665 25.4259C27.5665 26.2305 28.0807 26.915 28.7984 27.1687V28.4032H30.0303V27.1688Z", fill: "#DEAE30" })));
};

var Icon$1B = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M4 13C5.1 13 6 12.1 6 11C6 9.9 5.1 9 4 9C2.9 9 2 9.9 2 11C2 12.1 2.9 13 4 13ZM5.13 14.1C4.76 14.04 4.39 14 4 14C3.01 14 2.07 14.21 1.22 14.58C0.48 14.9 0 15.62 0 16.43V17C0 17.5523 0.447715 18 1 18H4.5V16.39C4.5 15.56 4.73 14.78 5.13 14.1ZM20 13C21.1 13 22 12.1 22 11C22 9.9 21.1 9 20 9C18.9 9 18 9.9 18 11C18 12.1 18.9 13 20 13ZM24 16.43C24 15.62 23.52 14.9 22.78 14.58C21.93 14.21 20.99 14 20 14C19.61 14 19.24 14.04 18.87 14.1C19.27 14.78 19.5 15.56 19.5 16.39V18H23C23.5523 18 24 17.5523 24 17V16.43ZM16.24 13.65C15.07 13.13 13.63 12.75 12 12.75C10.37 12.75 8.93 13.14 7.76 13.65C6.68 14.13 6 15.21 6 16.39V17C6 17.5523 6.44772 18 7 18H17C17.5523 18 18 17.5523 18 17V16.39C18 15.21 17.32 14.13 16.24 13.65ZM8.07 16C8.16 15.77 8.2 15.61 8.98 15.31C9.95 14.93 10.97 14.75 12 14.75C13.03 14.75 14.05 14.93 15.02 15.31C15.79 15.61 15.83 15.77 15.93 16H8.07ZM12 8C12.55 8 13 8.45 13 9C13 9.55 12.55 10 12 10C11.45 10 11 9.55 11 9C11 8.45 11.45 8 12 8ZM12 6C10.34 6 9 7.34 9 9C9 10.66 10.34 12 12 12C13.66 12 15 10.66 15 9C15 7.34 13.66 6 12 6Z" })));
};

var Icon$1A = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M9.43458 5.26321C9.31196 4.60661 9.81578 4 10.4837 4C11.0732 4 11.551 4.47784 11.551 5.06729V6.38309C11.6985 6.37268 11.8483 6.36735 12 6.36735C12.1458 6.36735 12.2898 6.37227 12.4316 6.38189V5.06729C12.4316 4.47784 12.9094 4 13.4989 4C14.1668 4 14.6707 4.60661 14.548 5.26321L14.2592 6.80987C15.2505 7.24263 16 7.99428 16 8.93878V9.5102C16 10.2869 15.4862 10.9372 14.7678 11.3762C14.0438 11.8186 13.0645 12.0816 12 12.0816C10.9355 12.0816 9.95615 11.8186 9.23219 11.3762C8.51384 10.9372 8 10.2869 8 9.5102V8.93878C8 7.99928 8.74184 7.25052 9.72473 6.81689L9.43458 5.26321Z" }),
        React__default['default'].createElement("path", { d: "M6 11C6 12.1 5.1 13 4 13C2.9 13 2 12.1 2 11C2 9.9 2.9 9 4 9C5.1 9 6 9.9 6 11Z" }),
        React__default['default'].createElement("path", { d: "M4 14C4.39 14 4.76 14.04 5.13 14.1C4.73 14.78 4.5 15.56 4.5 16.39V18H1C0.447715 18 0 17.5523 0 17V16.43C0 15.62 0.48 14.9 1.22 14.58C2.07 14.21 3.01 14 4 14Z" }),
        React__default['default'].createElement("path", { d: "M22 11C22 12.1 21.1 13 20 13C18.9 13 18 12.1 18 11C18 9.9 18.9 9 20 9C21.1 9 22 9.9 22 11Z" }),
        React__default['default'].createElement("path", { d: "M22.78 14.58C23.52 14.9 24 15.62 24 16.43V17C24 17.5523 23.5523 18 23 18H19.5V16.39C19.5 15.56 19.27 14.78 18.87 14.1C19.24 14.04 19.61 14 20 14C20.99 14 21.93 14.21 22.78 14.58Z" }),
        React__default['default'].createElement("path", { d: "M12 12.75C13.63 12.75 15.07 13.13 16.24 13.65C17.32 14.13 18 15.21 18 16.39V17C18 17.5523 17.5523 18 17 18H7C6.44772 18 6 17.5523 6 17V16.39C6 15.21 6.68 14.13 7.76 13.65C8.93 13.14 10.37 12.75 12 12.75Z" })));
};

var Icon$1z = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M15 1H4C2.9 1 2 1.9 2 3V16C2 16.55 2.45 17 3 17C3.55 17 4 16.55 4 16V4C4 3.45 4.45 3 5 3H15C15.55 3 16 2.55 16 2C16 1.45 15.55 1 15 1ZM19 5H8C6.9 5 6 5.9 6 7V21C6 22.1 6.9 23 8 23H19C20.1 23 21 22.1 21 21V7C21 5.9 20.1 5 19 5ZM18 21H9C8.45 21 8 20.55 8 20V8C8 7.45 8.45 7 9 7H18C18.55 7 19 7.45 19 8V20C19 20.55 18.55 21 18 21Z" })));
};

var Icon$1y = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 25 25" }, props),
        React__default['default'].createElement("path", { d: "M15.6772 2.8668C15.9878 1.97095 15.2658 1.05469 14.2495 1.05469C13.4213 1.05469 12.75 1.67612 12.75 2.4427L12.75 5.07933C12.75 5.61801 13.2217 6.05469 13.8037 6.05469C14.2615 6.05469 14.667 5.78094 14.8069 5.37734L15.6772 2.8668Z", fill: "#FFC700" }),
        React__default['default'].createElement("path", { d: "M9.32279 2.8668C9.01225 1.97095 9.73416 1.05469 10.7505 1.05469C11.5787 1.05469 12.25 1.67612 12.25 2.4427L12.25 5.07934C12.25 5.61801 11.7783 6.05469 11.1963 6.05469C10.7385 6.05469 10.333 5.78094 10.1931 5.37734L9.32279 2.8668Z", fill: "#FFC700" }),
        React__default['default'].createElement("path", { d: "M10.825 1.26941C11.1413 1.50339 10.6373 1.71436 10.293 2.17982C9.94869 2.64527 9.89449 3.18896 9.57817 2.95498C9.26185 2.72101 9.32403 2.18322 9.66832 1.71776C10.0126 1.2523 10.5086 1.03544 10.825 1.26941Z", fill: "#FFD800" }),
        React__default['default'].createElement("path", { d: "M14.6507 1.39423C14.8957 1.70211 14.3543 1.77544 13.9012 2.13593C13.4482 2.49642 13.2551 3.00755 13.0102 2.69968C12.7652 2.3918 12.9644 1.88843 13.4174 1.52794C13.8705 1.16746 14.4057 1.08636 14.6507 1.39423Z", fill: "#FFD800" }),
        React__default['default'].createElement("path", { d: "M10.3026 1.54788C10.4525 1.65871 10.1853 1.79706 9.98717 2.06492C9.78903 2.33278 9.73495 2.62873 9.58511 2.51789C9.43528 2.40706 9.49314 2.11391 9.69127 1.84605C9.88941 1.57819 10.1528 1.43705 10.3026 1.54788Z", fill: "#FEED8D" }),
        React__default['default'].createElement("path", { d: "M14.0738 1.5278C14.1899 1.67363 13.896 1.73812 13.6353 1.94557C13.3746 2.15302 13.2458 2.42489 13.1297 2.27905C13.0137 2.13322 13.1454 1.86503 13.4061 1.65758C13.6668 1.45012 13.9578 1.38196 14.0738 1.5278Z", fill: "#FEED8D" }),
        React__default['default'].createElement("path", { d: "M13.406 5.80534C13.1769 5.64322 13.6402 5.49916 14.0299 5.10944C14.4196 4.71971 14.4298 4.07338 14.6827 4.32626C14.9356 4.57915 14.7916 5.0668 14.4019 5.45652C14.0122 5.84624 13.6351 5.96747 13.406 5.80534Z", fill: "#FFAF00" }),
        React__default['default'].createElement("path", { d: "M10.6248 5.80534C10.3957 5.64322 10.8589 5.49916 11.2486 5.10944C11.6383 4.71971 11.6486 4.07338 11.9015 4.32626C12.1543 4.57915 12.0103 5.0668 11.6206 5.45652C11.2309 5.84624 10.8538 5.96747 10.6248 5.80534Z", fill: "#FFAF00" }),
        React__default['default'].createElement("path", { d: "M13.9914 10.3006C12.9839 8.40915 12.4375 6.30469 12.4375 6.30469C12.4375 6.30469 11.9087 8.34165 10.9321 10.2086C10.6414 11.6927 9.56271 12.9024 8.10162 13.3682C6.2379 13.9624 4.40451 13.1384 3.73966 11.239C3.00517 10.5247 2.41808 9.75079 2.125 9.15553V10.3668C2.125 14.1503 3.02673 17.8564 4.72554 21.0547H20.1495C21.8483 17.8564 22.75 14.1503 22.75 10.3668V9.15553C22.4628 9.73876 21.8934 10.4935 21.1797 11.1956C20.5277 13.1259 18.6807 13.967 16.8028 13.3682C15.372 12.912 14.3079 11.7426 13.9914 10.3006Z", fill: "#FFC700" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.7881 7.51367C13.0461 8.29103 13.4582 9.39262 14.0101 10.4296C14.2401 11.4788 14.8691 12.3823 15.7478 12.9675L14.8711 21.0453L12.4716 21.026L6.31499 21.0756C5.03757 17.5852 4.57523 15.3977 4.04834 11.8082C4.82141 13.3685 6.48748 14.0096 8.17878 13.4698C9.62537 13.0081 10.6933 11.8093 10.9812 10.3385C11.509 9.3285 11.9046 8.26831 12.1552 7.51367H12.7881Z", fill: "#FFD800" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M11.335 21.0354L10.6112 11.4121C10.1532 12.3105 9.37201 13.0219 8.40008 13.3927C8.66771 15.748 9.05381 17.902 9.86757 21.0472L11.335 21.0354ZM8.91436 21.0549C8.26697 18.1715 7.86567 16.0604 7.58788 13.6114C6.85387 13.7286 6.14425 13.6244 5.53223 13.3211C5.85194 15.8033 6.40755 18.9391 7.32573 21.0677L8.91436 21.0549Z", fill: "#FFE971" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M11.1731 9.68799C11.1115 9.81472 11.0477 9.94136 10.982 10.0672C10.6941 11.538 9.62616 12.7368 8.17957 13.1985C6.33435 13.7874 4.51917 12.9708 3.86091 11.0883C3.82538 11.0537 3.79019 11.019 3.75537 10.9842C3.76298 11.1884 3.78916 11.3929 3.8348 11.5958C4.24757 13.4306 6.09537 14.4351 8.21827 13.7576C10.1825 13.1307 11.3382 11.3971 11.1731 9.68799Z", fill: "#FFE971" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M13.8289 9.68799C13.8905 9.81475 13.9542 9.94142 14.02 10.0673C14.3079 11.5381 15.3758 12.7369 16.8224 13.1986C18.6677 13.7875 20.4828 12.9709 21.1411 11.0884C21.1766 11.0538 21.2118 11.0191 21.2466 10.9843C21.239 11.1885 21.2128 11.393 21.1672 11.5959C20.7544 13.4308 18.9066 14.4353 16.7837 13.7578C14.8194 13.1309 13.6636 11.3971 13.8289 9.68799Z", fill: "#FFD800" }),
        React__default['default'].createElement("path", { d: "M16.25 7.99219C16.25 9.80885 14.5431 11.0547 12.4375 11.0547C10.3319 11.0547 8.625 9.80885 8.625 7.99219C8.625 6.17553 10.3319 4.92969 12.4375 4.92969C14.5431 4.92969 16.25 6.17553 16.25 7.99219Z", fill: "#FFC700" }),
        React__default['default'].createElement("path", { d: "M14.5349 6.09354C14.807 7.1091 13.4021 6.71163 11.9077 7.11205C10.4134 7.51246 9.39541 8.55914 9.12329 7.54357C8.85117 6.52801 9.87598 5.50694 11.3704 5.10652C12.8647 4.70611 14.2628 5.07797 14.5349 6.09354Z", fill: "#FFD800" }),
        React__default['default'].createElement("path", { d: "M11.0893 10.2853C10.7875 9.70556 11.9478 9.89409 13.237 9.49295C14.5262 9.09181 15.3014 7.75528 15.5484 8.54928C15.7955 9.34329 14.9187 10.2079 13.6295 10.609C12.3403 11.0102 11.3911 10.865 11.0893 10.2853Z", fill: "#FFAF00" }),
        React__default['default'].createElement("path", { d: "M12.979 5.80657C13.1079 6.28763 12.3191 6.1324 11.4591 6.36283C10.5992 6.59326 9.99366 7.1221 9.86476 6.64104C9.73586 6.15998 10.3446 5.64328 11.2046 5.41284C12.0646 5.18241 12.8501 5.32552 12.979 5.80657Z", fill: "#FEED8D" }),
        React__default['default'].createElement("path", { d: "M11.7222 8.09327C11.7222 8.76484 11.4227 9.01955 11.0533 9.01955C10.6838 9.01955 10.3843 8.76484 10.3843 8.09327C10.3843 7.4217 10.6838 7.16699 11.0533 7.16699C11.4227 7.16699 11.7222 7.4217 11.7222 8.09327Z", fill: "#FEED8D" }),
        React__default['default'].createElement("path", { d: "M11.7222 7.94581C11.7222 8.61738 11.4227 8.87209 11.0533 8.87209C10.6838 8.87209 10.3843 8.61738 10.3843 7.94581C10.3843 7.27424 10.6838 7.01953 11.0533 7.01953C11.4227 7.01953 11.7222 7.27424 11.7222 7.94581Z", fill: "#CC240E" }),
        React__default['default'].createElement("path", { d: "M11.4119 7.41061C11.4587 7.67736 11.217 7.57296 10.9599 7.67813C10.7028 7.78331 10.5276 8.05822 10.4808 7.79148C10.434 7.52473 10.6103 7.25654 10.8674 7.15136C11.1245 7.04619 11.3651 7.14386 11.4119 7.41061Z", fill: "#FA7048" }),
        React__default['default'].createElement("path", { d: "M10.796 8.61486C10.7456 8.421 10.9921 8.50242 11.2088 8.3668C11.4256 8.23119 11.5783 7.83458 11.6194 8.10027C11.6605 8.36596 11.4909 8.60461 11.2742 8.74023C11.0575 8.87584 10.8465 8.80873 10.796 8.61486Z", fill: "#9F0400" }),
        React__default['default'].createElement("path", { d: "M14.1924 8.09327C14.1924 8.76484 13.8929 9.01955 13.5235 9.01955C13.154 9.01955 12.8545 8.76484 12.8545 8.09327C12.8545 7.4217 13.154 7.16699 13.5235 7.16699C13.8929 7.16699 14.1924 7.4217 14.1924 8.09327Z", fill: "#FEED8D" }),
        React__default['default'].createElement("path", { d: "M14.1924 7.94581C14.1924 8.61738 13.8929 8.87209 13.5235 8.87209C13.154 8.87209 12.8545 8.61738 12.8545 7.94581C12.8545 7.27424 13.154 7.01953 13.5235 7.01953C13.8929 7.01953 14.1924 7.27424 14.1924 7.94581Z", fill: "#CC240E" }),
        React__default['default'].createElement("path", { d: "M13.8821 7.41061C13.9289 7.67736 13.6872 7.57296 13.4301 7.67813C13.173 7.78331 12.9978 8.05822 12.951 7.79148C12.9042 7.52473 13.0805 7.25654 13.3376 7.15136C13.5947 7.04619 13.8353 7.14386 13.8821 7.41061Z", fill: "#FA7048" }),
        React__default['default'].createElement("path", { d: "M13.2663 8.61486C13.2158 8.421 13.4623 8.50242 13.6791 8.3668C13.8958 8.23119 14.0485 7.83458 14.0896 8.10027C14.1307 8.36596 13.9612 8.60461 13.7444 8.74023C13.5277 8.87584 13.3167 8.80873 13.2663 8.61486Z", fill: "#9F0400" }),
        React__default['default'].createElement("path", { d: "M24.3751 9.78352C24.3751 10.8765 23.4126 11.6261 22.2254 11.6261C21.0381 11.6261 20.0757 10.8765 20.0757 9.78352C20.0757 8.6905 21.0381 7.94092 22.2254 7.94092C23.4126 7.94092 24.3751 8.6905 24.3751 9.78352Z", fill: "#FFC700" }),
        React__default['default'].createElement("path", { d: "M23.4327 8.66844C23.5873 9.24565 22.7888 9.01974 21.9395 9.24732C21.0902 9.47491 20.5116 10.0698 20.3569 9.49259C20.2023 8.91538 20.7847 8.33504 21.6341 8.10746C22.4834 7.87987 23.278 8.09123 23.4327 8.66844Z", fill: "#FFD800" }),
        React__default['default'].createElement("path", { d: "M21.468 11.1604C21.2965 10.8309 21.956 10.938 22.6887 10.7101C23.4214 10.4821 23.862 9.72242 24.0024 10.1737C24.1429 10.625 23.6445 11.1164 22.9118 11.3444C22.179 11.5724 21.6396 11.4899 21.468 11.1604Z", fill: "#FFAF00" }),
        React__default['default'].createElement("path", { d: "M22.5483 8.5052C22.6216 8.77861 22.1733 8.69038 21.6845 8.82135C21.1957 8.95232 20.8516 9.2529 20.7783 8.97948C20.705 8.70606 21.051 8.41238 21.5398 8.28141C22.0286 8.15044 22.4751 8.23178 22.5483 8.5052Z", fill: "#FEED8D" }),
        React__default['default'].createElement("path", { d: "M4.92439 9.78352C4.92439 10.8765 3.96194 11.6261 2.7747 11.6261C1.58745 11.6261 0.625 10.8765 0.625 9.78352C0.625 8.6905 1.58745 7.94092 2.7747 7.94092C3.96194 7.94092 4.92439 8.6905 4.92439 9.78352Z", fill: "#FFC700" }),
        React__default['default'].createElement("path", { d: "M3.982 8.66844C4.13667 9.24565 3.33817 9.01974 2.48882 9.24732C1.63947 9.47491 1.0609 10.0698 0.906238 9.49259C0.751574 8.91538 1.33404 8.33504 2.18339 8.10746C3.03274 7.87987 3.82734 8.09123 3.982 8.66844Z", fill: "#FFD800" }),
        React__default['default'].createElement("path", { d: "M2.01735 11.1604C1.8458 10.8309 2.5053 10.938 3.23802 10.7101C3.97074 10.4821 4.41134 9.72242 4.55176 10.1737C4.69218 10.625 4.19381 11.1164 3.46109 11.3444C2.72837 11.5724 2.1889 11.4899 2.01735 11.1604Z", fill: "#FFAF00" }),
        React__default['default'].createElement("path", { d: "M3.09716 8.5052C3.17042 8.77861 2.72209 8.69038 2.23331 8.82135C1.74453 8.95232 1.40038 9.2529 1.32712 8.97948C1.25386 8.70606 1.59985 8.41238 2.08863 8.28141C2.57742 8.15044 3.0239 8.23178 3.09716 8.5052Z", fill: "#FEED8D" }),
        React__default['default'].createElement("path", { d: "M21 21.4833C21 22.5878 20.7489 23.0547 12.4375 23.0547C4.12611 23.0547 3.875 22.5878 3.875 21.4833C3.875 20.3787 4.12611 20.3047 12.4375 20.3047C20.7489 20.3047 21 20.3787 21 21.4833Z", fill: "#D8D8D8" }),
        React__default['default'].createElement("path", { d: "M14.6123 21.583C14.5965 22.6393 13.9077 22.7662 9.15269 22.6767C5.64021 22.6106 4.71703 22.5202 4.72814 21.7777C4.73925 21.0352 5.09021 20.7512 9.18036 20.8281C13.9354 20.9176 14.6234 20.8405 14.6123 21.583Z", fill: "#EFF3F5" }),
        React__default['default'].createElement("path", { d: "M5.36878 22.06C5.19105 21.8607 5.32313 21.5819 5.55794 21.3186C5.79275 21.0553 6.04136 20.9072 6.21909 21.1065C6.39682 21.3058 6.26473 21.5845 6.02992 21.8478C5.79512 22.1111 5.54651 22.2593 5.36878 22.06Z", fill: "#7D7D7D" }),
        React__default['default'].createElement("path", { d: "M5.33188 22.0183C5.18225 21.8505 5.32355 21.5821 5.55836 21.3188C5.79317 21.0555 6.03256 20.897 6.18219 21.0648C6.33181 21.2326 6.19051 21.501 5.9557 21.7644C5.7209 22.0277 5.4815 22.1861 5.33188 22.0183Z", fill: "#373333" }),
        React__default['default'].createElement("path", { d: "M19.1715 22.06C18.9938 21.8607 19.1259 21.5819 19.3607 21.3186C19.5955 21.0553 19.8441 20.9072 20.0218 21.1065C20.1995 21.3058 20.0675 21.5845 19.8327 21.8478C19.5978 22.1111 19.3492 22.2593 19.1715 22.06Z", fill: "#7D7D7D" }),
        React__default['default'].createElement("path", { d: "M19.1374 22.0217C18.9855 21.8514 19.1261 21.5821 19.3609 21.3188C19.5957 21.0555 19.8358 20.8979 19.9877 21.0682C20.1397 21.2386 19.9991 21.5079 19.7643 21.7712C19.5295 22.0345 19.2893 22.1921 19.1374 22.0217Z", fill: "#373333" }),
        React__default['default'].createElement("path", { d: "M8.71657 22.2374C8.50579 22.001 8.66243 21.6704 8.94091 21.3581C9.21938 21.0459 9.51422 20.8702 9.725 21.1066C9.93579 21.3429 9.77914 21.6736 9.50066 21.9858C9.22219 22.2981 8.92735 22.4738 8.71657 22.2374Z", fill: "#7D7D7D" }),
        React__default['default'].createElement("path", { d: "M8.65967 22.1742C8.49136 21.9854 8.66193 21.6704 8.9404 21.3581C9.21887 21.0459 9.4998 20.8546 9.66811 21.0433C9.83643 21.2321 9.66585 21.5471 9.38738 21.8594C9.10891 22.1716 8.82799 22.3629 8.65967 22.1742Z", fill: "#373333" }),
        React__default['default'].createElement("path", { d: "M15.8196 22.2374C15.6088 22.001 15.7655 21.6704 16.0439 21.3581C16.3224 21.0459 16.6172 20.8702 16.828 21.1066C17.0388 21.3429 16.8822 21.6736 16.6037 21.9858C16.3252 22.2981 16.0304 22.4738 15.8196 22.2374Z", fill: "#7D7D7D" }),
        React__default['default'].createElement("path", { d: "M15.7716 22.1835C15.597 21.9878 15.7656 21.6705 16.0441 21.3582C16.3225 21.0459 16.6055 20.857 16.78 21.0527C16.9545 21.2483 16.786 21.5656 16.5075 21.8779C16.229 22.1902 15.9461 22.3792 15.7716 22.1835Z", fill: "#373333" }),
        React__default['default'].createElement("path", { d: "M12.1406 22.3976C11.8957 22.1229 12.0777 21.7387 12.4013 21.3759C12.7249 21.013 13.0675 20.8089 13.3125 21.0835C13.5574 21.3582 13.3754 21.7424 13.0518 22.1053C12.7282 22.4681 12.3856 22.6723 12.1406 22.3976Z", fill: "#7D7D7D" }),
        React__default['default'].createElement("path", { d: "M12.0921 22.3438C11.8835 22.1098 12.0775 21.7389 12.401 21.3761C12.7246 21.0132 13.0554 20.7957 13.264 21.0297C13.4726 21.2636 13.2787 21.6345 12.9551 21.9974C12.6315 22.3602 12.3008 22.5777 12.0921 22.3438Z", fill: "#373333" }),
        React__default['default'].createElement("path", { d: "M12.0489 13.7369C12.2981 13.494 12.7019 13.494 12.9511 13.7369L14.8132 15.5524C15.0623 15.7953 15.0623 16.1891 14.8132 16.432L12.9511 18.2475C12.7019 18.4904 12.2981 18.4904 12.0489 18.2475L10.1868 16.432C9.93772 16.1891 9.93772 15.7953 10.1868 15.5524L12.0489 13.7369Z", fill: "#FFE971" }),
        React__default['default'].createElement("path", { d: "M12.4726 13.2256V15.5732H10.125C10.125 15.4162 10.1849 15.2593 10.3046 15.1396L12.039 13.4052C12.1587 13.2855 12.3157 13.2256 12.4726 13.2256Z", fill: "#FA7048" }),
        React__default['default'].createElement("path", { d: "M12.4726 17.9209V15.5733H10.125C10.125 15.7302 10.1849 15.8872 10.3046 16.0069L12.039 17.7413C12.1587 17.861 12.3157 17.9209 12.4726 17.9209Z", fill: "#CC240E" }),
        React__default['default'].createElement("path", { d: "M12.4727 13.2256V15.5732H14.8203C14.8203 15.4162 14.7604 15.2593 14.6407 15.1396L12.9063 13.4052C12.7866 13.2855 12.6296 13.2256 12.4727 13.2256Z", fill: "#CC240E" }),
        React__default['default'].createElement("path", { d: "M12.4727 17.9209V15.5733H14.8203C14.8203 15.7302 14.7604 15.8872 14.6407 16.0069L12.9063 17.7413C12.7866 17.861 12.6296 17.9209 12.4727 17.9209Z", fill: "#9F0400" }),
        React__default['default'].createElement("path", { d: "M18.6595 15.807C18.7972 15.6548 19.0203 15.6548 19.158 15.807L20.1869 16.9442C20.3246 17.0964 20.3246 17.343 20.1869 17.4952L19.158 18.6324C19.0203 18.7846 18.7972 18.7846 18.6595 18.6324L17.6306 17.4952C17.4929 17.343 17.4929 17.0964 17.6306 16.9442L18.6595 15.807Z", fill: "#FFE971" }),
        React__default['default'].createElement("path", { d: "M18.9132 15.5596V16.9244H17.5483C17.5483 16.8332 17.5831 16.742 17.6528 16.6724L18.6611 15.664C18.7307 15.5944 18.822 15.5596 18.9132 15.5596Z", fill: "#FA7048" }),
        React__default['default'].createElement("path", { d: "M18.9132 18.2896V16.9247H17.5483C17.5483 17.0159 17.5831 17.1072 17.6528 17.1768L18.6611 18.1851C18.7307 18.2547 18.822 18.2896 18.9132 18.2896Z", fill: "#CC240E" }),
        React__default['default'].createElement("path", { d: "M18.9134 15.5596V16.9245H20.2783C20.2783 16.8332 20.2435 16.742 20.1739 16.6724L19.1655 15.664C19.0959 15.5944 19.0047 15.5596 18.9134 15.5596Z", fill: "#CC240E" }),
        React__default['default'].createElement("path", { d: "M18.9134 18.2896V16.9247H20.2783C20.2783 17.0159 20.2435 17.1072 20.1739 17.1768L19.1655 18.1851C19.0959 18.2547 19.0047 18.2896 18.9134 18.2896Z", fill: "#9F0400" }),
        React__default['default'].createElement("path", { d: "M5.64194 15.807C5.77959 15.6548 6.00277 15.6548 6.14042 15.807L7.16936 16.9442C7.30701 17.0964 7.30701 17.343 7.16936 17.4952L6.14042 18.6324C6.00277 18.7846 5.77959 18.7846 5.64194 18.6324L4.613 17.4952C4.47535 17.343 4.47535 17.0964 4.613 16.9442L5.64194 15.807Z", fill: "#FFE971" }),
        React__default['default'].createElement("path", { d: "M5.90931 15.5596V16.9245H4.54443C4.54443 16.8332 4.57924 16.742 4.64885 16.6724L5.65722 15.664C5.72683 15.5944 5.81807 15.5596 5.90931 15.5596Z", fill: "#FA7048" }),
        React__default['default'].createElement("path", { d: "M5.90931 18.2896V16.9247H4.54443C4.54443 17.0159 4.57924 17.1072 4.64885 17.1768L5.65722 18.1851C5.72683 18.2547 5.81807 18.2896 5.90931 18.2896Z", fill: "#CC240E" }),
        React__default['default'].createElement("path", { d: "M5.90905 15.5596V16.9245H7.27393C7.27393 16.8332 7.23912 16.742 7.16951 16.6724L6.16114 15.664C6.09153 15.5944 6.00029 15.5596 5.90905 15.5596Z", fill: "#CC240E" }),
        React__default['default'].createElement("path", { d: "M5.90905 18.2896V16.9247H7.27393C7.27393 17.0159 7.23912 17.1072 7.16951 17.1768L6.16114 18.1851C6.09153 18.2547 6.00029 18.2896 5.90905 18.2896Z", fill: "#9F0400" })));
};

var Icon$1x = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M13 7C13 6.44772 12.5523 6 12 6C11.4478 6 11 6.44772 11 7V7.51206C9.97631 7.76875 9.16137 8.59434 8.94664 9.66796C8.60189 11.3917 9.92035 13 11.6783 13H12.7143C13.1483 13 13.5 13.3518 13.5 13.7857C13.5 14.2197 13.1483 14.5714 12.7143 14.5714H11.4947C11.3096 14.5714 11.1282 14.5201 10.9706 14.4231L10.5241 14.1483C10.0538 13.8589 9.43783 14.0055 9.14838 14.4759C8.85893 14.9463 9.00559 15.5622 9.47594 15.8517L9.92241 16.1264C10.2535 16.3302 10.6197 16.4668 11 16.5304V17C11 17.5523 11.4478 18 12 18C12.5523 18 13 17.5523 13 17V16.557C14.4043 16.4139 15.5 15.2278 15.5 13.7857C15.5 12.2472 14.2528 11 12.7143 11H11.6783C11.1824 11 10.8106 10.5464 10.9078 10.0602C10.9813 9.69293 11.3037 9.42857 11.6783 9.42857H12.2948C12.5269 9.42857 12.7494 9.52076 12.9135 9.68485L13.0786 9.84996C13.4692 10.2405 14.1023 10.2405 14.4929 9.84996C14.8834 9.45944 14.8834 8.82627 14.4929 8.43575L14.3278 8.27064C13.9582 7.90106 13.4983 7.64249 13 7.5164V7Z" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12ZM4 12C4 16.41 7.59 20 12 20C16.41 20 20 16.41 20 12C20 7.59 16.41 4 12 4C7.59 4 4 7.59 4 12Z" })));
};

var Icon$1w = function (props) { return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
    React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M11.4063 19.9329C12.066 19.9329 12.6742 19.779 13.207 19.5106V21.6632C12.6449 21.8378 12.0415 21.9329 11.4063 21.9329H7.00792C2.52538 21.9329 -0.374267 17.1964 1.66429 13.2043L3.70684 9.20426C4.30576 8.03138 5.25922 7.11243 6.39803 6.55101L5.46396 4.68288C5.08785 3.93066 5.54693 3.02913 6.3765 2.89087L11.6153 2.01773C12.5647 1.8595 13.3292 2.78847 12.9912 3.68962L11.9333 6.51092C13.1087 7.06815 14.094 8.00302 14.7074 9.20426L16.6114 12.9329H14.3657L12.9261 10.1138C12.2427 8.77534 10.8666 7.93292 9.36372 7.93292H9.05047C7.54759 7.93292 6.17153 8.77534 5.48805 10.1138L3.4455 14.1138C2.08646 16.7753 4.01956 19.9329 7.00792 19.9329H11.4063ZM10.6623 4.20415L7.70695 4.69671L8.32504 5.93291H10.014L10.6623 4.20415Z" }),
    React__default['default'].createElement("path", { d: "M14.707 13.9329C14.4309 13.9329 14.207 14.1568 14.207 14.4329V15.4329C14.207 15.7091 14.4309 15.9329 14.707 15.9329H20.707C20.9832 15.9329 21.207 15.7091 21.207 15.4329V14.4329C21.207 14.1568 20.9832 13.9329 20.707 13.9329H14.707Z" }),
    React__default['default'].createElement("path", { d: "M15.207 17.4329C15.207 17.1568 15.4309 16.9329 15.707 16.9329H21.707C21.9832 16.9329 22.207 17.1568 22.207 17.4329V18.4329C22.207 18.7091 21.9832 18.9329 21.707 18.9329H15.707C15.4309 18.9329 15.207 18.7091 15.207 18.4329V17.4329Z" }),
    React__default['default'].createElement("path", { d: "M14.707 19.9329C14.4309 19.9329 14.207 20.1568 14.207 20.4329V21.4329C14.207 21.7091 14.4309 21.9329 14.707 21.9329L20.707 21.9329C20.9832 21.9329 21.207 21.7091 21.207 21.4329V20.4329C21.207 20.1568 20.9832 19.9329 20.707 19.9329L14.707 19.9329Z" }),
    React__default['default'].createElement("path", { d: "M9.9212 9.93292C9.9212 9.51871 9.58541 9.18292 9.1712 9.18292C8.75699 9.18292 8.4212 9.51871 8.4212 9.93292V10.2471C7.4372 10.4874 6.70692 11.3749 6.70692 12.4329C6.70692 13.6756 7.71427 14.6829 8.95691 14.6829H9.64423C10.0043 14.6829 10.3136 14.9388 10.381 15.2926C10.469 15.7548 10.1147 16.1829 9.64423 16.1829H8.89883C8.62969 16.1829 8.38118 16.0387 8.24765 15.805L8.1081 15.5608C7.90259 15.2012 7.44445 15.0762 7.08481 15.2817C6.72517 15.4872 6.60023 15.9454 6.80573 16.305L6.94528 16.5492C7.26526 17.1092 7.80531 17.4979 8.4212 17.6317V17.9329C8.4212 18.3471 8.75699 18.6829 9.1712 18.6829C9.58541 18.6829 9.9212 18.3471 9.9212 17.9329V17.6662C11.1913 17.5114 12.101 16.3061 11.8545 15.0119C11.6524 13.9507 10.7245 13.1829 9.64423 13.1829H8.95691C8.5427 13.1829 8.20692 12.8471 8.20692 12.4329C8.20692 12.0187 8.5427 11.6829 8.95691 11.6829H9.44357C9.71272 11.6829 9.96123 11.8271 10.0948 12.0608L10.2343 12.305C10.4398 12.6647 10.898 12.7896 11.2576 12.5841C11.6172 12.3786 11.7422 11.9205 11.5367 11.5608L11.3971 11.3166C11.0771 10.7566 10.5371 10.3679 9.9212 10.2341V9.93292Z" }))); };

var Icon$1v = function (props) { return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
    React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M13.207 19.4326C13.207 18.8803 13.6547 18.4326 14.207 18.4326V16.4326C13.6547 16.4326 13.207 15.9849 13.207 15.4326V13.4326C13.207 12.8803 13.6547 12.4326 14.207 12.4326H16.6114L14.7074 8.70395C14.0154 7.34887 12.8502 6.33275 11.4726 5.81533L12.5232 3.01377C12.726 2.47308 12.2673 1.9157 11.6977 2.01064L6.45885 2.88377C5.96111 2.96673 5.68566 3.50765 5.91133 3.95898L6.85595 5.84823C5.51579 6.37512 4.38442 7.37702 3.70684 8.70395L1.66429 12.704C-0.374266 16.6961 2.52538 21.4326 7.00792 21.4326H11.4063C12.0415 21.4326 12.6449 21.3375 13.207 21.1629V19.4326ZM9.17123 8.68262C9.58544 8.68262 9.92123 9.0184 9.92123 9.43262V9.73384C10.5371 9.86761 11.0772 10.2563 11.3971 10.8163L11.5367 11.0605C11.7422 11.4202 11.6173 11.8783 11.2576 12.0838C10.898 12.2893 10.4398 12.1644 10.2343 11.8047L10.0948 11.5605C9.96125 11.3268 9.71274 11.1826 9.4436 11.1826H8.95694C8.54273 11.1826 8.20694 11.5184 8.20694 11.9326C8.20694 12.3468 8.54273 12.6826 8.95694 12.6826H9.64426C10.7246 12.6826 11.6524 13.4504 11.8545 14.5116C12.101 15.8058 11.1913 17.0111 9.92123 17.1659V17.4326C9.92123 17.8468 9.58544 18.1826 9.17123 18.1826C8.75701 18.1826 8.42123 17.8468 8.42123 17.4326V17.1314C7.80534 16.9976 7.26529 16.6089 6.94531 16.0489L6.80576 15.8047C6.60025 15.4451 6.7252 14.9869 7.08484 14.7814C7.44448 14.5759 7.90262 14.7009 8.10812 15.0605L8.24767 15.3047C8.3812 15.5384 8.62971 15.6826 8.89885 15.6826H9.64426C10.1147 15.6826 10.469 15.2545 10.381 14.7923C10.3136 14.4385 10.0044 14.1826 9.64426 14.1826H8.95694C7.7143 14.1826 6.70694 13.1753 6.70694 11.9326C6.70694 10.8746 7.43722 9.98712 8.42123 9.74678V9.43262C8.42123 9.0184 8.75701 8.68262 9.17123 8.68262Z" }),
    React__default['default'].createElement("path", { d: "M15.7071 16.4326C15.4309 16.4326 15.2071 16.6565 15.2071 16.9326V17.9326C15.2071 18.2088 15.4309 18.4326 15.7071 18.4326H21.7071C21.9832 18.4326 22.2071 18.2088 22.2071 17.9326V16.9326C22.2071 16.6565 21.9832 16.4326 21.7071 16.4326H15.7071Z" }),
    React__default['default'].createElement("path", { d: "M14.7071 13.4326C14.4309 13.4326 14.2071 13.6565 14.2071 13.9326V14.9326C14.2071 15.2088 14.4309 15.4326 14.7071 15.4326H20.7071C20.9832 15.4326 21.2071 15.2088 21.2071 14.9326V13.9326C21.2071 13.6565 20.9832 13.4326 20.7071 13.4326H14.7071Z" }),
    React__default['default'].createElement("path", { d: "M14.7071 19.4326C14.4309 19.4326 14.2071 19.6565 14.2071 19.9326V20.9326C14.2071 21.2088 14.4309 21.4326 14.7071 21.4326L20.7071 21.4326C20.9832 21.4326 21.2071 21.2088 21.2071 20.9326V19.9326C21.2071 19.6565 20.9832 19.4326 20.7071 19.4326L14.7071 19.4326Z" }))); };

var Icon$1u = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 16 5" }, props),
        React__default['default'].createElement("path", { d: "M2 0.00384521C0.9 0.00384521 0 0.903845 0 2.00384C0 3.10384 0.9 4.00384 2 4.00384C3.1 4.00384 4 3.10384 4 2.00384C4 0.903845 3.1 0.00384521 2 0.00384521ZM14 0.00384521C12.9 0.00384521 12 0.903845 12 2.00384C12 3.10384 12.9 4.00384 14 4.00384C15.1 4.00384 16 3.10384 16 2.00384C16 0.903845 15.1 0.00384521 14 0.00384521ZM8 0.00384521C6.9 0.00384521 6 0.903845 6 2.00384C6 3.10384 6.9 4.00384 8 4.00384C9.1 4.00384 10 3.10384 10 2.00384C10 0.903845 9.1 0.00384521 8 0.00384521Z" })));
};

var Icon$1t = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM11 16H13V18H11V16ZM12.61 6.04C10.55 5.74 8.73 7.01 8.18 8.83C8 9.41 8.44 10 9.05 10H9.25C9.66 10 9.99 9.71 10.13 9.33C10.45 8.44 11.4 7.83 12.43 8.05C13.38 8.25 14.08 9.18 14 10.15C13.9 11.49 12.38 11.78 11.55 13.03C11.55 13.04 11.54 13.04 11.54 13.05C11.53 13.07 11.52 13.08 11.51 13.1C11.42 13.25 11.33 13.42 11.26 13.6C11.25 13.63 11.23 13.65 11.22 13.68C11.21 13.7 11.21 13.72 11.2 13.75C11.08 14.09 11 14.5 11 15H13C13 14.58 13.11 14.23 13.28 13.93C13.3 13.9 13.31 13.87 13.33 13.84C13.41 13.7 13.51 13.57 13.61 13.45C13.62 13.44 13.63 13.42 13.64 13.41C13.74 13.29 13.85 13.18 13.97 13.07C14.93 12.16 16.23 11.42 15.96 9.51C15.72 7.77 14.35 6.3 12.61 6.04Z" })));
};

var Icon$1s = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M13 3C8.03 3 4 7.03 4 12H2.20711C1.76165 12 1.53857 12.5386 1.85355 12.8536L4.54604 15.546C4.73751 15.7375 5.04662 15.7418 5.24329 15.5556L8.08805 12.8631C8.4164 12.5524 8.19646 12 7.74435 12H6C6 8.13 9.13 5 13 5C16.87 5 20 8.13 20 12C20 15.87 16.87 19 13 19C11.4314 19 9.98175 18.4782 8.81739 17.601C8.37411 17.267 7.74104 17.259 7.3486 17.6514C6.95725 18.0428 6.95413 18.6823 7.38598 19.0284C8.92448 20.2615 10.8708 21 13 21C17.97 21 22 16.97 22 12C22 7.03 17.97 3 13 3ZM12 8V13L16.28 15.54L17 14.33L13.5 12.25V8H12Z" })));
};

var Icon$1r = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM18.92 8H15.97C15.65 6.75 15.19 5.55 14.59 4.44C16.43 5.07 17.96 6.35 18.92 8ZM12 4.04C12.83 5.24 13.48 6.57 13.91 8H10.09C10.52 6.57 11.17 5.24 12 4.04ZM4.26 14C4.1 13.36 4 12.69 4 12C4 11.31 4.1 10.64 4.26 10H7.64C7.56 10.66 7.5 11.32 7.5 12C7.5 12.68 7.56 13.34 7.64 14H4.26ZM5.08 16H8.03C8.35 17.25 8.81 18.45 9.41 19.56C7.57 18.93 6.04 17.66 5.08 16ZM8.03 8H5.08C6.04 6.34 7.57 5.07 9.41 4.44C8.81 5.55 8.35 6.75 8.03 8ZM12 19.96C11.17 18.76 10.52 17.43 10.09 16H13.91C13.48 17.43 12.83 18.76 12 19.96ZM14.34 14H9.66C9.57 13.34 9.5 12.68 9.5 12C9.5 11.32 9.57 10.65 9.66 10H14.34C14.43 10.65 14.5 11.32 14.5 12C14.5 12.68 14.43 13.34 14.34 14ZM14.59 19.56C15.19 18.45 15.65 17.25 15.97 16H18.92C17.96 17.65 16.43 18.93 14.59 19.56ZM16.36 14C16.44 13.34 16.5 12.68 16.5 12C16.5 11.32 16.44 10.66 16.36 10H19.74C19.9 10.64 20 11.31 20 12C20 12.69 19.9 13.36 19.74 14H16.36Z" })));
};

var Icon$1q = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M1.1423 6.58983C1.049 7.04537 1 7.517 1 8C1 11.864 4.136 15 8 15L8.06193 14.9997C8.12656 14.4816 8.24075 13.9788 8.3996 13.4963C8.26762 13.5058 8.13436 13.5106 8 13.5106C4.96231 13.5106 2.48936 11.0377 2.48936 8C2.48936 4.96231 4.96231 2.48936 8 2.48936C11.0377 2.48936 13.5106 4.96231 13.5106 8C13.5106 8.13436 13.5058 8.26762 13.4963 8.3996C13.9788 8.24075 14.4816 8.12656 14.9997 8.06193L15 8C15 6.31095 14.4008 4.761 13.4035 3.55129C13.1174 3.20432 12.7986 2.88535 12.4518 2.5991C11.2417 1.60025 9.6905 1 8 1C7.11135 1 6.2612 1.16587 5.47885 1.46832C3.28464 2.31657 1.62372 4.23914 1.1423 6.58983Z" }),
        React__default['default'].createElement("path", { d: "M8.00003 3.78014C7.58875 3.78014 7.25535 4.11355 7.25535 4.52482V4.84238C6.54327 5.03587 5.97957 5.61723 5.82913 6.36941C5.58337 7.59822 6.52324 8.74468 7.77638 8.74468H8.49648C8.77067 8.74468 8.99294 8.96695 8.99294 9.24113C8.99294 9.51532 8.77067 9.73759 8.49648 9.73759H7.6488C7.52936 9.73759 7.41227 9.70444 7.31055 9.64185L7.00024 9.45089C6.64998 9.23534 6.19129 9.34455 5.97574 9.69482C5.7602 10.0451 5.86941 10.5038 6.21967 10.7193L6.52998 10.9103C6.75353 11.0478 6.99954 11.1424 7.25535 11.1904V11.4752C7.25535 11.8865 7.58875 12.2199 8.00003 12.2199C8.4113 12.2199 8.74471 11.8865 8.74471 11.4752V11.2116C9.72431 11.0894 10.4823 10.2538 10.4823 9.24113C10.4823 8.1444 9.59322 7.25532 8.49648 7.25532H7.77638C7.4631 7.25532 7.22813 6.9687 7.28957 6.6615C7.33598 6.42945 7.53973 6.26241 7.77638 6.26241H8.20491C8.35304 6.26241 8.49509 6.32125 8.59984 6.426L8.71459 6.54075C9.00541 6.83157 9.47692 6.83157 9.76773 6.54075C10.0585 6.24994 10.0585 5.77843 9.76773 5.48762L9.65297 5.37286C9.39901 5.11889 9.08521 4.93852 8.74471 4.84547V4.52482C8.74471 4.11355 8.4113 3.78014 8.00003 3.78014Z" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9 16.0002C9 12.1361 12.1291 9 15.9932 9C19.8643 9 23.0004 12.136 23.0004 16.0002C23.0004 19.8643 19.8643 23.0004 15.9932 23.0004C12.1291 23.0004 9 19.8643 9 16.0002ZM17.2607 13.1703C16.9706 12.2293 16.5425 11.3516 16.0002 10.5553C15.4579 11.3516 15.0297 12.2293 14.7397 13.1703H17.2607ZM11.2773 13.1703H13.2024C13.4143 12.3535 13.7122 11.5675 14.0961 10.8352C12.9095 11.2722 11.9193 12.0993 11.2773 13.1703ZM17.9043 10.8352C18.2882 11.5675 18.5861 12.3536 18.798 13.1703H20.7229C20.0808 12.1054 19.0906 11.2726 17.9043 10.8352ZM10.6593 14.6597C10.5544 15.09 10.4894 15.5389 10.4894 16.0002C10.4894 16.4615 10.5544 16.9104 10.6593 17.3407H12.9138C12.8614 16.8994 12.8228 16.4565 12.8228 16.0002C12.8228 15.5439 12.8614 15.1009 12.9138 14.6597H10.6593ZM14.4171 14.6597C14.3575 15.097 14.3122 15.5457 14.3122 16.0002C14.3122 16.4549 14.3575 16.8972 14.4171 17.3407H17.5832C17.6428 16.8972 17.6882 16.4549 17.6882 16.0002C17.6882 15.5457 17.6429 15.097 17.5833 14.6597H14.4171ZM19.0866 14.6597C19.139 15.1009 19.1776 15.5439 19.1776 16.0002C19.1776 16.4565 19.139 16.8994 19.0866 17.3407H21.341C21.446 16.9104 21.511 16.4615 21.511 16.0002C21.511 15.5389 21.446 15.09 21.341 14.6597H19.0866ZM13.2024 18.8301H11.2773C11.9193 19.9011 12.9095 20.7281 14.0961 21.1652C13.7122 20.4329 13.4143 19.6468 13.2024 18.8301ZM14.7397 18.8301C15.0297 19.7711 15.4579 20.6488 16.0002 21.4451C16.5425 20.6488 16.9706 19.7711 17.2607 18.8301H14.7397ZM17.9043 21.1652C19.0906 20.7278 20.0808 19.895 20.7229 18.8301H18.798C18.5861 19.6468 18.2882 20.4329 17.9043 21.1652Z" })));
};

var Icon$1p = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 20 20" }, props),
        React__default['default'].createElement("path", { d: "M4.68179 7.04592C5.06573 7.78505 5.47899 8.47752 5.91436 9.12605C4.76866 8.20293 3.15483 7.94918 1.72791 8.60664L0.865295 9.00408L0.949991 9.1879C1.87444 11.1943 4.25037 12.0714 6.25678 11.147L7.1194 10.7495C7.7588 11.5306 8.42708 12.2337 9.10661 12.8671C7.54917 12.0868 5.60297 12.3946 4.36752 13.7424L4.07604 14.0604L5.17158 15.0646C6.8001 16.5573 9.33037 16.4472 10.8231 14.8187L11.0984 14.5183C11.8534 15.0744 12.6001 15.5528 13.3138 15.9628C13.5418 16.0939 13.7667 16.218 13.9874 16.3354C12.2933 15.9571 10.485 16.7202 9.6092 18.3189L9.47337 18.5669L10.514 19.137C12.4515 20.1983 14.8825 19.4881 15.9439 17.5507L16.0715 17.3177C16.4836 17.4877 16.862 17.6297 17.1977 17.747C17.6961 17.9213 18.1016 18.0417 18.3855 18.1191L18.8453 18.2339C19.2507 18.3192 19.6484 18.0598 19.7338 17.6545C19.819 17.2494 19.56 16.8519 19.1551 16.7662L19.1524 16.7657C19.1551 16.7662 19.0729 16.7518 18.7802 16.6719C18.527 16.6029 18.1551 16.4928 17.6927 16.3311C17.1224 16.1317 16.416 15.8546 15.6253 15.4802L15.9997 14.8317C17.1043 12.9186 16.4488 10.4722 14.5356 9.36762L13.8989 9.00001L13.4324 9.80801C12.4895 11.4411 12.8291 13.4627 14.1387 14.7066C14.1128 14.6919 14.0869 14.6771 14.0609 14.6622C12.797 13.9361 11.4285 12.9847 10.1078 11.7498L10.5391 11.324C12.1111 9.77192 12.1274 7.23931 10.5753 5.66723L9.93826 5.02195L9.41242 5.5411C8.11055 6.82638 7.87565 8.78411 8.71479 10.3119C7.73795 9.1976 6.82187 7.90232 6.03634 6.39938C7.08943 4.4961 6.42732 2.09216 4.53566 1.00001L3.4039 0.346588L2.82248 1.35364C1.71791 3.26682 2.37341 5.71318 4.28658 6.81775L4.68179 7.04592Z" })));
};

var Icon$1o = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 20 20" }, props),
        React__default['default'].createElement("path", { d: "M15.3182 7.04592C14.9343 7.78505 14.521 8.47752 14.0856 9.12605C15.2313 8.20293 16.8452 7.94918 18.2721 8.60664L19.1347 9.00408L19.05 9.1879C18.1256 11.1943 15.7496 12.0714 13.7432 11.147L12.8806 10.7495C12.2412 11.5306 11.5729 12.2337 10.8934 12.8671C12.4508 12.0868 14.397 12.3946 15.6325 13.7424L15.924 14.0604L14.8284 15.0646C13.1999 16.5573 10.6696 16.4472 9.17692 14.8187L8.90162 14.5183C8.1466 15.0744 7.39992 15.5528 6.68625 15.9628C6.45816 16.0939 6.23335 16.218 6.01259 16.3354C7.70668 15.9571 9.51501 16.7202 10.3908 18.3189L10.5266 18.5669L9.486 19.137C7.54854 20.1983 5.11749 19.4881 4.05611 17.5507L3.92849 17.3177C3.51637 17.4877 3.13804 17.6297 2.80235 17.747C2.30389 17.9213 1.89839 18.0417 1.61448 18.1191L1.15466 18.2339C0.749332 18.3192 0.351572 18.0598 0.26624 17.6545C0.180958 17.2494 0.440012 16.8519 0.844932 16.7662L0.847556 16.7657C0.844932 16.7662 0.927067 16.7518 1.21981 16.6719C1.47301 16.6029 1.84485 16.4928 2.30733 16.3311C2.87756 16.1317 3.58397 15.8546 4.3747 15.4802L4.0003 14.8317C2.89573 12.9186 3.55123 10.4722 5.4644 9.36762L6.10112 9.00001L6.56763 9.80801C7.51049 11.4411 7.1709 13.4627 5.86133 14.7066C5.88719 14.6919 5.9131 14.6771 5.93906 14.6622C7.20296 13.9361 8.57146 12.9847 9.89223 11.7498L9.46094 11.324C7.88886 9.77192 7.87263 7.23931 9.42468 5.66723L10.0617 5.02195L10.5876 5.5411C11.8895 6.82638 12.1243 8.78411 11.2852 10.3119C12.2621 9.1976 13.1781 7.90232 13.9637 6.39938C12.9106 4.4961 13.5727 2.09216 15.4643 1.00001L16.5961 0.346588L17.1775 1.35364C18.2821 3.26682 17.6266 5.71318 15.7134 6.81775L15.3182 7.04592Z" })));
};

var Icon$1n = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M4.5 14H6.5C7.05 14 7.5 13.55 7.5 13V11C7.5 10.45 7.05 10 6.5 10H4.5C3.95 10 3.5 10.45 3.5 11V13C3.5 13.55 3.95 14 4.5 14ZM4.5 19H6.5C7.05 19 7.5 18.55 7.5 18V16C7.5 15.45 7.05 15 6.5 15H4.5C3.95 15 3.5 15.45 3.5 16V18C3.5 18.55 3.95 19 4.5 19ZM4.5 9H6.5C7.05 9 7.5 8.55 7.5 8V6C7.5 5.45 7.05 5 6.5 5H4.5C3.95 5 3.5 5.45 3.5 6V8C3.5 8.55 3.95 9 4.5 9ZM9.5 14H19.5C20.05 14 20.5 13.55 20.5 13V11C20.5 10.45 20.05 10 19.5 10H9.5C8.95 10 8.5 10.45 8.5 11V13C8.5 13.55 8.95 14 9.5 14ZM9.5 19H19.5C20.05 19 20.5 18.55 20.5 18V16C20.5 15.45 20.05 15 19.5 15H9.5C8.95 15 8.5 15.45 8.5 16V18C8.5 18.55 8.95 19 9.5 19ZM8.5 6V8C8.5 8.55 8.95 9 9.5 9H19.5C20.05 9 20.5 8.55 20.5 8V6C20.5 5.45 20.05 5 19.5 5H9.5C8.95 5 8.5 5.45 8.5 6Z" })));
};

var Icon$1m = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M10.3 8.09014C9.91 8.48014 9.91 9.10014 10.3 9.49014L12.2 11.3901H3C2.45 11.3901 2 11.8401 2 12.3901C2 12.9401 2.45 13.3901 3 13.3901H12.2L10.3 15.2901C9.91 15.6801 9.91 16.3001 10.3 16.6901C10.69 17.0801 11.31 17.0801 11.7 16.6901L15.29 13.1001C15.68 12.7101 15.68 12.0801 15.29 11.6901L11.7 8.09014C11.31 7.70014 10.69 7.70014 10.3 8.09014ZM20 19.3901H13C12.45 19.3901 12 19.8401 12 20.3901C12 20.9401 12.45 21.3901 13 21.3901H20C21.1 21.3901 22 20.4901 22 19.3901V5.39014C22 4.29014 21.1 3.39014 20 3.39014H13C12.45 3.39014 12 3.84014 12 4.39014C12 4.94014 12.45 5.39014 13 5.39014H20V19.3901Z" })));
};

var Icon$1l = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 75 75" }, props),
        React__default['default'].createElement("image", { height: "75", href: '/images/LogoWithoutText.png' })));
};

var Icon$1k = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 400 400" }, props),
        React__default['default'].createElement("g", { id: "svgg" },
            React__default['default'].createElement("path", { id: "path0", d: "M191.600 6.455 C 184.306 6.693,181.861 6.898,173.200 7.995 C 157.381 9.999,138.076 15.426,122.400 22.278 C 120.358 23.171,106.808 29.891,105.400 30.710 C 101.167 33.170,96.169 36.202,96.000 36.411 C 95.890 36.547,95.530 36.760,95.200 36.883 C 92.655 37.838,76.485 50.240,70.013 56.200 C 53.510 71.400,42.677 84.960,30.708 105.400 C 9.659 141.348,1.537 189.463,9.069 233.600 C 9.613 236.790,10.324 240.570,10.648 242.000 C 11.854 247.313,12.463 249.827,12.781 250.800 C 12.960 251.350,13.336 252.610,13.616 253.600 C 15.198 259.196,18.897 269.834,20.047 272.095 C 20.241 272.477,20.400 272.965,20.400 273.180 C 20.400 274.320,28.075 290.059,31.862 296.686 C 36.465 304.738,47.501 320.548,51.379 324.645 C 51.610 324.890,52.779 326.240,53.977 327.645 C 56.426 330.521,68.317 342.483,71.441 345.215 C 75.168 348.474,75.778 348.988,78.800 351.419 C 85.564 356.859,101.840 368.000,103.023 368.000 C 103.101 368.000,104.118 368.564,105.282 369.254 C 110.154 372.140,122.932 378.233,128.600 380.372 C 129.920 380.870,131.360 381.428,131.800 381.612 C 133.448 382.301,139.500 384.381,142.200 385.188 C 143.740 385.648,145.540 386.192,146.200 386.397 C 150.390 387.701,159.423 389.774,167.200 391.217 C 185.693 394.649,214.420 394.648,232.800 391.214 C 243.190 389.274,244.892 388.881,253.800 386.371 C 267.559 382.493,282.956 376.056,294.521 369.347 C 295.798 368.606,296.910 368.000,296.992 368.000 C 297.156 368.000,302.039 365.009,305.800 362.604 C 325.078 350.278,344.918 331.202,358.222 312.200 C 362.089 306.676,368.000 297.481,368.000 296.988 C 368.000 296.904,368.565 295.882,369.256 294.718 C 372.277 289.625,378.726 276.004,380.770 270.400 C 381.051 269.630,381.432 268.640,381.616 268.200 C 381.801 267.760,382.341 266.230,382.817 264.800 C 383.293 263.370,383.838 261.840,384.028 261.400 C 384.368 260.611,385.144 258.075,386.722 252.600 C 387.427 250.151,388.297 246.666,389.616 241.000 C 395.828 214.325,394.725 172.048,387.221 149.200 C 387.041 148.650,386.664 147.390,386.384 146.400 C 385.233 142.330,381.187 130.423,380.199 128.200 C 379.905 127.540,378.820 125.020,377.787 122.600 C 364.124 90.601,340.229 61.494,310.614 40.776 C 306.200 37.688,303.271 35.845,294.600 30.699 C 292.835 29.652,280.548 23.553,277.996 22.458 C 249.481 10.221,223.521 5.412,191.600 6.455 M216.200 29.249 C 219.060 29.489,222.030 29.846,222.800 30.041 C 223.570 30.236,224.809 30.397,225.554 30.398 C 226.298 30.399,227.558 30.566,228.354 30.769 C 229.149 30.971,231.060 31.349,232.600 31.608 C 234.140 31.867,236.030 32.230,236.800 32.416 C 237.570 32.601,239.100 32.968,240.200 33.230 C 249.426 35.433,260.540 39.126,267.900 42.436 C 268.835 42.856,270.455 43.574,271.500 44.031 C 279.146 47.373,299.155 59.087,300.800 61.184 C 300.910 61.324,301.630 61.877,302.400 62.414 C 303.170 62.950,304.070 63.605,304.400 63.870 C 304.730 64.134,306.080 65.207,307.400 66.255 C 316.136 73.186,328.192 85.300,334.217 93.200 C 335.308 94.630,336.290 95.890,336.400 96.000 C 337.492 97.092,345.412 108.650,347.157 111.698 C 347.567 112.414,348.574 114.170,349.394 115.600 C 351.065 118.512,355.546 127.344,356.598 129.800 C 356.975 130.680,357.647 132.210,358.092 133.200 C 358.537 134.190,359.059 135.405,359.251 135.900 C 359.443 136.395,359.763 137.205,359.963 137.700 C 364.335 148.546,368.279 163.805,369.967 176.400 C 371.188 185.516,371.322 187.845,371.322 200.000 C 371.322 212.155,371.188 214.484,369.967 223.600 C 369.039 230.527,367.507 238.056,365.533 245.400 C 364.432 249.493,361.640 258.241,360.777 260.300 C 360.570 260.795,360.220 261.650,360.000 262.200 C 359.780 262.750,359.420 263.650,359.200 264.200 C 358.980 264.750,358.639 265.605,358.442 266.100 C 356.913 269.942,351.852 280.287,349.717 283.933 C 348.773 285.546,348.000 286.943,348.000 287.037 C 348.000 287.131,346.920 288.839,345.600 290.832 C 344.280 292.826,343.200 294.590,343.200 294.753 C 343.200 294.916,342.885 295.408,342.500 295.846 C 342.115 296.285,341.620 296.926,341.400 297.271 C 340.518 298.653,337.440 302.980,336.780 303.764 C 336.394 304.224,334.972 305.987,333.620 307.683 C 326.054 317.174,314.954 328.124,305.800 335.127 C 304.480 336.137,303.310 337.075,303.200 337.211 C 303.016 337.441,298.718 340.476,297.271 341.400 C 296.926 341.620,296.285 342.115,295.846 342.500 C 295.408 342.885,294.916 343.200,294.754 343.200 C 294.592 343.200,293.051 344.136,291.329 345.279 C 287.218 348.011,282.070 350.904,276.400 353.669 C 270.283 356.651,267.450 357.934,264.300 359.146 C 262.756 359.741,261.438 360.276,260.400 360.731 C 255.191 363.012,237.760 367.837,231.200 368.814 C 229.990 368.994,227.740 369.344,226.200 369.592 C 210.964 372.042,189.315 372.068,174.200 369.653 C 172.880 369.442,170.563 369.072,169.052 368.830 C 162.945 367.852,153.119 365.328,145.400 362.755 C 140.634 361.166,140.107 360.975,137.800 360.000 C 136.453 359.431,134.992 358.842,133.800 358.388 C 130.520 357.140,119.967 351.962,116.090 349.700 C 114.488 348.765,113.085 348.000,112.973 348.000 C 112.861 348.000,111.163 346.920,109.200 345.600 C 107.237 344.280,105.472 343.200,105.277 343.200 C 105.083 343.200,104.598 342.840,104.200 342.400 C 103.802 341.960,103.249 341.600,102.971 341.600 C 102.694 341.600,102.407 341.455,102.333 341.277 C 102.260 341.099,101.300 340.346,100.200 339.603 C 90.779 333.243,73.925 317.433,67.148 308.600 C 66.642 307.940,66.119 307.310,65.987 307.200 C 65.855 307.090,64.950 305.920,63.976 304.600 C 63.001 303.280,62.099 302.110,61.970 302.000 C 61.747 301.809,57.841 296.196,57.000 294.856 C 56.780 294.506,55.887 293.135,55.015 291.809 C 53.043 288.812,47.462 278.812,45.522 274.800 C 43.882 271.409,41.892 266.939,40.759 264.100 C 40.562 263.605,40.237 262.795,40.037 262.300 C 29.799 236.901,25.917 201.766,30.350 174.600 C 30.565 173.280,30.925 171.030,31.150 169.600 C 31.375 168.170,31.669 166.550,31.804 166.000 C 31.939 165.450,32.218 164.235,32.425 163.300 C 34.819 152.455,38.647 140.525,42.436 132.100 C 42.856 131.165,43.573 129.545,44.029 128.500 C 47.329 120.935,59.096 100.838,61.184 99.200 C 61.324 99.090,61.877 98.370,62.414 97.600 C 63.689 95.769,63.653 95.814,68.445 90.000 C 73.722 83.598,83.598 73.722,90.000 68.445 C 95.814 63.653,95.769 63.689,97.600 62.414 C 98.370 61.877,99.090 61.324,99.200 61.184 C 100.797 59.149,119.412 48.214,127.600 44.502 C 128.590 44.053,130.390 43.229,131.600 42.671 C 139.812 38.882,151.665 35.049,163.200 32.451 C 166.632 31.678,167.412 31.521,169.800 31.122 C 177.901 29.769,183.711 29.140,191.000 28.828 C 199.106 28.482,209.046 28.647,216.200 29.249 M179.735 64.703 C 170.239 74.326,160.174 84.540,157.368 87.400 C 151.876 92.997,107.718 137.771,87.351 158.395 C 67.014 178.987,65.600 180.442,65.600 180.766 C 65.600 181.043,80.165 195.628,86.800 201.995 C 88.230 203.367,95.354 210.364,102.630 217.545 C 128.454 243.026,132.742 247.200,133.098 247.200 C 133.472 247.200,144.115 236.621,144.311 236.054 C 144.422 235.734,129.050 220.323,122.249 213.935 C 120.296 212.101,111.941 203.924,103.681 195.765 L 88.664 180.929 96.032 173.789 C 100.084 169.862,108.859 161.148,115.532 154.425 C 150.252 119.440,197.342 72.400,197.645 72.400 C 197.835 72.400,200.400 74.785,203.345 77.700 C 211.579 85.849,227.518 101.550,253.394 127.000 C 266.368 139.760,282.116 155.266,288.391 161.457 C 294.666 167.648,302.031 174.909,304.757 177.593 L 309.713 182.472 305.896 186.336 C 303.796 188.461,300.146 192.180,297.784 194.600 C 295.422 197.020,285.280 207.335,275.245 217.521 C 265.210 227.708,256.919 236.130,256.819 236.235 C 256.608 236.461,267.248 247.200,267.683 247.200 C 267.936 247.200,290.517 224.569,306.644 208.152 C 309.480 205.265,316.615 198.022,322.500 192.056 C 328.385 186.091,333.200 180.967,333.200 180.671 C 333.200 180.375,331.895 178.898,330.300 177.390 C 328.705 175.882,317.812 165.196,306.094 153.644 C 294.375 142.091,284.632 132.540,284.443 132.420 C 284.119 132.212,252.843 101.466,227.402 76.344 C 205.823 55.036,197.955 47.400,197.476 47.303 C 197.214 47.250,189.231 55.080,179.735 64.703 M182.794 101.900 C 174.790 109.985,153.804 131.116,136.158 148.858 L 104.074 181.116 121.937 198.701 C 144.721 221.130,151.557 227.764,152.071 227.947 C 152.463 228.087,165.591 214.884,165.597 214.344 C 165.599 214.203,162.233 210.783,158.118 206.744 C 138.328 187.318,132.000 181.038,132.004 180.828 C 132.014 180.326,197.934 113.600,198.420 113.600 C 198.856 113.600,195.670 110.494,245.206 159.200 C 261.395 175.117,266.800 180.531,266.800 180.827 C 266.800 181.009,259.555 188.478,250.700 197.423 C 241.845 206.368,234.533 213.868,234.451 214.090 C 234.302 214.493,248.335 228.800,248.879 228.800 C 249.151 228.800,258.931 218.982,283.546 194.000 C 289.507 187.950,294.389 182.820,294.396 182.600 C 294.402 182.380,290.364 178.240,285.422 173.400 C 275.456 163.639,243.033 131.700,222.623 111.537 C 204.875 94.005,197.875 87.200,197.587 87.200 C 197.454 87.200,190.797 93.815,182.794 101.900 M114.300 267.632 C 113.649 268.011,113.600 269.383,113.600 287.388 L 113.600 306.736 114.777 306.995 C 117.743 307.646,117.600 308.654,117.600 287.176 L 117.600 267.980 116.574 267.590 C 115.324 267.115,115.183 267.118,114.300 267.632 M89.435 268.497 C 87.674 268.962,85.797 270.465,84.960 272.080 C 84.506 272.955,84.400 276.320,84.400 289.789 L 84.400 306.417 85.400 306.873 C 86.148 307.214,86.652 307.214,87.400 306.873 L 88.400 306.417 88.472 299.709 C 88.512 296.019,88.557 288.573,88.572 283.161 C 88.607 270.935,88.686 270.798,95.687 270.802 C 103.091 270.807,103.392 271.178,103.426 280.345 C 103.535 309.319,103.350 307.670,106.423 306.995 L 107.600 306.736 107.600 289.588 L 107.600 272.440 105.900 270.676 C 103.448 268.130,95.033 267.016,89.435 268.497 M151.900 273.557 C 150.556 274.920,151.304 276.400,153.336 276.400 C 153.987 276.400,154.749 276.087,155.043 275.700 C 156.428 273.875,153.533 271.901,151.900 273.557 M275.469 281.349 C 268.514 283.305,264.436 291.383,266.645 298.827 C 269.188 307.397,279.666 311.122,286.765 305.979 C 288.679 304.593,288.686 304.555,287.350 303.035 L 286.326 301.870 284.154 302.935 C 278.426 305.744,269.320 301.923,271.043 297.433 C 271.256 296.877,272.603 296.800,282.043 296.800 L 292.800 296.800 292.800 294.157 C 292.800 285.588,283.869 278.987,275.469 281.349 M297.525 282.080 C 304.571 293.484,304.485 293.225,302.346 296.707 C 301.437 298.188,300.058 300.480,299.282 301.800 C 298.506 303.120,297.360 304.952,296.736 305.872 C 295.157 308.197,295.250 308.400,297.900 308.400 L 300.200 308.399 301.365 306.300 C 306.367 297.286,307.362 296.572,309.520 300.445 C 311.131 303.338,311.404 303.804,311.600 304.000 C 311.847 304.247,312.763 305.835,313.503 307.300 C 314.015 308.314,314.244 308.400,316.429 308.400 C 319.355 308.400,319.517 309.054,314.861 302.090 C 312.695 298.851,310.680 295.528,310.383 294.707 C 309.767 292.999,309.567 293.488,314.067 285.700 C 314.543 284.875,315.369 283.435,315.901 282.500 L 316.868 280.800 314.534 280.803 C 312.516 280.806,312.140 280.927,311.759 281.703 C 307.570 290.214,306.702 290.448,303.255 284.000 L 301.651 281.000 299.180 280.880 L 296.710 280.759 297.525 282.080 M151.614 283.574 C 151.139 284.462,151.038 305.536,151.506 306.246 C 151.932 306.893,153.473 307.294,154.400 307.000 C 155.509 306.648,155.671 283.466,154.567 283.043 C 153.336 282.570,152.025 282.806,151.614 283.574 M127.200 284.474 C 122.915 286.553,122.813 287.038,122.806 305.438 C 122.799 322.053,122.792 322.000,125.099 322.000 C 127.307 322.000,127.200 322.841,127.200 305.543 C 127.200 285.695,126.914 286.400,134.974 286.400 C 141.808 286.400,142.400 287.123,142.400 295.466 L 142.400 301.173 140.987 302.587 L 139.573 304.000 134.814 304.000 C 130.525 304.000,130.031 304.074,129.818 304.744 C 129.225 306.610,129.740 306.800,135.394 306.800 C 142.274 306.800,144.025 306.117,145.955 302.680 C 146.891 301.014,147.266 289.135,146.400 288.600 C 146.180 288.464,146.000 288.085,146.000 287.758 C 146.000 284.187,132.612 281.848,127.200 284.474 M161.700 283.865 C 160.859 284.204,160.988 306.633,161.833 306.957 C 164.301 307.904,165.200 306.761,165.201 302.671 C 165.202 300.872,165.320 296.565,165.464 293.100 L 165.725 286.800 171.809 286.800 C 177.357 286.800,177.985 286.873,178.946 287.629 L 180.000 288.458 180.000 297.220 C 180.000 307.105,180.144 307.551,183.135 306.953 L 184.400 306.700 184.400 297.441 L 184.400 288.182 183.200 286.727 C 180.865 283.894,179.629 283.596,170.374 283.632 C 165.878 283.649,161.975 283.754,161.700 283.865 M193.400 284.557 C 189.816 286.257,189.200 287.798,189.200 295.069 C 189.200 304.564,191.471 306.800,201.117 306.800 C 208.929 306.800,209.129 303.981,201.337 303.711 C 194.055 303.460,193.600 302.947,193.600 295.000 C 193.600 286.984,194.102 286.400,200.982 286.400 C 206.545 286.400,209.312 287.904,208.645 290.564 C 208.028 293.020,206.619 293.614,200.604 293.952 C 196.682 294.173,196.192 294.283,196.061 294.974 C 195.794 296.368,197.067 296.801,201.376 296.782 C 209.808 296.745,213.833 293.886,212.734 288.716 C 211.919 284.878,209.051 283.608,201.200 283.608 C 195.925 283.608,195.219 283.694,193.400 284.557 M281.610 285.202 C 285.112 285.866,289.311 290.221,287.987 291.816 C 287.039 292.958,271.438 292.471,271.271 291.294 C 270.971 289.180,273.901 286.229,277.176 285.346 C 279.489 284.722,279.140 284.733,281.610 285.202 ", stroke: "none", fill: "#050505", "fill-rule": "evenodd" }),
            React__default['default'].createElement("path", { id: "path1", d: "M179.003 0.275 C 177.025 0.362,175.234 0.606,175.023 0.817 C 174.812 1.028,173.427 1.200,171.944 1.200 C 170.461 1.200,169.136 1.380,169.000 1.600 C 168.864 1.820,167.773 2.000,166.576 2.000 C 165.379 2.000,164.400 2.180,164.400 2.400 C 164.400 2.620,163.410 2.800,162.200 2.800 C 160.990 2.800,160.000 2.980,160.000 3.200 C 160.000 3.420,159.280 3.600,158.400 3.600 C 157.520 3.600,156.800 3.780,156.800 4.000 C 156.800 4.220,156.001 4.400,155.024 4.400 C 154.047 4.400,153.136 4.580,153.000 4.800 C 152.864 5.020,152.043 5.200,151.176 5.200 C 150.309 5.200,149.600 5.380,149.600 5.600 C 149.600 5.820,148.970 6.000,148.200 6.000 C 147.430 6.000,146.800 6.180,146.800 6.400 C 146.800 6.620,146.170 6.800,145.400 6.800 C 144.630 6.800,144.000 6.980,144.000 7.200 C 144.000 7.420,143.370 7.600,142.600 7.600 C 141.830 7.600,141.200 7.780,141.200 8.000 C 141.200 8.220,140.753 8.400,140.206 8.400 C 139.350 8.400,132.162 10.584,129.800 11.562 C 127.245 12.620,126.531 12.928,125.905 13.247 C 125.523 13.441,124.938 13.600,124.605 13.600 C 124.272 13.600,124.000 13.780,124.000 14.000 C 124.000 14.220,123.561 14.400,123.024 14.400 C 122.487 14.400,121.936 14.580,121.800 14.800 C 121.664 15.020,121.203 15.200,120.776 15.200 C 120.349 15.200,120.000 15.380,120.000 15.600 C 120.000 15.820,119.640 16.000,119.200 16.000 C 118.760 16.000,118.400 16.180,118.400 16.400 C 118.400 16.620,118.040 16.800,117.600 16.800 C 117.160 16.800,116.800 16.980,116.800 17.200 C 116.800 17.420,116.350 17.600,115.800 17.600 C 115.250 17.600,114.800 17.780,114.800 18.000 C 114.800 18.220,114.547 18.400,114.238 18.400 C 113.572 18.400,110.259 20.068,110.067 20.500 C 109.993 20.665,109.588 20.800,109.167 20.800 C 108.745 20.800,108.400 20.980,108.400 21.200 C 108.400 21.420,108.040 21.600,107.600 21.600 C 107.160 21.600,106.800 21.780,106.800 22.000 C 106.800 22.220,106.440 22.400,106.000 22.400 C 105.560 22.400,105.200 22.580,105.200 22.800 C 105.200 23.020,104.964 23.200,104.675 23.200 C 104.387 23.200,103.764 23.560,103.292 24.000 C 102.820 24.440,102.225 24.800,101.971 24.800 C 101.389 24.800,97.447 26.895,97.267 27.300 C 97.193 27.465,96.956 27.600,96.739 27.600 C 96.522 27.600,95.559 28.140,94.600 28.800 C 93.641 29.460,92.703 30.000,92.516 30.000 C 92.329 30.000,91.917 30.360,91.600 30.800 C 91.283 31.240,90.743 31.600,90.400 31.600 C 90.057 31.600,89.517 31.960,89.200 32.400 C 88.883 32.840,88.343 33.200,88.000 33.200 C 87.657 33.200,87.117 33.560,86.800 34.000 C 86.483 34.440,85.991 34.800,85.708 34.800 C 85.425 34.800,84.628 35.340,83.937 36.000 C 83.246 36.660,82.478 37.200,82.229 37.200 C 81.980 37.200,81.517 37.560,81.200 38.000 C 80.883 38.440,80.375 38.800,80.072 38.800 C 79.769 38.800,79.017 39.340,78.400 40.000 C 77.783 40.660,77.164 41.200,77.023 41.200 C 76.752 41.200,76.352 41.514,74.349 43.300 C 73.671 43.905,72.958 44.400,72.766 44.400 C 72.574 44.400,71.427 45.390,70.217 46.600 C 69.007 47.810,67.843 48.800,67.629 48.800 C 67.416 48.800,65.297 50.770,62.921 53.179 C 57.684 58.486,58.486 57.684,53.179 62.921 C 50.770 65.297,48.800 67.416,48.800 67.629 C 48.800 67.843,47.810 69.007,46.600 70.217 C 45.390 71.427,44.400 72.574,44.400 72.766 C 44.400 72.958,43.859 73.719,43.199 74.458 C 41.469 76.390,41.200 76.736,41.200 77.023 C 41.200 77.164,40.660 77.783,40.000 78.400 C 39.340 79.017,38.800 79.769,38.800 80.072 C 38.800 80.375,38.440 80.883,38.000 81.200 C 37.560 81.517,37.200 81.980,37.200 82.229 C 37.200 82.478,36.660 83.246,36.000 83.937 C 35.340 84.628,34.800 85.425,34.800 85.708 C 34.800 85.991,34.440 86.483,34.000 86.800 C 33.560 87.117,33.200 87.657,33.200 88.000 C 33.200 88.343,32.840 88.883,32.400 89.200 C 31.960 89.517,31.600 90.057,31.600 90.400 C 31.600 90.743,31.240 91.283,30.800 91.600 C 30.360 91.917,30.000 92.329,30.000 92.516 C 30.000 92.703,29.460 93.641,28.800 94.600 C 28.140 95.559,27.600 96.522,27.600 96.739 C 27.600 96.956,27.465 97.193,27.300 97.267 C 26.895 97.447,24.800 101.389,24.800 101.971 C 24.800 102.225,24.440 102.820,24.000 103.292 C 23.560 103.764,23.200 104.387,23.200 104.675 C 23.200 104.964,23.020 105.200,22.800 105.200 C 22.580 105.200,22.400 105.560,22.400 106.000 C 22.400 106.440,22.220 106.800,22.000 106.800 C 21.780 106.800,21.600 107.160,21.600 107.600 C 21.600 108.040,21.420 108.400,21.200 108.400 C 20.980 108.400,20.800 108.745,20.800 109.167 C 20.800 109.588,20.665 109.993,20.500 110.067 C 20.068 110.259,18.400 113.572,18.400 114.238 C 18.400 114.547,18.220 114.800,18.000 114.800 C 17.780 114.800,17.600 115.250,17.600 115.800 C 17.600 116.350,17.420 116.800,17.200 116.800 C 16.980 116.800,16.800 117.160,16.800 117.600 C 16.800 118.040,16.620 118.400,16.400 118.400 C 16.180 118.400,16.000 118.760,16.000 119.200 C 16.000 119.640,15.820 120.000,15.600 120.000 C 15.380 120.000,15.200 120.349,15.200 120.776 C 15.200 121.203,15.020 121.664,14.800 121.800 C 14.580 121.936,14.400 122.487,14.400 123.024 C 14.400 123.561,14.220 124.000,14.000 124.000 C 13.780 124.000,13.600 124.272,13.600 124.605 C 13.600 124.938,13.441 125.523,13.247 125.905 C 13.052 126.287,12.716 127.050,12.500 127.600 C 12.284 128.150,11.910 129.050,11.669 129.600 C 10.701 131.808,8.400 139.274,8.400 140.206 C 8.400 140.753,8.220 141.200,8.000 141.200 C 7.780 141.200,7.600 141.830,7.600 142.600 C 7.600 143.370,7.420 144.000,7.200 144.000 C 6.980 144.000,6.800 144.630,6.800 145.400 C 6.800 146.170,6.620 146.800,6.400 146.800 C 6.180 146.800,6.000 147.430,6.000 148.200 C 6.000 148.970,5.820 149.600,5.600 149.600 C 5.380 149.600,5.200 150.309,5.200 151.176 C 5.200 152.043,5.020 152.864,4.800 153.000 C 4.580 153.136,4.400 154.047,4.400 155.024 C 4.400 156.001,4.220 156.800,4.000 156.800 C 3.780 156.800,3.600 157.520,3.600 158.400 C 3.600 159.280,3.420 160.000,3.200 160.000 C 2.980 160.000,2.800 160.990,2.800 162.200 C 2.800 163.410,2.620 164.400,2.400 164.400 C 2.180 164.400,2.000 165.379,2.000 166.576 C 2.000 167.773,1.820 168.864,1.600 169.000 C 1.380 169.136,1.200 170.461,1.200 171.944 C 1.200 173.567,1.001 174.839,0.700 175.140 C -0.029 175.869,-0.029 224.131,0.700 224.860 C 1.001 225.161,1.200 226.433,1.200 228.056 C 1.200 229.539,1.380 230.864,1.600 231.000 C 1.820 231.136,2.000 232.227,2.000 233.424 C 2.000 234.621,2.180 235.600,2.400 235.600 C 2.620 235.600,2.800 236.590,2.800 237.800 C 2.800 239.010,2.980 240.000,3.200 240.000 C 3.420 240.000,3.600 240.720,3.600 241.600 C 3.600 242.480,3.780 243.200,4.000 243.200 C 4.220 243.200,4.400 243.999,4.400 244.976 C 4.400 245.953,4.580 246.864,4.800 247.000 C 5.020 247.136,5.200 247.957,5.200 248.824 C 5.200 249.691,5.380 250.400,5.600 250.400 C 5.820 250.400,6.000 251.030,6.000 251.800 C 6.000 252.570,6.180 253.200,6.400 253.200 C 6.620 253.200,6.800 253.830,6.800 254.600 C 6.800 255.370,6.980 256.000,7.200 256.000 C 7.420 256.000,7.600 256.630,7.600 257.400 C 7.600 258.170,7.780 258.800,8.000 258.800 C 8.220 258.800,8.400 259.247,8.400 259.794 C 8.400 260.650,10.584 267.838,11.562 270.200 C 12.620 272.755,12.928 273.469,13.247 274.095 C 13.441 274.477,13.600 275.062,13.600 275.395 C 13.600 275.728,13.780 276.000,14.000 276.000 C 14.220 276.000,14.400 276.439,14.400 276.976 C 14.400 277.513,14.580 278.064,14.800 278.200 C 15.020 278.336,15.200 278.797,15.200 279.224 C 15.200 279.651,15.380 280.000,15.600 280.000 C 15.820 280.000,16.000 280.360,16.000 280.800 C 16.000 281.240,16.180 281.600,16.400 281.600 C 16.620 281.600,16.800 281.960,16.800 282.400 C 16.800 282.840,16.980 283.200,17.200 283.200 C 17.420 283.200,17.600 283.650,17.600 284.200 C 17.600 284.750,17.780 285.200,18.000 285.200 C 18.220 285.200,18.400 285.453,18.400 285.762 C 18.400 286.428,20.068 289.741,20.500 289.933 C 20.665 290.007,20.800 290.412,20.800 290.833 C 20.800 291.255,20.980 291.600,21.200 291.600 C 21.420 291.600,21.600 291.960,21.600 292.400 C 21.600 292.840,21.780 293.200,22.000 293.200 C 22.220 293.200,22.400 293.560,22.400 294.000 C 22.400 294.440,22.580 294.800,22.800 294.800 C 23.020 294.800,23.200 295.036,23.200 295.325 C 23.200 295.613,23.560 296.236,24.000 296.708 C 24.440 297.180,24.800 297.748,24.800 297.970 C 24.800 298.642,26.126 301.200,26.474 301.200 C 26.653 301.200,26.800 301.560,26.800 302.000 C 26.800 302.440,26.980 302.800,27.200 302.800 C 27.420 302.800,27.600 302.993,27.600 303.228 C 27.600 303.463,28.140 304.441,28.800 305.400 C 29.460 306.359,30.000 307.297,30.000 307.484 C 30.000 307.671,30.360 308.083,30.800 308.400 C 31.240 308.717,31.600 309.257,31.600 309.600 C 31.600 309.943,31.960 310.483,32.400 310.800 C 32.840 311.117,33.200 311.657,33.200 312.000 C 33.200 312.343,33.560 312.883,34.000 313.200 C 34.440 313.517,34.800 314.009,34.800 314.292 C 34.800 314.575,35.340 315.372,36.000 316.063 C 36.660 316.754,37.200 317.522,37.200 317.771 C 37.200 318.020,37.560 318.483,38.000 318.800 C 38.440 319.117,38.800 319.607,38.800 319.888 C 38.800 320.169,39.520 321.141,40.400 322.048 C 41.280 322.955,42.000 323.836,42.000 324.006 C 42.000 324.176,42.540 324.893,43.200 325.600 C 43.860 326.307,44.400 327.042,44.400 327.234 C 44.400 327.426,45.390 328.573,46.600 329.783 C 47.810 330.993,48.800 332.157,48.800 332.371 C 48.800 332.584,50.770 334.703,53.179 337.079 C 58.486 342.316,57.684 341.514,62.921 346.821 C 65.297 349.230,67.416 351.200,67.629 351.200 C 67.843 351.200,69.007 352.190,70.217 353.400 C 71.427 354.610,72.571 355.600,72.758 355.600 C 72.946 355.600,73.787 356.230,74.628 357.000 C 75.469 357.770,76.295 358.400,76.465 358.400 C 76.635 358.400,77.403 359.030,78.173 359.800 C 78.943 360.570,79.810 361.200,80.098 361.200 C 80.387 361.200,80.883 361.560,81.200 362.000 C 81.517 362.440,81.980 362.800,82.229 362.800 C 82.478 362.800,83.246 363.340,83.937 364.000 C 84.628 364.660,85.425 365.200,85.708 365.200 C 85.991 365.200,86.483 365.560,86.800 366.000 C 87.117 366.440,87.657 366.800,88.000 366.800 C 88.343 366.800,88.883 367.160,89.200 367.600 C 89.517 368.040,90.057 368.400,90.400 368.400 C 90.743 368.400,91.283 368.760,91.600 369.200 C 91.917 369.640,92.329 370.000,92.516 370.000 C 92.703 370.000,93.641 370.540,94.600 371.200 C 95.559 371.860,96.537 372.400,96.772 372.400 C 97.007 372.400,97.200 372.580,97.200 372.800 C 97.200 373.020,97.560 373.200,98.000 373.200 C 98.440 373.200,98.800 373.347,98.800 373.526 C 98.800 373.874,101.358 375.200,102.030 375.200 C 102.252 375.200,102.820 375.560,103.292 376.000 C 103.764 376.440,104.387 376.800,104.675 376.800 C 104.964 376.800,105.200 376.980,105.200 377.200 C 105.200 377.420,105.560 377.600,106.000 377.600 C 106.440 377.600,106.800 377.780,106.800 378.000 C 106.800 378.220,107.160 378.400,107.600 378.400 C 108.040 378.400,108.400 378.580,108.400 378.800 C 108.400 379.020,108.745 379.200,109.167 379.200 C 109.588 379.200,109.993 379.335,110.067 379.500 C 110.140 379.665,111.100 380.225,112.200 380.744 C 113.300 381.263,114.513 381.848,114.895 382.044 C 115.277 382.240,115.862 382.400,116.195 382.400 C 116.528 382.400,116.800 382.580,116.800 382.800 C 116.800 383.020,117.160 383.200,117.600 383.200 C 118.040 383.200,118.400 383.380,118.400 383.600 C 118.400 383.820,118.760 384.000,119.200 384.000 C 119.640 384.000,120.000 384.180,120.000 384.400 C 120.000 384.620,120.349 384.800,120.776 384.800 C 121.203 384.800,121.664 384.980,121.800 385.200 C 121.936 385.420,122.487 385.600,123.024 385.600 C 123.561 385.600,124.000 385.780,124.000 386.000 C 124.000 386.220,124.272 386.400,124.605 386.400 C 124.938 386.400,125.568 386.580,126.005 386.800 C 126.442 387.020,127.158 387.380,127.595 387.600 C 128.032 387.820,128.737 388.000,129.161 388.000 C 129.586 388.000,129.993 388.140,130.067 388.312 C 130.256 388.755,139.040 391.600,140.220 391.600 C 140.759 391.600,141.200 391.780,141.200 392.000 C 141.200 392.220,141.830 392.400,142.600 392.400 C 143.370 392.400,144.000 392.580,144.000 392.800 C 144.000 393.020,144.630 393.200,145.400 393.200 C 146.170 393.200,146.800 393.380,146.800 393.600 C 146.800 393.820,147.430 394.000,148.200 394.000 C 148.970 394.000,149.600 394.180,149.600 394.400 C 149.600 394.620,150.309 394.800,151.176 394.800 C 152.043 394.800,152.864 394.980,153.000 395.200 C 153.136 395.420,154.047 395.600,155.024 395.600 C 156.001 395.600,156.800 395.780,156.800 396.000 C 156.800 396.220,157.520 396.400,158.400 396.400 C 159.280 396.400,160.000 396.580,160.000 396.800 C 160.000 397.020,160.990 397.200,162.200 397.200 C 163.410 397.200,164.400 397.380,164.400 397.600 C 164.400 397.820,165.379 398.000,166.576 398.000 C 167.773 398.000,168.864 398.180,169.000 398.400 C 169.136 398.620,170.461 398.800,171.944 398.800 C 173.567 398.800,174.839 398.999,175.140 399.300 C 175.529 399.689,181.045 399.800,200.000 399.800 C 218.955 399.800,224.471 399.689,224.860 399.300 C 225.161 398.999,226.433 398.800,228.056 398.800 C 229.539 398.800,230.864 398.620,231.000 398.400 C 231.136 398.180,232.227 398.000,233.424 398.000 C 234.621 398.000,235.600 397.820,235.600 397.600 C 235.600 397.380,236.590 397.200,237.800 397.200 C 239.010 397.200,240.000 397.020,240.000 396.800 C 240.000 396.580,240.720 396.400,241.600 396.400 C 242.480 396.400,243.200 396.220,243.200 396.000 C 243.200 395.780,243.999 395.600,244.976 395.600 C 245.953 395.600,246.864 395.420,247.000 395.200 C 247.136 394.980,247.957 394.800,248.824 394.800 C 249.691 394.800,250.400 394.620,250.400 394.400 C 250.400 394.180,251.030 394.000,251.800 394.000 C 252.570 394.000,253.200 393.820,253.200 393.600 C 253.200 393.380,253.830 393.200,254.600 393.200 C 255.370 393.200,256.000 393.020,256.000 392.800 C 256.000 392.580,256.630 392.400,257.400 392.400 C 258.170 392.400,258.800 392.220,258.800 392.000 C 258.800 391.780,259.241 391.600,259.780 391.600 C 260.960 391.600,269.744 388.755,269.933 388.312 C 270.007 388.140,270.414 388.000,270.839 388.000 C 271.263 388.000,271.968 387.820,272.405 387.600 C 272.842 387.380,273.558 387.020,273.995 386.800 C 274.432 386.580,275.062 386.400,275.395 386.400 C 275.728 386.400,276.000 386.220,276.000 386.000 C 276.000 385.780,276.439 385.600,276.976 385.600 C 277.513 385.600,278.064 385.420,278.200 385.200 C 278.336 384.980,278.797 384.800,279.224 384.800 C 279.651 384.800,280.000 384.620,280.000 384.400 C 280.000 384.180,280.360 384.000,280.800 384.000 C 281.240 384.000,281.600 383.820,281.600 383.600 C 281.600 383.380,281.960 383.200,282.400 383.200 C 282.840 383.200,283.200 383.020,283.200 382.800 C 283.200 382.580,283.472 382.400,283.805 382.400 C 284.138 382.400,284.723 382.240,285.105 382.044 C 285.487 381.848,286.700 381.263,287.800 380.744 C 288.900 380.225,289.860 379.665,289.933 379.500 C 290.007 379.335,290.412 379.200,290.833 379.200 C 291.255 379.200,291.600 379.020,291.600 378.800 C 291.600 378.580,291.960 378.400,292.400 378.400 C 292.840 378.400,293.200 378.220,293.200 378.000 C 293.200 377.780,293.560 377.600,294.000 377.600 C 294.440 377.600,294.800 377.420,294.800 377.200 C 294.800 376.980,295.036 376.800,295.325 376.800 C 295.613 376.800,296.236 376.440,296.708 376.000 C 297.180 375.560,297.748 375.200,297.970 375.200 C 298.642 375.200,301.200 373.874,301.200 373.526 C 301.200 373.347,301.560 373.200,302.000 373.200 C 302.440 373.200,302.800 373.020,302.800 372.800 C 302.800 372.580,302.993 372.400,303.228 372.400 C 303.463 372.400,304.441 371.860,305.400 371.200 C 306.359 370.540,307.297 370.000,307.484 370.000 C 307.671 370.000,308.083 369.640,308.400 369.200 C 308.717 368.760,309.257 368.400,309.600 368.400 C 309.943 368.400,310.483 368.040,310.800 367.600 C 311.117 367.160,311.657 366.800,312.000 366.800 C 312.343 366.800,312.883 366.440,313.200 366.000 C 313.517 365.560,314.009 365.200,314.292 365.200 C 314.575 365.200,315.372 364.660,316.063 364.000 C 316.754 363.340,317.522 362.800,317.771 362.800 C 318.020 362.800,318.483 362.440,318.800 362.000 C 319.117 361.560,319.613 361.200,319.902 361.200 C 320.190 361.200,321.057 360.570,321.827 359.800 C 322.597 359.030,323.365 358.400,323.535 358.400 C 323.705 358.400,324.531 357.770,325.372 357.000 C 326.213 356.230,327.054 355.600,327.242 355.600 C 327.429 355.600,328.573 354.610,329.783 353.400 C 330.993 352.190,332.157 351.200,332.371 351.200 C 332.584 351.200,334.703 349.230,337.079 346.821 C 342.316 341.514,341.514 342.316,346.821 337.079 C 349.230 334.703,351.200 332.584,351.200 332.371 C 351.200 332.157,352.190 330.993,353.400 329.783 C 354.610 328.573,355.600 327.429,355.600 327.242 C 355.600 327.054,356.230 326.213,357.000 325.372 C 357.770 324.531,358.400 323.705,358.400 323.535 C 358.400 323.365,359.030 322.597,359.800 321.827 C 360.570 321.057,361.200 320.190,361.200 319.902 C 361.200 319.613,361.560 319.117,362.000 318.800 C 362.440 318.483,362.800 318.020,362.800 317.771 C 362.800 317.522,363.340 316.754,364.000 316.063 C 364.660 315.372,365.200 314.575,365.200 314.292 C 365.200 314.009,365.560 313.517,366.000 313.200 C 366.440 312.883,366.800 312.343,366.800 312.000 C 366.800 311.657,367.160 311.117,367.600 310.800 C 368.040 310.483,368.400 309.943,368.400 309.600 C 368.400 309.257,368.760 308.717,369.200 308.400 C 369.640 308.083,370.000 307.671,370.000 307.484 C 370.000 307.297,370.540 306.359,371.200 305.400 C 371.860 304.441,372.400 303.463,372.400 303.228 C 372.400 302.993,372.580 302.800,372.800 302.800 C 373.020 302.800,373.200 302.440,373.200 302.000 C 373.200 301.560,373.347 301.200,373.526 301.200 C 373.874 301.200,375.200 298.642,375.200 297.970 C 375.200 297.748,375.560 297.180,376.000 296.708 C 376.440 296.236,376.800 295.613,376.800 295.325 C 376.800 295.036,376.980 294.800,377.200 294.800 C 377.420 294.800,377.600 294.440,377.600 294.000 C 377.600 293.560,377.780 293.200,378.000 293.200 C 378.220 293.200,378.400 292.840,378.400 292.400 C 378.400 291.960,378.580 291.600,378.800 291.600 C 379.020 291.600,379.200 291.255,379.200 290.833 C 379.200 290.412,379.335 290.007,379.500 289.933 C 379.665 289.860,380.225 288.900,380.744 287.800 C 381.263 286.700,381.848 285.487,382.044 285.105 C 382.240 284.723,382.400 284.138,382.400 283.805 C 382.400 283.472,382.580 283.200,382.800 283.200 C 383.020 283.200,383.200 282.840,383.200 282.400 C 383.200 281.960,383.380 281.600,383.600 281.600 C 383.820 281.600,384.000 281.240,384.000 280.800 C 384.000 280.360,384.180 280.000,384.400 280.000 C 384.620 280.000,384.800 279.651,384.800 279.224 C 384.800 278.797,384.980 278.336,385.200 278.200 C 385.420 278.064,385.600 277.513,385.600 276.976 C 385.600 276.439,385.780 276.000,386.000 276.000 C 386.220 276.000,386.400 275.728,386.400 275.395 C 386.400 275.062,386.580 274.432,386.800 273.995 C 387.020 273.558,387.380 272.842,387.600 272.405 C 387.820 271.968,388.000 271.263,388.000 270.839 C 388.000 270.414,388.140 270.007,388.312 269.933 C 388.755 269.744,391.600 260.960,391.600 259.780 C 391.600 259.241,391.780 258.800,392.000 258.800 C 392.220 258.800,392.400 258.170,392.400 257.400 C 392.400 256.630,392.580 256.000,392.800 256.000 C 393.020 256.000,393.200 255.370,393.200 254.600 C 393.200 253.830,393.380 253.200,393.600 253.200 C 393.820 253.200,394.000 252.570,394.000 251.800 C 394.000 251.030,394.180 250.400,394.400 250.400 C 394.620 250.400,394.800 249.691,394.800 248.824 C 394.800 247.957,394.980 247.136,395.200 247.000 C 395.420 246.864,395.600 245.953,395.600 244.976 C 395.600 243.999,395.780 243.200,396.000 243.200 C 396.220 243.200,396.400 242.480,396.400 241.600 C 396.400 240.720,396.580 240.000,396.800 240.000 C 397.020 240.000,397.200 239.010,397.200 237.800 C 397.200 236.590,397.380 235.600,397.600 235.600 C 397.820 235.600,398.000 234.621,398.000 233.424 C 398.000 232.227,398.180 231.136,398.400 231.000 C 398.620 230.864,398.800 229.539,398.800 228.056 C 398.800 226.433,398.999 225.161,399.300 224.860 C 400.029 224.131,400.029 175.869,399.300 175.140 C 398.999 174.839,398.800 173.567,398.800 171.944 C 398.800 170.461,398.620 169.136,398.400 169.000 C 398.180 168.864,398.000 167.773,398.000 166.576 C 398.000 165.379,397.820 164.400,397.600 164.400 C 397.380 164.400,397.200 163.410,397.200 162.200 C 397.200 160.990,397.020 160.000,396.800 160.000 C 396.580 160.000,396.400 159.280,396.400 158.400 C 396.400 157.520,396.220 156.800,396.000 156.800 C 395.780 156.800,395.600 156.001,395.600 155.024 C 395.600 154.047,395.420 153.136,395.200 153.000 C 394.980 152.864,394.800 152.043,394.800 151.176 C 394.800 150.309,394.620 149.600,394.400 149.600 C 394.180 149.600,394.000 148.970,394.000 148.200 C 394.000 147.430,393.820 146.800,393.600 146.800 C 393.380 146.800,393.200 146.170,393.200 145.400 C 393.200 144.630,393.020 144.000,392.800 144.000 C 392.580 144.000,392.400 143.370,392.400 142.600 C 392.400 141.830,392.220 141.200,392.000 141.200 C 391.780 141.200,391.600 140.759,391.600 140.220 C 391.600 139.040,388.755 130.256,388.312 130.067 C 388.140 129.993,388.000 129.586,388.000 129.161 C 388.000 128.737,387.820 128.032,387.600 127.595 C 387.380 127.158,387.020 126.442,386.800 126.005 C 386.580 125.568,386.400 124.938,386.400 124.605 C 386.400 124.272,386.220 124.000,386.000 124.000 C 385.780 124.000,385.600 123.561,385.600 123.024 C 385.600 122.487,385.420 121.936,385.200 121.800 C 384.980 121.664,384.800 121.203,384.800 120.776 C 384.800 120.349,384.620 120.000,384.400 120.000 C 384.180 120.000,384.000 119.640,384.000 119.200 C 384.000 118.760,383.820 118.400,383.600 118.400 C 383.380 118.400,383.200 118.040,383.200 117.600 C 383.200 117.160,383.020 116.800,382.800 116.800 C 382.580 116.800,382.400 116.528,382.400 116.195 C 382.400 115.862,382.240 115.277,382.044 114.895 C 381.848 114.513,381.263 113.300,380.744 112.200 C 380.225 111.100,379.665 110.140,379.500 110.067 C 379.335 109.993,379.200 109.588,379.200 109.167 C 379.200 108.745,379.020 108.400,378.800 108.400 C 378.580 108.400,378.400 108.040,378.400 107.600 C 378.400 107.160,378.220 106.800,378.000 106.800 C 377.780 106.800,377.600 106.440,377.600 106.000 C 377.600 105.560,377.420 105.200,377.200 105.200 C 376.980 105.200,376.800 104.964,376.800 104.675 C 376.800 104.387,376.440 103.764,376.000 103.292 C 375.560 102.820,375.200 102.252,375.200 102.030 C 375.200 101.358,373.874 98.800,373.526 98.800 C 373.347 98.800,373.200 98.440,373.200 98.000 C 373.200 97.560,373.020 97.200,372.800 97.200 C 372.580 97.200,372.400 97.007,372.400 96.772 C 372.400 96.537,371.860 95.559,371.200 94.600 C 370.540 93.641,370.000 92.703,370.000 92.516 C 370.000 92.329,369.640 91.917,369.200 91.600 C 368.760 91.283,368.400 90.743,368.400 90.400 C 368.400 90.057,368.040 89.517,367.600 89.200 C 367.160 88.883,366.800 88.343,366.800 88.000 C 366.800 87.657,366.440 87.117,366.000 86.800 C 365.560 86.483,365.200 85.991,365.200 85.708 C 365.200 85.425,364.660 84.628,364.000 83.937 C 363.340 83.246,362.800 82.478,362.800 82.229 C 362.800 81.980,362.440 81.517,362.000 81.200 C 361.560 80.883,361.200 80.387,361.200 80.098 C 361.200 79.810,360.570 78.943,359.800 78.173 C 359.030 77.403,358.400 76.635,358.400 76.465 C 358.400 76.295,357.770 75.469,357.000 74.628 C 356.230 73.787,355.600 72.946,355.600 72.758 C 355.600 72.571,354.610 71.427,353.400 70.217 C 352.190 69.007,351.200 67.843,351.200 67.629 C 351.200 67.416,349.230 65.297,346.821 62.921 C 341.514 57.684,342.316 58.486,337.079 53.179 C 334.703 50.770,332.584 48.800,332.371 48.800 C 332.157 48.800,330.993 47.810,329.783 46.600 C 328.573 45.390,327.426 44.400,327.234 44.400 C 327.042 44.400,326.307 43.860,325.600 43.200 C 324.893 42.540,324.176 42.000,324.006 42.000 C 323.836 42.000,322.955 41.280,322.048 40.400 C 321.141 39.520,320.169 38.800,319.888 38.800 C 319.607 38.800,319.117 38.440,318.800 38.000 C 318.483 37.560,318.020 37.200,317.771 37.200 C 317.522 37.200,316.754 36.660,316.063 36.000 C 315.372 35.340,314.575 34.800,314.292 34.800 C 314.009 34.800,313.517 34.440,313.200 34.000 C 312.883 33.560,312.343 33.200,312.000 33.200 C 311.657 33.200,311.117 32.840,310.800 32.400 C 310.483 31.960,309.943 31.600,309.600 31.600 C 309.257 31.600,308.717 31.240,308.400 30.800 C 308.083 30.360,307.671 30.000,307.484 30.000 C 307.297 30.000,306.359 29.460,305.400 28.800 C 304.441 28.140,303.463 27.600,303.228 27.600 C 302.993 27.600,302.800 27.420,302.800 27.200 C 302.800 26.980,302.440 26.800,302.000 26.800 C 301.560 26.800,301.200 26.653,301.200 26.474 C 301.200 26.126,298.642 24.800,297.970 24.800 C 297.748 24.800,297.180 24.440,296.708 24.000 C 296.236 23.560,295.613 23.200,295.325 23.200 C 295.036 23.200,294.800 23.020,294.800 22.800 C 294.800 22.580,294.440 22.400,294.000 22.400 C 293.560 22.400,293.200 22.220,293.200 22.000 C 293.200 21.780,292.840 21.600,292.400 21.600 C 291.960 21.600,291.600 21.420,291.600 21.200 C 291.600 20.980,291.255 20.800,290.833 20.800 C 290.412 20.800,290.007 20.665,289.933 20.500 C 289.741 20.068,286.428 18.400,285.762 18.400 C 285.453 18.400,285.200 18.220,285.200 18.000 C 285.200 17.780,284.750 17.600,284.200 17.600 C 283.650 17.600,283.200 17.420,283.200 17.200 C 283.200 16.980,282.840 16.800,282.400 16.800 C 281.960 16.800,281.600 16.620,281.600 16.400 C 281.600 16.180,281.240 16.000,280.800 16.000 C 280.360 16.000,280.000 15.820,280.000 15.600 C 280.000 15.380,279.651 15.200,279.224 15.200 C 278.797 15.200,278.336 15.020,278.200 14.800 C 278.064 14.580,277.513 14.400,276.976 14.400 C 276.439 14.400,276.000 14.220,276.000 14.000 C 276.000 13.780,275.728 13.600,275.395 13.600 C 275.062 13.600,274.477 13.441,274.095 13.247 C 273.713 13.052,272.905 12.692,272.300 12.447 C 271.695 12.201,270.795 11.827,270.300 11.615 C 268.047 10.652,260.688 8.400,259.794 8.400 C 259.247 8.400,258.800 8.220,258.800 8.000 C 258.800 7.780,258.170 7.600,257.400 7.600 C 256.630 7.600,256.000 7.420,256.000 7.200 C 256.000 6.980,255.370 6.800,254.600 6.800 C 253.830 6.800,253.200 6.620,253.200 6.400 C 253.200 6.180,252.570 6.000,251.800 6.000 C 251.030 6.000,250.400 5.820,250.400 5.600 C 250.400 5.380,249.691 5.200,248.824 5.200 C 247.957 5.200,247.136 5.020,247.000 4.800 C 246.864 4.580,245.953 4.400,244.976 4.400 C 243.999 4.400,243.200 4.220,243.200 4.000 C 243.200 3.780,242.480 3.600,241.600 3.600 C 240.720 3.600,240.000 3.420,240.000 3.200 C 240.000 2.980,239.010 2.800,237.800 2.800 C 236.590 2.800,235.600 2.620,235.600 2.400 C 235.600 2.180,234.621 2.000,233.424 2.000 C 232.227 2.000,231.136 1.820,231.000 1.600 C 230.864 1.380,229.539 1.200,228.056 1.200 C 226.478 1.200,225.159 0.999,224.875 0.715 C 224.394 0.234,187.860 -0.116,179.003 0.275 M217.800 7.020 C 240.124 9.212,257.535 13.677,277.996 22.458 C 280.548 23.553,292.835 29.652,294.600 30.699 C 303.271 35.845,306.200 37.688,310.614 40.776 C 340.229 61.494,364.124 90.601,377.787 122.600 C 378.820 125.020,379.905 127.540,380.199 128.200 C 381.187 130.423,385.233 142.330,386.384 146.400 C 386.664 147.390,387.041 148.650,387.221 149.200 C 394.725 172.048,395.828 214.325,389.616 241.000 C 388.297 246.666,387.427 250.151,386.722 252.600 C 385.144 258.075,384.368 260.611,384.028 261.400 C 383.838 261.840,383.293 263.370,382.817 264.800 C 382.341 266.230,381.801 267.760,381.616 268.200 C 381.432 268.640,381.051 269.630,380.770 270.400 C 378.726 276.004,372.277 289.625,369.256 294.718 C 368.565 295.882,368.000 296.904,368.000 296.988 C 368.000 297.481,362.089 306.676,358.222 312.200 C 344.918 331.202,325.078 350.278,305.800 362.604 C 302.039 365.009,297.156 368.000,296.992 368.000 C 296.910 368.000,295.798 368.606,294.521 369.347 C 282.956 376.056,267.559 382.493,253.800 386.371 C 244.892 388.881,243.190 389.274,232.800 391.214 C 214.420 394.648,185.693 394.649,167.200 391.217 C 159.423 389.774,150.390 387.701,146.200 386.397 C 145.540 386.192,143.740 385.648,142.200 385.188 C 139.500 384.381,133.448 382.301,131.800 381.612 C 131.360 381.428,129.920 380.870,128.600 380.372 C 122.932 378.233,110.154 372.140,105.282 369.254 C 104.118 368.564,103.101 368.000,103.023 368.000 C 101.840 368.000,85.564 356.859,78.800 351.419 C 75.778 348.988,75.168 348.474,71.441 345.215 C 68.317 342.483,56.426 330.521,53.977 327.645 C 52.779 326.240,51.610 324.890,51.379 324.645 C 47.501 320.548,36.465 304.738,31.862 296.686 C 28.075 290.059,20.400 274.320,20.400 273.180 C 20.400 272.965,20.241 272.477,20.047 272.095 C 18.897 269.834,15.198 259.196,13.616 253.600 C 13.336 252.610,12.960 251.350,12.781 250.800 C 12.463 249.827,11.854 247.313,10.648 242.000 C 9.254 235.855,7.567 224.805,6.770 216.600 C 6.214 210.868,6.217 189.442,6.775 183.800 C 9.095 160.353,13.543 142.822,22.457 122.000 C 23.498 119.568,29.599 107.295,30.708 105.400 C 42.677 84.960,53.510 71.400,70.013 56.200 C 76.485 50.240,92.655 37.838,95.200 36.883 C 95.530 36.760,95.890 36.547,96.000 36.411 C 96.169 36.202,101.167 33.170,105.400 30.710 C 106.808 29.891,120.358 23.171,122.400 22.278 C 135.564 16.524,149.855 12.154,164.400 9.435 C 169.566 8.469,172.192 8.087,180.200 7.137 C 189.052 6.086,207.699 6.028,217.800 7.020 M185.882 165.956 C 179.127 172.767,173.600 178.594,173.600 178.905 C 173.600 179.349,196.632 202.275,200.116 205.300 C 201.014 206.080,201.468 206.179,201.667 205.638 C 201.740 205.439,207.245 199.767,213.900 193.034 C 220.555 186.301,225.999 180.659,225.999 180.496 C 225.997 180.077,199.198 153.824,198.631 153.687 C 198.375 153.624,192.637 159.145,185.882 165.956 M233.067 264.267 C 232.920 264.413,232.800 274.423,232.800 286.509 L 232.800 308.485 238.900 308.300 C 243.870 308.149,245.461 307.950,247.489 307.224 C 266.624 300.379,266.958 273.316,248.000 265.827 C 244.565 264.470,233.970 263.363,233.067 264.267 M246.612 271.206 C 250.534 273.149,253.757 276.175,255.404 279.460 C 256.716 282.077,257.186 290.174,256.089 291.271 C 255.820 291.540,255.600 292.004,255.600 292.302 C 255.600 297.289,242.398 305.494,239.131 302.538 C 238.215 301.709,237.977 270.983,238.880 270.080 C 239.918 269.042,243.212 269.522,246.612 271.206 M88.400 285.000 L 88.400 287.200 95.800 287.200 L 103.200 287.200 103.200 285.000 L 103.200 282.800 95.800 282.800 L 88.400 282.800 88.400 285.000 ", stroke: "none", fill: "#f80404", "fill-rule": "evenodd" }),
            React__default['default'].createElement("path", { id: "path2", d: "M186.000 29.668 C 176.155 30.678,171.796 31.332,163.800 33.000 C 158.184 34.171,147.066 37.235,145.505 38.041 C 145.123 38.238,144.536 38.400,144.200 38.400 C 143.864 38.400,143.277 38.566,142.895 38.768 C 142.513 38.970,141.120 39.528,139.800 40.007 C 137.006 41.021,135.671 41.555,134.705 42.047 C 134.323 42.241,133.738 42.400,133.405 42.400 C 133.072 42.400,132.800 42.580,132.800 42.800 C 132.800 43.020,132.547 43.200,132.238 43.200 C 131.929 43.200,130.984 43.540,130.138 43.956 C 129.292 44.372,126.624 45.677,124.209 46.856 C 121.794 48.035,117.857 50.125,115.460 51.500 C 113.063 52.875,110.944 54.000,110.751 54.000 C 110.558 54.000,110.400 54.158,110.400 54.351 C 110.400 54.545,109.860 54.927,109.200 55.200 C 108.540 55.473,108.000 55.855,108.000 56.049 C 108.000 56.242,107.810 56.400,107.578 56.400 C 107.069 56.400,102.256 59.607,102.067 60.072 C 101.993 60.253,101.770 60.400,101.571 60.400 C 101.372 60.400,100.892 60.659,100.505 60.976 C 100.117 61.292,98.106 62.823,96.035 64.377 C 90.570 68.478,85.102 73.291,79.197 79.197 C 73.291 85.102,68.478 90.570,64.377 96.035 C 62.823 98.106,61.292 100.117,60.976 100.505 C 60.659 100.892,60.400 101.372,60.400 101.571 C 60.400 101.770,60.243 101.993,60.051 102.067 C 59.859 102.140,58.600 103.910,57.252 106.000 C 55.905 108.090,54.622 110.017,54.401 110.283 C 54.181 110.549,54.000 110.841,54.000 110.931 C 54.000 111.022,52.870 113.055,51.489 115.448 C 48.696 120.291,43.411 130.958,41.951 134.700 C 41.448 135.989,40.858 137.460,40.426 138.500 C 40.221 138.995,39.824 140.120,39.545 141.000 C 39.265 141.880,38.893 142.771,38.718 142.980 C 38.543 143.189,38.400 143.763,38.400 144.256 C 38.400 144.749,38.220 145.264,38.000 145.400 C 37.780 145.536,37.600 146.076,37.600 146.600 C 37.600 147.124,37.441 147.651,37.246 147.771 C 37.051 147.892,36.801 148.487,36.688 149.095 C 36.576 149.703,35.909 152.270,35.205 154.800 C 32.610 164.122,31.280 171.237,29.972 182.800 C 28.324 197.363,29.353 218.419,32.463 233.800 C 34.262 242.694,37.517 254.522,38.819 256.895 C 39.029 257.277,39.200 257.864,39.200 258.200 C 39.200 258.536,39.359 259.123,39.553 259.505 C 39.903 260.192,40.473 261.551,41.146 263.300 C 46.164 276.334,56.742 294.710,65.394 305.425 C 73.692 315.702,82.560 324.790,91.391 332.067 C 93.547 333.844,98.960 337.972,101.006 339.400 C 102.267 340.280,103.533 341.225,103.821 341.500 C 104.108 341.775,104.502 342.000,104.696 342.000 C 104.890 342.000,105.407 342.315,105.845 342.700 C 106.283 343.085,107.082 343.659,107.620 343.976 C 108.159 344.292,109.741 345.249,111.136 346.102 C 116.005 349.079,117.050 349.642,124.400 353.246 C 131.404 356.681,132.323 357.108,134.500 357.946 C 134.995 358.137,135.895 358.497,136.500 358.746 C 137.105 358.996,138.005 359.356,138.500 359.546 C 138.995 359.737,139.850 360.088,140.400 360.327 C 142.039 361.040,150.706 363.815,155.000 365.002 C 180.436 372.036,211.650 372.773,237.200 366.943 C 242.843 365.655,243.434 365.513,244.400 365.208 C 244.950 365.035,246.210 364.666,247.200 364.389 C 249.774 363.668,254.062 362.348,255.000 361.988 C 255.440 361.819,256.430 361.464,257.200 361.200 C 257.970 360.936,259.005 360.557,259.500 360.360 C 261.815 359.435,262.651 359.080,263.295 358.753 C 263.677 358.559,264.174 358.400,264.399 358.400 C 264.960 358.400,267.375 357.291,275.800 353.163 C 282.887 349.691,283.812 349.191,288.864 346.102 C 290.259 345.249,291.841 344.292,292.380 343.976 C 292.918 343.659,293.717 343.085,294.155 342.700 C 294.593 342.315,295.172 342.000,295.442 342.000 C 295.712 342.000,295.993 341.858,296.067 341.685 C 296.140 341.512,297.723 340.303,299.585 338.998 C 302.454 336.987,308.545 332.305,309.200 331.608 C 309.310 331.491,310.570 330.413,312.000 329.212 C 315.359 326.393,326.393 315.359,329.212 312.000 C 330.413 310.570,331.490 309.310,331.606 309.200 C 332.193 308.644,337.711 301.446,339.424 299.000 C 340.502 297.460,341.523 296.140,341.693 296.067 C 341.862 295.993,342.000 295.712,342.000 295.442 C 342.000 295.172,342.315 294.593,342.700 294.155 C 343.085 293.717,343.659 292.918,343.976 292.380 C 344.292 291.841,345.249 290.259,346.102 288.864 C 346.955 287.470,348.098 285.580,348.644 284.664 C 349.611 283.041,356.558 268.991,357.180 267.400 C 357.352 266.960,357.697 266.105,357.946 265.500 C 358.196 264.895,358.580 263.950,358.800 263.400 C 359.020 262.850,359.380 261.950,359.600 261.400 C 359.820 260.850,360.173 259.995,360.385 259.500 C 360.981 258.105,363.615 250.044,364.240 247.700 C 364.548 246.545,365.083 244.565,365.430 243.300 C 371.547 220.956,372.512 192.441,367.970 168.213 C 366.301 159.309,362.604 145.617,361.191 143.105 C 360.976 142.723,360.800 142.136,360.800 141.800 C 360.800 141.464,360.641 140.877,360.447 140.495 C 360.097 139.808,359.527 138.449,358.854 136.700 C 357.722 133.761,357.003 132.162,353.678 125.200 C 351.619 120.888,350.301 118.446,345.951 110.881 C 337.199 95.663,319.286 75.842,303.800 64.241 C 301.820 62.758,299.875 61.280,299.478 60.957 C 293.736 56.288,274.186 45.417,265.300 41.951 C 264.011 41.448,262.540 40.858,261.500 40.426 C 261.005 40.221,259.880 39.824,259.000 39.545 C 258.120 39.265,257.229 38.893,257.020 38.718 C 256.811 38.543,256.314 38.400,255.915 38.400 C 255.516 38.400,254.877 38.236,254.495 38.036 C 252.889 37.194,242.333 34.291,236.200 33.004 C 228.027 31.289,223.993 30.695,213.200 29.615 C 208.312 29.127,190.952 29.160,186.000 29.668 M214.095 62.399 C 222.953 71.088,235.690 83.621,242.400 90.250 C 253.538 101.254,266.638 114.102,277.671 124.842 C 280.020 127.129,290.730 137.654,301.471 148.231 C 312.212 158.809,323.962 170.352,327.582 173.884 C 333.344 179.504,334.117 180.406,333.782 181.120 C 333.572 181.568,322.757 192.705,309.750 205.868 C 296.742 219.030,282.086 233.902,277.182 238.916 C 272.277 243.930,268.042 247.980,267.771 247.916 C 267.167 247.774,256.000 236.959,256.000 236.516 C 256.001 236.179,261.328 230.707,286.100 205.600 C 294.674 196.910,303.308 188.157,305.287 186.150 L 308.885 182.500 306.308 179.950 C 302.454 176.136,259.846 134.161,253.981 128.400 C 251.182 125.650,239.286 113.930,227.546 102.356 C 215.806 90.781,204.255 79.423,201.877 77.116 L 197.554 72.921 169.862 100.761 C 124.996 145.866,101.383 169.471,95.218 175.377 L 89.437 180.917 102.268 193.559 C 109.325 200.511,117.596 208.606,120.649 211.546 C 136.644 226.953,145.207 235.659,144.901 236.206 C 144.206 237.446,133.436 248.026,132.978 247.917 C 132.707 247.853,123.602 239.048,112.743 228.351 C 101.884 217.654,92.460 208.417,91.800 207.825 C 88.814 205.145,64.800 181.037,64.800 180.719 C 64.800 180.523,66.195 178.961,67.900 177.247 C 72.675 172.449,117.215 127.288,130.639 113.634 C 137.218 106.943,146.977 97.043,152.327 91.634 C 157.677 86.225,169.910 73.829,179.510 64.087 C 189.111 54.344,197.196 46.424,197.477 46.487 C 197.759 46.549,205.237 53.709,214.095 62.399 M204.651 93.044 C 208.363 96.698,215.545 103.763,220.611 108.744 C 225.677 113.725,240.347 128.166,253.211 140.835 C 266.075 153.504,280.812 168.007,285.959 173.064 C 293.464 180.436,295.246 182.388,294.954 182.910 C 294.248 184.172,249.432 229.600,248.893 229.600 C 248.341 229.600,233.500 214.501,233.651 214.093 C 233.733 213.873,241.000 206.373,249.800 197.427 C 258.600 188.481,265.850 181.021,265.910 180.850 C 266.007 180.577,227.375 142.202,226.393 141.596 C 226.187 141.469,219.906 135.297,212.436 127.882 C 204.965 120.467,198.685 114.400,198.480 114.400 C 198.275 114.400,188.948 123.691,177.753 135.046 C 166.559 146.401,151.865 161.281,145.100 168.111 C 138.335 174.942,132.800 180.649,132.800 180.793 C 132.800 180.937,135.275 183.464,138.300 186.407 C 150.019 197.811,166.400 214.136,166.400 214.410 C 166.400 214.858,152.518 228.800,152.072 228.800 C 151.854 228.800,149.346 226.505,146.498 223.700 C 143.650 220.895,132.833 210.256,122.460 200.058 C 112.087 189.860,103.600 181.343,103.600 181.131 C 103.600 180.920,106.885 177.473,110.900 173.471 C 114.915 169.469,135.992 148.241,157.738 126.298 C 179.484 104.354,197.417 86.400,197.589 86.400 C 197.762 86.400,200.940 89.390,204.651 93.044 M212.478 166.600 C 219.825 173.860,225.978 180.033,226.152 180.317 C 226.368 180.671,223.639 183.695,217.487 189.917 C 212.548 194.913,206.857 200.678,204.840 202.729 C 202.823 204.780,201.020 206.400,200.833 206.329 C 200.029 206.024,173.200 179.364,173.200 178.870 C 173.200 178.569,178.224 173.256,184.364 167.062 C 190.504 160.868,196.039 155.218,196.664 154.506 C 198.352 152.583,198.093 152.385,212.478 166.600 M244.800 264.566 C 255.907 267.278,262.147 275.204,262.145 286.600 C 262.141 300.239,253.586 308.308,238.700 308.713 L 232.800 308.873 232.800 286.437 L 232.800 264.000 237.700 264.014 C 240.395 264.022,243.590 264.270,244.800 264.566 M117.600 267.600 C 118.706 268.706,118.869 305.874,117.772 306.971 C 116.108 308.635,113.379 307.987,112.987 305.836 C 112.299 302.051,112.999 267.936,113.776 267.368 C 114.884 266.558,116.666 266.666,117.600 267.600 M104.307 268.664 C 105.546 269.289,106.749 270.160,106.980 270.600 C 107.211 271.040,107.580 271.528,107.800 271.685 C 108.053 271.865,108.244 278.294,108.320 289.151 L 108.440 306.332 107.544 307.166 C 106.409 308.224,105.195 308.225,103.854 307.171 L 102.800 306.342 102.800 296.971 L 102.800 287.600 96.000 287.600 L 89.200 287.600 89.200 296.973 L 89.200 306.346 88.038 307.173 C 86.573 308.216,85.587 308.220,84.475 307.184 C 83.477 306.254,83.072 275.050,84.025 272.526 C 85.925 267.498,97.594 265.276,104.307 268.664 M239.500 270.032 C 238.517 270.604,238.410 301.579,239.388 302.390 C 241.564 304.196,248.613 301.259,252.270 297.023 C 257.598 290.853,257.788 281.541,252.701 275.977 C 249.055 271.989,241.771 268.709,239.500 270.032 M91.309 272.024 C 89.435 272.596,89.159 273.455,89.286 278.299 L 89.400 282.600 96.100 282.710 L 102.800 282.819 102.800 278.279 C 102.800 272.159,102.521 271.860,96.678 271.724 C 94.435 271.672,92.019 271.807,91.309 272.024 M155.342 273.381 C 156.575 274.524,156.609 274.723,155.777 275.911 C 154.552 277.660,150.400 276.767,150.400 274.754 C 150.400 272.627,153.576 271.744,155.342 273.381 M285.256 272.800 C 285.471 272.800,285.536 272.980,285.400 273.200 C 285.090 273.701,282.800 273.731,282.800 273.233 C 282.800 272.754,283.657 272.418,284.333 272.632 C 284.626 272.724,285.041 272.800,285.256 272.800 M283.505 280.756 C 283.887 280.951,284.890 281.446,285.734 281.856 C 290.212 284.029,293.213 288.810,293.330 293.960 L 293.400 297.000 282.643 297.200 C 270.543 297.425,270.116 297.534,272.031 299.909 C 274.982 303.569,279.138 304.429,283.704 302.324 L 286.473 301.048 287.821 302.624 C 289.681 304.798,289.164 305.851,285.400 307.551 C 284.740 307.849,283.887 308.252,283.505 308.447 C 282.510 308.953,276.644 308.883,275.319 308.349 C 272.241 307.110,270.630 306.105,269.152 304.502 C 262.905 297.724,264.995 285.422,273.035 281.654 C 273.676 281.353,274.470 280.959,274.800 280.777 C 275.614 280.329,282.639 280.312,283.505 280.756 M303.556 283.287 C 306.737 289.207,307.195 289.248,309.959 283.862 L 311.735 280.400 314.444 280.400 C 317.943 280.400,317.941 280.387,315.328 284.823 C 309.627 294.500,309.567 293.320,316.256 303.080 C 320.358 309.067,320.347 308.862,316.559 308.717 L 313.519 308.600 312.586 306.936 C 312.072 306.020,310.920 304.067,310.026 302.595 C 309.132 301.123,308.400 299.769,308.400 299.586 C 308.400 299.252,306.830 298.609,306.635 298.863 C 305.976 299.719,304.000 302.797,304.000 302.967 C 304.000 303.089,303.244 304.452,302.320 305.995 L 300.639 308.800 297.786 308.800 C 294.251 308.800,294.155 308.701,295.616 306.577 C 296.267 305.630,296.800 304.743,296.800 304.606 C 296.800 304.469,297.520 303.296,298.400 302.000 C 299.280 300.704,300.000 299.554,300.000 299.445 C 300.000 299.336,300.740 298.066,301.644 296.625 C 303.795 293.194,303.901 293.563,298.127 284.440 C 295.450 280.212,295.419 280.344,299.056 280.483 L 302.111 280.600 303.556 283.287 M154.784 282.392 C 156.159 283.127,156.400 285.011,156.400 295.000 C 156.400 306.961,155.799 308.928,152.498 307.767 C 150.493 307.062,150.383 306.333,150.496 294.464 L 150.600 283.528 151.544 282.764 C 152.588 281.920,153.670 281.795,154.784 282.392 M140.971 283.183 C 146.040 284.359,147.134 286.464,147.171 295.105 C 147.201 302.306,147.104 302.810,145.326 304.670 C 142.045 308.102,129.346 308.965,128.885 305.787 C 128.608 303.879,129.622 303.408,134.267 303.289 C 141.753 303.096,141.997 302.841,141.997 295.200 C 141.997 287.472,141.447 286.952,133.591 287.268 C 127.699 287.505,128.237 285.780,128.000 305.197 C 127.778 323.365,127.879 322.755,125.100 322.787 C 122.374 322.819,122.400 322.989,122.400 305.038 C 122.400 285.621,122.444 285.460,128.287 283.375 C 130.041 282.749,138.544 282.621,140.971 283.183 M180.800 283.872 C 184.897 286.424,185.200 287.382,185.200 297.797 L 185.200 306.342 184.146 307.171 C 182.879 308.168,181.904 308.218,180.586 307.354 L 179.600 306.708 179.600 298.173 C 179.600 292.548,179.442 289.290,179.136 288.619 L 178.672 287.600 172.336 287.600 L 166.000 287.600 166.000 296.818 L 166.000 306.036 165.018 307.018 C 163.823 308.213,162.446 308.275,161.275 307.184 C 159.939 305.940,159.902 284.898,161.233 283.567 C 162.521 282.279,178.646 282.531,180.800 283.872 M208.101 283.371 C 215.417 285.982,215.380 294.287,208.040 296.745 C 205.577 297.570,196.650 297.339,195.827 296.430 C 193.893 294.293,196.493 292.807,202.200 292.788 C 206.624 292.773,207.451 292.443,207.832 290.542 C 208.334 288.028,207.158 287.418,201.519 287.269 C 194.414 287.081,194.600 286.875,194.600 294.924 C 194.600 302.951,194.378 302.662,200.725 302.871 C 205.860 303.040,207.200 303.512,207.200 305.152 C 207.200 306.862,206.217 307.174,200.800 307.181 C 190.520 307.195,188.783 305.403,188.829 294.839 C 188.866 286.593,190.032 284.338,194.849 283.201 C 197.148 282.658,206.437 282.777,208.101 283.371 M277.000 285.893 C 274.836 286.435,272.001 289.274,272.000 290.900 L 272.000 292.000 279.557 292.000 C 288.474 292.000,288.961 291.704,285.718 288.266 C 283.519 285.935,280.315 285.063,277.000 285.893 ", stroke: "none", fill: "#fbfbfb", "fill-rule": "evenodd" }),
            React__default['default'].createElement("path", { id: "path3", d: "M195.300 29.099 C 197.885 29.168,202.115 29.168,204.700 29.099 C 207.285 29.029,205.170 28.972,200.000 28.972 C 194.830 28.972,192.715 29.029,195.300 29.099 M183.400 29.600 L 180.600 29.859 183.000 29.894 C 184.320 29.914,186.300 29.790,187.400 29.618 C 190.005 29.213,187.706 29.202,183.400 29.600 M212.600 29.606 C 214.640 29.936,219.469 30.119,219.167 29.854 C 219.075 29.773,217.110 29.612,214.800 29.495 C 211.968 29.351,211.251 29.387,212.600 29.606 M176.600 30.400 L 174.600 30.674 176.400 30.690 C 177.390 30.698,178.740 30.568,179.400 30.400 C 180.977 29.999,179.525 29.999,176.600 30.400 M220.600 30.389 C 221.816 30.709,225.473 30.922,225.167 30.655 C 225.075 30.575,223.740 30.411,222.200 30.291 C 220.502 30.159,219.872 30.198,220.600 30.389 M169.000 31.603 C 168.485 31.826,168.913 31.867,170.200 31.718 C 171.300 31.591,172.275 31.423,172.367 31.344 C 172.714 31.045,169.764 31.272,169.000 31.603 M228.200 31.454 C 228.640 31.543,230.080 31.809,231.400 32.045 C 232.720 32.281,235.020 32.753,236.510 33.094 C 238.001 33.434,239.302 33.631,239.403 33.530 C 239.503 33.430,238.104 33.033,236.293 32.648 C 234.482 32.263,232.245 31.780,231.323 31.574 C 230.400 31.368,229.140 31.221,228.523 31.246 C 227.754 31.278,227.652 31.344,228.200 31.454 M166.100 32.276 C 166.485 32.376,167.115 32.376,167.500 32.276 C 167.885 32.175,167.570 32.093,166.800 32.093 C 166.030 32.093,165.715 32.175,166.100 32.276 M161.400 33.219 C 160.842 33.471,161.085 33.507,162.200 33.338 C 163.080 33.204,163.875 33.028,163.967 32.947 C 164.310 32.644,162.168 32.871,161.400 33.219 M157.800 34.000 C 156.781 34.438,157.832 34.438,159.200 34.000 C 160.004 33.743,160.043 33.677,159.400 33.668 C 158.960 33.662,158.240 33.811,157.800 34.000 M240.800 34.000 C 242.168 34.438,243.219 34.438,242.200 34.000 C 241.760 33.811,241.040 33.662,240.600 33.668 C 239.957 33.677,239.996 33.743,240.800 34.000 M155.000 34.800 C 154.496 35.017,154.422 35.144,154.800 35.144 C 155.130 35.144,155.760 34.989,156.200 34.800 C 156.704 34.583,156.778 34.456,156.400 34.456 C 156.070 34.456,155.440 34.611,155.000 34.800 M243.800 34.800 C 244.996 35.314,245.995 35.314,245.200 34.800 C 244.870 34.587,244.240 34.422,243.800 34.434 L 243.000 34.456 243.800 34.800 M152.200 35.600 C 151.696 35.817,151.622 35.944,152.000 35.944 C 152.330 35.944,152.960 35.789,153.400 35.600 C 153.904 35.383,153.978 35.256,153.600 35.256 C 153.270 35.256,152.640 35.411,152.200 35.600 M149.200 36.400 C 148.667 36.745,148.667 36.788,149.200 36.788 C 149.530 36.788,150.070 36.613,150.400 36.400 C 150.933 36.055,150.933 36.012,150.400 36.012 C 150.070 36.012,149.530 36.187,149.200 36.400 M249.600 36.400 C 249.930 36.613,250.470 36.788,250.800 36.788 C 251.333 36.788,251.333 36.745,250.800 36.400 C 250.470 36.187,249.930 36.012,249.600 36.012 C 249.067 36.012,249.067 36.055,249.600 36.400 M146.800 37.200 C 146.267 37.545,146.267 37.588,146.800 37.588 C 147.130 37.588,147.670 37.413,148.000 37.200 C 148.533 36.855,148.533 36.812,148.000 36.812 C 147.670 36.812,147.130 36.987,146.800 37.200 M252.000 37.200 C 252.330 37.413,252.870 37.588,253.200 37.588 C 253.733 37.588,253.733 37.545,253.200 37.200 C 252.870 36.987,252.330 36.812,252.000 36.812 C 251.467 36.812,251.467 36.855,252.000 37.200 M129.400 43.978 C 128.520 44.395,127.997 44.750,128.239 44.768 C 128.728 44.804,131.200 43.638,131.200 43.371 C 131.200 43.130,131.176 43.138,129.400 43.978 M268.800 43.365 C 268.800 43.609,271.231 44.800,271.728 44.800 C 271.951 44.800,272.049 44.716,271.946 44.613 C 271.633 44.300,268.800 43.177,268.800 43.365 M124.489 46.265 C 123.768 46.620,123.243 46.977,123.324 47.057 C 123.495 47.228,126.000 46.024,126.000 45.771 C 126.000 45.529,125.947 45.546,124.489 46.265 M274.000 45.741 C 274.000 45.992,278.105 48.028,278.273 47.860 C 278.381 47.753,277.137 47.076,274.300 45.698 C 274.135 45.618,274.000 45.637,274.000 45.741 M191.295 52.105 C 188.163 55.243,185.600 57.912,185.600 58.036 C 185.600 58.160,188.157 55.683,191.282 52.531 C 194.407 49.379,197.149 46.800,197.375 46.800 C 197.600 46.800,199.498 48.465,201.592 50.500 L 205.400 54.200 201.608 50.300 C 199.522 48.155,197.630 46.400,197.403 46.400 C 197.176 46.400,194.427 48.967,191.295 52.105 M119.500 48.827 C 118.675 49.263,118.000 49.708,118.000 49.818 C 118.000 49.927,118.720 49.649,119.600 49.200 C 120.480 48.751,121.200 48.297,121.200 48.192 C 121.200 47.930,121.197 47.931,119.500 48.827 M116.000 50.836 C 115.336 51.379,115.269 51.515,115.800 51.240 C 117.105 50.566,117.828 50.012,117.400 50.015 C 117.180 50.017,116.550 50.386,116.000 50.836 M282.800 50.422 C 283.833 51.126,286.400 52.425,286.400 52.242 C 286.400 52.033,282.805 49.997,282.450 50.006 C 282.312 50.009,282.470 50.196,282.800 50.422 M113.500 52.229 C 112.005 53.040,112.096 53.378,113.600 52.600 C 114.260 52.259,114.800 51.894,114.800 51.790 C 114.800 51.532,114.757 51.547,113.500 52.229 M109.200 54.820 L 108.200 55.622 109.300 55.147 C 109.905 54.885,110.400 54.520,110.400 54.336 C 110.400 53.879,110.345 53.902,109.200 54.820 M208.602 57.602 C 209.002 58.044,209.411 58.322,209.512 58.221 C 209.728 58.005,208.588 56.800,208.167 56.800 C 208.007 56.800,208.203 57.161,208.602 57.602 M294.400 57.324 C 294.400 57.417,295.165 57.998,296.100 58.615 C 297.035 59.232,297.589 59.480,297.331 59.168 C 296.834 58.567,294.400 57.036,294.400 57.324 M299.200 60.753 C 299.200 60.952,299.434 61.204,299.719 61.314 C 300.005 61.423,301.490 62.467,303.019 63.634 C 304.549 64.800,305.550 65.446,305.244 65.069 C 304.427 64.062,299.200 60.329,299.200 60.753 M98.000 62.446 C 96.790 63.349,95.440 64.462,95.000 64.920 C 94.560 65.377,95.010 65.119,96.000 64.346 C 96.990 63.572,98.517 62.458,99.393 61.870 C 100.269 61.281,100.809 60.801,100.593 60.802 C 100.377 60.803,99.210 61.542,98.000 62.446 M216.279 64.804 C 216.763 65.356,220.543 69.142,224.679 73.218 C 228.816 77.295,237.293 85.663,243.518 91.815 C 249.743 97.967,254.973 103.049,255.142 103.108 C 255.542 103.249,216.655 64.717,215.674 64.000 C 215.523 63.890,215.796 64.252,216.279 64.804 M175.643 67.929 C 174.677 68.958,171.077 72.680,167.644 76.200 C 162.610 81.361,163.008 81.013,169.700 74.404 C 174.265 69.896,178.000 66.161,178.000 66.104 C 178.000 65.670,177.135 66.340,175.643 67.929 M86.545 71.920 C 84.769 73.614,84.146 74.280,85.162 73.400 C 86.177 72.520,87.700 71.204,88.546 70.475 C 89.392 69.747,90.014 69.081,89.929 68.996 C 89.844 68.910,88.321 70.226,86.545 71.920 M310.971 69.897 C 311.615 70.609,312.230 71.104,312.338 70.996 C 312.445 70.888,312.458 70.755,312.367 70.700 C 312.275 70.645,311.660 70.151,311.000 69.601 L 309.800 68.603 310.971 69.897 M312.800 71.325 C 312.800 71.394,313.385 71.979,314.100 72.625 L 315.400 73.800 314.225 72.500 C 313.130 71.288,312.800 71.016,312.800 71.325 M198.596 73.996 C 199.226 74.654,199.819 75.114,199.913 75.020 C 200.122 74.812,198.156 72.800,197.743 72.800 C 197.582 72.800,197.966 73.338,198.596 73.996 M78.812 78.988 C 76.959 80.851,75.523 82.427,75.621 82.491 C 75.719 82.555,77.352 81.030,79.249 79.103 C 81.146 77.176,82.582 75.600,82.440 75.600 C 82.298 75.600,80.666 77.124,78.812 78.988 M320.751 79.103 C 322.648 81.030,324.281 82.555,324.379 82.491 C 324.599 82.349,317.920 75.600,317.560 75.600 C 317.418 75.600,318.854 77.176,320.751 79.103 M202.000 76.948 C 202.000 77.107,202.450 77.686,203.000 78.236 C 203.550 78.786,204.000 79.080,204.000 78.888 C 204.000 78.696,203.550 78.117,203.000 77.600 C 202.450 77.083,202.000 76.790,202.000 76.948 M204.400 79.333 C 204.400 79.477,224.678 99.684,225.125 99.985 C 225.276 100.086,220.721 95.451,215.003 89.685 C 205.123 79.722,204.400 79.016,204.400 79.333 M184.373 85.823 C 181.418 88.806,178.916 91.371,178.814 91.523 C 178.712 91.675,181.187 89.282,184.314 86.205 C 187.441 83.128,190.000 80.563,190.000 80.505 C 190.000 80.189,189.288 80.862,184.373 85.823 M71.860 86.492 C 70.205 88.302,68.918 89.851,69.001 89.934 C 69.083 90.016,69.747 89.392,70.475 88.546 C 71.204 87.700,72.590 86.151,73.555 85.104 C 74.520 84.057,75.210 83.200,75.089 83.200 C 74.968 83.200,73.515 84.681,71.860 86.492 M326.400 84.925 C 326.400 84.994,326.985 85.579,327.700 86.225 L 329.000 87.400 327.825 86.100 C 326.730 84.888,326.400 84.616,326.400 84.925 M155.800 88.000 C 154.272 89.540,153.197 90.778,153.411 90.752 C 153.798 90.704,159.099 85.200,158.758 85.200 C 158.659 85.200,157.328 86.460,155.800 88.000 M170.405 113.500 C 155.593 128.405,137.787 146.372,130.837 153.426 C 123.887 160.481,136.042 148.334,157.848 126.434 C 194.954 89.169,197.544 86.654,198.248 87.208 C 198.941 87.754,198.957 87.745,198.451 87.100 C 198.149 86.715,197.775 86.400,197.619 86.400 C 197.464 86.400,185.218 98.595,170.405 113.500 M328.800 87.725 C 328.800 87.794,329.373 88.379,330.074 89.025 L 331.349 90.200 330.374 88.922 C 329.547 87.837,328.800 87.269,328.800 87.725 M332.608 92.100 C 333.467 93.145,334.234 94.000,334.312 94.000 C 334.598 94.000,332.861 91.778,331.966 91.000 C 331.460 90.560,331.749 91.055,332.608 92.100 M63.926 96.100 C 62.073 98.399,60.800 100.254,60.800 100.655 C 60.800 100.837,61.281 100.269,61.870 99.393 C 62.458 98.517,63.560 97.035,64.318 96.100 C 65.076 95.165,65.606 94.400,65.496 94.400 C 65.386 94.400,64.680 95.165,63.926 96.100 M146.200 97.777 C 144.440 99.599,139.400 104.734,135.000 109.186 C 130.600 113.638,127.360 117.039,127.800 116.744 C 129.019 115.926,150.240 94.396,149.792 94.431 C 149.576 94.448,147.960 95.954,146.200 97.777 M156.600 113.600 C 146.042 124.160,137.511 132.800,137.642 132.800 C 137.773 132.800,146.413 124.238,156.840 113.774 C 178.936 91.600,176.172 94.400,175.965 94.400 C 175.873 94.400,167.158 103.040,156.600 113.600 M336.757 97.500 C 338.136 99.315,339.342 100.800,339.437 100.800 C 339.725 100.800,335.665 95.351,334.933 94.756 C 334.557 94.450,335.378 95.685,336.757 97.500 M218.484 106.988 C 222.820 111.375,226.420 114.883,226.484 114.783 C 226.548 114.682,223.000 111.092,218.600 106.805 L 210.600 99.010 218.484 106.988 M341.837 104.500 C 342.649 105.765,343.388 106.800,343.479 106.800 C 343.747 106.800,342.300 104.482,341.290 103.294 C 340.779 102.692,341.025 103.235,341.837 104.500 M232.000 106.512 C 232.000 106.808,248.952 123.581,249.101 123.433 C 249.174 123.359,235.411 109.537,232.174 106.433 C 232.078 106.342,232.000 106.377,232.000 106.512 M54.637 109.400 C 54.276 109.950,54.137 110.400,54.327 110.400 C 54.516 110.400,54.877 109.950,55.127 109.400 C 55.378 108.850,55.517 108.400,55.437 108.400 C 55.357 108.400,54.997 108.850,54.637 109.400 M271.386 119.076 C 275.783 123.518,279.470 127.063,279.579 126.954 C 279.687 126.846,278.432 125.489,276.788 123.940 C 275.145 122.390,271.458 118.845,268.595 116.061 C 265.732 113.278,266.988 114.634,271.386 119.076 M346.009 111.100 C 346.014 111.265,346.385 111.850,346.833 112.400 L 347.648 113.400 347.014 112.100 C 346.411 110.865,345.989 110.445,346.009 111.100 M52.214 113.435 C 51.841 114.004,51.605 114.538,51.689 114.622 C 51.773 114.707,52.158 114.241,52.544 113.588 C 53.406 112.128,53.148 112.009,52.214 113.435 M348.200 114.800 C 348.541 115.460,348.911 116.000,349.021 116.000 C 349.131 116.000,348.941 115.460,348.600 114.800 C 348.259 114.140,347.889 113.600,347.779 113.600 C 347.669 113.600,347.859 114.140,348.200 114.800 M186.600 125.600 C 180.223 131.980,175.130 137.200,175.284 137.200 C 175.437 137.200,180.745 131.977,187.081 125.594 C 193.416 119.211,198.509 113.991,198.397 113.994 C 198.286 113.997,192.977 119.220,186.600 125.600 M50.614 116.235 C 50.241 116.804,50.005 117.338,50.089 117.422 C 50.173 117.507,50.558 117.041,50.944 116.388 C 51.806 114.928,51.548 114.809,50.614 116.235 M227.600 116.200 C 228.117 116.750,228.696 117.200,228.888 117.200 C 229.080 117.200,228.786 116.750,228.236 116.200 C 227.686 115.650,227.107 115.200,226.948 115.200 C 226.790 115.200,227.083 115.650,227.600 116.200 M350.240 118.402 C 350.839 119.503,351.393 120.340,351.471 120.263 C 351.643 120.090,349.608 116.400,349.341 116.400 C 349.236 116.400,349.640 117.301,350.240 118.402 M229.233 117.700 C 229.325 117.755,233.990 122.297,239.600 127.793 L 249.800 137.785 239.803 127.693 C 234.305 122.142,229.640 117.600,229.436 117.600 C 229.233 117.600,229.142 117.645,229.233 117.700 M121.666 122.727 C 120.273 124.197,115.143 129.450,110.267 134.400 C 103.630 141.137,104.343 140.483,113.100 131.803 C 119.535 125.424,124.800 120.159,124.800 120.103 C 124.800 119.633,123.820 120.454,121.666 122.727 M205.406 120.700 C 205.874 121.383,226.183 141.550,226.293 141.441 C 226.394 141.339,205.856 120.781,205.372 120.500 C 205.277 120.445,205.293 120.535,205.406 120.700 M351.879 121.500 C 352.167 122.294,353.200 123.897,353.200 123.550 C 353.200 123.202,351.963 120.800,351.783 120.800 C 351.696 120.800,351.739 121.115,351.879 121.500 M46.786 123.498 C 46.268 124.544,45.779 125.535,45.698 125.700 C 45.618 125.865,45.637 126.000,45.741 126.000 C 45.992 126.000,48.028 121.895,47.860 121.727 C 47.788 121.654,47.304 122.451,46.786 123.498 M44.400 128.084 C 44.400 128.204,44.128 128.954,43.795 129.751 C 43.462 130.548,43.273 131.200,43.376 131.200 C 43.731 131.200,44.904 128.370,44.652 128.119 C 44.514 127.980,44.400 127.965,44.400 128.084 M355.200 128.084 C 355.200 128.516,356.415 131.200,356.611 131.200 C 356.721 131.200,356.533 130.534,356.193 129.721 C 355.593 128.286,355.200 127.638,355.200 128.084 M289.959 137.370 C 294.697 142.094,298.633 145.901,298.704 145.829 C 298.852 145.681,282.113 129.059,281.647 128.891 C 281.480 128.830,285.220 132.646,289.959 137.370 M255.200 129.367 C 255.200 129.788,256.405 130.928,256.621 130.712 C 256.722 130.611,256.444 130.202,256.002 129.802 C 255.561 129.403,255.200 129.207,255.200 129.367 M258.448 132.900 C 258.548 132.955,262.583 136.870,267.415 141.600 L 276.200 150.200 267.603 141.500 C 262.875 136.715,258.840 132.800,258.637 132.800 C 258.433 132.800,258.348 132.845,258.448 132.900 M116.035 154.352 C 104.504 165.928,97.754 172.849,101.035 169.731 C 108.909 162.246,137.863 133.186,137.378 133.252 C 137.170 133.280,127.566 142.775,116.035 154.352 M171.660 140.642 C 171.362 140.978,171.199 141.332,171.295 141.429 C 171.392 141.526,171.798 141.244,172.198 140.802 C 172.597 140.361,172.761 140.007,172.562 140.015 C 172.363 140.024,171.957 140.305,171.660 140.642 M170.042 142.315 C 169.735 142.692,165.415 147.128,160.442 152.173 C 155.469 157.218,151.746 161.088,152.168 160.773 C 153.257 159.960,170.572 142.428,170.733 141.975 C 170.932 141.416,170.669 141.546,170.042 142.315 M232.800 147.800 C 236.205 151.210,239.080 154.000,239.190 154.000 C 239.300 154.000,236.605 151.210,233.200 147.800 C 229.795 144.390,226.920 141.600,226.810 141.600 C 226.700 141.600,229.395 144.390,232.800 147.800 M36.200 149.600 C 36.050 150.073,36.017 150.550,36.127 150.660 C 36.237 150.770,36.450 150.473,36.600 150.000 C 36.750 149.527,36.783 149.050,36.673 148.940 C 36.563 148.830,36.350 149.127,36.200 149.600 M278.769 166.400 C 287.696 175.310,295.088 182.542,295.196 182.470 C 295.382 182.348,285.946 172.985,269.769 157.238 C 265.792 153.367,269.842 157.490,278.769 166.400 M364.056 151.600 C 364.056 151.930,364.211 152.560,364.400 153.000 C 364.617 153.504,364.744 153.578,364.744 153.200 C 364.744 152.870,364.589 152.240,364.400 151.800 C 364.183 151.296,364.056 151.222,364.056 151.600 M35.449 152.215 C 35.312 152.573,35.215 153.166,35.234 153.533 C 35.253 153.900,35.427 153.669,35.621 153.020 C 35.998 151.758,35.865 151.133,35.449 152.215 M88.689 156.169 C 87.198 157.726,82.518 162.510,78.290 166.800 C 73.930 171.224,75.182 170.063,81.184 164.116 C 87.004 158.350,91.683 153.566,91.583 153.485 C 91.482 153.404,90.180 154.612,88.689 156.169 M196.842 154.324 C 196.315 154.916,191.636 159.675,186.445 164.900 C 181.254 170.125,177.102 174.400,177.219 174.400 C 177.336 174.400,182.101 169.720,187.808 164.000 C 193.514 158.280,198.365 153.600,198.588 153.600 C 198.810 153.600,202.324 156.885,206.396 160.900 L 213.800 168.200 206.404 160.700 C 198.604 152.790,198.356 152.625,196.842 154.324 M306.433 153.700 C 306.525 153.755,307.140 154.250,307.800 154.800 L 309.000 155.800 308.030 154.700 C 307.497 154.095,306.882 153.600,306.664 153.600 C 306.445 153.600,306.342 153.645,306.433 153.700 M34.673 154.953 C 34.523 155.345,34.411 155.966,34.425 156.333 C 34.442 156.775,34.581 156.674,34.837 156.034 C 35.049 155.503,35.161 154.882,35.085 154.654 C 35.009 154.427,34.824 154.561,34.673 154.953 M33.800 158.400 C 33.648 159.091,33.607 159.741,33.709 159.842 C 33.811 159.944,34.009 159.453,34.150 158.750 C 34.483 157.083,34.160 156.760,33.800 158.400 M365.634 157.600 C 365.646 157.930,365.811 158.560,366.000 159.000 L 366.344 159.800 366.366 159.000 C 366.378 158.560,366.213 157.930,366.000 157.600 C 365.655 157.067,365.615 157.067,365.634 157.600 M293.662 167.500 C 299.163 172.945,303.785 177.483,303.932 177.585 C 304.079 177.687,299.701 173.232,294.203 167.685 C 288.705 162.138,284.083 157.600,283.933 157.600 C 283.783 157.600,288.161 162.055,293.662 167.500 M322.255 169.000 C 328.495 175.160,333.601 180.456,333.600 180.768 C 333.600 181.080,329.235 185.721,323.900 191.081 C 318.565 196.441,314.149 200.973,314.087 201.152 C 314.025 201.330,318.480 196.948,323.987 191.413 C 329.494 185.878,334.000 181.072,334.000 180.733 C 334.000 180.259,312.278 158.589,311.154 157.942 C 311.019 157.864,316.014 162.840,322.255 169.000 M366.468 160.800 C 366.488 161.839,367.118 163.546,367.132 162.600 C 367.138 162.160,366.989 161.440,366.800 161.000 C 366.589 160.510,366.461 160.432,366.468 160.800 M32.456 164.295 C 32.158 165.640,32.009 166.979,32.125 167.270 C 32.242 167.562,32.351 167.332,32.368 166.760 C 32.386 166.188,32.595 165.161,32.833 164.478 C 33.071 163.795,33.206 162.924,33.132 162.543 C 33.059 162.161,32.754 162.950,32.456 164.295 M367.462 165.400 C 367.596 166.280,367.772 167.075,367.853 167.167 C 368.156 167.510,367.929 165.368,367.581 164.600 C 367.329 164.042,367.293 164.285,367.462 165.400 M146.860 165.880 C 146.343 166.415,145.997 166.930,146.092 167.025 C 146.186 167.119,146.685 166.748,147.200 166.200 C 147.715 165.652,148.061 165.137,147.968 165.055 C 147.876 164.974,147.377 165.345,146.860 165.880 M116.378 168.300 L 115.000 169.800 116.500 168.422 C 117.896 167.138,118.184 166.800,117.878 166.800 C 117.812 166.800,117.137 167.475,116.378 168.300 M31.469 169.156 C 31.321 169.895,31.220 170.883,31.244 171.350 C 31.268 171.817,31.447 171.390,31.642 170.400 C 31.837 169.410,31.938 168.423,31.867 168.206 C 31.796 167.990,31.617 168.417,31.469 169.156 M368.075 168.600 C 368.086 169.040,368.232 169.940,368.400 170.600 L 368.705 171.800 368.725 170.600 C 368.735 169.940,368.589 169.040,368.400 168.600 L 368.056 167.800 368.075 168.600 M260.194 174.698 L 266.186 180.796 262.996 184.098 L 259.806 187.400 263.201 184.099 L 266.595 180.799 260.399 174.699 L 254.203 168.600 260.194 174.698 M369.094 174.800 C 369.214 176.230,369.377 177.475,369.456 177.567 C 369.735 177.889,369.516 174.188,369.198 173.200 C 369.005 172.600,368.963 173.240,369.094 174.800 M30.470 175.850 C 30.431 176.758,30.311 178.108,30.201 178.850 L 30.003 180.200 30.423 178.862 C 30.653 178.127,30.774 176.777,30.691 175.862 L 30.540 174.200 30.470 175.850 M134.486 178.513 C 133.339 179.674,132.400 180.720,132.400 180.835 C 132.400 180.950,139.780 188.295,148.800 197.156 C 157.820 206.018,165.200 213.194,165.200 213.105 C 165.200 212.935,148.007 195.865,138.200 186.297 L 132.600 180.834 134.786 178.617 C 135.989 177.398,136.883 176.400,136.773 176.400 C 136.663 176.400,135.634 177.351,134.486 178.513 M173.700 177.823 C 172.805 178.795,173.151 179.370,176.700 182.809 L 180.200 186.200 176.806 182.697 C 173.679 179.470,173.453 179.128,173.933 178.358 C 174.550 177.370,174.411 177.052,173.700 177.823 M65.372 179.786 C 64.833 180.610,64.787 180.946,65.164 181.321 C 65.541 181.694,65.593 181.657,65.401 181.152 C 65.263 180.789,65.450 180.207,65.825 179.833 C 66.193 179.464,66.398 179.065,66.280 178.946 C 66.161 178.828,65.753 179.205,65.372 179.786 M90.010 179.878 L 89.162 180.956 98.278 190.078 C 103.291 195.095,107.493 199.200,107.614 199.200 C 107.736 199.200,103.712 195.088,98.673 190.063 L 89.511 180.925 90.574 179.863 C 91.158 179.278,91.461 178.800,91.247 178.800 C 91.033 178.800,90.477 179.285,90.010 179.878 M103.625 180.803 C 103.603 181.346,122.283 200.400,122.838 200.400 C 122.965 200.400,118.852 196.215,113.696 191.100 C 108.541 185.985,104.172 181.440,103.987 181.000 C 103.763 180.467,103.642 180.402,103.625 180.803 M213.939 192.930 C 207.195 199.789,201.739 205.464,201.814 205.542 C 201.889 205.620,203.425 204.180,205.228 202.342 C 207.030 200.504,212.531 194.928,217.452 189.951 C 225.056 182.261,226.936 180.238,226.300 180.430 C 226.245 180.447,220.683 186.072,213.939 192.930 M370.124 182.600 C 370.126 183.920,370.201 184.412,370.290 183.693 C 370.379 182.974,370.377 181.894,370.286 181.293 C 370.195 180.692,370.122 181.280,370.124 182.600 M29.468 184.555 C 29.308 186.730,29.254 188.588,29.350 188.683 C 29.597 188.930,30.117 182.286,29.922 181.365 C 29.833 180.944,29.629 182.380,29.468 184.555 M308.546 182.280 C 308.700 182.433,307.155 184.278,305.113 186.380 L 301.400 190.200 305.279 186.428 C 308.647 183.154,309.489 182.000,308.510 182.000 C 308.376 182.000,308.392 182.126,308.546 182.280 M288.695 189.105 C 285.453 192.353,282.800 195.119,282.800 195.252 C 282.800 195.430,290.494 187.791,294.767 183.372 C 294.858 183.278,294.856 183.200,294.762 183.200 C 294.667 183.200,291.937 185.857,288.695 189.105 M370.514 187.000 C 370.517 188.100,370.595 188.503,370.687 187.895 C 370.779 187.286,370.777 186.386,370.682 185.895 C 370.587 185.403,370.511 185.900,370.514 187.000 M73.207 189.389 C 74.193 190.483,75.149 191.492,75.330 191.632 C 75.512 191.771,79.292 195.467,83.730 199.845 C 88.169 204.224,94.869 210.775,98.619 214.403 C 104.057 219.663,103.773 219.345,97.219 212.832 C 83.026 198.727,71.341 187.320,73.207 189.389 M257.000 190.000 C 255.694 191.320,254.767 192.400,254.941 192.400 C 255.115 192.400,255.469 192.163,255.729 191.873 C 255.988 191.584,257.002 190.504,257.983 189.473 C 260.566 186.760,259.800 187.171,257.000 190.000 M370.975 200.000 C 370.975 205.830,371.031 208.215,371.099 205.300 C 371.167 202.385,371.167 197.615,371.099 194.700 C 371.031 191.785,370.975 194.170,370.975 200.000 M28.973 200.200 C 28.973 205.480,29.030 207.585,29.099 204.877 C 29.168 202.169,29.168 197.849,29.099 195.277 C 29.029 192.705,28.972 194.920,28.973 200.200 M244.000 203.267 C 238.390 208.982,233.730 213.870,233.645 214.129 C 233.560 214.388,233.560 214.503,233.645 214.385 C 233.730 214.266,238.569 209.361,244.397 203.485 C 250.226 197.608,254.816 192.817,254.597 192.838 C 254.379 192.858,249.610 197.551,244.000 203.267 M194.195 199.914 C 197.713 203.481,200.863 206.395,201.195 206.388 C 201.624 206.379,201.567 206.246,201.000 205.931 C 200.560 205.686,197.534 202.857,194.275 199.643 C 191.017 196.429,188.227 193.716,188.075 193.614 C 187.924 193.512,190.678 196.347,194.195 199.914 M280.800 210.913 C 274.970 216.810,270.151 221.773,270.092 221.942 C 270.032 222.112,274.882 217.339,280.870 211.337 C 286.858 205.335,291.677 200.372,291.578 200.308 C 291.480 200.244,286.630 205.017,280.800 210.913 M266.905 211.286 C 261.148 217.053,256.502 221.835,256.580 221.914 C 256.659 221.992,261.315 217.408,266.928 211.728 C 272.540 206.048,277.268 201.265,277.433 201.100 C 277.598 200.935,277.652 200.800,277.553 200.800 C 277.453 200.800,272.662 205.519,266.905 211.286 M132.689 210.100 C 137.399 214.775,141.376 218.683,141.527 218.785 C 141.677 218.887,137.932 215.062,133.203 210.285 C 128.475 205.508,124.498 201.600,124.366 201.600 C 124.233 201.600,127.978 205.425,132.689 210.100 M117.139 208.569 C 118.638 210.016,119.988 211.200,120.140 211.200 C 120.460 211.200,115.290 206.265,114.765 206.069 C 114.572 205.997,115.640 207.122,117.139 208.569 M29.495 215.200 C 29.612 217.510,29.773 219.475,29.854 219.567 C 30.119 219.869,29.936 215.040,29.606 213.000 C 29.387 211.651,29.351 212.368,29.495 215.200 M370.509 213.200 C 370.509 214.190,370.587 214.595,370.682 214.100 C 370.778 213.605,370.778 212.795,370.682 212.300 C 370.587 211.805,370.509 212.210,370.509 213.200 M165.785 213.827 C 165.936 214.388,165.686 214.956,165.004 215.597 C 164.452 216.115,164.000 216.694,164.000 216.884 C 164.000 217.073,164.553 216.598,165.228 215.829 C 166.236 214.682,166.376 214.301,166.009 213.715 C 165.603 213.066,165.582 213.077,165.785 213.827 M297.570 217.823 C 295.056 220.366,292.925 222.526,292.833 222.623 C 292.742 222.721,292.744 222.800,292.840 222.800 C 292.935 222.800,295.167 220.640,297.800 218.000 C 300.433 215.360,302.487 213.200,302.363 213.200 C 302.240 213.200,300.083 215.281,297.570 217.823 M370.068 217.200 C 370.026 218.190,369.906 219.720,369.802 220.600 L 369.612 222.200 370.022 220.600 C 370.248 219.720,370.368 218.190,370.288 217.200 L 370.144 215.400 370.068 217.200 M132.000 223.000 C 135.625 226.630,138.681 229.600,138.791 229.600 C 138.901 229.600,136.025 226.630,132.400 223.000 C 128.775 219.370,125.719 216.400,125.609 216.400 C 125.499 216.400,128.375 219.370,132.000 223.000 M243.250 224.150 C 248.096 229.082,248.783 229.643,249.450 229.218 C 250.173 228.757,250.172 228.749,249.423 228.987 C 248.813 229.181,247.476 228.088,243.223 223.919 L 237.800 218.604 243.250 224.150 M30.291 222.600 C 30.411 224.140,30.575 225.475,30.655 225.567 C 30.922 225.873,30.709 222.216,30.389 221.000 C 30.198 220.272,30.159 220.902,30.291 222.600 M369.267 223.650 C 369.230 224.447,369.111 225.707,369.001 226.450 L 368.803 227.800 369.223 226.460 C 369.454 225.723,369.574 224.463,369.489 223.660 L 369.334 222.200 369.267 223.650 M254.602 223.598 C 254.203 224.039,254.007 224.400,254.167 224.400 C 254.588 224.400,255.728 223.195,255.512 222.979 C 255.411 222.878,255.002 223.156,254.602 223.598 M148.828 226.000 C 150.424 227.540,151.861 228.800,152.022 228.800 C 152.183 228.800,151.015 227.540,149.427 226.000 C 147.839 224.460,146.401 223.200,146.233 223.200 C 146.064 223.200,147.232 224.460,148.828 226.000 M280.151 235.400 C 273.590 242.110,268.034 247.600,267.804 247.600 C 267.574 247.600,265.502 245.710,263.200 243.400 C 260.898 241.090,258.904 239.200,258.769 239.200 C 258.633 239.200,260.530 241.180,262.982 243.600 C 265.435 246.020,267.633 248.000,267.866 248.000 C 268.099 248.000,272.205 243.995,276.990 239.100 C 281.775 234.205,287.241 228.625,289.137 226.700 C 291.032 224.775,292.470 223.200,292.332 223.200 C 292.193 223.200,286.712 228.690,280.151 235.400 M266.060 225.880 C 265.543 226.415,265.197 226.930,265.292 227.025 C 265.386 227.119,265.885 226.748,266.400 226.200 C 266.915 225.652,267.261 225.137,267.168 225.055 C 267.076 224.974,266.577 225.345,266.060 225.880 M263.634 228.553 L 262.669 229.800 263.813 228.712 C 264.443 228.114,264.877 227.553,264.779 227.465 C 264.680 227.377,264.165 227.867,263.634 228.553 M31.293 229.200 C 31.293 229.970,31.375 230.285,31.476 229.900 C 31.576 229.515,31.576 228.885,31.476 228.500 C 31.375 228.115,31.293 228.430,31.293 229.200 M368.449 229.400 C 368.416 229.840,368.296 230.650,368.183 231.200 L 367.977 232.200 368.406 231.219 C 368.642 230.679,368.761 229.869,368.672 229.419 C 368.513 228.621,368.507 228.621,368.449 229.400 M258.298 233.825 C 257.034 235.049,256.000 236.195,256.000 236.371 C 256.000 236.929,257.638 238.800,258.125 238.800 C 258.382 238.800,258.099 238.343,257.496 237.784 C 256.073 236.464,256.033 236.594,258.687 233.912 C 261.610 230.959,261.323 230.895,258.298 233.825 M32.028 233.433 C 32.044 234.075,32.216 234.960,32.410 235.400 C 32.647 235.934,32.686 235.602,32.527 234.400 C 32.246 232.280,31.988 231.780,32.028 233.433 M367.649 233.600 C 367.616 233.930,367.489 234.650,367.367 235.200 C 367.175 236.064,367.207 236.103,367.599 235.488 C 367.848 235.097,367.975 234.377,367.881 233.888 C 367.786 233.400,367.682 233.270,367.649 233.600 M125.796 241.100 C 129.533 244.895,132.796 248.000,133.046 248.000 C 133.407 248.000,144.049 237.550,144.786 236.472 C 144.888 236.322,142.366 238.765,139.181 241.900 C 135.996 245.035,133.214 247.600,132.999 247.600 C 132.784 247.600,129.547 244.585,125.804 240.900 L 119.000 234.200 125.796 241.100 M366.650 238.050 C 366.509 238.753,366.469 239.402,366.559 239.492 C 366.650 239.583,366.848 239.091,367.000 238.400 C 367.152 237.709,367.193 237.059,367.091 236.958 C 366.989 236.856,366.791 237.347,366.650 238.050 M33.668 240.600 C 33.662 241.040,33.811 241.760,34.000 242.200 C 34.438 243.219,34.438 242.168,34.000 240.800 C 33.743 239.996,33.677 239.957,33.668 240.600 M365.873 241.353 C 365.723 241.745,365.611 242.366,365.625 242.733 C 365.642 243.175,365.781 243.074,366.037 242.434 C 366.249 241.903,366.361 241.282,366.285 241.054 C 366.209 240.827,366.024 240.961,365.873 241.353 M365.029 244.629 C 364.881 245.215,364.838 245.772,364.932 245.866 C 365.027 245.960,365.224 245.558,365.371 244.971 C 365.519 244.385,365.562 243.828,365.468 243.734 C 365.373 243.640,365.176 244.042,365.029 244.629 M35.206 246.633 C 35.209 247.055,35.395 247.670,35.618 248.000 C 35.915 248.438,35.952 248.276,35.756 247.400 C 35.427 245.929,35.198 245.610,35.206 246.633 M364.229 247.429 C 364.081 248.015,364.038 248.572,364.132 248.666 C 364.227 248.760,364.424 248.358,364.571 247.771 C 364.719 247.185,364.762 246.628,364.668 246.534 C 364.573 246.440,364.376 246.842,364.229 247.429 M240.433 264.146 C 240.525 264.226,241.590 264.394,242.800 264.519 C 244.220 264.666,244.646 264.629,244.000 264.413 C 243.009 264.083,240.113 263.865,240.433 264.146 M250.000 266.562 C 250.000 266.651,250.772 267.177,251.717 267.730 C 252.661 268.283,254.213 269.470,255.166 270.368 C 257.103 272.192,257.864 272.564,256.370 270.957 C 254.765 269.230,250.000 265.943,250.000 266.562 M114.900 267.076 C 115.285 267.176,115.915 267.176,116.300 267.076 C 116.685 266.975,116.370 266.893,115.600 266.893 C 114.830 266.893,114.515 266.975,114.900 267.076 M91.000 267.557 C 90.120 267.691,92.370 267.800,96.000 267.800 C 99.799 267.800,101.836 267.685,100.800 267.530 C 98.636 267.205,93.218 267.220,91.000 267.557 M356.600 268.661 C 356.264 269.465,356.082 270.215,356.195 270.328 C 356.308 270.441,356.400 270.435,356.400 270.316 C 356.400 270.196,356.672 269.446,357.005 268.649 C 357.338 267.852,357.521 267.200,357.411 267.200 C 357.301 267.200,356.936 267.858,356.600 268.661 M118.096 287.291 L 118.000 306.382 117.003 307.035 C 116.362 307.455,115.635 307.595,114.969 307.428 C 114.297 307.259,114.023 307.314,114.190 307.584 C 114.821 308.605,117.896 307.573,118.221 306.231 C 118.331 305.774,118.370 297.030,118.307 286.800 L 118.192 268.200 118.096 287.291 M105.800 269.849 C 106.460 270.491,107.071 270.972,107.157 270.918 C 107.428 270.748,106.304 269.576,105.433 269.120 C 104.867 268.823,104.984 269.057,105.800 269.849 M112.985 287.400 C 112.985 297.740,113.036 302.027,113.100 296.928 C 113.163 291.828,113.163 283.368,113.100 278.128 C 113.037 272.887,112.985 277.060,112.985 287.400 M238.880 270.080 C 237.945 271.015,238.220 301.713,239.170 302.573 C 239.594 302.956,240.269 303.185,240.670 303.081 C 241.308 302.917,241.296 302.887,240.580 302.846 C 238.813 302.746,238.800 302.621,238.800 286.140 C 238.800 271.609,238.852 270.409,239.500 270.032 C 239.885 269.808,240.011 269.619,239.780 269.612 C 239.549 269.605,239.144 269.816,238.880 270.080 M354.761 272.700 C 354.288 273.745,353.560 275.275,353.143 276.100 C 352.725 276.925,352.480 277.600,352.597 277.600 C 352.795 277.600,355.104 273.072,355.706 271.500 C 356.280 270.005,355.575 270.899,354.761 272.700 M90.824 271.901 C 90.067 272.285,89.369 272.848,89.274 273.150 C 89.178 273.453,89.470 273.330,89.921 272.879 C 91.639 271.161,99.999 271.108,101.804 272.804 C 102.742 273.685,102.805 274.007,102.885 278.370 L 102.970 283.000 103.099 278.601 C 103.247 273.609,102.917 272.576,100.913 271.738 C 98.961 270.922,92.546 271.025,90.824 271.901 M246.800 271.311 C 246.800 271.408,247.835 272.163,249.100 272.989 C 250.365 273.815,251.040 274.138,250.600 273.706 C 249.752 272.874,246.800 271.013,246.800 271.311 M83.852 272.900 C 83.051 275.889,83.605 306.374,84.475 307.184 C 85.379 308.026,86.982 308.276,87.377 307.637 C 87.500 307.438,87.241 307.369,86.801 307.484 C 86.361 307.599,85.544 307.393,84.985 307.027 L 83.968 306.360 84.084 289.180 C 84.148 279.731,84.176 272.000,84.147 272.000 C 84.117 272.000,83.985 272.405,83.852 272.900 M45.129 273.208 C 45.700 274.703,50.023 282.942,50.477 283.400 C 50.695 283.620,49.582 281.281,48.005 278.202 C 45.128 272.586,44.424 271.363,45.129 273.208 M151.275 273.216 C 149.968 274.434,150.592 276.800,152.220 276.800 C 152.417 276.800,152.178 276.520,151.689 276.177 C 150.013 275.004,150.976 273.044,153.400 272.693 L 154.600 272.520 153.375 272.460 C 152.630 272.423,151.808 272.719,151.275 273.216 M258.627 274.440 C 259.382 275.562,260.000 276.672,260.000 276.907 C 260.000 277.141,260.115 277.218,260.256 277.078 C 260.542 276.792,257.995 272.400,257.543 272.400 C 257.384 272.400,257.872 273.318,258.627 274.440 M282.801 273.300 C 282.800 273.709,285.102 273.682,285.356 273.271 C 285.468 273.090,284.939 272.955,284.181 272.971 C 283.423 272.987,282.802 273.135,282.801 273.300 M155.532 273.900 C 155.967 274.746,155.727 275.626,154.878 276.300 C 154.514 276.588,154.445 276.800,154.714 276.800 C 155.623 276.800,156.499 274.932,156.014 274.027 C 155.771 273.572,155.482 273.200,155.372 273.200 C 155.262 273.200,155.334 273.515,155.532 273.900 M108.183 290.000 C 108.183 299.130,108.235 302.865,108.300 298.300 C 108.364 293.735,108.364 286.265,108.300 281.700 C 108.235 277.135,108.183 280.870,108.183 290.000 M88.920 276.400 C 88.920 277.610,88.995 278.105,89.087 277.500 C 89.178 276.895,89.178 275.905,89.087 275.300 C 88.995 274.695,88.920 275.190,88.920 276.400 M253.224 276.700 C 253.754 277.305,254.348 277.980,254.543 278.200 C 255.051 278.773,254.121 277.136,253.463 276.300 C 253.160 275.915,252.765 275.600,252.586 275.600 C 252.407 275.600,252.694 276.095,253.224 276.700 M261.006 279.200 C 262.194 284.548,262.194 290.217,261.006 293.584 C 260.668 294.541,260.465 295.398,260.555 295.488 C 261.973 296.906,262.769 282.961,261.451 279.800 C 261.084 278.920,260.884 278.650,261.006 279.200 M255.844 281.400 C 256.173 282.871,256.402 283.190,256.394 282.167 C 256.391 281.745,256.205 281.130,255.982 280.800 C 255.685 280.362,255.648 280.524,255.844 281.400 M274.990 280.816 C 274.821 281.089,275.123 281.138,275.866 280.960 C 277.399 280.592,277.544 280.400,276.290 280.400 C 275.717 280.400,275.132 280.587,274.990 280.816 M282.200 280.800 C 283.301 281.273,283.692 281.273,283.400 280.800 C 283.264 280.580,282.758 280.413,282.276 280.428 C 281.431 280.455,281.429 280.469,282.200 280.800 M296.001 280.613 C 296.000 281.095,298.766 285.600,299.063 285.600 C 299.174 285.600,298.910 285.015,298.475 284.300 C 298.040 283.585,297.306 282.370,296.844 281.600 C 296.381 280.830,296.002 280.386,296.001 280.613 M316.933 280.944 C 316.933 281.224,315.888 283.241,314.611 285.426 C 313.334 287.612,312.214 289.535,312.121 289.700 C 312.029 289.865,312.037 290.000,312.140 290.000 C 312.279 290.000,316.046 283.723,317.464 281.128 C 317.546 280.978,317.460 280.761,317.273 280.645 C 317.086 280.530,316.933 280.664,316.933 280.944 M151.544 282.806 L 150.600 283.612 151.879 282.910 C 152.963 282.316,153.361 282.283,154.479 282.692 C 155.671 283.129,155.724 283.118,155.024 282.588 C 153.947 281.773,152.660 281.853,151.544 282.806 M128.801 283.158 C 128.252 283.311,130.232 283.374,133.201 283.300 C 140.473 283.117,141.380 282.912,135.000 282.894 C 132.140 282.886,129.350 283.005,128.801 283.158 M161.376 283.422 C 160.637 284.015,160.644 284.023,161.537 283.588 C 162.934 282.909,179.066 283.217,180.400 283.949 C 181.026 284.292,181.231 284.318,180.949 284.018 C 179.685 282.673,162.948 282.163,161.376 283.422 M195.019 283.147 C 194.370 283.286,197.124 283.400,201.140 283.400 C 205.156 283.400,208.027 283.283,207.521 283.140 C 206.345 282.808,196.579 282.813,195.019 283.147 M269.381 284.500 L 267.800 286.200 269.500 284.619 C 271.081 283.148,271.384 282.800,271.081 282.800 C 271.016 282.800,270.251 283.565,269.381 284.500 M141.701 283.771 C 143.453 284.396,146.000 286.242,146.000 286.887 C 146.000 287.132,146.116 287.218,146.257 287.076 C 146.916 286.418,142.530 283.185,141.022 283.218 C 140.505 283.229,140.757 283.434,141.701 283.771 M155.656 295.000 C 155.656 301.822,155.798 306.271,156.000 305.800 C 156.189 305.360,156.344 300.500,156.344 295.000 C 156.344 289.500,156.189 284.640,156.000 284.200 C 155.798 283.729,155.656 288.178,155.656 295.000 M191.562 284.900 C 190.628 285.615,189.788 286.427,189.697 286.704 C 189.605 286.981,190.041 286.709,190.665 286.100 C 191.289 285.490,192.250 284.688,192.800 284.317 C 193.350 283.946,193.679 283.633,193.531 283.621 C 193.383 283.609,192.497 284.185,191.562 284.900 M209.600 284.265 C 210.150 284.665,211.095 285.475,211.700 286.065 C 212.305 286.655,212.800 287.004,212.800 286.839 C 212.800 286.412,211.209 285.025,209.800 284.222 C 208.613 283.546,208.611 283.547,209.600 284.265 M256.528 286.000 C 256.528 287.430,256.601 288.015,256.689 287.300 C 256.778 286.585,256.778 285.415,256.689 284.700 C 256.601 283.985,256.528 284.570,256.528 286.000 M288.400 283.798 C 288.400 283.933,288.963 284.619,289.652 285.322 L 290.904 286.600 290.034 285.312 C 289.173 284.039,288.400 283.323,288.400 283.798 M51.400 285.200 C 51.741 285.860,52.111 286.400,52.221 286.400 C 52.331 286.400,52.141 285.860,51.800 285.200 C 51.459 284.540,51.089 284.000,50.979 284.000 C 50.869 284.000,51.059 284.540,51.400 285.200 M124.476 285.647 C 123.774 286.334,123.200 287.084,123.200 287.314 C 123.200 287.545,123.245 287.656,123.300 287.562 C 123.355 287.468,124.020 286.718,124.778 285.896 C 126.449 284.083,126.247 283.916,124.476 285.647 M150.575 295.000 C 150.575 300.940,150.631 303.426,150.699 300.524 C 150.767 297.622,150.767 292.762,150.699 289.724 C 150.631 286.686,150.575 289.060,150.575 295.000 M160.576 295.400 C 160.576 301.560,160.632 304.024,160.699 300.876 C 160.767 297.727,160.767 292.687,160.699 289.676 C 160.631 286.664,160.576 289.240,160.576 295.400 M277.266 285.551 C 276.954 285.749,277.618 285.816,278.866 285.713 C 281.797 285.471,282.195 285.268,279.800 285.238 C 278.700 285.224,277.560 285.365,277.266 285.551 M283.800 286.607 C 285.331 287.719,287.200 289.765,287.247 290.381 C 287.273 290.721,287.266 291.270,287.231 291.600 C 287.178 292.090,287.234 292.101,287.534 291.656 C 288.260 290.582,284.972 285.976,283.507 286.013 C 283.225 286.020,283.355 286.283,283.800 286.607 M305.156 286.633 C 306.181 288.765,307.503 288.819,308.710 286.778 C 309.188 285.969,309.136 285.990,308.410 286.900 C 307.928 287.505,307.293 288.000,307.000 288.000 C 306.707 288.000,306.082 287.505,305.611 286.900 C 305.076 286.212,304.906 286.112,305.156 286.633 M184.220 287.787 C 184.666 288.853,184.800 291.170,184.800 297.778 L 184.800 306.382 183.803 307.035 C 183.162 307.455,182.435 307.595,181.769 307.428 C 181.097 307.259,180.823 307.314,180.990 307.584 C 181.412 308.267,183.020 308.057,184.146 307.171 L 185.200 306.342 185.200 297.758 C 185.200 289.682,184.807 286.400,183.841 286.400 C 183.731 286.400,183.902 287.024,184.220 287.787 M53.000 288.000 C 53.341 288.660,53.711 289.200,53.821 289.200 C 53.931 289.200,53.741 288.660,53.400 288.000 C 53.059 287.340,52.689 286.800,52.579 286.800 C 52.469 286.800,52.659 287.340,53.000 288.000 M130.137 287.106 C 129.883 287.268,131.981 287.400,134.799 287.400 C 137.617 287.400,139.839 287.265,139.738 287.100 C 139.499 286.713,130.748 286.719,130.137 287.106 M169.600 287.177 L 165.800 287.400 165.789 296.600 L 165.778 305.800 165.896 296.700 L 166.015 287.600 171.907 287.560 C 175.481 287.536,177.406 287.394,176.800 287.200 C 175.705 286.849,175.195 286.848,169.600 287.177 M195.140 287.998 L 193.942 289.196 194.071 295.185 C 194.186 300.510,194.286 301.253,194.978 301.887 C 195.730 302.576,195.736 302.574,195.178 301.839 C 194.732 301.251,194.600 299.670,194.600 294.904 C 194.600 286.889,194.428 287.081,201.445 287.269 C 204.129 287.341,206.241 287.265,206.139 287.100 C 205.495 286.063,196.327 286.811,195.140 287.998 M346.586 288.100 L 345.952 289.400 346.767 288.400 C 347.552 287.437,347.808 286.800,347.410 286.800 C 347.306 286.800,346.935 287.385,346.586 288.100 M95.900 287.499 L 102.800 287.619 102.800 296.980 L 102.800 306.342 103.854 307.171 C 104.980 308.057,106.588 308.267,107.010 307.584 C 107.177 307.314,106.903 307.259,106.231 307.428 C 105.565 307.595,104.838 307.455,104.197 307.035 L 103.200 306.382 103.200 296.791 L 103.200 287.200 96.100 287.290 L 89.000 287.380 95.900 287.499 M300.725 288.600 C 301.172 289.480,301.833 290.560,302.194 291.000 C 302.555 291.440,302.359 290.900,301.759 289.800 C 300.416 287.338,299.607 286.399,300.725 288.600 M128.349 288.261 C 127.904 288.796,127.797 291.974,127.782 304.961 L 127.765 321.000 127.982 304.961 C 128.155 292.201,128.312 288.787,128.749 288.261 C 129.051 287.897,129.208 287.600,129.098 287.600 C 128.988 287.600,128.651 287.897,128.349 288.261 M141.055 288.600 C 141.980 290.179,142.000 290.203,142.000 289.711 C 142.000 289.479,141.629 288.864,141.176 288.344 L 140.353 287.400 141.055 288.600 M146.718 294.900 C 146.794 299.546,146.687 302.273,146.418 302.542 C 146.188 302.772,146.001 303.239,146.002 303.580 C 146.004 303.921,146.274 303.684,146.602 303.054 C 147.244 301.824,147.510 288.240,146.900 287.861 C 146.735 287.759,146.653 290.926,146.718 294.900 M189.067 287.867 C 188.697 288.236,188.729 301.909,189.100 302.138 C 189.265 302.240,189.400 299.011,189.400 294.962 C 189.400 290.913,189.385 287.600,189.367 287.600 C 189.348 287.600,189.213 287.720,189.067 287.867 M207.420 288.497 C 207.854 289.209,207.998 289.981,207.832 290.697 C 207.642 291.515,207.681 291.645,207.982 291.200 C 208.607 290.277,208.479 289.379,207.576 288.344 L 206.753 287.400 207.420 288.497 M213.135 289.589 C 213.499 294.725,209.814 296.935,201.243 296.723 C 195.720 296.586,194.806 296.166,195.967 294.301 C 196.481 293.476,196.472 293.446,195.864 293.949 C 191.558 297.508,205.996 298.818,210.734 295.298 C 213.061 293.570,214.726 288.745,213.300 287.861 C 213.135 287.759,213.061 288.536,213.135 289.589 M122.667 288.267 C 121.883 289.050,122.392 321.192,123.200 322.000 C 123.987 322.787,126.166 323.102,126.548 322.484 C 126.656 322.310,126.156 322.236,125.437 322.320 C 122.710 322.638,122.770 323.061,122.891 304.563 C 122.951 295.453,122.985 288.000,122.967 288.000 C 122.948 288.000,122.813 288.120,122.667 288.267 M255.952 290.313 C 255.821 291.107,255.879 291.481,256.101 291.259 C 256.303 291.057,256.401 290.467,256.319 289.946 C 256.193 289.145,256.137 289.202,255.952 290.313 M265.873 290.153 C 265.723 290.545,265.611 291.166,265.625 291.533 C 265.642 291.975,265.781 291.874,266.037 291.234 C 266.249 290.703,266.361 290.082,266.285 289.854 C 266.209 289.627,266.024 289.761,265.873 290.153 M311.029 291.543 C 310.091 293.358,310.719 296.055,312.487 297.800 C 312.710 298.020,312.422 297.301,311.846 296.203 C 310.635 293.892,310.588 293.417,311.410 291.840 C 311.742 291.203,311.934 290.601,311.837 290.503 C 311.739 290.406,311.376 290.873,311.029 291.543 M88.891 298.620 C 88.841 302.811,88.665 306.412,88.500 306.623 C 88.335 306.833,88.429 306.814,88.709 306.579 C 89.096 306.255,89.190 304.339,89.100 298.577 L 88.981 291.000 88.891 298.620 M254.661 293.500 L 253.974 295.000 254.778 294.000 C 255.471 293.138,255.867 292.000,255.474 292.000 C 255.405 292.000,255.039 292.675,254.661 293.500 M303.035 292.888 C 303.203 293.632,303.003 294.453,302.401 295.488 C 301.558 296.936,301.556 296.958,302.362 296.000 C 303.463 294.690,303.778 293.432,303.231 292.529 C 302.859 291.915,302.828 291.972,303.035 292.888 M197.400 293.200 C 196.364 293.645,203.809 293.645,205.200 293.200 C 205.846 292.993,204.784 292.876,202.200 292.868 C 200.000 292.862,197.840 293.011,197.400 293.200 M293.270 294.693 L 293.200 296.787 282.700 296.900 L 272.200 297.014 282.713 297.107 C 294.419 297.211,293.765 297.378,293.495 294.346 C 293.341 292.614,293.339 292.617,293.270 294.693 M56.646 293.700 C 57.486 295.132,60.055 298.800,60.218 298.800 C 60.322 298.800,59.569 297.540,58.545 296.000 C 57.520 294.460,56.608 293.200,56.518 293.200 C 56.427 293.200,56.485 293.425,56.646 293.700 M342.457 294.457 C 342.175 294.909,342.032 295.366,342.140 295.473 C 342.247 295.581,342.544 295.278,342.800 294.800 C 343.405 293.670,343.124 293.390,342.457 294.457 M252.623 296.606 C 251.534 298.033,248.381 300.544,246.200 301.721 C 245.540 302.077,245.190 302.375,245.422 302.384 C 246.654 302.431,251.623 298.574,253.262 296.300 C 254.417 294.697,253.884 294.952,252.623 296.606 M340.492 297.429 C 339.997 298.183,339.672 298.800,339.769 298.800 C 340.047 298.800,341.704 296.371,341.539 296.206 C 341.457 296.124,340.986 296.674,340.492 297.429 M300.614 298.235 C 300.241 298.804,300.005 299.338,300.089 299.422 C 300.173 299.507,300.558 299.041,300.944 298.388 C 301.806 296.928,301.548 296.809,300.614 298.235 M257.847 299.773 C 256.393 301.680,256.527 302.054,258.000 300.200 C 258.660 299.369,259.200 298.625,259.200 298.545 C 259.200 298.159,258.805 298.518,257.847 299.773 M307.000 298.800 C 308.101 299.273,308.492 299.273,308.200 298.800 C 308.064 298.580,307.558 298.413,307.076 298.428 C 306.231 298.455,306.229 298.469,307.000 298.800 M61.616 300.963 C 63.395 303.440,64.106 303.879,62.457 301.482 C 61.760 300.469,60.978 299.510,60.720 299.350 C 60.461 299.191,60.865 299.916,61.616 300.963 M338.400 300.400 C 337.930 301.060,337.636 301.600,337.746 301.600 C 337.856 301.600,338.330 301.060,338.800 300.400 C 339.270 299.740,339.564 299.200,339.454 299.200 C 339.344 299.200,338.870 299.740,338.400 300.400 M308.409 299.900 C 308.414 300.065,308.785 300.650,309.233 301.200 L 310.048 302.200 309.414 300.900 C 308.811 299.665,308.389 299.245,308.409 299.900 M266.418 300.222 C 266.360 301.609,271.346 307.244,272.572 307.176 C 272.807 307.164,272.640 306.939,272.200 306.676 C 270.813 305.850,268.057 302.873,267.230 301.306 C 266.793 300.478,266.427 299.990,266.418 300.222 M141.600 300.752 C 141.600 301.018,141.140 301.697,140.577 302.259 C 140.015 302.822,139.779 303.207,140.053 303.116 C 140.773 302.876,142.196 300.863,141.873 300.540 C 141.723 300.390,141.600 300.485,141.600 300.752 M314.762 301.400 C 314.990 301.840,315.554 302.650,316.015 303.200 C 316.587 303.882,316.722 303.946,316.438 303.400 C 316.210 302.960,315.646 302.150,315.185 301.600 C 314.613 300.918,314.478 300.854,314.762 301.400 M274.007 302.135 C 277.330 304.365,279.825 304.512,283.738 302.709 C 285.701 301.804,286.588 301.564,286.703 301.909 C 286.793 302.179,287.070 302.400,287.319 302.400 C 287.570 302.400,287.474 302.102,287.104 301.732 C 286.480 301.109,286.254 301.149,283.686 302.332 C 279.946 304.056,277.216 303.942,274.338 301.939 C 273.754 301.532,273.128 301.200,272.945 301.200 C 272.763 301.200,273.241 301.621,274.007 302.135 M254.988 302.813 C 254.584 303.260,253.646 304.001,252.905 304.459 C 252.164 304.917,251.652 305.386,251.768 305.501 C 251.884 305.617,252.568 305.257,253.289 304.701 C 255.484 303.009,256.543 302.000,256.123 302.000 C 255.904 302.000,255.393 302.366,254.988 302.813 M335.990 303.700 C 335.250 304.635,334.028 306.165,333.274 307.100 C 332.521 308.035,331.995 308.800,332.107 308.800 C 332.218 308.800,333.350 307.495,334.621 305.900 C 337.683 302.058,337.727 302.000,337.516 302.000 C 337.416 302.000,336.729 302.765,335.990 303.700 M242.800 302.800 L 241.800 303.120 242.800 303.154 C 243.350 303.173,244.070 303.013,244.400 302.800 C 245.164 302.306,244.342 302.306,242.800 302.800 M297.414 303.435 C 297.041 304.004,296.827 304.561,296.939 304.672 C 297.050 304.783,297.429 304.318,297.781 303.637 C 298.559 302.133,298.344 302.015,297.414 303.435 M310.586 303.500 C 310.935 304.215,311.306 304.800,311.410 304.800 C 311.808 304.800,311.552 304.163,310.767 303.200 L 309.952 302.200 310.586 303.500 M189.600 303.058 C 189.600 303.274,190.185 303.979,190.900 304.625 L 192.200 305.800 191.000 304.402 C 190.340 303.633,189.755 302.928,189.700 302.835 C 189.645 302.743,189.600 302.843,189.600 303.058 M198.300 303.095 C 199.455 303.176,201.345 303.176,202.500 303.095 C 203.655 303.014,202.710 302.948,200.400 302.948 C 198.090 302.948,197.145 303.014,198.300 303.095 M288.110 303.442 C 288.550 303.965,288.714 304.559,288.542 305.008 C 288.351 305.506,288.410 305.641,288.732 305.442 C 289.455 304.995,289.289 304.200,288.300 303.362 L 287.400 302.600 288.110 303.442 M130.112 303.608 C 128.932 304.083,128.478 305.877,129.347 306.635 C 129.704 306.947,129.818 306.986,129.599 306.721 C 127.961 304.744,129.443 303.826,134.685 303.570 L 139.400 303.340 135.200 303.295 C 132.890 303.271,130.600 303.412,130.112 303.608 M65.210 305.700 C 66.133 306.855,67.209 308.205,67.601 308.700 C 67.994 309.195,68.426 309.600,68.561 309.600 C 68.696 309.600,67.712 308.250,66.374 306.600 C 65.036 304.950,63.850 303.600,63.737 303.600 C 63.624 303.600,64.287 304.545,65.210 305.700 M206.860 304.877 C 206.826 305.487,206.414 306.225,205.911 306.577 C 205.422 306.920,205.197 307.194,205.411 307.187 C 206.414 307.154,207.254 306.027,207.090 304.934 L 206.920 303.800 206.860 304.877 M302.200 305.600 C 301.859 306.260,301.669 306.800,301.779 306.800 C 301.889 306.800,302.259 306.260,302.600 305.600 C 302.941 304.940,303.131 304.400,303.021 304.400 C 302.911 304.400,302.541 304.940,302.200 305.600 M317.354 305.400 C 317.709 305.950,318.279 306.832,318.620 307.360 C 319.113 308.123,319.133 308.363,318.720 308.528 C 318.386 308.662,318.450 308.748,318.900 308.768 C 319.897 308.813,319.773 308.196,318.381 306.172 C 317.106 304.320,316.231 303.661,317.354 305.400 M286.800 306.400 C 286.250 306.830,285.997 307.186,286.238 307.191 C 286.479 307.196,287.002 306.840,287.400 306.400 C 288.312 305.392,288.088 305.392,286.800 306.400 M151.544 307.176 C 152.504 308.013,154.180 308.280,154.564 307.658 C 154.681 307.470,154.332 307.400,153.789 307.504 C 153.246 307.608,152.306 307.391,151.701 307.023 L 150.600 306.353 151.544 307.176 M164.600 307.038 C 164.160 307.375,163.315 307.582,162.721 307.498 C 162.128 307.414,161.733 307.492,161.845 307.672 C 162.213 308.269,163.897 308.012,164.856 307.213 C 165.967 306.288,165.763 306.148,164.600 307.038 M295.067 307.354 C 294.464 308.275,294.545 308.800,295.290 308.800 C 295.487 308.800,295.538 308.624,295.405 308.408 C 295.272 308.193,295.358 307.653,295.596 307.208 C 296.193 306.091,295.828 306.192,295.067 307.354 M132.900 307.496 C 134.165 307.575,136.235 307.575,137.500 307.496 C 138.765 307.416,137.730 307.351,135.200 307.351 C 132.670 307.351,131.635 307.416,132.900 307.496 M238.200 308.400 L 232.600 308.635 238.000 308.677 C 240.970 308.701,243.850 308.576,244.400 308.400 C 245.137 308.164,245.189 308.091,244.600 308.123 C 244.160 308.146,241.280 308.271,238.200 308.400 M275.600 308.394 C 275.930 308.611,276.635 308.791,277.167 308.794 C 278.451 308.802,278.125 308.575,276.400 308.258 C 275.415 308.077,275.178 308.118,275.600 308.394 M282.000 308.400 L 281.000 308.720 282.076 308.760 C 282.668 308.782,283.264 308.620,283.400 308.400 C 283.681 307.945,283.420 307.945,282.000 308.400 M329.277 311.827 C 326.524 315.163,326.848 315.146,329.785 311.800 C 331.040 310.370,331.917 309.212,331.734 309.227 C 331.550 309.242,330.444 310.412,329.277 311.827 M70.399 311.999 C 71.319 313.098,72.281 314.126,72.536 314.283 C 72.791 314.439,72.123 313.540,71.051 312.284 C 69.980 311.028,69.018 310.000,68.914 310.000 C 68.810 310.000,69.479 310.899,70.399 311.999 M320.757 320.898 C 317.543 324.144,315.026 326.800,315.162 326.800 C 315.518 326.800,326.998 315.252,326.781 315.112 C 326.681 315.048,323.971 317.652,320.757 320.898 M74.000 315.949 C 74.000 316.313,83.946 326.204,84.086 325.980 C 84.149 325.881,81.905 323.525,79.100 320.743 C 76.295 317.962,74.000 315.805,74.000 315.949 M88.000 329.519 C 89.430 330.845,90.675 331.855,90.767 331.765 C 90.858 331.674,90.858 331.547,90.767 331.483 C 90.675 331.418,89.430 330.408,88.000 329.237 L 85.400 327.109 88.000 329.519 M312.992 328.312 C 312.327 328.910,311.179 329.902,310.441 330.516 C 309.703 331.130,309.167 331.700,309.250 331.781 C 309.332 331.863,310.570 330.871,312.000 329.578 C 313.430 328.285,314.510 327.226,314.400 327.225 C 314.290 327.224,313.656 327.713,312.992 328.312 M91.200 332.132 C 91.200 332.317,96.683 336.756,97.419 337.166 C 98.115 337.554,95.947 335.666,93.500 333.752 C 92.235 332.763,91.200 332.033,91.200 332.132 M306.800 333.634 L 305.000 335.265 306.900 333.784 C 308.566 332.486,309.059 331.997,308.700 332.001 C 308.645 332.002,307.790 332.736,306.800 333.634 M303.200 336.449 C 301.806 337.671,301.805 337.672,303.088 336.819 C 303.796 336.348,304.482 335.791,304.612 335.581 C 304.997 334.957,304.677 335.154,303.200 336.449 M98.400 337.759 C 98.400 337.861,98.985 338.356,99.700 338.857 C 100.622 339.504,100.835 339.564,100.433 339.063 C 99.860 338.350,98.400 337.413,98.400 337.759 M300.200 338.635 L 299.000 339.666 300.300 338.806 C 301.015 338.333,301.600 337.868,301.600 337.773 C 301.600 337.473,301.431 337.578,300.200 338.635 M102.200 340.565 C 102.860 341.132,103.565 341.597,103.767 341.598 C 104.201 341.600,104.196 341.596,102.400 340.437 L 101.000 339.534 102.200 340.565 M297.211 340.620 C 296.447 341.159,295.997 341.599,296.211 341.598 C 296.425 341.597,297.140 341.153,297.800 340.612 C 299.341 339.349,299.005 339.353,297.211 340.620 M294.224 342.613 C 293.796 342.936,293.627 343.200,293.847 343.200 C 294.067 343.200,294.596 342.936,295.024 342.613 C 295.451 342.290,295.620 342.025,295.400 342.025 C 295.180 342.025,294.651 342.290,294.224 342.613 M111.600 346.767 C 112.563 347.552,113.200 347.808,113.200 347.410 C 113.200 347.306,112.615 346.935,111.900 346.586 L 110.600 345.952 111.600 346.767 M287.300 347.026 C 285.412 348.158,284.977 348.749,286.700 347.841 C 287.909 347.203,289.516 346.031,289.200 346.017 C 289.090 346.012,288.235 346.466,287.300 347.026 M122.400 352.597 C 122.400 352.795,126.928 355.104,128.500 355.706 C 129.995 356.280,129.101 355.575,127.300 354.761 C 126.255 354.288,124.725 353.560,123.900 353.143 C 123.075 352.725,122.400 352.480,122.400 352.597 M274.297 353.967 C 271.326 355.409,269.751 356.377,271.412 355.740 C 273.021 355.123,277.600 352.803,277.600 352.605 C 277.600 352.342,277.880 352.227,274.297 353.967 M129.654 356.187 C 129.990 356.523,132.800 357.616,132.800 357.411 C 132.800 357.301,132.148 356.938,131.351 356.605 C 129.875 355.989,129.318 355.851,129.654 356.187 M268.500 356.634 C 267.785 356.946,267.200 357.294,267.200 357.407 C 267.200 357.615,270.006 356.527,270.346 356.187 C 270.686 355.847,269.820 356.057,268.500 356.634 M151.800 364.400 C 152.240 364.589,152.870 364.744,153.200 364.744 C 153.578 364.744,153.504 364.617,153.000 364.400 C 152.560 364.211,151.930 364.056,151.600 364.056 C 151.222 364.056,151.296 364.183,151.800 364.400 M154.600 365.200 C 155.040 365.389,155.670 365.544,156.000 365.544 C 156.378 365.544,156.304 365.417,155.800 365.200 C 155.360 365.011,154.730 364.856,154.400 364.856 C 154.022 364.856,154.096 364.983,154.600 365.200 M157.400 366.000 C 157.840 366.189,158.470 366.344,158.800 366.344 C 159.178 366.344,159.104 366.217,158.600 366.000 C 158.160 365.811,157.530 365.656,157.200 365.656 C 156.822 365.656,156.896 365.783,157.400 366.000 M241.400 366.000 C 240.896 366.217,240.822 366.344,241.200 366.344 C 241.530 366.344,242.160 366.189,242.600 366.000 C 243.104 365.783,243.178 365.656,242.800 365.656 C 242.470 365.656,241.840 365.811,241.400 366.000 M161.000 366.800 C 161.440 366.989,162.160 367.138,162.600 367.132 C 163.243 367.123,163.204 367.057,162.400 366.800 C 161.032 366.362,159.981 366.362,161.000 366.800 M237.600 366.800 C 236.796 367.057,236.757 367.123,237.400 367.132 C 237.840 367.138,238.560 366.989,239.000 366.800 C 240.019 366.362,238.968 366.362,237.600 366.800 M164.400 367.594 C 164.730 367.811,165.435 367.991,165.967 367.994 C 167.251 368.002,166.925 367.775,165.200 367.458 C 164.215 367.277,163.978 367.318,164.400 367.594 M234.200 367.600 C 233.111 367.877,233.093 367.907,234.000 367.925 C 234.550 367.935,235.360 367.789,235.800 367.600 C 236.786 367.176,235.866 367.176,234.200 367.600 M168.400 368.400 C 168.950 368.576,169.850 368.717,170.400 368.713 C 171.298 368.706,171.278 368.674,170.200 368.400 C 168.508 367.969,167.056 367.969,168.400 368.400 M229.800 368.400 C 228.722 368.674,228.702 368.706,229.600 368.713 C 230.150 368.717,231.050 368.576,231.600 368.400 C 232.944 367.969,231.492 367.969,229.800 368.400 M174.700 369.482 C 175.195 369.578,176.005 369.578,176.500 369.482 C 176.995 369.387,176.590 369.309,175.600 369.309 C 174.610 369.309,174.205 369.387,174.700 369.482 M223.500 369.482 C 223.995 369.578,224.805 369.578,225.300 369.482 C 225.795 369.387,225.390 369.309,224.400 369.309 C 223.410 369.309,223.005 369.387,223.500 369.482 M180.900 370.287 C 181.505 370.378,182.495 370.378,183.100 370.287 C 183.705 370.195,183.210 370.120,182.000 370.120 C 180.790 370.120,180.295 370.195,180.900 370.287 M216.900 370.287 C 217.505 370.378,218.495 370.378,219.100 370.287 C 219.705 370.195,219.210 370.120,218.000 370.120 C 216.790 370.120,216.295 370.195,216.900 370.287 M185.705 370.687 C 186.314 370.779,187.214 370.777,187.705 370.682 C 188.197 370.587,187.700 370.511,186.600 370.514 C 185.500 370.517,185.097 370.595,185.705 370.687 M212.700 370.682 C 213.195 370.778,214.005 370.778,214.500 370.682 C 214.995 370.587,214.590 370.509,213.600 370.509 C 212.610 370.509,212.205 370.587,212.700 370.682 M194.500 371.099 C 197.525 371.167,202.475 371.167,205.500 371.099 C 208.525 371.031,206.050 370.975,200.000 370.975 C 193.950 370.975,191.475 371.031,194.500 371.099 ", stroke: "none", fill: "#9d9d9d", "fill-rule": "evenodd" }),
            React__default['default'].createElement("path", { id: "path4", d: "M198.700 28.689 C 199.415 28.778,200.585 28.778,201.300 28.689 C 202.015 28.601,201.430 28.528,200.000 28.528 C 198.570 28.528,197.985 28.601,198.700 28.689 M184.200 29.216 C 183.288 29.388,184.320 29.427,186.600 29.306 C 188.800 29.190,190.675 29.029,190.767 28.947 C 191.058 28.689,185.864 28.901,184.200 29.216 M209.233 28.950 C 209.325 29.032,211.290 29.197,213.600 29.316 C 216.493 29.465,217.178 29.429,215.800 29.201 C 213.759 28.863,208.932 28.679,209.233 28.950 M177.200 30.000 C 175.796 30.450,177.263 30.465,179.400 30.023 L 181.000 29.692 179.600 29.686 C 178.830 29.683,177.750 29.824,177.200 30.000 M220.600 30.023 C 222.737 30.465,224.204 30.450,222.800 30.000 C 222.250 29.824,221.170 29.683,220.400 29.686 L 219.000 29.692 220.600 30.023 M171.800 30.800 L 171.000 31.144 171.800 31.125 C 172.240 31.114,173.140 30.968,173.800 30.800 L 175.000 30.495 173.800 30.475 C 173.140 30.465,172.240 30.611,171.800 30.800 M226.200 30.800 C 226.860 30.968,227.760 31.114,228.200 31.125 L 229.000 31.144 228.200 30.800 C 227.760 30.611,226.860 30.465,226.200 30.475 L 225.000 30.495 226.200 30.800 M167.200 31.600 L 166.200 31.920 167.200 31.932 C 167.750 31.938,168.560 31.789,169.000 31.600 L 169.800 31.256 169.000 31.268 C 168.560 31.274,167.750 31.424,167.200 31.600 M231.200 31.600 C 231.750 31.776,232.560 31.920,233.000 31.920 C 233.633 31.920,233.592 31.854,232.800 31.600 C 232.250 31.424,231.440 31.280,231.000 31.280 C 230.367 31.280,230.408 31.346,231.200 31.600 M163.400 32.400 L 162.600 32.744 163.400 32.744 C 163.840 32.744,164.560 32.589,165.000 32.400 L 165.800 32.056 165.000 32.056 C 164.560 32.056,163.840 32.211,163.400 32.400 M235.400 32.400 C 235.840 32.589,236.470 32.744,236.800 32.744 C 237.178 32.744,237.104 32.617,236.600 32.400 C 236.160 32.211,235.530 32.056,235.200 32.056 C 234.822 32.056,234.896 32.183,235.400 32.400 M159.800 33.200 L 159.000 33.544 159.800 33.544 C 160.240 33.544,160.960 33.389,161.400 33.200 L 162.200 32.856 161.400 32.856 C 160.960 32.856,160.240 33.011,159.800 33.200 M238.800 33.200 C 240.168 33.638,241.219 33.638,240.200 33.200 C 239.760 33.011,239.040 32.862,238.600 32.868 C 237.957 32.877,237.996 32.943,238.800 33.200 M156.600 34.000 C 156.096 34.217,156.022 34.344,156.400 34.344 C 156.730 34.344,157.360 34.189,157.800 34.000 C 158.304 33.783,158.378 33.656,158.000 33.656 C 157.670 33.656,157.040 33.811,156.600 34.000 M242.200 34.000 C 242.640 34.189,243.270 34.344,243.600 34.344 C 243.978 34.344,243.904 34.217,243.400 34.000 C 242.960 33.811,242.330 33.656,242.000 33.656 C 241.622 33.656,241.696 33.783,242.200 34.000 M153.800 34.800 C 153.296 35.017,153.222 35.144,153.600 35.144 C 153.930 35.144,154.560 34.989,155.000 34.800 C 155.504 34.583,155.578 34.456,155.200 34.456 C 154.870 34.456,154.240 34.611,153.800 34.800 M150.800 35.600 C 149.996 35.857,149.957 35.923,150.600 35.932 C 151.040 35.938,151.760 35.789,152.200 35.600 C 153.219 35.162,152.168 35.162,150.800 35.600 M247.800 35.600 C 248.240 35.789,248.960 35.938,249.400 35.932 C 250.043 35.923,250.004 35.857,249.200 35.600 C 247.832 35.162,246.781 35.162,247.800 35.600 M143.000 38.214 C 142.000 38.696,141.966 38.751,142.800 38.548 C 143.933 38.271,145.207 37.621,144.600 37.630 C 144.380 37.633,143.660 37.896,143.000 38.214 M257.600 38.501 C 257.912 38.856,266.081 42.052,266.249 41.884 C 266.332 41.802,264.734 41.081,262.699 40.282 C 258.104 38.477,257.348 38.213,257.600 38.501 M136.523 40.546 C 134.281 41.467,132.301 42.366,132.123 42.544 C 131.945 42.722,132.700 42.510,133.800 42.074 C 139.606 39.771,141.740 38.843,141.200 38.857 C 140.870 38.865,138.765 39.625,136.523 40.546 M273.338 45.247 C 274.184 45.693,274.968 45.965,275.081 45.852 C 275.276 45.657,272.580 44.380,272.051 44.418 C 271.913 44.427,272.492 44.800,273.338 45.247 M121.500 47.425 C 120.015 48.187,118.800 48.901,118.800 49.011 C 118.800 49.120,120.060 48.576,121.600 47.800 C 123.140 47.024,124.400 46.302,124.400 46.195 C 124.400 45.927,124.512 45.879,121.500 47.425 M191.405 52.392 C 188.328 55.476,185.959 58.000,186.141 58.000 C 186.322 58.000,188.832 55.570,191.717 52.600 C 194.602 49.630,197.148 47.200,197.375 47.200 C 197.602 47.200,199.939 49.315,202.568 51.900 C 205.198 54.485,207.090 56.255,206.775 55.834 C 205.797 54.530,197.970 47.006,197.471 46.892 C 197.212 46.832,194.482 49.307,191.405 52.392 M277.200 46.968 C 277.200 47.251,282.529 50.005,282.715 49.819 C 282.807 49.727,281.604 49.008,280.041 48.221 C 278.478 47.434,277.200 46.870,277.200 46.968 M114.113 51.485 C 112.745 52.296,111.688 53.021,111.763 53.096 C 111.927 53.261,116.800 50.440,116.800 50.181 C 116.800 49.898,116.746 49.924,114.113 51.485 M283.200 50.179 C 283.200 50.289,283.740 50.659,284.400 51.000 C 285.060 51.341,285.600 51.531,285.600 51.421 C 285.600 51.311,285.060 50.941,284.400 50.600 C 283.740 50.259,283.200 50.069,283.200 50.179 M286.800 52.364 C 287.350 52.814,287.980 53.183,288.200 53.185 C 288.628 53.188,287.905 52.634,286.600 51.960 C 286.069 51.685,286.136 51.821,286.800 52.364 M288.800 53.297 C 288.800 53.464,290.377 54.559,294.100 56.977 C 294.705 57.370,295.200 57.607,295.200 57.503 C 295.200 57.336,293.623 56.241,289.900 53.823 C 289.295 53.430,288.800 53.193,288.800 53.297 M104.509 57.502 C 101.599 59.426,99.214 61.129,99.209 61.287 C 99.201 61.534,108.723 55.274,109.780 54.337 C 110.805 53.428,109.340 54.308,104.509 57.502 M296.800 58.559 C 296.800 58.650,297.700 59.372,298.800 60.162 C 299.900 60.952,300.797 61.464,300.793 61.299 C 300.785 60.994,296.800 58.259,296.800 58.559 M180.060 63.842 C 179.762 64.178,179.599 64.532,179.695 64.629 C 179.792 64.726,180.198 64.444,180.598 64.002 C 180.997 63.561,181.161 63.207,180.962 63.215 C 180.763 63.224,180.357 63.505,180.060 63.842 M90.157 68.281 C 81.963 75.083,67.443 90.159,64.586 94.831 C 64.181 95.493,64.408 95.234,70.187 88.426 C 76.380 81.131,85.193 72.659,94.226 65.321 C 95.092 64.618,95.691 64.033,95.557 64.021 C 95.423 64.009,92.993 65.926,90.157 68.281 M214.833 64.100 C 214.925 64.155,215.540 64.650,216.200 65.200 L 217.400 66.200 216.430 65.100 C 215.897 64.495,215.282 64.000,215.064 64.000 C 214.845 64.000,214.742 64.045,214.833 64.100 M304.400 64.094 C 304.400 64.199,306.134 65.683,308.254 67.392 C 310.374 69.101,311.987 70.303,311.839 70.062 C 311.690 69.822,310.181 68.508,308.484 67.142 C 304.569 63.989,304.400 63.863,304.400 64.094 M178.600 65.346 C 177.419 66.718,177.196 67.261,178.203 66.312 C 178.838 65.714,179.277 65.147,179.179 65.052 C 179.080 64.958,178.820 65.090,178.600 65.346 M236.557 85.264 C 246.921 95.530,255.441 103.888,255.492 103.839 C 255.629 103.705,218.103 66.600,217.831 66.600 C 217.767 66.600,226.194 74.999,236.557 85.264 M314.524 72.727 C 315.666 73.787,317.387 75.362,318.349 76.227 C 319.311 77.092,322.146 79.999,324.649 82.687 C 327.152 85.375,329.200 87.393,329.200 87.170 C 329.200 86.639,313.387 70.800,312.856 70.800 C 312.632 70.800,313.382 71.667,314.524 72.727 M162.397 81.873 C 157.668 86.643,154.156 90.288,154.591 89.973 C 155.026 89.658,156.883 87.870,158.718 86.000 C 160.552 84.130,164.153 80.485,166.720 77.900 C 169.287 75.315,171.299 73.200,171.190 73.200 C 171.082 73.200,167.125 77.103,162.397 81.873 M192.062 77.458 C 191.106 78.448,190.397 79.330,190.486 79.419 C 190.575 79.509,191.531 78.686,192.609 77.591 C 193.688 76.496,194.397 75.613,194.185 75.629 C 193.973 75.645,193.018 76.468,192.062 77.458 M188.860 80.680 C 188.343 81.215,187.997 81.730,188.092 81.825 C 188.186 81.919,188.685 81.548,189.200 81.000 C 189.715 80.452,190.061 79.937,189.968 79.855 C 189.876 79.774,189.377 80.145,188.860 80.680 M145.332 124.500 C 122.252 147.655,100.979 168.914,98.059 171.742 C 95.139 174.570,92.837 176.970,92.943 177.077 C 93.050 177.183,103.096 167.302,115.268 155.119 C 161.876 108.470,187.788 82.400,187.547 82.400 C 187.409 82.400,168.412 101.345,145.332 124.500 M212.602 87.128 C 215.021 89.619,223.840 98.331,232.200 106.488 C 240.560 114.646,242.630 116.582,236.800 110.792 C 220.343 94.448,207.740 82.123,212.602 87.128 M157.757 126.700 C 116.347 168.476,115.187 169.651,114.331 170.686 C 113.729 171.415,160.756 124.167,182.796 101.900 C 190.798 93.815,197.448 87.202,197.573 87.205 C 197.698 87.208,198.835 88.202,200.100 89.413 C 201.365 90.625,202.400 91.460,202.400 91.269 C 202.400 90.885,197.983 86.800,197.568 86.800 C 197.425 86.800,179.510 104.755,157.757 126.700 M331.150 89.899 C 332.097 91.053,333.081 92.126,333.336 92.284 C 334.007 92.698,331.460 89.548,330.357 88.600 C 329.845 88.160,330.202 88.744,331.150 89.899 M140.800 103.709 C 134.310 110.281,128.952 115.790,128.892 115.952 C 128.833 116.113,134.224 110.796,140.871 104.135 C 147.519 97.474,152.877 91.965,152.779 91.892 C 152.681 91.820,147.290 97.137,140.800 103.709 M202.800 91.680 C 202.800 92.080,226.564 115.569,226.765 115.369 C 226.857 115.276,226.851 115.155,226.751 115.100 C 226.651 115.045,221.221 109.691,214.685 103.203 C 208.148 96.714,202.800 91.529,202.800 91.680 M334.340 93.916 C 334.833 94.609,335.444 95.304,335.697 95.460 C 335.950 95.617,335.754 95.177,335.260 94.484 C 334.767 93.791,334.156 93.096,333.903 92.940 C 333.650 92.783,333.846 93.223,334.340 93.916 M338.973 100.018 C 341.247 103.196,341.983 103.813,340.056 100.925 C 339.147 99.563,338.181 98.312,337.908 98.143 C 337.635 97.974,338.114 98.818,338.973 100.018 M58.200 103.459 C 54.771 108.657,53.738 110.323,54.268 109.800 C 55.067 109.012,61.569 99.200,61.287 99.207 C 61.129 99.211,59.740 101.124,58.200 103.459 M343.820 107.100 C 345.897 110.310,347.200 112.156,347.200 111.890 C 347.200 111.510,343.547 106.000,343.295 106.000 C 343.192 106.000,343.428 106.495,343.820 107.100 M258.400 106.470 C 258.400 106.751,280.020 128.174,289.400 137.187 C 292.480 140.147,291.310 138.892,286.800 134.400 C 267.328 115.003,258.400 106.223,258.400 106.470 M52.253 112.900 L 51.533 114.200 52.358 113.200 C 53.089 112.313,53.414 111.600,53.086 111.600 C 53.024 111.600,52.649 112.185,52.253 112.900 M348.241 114.200 C 348.841 115.300,349.502 116.380,349.710 116.600 C 350.303 117.227,348.541 113.895,347.806 113.000 C 347.445 112.560,347.641 113.100,348.241 114.200 M189.597 122.300 L 181.000 131.000 189.674 122.429 C 197.174 115.019,198.433 113.929,198.974 114.378 C 199.323 114.668,199.600 114.718,199.600 114.492 C 199.600 114.178,198.734 113.600,198.264 113.600 C 198.225 113.600,194.325 117.515,189.597 122.300 M50.586 115.700 L 49.952 117.000 50.767 116.000 C 51.552 115.037,51.808 114.400,51.410 114.400 C 51.306 114.400,50.935 114.985,50.586 115.700 M350.600 118.400 C 350.941 119.060,351.311 119.600,351.421 119.600 C 351.531 119.600,351.341 119.060,351.000 118.400 C 350.659 117.740,350.289 117.200,350.179 117.200 C 350.069 117.200,350.259 117.740,350.600 118.400 M213.305 128.272 C 219.284 134.173,229.309 144.073,235.582 150.273 C 241.855 156.473,247.055 161.479,247.136 161.397 C 247.217 161.316,245.671 159.663,243.699 157.725 C 241.727 155.786,231.791 146.010,221.618 136.000 C 211.445 125.990,202.967 117.743,202.778 117.672 C 202.588 117.602,207.326 122.372,213.305 128.272 M47.800 120.800 C 47.243 121.900,46.877 122.800,46.987 122.800 C 47.097 122.800,47.643 121.900,48.200 120.800 C 48.757 119.700,49.123 118.800,49.013 118.800 C 48.903 118.800,48.357 119.700,47.800 120.800 M230.400 118.920 C 230.400 119.224,251.352 139.981,251.505 139.828 C 251.580 139.753,234.920 123.044,230.572 118.833 C 230.477 118.742,230.400 118.781,230.400 118.920 M45.023 126.206 C 44.160 128.272,44.274 128.506,45.247 126.662 C 45.693 125.816,45.965 125.032,45.852 124.919 C 45.739 124.806,45.366 125.385,45.023 126.206 M93.689 151.500 C 80.044 165.305,68.930 176.653,68.992 176.719 C 69.094 176.827,77.723 168.148,107.613 137.870 C 113.656 131.749,118.675 126.664,118.767 126.570 C 118.858 126.477,118.835 126.400,118.715 126.400 C 118.596 126.400,107.334 137.695,93.689 151.500 M354.834 126.600 C 354.834 126.820,355.178 127.630,355.600 128.400 C 356.022 129.170,356.366 129.620,356.366 129.400 C 356.366 129.180,356.022 128.370,355.600 127.600 C 355.178 126.830,354.834 126.380,354.834 126.600 M178.800 133.000 C 177.828 133.990,177.123 134.800,177.233 134.800 C 177.343 134.800,178.228 133.990,179.200 133.000 C 180.172 132.010,180.877 131.200,180.767 131.200 C 180.657 131.200,179.772 132.010,178.800 133.000 M40.053 137.853 C 39.129 140.193,38.440 142.173,38.520 142.254 C 38.601 142.334,39.423 140.486,40.347 138.147 C 41.271 135.807,41.960 133.827,41.880 133.746 C 41.799 133.666,40.977 135.514,40.053 137.853 M175.601 136.198 C 175.086 136.748,174.739 137.264,174.832 137.346 C 174.924 137.428,175.419 136.978,175.930 136.347 C 177.076 134.935,176.874 134.844,175.601 136.198 M283.761 157.283 C 295.883 169.319,305.923 179.174,306.073 179.183 C 306.223 179.192,300.463 173.387,293.273 166.282 C 273.669 146.911,261.949 135.400,261.829 135.400 C 261.771 135.400,271.640 145.247,283.761 157.283 M173.402 138.398 C 173.003 138.839,172.807 139.200,172.967 139.200 C 173.388 139.200,174.528 137.995,174.312 137.779 C 174.211 137.678,173.802 137.956,173.402 138.398 M171.200 140.600 C 170.683 141.150,170.390 141.600,170.548 141.600 C 170.707 141.600,171.286 141.150,171.836 140.600 C 172.386 140.050,172.680 139.600,172.488 139.600 C 172.296 139.600,171.717 140.050,171.200 140.600 M360.420 139.600 C 360.417 139.710,361.305 142.410,362.394 145.600 C 363.482 148.790,364.378 151.157,364.386 150.859 C 364.402 150.242,361.295 140.912,360.770 140.000 C 360.580 139.670,360.422 139.490,360.420 139.600 M157.530 154.541 C 151.222 160.950,146.118 166.251,146.188 166.321 C 146.258 166.391,151.471 161.242,157.772 154.877 C 164.073 148.513,169.342 143.192,169.481 143.053 C 169.620 142.914,169.568 142.820,169.367 142.844 C 169.165 142.868,163.839 148.131,157.530 154.541 M255.200 143.387 C 255.200 143.561,275.730 163.961,276.603 164.654 C 276.821 164.828,272.141 160.071,266.203 154.085 C 255.611 143.407,255.200 143.008,255.200 143.387 M298.370 146.112 C 298.903 146.710,299.501 147.200,299.698 147.200 C 300.086 147.200,299.472 146.550,298.198 145.612 C 297.613 145.181,297.658 145.314,298.370 146.112 M300.996 148.796 C 301.626 149.454,302.219 149.914,302.313 149.820 C 302.522 149.612,300.556 147.600,300.143 147.600 C 299.982 147.600,300.366 148.138,300.996 148.796 M35.646 150.467 C 35.621 150.834,35.496 151.464,35.370 151.867 C 35.152 152.562,35.163 152.563,35.597 151.887 C 35.848 151.496,35.973 150.866,35.873 150.487 C 35.711 149.868,35.688 149.866,35.646 150.467 M304.400 151.748 C 304.400 151.907,304.850 152.486,305.400 153.036 C 305.950 153.586,306.400 153.880,306.400 153.688 C 306.400 153.496,305.950 152.917,305.400 152.400 C 304.850 151.883,304.400 151.590,304.400 151.748 M364.834 153.400 C 364.822 153.840,364.987 154.470,365.200 154.800 C 365.714 155.595,365.714 154.596,365.200 153.400 L 364.856 152.600 364.834 153.400 M306.800 154.043 C 306.800 154.298,325.520 172.908,330.300 177.404 C 333.524 180.437,333.638 180.726,332.182 182.182 C 331.622 182.742,331.339 183.200,331.553 183.200 C 332.054 183.200,333.600 181.241,333.600 180.606 C 333.600 180.339,331.485 178.089,328.900 175.605 C 326.315 173.121,320.285 167.201,315.500 162.448 C 310.715 157.695,306.800 153.913,306.800 154.043 M365.634 156.200 C 365.622 156.640,365.787 157.270,366.000 157.600 C 366.514 158.395,366.514 157.396,366.000 156.200 L 365.656 155.400 365.634 156.200 M33.829 157.029 C 33.681 157.615,33.638 158.172,33.732 158.266 C 33.827 158.360,34.024 157.958,34.171 157.371 C 34.319 156.785,34.362 156.228,34.268 156.134 C 34.173 156.040,33.976 156.442,33.829 157.029 M366.428 159.233 C 366.444 159.765,366.619 160.560,366.819 161.000 C 367.071 161.558,367.107 161.315,366.938 160.200 C 366.655 158.343,366.387 157.836,366.428 159.233 M33.000 160.400 C 32.848 161.091,32.807 161.741,32.909 161.842 C 33.011 161.944,33.209 161.453,33.350 160.750 C 33.683 159.083,33.360 158.760,33.000 160.400 M367.256 163.000 C 367.256 163.440,367.411 164.160,367.600 164.600 L 367.944 165.400 367.944 164.600 C 367.944 164.160,367.789 163.440,367.600 163.000 L 367.256 162.200 367.256 163.000 M32.229 163.829 C 32.081 164.415,32.038 164.972,32.132 165.066 C 32.227 165.160,32.424 164.758,32.571 164.171 C 32.719 163.585,32.762 163.028,32.668 162.934 C 32.573 162.840,32.376 163.242,32.229 163.829 M250.000 164.116 C 250.000 164.253,253.694 168.006,258.208 172.457 C 262.723 176.908,266.368 180.686,266.308 180.854 C 266.176 181.227,258.095 189.517,244.085 203.653 L 233.528 214.307 240.994 221.653 C 245.100 225.694,248.598 229.051,248.767 229.112 C 248.936 229.174,245.767 225.936,241.726 221.916 C 237.685 217.896,234.428 214.400,234.489 214.147 C 234.550 213.895,241.845 206.369,250.700 197.423 C 259.555 188.478,266.800 181.009,266.800 180.827 C 266.800 180.584,256.538 170.220,250.172 164.033 C 250.077 163.942,250.000 163.979,250.000 164.116 M278.783 166.900 C 280.441 168.666,280.800 168.984,280.800 168.683 C 280.800 168.619,279.945 167.764,278.900 166.783 L 277.000 165.000 278.783 166.900 M368.068 166.800 C 368.062 167.350,368.211 168.160,368.400 168.600 L 368.744 169.400 368.732 168.600 C 368.726 168.160,368.576 167.350,368.400 166.800 L 368.080 165.800 368.068 166.800 M31.378 167.778 C 31.227 168.581,31.194 169.327,31.304 169.437 C 31.414 169.547,31.627 168.981,31.778 168.178 C 31.928 167.375,31.962 166.628,31.852 166.518 C 31.742 166.408,31.528 166.975,31.378 167.778 M137.600 174.851 C 134.630 177.935,132.152 180.587,132.094 180.746 C 131.992 181.024,144.625 193.603,156.230 204.778 C 159.326 207.760,155.186 203.593,147.030 195.519 L 132.200 180.837 137.995 175.019 C 141.182 171.818,143.612 169.210,143.395 169.222 C 143.178 169.235,140.570 171.768,137.600 174.851 M368.868 171.400 C 368.874 171.840,369.024 172.650,369.200 173.200 L 369.520 174.200 369.532 173.200 C 369.538 172.650,369.389 171.840,369.200 171.400 L 368.856 170.600 368.868 171.400 M30.578 172.578 C 30.427 173.381,30.394 174.127,30.504 174.237 C 30.614 174.347,30.827 173.781,30.978 172.978 C 31.128 172.175,31.162 171.428,31.052 171.318 C 30.942 171.208,30.728 171.775,30.578 172.578 M289.369 177.265 C 292.136 179.940,294.400 182.323,294.400 182.559 C 294.400 182.795,292.285 185.151,289.700 187.794 L 285.000 192.600 289.900 187.806 C 292.595 185.170,294.800 182.827,294.800 182.600 C 294.800 182.117,285.143 172.400,284.663 172.400 C 284.485 172.400,286.602 174.589,289.369 177.265 M108.800 175.800 C 108.283 176.350,107.990 176.800,108.148 176.800 C 108.307 176.800,108.886 176.350,109.436 175.800 C 109.986 175.250,110.280 174.800,110.088 174.800 C 109.896 174.800,109.317 175.250,108.800 175.800 M369.670 176.400 C 369.657 176.950,369.795 178.120,369.977 179.000 L 370.308 180.600 370.307 179.200 C 370.305 177.435,369.709 174.812,369.670 176.400 M29.890 177.150 C 29.731 177.893,29.620 179.063,29.644 179.750 C 29.681 180.817,29.741 180.736,30.049 179.200 C 30.248 178.210,30.359 177.040,30.296 176.600 C 30.218 176.059,30.086 176.237,29.890 177.150 M104.800 179.800 C 104.283 180.350,103.990 180.800,104.148 180.800 C 104.307 180.800,104.886 180.350,105.436 179.800 C 105.986 179.250,106.280 178.800,106.088 178.800 C 105.896 178.800,105.317 179.250,104.800 179.800 M65.442 180.234 C 65.308 180.583,65.393 181.168,65.630 181.534 C 66.011 182.123,66.033 182.113,65.823 181.449 C 65.693 181.036,65.791 180.451,66.042 180.149 C 66.324 179.810,66.343 179.600,66.092 179.600 C 65.868 179.600,65.576 179.885,65.442 180.234 M89.046 180.726 C 88.935 180.905,93.155 185.358,98.422 190.622 C 103.690 195.887,108.000 200.096,108.000 199.977 C 108.000 199.858,103.779 195.553,98.619 190.411 C 93.460 185.268,89.331 180.912,89.443 180.731 C 89.555 180.549,89.557 180.400,89.447 180.400 C 89.337 180.400,89.157 180.546,89.046 180.726 M112.782 190.086 C 117.722 195.082,121.835 199.098,121.923 199.010 C 122.078 198.855,118.474 195.244,108.600 185.661 C 105.960 183.099,107.842 185.090,112.782 190.086 M308.400 181.491 C 308.400 181.683,308.569 182.011,308.776 182.220 C 309.012 182.458,301.953 189.899,289.822 202.200 C 279.191 212.980,270.545 221.858,270.608 221.929 C 270.713 222.046,287.235 205.435,297.791 194.600 C 300.149 192.180,303.798 188.459,305.899 186.332 C 309.452 182.736,309.675 182.418,309.061 181.803 C 308.697 181.440,308.400 181.300,308.400 181.491 M370.682 185.600 C 370.803 187.690,370.969 189.475,371.051 189.567 C 371.329 189.878,371.143 185.410,370.802 183.600 C 370.564 182.338,370.528 182.937,370.682 185.600 M29.084 184.400 C 28.932 185.610,28.830 187.590,28.858 188.800 C 28.899 190.509,28.987 190.151,29.256 187.200 C 29.641 182.973,29.518 180.964,29.084 184.400 M67.200 183.017 C 67.200 183.238,70.303 186.301,73.600 189.334 C 74.590 190.245,73.603 189.148,71.408 186.895 C 67.433 182.818,67.200 182.604,67.200 183.017 M321.130 193.341 C 315.922 198.650,311.707 203.040,311.764 203.097 C 311.836 203.170,328.441 186.634,331.167 183.775 C 331.258 183.679,331.168 183.620,330.967 183.644 C 330.765 183.667,326.339 188.031,321.130 193.341 M93.784 209.254 C 103.693 219.073,111.851 227.062,111.914 227.006 C 112.016 226.916,92.307 207.280,87.016 202.200 C 85.870 201.100,82.871 198.220,80.351 195.800 C 77.831 193.380,83.876 199.434,93.784 209.254 M371.354 200.000 C 371.354 202.750,371.418 203.875,371.496 202.500 C 371.574 201.125,371.574 198.875,371.496 197.500 C 371.418 196.125,371.354 197.250,371.354 200.000 M28.542 200.200 C 28.541 202.180,28.608 203.040,28.692 202.112 C 28.776 201.184,28.777 199.564,28.695 198.512 C 28.612 197.460,28.543 198.220,28.542 200.200 M276.460 201.080 C 275.943 201.615,275.597 202.130,275.692 202.225 C 275.786 202.319,276.285 201.948,276.800 201.400 C 277.315 200.852,277.661 200.337,277.568 200.255 C 277.476 200.174,276.977 200.545,276.460 201.080 M134.397 211.315 C 139.785 216.752,144.323 221.200,144.480 221.200 C 144.721 221.200,126.186 202.692,125.000 201.748 C 124.780 201.573,129.009 205.878,134.397 211.315 M264.400 213.269 C 258.570 219.184,253.746 224.181,253.679 224.374 C 253.613 224.567,258.383 219.874,264.279 213.946 C 273.395 204.781,275.905 202.124,275.133 202.458 C 275.060 202.489,270.230 207.355,264.400 213.269 M111.600 203.335 C 111.600 203.495,112.230 204.257,113.000 205.027 C 113.770 205.797,114.400 206.276,114.400 206.092 C 114.400 205.908,113.770 205.146,113.000 204.400 C 112.230 203.654,111.600 203.174,111.600 203.335 M114.800 206.581 C 114.800 206.752,116.182 208.177,117.870 209.746 C 119.559 211.316,125.363 216.951,130.769 222.268 C 136.174 227.586,140.643 231.891,140.699 231.835 C 140.784 231.749,122.403 213.377,121.053 212.200 C 120.801 211.980,119.291 210.555,117.697 209.034 C 116.104 207.513,114.800 206.409,114.800 206.581 M307.260 207.442 C 306.962 207.778,306.799 208.132,306.895 208.229 C 306.992 208.326,307.398 208.044,307.798 207.602 C 308.197 207.161,308.361 206.807,308.162 206.815 C 307.963 206.824,307.557 207.105,307.260 207.442 M305.260 209.480 C 304.743 210.015,304.397 210.530,304.492 210.625 C 304.586 210.719,305.085 210.348,305.600 209.800 C 306.115 209.252,306.461 208.737,306.368 208.655 C 306.276 208.574,305.777 208.945,305.260 209.480 M28.830 211.833 C 28.846 213.135,29.010 215.010,29.195 216.000 C 29.425 217.230,29.462 216.534,29.313 213.800 C 29.070 209.344,28.784 208.180,28.830 211.833 M370.669 213.949 C 370.501 216.010,370.445 217.779,370.545 217.878 C 370.805 218.139,371.307 212.360,371.126 211.185 C 371.043 210.643,370.837 211.887,370.669 213.949 M301.234 213.753 L 300.269 215.000 301.413 213.912 C 302.043 213.314,302.477 212.753,302.379 212.665 C 302.280 212.577,301.765 213.067,301.234 213.753 M164.043 216.041 C 163.077 217.118,162.416 218.000,162.574 218.000 C 162.935 218.000,165.975 214.707,165.989 214.300 C 166.005 213.862,165.963 213.900,164.043 216.041 M289.215 225.785 C 283.397 231.606,278.718 236.421,278.818 236.485 C 278.918 236.548,283.766 231.785,289.592 225.900 C 295.417 220.015,300.096 215.200,299.989 215.200 C 299.882 215.200,295.034 219.963,289.215 225.785 M29.686 220.800 C 29.683 221.570,29.824 222.650,30.000 223.200 C 30.450 224.604,30.465 223.137,30.023 221.000 L 29.692 219.400 29.686 220.800 M156.400 224.020 C 151.845 228.787,152.499 228.722,148.600 224.800 C 146.850 223.040,145.287 221.600,145.127 221.600 C 144.704 221.600,151.572 228.179,152.131 228.309 C 152.389 228.369,154.487 226.524,156.793 224.209 C 159.099 221.894,160.809 220.010,160.593 220.022 C 160.377 220.034,158.490 221.833,156.400 224.020 M369.800 222.000 C 369.645 223.128,369.608 224.141,369.718 224.251 C 369.828 224.361,370.045 223.528,370.200 222.400 C 370.355 221.272,370.392 220.259,370.282 220.149 C 370.172 220.039,369.955 220.872,369.800 222.000 M30.406 226.633 C 30.409 227.275,30.596 228.070,30.821 228.400 C 31.114 228.830,31.154 228.546,30.962 227.400 C 30.630 225.416,30.398 225.096,30.406 226.633 M251.400 226.562 C 249.770 228.305,249.502 228.951,251.005 227.513 C 251.860 226.696,252.479 225.955,252.380 225.867 C 252.281 225.779,251.840 226.092,251.400 226.562 M263.993 228.546 C 262.347 230.166,260.555 232.011,260.012 232.646 C 259.468 233.281,260.863 232.003,263.112 229.808 C 265.360 227.612,267.200 225.767,267.200 225.708 C 267.200 225.430,266.788 225.795,263.993 228.546 M369.022 227.422 C 368.872 228.225,368.838 228.972,368.948 229.082 C 369.058 229.192,369.272 228.625,369.422 227.822 C 369.573 227.019,369.606 226.273,369.496 226.163 C 369.386 226.053,369.173 226.619,369.022 227.422 M31.268 231.200 C 31.262 231.750,31.411 232.560,31.600 233.000 L 31.944 233.800 31.932 233.000 C 31.926 232.560,31.776 231.750,31.600 231.200 L 31.280 230.200 31.268 231.200 M115.600 230.484 C 115.600 230.878,132.421 247.397,132.941 247.515 C 133.220 247.578,133.798 247.218,134.225 246.715 L 135.000 245.800 134.125 246.539 C 132.974 247.512,133.429 247.870,124.071 238.628 C 119.600 234.213,115.865 230.525,115.771 230.433 C 115.677 230.342,115.600 230.365,115.600 230.484 M368.178 232.178 C 368.027 232.981,367.994 233.727,368.104 233.837 C 368.214 233.947,368.427 233.381,368.578 232.578 C 368.728 231.775,368.762 231.028,368.652 230.918 C 368.542 230.808,368.328 231.375,368.178 232.178 M257.475 235.122 C 256.060 236.598,255.683 235.997,261.817 242.052 C 268.272 248.425,267.635 248.196,270.590 245.210 C 271.902 243.885,272.846 242.800,272.687 242.800 C 272.529 242.800,271.418 243.790,270.217 245.000 C 267.467 247.772,268.272 248.085,262.010 241.810 L 256.631 236.420 257.790 235.210 C 258.428 234.545,258.860 234.000,258.750 234.000 C 258.640 234.000,258.066 234.505,257.475 235.122 M143.600 234.691 C 143.600 234.883,143.819 235.259,144.087 235.527 C 144.469 235.909,143.548 237.063,139.787 240.907 L 135.000 245.800 139.900 241.006 C 145.096 235.923,145.131 235.874,144.200 234.943 C 143.870 234.613,143.600 234.500,143.600 234.691 M32.034 235.400 C 32.022 235.840,32.187 236.470,32.400 236.800 C 32.914 237.595,32.914 236.596,32.400 235.400 L 32.056 234.600 32.034 235.400 M367.473 235.753 C 367.323 236.145,367.211 236.766,367.225 237.133 C 367.242 237.575,367.381 237.474,367.637 236.834 C 367.849 236.303,367.961 235.682,367.885 235.454 C 367.809 235.227,367.624 235.361,367.473 235.753 M32.880 238.600 C 32.880 239.040,33.024 239.850,33.200 240.400 C 33.454 241.192,33.520 241.233,33.520 240.600 C 33.520 240.160,33.376 239.350,33.200 238.800 C 32.946 238.008,32.880 237.967,32.880 238.600 M274.637 240.438 C 273.557 241.517,272.840 242.400,273.043 242.400 C 273.486 242.400,276.985 238.850,276.758 238.630 C 276.671 238.545,275.717 239.359,274.637 240.438 M366.656 239.284 C 366.521 239.788,366.427 240.560,366.446 241.000 C 366.465 241.440,366.645 241.098,366.846 240.240 C 367.236 238.578,367.070 237.740,366.656 239.284 M33.634 242.200 C 33.622 242.640,33.787 243.270,34.000 243.600 C 34.514 244.395,34.514 243.396,34.000 242.200 L 33.656 241.400 33.634 242.200 M365.829 243.029 C 365.681 243.615,365.638 244.172,365.732 244.266 C 365.827 244.360,366.024 243.958,366.171 243.371 C 366.319 242.785,366.362 242.228,366.268 242.134 C 366.173 242.040,365.976 242.442,365.829 243.029 M34.434 245.200 C 34.446 245.530,34.611 246.160,34.800 246.600 L 35.144 247.400 35.166 246.600 C 35.178 246.160,35.013 245.530,34.800 245.200 C 34.455 244.667,34.415 244.667,34.434 245.200 M365.029 245.829 C 364.881 246.415,364.838 246.972,364.932 247.066 C 365.027 247.160,365.224 246.758,365.371 246.171 C 365.519 245.585,365.562 245.028,365.468 244.934 C 365.373 244.840,365.176 245.242,365.029 245.829 M35.444 248.600 C 35.773 250.071,36.002 250.390,35.994 249.367 C 35.991 248.945,35.805 248.330,35.582 248.000 C 35.285 247.562,35.248 247.724,35.444 248.600 M363.304 251.704 C 362.595 253.928,362.081 255.815,362.163 255.897 C 362.245 255.978,362.898 254.232,363.615 252.015 C 364.331 249.798,364.845 247.911,364.755 247.822 C 364.666 247.733,364.013 249.479,363.304 251.704 M37.825 256.000 C 38.165 257.481,40.047 262.522,40.847 264.095 C 41.041 264.477,41.200 265.051,41.200 265.371 C 41.200 265.691,41.368 266.057,41.574 266.184 C 42.069 266.490,41.641 265.085,39.815 260.400 C 37.916 255.532,37.513 254.640,37.825 256.000 M361.077 258.277 C 360.700 259.293,360.479 260.213,360.587 260.320 C 360.694 260.427,360.892 260.174,361.028 259.757 C 361.164 259.341,361.462 258.499,361.691 257.887 C 361.920 257.275,362.030 256.697,361.935 256.601 C 361.840 256.506,361.454 257.260,361.077 258.277 M42.018 266.851 C 41.980 267.380,43.257 270.076,43.452 269.881 C 43.565 269.768,43.293 268.984,42.847 268.138 C 42.400 267.292,42.027 266.713,42.018 266.851 M113.645 267.746 C 113.319 268.139,113.221 273.683,113.296 287.631 L 113.400 306.970 114.687 307.339 C 115.679 307.624,116.208 307.556,116.987 307.045 L 118.000 306.382 118.000 287.271 C 118.000 267.559,117.969 267.162,116.420 267.225 C 116.040 267.241,116.148 267.391,116.700 267.612 L 117.600 267.974 117.600 287.173 C 117.600 308.654,117.744 307.647,114.777 306.995 L 113.600 306.736 113.600 287.388 C 113.600 269.383,113.649 268.011,114.300 267.632 C 114.685 267.408,114.797 267.219,114.549 267.212 C 114.301 267.205,113.894 267.446,113.645 267.746 M94.100 267.894 C 95.145 267.976,96.855 267.976,97.900 267.894 C 98.945 267.812,98.090 267.744,96.000 267.744 C 93.910 267.744,93.055 267.812,94.100 267.894 M88.800 268.418 C 88.362 268.715,88.524 268.752,89.400 268.556 C 90.871 268.227,91.190 267.998,90.167 268.006 C 89.745 268.009,89.130 268.195,88.800 268.418 M101.233 268.144 C 101.325 268.223,101.940 268.408,102.600 268.556 C 103.476 268.752,103.638 268.715,103.200 268.418 C 102.660 268.053,100.832 267.798,101.233 268.144 M85.853 270.227 C 85.054 271.026,84.401 271.977,84.401 272.340 C 84.402 272.748,84.695 272.521,85.167 271.747 C 85.588 271.057,86.341 270.207,86.842 269.856 C 87.342 269.505,87.652 269.118,87.529 268.996 C 87.407 268.873,86.653 269.427,85.853 270.227 M104.400 268.926 C 104.400 269.005,105.120 269.827,106.000 270.752 L 107.600 272.434 107.600 289.585 L 107.600 306.736 106.423 306.995 C 103.672 307.599,103.627 307.446,103.500 296.890 L 103.385 287.400 103.292 296.891 L 103.200 306.382 104.213 307.045 C 104.992 307.556,105.521 307.624,106.513 307.339 L 107.800 306.970 107.904 289.915 C 108.006 273.313,107.987 272.823,107.184 271.463 C 106.510 270.320,104.400 268.397,104.400 268.926 M43.618 270.451 C 43.580 270.980,44.857 273.676,45.052 273.481 C 45.165 273.368,44.893 272.584,44.447 271.738 C 44.000 270.892,43.627 270.313,43.618 270.451 M91.000 271.354 C 89.255 272.115,88.795 272.858,88.583 275.258 C 88.359 277.788,88.627 277.420,88.994 274.692 C 89.363 271.959,90.297 271.459,95.581 271.168 L 99.800 270.936 96.000 270.884 C 93.637 270.851,91.746 271.029,91.000 271.354 M100.800 271.643 C 101.350 271.859,102.111 272.432,102.491 272.918 C 102.871 273.403,103.186 273.588,103.191 273.329 C 103.203 272.692,101.249 271.194,100.446 271.225 C 100.061 271.240,100.205 271.409,100.800 271.643 M151.464 273.529 C 150.608 274.475,150.621 275.366,151.500 276.032 C 152.096 276.482,152.125 276.478,151.700 276.001 C 150.989 275.204,151.081 274.106,151.897 273.650 C 152.280 273.435,152.489 273.155,152.361 273.028 C 152.233 272.900,151.830 273.125,151.464 273.529 M154.400 273.293 C 154.730 273.592,155.259 274.098,155.575 274.418 C 156.025 274.873,156.018 274.786,155.541 274.022 C 155.206 273.484,154.677 272.978,154.366 272.897 C 153.908 272.778,153.914 272.853,154.400 273.293 M84.193 289.785 L 84.200 306.570 85.300 307.185 C 86.290 307.738,86.510 307.738,87.500 307.185 L 88.600 306.570 88.615 299.785 L 88.631 293.000 88.506 299.713 C 88.366 307.207,87.998 308.057,85.404 306.875 L 84.409 306.421 84.298 289.711 L 84.187 273.000 84.193 289.785 M103.350 278.600 C 103.351 281.020,103.416 281.958,103.496 280.685 C 103.576 279.412,103.575 277.432,103.494 276.285 C 103.414 275.138,103.349 276.180,103.350 278.600 M88.924 280.600 C 88.926 281.920,89.001 282.412,89.090 281.693 C 89.179 280.974,89.177 279.894,89.086 279.293 C 88.995 278.692,88.922 279.280,88.924 280.600 M49.000 281.600 C 49.341 282.260,49.711 282.800,49.821 282.800 C 49.931 282.800,49.741 282.260,49.400 281.600 C 49.059 280.940,48.689 280.400,48.579 280.400 C 48.469 280.400,48.659 280.940,49.000 281.600 M276.469 280.742 C 275.957 280.886,277.165 281.003,279.152 281.002 C 281.139 281.001,282.458 280.878,282.083 280.728 C 281.224 280.386,277.703 280.394,276.469 280.742 M296.400 280.644 C 296.400 281.024,300.427 287.600,300.659 287.600 C 300.855 287.600,300.472 286.924,297.938 282.800 L 296.832 281.000 299.105 280.877 C 300.902 280.780,301.485 280.901,301.889 281.454 C 302.170 281.838,302.400 281.975,302.400 281.756 C 302.400 280.828,301.301 280.400,298.920 280.400 C 297.534 280.400,296.400 280.510,296.400 280.644 M311.186 282.100 C 310.365 283.778,310.365 283.787,311.168 282.800 C 311.616 282.250,311.986 281.575,311.991 281.300 C 311.997 280.956,312.753 280.800,314.410 280.800 L 316.821 280.800 316.200 282.000 C 315.859 282.660,315.669 283.200,315.779 283.200 C 316.147 283.200,317.172 280.905,316.917 280.651 C 316.779 280.513,315.620 280.400,314.341 280.400 L 312.016 280.400 311.186 282.100 M284.382 281.831 C 285.143 282.161,286.358 282.883,287.082 283.436 C 287.807 283.988,288.400 284.290,288.400 284.105 C 288.400 283.649,284.307 281.196,283.581 281.216 C 283.261 281.224,283.622 281.501,284.382 281.831 M270.664 283.627 C 268.768 285.296,266.979 287.513,267.284 287.817 C 267.378 287.911,268.018 287.188,268.707 286.211 C 269.396 285.234,270.715 283.887,271.640 283.217 C 272.564 282.548,273.138 282.000,272.916 282.000 C 272.694 282.000,271.681 282.732,270.664 283.627 M349.814 283.035 C 349.441 283.604,349.227 284.161,349.339 284.272 C 349.450 284.383,349.829 283.918,350.181 283.237 C 350.959 281.733,350.744 281.615,349.814 283.035 M152.600 282.597 C 152.820 282.670,153.495 282.839,154.100 282.973 L 155.200 283.215 155.200 294.981 C 155.200 306.395,155.176 306.754,154.400 307.000 C 153.473 307.294,151.932 306.893,151.506 306.246 C 150.996 305.471,151.143 284.455,151.665 283.474 C 152.088 282.681,152.069 282.652,151.459 283.154 C 150.855 283.653,150.798 284.844,150.894 295.139 L 151.000 306.570 152.073 307.172 C 152.880 307.624,153.425 307.675,154.273 307.377 L 155.400 306.981 155.506 295.191 C 155.623 282.255,155.642 282.357,153.224 282.432 C 152.661 282.449,152.380 282.523,152.600 282.597 M303.000 283.600 C 303.341 284.260,303.711 284.800,303.821 284.800 C 303.931 284.800,303.741 284.260,303.400 283.600 C 303.059 282.940,302.689 282.400,302.579 282.400 C 302.469 282.400,302.659 282.940,303.000 283.600 M50.600 284.400 C 50.941 285.060,51.311 285.600,51.421 285.600 C 51.531 285.600,51.341 285.060,51.000 284.400 C 50.659 283.740,50.289 283.200,50.179 283.200 C 50.069 283.200,50.259 283.740,50.600 284.400 M132.082 283.496 C 133.558 283.573,136.078 283.573,137.682 283.497 C 139.287 283.421,138.080 283.358,135.000 283.358 C 131.920 283.357,130.607 283.419,132.082 283.496 M161.470 283.700 C 160.849 284.154,160.796 285.237,160.893 295.591 L 161.000 306.981 162.127 307.377 C 162.975 307.675,163.521 307.624,164.327 307.172 L 165.400 306.571 165.427 300.785 L 165.455 295.000 165.227 300.716 C 164.971 307.171,164.525 307.990,161.833 306.957 C 161.283 306.746,160.765 284.346,161.300 283.921 C 161.355 283.877,165.180 283.735,169.800 283.605 L 178.200 283.368 170.176 283.284 C 164.275 283.222,161.972 283.332,161.470 283.700 M198.482 283.496 C 199.958 283.573,202.478 283.573,204.082 283.497 C 205.687 283.421,204.480 283.358,201.400 283.358 C 198.320 283.357,197.007 283.419,198.482 283.496 M141.200 283.886 C 141.530 284.009,142.295 284.360,142.900 284.665 C 143.505 284.971,144.000 285.131,144.000 285.021 C 144.000 284.707,141.698 283.596,141.120 283.632 C 140.771 283.653,140.797 283.736,141.200 283.886 M180.309 284.447 C 181.249 284.912,182.573 285.947,183.250 286.746 C 184.094 287.741,184.323 287.887,183.978 287.208 C 183.155 285.589,180.525 283.604,179.200 283.602 C 178.870 283.601,179.369 283.981,180.309 284.447 M192.800 284.433 L 191.800 285.248 193.000 284.679 C 193.660 284.366,194.470 284.009,194.800 283.886 C 195.229 283.727,195.172 283.657,194.600 283.640 C 194.160 283.628,193.350 283.985,192.800 284.433 M207.600 283.886 C 207.930 284.009,208.740 284.366,209.400 284.679 L 210.600 285.248 209.600 284.433 C 209.050 283.985,208.240 283.628,207.800 283.640 C 207.228 283.657,207.171 283.727,207.600 283.886 M314.614 284.635 C 314.241 285.204,314.027 285.761,314.139 285.872 C 314.250 285.983,314.629 285.518,314.981 284.837 C 315.759 283.333,315.544 283.215,314.614 284.635 M348.246 285.786 C 347.891 286.328,347.600 286.881,347.600 287.014 C 347.600 287.147,347.087 288.008,346.459 288.928 C 344.622 291.620,343.175 294.000,343.376 294.000 C 343.598 294.000,346.930 288.897,348.273 286.500 C 349.307 284.655,349.289 284.194,348.246 285.786 M144.400 285.367 C 144.400 285.788,145.605 286.928,145.821 286.712 C 145.922 286.611,145.644 286.202,145.202 285.802 C 144.761 285.403,144.400 285.207,144.400 285.367 M275.257 286.064 C 273.160 287.101,271.113 289.739,271.282 291.185 L 271.400 292.200 279.444 292.308 C 288.081 292.424,289.062 292.220,288.022 290.521 C 287.699 289.994,287.596 289.961,287.637 290.400 C 287.792 292.012,287.854 292.000,279.600 292.000 L 271.600 292.000 271.603 291.100 C 271.608 289.325,273.701 287.051,276.420 285.866 C 277.179 285.536,277.620 285.251,277.400 285.233 C 277.180 285.215,276.216 285.589,275.257 286.064 M282.786 285.690 C 283.548 285.951,284.973 286.983,285.953 287.982 C 287.331 289.389,287.535 289.510,286.851 288.516 C 285.742 286.903,284.097 285.718,282.576 285.434 C 281.582 285.249,281.614 285.289,282.786 285.690 M304.000 285.448 C 304.000 285.658,304.544 286.453,305.210 287.215 L 306.419 288.600 305.387 287.010 C 304.164 285.129,304.000 284.944,304.000 285.448 M290.322 286.690 C 290.805 287.369,291.561 288.707,292.001 289.662 C 292.441 290.618,292.692 290.950,292.559 290.400 C 292.255 289.144,290.547 286.138,289.917 285.748 C 289.656 285.587,289.838 286.011,290.322 286.690 M52.252 287.191 C 52.977 288.713,56.417 294.000,56.682 294.000 C 56.875 294.000,56.811 293.891,54.421 290.154 C 51.727 285.942,51.525 285.667,52.252 287.191 M132.915 286.696 C 134.188 286.776,136.168 286.775,137.315 286.694 C 138.462 286.614,137.420 286.549,135.000 286.550 C 132.580 286.551,131.642 286.616,132.915 286.696 M195.530 287.085 C 193.868 288.116,193.600 289.222,193.600 295.045 C 193.600 300.467,193.848 301.675,195.165 302.687 C 196.374 303.615,196.595 303.192,195.400 302.237 L 194.200 301.278 194.072 295.294 C 193.897 287.112,193.914 287.092,200.864 286.776 L 205.800 286.551 201.200 286.486 C 197.529 286.434,196.384 286.555,195.530 287.085 M313.014 287.435 C 312.641 288.004,312.405 288.538,312.489 288.622 C 312.573 288.707,312.958 288.241,313.344 287.588 C 314.206 286.128,313.948 286.009,313.014 287.435 M128.744 287.624 L 127.800 288.447 129.000 287.745 C 130.579 286.820,130.603 286.800,130.111 286.800 C 129.879 286.800,129.264 287.171,128.744 287.624 M139.600 286.963 C 139.600 287.043,140.050 287.403,140.600 287.763 C 141.150 288.124,141.600 288.263,141.600 288.073 C 141.600 287.884,141.150 287.523,140.600 287.273 C 140.050 287.022,139.600 286.883,139.600 286.963 M165.599 287.100 C 165.599 287.265,166.814 287.350,168.299 287.290 C 173.045 287.096,173.513 286.930,169.500 286.864 C 167.355 286.829,165.600 286.935,165.599 287.100 M177.200 287.272 C 179.657 287.974,179.599 287.736,179.613 297.149 C 179.622 303.544,179.759 305.976,180.137 306.473 C 180.833 307.388,182.580 307.775,183.471 307.211 C 184.092 306.818,184.031 306.786,183.058 306.993 C 182.331 307.148,181.567 307.008,180.958 306.609 L 180.000 305.982 180.000 297.220 L 180.000 288.458 178.946 287.629 C 178.366 287.173,177.421 286.816,176.846 286.836 C 175.921 286.868,175.962 286.919,177.200 287.272 M88.703 288.700 C 88.948 291.272,89.105 291.482,89.154 289.300 C 89.179 288.145,89.056 287.200,88.880 287.200 C 88.704 287.200,88.625 287.875,88.703 288.700 M189.400 288.000 C 189.250 288.473,189.217 288.950,189.327 289.060 C 189.437 289.170,189.650 288.873,189.800 288.400 C 189.950 287.927,189.983 287.450,189.873 287.340 C 189.763 287.230,189.550 287.527,189.400 288.000 M212.658 288.400 C 212.975 290.125,213.202 290.451,213.194 289.167 C 213.191 288.635,213.011 287.930,212.794 287.600 C 212.518 287.178,212.477 287.415,212.658 288.400 M123.000 288.400 C 122.850 288.873,122.817 289.350,122.927 289.460 C 123.037 289.570,123.250 289.273,123.400 288.800 C 123.550 288.327,123.583 287.850,123.473 287.740 C 123.363 287.630,123.150 287.927,123.000 288.400 M301.400 289.200 C 301.741 289.860,302.111 290.400,302.221 290.400 C 302.331 290.400,302.141 289.860,301.800 289.200 C 301.459 288.540,301.089 288.000,300.979 288.000 C 300.869 288.000,301.059 288.540,301.400 289.200 M127.467 289.067 C 127.320 289.213,127.241 296.548,127.291 305.367 L 127.382 321.400 127.591 305.200 C 127.822 287.305,127.833 288.701,127.467 289.067 M141.800 295.200 C 141.800 298.678,141.935 301.440,142.100 301.338 C 142.265 301.236,142.400 298.474,142.400 295.200 C 142.400 291.926,142.265 289.164,142.100 289.062 C 141.935 288.960,141.800 291.722,141.800 295.200 M184.571 297.600 C 184.571 302.550,184.628 304.575,184.699 302.100 C 184.769 299.625,184.769 295.575,184.699 293.100 C 184.628 290.625,184.571 292.650,184.571 297.600 M208.294 289.756 C 208.438 290.513,208.177 291.084,207.275 291.987 C 206.608 292.654,206.252 293.200,206.484 293.200 C 207.660 293.200,209.286 289.926,208.500 289.140 C 208.232 288.872,208.164 289.077,208.294 289.756 M311.414 290.235 C 311.041 290.804,310.805 291.338,310.889 291.422 C 310.973 291.507,311.358 291.041,311.744 290.388 C 312.606 288.928,312.348 288.809,311.414 290.235 M212.846 290.867 C 212.821 291.234,212.696 291.864,212.570 292.267 C 212.352 292.962,212.363 292.963,212.797 292.287 C 213.048 291.896,213.173 291.266,213.073 290.887 C 212.911 290.268,212.888 290.266,212.846 290.867 M265.852 291.700 C 265.400 293.387,265.599 297.053,266.245 298.950 C 267.092 301.437,267.348 301.133,266.556 298.581 C 266.149 297.269,265.998 295.621,266.111 293.700 C 266.290 290.626,266.241 290.248,265.852 291.700 M303.015 291.947 C 303.375 292.687,303.573 293.658,303.457 294.104 C 303.306 294.681,303.369 294.791,303.673 294.487 C 304.191 293.969,303.868 292.493,302.998 291.400 C 302.435 290.693,302.437 290.756,303.015 291.947 M292.931 294.200 C 292.933 295.740,293.005 296.321,293.092 295.491 C 293.179 294.661,293.177 293.401,293.089 292.691 C 293.000 291.981,292.929 292.660,292.931 294.200 M310.267 292.267 C 309.905 292.628,309.940 294.087,310.325 294.693 C 310.505 294.976,310.630 294.507,310.619 293.594 C 310.609 292.719,310.585 292.002,310.567 292.001 C 310.548 292.001,310.413 292.120,310.267 292.267 M200.442 293.578 C 197.073 293.758,196.200 293.933,195.844 294.500 C 195.348 295.289,195.854 296.433,196.829 296.722 C 197.155 296.819,197.081 296.646,196.657 296.319 C 194.776 294.872,195.917 294.213,200.671 294.000 C 203.126 293.890,205.269 293.665,205.434 293.500 C 205.599 293.335,205.478 293.235,205.167 293.278 C 204.855 293.321,202.729 293.456,200.442 293.578 M56.800 294.738 C 56.800 294.924,57.188 295.419,57.662 295.838 L 58.524 296.600 57.816 295.500 C 57.086 294.366,56.800 294.151,56.800 294.738 M342.281 295.439 C 341.886 295.968,341.708 296.400,341.885 296.400 C 342.234 296.400,343.338 294.801,343.128 294.600 C 343.057 294.533,342.677 294.911,342.281 295.439 M302.322 296.100 C 300.711 298.642,299.909 300.215,300.741 299.200 C 301.676 298.059,303.342 295.200,303.072 295.200 C 302.973 295.200,302.635 295.605,302.322 296.100 M310.800 295.729 C 310.800 296.094,312.845 299.200,313.086 299.200 C 313.279 299.200,311.692 296.448,311.136 295.820 C 310.951 295.611,310.800 295.570,310.800 295.729 M206.600 296.400 C 206.096 296.617,206.022 296.744,206.400 296.744 C 206.730 296.744,207.360 296.589,207.800 296.400 C 208.304 296.183,208.378 296.056,208.000 296.056 C 207.670 296.056,207.040 296.211,206.600 296.400 M271.043 297.433 C 270.615 298.547,270.781 299.488,271.500 300.032 C 272.096 300.482,272.125 300.478,271.700 300.001 C 270.978 299.191,271.086 297.706,271.900 297.232 C 272.521 296.870,272.526 296.823,271.943 296.812 C 271.581 296.805,271.176 297.085,271.043 297.433 M340.556 297.905 C 340.124 298.507,339.086 299.945,338.251 301.100 C 337.415 302.255,336.888 303.200,337.080 303.200 C 337.271 303.200,337.745 302.662,338.134 302.004 C 338.522 301.347,339.473 299.979,340.247 298.965 C 341.021 297.951,341.585 297.051,341.499 296.966 C 341.413 296.880,340.989 297.303,340.556 297.905 M60.497 299.993 C 61.214 301.089,61.935 301.989,62.099 301.993 C 62.264 301.997,61.752 301.100,60.962 300.000 C 59.108 297.420,58.812 297.415,60.497 299.993 M304.512 301.100 C 301.805 305.372,300.300 308.033,300.486 308.220 C 300.573 308.306,301.329 307.167,302.167 305.688 C 306.487 298.064,307.258 297.363,308.754 299.700 C 309.212 300.415,309.590 300.848,309.593 300.662 C 309.608 299.911,307.898 298.000,307.211 298.000 C 306.731 298.000,305.797 299.073,304.512 301.100 M298.260 302.752 C 297.502 304.045,296.573 305.575,296.195 306.152 C 295.817 306.728,295.603 307.200,295.718 307.200 C 295.926 307.200,298.634 303.032,299.552 301.300 C 300.553 299.409,299.575 300.509,298.260 302.752 M309.960 301.800 C 310.634 303.105,311.188 303.828,311.185 303.400 C 311.183 303.180,310.814 302.550,310.364 302.000 C 309.821 301.336,309.685 301.269,309.960 301.800 M283.400 302.829 C 282.080 303.472,281.209 303.998,281.464 303.999 C 281.719 303.999,283.069 303.460,284.464 302.800 C 285.859 302.140,286.730 301.614,286.400 301.631 C 286.070 301.648,284.720 302.187,283.400 302.829 M315.785 303.500 C 316.402 304.435,316.983 305.200,317.076 305.200 C 317.364 305.200,315.833 302.766,315.232 302.269 C 314.920 302.011,315.168 302.565,315.785 303.500 M63.277 303.700 C 63.812 304.415,64.599 305.489,65.025 306.087 C 65.451 306.686,65.935 307.181,66.100 307.187 C 66.264 307.194,65.560 306.120,64.535 304.800 C 62.608 302.318,61.555 301.397,63.277 303.700 M287.530 303.326 C 288.875 304.757,287.487 306.244,283.480 307.662 C 281.914 308.216,281.746 308.340,282.800 308.163 C 284.411 307.894,288.271 305.713,288.584 304.896 C 288.812 304.304,287.641 302.433,287.030 302.413 C 286.827 302.406,287.052 302.817,287.530 303.326 M135.000 303.600 L 130.600 303.842 135.076 303.921 C 137.718 303.968,139.654 303.836,139.800 303.600 C 139.936 303.380,139.902 303.236,139.724 303.279 C 139.546 303.323,137.420 303.467,135.000 303.600 M145.083 304.012 C 144.711 304.445,144.564 304.800,144.755 304.800 C 145.195 304.800,146.174 303.641,145.936 303.402 C 145.838 303.304,145.454 303.579,145.083 304.012 M191.246 304.567 C 194.046 307.171,203.798 308.357,206.056 306.368 L 207.000 305.536 206.011 306.168 C 203.421 307.823,193.749 306.611,191.486 304.347 C 190.855 303.716,190.217 303.205,190.069 303.211 C 189.921 303.217,190.451 303.827,191.246 304.567 M196.848 303.381 C 196.948 303.481,198.945 303.629,201.287 303.710 C 203.996 303.803,205.774 304.046,206.173 304.378 C 206.518 304.664,206.800 304.725,206.800 304.513 C 206.800 303.680,204.578 303.200,200.715 303.200 C 198.488 303.200,196.748 303.282,196.848 303.381 M269.600 304.549 C 270.150 305.167,270.960 305.856,271.400 306.078 C 272.010 306.387,271.962 306.260,271.195 305.542 C 269.433 303.890,268.495 303.307,269.600 304.549 M334.169 306.500 C 327.099 315.331,317.822 324.825,309.834 331.404 C 304.179 336.061,302.804 337.316,305.800 335.084 C 312.680 329.957,323.735 319.418,330.224 311.800 C 333.685 307.737,336.936 303.600,336.668 303.600 C 336.570 303.600,335.445 304.905,334.169 306.500 M129.363 305.005 C 128.877 306.942,129.594 307.200,135.453 307.200 C 140.374 307.200,145.136 306.203,144.285 305.351 C 144.205 305.271,143.396 305.564,142.489 306.003 C 140.085 307.164,130.183 307.206,129.818 306.056 C 129.688 305.647,129.695 305.017,129.834 304.656 C 129.972 304.295,129.980 304.000,129.850 304.000 C 129.721 304.000,129.502 304.452,129.363 305.005 M311.640 304.400 C 311.628 304.730,311.970 305.450,312.400 306.000 C 312.830 306.550,313.186 307.214,313.191 307.476 C 313.196 307.738,313.378 308.063,313.595 308.197 C 314.115 308.518,313.665 307.289,312.792 306.000 C 312.419 305.450,312.013 304.730,311.889 304.400 C 311.688 303.867,311.661 303.867,311.640 304.400 M272.988 306.989 C 273.832 307.662,276.757 308.576,277.069 308.264 C 277.173 308.161,276.659 307.947,275.929 307.790 C 275.198 307.632,274.060 307.247,273.400 306.932 C 272.295 306.406,272.262 306.411,272.988 306.989 M67.055 308.425 C 68.386 310.257,70.029 312.104,70.187 311.946 C 70.272 311.861,69.435 310.803,68.326 309.596 C 67.218 308.388,66.646 307.861,67.055 308.425 M295.301 308.000 C 295.420 308.442,296.088 308.610,297.832 308.637 L 300.200 308.675 298.009 308.513 C 296.804 308.425,295.665 308.138,295.478 307.876 C 295.242 307.544,295.188 307.581,295.301 308.000 M278.700 308.682 C 279.195 308.778,280.005 308.778,280.500 308.682 C 280.995 308.587,280.590 308.509,279.600 308.509 C 278.610 308.509,278.205 308.587,278.700 308.682 M315.300 308.687 C 315.905 308.778,316.895 308.778,317.500 308.687 C 318.105 308.595,317.610 308.520,316.400 308.520 C 315.190 308.520,314.695 308.595,315.300 308.687 M72.695 315.000 C 76.861 319.787,88.567 330.909,91.620 332.980 C 92.451 333.544,91.047 332.248,85.843 327.650 C 83.447 325.532,78.960 321.190,75.873 318.000 C 72.785 314.810,71.355 313.460,72.695 315.000 M122.800 320.909 C 122.800 322.078,125.518 322.823,126.800 322.005 C 127.211 321.743,126.925 321.699,125.891 321.865 C 124.756 322.047,124.186 321.930,123.591 321.392 C 123.156 320.998,122.800 320.781,122.800 320.909 M92.924 333.877 C 93.260 334.421,96.400 336.955,96.400 336.682 C 96.400 336.580,95.553 335.803,94.519 334.955 C 93.484 334.107,92.766 333.622,92.924 333.877 M96.943 337.108 C 97.112 337.381,98.363 338.347,99.725 339.256 C 102.613 341.183,101.996 340.447,98.818 338.173 C 97.618 337.314,96.774 336.835,96.943 337.108 M299.903 339.088 C 298.200 340.326,296.877 341.410,296.964 341.497 C 297.050 341.584,297.951 341.021,298.965 340.247 C 299.979 339.473,301.347 338.522,302.004 338.134 C 302.662 337.745,303.200 337.286,303.200 337.114 C 303.200 336.676,303.329 336.598,299.903 339.088 M104.289 342.430 C 104.778 342.939,105.278 343.255,105.401 343.132 C 105.524 343.009,105.124 342.592,104.512 342.206 L 103.400 341.504 104.289 342.430 M295.256 342.434 C 294.736 342.855,294.466 343.194,294.656 343.187 C 295.144 343.169,296.576 342.043,296.371 341.839 C 296.277 341.745,295.775 342.013,295.256 342.434 M106.000 343.318 C 106.000 343.568,111.442 347.133,113.544 348.260 C 115.044 349.063,115.208 349.097,114.400 348.436 C 113.850 347.986,113.257 347.614,113.082 347.609 C 112.907 347.604,111.467 346.732,109.882 345.671 C 106.455 343.377,106.000 343.101,106.000 343.318 M290.600 345.341 C 288.840 346.502,286.320 348.040,285.000 348.759 C 283.680 349.478,282.420 350.259,282.200 350.495 C 281.980 350.732,283.060 350.233,284.600 349.388 C 288.887 347.034,294.856 343.072,293.900 343.215 C 293.845 343.223,292.360 344.180,290.600 345.341 M116.000 349.620 C 117.387 350.561,118.178 350.835,117.200 350.036 C 116.650 349.586,116.020 349.217,115.800 349.215 C 115.580 349.213,115.670 349.396,116.000 349.620 M139.707 360.624 C 140.055 360.991,142.789 361.993,143.400 361.978 C 143.853 361.967,141.850 361.056,140.374 360.601 C 139.838 360.436,139.538 360.446,139.707 360.624 M258.294 361.085 C 257.245 361.435,256.467 361.800,256.564 361.897 C 256.774 362.107,259.636 361.174,260.180 360.718 C 260.671 360.307,260.565 360.328,258.294 361.085 M144.000 362.132 C 144.000 362.374,151.445 364.807,152.099 364.778 C 152.374 364.766,151.070 364.249,149.200 363.630 C 144.374 362.032,144.000 361.924,144.000 362.132 M252.800 362.947 C 251.370 363.451,248.356 364.375,246.101 365.000 C 243.847 365.625,242.079 366.212,242.172 366.305 C 242.478 366.611,256.000 362.543,256.000 362.144 C 256.000 361.878,255.414 362.025,252.800 362.947 M154.014 365.378 C 154.792 365.664,156.052 366.007,156.814 366.139 C 157.576 366.272,157.120 366.027,155.800 365.595 C 153.133 364.724,151.798 364.561,154.014 365.378 M158.433 366.547 C 158.525 366.628,159.320 366.804,160.200 366.938 C 161.315 367.107,161.558 367.071,161.000 366.819 C 160.232 366.471,158.090 366.244,158.433 366.547 M239.000 366.819 C 238.442 367.071,238.685 367.107,239.800 366.938 C 240.680 366.804,241.475 366.628,241.567 366.547 C 241.910 366.244,239.768 366.471,239.000 366.819 M163.000 367.600 C 164.196 368.114,165.195 368.114,164.400 367.600 C 164.070 367.387,163.440 367.222,163.000 367.234 L 162.200 367.256 163.000 367.600 M235.800 367.600 C 235.296 367.817,235.222 367.944,235.600 367.944 C 235.930 367.944,236.560 367.789,237.000 367.600 C 237.504 367.383,237.578 367.256,237.200 367.256 C 236.870 367.256,236.240 367.411,235.800 367.600 M166.600 368.400 C 168.292 368.831,169.744 368.831,168.400 368.400 C 167.850 368.224,166.950 368.083,166.400 368.087 C 165.502 368.094,165.522 368.126,166.600 368.400 M231.600 368.400 L 230.600 368.720 231.600 368.720 C 232.150 368.720,233.050 368.576,233.600 368.400 L 234.600 368.080 233.600 368.080 C 233.050 368.080,232.150 368.224,231.600 368.400 M171.400 369.200 C 171.840 369.389,172.650 369.538,173.200 369.532 L 174.200 369.520 173.200 369.200 C 172.650 369.024,171.840 368.874,171.400 368.868 L 170.600 368.856 171.400 369.200 M226.800 369.200 L 225.800 369.520 226.800 369.532 C 227.350 369.538,228.160 369.389,228.600 369.200 L 229.400 368.856 228.600 368.868 C 228.160 368.874,227.350 369.024,226.800 369.200 M176.400 370.000 C 176.950 370.176,178.030 370.317,178.800 370.314 L 180.200 370.308 178.600 369.977 C 176.463 369.535,174.996 369.550,176.400 370.000 M221.200 370.000 L 219.800 370.295 221.200 370.307 C 221.970 370.315,223.050 370.176,223.600 370.000 L 224.600 369.680 223.600 369.693 C 223.050 369.700,221.970 369.838,221.200 370.000 M183.200 370.802 C 185.010 371.143,189.478 371.329,189.167 371.051 C 189.075 370.969,187.290 370.803,185.200 370.682 C 182.537 370.528,181.938 370.564,183.200 370.802 M213.000 370.800 L 210.600 371.066 212.800 371.103 C 214.010 371.124,215.810 370.997,216.800 370.820 L 218.600 370.500 217.000 370.517 C 216.120 370.527,214.320 370.654,213.000 370.800 M196.900 371.497 C 198.605 371.572,201.395 371.572,203.100 371.497 C 204.805 371.422,203.410 371.361,200.000 371.361 C 196.590 371.361,195.195 371.422,196.900 371.497 ", stroke: "none", fill: "#747474", fillRule: "evenodd" }))));
};

var Icon$1j = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 40 40" }, props),
        React__default['default'].createElement("path", { d: "M0 10C0 4.47715 4.47715 0 10 0H30C35.5228 0 40 4.47715 40 10V30C40 35.5228 35.5228 40 30 40H10C4.47715 40 0 35.5228 0 30V10Z", fill: "white" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M30 0.416667H10C4.70727 0.416667 0.416667 4.70727 0.416667 10V30C0.416667 35.2927 4.70727 39.5833 10 39.5833H30C35.2927 39.5833 39.5833 35.2927 39.5833 30V10C39.5833 4.70727 35.2927 0.416667 30 0.416667ZM10 0C4.47715 0 0 4.47715 0 10V30C0 35.5228 4.47715 40 10 40H30C35.5228 40 40 35.5228 40 30V10C40 4.47715 35.5228 0 30 0H10Z", fill: "#E7E3EB" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M27.6906 18.2129C27.0383 17.5606 27.0383 16.503 27.6906 15.8508C28.3429 15.1985 29.4004 15.1985 30.0527 15.8508C30.705 16.503 30.705 17.5606 30.0527 18.2129C29.4004 18.8651 28.3429 18.8651 27.6906 18.2129ZM22.0806 23.8229C21.5914 23.3337 21.5914 22.5405 22.0806 22.0513C22.5698 21.5621 23.363 21.5621 23.8522 22.0513C24.3414 22.5405 24.3414 23.3337 23.8522 23.8229C23.363 24.3121 22.5698 24.3121 22.0806 23.8229ZM30.9385 20.8702C30.4493 20.381 30.4493 19.5879 30.9385 19.0987C31.4277 18.6094 32.2208 18.6094 32.7101 19.0987C33.1993 19.5879 33.1993 20.381 32.7101 20.8702C32.2208 21.3594 31.4277 21.3594 30.9385 20.8702ZM27.9859 23.8229C27.4966 23.3337 27.4966 22.5405 27.9859 22.0513C28.4751 21.5621 29.2682 21.5621 29.7574 22.0513C30.2466 22.5405 30.2466 23.3337 29.7574 23.8229C29.2682 24.3121 28.4751 24.3121 27.9859 23.8229ZM34.1864 23.5276C33.8602 23.2015 33.8602 22.6727 34.1864 22.3465C34.5125 22.0204 35.0413 22.0204 35.3674 22.3465C35.6936 22.6727 35.6936 23.2015 35.3674 23.5276C35.0413 23.8537 34.5125 23.8537 34.1864 23.5276ZM31.2337 26.4802C30.9076 26.1541 30.9076 25.6253 31.2337 25.2992C31.5599 24.973 32.0887 24.973 32.4148 25.2992C32.7409 25.6253 32.7409 26.1541 32.4148 26.4802C32.0887 26.8064 31.5599 26.8064 31.2337 26.4802ZM24.738 21.1655C24.0857 20.5132 24.0857 19.4557 24.738 18.8034C25.3902 18.1511 26.4478 18.1511 27.1001 18.8034C27.7523 19.4557 27.7523 20.5132 27.1001 21.1655C26.4478 21.8178 25.3902 21.8178 24.738 21.1655ZM24.738 15.2602C24.0857 14.608 24.0857 13.5504 24.738 12.8981C25.3902 12.2459 26.4478 12.2459 27.1001 12.8981C27.7523 13.5504 27.7523 14.608 27.1001 15.2602C26.4478 15.9125 25.3902 15.9125 24.738 15.2602ZM21.7853 18.2129C21.1331 17.5606 21.1331 16.503 21.7853 15.8508C22.4376 15.1985 23.4952 15.1985 24.1474 15.8508C24.7997 16.503 24.7997 17.5606 24.1474 18.2129C23.4952 18.8651 22.4376 18.8651 21.7853 18.2129ZM15.8526 18.2129C15.2004 17.5606 15.2004 16.503 15.8526 15.8508C16.5049 15.1985 17.5625 15.1985 18.2147 15.8508C18.867 16.503 18.867 17.5606 18.2147 18.2129C17.5625 18.8651 16.5049 18.8651 15.8526 18.2129ZM10.2427 23.8229C9.75345 23.3337 9.75345 22.5405 10.2427 22.0513C10.7319 21.5621 11.525 21.5621 12.0142 22.0513C12.5034 22.5405 12.5034 23.3337 12.0142 23.8229C11.525 24.3121 10.7319 24.3121 10.2427 23.8229ZM19.1005 20.8702C18.6113 20.381 18.6113 19.5879 19.1005 19.0987C19.5897 18.6094 20.3829 18.6094 20.8721 19.0987C21.3613 19.5879 21.3613 20.381 20.8721 20.8702C20.3829 21.3594 19.5897 21.3594 19.1005 20.8702ZM16.1479 23.8229C15.6587 23.3337 15.6587 22.5405 16.1479 22.0513C16.6371 21.5621 17.4303 21.5621 17.9195 22.0513C18.4087 22.5405 18.4087 23.3337 17.9195 23.8229C17.4303 24.3121 16.6371 24.3121 16.1479 23.8229ZM4.63267 23.5276C4.30653 23.2015 4.30653 22.6727 4.63267 22.3465C4.9588 22.0204 5.48758 22.0204 5.81372 22.3465C6.13985 22.6727 6.13985 23.2015 5.81372 23.5276C5.48758 23.8537 4.9588 23.8537 4.63267 23.5276ZM7.58529 26.4802C7.25915 26.1541 7.25915 25.6253 7.58529 25.2992C7.91143 24.973 8.4402 24.973 8.76634 25.2992C9.09248 25.6253 9.09248 26.1541 8.76634 26.4802C8.4402 26.8064 7.91143 26.8064 7.58529 26.4802ZM19.3958 26.4802C19.0697 26.1541 19.0697 25.6253 19.3958 25.2992C19.7219 24.973 20.2507 24.973 20.5768 25.2992C20.903 25.6253 20.903 26.1541 20.5768 26.4802C20.2507 26.8064 19.7219 26.8064 19.3958 26.4802ZM7.29003 20.8702C6.80082 20.381 6.80082 19.5879 7.29003 19.0987C7.77924 18.6094 8.5724 18.6094 9.0616 19.0987C9.55081 19.5879 9.55081 20.381 9.0616 20.8702C8.5724 21.3594 7.77924 21.3594 7.29003 20.8702ZM12.9 21.1655C12.2477 20.5132 12.2477 19.4557 12.9 18.8034C13.5523 18.1511 14.6098 18.1511 15.2621 18.8034C15.9144 19.4557 15.9144 20.5132 15.2621 21.1655C14.6098 21.8178 13.5523 21.8178 12.9 21.1655ZM12.9 15.2602C12.2477 14.608 12.2477 13.5504 12.9 12.8981C13.5523 12.2459 14.6098 12.2459 15.2621 12.8981C15.9144 13.5504 15.9144 14.608 15.2621 15.2602C14.6098 15.9125 13.5523 15.9125 12.9 15.2602ZM9.94739 18.2129C9.29512 17.5606 9.29512 16.503 9.94739 15.8508C10.5997 15.1985 11.6572 15.1985 12.3095 15.8508C12.9618 16.503 12.9618 17.5606 12.3095 18.2129C11.6572 18.8651 10.5997 18.8651 9.94739 18.2129Z", fill: "#1D222A" })));
};

var Icon$1i = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M16.3 8.09014C15.91 8.48014 15.91 9.10014 16.3 9.49014L18.2 11.3901H9C8.45 11.3901 8 11.8401 8 12.3901C8 12.9401 8.45 13.3901 9 13.3901H18.2L16.3 15.2901C15.91 15.6801 15.91 16.3001 16.3 16.6901C16.69 17.0801 17.31 17.0801 17.7 16.6901L21.29 13.1001C21.68 12.7101 21.68 12.0801 21.29 11.6901L17.7 8.09014C17.31 7.70014 16.69 7.70014 16.3 8.09014ZM4 19.3901H11C11.55 19.3901 12 19.8401 12 20.3901C12 20.9401 11.55 21.3901 11 21.3901H4C2.9 21.3901 2 20.4901 2 19.3901V5.39014C2 4.29014 2.9 3.39014 4 3.39014H11C11.55 3.39014 12 3.84014 12 4.39014C12 4.94014 11.55 5.39014 11 5.39014H4V19.3901Z" })));
};

var Icon$1h = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 25 25" }, props),
        React__default['default'].createElement("path", { d: "M16.7095 3.10222C17.1006 1.8767 16.1861 0.625 14.8997 0.625C13.8505 0.625 13 1.47554 13 2.52473L13 6.16735C13 6.90335 13.5966 7.5 14.3326 7.5C14.9126 7.5 15.4259 7.12495 15.6022 6.57247L16.7095 3.10222Z", fill: "#F6AF5B" }),
        React__default['default'].createElement("path", { d: "M8.29046 3.10222C7.89941 1.8767 8.81388 0.625 10.1003 0.625C11.1495 0.625 12 1.47554 12 2.52472L12 6.16736C12 6.90335 11.4034 7.5 10.6674 7.5C10.0874 7.5 9.57408 7.12495 9.39778 6.57247L8.29046 3.10222Z", fill: "#F6AF5B" }),
        React__default['default'].createElement("path", { d: "M19.8989 24.1416L11.8536 16.0962C11.6583 15.901 11.6583 15.5844 11.8536 15.3891L15.3891 11.8536C15.5843 11.6583 15.9009 11.6583 16.0962 11.8536L24.1416 19.899C24.4325 20.1899 24.2671 20.6882 23.8599 20.7473L21.5113 21.0884C21.2923 21.1202 21.1202 21.2923 21.0884 21.5114L20.7473 23.8599C20.6882 24.2671 20.1899 24.4326 19.8989 24.1416Z", fill: "#AE5714" }),
        React__default['default'].createElement("path", { d: "M5.19774 24.1416L13.2431 16.0962C13.4384 15.901 13.4384 15.5844 13.2431 15.3891L9.70759 11.8536C9.51233 11.6583 9.19575 11.6583 9.00049 11.8536L0.955098 19.899C0.664132 20.1899 0.829575 20.6882 1.23679 20.7473L3.58535 21.0884C3.80441 21.1202 3.97648 21.2923 4.0083 21.5114L4.34938 23.8599C4.40852 24.2671 4.90677 24.4326 5.19774 24.1416Z", fill: "#AE5714" }),
        React__default['default'].createElement("ellipse", { cx: "12.5259", cy: "14.0971", rx: "8.89606", ry: "8.22211", fill: "#E17A2F" }),
        React__default['default'].createElement("ellipse", { rx: "8.69974", ry: "8.36325", transform: "matrix(0.882297 -0.470694 0.529889 0.848067 12.478 12.6876)", fill: "#F6AF5B" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M7.8727 5.68848L21.0558 14.7566C20.9018 15.3031 20.6883 15.8274 20.422 16.3232L6.43117 6.69946C6.87202 6.31918 7.35491 5.97999 7.8727 5.68848ZM4.87291 8.47883L19.0217 18.2112C18.2987 18.9421 17.4342 19.5515 16.4682 20.0023L3.75 11.2539C3.94091 10.2547 4.32789 9.31792 4.87291 8.47883Z", fill: "#F7D29B" }),
        React__default['default'].createElement("ellipse", { rx: "6.64749", ry: "6.39038", transform: "matrix(0.882297 -0.470693 0.52989 0.848067 12.4778 12.6875)", fill: "#E7974D" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.6821 10.1773C18.5825 9.96784 18.4695 9.7613 18.3429 9.55858C16.4727 6.56549 12.3308 5.53998 9.09162 7.26804C5.85244 8.9961 4.74261 12.8234 6.61276 15.8164C6.73956 16.0194 6.87681 16.2133 7.02351 16.3979C5.65271 13.5147 6.82182 10.0792 9.84162 8.46822C12.8612 6.85733 16.6652 7.63925 18.6821 10.1773Z", fill: "#E17A2F" }),
        React__default['default'].createElement("path", { d: "M9.95047 14.0798C9.03077 14.1218 8.6939 13.361 8.65027 12.4055C8.60664 11.4501 8.87277 10.6617 9.79247 10.6197C10.7122 10.5777 11.049 11.3385 11.0927 12.294C11.1363 13.2495 10.8702 14.0378 9.95047 14.0798Z", fill: "#AE5714" }),
        React__default['default'].createElement("path", { d: "M15.1194 14.0803C14.1997 14.1223 13.8628 13.3615 13.8192 12.406C13.7756 11.4505 14.0417 10.6622 14.9614 10.6202C15.8811 10.5782 16.218 11.339 16.2616 12.2945C16.3052 13.25 16.0391 14.0383 15.1194 14.0803Z", fill: "#AE5714" })));
};

var Icon$1g = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 25 25" }, props),
        React__default['default'].createElement("path", { d: "M16.7095 3.10222C17.1006 1.8767 16.1861 0.625 14.8997 0.625C13.8505 0.625 13 1.47554 13 2.52473L13 6.16735C13 6.90335 13.5966 7.5 14.3326 7.5C14.9126 7.5 15.4259 7.12495 15.6022 6.57247L16.7095 3.10222Z", fill: "#FFD800" }),
        React__default['default'].createElement("path", { d: "M8.29046 3.10222C7.89941 1.8767 8.81388 0.625 10.1003 0.625C11.1495 0.625 12 1.47554 12 2.52472L12 6.16736C12 6.90335 11.4034 7.5 10.6674 7.5C10.0874 7.5 9.57408 7.12495 9.39778 6.57247L8.29046 3.10222Z", fill: "#FFD800" }),
        React__default['default'].createElement("path", { d: "M19.8989 24.1416L11.8536 16.0962C11.6583 15.901 11.6583 15.5844 11.8536 15.3891L15.3891 11.8536C15.5843 11.6583 15.9009 11.6583 16.0962 11.8536L24.1416 19.899C24.4325 20.1899 24.2671 20.6882 23.8599 20.7473L21.5113 21.0884C21.2923 21.1202 21.1202 21.2923 21.0884 21.5114L20.7473 23.8599C20.6882 24.2671 20.1899 24.4326 19.8989 24.1416Z", fill: "#FFAF00" }),
        React__default['default'].createElement("path", { d: "M5.19774 24.1416L13.2431 16.0962C13.4384 15.901 13.4384 15.5844 13.2431 15.3891L9.70759 11.8536C9.51233 11.6583 9.19575 11.6583 9.00049 11.8536L0.955098 19.899C0.664132 20.1899 0.829575 20.6882 1.23679 20.7473L3.58535 21.0884C3.80441 21.1202 3.97648 21.2923 4.0083 21.5114L4.34938 23.8599C4.40852 24.2671 4.90677 24.4326 5.19774 24.1416Z", fill: "#FFAF00" }),
        React__default['default'].createElement("ellipse", { cx: "12.5259", cy: "14.0971", rx: "8.89606", ry: "8.22211", fill: "#EB8C00" }),
        React__default['default'].createElement("ellipse", { rx: "8.69974", ry: "8.36325", transform: "matrix(0.882297 -0.470694 0.529889 0.848067 12.478 12.6876)", fill: "#FFD800" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M7.8727 5.68848L21.0558 14.7566C20.9018 15.3031 20.6883 15.8274 20.422 16.3232L6.43117 6.69946C6.87202 6.31918 7.35491 5.97999 7.8727 5.68848ZM4.87291 8.47883L19.0217 18.2112C18.2987 18.9421 17.4342 19.5515 16.4682 20.0023L3.75 11.2539C3.94091 10.2547 4.32789 9.31792 4.87291 8.47883Z", fill: "#FEED8D" }),
        React__default['default'].createElement("ellipse", { rx: "6.64749", ry: "6.39038", transform: "matrix(0.882297 -0.470693 0.52989 0.848067 12.4778 12.6875)", fill: "#FFC700" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.6821 10.1773C18.5825 9.96784 18.4695 9.7613 18.3429 9.55858C16.4727 6.56549 12.3308 5.53998 9.09162 7.26804C5.85244 8.9961 4.74261 12.8234 6.61276 15.8164C6.73956 16.0194 6.87681 16.2133 7.02351 16.3979C5.65271 13.5147 6.82182 10.0792 9.84162 8.46822C12.8612 6.85733 16.6652 7.63925 18.6821 10.1773Z", fill: "#FFAF00" }),
        React__default['default'].createElement("path", { d: "M9.95047 14.0798C9.03077 14.1218 8.6939 13.361 8.65027 12.4055C8.60664 11.4501 8.87277 10.6617 9.79247 10.6197C10.7122 10.5777 11.049 11.3385 11.0927 12.294C11.1363 13.2495 10.8702 14.0378 9.95047 14.0798Z", fill: "#EB8C00" }),
        React__default['default'].createElement("path", { d: "M15.1194 14.0803C14.1997 14.1223 13.8628 13.3615 13.8192 12.406C13.7756 11.4505 14.0417 10.6622 14.9614 10.6202C15.8811 10.5782 16.218 11.339 16.2616 12.2945C16.3052 13.25 16.0391 14.0383 15.1194 14.0803Z", fill: "#EB8C00" })));
};

var Icon$1f = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 25 25" }, props),
        React__default['default'].createElement("path", { d: "M16.7095 3.10222C17.1006 1.8767 16.1861 0.625 14.8997 0.625C13.8505 0.625 13 1.47554 13 2.52473L13 6.16735C13 6.90335 13.5966 7.5 14.3326 7.5C14.9126 7.5 15.4259 7.12495 15.6022 6.57247L16.7095 3.10222Z", fill: "#9A6AFF" }),
        React__default['default'].createElement("path", { d: "M8.29046 3.10222C7.89941 1.8767 8.81388 0.625 10.1003 0.625C11.1495 0.625 12 1.47554 12 2.52472L12 6.16736C12 6.90335 11.4034 7.5 10.6674 7.5C10.0874 7.5 9.57408 7.12495 9.39778 6.57247L8.29046 3.10222Z", fill: "#9A6AFF" }),
        React__default['default'].createElement("path", { d: "M19.8989 24.1416L11.8536 16.0962C11.6583 15.901 11.6583 15.5844 11.8536 15.3891L15.3891 11.8536C15.5843 11.6583 15.9009 11.6583 16.0962 11.8536L24.1416 19.899C24.4325 20.1899 24.2671 20.6882 23.8599 20.7473L21.5113 21.0884C21.2923 21.1202 21.1202 21.2923 21.0884 21.5114L20.7473 23.8599C20.6882 24.2671 20.1899 24.4326 19.8989 24.1416Z", fill: "#A880FD" }),
        React__default['default'].createElement("path", { d: "M5.19774 24.1416L13.2431 16.0962C13.4384 15.901 13.4384 15.5844 13.2431 15.3891L9.70759 11.8536C9.51233 11.6583 9.19575 11.6583 9.00049 11.8536L0.955098 19.899C0.664132 20.1899 0.829575 20.6882 1.23679 20.7473L3.58535 21.0884C3.80441 21.1202 3.97648 21.2923 4.0083 21.5114L4.34938 23.8599C4.40852 24.2671 4.90677 24.4326 5.19774 24.1416Z", fill: "#A880FD" }),
        React__default['default'].createElement("ellipse", { cx: "12.5259", cy: "14.0971", rx: "8.89606", ry: "8.22211", fill: "#7645D9" }),
        React__default['default'].createElement("ellipse", { rx: "8.69974", ry: "8.36325", transform: "matrix(0.882297 -0.470694 0.529889 0.848067 12.478 12.6876)", fill: "#9A6AFF" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M7.8727 5.68848L21.0558 14.7566C20.9018 15.3031 20.6883 15.8274 20.422 16.3232L6.43117 6.69946C6.87202 6.31918 7.35491 5.97999 7.8727 5.68848ZM4.87291 8.47883L19.0217 18.2112C18.2987 18.9421 17.4342 19.5515 16.4682 20.0023L3.75 11.2539C3.94091 10.2547 4.32789 9.31792 4.87291 8.47883Z", fill: "#CAB3F8" }),
        React__default['default'].createElement("ellipse", { rx: "6.64749", ry: "6.39038", transform: "matrix(0.882297 -0.470693 0.52989 0.848067 12.4778 12.6875)", fill: "#8F5BFD" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.6821 10.1773C18.5825 9.96784 18.4695 9.7613 18.3429 9.55858C16.4727 6.56549 12.3308 5.53998 9.09162 7.26804C5.85244 8.9961 4.74261 12.8234 6.61276 15.8164C6.73956 16.0194 6.87681 16.2133 7.02351 16.3979C5.65271 13.5147 6.82182 10.0792 9.84162 8.46822C12.8612 6.85733 16.6652 7.63925 18.6821 10.1773Z", fill: "#7645D9" }),
        React__default['default'].createElement("path", { d: "M9.95047 14.0798C9.03077 14.1218 8.6939 13.361 8.65027 12.4055C8.60664 11.4501 8.87277 10.6617 9.79247 10.6197C10.7122 10.5777 11.049 11.3385 11.0927 12.294C11.1363 13.2495 10.8702 14.0378 9.95047 14.0798Z", fill: "#452A7A" }),
        React__default['default'].createElement("path", { d: "M15.1194 14.0803C14.1997 14.1223 13.8628 13.3615 13.8192 12.406C13.7756 11.4505 14.0417 10.6622 14.9614 10.6202C15.8811 10.5782 16.218 11.339 16.2616 12.2945C16.3052 13.25 16.0391 14.0383 15.1194 14.0803Z", fill: "#452A7A" })));
};

var Icon$1e = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 25 25" }, props),
        React__default['default'].createElement("path", { d: "M16.7095 3.10222C17.1006 1.8767 16.1861 0.625 14.8997 0.625C13.8505 0.625 13 1.47554 13 2.52473L13 6.16735C13 6.90335 13.5966 7.5 14.3326 7.5C14.9126 7.5 15.4259 7.12495 15.6022 6.57247L16.7095 3.10222Z", fill: "#C0C4C6" }),
        React__default['default'].createElement("path", { d: "M8.29046 3.10222C7.89941 1.8767 8.81388 0.625 10.1003 0.625C11.1495 0.625 12 1.47554 12 2.52472L12 6.16736C12 6.90335 11.4034 7.5 10.6674 7.5C10.0874 7.5 9.57408 7.12495 9.39778 6.57247L8.29046 3.10222Z", fill: "#C0C4C6" }),
        React__default['default'].createElement("path", { d: "M19.8989 24.1416L11.8536 16.0962C11.6583 15.901 11.6583 15.5844 11.8536 15.3891L15.3891 11.8536C15.5843 11.6583 15.9009 11.6583 16.0962 11.8536L24.1416 19.899C24.4325 20.1899 24.2671 20.6882 23.8599 20.7473L21.5113 21.0884C21.2923 21.1202 21.1202 21.2923 21.0884 21.5114L20.7473 23.8599C20.6882 24.2671 20.1899 24.4326 19.8989 24.1416Z", fill: "#7D7D7D" }),
        React__default['default'].createElement("path", { d: "M5.19774 24.1416L13.2431 16.0962C13.4384 15.901 13.4384 15.5844 13.2431 15.3891L9.70759 11.8536C9.51233 11.6583 9.19575 11.6583 9.00049 11.8536L0.955098 19.899C0.664132 20.1899 0.829575 20.6882 1.23679 20.7473L3.58535 21.0884C3.80441 21.1202 3.97648 21.2923 4.0083 21.5114L4.34938 23.8599C4.40852 24.2671 4.90677 24.4326 5.19774 24.1416Z", fill: "#7D7D7D" }),
        React__default['default'].createElement("ellipse", { cx: "12.5259", cy: "14.0971", rx: "8.89606", ry: "8.22211", fill: "#969696" }),
        React__default['default'].createElement("ellipse", { rx: "8.69974", ry: "8.36325", transform: "matrix(0.882297 -0.470694 0.529889 0.848067 12.478 12.6876)", fill: "#C0C4C6" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M7.8727 5.68848L21.0558 14.7566C20.9018 15.3031 20.6883 15.8274 20.422 16.3232L6.43117 6.69946C6.87202 6.31918 7.35491 5.97999 7.8727 5.68848ZM4.87291 8.47883L19.0217 18.2112C18.2987 18.9421 17.4342 19.5515 16.4682 20.0023L3.75 11.2539C3.94091 10.2547 4.32789 9.31792 4.87291 8.47883Z", fill: "#D8D8D8" }),
        React__default['default'].createElement("ellipse", { rx: "6.64749", ry: "6.39038", transform: "matrix(0.882297 -0.470693 0.52989 0.848067 12.4778 12.6875)", fill: "#B2B2B2" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.6821 10.1773C18.5825 9.96784 18.4695 9.7613 18.3429 9.55858C16.4727 6.56549 12.3308 5.53998 9.09162 7.26804C5.85244 8.9961 4.74261 12.8234 6.61276 15.8164C6.73956 16.0194 6.87681 16.2133 7.02351 16.3979C5.65271 13.5147 6.82182 10.0792 9.84162 8.46822C12.8612 6.85733 16.6652 7.63925 18.6821 10.1773Z", fill: "#969696" }),
        React__default['default'].createElement("path", { d: "M9.95047 14.0798C9.03077 14.1218 8.6939 13.361 8.65027 12.4055C8.60664 11.4501 8.87277 10.6617 9.79247 10.6197C10.7122 10.5777 11.049 11.3385 11.0927 12.294C11.1363 13.2495 10.8702 14.0378 9.95047 14.0798Z", fill: "#7D7D7D" }),
        React__default['default'].createElement("path", { d: "M15.1194 14.0803C14.1997 14.1223 13.8628 13.3615 13.8192 12.406C13.7756 11.4505 14.0417 10.6622 14.9614 10.6202C15.8811 10.5782 16.218 11.339 16.2616 12.2945C16.3052 13.25 16.0391 14.0383 15.1194 14.0803Z", fill: "#7D7D7D" })));
};

var Icon$1d = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 25 25" }, props),
        React__default['default'].createElement("path", { d: "M16.7095 3.10222C17.1006 1.8767 16.1861 0.625 14.8997 0.625C13.8505 0.625 13 1.47554 13 2.52473L13 6.16735C13 6.90335 13.5966 7.5 14.3326 7.5C14.9126 7.5 15.4259 7.12495 15.6022 6.57247L16.7095 3.10222Z", fill: "#53DEE9" }),
        React__default['default'].createElement("path", { d: "M8.29046 3.10222C7.89941 1.8767 8.81388 0.625 10.1003 0.625C11.1495 0.625 12 1.47554 12 2.52472L12 6.16736C12 6.90335 11.4034 7.5 10.6674 7.5C10.0874 7.5 9.57408 7.12495 9.39778 6.57247L8.29046 3.10222Z", fill: "#53DEE9" }),
        React__default['default'].createElement("path", { d: "M19.8989 24.1416L11.8536 16.0962C11.6583 15.901 11.6583 15.5844 11.8536 15.3891L15.3891 11.8536C15.5843 11.6583 15.9009 11.6583 16.0962 11.8536L24.1416 19.899C24.4325 20.1899 24.2671 20.6882 23.8599 20.7473L21.5113 21.0884C21.2923 21.1202 21.1202 21.2923 21.0884 21.5114L20.7473 23.8599C20.6882 24.2671 20.1899 24.4326 19.8989 24.1416Z", fill: "#1FC7D4" }),
        React__default['default'].createElement("path", { d: "M5.19774 24.1416L13.2431 16.0962C13.4384 15.901 13.4384 15.5844 13.2431 15.3891L9.70759 11.8536C9.51233 11.6583 9.19575 11.6583 9.00049 11.8536L0.955098 19.899C0.664132 20.1899 0.829575 20.6882 1.23679 20.7473L3.58535 21.0884C3.80441 21.1202 3.97648 21.2923 4.0083 21.5114L4.34938 23.8599C4.40852 24.2671 4.90677 24.4326 5.19774 24.1416Z", fill: "#1FC7D4" }),
        React__default['default'].createElement("ellipse", { cx: "12.5259", cy: "14.0971", rx: "8.89606", ry: "8.22211", fill: "#0098A1" }),
        React__default['default'].createElement("ellipse", { rx: "8.69974", ry: "8.36325", transform: "matrix(0.882297 -0.470694 0.529889 0.848067 12.478 12.6876)", fill: "#53DEE9" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M7.8727 5.68848L21.0558 14.7566C20.9018 15.3031 20.6883 15.8274 20.422 16.3232L6.43117 6.69946C6.87202 6.31918 7.35491 5.97999 7.8727 5.68848ZM4.87291 8.47883L19.0217 18.2112C18.2987 18.9421 17.4342 19.5515 16.4682 20.0022L3.75 11.2539C3.94091 10.2547 4.32789 9.31792 4.87291 8.47883Z", fill: "#84F0F9" }),
        React__default['default'].createElement("ellipse", { rx: "6.64749", ry: "6.39038", transform: "matrix(0.882297 -0.470693 0.52989 0.848067 12.4778 12.6875)", fill: "#1FC7D4" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.6821 10.1773C18.5825 9.96784 18.4695 9.7613 18.3429 9.55858C16.4727 6.56549 12.3308 5.53998 9.09162 7.26804C5.85244 8.9961 4.74261 12.8234 6.61276 15.8164C6.73956 16.0194 6.87681 16.2133 7.02351 16.3979C5.65271 13.5147 6.82182 10.0792 9.84162 8.46822C12.8612 6.85733 16.6652 7.63925 18.6821 10.1773Z", fill: "#0098A1" }),
        React__default['default'].createElement("path", { d: "M9.95096 14.0798C9.03126 14.1218 8.69439 13.361 8.65076 12.4055C8.60713 11.4501 8.87326 10.6617 9.79296 10.6197C10.7127 10.5777 11.0495 11.3385 11.0932 12.294C11.1368 13.2495 10.8707 14.0378 9.95096 14.0798Z", fill: "#017178" }),
        React__default['default'].createElement("path", { d: "M15.1199 14.0803C14.2002 14.1223 13.8633 13.3615 13.8197 12.406C13.7761 11.4505 14.0422 10.6622 14.9619 10.6202C15.8816 10.5782 16.2185 11.339 16.2621 12.2945C16.3057 13.25 16.0396 14.0383 15.1199 14.0803Z", fill: "#017178" })));
};

var Icon$1c = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 40 40" }, props),
        React__default['default'].createElement("path", { d: "M36.0112 3.33337L22.1207 13.6277L24.7012 7.56091L36.0112 3.33337Z", fill: "#E17726" }),
        React__default['default'].createElement("path", { d: "M4.00261 3.33337L17.7558 13.7238L15.2989 7.56091L4.00261 3.33337Z", fill: "#E27625" }),
        React__default['default'].createElement("path", { d: "M31.0149 27.2023L27.3227 32.8573L35.2287 35.0397L37.4797 27.3258L31.0149 27.2023Z", fill: "#E27625" }),
        React__default['default'].createElement("path", { d: "M2.53386 27.3258L4.77116 35.0397L12.6772 32.8573L8.9987 27.2023L2.53386 27.3258Z", fill: "#E27625" }),
        React__default['default'].createElement("path", { d: "M12.2518 17.6496L10.0419 20.9712L17.8793 21.3281L17.6048 12.8867L12.2518 17.6496Z", fill: "#E27625" }),
        React__default['default'].createElement("path", { d: "M27.762 17.6494L22.3129 12.7905L22.1207 21.3279L29.9581 20.9711L27.762 17.6494Z", fill: "#E27625" }),
        React__default['default'].createElement("path", { d: "M12.6772 32.8574L17.3989 30.5652L13.336 27.3809L12.6772 32.8574Z", fill: "#E27625" }),
        React__default['default'].createElement("path", { d: "M22.6009 30.5652L27.3226 32.8574L26.6637 27.3809L22.6009 30.5652Z", fill: "#E27625" }),
        React__default['default'].createElement("path", { d: "M27.3226 32.8575L22.6009 30.5653L22.9715 33.6399L22.9303 34.9301L27.3226 32.8575Z", fill: "#D5BFB2" }),
        React__default['default'].createElement("path", { d: "M12.6772 32.8575L17.0694 34.9301L17.042 33.6399L17.3989 30.5653L12.6772 32.8575Z", fill: "#D5BFB2" }),
        React__default['default'].createElement("path", { d: "M17.1518 25.3495L13.2262 24.1965L15.9988 22.92L17.1518 25.3495Z", fill: "#233447" }),
        React__default['default'].createElement("path", { d: "M22.848 25.3495L24.001 22.92L26.801 24.1965L22.848 25.3495Z", fill: "#233447" }),
        React__default['default'].createElement("path", { d: "M12.6773 32.8573L13.3635 27.2023L8.99876 27.3258L12.6773 32.8573Z", fill: "#CC6228" }),
        React__default['default'].createElement("path", { d: "M26.6364 27.2023L27.3227 32.8573L31.0149 27.3258L26.6364 27.2023Z", fill: "#CC6228" }),
        React__default['default'].createElement("path", { d: "M29.9581 20.9709L22.1207 21.3278L22.8482 25.3495L24.0011 22.92L26.8012 24.1965L29.9581 20.9709Z", fill: "#CC6228" }),
        React__default['default'].createElement("path", { d: "M13.2263 24.1965L15.9989 22.92L17.1519 25.3495L17.8793 21.3278L10.0419 20.9709L13.2263 24.1965Z", fill: "#CC6228" }),
        React__default['default'].createElement("path", { d: "M10.0419 20.9709L13.3361 27.3809L13.2263 24.1965L10.0419 20.9709Z", fill: "#E27525" }),
        React__default['default'].createElement("path", { d: "M26.8011 24.1965L26.6638 27.3809L29.958 20.9709L26.8011 24.1965Z", fill: "#E27525" }),
        React__default['default'].createElement("path", { d: "M17.8793 21.3278L17.1519 25.3494L18.0715 30.0985L18.2637 23.8396L17.8793 21.3278Z", fill: "#E27525" }),
        React__default['default'].createElement("path", { d: "M22.1205 21.3278L21.7499 23.8258L21.9283 30.0985L22.848 25.3494L22.1205 21.3278Z", fill: "#E27525" }),
        React__default['default'].createElement("path", { d: "M22.848 25.3496L21.9284 30.0987L22.601 30.5654L26.6638 27.381L26.8011 24.1967L22.848 25.3496Z", fill: "#F5841F" }),
        React__default['default'].createElement("path", { d: "M13.2262 24.1967L13.336 27.381L17.3989 30.5654L18.0714 30.0987L17.1518 25.3496L13.2262 24.1967Z", fill: "#F5841F" }),
        React__default['default'].createElement("path", { d: "M22.9303 34.93L22.9715 33.6398L22.6284 33.3378H17.3714L17.042 33.6398L17.0694 34.93L12.6772 32.8574L14.2145 34.1202L17.3302 36.2751H22.6696L25.7853 34.1202L27.3226 32.8574L22.9303 34.93Z", fill: "#C0AC9D" }),
        React__default['default'].createElement("path", { d: "M22.601 30.5653L21.9284 30.0986H18.0715L17.3989 30.5653L17.0421 33.6399L17.3715 33.3379H22.6285L22.9716 33.6399L22.601 30.5653Z", fill: "#161616" }),
        React__default['default'].createElement("path", { d: "M36.5875 14.3003L37.7542 8.61779L36.011 3.33337L22.6009 13.2846L27.7618 17.6493L35.0365 19.7768L36.6424 17.8964L35.9424 17.3886L37.0679 16.3728L36.2169 15.7003L37.3287 14.863L36.5875 14.3003Z", fill: "#763E1A" }),
        React__default['default'].createElement("path", { d: "M2.24573 8.61779L3.42615 14.3003L2.67123 14.863L3.78302 15.7003L2.93202 16.3728L4.05753 17.3886L3.35752 17.8964L4.96343 19.7768L12.2518 17.6493L17.399 13.2846L4.00263 3.33337L2.24573 8.61779Z", fill: "#763E1A" }),
        React__default['default'].createElement("path", { d: "M35.0365 19.777L27.7619 17.6495L29.958 20.9712L26.6638 27.3811L31.0149 27.3262H37.4797L35.0365 19.777Z", fill: "#F5841F" }),
        React__default['default'].createElement("path", { d: "M12.2517 17.6495L4.96332 19.777L2.53386 27.3262H8.99869L13.336 27.3811L10.0419 20.9712L12.2517 17.6495Z", fill: "#F5841F" }),
        React__default['default'].createElement("path", { d: "M22.1205 21.3276L22.6009 13.2843L24.701 7.56067H15.2988L17.3988 13.2843L17.8792 21.3276L18.0577 23.8531L18.0714 30.0984H21.9283L21.9421 23.8531L22.1205 21.3276Z", fill: "#F5841F" })));
};

var Icon$1b = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M18 13H6C5.45 13 5 12.55 5 12C5 11.45 5.45 11 6 11H18C18.55 11 19 11.45 19 12C19 12.55 18.55 13 18 13Z" })));
};

var Icon$1a = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M6 10C4.9 10 4 10.9 4 12C4 13.1 4.9 14 6 14C7.1 14 8 13.1 8 12C8 10.9 7.1 10 6 10ZM18 10C16.9 10 16 10.9 16 12C16 13.1 16.9 14 18 14C19.1 14 20 13.1 20 12C20 10.9 19.1 10 18 10ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z" })));
};

var Icon$19 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M12 8C13.1 8 14 7.1 14 6C14 4.9 13.1 4 12 4C10.9 4 10 4.9 10 6C10 7.1 10.9 8 12 8ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10ZM12 16C10.9 16 10 16.9 10 18C10 19.1 10.9 20 12 20C13.1 20 14 19.1 14 18C14 16.9 13.1 16 12 16Z" })));
};

var Icon$18 = function (props) { return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
    React__default['default'].createElement("path", { d: "M12.8533 3.39627C12.4633 2.75821 11.5366 2.75821 11.1467 3.39627L7.42977 9.47855C7.02255 10.1449 7.50212 11 8.28305 11H15.7169C16.4979 11 16.9774 10.1449 16.5702 9.47855L12.8533 3.39627ZM12 5.84L13.93 9H10.06L12 5.84ZM17.5 13C15.01 13 13 15.01 13 17.5C13 19.99 15.01 22 17.5 22C19.99 22 22 19.99 22 17.5C22 15.01 19.99 13 17.5 13ZM17.5 20C16.12 20 15 18.88 15 17.5C15 16.12 16.12 15 17.5 15C18.88 15 20 16.12 20 17.5C20 18.88 18.88 20 17.5 20ZM2.99999 19.5C2.99999 20.6046 3.89542 21.5 4.99999 21.5H8.99999C10.1046 21.5 11 20.6046 11 19.5V15.5C11 14.3954 10.1046 13.5 8.99999 13.5H4.99999C3.89542 13.5 2.99999 14.3954 2.99999 15.5V19.5ZM4.99999 15.5H8.99999V19.5H4.99999V15.5Z" }))); };

var Icon$17 = function (props) { return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
    React__default['default'].createElement("path", { d: "M12.8533 3.39627C12.4633 2.75821 11.5366 2.75821 11.1467 3.39627L7.42977 9.47855C7.02255 10.1449 7.50212 11 8.28305 11H15.7169C16.4979 11 16.9774 10.1449 16.5702 9.47855L12.8533 3.39627ZM17.5 13C15.01 13 13 15.01 13 17.5C13 19.99 15.01 22 17.5 22C19.99 22 22 19.99 22 17.5C22 15.01 19.99 13 17.5 13ZM2.99999 19.5C2.99999 20.6046 3.89542 21.5 4.99999 21.5H8.99999C10.1046 21.5 11 20.6046 11 19.5V15.5C11 14.3954 10.1046 13.5 8.99999 13.5H4.99999C3.89542 13.5 2.99999 14.3954 2.99999 15.5V19.5Z" }))); };

var Icon$16 = function (props) {
    var theme = styled.useTheme();
    var primaryColor = theme.isDark ? "#3C3742" : "#e9eaeb";
    var secondaryColor = theme.isDark ? "#666171" : "#bdc2c4";
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 32 32" }, props),
        React__default['default'].createElement("path", { d: "M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16z", fill: primaryColor }),
        React__default['default'].createElement("mask", { id: "A", "mask-type": "alpha", maskUnits: "userSpaceOnUse", x: "0", y: "0", width: "32", height: "32" },
            React__default['default'].createElement("path", { d: "M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16z", fill: "#c4c4c4" })),
        React__default['default'].createElement("g", { mask: "url(#A)" },
            React__default['default'].createElement("path", { d: "M25.128 16.436c0 3.115-4.133 5.641-9.231 5.641s-9.231-2.526-9.231-5.641V15h18.461v1.436zm2.205 13.806c0-3.815-5.074-6.908-11.333-6.908S4.667 26.426 4.667 30.242V32h22.667v-1.759z", fill: secondaryColor }),
            React__default['default'].createElement("path", { fillRule: "evenodd", d: "M10.234 5.601C9.942 4.264 10.96 3 12.328 3c1.184 0 2.143.959 2.143 2.143v3.873l1.427-.067c.589 0 1.166.034 1.724.098V5.143c0-1.184.959-2.143 2.143-2.143 1.368 0 2.386 1.264 2.093 2.601l-.931 4.258c2.529 1.006 4.201 2.749 4.201 4.731 0 3.115-4.133 5.641-9.231 5.641s-9.231-2.526-9.231-5.641c0-2.053 1.794-3.849 4.476-4.836l-.908-4.153z", fill: secondaryColor }),
            React__default['default'].createElement("ellipse", { cx: "12.308", cy: "14.846", rx: "1.026", ry: "1.538", fill: primaryColor }),
            React__default['default'].createElement("ellipse", { cx: "19.385", cy: "14.846", rx: "1.026", ry: "1.538", fill: primaryColor }))));
};

var Icon$15 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 3.45 20.55 3 20 3H15C14.45 3 14 3.45 14 4Z" })));
};

var Icon$14 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 64 64" }, props),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M2.43832 38.1153C2.43048 38.3002 2.42654 38.4857 2.42654 38.6718C2.42654 39.3754 2.48287 40.0702 2.59273 40.7545H2.42654V41.8317C2.42654 42.3575 2.45801 42.8784 2.51976 43.3937C3.7248 53.4491 16.4632 61.3609 32 61.3609C47.5368 61.3609 60.2752 53.4491 61.4802 43.3937C61.542 42.8784 61.5735 42.3575 61.5735 41.8317V40.7545H61.4073C61.5171 40.0702 61.5735 39.3754 61.5735 38.6718C61.5735 38.4857 61.5695 38.3002 61.5617 38.1153C61.1156 27.587 48.0511 19.1426 32 19.1426C15.9489 19.1426 2.88444 27.587 2.43832 38.1153ZM0.00951064 38.1153C0.229456 31.6916 4.24297 26.2955 9.82907 22.6067C15.6197 18.7827 23.4643 16.5034 32 16.5034C40.5358 16.5034 48.3803 18.7827 54.1709 22.6067C59.757 26.2955 63.7705 31.6916 63.9905 38.1153H64V41.8317C64 48.5003 59.9176 54.102 54.1709 57.8969C48.3803 61.7208 40.5358 64.0001 32 64.0001C23.4643 64.0001 15.6197 61.7208 9.82907 57.8969C4.08238 54.102 0 48.5003 0 41.8317V38.1153H0.00951064Z", fill: "#606063" }),
        React__default['default'].createElement("path", { d: "M61.5734 41.832C61.5734 52.6177 48.3329 61.3612 32 61.3612C15.667 61.3612 2.42651 52.6177 2.42651 41.832V38.7405H61.5734V41.832Z", fill: "#BEBEBE" }),
        React__default['default'].createElement("path", { d: "M61.5734 38.6718C61.5734 49.4575 48.3329 58.201 32 58.201C15.667 58.201 2.42651 49.4575 2.42651 38.6718C2.42651 27.8861 15.667 19.1426 32 19.1426C48.3329 19.1426 61.5734 27.8861 61.5734 38.6718Z", fill: "#FAF9FA" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M6.97668 33.1548C6.97663 33.167 6.97661 33.1792 6.97661 33.1915C6.97661 34.0795 7.09495 34.9492 7.32173 35.794H6.97634V36.9377C6.97634 37.4425 7.01459 37.9414 7.08925 38.4332C8.21673 45.8588 17.6492 51.6547 29.1184 51.6547C40.5876 51.6547 50.0201 45.8588 51.1475 38.4332C51.2222 37.9414 51.2604 37.4425 51.2604 36.9377V35.794H50.9156C51.1362 34.9723 51.2542 34.127 51.2604 33.2641C51.2606 33.2399 51.2607 33.2157 51.2607 33.1915C51.2607 33.1792 51.2607 33.167 51.2606 33.1548C51.2309 25.0436 41.329 18.4744 29.1187 18.4744C16.9083 18.4744 7.00645 25.0436 6.97668 33.1548ZM4.55012 33.1548H4.5498V36.9377C4.5498 42.269 7.79116 46.6683 12.1963 49.5962C16.643 52.5518 22.632 54.2939 29.1184 54.2939C35.6048 54.2939 41.5937 52.5518 46.0405 49.5962C50.4456 46.6683 53.687 42.269 53.687 36.9377V33.2739C53.6872 33.2464 53.6872 33.2189 53.6872 33.1915C53.6872 27.8601 50.4459 23.4609 46.0408 20.533C41.594 17.5773 35.6051 15.8352 29.1187 15.8352C22.6322 15.8352 16.6433 17.5773 12.1965 20.533C7.80153 23.4542 4.56495 27.84 4.55012 33.1548Z", fill: "#633001" }),
        React__default['default'].createElement("path", { d: "M51.2604 36.9379C51.2604 45.0659 41.3471 51.6549 29.1184 51.6549C16.8897 51.6549 6.97632 45.0659 6.97632 36.9379V33.4849H51.2604V36.9379Z", fill: "#FEDC90" }),
        React__default['default'].createElement("path", { d: "M51.2604 33.1914C51.2604 41.3195 41.3471 47.9085 29.1184 47.9085C16.8897 47.9085 6.97632 41.3195 6.97632 33.1914C6.97632 25.0634 16.8897 18.4744 29.1184 18.4744C41.3471 18.4744 51.2604 25.0634 51.2604 33.1914Z", fill: "#D1884F" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M13.6497 25.2371C13.6496 25.2493 13.6496 25.2615 13.6496 25.2737C13.6496 26.1618 13.7679 27.0315 13.9947 27.8762H13.6493V29.0199C13.6493 29.5248 13.6876 30.0237 13.7622 30.5154C14.8897 37.941 24.3222 43.737 35.7914 43.737C47.2605 43.737 56.693 37.941 57.8205 30.5154C57.8952 30.0237 57.9334 29.5248 57.9334 29.0199V27.8762H57.5886C57.8092 27.0545 57.9271 26.2092 57.9334 25.3464C57.9336 25.3222 57.9337 25.298 57.9337 25.2737C57.9337 25.2615 57.9337 25.2493 57.9336 25.2371C57.9038 17.1259 48.0019 10.5567 35.7916 10.5567C23.5813 10.5567 13.6794 17.1259 13.6497 25.2371ZM11.2231 25.2371H11.2228V29.0199C11.2228 34.3513 14.4641 38.7505 18.8693 41.6785C23.316 44.6341 29.3049 46.3762 35.7914 46.3762C42.2778 46.3762 48.2667 44.6341 52.7135 41.6785C57.1186 38.7505 60.36 34.3513 60.36 29.0199V25.3561C60.3601 25.3287 60.3602 25.3012 60.3602 25.2737C60.3602 19.9424 57.1189 15.5432 52.7137 12.6152C48.267 9.65961 42.2781 7.91748 35.7916 7.91748C29.3052 7.91748 23.3163 9.65961 18.8695 12.6152C14.4745 15.5364 11.2379 19.9222 11.2231 25.2371Z", fill: "#633001" }),
        React__default['default'].createElement("path", { d: "M57.9334 29.0201C57.9334 37.1481 48.0201 43.7372 35.7913 43.7372C23.5626 43.7372 13.6493 37.1481 13.6493 29.0201V25.5671H57.9334V29.0201Z", fill: "#FEDC90" }),
        React__default['default'].createElement("path", { d: "M57.9334 25.274C57.9334 33.402 48.0201 39.991 35.7913 39.991C23.5626 39.991 13.6493 33.402 13.6493 25.274C13.6493 17.1459 23.5626 10.5569 35.7913 10.5569C48.0201 10.5569 57.9334 17.1459 57.9334 25.274Z", fill: "#D1884F" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M6.97668 17.3196C6.97663 17.3318 6.97661 17.344 6.97661 17.3563C6.97661 18.2443 7.09495 19.114 7.32173 19.9588H6.97634V21.1025C6.97634 21.6073 7.01459 22.1062 7.08925 22.598C8.21673 30.0236 17.6492 35.8195 29.1184 35.8195C40.5876 35.8195 50.0201 30.0236 51.1475 22.598C51.2222 22.1062 51.2604 21.6073 51.2604 21.1025V19.9588H50.9156C51.1362 19.1371 51.2542 18.2917 51.2604 17.4289C51.2606 17.4047 51.2607 17.3805 51.2607 17.3563C51.2607 17.344 51.2607 17.3318 51.2606 17.3196C51.2309 9.20843 41.329 2.63919 29.1187 2.63919C16.9083 2.63919 7.00645 9.20843 6.97668 17.3196ZM4.55012 17.3196H4.5498V21.1025C4.5498 26.4338 7.79116 30.833 12.1963 33.761C16.643 36.7166 22.632 38.4587 29.1184 38.4587C35.6048 38.4587 41.5937 36.7166 46.0405 33.761C50.4456 30.833 53.687 26.4338 53.687 21.1025V17.4387C53.6872 17.4112 53.6872 17.3837 53.6872 17.3563C53.6872 12.0249 50.4459 7.62568 46.0408 4.69775C41.594 1.74213 35.6051 0 29.1187 0C22.6322 0 16.6433 1.74213 12.1965 4.69775C7.80153 7.61896 4.56495 12.0047 4.55012 17.3196Z", fill: "#633001" }),
        React__default['default'].createElement("path", { d: "M51.2604 21.1027C51.2604 29.2307 41.3471 35.8197 29.1184 35.8197C16.8897 35.8197 6.97632 29.2307 6.97632 21.1027V17.6497H51.2604V21.1027Z", fill: "#FEDC90" }),
        React__default['default'].createElement("path", { d: "M51.2604 17.3562C51.2604 25.4842 41.3471 32.0733 29.1184 32.0733C16.8897 32.0733 6.97632 25.4842 6.97632 17.3562C6.97632 9.22822 16.8897 2.63916 29.1184 2.63916C41.3471 2.63916 51.2604 9.22822 51.2604 17.3562Z", fill: "#D1884F" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.214 18.272C12.214 20.9856 14.0269 23.4161 16.8871 25.0513L14.9054 28.7844L14.9059 28.7847H14.9054V38.2326C14.9054 39.4819 15.8366 40.4947 16.9853 40.4947C18.134 40.4947 19.0652 39.4819 19.0652 38.2326V30.7188L21.1972 26.7024C22.5605 27.0169 24.0238 27.1876 25.5468 27.1876C32.9103 27.1876 38.8796 23.196 38.8796 18.272C38.8796 13.3481 32.9103 9.35645 25.5468 9.35645C18.1833 9.35645 12.214 13.3481 12.214 18.272Z", fill: "url(#paint0_linear_pancakes)" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M16.8871 25.0513C16.5702 24.8701 16.2663 24.6792 15.9762 24.4793C13.6475 22.8741 12.2139 20.685 12.2139 18.272C12.2139 13.3481 18.1832 9.35641 25.5468 9.35641C32.9103 9.35641 38.8796 13.3481 38.8796 18.272C38.8796 23.1959 32.9103 27.1876 25.5468 27.1876C24.0238 27.1876 22.5604 27.0168 21.1972 26.7024L19.0652 30.7187V38.2325C19.0652 39.4819 18.134 40.4947 16.9853 40.4947C15.8366 40.4947 14.9054 39.4819 14.9054 38.2325V28.7847L16.8871 25.0513ZM12.7822 28.8244V38.2325C12.7822 40.7573 14.664 42.804 16.9853 42.804C19.3066 42.804 21.1884 40.7573 21.1884 38.2325V31.3375L22.2942 29.2544C23.3445 29.4135 24.433 29.4969 25.5468 29.4969C29.5564 29.4969 33.2881 28.4148 36.0865 26.5435C38.8503 24.6954 41.0028 21.836 41.0028 18.272C41.0028 14.708 38.8503 11.8486 36.0865 10.0005C33.2881 8.12923 29.5564 7.04712 25.5468 7.04712C21.5371 7.04712 17.8054 8.12923 15.007 10.0005C12.2432 11.8486 10.0907 14.708 10.0907 18.272C10.0907 21.4 11.738 23.9758 14.0266 25.8213L13.0813 27.6021C12.9912 27.7662 12.9192 27.9435 12.8685 28.1307C12.8064 28.3589 12.7783 28.5928 12.7822 28.8244Z", fill: "#633001" }),
        React__default['default'].createElement("path", { d: "M16.3791 14.5156C16.3791 17.0663 19.3667 19.1341 23.0521 19.1341C26.7375 19.1341 29.7251 17.0663 29.7251 14.5156C29.7251 11.9648 26.7375 9.89697 23.0521 9.89697C19.3667 9.89697 16.3791 11.9648 16.3791 14.5156Z", fill: "#9E7200" }),
        React__default['default'].createElement("path", { d: "M16.3792 12.5361H29.7251V14.5155H16.3792V12.5361Z", fill: "#9E7200" }),
        React__default['default'].createElement("path", { d: "M16.3791 12.5361C16.3791 15.0868 19.3667 17.1546 23.0521 17.1546C26.7375 17.1546 29.7251 15.0868 29.7251 12.5361C29.7251 9.98529 26.7375 7.91748 23.0521 7.91748C19.3667 7.91748 16.3791 9.98529 16.3791 12.5361Z", fill: "#F0B90B" }),
        React__default['default'].createElement("path", { d: "M20.52 11.9795L22.4008 10.6777C22.7983 10.4027 23.3062 10.4027 23.7036 10.6777L25.5845 11.9795C25.959 12.2388 25.959 12.8336 25.5845 13.0928L23.7036 14.3946C23.3062 14.6697 22.7983 14.6697 22.4008 14.3946L20.52 13.0928C20.1454 12.8336 20.1454 12.2388 20.52 11.9795Z", fill: "#9E7200" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M17.1938 7.32218C18.7911 6.21664 20.8681 5.6084 23.0522 5.6084C25.2363 5.6084 27.3133 6.21664 28.9106 7.32218C30.4827 8.41029 31.8484 10.1975 31.8484 12.5363V14.5157C31.8484 16.8545 30.4827 18.6417 28.9106 19.7298C27.3133 20.8353 25.2363 21.4435 23.0522 21.4435C20.8681 21.4435 18.7911 20.8353 17.1938 19.7298C15.6217 18.6417 14.256 16.8545 14.256 14.5157V12.5363C14.256 10.1975 15.6217 8.41029 17.1938 7.32218ZM23.0522 7.91769C19.3668 7.91769 16.3792 9.9855 16.3792 12.5363V14.5157C16.3792 17.0664 19.3668 19.1343 23.0522 19.1343C26.7376 19.1343 29.7252 17.0664 29.7252 14.5157V12.5363C29.7252 9.9855 26.7376 7.91769 23.0522 7.91769Z", fill: "#633001" }),
        React__default['default'].createElement("defs", null,
            React__default['default'].createElement("linearGradient", { id: "paint0_linear_pancakes", x1: "25.691", y1: "9.6549", x2: "25.691", y2: "40.2608", gradientUnits: "userSpaceOnUse" },
                React__default['default'].createElement("stop", { stopColor: "#9F4A08" }),
                React__default['default'].createElement("stop", { offset: "0.370494", stopColor: "#7D3900" }),
                React__default['default'].createElement("stop", { offset: "1", stopColor: "#8D4104" })))));
};

var Icon$13 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 19 19" }, props),
        React__default['default'].createElement("path", { d: "M0 15.46V18.5C0 18.78 0.22 19 0.5 19H3.54C3.67 19 3.8 18.95 3.89 18.85L14.81 7.94L11.06 4.19L0.15 15.1C0.0500001 15.2 0 15.32 0 15.46ZM17.71 5.04C18.1 4.65 18.1 4.02 17.71 3.63L15.37 1.29C14.98 0.899998 14.35 0.899998 13.96 1.29L12.13 3.12L15.88 6.87L17.71 5.04Z" })));
};

var Icon$12 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 400 390.09" }, props),
        React__default['default'].createElement("g", { id: "svgg" },
            React__default['default'].createElement("path", { id: "path0", d: "M179.512 0.424 C 176.400 0.622,173.450 0.959,172.957 1.172 C 172.464 1.386,171.191 1.561,170.128 1.561 C 169.065 1.561,168.195 1.714,168.195 1.901 C 168.195 2.088,166.615 2.364,164.683 2.516 C 162.751 2.667,161.171 2.932,161.171 3.105 C 161.171 3.279,159.854 3.544,158.244 3.695 C 156.634 3.846,155.317 4.130,155.317 4.326 C 155.317 4.522,154.625 4.683,153.779 4.683 C 152.933 4.683,152.145 4.838,152.028 5.028 C 151.911 5.217,150.850 5.493,149.670 5.640 C 148.490 5.788,147.431 6.059,147.317 6.244 C 147.203 6.428,146.147 6.700,144.969 6.847 C 143.792 6.994,142.829 7.253,142.829 7.423 C 142.829 7.593,141.951 7.852,140.878 8.000 C 139.806 8.148,138.829 8.427,138.709 8.622 C 138.589 8.816,138.062 8.976,137.538 8.976 C 137.014 8.976,136.585 9.131,136.585 9.322 C 136.585 9.512,135.799 9.785,134.838 9.929 C 133.878 10.074,132.989 10.357,132.864 10.559 C 132.739 10.761,132.340 10.928,131.977 10.929 C 131.614 10.931,130.814 11.194,130.199 11.515 C 129.585 11.835,128.838 12.098,128.541 12.098 C 128.243 12.098,128.000 12.251,128.000 12.438 C 128.000 12.625,127.298 12.891,126.439 13.028 C 125.580 13.165,124.878 13.429,124.878 13.613 C 124.878 13.798,124.176 14.061,123.317 14.199 C 122.459 14.336,121.756 14.622,121.756 14.834 C 121.756 15.046,121.419 15.220,121.007 15.220 C 120.278 15.220,117.856 16.328,117.463 16.842 C 117.355 16.984,116.608 17.223,115.804 17.373 C 115.000 17.524,114.341 17.804,114.341 17.995 C 114.341 18.185,114.167 18.341,113.954 18.341 C 113.324 18.341,110.439 19.673,110.439 19.963 C 110.439 20.110,109.912 20.346,109.268 20.488 C 108.624 20.629,108.098 20.893,108.098 21.073 C 108.098 21.254,107.571 21.517,106.927 21.659 C 106.283 21.800,105.756 22.077,105.756 22.275 C 105.756 22.472,105.405 22.634,104.976 22.634 C 104.546 22.634,104.195 22.796,104.195 22.993 C 104.195 23.191,103.668 23.468,103.024 23.610 C 102.380 23.751,101.854 24.017,101.854 24.200 C 101.854 24.383,101.459 24.656,100.976 24.807 C 100.493 24.957,100.010 25.189,99.902 25.321 C 99.707 25.562,98.548 26.230,96.000 27.573 C 95.249 27.969,94.547 28.401,94.439 28.533 C 94.332 28.665,93.849 28.896,93.366 29.047 C 92.883 29.198,92.488 29.485,92.488 29.685 C 92.488 29.885,92.224 30.049,91.902 30.049 C 91.580 30.049,91.317 30.213,91.317 30.413 C 91.317 30.613,90.930 30.899,90.457 31.050 C 89.984 31.200,89.376 31.519,89.105 31.759 C 87.828 32.890,87.418 33.171,87.041 33.171 C 86.817 33.171,86.634 33.306,86.634 33.472 C 86.634 33.637,85.844 34.204,84.878 34.732 C 83.912 35.259,83.122 35.826,83.122 35.992 C 83.122 36.157,82.853 36.293,82.524 36.293 C 82.196 36.293,81.826 36.556,81.702 36.878 C 81.579 37.200,81.308 37.463,81.101 37.463 C 80.894 37.463,80.480 37.683,80.181 37.951 C 78.916 39.085,78.452 39.415,78.120 39.415 C 77.926 39.415,77.438 39.854,77.035 40.390 C 76.632 40.927,76.094 41.366,75.840 41.366 C 75.585 41.366,74.850 41.893,74.206 42.537 C 73.562 43.180,72.921 43.707,72.780 43.707 C 72.640 43.707,71.998 44.234,71.355 44.878 C 70.711 45.522,70.038 46.049,69.859 46.049 C 69.681 46.049,68.735 46.795,67.758 47.707 C 66.780 48.620,64.980 50.244,63.757 51.317 C 62.534 52.390,61.079 53.777,60.523 54.400 C 59.967 55.022,59.287 55.724,59.012 55.961 C 58.737 56.197,58.011 56.894,57.400 57.510 C 56.019 58.901,55.779 59.141,54.388 60.522 C 53.772 61.133,53.075 61.859,52.839 62.134 C 52.602 62.409,51.900 63.082,51.278 63.630 C 50.655 64.178,49.444 65.477,48.585 66.518 C 47.727 67.558,46.278 69.217,45.366 70.204 C 44.454 71.191,43.700 72.174,43.691 72.389 C 43.682 72.605,43.155 73.211,42.520 73.738 C 41.885 74.264,41.366 74.843,41.366 75.024 C 41.366 75.205,40.927 75.792,40.390 76.328 C 39.854 76.865,39.415 77.429,39.415 77.583 C 39.415 77.736,39.020 78.299,38.537 78.833 C 37.062 80.465,35.512 82.656,35.512 83.108 C 35.512 83.344,35.271 83.629,34.976 83.742 C 34.681 83.856,34.114 84.553,33.716 85.291 C 33.319 86.030,32.858 86.634,32.692 86.634 C 32.526 86.634,32.390 86.817,32.390 87.040 C 32.390 87.502,30.786 89.884,30.341 90.081 C 30.180 90.153,30.049 90.460,30.049 90.764 C 30.049 91.068,29.877 91.317,29.666 91.317 C 29.455 91.317,29.173 91.756,29.038 92.293 C 28.904 92.829,28.656 93.268,28.488 93.268 C 28.320 93.268,28.072 93.707,27.937 94.244 C 27.803 94.780,27.520 95.220,27.310 95.220 C 27.099 95.220,26.927 95.483,26.927 95.805 C 26.927 96.127,26.770 96.390,26.579 96.390 C 26.388 96.390,26.121 96.829,25.986 97.366 C 25.851 97.902,25.583 98.341,25.389 98.341 C 25.196 98.341,24.922 98.868,24.780 99.512 C 24.639 100.156,24.362 100.683,24.164 100.683 C 23.967 100.683,23.805 100.934,23.805 101.240 C 23.805 101.547,23.585 102.030,23.316 102.314 C 23.047 102.597,22.477 103.532,22.048 104.390 C 21.619 105.249,21.142 106.008,20.988 106.077 C 20.834 106.146,20.595 106.805,20.457 107.541 C 20.319 108.276,20.050 108.878,19.859 108.878 C 19.668 108.878,19.512 109.141,19.512 109.463 C 19.512 109.785,19.351 110.049,19.153 110.049 C 18.955 110.049,18.678 110.576,18.537 111.220 C 18.395 111.863,18.126 112.390,17.938 112.390 C 17.750 112.390,17.481 113.005,17.340 113.756 C 17.199 114.507,16.928 115.122,16.737 115.122 C 16.546 115.122,16.385 115.429,16.378 115.805 C 16.371 116.180,16.108 116.829,15.792 117.245 C 15.477 117.662,15.220 118.320,15.220 118.709 C 15.220 119.097,15.046 119.415,14.834 119.415 C 14.622 119.415,14.336 120.117,14.199 120.976 C 14.061 121.834,13.804 122.537,13.626 122.537 C 13.449 122.537,13.188 123.151,13.047 123.902 C 12.906 124.654,12.635 125.268,12.444 125.268 C 12.254 125.268,12.098 125.512,12.098 125.809 C 12.098 126.106,11.835 126.853,11.515 127.468 C 11.194 128.082,10.931 128.980,10.929 129.463 C 10.928 129.946,10.768 130.341,10.573 130.341 C 10.379 130.341,10.099 131.220,9.951 132.293 C 9.804 133.366,9.524 134.244,9.329 134.244 C 9.135 134.244,8.976 134.585,8.976 135.001 C 8.976 135.418,8.810 135.861,8.608 135.986 C 8.406 136.111,8.122 136.999,7.978 137.960 C 7.834 138.921,7.573 139.707,7.398 139.707 C 7.224 139.707,6.960 140.673,6.812 141.854 C 6.665 143.034,6.408 144.000,6.242 144.000 C 6.075 144.000,5.849 144.571,5.739 145.268 C 5.286 148.134,4.488 151.415,4.243 151.415 C 4.099 151.415,3.858 152.645,3.707 154.148 C 3.556 155.651,3.291 156.969,3.117 157.076 C 2.944 157.183,2.677 158.763,2.525 160.587 C 2.373 162.410,2.094 163.902,1.905 163.902 C 1.716 163.902,1.561 164.833,1.561 165.971 C 1.561 167.108,1.405 168.206,1.214 168.410 C -0.343 170.072,-0.343 220.172,1.214 221.834 C 1.405 222.038,1.561 223.136,1.561 224.273 C 1.561 225.411,1.716 226.341,1.905 226.341 C 2.094 226.341,2.373 227.834,2.525 229.659 C 2.677 231.483,2.941 232.976,3.111 232.976 C 3.281 232.976,3.544 234.293,3.695 235.902 C 3.846 237.512,4.089 238.829,4.237 238.829 C 4.487 238.829,5.282 242.084,5.739 244.976 C 5.849 245.673,6.075 246.244,6.242 246.244 C 6.408 246.244,6.665 247.210,6.812 248.390 C 6.960 249.571,7.224 250.537,7.398 250.537 C 7.573 250.537,7.834 251.323,7.978 252.284 C 8.122 253.244,8.406 254.133,8.608 254.258 C 8.810 254.383,8.976 254.826,8.976 255.243 C 8.976 255.659,9.135 256.000,9.329 256.000 C 9.524 256.000,9.804 256.878,9.951 257.951 C 10.099 259.024,10.379 259.902,10.573 259.902 C 10.768 259.902,10.928 260.298,10.928 260.780 C 10.929 261.263,11.368 262.522,11.904 263.578 C 12.440 264.634,12.879 265.688,12.880 265.920 C 12.882 266.152,13.129 266.813,13.429 267.388 C 13.729 267.964,14.094 268.974,14.238 269.632 C 14.383 270.291,14.663 270.829,14.860 270.829 C 15.058 270.829,15.220 271.147,15.220 271.535 C 15.220 271.923,15.477 272.582,15.792 272.999 C 16.108 273.415,16.371 274.063,16.378 274.439 C 16.385 274.815,16.546 275.122,16.737 275.122 C 16.928 275.122,17.199 275.737,17.340 276.488 C 17.481 277.239,17.750 277.854,17.938 277.854 C 18.126 277.854,18.395 278.380,18.537 279.024 C 18.678 279.668,18.955 280.195,19.153 280.195 C 19.351 280.195,19.512 280.459,19.512 280.780 C 19.512 281.102,19.668 281.366,19.859 281.366 C 20.050 281.366,20.319 281.968,20.457 282.703 C 20.595 283.439,20.834 284.097,20.988 284.167 C 21.142 284.236,21.619 284.995,22.048 285.854 C 22.477 286.712,23.047 287.647,23.316 287.930 C 23.585 288.214,23.805 288.697,23.805 289.003 C 23.805 289.310,23.967 289.561,24.164 289.561 C 24.362 289.561,24.639 290.088,24.780 290.732 C 24.922 291.376,25.196 291.902,25.389 291.902 C 25.583 291.902,25.851 292.341,25.986 292.878 C 26.121 293.415,26.388 293.854,26.579 293.854 C 26.770 293.854,26.927 294.117,26.927 294.439 C 26.927 294.761,27.091 295.024,27.291 295.024 C 27.491 295.024,27.778 295.411,27.928 295.884 C 28.078 296.357,28.441 296.984,28.734 297.278 C 29.028 297.572,29.268 298.063,29.268 298.369 C 29.268 298.676,29.444 298.927,29.659 298.927 C 29.873 298.927,30.049 299.176,30.049 299.480 C 30.049 299.784,30.180 300.091,30.341 300.163 C 30.786 300.360,32.390 302.742,32.390 303.204 C 32.390 303.427,32.528 303.610,32.696 303.610 C 32.865 303.610,33.334 304.180,33.740 304.878 C 34.146 305.576,34.579 306.234,34.702 306.341 C 34.826 306.449,35.536 307.415,36.281 308.488 C 37.025 309.561,38.035 310.876,38.525 311.411 C 39.014 311.945,39.415 312.508,39.415 312.661 C 39.415 312.815,39.854 313.379,40.390 313.916 C 40.927 314.452,41.366 315.039,41.366 315.220 C 41.366 315.401,41.885 315.980,42.520 316.506 C 43.155 317.033,43.682 317.639,43.691 317.854 C 43.700 318.070,44.454 319.053,45.366 320.040 C 46.278 321.027,47.727 322.686,48.585 323.726 C 49.444 324.767,50.655 326.066,51.278 326.614 C 51.900 327.162,52.602 327.835,52.839 328.110 C 53.075 328.385,53.772 329.111,54.388 329.722 C 55.004 330.333,55.683 331.009,55.898 331.224 C 56.113 331.439,56.838 332.164,57.510 332.836 C 58.940 334.266,59.118 334.446,60.745 336.107 C 61.423 336.799,62.888 338.156,64.002 339.122 C 65.116 340.088,66.581 341.420,67.258 342.083 C 67.934 342.746,69.015 343.623,69.659 344.032 C 70.302 344.442,71.149 345.173,71.541 345.657 C 71.932 346.141,72.428 346.537,72.644 346.537 C 72.859 346.537,73.562 347.063,74.206 347.707 C 74.850 348.351,75.585 348.878,75.840 348.878 C 76.094 348.878,76.632 349.317,77.035 349.854 C 77.438 350.390,77.931 350.829,78.131 350.829 C 78.331 350.829,78.740 351.049,79.039 351.317 C 80.310 352.457,80.768 352.780,81.113 352.780 C 81.313 352.780,81.579 353.044,81.702 353.366 C 81.826 353.688,82.196 353.951,82.524 353.951 C 82.853 353.951,83.122 354.123,83.122 354.334 C 83.122 354.545,83.561 354.827,84.098 354.962 C 84.634 355.096,85.073 355.323,85.073 355.466 C 85.073 355.608,85.688 356.056,86.439 356.461 C 87.190 356.865,87.805 357.344,87.805 357.525 C 87.805 357.706,88.074 357.854,88.402 357.854 C 88.731 357.854,89.095 358.101,89.211 358.404 C 89.327 358.706,89.849 359.061,90.370 359.192 C 90.891 359.323,91.317 359.602,91.317 359.812 C 91.317 360.023,91.580 360.195,91.902 360.195 C 92.224 360.195,92.488 360.371,92.488 360.585 C 92.488 360.800,92.739 360.976,93.045 360.976 C 93.352 360.976,93.843 361.195,94.136 361.463 C 94.636 361.920,95.256 362.286,98.439 364.000 C 99.136 364.376,99.795 364.791,99.902 364.923 C 100.010 365.055,100.493 365.286,100.976 365.437 C 101.459 365.588,101.854 365.861,101.854 366.044 C 101.854 366.227,102.380 366.493,103.024 366.634 C 103.668 366.776,104.195 367.053,104.195 367.251 C 104.195 367.448,104.546 367.610,104.976 367.610 C 105.405 367.610,105.756 367.771,105.756 367.969 C 105.756 368.167,106.283 368.444,106.927 368.585 C 107.571 368.727,108.098 368.990,108.098 369.171 C 108.098 369.351,108.624 369.615,109.268 369.756 C 109.912 369.898,110.439 370.133,110.439 370.280 C 110.439 370.571,113.324 371.902,113.954 371.902 C 114.167 371.902,114.341 372.059,114.341 372.249 C 114.341 372.440,115.000 372.720,115.804 372.870 C 116.608 373.021,117.355 373.260,117.463 373.402 C 117.889 373.961,120.167 375.024,120.938 375.024 C 121.388 375.024,121.756 375.198,121.756 375.410 C 121.756 375.622,122.459 375.908,123.317 376.045 C 124.176 376.183,124.878 376.446,124.878 376.631 C 124.878 376.815,125.580 377.079,126.439 377.216 C 127.298 377.353,128.000 377.619,128.000 377.806 C 128.000 377.993,128.243 378.146,128.541 378.146 C 128.838 378.146,129.585 378.409,130.199 378.729 C 130.814 379.050,131.614 379.313,131.977 379.315 C 132.340 379.316,132.739 379.483,132.864 379.685 C 132.989 379.887,133.878 380.170,134.838 380.314 C 135.799 380.459,136.585 380.712,136.585 380.878 C 136.585 381.044,137.068 381.276,137.659 381.393 C 139.991 381.857,142.644 382.606,142.829 382.852 C 142.937 382.994,143.884 383.238,144.935 383.393 C 145.986 383.548,147.128 383.814,147.472 383.985 C 148.722 384.604,150.878 385.151,153.073 385.407 C 154.307 385.551,155.317 385.805,155.317 385.972 C 155.317 386.138,156.634 386.398,158.244 386.549 C 159.854 386.700,161.171 386.965,161.171 387.139 C 161.171 387.312,162.751 387.577,164.683 387.728 C 166.615 387.879,168.195 388.140,168.195 388.308 C 168.195 388.476,169.205 388.707,170.439 388.821 C 171.673 388.936,174.263 389.244,176.195 389.507 C 181.066 390.171,218.934 390.171,223.805 389.507 C 225.737 389.244,228.327 388.936,229.561 388.821 C 230.795 388.707,231.805 388.476,231.805 388.308 C 231.805 388.140,233.385 387.879,235.317 387.728 C 237.249 387.577,238.829 387.314,238.829 387.143 C 238.829 386.972,240.102 386.707,241.659 386.554 C 243.215 386.400,244.663 386.137,244.878 385.967 C 245.093 385.798,246.146 385.538,247.220 385.390 C 249.226 385.113,251.425 384.531,252.528 383.985 C 252.872 383.814,254.014 383.548,255.065 383.393 C 256.116 383.238,257.063 382.994,257.171 382.852 C 257.356 382.606,260.009 381.857,262.341 381.393 C 262.932 381.276,263.415 381.044,263.415 380.878 C 263.415 380.712,264.201 380.459,265.162 380.314 C 266.122 380.170,267.011 379.887,267.136 379.685 C 267.261 379.483,267.660 379.316,268.023 379.315 C 268.386 379.313,269.186 379.050,269.801 378.729 C 270.415 378.409,271.162 378.146,271.459 378.146 C 271.757 378.146,272.000 377.993,272.000 377.806 C 272.000 377.619,272.702 377.353,273.561 377.216 C 274.420 377.079,275.122 376.815,275.122 376.631 C 275.122 376.446,275.824 376.183,276.683 376.045 C 277.541 375.908,278.244 375.622,278.244 375.410 C 278.244 375.198,278.612 375.024,279.062 375.024 C 279.812 375.024,282.075 373.981,282.537 373.422 C 282.644 373.292,283.390 373.065,284.195 372.917 C 285.000 372.769,285.659 372.480,285.659 372.275 C 285.659 372.070,285.833 371.902,286.046 371.902 C 286.676 371.902,289.561 370.571,289.561 370.280 C 289.561 370.133,290.088 369.898,290.732 369.756 C 291.376 369.615,291.902 369.351,291.902 369.171 C 291.902 368.990,292.429 368.727,293.073 368.585 C 293.717 368.444,294.244 368.167,294.244 367.969 C 294.244 367.771,294.595 367.610,295.024 367.610 C 295.454 367.610,295.805 367.448,295.805 367.251 C 295.805 367.053,296.332 366.776,296.976 366.634 C 297.620 366.493,298.146 366.215,298.146 366.018 C 298.146 365.820,298.397 365.659,298.704 365.659 C 299.010 365.659,299.501 365.439,299.795 365.171 C 300.294 364.714,300.915 364.348,304.097 362.634 C 304.795 362.259,305.453 361.843,305.561 361.711 C 305.668 361.579,306.151 361.348,306.634 361.197 C 307.117 361.046,307.512 360.759,307.512 360.559 C 307.512 360.359,307.776 360.195,308.098 360.195 C 308.420 360.195,308.683 360.031,308.683 359.831 C 308.683 359.631,309.070 359.344,309.543 359.194 C 310.016 359.044,310.624 358.725,310.895 358.485 C 312.172 357.354,312.582 357.073,312.959 357.073 C 313.183 357.073,313.366 356.938,313.366 356.772 C 313.366 356.607,314.156 356.040,315.122 355.512 C 316.088 354.985,316.878 354.418,316.878 354.252 C 316.878 354.087,317.147 353.951,317.476 353.951 C 317.804 353.951,318.174 353.688,318.298 353.366 C 318.421 353.044,318.692 352.780,318.899 352.780 C 319.106 352.780,319.520 352.561,319.819 352.293 C 321.084 351.159,321.548 350.829,321.880 350.829 C 322.074 350.829,322.562 350.390,322.965 349.854 C 323.368 349.317,323.881 348.878,324.106 348.878 C 324.542 348.878,326.270 347.537,328.507 345.463 C 329.260 344.766,330.008 344.195,330.170 344.195 C 330.332 344.195,331.264 343.449,332.240 342.537 C 333.216 341.624,334.916 340.088,336.018 339.122 C 337.121 338.156,338.577 336.799,339.255 336.107 C 340.823 334.507,341.116 334.210,342.541 332.785 C 343.185 332.141,343.887 331.439,344.102 331.224 C 344.317 331.009,345.019 330.307,345.663 329.663 C 346.307 329.019,347.009 328.317,347.224 328.102 C 347.439 327.887,348.120 327.234,348.739 326.650 C 349.357 326.067,350.563 324.744,351.419 323.712 C 352.275 322.679,353.722 321.027,354.634 320.040 C 355.546 319.053,356.293 318.120,356.293 317.966 C 356.293 317.811,356.822 317.109,357.469 316.404 C 359.403 314.295,359.967 313.612,360.656 312.543 C 361.017 311.982,361.550 311.280,361.841 310.982 C 362.131 310.683,362.978 309.565,363.721 308.497 C 364.465 307.429,365.378 306.213,365.752 305.794 C 366.125 305.376,366.532 304.713,366.656 304.321 C 366.780 303.930,367.046 303.610,367.246 303.610 C 367.446 303.610,367.610 303.427,367.610 303.204 C 367.610 302.742,369.214 300.360,369.659 300.163 C 369.820 300.091,369.951 299.784,369.951 299.480 C 369.951 299.176,370.123 298.927,370.334 298.927 C 370.545 298.927,370.827 298.488,370.962 297.951 C 371.096 297.415,371.344 296.976,371.512 296.976 C 371.680 296.976,371.928 296.537,372.063 296.000 C 372.197 295.463,372.480 295.024,372.690 295.024 C 372.901 295.024,373.073 294.761,373.073 294.439 C 373.073 294.117,373.230 293.854,373.421 293.854 C 373.612 293.854,373.879 293.415,374.014 292.878 C 374.149 292.341,374.417 291.902,374.611 291.902 C 374.804 291.902,375.078 291.376,375.220 290.732 C 375.361 290.088,375.638 289.561,375.836 289.561 C 376.033 289.561,376.195 289.310,376.195 289.003 C 376.195 288.697,376.415 288.214,376.684 287.930 C 376.953 287.647,377.523 286.712,377.952 285.854 C 378.381 284.995,378.858 284.236,379.012 284.167 C 379.166 284.097,379.405 283.439,379.543 282.703 C 379.681 281.968,379.950 281.366,380.141 281.366 C 380.332 281.366,380.488 281.102,380.488 280.780 C 380.488 280.459,380.649 280.195,380.847 280.195 C 381.045 280.195,381.322 279.668,381.463 279.024 C 381.605 278.380,381.868 277.854,382.049 277.854 C 382.229 277.854,382.501 277.283,382.652 276.585 C 382.804 275.888,383.037 275.229,383.171 275.122 C 383.576 274.797,384.780 272.014,384.780 271.401 C 384.780 271.087,384.942 270.829,385.140 270.829 C 385.337 270.829,385.617 270.291,385.762 269.632 C 385.906 268.974,386.271 267.964,386.571 267.388 C 386.871 266.813,387.118 266.152,387.120 265.920 C 387.121 265.688,387.560 264.634,388.096 263.578 C 388.632 262.522,389.071 261.263,389.072 260.780 C 389.072 260.298,389.232 259.902,389.427 259.902 C 389.621 259.902,389.901 259.024,390.049 257.951 C 390.196 256.878,390.476 256.000,390.671 256.000 C 390.865 256.000,391.024 255.659,391.024 255.243 C 391.024 254.826,391.190 254.383,391.392 254.258 C 391.594 254.133,391.878 253.244,392.022 252.284 C 392.166 251.323,392.419 250.537,392.585 250.537 C 392.750 250.537,393.006 249.571,393.154 248.390 C 393.301 247.210,393.585 246.244,393.784 246.244 C 393.983 246.244,394.146 245.727,394.146 245.096 C 394.146 244.465,394.305 243.851,394.498 243.731 C 394.692 243.611,394.972 242.460,395.122 241.171 C 395.271 239.883,395.537 238.829,395.712 238.829 C 395.888 238.829,396.154 237.512,396.305 235.902 C 396.456 234.293,396.719 232.976,396.889 232.976 C 397.059 232.976,397.323 231.483,397.475 229.659 C 397.627 227.834,397.906 226.341,398.095 226.341 C 398.284 226.341,398.439 225.411,398.439 224.273 C 398.439 223.136,398.595 222.038,398.786 221.834 C 400.343 220.172,400.343 170.072,398.786 168.410 C 398.595 168.206,398.439 167.108,398.439 165.971 C 398.439 164.833,398.284 163.902,398.095 163.902 C 397.906 163.902,397.627 162.410,397.475 160.587 C 397.323 158.763,397.056 157.183,396.883 157.076 C 396.709 156.969,396.444 155.651,396.293 154.148 C 396.142 152.645,395.878 151.415,395.706 151.415 C 395.534 151.415,395.271 150.361,395.122 149.072 C 394.972 147.784,394.692 146.632,394.498 146.513 C 394.305 146.393,394.146 145.779,394.146 145.148 C 394.146 144.516,393.991 144.000,393.801 144.000 C 393.611 144.000,393.335 143.034,393.188 141.854 C 393.040 140.673,392.776 139.707,392.602 139.707 C 392.427 139.707,392.166 138.921,392.022 137.960 C 391.878 136.999,391.594 136.111,391.392 135.986 C 391.190 135.861,391.024 135.418,391.024 135.001 C 391.024 134.585,390.865 134.244,390.671 134.244 C 390.476 134.244,390.196 133.366,390.049 132.293 C 389.901 131.220,389.621 130.341,389.427 130.341 C 389.232 130.341,389.072 129.946,389.071 129.463 C 389.069 128.980,388.806 128.082,388.485 127.468 C 388.165 126.853,387.902 126.106,387.902 125.809 C 387.902 125.512,387.746 125.268,387.556 125.268 C 387.365 125.268,387.094 124.654,386.953 123.902 C 386.812 123.151,386.551 122.537,386.374 122.537 C 386.196 122.537,385.939 121.834,385.801 120.976 C 385.664 120.117,385.378 119.415,385.166 119.415 C 384.954 119.415,384.780 119.157,384.780 118.843 C 384.780 118.230,383.576 115.446,383.171 115.122 C 383.037 115.015,382.804 114.356,382.652 113.659 C 382.501 112.961,382.229 112.390,382.049 112.390 C 381.868 112.390,381.605 111.863,381.463 111.220 C 381.322 110.576,381.045 110.049,380.847 110.049 C 380.649 110.049,380.488 109.785,380.488 109.463 C 380.488 109.141,380.332 108.878,380.141 108.878 C 379.950 108.878,379.679 108.263,379.538 107.512 C 379.397 106.761,379.128 106.146,378.940 106.146 C 378.752 106.146,378.483 105.620,378.341 104.976 C 378.200 104.332,377.923 103.805,377.725 103.805 C 377.528 103.805,377.366 103.541,377.366 103.220 C 377.366 102.898,377.194 102.634,376.983 102.634 C 376.772 102.634,376.490 102.195,376.355 101.659 C 376.221 101.122,375.968 100.683,375.794 100.683 C 375.619 100.683,375.361 100.156,375.220 99.512 C 375.078 98.868,374.804 98.341,374.611 98.341 C 374.417 98.341,374.149 97.902,374.014 97.366 C 373.879 96.829,373.612 96.390,373.421 96.390 C 373.230 96.390,373.073 96.127,373.073 95.805 C 373.073 95.483,372.901 95.220,372.690 95.220 C 372.480 95.220,372.197 94.780,372.063 94.244 C 371.928 93.707,371.680 93.268,371.512 93.268 C 371.344 93.268,371.096 92.829,370.962 92.293 C 370.827 91.756,370.545 91.317,370.334 91.317 C 370.123 91.317,369.951 91.054,369.951 90.732 C 369.951 90.410,369.779 90.146,369.568 90.146 C 369.358 90.146,369.079 89.720,368.948 89.199 C 368.817 88.678,368.462 88.157,368.160 88.040 C 367.857 87.924,367.610 87.560,367.610 87.232 C 367.610 86.903,367.474 86.634,367.308 86.634 C 367.142 86.634,366.681 86.030,366.284 85.291 C 365.886 84.553,365.319 83.856,365.024 83.742 C 364.729 83.629,364.488 83.344,364.488 83.108 C 364.488 82.695,362.884 80.377,361.827 79.262 C 361.544 78.964,361.017 78.261,360.656 77.701 C 359.967 76.632,359.403 75.949,357.469 73.840 C 356.822 73.135,356.293 72.432,356.293 72.278 C 356.293 72.124,355.546 71.191,354.634 70.204 C 353.722 69.217,352.275 67.565,351.419 66.532 C 350.563 65.500,349.357 64.177,348.739 63.593 C 348.120 63.010,347.439 62.356,347.224 62.142 C 347.009 61.927,346.307 61.225,345.663 60.581 C 345.019 59.937,344.317 59.235,344.102 59.020 C 343.887 58.805,343.212 58.126,342.600 57.510 C 341.989 56.894,341.263 56.197,340.988 55.961 C 340.713 55.724,340.033 55.022,339.477 54.400 C 338.921 53.777,337.466 52.390,336.243 51.317 C 335.020 50.244,333.220 48.620,332.242 47.707 C 331.265 46.795,330.330 46.049,330.165 46.049 C 330.000 46.049,329.241 45.478,328.478 44.780 C 326.023 42.536,324.525 41.366,324.106 41.366 C 323.881 41.366,323.368 40.927,322.965 40.390 C 322.562 39.854,322.069 39.415,321.869 39.415 C 321.669 39.415,321.260 39.195,320.961 38.927 C 319.690 37.787,319.232 37.463,318.887 37.463 C 318.687 37.463,318.421 37.200,318.298 36.878 C 318.174 36.556,317.804 36.293,317.476 36.293 C 317.147 36.293,316.878 36.157,316.878 35.992 C 316.878 35.826,316.088 35.259,315.122 34.732 C 314.156 34.204,313.366 33.637,313.366 33.472 C 313.366 33.306,313.178 33.171,312.948 33.171 C 312.718 33.171,312.285 32.951,311.986 32.683 C 310.756 31.581,310.339 31.302,309.531 31.046 C 309.065 30.898,308.683 30.613,308.683 30.413 C 308.683 30.213,308.420 30.049,308.098 30.049 C 307.776 30.049,307.512 29.877,307.512 29.666 C 307.512 29.455,307.073 29.173,306.537 29.038 C 306.000 28.904,305.561 28.637,305.561 28.445 C 305.561 28.254,305.310 28.098,305.003 28.098 C 304.697 28.098,304.211 27.878,303.924 27.610 C 303.637 27.341,302.703 26.771,301.848 26.342 C 300.992 25.914,300.061 25.343,299.777 25.074 C 299.493 24.805,299.010 24.585,298.704 24.585 C 298.397 24.585,298.146 24.424,298.146 24.226 C 298.146 24.029,297.620 23.751,296.976 23.610 C 296.332 23.468,295.805 23.191,295.805 22.993 C 295.805 22.796,295.454 22.634,295.024 22.634 C 294.595 22.634,294.244 22.472,294.244 22.275 C 294.244 22.077,293.717 21.800,293.073 21.659 C 292.429 21.517,291.902 21.254,291.902 21.073 C 291.902 20.893,291.376 20.629,290.732 20.488 C 290.088 20.346,289.561 20.110,289.561 19.963 C 289.561 19.673,286.676 18.341,286.046 18.341 C 285.833 18.341,285.659 18.174,285.659 17.969 C 285.659 17.764,285.000 17.475,284.195 17.327 C 283.390 17.179,282.644 16.952,282.536 16.822 C 282.114 16.311,279.700 15.220,278.993 15.220 C 278.581 15.220,278.244 15.046,278.244 14.834 C 278.244 14.622,277.541 14.336,276.683 14.199 C 275.824 14.061,275.122 13.798,275.122 13.613 C 275.122 13.429,274.420 13.165,273.561 13.028 C 272.702 12.891,272.000 12.625,272.000 12.438 C 272.000 12.251,271.757 12.098,271.459 12.098 C 271.162 12.098,270.415 11.835,269.801 11.515 C 269.186 11.194,268.386 10.931,268.023 10.929 C 267.660 10.928,267.261 10.761,267.136 10.559 C 267.011 10.357,266.122 10.074,265.162 9.929 C 264.201 9.785,263.415 9.512,263.415 9.322 C 263.415 9.131,262.986 8.976,262.462 8.976 C 261.938 8.976,261.411 8.816,261.291 8.622 C 261.171 8.427,260.194 8.148,259.122 8.000 C 258.049 7.852,257.171 7.593,257.171 7.423 C 257.171 7.253,256.208 6.994,255.031 6.847 C 253.853 6.700,252.797 6.428,252.683 6.244 C 252.569 6.059,251.510 5.788,250.330 5.640 C 249.150 5.493,248.089 5.217,247.972 5.028 C 247.855 4.838,247.165 4.683,246.439 4.683 C 245.713 4.683,245.020 4.522,244.898 4.326 C 244.777 4.129,243.362 3.845,241.753 3.695 C 240.145 3.544,238.829 3.279,238.829 3.105 C 238.829 2.932,237.249 2.667,235.317 2.516 C 233.385 2.364,231.805 2.103,231.805 1.936 C 231.805 1.768,230.795 1.534,229.561 1.416 C 228.327 1.298,226.000 1.022,224.390 0.802 C 220.422 0.261,186.555 -0.024,179.512 0.424 M220.293 1.749 C 232.315 3.046,245.470 5.476,254.049 7.986 C 255.015 8.269,256.859 8.802,258.146 9.171 C 263.398 10.677,274.359 14.562,278.376 16.341 C 279.269 16.737,280.966 17.473,282.146 17.979 C 318.482 33.529,354.881 65.867,373.263 98.927 C 373.859 100.000,375.129 102.283,376.085 104.000 C 377.825 107.127,382.829 117.216,382.829 117.597 C 382.829 117.835,385.036 122.815,385.578 123.800 C 385.783 124.172,385.951 124.673,385.951 124.911 C 385.951 125.150,386.190 125.899,386.482 126.575 C 387.697 129.392,388.058 130.380,389.638 135.220 C 391.693 141.514,392.635 144.784,393.965 150.244 C 394.305 151.639,394.740 153.395,394.931 154.146 C 395.589 156.728,397.140 165.922,397.663 170.341 C 397.892 172.273,398.159 174.083,398.256 174.364 C 399.499 177.965,399.499 212.279,398.256 215.880 C 398.159 216.160,397.892 217.971,397.663 219.902 C 397.140 224.321,395.589 233.516,394.931 236.098 C 394.740 236.849,394.305 238.605,393.965 240.000 C 392.635 245.460,391.693 248.730,389.638 255.024 C 388.058 259.864,387.697 260.852,386.482 263.669 C 386.190 264.345,385.951 265.094,385.951 265.333 C 385.951 265.571,385.784 266.072,385.580 266.444 C 385.376 266.817,384.918 267.824,384.562 268.683 C 383.480 271.295,382.997 272.336,379.674 279.220 C 377.912 282.868,376.085 286.468,375.614 287.220 C 375.143 287.971,374.176 289.639,373.466 290.927 C 372.757 292.215,371.544 294.234,370.772 295.415 C 370.000 296.595,369.280 297.737,369.171 297.951 C 364.972 306.219,349.066 325.100,336.577 336.642 C 321.761 350.334,301.272 363.945,284.488 371.245 C 283.737 371.572,281.980 372.352,280.585 372.980 C 279.190 373.607,275.327 375.127,272.000 376.357 C 268.673 377.587,265.600 378.744,265.171 378.928 C 264.741 379.112,263.073 379.639,261.463 380.099 C 259.854 380.559,258.098 381.081,257.561 381.257 C 256.648 381.558,253.678 382.392,250.537 383.231 C 248.553 383.761,244.557 384.649,240.976 385.357 C 239.259 385.696,236.976 386.150,235.902 386.366 C 233.560 386.836,229.550 387.431,225.561 387.900 C 223.951 388.089,220.878 388.461,218.732 388.726 C 213.603 389.360,186.547 389.378,181.463 388.751 C 170.548 387.405,165.813 386.753,163.902 386.333 C 162.937 386.121,160.302 385.572,158.049 385.113 C 155.795 384.654,152.985 384.049,151.805 383.768 C 150.624 383.487,148.868 383.069,147.902 382.839 C 146.937 382.609,145.707 382.267,145.171 382.080 C 144.634 381.892,143.141 381.440,141.854 381.074 C 136.623 379.591,124.238 375.194,123.532 374.571 C 123.328 374.391,122.952 374.244,122.697 374.244 C 121.809 374.244,104.269 365.872,101.463 364.109 C 99.890 363.120,93.598 359.415,93.493 359.415 C 92.918 359.415,76.781 348.209,76.098 347.335 C 75.990 347.198,74.842 346.278,73.546 345.291 C 69.811 342.446,64.316 337.556,57.756 331.239 C 53.848 327.475,46.693 319.482,42.032 313.672 C 38.253 308.962,33.005 301.382,27.990 293.391 C 24.722 288.184,19.090 277.142,16.184 270.244 C 15.370 268.312,14.557 266.565,14.376 266.361 C 14.196 266.157,14.049 265.745,14.049 265.444 C 14.049 265.144,13.809 264.345,13.516 263.669 C 12.091 260.383,10.672 256.237,8.619 249.366 C 6.430 242.042,5.702 239.074,3.929 230.244 C -0.226 209.548,-0.226 180.696,3.929 160.000 C 5.702 151.170,6.430 148.202,8.619 140.878 C 10.545 134.432,11.971 130.207,13.295 127.024 C 13.474 126.595,14.225 124.751,14.964 122.927 C 18.389 114.477,24.085 103.075,27.990 96.853 C 41.474 75.366,57.411 57.285,74.146 44.485 C 75.112 43.747,75.990 43.033,76.098 42.901 C 77.008 41.774,92.734 30.997,95.220 29.797 C 95.541 29.641,96.946 28.816,98.341 27.963 C 101.755 25.877,112.887 20.161,116.798 18.487 C 118.535 17.744,120.493 16.893,121.149 16.596 C 125.360 14.689,136.470 10.703,141.854 9.168 C 143.141 8.800,144.985 8.269,145.951 7.987 C 146.917 7.705,148.937 7.194,150.439 6.852 C 151.941 6.510,153.785 6.062,154.537 5.857 C 157.029 5.176,163.712 3.946,171.512 2.734 C 183.890 0.810,207.216 0.339,220.293 1.749 M182.433 84.779 C 167.166 100.153,161.573 105.819,113.759 154.341 C 98.320 170.010,80.994 187.571,75.258 193.366 C 58.549 210.246,46.464 222.617,46.451 222.855 C 46.439 223.075,63.555 240.103,81.559 257.780 C 86.819 262.945,96.917 272.879,104.000 279.856 C 111.083 286.833,118.459 294.059,120.390 295.915 L 123.902 299.288 130.439 292.770 C 134.034 289.186,136.976 286.148,136.976 286.021 C 136.976 285.767,122.650 271.568,113.366 262.620 C 106.561 256.061,89.818 239.637,80.074 229.962 C 75.484 225.404,73.404 223.081,73.612 222.743 C 73.780 222.468,76.911 219.367,80.569 215.850 C 87.419 209.264,115.805 180.851,167.484 128.850 C 184.333 111.897,197.325 99.121,197.643 99.192 C 198.312 99.342,201.946 102.837,221.463 122.110 C 254.390 154.622,263.429 163.538,286.244 186.014 C 299.337 198.912,313.517 212.854,317.756 216.998 C 321.995 221.141,325.463 224.676,325.463 224.853 C 325.463 225.169,310.241 240.672,280.597 270.545 C 272.339 278.867,265.447 285.917,265.283 286.211 C 264.978 286.755,276.544 298.602,277.618 298.846 C 277.895 298.909,289.959 286.974,304.427 272.323 C 318.895 257.672,335.649 240.707,341.659 234.622 C 353.782 222.347,353.494 222.770,351.141 220.694 C 350.218 219.880,343.842 213.661,336.971 206.875 C 330.101 200.089,320.091 190.237,314.727 184.981 C 309.364 179.725,299.002 169.540,291.701 162.347 C 284.400 155.154,273.776 144.713,268.091 139.144 C 262.407 133.576,252.400 123.740,245.854 117.287 C 219.127 90.938,197.800 70.043,197.537 69.950 C 197.384 69.895,190.587 76.568,182.433 84.779 M176.413 136.864 C 152.160 161.327,110.847 202.984,98.978 214.943 L 90.732 223.252 106.762 239.138 C 129.412 261.584,145.120 276.861,145.673 276.981 C 146.092 277.072,160.781 262.256,161.104 261.415 C 161.216 261.125,146.884 246.832,128.409 228.807 C 123.475 223.993,122.816 223.204,123.141 222.502 C 123.345 222.061,130.712 214.443,139.512 205.572 C 148.312 196.702,165.072 179.739,176.757 167.876 C 190.802 153.616,198.227 146.346,198.667 146.422 C 199.258 146.524,215.082 161.940,251.902 198.284 C 258.341 204.640,266.548 212.696,270.140 216.186 C 274.495 220.420,276.574 222.701,276.383 223.038 C 275.923 223.851,270.117 229.830,254.106 245.978 L 239.085 261.127 247.441 269.490 C 252.038 274.090,255.993 277.854,256.232 277.854 C 256.606 277.854,272.110 262.255,300.780 233.035 C 304.912 228.824,308.293 225.187,308.293 224.952 C 308.293 224.717,304.382 220.675,299.603 215.970 C 294.824 211.264,279.326 196.008,265.164 182.066 C 251.002 168.124,233.707 151.069,226.732 144.166 C 206.206 123.854,198.225 116.105,197.708 115.986 C 197.441 115.924,187.858 125.319,176.413 136.864 ", stroke: "none", fill: "#070605", "fill-rule": "evenodd" }),
            React__default['default'].createElement("path", { id: "path1", d: "M187.122 1.575 C 183.688 1.767,179.737 2.101,178.341 2.317 C 176.946 2.533,174.312 2.896,172.488 3.124 C 160.872 4.572,147.139 7.709,136.390 11.368 C 129.448 13.732,123.611 15.917,120.390 17.360 C 119.746 17.648,118.166 18.350,116.878 18.920 C 112.911 20.676,105.726 24.278,102.285 26.235 C 100.484 27.259,98.956 28.098,98.889 28.098 C 98.822 28.098,96.988 29.195,94.812 30.537 C 92.637 31.878,90.565 33.152,90.209 33.368 C 88.999 34.101,83.318 37.985,83.122 38.212 C 83.015 38.337,82.049 39.051,80.976 39.798 C 79.902 40.546,78.761 41.370,78.439 41.630 C 78.117 41.890,76.010 43.558,73.756 45.338 C 52.824 61.867,34.755 83.859,22.352 107.902 C 20.068 112.330,14.439 124.704,14.439 125.297 C 14.439 125.481,14.151 126.297,13.800 127.109 C 13.448 127.921,13.030 128.937,12.871 129.366 C 12.711 129.795,12.308 130.849,11.975 131.707 C 11.642 132.566,11.081 134.234,10.730 135.415 C 10.378 136.595,9.943 137.912,9.762 138.341 C 9.581 138.771,9.258 139.824,9.044 140.683 C 8.831 141.541,8.358 143.298,7.993 144.585 C 6.551 149.683,5.998 151.987,4.855 157.659 C 0.011 181.688,0.010 208.633,4.853 232.585 C 5.841 237.475,6.533 240.479,7.189 242.732 C 7.533 243.912,7.925 245.493,8.059 246.244 C 8.193 246.995,8.434 247.785,8.594 248.000 C 8.755 248.215,9.004 249.005,9.148 249.756 C 9.293 250.507,9.563 251.473,9.749 251.902 C 9.935 252.332,10.441 253.824,10.873 255.220 C 13.639 264.142,21.279 281.426,25.230 287.700 C 25.734 288.500,26.146 289.248,26.146 289.362 C 26.146 290.313,39.601 310.508,41.358 312.195 C 41.470 312.302,42.701 313.795,44.094 315.512 C 57.953 332.593,75.416 347.872,94.267 359.412 C 96.723 360.916,98.824 362.146,98.935 362.146 C 99.047 362.146,99.847 362.594,100.715 363.142 C 102.691 364.389,113.419 369.859,116.293 371.084 C 117.473 371.587,119.141 372.318,120.000 372.708 C 122.235 373.723,126.342 375.366,128.390 376.064 C 129.356 376.393,130.673 376.882,131.317 377.150 C 131.961 377.418,133.454 377.943,134.634 378.315 C 135.815 378.688,137.132 379.140,137.561 379.320 C 137.990 379.500,139.395 379.944,140.683 380.306 C 143.280 381.035,145.737 381.727,148.098 382.394 C 154.290 384.141,164.940 386.199,173.659 387.332 C 191.488 389.650,214.430 389.404,231.220 386.715 C 236.044 385.942,244.930 384.184,246.829 383.627 C 247.473 383.438,248.615 383.167,249.366 383.024 C 250.117 382.882,251.259 382.609,251.902 382.418 C 252.546 382.227,253.951 381.821,255.024 381.517 C 256.098 381.213,258.029 380.664,259.317 380.297 C 262.505 379.389,267.247 377.797,268.742 377.132 C 269.418 376.831,270.242 376.585,270.573 376.585 C 270.903 376.585,271.282 376.410,271.415 376.195 C 271.547 375.980,271.953 375.804,272.316 375.802 C 272.679 375.801,273.479 375.538,274.093 375.217 C 274.708 374.896,275.354 374.634,275.530 374.634 C 275.705 374.634,276.958 374.131,278.314 373.516 C 279.671 372.901,281.746 371.981,282.927 371.470 C 308.859 360.263,336.174 339.578,354.502 317.268 C 356.177 315.229,357.836 313.209,358.189 312.778 C 362.554 307.445,369.804 296.578,374.330 288.585 C 377.009 283.853,383.220 271.343,383.220 270.678 C 383.220 270.576,383.723 269.384,384.339 268.027 C 384.955 266.671,385.934 264.244,386.513 262.634 C 387.093 261.024,387.744 259.275,387.960 258.746 C 388.982 256.239,391.182 248.941,393.375 240.780 C 394.104 238.066,395.598 230.926,396.144 227.545 C 400.171 202.600,399.509 176.264,394.279 153.366 C 393.509 149.993,393.131 148.482,392.471 146.146 C 392.169 145.073,391.603 143.054,391.214 141.659 C 390.397 138.724,388.532 132.901,387.960 131.498 C 387.744 130.969,387.093 129.220,386.513 127.610 C 385.934 126.000,384.955 123.573,384.339 122.217 C 383.723 120.860,383.220 119.668,383.220 119.566 C 383.220 118.266,374.896 102.331,370.401 95.024 C 367.338 90.045,359.794 79.155,358.642 78.049 C 358.530 77.941,357.298 76.449,355.902 74.732 C 352.295 70.292,352.043 69.994,349.663 67.353 C 335.118 51.210,317.878 37.459,298.867 26.836 C 294.805 24.565,286.625 20.446,283.317 19.004 C 282.566 18.677,280.898 17.945,279.610 17.377 C 275.827 15.711,274.118 15.039,269.659 13.463 C 268.049 12.895,266.117 12.196,265.366 11.911 C 263.490 11.199,258.943 9.774,256.585 9.159 C 255.512 8.879,252.878 8.181,250.732 7.609 C 245.291 6.157,242.677 5.607,232.976 3.876 C 221.376 1.807,201.139 0.791,187.122 1.575 M215.117 86.244 C 224.617 95.580,238.800 109.540,246.634 117.265 C 254.468 124.991,264.654 135.009,269.268 139.529 C 273.883 144.048,283.893 153.883,291.512 161.383 C 299.132 168.884,309.580 179.154,314.732 184.206 C 319.883 189.257,329.278 198.508,335.610 204.762 C 341.941 211.016,348.588 217.527,350.381 219.231 C 352.335 221.088,353.585 222.574,353.503 222.942 C 353.427 223.279,343.010 234.060,330.354 246.900 C 291.129 286.691,278.077 299.733,277.591 299.621 C 276.974 299.478,264.161 286.839,264.292 286.503 C 264.423 286.165,256.547 278.476,255.906 278.317 C 255.076 278.111,238.952 262.091,238.889 261.409 C 238.819 260.661,238.462 261.039,256.359 242.913 C 263.996 235.178,271.561 227.484,273.171 225.815 L 276.098 222.780 270.049 216.886 C 260.926 207.996,222.532 170.237,210.246 158.071 C 204.291 152.175,199.179 147.216,198.885 147.051 C 198.419 146.791,172.581 172.543,153.171 192.613 C 151.024 194.832,143.517 202.427,136.488 209.490 C 129.459 216.553,123.707 222.585,123.707 222.894 C 123.707 223.202,125.859 225.556,128.488 228.125 C 148.993 248.158,161.998 261.123,161.887 261.421 C 161.773 261.729,154.656 268.939,142.023 281.543 C 139.970 283.592,138.072 285.268,137.805 285.268 C 137.538 285.268,137.436 285.457,137.579 285.688 C 137.780 286.012,126.564 297.940,124.683 299.403 C 123.757 300.123,123.687 300.060,104.000 280.607 C 93.977 270.703,50.022 227.460,46.337 223.878 C 45.937 223.489,45.665 223.010,45.732 222.813 C 45.864 222.425,72.360 195.436,97.354 170.230 C 105.933 161.578,113.061 154.324,113.194 154.109 C 113.327 153.894,119.830 147.272,127.645 139.393 C 135.460 131.515,148.253 118.572,156.075 110.632 C 183.809 82.479,197.226 69.059,197.533 69.163 C 197.704 69.221,205.617 76.907,215.117 86.244 M184.372 128.098 L 182.829 129.756 184.488 128.213 C 186.030 126.779,186.326 126.439,186.030 126.439 C 185.967 126.439,185.220 127.185,184.372 128.098 M226.732 128.122 C 226.732 128.189,227.302 128.760,228.000 129.390 L 229.268 130.537 228.122 129.268 C 227.054 128.086,226.732 127.821,226.732 128.122 M210.487 202.852 C 216.739 209.035,223.747 215.920,226.062 218.152 C 228.376 220.384,230.220 222.412,230.159 222.657 C 229.964 223.445,201.993 251.707,201.408 251.707 C 201.099 251.707,196.968 247.874,192.228 243.188 C 187.488 238.502,180.487 231.618,176.669 227.891 C 172.852 224.163,169.779 220.910,169.840 220.661 C 170.028 219.899,198.013 191.619,198.585 191.614 C 198.880 191.612,204.236 196.669,210.487 202.852 ", stroke: "none", fill: "#f3931b", "fill-rule": "evenodd" }),
            React__default['default'].createElement("path", { id: "path2", d: "M184.776 112.098 C 140.573 156.771,94.034 203.453,84.965 212.217 C 79.122 217.863,74.291 222.705,74.229 222.976 C 74.070 223.672,136.646 285.000,137.704 285.185 C 138.232 285.277,144.685 278.884,145.082 277.875 C 145.141 277.726,138.558 271.119,130.453 263.192 C 122.349 255.266,109.920 243.039,102.835 236.022 L 89.951 223.264 102.282 210.852 C 109.065 204.025,127.530 185.444,143.316 169.561 C 159.102 153.678,177.686 134.932,184.614 127.902 C 191.541 120.873,197.394 115.122,197.620 115.122 C 197.846 115.122,202.952 120.003,208.967 125.968 C 214.981 131.934,231.311 148.046,245.255 161.773 C 259.200 175.500,276.321 192.366,283.304 199.253 C 290.287 206.139,298.941 214.639,302.537 218.140 C 306.132 221.641,309.073 224.694,309.073 224.924 C 309.073 225.154,305.427 229.036,300.971 233.549 C 283.994 250.745,261.556 273.527,259.131 276.030 L 256.604 278.638 260.294 282.343 C 262.324 284.381,264.157 286.049,264.368 286.049 C 264.579 286.049,267.020 283.722,269.793 280.878 C 272.565 278.034,286.006 264.406,299.661 250.593 C 313.316 236.779,324.537 225.274,324.597 225.024 C 324.656 224.775,320.881 220.804,316.206 216.200 C 311.532 211.597,301.473 201.671,293.854 194.144 C 286.234 186.616,268.761 169.406,255.024 155.898 C 241.288 142.391,223.727 125.076,216.000 117.421 C 201.955 103.506,197.848 99.545,197.444 99.523 C 197.325 99.517,191.625 105.176,184.776 112.098 ", stroke: "none", fill: "#f8f8f8", "fill-rule": "evenodd" }),
            React__default['default'].createElement("path", { id: "path3", d: "M184.000 205.914 C 176.273 213.777,169.901 220.413,169.840 220.661 C 169.779 220.910,172.852 224.163,176.669 227.891 C 180.487 231.618,187.488 238.502,192.228 243.188 C 196.968 247.874,201.099 251.707,201.408 251.707 C 201.993 251.707,229.964 223.445,230.159 222.657 C 230.220 222.412,228.376 220.384,226.062 218.152 C 223.747 215.920,216.739 209.035,210.487 202.852 C 204.236 196.669,198.880 191.612,198.585 191.614 C 198.290 191.617,191.727 198.052,184.000 205.914 ", stroke: "none", fill: "#fb0604", "fill-rule": "evenodd" }),
            React__default['default'].createElement("path", { id: "path4", d: "M186.605 1.164 C 183.316 1.343,180.509 1.604,180.368 1.746 C 180.227 1.887,183.006 1.859,186.543 1.684 C 194.294 1.301,204.729 1.275,213.463 1.619 C 217.053 1.761,219.039 1.734,217.951 1.559 C 214.933 1.074,193.291 0.801,186.605 1.164 M173.915 2.364 C 170.058 2.812,170.172 3.203,174.065 2.881 C 177.749 2.576,180.378 2.005,177.951 2.036 C 177.200 2.046,175.384 2.193,173.915 2.364 M221.659 2.295 C 222.195 2.467,224.127 2.712,225.951 2.840 C 227.776 2.968,228.827 2.934,228.287 2.765 C 227.748 2.597,225.816 2.351,223.995 2.220 C 222.165 2.089,221.120 2.122,221.659 2.295 M165.268 3.668 C 163.980 3.934,161.171 4.476,159.024 4.871 C 155.318 5.554,153.165 6.204,154.512 6.232 C 154.820 6.239,156.137 5.995,157.438 5.690 C 158.740 5.385,161.561 4.844,163.707 4.487 C 165.854 4.130,168.224 3.695,168.976 3.520 L 170.341 3.203 168.976 3.193 C 168.224 3.188,166.556 3.402,165.268 3.668 M231.220 3.525 C 231.863 3.703,234.146 4.138,236.293 4.492 C 238.439 4.846,241.260 5.385,242.562 5.690 C 244.894 6.236,246.539 6.408,246.202 6.072 C 246.039 5.909,242.300 5.129,235.016 3.738 C 231.536 3.074,229.090 2.937,231.220 3.525 M149.659 7.015 C 148.156 7.405,145.961 7.996,144.780 8.329 C 143.600 8.661,141.932 9.131,141.073 9.373 C 138.217 10.179,131.371 12.546,127.024 14.231 C 124.663 15.147,122.399 16.011,121.993 16.152 C 121.587 16.293,121.350 16.504,121.467 16.622 C 121.584 16.739,122.970 16.313,124.547 15.675 C 132.320 12.531,140.592 9.843,149.420 7.590 C 151.436 7.076,153.177 6.562,153.290 6.449 C 153.640 6.100,152.504 6.277,149.659 7.015 M246.710 6.449 C 246.823 6.562,248.564 7.076,250.580 7.591 C 252.595 8.105,254.857 8.715,255.607 8.946 C 257.048 9.390,258.218 9.502,257.880 9.165 C 257.770 9.054,256.731 8.711,255.571 8.403 C 254.412 8.095,252.146 7.487,250.537 7.052 C 247.617 6.264,246.320 6.060,246.710 6.449 M258.341 9.512 C 258.341 9.592,259.615 10.047,261.171 10.522 C 262.727 10.997,264.615 11.621,265.366 11.908 C 266.117 12.195,268.049 12.895,269.659 13.463 C 272.941 14.623,275.087 15.446,277.007 16.281 C 277.722 16.593,278.405 16.749,278.525 16.630 C 278.760 16.394,278.736 16.384,271.805 13.779 C 264.005 10.848,258.341 9.053,258.341 9.512 M119.220 17.386 C 118.576 17.691,116.661 18.560,114.964 19.317 C 113.268 20.074,111.983 20.796,112.108 20.921 C 112.234 21.047,112.831 20.878,113.436 20.545 C 115.055 19.657,119.805 17.561,120.199 17.561 C 120.386 17.561,120.648 17.385,120.780 17.171 C 121.102 16.650,120.635 16.714,119.220 17.386 M279.024 16.957 C 279.024 17.119,281.014 18.054,283.874 19.235 C 284.503 19.495,287.041 20.711,289.514 21.938 C 291.987 23.165,294.085 24.093,294.177 24.002 C 294.432 23.747,280.008 16.780,279.227 16.780 C 279.115 16.780,279.024 16.860,279.024 16.957 M108.351 22.484 C 106.880 23.238,105.759 23.938,105.859 24.038 C 106.021 24.199,111.086 21.727,111.555 21.258 C 112.063 20.750,110.752 21.251,108.351 22.484 M101.073 26.398 C 99.034 27.593,96.697 28.946,95.881 29.407 C 93.535 30.729,93.331 30.857,88.390 34.113 C 84.082 36.952,76.558 42.331,76.098 42.901 C 75.990 43.033,75.112 43.747,74.146 44.485 C 57.411 57.285,41.474 75.366,27.990 96.853 C 24.085 103.075,18.389 114.477,14.964 122.927 C 14.225 124.751,13.464 126.595,13.273 127.024 C 12.713 128.288,12.365 129.781,12.707 129.456 C 13.005 129.173,13.813 127.193,14.336 125.463 C 14.820 123.863,20.215 112.044,22.352 107.902 C 34.755 83.859,52.824 61.867,73.756 45.338 C 76.010 43.558,78.117 41.890,78.439 41.630 C 78.761 41.370,79.902 40.546,80.976 39.798 C 82.049 39.051,83.015 38.337,83.122 38.212 C 83.318 37.985,88.992 34.106,90.208 33.368 C 90.564 33.152,92.320 32.072,94.110 30.967 C 97.368 28.958,98.369 28.378,102.927 25.861 C 105.215 24.597,105.767 24.173,105.073 24.211 C 104.912 24.220,103.112 25.204,101.073 26.398 M294.634 24.359 C 294.634 24.449,296.171 25.357,298.049 26.377 C 313.989 35.036,329.302 46.600,342.639 60.051 C 347.142 64.593,350.647 68.334,352.585 70.670 C 353.015 71.187,354.507 73.015,355.902 74.732 C 357.298 76.449,358.530 77.941,358.642 78.049 C 359.794 79.155,367.338 90.045,370.401 95.024 C 374.851 102.257,383.220 118.265,383.220 119.544 C 383.220 120.033,384.877 123.351,385.040 123.188 C 385.146 123.081,384.693 121.825,384.031 120.397 C 383.370 118.968,382.829 117.708,382.829 117.597 C 382.829 117.216,377.825 107.127,376.085 104.000 C 375.129 102.283,373.859 100.000,373.263 98.927 C 358.559 72.482,330.662 44.667,302.626 28.498 C 295.025 24.115,294.634 23.912,294.634 24.359 M183.759 82.626 C 176.355 90.089,163.897 102.692,156.075 110.632 C 148.253 118.572,135.460 131.515,127.645 139.393 C 119.830 147.272,113.327 153.894,113.194 154.109 C 113.061 154.324,105.933 161.578,97.354 170.230 C 72.360 195.436,45.864 222.425,45.732 222.813 C 45.665 223.010,45.937 223.489,46.337 223.878 C 50.022 227.460,93.977 270.703,104.000 280.607 C 119.362 295.786,123.213 299.476,123.845 299.622 C 124.287 299.725,136.773 287.485,137.436 286.299 C 137.646 285.925,135.840 283.918,131.404 279.600 C 127.922 276.209,121.210 269.642,116.488 265.006 C 111.766 260.371,100.299 249.134,91.007 240.036 C 81.714 230.938,74.163 223.253,74.226 222.959 C 74.290 222.664,78.846 218.081,84.352 212.773 C 93.747 203.716,134.773 162.584,178.094 118.790 C 188.583 108.187,197.328 99.512,197.528 99.512 C 197.729 99.512,198.479 100.083,199.196 100.780 C 200.855 102.394,245.224 146.139,263.220 163.902 C 270.732 171.318,283.024 183.445,290.537 190.852 C 298.049 198.259,308.810 208.875,314.451 214.444 C 320.091 220.012,324.657 224.787,324.597 225.055 C 324.537 225.323,319.486 230.596,313.373 236.771 C 302.757 247.495,280.449 270.110,269.348 281.402 L 264.134 286.706 270.628 293.109 C 274.200 296.631,277.333 299.561,277.591 299.621 C 278.077 299.733,291.129 286.691,330.354 246.900 C 343.010 234.060,353.427 223.279,353.503 222.942 C 353.585 222.574,352.335 221.088,350.381 219.231 C 348.588 217.527,341.941 211.016,335.610 204.762 C 329.278 198.508,319.883 189.257,314.732 184.206 C 309.580 179.154,299.132 168.884,291.512 161.383 C 283.893 153.883,273.883 144.048,269.268 139.529 C 264.654 135.009,254.468 124.991,246.634 117.265 C 216.767 87.813,197.833 69.264,197.533 69.163 C 197.362 69.105,191.164 75.164,183.759 82.626 M215.884 87.801 C 225.821 97.564,239.307 110.833,245.854 117.287 C 252.400 123.740,262.407 133.576,268.091 139.144 C 273.776 144.713,284.400 155.154,291.701 162.347 C 299.002 169.540,309.364 179.725,314.727 184.981 C 320.091 190.237,330.101 200.089,336.971 206.875 C 343.842 213.661,350.218 219.880,351.141 220.694 C 353.494 222.770,353.782 222.347,341.659 234.622 C 335.649 240.707,318.895 257.672,304.427 272.323 C 289.959 286.974,277.895 298.909,277.618 298.846 C 276.544 298.602,264.978 286.755,265.283 286.211 C 265.447 285.917,272.339 278.867,280.597 270.545 C 310.241 240.672,325.463 225.169,325.463 224.853 C 325.463 224.676,321.995 221.141,317.756 216.998 C 313.517 212.854,299.337 198.912,286.244 186.014 C 263.429 163.538,254.390 154.622,221.463 122.110 C 201.946 102.837,198.312 99.342,197.643 99.192 C 197.325 99.121,184.333 111.897,167.484 128.850 C 115.805 180.851,87.419 209.264,80.569 215.850 C 76.911 219.367,73.780 222.468,73.612 222.743 C 73.404 223.081,75.484 225.404,80.074 229.962 C 89.818 239.637,106.561 256.061,113.366 262.620 C 122.650 271.568,136.976 285.767,136.976 286.021 C 136.976 286.148,134.034 289.186,130.439 292.770 L 123.902 299.288 120.390 295.915 C 118.459 294.059,111.083 286.833,104.000 279.856 C 96.917 272.879,86.819 262.945,81.559 257.780 C 63.555 240.103,46.439 223.075,46.451 222.855 C 46.464 222.617,58.549 210.246,75.258 193.366 C 80.994 187.571,98.320 170.010,113.759 154.341 C 161.573 105.819,167.166 100.153,182.433 84.779 C 190.587 76.568,197.384 69.895,197.537 69.950 C 197.690 70.004,205.946 78.037,215.884 87.801 M191.398 121.066 C 185.082 127.498,123.975 189.099,102.899 210.281 L 89.951 223.293 101.463 234.628 C 132.176 264.868,145.273 277.671,145.625 277.799 C 145.983 277.929,161.596 262.204,161.887 261.421 C 161.998 261.123,148.993 248.158,128.488 228.125 C 125.859 225.556,123.707 223.202,123.707 222.894 C 123.707 222.585,129.459 216.553,136.488 209.490 C 143.517 202.427,151.024 194.832,153.171 192.613 C 172.581 172.543,198.419 146.791,198.885 147.051 C 199.179 147.216,204.291 152.175,210.246 158.071 C 222.532 170.237,260.926 207.996,270.049 216.886 L 276.098 222.780 273.171 225.815 C 271.561 227.484,263.996 235.178,256.359 242.913 C 238.986 260.508,238.829 260.672,238.829 261.236 C 238.829 261.709,254.726 277.742,255.781 278.332 C 256.353 278.652,258.019 277.002,298.732 235.792 C 304.312 230.144,308.929 225.299,308.991 225.027 C 309.053 224.754,306.993 222.509,304.415 220.037 C 301.836 217.566,288.439 204.410,274.644 190.803 C 260.848 177.196,243.327 159.913,235.707 152.397 C 228.088 144.881,216.488 133.420,209.931 126.927 C 203.373 120.434,197.834 115.122,197.621 115.122 C 197.409 115.122,194.608 117.797,191.398 121.066 M206.121 123.856 C 210.481 128.124,219.756 137.263,226.732 144.166 C 233.707 151.069,251.002 168.124,265.164 182.066 C 279.326 196.008,294.824 211.264,299.603 215.970 C 304.382 220.675,308.293 224.717,308.293 224.952 C 308.293 225.187,304.912 228.824,300.780 233.035 C 272.110 262.255,256.606 277.854,256.232 277.854 C 255.993 277.854,252.038 274.090,247.441 269.490 L 239.085 261.127 254.106 245.978 C 270.117 229.830,275.923 223.851,276.383 223.038 C 276.574 222.701,274.495 220.420,270.140 216.186 C 266.548 212.696,258.341 204.640,251.902 198.284 C 215.082 161.940,199.258 146.524,198.667 146.422 C 198.227 146.346,190.802 153.616,176.757 167.876 C 165.072 179.739,148.312 196.702,139.512 205.572 C 130.712 214.443,123.345 222.061,123.141 222.502 C 122.816 223.204,123.475 223.993,128.409 228.807 C 146.884 246.832,161.216 261.125,161.104 261.415 C 160.781 262.256,146.092 277.072,145.673 276.981 C 145.120 276.861,129.412 261.584,106.762 239.138 L 90.732 223.252 98.978 214.943 C 110.847 202.984,152.160 161.327,176.413 136.864 C 187.858 125.319,197.441 115.924,197.708 115.986 C 197.975 116.047,201.761 119.589,206.121 123.856 M385.369 124.488 C 385.831 126.063,386.389 126.807,386.101 125.463 C 385.963 124.820,385.678 124.117,385.467 123.902 C 385.215 123.646,385.181 123.847,385.369 124.488 M386.341 126.902 C 386.341 127.014,386.794 128.316,387.347 129.796 C 387.901 131.277,388.528 139.08,388.742 133.793 C 388.955 134.510,389.223 135.005,389.336 134.892 C 389.517 134.711,389.091 133.349,387.333 128.495 C 386.914 127.337,386.341 126.418,386.341 126.902 M11.599 131.547 C 10.438 134.611,9.354 138.265,9.548 138.459 C 9.762 138.673,9.802 138.567,10.894 134.922 C 11.329 133.471,11.877 131.925,12.112 131.486 C 12.346 131.047,12.474 130.495,12.395 130.258 C 12.316 130.021,11.958 130.601,11.599 131.547 M389.493 135.805 C 389.496 136.127,389.747 136.917,390.050 137.561 L 390.602 138.732 390.370 137.561 C 390.080 136.095,389.484 134.902,389.493 135.805 M390.661 139.345 C 390.646 139.682,390.883 140.736,391.187 141.687 C 391.491 142.637,391.864 143.941,392.016 144.585 C 392.167 145.229,392.373 145.534,392.473 145.262 C 392.643 144.799,391.741 141.244,391.015 139.512 C 390.778 138.949,390.680 138.903,390.661 139.345 M8.240 142.126 C 7.786 143.693,7.254 145.502,7.057 146.146 C 6.860 146.790,6.596 147.932,6.470 148.683 C 6.149 150.608,6.764 149.155,7.628 145.951 C 8.003 144.556,8.571 142.574,8.888 141.546 C 9.206 140.518,9.375 139.587,9.265 139.476 C 9.155 139.366,8.693 140.558,8.240 142.126 M392.823 147.317 C 392.962 148.176,393.232 149.141,393.424 149.463 C 393.643 149.832,393.678 149.469,393.519 148.488 C 393.380 147.629,393.109 146.663,392.918 146.341 C 392.699 145.973,392.663 146.336,392.823 147.317 M5.690 151.415 C 5.102 154.456,5.043 155.116,5.409 154.537 C 5.835 153.864,6.437 150.244,6.124 150.244 C 6.009 150.244,5.814 150.771,5.690 151.415 M393.787 150.856 C 393.770 151.300,394.003 152.529,394.304 153.588 C 394.606 154.646,394.986 156.390,395.150 157.463 C 395.314 158.537,395.522 159.089,395.614 158.692 C 395.770 158.014,394.838 153.182,394.135 151.024 C 393.861 150.181,393.814 150.159,393.787 150.856 M4.507 157.073 C 4.355 158.146,4.078 159.551,3.893 160.195 C 3.708 160.839,3.464 162.420,3.351 163.707 C 3.192 165.513,3.223 165.736,3.484 164.683 C 4.252 161.590,5.151 156.139,4.975 155.648 C 4.871 155.359,4.660 156.000,4.507 157.073 M395.977 161.756 C 396.106 163.044,396.360 164.449,396.542 164.878 C 396.737 165.342,396.772 164.710,396.626 163.317 C 396.492 162.029,396.237 160.624,396.061 160.195 C 395.877 159.745,395.841 160.406,395.977 161.756 M2.587 167.681 C 2.162 170.540,1.857 174.632,2.085 174.419 C 2.401 174.126,3.263 166.645,3.011 166.393 C 2.900 166.282,2.709 166.862,2.587 167.681 M397.137 169.143 C 397.267 170.845,397.516 172.688,397.690 173.240 C 397.872 173.816,397.907 172.913,397.772 171.122 C 397.642 169.405,397.393 167.561,397.219 167.024 C 397.038 166.467,397.003 167.375,397.137 169.143 M398.149 176.780 C 398.144 178.176,398.268 180.459,398.425 181.854 L 398.710 184.390 398.731 181.463 C 398.743 179.854,398.619 177.571,398.455 176.390 L 398.159 174.244 398.149 176.780 M1.304 178.215 C 0.836 182.568,0.999 210.883,1.507 213.268 C 1.891 215.075,1.909 214.974,1.740 211.902 C 1.175 201.641,1.098 190.382,1.545 183.293 C 2.040 175.458,1.906 172.629,1.304 178.215 M398.942 195.122 C 398.942 204.560,398.971 205.012,399.271 200.293 C 399.452 197.449,399.452 192.795,399.271 189.951 C 398.971 185.232,398.942 185.684,398.942 195.122 M398.284 210.403 C 398.106 212.905,398.043 215.188,398.146 215.476 C 398.400 216.192,398.936 208.920,398.755 207.220 C 398.674 206.468,398.463 207.901,398.284 210.403 M2.227 218.922 C 2.354 220.743,2.602 222.675,2.778 223.214 C 3.185 224.461,2.766 218.689,2.321 216.909 C 2.117 216.094,2.082 216.844,2.227 218.922 M397.532 217.445 C 397.108 219.917,396.784 224.193,397.039 223.953 C 397.350 223.662,398.174 216.581,397.926 216.333 C 397.831 216.237,397.653 216.738,397.532 217.445 M3.359 226.732 C 3.473 227.912,3.715 229.405,3.898 230.049 C 4.080 230.693,4.355 232.098,4.507 233.171 C 4.660 234.244,4.871 234.885,4.975 234.596 C 5.163 234.071,4.142 227.982,3.493 225.756 C 3.238 224.884,3.204 225.134,3.359 226.732 M396.349 225.854 C 395.909 228.202,395.722 230.817,396.049 230.049 C 396.446 229.116,397.017 224.780,396.742 224.780 C 396.636 224.780,396.459 225.263,396.349 225.854 M395.142 232.780 C 394.974 233.854,394.594 235.691,394.296 236.862 C 393.721 239.132,393.603 240.853,394.135 239.220 C 394.838 237.062,395.770 232.230,395.614 231.552 C 395.522 231.154,395.310 231.707,395.142 232.780 M5.326 236.878 C 5.693 239.432,6.312 240.656,6.018 238.244 C 5.887 237.171,5.621 236.029,5.427 235.707 C 5.204 235.337,5.167 235.768,5.326 236.878 M6.498 241.756 C 6.629 242.615,6.866 243.580,7.024 243.902 C 7.183 244.224,7.445 245.190,7.608 246.049 C 7.771 246.907,7.992 247.370,8.098 247.076 C 8.284 246.562,7.308 242.586,6.602 240.976 C 6.371 240.451,6.337 240.706,6.498 241.756 M393.226 241.073 C 392.759 242.731,392.565 244.466,392.909 243.902 C 393.321 243.227,393.883 240.390,393.605 240.390 C 393.502 240.390,393.332 240.698,393.226 241.073 M391.446 247.778 C 390.942 249.524,390.632 251.055,390.758 251.181 C 390.884 251.306,391.103 250.906,391.246 250.290 C 391.389 249.674,391.767 248.345,392.085 247.336 C 392.403 246.327,392.596 245.299,392.513 245.052 C 392.431 244.805,391.951 246.032,391.446 247.778 M8.415 248.780 C 8.836 250.570,9.449 251.387,9.147 249.756 C 9.007 249.005,8.724 248.215,8.517 248.000 C 8.273 247.748,8.237 248.025,8.415 248.780 M9.586 252.683 C 10.007 254.472,10.620 255.290,10.317 253.659 C 10.178 252.907,9.895 252.117,9.687 251.902 C 9.444 251.650,9.408 251.927,9.586 252.683 M389.854 253.073 C 389.596 253.853,389.478 254.584,389.591 254.697 C 389.704 254.810,389.980 254.237,390.205 253.424 C 390.429 252.611,390.547 251.881,390.467 251.801 C 390.387 251.721,390.111 252.293,389.854 253.073 M10.563 255.477 C 10.523 256.170,12.184 260.336,12.411 260.109 C 12.590 259.930,12.354 259.246,10.997 256.000 C 10.773 255.463,10.578 255.228,10.563 255.477 M388.742 256.451 C 388.528 257.169,387.900 258.970,387.345 260.453 C 386.791 261.937,386.422 263.235,386.525 263.338 C 386.629 263.442,386.820 263.194,386.949 262.788 C 387.079 262.381,387.360 261.617,387.573 261.089 C 388.587 258.575,389.521 255.537,389.336 255.352 C 389.223 255.239,388.955 255.734,388.742 256.451 M12.728 261.659 C 12.866 262.302,13.151 263.005,13.363 263.220 C 13.615 263.476,13.648 263.275,13.460 262.634 C 12.998 261.059,12.440 260.315,12.728 261.659 M13.836 264.585 C 13.987 265.122,14.352 266.098,14.648 266.754 C 14.943 267.410,15.790 269.342,16.529 271.047 C 18.941 276.608,19.575 277.921,19.758 277.738 C 19.857 277.639,19.335 276.263,18.598 274.681 C 17.861 273.099,16.516 270.049,15.610 267.902 C 13.935 263.936,13.341 262.825,13.836 264.585 M385.599 265.034 C 385.082 266.518,385.062 266.812,385.511 266.322 C 385.884 265.914,386.455 263.805,386.192 263.805 C 386.102 263.805,385.835 264.358,385.599 265.034 M384.033 268.700 C 383.585 269.711,383.220 270.611,383.220 270.700 C 383.220 271.345,376.955 283.949,374.330 288.585 C 369.804 296.578,362.554 307.445,358.189 312.778 C 350.155 322.593,349.473 323.351,341.678 331.128 C 329.330 343.447,315.182 354.210,299.747 363.028 C 297.147 364.513,285.090 370.569,283.366 371.255 C 282.427 371.629,281.751 372.028,281.865 372.141 C 282.618 372.894,300.522 363.344,311.094 356.550 C 332.488 342.802,361.007 314.026,369.171 297.951 C 369.280 297.737,370.000 296.595,370.772 295.415 C 371.544 294.234,372.757 292.215,373.466 290.927 C 374.176 289.639,375.143 287.971,375.614 287.220 C 376.359 286.030,381.941 274.696,383.396 271.415 C 383.682 270.771,384.213 269.571,384.577 268.749 C 384.940 267.926,385.149 267.166,385.042 267.058 C 384.934 266.950,384.480 267.689,384.033 268.700 M20.181 278.927 C 20.579 279.995,24.606 287.641,25.623 289.261 C 26.125 290.061,26.537 290.804,26.537 290.911 C 26.537 291.430,35.187 304.592,38.186 308.637 C 43.735 316.120,52.155 325.845,57.756 331.239 C 64.316 337.556,69.811 342.446,73.546 345.291 C 74.842 346.278,75.990 347.198,76.098 347.335 C 76.781 348.209,92.918 359.415,93.493 359.415 C 93.598 359.415,99.890 363.120,101.463 364.109 C 104.027 365.720,121.792 374.244,122.585 374.244 C 122.779 374.244,123.242 374.420,123.615 374.636 C 124.839 375.343,131.620 377.778,131.818 377.581 C 132.016 377.382,131.434 377.126,128.390 376.073 C 126.296 375.348,122.172 373.694,120.000 372.708 C 119.141 372.318,117.473 371.587,116.293 371.084 C 113.419 369.859,102.691 364.389,100.715 363.142 C 99.847 362.594,99.047 362.146,98.935 362.146 C 98.824 362.146,96.723 360.916,94.267 359.412 C 75.416 347.872,57.953 332.593,44.094 315.512 C 42.701 313.795,41.470 312.302,41.358 312.195 C 38.335 309.293,27.185 291.768,22.426 282.439 C 20.500 278.662,19.500 277.098,20.181 278.927 M278.318 373.475 C 276.964 374.113,275.613 374.634,275.317 374.634 C 275.020 374.634,274.669 374.810,274.537 375.024 C 274.121 375.697,280.184 373.500,281.151 372.627 C 281.857 371.991,280.799 372.307,278.318 373.475 M272.585 375.693 C 272.156 375.796,271.629 376.059,271.415 376.277 C 271.151 376.544,271.341 376.580,272.000 376.387 C 274.020 375.794,274.493 375.234,272.585 375.693 M268.919 377.009 C 268.405 377.214,268.077 377.475,268.191 377.589 C 268.304 377.703,268.988 377.537,269.711 377.222 C 271.147 376.596,270.433 376.403,268.919 377.009 M132.325 377.915 C 132.563 378.148,137.078 379.707,137.515 379.707 C 138.269 379.707,137.324 379.182,135.325 378.492 C 133.405 377.829,131.952 377.549,132.325 377.915 M264.585 378.603 C 263.405 379.032,262.351 379.476,262.244 379.591 C 261.986 379.866,264.587 379.302,265.353 378.917 C 265.682 378.752,266.390 378.435,266.927 378.213 C 268.677 377.488,266.789 377.803,264.585 378.603 M138.537 380.036 C 138.859 380.235,139.737 380.514,140.488 380.655 C 141.395 380.826,141.657 380.790,141.268 380.550 C 140.946 380.350,140.068 380.072,139.317 379.930 C 138.409 379.760,138.148 379.795,138.537 380.036 M259.567 380.155 C 258.846 380.363,258.345 380.622,258.454 380.731 C 258.678 380.955,261.854 380.167,261.854 379.887 C 261.854 379.630,261.076 379.721,259.567 380.155 M142.634 381.259 C 144.366 381.985,147.921 382.887,148.384 382.717 C 148.656 382.617,148.351 382.411,147.707 382.259 C 147.063 382.108,145.759 381.735,144.809 381.431 C 142.907 380.823,141.290 380.694,142.634 381.259 M255.024 381.460 C 254.166 381.746,252.937 382.105,252.293 382.258 C 251.649 382.410,251.344 382.617,251.616 382.717 C 252.079 382.887,255.634 381.985,257.366 381.259 L 258.146 380.931 257.366 380.935 C 256.937 380.938,255.883 381.174,255.024 381.460 M149.463 383.151 C 149.785 383.346,150.839 383.616,151.805 383.752 C 152.892 383.905,153.338 383.867,152.976 383.653 C 152.654 383.463,151.600 383.192,150.634 383.052 C 149.519 382.890,149.092 382.926,149.463 383.151 M248.273 383.214 C 246.283 383.686,246.225 384.124,248.195 383.806 C 250.164 383.487,251.684 382.833,250.341 382.881 C 249.912 382.897,248.981 383.046,248.273 383.214 M153.798 384.172 C 154.139 384.513,161.992 386.000,162.647 385.847 C 163.016 385.762,162.439 385.554,161.366 385.386 C 160.293 385.218,158.456 384.838,157.284 384.540 C 155.203 384.013,153.454 383.828,153.798 384.172 M242.537 384.565 C 241.463 384.847,239.707 385.216,238.634 385.385 C 237.561 385.553,236.984 385.762,237.353 385.847 C 238.008 386.000,245.861 384.513,246.202 384.172 C 246.538 383.836,244.460 384.059,242.537 384.565 M164.098 386.301 C 164.527 386.484,166.020 386.744,167.415 386.879 C 168.953 387.028,169.644 386.992,169.171 386.788 C 168.741 386.604,167.249 386.344,165.854 386.211 C 164.335 386.066,163.630 386.102,164.098 386.301 M232.820 386.382 C 231.554 386.567,230.412 386.829,230.283 386.964 C 229.972 387.290,234.903 386.722,235.902 386.317 L 236.683 386.001 235.902 386.024 C 235.473 386.036,234.086 386.198,232.820 386.382 M172.098 387.487 C 174.552 388.109,180.780 388.746,185.756 388.883 L 190.634 389.018 185.951 388.663 C 183.376 388.467,180.039 388.133,178.537 387.920 C 174.320 387.324,170.418 387.061,172.098 387.487 M224.585 387.546 C 223.298 387.717,219.785 388.045,216.780 388.276 C 209.275 388.852,208.473 389.043,214.244 388.879 C 219.125 388.740,225.724 388.099,228.293 387.514 L 229.659 387.203 228.293 387.220 C 227.541 387.229,225.873 387.376,224.585 387.546 M196.021 389.365 C 198.340 389.434,202.028 389.433,204.216 389.364 C 206.405 389.295,204.507 389.238,200.000 389.238 C 195.493 389.239,193.702 389.295,196.021 389.365 ", stroke: "none", fill: "#92570f", fillRule: "evenodd" }))));
};

var Icon$11 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 400 389.33" }, props),
        React__default['default'].createElement("g", { id: "svgg" },
            React__default['default'].createElement("path", { id: "path0", d: "M196.765 59.479 C 196.271 59.574,195.673 60.076,195.436 60.595 C 195.200 61.114,194.881 61.538,194.728 61.538 C 194.320 61.538,189.679 66.119,189.679 66.522 C 189.679 66.711,189.238 67.067,188.699 67.312 C 188.161 67.558,187.517 68.204,187.269 68.748 C 187.021 69.291,186.453 69.828,186.006 69.940 C 185.558 70.053,184.886 70.679,184.511 71.332 C 184.136 71.984,183.495 72.606,183.086 72.713 C 182.677 72.820,182.138 73.402,181.888 74.005 C 181.638 74.609,181.040 75.201,180.559 75.322 C 180.079 75.443,179.483 75.986,179.235 76.530 C 178.987 77.074,178.359 77.713,177.838 77.950 C 177.318 78.187,176.806 78.709,176.701 79.109 C 176.597 79.510,175.977 80.144,175.325 80.518 C 174.673 80.892,173.957 81.598,173.735 82.087 C 173.512 82.576,172.905 83.137,172.385 83.335 C 171.865 83.533,171.325 84.057,171.184 84.500 C 171.043 84.943,170.415 85.571,169.787 85.895 C 169.160 86.220,168.647 86.750,168.647 87.073 C 168.647 87.396,168.033 88.022,167.283 88.464 C 166.534 88.907,165.920 89.523,165.920 89.833 C 165.920 90.143,165.424 90.681,164.818 91.029 C 164.212 91.377,163.431 92.157,163.084 92.764 C 162.736 93.370,162.197 93.866,161.887 93.866 C 161.577 93.866,160.961 94.479,160.519 95.229 C 160.077 95.979,159.490 96.593,159.215 96.594 C 158.940 96.596,158.416 97.122,158.051 97.763 C 157.686 98.404,156.983 99.113,156.489 99.339 C 155.994 99.564,155.293 100.265,154.931 100.897 C 154.568 101.528,154.010 102.045,153.691 102.045 C 153.371 102.045,152.880 102.527,152.600 103.116 C 152.319 103.705,151.696 104.360,151.215 104.571 C 150.734 104.783,150.341 105.078,150.341 105.228 C 150.341 105.701,145.797 110.224,145.322 110.224 C 145.073 110.224,144.701 110.665,144.496 111.205 C 144.291 111.744,143.682 112.353,143.142 112.558 C 142.603 112.763,142.162 113.137,142.162 113.390 C 142.162 113.904,137.676 118.403,137.163 118.403 C 136.982 118.403,136.633 118.845,136.387 119.385 C 136.141 119.924,135.499 120.534,134.961 120.738 C 134.423 120.943,133.982 121.383,133.982 121.717 C 133.982 122.051,133.369 122.686,132.619 123.129 C 131.870 123.571,131.256 124.184,131.256 124.492 C 131.256 124.799,130.670 125.396,129.954 125.819 C 129.239 126.241,128.454 127.024,128.210 127.558 C 127.967 128.093,127.518 128.530,127.213 128.530 C 126.909 128.530,126.297 129.143,125.855 129.893 C 125.413 130.643,124.820 131.256,124.537 131.256 C 124.255 131.256,123.707 131.793,123.319 132.450 C 122.931 133.106,122.234 133.816,121.770 134.028 C 121.306 134.239,120.629 134.929,120.267 135.561 C 119.904 136.192,119.332 136.709,118.996 136.709 C 118.659 136.709,118.216 137.149,118.012 137.687 C 117.807 138.226,117.217 138.858,116.701 139.094 C 116.185 139.329,115.579 139.923,115.355 140.415 C 115.131 140.907,114.411 141.626,113.754 142.014 C 113.098 142.402,112.561 142.950,112.561 143.232 C 112.561 143.515,111.966 144.097,111.239 144.525 C 110.513 144.954,109.825 145.662,109.710 146.099 C 109.596 146.536,109.145 146.987,108.709 147.101 C 108.272 147.215,107.564 147.903,107.135 148.630 C 106.706 149.357,106.124 149.951,105.842 149.951 C 105.560 149.951,105.011 150.488,104.624 151.145 C 104.236 151.801,103.500 152.529,102.989 152.762 C 102.478 152.995,101.956 153.511,101.830 153.910 C 101.704 154.308,101.087 154.899,100.459 155.224 C 99.832 155.548,99.318 156.080,99.318 156.406 C 99.318 156.732,98.808 157.291,98.184 157.650 C 97.559 158.008,96.761 158.788,96.409 159.384 C 96.057 159.980,95.591 160.467,95.374 160.467 C 94.846 160.467,93.866 161.471,93.866 162.011 C 93.866 162.247,93.282 162.785,92.569 163.206 C 91.855 163.627,91.037 164.410,90.750 164.946 C 90.463 165.482,90.000 165.920,89.720 165.920 C 89.441 165.920,88.940 166.446,88.608 167.089 C 88.275 167.731,87.838 168.257,87.636 168.257 C 87.435 168.257,84.720 170.798,81.603 173.905 C 78.487 177.011,75.806 179.552,75.646 179.552 C 75.486 179.552,75.182 179.932,74.971 180.397 C 74.759 180.861,74.236 181.431,73.807 181.662 C 73.379 181.894,72.882 182.315,72.702 182.597 C 72.191 183.401,67.629 187.731,67.293 187.731 C 67.127 187.731,66.991 187.994,66.991 188.315 C 66.991 188.637,66.839 188.900,66.654 188.900 C 66.468 188.900,63.146 192.011,59.273 195.813 C 55.399 199.615,48.970 205.920,44.985 209.824 L 37.741 216.921 37.998 218.392 C 38.140 219.202,38.543 220.064,38.894 220.310 C 39.617 220.815,41.516 222.482,43.822 224.636 C 44.682 225.439,46.245 226.796,47.295 227.653 C 48.344 228.510,49.840 229.825,50.618 230.574 C 55.444 235.224,58.034 237.585,58.311 237.585 C 58.485 237.585,58.800 237.976,59.012 238.455 C 59.223 238.933,59.822 239.534,60.342 239.791 C 60.862 240.048,61.488 240.633,61.733 241.091 C 61.978 241.549,62.604 242.133,63.125 242.390 C 63.645 242.647,64.243 243.248,64.455 243.726 C 64.666 244.205,64.973 244.596,65.136 244.596 C 65.464 244.596,69.819 248.866,70.355 249.713 C 70.540 250.005,71.042 250.433,71.470 250.665 C 71.899 250.897,72.410 251.437,72.606 251.866 C 72.802 252.295,73.314 252.806,73.743 253.003 C 74.171 253.199,74.712 253.710,74.944 254.138 C 75.176 254.567,75.604 255.068,75.896 255.253 C 76.742 255.789,81.013 260.145,81.013 260.472 C 81.013 260.636,81.407 260.943,81.889 261.154 C 82.371 261.365,82.938 261.933,83.150 262.415 C 83.361 262.897,83.671 263.291,83.838 263.291 C 84.005 263.291,86.071 265.219,88.430 267.575 C 90.789 269.932,92.861 271.860,93.035 271.860 C 93.209 271.860,93.547 272.290,93.786 272.815 C 94.026 273.340,94.742 274.039,95.379 274.368 C 96.016 274.698,96.652 275.330,96.792 275.773 C 96.933 276.216,97.473 276.740,97.993 276.938 C 98.513 277.135,99.134 277.725,99.372 278.248 C 99.611 278.772,100.190 279.296,100.659 279.414 C 101.128 279.532,101.726 280.028,101.988 280.516 C 102.249 281.005,102.999 281.712,103.654 282.088 C 104.310 282.464,104.936 283.115,105.045 283.535 C 105.155 283.954,105.553 284.395,105.930 284.515 C 106.306 284.634,107.646 285.702,108.906 286.886 C 110.166 288.071,111.805 289.513,112.547 290.090 C 113.290 290.667,114.926 292.147,116.184 293.379 C 118.973 296.110,121.048 296.503,122.188 294.516 C 122.536 293.910,123.316 293.130,123.922 292.782 C 124.528 292.434,125.024 291.908,125.024 291.613 C 125.024 291.318,125.474 290.836,126.023 290.542 C 126.572 290.248,127.311 289.517,127.665 288.918 C 128.019 288.318,128.623 287.728,129.008 287.606 C 129.392 287.484,129.972 286.871,130.297 286.243 C 130.621 285.616,131.124 285.102,131.413 285.102 C 133.021 285.102,132.836 283.987,130.901 282.021 C 129.828 280.931,128.779 280.039,128.571 280.039 C 128.363 280.039,128.085 279.701,127.954 279.288 C 127.823 278.875,127.111 278.180,126.370 277.743 C 125.630 277.307,125.024 276.681,125.024 276.352 C 125.024 276.023,124.865 275.755,124.670 275.755 C 124.475 275.755,122.893 274.352,121.153 272.639 C 119.414 270.925,117.833 269.523,117.639 269.523 C 117.446 269.523,117.175 269.170,117.039 268.740 C 116.902 268.309,116.289 267.697,115.677 267.381 C 115.064 267.064,114.451 266.451,114.314 266.018 C 114.176 265.584,113.584 264.982,112.999 264.679 C 112.413 264.376,111.728 263.677,111.477 263.126 C 111.225 262.574,110.747 262.123,110.414 262.123 C 110.081 262.123,109.463 261.537,109.040 260.821 C 108.618 260.105,107.835 259.320,107.301 259.077 C 106.766 258.833,106.329 258.361,106.329 258.028 C 106.329 257.695,105.723 257.065,104.983 256.628 C 104.243 256.192,103.527 255.487,103.392 255.061 C 103.257 254.636,102.721 254.127,102.201 253.929 C 101.682 253.731,101.072 253.165,100.846 252.670 C 100.621 252.174,100.053 251.601,99.585 251.396 C 99.117 251.190,98.560 250.626,98.348 250.143 C 98.136 249.659,97.654 249.165,97.277 249.045 C 96.900 248.925,96.138 248.233,95.583 247.506 C 95.029 246.779,94.278 246.090,93.915 245.975 C 93.552 245.860,92.944 245.239,92.565 244.596 C 92.185 243.953,91.631 243.427,91.334 243.427 C 91.037 243.427,90.483 242.902,90.104 242.259 C 89.724 241.616,89.237 241.091,89.022 241.091 C 88.807 241.091,88.013 240.488,87.256 239.752 C 84.614 237.179,83.124 235.818,80.832 233.885 C 79.562 232.814,77.958 231.368,77.268 230.672 C 76.579 229.976,75.936 229.406,75.839 229.406 C 75.672 229.406,70.328 224.433,69.523 223.529 C 69.309 223.288,68.585 222.540,67.914 221.867 C 67.244 221.193,66.339 219.896,65.903 218.984 L 65.111 217.325 66.292 216.206 C 66.942 215.591,67.672 214.883,67.914 214.633 C 68.156 214.382,68.691 213.879,69.102 213.515 C 69.513 213.151,70.424 212.298,71.127 211.620 C 71.830 210.941,72.722 210.286,73.110 210.163 C 73.497 210.040,73.988 209.543,74.200 209.059 C 74.412 208.575,74.971 208.010,75.441 207.804 C 75.911 207.597,76.519 207.013,76.791 206.505 C 77.063 205.997,77.761 205.335,78.342 205.034 C 78.924 204.734,79.512 204.133,79.649 203.700 C 79.787 203.267,80.413 202.647,81.040 202.323 C 81.668 201.998,82.181 201.468,82.181 201.145 C 82.181 200.822,82.787 200.201,83.527 199.764 C 84.267 199.327,84.983 198.622,85.118 198.197 C 85.253 197.772,85.789 197.262,86.309 197.064 C 86.829 196.867,87.446 196.283,87.682 195.766 C 87.917 195.250,88.532 194.635,89.048 194.400 C 89.564 194.165,90.160 193.515,90.373 192.956 C 90.585 192.397,91.101 191.851,91.520 191.741 C 91.938 191.632,92.631 190.948,93.060 190.221 C 93.489 189.494,94.104 188.900,94.427 188.900 C 94.750 188.900,95.268 188.408,95.579 187.807 C 95.890 187.206,96.595 186.509,97.147 186.257 C 97.699 186.006,98.150 185.528,98.150 185.195 C 98.150 184.862,98.763 184.227,99.513 183.785 C 100.263 183.342,100.876 182.729,100.876 182.422 C 100.876 182.114,101.482 181.505,102.222 181.069 C 102.963 180.632,103.679 179.927,103.814 179.502 C 103.948 179.076,104.485 178.566,105.006 178.368 C 105.527 178.170,106.116 177.582,106.314 177.061 C 106.512 176.540,107.022 176.003,107.447 175.868 C 107.872 175.733,108.577 175.017,109.014 174.277 C 109.451 173.537,110.073 172.931,110.396 172.931 C 110.719 172.931,111.259 172.398,111.596 171.746 C 111.933 171.094,112.655 170.391,113.201 170.183 C 113.747 169.975,114.285 169.457,114.397 169.031 C 114.508 168.605,114.722 168.257,114.873 168.257 C 115.334 168.257,122.687 160.963,122.687 160.506 C 122.687 160.271,122.871 160.078,123.096 160.078 C 123.321 160.078,125.922 157.668,128.876 154.722 C 131.830 151.777,134.670 148.981,135.186 148.510 C 135.702 148.038,136.300 147.466,136.514 147.238 C 137.057 146.661,144.831 139.224,147.114 137.098 C 148.149 136.134,151.492 132.983,154.543 130.095 C 157.594 127.208,160.525 124.617,161.057 124.338 C 161.590 124.059,162.028 123.618,162.032 123.357 C 162.039 122.809,164.830 120.073,166.407 119.068 C 166.996 118.692,167.478 118.164,167.478 117.894 C 167.478 117.624,168.004 117.092,168.647 116.712 C 169.289 116.333,169.815 115.797,169.815 115.521 C 169.815 115.246,170.428 114.690,171.178 114.286 C 171.928 113.883,172.541 113.387,172.541 113.184 C 172.541 112.724,176.735 108.666,177.212 108.666 C 177.404 108.666,177.792 108.184,178.072 107.595 C 178.352 107.006,178.964 106.356,179.431 106.150 C 179.898 105.945,180.459 105.384,180.678 104.903 C 180.897 104.423,181.597 103.760,182.234 103.431 C 182.871 103.102,183.507 102.470,183.647 102.027 C 183.788 101.584,184.343 101.054,184.881 100.849 C 185.419 100.645,185.952 100.122,186.066 99.688 C 186.179 99.253,186.763 98.644,187.364 98.333 C 187.964 98.023,188.555 97.454,188.677 97.070 C 188.799 96.686,189.389 96.081,189.989 95.727 C 190.588 95.373,191.309 94.653,191.590 94.128 C 191.871 93.603,192.524 92.980,193.040 92.745 C 193.556 92.510,194.146 91.877,194.351 91.339 C 194.555 90.801,194.963 90.360,195.257 90.360 C 195.551 90.360,196.430 89.740,197.211 88.982 C 198.775 87.462,199.593 87.534,200.524 89.273 C 200.795 89.780,201.401 90.363,201.871 90.569 C 202.342 90.776,202.900 91.340,203.112 91.824 C 203.325 92.308,203.791 92.797,204.149 92.911 C 204.507 93.024,205.262 93.724,205.828 94.465 C 206.393 95.206,207.105 95.813,207.410 95.813 C 207.715 95.813,208.230 96.326,208.554 96.954 C 208.879 97.581,209.499 98.207,209.932 98.345 C 210.365 98.482,210.978 99.096,211.295 99.708 C 211.612 100.320,212.233 100.936,212.676 101.077 C 213.119 101.217,213.644 101.758,213.841 102.278 C 214.039 102.797,214.623 103.415,215.139 103.650 C 215.655 103.886,216.270 104.500,216.504 105.015 C 216.739 105.530,217.353 106.143,217.868 106.378 C 218.383 106.612,218.997 107.227,219.232 107.743 C 219.467 108.259,220.103 108.850,220.645 109.056 C 221.187 109.262,221.792 109.857,221.991 110.378 C 222.189 110.899,222.713 111.441,223.156 111.581 C 223.599 111.722,224.221 112.338,224.537 112.950 C 224.854 113.563,225.462 114.174,225.888 114.310 C 226.315 114.445,226.968 115.071,227.340 115.701 C 227.712 116.331,228.331 116.946,228.716 117.068 C 229.100 117.190,229.680 117.803,230.005 118.431 C 230.329 119.058,230.780 119.572,231.008 119.572 C 231.528 119.572,235.638 123.753,235.638 124.283 C 235.638 124.499,236.146 124.853,236.767 125.069 C 237.388 125.286,237.989 125.815,238.102 126.246 C 238.214 126.677,238.664 127.123,239.100 127.237 C 239.537 127.351,240.245 128.040,240.674 128.766 C 241.103 129.493,241.717 130.088,242.039 130.088 C 242.362 130.088,242.999 130.594,243.456 131.212 C 243.914 131.830,244.708 132.561,245.221 132.836 C 245.734 133.110,246.154 133.564,246.154 133.845 C 246.154 134.125,246.636 134.656,247.225 135.026 C 248.706 135.955,256.676 143.134,261.741 148.101 C 262.560 148.905,263.389 149.562,263.584 149.562 C 263.779 149.562,264.183 150.020,264.483 150.579 C 264.782 151.139,265.428 151.749,265.919 151.935 C 266.409 152.122,266.978 152.716,267.183 153.255 C 267.388 153.794,267.763 154.236,268.016 154.236 C 268.269 154.236,269.752 155.550,271.313 157.157 C 272.873 158.763,274.294 160.078,274.470 160.078 C 274.647 160.078,274.964 160.458,275.175 160.922 C 275.387 161.387,275.910 161.956,276.339 162.188 C 276.767 162.420,277.259 162.831,277.432 163.102 C 277.951 163.915,282.444 168.257,282.766 168.257 C 282.930 168.257,283.155 168.605,283.266 169.031 C 283.378 169.457,283.924 169.979,284.480 170.190 C 285.037 170.402,285.492 170.754,285.492 170.974 C 285.492 171.427,290.010 176.045,290.458 176.049 C 290.618 176.051,291.048 176.576,291.413 177.218 C 291.778 177.859,292.343 178.384,292.669 178.384 C 292.995 178.384,293.527 178.897,293.851 179.524 C 294.176 180.152,294.756 180.765,295.140 180.887 C 295.525 181.009,296.129 181.600,296.483 182.199 C 296.837 182.798,297.573 183.528,298.119 183.820 C 298.664 184.112,299.214 184.675,299.340 185.072 C 299.465 185.468,300.069 186.051,300.682 186.368 C 301.294 186.685,301.910 187.306,302.051 187.749 C 302.191 188.192,302.732 188.717,303.251 188.914 C 303.771 189.112,304.398 189.715,304.644 190.255 C 304.890 190.795,305.246 191.237,305.436 191.237 C 305.626 191.237,306.582 192.025,307.560 192.989 C 308.537 193.953,309.481 194.742,309.657 194.742 C 309.833 194.742,310.087 195.088,310.221 195.511 C 310.355 195.934,310.936 196.504,311.513 196.778 C 312.089 197.053,312.734 197.671,312.945 198.152 C 313.157 198.633,313.561 199.026,313.844 199.026 C 314.126 199.026,314.830 199.532,315.407 200.151 C 315.984 200.770,318.307 202.917,320.569 204.922 C 326.036 209.768,327.023 210.677,328.444 212.171 C 329.105 212.868,329.866 213.437,330.133 213.437 C 330.401 213.437,330.729 213.783,330.863 214.206 C 330.998 214.629,331.639 215.354,332.289 215.816 C 335.087 217.809,335.356 221.308,332.801 222.472 C 332.281 222.709,331.752 223.227,331.627 223.623 C 331.501 224.019,331.029 224.541,330.578 224.783 C 330.127 225.024,328.609 226.426,327.205 227.898 C 325.801 229.370,324.471 230.574,324.249 230.574 C 324.027 230.574,323.673 230.968,323.461 231.449 C 323.250 231.930,322.605 232.548,322.029 232.823 C 321.452 233.097,320.870 233.669,320.735 234.094 C 320.600 234.520,319.989 235.126,319.377 235.443 C 318.765 235.760,318.151 236.373,318.014 236.806 C 317.876 237.239,317.250 237.859,316.623 238.184 C 315.995 238.508,315.482 239.040,315.482 239.366 C 315.482 239.692,314.971 240.251,314.347 240.610 C 313.723 240.968,312.924 241.748,312.573 242.344 C 312.221 242.940,311.671 243.427,311.352 243.427 C 311.033 243.427,310.473 243.954,310.108 244.597 C 309.744 245.240,309.151 245.861,308.792 245.977 C 308.432 246.093,307.781 246.794,307.344 247.534 C 306.907 248.275,306.291 248.880,305.975 248.880 C 305.658 248.880,305.098 249.391,304.729 250.015 C 304.360 250.640,303.664 251.330,303.183 251.550 C 302.701 251.769,302.192 252.312,302.051 252.756 C 301.910 253.199,301.294 253.822,300.682 254.138 C 300.069 254.455,299.465 255.040,299.339 255.438 C 299.212 255.836,298.690 256.353,298.179 256.586 C 297.668 256.819,296.933 257.546,296.545 258.203 C 296.157 258.859,295.607 259.396,295.321 259.396 C 295.036 259.396,294.505 259.927,294.140 260.576 C 293.775 261.224,293.065 261.861,292.561 261.991 C 292.025 262.129,291.488 262.681,291.263 263.327 C 291.052 263.932,290.548 264.533,290.143 264.661 C 289.738 264.790,289.047 265.400,288.608 266.018 C 288.168 266.635,287.460 267.250,287.035 267.385 C 286.610 267.520,286.003 268.132,285.686 268.744 C 285.370 269.356,284.802 269.957,284.425 270.079 C 284.048 270.200,283.440 270.826,283.076 271.469 C 282.711 272.112,282.146 272.639,281.820 272.639 C 281.494 272.639,280.952 273.172,280.614 273.824 C 280.277 274.476,279.608 275.189,279.128 275.407 C 278.647 275.626,278.086 276.188,277.881 276.655 C 277.675 277.122,277.036 277.728,276.459 278.003 C 275.883 278.277,275.301 278.849,275.166 279.274 C 275.031 279.700,274.407 280.313,273.780 280.637 C 273.152 280.962,272.639 281.479,272.639 281.788 C 272.639 282.096,272.021 282.767,271.266 283.280 C 269.857 284.238,269.919 284.636,271.574 285.227 C 271.952 285.361,272.429 285.914,272.635 286.455 C 272.841 286.996,273.284 287.439,273.621 287.439 C 273.958 287.439,274.523 287.944,274.877 288.561 C 275.231 289.178,276.095 289.992,276.798 290.370 C 277.500 290.749,278.166 291.345,278.278 291.696 C 278.389 292.047,279.006 292.645,279.649 293.024 C 280.292 293.404,280.818 293.962,280.818 294.263 C 280.818 295.140,282.710 295.846,284.560 295.661 C 284.797 295.638,286.280 294.304,287.854 292.697 C 289.429 291.091,290.944 289.776,291.220 289.776 C 291.497 289.776,291.723 289.611,291.723 289.409 C 291.723 289.208,292.786 288.025,294.085 286.780 C 295.384 285.536,297.734 283.247,299.307 281.694 C 300.880 280.141,302.359 278.870,302.593 278.870 C 302.827 278.870,303.019 278.664,303.019 278.411 C 303.019 277.948,307.624 273.418,308.094 273.418 C 308.233 273.418,308.539 272.995,308.774 272.478 C 309.010 271.961,309.526 271.435,309.921 271.310 C 310.316 271.184,310.950 270.556,311.330 269.913 C 311.710 269.270,312.192 268.744,312.402 268.744 C 312.611 268.744,313.973 267.517,315.429 266.018 C 316.885 264.518,318.260 263.291,318.486 263.291 C 318.712 263.291,318.988 262.942,319.099 262.515 C 319.211 262.089,319.836 261.434,320.488 261.059 C 321.140 260.685,321.855 259.980,322.077 259.492 C 322.299 259.005,322.903 258.414,323.418 258.179 C 323.933 257.944,324.546 257.331,324.781 256.816 C 325.016 256.301,325.612 255.695,326.106 255.470 C 326.600 255.245,327.172 254.679,327.377 254.212 C 327.583 253.745,328.222 253.138,328.799 252.864 C 329.375 252.590,329.957 252.017,330.092 251.592 C 330.227 251.167,330.839 250.560,331.451 250.243 C 332.063 249.927,332.676 249.315,332.813 248.885 C 332.949 248.454,333.229 248.101,333.434 248.101 C 333.893 248.101,338.851 243.061,338.851 242.595 C 338.851 242.410,339.217 242.259,339.664 242.259 C 340.198 242.259,340.619 241.882,340.891 241.161 C 341.119 240.558,341.805 239.777,342.415 239.427 C 343.025 239.077,343.525 238.546,343.525 238.249 C 343.525 237.951,344.128 237.383,344.865 236.986 C 345.602 236.589,346.298 235.904,346.412 235.464 C 346.526 235.024,347.150 234.366,347.798 234.001 C 348.447 233.636,348.978 233.083,348.978 232.773 C 348.978 232.463,349.503 232.025,350.146 231.801 C 350.789 231.577,351.315 231.183,351.315 230.925 C 351.315 230.391,355.800 225.901,356.333 225.901 C 356.526 225.901,356.785 225.493,356.910 224.994 C 357.036 224.495,357.583 223.884,358.127 223.636 C 358.671 223.389,359.318 222.741,359.566 222.197 C 359.814 221.653,360.391 221.114,360.848 221.000 C 361.304 220.885,361.995 220.204,362.382 219.485 C 362.768 218.767,363.434 218.088,363.860 217.977 C 364.661 217.767,364.489 216.943,363.644 216.943 C 363.382 216.943,362.856 216.416,362.476 215.772 C 362.095 215.128,361.281 214.342,360.667 214.024 C 360.052 213.706,359.445 213.120,359.319 212.722 C 359.193 212.323,358.652 211.798,358.117 211.555 C 357.583 211.311,356.939 210.659,356.687 210.107 C 356.435 209.554,355.649 208.859,354.940 208.563 C 354.231 208.267,353.651 207.780,353.651 207.483 C 353.651 207.185,353.211 206.740,352.672 206.495 C 352.133 206.249,351.492 205.608,351.246 205.069 C 351.001 204.530,350.627 204.090,350.416 204.090 C 349.968 204.090,347.604 202.189,345.028 199.758 C 340.983 195.942,339.624 194.742,339.342 194.740 C 339.179 194.738,338.747 194.212,338.382 193.571 C 338.017 192.930,337.492 192.405,337.214 192.404 C 336.936 192.403,336.378 191.909,335.973 191.305 C 335.568 190.700,334.867 190.044,334.415 189.845 C 333.963 189.646,333.419 189.088,333.207 188.604 C 332.995 188.120,332.513 187.626,332.136 187.507 C 331.759 187.387,330.997 186.694,330.442 185.968 C 329.888 185.241,329.126 184.548,328.749 184.428 C 328.372 184.309,327.864 183.774,327.621 183.239 C 327.377 182.704,326.741 182.068,326.206 181.824 C 325.671 181.581,325.131 181.055,325.004 180.657 C 324.878 180.259,324.273 179.674,323.661 179.357 C 323.049 179.041,322.435 178.427,322.298 177.994 C 322.160 177.561,321.547 176.948,320.935 176.631 C 320.322 176.314,319.709 175.701,319.572 175.268 C 319.434 174.835,318.821 174.221,318.208 173.905 C 317.596 173.588,316.980 172.966,316.839 172.523 C 316.699 172.080,316.144 171.550,315.606 171.346 C 315.068 171.141,314.535 170.619,314.421 170.184 C 314.307 169.750,313.703 169.130,313.079 168.807 C 312.454 168.484,311.779 167.787,311.577 167.258 C 311.376 166.729,310.767 166.127,310.224 165.920 C 309.681 165.714,309.068 165.103,308.863 164.564 C 308.658 164.025,308.221 163.583,307.891 163.583 C 307.561 163.583,306.961 163.040,306.557 162.376 C 306.153 161.712,305.295 160.848,304.650 160.455 C 304.005 160.063,303.376 159.422,303.252 159.030 C 303.127 158.639,302.630 158.145,302.147 157.932 C 301.664 157.720,301.049 157.083,300.780 156.517 C 300.510 155.951,299.882 155.386,299.384 155.261 C 298.886 155.136,298.284 154.606,298.046 154.084 C 297.808 153.562,297.290 153.032,296.895 152.907 C 296.500 152.781,295.866 152.153,295.486 151.510 C 295.106 150.867,294.623 150.341,294.412 150.341 C 294.082 150.341,293.035 149.417,290.082 146.517 C 289.248 145.698,289.506 145.926,285.102 142.117 C 281.102 138.656,280.050 137.692,276.065 133.832 C 274.630 132.441,273.096 131.111,272.657 130.877 C 272.219 130.642,271.860 130.199,271.860 129.893 C 271.860 129.587,271.481 129.133,271.018 128.886 C 270.555 128.638,268.892 127.142,267.321 125.561 C 265.751 123.981,264.289 122.687,264.073 122.687 C 263.857 122.687,263.681 122.416,263.681 122.085 C 263.681 121.754,263.164 121.186,262.532 120.824 C 261.901 120.461,261.201 119.763,260.978 119.273 C 260.754 118.783,260.263 118.265,259.887 118.122 C 259.001 117.787,258.228 117.017,258.228 116.470 C 258.228 116.234,257.633 115.689,256.906 115.260 C 256.180 114.832,255.492 114.123,255.377 113.687 C 255.263 113.250,254.799 112.796,254.346 112.677 C 253.893 112.559,253.269 111.971,252.958 111.371 C 252.648 110.770,252.070 110.176,251.673 110.050 C 251.277 109.925,250.713 109.375,250.422 108.830 C 250.130 108.284,249.400 107.548,248.801 107.194 C 248.201 106.840,247.611 106.236,247.489 105.851 C 247.367 105.467,246.776 104.898,246.176 104.588 C 245.576 104.277,244.988 103.653,244.869 103.200 C 244.751 102.747,244.283 102.280,243.830 102.161 C 243.377 102.043,242.743 101.435,242.419 100.810 C 242.096 100.185,241.400 99.510,240.872 99.309 C 240.344 99.109,239.730 98.545,239.508 98.056 C 239.285 97.567,238.586 96.871,237.954 96.508 C 237.323 96.146,236.806 95.583,236.806 95.257 C 236.806 94.931,236.273 94.389,235.621 94.052 C 234.969 93.715,234.246 93.022,234.014 92.514 C 233.782 92.005,233.170 91.483,232.654 91.353 C 232.138 91.223,231.551 90.684,231.349 90.155 C 231.148 89.625,230.797 89.192,230.569 89.192 C 230.341 89.192,229.482 88.535,228.660 87.731 C 227.839 86.928,226.749 85.920,226.238 85.492 C 223.102 82.860,215.434 75.841,211.877 72.347 C 210.405 70.901,209.020 69.718,208.798 69.718 C 208.576 69.718,208.122 69.192,207.790 68.549 C 207.457 67.907,206.989 67.381,206.750 67.381 C 206.232 67.381,199.026 60.088,199.026 59.564 C 199.026 59.195,198.378 59.171,196.765 59.479 M197.170 107.451 C 196.294 107.617,195.658 108.087,195.130 108.958 C 194.709 109.654,194.103 110.224,193.784 110.224 C 193.465 110.224,192.932 110.750,192.600 111.392 C 192.267 112.035,191.729 112.561,191.403 112.561 C 191.077 112.561,190.518 113.072,190.160 113.696 C 189.801 114.320,189.021 115.118,188.425 115.470 C 187.829 115.822,187.342 116.325,187.342 116.588 C 187.342 116.852,186.822 117.374,186.187 117.749 C 185.552 118.124,184.726 118.950,184.351 119.585 C 183.975 120.220,183.455 120.740,183.195 120.740 C 182.934 120.740,182.373 121.228,181.948 121.825 C 181.523 122.422,180.760 123.132,180.252 123.404 C 179.745 123.676,179.160 124.283,178.954 124.754 C 178.747 125.224,178.213 125.769,177.767 125.965 C 177.320 126.161,176.794 126.673,176.598 127.102 C 176.402 127.531,175.891 128.071,175.463 128.303 C 175.034 128.535,174.532 128.963,174.347 129.255 C 173.812 130.102,169.456 134.372,169.128 134.372 C 168.965 134.372,168.658 134.766,168.447 135.248 C 168.235 135.730,167.666 136.298,167.182 136.511 C 166.698 136.723,166.210 137.189,166.096 137.547 C 165.983 137.905,165.283 138.660,164.542 139.226 C 163.800 139.791,163.194 140.508,163.194 140.818 C 163.194 141.129,163.039 141.383,162.850 141.383 C 162.496 141.383,158.031 145.662,157.471 146.538 C 157.298 146.809,156.806 147.220,156.378 147.452 C 155.949 147.683,155.426 148.253,155.214 148.717 C 155.003 149.182,154.698 149.562,154.538 149.562 C 154.099 149.562,146.835 156.912,146.835 157.357 C 146.835 157.568,146.655 157.741,146.435 157.741 C 145.927 157.741,136.319 167.324,136.319 167.830 C 136.319 168.036,135.984 168.311,135.575 168.441 C 135.166 168.571,134.368 169.284,133.802 170.025 C 133.237 170.766,132.558 171.373,132.294 171.373 C 132.030 171.373,131.503 171.899,131.123 172.541 C 130.744 173.184,130.172 173.710,129.853 173.710 C 129.534 173.710,128.974 174.229,128.610 174.864 C 128.246 175.499,127.572 176.219,127.113 176.465 C 126.654 176.710,126.092 177.322,125.863 177.823 C 125.635 178.325,124.927 179.005,124.290 179.334 C 123.653 179.664,123.017 180.296,122.876 180.739 C 122.736 181.182,122.194 181.706,121.673 181.904 C 121.152 182.102,120.558 182.706,120.353 183.245 C 120.148 183.785,119.796 184.226,119.572 184.226 C 119.347 184.226,116.670 186.686,113.623 189.692 C 110.575 192.698,106.636 196.581,104.869 198.320 C 103.101 200.059,101.655 201.713,101.655 201.997 C 101.655 202.280,101.142 202.777,100.514 203.102 C 99.887 203.426,99.262 204.044,99.125 204.475 C 98.988 204.906,98.733 205.258,98.557 205.258 C 98.229 205.258,95.287 207.780,93.506 209.588 C 92.954 210.148,90.717 212.193,88.536 214.132 C 86.158 216.245,84.771 217.735,85.072 217.851 C 85.349 217.957,85.682 218.577,85.813 219.229 C 85.970 220.013,86.440 220.616,87.204 221.011 C 87.838 221.339,88.473 221.970,88.613 222.413 C 88.754 222.856,89.295 223.381,89.816 223.579 C 90.337 223.777,90.928 224.372,91.129 224.901 C 91.331 225.430,92.006 226.128,92.631 226.451 C 93.256 226.774,93.860 227.393,93.973 227.828 C 94.087 228.262,94.638 228.792,95.198 229.005 C 95.758 229.218,96.385 229.837,96.592 230.380 C 96.799 230.923,97.414 231.537,97.959 231.744 C 98.504 231.952,99.084 232.484,99.248 232.927 C 99.412 233.370,99.977 233.945,100.503 234.205 C 101.030 234.465,101.634 235.069,101.845 235.547 C 102.056 236.026,102.371 236.417,102.545 236.417 C 102.719 236.417,103.661 237.205,104.638 238.169 C 105.616 239.133,106.576 239.922,106.772 239.922 C 106.967 239.922,107.292 240.355,107.493 240.885 C 107.695 241.414,108.273 241.951,108.778 242.078 C 109.283 242.205,110.000 242.823,110.371 243.452 C 110.743 244.081,111.236 244.596,111.467 244.596 C 112.022 244.596,118.115 250.006,124.162 255.867 C 125.722 257.380,127.172 258.617,127.383 258.617 C 127.595 258.617,127.973 259.069,128.224 259.620 C 128.476 260.172,129.161 260.871,129.746 261.174 C 130.332 261.477,130.920 262.068,131.054 262.488 C 131.187 262.908,131.638 263.360,132.055 263.492 C 132.473 263.625,133.268 264.328,133.823 265.055 C 134.377 265.782,135.166 266.483,135.575 266.613 C 135.984 266.743,136.319 267.108,136.319 267.425 C 136.319 267.742,136.830 268.294,137.454 268.652 C 138.078 269.011,138.856 269.756,139.182 270.308 C 139.508 270.860,140.205 271.542,140.731 271.824 C 141.256 272.105,141.901 272.798,142.163 273.363 C 142.615 274.336,142.665 274.351,143.083 273.650 C 143.326 273.243,143.861 272.629,144.273 272.287 C 144.684 271.945,145.425 271.227,145.920 270.691 C 146.414 270.156,146.980 269.569,147.177 269.387 C 147.375 269.204,147.887 268.705,148.315 268.277 C 148.744 267.848,149.270 267.322,149.484 267.108 C 149.698 266.894,150.943 265.685,152.249 264.421 C 153.556 263.157,154.625 261.943,154.625 261.724 C 154.625 261.504,155.065 261.157,155.604 260.952 C 156.142 260.748,156.775 260.158,157.010 259.642 C 157.245 259.126,157.866 258.508,158.389 258.270 L 159.340 257.836 157.424 255.890 C 156.370 254.819,155.314 253.944,155.077 253.944 C 154.839 253.944,154.373 253.418,154.041 252.775 C 153.709 252.132,153.170 251.607,152.844 251.607 C 152.519 251.607,151.953 251.082,151.589 250.441 C 151.224 249.799,150.780 249.274,150.602 249.272 C 150.425 249.271,149.609 248.612,148.790 247.809 C 147.970 247.006,146.576 245.735,145.691 244.985 C 144.806 244.236,143.417 243.009,142.606 242.259 C 141.794 241.509,140.218 240.107,139.104 239.143 C 137.989 238.179,136.030 236.386,134.749 235.158 C 133.468 233.931,131.983 232.640,131.449 232.290 C 130.914 231.940,130.477 231.454,130.476 231.211 C 130.475 230.968,129.958 230.423,129.326 230.000 C 128.695 229.576,127.964 228.832,127.704 228.344 C 127.443 227.857,127.081 227.459,126.900 227.459 C 126.631 227.459,124.351 225.228,118.929 219.661 C 118.683 219.408,118.109 218.865,117.654 218.453 C 116.700 217.589,117.118 216.223,118.442 215.877 C 118.849 215.770,119.182 215.516,119.182 215.311 C 119.182 214.953,123.408 210.652,124.365 210.036 C 124.621 209.872,125.017 209.398,125.245 208.984 C 125.474 208.570,125.999 208.044,126.414 207.816 C 126.828 207.587,127.318 207.160,127.504 206.867 C 127.994 206.092,134.846 199.416,135.151 199.416 C 135.293 199.416,135.654 198.958,135.953 198.399 C 136.253 197.839,136.913 197.224,137.420 197.031 C 137.927 196.838,138.433 196.332,138.545 195.906 C 138.656 195.480,138.902 195.131,139.091 195.131 C 139.279 195.131,141.956 192.634,145.038 189.581 C 151.489 183.192,174.389 160.844,178.885 156.549 C 182.917 152.698,190.196 145.700,190.527 145.357 C 190.672 145.206,191.285 144.588,191.890 143.983 C 192.495 143.379,193.165 142.706,193.379 142.489 C 193.593 142.272,194.188 141.715,194.701 141.252 C 195.214 140.788,196.167 139.839,196.818 139.143 C 198.529 137.313,202.462 137.763,203.129 139.867 C 203.259 140.277,203.879 140.878,204.507 141.202 C 205.134 141.527,205.648 142.044,205.648 142.353 C 205.648 142.661,206.039 143.122,206.516 143.378 C 206.994 143.634,208.528 145.010,209.924 146.436 C 211.321 147.862,212.726 149.192,213.048 149.392 C 213.369 149.593,213.822 150.107,214.053 150.536 C 214.285 150.964,214.855 151.488,215.319 151.699 C 215.784 151.910,216.164 152.222,216.164 152.392 C 216.164 152.825,221.199 157.741,221.642 157.741 C 221.842 157.741,222.006 158.012,222.006 158.343 C 222.006 158.675,222.502 159.230,223.108 159.578 C 223.714 159.926,224.495 160.707,224.842 161.313 C 225.190 161.919,225.746 162.415,226.077 162.415 C 226.409 162.415,226.680 162.574,226.680 162.768 C 226.680 163.201,231.693 168.257,232.123 168.257 C 232.292 168.257,232.522 168.605,232.634 169.031 C 232.745 169.457,233.276 169.973,233.814 170.177 C 234.352 170.382,234.908 170.915,235.050 171.361 C 235.191 171.807,235.774 172.475,236.345 172.844 C 237.660 173.694,241.091 177.112,241.091 177.572 C 241.091 177.762,241.600 178.095,242.222 178.312 C 242.845 178.529,243.462 179.046,243.593 179.460 C 243.724 179.874,244.269 180.412,244.804 180.656 C 245.338 180.899,245.977 181.539,246.222 182.078 C 246.468 182.617,246.861 183.057,247.097 183.057 C 247.332 183.057,247.961 183.460,248.495 183.952 C 249.028 184.444,251.392 186.595,253.749 188.732 C 256.105 190.868,258.471 193.017,259.007 193.505 C 259.542 193.994,261.872 196.221,264.185 198.453 C 266.497 200.686,268.604 202.648,268.868 202.814 C 269.131 202.980,269.653 203.598,270.028 204.187 C 270.403 204.776,270.964 205.258,271.275 205.258 C 271.585 205.258,272.112 205.784,272.444 206.426 C 272.776 207.069,273.315 207.595,273.641 207.595 C 273.966 207.595,274.529 208.112,274.892 208.743 C 275.254 209.375,275.931 210.064,276.395 210.276 C 276.859 210.487,277.536 211.164,277.899 211.779 C 278.263 212.394,278.937 213.062,279.397 213.264 C 279.857 213.467,280.393 213.996,280.589 214.440 C 280.784 214.884,281.441 215.533,282.049 215.882 C 283.551 216.744,283.557 218.272,282.062 219.046 C 281.461 219.356,280.763 220.064,280.510 220.619 C 280.257 221.174,279.646 221.812,279.152 222.037 C 278.658 222.262,278.086 222.828,277.881 223.295 C 277.675 223.762,277.036 224.369,276.459 224.643 C 275.883 224.918,275.301 225.490,275.166 225.915 C 275.031 226.340,274.407 226.954,273.780 227.278 C 273.152 227.603,272.639 228.125,272.639 228.439 C 272.639 228.753,272.053 229.393,271.338 229.862 C 270.622 230.331,269.877 231.078,269.682 231.521 C 269.488 231.964,268.945 232.495,268.477 232.701 C 268.009 232.906,267.442 233.478,267.217 233.972 C 266.992 234.466,266.404 235.054,265.910 235.279 C 265.416 235.505,264.844 236.072,264.638 236.540 C 264.433 237.008,263.888 237.556,263.428 237.758 C 262.968 237.960,262.294 238.629,261.931 239.244 C 261.567 239.859,260.890 240.535,260.426 240.746 C 259.962 240.958,259.286 241.648,258.923 242.279 C 258.561 242.911,257.989 243.427,257.652 243.427 C 257.316 243.427,256.873 243.868,256.668 244.406 C 256.463 244.944,255.874 245.577,255.357 245.812 C 254.841 246.047,254.236 246.642,254.012 247.134 C 253.788 247.625,253.067 248.345,252.411 248.733 C 251.754 249.120,251.217 249.669,251.217 249.951 C 251.217 250.233,250.623 250.815,249.896 251.244 C 249.169 251.673,248.481 252.381,248.367 252.818 C 248.253 253.255,247.802 253.705,247.365 253.820 C 246.928 253.934,246.220 254.622,245.791 255.349 C 245.362 256.075,244.757 256.670,244.447 256.670 C 243.244 256.670,243.629 257.719,245.484 259.494 C 246.547 260.511,247.575 261.344,247.769 261.344 C 247.962 261.344,248.288 261.784,248.493 262.322 C 248.697 262.860,249.287 263.493,249.803 263.728 C 250.319 263.964,250.934 264.578,251.169 265.095 C 251.405 265.611,252.040 266.201,252.580 266.407 C 253.121 266.613,253.748 267.186,253.974 267.681 C 254.199 268.176,254.766 268.749,255.233 268.955 C 255.700 269.160,256.307 269.800,256.581 270.376 C 256.855 270.953,257.428 271.535,257.853 271.670 C 258.278 271.805,258.901 272.447,259.238 273.098 C 260.023 274.617,261.675 274.400,263.518 272.536 C 264.204 271.843,264.975 271.072,265.231 270.823 C 265.487 270.574,266.135 269.933,266.671 269.397 C 268.201 267.867,268.500 267.580,269.297 266.874 C 269.709 266.510,270.450 265.774,270.944 265.239 C 271.438 264.703,272.004 264.116,272.202 263.934 C 272.399 263.752,272.911 263.252,273.340 262.824 C 274.485 261.679,274.735 261.432,278.084 258.130 C 279.768 256.470,281.294 255.112,281.474 255.112 C 281.654 255.112,281.975 254.718,282.186 254.237 C 282.398 253.756,283.053 253.133,283.642 252.853 C 284.231 252.573,284.713 252.082,284.713 251.762 C 284.713 251.442,285.229 250.884,285.861 250.522 C 286.493 250.159,287.186 249.475,287.402 249.001 C 287.618 248.527,288.328 247.863,288.980 247.526 C 289.632 247.189,290.166 246.646,290.166 246.320 C 290.166 245.995,290.682 245.432,291.314 245.069 C 291.945 244.707,292.644 244.010,292.867 243.521 C 293.090 243.033,293.714 242.465,294.255 242.259 C 294.796 242.053,295.421 241.485,295.643 240.997 C 295.866 240.508,296.565 239.811,297.196 239.449 C 297.828 239.086,298.345 238.519,298.345 238.188 C 298.345 237.856,298.499 237.585,298.688 237.585 C 299.043 237.585,303.507 233.306,304.067 232.430 C 304.240 232.159,304.732 231.748,305.161 231.516 C 305.589 231.285,306.099 230.746,306.295 230.319 C 306.490 229.892,307.147 229.257,307.755 228.908 C 308.363 228.559,308.861 228.041,308.861 227.755 C 308.861 227.470,309.387 226.926,310.031 226.546 C 310.675 226.165,311.457 225.361,311.768 224.759 C 312.080 224.156,312.705 223.566,313.158 223.447 C 313.611 223.329,314.079 222.862,314.197 222.409 C 314.316 221.956,314.916 221.325,315.531 221.007 C 316.953 220.271,316.942 219.840,315.482 219.085 C 314.839 218.752,314.314 218.239,314.314 217.945 C 314.314 217.650,313.700 217.047,312.950 216.605 C 312.201 216.162,311.585 215.575,311.582 215.300 C 311.580 215.025,310.966 214.404,310.219 213.920 C 309.472 213.437,308.861 212.784,308.861 212.470 C 308.861 212.156,308.369 211.645,307.768 211.334 C 307.167 211.023,306.470 210.318,306.219 209.766 C 305.967 209.215,305.552 208.763,305.297 208.763 C 304.744 208.763,300.682 204.616,300.682 204.052 C 300.682 203.836,300.196 203.490,299.603 203.283 C 299.009 203.077,298.352 202.516,298.142 202.038 C 297.932 201.560,297.366 200.995,296.884 200.784 C 296.402 200.573,296.008 200.270,296.008 200.111 C 296.008 199.692,291.888 195.636,290.956 195.137 C 290.521 194.905,290.166 194.464,290.166 194.158 C 290.166 193.851,289.771 193.400,289.289 193.155 C 288.807 192.910,287.848 192.159,287.157 191.486 C 286.467 190.813,285.538 189.912,285.093 189.484 C 284.648 189.056,284.162 188.583,284.012 188.434 C 283.637 188.062,280.838 185.602,279.649 184.601 C 277.408 182.711,273.177 178.792,270.730 176.339 C 269.288 174.893,267.945 173.709,267.745 173.709 C 267.545 173.708,267.030 173.181,266.602 172.538 C 266.173 171.895,265.521 171.271,265.151 171.153 C 264.782 171.034,264.120 170.432,263.681 169.815 C 263.241 169.198,262.579 168.595,262.210 168.476 C 261.841 168.357,261.240 167.733,260.875 167.090 C 260.510 166.446,259.970 165.920,259.675 165.920 C 259.380 165.920,258.901 165.476,258.610 164.933 C 258.320 164.390,257.501 163.587,256.792 163.149 C 256.082 162.710,255.501 162.113,255.501 161.821 C 255.501 161.529,254.976 160.980,254.333 160.600 C 253.690 160.221,253.165 159.679,253.165 159.397 C 253.165 159.114,252.579 158.538,251.863 158.115 C 251.147 157.693,250.362 156.910,250.119 156.376 C 249.875 155.841,249.403 155.404,249.070 155.404 C 248.737 155.404,248.107 154.798,247.670 154.058 C 247.234 153.318,246.528 152.602,246.103 152.467 C 245.678 152.332,245.169 151.796,244.971 151.276 C 244.773 150.757,244.189 150.139,243.673 149.904 C 243.157 149.668,242.542 149.054,242.307 148.537 C 242.072 148.021,241.454 147.437,240.934 147.239 C 240.414 147.042,239.878 146.532,239.743 146.107 C 239.608 145.682,238.892 144.977,238.152 144.540 C 237.412 144.103,236.806 143.482,236.806 143.158 C 236.806 142.835,236.293 142.306,235.665 141.981 C 235.038 141.657,234.412 141.037,234.275 140.604 C 234.137 140.171,233.524 139.557,232.911 139.241 C 232.299 138.924,231.683 138.302,231.542 137.859 C 231.402 137.416,230.860 136.892,230.339 136.694 C 229.818 136.495,229.224 135.892,229.019 135.353 C 228.814 134.813,228.467 134.372,228.247 134.372 C 227.737 134.372,223.174 129.825,223.174 129.316 C 223.174 129.106,222.730 128.823,222.187 128.686 C 221.644 128.550,220.938 127.933,220.619 127.316 C 220.300 126.698,219.790 126.193,219.486 126.193 C 219.183 126.193,218.623 125.667,218.243 125.024 C 217.864 124.381,217.280 123.768,216.947 123.663 C 216.344 123.471,214.863 122.252,212.269 119.812 C 211.519 119.106,209.153 116.973,207.011 115.070 C 204.869 113.167,202.106 110.597,200.872 109.359 C 199.637 108.121,198.586 107.131,198.535 107.159 C 198.484 107.188,197.869 107.319,197.170 107.451 ", stroke: "none", fill: "#060606", "fill-rule": "evenodd" }),
            React__default['default'].createElement("path", { id: "path1", d: "M166.699 0.584 C 166.699 1.074,165.864 1.169,161.538 1.173 C 155.704 1.178,153.457 1.445,153.457 2.133 C 153.457 3.435,152.097 3.867,147.640 3.979 C 143.722 4.077,143.169 4.176,142.787 4.852 C 141.868 6.478,141.497 6.621,138.197 6.623 C 134.766 6.624,132.425 7.490,132.425 8.758 C 132.425 9.228,131.878 9.348,129.740 9.348 C 126.941 9.348,126.582 9.571,126.582 11.313 C 126.582 11.973,126.204 12.057,122.785 12.157 L 118.987 12.269 118.867 13.517 L 118.746 14.766 116.140 14.880 L 113.535 14.995 113.414 16.244 L 113.293 17.492 110.687 17.607 C 108.167 17.718,108.078 17.757,107.959 18.793 C 107.843 19.797,107.718 19.864,105.946 19.864 C 103.351 19.864,102.824 20.134,102.824 21.463 C 102.824 22.567,102.781 22.590,100.713 22.590 C 97.890 22.590,97.371 22.838,97.371 24.190 C 97.371 25.255,97.280 25.317,95.716 25.322 C 93.125 25.330,92.417 25.647,92.164 26.909 C 91.973 27.864,91.750 28.043,90.747 28.043 C 89.965 28.043,89.474 28.277,89.315 28.724 C 88.775 30.247,87.932 30.769,86.016 30.769 L 84.129 30.769 84.129 32.132 C 84.129 33.431,84.064 33.496,82.765 33.496 C 81.524 33.496,81.402 33.595,81.402 34.615 C 81.402 35.824,80.481 36.222,77.684 36.222 C 76.575 36.222,76.366 36.380,76.144 37.390 C 75.953 38.261,75.667 38.559,75.023 38.559 C 73.910 38.559,73.223 39.258,73.223 40.389 C 73.223 41.125,73.014 41.285,72.055 41.285 C 71.104 41.285,70.885 41.449,70.880 42.162 C 70.871 43.506,70.450 43.870,68.568 44.164 C 66.567 44.477,65.823 44.977,65.823 46.007 C 65.823 46.521,65.543 46.738,64.877 46.738 C 63.741 46.738,62.707 47.679,62.707 48.713 C 62.707 49.282,62.433 49.464,61.580 49.464 C 60.440 49.464,59.981 50.026,59.981 51.419 C 59.981 51.949,59.644 52.174,58.716 52.264 C 57.653 52.366,57.421 52.571,57.254 53.554 C 57.099 54.470,56.830 54.749,56.012 54.843 C 55.223 54.935,54.909 55.237,54.722 56.086 C 54.536 56.935,54.223 57.237,53.431 57.328 C 52.572 57.427,52.364 57.670,52.265 58.692 C 52.160 59.774,51.984 59.950,50.902 60.055 C 49.820 60.160,49.644 60.336,49.539 61.418 C 49.434 62.500,49.258 62.677,48.176 62.781 C 47.088 62.887,46.918 63.060,46.811 64.167 C 46.713 65.182,46.516 65.433,45.818 65.433 C 44.727 65.433,44.012 66.124,44.012 67.178 C 44.012 67.716,43.629 68.133,42.877 68.417 C 41.865 68.799,41.713 69.083,41.469 71.034 C 41.231 72.942,41.086 73.223,40.345 73.223 C 39.253 73.223,38.559 73.925,38.559 75.028 C 38.559 75.687,38.300 75.927,37.488 76.021 C 36.645 76.118,36.390 76.374,36.293 77.221 C 36.200 78.025,35.831 78.439,34.832 78.856 C 33.518 79.405,33.496 79.455,33.496 81.772 L 33.496 84.129 32.132 84.129 C 30.839 84.129,30.769 84.197,30.769 85.467 C 30.769 86.692,30.662 86.816,29.503 86.928 C 28.238 87.050,28.238 87.050,28.122 89.484 C 28.023 91.561,27.899 91.918,27.277 91.918 C 25.815 91.918,25.316 92.368,25.316 93.687 C 25.316 94.811,25.174 94.999,24.245 95.106 C 23.250 95.220,23.149 95.401,22.814 97.663 C 22.474 99.959,22.394 100.097,21.402 100.097 C 20.244 100.097,19.864 101.073,19.864 104.041 C 19.864 105.458,19.792 105.550,18.695 105.550 L 17.527 105.550 17.527 108.038 L 17.527 110.527 16.164 110.782 L 14.800 111.038 14.800 113.552 C 14.800 115.771,14.713 116.066,14.053 116.066 C 12.194 116.066,12.074 116.329,12.074 120.392 L 12.074 124.245 10.711 124.245 L 9.348 124.245 9.348 126.972 C 9.348 129.379,9.262 129.698,8.616 129.698 C 7.314 129.698,6.864 130.796,6.692 134.395 C 6.558 137.208,6.404 137.894,5.869 138.064 C 4.637 138.454,3.895 140.997,3.895 144.824 C 3.895 148.329,3.878 148.393,2.963 148.393 C 1.630 148.393,1.484 149.039,1.263 155.891 C 1.108 160.725,0.953 162.025,0.533 162.025 C 0.086 162.025,0.000 167.322,0.000 194.742 C 0.000 222.162,0.086 227.459,0.533 227.459 C 0.953 227.459,1.108 228.759,1.263 233.593 C 1.484 240.445,1.630 241.091,2.963 241.091 C 3.878 241.091,3.895 241.155,3.895 244.660 C 3.895 248.487,4.637 251.029,5.869 251.420 C 6.404 251.590,6.558 252.275,6.692 255.089 C 6.864 258.687,7.314 259.786,8.616 259.786 C 9.261 259.786,9.348 260.104,9.348 262.471 C 9.348 265.274,9.569 265.628,11.327 265.628 C 12.010 265.628,12.074 265.940,12.074 269.286 C 12.074 273.139,12.207 273.418,14.053 273.418 C 14.713 273.418,14.800 273.713,14.800 275.932 L 14.800 278.446 16.164 278.701 L 17.527 278.957 17.527 281.445 L 17.527 283.934 18.695 283.934 C 19.792 283.934,19.864 284.026,19.864 285.443 C 19.864 288.411,20.244 289.387,21.402 289.387 C 22.394 289.387,22.474 289.525,22.814 291.821 C 23.149 294.083,23.250 294.264,24.245 294.378 C 25.174 294.485,25.316 294.673,25.316 295.797 C 25.316 297.116,25.815 297.566,27.277 297.566 C 27.899 297.566,28.023 297.923,28.122 300.000 C 28.238 302.434,28.238 302.434,29.503 302.556 C 30.662 302.668,30.769 302.791,30.769 304.017 C 30.769 305.287,30.839 305.355,32.132 305.355 L 33.496 305.355 33.496 307.712 C 33.496 310.029,33.518 310.079,34.832 310.627 C 35.831 311.045,36.200 311.459,36.293 312.263 C 36.390 313.110,36.645 313.366,37.488 313.463 C 38.300 313.556,38.559 313.797,38.559 314.456 C 38.559 315.559,39.253 316.261,40.345 316.261 C 41.086 316.261,41.231 316.542,41.469 318.450 C 41.713 320.401,41.865 320.685,42.877 321.067 C 43.629 321.351,44.012 321.768,44.012 322.305 C 44.012 323.367,44.729 324.051,45.842 324.051 C 46.571 324.051,46.738 324.261,46.738 325.177 C 46.738 326.317,47.300 326.777,48.693 326.777 C 49.223 326.777,49.448 327.114,49.537 328.043 C 49.644 329.150,49.815 329.324,50.902 329.429 C 51.984 329.534,52.160 329.710,52.265 330.792 C 52.363 331.806,52.574 332.057,53.406 332.153 C 54.177 332.243,54.514 332.577,54.782 333.517 C 55.051 334.461,55.386 334.791,56.172 334.882 C 56.968 334.975,57.235 335.245,57.328 336.051 C 57.428 336.917,57.668 337.119,58.715 337.220 C 59.644 337.310,59.981 337.535,59.981 338.065 C 59.981 339.457,60.440 340.019,61.580 340.019 C 62.433 340.019,62.707 340.202,62.707 340.771 C 62.707 341.805,63.741 342.746,64.877 342.746 C 65.543 342.746,65.823 342.963,65.823 343.477 C 65.823 344.507,66.567 345.007,68.568 345.320 C 70.450 345.614,70.871 345.978,70.880 347.322 C 70.885 348.035,71.104 348.199,72.055 348.199 C 73.014 348.199,73.223 348.359,73.223 349.094 C 73.223 350.226,73.910 350.925,75.023 350.925 C 75.662 350.925,75.953 351.222,76.138 352.065 C 76.375 353.143,76.524 353.220,78.895 353.474 C 81.336 353.735,81.402 353.772,81.402 354.865 C 81.402 355.889,81.523 355.988,82.765 355.988 C 84.064 355.988,84.129 356.053,84.129 357.352 L 84.129 358.715 86.016 358.715 C 87.932 358.715,88.775 359.237,89.315 360.759 C 89.474 361.207,89.965 361.441,90.747 361.441 C 91.750 361.441,91.973 361.620,92.164 362.575 C 92.416 363.834,93.126 364.154,95.691 364.162 C 97.245 364.167,97.327 364.227,97.444 365.433 L 97.566 366.699 100.171 366.814 L 102.777 366.928 102.898 368.177 C 103.018 369.420,103.029 369.426,105.429 369.541 C 107.725 369.651,107.845 369.706,107.960 370.709 C 108.077 371.723,108.178 371.767,110.687 371.877 L 113.293 371.992 113.414 373.240 L 113.535 374.489 116.140 374.603 L 118.746 374.718 118.867 375.967 L 118.987 377.215 122.785 377.327 C 126.204 377.427,126.582 377.511,126.582 378.171 C 126.582 379.913,126.941 380.136,129.740 380.136 C 131.878 380.136,132.425 380.256,132.425 380.726 C 132.425 382.075,134.751 382.860,138.754 382.861 C 142.456 382.863,142.551 382.885,142.551 383.759 C 142.551 385.393,143.186 385.589,148.471 385.589 L 153.457 385.589 153.457 386.716 C 153.457 388.246,153.773 388.315,160.694 388.315 C 165.772 388.315,166.699 388.406,166.699 388.900 C 166.699 389.414,170.659 389.484,200.000 389.484 C 229.341 389.484,233.301 389.414,233.301 388.900 C 233.301 388.406,234.228 388.315,239.306 388.315 C 246.227 388.315,246.543 388.246,246.543 386.716 L 246.543 385.589 251.529 385.589 C 256.814 385.589,257.449 385.393,257.449 383.759 C 257.449 382.885,257.544 382.863,261.246 382.861 C 265.232 382.860,267.575 382.076,267.575 380.743 C 267.575 380.302,268.226 380.144,270.399 380.056 L 273.223 379.942 273.344 378.690 L 273.465 377.438 277.239 377.326 L 281.013 377.215 281.133 375.967 L 281.254 374.718 283.860 374.603 L 286.465 374.489 286.586 373.240 L 286.707 371.992 289.313 371.877 C 291.833 371.766,291.922 371.727,292.041 370.691 C 292.162 369.647,292.226 369.620,294.670 369.620 L 297.176 369.620 297.176 368.275 L 297.176 366.929 299.805 366.814 L 302.434 366.699 302.556 365.433 C 302.677 364.184,302.705 364.167,304.698 364.162 C 307.079 364.154,307.485 363.941,307.835 362.512 C 308.048 361.639,308.313 361.441,309.270 361.441 C 310.036 361.441,310.527 361.204,310.685 360.759 C 311.225 359.237,312.068 358.715,313.984 358.715 L 315.871 358.715 315.871 357.352 C 315.871 356.053,315.936 355.988,317.235 355.988 C 318.490 355.988,318.598 355.896,318.598 354.820 C 318.598 353.806,318.739 353.651,319.669 353.647 C 322.479 353.636,323.612 353.204,323.866 352.046 C 324.047 351.221,324.341 350.925,324.977 350.925 C 326.082 350.925,326.777 350.228,326.777 349.119 C 326.777 348.421,327.028 348.224,328.043 348.126 C 329.156 348.019,329.323 347.851,329.431 346.738 C 329.529 345.714,329.723 345.472,330.444 345.472 C 332.138 345.472,333.784 344.649,334.027 343.681 C 334.190 343.030,334.536 342.746,335.165 342.746 C 336.254 342.746,337.293 341.793,337.293 340.795 C 337.293 340.260,337.627 340.037,338.559 339.947 C 339.667 339.840,339.840 339.669,339.945 338.582 C 340.050 337.500,340.226 337.323,341.308 337.219 C 342.338 337.119,342.572 336.915,342.674 336.027 C 342.768 335.215,343.008 334.956,343.668 334.956 C 344.777 334.956,345.472 334.261,345.472 333.151 C 345.472 332.492,345.731 332.252,346.543 332.158 C 347.431 332.056,347.635 331.822,347.735 330.792 C 347.840 329.710,348.016 329.534,349.098 329.429 C 350.185 329.324,350.356 329.150,350.463 328.043 C 350.552 327.114,350.777 326.777,351.307 326.777 C 352.700 326.777,353.262 326.317,353.262 325.177 C 353.262 324.261,353.429 324.051,354.158 324.051 C 355.271 324.051,355.988 323.367,355.988 322.305 C 355.988 321.768,356.371 321.351,357.123 321.067 C 358.133 320.686,358.287 320.400,358.528 318.471 C 358.788 316.394,358.850 316.299,360.023 316.185 C 361.089 316.082,361.262 315.903,361.368 314.800 C 361.466 313.786,361.663 313.535,362.362 313.535 C 363.452 313.535,364.167 312.843,364.167 311.789 C 364.167 311.247,364.553 310.833,365.336 310.538 C 366.458 310.114,366.504 310.003,366.504 307.726 L 366.504 305.355 367.868 305.355 C 369.161 305.355,369.231 305.287,369.231 304.017 C 369.231 302.791,369.338 302.668,370.497 302.556 C 371.761 302.434,371.763 302.431,371.878 300.023 C 371.993 297.623,371.999 297.612,373.241 297.492 C 374.376 297.382,374.500 297.239,374.610 295.910 C 374.701 294.803,374.902 294.450,375.438 294.450 C 376.501 294.450,377.022 293.581,377.283 291.375 C 377.502 289.524,377.592 289.387,378.587 289.387 C 379.820 289.387,380.123 288.680,380.131 285.784 C 380.136 283.989,380.171 283.934,381.305 283.934 L 382.473 283.934 382.473 281.445 L 382.473 278.957 383.836 278.701 L 385.200 278.446 385.200 275.932 C 385.200 273.713,385.287 273.418,385.947 273.418 C 387.793 273.418,387.926 273.139,387.926 269.286 C 387.926 265.940,387.990 265.628,388.673 265.628 C 390.431 265.628,390.652 265.274,390.652 262.471 C 390.652 260.104,390.739 259.786,391.384 259.786 C 392.687 259.786,393.136 258.688,393.308 255.074 C 393.466 251.773,393.540 251.529,394.790 250.164 C 396.097 248.737,396.105 248.704,396.105 244.909 C 396.105 241.433,396.171 241.091,396.836 241.091 C 398.372 241.091,398.631 240.091,398.768 233.631 C 398.875 228.637,399.005 227.459,399.450 227.459 C 399.919 227.459,400.000 222.659,400.000 194.742 C 400.000 167.012,399.917 162.025,399.457 162.025 C 399.022 162.025,398.879 160.798,398.744 155.891 C 398.556 149.107,398.394 148.393,397.037 148.393 C 396.122 148.393,396.105 148.329,396.105 144.824 C 396.105 140.997,395.363 138.454,394.131 138.064 C 393.596 137.894,393.442 137.208,393.308 134.395 C 393.136 130.796,392.686 129.698,391.384 129.698 C 390.738 129.698,390.652 129.379,390.652 126.972 L 390.652 124.245 389.289 124.245 L 387.926 124.245 387.926 120.392 C 387.926 116.329,387.806 116.066,385.947 116.066 C 385.287 116.066,385.200 115.771,385.200 113.552 L 385.200 111.038 383.836 110.782 L 382.473 110.527 382.473 108.038 L 382.473 105.550 381.305 105.550 C 380.171 105.550,380.136 105.495,380.131 103.700 C 380.123 100.804,379.820 100.097,378.587 100.097 C 377.592 100.097,377.502 99.960,377.283 98.109 C 377.020 95.889,376.501 95.034,375.415 95.034 C 374.843 95.034,374.684 94.746,374.684 93.713 C 374.684 92.367,374.193 91.918,372.723 91.918 C 372.101 91.918,371.977 91.561,371.878 89.484 C 371.762 87.050,371.762 87.050,370.497 86.928 C 369.338 86.816,369.231 86.692,369.231 85.467 C 369.231 84.197,369.161 84.129,367.868 84.129 L 366.504 84.129 366.504 81.771 C 366.504 79.502,366.461 79.399,365.336 79.007 C 364.515 78.721,364.167 78.345,364.167 77.742 C 364.167 76.636,363.466 75.949,362.337 75.949 C 361.662 75.949,361.441 75.729,361.441 75.054 C 361.441 73.926,360.755 73.223,359.655 73.223 C 358.914 73.223,358.769 72.942,358.531 71.034 C 358.287 69.083,358.135 68.799,357.123 68.417 C 356.371 68.133,355.988 67.716,355.988 67.178 C 355.988 66.117,355.271 65.433,354.158 65.433 C 353.429 65.433,353.262 65.223,353.262 64.307 C 353.262 63.167,352.700 62.707,351.307 62.707 C 350.777 62.707,350.552 62.370,350.463 61.441 C 350.356 60.333,350.185 60.160,349.098 60.055 C 348.016 59.950,347.840 59.774,347.735 58.692 C 347.636 57.669,347.429 57.427,346.567 57.328 C 345.758 57.234,345.492 56.969,345.398 56.161 C 345.304 55.343,345.025 55.072,344.112 54.916 C 343.186 54.757,342.906 54.478,342.747 53.551 C 342.580 52.572,342.346 52.366,341.284 52.264 C 340.356 52.174,340.019 51.949,340.019 51.419 C 340.019 50.026,339.560 49.464,338.420 49.464 C 337.567 49.464,337.293 49.282,337.293 48.713 C 337.293 47.693,336.264 46.738,335.165 46.738 C 334.536 46.738,334.190 46.454,334.027 45.803 C 333.784 44.835,332.138 44.012,330.444 44.012 C 329.723 44.012,329.529 43.769,329.431 42.746 C 329.323 41.633,329.156 41.465,328.043 41.358 C 327.028 41.260,326.777 41.063,326.777 40.365 C 326.777 39.256,326.082 38.559,324.977 38.559 C 324.333 38.559,324.047 38.261,323.856 37.390 C 323.634 36.380,323.425 36.222,322.316 36.222 C 319.519 36.222,318.598 35.824,318.598 34.615 C 318.598 33.595,318.476 33.496,317.235 33.496 C 315.936 33.496,315.871 33.431,315.871 32.132 L 315.871 30.769 313.984 30.769 C 312.068 30.769,311.225 30.247,310.685 28.724 C 310.526 28.277,310.035 28.043,309.253 28.043 C 308.250 28.043,308.027 27.864,307.836 26.909 C 307.583 25.647,306.875 25.330,304.284 25.322 C 302.720 25.317,302.629 25.255,302.629 24.190 C 302.629 22.838,302.110 22.590,299.287 22.590 C 297.219 22.590,297.176 22.567,297.176 21.463 C 297.176 20.134,296.649 19.864,294.054 19.864 C 292.282 19.864,292.157 19.797,292.041 18.793 C 291.922 17.757,291.833 17.718,289.313 17.607 L 286.707 17.492 286.586 16.244 L 286.465 14.995 283.860 14.880 L 281.254 14.766 281.133 13.517 L 281.013 12.269 277.215 12.157 C 273.796 12.057,273.418 11.973,273.418 11.313 C 273.418 9.571,273.059 9.348,270.260 9.348 C 268.122 9.348,267.575 9.228,267.575 8.758 C 267.575 7.490,265.234 6.624,261.803 6.623 C 258.503 6.621,258.132 6.478,257.213 4.852 C 256.831 4.176,256.278 4.077,252.360 3.979 C 247.903 3.867,246.543 3.435,246.543 2.133 C 246.543 1.445,244.296 1.178,238.462 1.173 C 234.136 1.169,233.301 1.074,233.301 0.584 C 233.301 0.069,229.341 0.000,200.000 0.000 C 170.659 0.000,166.699 0.069,166.699 0.584 M200.718 59.239 C 200.946 59.844,201.520 60.423,202.014 60.547 C 202.502 60.669,203.136 61.217,203.422 61.763 C 203.708 62.309,204.367 62.968,204.885 63.226 C 205.403 63.485,206.035 64.114,206.290 64.626 C 206.545 65.137,207.294 65.782,207.953 66.060 C 208.613 66.337,209.153 66.831,209.153 67.157 C 209.153 67.483,209.635 68.000,210.224 68.305 C 210.813 68.611,211.741 69.360,212.287 69.971 C 212.832 70.581,214.223 71.870,215.378 72.833 C 218.053 75.067,220.150 76.975,221.693 78.578 C 222.362 79.275,223.149 79.844,223.441 79.844 C 223.733 79.844,224.140 80.286,224.345 80.825 C 224.550 81.364,225.119 81.958,225.610 82.145 C 226.100 82.331,226.745 82.938,227.042 83.494 C 227.340 84.050,227.906 84.607,228.300 84.733 C 228.694 84.858,229.471 85.555,230.025 86.282 C 230.580 87.009,231.326 87.696,231.684 87.810 C 232.041 87.923,232.508 88.409,232.720 88.889 C 232.932 89.369,233.532 89.972,234.052 90.229 C 234.572 90.486,235.198 91.071,235.443 91.529 C 235.688 91.987,236.314 92.573,236.834 92.831 C 237.354 93.090,237.834 93.677,237.900 94.137 C 237.975 94.656,238.457 95.126,239.169 95.374 C 239.822 95.602,240.480 96.204,240.696 96.774 C 240.905 97.324,241.521 97.943,242.064 98.150 C 242.607 98.356,243.221 98.970,243.427 99.513 C 243.634 100.056,244.261 100.675,244.821 100.888 C 245.381 101.101,245.933 101.631,246.046 102.065 C 246.160 102.500,246.764 103.119,247.389 103.442 C 248.013 103.765,248.688 104.459,248.887 104.985 C 249.087 105.510,249.520 105.940,249.850 105.940 C 250.180 105.940,250.780 106.483,251.184 107.147 C 251.588 107.811,252.462 108.685,253.126 109.089 C 253.790 109.493,254.333 110.093,254.333 110.423 C 254.333 110.752,254.774 111.190,255.314 111.395 C 255.853 111.600,256.463 112.212,256.670 112.756 C 256.876 113.299,257.490 113.912,258.033 114.119 C 258.576 114.325,259.190 114.939,259.396 115.482 C 259.603 116.025,260.205 116.634,260.734 116.835 C 261.263 117.037,261.960 117.712,262.283 118.337 C 262.606 118.962,263.226 119.566,263.660 119.679 C 264.095 119.793,264.615 120.319,264.816 120.848 C 265.017 121.377,265.603 121.915,266.117 122.045 C 266.632 122.174,267.256 122.725,267.504 123.270 C 267.752 123.815,268.398 124.429,268.939 124.635 C 269.479 124.840,270.125 125.455,270.373 126.000 C 270.622 126.545,271.202 127.085,271.663 127.201 C 272.123 127.316,272.804 127.926,273.176 128.555 C 273.547 129.184,274.060 129.703,274.316 129.709 C 274.572 129.715,275.758 130.636,276.952 131.754 C 278.146 132.873,280.321 134.839,281.785 136.125 C 283.248 137.410,285.601 139.610,287.014 141.013 C 288.426 142.417,289.892 143.684,290.272 143.829 C 290.652 143.973,291.098 144.456,291.262 144.900 C 291.427 145.345,291.992 145.922,292.519 146.182 C 293.045 146.442,293.644 147.034,293.850 147.499 C 294.055 147.963,294.633 148.529,295.134 148.757 C 295.634 148.985,296.341 149.690,296.704 150.322 C 297.067 150.954,297.742 151.567,298.205 151.683 C 298.687 151.804,299.220 152.394,299.454 153.065 C 299.736 153.874,300.119 154.236,300.695 154.236 C 301.259 154.236,301.668 154.605,301.961 155.381 C 302.198 156.011,302.764 156.620,303.219 156.734 C 303.673 156.848,304.289 157.399,304.589 157.958 C 304.888 158.518,305.619 159.227,306.212 159.534 C 306.806 159.841,307.397 160.512,307.526 161.025 C 307.660 161.559,308.141 162.053,308.650 162.181 C 309.153 162.307,309.753 162.916,310.027 163.578 C 310.320 164.286,310.800 164.752,311.235 164.752 C 311.642 164.752,312.219 165.258,312.557 165.914 C 312.888 166.553,313.659 167.334,314.271 167.651 C 314.882 167.967,315.476 168.581,315.590 169.016 C 315.703 169.450,316.236 169.973,316.774 170.177 C 317.312 170.382,317.865 170.905,318.003 171.340 C 318.141 171.775,318.721 172.355,319.291 172.629 C 319.861 172.902,320.533 173.538,320.785 174.043 C 321.036 174.547,321.655 175.166,322.160 175.418 C 322.664 175.669,323.297 176.333,323.565 176.893 C 323.833 177.452,324.450 178.010,324.934 178.131 C 325.447 178.260,326.002 178.848,326.262 179.537 C 326.555 180.313,326.978 180.721,327.490 180.721 C 327.972 180.721,328.457 181.143,328.761 181.830 C 329.031 182.440,329.760 183.131,330.382 183.365 C 331.003 183.600,331.601 184.131,331.709 184.546 C 331.818 184.960,332.332 185.493,332.853 185.731 C 333.373 185.968,333.998 186.599,334.242 187.134 C 334.486 187.668,334.998 188.205,335.380 188.326 C 335.762 188.448,337.094 189.516,338.339 190.701 C 339.585 191.885,341.206 193.323,341.942 193.895 C 342.677 194.468,344.342 195.997,345.642 197.293 C 346.941 198.589,348.327 199.773,348.722 199.924 C 349.118 200.075,349.524 200.515,349.625 200.901 C 349.726 201.287,350.410 201.928,351.146 202.324 C 351.881 202.720,352.483 203.287,352.483 203.585 C 352.483 203.882,353.000 204.422,353.631 204.785 C 354.263 205.147,354.962 205.844,355.184 206.332 C 355.407 206.821,356.032 207.389,356.573 207.595 C 357.113 207.801,357.738 208.369,357.961 208.857 C 358.183 209.346,358.882 210.043,359.514 210.405 C 360.145 210.768,360.662 211.331,360.662 211.656 C 360.662 211.982,361.196 212.525,361.847 212.862 C 362.499 213.199,363.210 213.863,363.426 214.337 C 363.642 214.811,364.335 215.495,364.967 215.858 C 366.611 216.801,366.535 218.279,364.790 219.309 C 364.061 219.738,363.357 220.519,363.226 221.042 C 363.078 221.633,362.610 222.089,361.991 222.244 C 361.443 222.382,360.835 222.913,360.641 223.425 C 360.446 223.938,359.868 224.516,359.355 224.711 C 358.843 224.906,358.311 225.513,358.174 226.061 C 358.017 226.685,357.563 227.148,356.957 227.300 C 356.426 227.433,355.769 228.004,355.499 228.568 C 355.229 229.132,354.546 229.815,353.982 230.085 C 353.418 230.356,352.851 230.997,352.722 231.510 C 352.577 232.088,352.041 232.600,351.317 232.852 C 350.673 233.077,350.146 233.541,350.146 233.883 C 350.146 234.225,349.650 234.790,349.044 235.138 C 348.438 235.486,347.655 236.270,347.305 236.880 C 346.955 237.490,346.302 238.125,345.855 238.291 C 345.407 238.456,344.828 239.022,344.568 239.549 C 344.308 240.076,343.731 240.668,343.286 240.865 C 342.841 241.062,342.290 241.719,342.061 242.325 C 341.797 243.026,341.363 243.427,340.871 243.427 C 340.399 243.427,339.782 243.960,339.292 244.791 C 338.850 245.540,338.236 246.154,337.929 246.154 C 337.622 246.154,337.008 246.767,336.566 247.517 C 336.123 248.267,335.502 248.880,335.185 248.880 C 334.868 248.880,334.379 249.361,334.098 249.948 C 333.816 250.535,333.106 251.246,332.518 251.527 C 331.931 251.808,331.451 252.298,331.451 252.615 C 331.451 252.932,330.837 253.553,330.088 253.995 C 329.338 254.437,328.724 255.051,328.724 255.358 C 328.724 255.666,328.111 256.279,327.361 256.722 C 326.611 257.164,325.998 257.780,325.998 258.090 C 325.998 258.400,325.481 258.950,324.850 259.313 C 324.218 259.675,323.519 260.371,323.297 260.860 C 323.074 261.349,322.466 261.911,321.947 262.108 C 321.427 262.306,320.891 262.815,320.756 263.241 C 320.621 263.666,319.905 264.371,319.165 264.808 C 318.425 265.244,317.819 265.866,317.819 266.189 C 317.819 266.512,317.327 267.031,316.726 267.342 C 316.125 267.652,315.428 268.358,315.177 268.909 C 314.925 269.461,314.447 269.912,314.114 269.912 C 313.781 269.912,313.146 270.526,312.704 271.276 C 312.262 272.025,311.646 272.639,311.336 272.639 C 311.026 272.639,310.475 273.155,310.113 273.787 C 309.750 274.419,309.066 275.112,308.592 275.328 C 308.118 275.544,307.454 276.254,307.117 276.906 C 306.780 277.558,306.237 278.092,305.912 278.092 C 305.586 278.092,305.035 278.587,304.687 279.194 C 304.339 279.800,303.558 280.580,302.952 280.928 C 302.346 281.276,301.850 281.832,301.850 282.163 C 301.850 282.494,301.705 282.765,301.527 282.765 C 301.021 282.765,293.671 290.003,293.671 290.501 C 293.671 290.745,293.482 290.944,293.251 290.944 C 293.020 290.944,292.137 291.646,291.288 292.502 C 290.440 293.359,289.621 294.061,289.469 294.063 C 289.316 294.064,288.892 294.592,288.526 295.235 C 288.160 295.878,287.382 296.586,286.797 296.809 C 286.213 297.031,285.494 297.555,285.201 297.974 C 284.525 298.939,283.849 298.938,282.973 297.970 C 282.593 297.550,281.706 297.016,281.003 296.784 C 280.157 296.504,279.644 296.039,279.485 295.406 C 279.353 294.880,279.074 294.450,278.865 294.450 C 278.656 294.450,277.686 293.661,276.708 292.697 C 275.730 291.733,274.768 290.944,274.571 290.944 C 274.373 290.944,274.105 290.522,273.976 290.005 C 273.839 289.460,273.361 288.970,272.839 288.838 C 272.295 288.702,271.776 288.148,271.529 287.441 C 271.257 286.660,270.859 286.271,270.332 286.271 C 268.334 286.271,268.143 282.733,270.101 281.989 C 270.645 281.782,271.294 281.167,271.542 280.622 C 271.790 280.077,272.386 279.532,272.867 279.412 C 273.367 279.286,273.842 278.785,273.979 278.239 C 274.111 277.714,274.654 277.119,275.186 276.917 C 275.718 276.715,276.350 276.119,276.589 275.594 C 276.828 275.069,277.512 274.437,278.108 274.190 C 278.704 273.943,279.293 273.340,279.416 272.850 C 279.540 272.355,280.146 271.749,280.779 271.486 C 281.436 271.214,282.018 270.619,282.153 270.080 C 282.286 269.551,282.767 269.050,283.262 268.926 C 283.742 268.805,284.434 268.188,284.798 267.553 C 285.162 266.919,285.883 266.239,286.400 266.042 C 286.917 265.846,287.449 265.251,287.582 264.722 C 287.733 264.122,288.254 263.609,288.964 263.361 C 289.699 263.105,290.149 262.648,290.232 262.072 C 290.310 261.528,290.704 261.099,291.241 260.970 C 291.726 260.854,292.468 260.190,292.891 259.494 C 293.314 258.797,293.915 258.228,294.228 258.228 C 294.541 258.228,295.025 257.751,295.305 257.168 C 295.584 256.585,296.224 255.904,296.726 255.654 C 297.228 255.403,297.970 254.653,298.375 253.987 C 298.781 253.320,299.382 252.775,299.712 252.775 C 300.042 252.775,300.475 252.345,300.675 251.820 C 300.874 251.295,301.571 250.589,302.223 250.252 C 302.875 249.915,303.408 249.375,303.408 249.052 C 303.408 248.729,304.021 248.103,304.771 247.660 C 305.521 247.218,306.134 246.604,306.134 246.297 C 306.134 245.990,306.729 245.387,307.456 244.958 C 308.183 244.530,308.871 243.821,308.985 243.385 C 309.099 242.948,309.563 242.494,310.016 242.375 C 310.469 242.257,311.104 241.649,311.427 241.024 C 311.750 240.399,312.402 239.712,312.876 239.496 C 313.350 239.280,314.035 238.586,314.397 237.954 C 314.760 237.323,315.318 236.806,315.637 236.806 C 315.957 236.806,316.449 236.326,316.730 235.739 C 317.012 235.152,317.722 234.441,318.309 234.160 C 318.896 233.878,319.377 233.389,319.377 233.072 C 319.377 232.755,319.990 232.134,320.740 231.691 C 321.490 231.249,322.103 230.636,322.103 230.328 C 322.103 230.021,322.717 229.407,323.466 228.965 C 324.216 228.523,324.830 227.907,324.830 227.597 C 324.830 227.287,325.346 226.736,325.978 226.374 C 326.609 226.011,327.308 225.315,327.531 224.826 C 327.754 224.338,328.378 223.769,328.919 223.564 C 329.460 223.358,330.095 222.768,330.330 222.251 C 330.565 221.735,331.177 221.122,331.689 220.889 C 332.200 220.655,332.619 220.206,332.619 219.890 C 332.619 218.940,331.749 217.332,331.234 217.332 C 330.969 217.332,330.234 216.742,329.601 216.020 C 328.967 215.299,328.262 214.642,328.033 214.560 C 327.648 214.422,323.685 210.863,319.519 206.913 C 318.559 206.003,317.620 205.258,317.433 205.258 C 317.246 205.258,316.981 204.906,316.844 204.475 C 316.707 204.044,316.082 203.426,315.454 203.102 C 314.827 202.777,314.314 202.238,314.314 201.904 C 314.314 201.569,313.801 201.102,313.174 200.865 C 312.547 200.629,311.848 200.028,311.621 199.530 C 311.395 199.033,310.764 198.423,310.220 198.175 C 309.677 197.927,309.133 197.331,309.012 196.851 C 308.892 196.370,308.305 195.775,307.709 195.528 C 307.113 195.281,306.429 194.649,306.190 194.124 C 305.950 193.598,305.305 192.998,304.756 192.789 C 304.182 192.570,303.585 191.913,303.350 191.239 C 303.112 190.556,302.666 190.068,302.279 190.068 C 301.431 190.068,300.682 189.320,300.682 188.475 C 300.682 188.098,300.268 187.712,299.715 187.573 C 299.183 187.440,298.484 186.820,298.161 186.195 C 297.838 185.571,297.220 184.948,296.787 184.810 C 296.354 184.673,295.740 184.059,295.424 183.447 C 295.107 182.835,294.494 182.221,294.060 182.084 C 293.627 181.946,293.019 181.343,292.709 180.742 C 292.398 180.142,291.789 179.558,291.354 179.445 C 290.920 179.331,290.390 178.780,290.177 178.220 C 289.964 177.659,289.346 177.032,288.802 176.826 C 288.259 176.619,287.646 176.006,287.439 175.463 C 287.233 174.919,286.619 174.306,286.076 174.099 C 285.533 173.893,284.919 173.279,284.713 172.736 C 284.506 172.193,283.891 171.579,283.346 171.372 C 282.801 171.164,282.221 170.632,282.057 170.189 C 281.893 169.746,281.328 169.169,280.802 168.906 C 280.275 168.644,279.625 167.971,279.356 167.411 C 279.088 166.851,278.448 166.288,277.935 166.159 C 277.357 166.014,276.845 165.478,276.593 164.754 C 276.311 163.945,275.927 163.583,275.352 163.583 C 274.787 163.583,274.379 163.214,274.086 162.438 C 273.838 161.779,273.276 161.198,272.767 161.070 C 272.279 160.947,271.645 160.400,271.359 159.853 C 271.073 159.307,270.411 158.647,269.888 158.386 C 269.366 158.126,268.719 157.455,268.451 156.895 C 268.182 156.335,267.555 155.775,267.057 155.650 C 266.559 155.525,265.947 154.975,265.698 154.429 C 265.449 153.882,264.937 153.324,264.560 153.189 C 264.184 153.053,263.348 152.401,262.704 151.739 C 262.060 151.077,260.592 149.747,259.443 148.783 C 258.294 147.819,256.553 146.285,255.574 145.375 C 254.594 144.464,253.651 143.720,253.479 143.720 C 253.306 143.720,253.165 143.486,253.165 143.201 C 253.165 142.916,252.723 142.447,252.184 142.158 C 251.645 141.869,250.760 141.051,250.217 140.340 C 249.674 139.628,249.006 139.046,248.731 139.046 C 248.457 139.046,247.988 138.588,247.688 138.029 C 247.389 137.469,246.743 136.859,246.252 136.672 C 245.762 136.486,245.193 135.892,244.988 135.353 C 244.783 134.813,244.437 134.372,244.218 134.372 C 244.000 134.372,243.021 133.583,242.044 132.619 C 241.066 131.655,240.104 130.867,239.907 130.867 C 239.709 130.867,239.446 130.463,239.322 129.970 C 239.194 129.458,238.619 128.892,237.985 128.653 C 237.270 128.383,236.826 127.903,236.742 127.310 C 236.655 126.694,236.314 126.345,235.715 126.260 C 235.158 126.181,234.591 125.658,234.220 124.880 C 233.891 124.191,233.112 123.401,232.488 123.124 C 231.810 122.824,231.353 122.325,231.353 121.883 C 231.353 121.417,230.989 121.053,230.366 120.897 C 229.823 120.760,229.124 120.156,228.812 119.554 C 228.501 118.951,227.893 118.346,227.461 118.209 C 227.030 118.072,226.447 117.523,226.167 116.988 C 225.887 116.454,225.234 115.805,224.716 115.547 C 224.198 115.289,223.563 114.653,223.304 114.135 C 223.046 113.617,222.405 112.968,221.881 112.693 C 221.357 112.418,220.819 111.763,220.687 111.236 C 220.537 110.636,220.120 110.231,219.575 110.154 C 219.078 110.083,218.478 109.559,218.180 108.936 C 217.893 108.335,217.232 107.682,216.711 107.484 C 216.191 107.286,215.572 106.701,215.337 106.185 C 215.102 105.669,214.487 105.054,213.971 104.819 C 213.454 104.584,212.867 103.956,212.664 103.424 C 212.457 102.879,211.863 102.347,211.305 102.207 C 210.700 102.056,210.224 101.597,210.081 101.029 C 209.953 100.518,209.390 99.880,208.830 99.612 C 208.270 99.343,207.602 98.702,207.345 98.186 C 207.088 97.671,206.338 97.022,205.679 96.744 C 204.960 96.442,204.479 95.955,204.479 95.528 C 204.479 95.096,204.025 94.644,203.328 94.381 C 202.612 94.111,202.084 93.573,201.929 92.958 C 201.772 92.333,201.263 91.824,200.543 91.573 C 199.918 91.355,199.307 90.919,199.186 90.604 C 199.003 90.127,198.840 90.157,198.217 90.780 C 197.805 91.192,197.109 91.529,196.669 91.529 C 196.131 91.529,195.737 91.911,195.462 92.700 C 195.209 93.423,194.697 93.960,194.120 94.105 C 193.606 94.234,192.965 94.800,192.695 95.365 C 192.424 95.929,191.723 96.620,191.136 96.902 C 190.549 97.183,190.068 97.673,190.068 97.990 C 190.068 98.306,189.474 98.917,188.747 99.345 C 188.020 99.774,187.332 100.482,187.218 100.919 C 187.104 101.356,186.653 101.807,186.216 101.921 C 185.779 102.035,185.071 102.723,184.642 103.450 C 184.214 104.177,183.611 104.771,183.304 104.771 C 182.996 104.771,182.383 105.385,181.941 106.134 C 181.498 106.884,180.872 107.498,180.549 107.498 C 180.226 107.498,179.686 108.031,179.349 108.683 C 179.012 109.335,178.306 110.031,177.781 110.231 C 177.255 110.431,176.826 110.867,176.826 111.201 C 176.826 111.535,176.212 112.170,175.463 112.612 C 174.713 113.055,174.099 113.668,174.099 113.976 C 174.099 114.283,173.494 114.892,172.753 115.329 C 172.013 115.765,171.300 116.463,171.168 116.878 C 171.036 117.293,170.437 117.887,169.837 118.197 C 169.237 118.507,168.652 119.118,168.538 119.554 C 168.424 119.990,168.008 120.471,167.612 120.622 C 166.706 120.970,163.437 124.217,163.095 125.110 C 162.953 125.479,162.429 125.883,161.930 126.008 C 161.431 126.133,160.854 126.620,160.648 127.090 C 160.442 127.561,159.896 128.111,159.436 128.313 C 158.975 128.515,158.312 129.166,157.961 129.760 C 157.611 130.353,156.804 131.146,156.169 131.521 C 155.534 131.896,155.015 132.422,155.015 132.690 C 155.015 132.957,154.669 133.361,154.247 133.587 C 153.825 133.813,151.747 135.703,149.628 137.787 C 147.510 139.872,143.605 143.592,140.951 146.054 C 136.245 150.419,131.940 154.496,128.917 157.449 C 128.095 158.252,127.233 158.909,127.002 158.909 C 126.771 158.909,126.582 159.115,126.582 159.366 C 126.582 160.098,125.356 161.246,124.574 161.246 C 124.112 161.246,123.856 161.528,123.856 162.038 C 123.856 162.529,123.343 163.133,122.510 163.625 C 121.770 164.061,121.063 164.738,120.939 165.128 C 120.815 165.517,120.209 166.045,119.593 166.301 C 118.975 166.557,118.370 167.166,118.247 167.657 C 118.121 168.160,117.513 168.760,116.850 169.034 C 116.205 169.301,115.677 169.768,115.677 170.070 C 115.677 170.373,115.063 170.982,114.314 171.425 C 113.564 171.867,112.950 172.480,112.950 172.788 C 112.950 173.095,112.356 173.697,111.629 174.126 C 110.902 174.555,110.215 175.260,110.102 175.693 C 109.988 176.126,109.356 176.684,108.697 176.933 C 108.037 177.182,107.498 177.663,107.498 178.002 C 107.498 178.791,106.737 179.552,105.947 179.552 C 105.608 179.552,105.136 180.070,104.897 180.703 C 104.628 181.415,104.089 181.948,103.482 182.100 C 102.912 182.243,102.313 182.800,102.052 183.430 C 101.805 184.027,101.173 184.710,100.647 184.950 C 100.122 185.189,99.527 185.820,99.324 186.352 C 99.122 186.885,98.527 187.428,98.003 187.559 C 97.424 187.705,96.955 188.174,96.810 188.752 C 96.678 189.277,96.135 189.872,95.603 190.074 C 95.070 190.276,94.439 190.872,94.200 191.397 C 93.960 191.923,93.277 192.554,92.681 192.801 C 92.063 193.057,91.493 193.661,91.357 194.205 C 91.225 194.730,90.698 195.318,90.186 195.513 C 89.674 195.708,89.020 196.359,88.733 196.960 C 88.446 197.561,87.835 198.106,87.376 198.172 C 86.894 198.241,86.350 198.754,86.088 199.387 C 85.838 199.990,85.204 200.679,84.679 200.918 C 84.153 201.158,83.562 201.779,83.364 202.299 C 83.166 202.819,82.642 203.359,82.199 203.500 C 81.756 203.640,81.129 204.266,80.807 204.891 C 80.484 205.515,79.800 206.131,79.287 206.260 C 78.725 206.401,78.257 206.878,78.112 207.459 C 77.962 208.055,77.441 208.573,76.750 208.814 C 76.092 209.044,75.539 209.574,75.406 210.103 C 75.282 210.597,74.692 211.204,74.095 211.451 C 73.497 211.699,72.838 212.290,72.629 212.765 C 72.420 213.240,71.767 213.858,71.178 214.138 C 70.589 214.419,70.107 214.907,70.107 215.224 C 70.107 215.541,69.494 216.162,68.744 216.605 C 67.994 217.047,67.381 217.561,67.381 217.747 C 67.381 218.145,70.585 221.888,71.798 222.906 C 74.791 225.418,76.624 227.035,77.731 228.140 C 78.429 228.836,79.146 229.407,79.325 229.407 C 79.503 229.408,80.000 229.933,80.428 230.574 C 80.857 231.216,81.414 231.741,81.666 231.742 C 81.918 231.742,82.532 232.247,83.029 232.863 C 83.527 233.479,84.316 234.180,84.784 234.421 C 85.251 234.661,85.736 235.181,85.861 235.575 C 85.986 235.969,86.535 236.531,87.081 236.823 C 87.626 237.115,88.362 237.844,88.716 238.443 C 89.070 239.042,89.591 239.533,89.873 239.533 C 90.156 239.533,90.748 240.146,91.191 240.896 C 91.633 241.646,92.307 242.259,92.688 242.259 C 93.091 242.259,93.584 242.748,93.866 243.427 C 94.132 244.070,94.536 244.596,94.764 244.596 C 95.320 244.596,96.981 246.181,96.981 246.711 C 96.981 246.943,97.490 247.357,98.112 247.632 C 98.733 247.908,99.345 248.544,99.471 249.048 C 99.603 249.572,100.089 250.060,100.611 250.191 C 101.112 250.317,101.725 250.865,101.973 251.410 C 102.222 251.955,102.868 252.570,103.410 252.776 C 103.952 252.982,104.565 253.595,104.771 254.138 C 104.978 254.681,105.591 255.295,106.134 255.501 C 106.678 255.708,107.296 256.335,107.509 256.895 C 107.722 257.455,108.239 258.003,108.657 258.113 C 109.075 258.222,109.768 258.906,110.197 259.633 C 110.626 260.360,111.240 260.954,111.562 260.954 C 111.883 260.954,112.382 261.404,112.670 261.953 C 112.957 262.502,113.620 263.164,114.143 263.425 C 114.665 263.685,115.321 264.375,115.601 264.958 C 115.880 265.541,116.368 266.018,116.685 266.018 C 117.002 266.018,117.623 266.631,118.065 267.381 C 118.556 268.212,119.172 268.744,119.644 268.744 C 120.147 268.744,120.573 269.154,120.859 269.912 C 121.102 270.555,121.555 271.081,121.866 271.081 C 122.578 271.081,123.856 272.215,123.856 272.847 C 123.856 273.109,124.376 273.539,125.011 273.802 C 125.647 274.065,126.260 274.568,126.374 274.920 C 126.488 275.272,127.151 275.956,127.848 276.440 C 133.777 280.562,136.432 286.271,132.419 286.271 C 132.010 286.271,131.631 286.664,131.487 287.237 C 131.354 287.769,130.734 288.468,130.110 288.791 C 129.485 289.114,128.862 289.732,128.724 290.166 C 128.587 290.599,127.961 291.219,127.334 291.543 C 126.706 291.867,126.193 292.397,126.193 292.720 C 126.193 293.043,125.598 293.659,124.871 294.087 C 124.145 294.516,123.461 295.209,123.351 295.627 C 123.242 296.046,122.653 296.562,122.044 296.774 C 121.434 296.987,120.431 297.431,119.816 297.762 C 118.442 298.500,118.396 298.470,111.883 292.467 C 110.975 291.629,110.084 290.944,109.904 290.944 C 109.724 290.944,109.332 290.487,109.032 289.927 C 108.733 289.368,108.087 288.758,107.596 288.571 C 107.106 288.385,106.545 287.813,106.351 287.301 C 106.156 286.788,105.576 286.264,105.061 286.135 C 104.547 286.006,103.932 285.474,103.695 284.954 C 103.458 284.433,102.726 283.690,102.070 283.302 C 101.413 282.915,100.876 282.366,100.876 282.084 C 100.876 281.802,100.282 281.220,99.555 280.791 C 98.828 280.362,98.144 279.669,98.035 279.251 C 97.925 278.833,97.396 278.323,96.858 278.119 C 96.320 277.914,95.765 277.384,95.624 276.941 C 95.483 276.498,94.847 275.866,94.211 275.537 C 93.574 275.208,92.890 274.509,92.690 273.983 C 92.490 273.458,92.054 273.028,91.720 273.028 C 91.386 273.028,90.756 272.423,90.319 271.682 C 89.882 270.942,89.186 270.229,88.772 270.098 C 88.359 269.966,87.791 269.422,87.511 268.887 C 87.231 268.353,86.574 267.704,86.052 267.446 C 85.530 267.188,84.931 266.591,84.722 266.119 C 84.514 265.647,83.856 265.059,83.262 264.813 C 82.667 264.567,82.181 264.071,82.181 263.711 C 82.181 262.873,81.430 262.123,80.593 262.123 C 80.233 262.123,79.737 261.636,79.491 261.042 C 79.245 260.447,78.657 259.790,78.185 259.581 C 77.713 259.372,77.121 258.785,76.870 258.276 C 76.618 257.767,75.870 257.088,75.207 256.767 C 74.479 256.414,74.002 255.886,74.002 255.433 C 74.002 254.954,73.591 254.539,72.869 254.287 C 72.183 254.048,71.645 253.526,71.504 252.964 C 71.376 252.454,70.790 251.807,70.202 251.528 C 69.614 251.248,68.973 250.655,68.778 250.211 C 68.582 249.767,67.925 249.183,67.316 248.914 C 66.708 248.645,66.108 248.017,65.983 247.518 C 65.851 246.992,65.363 246.512,64.822 246.377 C 64.309 246.248,63.619 245.619,63.288 244.980 C 62.957 244.340,62.437 243.817,62.133 243.817 C 61.828 243.817,61.110 243.204,60.538 242.454 C 59.966 241.704,59.313 241.091,59.086 241.091 C 58.858 241.091,58.123 240.521,57.452 239.825 C 56.781 239.129,55.717 238.175,55.088 237.705 C 54.458 237.235,52.872 235.833,51.563 234.589 C 47.413 230.646,45.980 229.406,45.575 229.406 C 45.358 229.406,45.180 229.137,45.180 228.809 C 45.180 228.480,44.574 227.854,43.834 227.417 C 43.094 226.980,42.383 226.290,42.253 225.883 C 42.124 225.475,41.547 224.918,40.970 224.643 C 40.394 224.369,39.754 223.762,39.549 223.295 C 39.343 222.828,38.764 222.259,38.263 222.030 C 37.761 221.802,37.111 221.042,36.818 220.342 C 36.526 219.642,35.925 218.742,35.483 218.342 L 34.680 217.615 35.743 216.285 C 36.699 215.089,48.297 203.289,50.095 201.683 C 50.498 201.323,51.033 200.797,51.283 200.514 C 52.047 199.653,76.823 175.782,81.050 171.836 C 81.351 171.555,82.529 170.372,83.667 169.207 C 84.806 168.042,85.947 167.089,86.201 167.089 C 86.456 167.089,86.894 166.571,87.174 165.939 C 87.454 165.306,87.991 164.691,88.367 164.572 C 88.743 164.452,89.439 163.830,89.912 163.190 C 90.386 162.549,91.013 162.025,91.307 162.025 C 91.601 162.025,92.214 161.394,92.669 160.623 C 93.124 159.852,93.842 159.130,94.265 159.020 C 94.688 158.909,95.034 158.634,95.034 158.408 C 95.034 157.731,96.275 156.573,97.000 156.573 C 97.395 156.573,97.777 156.171,97.919 155.606 C 98.052 155.074,98.685 154.369,99.324 154.038 C 99.964 153.707,100.487 153.183,100.487 152.872 C 100.487 152.562,101.010 152.038,101.649 151.707 C 102.288 151.377,103.075 150.596,103.397 149.972 C 103.720 149.348,104.338 148.726,104.771 148.588 C 105.204 148.451,105.818 147.837,106.134 147.225 C 106.458 146.598,107.095 146.057,107.591 145.987 C 108.166 145.905,108.515 145.550,108.599 144.963 C 108.669 144.469,109.150 143.872,109.668 143.636 C 110.185 143.400,110.955 142.621,111.377 141.905 C 111.800 141.189,112.397 140.604,112.704 140.604 C 113.011 140.604,113.625 139.990,114.067 139.241 C 114.544 138.433,115.177 137.877,115.621 137.877 C 116.104 137.877,116.462 137.516,116.626 136.863 C 116.787 136.222,117.304 135.689,118.031 135.415 C 118.684 135.168,119.182 134.694,119.182 134.318 C 119.182 133.954,119.786 133.283,120.525 132.826 C 121.264 132.370,121.981 131.640,122.120 131.204 C 122.258 130.768,122.844 130.246,123.421 130.045 C 124.033 129.832,124.649 129.209,124.896 128.553 C 125.167 127.836,125.650 127.380,126.228 127.297 C 126.787 127.217,127.215 126.829,127.345 126.285 C 127.461 125.801,128.126 125.058,128.822 124.636 C 129.518 124.213,130.088 123.606,130.088 123.287 C 130.088 122.968,130.621 122.432,131.273 122.095 C 131.925 121.757,132.621 121.052,132.821 120.527 C 133.046 119.936,133.493 119.572,133.993 119.572 C 134.539 119.572,134.932 119.197,135.204 118.419 C 135.425 117.785,135.926 117.165,136.317 117.041 C 136.709 116.916,137.492 116.208,138.057 115.467 C 138.623 114.725,139.349 114.119,139.670 114.119 C 139.992 114.119,140.438 113.592,140.663 112.948 C 140.922 112.205,141.426 111.688,142.044 111.533 C 142.648 111.381,143.165 110.864,143.407 110.170 C 143.641 109.500,144.167 108.958,144.718 108.820 C 145.225 108.693,145.745 108.255,145.874 107.848 C 146.003 107.441,146.704 106.654,147.431 106.100 C 148.158 105.545,148.854 104.771,148.978 104.380 C 149.103 103.988,149.723 103.487,150.357 103.266 C 151.141 102.993,151.509 102.603,151.509 102.045 C 151.509 101.490,151.875 101.098,152.642 100.830 C 153.335 100.589,153.866 100.070,154.011 99.493 C 154.157 98.912,154.629 98.456,155.244 98.301 C 155.795 98.163,156.399 97.632,156.597 97.111 C 156.794 96.594,157.474 95.872,158.108 95.508 C 158.743 95.144,159.360 94.453,159.481 93.973 C 159.611 93.455,160.111 92.996,160.706 92.846 C 161.327 92.690,161.854 92.186,162.083 91.531 C 162.287 90.946,162.886 90.271,163.414 90.030 C 163.942 89.790,164.569 89.164,164.808 88.640 C 165.047 88.115,165.745 87.478,166.360 87.223 C 167.055 86.936,167.478 86.471,167.478 85.995 C 167.478 85.505,167.891 85.073,168.624 84.797 C 169.295 84.543,169.864 83.988,169.998 83.454 C 170.123 82.953,170.651 82.382,171.170 82.184 C 171.690 81.987,172.390 81.292,172.727 80.640 C 173.065 79.988,173.607 79.455,173.933 79.455 C 174.258 79.455,174.824 78.933,175.189 78.294 C 175.553 77.656,176.319 76.940,176.889 76.703 C 177.460 76.466,178.032 75.852,178.161 75.338 C 178.298 74.791,178.777 74.308,179.314 74.173 C 179.820 74.046,180.431 73.509,180.672 72.980 C 180.913 72.451,181.627 71.721,182.260 71.359 C 182.892 70.996,183.505 70.320,183.621 69.858 C 183.740 69.383,184.328 68.844,184.971 68.619 C 185.716 68.359,186.155 67.908,186.240 67.314 C 186.325 66.710,186.671 66.364,187.276 66.278 C 187.869 66.194,188.321 65.755,188.580 65.010 C 188.825 64.308,189.341 63.779,189.926 63.633 C 190.448 63.502,191.139 62.882,191.464 62.255 C 191.788 61.628,192.478 60.954,192.997 60.757 C 193.519 60.558,194.052 59.955,194.190 59.407 C 194.446 58.388,195.011 58.135,197.468 57.941 C 199.563 57.774,200.272 58.058,200.718 59.239 M199.603 105.550 C 199.884 105.550,200.620 106.120,201.237 106.816 C 201.855 107.512,202.969 108.551,203.712 109.124 C 205.030 110.140,208.950 113.732,211.295 116.070 C 211.938 116.711,212.654 117.235,212.888 117.235 C 213.121 117.235,213.513 117.675,213.758 118.214 C 214.004 118.753,214.642 119.393,215.177 119.636 C 215.711 119.880,216.239 120.365,216.350 120.715 C 216.461 121.064,217.089 121.668,217.746 122.056 C 218.403 122.444,219.128 123.174,219.358 123.679 C 219.588 124.183,220.264 124.766,220.860 124.974 C 221.553 125.215,221.990 125.679,222.072 126.259 C 222.158 126.869,222.503 127.209,223.123 127.297 C 223.719 127.381,224.197 127.826,224.471 128.553 C 224.724 129.225,225.335 129.832,225.985 130.059 C 226.584 130.267,227.240 130.877,227.444 131.413 C 227.648 131.949,228.348 132.663,229.000 133.000 C 229.682 133.353,230.185 133.923,230.185 134.344 C 230.185 134.804,230.613 135.224,231.340 135.477 C 232.064 135.730,232.585 136.239,232.737 136.845 C 232.883 137.426,233.350 137.903,233.912 138.044 C 234.425 138.173,235.109 138.789,235.432 139.413 C 235.755 140.038,236.381 140.664,236.824 140.804 C 237.267 140.945,237.792 141.485,237.989 142.005 C 238.187 142.525,238.771 143.143,239.287 143.378 C 239.803 143.613,240.418 144.228,240.653 144.744 C 240.889 145.260,241.524 145.851,242.066 146.057 C 242.608 146.263,243.214 146.859,243.413 147.381 C 243.611 147.903,244.265 148.565,244.866 148.852 C 245.467 149.139,246.013 149.750,246.079 150.209 C 246.148 150.691,246.661 151.235,247.294 151.497 C 247.897 151.747,248.586 152.381,248.825 152.907 C 249.064 153.432,249.685 154.024,250.205 154.221 C 250.725 154.419,251.266 154.943,251.406 155.386 C 251.547 155.829,252.183 156.461,252.819 156.790 C 253.456 157.119,254.140 157.819,254.340 158.344 C 254.540 158.869,254.973 159.299,255.303 159.299 C 255.633 159.299,256.234 159.844,256.639 160.511 C 257.045 161.177,257.787 161.925,258.289 162.173 C 258.791 162.421,259.373 163.011,259.583 163.486 C 259.793 163.960,260.444 164.515,261.030 164.720 C 261.685 164.948,262.192 165.476,262.346 166.090 C 262.493 166.674,262.873 167.089,263.262 167.089 C 263.627 167.089,264.473 167.658,265.141 168.354 C 265.809 169.051,267.095 170.234,268.000 170.983 C 268.905 171.733,270.313 172.960,271.129 173.710 C 273.670 176.043,278.832 180.838,280.668 182.571 C 281.632 183.481,282.587 184.226,282.788 184.226 C 282.990 184.226,283.155 184.497,283.155 184.828 C 283.155 185.160,283.672 185.727,284.303 186.090 C 284.935 186.452,285.634 187.148,285.856 187.637 C 286.079 188.126,286.704 188.694,287.244 188.900 C 287.785 189.105,288.410 189.673,288.633 190.162 C 288.855 190.651,289.554 191.347,290.186 191.710 C 290.817 192.072,291.334 192.623,291.334 192.933 C 291.334 193.243,291.947 193.859,292.697 194.301 C 293.447 194.743,294.060 195.383,294.060 195.723 C 294.060 196.062,294.570 196.518,295.192 196.735 C 295.854 196.966,296.514 197.590,296.783 198.239 C 297.044 198.869,297.646 199.449,298.177 199.583 C 298.733 199.722,299.208 200.199,299.348 200.759 C 299.492 201.332,300.023 201.854,300.704 202.091 C 301.395 202.332,301.915 202.851,302.065 203.447 C 302.204 204.002,302.769 204.604,303.391 204.862 C 303.988 205.109,304.671 205.741,304.911 206.266 C 305.150 206.791,305.781 207.387,306.313 207.589 C 306.846 207.791,307.389 208.386,307.520 208.911 C 307.658 209.457,308.133 209.958,308.633 210.083 C 309.113 210.204,309.700 210.728,309.937 211.249 C 310.174 211.769,310.894 212.506,311.537 212.885 C 312.180 213.265,312.798 213.942,312.910 214.389 C 313.022 214.836,313.632 215.398,314.265 215.637 C 315.005 215.916,315.462 216.394,315.546 216.978 C 315.631 217.568,316.016 217.964,316.647 218.112 C 318.589 218.567,318.402 222.395,316.437 222.395 C 316.115 222.395,315.679 222.850,315.468 223.407 C 315.256 223.963,314.728 224.511,314.293 224.625 C 313.859 224.738,313.239 225.342,312.916 225.967 C 312.593 226.592,311.896 227.267,311.367 227.468 C 310.838 227.670,310.235 228.280,310.028 228.825 C 309.821 229.370,309.288 229.951,308.845 230.114 C 308.402 230.278,307.825 230.843,307.562 231.370 C 307.300 231.896,306.619 232.551,306.049 232.824 C 305.478 233.098,304.902 233.669,304.767 234.094 C 304.632 234.520,304.020 235.126,303.408 235.443 C 302.796 235.760,302.182 236.373,302.045 236.806 C 301.907 237.239,301.281 237.859,300.654 238.184 C 300.027 238.508,299.513 239.038,299.513 239.361 C 299.513 239.684,298.919 240.299,298.192 240.728 C 297.465 241.157,296.781 241.850,296.672 242.268 C 296.562 242.686,296.014 243.203,295.454 243.416 C 294.894 243.629,294.267 244.247,294.060 244.791 C 293.854 245.334,293.240 245.947,292.697 246.154 C 292.154 246.360,291.535 246.988,291.322 247.548 C 291.109 248.108,290.593 248.656,290.175 248.765 C 289.756 248.874,289.063 249.558,288.635 250.285 C 288.206 251.012,287.582 251.607,287.249 251.607 C 286.916 251.607,286.438 252.058,286.187 252.610 C 285.935 253.161,285.250 253.860,284.665 254.163 C 284.079 254.466,283.487 255.068,283.350 255.501 C 283.212 255.935,282.586 256.554,281.959 256.879 C 281.331 257.203,280.818 257.733,280.818 258.056 C 280.818 258.379,280.212 259.001,279.472 259.438 C 278.732 259.874,278.016 260.580,277.881 261.005 C 277.746 261.430,277.210 261.940,276.690 262.137 C 276.170 262.335,275.553 262.919,275.317 263.435 C 275.082 263.951,274.467 264.566,273.951 264.801 C 273.435 265.037,272.844 265.672,272.638 266.214 C 272.432 266.756,271.862 267.352,271.372 267.539 C 270.881 267.725,270.255 268.298,269.980 268.812 C 269.705 269.326,269.096 269.915,268.625 270.121 C 268.155 270.328,267.597 270.893,267.384 271.376 C 267.172 271.860,266.717 272.346,266.372 272.455 C 266.028 272.564,265.186 273.351,264.500 274.204 C 262.579 276.595,257.838 276.204,257.838 273.655 C 257.838 273.357,257.389 273.000,256.840 272.862 C 256.209 272.704,255.697 272.198,255.451 271.492 C 255.221 270.834,254.691 270.281,254.162 270.148 C 253.651 270.020,253.053 269.416,252.777 268.749 C 252.475 268.019,252.008 267.575,251.541 267.575 C 251.127 267.575,250.509 267.083,250.159 266.473 C 249.811 265.867,249.030 265.087,248.424 264.739 C 247.773 264.365,247.322 263.777,247.322 263.300 C 247.322 262.719,247.002 262.429,246.183 262.265 C 245.421 262.112,244.896 261.678,244.594 260.949 C 244.346 260.350,243.811 259.773,243.405 259.667 C 241.482 259.164,241.646 255.768,243.617 255.273 C 244.071 255.159,244.637 254.551,244.875 253.921 C 245.168 253.145,245.576 252.775,246.140 252.775 C 246.716 252.775,247.099 252.414,247.381 251.604 C 247.635 250.878,248.146 250.344,248.728 250.198 C 249.272 250.061,249.761 249.583,249.893 249.060 C 250.021 248.549,250.678 247.891,251.404 247.547 C 252.173 247.182,252.787 246.547,252.933 245.967 C 253.081 245.377,253.546 244.905,254.119 244.761 C 254.695 244.616,255.214 244.085,255.456 243.392 C 255.723 242.625,256.115 242.259,256.670 242.259 C 257.231 242.259,257.618 241.889,257.898 241.088 C 258.155 240.350,258.661 239.828,259.269 239.676 C 259.799 239.543,260.393 239.011,260.590 238.493 C 260.786 237.976,261.466 237.255,262.100 236.891 C 262.735 236.527,263.352 235.836,263.473 235.355 C 263.603 234.838,264.103 234.378,264.699 234.229 C 265.336 234.069,265.848 233.566,266.095 232.857 C 266.313 232.232,266.856 231.645,267.326 231.527 C 267.788 231.411,268.465 230.797,268.829 230.163 C 269.193 229.528,269.914 228.849,270.431 228.652 C 270.952 228.454,271.483 227.850,271.622 227.298 C 271.771 226.704,272.231 226.212,272.763 226.078 C 273.277 225.949,273.837 225.370,274.086 224.709 C 274.379 223.933,274.787 223.564,275.352 223.564 C 275.918 223.564,276.309 223.207,276.573 222.449 C 276.787 221.836,277.383 221.142,277.897 220.908 C 278.412 220.674,279.102 219.961,279.432 219.324 C 279.775 218.659,280.405 218.113,280.911 218.041 C 282.071 217.877,282.042 217.173,280.869 217.007 C 280.273 216.922,279.796 216.477,279.521 215.751 C 279.263 215.066,278.657 214.472,277.975 214.234 C 277.359 214.019,276.763 213.495,276.652 213.070 C 276.541 212.644,275.855 211.946,275.129 211.517 C 274.402 211.088,273.807 210.486,273.807 210.178 C 273.807 209.871,273.194 209.257,272.444 208.815 C 271.694 208.373,271.081 207.751,271.081 207.435 C 271.081 207.118,270.599 206.629,270.010 206.349 C 269.421 206.068,268.777 205.472,268.580 205.025 C 268.383 204.577,267.712 204.018,267.089 203.783 C 266.466 203.548,265.862 202.995,265.747 202.554 C 265.631 202.113,265.384 201.753,265.197 201.753 C 265.010 201.753,263.848 200.857,262.614 199.762 C 255.799 193.715,254.425 192.470,253.096 191.139 C 252.294 190.336,251.483 189.679,251.295 189.679 C 251.107 189.679,250.751 189.237,250.505 188.697 C 250.260 188.157,249.616 187.547,249.075 187.342 C 248.534 187.136,247.896 186.538,247.656 186.013 C 247.417 185.487,246.758 184.865,246.191 184.631 C 245.624 184.396,244.990 183.815,244.781 183.339 C 244.572 182.863,244.018 182.305,243.550 182.100 C 243.082 181.894,242.515 181.321,242.289 180.826 C 242.064 180.331,241.447 179.762,240.919 179.561 C 240.391 179.360,239.690 178.675,239.361 178.038 C 239.032 177.402,238.400 176.766,237.957 176.625 C 237.514 176.485,236.989 175.943,236.791 175.422 C 236.593 174.901,235.986 174.306,235.443 174.099 C 234.900 173.893,234.286 173.279,234.080 172.736 C 233.873 172.193,233.258 171.579,232.713 171.372 C 232.168 171.164,231.588 170.632,231.424 170.189 C 231.260 169.746,230.695 169.169,230.169 168.906 C 229.642 168.644,228.988 167.962,228.714 167.392 C 228.441 166.822,227.870 166.246,227.447 166.111 C 227.023 165.977,226.447 165.429,226.167 164.895 C 225.887 164.360,225.231 163.712,224.708 163.454 C 224.186 163.196,223.599 162.625,223.403 162.184 C 223.208 161.744,222.551 161.098,221.943 160.749 C 221.335 160.400,220.837 159.848,220.837 159.522 C 220.837 159.196,220.304 158.654,219.652 158.316 C 219.000 157.979,218.290 157.316,218.074 156.841 C 217.858 156.367,217.148 155.673,216.496 155.299 C 215.843 154.925,215.228 154.306,215.129 153.925 C 215.029 153.543,214.564 153.063,214.097 152.857 C 213.629 152.651,213.026 152.020,212.756 151.454 C 212.487 150.888,211.823 150.313,211.280 150.177 C 210.726 150.038,210.132 149.504,209.925 148.960 C 209.722 148.426,209.123 147.825,208.594 147.624 C 208.065 147.423,207.367 146.746,207.043 146.119 C 206.719 145.492,206.012 144.868,205.472 144.733 C 204.862 144.580,204.399 144.121,204.248 143.519 C 204.100 142.928,203.727 142.551,203.290 142.551 C 202.897 142.551,202.278 142.047,201.914 141.431 C 200.796 139.539,197.858 139.130,197.858 140.866 C 197.858 141.139,197.344 141.628,196.717 141.953 C 196.090 142.277,195.464 142.897,195.326 143.330 C 195.189 143.763,194.575 144.377,193.963 144.693 C 193.351 145.010,192.739 145.617,192.604 146.042 C 192.469 146.467,191.887 147.039,191.311 147.314 C 190.735 147.588,190.103 148.175,189.908 148.619 C 189.713 149.062,189.055 149.711,188.447 150.060 C 187.839 150.409,187.342 150.965,187.342 151.296 C 187.342 151.628,187.178 151.899,186.978 151.899 C 186.478 151.899,181.500 156.843,181.500 157.340 C 181.500 157.561,181.246 157.741,180.935 157.741 C 180.625 157.741,179.927 158.323,179.384 159.035 C 178.841 159.746,177.971 160.557,177.449 160.836 C 176.928 161.115,176.416 161.670,176.312 162.069 C 176.208 162.468,175.675 162.965,175.129 163.172 C 174.583 163.380,173.872 164.061,173.549 164.685 C 173.226 165.310,172.607 165.914,172.172 166.028 C 171.738 166.141,171.209 166.689,170.998 167.246 C 170.786 167.802,170.453 168.257,170.257 168.257 C 170.062 168.257,166.221 171.894,161.722 176.339 C 157.224 180.784,150.347 187.488,146.441 191.237 C 142.534 194.985,137.951 199.411,136.257 201.071 C 134.562 202.731,132.931 204.090,132.632 204.090 C 132.332 204.090,131.967 204.468,131.821 204.931 C 131.526 205.858,128.323 209.040,127.375 209.347 C 127.046 209.453,126.469 210.083,126.092 210.747 C 125.715 211.411,125.095 212.036,124.714 212.135 C 124.332 212.235,123.852 212.699,123.646 213.167 C 123.440 213.635,122.790 214.247,122.201 214.528 C 121.611 214.808,121.130 215.278,121.130 215.572 C 121.130 215.866,120.691 216.452,120.156 216.873 C 119.362 217.497,119.294 217.681,119.785 217.870 C 120.116 217.997,120.561 218.600,120.774 219.210 C 121.009 219.883,121.690 220.571,122.508 220.961 C 123.350 221.362,123.856 221.883,123.856 222.347 C 123.856 222.822,124.221 223.181,124.870 223.344 C 125.511 223.505,126.044 224.022,126.319 224.750 C 126.558 225.383,127.033 225.901,127.375 225.901 C 127.717 225.901,128.543 226.470,129.211 227.167 C 130.521 228.533,132.298 230.152,135.517 232.911 C 136.642 233.875,138.231 235.278,139.048 236.027 C 139.865 236.777,140.732 237.566,140.973 237.780 C 141.214 237.994,141.711 238.464,142.079 238.825 C 144.987 241.681,146.072 242.648,146.368 242.648 C 146.556 242.648,146.912 243.090,147.158 243.630 C 147.404 244.170,148.062 244.785,148.621 244.998 C 149.180 245.210,149.730 245.740,149.844 246.174 C 149.957 246.609,150.561 247.228,151.186 247.551 C 151.811 247.874,152.483 248.563,152.681 249.083 C 152.879 249.605,153.482 250.138,154.031 250.276 C 154.635 250.427,155.112 250.886,155.255 251.454 C 155.383 251.965,155.946 252.603,156.506 252.871 C 157.065 253.140,157.731 253.776,157.985 254.285 C 158.238 254.794,158.988 255.473,159.651 255.794 C 161.410 256.646,160.981 259.786,159.106 259.786 C 158.853 259.786,158.444 260.227,158.198 260.767 C 157.952 261.307,157.307 261.917,156.765 262.124 C 156.223 262.330,155.615 262.931,155.414 263.460 C 155.213 263.989,154.537 264.687,153.912 265.010 C 153.288 265.333,152.680 265.967,152.561 266.420 C 152.443 266.873,151.975 267.341,151.523 267.459 C 151.070 267.578,150.445 268.166,150.135 268.766 C 149.824 269.366,149.216 269.970,148.783 270.107 C 148.350 270.245,147.736 270.858,147.420 271.470 C 147.103 272.083,146.490 272.696,146.056 272.833 C 145.623 272.971,145.010 273.584,144.693 274.197 C 143.737 276.046,140.604 275.906,140.604 274.014 C 140.604 273.710,140.123 273.230,139.536 272.949 C 138.949 272.667,138.247 271.975,137.977 271.411 C 137.707 270.847,137.065 270.280,136.552 270.151 C 135.975 270.007,135.462 269.470,135.210 268.746 C 134.938 267.964,134.540 267.575,134.013 267.575 C 133.530 267.575,132.989 267.122,132.619 266.407 C 132.287 265.764,131.766 265.239,131.461 265.239 C 131.156 265.239,130.444 264.632,129.878 263.891 C 129.313 263.149,128.524 262.439,128.126 262.313 C 127.727 262.186,127.292 261.741,127.160 261.322 C 127.027 260.904,126.507 260.343,126.005 260.076 C 125.091 259.590,120.047 255.193,117.821 252.941 C 117.170 252.282,116.158 251.430,115.573 251.046 C 114.987 250.662,114.508 250.133,114.508 249.870 C 114.508 249.608,113.894 249.061,113.143 248.657 C 112.392 248.253,111.678 247.610,111.557 247.228 C 111.436 246.847,110.836 246.276,110.224 245.959 C 109.612 245.642,108.994 245.016,108.852 244.567 C 108.709 244.118,108.099 243.579,107.497 243.369 C 106.838 243.139,106.306 242.611,106.164 242.045 C 106.025 241.491,105.549 241.007,105.010 240.872 C 104.505 240.745,103.857 240.202,103.569 239.664 C 103.281 239.127,102.560 238.436,101.967 238.129 C 101.373 237.822,100.782 237.151,100.653 236.638 C 100.513 236.080,100.036 235.609,99.466 235.466 C 98.932 235.332,98.344 234.785,98.131 234.226 C 97.922 233.676,97.396 233.133,96.961 233.019 C 96.527 232.905,95.907 232.301,95.584 231.677 C 95.261 231.052,94.564 230.376,94.035 230.175 C 93.506 229.974,92.898 229.351,92.686 228.791 C 92.473 228.231,91.956 227.683,91.538 227.574 C 91.120 227.464,90.427 226.780,89.998 226.054 C 89.569 225.327,88.954 224.732,88.631 224.732 C 88.308 224.732,87.771 224.206,87.439 223.564 C 87.107 222.921,86.634 222.395,86.389 222.395 C 85.662 222.395,84.518 221.163,84.518 220.379 C 84.518 219.979,84.083 219.454,83.552 219.212 C 81.931 218.474,81.950 215.774,83.576 215.774 C 83.900 215.774,84.463 215.249,84.828 214.608 C 85.193 213.967,85.629 213.441,85.797 213.440 C 85.965 213.438,86.842 212.739,87.745 211.886 C 93.374 206.566,95.339 204.847,96.203 204.483 C 96.738 204.258,97.475 203.551,97.840 202.913 C 98.205 202.275,98.783 201.753,99.125 201.753 C 99.469 201.753,100.004 201.139,100.321 200.381 C 100.932 198.918,102.595 197.180,110.185 190.068 C 112.814 187.605,116.193 184.406,117.694 182.960 C 119.194 181.514,120.650 180.331,120.928 180.331 C 121.207 180.331,121.541 179.908,121.671 179.390 C 121.801 178.869,122.399 178.232,123.010 177.961 C 123.617 177.693,124.326 176.994,124.585 176.409 C 124.844 175.823,125.457 175.244,125.947 175.121 C 126.437 174.998,127.041 174.451,127.290 173.906 C 127.538 173.361,128.181 172.748,128.720 172.543 C 129.258 172.339,129.698 171.898,129.698 171.564 C 129.698 171.230,130.284 170.612,131.000 170.189 C 131.716 169.767,132.498 168.989,132.739 168.460 C 132.980 167.932,133.587 167.397,134.087 167.271 C 134.621 167.137,135.176 166.568,135.430 165.897 C 135.706 165.165,136.138 164.752,136.628 164.752 C 137.112 164.752,137.572 164.320,137.879 163.578 C 138.170 162.876,138.752 162.308,139.328 162.163 C 139.911 162.017,140.440 161.495,140.667 160.842 C 140.885 160.218,141.526 159.562,142.187 159.288 C 142.903 158.992,143.330 158.529,143.330 158.049 C 143.330 157.561,143.742 157.128,144.470 156.854 C 145.097 156.617,145.795 156.016,146.022 155.518 C 146.249 155.021,146.856 154.422,147.371 154.187 C 147.886 153.952,148.500 153.338,148.735 152.822 C 148.970 152.305,149.606 151.714,150.148 151.508 C 150.690 151.302,151.302 150.690,151.508 150.148 C 151.714 149.606,152.288 148.978,152.783 148.753 C 153.278 148.527,153.851 147.963,154.057 147.499 C 154.262 147.034,154.858 146.444,155.380 146.186 C 155.903 145.928,156.570 145.259,156.863 144.700 C 157.156 144.141,157.824 143.521,158.347 143.322 C 158.871 143.123,159.299 142.690,159.299 142.360 C 159.299 142.031,159.844 141.429,160.511 141.024 C 161.177 140.618,161.925 139.876,162.173 139.374 C 162.421 138.872,163.010 138.291,163.482 138.082 C 163.954 137.873,164.527 137.252,164.755 136.701 C 164.983 136.151,165.689 135.504,166.324 135.265 C 167.064 134.985,167.478 134.554,167.478 134.064 C 167.478 133.586,167.903 133.122,168.609 132.829 C 169.232 132.572,169.828 132.026,169.935 131.617 C 170.042 131.208,170.644 130.578,171.273 130.217 C 171.901 129.857,172.575 129.199,172.771 128.755 C 172.966 128.312,173.607 127.720,174.194 127.440 C 174.782 127.160,175.367 126.518,175.494 126.012 C 175.628 125.479,176.111 124.995,176.645 124.861 C 177.151 124.734,177.793 124.154,178.071 123.573 C 178.350 122.991,179.009 122.301,179.536 122.038 C 180.062 121.776,180.632 121.185,180.803 120.724 C 180.973 120.264,181.469 119.794,181.906 119.680 C 182.342 119.566,182.958 118.972,183.274 118.360 C 183.591 117.748,184.350 116.989,184.962 116.673 C 185.574 116.356,186.168 115.740,186.282 115.304 C 186.396 114.867,186.866 114.371,187.326 114.201 C 187.786 114.031,188.376 113.464,188.636 112.942 C 188.897 112.419,189.534 111.781,190.052 111.522 C 190.570 111.264,191.223 110.615,191.503 110.081 C 191.783 109.546,192.366 108.997,192.797 108.860 C 193.229 108.723,193.844 108.104,194.164 107.485 C 194.576 106.689,195.231 106.221,196.400 105.889 C 197.309 105.630,198.226 105.267,198.437 105.080 C 198.659 104.885,198.879 104.913,198.957 105.146 C 199.031 105.368,199.321 105.550,199.603 105.550 M199.579 184.073 C 199.918 184.203,200.195 184.551,200.195 184.847 C 200.195 185.143,200.896 185.827,201.753 186.368 C 202.610 186.909,203.311 187.617,203.311 187.941 C 203.311 188.264,203.751 188.697,204.289 188.902 C 204.827 189.106,205.460 189.696,205.695 190.212 C 205.930 190.728,206.525 191.334,207.017 191.558 C 207.508 191.782,208.228 192.502,208.616 193.159 C 209.004 193.815,209.552 194.352,209.834 194.352 C 210.117 194.352,210.698 194.947,211.127 195.674 C 211.556 196.401,212.249 197.085,212.667 197.194 C 213.086 197.303,213.601 197.848,213.812 198.404 C 214.024 198.961,214.395 199.416,214.638 199.416 C 214.881 199.416,216.377 200.686,217.963 202.240 C 219.550 203.793,221.458 205.589,222.205 206.232 C 224.264 208.004,225.122 208.879,225.122 209.208 C 225.122 209.372,225.695 209.778,226.396 210.110 C 228.050 210.896,232.088 214.904,232.709 216.379 C 233.398 218.015,233.164 218.335,226.520 224.835 C 219.863 231.347,219.850 231.360,218.802 232.434 C 218.379 232.868,217.869 233.372,217.668 233.554 C 217.130 234.042,216.291 234.872,213.028 238.143 C 211.410 239.764,209.905 241.091,209.682 241.091 C 209.460 241.091,209.077 241.531,208.832 242.070 C 208.586 242.609,207.948 243.249,207.413 243.492 C 206.879 243.736,206.344 244.243,206.224 244.620 C 206.104 244.997,205.531 245.612,204.951 245.987 C 204.370 246.362,203.509 247.079,203.037 247.580 C 201.815 248.877,200.749 248.734,199.711 247.132 C 199.228 246.385,198.604 245.772,198.327 245.769 C 198.049 245.767,197.523 245.240,197.158 244.598 C 196.793 243.957,196.336 243.431,196.142 243.430 C 195.948 243.429,194.513 242.113,192.952 240.506 C 191.392 238.900,189.973 237.584,189.800 237.583 C 189.626 237.581,189.185 237.056,188.820 236.414 C 188.456 235.773,187.890 235.248,187.565 235.248 C 187.239 235.248,186.707 234.735,186.382 234.107 C 186.058 233.480,185.438 232.854,185.005 232.717 C 184.572 232.579,183.971 231.991,183.671 231.409 C 183.370 230.828,182.714 230.133,182.213 229.865 C 181.712 229.597,181.005 228.858,180.640 228.223 C 180.276 227.589,179.736 227.069,179.441 227.069 C 179.146 227.069,178.662 226.616,178.366 226.062 C 178.069 225.508,177.339 224.803,176.742 224.494 C 176.145 224.186,175.657 223.667,175.657 223.341 C 175.657 223.015,175.141 222.452,174.509 222.090 C 173.877 221.727,173.184 221.043,172.968 220.568 C 172.752 220.094,172.054 219.437,171.417 219.108 C 170.781 218.778,170.148 218.157,170.011 217.726 C 169.874 217.295,169.569 216.943,169.333 216.943 C 168.693 216.943,167.478 215.735,167.478 215.098 C 167.478 214.450,174.219 207.595,174.856 207.595 C 175.093 207.595,175.454 207.155,175.659 206.616 C 175.864 206.078,176.473 205.437,177.013 205.191 C 177.552 204.945,177.994 204.599,177.994 204.422 C 177.994 204.001,185.306 196.689,185.726 196.689 C 185.903 196.689,186.241 196.266,186.477 195.749 C 186.712 195.232,187.228 194.707,187.623 194.582 C 188.018 194.456,188.631 193.863,188.986 193.264 C 189.340 192.664,190.076 191.935,190.621 191.643 C 191.167 191.351,191.716 190.787,191.842 190.391 C 191.968 189.995,192.562 189.416,193.162 189.106 C 193.762 188.795,194.346 188.186,194.460 187.752 C 194.574 187.317,195.122 186.789,195.678 186.577 C 196.234 186.366,196.689 186.046,196.689 185.867 C 196.689 185.421,198.197 183.836,198.620 183.836 C 198.808 183.836,199.240 183.943,199.579 184.073 ", stroke: "none", fill: "#fbfbfb", "fill-rule": "evenodd" }),
            React__default['default'].createElement("path", { id: "path2", d: "M198.032 185.778 C 193.799 190.183,169.261 214.216,168.996 214.216 C 168.243 214.216,168.706 215.282,169.815 216.102 C 170.458 216.577,170.983 217.202,170.983 217.491 C 170.983 217.780,171.509 218.234,172.152 218.500 C 172.795 218.767,173.320 219.136,173.320 219.322 C 173.320 219.734,180.613 227.069,181.023 227.069 C 181.183 227.069,181.488 227.463,181.699 227.945 C 181.911 228.427,182.478 228.995,182.960 229.206 C 183.442 229.418,183.836 229.716,183.836 229.870 C 183.836 230.244,191.180 237.585,191.554 237.585 C 191.716 237.585,192.158 238.111,192.538 238.754 C 192.917 239.396,193.443 239.922,193.706 239.922 C 193.969 239.922,194.495 240.448,194.875 241.091 C 195.254 241.733,195.711 242.259,195.890 242.259 C 196.305 242.259,200.389 246.269,200.923 247.201 C 201.298 247.857,201.404 247.829,202.416 246.808 C 208.303 240.869,222.584 227.069,222.843 227.069 C 223.025 227.069,223.174 226.918,223.174 226.734 C 223.174 226.550,223.799 225.805,224.562 225.079 C 225.325 224.353,226.859 222.820,227.970 221.672 C 229.081 220.525,230.466 219.143,231.049 218.601 L 232.107 217.616 231.071 216.208 C 230.501 215.434,229.028 213.924,227.797 212.853 C 226.566 211.782,224.232 209.635,222.609 208.082 C 220.987 206.529,219.482 205.258,219.265 205.258 C 219.048 205.258,218.703 204.818,218.499 204.280 C 218.294 203.741,217.704 203.109,217.188 202.873 C 216.672 202.638,216.059 202.027,215.825 201.515 C 215.592 201.003,215.237 200.584,215.036 200.584 C 214.836 200.584,211.458 197.414,207.530 193.539 C 203.603 189.664,200.029 186.155,199.589 185.741 C 198.799 184.998,198.781 184.998,198.032 185.778 ", stroke: "none", fill: "#fc0505", "fill-rule": "evenodd" }),
            React__default['default'].createElement("path", { id: "path3", d: "M197.468 57.941 C 195.011 58.135,194.446 58.388,194.190 59.407 C 194.052 59.955,193.519 60.558,192.997 60.757 C 192.478 60.954,191.788 61.628,191.464 62.255 C 191.139 62.882,190.448 63.502,189.926 63.633 C 189.341 63.779,188.825 64.308,188.580 65.010 C 188.321 65.755,187.869 66.194,187.276 66.278 C 186.671 66.364,186.325 66.710,186.240 67.314 C 186.155 67.908,185.716 68.359,184.971 68.619 C 184.328 68.844,183.740 69.383,183.621 69.858 C 183.505 70.320,182.892 70.996,182.260 71.359 C 181.627 71.721,180.913 72.451,180.672 72.980 C 180.431 73.509,179.820 74.046,179.314 74.173 C 178.777 74.308,178.298 74.791,178.161 75.338 C 178.032 75.852,177.460 76.466,176.889 76.703 C 176.319 76.940,175.553 77.656,175.189 78.294 C 174.824 78.933,174.258 79.455,173.933 79.455 C 173.607 79.455,173.065 79.988,172.727 80.640 C 172.390 81.292,171.690 81.987,171.170 82.184 C 170.651 82.382,170.123 82.953,169.998 83.454 C 169.864 83.988,169.295 84.543,168.624 84.797 C 167.891 85.073,167.478 85.505,167.478 85.995 C 167.478 86.471,167.055 86.936,166.360 87.223 C 165.745 87.478,165.047 88.115,164.808 88.640 C 164.569 89.164,163.942 89.790,163.414 90.030 C 162.886 90.271,162.287 90.946,162.083 91.531 C 161.854 92.186,161.327 92.690,160.706 92.846 C 160.111 92.996,159.611 93.455,159.481 93.973 C 159.360 94.453,158.743 95.144,158.108 95.508 C 157.474 95.872,156.794 96.594,156.597 97.111 C 156.399 97.632,155.795 98.163,155.244 98.301 C 154.629 98.456,154.157 98.912,154.011 99.493 C 153.866 100.070,153.335 100.589,152.642 100.830 C 151.875 101.098,151.509 101.490,151.509 102.045 C 151.509 102.603,151.141 102.993,150.357 103.266 C 149.723 103.487,149.103 103.988,148.978 104.380 C 148.854 104.771,148.158 105.545,147.431 106.100 C 146.704 106.654,146.003 107.441,145.874 107.848 C 145.745 108.255,145.225 108.693,144.718 108.820 C 144.167 108.958,143.641 109.500,143.407 110.170 C 143.165 110.864,142.648 111.381,142.044 111.533 C 141.426 111.688,140.922 112.205,140.663 112.948 C 140.438 113.592,139.992 114.119,139.670 114.119 C 139.349 114.119,138.623 114.725,138.057 115.467 C 137.492 116.208,136.709 116.916,136.317 117.041 C 135.926 117.165,135.425 117.785,135.204 118.419 C 134.932 119.197,134.539 119.572,133.993 119.572 C 133.493 119.572,133.046 119.936,132.821 120.527 C 132.621 121.052,131.925 121.757,131.273 122.095 C 130.621 122.432,130.088 122.968,130.088 123.287 C 130.088 123.606,129.518 124.213,128.822 124.636 C 128.126 125.058,127.461 125.801,127.345 126.285 C 127.215 126.829,126.787 127.217,126.228 127.297 C 125.650 127.380,125.167 127.836,124.896 128.553 C 124.649 129.209,124.033 129.832,123.421 130.045 C 122.844 130.246,122.258 130.768,122.120 131.204 C 121.981 131.640,121.264 132.370,120.525 132.826 C 119.786 133.283,119.182 133.954,119.182 134.318 C 119.182 134.694,118.684 135.168,118.031 135.415 C 117.304 135.689,116.787 136.222,116.626 136.863 C 116.462 137.516,116.104 137.877,115.621 137.877 C 115.177 137.877,114.544 138.433,114.067 139.241 C 113.625 139.990,113.011 140.604,112.704 140.604 C 112.397 140.604,111.800 141.189,111.377 141.905 C 110.955 142.621,110.185 143.400,109.668 143.636 C 109.150 143.872,108.669 144.469,108.599 144.963 C 108.515 145.550,108.166 145.905,107.591 145.987 C 107.095 146.057,106.458 146.598,106.134 147.225 C 105.818 147.837,105.204 148.451,104.771 148.588 C 104.338 148.726,103.720 149.348,103.397 149.972 C 103.075 150.596,102.288 151.377,101.649 151.707 C 101.010 152.038,100.487 152.562,100.487 152.872 C 100.487 153.183,99.964 153.707,99.324 154.038 C 98.685 154.369,98.052 155.074,97.919 155.606 C 97.777 156.171,97.395 156.573,97.000 156.573 C 96.275 156.573,95.034 157.731,95.034 158.408 C 95.034 158.634,94.688 158.909,94.265 159.020 C 93.842 159.130,93.124 159.852,92.669 160.623 C 92.214 161.394,91.601 162.025,91.307 162.025 C 91.013 162.025,90.386 162.549,89.912 163.190 C 89.439 163.830,88.743 164.452,88.367 164.572 C 87.991 164.691,87.454 165.306,87.174 165.939 C 86.894 166.571,86.456 167.089,86.201 167.089 C 85.947 167.089,84.806 168.042,83.667 169.207 C 82.529 170.372,81.351 171.555,81.050 171.836 C 76.823 175.782,52.047 199.653,51.283 200.514 C 51.033 200.797,50.498 201.323,50.095 201.683 C 48.297 203.289,36.699 215.089,35.743 216.285 L 34.680 217.615 35.483 218.342 C 35.925 218.742,36.526 219.642,36.818 220.342 C 37.111 221.042,37.761 221.802,38.263 222.030 C 38.764 222.259,39.343 222.828,39.549 223.295 C 39.754 223.762,40.394 224.369,40.970 224.643 C 41.547 224.918,42.124 225.475,42.253 225.883 C 42.383 226.290,43.094 226.980,43.834 227.417 C 44.574 227.854,45.180 228.480,45.180 228.809 C 45.180 229.137,45.358 229.406,45.575 229.406 C 45.980 229.406,47.413 230.646,51.563 234.589 C 52.872 235.833,54.458 237.235,55.088 237.705 C 55.717 238.175,56.781 239.129,57.452 239.825 C 58.123 240.521,58.858 241.091,59.086 241.091 C 59.313 241.091,59.966 241.704,60.538 242.454 C 61.110 243.204,61.828 243.817,62.133 243.817 C 62.437 243.817,62.957 244.340,63.288 244.980 C 63.619 245.619,64.309 246.248,64.822 246.377 C 65.363 246.512,65.851 246.992,65.983 247.518 C 66.108 248.017,66.708 248.645,67.316 248.914 C 67.925 249.183,68.582 249.767,68.778 250.211 C 68.973 250.655,69.614 251.248,70.202 251.528 C 70.790 251.807,71.376 252.454,71.504 252.964 C 71.645 253.526,72.183 254.048,72.869 254.287 C 73.591 254.539,74.002 254.954,74.002 255.433 C 74.002 255.886,74.479 256.414,75.207 256.767 C 75.870 257.088,76.618 257.767,76.870 258.276 C 77.121 258.785,77.713 259.372,78.185 259.581 C 78.657 259.790,79.245 260.447,79.491 261.042 C 79.737 261.636,80.233 262.123,80.593 262.123 C 81.430 262.123,82.181 262.873,82.181 263.711 C 82.181 264.071,82.667 264.567,83.262 264.813 C 83.856 265.059,84.514 265.647,84.722 266.119 C 84.931 266.591,85.530 267.188,86.052 267.446 C 86.574 267.704,87.231 268.353,87.511 268.887 C 87.791 269.422,88.359 269.966,88.772 270.098 C 89.186 270.229,89.882 270.942,90.319 271.682 C 90.756 272.423,91.386 273.028,91.720 273.028 C 92.054 273.028,92.490 273.458,92.690 273.983 C 92.890 274.509,93.574 275.208,94.211 275.537 C 94.847 275.866,95.483 276.498,95.624 276.941 C 95.765 277.384,96.320 277.914,96.858 278.119 C 97.396 278.323,97.925 278.833,98.035 279.251 C 98.144 279.669,98.828 280.362,99.555 280.791 C 100.282 281.220,100.876 281.802,100.876 282.084 C 100.876 282.366,101.413 282.915,102.070 283.302 C 102.726 283.690,103.458 284.433,103.695 284.954 C 103.932 285.474,104.547 286.006,105.061 286.135 C 105.576 286.264,106.156 286.788,106.351 287.301 C 106.545 287.813,107.106 288.385,107.596 288.571 C 108.087 288.758,108.733 289.368,109.032 289.927 C 109.332 290.487,109.724 290.944,109.904 290.944 C 110.084 290.944,110.975 291.629,111.883 292.467 C 118.396 298.470,118.442 298.500,119.816 297.762 C 120.431 297.431,121.434 296.987,122.044 296.774 C 122.653 296.562,123.242 296.046,123.351 295.627 C 123.461 295.209,124.145 294.516,124.871 294.087 C 125.598 293.659,126.193 293.043,126.193 292.720 C 126.193 292.397,126.706 291.867,127.334 291.543 C 127.961 291.219,128.587 290.599,128.724 290.166 C 128.862 289.732,129.485 289.114,130.110 288.791 C 130.734 288.468,131.354 287.769,131.487 287.237 C 131.631 286.664,132.010 286.271,132.419 286.271 C 136.432 286.271,133.777 280.562,127.848 276.440 C 127.151 275.956,126.488 275.272,126.374 274.920 C 126.260 274.568,125.647 274.065,125.011 273.802 C 124.376 273.539,123.856 273.109,123.856 272.847 C 123.856 272.215,122.578 271.081,121.866 271.081 C 121.555 271.081,121.102 270.555,120.859 269.912 C 120.573 269.154,120.147 268.744,119.644 268.744 C 119.172 268.744,118.556 268.212,118.065 267.381 C 117.623 266.631,117.002 266.018,116.685 266.018 C 116.368 266.018,115.880 265.541,115.601 264.958 C 115.321 264.375,114.665 263.685,114.143 263.425 C 113.620 263.164,112.957 262.502,112.670 261.953 C 112.382 261.404,111.883 260.954,111.562 260.954 C 111.240 260.954,110.626 260.360,110.197 259.633 C 109.768 258.906,109.075 258.222,108.657 258.113 C 108.239 258.003,107.722 257.455,107.509 256.895 C 107.296 256.335,106.678 255.708,106.134 255.501 C 105.591 255.295,104.978 254.681,104.771 254.138 C 104.565 253.595,103.952 252.982,103.410 252.776 C 102.868 252.570,102.222 251.955,101.973 251.410 C 101.725 250.865,101.112 250.317,100.611 250.191 C 100.089 250.060,99.603 249.572,99.471 249.048 C 99.345 248.544,98.733 247.908,98.112 247.632 C 97.490 247.357,96.981 246.943,96.981 246.711 C 96.981 246.181,95.320 244.596,94.764 244.596 C 94.536 244.596,94.132 244.070,93.866 243.427 C 93.584 242.748,93.091 242.259,92.688 242.259 C 92.307 242.259,91.633 241.646,91.191 240.896 C 90.748 240.146,90.156 239.533,89.873 239.533 C 89.591 239.533,89.070 239.042,88.716 238.443 C 88.362 237.844,87.626 237.115,87.081 236.823 C 86.535 236.531,85.986 235.969,85.861 235.575 C 85.736 235.181,85.251 234.661,84.784 234.421 C 84.316 234.180,83.527 233.479,83.029 232.863 C 82.532 232.247,81.918 231.742,81.666 231.742 C 81.414 231.741,80.857 231.216,80.428 230.574 C 80.000 229.933,79.503 229.408,79.325 229.407 C 79.146 229.407,78.429 228.836,77.731 228.140 C 76.624 227.035,74.791 225.418,71.798 222.906 C 70.585 221.888,67.381 218.145,67.381 217.747 C 67.381 217.561,67.994 217.047,68.744 216.605 C 69.494 216.162,70.107 215.541,70.107 215.224 C 70.107 214.907,70.589 214.419,71.178 214.138 C 71.767 213.858,72.420 213.240,72.629 212.765 C 72.838 212.290,73.497 211.699,74.095 211.451 C 74.692 211.204,75.282 210.597,75.406 210.103 C 75.539 209.574,76.092 209.044,76.750 208.814 C 77.441 208.573,77.962 208.055,78.112 207.459 C 78.257 206.878,78.725 206.401,79.287 206.260 C 79.800 206.131,80.484 205.515,80.807 204.891 C 81.129 204.266,81.756 203.640,82.199 203.500 C 82.642 203.359,83.166 202.819,83.364 202.299 C 83.562 201.779,84.153 201.158,84.679 200.918 C 85.204 200.679,85.838 199.990,86.088 199.387 C 86.350 198.754,86.894 198.241,87.376 198.172 C 87.835 198.106,88.446 197.561,88.733 196.960 C 89.020 196.359,89.674 195.708,90.186 195.513 C 90.698 195.318,91.225 194.730,91.357 194.205 C 91.493 193.661,92.063 193.057,92.681 192.801 C 93.277 192.554,93.960 191.923,94.200 191.397 C 94.439 190.872,95.070 190.276,95.603 190.074 C 96.135 189.872,96.678 189.277,96.810 188.752 C 96.955 188.174,97.424 187.705,98.003 187.559 C 98.527 187.428,99.122 186.885,99.324 186.352 C 99.527 185.820,100.122 185.189,100.647 184.950 C 101.173 184.710,101.805 184.027,102.052 183.430 C 102.313 182.800,102.912 182.243,103.482 182.100 C 104.089 181.948,104.628 181.415,104.897 180.703 C 105.136 180.070,105.608 179.552,105.947 179.552 C 106.737 179.552,107.498 178.791,107.498 178.002 C 107.498 177.663,108.037 177.182,108.697 176.933 C 109.356 176.684,109.988 176.126,110.102 175.693 C 110.215 175.260,110.902 174.555,111.629 174.126 C 112.356 173.697,112.950 173.095,112.950 172.788 C 112.950 172.480,113.564 171.867,114.314 171.425 C 115.063 170.982,115.677 170.373,115.677 170.070 C 115.677 169.768,116.205 169.301,116.850 169.034 C 117.513 168.760,118.121 168.160,118.247 167.657 C 118.370 167.166,118.975 166.557,119.593 166.301 C 120.209 166.045,120.815 165.517,120.939 165.128 C 121.063 164.738,121.770 164.061,122.510 163.625 C 123.343 163.133,123.856 162.529,123.856 162.038 C 123.856 161.528,124.112 161.246,124.574 161.246 C 125.356 161.246,126.582 160.098,126.582 159.366 C 126.582 159.115,126.771 158.909,127.002 158.909 C 127.233 158.909,128.095 158.252,128.917 157.449 C 131.940 154.496,136.245 150.419,140.951 146.054 C 143.605 143.592,147.510 139.872,149.628 137.787 C 151.747 135.703,153.825 133.813,154.247 133.587 C 154.669 133.361,155.015 132.957,155.015 132.690 C 155.015 132.422,155.534 131.896,156.169 131.521 C 156.804 131.146,157.611 130.353,157.961 129.760 C 158.312 129.166,158.975 128.515,159.436 128.313 C 159.896 128.111,160.442 127.561,160.648 127.090 C 160.854 126.620,161.431 126.133,161.930 126.008 C 162.429 125.883,162.953 125.479,163.095 125.110 C 163.437 124.217,166.706 120.970,167.612 120.622 C 168.008 120.471,168.424 119.990,168.538 119.554 C 168.652 119.118,169.237 118.507,169.837 118.197 C 170.437 117.887,171.036 117.293,171.168 116.878 C 171.300 116.463,172.013 115.765,172.753 115.329 C 173.494 114.892,174.099 114.283,174.099 113.976 C 174.099 113.668,174.713 113.055,175.463 112.612 C 176.212 112.170,176.826 111.535,176.826 111.201 C 176.826 110.867,177.255 110.431,177.781 110.231 C 178.306 110.031,179.012 109.335,179.349 108.683 C 179.686 108.031,180.226 107.498,180.549 107.498 C 180.872 107.498,181.498 106.884,181.941 106.134 C 182.383 105.385,182.996 104.771,183.304 104.771 C 183.611 104.771,184.214 104.177,184.642 103.450 C 185.071 102.723,185.779 102.035,186.216 101.921 C 186.653 101.807,187.104 101.356,187.218 100.919 C 187.332 100.482,188.020 99.774,188.747 99.345 C 189.474 98.917,190.068 98.306,190.068 97.990 C 190.068 97.673,190.549 97.183,191.136 96.902 C 191.723 96.620,192.424 95.929,192.695 95.365 C 192.965 94.800,193.606 94.234,194.120 94.105 C 194.697 93.960,195.209 93.423,195.462 92.700 C 195.737 91.911,196.131 91.529,196.669 91.529 C 197.109 91.529,197.805 91.192,198.217 90.780 C 198.840 90.157,199.003 90.127,199.186 90.604 C 199.307 90.919,199.918 91.355,200.543 91.573 C 201.263 91.824,201.772 92.333,201.929 92.958 C 202.084 93.573,202.612 94.111,203.328 94.381 C 204.025 94.644,204.479 95.096,204.479 95.528 C 204.479 95.955,204.960 96.442,205.679 96.744 C 206.338 97.022,207.088 97.671,207.345 98.186 C 207.602 98.702,208.270 99.343,208.830 99.612 C 209.390 99.880,209.953 100.518,210.081 101.029 C 210.224 101.597,210.700 102.056,211.305 102.207 C 211.863 102.347,212.457 102.879,212.664 103.424 C 212.867 103.956,213.454 104.584,213.971 104.819 C 214.487 105.054,215.102 105.669,215.337 106.185 C 215.572 106.701,216.191 107.286,216.711 107.484 C 217.232 107.682,217.893 108.335,218.180 108.936 C 218.478 109.559,219.078 110.083,219.575 110.154 C 220.120 110.231,220.537 110.636,220.687 111.236 C 220.819 111.763,221.357 112.418,221.881 112.693 C 222.405 112.968,223.046 113.617,223.304 114.135 C 223.563 114.653,224.198 115.289,224.716 115.547 C 225.234 115.805,225.887 116.454,226.167 116.988 C 226.447 117.523,227.030 118.072,227.461 118.209 C 227.893 118.346,228.501 118.951,228.812 119.554 C 229.124 120.156,229.823 120.760,230.366 120.897 C 230.989 121.053,231.353 121.417,231.353 121.883 C 231.353 122.325,231.810 122.824,232.488 123.124 C 233.112 123.401,233.891 124.191,234.220 124.880 C 234.591 125.658,235.158 126.181,235.715 126.260 C 236.314 126.345,236.655 126.694,236.742 127.310 C 236.826 127.903,237.270 128.383,237.985 128.653 C 238.619 128.892,239.194 129.458,239.322 129.970 C 239.446 130.463,239.709 130.867,239.907 130.867 C 240.104 130.867,241.066 131.655,242.044 132.619 C 243.021 133.583,244.000 134.372,244.218 134.372 C 244.437 134.372,244.783 134.813,244.988 135.353 C 245.193 135.892,245.762 136.486,246.252 136.672 C 246.743 136.859,247.389 137.469,247.688 138.029 C 247.988 138.588,248.457 139.046,248.731 139.046 C 249.006 139.046,249.674 139.628,250.217 140.340 C 250.760 141.051,251.645 141.869,252.184 142.158 C 252.723 142.447,253.165 142.916,253.165 143.201 C 253.165 143.486,253.306 143.720,253.479 143.720 C 253.651 143.720,254.594 144.464,255.574 145.375 C 256.553 146.285,258.294 147.819,259.443 148.783 C 260.592 149.747,262.060 151.077,262.704 151.739 C 263.348 152.401,264.184 153.053,264.560 153.189 C 264.937 153.324,265.449 153.882,265.698 154.429 C 265.947 154.975,266.559 155.525,267.057 155.650 C 267.555 155.775,268.182 156.335,268.451 156.895 C 268.719 157.455,269.366 158.126,269.888 158.386 C 270.411 158.647,271.073 159.307,271.359 159.853 C 271.645 160.400,272.279 160.947,272.767 161.070 C 273.276 161.198,273.838 161.779,274.086 162.438 C 274.379 163.214,274.787 163.583,275.352 163.583 C 275.927 163.583,276.311 163.945,276.593 164.754 C 276.845 165.478,277.357 166.014,277.935 166.159 C 278.448 166.288,279.088 166.851,279.356 167.411 C 279.625 167.971,280.275 168.644,280.802 168.906 C 281.328 169.169,281.893 169.746,282.057 170.189 C 282.221 170.632,282.801 171.164,283.346 171.372 C 283.891 171.579,284.506 172.193,284.713 172.736 C 284.919 173.279,285.533 173.893,286.076 174.099 C 286.619 174.306,287.233 174.919,287.439 175.463 C 287.646 176.006,288.259 176.619,288.802 176.826 C 289.346 177.032,289.964 177.659,290.177 178.220 C 290.390 178.780,290.920 179.331,291.354 179.445 C 291.789 179.558,292.398 180.142,292.709 180.742 C 293.019 181.343,293.627 181.946,294.060 182.084 C 294.494 182.221,295.107 182.835,295.424 183.447 C 295.740 184.059,296.354 184.673,296.787 184.810 C 297.220 184.948,297.838 185.571,298.161 186.195 C 298.484 186.820,299.183 187.440,299.715 187.573 C 300.268 187.712,300.682 188.098,300.682 188.475 C 300.682 189.320,301.431 190.068,302.279 190.068 C 302.666 190.068,303.112 190.556,303.350 191.239 C 303.585 191.913,304.182 192.570,304.756 192.789 C 305.305 192.998,305.950 193.598,306.190 194.124 C 306.429 194.649,307.113 195.281,307.709 195.528 C 308.305 195.775,308.892 196.370,309.012 196.851 C 309.133 197.331,309.677 197.927,310.220 198.175 C 310.764 198.423,311.395 199.033,311.621 199.530 C 311.848 200.028,312.547 200.629,313.174 200.865 C 313.801 201.102,314.314 201.569,314.314 201.904 C 314.314 202.238,314.827 202.777,315.454 203.102 C 316.082 203.426,316.707 204.044,316.844 204.475 C 316.981 204.906,317.246 205.258,317.433 205.258 C 317.620 205.258,318.559 206.003,319.519 206.913 C 323.685 210.863,327.648 214.422,328.033 214.560 C 328.262 214.642,328.967 215.299,329.601 216.020 C 330.234 216.742,330.969 217.332,331.234 217.332 C 331.749 217.332,332.619 218.940,332.619 219.890 C 332.619 220.206,332.200 220.655,331.689 220.889 C 331.177 221.122,330.565 221.735,330.330 222.251 C 330.095 222.768,329.460 223.358,328.919 223.564 C 328.378 223.769,327.754 224.338,327.531 224.826 C 327.308 225.315,326.609 226.011,325.978 226.374 C 325.346 226.736,324.830 227.287,324.830 227.597 C 324.830 227.907,324.216 228.523,323.466 228.965 C 322.717 229.407,322.103 230.021,322.103 230.328 C 322.103 230.636,321.490 231.249,320.740 231.691 C 319.990 232.134,319.377 232.755,319.377 233.072 C 319.377 233.389,318.896 233.878,318.309 234.160 C 317.722 234.441,317.012 235.152,316.730 235.739 C 316.449 236.326,315.957 236.806,315.637 236.806 C 315.318 236.806,314.760 237.323,314.397 237.954 C 314.035 238.586,313.350 239.280,312.876 239.496 C 312.402 239.712,311.750 240.399,311.427 241.024 C 311.104 241.649,310.469 242.257,310.016 242.375 C 309.563 242.494,309.099 242.948,308.985 243.385 C 308.871 243.821,308.183 244.530,307.456 244.958 C 306.729 245.387,306.134 245.990,306.134 246.297 C 306.134 246.604,305.521 247.218,304.771 247.660 C 304.021 248.103,303.408 248.729,303.408 249.052 C 303.408 249.375,302.875 249.915,302.223 250.252 C 301.571 250.589,300.874 251.295,300.675 251.820 C 300.475 252.345,300.042 252.775,299.712 252.775 C 299.382 252.775,298.781 253.320,298.375 253.987 C 297.970 254.653,297.228 255.403,296.726 255.654 C 296.224 255.904,295.584 256.585,295.305 257.168 C 295.025 257.751,294.541 258.228,294.228 258.228 C 293.915 258.228,293.314 258.797,292.891 259.494 C 292.468 260.190,291.726 260.854,291.241 260.970 C 290.704 261.099,290.310 261.528,290.232 262.072 C 290.149 262.648,289.699 263.105,288.964 263.361 C 288.254 263.609,287.733 264.122,287.582 264.722 C 287.449 265.251,286.917 265.846,286.400 266.042 C 285.883 266.239,285.162 266.919,284.798 267.553 C 284.434 268.188,283.742 268.805,283.262 268.926 C 282.767 269.050,282.286 269.551,282.153 270.080 C 282.018 270.619,281.436 271.214,280.779 271.486 C 280.146 271.749,279.540 272.355,279.416 272.850 C 279.293 273.340,278.704 273.943,278.108 274.190 C 277.512 274.437,276.828 275.069,276.589 275.594 C 276.350 276.119,275.718 276.715,275.186 276.917 C 274.654 277.119,274.111 277.714,273.979 278.239 C 273.842 278.785,273.367 279.286,272.867 279.412 C 272.386 279.532,271.790 280.077,271.542 280.622 C 271.294 281.167,270.645 281.782,270.101 281.989 C 268.143 282.733,268.334 286.271,270.332 286.271 C 270.859 286.271,271.257 286.660,271.529 287.441 C 271.776 288.148,272.295 288.702,272.839 288.838 C 273.361 288.970,273.839 289.460,273.976 290.005 C 274.105 290.522,274.373 290.944,274.571 290.944 C 274.768 290.944,275.730 291.733,276.708 292.697 C 277.686 293.661,278.656 294.450,278.865 294.450 C 279.074 294.450,279.353 294.880,279.485 295.406 C 279.644 296.039,280.157 296.504,281.003 296.784 C 281.706 297.016,282.593 297.550,282.973 297.970 C 283.849 298.938,284.525 298.939,285.201 297.974 C 285.494 297.555,286.213 297.031,286.797 296.809 C 287.382 296.586,288.160 295.878,288.526 295.235 C 288.892 294.592,289.316 294.064,289.469 294.063 C 289.621 294.061,290.440 293.359,291.288 292.502 C 292.137 291.646,293.020 290.944,293.251 290.944 C 293.482 290.944,293.671 290.745,293.671 290.501 C 293.671 290.003,301.021 282.765,301.527 282.765 C 301.705 282.765,301.850 282.494,301.850 282.163 C 301.850 281.832,302.346 281.276,302.952 280.928 C 303.558 280.580,304.339 279.800,304.687 279.194 C 305.035 278.587,305.586 278.092,305.912 278.092 C 306.237 278.092,306.780 277.558,307.117 276.906 C 307.454 276.254,308.118 275.544,308.592 275.328 C 309.066 275.112,309.750 274.419,310.113 273.787 C 310.475 273.155,311.026 272.639,311.336 272.639 C 311.646 272.639,312.262 272.025,312.704 271.276 C 313.146 270.526,313.781 269.912,314.114 269.912 C 314.447 269.912,314.925 269.461,315.177 268.909 C 315.428 268.358,316.125 267.652,316.726 267.342 C 317.327 267.031,317.819 266.512,317.819 266.189 C 317.819 265.866,318.425 265.244,319.165 264.808 C 319.905 264.371,320.621 263.666,320.756 263.241 C 320.891 262.815,321.427 262.306,321.947 262.108 C 322.466 261.911,323.074 261.349,323.297 260.860 C 323.519 260.371,324.218 259.675,324.850 259.313 C 325.481 258.950,325.998 258.400,325.998 258.090 C 325.998 257.780,326.611 257.164,327.361 256.722 C 328.111 256.279,328.724 255.666,328.724 255.358 C 328.724 255.051,329.338 254.437,330.088 253.995 C 330.837 253.553,331.451 252.932,331.451 252.615 C 331.451 252.298,331.931 251.808,332.518 251.527 C 333.106 251.246,333.816 250.535,334.098 249.948 C 334.379 249.361,334.868 248.880,335.185 248.880 C 335.502 248.880,336.123 248.267,336.566 247.517 C 337.008 246.767,337.622 246.154,337.929 246.154 C 338.236 246.154,338.850 245.540,339.292 244.791 C 339.782 243.960,340.399 243.427,340.871 243.427 C 341.363 243.427,341.797 243.026,342.061 242.325 C 342.290 241.719,342.841 241.062,343.286 240.865 C 343.731 240.668,344.308 240.076,344.568 239.549 C 344.828 239.022,345.407 238.456,345.855 238.291 C 346.302 238.125,346.955 237.490,347.305 236.880 C 347.655 236.270,348.438 235.486,349.044 235.138 C 349.650 234.790,350.146 234.225,350.146 233.883 C 350.146 233.541,350.673 233.077,351.317 232.852 C 352.041 232.600,352.577 232.088,352.722 231.510 C 352.851 230.997,353.418 230.356,353.982 230.085 C 354.546 229.815,355.229 229.132,355.499 228.568 C 355.769 228.004,356.426 227.433,356.957 227.300 C 357.563 227.148,358.017 226.685,358.174 226.061 C 358.311 225.513,358.843 224.906,359.355 224.711 C 359.868 224.516,360.446 223.938,360.641 223.425 C 360.835 222.913,361.443 222.382,361.991 222.244 C 362.610 222.089,363.078 221.633,363.226 221.042 C 363.357 220.519,364.061 219.738,364.790 219.309 C 366.535 218.279,366.611 216.801,364.967 215.858 C 364.335 215.495,363.642 214.811,363.426 214.337 C 363.210 213.863,362.499 213.199,361.847 212.862 C 361.196 212.525,360.662 211.982,360.662 211.656 C 360.662 211.331,360.145 210.768,359.514 210.405 C 358.882 210.043,358.183 209.346,357.961 208.857 C 357.738 208.369,357.113 207.801,356.573 207.595 C 356.032 207.389,355.407 206.821,355.184 206.332 C 354.962 205.844,354.263 205.147,353.631 204.785 C 353.000 204.422,352.483 203.882,352.483 203.585 C 352.483 203.287,351.881 202.720,351.146 202.324 C 350.410 201.928,349.726 201.287,349.625 200.901 C 349.524 200.515,349.118 200.075,348.722 199.924 C 348.327 199.773,346.941 198.589,345.642 197.293 C 344.342 195.997,342.677 194.468,341.942 193.895 C 341.206 193.323,339.585 191.885,338.339 190.701 C 337.094 189.516,335.762 188.448,335.380 188.326 C 334.998 188.205,334.486 187.668,334.242 187.134 C 333.998 186.599,333.373 185.968,332.853 185.731 C 332.332 185.493,331.818 184.960,331.709 184.546 C 331.601 184.131,331.003 183.600,330.382 183.365 C 329.760 183.131,329.031 182.440,328.761 181.830 C 328.457 181.143,327.972 180.721,327.490 180.721 C 326.978 180.721,326.555 180.313,326.262 179.537 C 326.002 178.848,325.447 178.260,324.934 178.131 C 324.450 178.010,323.833 177.452,323.565 176.893 C 323.297 176.333,322.664 175.669,322.160 175.418 C 321.655 175.166,321.036 174.547,320.785 174.043 C 320.533 173.538,319.861 172.902,319.291 172.629 C 318.721 172.355,318.141 171.775,318.003 171.340 C 317.865 170.905,317.312 170.382,316.774 170.177 C 316.236 169.973,315.703 169.450,315.590 169.016 C 315.476 168.581,314.882 167.967,314.271 167.651 C 313.659 167.334,312.888 166.553,312.557 165.914 C 312.219 165.258,311.642 164.752,311.235 164.752 C 310.800 164.752,310.320 164.286,310.027 163.578 C 309.753 162.916,309.153 162.307,308.650 162.181 C 308.141 162.053,307.660 161.559,307.526 161.025 C 307.397 160.512,306.806 159.841,306.212 159.534 C 305.619 159.227,304.888 158.518,304.589 157.958 C 304.289 157.399,303.673 156.848,303.219 156.734 C 302.764 156.620,302.198 156.011,301.961 155.381 C 301.668 154.605,301.259 154.236,300.695 154.236 C 300.119 154.236,299.736 153.874,299.454 153.065 C 299.220 152.394,298.687 151.804,298.205 151.683 C 297.742 151.567,297.067 150.954,296.704 150.322 C 296.341 149.690,295.634 148.985,295.134 148.757 C 294.633 148.529,294.055 147.963,293.850 147.499 C 293.644 147.034,293.045 146.442,292.519 146.182 C 291.992 145.922,291.427 145.345,291.262 144.900 C 291.098 144.456,290.652 143.973,290.272 143.829 C 289.892 143.684,288.426 142.417,287.014 141.013 C 285.601 139.610,283.248 137.410,281.785 136.125 C 280.321 134.839,278.146 132.873,276.952 131.754 C 275.758 130.636,274.572 129.715,274.316 129.709 C 274.060 129.703,273.547 129.184,273.176 128.555 C 272.804 127.926,272.123 127.316,271.663 127.201 C 271.202 127.085,270.622 126.545,270.373 126.000 C 270.125 125.455,269.479 124.840,268.939 124.635 C 268.398 124.429,267.752 123.815,267.504 123.270 C 267.256 122.725,266.632 122.174,266.117 122.045 C 265.603 121.915,265.017 121.377,264.816 120.848 C 264.615 120.319,264.095 119.793,263.660 119.679 C 263.226 119.566,262.606 118.962,262.283 118.337 C 261.960 117.712,261.263 117.037,260.734 116.835 C 260.205 116.634,259.603 116.025,259.396 115.482 C 259.190 114.939,258.576 114.325,258.033 114.119 C 257.490 113.912,256.876 113.299,256.670 112.756 C 256.463 112.212,255.853 111.600,255.314 111.395 C 254.774 111.190,254.333 110.752,254.333 110.423 C 254.333 110.093,253.790 109.493,253.126 109.089 C 252.462 108.685,251.588 107.811,251.184 107.147 C 250.780 106.483,250.180 105.940,249.850 105.940 C 249.520 105.940,249.087 105.510,248.887 104.985 C 248.688 104.459,248.013 103.765,247.389 103.442 C 246.764 103.119,246.160 102.500,246.046 102.065 C 245.933 101.631,245.381 101.101,244.821 100.888 C 244.261 100.675,243.634 100.056,243.427 99.513 C 243.221 98.970,242.607 98.356,242.064 98.150 C 241.521 97.943,240.905 97.324,240.696 96.774 C 240.480 96.204,239.822 95.602,239.169 95.374 C 238.457 95.126,237.975 94.656,237.900 94.137 C 237.834 93.677,237.354 93.090,236.834 92.831 C 236.314 92.573,235.688 91.987,235.443 91.529 C 235.198 91.071,234.572 90.486,234.052 90.229 C 233.532 89.972,232.932 89.369,232.720 88.889 C 232.508 88.409,232.041 87.923,231.684 87.810 C 231.326 87.696,230.580 87.009,230.025 86.282 C 229.471 85.555,228.694 84.858,228.300 84.733 C 227.906 84.607,227.340 84.050,227.042 83.494 C 226.745 82.938,226.100 82.331,225.610 82.145 C 225.119 81.958,224.550 81.364,224.345 80.825 C 224.140 80.286,223.733 79.844,223.441 79.844 C 223.149 79.844,222.362 79.275,221.693 78.578 C 220.150 76.975,218.053 75.067,215.378 72.833 C 214.223 71.870,212.832 70.581,212.287 69.971 C 211.741 69.360,210.813 68.611,210.224 68.305 C 209.635 68.000,209.153 67.483,209.153 67.157 C 209.153 66.831,208.613 66.337,207.953 66.060 C 207.294 65.782,206.545 65.137,206.290 64.626 C 206.035 64.114,205.403 63.485,204.885 63.226 C 204.367 62.968,203.708 62.309,203.422 61.763 C 203.136 61.217,202.502 60.669,202.014 60.547 C 201.520 60.423,200.946 59.844,200.718 59.239 C 200.272 58.058,199.563 57.774,197.468 57.941 M199.513 58.965 C 199.888 59.249,200.199 59.638,200.203 59.829 C 200.208 60.019,201.115 60.964,202.219 61.928 C 203.323 62.892,204.646 64.119,205.160 64.654 C 206.682 66.242,207.039 66.577,213.044 72.055 C 214.805 73.661,217.386 76.027,218.778 77.313 C 220.171 78.598,221.686 79.917,222.145 80.244 C 223.061 80.897,226.253 83.851,231.077 88.510 C 232.795 90.170,234.349 91.529,234.530 91.529 C 234.711 91.529,234.859 91.748,234.860 92.016 C 234.861 92.283,235.378 92.849,236.010 93.272 C 236.641 93.695,237.372 94.440,237.632 94.927 C 237.893 95.414,238.242 95.813,238.407 95.813 C 238.572 95.813,245.375 102.429,253.526 110.516 C 261.676 118.603,269.617 126.417,271.173 127.881 C 276.712 133.094,278.769 134.975,280.464 136.376 C 281.408 137.157,283.096 138.646,284.214 139.686 C 285.332 140.726,287.584 142.804,289.219 144.304 C 290.853 145.803,294.117 148.914,296.471 151.217 C 298.825 153.520,300.899 155.404,301.080 155.404 C 301.260 155.404,301.523 155.765,301.663 156.207 C 301.803 156.648,302.337 157.201,302.850 157.434 C 303.363 157.668,303.886 158.185,304.012 158.583 C 304.139 158.982,304.718 159.553,305.299 159.854 C 305.881 160.155,306.598 160.851,306.892 161.401 C 307.187 161.952,307.722 162.495,308.082 162.610 C 308.442 162.724,308.948 163.213,309.207 163.697 C 309.465 164.180,310.168 164.905,310.767 165.308 C 311.366 165.711,312.190 166.539,312.598 167.148 C 313.006 167.757,313.456 168.255,313.598 168.256 C 313.740 168.257,317.461 171.850,321.866 176.241 C 326.272 180.633,330.011 184.226,330.177 184.227 C 330.342 184.228,330.828 184.753,331.256 185.394 C 331.685 186.036,332.210 186.562,332.425 186.563 C 332.639 186.564,333.165 187.090,333.593 187.731 C 334.021 188.373,334.575 188.898,334.824 188.899 C 335.073 188.899,335.687 189.382,336.188 189.971 C 336.690 190.560,339.641 193.291,342.747 196.039 C 351.690 203.953,365.336 216.916,365.336 217.497 C 365.336 217.921,320.955 262.123,320.529 262.123 C 320.324 262.123,320.155 262.342,320.155 262.610 C 320.154 262.877,319.655 263.430,319.046 263.838 C 318.437 264.246,317.605 265.078,317.197 265.687 C 316.789 266.296,316.348 266.795,316.217 266.795 C 316.085 266.796,310.529 272.186,303.870 278.773 C 282.134 300.273,284.096 299.127,278.690 293.476 C 277.358 292.084,276.085 290.944,275.861 290.944 C 275.638 290.944,275.173 290.515,274.829 289.990 C 274.486 289.465,273.309 288.195,272.215 287.166 C 271.120 286.138,269.980 285.066,269.680 284.783 C 269.083 284.220,269.571 282.765,270.357 282.765 C 270.587 282.765,271.715 281.758,272.864 280.526 C 274.014 279.294,275.113 278.134,275.307 277.947 C 275.502 277.761,276.713 276.557,277.998 275.272 C 279.283 273.986,280.534 272.737,280.778 272.495 C 281.021 272.253,282.177 271.091,283.346 269.912 C 284.515 268.734,285.607 267.646,285.773 267.494 C 285.940 267.342,294.106 259.236,303.921 249.480 C 313.736 239.725,321.892 231.743,322.045 231.743 C 322.199 231.743,322.635 231.217,323.015 230.574 C 323.395 229.932,323.958 229.406,324.267 229.406 C 324.577 229.406,324.830 229.258,324.830 229.076 C 324.830 228.738,328.126 225.385,331.721 222.068 L 333.745 220.201 333.246 218.751 C 332.972 217.953,332.394 217.053,331.961 216.749 C 331.528 216.446,330.576 215.621,329.845 214.915 C 328.590 213.703,323.263 208.862,321.000 206.879 C 317.347 203.675,305.867 192.853,303.544 190.423 C 300.169 186.891,272.895 160.078,272.678 160.078 C 272.511 160.078,272.172 159.635,271.926 159.093 C 271.679 158.552,271.196 158.001,270.852 157.869 C 270.508 157.737,268.505 155.945,266.401 153.887 C 264.296 151.830,262.166 149.792,261.667 149.359 C 259.714 147.665,252.507 141.196,251.217 139.979 C 250.467 139.272,248.556 137.502,246.969 136.046 C 241.394 130.931,241.003 130.558,238.058 127.544 C 236.925 126.385,235.786 125.300,235.526 125.133 C 235.266 124.966,234.864 124.479,234.632 124.051 C 234.400 123.622,233.840 123.103,233.388 122.896 C 232.935 122.690,232.350 122.120,232.088 121.631 C 231.826 121.141,231.488 120.740,231.338 120.740 C 231.188 120.740,224.338 114.079,216.116 105.937 C 207.895 97.796,200.625 90.611,199.961 89.972 L 198.754 88.808 197.706 89.682 C 197.129 90.162,191.067 96.076,184.235 102.824 C 167.248 119.600,159.733 126.895,150.132 135.930 C 142.243 143.353,134.848 150.369,130.928 154.149 C 128.645 156.350,126.639 158.278,126.471 158.433 C 126.302 158.588,125.864 159.024,125.497 159.402 C 125.130 159.781,122.201 162.637,118.987 165.751 C 115.774 168.864,112.970 171.588,112.756 171.805 C 112.110 172.458,108.104 176.428,107.781 176.735 C 107.616 176.892,107.076 177.459,106.582 177.994 C 106.087 178.530,105.346 179.266,104.935 179.630 C 104.524 179.994,104.012 180.480,103.797 180.710 C 103.583 180.939,102.970 181.557,102.434 182.083 C 101.899 182.608,101.166 183.349,100.807 183.730 C 100.447 184.110,99.922 184.618,99.638 184.860 C 99.355 185.101,98.844 185.627,98.503 186.028 C 98.161 186.429,97.503 187.016,97.041 187.331 C 96.578 187.647,96.113 188.179,96.007 188.513 C 95.901 188.847,95.288 189.431,94.645 189.811 C 94.002 190.191,93.476 190.750,93.476 191.054 C 93.476 191.358,92.950 191.878,92.308 192.210 C 91.665 192.543,91.139 192.961,91.139 193.139 C 91.139 193.558,86.427 198.247,86.006 198.247 C 85.830 198.247,85.686 198.500,85.686 198.810 C 85.686 199.119,85.184 199.668,84.571 200.031 C 83.957 200.393,83.159 201.192,82.796 201.805 C 82.434 202.419,81.928 202.922,81.672 202.922 C 81.417 202.923,80.874 203.422,80.466 204.031 C 80.058 204.640,79.226 205.472,78.617 205.880 C 78.008 206.287,77.509 206.840,77.508 207.108 C 77.508 207.376,77.372 207.595,77.206 207.595 C 77.040 207.595,75.420 209.021,73.605 210.764 C 71.790 212.507,69.452 214.680,68.410 215.592 C 66.139 217.578,66.247 218.767,68.938 221.375 C 69.795 222.206,70.497 223.038,70.497 223.225 C 70.497 223.411,70.696 223.564,70.939 223.564 C 71.182 223.564,71.760 223.972,72.223 224.472 C 72.686 224.971,75.598 227.635,78.694 230.391 C 81.790 233.146,85.444 236.462,86.814 237.759 C 89.977 240.753,94.837 245.412,95.500 246.085 C 98.572 249.206,101.120 251.607,101.360 251.607 C 101.522 251.607,101.655 251.870,101.655 252.191 C 101.655 252.512,101.796 252.775,101.969 252.775 C 102.413 252.775,107.498 257.813,107.498 258.253 C 107.498 258.453,107.751 258.617,108.060 258.617 C 108.369 258.617,108.919 259.119,109.281 259.733 C 109.643 260.347,110.442 261.145,111.056 261.508 C 111.669 261.870,112.171 262.420,112.171 262.729 C 112.171 263.038,112.316 263.291,112.494 263.291 C 112.671 263.291,114.873 265.307,117.388 267.770 C 119.902 270.234,122.079 272.250,122.226 272.250 C 122.373 272.251,122.843 272.776,123.272 273.418 C 123.700 274.059,124.237 274.584,124.466 274.585 C 124.694 274.586,125.399 275.156,126.031 275.852 C 126.664 276.548,128.446 278.257,129.991 279.649 C 134.560 283.767,134.692 283.193,127.514 290.372 C 119.597 298.288,119.783 298.241,114.703 293.648 C 112.775 291.905,109.986 289.400,108.504 288.082 C 105.506 285.415,102.479 282.512,95.364 275.483 C 92.719 272.870,90.317 270.504,90.026 270.225 C 89.735 269.946,88.855 269.060,88.070 268.257 C 87.285 267.454,86.428 266.796,86.165 266.796 C 85.902 266.796,85.686 266.623,85.686 266.412 C 85.686 265.910,78.394 258.617,77.892 258.617 C 77.680 258.617,77.507 258.425,77.507 258.189 C 77.507 257.704,70.139 250.438,69.647 250.438 C 69.472 250.438,69.328 250.167,69.328 249.836 C 69.328 249.505,68.817 248.940,68.193 248.582 C 67.569 248.224,66.771 247.443,66.419 246.848 C 66.067 246.252,65.570 245.764,65.314 245.763 C 65.058 245.763,64.499 245.237,64.070 244.596 C 63.642 243.954,63.153 243.429,62.984 243.429 C 62.816 243.428,61.936 242.683,61.028 241.772 C 59.043 239.780,55.990 236.976,51.022 232.583 C 47.138 229.148,42.832 225.238,39.493 222.113 C 36.871 219.658,36.232 217.843,37.353 216.029 C 37.992 214.996,48.100 204.955,60.744 192.795 C 76.989 177.170,83.350 170.898,83.350 170.501 C 83.350 170.338,83.509 170.204,83.704 170.204 C 83.967 170.204,93.902 160.701,97.955 156.573 C 98.169 156.355,99.174 155.324,100.187 154.282 C 101.200 153.240,102.471 152.099,103.011 151.745 C 103.550 151.391,103.992 150.918,103.992 150.694 C 103.992 150.469,104.894 149.465,105.997 148.463 C 108.130 146.523,108.163 146.491,111.277 143.279 C 114.031 140.437,114.175 140.291,115.287 139.221 C 115.823 138.706,116.388 138.149,116.542 137.983 C 116.944 137.554,118.695 135.807,119.186 135.346 C 119.716 134.847,120.711 133.858,121.762 132.783 C 122.825 131.697,123.565 130.958,124.547 130.000 C 124.981 129.577,125.485 129.069,125.667 128.872 C 125.849 128.674,126.436 128.082,126.972 127.557 C 127.507 127.031,128.230 126.312,128.578 125.959 C 128.926 125.606,129.562 124.966,129.990 124.537 C 130.419 124.109,131.010 123.502,131.305 123.189 C 131.599 122.876,132.804 121.683,133.982 120.539 C 135.161 119.395,136.351 118.227,136.627 117.944 C 137.070 117.491,154.417 100.126,155.429 99.124 C 155.645 98.909,158.005 96.543,160.674 93.866 C 163.343 91.188,165.706 88.822,165.926 88.608 C 166.388 88.156,170.842 83.690,171.276 83.243 C 171.436 83.078,172.006 82.521,172.541 82.006 C 173.077 81.491,173.690 80.881,173.905 80.651 C 176.362 78.016,195.950 58.855,196.349 58.697 C 197.319 58.311,198.820 58.439,199.513 58.965 M198.437 105.080 C 198.226 105.267,197.309 105.630,196.400 105.889 C 195.231 106.221,194.576 106.689,194.164 107.485 C 193.844 108.104,193.229 108.723,192.797 108.860 C 192.366 108.997,191.783 109.546,191.503 110.081 C 191.223 110.615,190.570 111.264,190.052 111.522 C 189.534 111.781,188.897 112.419,188.636 112.942 C 188.376 113.464,187.786 114.031,187.326 114.201 C 186.866 114.371,186.396 114.867,186.282 115.304 C 186.168 115.740,185.574 116.356,184.962 116.673 C 184.350 116.989,183.591 117.748,183.274 118.360 C 182.958 118.972,182.342 119.566,181.906 119.680 C 181.469 119.794,180.973 120.264,180.803 120.724 C 180.632 121.185,180.062 121.776,179.536 122.038 C 179.009 122.301,178.350 122.991,178.071 123.573 C 177.793 124.154,177.151 124.734,176.645 124.861 C 176.111 124.995,175.628 125.479,175.494 126.012 C 175.367 126.518,174.782 127.160,174.194 127.440 C 173.607 127.720,172.966 128.312,172.771 128.755 C 172.575 129.199,171.901 129.857,171.273 130.217 C 170.644 130.578,170.042 131.208,169.935 131.617 C 169.828 132.026,169.232 132.572,168.609 132.829 C 167.903 133.122,167.478 133.586,167.478 134.064 C 167.478 134.554,167.064 134.985,166.324 135.265 C 165.689 135.504,164.983 136.151,164.755 136.701 C 164.527 137.252,163.954 137.873,163.482 138.082 C 163.010 138.291,162.421 138.872,162.173 139.374 C 161.925 139.876,161.177 140.618,160.511 141.024 C 159.844 141.429,159.299 142.031,159.299 142.360 C 159.299 142.690,158.871 143.123,158.347 143.322 C 157.824 143.521,157.156 144.141,156.863 144.700 C 156.570 145.259,155.903 145.928,155.380 146.186 C 154.858 146.444,154.262 147.034,154.057 147.499 C 153.851 147.963,153.278 148.527,152.783 148.753 C 152.288 148.978,151.714 149.606,151.508 150.148 C 151.302 150.690,150.690 151.302,150.148 151.508 C 149.606 151.714,148.970 152.305,148.735 152.822 C 148.500 153.338,147.886 153.952,147.371 154.187 C 146.856 154.422,146.249 155.021,146.022 155.518 C 145.795 156.016,145.097 156.617,144.470 156.854 C 143.742 157.128,143.330 157.561,143.330 158.049 C 143.330 158.529,142.903 158.992,142.187 159.288 C 141.526 159.562,140.885 160.218,140.667 160.842 C 140.440 161.495,139.911 162.017,139.328 162.163 C 138.752 162.308,138.170 162.876,137.879 163.578 C 137.572 164.320,137.112 164.752,136.628 164.752 C 136.138 164.752,135.706 165.165,135.430 165.897 C 135.176 166.568,134.621 167.137,134.087 167.271 C 133.587 167.397,132.980 167.932,132.739 168.460 C 132.498 168.989,131.716 169.767,131.000 170.189 C 130.284 170.612,129.698 171.230,129.698 171.564 C 129.698 171.898,129.258 172.339,128.720 172.543 C 128.181 172.748,127.538 173.361,127.290 173.906 C 127.041 174.451,126.437 174.998,125.947 175.121 C 125.457 175.244,124.844 175.823,124.585 176.409 C 124.326 176.994,123.617 177.693,123.010 177.961 C 122.399 178.232,121.801 178.869,121.671 179.390 C 121.541 179.908,121.207 180.331,120.928 180.331 C 120.650 180.331,119.194 181.514,117.694 182.960 C 116.193 184.406,112.814 187.605,110.185 190.068 C 102.595 197.180,100.932 198.918,100.321 200.381 C 100.004 201.139,99.469 201.753,99.125 201.753 C 98.783 201.753,98.205 202.275,97.840 202.913 C 97.475 203.551,96.738 204.258,96.203 204.483 C 95.339 204.847,93.374 206.566,87.745 211.886 C 86.842 212.739,85.965 213.438,85.797 213.440 C 85.629 213.441,85.193 213.967,84.828 214.608 C 84.463 215.249,83.900 215.774,83.576 215.774 C 81.950 215.774,81.931 218.474,83.552 219.212 C 84.083 219.454,84.518 219.979,84.518 220.379 C 84.518 221.163,85.662 222.395,86.389 222.395 C 86.634 222.395,87.107 222.921,87.439 223.564 C 87.771 224.206,88.308 224.732,88.631 224.732 C 88.954 224.732,89.569 225.327,89.998 226.054 C 90.427 226.780,91.120 227.464,91.538 227.574 C 91.956 227.683,92.473 228.231,92.686 228.791 C 92.898 229.351,93.506 229.974,94.035 230.175 C 94.564 230.376,95.261 231.052,95.584 231.677 C 95.907 232.301,96.527 232.905,96.961 233.019 C 97.396 233.133,97.922 233.676,98.131 234.226 C 98.344 234.785,98.932 235.332,99.466 235.466 C 100.036 235.609,100.513 236.080,100.653 236.638 C 100.782 237.151,101.373 237.822,101.967 238.129 C 102.560 238.436,103.281 239.127,103.569 239.664 C 103.857 240.202,104.505 240.745,105.010 240.872 C 105.549 241.007,106.025 241.491,106.164 242.045 C 106.306 242.611,106.838 243.139,107.497 243.369 C 108.099 243.579,108.709 244.118,108.852 244.567 C 108.994 245.016,109.612 245.642,110.224 245.959 C 110.836 246.276,111.436 246.847,111.557 247.228 C 111.678 247.610,112.392 248.253,113.143 248.657 C 113.894 249.061,114.508 249.608,114.508 249.870 C 114.508 250.133,114.987 250.662,115.573 251.046 C 116.158 251.430,117.170 252.282,117.821 252.941 C 120.047 255.193,125.091 259.590,126.005 260.076 C 126.507 260.343,127.027 260.904,127.160 261.322 C 127.292 261.741,127.727 262.186,128.126 262.313 C 128.524 262.439,129.313 263.149,129.878 263.891 C 130.444 264.632,131.156 265.239,131.461 265.239 C 131.766 265.239,132.287 265.764,132.619 266.407 C 132.989 267.122,133.530 267.575,134.013 267.575 C 134.540 267.575,134.938 267.964,135.210 268.746 C 135.462 269.470,135.975 270.007,136.552 270.151 C 137.065 270.280,137.707 270.847,137.977 271.411 C 138.247 271.975,138.949 272.667,139.536 272.949 C 140.123 273.230,140.604 273.710,140.604 274.014 C 140.604 275.906,143.737 276.046,144.693 274.197 C 145.010 273.584,145.623 272.971,146.056 272.833 C 146.490 272.696,147.103 272.083,147.420 271.470 C 147.736 270.858,148.350 270.245,148.783 270.107 C 149.216 269.970,149.824 269.366,150.135 268.766 C 150.445 268.166,151.070 267.578,151.523 267.459 C 151.975 267.341,152.443 266.873,152.561 266.420 C 152.680 265.967,153.288 265.333,153.912 265.010 C 154.537 264.687,155.213 263.989,155.414 263.460 C 155.615 262.931,156.223 262.330,156.765 262.124 C 157.307 261.917,157.952 261.307,158.198 260.767 C 158.444 260.227,158.853 259.786,159.106 259.786 C 160.981 259.786,161.410 256.646,159.651 255.794 C 158.988 255.473,158.238 254.794,157.985 254.285 C 157.731 253.776,157.065 253.140,156.506 252.871 C 155.946 252.603,155.383 251.965,155.255 251.454 C 155.112 250.886,154.635 250.427,154.031 250.276 C 153.482 250.138,152.879 249.605,152.681 249.083 C 152.483 248.563,151.811 247.874,151.186 247.551 C 150.561 247.228,149.957 246.609,149.844 246.174 C 149.730 245.740,149.180 245.210,148.621 244.998 C 148.062 244.785,147.404 244.170,147.158 243.630 C 146.912 243.090,146.556 242.648,146.368 242.648 C 146.072 242.648,144.987 241.681,142.079 238.825 C 141.711 238.464,141.214 237.994,140.973 237.780 C 140.732 237.566,139.865 236.777,139.048 236.027 C 138.231 235.278,136.642 233.875,135.517 232.911 C 132.298 230.152,130.521 228.533,129.211 227.167 C 128.543 226.470,127.717 225.901,127.375 225.901 C 127.033 225.901,126.558 225.383,126.319 224.750 C 126.044 224.022,125.511 223.505,124.870 223.344 C 124.221 223.181,123.856 222.822,123.856 222.347 C 123.856 221.883,123.350 221.362,122.508 220.961 C 121.690 220.571,121.009 219.883,120.774 219.210 C 120.561 218.600,120.116 217.997,119.785 217.870 C 119.294 217.681,119.362 217.497,120.156 216.873 C 120.691 216.452,121.130 215.866,121.130 215.572 C 121.130 215.278,121.611 214.808,122.201 214.528 C 122.790 214.247,123.440 213.635,123.646 213.167 C 123.852 212.699,124.332 212.235,124.714 212.135 C 125.095 212.036,125.715 211.411,126.092 210.747 C 126.469 210.083,127.046 209.453,127.375 209.347 C 128.323 209.040,131.526 205.858,131.821 204.931 C 131.967 204.468,132.332 204.090,132.632 204.090 C 132.931 204.090,134.562 202.731,136.257 201.071 C 137.951 199.411,142.534 194.985,146.441 191.237 C 150.347 187.488,157.224 180.784,161.722 176.339 C 166.221 171.894,170.062 168.257,170.257 168.257 C 170.453 168.257,170.786 167.802,170.998 167.246 C 171.209 166.689,171.738 166.141,172.172 166.028 C 172.607 165.914,173.226 165.310,173.549 164.685 C 173.872 164.061,174.583 163.380,175.129 163.172 C 175.675 162.965,176.208 162.468,176.312 162.069 C 176.416 161.670,176.928 161.115,177.449 160.836 C 177.971 160.557,178.841 159.746,179.384 159.035 C 179.927 158.323,180.625 157.741,180.935 157.741 C 181.246 157.741,181.500 157.561,181.500 157.340 C 181.500 156.843,186.478 151.899,186.978 151.899 C 187.178 151.899,187.342 151.628,187.342 151.296 C 187.342 150.965,187.839 150.409,188.447 150.060 C 189.055 149.711,189.713 149.062,189.908 148.619 C 190.103 148.175,190.735 147.588,191.311 147.314 C 191.887 147.039,192.469 146.467,192.604 146.042 C 192.739 145.617,193.351 145.010,193.963 144.693 C 194.575 144.377,195.189 143.763,195.326 143.330 C 195.464 142.897,196.090 142.277,196.717 141.953 C 197.344 141.628,197.858 141.139,197.858 140.866 C 197.858 139.130,200.796 139.539,201.914 141.431 C 202.278 142.047,202.897 142.551,203.290 142.551 C 203.727 142.551,204.100 142.928,204.248 143.519 C 204.399 144.121,204.862 144.580,205.472 144.733 C 206.012 144.868,206.719 145.492,207.043 146.119 C 207.367 146.746,208.065 147.423,208.594 147.624 C 209.123 147.825,209.722 148.426,209.925 148.960 C 210.132 149.504,210.726 150.038,211.280 150.177 C 211.823 150.313,212.487 150.888,212.756 151.454 C 213.026 152.020,213.629 152.651,214.097 152.857 C 214.564 153.063,215.029 153.543,215.129 153.925 C 215.228 154.306,215.843 154.925,216.496 155.299 C 217.148 155.673,217.858 156.367,218.074 156.841 C 218.290 157.316,219.000 157.979,219.652 158.316 C 220.304 158.654,220.837 159.196,220.837 159.522 C 220.837 159.848,221.335 160.400,221.943 160.749 C 222.551 161.098,223.208 161.744,223.403 162.184 C 223.599 162.625,224.186 163.196,224.708 163.454 C 225.231 163.712,225.887 164.360,226.167 164.895 C 226.447 165.429,227.023 165.977,227.447 166.111 C 227.870 166.246,228.441 166.822,228.714 167.392 C 228.988 167.962,229.642 168.644,230.169 168.906 C 230.695 169.169,231.260 169.746,231.424 170.189 C 231.588 170.632,232.168 171.164,232.713 171.372 C 233.258 171.579,233.873 172.193,234.080 172.736 C 234.286 173.279,234.900 173.893,235.443 174.099 C 235.986 174.306,236.593 174.901,236.791 175.422 C 236.989 175.943,237.514 176.485,237.957 176.625 C 238.400 176.766,239.032 177.402,239.361 178.038 C 239.690 178.675,240.391 179.360,240.919 179.561 C 241.447 179.762,242.064 180.331,242.289 180.826 C 242.515 181.321,243.082 181.894,243.550 182.100 C 244.018 182.305,244.572 182.863,244.781 183.339 C 244.990 183.815,245.624 184.396,246.191 184.631 C 246.758 184.865,247.417 185.487,247.656 186.013 C 247.896 186.538,248.534 187.136,249.075 187.342 C 249.616 187.547,250.260 188.157,250.505 188.697 C 250.751 189.237,251.107 189.679,251.295 189.679 C 251.483 189.679,252.294 190.336,253.096 191.139 C 254.425 192.470,255.799 193.715,262.614 199.762 C 263.848 200.857,265.010 201.753,265.197 201.753 C 265.384 201.753,265.631 202.113,265.747 202.554 C 265.862 202.995,266.466 203.548,267.089 203.783 C 267.712 204.018,268.383 204.577,268.580 205.025 C 268.777 205.472,269.421 206.068,270.010 206.349 C 270.599 206.629,271.081 207.118,271.081 207.435 C 271.081 207.751,271.694 208.373,272.444 208.815 C 273.194 209.257,273.807 209.871,273.807 210.178 C 273.807 210.486,274.402 211.088,275.129 211.517 C 275.855 211.946,276.541 212.644,276.652 213.070 C 276.763 213.495,277.359 214.019,277.975 214.234 C 278.657 214.472,279.263 215.066,279.521 215.751 C 279.796 216.477,280.273 216.922,280.869 217.007 C 282.042 217.173,282.071 217.877,280.911 218.041 C 280.405 218.113,279.775 218.659,279.432 219.324 C 279.102 219.961,278.412 220.674,277.897 220.908 C 277.383 221.142,276.787 221.836,276.573 222.449 C 276.309 223.207,275.918 223.564,275.352 223.564 C 274.787 223.564,274.379 223.933,274.086 224.709 C 273.837 225.370,273.277 225.949,272.763 226.078 C 272.231 226.212,271.771 226.704,271.622 227.298 C 271.483 227.850,270.952 228.454,270.431 228.652 C 269.914 228.849,269.193 229.528,268.829 230.163 C 268.465 230.797,267.788 231.411,267.326 231.527 C 266.856 231.645,266.313 232.232,266.095 232.857 C 265.848 233.566,265.336 234.069,264.699 234.229 C 264.103 234.378,263.603 234.838,263.473 235.355 C 263.352 235.836,262.735 236.527,262.100 236.891 C 261.466 237.255,260.786 237.976,260.590 238.493 C 260.393 239.011,259.799 239.543,259.269 239.676 C 258.661 239.828,258.155 240.350,257.898 241.088 C 257.618 241.889,257.231 242.259,256.670 242.259 C 256.115 242.259,255.723 242.625,255.456 243.392 C 255.214 244.085,254.695 244.616,254.119 244.761 C 253.546 244.905,253.081 245.377,252.933 245.967 C 252.787 246.547,252.173 247.182,251.404 247.547 C 250.678 247.891,250.021 248.549,249.893 249.060 C 249.761 249.583,249.272 250.061,248.728 250.198 C 248.146 250.344,247.635 250.878,247.381 251.604 C 247.099 252.414,246.716 252.775,246.140 252.775 C 245.576 252.775,245.168 253.145,244.875 253.921 C 244.637 254.551,244.071 255.159,243.617 255.273 C 241.646 255.768,241.482 259.164,243.405 259.667 C 243.811 259.773,244.346 260.350,244.594 260.949 C 244.896 261.678,245.421 262.112,246.183 262.265 C 247.002 262.429,247.322 262.719,247.322 263.300 C 247.322 263.777,247.773 264.365,248.424 264.739 C 249.030 265.087,249.811 265.867,250.159 266.473 C 250.509 267.083,251.127 267.575,251.541 267.575 C 252.008 267.575,252.475 268.019,252.777 268.749 C 253.053 269.416,253.651 270.020,254.162 270.148 C 254.691 270.281,255.221 270.834,255.451 271.492 C 255.697 272.198,256.209 272.704,256.840 272.862 C 257.389 273.000,257.838 273.357,257.838 273.655 C 257.838 276.204,262.579 276.595,264.500 274.204 C 265.186 273.351,266.028 272.564,266.372 272.455 C 266.717 272.346,267.172 271.860,267.384 271.376 C 267.597 270.893,268.155 270.328,268.625 270.121 C 269.096 269.915,269.705 269.326,269.980 268.812 C 270.255 268.298,270.881 267.725,271.372 267.539 C 271.862 267.352,272.432 266.756,272.638 266.214 C 272.844 265.672,273.435 265.037,273.951 264.801 C 274.467 264.566,275.082 263.951,275.317 263.435 C 275.553 262.919,276.170 262.335,276.690 262.137 C 277.210 261.940,277.746 261.430,277.881 261.005 C 278.016 260.580,278.732 259.874,279.472 259.438 C 280.212 259.001,280.818 258.379,280.818 258.056 C 280.818 257.733,281.331 257.203,281.959 256.879 C 282.586 256.554,283.212 255.935,283.350 255.501 C 283.487 255.068,284.079 254.466,284.665 254.163 C 285.250 253.860,285.935 253.161,286.187 252.610 C 286.438 252.058,286.916 251.607,287.249 251.607 C 287.582 251.607,288.206 251.012,288.635 250.285 C 289.063 249.558,289.756 248.874,290.175 248.765 C 290.593 248.656,291.109 248.108,291.322 247.548 C 291.535 246.988,292.154 246.360,292.697 246.154 C 293.240 245.947,293.854 245.334,294.060 244.791 C 294.267 244.247,294.894 243.629,295.454 243.416 C 296.014 243.203,296.562 242.686,296.672 242.268 C 296.781 241.850,297.465 241.157,298.192 240.728 C 298.919 240.299,299.513 239.684,299.513 239.361 C 299.513 239.038,300.027 238.508,300.654 238.184 C 301.281 237.859,301.907 237.239,302.045 236.806 C 302.182 236.373,302.796 235.760,303.408 235.443 C 304.020 235.126,304.632 234.520,304.767 234.094 C 304.902 233.669,305.478 233.098,306.049 232.824 C 306.619 232.551,307.300 231.896,307.562 231.370 C 307.825 230.843,308.402 230.278,308.845 230.114 C 309.288 229.951,309.821 229.370,310.028 228.825 C 310.235 228.280,310.838 227.670,311.367 227.468 C 311.896 227.267,312.593 226.592,312.916 225.967 C 313.239 225.342,313.859 224.738,314.293 224.625 C 314.728 224.511,315.256 223.963,315.468 223.407 C 315.679 222.850,316.115 222.395,316.437 222.395 C 318.402 222.395,318.589 218.567,316.647 218.112 C 316.016 217.964,315.631 217.568,315.546 216.978 C 315.462 216.394,315.005 215.916,314.265 215.637 C 313.632 215.398,313.022 214.836,312.910 214.389 C 312.798 213.942,312.180 213.265,311.537 212.885 C 310.894 212.506,310.174 211.769,309.937 211.249 C 309.700 210.728,309.113 210.204,308.633 210.083 C 308.133 209.958,307.658 209.457,307.520 208.911 C 307.389 208.386,306.846 207.791,306.313 207.589 C 305.781 207.387,305.150 206.791,304.911 206.266 C 304.671 205.741,303.988 205.109,303.391 204.862 C 302.769 204.604,302.204 204.002,302.065 203.447 C 301.915 202.851,301.395 202.332,300.704 202.091 C 300.023 201.854,299.492 201.332,299.348 200.759 C 299.208 200.199,298.733 199.722,298.177 199.583 C 297.646 199.449,297.044 198.869,296.783 198.239 C 296.514 197.590,295.854 196.966,295.192 196.735 C 294.570 196.518,294.060 196.062,294.060 195.723 C 294.060 195.383,293.447 194.743,292.697 194.301 C 291.947 193.859,291.334 193.243,291.334 192.933 C 291.334 192.623,290.817 192.072,290.186 191.710 C 289.554 191.347,288.855 190.651,288.633 190.162 C 288.410 189.673,287.785 189.105,287.244 188.900 C 286.704 188.694,286.079 188.126,285.856 187.637 C 285.634 187.148,284.935 186.452,284.303 186.090 C 283.672 185.727,283.155 185.160,283.155 184.828 C 283.155 184.497,282.990 184.226,282.788 184.226 C 282.587 184.226,281.632 183.481,280.668 182.571 C 278.832 180.838,273.670 176.043,271.129 173.710 C 270.313 172.960,268.905 171.733,268.000 170.983 C 267.095 170.234,265.809 169.051,265.141 168.354 C 264.473 167.658,263.627 167.089,263.262 167.089 C 262.873 167.089,262.493 166.674,262.346 166.090 C 262.192 165.476,261.685 164.948,261.030 164.720 C 260.444 164.515,259.793 163.960,259.583 163.486 C 259.373 163.011,258.791 162.421,258.289 162.173 C 257.787 161.925,257.045 161.177,256.639 160.511 C 256.234 159.844,255.633 159.299,255.303 159.299 C 254.973 159.299,254.540 158.869,254.340 158.344 C 254.140 157.819,253.456 157.119,252.819 156.790 C 252.183 156.461,251.547 155.829,251.406 155.386 C 251.266 154.943,250.725 154.419,250.205 154.221 C 249.685 154.024,249.064 153.432,248.825 152.907 C 248.586 152.381,247.897 151.747,247.294 151.497 C 246.661 151.235,246.148 150.691,246.079 150.209 C 246.013 149.750,245.467 149.139,244.866 148.852 C 244.265 148.565,243.611 147.903,243.413 147.381 C 243.214 146.859,242.608 146.263,242.066 146.057 C 241.524 145.851,240.889 145.260,240.653 144.744 C 240.418 144.228,239.803 143.613,239.287 143.378 C 238.771 143.143,238.187 142.525,237.989 142.005 C 237.792 141.485,237.267 140.945,236.824 140.804 C 236.381 140.664,235.755 140.038,235.432 139.413 C 235.109 138.789,234.425 138.173,233.912 138.044 C 233.350 137.903,232.883 137.426,232.737 136.845 C 232.585 136.239,232.064 135.730,231.340 135.477 C 230.613 135.224,230.185 134.804,230.185 134.344 C 230.185 133.923,229.682 133.353,229.000 133.000 C 228.348 132.663,227.648 131.949,227.444 131.413 C 227.240 130.877,226.584 130.267,225.985 130.059 C 225.335 129.832,224.724 129.225,224.471 128.553 C 224.197 127.826,223.719 127.381,223.123 127.297 C 222.503 127.209,222.158 126.869,222.072 126.259 C 221.990 125.679,221.553 125.215,220.860 124.974 C 220.264 124.766,219.588 124.183,219.358 123.679 C 219.128 123.174,218.403 122.444,217.746 122.056 C 217.089 121.668,216.461 121.064,216.350 120.715 C 216.239 120.365,215.711 119.880,215.177 119.636 C 214.642 119.393,214.004 118.753,213.758 118.214 C 213.513 117.675,213.121 117.235,212.888 117.235 C 212.654 117.235,211.938 116.711,211.295 116.070 C 208.950 113.732,205.030 110.140,203.712 109.124 C 202.969 108.551,201.855 107.512,201.237 106.816 C 200.620 106.120,199.884 105.550,199.603 105.550 C 199.321 105.550,199.031 105.368,198.957 105.146 C 198.879 104.913,198.659 104.885,198.437 105.080 M200.101 107.156 C 200.474 107.611,201.012 108.180,201.297 108.422 C 202.133 109.130,205.288 111.937,207.543 113.979 C 208.693 115.020,210.095 116.282,210.659 116.784 C 215.265 120.883,221.610 126.774,223.642 128.837 C 223.900 129.099,224.563 129.749,226.251 131.392 C 226.658 131.789,227.185 132.315,227.422 132.561 C 227.658 132.807,230.130 135.261,232.913 138.013 C 235.697 140.765,237.975 143.138,237.975 143.285 C 237.975 143.431,238.500 143.862,239.143 144.242 C 239.786 144.621,240.312 145.185,240.312 145.494 C 240.312 145.803,240.458 146.056,240.636 146.056 C 241.060 146.056,246.154 151.151,246.154 151.574 C 246.154 151.753,246.425 151.899,246.756 151.899 C 247.087 151.899,247.652 152.409,248.010 153.034 C 248.368 153.658,249.149 154.456,249.744 154.808 C 250.340 155.160,250.828 155.701,250.828 156.010 C 250.828 156.320,250.973 156.573,251.151 156.573 C 251.634 156.573,256.670 161.528,256.670 162.004 C 256.670 162.230,256.872 162.415,257.120 162.415 C 257.368 162.415,258.844 163.685,260.401 165.239 C 261.958 166.792,264.497 169.202,266.044 170.594 C 267.590 171.986,269.312 173.558,269.870 174.087 C 270.429 174.615,272.726 176.700,274.976 178.718 C 282.498 185.470,289.499 192.116,300.781 203.216 C 300.943 203.375,302.014 204.469,303.162 205.648 C 304.309 206.826,305.579 208.069,305.983 208.411 C 306.388 208.752,306.977 209.410,307.292 209.873 C 307.608 210.335,308.169 210.810,308.538 210.927 C 308.908 211.044,309.322 211.492,309.459 211.923 C 309.595 212.353,310.143 212.904,310.676 213.147 C 311.209 213.390,311.893 214.068,312.196 214.654 C 312.499 215.240,313.062 215.819,313.446 215.941 C 313.830 216.063,314.449 216.678,314.822 217.308 C 315.194 217.938,315.836 218.560,316.249 218.691 C 318.337 219.354,317.784 220.063,305.942 231.906 C 299.605 238.243,294.294 243.427,294.138 243.427 C 293.983 243.427,293.683 243.807,293.471 244.272 C 293.260 244.736,292.736 245.306,292.308 245.538 C 291.879 245.770,291.382 246.190,291.203 246.472 C 290.691 247.276,286.129 251.607,285.793 251.607 C 285.627 251.607,285.492 251.860,285.492 252.169 C 285.492 252.478,284.999 253.022,284.396 253.378 C 283.794 253.734,282.961 254.532,282.546 255.152 C 282.131 255.771,281.616 256.279,281.402 256.280 C 281.188 256.282,280.679 256.781,280.271 257.390 C 279.863 257.999,279.031 258.831,278.422 259.239 C 277.813 259.647,277.314 260.200,277.314 260.467 C 277.313 260.735,277.168 260.954,276.992 260.954 C 276.816 260.954,273.550 264.041,269.734 267.814 C 261.853 275.606,260.901 276.144,258.868 273.952 C 258.302 273.341,257.838 272.708,257.838 272.545 C 257.838 272.383,257.596 272.249,257.299 272.249 C 257.002 272.249,256.479 271.822,256.137 271.299 C 255.794 270.776,254.713 269.593,253.734 268.670 C 242.345 257.927,241.727 257.114,244.012 255.891 C 244.540 255.608,245.066 255.082,245.180 254.722 C 245.294 254.363,245.834 253.829,246.380 253.537 C 246.925 253.245,247.652 252.531,247.996 251.950 C 248.339 251.369,249.013 250.715,249.495 250.495 C 249.977 250.276,250.485 249.735,250.625 249.293 C 250.765 248.852,251.040 248.491,251.235 248.491 C 251.517 248.491,259.141 240.926,275.377 224.537 C 275.589 224.323,276.812 223.126,278.095 221.877 C 279.379 220.628,280.428 219.474,280.428 219.311 C 280.428 219.148,280.867 218.815,281.402 218.571 C 282.770 217.948,282.647 217.584,280.331 215.402 C 278.425 213.607,277.266 212.480,276.611 211.784 C 275.965 211.097,264.545 200.093,263.471 199.122 C 262.820 198.534,260.921 196.826,259.251 195.326 C 257.581 193.827,255.560 191.986,254.760 191.237 C 253.960 190.487,251.928 188.647,250.244 187.147 C 248.559 185.648,245.996 183.281,244.548 181.889 C 243.100 180.497,241.291 178.763,240.529 178.037 C 239.767 177.311,239.143 176.566,239.143 176.382 C 239.143 176.197,238.924 176.046,238.656 176.046 C 238.389 176.045,237.819 175.520,237.390 174.878 C 236.962 174.237,236.486 173.712,236.332 173.711 C 236.179 173.710,229.470 167.181,221.424 159.202 C 201.219 139.164,201.439 139.370,199.917 139.027 C 198.658 138.743,196.689 139.999,196.689 141.087 C 196.689 141.249,196.519 141.383,196.312 141.383 C 196.104 141.383,192.969 144.318,189.344 147.907 C 182.699 154.484,162.936 173.786,155.644 180.820 C 146.152 189.976,137.404 198.442,132.290 203.422 C 129.258 206.375,126.645 208.917,126.483 209.069 C 126.322 209.222,125.284 210.283,124.178 211.427 C 123.071 212.570,121.758 213.773,121.258 214.100 C 120.759 214.428,120.351 214.933,120.351 215.223 C 120.351 215.513,119.830 216.136,119.193 216.607 L 118.036 217.462 118.983 218.468 C 120.035 219.586,123.990 223.517,124.739 224.190 C 125.003 224.427,125.597 225.040,126.059 225.553 C 126.521 226.065,128.241 227.712,129.881 229.211 C 131.521 230.711,133.426 232.463,134.114 233.106 C 134.802 233.749,136.471 235.239,137.822 236.417 C 143.667 241.513,146.601 244.214,152.070 249.532 C 154.311 251.711,156.372 253.639,156.651 253.816 C 156.929 253.993,157.346 254.489,157.578 254.917 C 157.810 255.346,158.381 255.870,158.847 256.082 C 160.773 256.959,160.368 257.528,151.528 266.380 C 146.806 271.107,142.847 274.976,142.730 274.976 C 142.613 274.976,140.688 273.135,138.453 270.886 C 136.217 268.637,134.247 266.796,134.074 266.796 C 133.902 266.796,133.450 266.271,133.071 265.628 C 132.691 264.985,132.202 264.460,131.984 264.460 C 131.765 264.460,130.405 263.277,128.960 261.831 C 127.515 260.385,125.031 258.036,123.439 256.610 C 119.078 252.706,115.980 249.967,114.926 249.086 C 113.719 248.078,104.869 239.795,102.045 237.032 C 99.269 234.316,91.412 226.449,90.166 225.139 C 89.951 224.913,88.840 223.824,87.697 222.717 C 86.554 221.611,85.331 220.253,84.980 219.700 C 84.629 219.148,84.119 218.555,83.846 218.384 C 82.800 217.727,83.074 217.390,88.822 212.269 C 90.144 211.091,92.390 209.033,93.812 207.696 C 95.234 206.359,96.517 205.264,96.664 205.262 C 97.066 205.256,101.266 200.976,101.266 200.571 C 101.266 200.197,103.622 197.843,112.751 189.094 C 115.880 186.095,120.982 181.144,124.089 178.092 C 127.195 175.039,129.903 172.541,130.107 172.541 C 130.311 172.541,130.477 172.299,130.477 172.002 C 130.477 171.705,130.882 171.197,131.377 170.873 C 132.704 170.003,170.983 131.715,170.983 131.257 C 170.983 131.042,171.154 130.867,171.362 130.867 C 171.570 130.867,176.658 125.959,182.668 119.961 C 188.678 113.963,193.722 109.054,193.877 109.053 C 194.031 109.052,194.448 108.540,194.803 107.916 C 195.762 106.231,198.966 105.771,200.101 107.156 M197.484 184.689 C 197.047 185.158,196.689 185.688,196.689 185.867 C 196.689 186.046,196.234 186.366,195.678 186.577 C 195.122 186.789,194.574 187.317,194.460 187.752 C 194.346 188.186,193.762 188.795,193.162 189.106 C 192.562 189.416,191.968 189.995,191.842 190.391 C 191.716 190.787,191.167 191.351,190.621 191.643 C 190.076 191.935,189.340 192.664,188.986 193.264 C 188.631 193.863,188.018 194.456,187.623 194.582 C 187.228 194.707,186.712 195.232,186.477 195.749 C 186.241 196.266,185.903 196.689,185.726 196.689 C 185.549 196.689,183.737 198.357,181.699 200.394 C 179.661 202.432,177.994 204.244,177.994 204.422 C 177.994 204.599,177.552 204.945,177.013 205.191 C 176.473 205.437,175.864 206.078,175.659 206.616 C 175.454 207.155,175.093 207.595,174.856 207.595 C 174.219 207.595,167.478 214.450,167.478 215.098 C 167.478 215.735,168.693 216.943,169.333 216.943 C 169.569 216.943,169.874 217.295,170.011 217.726 C 170.148 218.157,170.781 218.778,171.417 219.108 C 172.054 219.437,172.752 220.094,172.968 220.568 C 173.184 221.043,173.877 221.727,174.509 222.090 C 175.141 222.452,175.657 223.015,175.657 223.341 C 175.657 223.667,176.145 224.186,176.742 224.494 C 177.339 224.803,178.069 225.508,178.366 226.062 C 178.662 226.616,179.146 227.069,179.441 227.069 C 179.736 227.069,180.276 227.589,180.640 228.223 C 181.005 228.858,181.712 229.597,182.213 229.865 C 182.714 230.133,183.370 230.828,183.671 231.409 C 183.971 231.991,184.572 232.579,185.005 232.717 C 185.438 232.854,186.058 233.480,186.382 234.107 C 186.707 234.735,187.239 235.248,187.565 235.248 C 187.890 235.248,188.456 235.773,188.820 236.414 C 189.185 237.056,189.626 237.581,189.800 237.583 C 189.973 237.584,191.392 238.900,192.952 240.506 C 194.513 242.113,195.948 243.429,196.142 243.430 C 196.336 243.431,196.793 243.957,197.158 244.598 C 197.523 245.240,198.049 245.767,198.327 245.769 C 198.604 245.772,199.228 246.385,199.711 247.132 C 200.749 248.734,201.815 248.877,203.037 247.580 C 203.509 247.079,204.370 246.362,204.951 245.987 C 205.531 245.612,206.104 244.997,206.224 244.620 C 206.344 244.243,206.879 243.736,207.413 243.492 C 207.948 243.249,208.586 242.609,208.832 242.070 C 209.077 241.531,209.460 241.091,209.682 241.091 C 209.905 241.091,211.410 239.764,213.028 238.143 C 216.291 234.872,217.130 234.042,217.668 233.554 C 217.869 233.372,218.379 232.868,218.802 232.434 C 219.850 231.360,219.863 231.347,226.520 224.835 C 233.164 218.335,233.398 218.015,232.709 216.379 C 232.088 214.904,228.050 210.896,226.396 210.110 C 225.695 209.778,225.122 209.372,225.122 209.208 C 225.122 208.879,224.264 208.004,222.205 206.232 C 221.458 205.589,219.550 203.793,217.963 202.240 C 216.377 200.686,214.881 199.416,214.638 199.416 C 214.395 199.416,214.024 198.961,213.812 198.404 C 213.601 197.848,213.086 197.303,212.667 197.194 C 212.249 197.085,211.556 196.401,211.127 195.674 C 210.698 194.947,210.117 194.352,209.834 194.352 C 209.552 194.352,209.004 193.815,208.616 193.159 C 208.228 192.502,207.508 191.782,207.017 191.558 C 206.525 191.334,205.930 190.728,205.695 190.212 C 205.460 189.696,204.827 189.106,204.289 188.902 C 203.751 188.697,203.311 188.264,203.311 187.941 C 203.311 187.617,202.610 186.909,201.753 186.368 C 200.896 185.827,200.195 185.143,200.195 184.847 C 200.195 184.345,199.403 183.836,198.620 183.836 C 198.432 183.836,197.920 184.220,197.484 184.689 M207.530 193.539 C 211.458 197.414,214.836 200.584,215.036 200.584 C 215.237 200.584,215.592 201.003,215.825 201.515 C 216.059 202.027,216.672 202.638,217.188 202.873 C 217.704 203.109,218.294 203.741,218.499 204.280 C 218.703 204.818,219.048 205.258,219.265 205.258 C 219.482 205.258,220.987 206.529,222.609 208.082 C 224.232 209.635,226.566 211.782,227.797 212.853 C 229.028 213.924,230.501 215.434,231.071 216.208 L 232.107 217.616 231.049 218.601 C 230.466 219.143,229.081 220.525,227.970 221.672 C 226.859 222.820,225.325 224.353,224.562 225.079 C 223.799 225.805,223.174 226.550,223.174 226.734 C 223.174 226.918,223.025 227.069,222.843 227.069 C 222.584 227.069,208.303 240.869,202.416 246.808 C 201.404 247.829,201.298 247.857,200.923 247.201 C 200.389 246.269,196.305 242.259,195.890 242.259 C 195.711 242.259,195.254 241.733,194.875 241.091 C 194.495 240.448,193.969 239.922,193.706 239.922 C 193.443 239.922,192.917 239.396,192.538 238.754 C 192.158 238.111,191.716 237.585,191.554 237.585 C 191.180 237.585,183.836 230.244,183.836 229.870 C 183.836 229.716,183.442 229.418,182.960 229.206 C 182.478 228.995,181.911 228.427,181.699 227.945 C 181.488 227.463,181.183 227.069,181.023 227.069 C 180.613 227.069,173.320 219.734,173.320 219.322 C 173.320 219.136,172.795 218.767,172.152 218.500 C 171.509 218.234,170.983 217.780,170.983 217.491 C 170.983 217.202,170.458 216.577,169.815 216.102 C 168.706 215.282,168.243 214.216,168.996 214.216 C 169.261 214.216,193.799 190.183,198.032 185.778 C 198.781 184.998,198.799 184.998,199.589 185.741 C 200.029 186.155,203.603 189.664,207.530 193.539 ", stroke: "none", fill: "#a5a5a5", "fill-rule": "evenodd" }),
            React__default['default'].createElement("path", { id: "path4", d: "M196.349 58.697 C 195.950 58.855,176.362 78.016,173.905 80.651 C 173.690 80.881,173.077 81.491,172.541 82.006 C 172.006 82.521,171.436 83.078,171.276 83.243 C 170.842 83.690,166.388 88.156,165.926 88.608 C 165.706 88.822,163.343 91.188,160.674 93.866 C 158.005 96.543,155.645 98.909,155.429 99.124 C 154.417 100.126,137.070 117.491,136.627 117.944 C 136.351 118.227,135.161 119.395,133.982 120.539 C 132.804 121.683,131.599 122.876,131.305 123.189 C 131.010 123.502,130.419 124.109,129.990 124.537 C 129.562 124.966,128.926 125.606,128.578 125.959 C 128.230 126.312,127.507 127.031,126.972 127.557 C 126.436 128.082,125.849 128.674,125.667 128.872 C 125.485 129.069,124.981 129.577,124.547 130.000 C 123.565 130.958,122.825 131.697,121.762 132.783 C 120.711 133.858,119.716 134.847,119.186 135.346 C 118.695 135.807,116.944 137.554,116.542 137.983 C 116.388 138.149,115.823 138.706,115.287 139.221 C 114.175 140.291,114.031 140.437,111.277 143.279 C 108.163 146.491,108.130 146.523,105.997 148.463 C 104.894 149.465,103.992 150.469,103.992 150.694 C 103.992 150.918,103.550 151.391,103.011 151.745 C 102.471 152.099,101.200 153.240,100.187 154.282 C 99.174 155.324,98.169 156.355,97.955 156.573 C 93.902 160.701,83.967 170.204,83.704 170.204 C 83.509 170.204,83.350 170.338,83.350 170.501 C 83.350 170.898,76.989 177.170,60.744 192.795 C 48.100 204.955,37.992 214.996,37.353 216.029 C 36.232 217.843,36.871 219.658,39.493 222.113 C 42.832 225.238,47.138 229.148,51.022 232.583 C 55.990 236.976,59.043 239.780,61.028 241.772 C 61.936 242.683,62.816 243.428,62.984 243.429 C 63.153 243.429,63.642 243.954,64.070 244.596 C 64.499 245.237,65.058 245.763,65.314 245.763 C 65.570 245.764,66.067 246.252,66.419 246.848 C 66.771 247.443,67.569 248.224,68.193 248.582 C 68.817 248.940,69.328 249.505,69.328 249.836 C 69.328 250.167,69.472 250.438,69.647 250.438 C 70.139 250.438,77.507 257.704,77.507 258.189 C 77.507 258.425,77.680 258.617,77.892 258.617 C 78.394 258.617,85.686 265.910,85.686 266.412 C 85.686 266.623,85.902 266.796,86.165 266.796 C 86.428 266.796,87.285 267.454,88.070 268.257 C 88.855 269.060,89.735 269.946,90.026 270.225 C 90.317 270.504,92.719 272.870,95.364 275.483 C 102.479 282.512,105.506 285.415,108.504 288.082 C 109.986 289.400,112.775 291.905,114.703 293.648 C 119.783 298.241,119.597 298.288,127.514 290.372 C 134.692 283.193,134.560 283.767,129.991 279.649 C 128.446 278.257,126.664 276.548,126.031 275.852 C 125.399 275.156,124.694 274.586,124.466 274.585 C 124.237 274.584,123.700 274.059,123.272 273.418 C 122.843 272.776,122.373 272.251,122.226 272.250 C 122.079 272.250,119.902 270.234,117.388 267.770 C 114.873 265.307,112.671 263.291,112.494 263.291 C 112.316 263.291,112.171 263.038,112.171 262.729 C 112.171 262.420,111.669 261.870,111.056 261.508 C 110.442 261.145,109.643 260.347,109.281 259.733 C 108.919 259.119,108.369 258.617,108.060 258.617 C 107.751 258.617,107.498 258.453,107.498 258.253 C 107.498 257.813,102.413 252.775,101.969 252.775 C 101.796 252.775,101.655 252.512,101.655 252.191 C 101.655 251.870,101.522 251.607,101.360 251.607 C 101.120 251.607,98.572 249.206,95.500 246.085 C 94.837 245.412,89.977 240.753,86.814 237.759 C 85.444 236.462,81.790 233.146,78.694 230.391 C 75.598 227.635,72.686 224.971,72.223 224.472 C 71.760 223.972,71.182 223.564,70.939 223.564 C 70.696 223.564,70.497 223.411,70.497 223.225 C 70.497 223.038,69.795 222.206,68.938 221.375 C 66.247 218.767,66.139 217.578,68.410 215.592 C 69.452 214.680,71.790 212.507,73.605 210.764 C 75.420 209.021,77.040 207.595,77.206 207.595 C 77.372 207.595,77.508 207.376,77.508 207.108 C 77.509 206.840,78.008 206.287,78.617 205.880 C 79.226 205.472,80.058 204.640,80.466 204.031 C 80.874 203.422,81.417 202.923,81.672 202.922 C 81.928 202.922,82.434 202.419,82.796 201.805 C 83.159 201.192,83.957 200.393,84.571 200.031 C 85.184 199.668,85.686 199.119,85.686 198.810 C 85.686 198.500,85.830 198.247,86.006 198.247 C 86.427 198.247,91.139 193.558,91.139 193.139 C 91.139 192.961,91.665 192.543,92.308 192.210 C 92.950 191.878,93.476 191.358,93.476 191.054 C 93.476 190.750,94.002 190.191,94.645 189.811 C 95.288 189.431,95.901 188.847,96.007 188.513 C 96.113 188.179,96.578 187.647,97.041 187.331 C 97.503 187.016,98.161 186.429,98.503 186.028 C 98.844 185.627,99.355 185.101,99.638 184.860 C 99.922 184.618,100.447 184.110,100.807 183.730 C 101.166 183.349,101.899 182.608,102.434 182.083 C 102.970 181.557,103.583 180.939,103.797 180.710 C 104.012 180.480,104.524 179.994,104.935 179.630 C 105.346 179.266,106.087 178.530,106.582 177.994 C 107.076 177.459,107.616 176.892,107.781 176.735 C 108.104 176.428,112.110 172.458,112.756 171.805 C 112.970 171.588,115.774 168.864,118.987 165.751 C 122.201 162.637,125.130 159.781,125.497 159.402 C 125.864 159.024,126.302 158.588,126.471 158.433 C 126.639 158.278,128.645 156.350,130.928 154.149 C 134.848 150.369,142.243 143.353,150.132 135.930 C 159.733 126.895,167.248 119.600,184.235 102.824 C 191.067 96.076,197.129 90.162,197.706 89.682 L 198.754 88.808 199.961 89.972 C 200.625 90.611,207.895 97.796,216.116 105.937 C 224.338 114.079,231.188 120.740,231.338 120.740 C 231.488 120.740,231.826 121.141,232.088 121.631 C 232.350 122.120,232.935 122.690,233.388 122.896 C 233.840 123.103,234.400 123.622,234.632 124.051 C 234.864 124.479,235.266 124.966,235.526 125.133 C 235.786 125.300,236.925 126.385,238.058 127.544 C 241.003 130.558,241.394 130.931,246.969 136.046 C 248.556 137.502,250.467 139.272,251.217 139.979 C 252.507 141.196,259.714 147.665,261.667 149.359 C 262.166 149.792,264.296 151.830,266.401 153.887 C 268.505 155.945,270.508 157.737,270.852 157.869 C 271.196 158.001,271.679 158.552,271.926 159.093 C 272.172 159.635,272.511 160.078,272.678 160.078 C 272.895 160.078,300.169 186.891,303.544 190.423 C 305.867 192.853,317.347 203.675,321.000 206.879 C 323.263 208.862,328.590 213.703,329.845 214.915 C 330.576 215.621,331.528 216.446,331.961 216.749 C 332.394 217.053,332.972 217.953,333.246 218.751 L 333.745 220.201 331.721 222.068 C 328.126 225.385,324.830 228.738,324.830 229.076 C 324.830 229.258,324.577 229.406,324.267 229.406 C 323.958 229.406,323.395 229.932,323.015 230.574 C 322.635 231.217,322.199 231.743,322.045 231.743 C 321.892 231.743,313.736 239.725,303.921 249.480 C 294.106 259.236,285.940 267.342,285.773 267.494 C 285.607 267.646,284.515 268.734,283.346 269.912 C 282.177 271.091,281.021 272.253,280.778 272.495 C 280.534 272.737,279.283 273.986,277.998 275.272 C 276.713 276.557,275.502 277.761,275.307 277.947 C 275.113 278.134,274.014 279.294,272.864 280.526 C 271.715 281.758,270.587 282.765,270.357 282.765 C 269.571 282.765,269.083 284.220,269.680 284.783 C 269.980 285.066,271.120 286.138,272.215 287.166 C 273.309 288.195,274.486 289.465,274.829 289.990 C 275.173 290.515,275.638 290.944,275.861 290.944 C 276.085 290.944,277.358 292.084,278.690 293.476 C 284.096 299.127,282.134 300.273,303.870 278.773 C 310.529 272.186,316.085 266.796,316.217 266.795 C 316.348 266.795,316.789 266.296,317.197 265.687 C 317.605 265.078,318.437 264.246,319.046 263.838 C 319.655 263.430,320.154 262.877,320.155 262.610 C 320.155 262.342,320.324 262.123,320.529 262.123 C 320.955 262.123,365.336 217.921,365.336 217.497 C 365.336 216.916,351.690 203.953,342.747 196.039 C 339.641 193.291,336.690 190.560,336.188 189.971 C 335.687 189.382,335.073 188.899,334.824 188.899 C 334.575 188.898,334.021 188.373,333.593 187.731 C 333.165 187.090,332.639 186.564,332.425 186.563 C 332.210 186.562,331.685 186.036,331.256 185.394 C 330.828 184.753,330.342 184.228,330.177 184.227 C 330.011 184.226,326.272 180.633,321.866 176.241 C 317.461 171.850,313.740 168.257,313.598 168.256 C 313.456 168.255,313.006 167.757,312.598 167.148 C 312.190 166.539,311.366 165.711,310.767 165.308 C 310.168 164.905,309.465 164.180,309.207 163.697 C 308.948 163.213,308.442 162.724,308.082 162.610 C 307.722 162.495,307.187 161.952,306.892 161.401 C 306.598 160.851,305.881 160.155,305.299 159.854 C 304.718 159.553,304.139 158.982,304.012 158.583 C 303.886 158.185,303.363 157.668,302.850 157.434 C 302.337 157.201,301.803 156.648,301.663 156.207 C 301.523 155.765,301.260 155.404,301.080 155.404 C 300.899 155.404,298.825 153.520,296.471 151.217 C 294.117 148.914,290.853 145.803,289.219 144.304 C 287.584 142.804,285.332 140.726,284.214 139.686 C 283.096 138.646,281.408 137.157,280.464 136.376 C 278.769 134.975,276.712 133.094,271.173 127.881 C 269.617 126.417,261.676 118.603,253.526 110.516 C 245.375 102.429,238.572 95.813,238.407 95.813 C 238.242 95.813,237.893 95.414,237.632 94.927 C 237.372 94.440,236.641 93.695,236.010 93.272 C 235.378 92.849,234.861 92.283,234.860 92.016 C 234.859 91.748,234.711 91.529,234.530 91.529 C 234.349 91.529,232.795 90.170,231.077 88.510 C 226.253 83.851,223.061 80.897,222.145 80.244 C 221.686 79.917,220.171 78.598,218.778 77.313 C 217.386 76.027,214.805 73.661,213.044 72.055 C 207.039 66.577,206.682 66.242,205.160 64.654 C 204.646 64.119,203.323 62.892,202.219 61.928 C 201.115 60.964,200.208 60.019,200.203 59.829 C 200.179 58.811,197.811 58.116,196.349 58.697 M199.026 59.564 C 199.026 60.088,206.232 67.381,206.750 67.381 C 206.989 67.381,207.457 67.907,207.790 68.549 C 208.122 69.192,208.576 69.718,208.798 69.718 C 209.020 69.718,210.405 70.901,211.877 72.347 C 215.434 75.841,223.102 82.860,226.238 85.492 C 226.749 85.920,227.839 86.928,228.660 87.731 C 229.482 88.535,230.341 89.192,230.569 89.192 C 230.797 89.192,231.148 89.625,231.349 90.155 C 231.551 90.684,232.138 91.223,232.654 91.353 C 233.170 91.483,233.782 92.005,234.014 92.514 C 234.246 93.022,234.969 93.715,235.621 94.052 C 236.273 94.389,236.806 94.931,236.806 95.257 C 236.806 95.583,237.323 96.146,237.954 96.508 C 238.586 96.871,239.285 97.567,239.508 98.056 C 239.730 98.545,240.344 99.109,240.872 99.309 C 241.400 99.510,242.096 100.185,242.419 100.810 C 242.743 101.435,243.377 102.043,243.830 102.161 C 244.283 102.280,244.751 102.747,244.869 103.200 C 244.988 103.653,245.576 104.277,246.176 104.588 C 246.776 104.898,247.367 105.467,247.489 105.851 C 247.611 106.236,248.201 106.840,248.801 107.194 C 249.400 107.548,250.130 108.284,250.422 108.830 C 250.713 109.375,251.277 109.925,251.673 110.050 C 252.070 110.176,252.648 110.770,252.958 111.371 C 253.269 111.971,253.893 112.559,254.346 112.677 C 254.799 112.796,255.263 113.250,255.377 113.687 C 255.492 114.123,256.180 114.832,256.906 115.260 C 257.633 115.689,258.228 116.234,258.228 116.470 C 258.228 117.017,259.001 117.787,259.887 118.122 C 260.263 118.265,260.754 118.783,260.978 119.273 C 261.201 119.763,261.901 120.461,262.532 120.824 C 263.164 121.186,263.681 121.754,263.681 122.085 C 263.681 122.416,263.857 122.687,264.073 122.687 C 264.289 122.687,265.751 123.981,267.321 125.561 C 268.892 127.142,270.555 128.638,271.018 128.886 C 271.481 129.133,271.860 129.587,271.860 129.893 C 271.860 130.199,272.219 130.642,272.657 130.877 C 273.096 131.111,274.630 132.441,276.065 133.832 C 280.050 137.692,281.102 138.656,285.102 142.117 C 289.506 145.926,289.248 145.698,290.082 146.517 C 293.035 149.417,294.082 150.341,294.412 150.341 C 294.623 150.341,295.106 150.867,295.486 151.510 C 295.866 152.153,296.500 152.781,296.895 152.907 C 297.290 153.032,297.808 153.562,298.046 154.084 C 298.284 154.606,298.886 155.136,299.384 155.261 C 299.882 155.386,300.510 155.951,300.780 156.517 C 301.049 157.083,301.664 157.720,302.147 157.932 C 302.630 158.145,303.127 158.639,303.252 159.030 C 303.376 159.422,304.005 160.063,304.650 160.455 C 305.295 160.848,306.153 161.712,306.557 162.376 C 306.961 163.040,307.561 163.583,307.891 163.583 C 308.221 163.583,308.658 164.025,308.863 164.564 C 309.068 165.103,309.681 165.714,310.224 165.920 C 310.767 166.127,311.376 166.729,311.577 167.258 C 311.779 167.787,312.454 168.484,313.079 168.807 C 313.703 169.130,314.307 169.750,314.421 170.184 C 314.535 170.619,315.068 171.141,315.606 171.346 C 316.144 171.550,316.699 172.080,316.839 172.523 C 316.980 172.966,317.596 173.588,318.208 173.905 C 318.821 174.221,319.434 174.835,319.572 175.268 C 319.709 175.701,320.322 176.314,320.935 176.631 C 321.547 176.948,322.160 177.561,322.298 177.994 C 322.435 178.427,323.049 179.041,323.661 179.357 C 324.273 179.674,324.878 180.259,325.004 180.657 C 325.131 181.055,325.671 181.581,326.206 181.824 C 326.741 182.068,327.377 182.704,327.621 183.239 C 327.864 183.774,328.372 184.309,328.749 184.428 C 329.126 184.548,329.888 185.241,330.442 185.968 C 330.997 186.694,331.759 187.387,332.136 187.507 C 332.513 187.626,332.995 188.120,333.207 188.604 C 333.419 189.088,333.963 189.646,334.415 189.845 C 334.867 190.044,335.568 190.700,335.973 191.305 C 336.378 191.909,336.936 192.403,337.214 192.404 C 337.492 192.405,338.017 192.930,338.382 193.571 C 338.747 194.212,339.179 194.738,339.342 194.740 C 339.624 194.742,340.983 195.942,345.028 199.758 C 347.604 202.189,349.968 204.090,350.416 204.090 C 350.627 204.090,351.001 204.530,351.246 205.069 C 351.492 205.608,352.133 206.249,352.672 206.495 C 353.211 206.740,353.651 207.185,353.651 207.483 C 353.651 207.780,354.231 208.267,354.940 208.563 C 355.649 208.859,356.435 209.554,356.687 210.107 C 356.939 210.659,357.583 211.311,358.117 211.555 C 358.652 211.798,359.193 212.323,359.319 212.722 C 359.445 213.120,360.052 213.706,360.667 214.024 C 361.281 214.342,362.095 215.128,362.476 215.772 C 362.856 216.416,363.382 216.943,363.644 216.943 C 364.489 216.943,364.661 217.767,363.860 217.977 C 363.434 218.088,362.768 218.767,362.382 219.485 C 361.995 220.204,361.304 220.885,360.848 221.000 C 360.391 221.114,359.814 221.653,359.566 222.197 C 359.318 222.741,358.671 223.389,358.127 223.636 C 357.583 223.884,357.036 224.495,356.910 224.994 C 356.785 225.493,356.526 225.901,356.333 225.901 C 355.800 225.901,351.315 230.391,351.315 230.925 C 351.315 231.183,350.789 231.577,350.146 231.801 C 349.503 232.025,348.978 232.463,348.978 232.773 C 348.978 233.083,348.447 233.636,347.798 234.001 C 347.150 234.366,346.526 235.024,346.412 235.464 C 346.298 235.904,345.602 236.589,344.865 236.986 C 344.128 237.383,343.525 237.951,343.525 238.249 C 343.525 238.546,343.025 239.077,342.415 239.427 C 341.805 239.777,341.119 240.558,340.891 241.161 C 340.619 241.882,340.198 242.259,339.664 242.259 C 339.217 242.259,338.851 242.410,338.851 242.595 C 338.851 243.061,333.893 248.101,333.434 248.101 C 333.229 248.101,332.949 248.454,332.813 248.885 C 332.676 249.315,332.063 249.927,331.451 250.243 C 330.839 250.560,330.227 251.167,330.092 251.592 C 329.957 252.017,329.375 252.590,328.799 252.864 C 328.222 253.138,327.583 253.745,327.377 254.212 C 327.172 254.679,326.600 255.245,326.106 255.470 C 325.612 255.695,325.016 256.301,324.781 256.816 C 324.546 257.331,323.933 257.944,323.418 258.179 C 322.903 258.414,322.299 259.005,322.077 259.492 C 321.855 259.980,321.140 260.685,320.488 261.059 C 319.836 261.434,319.211 262.089,319.099 262.515 C 318.988 262.942,318.712 263.291,318.486 263.291 C 318.260 263.291,316.885 264.518,315.429 266.018 C 313.973 267.517,312.611 268.744,312.402 268.744 C 312.192 268.744,311.710 269.270,311.330 269.913 C 310.950 270.556,310.316 271.184,309.921 271.310 C 309.526 271.435,309.010 271.961,308.774 272.478 C 308.539 272.995,308.233 273.418,308.094 273.418 C 307.624 273.418,303.019 277.948,303.019 278.411 C 303.019 278.664,302.827 278.870,302.593 278.870 C 302.359 278.870,300.880 280.141,299.307 281.694 C 297.734 283.247,295.384 285.536,294.085 286.780 C 292.786 288.025,291.723 289.208,291.723 289.409 C 291.723 289.611,291.497 289.776,291.220 289.776 C 290.944 289.776,289.429 291.091,287.854 292.697 C 286.280 294.304,284.797 295.638,284.560 295.661 C 282.710 295.846,280.818 295.140,280.818 294.263 C 280.818 293.962,280.292 293.404,279.649 293.024 C 279.006 292.645,278.389 292.047,278.278 291.696 C 278.166 291.345,277.500 290.749,276.798 290.370 C 276.095 289.992,275.231 289.178,274.877 288.561 C 274.523 287.944,273.958 287.439,273.621 287.439 C 273.284 287.439,272.841 286.996,272.635 286.455 C 272.429 285.914,271.952 285.361,271.574 285.227 C 269.919 284.636,269.857 284.238,271.266 283.280 C 272.021 282.767,272.639 282.096,272.639 281.788 C 272.639 281.479,273.152 280.962,273.780 280.637 C 274.407 280.313,275.031 279.700,275.166 279.274 C 275.301 278.849,275.883 278.277,276.459 278.003 C 277.036 277.728,277.675 277.122,277.881 276.655 C 278.086 276.188,278.647 275.626,279.128 275.407 C 279.608 275.189,280.277 274.476,280.614 273.824 C 280.952 273.172,281.494 272.639,281.820 272.639 C 282.146 272.639,282.711 272.112,283.076 271.469 C 283.440 270.826,284.048 270.200,284.425 270.079 C 284.802 269.957,285.370 269.356,285.686 268.744 C 286.003 268.132,286.610 267.520,287.035 267.385 C 287.460 267.250,288.168 266.635,288.608 266.018 C 289.047 265.400,289.738 264.790,290.143 264.661 C 290.548 264.533,291.052 263.932,291.263 263.327 C 291.488 262.681,292.025 262.129,292.561 261.991 C 293.065 261.861,293.775 261.224,294.140 260.576 C 294.505 259.927,295.036 259.396,295.321 259.396 C 295.607 259.396,296.157 258.859,296.545 258.203 C 296.933 257.546,297.668 256.819,298.179 256.586 C 298.690 256.353,299.212 255.836,299.339 255.438 C 299.465 255.040,300.069 254.455,300.682 254.138 C 301.294 253.822,301.910 253.199,302.051 252.756 C 302.192 252.312,302.701 251.769,303.183 251.550 C 303.664 251.330,304.360 250.640,304.729 250.015 C 305.098 249.391,305.658 248.880,305.975 248.880 C 306.291 248.880,306.907 248.275,307.344 247.534 C 307.781 246.794,308.432 246.093,308.792 245.977 C 309.151 245.861,309.744 245.240,310.108 244.597 C 310.473 243.954,311.033 243.427,311.352 243.427 C 311.671 243.427,312.221 242.940,312.573 242.344 C 312.924 241.748,313.723 240.968,314.347 240.610 C 314.971 240.251,315.482 239.692,315.482 239.366 C 315.482 239.040,315.995 238.508,316.623 238.184 C 317.250 237.859,317.876 237.239,318.014 236.806 C 318.151 236.373,318.765 235.760,319.377 235.443 C 319.989 235.126,320.600 234.520,320.735 234.094 C 320.870 233.669,321.452 233.097,322.029 232.823 C 322.605 232.548,323.250 231.930,323.461 231.449 C 323.673 230.968,324.027 230.574,324.249 230.574 C 324.471 230.574,325.801 229.370,327.205 227.898 C 328.609 226.426,330.127 225.024,330.578 224.783 C 331.029 224.541,331.501 224.019,331.627 223.623 C 331.752 223.227,332.281 222.709,332.801 222.472 C 335.356 221.308,335.087 217.809,332.289 215.816 C 331.639 215.354,330.998 214.629,330.863 214.206 C 330.729 213.783,330.401 213.437,330.133 213.437 C 329.866 213.437,329.105 212.868,328.444 212.171 C 327.023 210.677,326.036 209.768,320.569 204.922 C 318.307 202.917,315.984 200.770,315.407 200.151 C 314.830 199.532,314.126 199.026,313.844 199.026 C 313.561 199.026,313.157 198.633,312.945 198.152 C 312.734 197.671,312.089 197.053,311.513 196.778 C 310.936 196.504,310.355 195.934,310.221 195.511 C 310.087 195.088,309.833 194.742,309.657 194.742 C 309.481 194.742,308.537 193.953,307.560 192.989 C 306.582 192.025,305.626 191.237,305.436 191.237 C 305.246 191.237,304.890 190.795,304.644 190.255 C 304.398 189.715,303.771 189.112,303.251 188.914 C 302.732 188.717,302.191 188.192,302.051 187.749 C 301.910 187.306,301.294 186.685,300.682 186.368 C 300.069 186.051,299.465 185.468,299.340 185.072 C 299.214 184.675,298.664 184.112,298.119 183.820 C 297.573 183.528,296.837 182.798,296.483 182.199 C 296.129 181.600,295.525 181.009,295.140 180.887 C 294.756 180.765,294.176 180.152,293.851 179.524 C 293.527 178.897,292.995 178.384,292.669 178.384 C 292.343 178.384,291.778 177.859,291.413 177.218 C 291.048 176.576,290.618 176.051,290.458 176.049 C 290.010 176.045,285.492 171.427,285.492 170.974 C 285.492 170.754,285.037 170.402,284.480 170.190 C 283.924 169.979,283.378 169.457,283.266 169.031 C 283.155 168.605,282.930 168.257,282.766 168.257 C 282.444 168.257,277.951 163.915,277.432 163.102 C 277.259 162.831,276.767 162.420,276.339 162.188 C 275.910 161.956,275.387 161.387,275.175 160.922 C 274.964 160.458,274.647 160.078,274.470 160.078 C 274.294 160.078,272.873 158.763,271.313 157.157 C 269.752 155.550,268.269 154.236,268.016 154.236 C 267.763 154.236,267.388 153.794,267.183 153.255 C 266.978 152.716,266.409 152.122,265.919 151.935 C 265.428 151.749,264.782 151.139,264.483 150.579 C 264.183 150.020,263.779 149.562,263.584 149.562 C 263.389 149.562,262.560 148.905,261.741 148.101 C 256.676 143.134,248.706 135.955,247.225 135.026 C 246.636 134.656,246.154 134.125,246.154 133.845 C 246.154 133.564,245.734 133.110,245.221 132.836 C 244.708 132.561,243.914 131.830,243.456 131.212 C 242.999 130.594,242.362 130.088,242.039 130.088 C 241.717 130.088,241.103 129.493,240.674 128.766 C 240.245 128.040,239.537 127.351,239.100 127.237 C 238.664 127.123,238.214 126.677,238.102 126.246 C 237.989 125.815,237.388 125.286,236.767 125.069 C 236.146 124.853,235.638 124.499,235.638 124.283 C 235.638 123.753,231.528 119.572,231.008 119.572 C 230.780 119.572,230.329 119.058,230.005 118.431 C 229.680 117.803,229.100 117.190,228.716 117.068 C 228.331 116.946,227.712 116.331,227.340 115.701 C 226.968 115.071,226.315 114.445,225.888 114.310 C 225.462 114.174,224.854 113.563,224.537 112.950 C 224.221 112.338,223.599 111.722,223.156 111.581 C 222.713 111.441,222.189 110.899,221.991 110.378 C 221.792 109.857,221.187 109.262,220.645 109.056 C 220.103 108.850,219.467 108.259,219.232 107.743 C 218.997 107.227,218.383 106.612,217.868 106.378 C 217.353 106.143,216.739 105.530,216.504 105.015 C 216.270 104.500,215.655 103.886,215.139 103.650 C 214.623 103.415,214.039 102.797,213.841 102.278 C 213.644 101.758,213.119 101.217,212.676 101.077 C 212.233 100.936,211.612 100.320,211.295 99.708 C 210.978 99.096,210.365 98.482,209.932 98.345 C 209.499 98.207,208.879 97.581,208.554 96.954 C 208.230 96.326,207.715 95.813,207.410 95.813 C 207.105 95.813,206.393 95.206,205.828 94.465 C 205.262 93.724,204.507 93.024,204.149 92.911 C 203.791 92.797,203.325 92.308,203.112 91.824 C 202.900 91.340,202.342 90.776,201.871 90.569 C 201.401 90.363,200.795 89.780,200.524 89.273 C 199.593 87.534,198.775 87.462,197.211 88.982 C 196.430 89.740,195.551 90.360,195.257 90.360 C 194.963 90.360,194.555 90.801,194.351 91.339 C 194.146 91.877,193.556 92.510,193.040 92.745 C 192.524 92.980,191.871 93.603,191.590 94.128 C 191.309 94.653,190.588 95.373,189.989 95.727 C 189.389 96.081,188.799 96.686,188.677 97.070 C 188.555 97.454,187.964 98.023,187.364 98.333 C 186.763 98.644,186.179 99.253,186.066 99.688 C 185.952 100.122,185.419 100.645,184.881 100.849 C 184.343 101.054,183.788 101.584,183.647 102.027 C 183.507 102.470,182.871 103.102,182.234 103.431 C 181.597 103.760,180.897 104.423,180.678 104.903 C 180.459 105.384,179.898 105.945,179.431 106.150 C 178.964 106.356,178.352 107.006,178.072 107.595 C 177.792 108.184,177.404 108.666,177.212 108.666 C 176.735 108.666,172.541 112.724,172.541 113.184 C 172.541 113.387,171.928 113.883,171.178 114.286 C 170.428 114.690,169.815 115.246,169.815 115.521 C 169.815 115.797,169.289 116.333,168.647 116.712 C 168.004 117.092,167.478 117.624,167.478 117.894 C 167.478 118.164,166.996 118.692,166.407 119.068 C 164.830 120.073,162.039 122.809,162.032 123.357 C 162.028 123.618,161.590 124.059,161.057 124.338 C 160.525 124.617,157.594 127.208,154.543 130.095 C 151.492 132.983,148.149 136.134,147.114 137.098 C 144.831 139.224,137.057 146.661,136.514 147.238 C 136.300 147.466,135.702 148.038,135.186 148.510 C 134.670 148.981,131.830 151.777,128.876 154.722 C 125.922 157.668,123.321 160.078,123.096 160.078 C 122.871 160.078,122.687 160.271,122.687 160.506 C 122.687 160.963,115.334 168.257,114.873 168.257 C 114.722 168.257,114.508 168.605,114.397 169.031 C 114.285 169.457,113.747 169.975,113.201 170.183 C 112.655 170.391,111.933 171.094,111.596 171.746 C 111.259 172.398,110.719 172.931,110.396 172.931 C 110.073 172.931,109.451 173.537,109.014 174.277 C 108.577 175.017,107.872 175.733,107.447 175.868 C 107.022 176.003,106.512 176.540,106.314 177.061 C 106.116 177.582,105.527 178.170,105.006 178.368 C 104.485 178.566,103.948 179.076,103.814 179.502 C 103.679 179.927,102.963 180.632,102.222 181.069 C 101.482 181.505,100.876 182.114,100.876 182.422 C 100.876 182.729,100.263 183.342,99.513 183.785 C 98.763 184.227,98.150 184.862,98.150 185.195 C 98.150 185.528,97.699 186.006,97.147 186.257 C 96.595 186.509,95.890 187.206,95.579 187.807 C 95.268 188.408,94.750 188.900,94.427 188.900 C 94.104 188.900,93.489 189.494,93.060 190.221 C 92.631 190.948,91.938 191.632,91.520 191.741 C 91.101 191.851,90.585 192.397,90.373 192.956 C 90.160 193.515,89.564 194.165,89.048 194.400 C 88.532 194.635,87.917 195.250,87.682 195.766 C 87.446 196.283,86.829 196.867,86.309 197.064 C 85.789 197.262,85.253 197.772,85.118 198.197 C 84.983 198.622,84.267 199.327,83.527 199.764 C 82.787 200.201,82.181 200.822,82.181 201.145 C 82.181 201.468,81.668 201.998,81.040 202.323 C 80.413 202.647,79.787 203.267,79.649 203.700 C 79.512 204.133,78.924 204.734,78.342 205.034 C 77.761 205.335,77.063 205.997,76.791 206.505 C 76.519 207.013,75.911 207.597,75.441 207.804 C 74.971 208.010,74.412 208.575,74.200 209.059 C 73.988 209.543,73.497 210.040,73.110 210.163 C 72.722 210.286,71.830 210.941,71.127 211.620 C 70.424 212.298,69.513 213.151,69.102 213.515 C 68.691 213.879,68.156 214.382,67.914 214.633 C 67.672 214.883,66.942 215.591,66.292 216.206 L 65.111 217.325 65.903 218.984 C 66.339 219.896,67.244 221.193,67.914 221.867 C 68.585 222.540,69.309 223.288,69.523 223.529 C 70.328 224.433,75.672 229.406,75.839 229.406 C 75.936 229.406,76.579 229.976,77.268 230.672 C 77.958 231.368,79.562 232.814,80.832 233.885 C 83.124 235.818,84.614 237.179,87.256 239.752 C 88.013 240.488,88.807 241.091,89.022 241.091 C 89.237 241.091,89.724 241.616,90.104 242.259 C 90.483 242.902,91.037 243.427,91.334 243.427 C 91.631 243.427,92.185 243.953,92.565 244.596 C 92.944 245.239,93.552 245.860,93.915 245.975 C 94.278 246.090,95.029 246.779,95.583 247.506 C 96.138 248.233,96.900 248.925,97.277 249.045 C 97.654 249.165,98.136 249.659,98.348 250.143 C 98.560 250.626,99.117 251.190,99.585 251.396 C 100.053 251.601,100.621 252.174,100.846 252.670 C 101.072 253.165,101.682 253.731,102.201 253.929 C 102.721 254.127,103.257 254.636,103.392 255.061 C 103.527 255.487,104.243 256.192,104.983 256.628 C 105.723 257.065,106.329 257.695,106.329 258.028 C 106.329 258.361,106.766 258.833,107.301 259.077 C 107.835 259.320,108.618 260.105,109.040 260.821 C 109.463 261.537,110.081 262.123,110.414 262.123 C 110.747 262.123,111.225 262.574,111.477 263.126 C 111.728 263.677,112.413 264.376,112.999 264.679 C 113.584 264.982,114.176 265.584,114.314 266.018 C 114.451 266.451,115.064 267.064,115.677 267.381 C 116.289 267.697,116.902 268.309,117.039 268.740 C 117.175 269.170,117.446 269.523,117.639 269.523 C 117.833 269.523,119.414 270.925,121.153 272.639 C 122.893 274.352,124.475 275.755,124.670 275.755 C 124.865 275.755,125.024 276.023,125.024 276.352 C 125.024 276.681,125.630 277.307,126.370 277.743 C 127.111 278.180,127.823 278.875,127.954 279.288 C 128.085 279.701,128.363 280.039,128.571 280.039 C 128.779 280.039,129.828 280.931,130.901 282.021 C 132.836 283.987,133.021 285.102,131.413 285.102 C 131.124 285.102,130.621 285.616,130.297 286.243 C 129.972 286.871,129.392 287.484,129.008 287.606 C 128.623 287.728,128.019 288.318,127.665 288.918 C 127.311 289.517,126.572 290.248,126.023 290.542 C 125.474 290.836,125.024 291.318,125.024 291.613 C 125.024 291.908,124.528 292.434,123.922 292.782 C 123.316 293.130,122.536 293.910,122.188 294.516 C 121.048 296.503,118.973 296.110,116.184 293.379 C 114.926 292.147,113.290 290.667,112.547 290.090 C 111.805 289.513,110.166 288.071,108.906 286.886 C 107.646 285.702,106.306 284.634,105.930 284.515 C 105.553 284.395,105.155 283.954,105.045 283.535 C 104.936 283.115,104.310 282.464,103.654 282.088 C 102.999 281.712,102.249 281.005,101.988 280.516 C 101.726 280.028,101.128 279.532,100.659 279.414 C 100.190 279.296,99.611 278.772,99.372 278.248 C 99.134 277.725,98.513 277.135,97.993 276.938 C 97.473 276.740,96.933 276.216,96.792 275.773 C 96.652 275.330,96.016 274.698,95.379 274.368 C 94.742 274.039,94.026 273.340,93.786 272.815 C 93.547 272.290,93.209 271.860,93.035 271.860 C 92.861 271.860,90.789 269.932,88.430 267.575 C 86.071 265.219,84.005 263.291,83.838 263.291 C 83.671 263.291,83.361 262.897,83.150 262.415 C 82.938 261.933,82.371 261.365,81.889 261.154 C 81.407 260.943,81.013 260.636,81.013 260.472 C 81.013 260.145,76.742 255.789,75.896 255.253 C 75.604 255.068,75.176 254.567,74.944 254.138 C 74.712 253.710,74.171 253.199,73.743 253.003 C 73.314 252.806,72.802 252.295,72.606 251.866 C 72.410 251.437,71.899 250.897,71.470 250.665 C 71.042 250.433,70.540 250.005,70.355 249.713 C 69.819 248.866,65.464 244.596,65.136 244.596 C 64.973 244.596,64.666 244.205,64.455 243.726 C 64.243 243.248,63.645 242.647,63.125 242.390 C 62.604 242.133,61.978 241.549,61.733 241.091 C 61.488 240.633,60.862 240.048,60.342 239.791 C 59.822 239.534,59.223 238.933,59.012 238.455 C 58.800 237.976,58.485 237.585,58.311 237.585 C 58.034 237.585,55.444 235.224,50.618 230.574 C 49.840 229.825,48.344 228.510,47.295 227.653 C 46.245 226.796,44.682 225.439,43.822 224.636 C 41.516 222.482,39.617 220.815,38.894 220.310 C 38.543 220.064,38.140 219.202,37.998 218.392 L 37.741 216.921 44.985 209.824 C 48.970 205.920,55.399 199.615,59.273 195.813 C 63.146 192.011,66.468 188.900,66.654 188.900 C 66.839 188.900,66.991 188.637,66.991 188.315 C 66.991 187.994,67.127 187.731,67.293 187.731 C 67.629 187.731,72.191 183.401,72.702 182.597 C 72.882 182.315,73.379 181.894,73.807 181.662 C 74.236 181.431,74.759 180.861,74.971 180.397 C 75.182 179.932,75.486 179.552,75.646 179.552 C 75.806 179.552,78.487 177.011,81.603 173.905 C 84.720 170.798,87.435 168.257,87.636 168.257 C 87.838 168.257,88.275 167.731,88.608 167.089 C 88.940 166.446,89.441 165.920,89.720 165.920 C 90.000 165.920,90.463 165.482,90.750 164.946 C 91.037 164.410,91.855 163.627,92.569 163.206 C 93.282 162.785,93.866 162.247,93.866 162.011 C 93.866 161.471,94.846 160.467,95.374 160.467 C 95.591 160.467,96.057 159.980,96.409 159.384 C 96.761 158.788,97.559 158.008,98.184 157.650 C 98.808 157.291,99.318 156.732,99.318 156.406 C 99.318 156.080,99.832 155.548,100.459 155.224 C 101.087 154.899,101.704 154.308,101.830 153.910 C 101.956 153.511,102.478 152.995,102.989 152.762 C 103.500 152.529,104.236 151.801,104.624 151.145 C 105.011 150.488,105.560 149.951,105.842 149.951 C 106.124 149.951,106.706 149.357,107.135 148.630 C 107.564 147.903,108.272 147.215,108.709 147.101 C 109.145 146.987,109.596 146.536,109.710 146.099 C 109.825 145.662,110.513 144.954,111.239 144.525 C 111.966 144.097,112.561 143.515,112.561 143.232 C 112.561 142.950,113.098 142.402,113.754 142.014 C 114.411 141.626,115.131 140.907,115.355 140.415 C 115.579 139.923,116.185 139.329,116.701 139.094 C 117.217 138.858,117.807 138.226,118.012 137.687 C 118.216 137.149,118.659 136.709,118.996 136.709 C 119.332 136.709,119.904 136.192,120.267 135.561 C 120.629 134.929,121.306 134.239,121.770 134.028 C 122.234 133.816,122.931 133.106,123.319 132.450 C 123.707 131.793,124.255 131.256,124.537 131.256 C 124.820 131.256,125.413 130.643,125.855 129.893 C 126.297 129.143,126.909 128.530,127.213 128.530 C 127.518 128.530,127.967 128.093,128.210 127.558 C 128.454 127.024,129.239 126.241,129.954 125.819 C 130.670 125.396,131.256 124.799,131.256 124.492 C 131.256 124.184,131.870 123.571,132.619 123.129 C 133.369 122.686,133.982 122.051,133.982 121.717 C 133.982 121.383,134.423 120.943,134.961 120.738 C 135.499 120.534,136.141 119.924,136.387 119.385 C 136.633 118.845,136.982 118.403,137.163 118.403 C 137.676 118.403,142.162 113.904,142.162 113.390 C 142.162 113.137,142.603 112.763,143.142 112.558 C 143.682 112.353,144.291 111.744,144.496 111.205 C 144.701 110.665,145.073 110.224,145.322 110.224 C 145.797 110.224,150.341 105.701,150.341 105.228 C 150.341 105.078,150.734 104.783,151.215 104.571 C 151.696 104.360,152.319 103.705,152.600 103.116 C 152.880 102.527,153.371 102.045,153.691 102.045 C 154.010 102.045,154.568 101.528,154.931 100.897 C 155.293 100.265,155.994 99.564,156.489 99.339 C 156.983 99.113,157.686 98.404,158.051 97.763 C 158.416 97.122,158.940 96.596,159.215 96.594 C 159.490 96.593,160.077 95.979,160.519 95.229 C 160.961 94.479,161.577 93.866,161.887 93.866 C 162.197 93.866,162.736 93.370,163.084 92.764 C 163.431 92.157,164.212 91.377,164.818 91.029 C 165.424 90.681,165.920 90.143,165.920 89.833 C 165.920 89.523,166.534 88.907,167.283 88.464 C 168.033 88.022,168.647 87.396,168.647 87.073 C 168.647 86.750,169.160 86.220,169.787 85.895 C 170.415 85.571,171.043 84.943,171.184 84.500 C 171.325 84.057,171.865 83.533,172.385 83.335 C 172.905 83.137,173.512 82.576,173.735 82.087 C 173.957 81.598,174.673 80.892,175.325 80.518 C 175.977 80.144,176.597 79.510,176.701 79.109 C 176.806 78.709,177.318 78.187,177.838 77.950 C 178.359 77.713,178.987 77.074,179.235 76.530 C 179.483 75.986,180.079 75.443,180.559 75.322 C 181.040 75.201,181.638 74.609,181.888 74.005 C 182.138 73.402,182.677 72.820,183.086 72.713 C 183.495 72.606,184.136 71.984,184.511 71.332 C 184.886 70.679,185.558 70.053,186.006 69.940 C 186.453 69.828,187.021 69.291,187.269 68.748 C 187.517 68.204,188.161 67.558,188.699 67.312 C 189.238 67.067,189.679 66.711,189.679 66.522 C 189.679 66.119,194.320 61.538,194.728 61.538 C 194.881 61.538,195.200 61.114,195.436 60.595 C 195.832 59.727,196.554 59.394,198.345 59.255 C 198.720 59.225,199.026 59.364,199.026 59.564 M196.361 106.609 C 195.859 106.704,195.158 107.293,194.803 107.916 C 194.448 108.540,194.031 109.052,193.877 109.053 C 193.722 109.054,188.678 113.963,182.668 119.961 C 176.658 125.959,171.570 130.867,171.362 130.867 C 171.154 130.867,170.983 131.042,170.983 131.257 C 170.983 131.715,132.704 170.003,131.377 170.873 C 130.882 171.197,130.477 171.705,130.477 172.002 C 130.477 172.299,130.311 172.541,130.107 172.541 C 129.903 172.541,127.195 175.039,124.089 178.092 C 120.982 181.144,115.880 186.095,112.751 189.094 C 103.622 197.843,101.266 200.197,101.266 200.571 C 101.266 200.976,97.066 205.256,96.664 205.262 C 96.517 205.264,95.234 206.359,93.812 207.696 C 92.390 209.033,90.144 211.091,88.822 212.269 C 83.074 217.390,82.800 217.727,83.846 218.384 C 84.119 218.555,84.629 219.148,84.980 219.700 C 85.331 220.253,86.554 221.611,87.697 222.717 C 88.840 223.824,89.951 224.913,90.166 225.139 C 91.412 226.449,99.269 234.316,102.045 237.032 C 104.869 239.795,113.719 248.078,114.926 249.086 C 115.980 249.967,119.078 252.706,123.439 256.610 C 125.031 258.036,127.515 260.385,128.960 261.831 C 130.405 263.277,131.765 264.460,131.984 264.460 C 132.202 264.460,132.691 264.985,133.071 265.628 C 133.450 266.271,133.902 266.796,134.074 266.796 C 134.247 266.796,136.217 268.637,138.453 270.886 C 140.688 273.135,142.613 274.976,142.730 274.976 C 142.847 274.976,146.806 271.107,151.528 266.380 C 160.368 257.528,160.773 256.959,158.847 256.082 C 158.381 255.870,157.810 255.346,157.578 254.917 C 157.346 254.489,156.929 253.993,156.651 253.816 C 156.372 253.639,154.311 251.711,152.070 249.532 C 146.601 244.214,143.667 241.513,137.822 236.417 C 136.471 235.239,134.802 233.749,134.114 233.106 C 133.426 232.463,131.521 230.711,129.881 229.211 C 128.241 227.712,126.521 226.065,126.059 225.553 C 125.597 225.040,125.003 224.427,124.739 224.190 C 123.990 223.517,120.035 219.586,118.983 218.468 L 118.036 217.462 119.193 216.607 C 119.830 216.136,120.351 215.513,120.351 215.223 C 120.351 214.933,120.759 214.428,121.258 214.100 C 121.758 213.773,123.071 212.570,124.178 211.427 C 125.284 210.283,126.322 209.222,126.483 209.069 C 126.645 208.917,129.258 206.375,132.290 203.422 C 137.404 198.442,146.152 189.976,155.644 180.820 C 162.936 173.786,182.699 154.484,189.344 147.907 C 192.969 144.318,196.104 141.383,196.312 141.383 C 196.519 141.383,196.689 141.249,196.689 141.087 C 196.689 139.999,198.658 138.743,199.917 139.027 C 201.439 139.370,201.219 139.164,221.424 159.202 C 229.470 167.181,236.179 173.710,236.332 173.711 C 236.486 173.712,236.962 174.237,237.390 174.878 C 237.819 175.520,238.389 176.045,238.656 176.046 C 238.924 176.046,239.143 176.197,239.143 176.382 C 239.143 176.566,239.767 177.311,240.529 178.037 C 241.291 178.763,243.100 180.497,244.548 181.889 C 245.996 183.281,248.559 185.648,250.244 187.147 C 251.928 188.647,253.960 190.487,254.760 191.237 C 255.560 191.986,257.581 193.827,259.251 195.326 C 260.921 196.826,262.820 198.534,263.471 199.122 C 264.545 200.093,275.965 211.097,276.611 211.784 C 277.266 212.480,278.425 213.607,280.331 215.402 C 282.647 217.584,282.770 217.948,281.402 218.571 C 280.867 218.815,280.428 219.148,280.428 219.311 C 280.428 219.474,279.379 220.628,278.095 221.877 C 276.812 223.126,275.589 224.323,275.377 224.537 C 259.141 240.926,251.517 248.491,251.235 248.491 C 251.040 248.491,250.765 248.852,250.625 249.293 C 250.485 249.735,249.977 250.276,249.495 250.495 C 249.013 250.715,248.339 251.369,247.996 251.950 C 247.652 252.531,246.925 253.245,246.380 253.537 C 245.834 253.829,245.294 254.363,245.180 254.722 C 245.066 255.082,244.540 255.608,244.012 255.891 C 241.727 257.114,242.345 257.927,253.734 268.670 C 254.713 269.593,255.794 270.776,256.137 271.299 C 256.479 271.822,257.002 272.249,257.299 272.249 C 257.596 272.249,257.838 272.383,257.838 272.545 C 257.838 272.708,258.302 273.341,258.868 273.952 C 260.901 276.144,261.853 275.606,269.734 267.814 C 273.550 264.041,276.816 260.954,276.992 260.954 C 277.168 260.954,277.313 260.735,277.314 260.467 C 277.314 260.200,277.813 259.647,278.422 259.239 C 279.031 258.831,279.863 257.999,280.271 257.390 C 280.679 256.781,281.188 256.282,281.402 256.280 C 281.616 256.279,282.131 255.771,282.546 255.152 C 282.961 254.532,283.794 253.734,284.396 253.378 C 284.999 253.022,285.492 252.478,285.492 252.169 C 285.492 251.860,285.627 251.607,285.793 251.607 C 286.129 251.607,290.691 247.276,291.203 246.472 C 291.382 246.190,291.879 245.770,292.308 245.538 C 292.736 245.306,293.260 244.736,293.471 244.272 C 293.683 243.807,293.983 243.427,294.138 243.427 C 294.294 243.427,299.605 238.243,305.942 231.906 C 317.784 220.063,318.337 219.354,316.249 218.691 C 315.836 218.560,315.194 217.938,314.822 217.308 C 314.449 216.678,313.830 216.063,313.446 215.941 C 313.062 215.819,312.499 215.240,312.196 214.654 C 311.893 214.068,311.209 213.390,310.676 213.147 C 310.143 212.904,309.595 212.353,309.459 211.923 C 309.322 211.492,308.908 211.044,308.538 210.927 C 308.169 210.810,307.608 210.335,307.292 209.873 C 306.977 209.410,306.388 208.752,305.983 208.411 C 305.579 208.069,304.309 206.826,303.162 205.648 C 302.014 204.469,300.943 203.375,300.781 203.216 C 289.499 192.116,282.498 185.470,274.976 178.718 C 272.726 176.700,270.429 174.615,269.870 174.087 C 269.312 173.558,267.590 171.986,266.044 170.594 C 264.497 169.202,261.958 166.792,260.401 165.239 C 258.844 163.685,257.368 162.415,257.120 162.415 C 256.872 162.415,256.670 162.230,256.670 162.004 C 256.670 161.528,251.634 156.573,251.151 156.573 C 250.973 156.573,250.828 156.320,250.828 156.010 C 250.828 155.701,250.340 155.160,249.744 154.808 C 249.149 154.456,248.368 153.658,248.010 153.034 C 247.652 152.409,247.087 151.899,246.756 151.899 C 246.425 151.899,246.154 151.753,246.154 151.574 C 246.154 151.151,241.060 146.056,240.636 146.056 C 240.458 146.056,240.312 145.803,240.312 145.494 C 240.312 145.185,239.786 144.621,239.143 144.242 C 238.500 143.862,237.975 143.431,237.975 143.285 C 237.975 143.138,235.697 140.765,232.913 138.013 C 230.130 135.261,227.658 132.807,227.422 132.561 C 227.185 132.315,226.658 131.789,226.251 131.392 C 224.563 129.749,223.900 129.099,223.642 128.837 C 221.610 126.774,215.265 120.883,210.659 116.784 C 210.095 116.282,208.693 115.020,207.543 113.979 C 205.288 111.937,202.133 109.130,201.297 108.422 C 201.012 108.180,200.474 107.611,200.101 107.156 C 199.439 106.349,198.473 106.207,196.361 106.609 M200.872 109.359 C 202.106 110.597,204.869 113.167,207.011 115.070 C 209.153 116.973,211.519 119.106,212.269 119.812 C 214.863 122.252,216.344 123.471,216.947 123.663 C 217.280 123.768,217.864 124.381,218.243 125.024 C 218.623 125.667,219.183 126.193,219.486 126.193 C 219.790 126.193,220.300 126.698,220.619 127.316 C 220.938 127.933,221.644 128.550,222.187 128.686 C 222.730 128.823,223.174 129.106,223.174 129.316 C 223.174 129.825,227.737 134.372,228.247 134.372 C 228.467 134.372,228.814 134.813,229.019 135.353 C 229.224 135.892,229.818 136.495,230.339 136.694 C 230.860 136.892,231.402 137.416,231.542 137.859 C 231.683 138.302,232.299 138.924,232.911 139.241 C 233.524 139.557,234.137 140.171,234.275 140.604 C 234.412 141.037,235.038 141.657,235.665 141.981 C 236.293 142.306,236.806 142.835,236.806 143.158 C 236.806 143.482,237.412 144.103,238.152 144.540 C 238.892 144.977,239.608 145.682,239.743 146.107 C 239.878 146.532,240.414 147.042,240.934 147.239 C 241.454 147.437,242.072 148.021,242.307 148.537 C 242.542 149.054,243.157 149.668,243.673 149.904 C 244.189 150.139,244.773 150.757,244.971 151.276 C 245.169 151.796,245.678 152.332,246.103 152.467 C 246.528 152.602,247.234 153.318,247.670 154.058 C 248.107 154.798,248.737 155.404,249.070 155.404 C 249.403 155.404,249.875 155.841,250.119 156.376 C 250.362 156.910,251.147 157.693,251.863 158.115 C 252.579 158.538,253.165 159.114,253.165 159.397 C 253.165 159.679,253.690 160.221,254.333 160.600 C 254.976 160.980,255.501 161.529,255.501 161.821 C 255.501 162.113,256.082 162.710,256.792 163.149 C 257.501 163.587,258.320 164.390,258.610 164.933 C 258.901 165.476,259.380 165.920,259.675 165.920 C 259.970 165.920,260.510 166.446,260.875 167.090 C 261.240 167.733,261.841 168.357,262.210 168.476 C 262.579 168.595,263.241 169.198,263.681 169.815 C 264.120 170.432,264.782 171.034,265.151 171.153 C 265.521 171.271,266.173 171.895,266.602 172.538 C 267.030 173.181,267.545 173.708,267.745 173.709 C 267.945 173.709,269.288 174.893,270.730 176.339 C 273.177 178.792,277.408 182.711,279.649 184.601 C 280.838 185.602,283.637 188.062,284.012 188.434 C 284.162 188.583,284.648 189.056,285.093 189.484 C 285.538 189.912,286.467 190.813,287.157 191.486 C 287.848 192.159,288.807 192.910,289.289 193.155 C 289.771 193.400,290.166 193.851,290.166 194.158 C 290.166 194.464,290.521 194.905,290.956 195.137 C 291.888 195.636,296.008 199.692,296.008 200.111 C 296.008 200.270,296.402 200.573,296.884 200.784 C 297.366 200.995,297.932 201.560,298.142 202.038 C 298.352 202.516,299.009 203.077,299.603 203.283 C 300.196 203.490,300.682 203.836,300.682 204.052 C 300.682 204.616,304.744 208.763,305.297 208.763 C 305.552 208.763,305.967 209.215,306.219 209.766 C 306.470 210.318,307.167 211.023,307.768 211.334 C 308.369 211.645,308.861 212.156,308.861 212.470 C 308.861 212.784,309.472 213.437,310.219 213.920 C 310.966 214.404,311.580 215.025,311.582 215.300 C 311.585 215.575,312.201 216.162,312.950 216.605 C 313.700 217.047,314.314 217.650,314.314 217.945 C 314.314 218.239,314.839 218.752,315.482 219.085 C 316.942 219.840,316.953 220.271,315.531 221.007 C 314.916 221.325,314.316 221.956,314.197 222.409 C 314.079 222.862,313.611 223.329,313.158 223.447 C 312.705 223.566,312.080 224.156,311.768 224.759 C 311.457 225.361,310.675 226.165,310.031 226.546 C 309.387 226.926,308.861 227.470,308.861 227.755 C 308.861 228.041,308.363 228.559,307.755 228.908 C 307.147 229.257,306.490 229.892,306.295 230.319 C 306.099 230.746,305.589 231.285,305.161 231.516 C 304.732 231.748,304.240 232.159,304.067 232.430 C 303.507 233.306,299.043 237.585,298.688 237.585 C 298.499 237.585,298.345 237.856,298.345 238.188 C 298.345 238.519,297.828 239.086,297.196 239.449 C 296.565 239.811,295.866 240.508,295.643 240.997 C 295.421 241.485,294.796 242.053,294.255 242.259 C 293.714 242.465,293.090 243.033,292.867 243.521 C 292.644 244.010,291.945 244.707,291.314 245.069 C 290.682 245.432,290.166 245.995,290.166 246.320 C 290.166 246.646,289.632 247.189,288.980 247.526 C 288.328 247.863,287.618 248.527,287.402 249.001 C 287.186 249.475,286.493 250.159,285.861 250.522 C 285.229 250.884,284.713 251.442,284.713 251.762 C 284.713 252.082,284.231 252.573,283.642 252.853 C 283.053 253.133,282.398 253.756,282.186 254.237 C 281.975 254.718,281.654 255.112,281.474 255.112 C 281.294 255.112,279.768 256.470,278.084 258.130 C 274.735 261.432,274.485 261.679,273.340 262.824 C 272.911 263.252,272.399 263.752,272.202 263.934 C 272.004 264.116,271.438 264.703,270.944 265.239 C 270.450 265.774,269.709 266.510,269.297 266.874 C 268.500 267.580,268.201 267.867,266.671 269.397 C 266.135 269.933,265.487 270.574,265.231 270.823 C 264.975 271.072,264.204 271.843,263.518 272.536 C 261.675 274.400,260.023 274.617,259.238 273.098 C 258.901 272.447,258.278 271.805,257.853 271.670 C 257.428 271.535,256.855 270.953,256.581 270.376 C 256.307 269.800,255.700 269.160,255.233 268.955 C 254.766 268.749,254.199 268.176,253.974 267.681 C 253.748 267.186,253.121 266.613,252.580 266.407 C 252.040 266.201,251.405 265.611,251.169 265.095 C 250.934 264.578,250.319 263.964,249.803 263.728 C 249.287 263.493,248.697 262.860,248.493 262.322 C 248.288 261.784,247.962 261.344,247.769 261.344 C 247.575 261.344,246.547 260.511,245.484 259.494 C 243.629 257.719,243.244 256.670,244.447 256.670 C 244.757 256.670,245.362 256.075,245.791 255.349 C 246.220 254.622,246.928 253.934,247.365 253.820 C 247.802 253.705,248.253 253.255,248.367 252.818 C 248.481 252.381,249.169 251.673,249.896 251.244 C 250.623 250.815,251.217 250.233,251.217 249.951 C 251.217 249.669,251.754 249.120,252.411 248.733 C 253.067 248.345,253.788 247.625,254.012 247.134 C 254.236 246.642,254.841 246.047,255.357 245.812 C 255.874 245.577,256.463 244.944,256.668 244.406 C 256.873 243.868,257.316 243.427,257.652 243.427 C 257.989 243.427,258.561 242.911,258.923 242.279 C 259.286 241.648,259.962 240.958,260.426 240.746 C 260.890 240.535,261.567 239.859,261.931 239.244 C 262.294 238.629,262.968 237.960,263.428 237.758 C 263.888 237.556,264.433 237.008,264.638 236.540 C 264.844 236.072,265.416 235.505,265.910 235.279 C 266.404 235.054,266.992 234.466,267.217 233.972 C 267.442 233.478,268.009 232.906,268.477 232.701 C 268.945 232.495,269.488 231.964,269.682 231.521 C 269.877 231.078,270.622 230.331,271.338 229.862 C 272.053 229.393,272.639 228.753,272.639 228.439 C 272.639 228.125,273.152 227.603,273.780 227.278 C 274.407 226.954,275.031 226.340,275.166 225.915 C 275.301 225.490,275.883 224.918,276.459 224.643 C 277.036 224.369,277.675 223.762,277.881 223.295 C 278.086 222.828,278.658 222.262,279.152 222.037 C 279.646 221.812,280.257 221.174,280.510 220.619 C 280.763 220.064,281.461 219.356,282.062 219.046 C 283.557 218.272,283.551 216.744,282.049 215.882 C 281.441 215.533,280.784 214.884,280.589 214.440 C 280.393 213.996,279.857 213.467,279.397 213.264 C 278.937 213.062,278.263 212.394,277.899 211.779 C 277.536 211.164,276.859 210.487,276.395 210.276 C 275.931 210.064,275.254 209.375,274.892 208.743 C 274.529 208.112,273.966 207.595,273.641 207.595 C 273.315 207.595,272.776 207.069,272.444 206.426 C 272.112 205.784,271.585 205.258,271.275 205.258 C 270.964 205.258,270.403 204.776,270.028 204.187 C 269.653 203.598,269.131 202.980,268.868 202.814 C 268.604 202.648,266.497 200.686,264.185 198.453 C 261.872 196.221,259.542 193.994,259.007 193.505 C 258.471 193.017,256.105 190.868,253.749 188.732 C 251.392 186.595,249.028 184.444,248.495 183.952 C 247.961 183.460,247.332 183.057,247.097 183.057 C 246.861 183.057,246.468 182.617,246.222 182.078 C 245.977 181.539,245.338 180.899,244.804 180.656 C 244.269 180.412,243.724 179.874,243.593 179.460 C 243.462 179.046,242.845 178.529,242.222 178.312 C 241.600 178.095,241.091 177.762,241.091 177.572 C 241.091 177.112,237.660 173.694,236.345 172.844 C 235.774 172.475,235.191 171.807,235.050 171.361 C 234.908 170.915,234.352 170.382,233.814 170.177 C 233.276 169.973,232.745 169.457,232.634 169.031 C 232.522 168.605,232.292 168.257,232.123 168.257 C 231.693 168.257,226.680 163.201,226.680 162.768 C 226.680 162.574,226.409 162.415,226.077 162.415 C 225.746 162.415,225.190 161.919,224.842 161.313 C 224.495 160.707,223.714 159.926,223.108 159.578 C 222.502 159.230,222.006 158.675,222.006 158.343 C 222.006 158.012,221.842 157.741,221.642 157.741 C 221.199 157.741,216.164 152.825,216.164 152.392 C 216.164 152.222,215.784 151.910,215.319 151.699 C 214.855 151.488,214.285 150.964,214.053 150.536 C 213.822 150.107,213.369 149.593,213.048 149.392 C 212.726 149.192,211.321 147.862,209.924 146.436 C 208.528 145.010,206.994 143.634,206.516 143.378 C 206.039 143.122,205.648 142.661,205.648 142.353 C 205.648 142.044,205.134 141.527,204.507 141.202 C 203.879 140.878,203.259 140.277,203.129 139.867 C 202.462 137.763,198.529 137.313,196.818 139.143 C 196.167 139.839,195.214 140.788,194.701 141.252 C 194.188 141.715,193.593 142.272,193.379 142.489 C 193.165 142.706,192.495 143.379,191.890 143.983 C 191.285 144.588,190.672 145.206,190.527 145.357 C 190.196 145.700,182.917 152.698,178.885 156.549 C 174.389 160.844,151.489 183.192,145.038 189.581 C 141.956 192.634,139.279 195.131,139.091 195.131 C 138.902 195.131,138.656 195.480,138.545 195.906 C 138.433 196.332,137.927 196.838,137.420 197.031 C 136.913 197.224,136.253 197.839,135.953 198.399 C 135.654 198.958,135.293 199.416,135.151 199.416 C 134.846 199.416,127.994 206.092,127.504 206.867 C 127.318 207.160,126.828 207.587,126.414 207.816 C 125.999 208.044,125.474 208.570,125.245 208.984 C 125.017 209.398,124.621 209.872,124.365 210.036 C 123.408 210.652,119.182 214.953,119.182 215.311 C 119.182 215.516,118.849 215.770,118.442 215.877 C 117.118 216.223,116.700 217.589,117.654 218.453 C 118.109 218.865,118.683 219.408,118.929 219.661 C 124.351 225.228,126.631 227.459,126.900 227.459 C 127.081 227.459,127.443 227.857,127.704 228.344 C 127.964 228.832,128.695 229.576,129.326 230.000 C 129.958 230.423,130.475 230.968,130.476 231.211 C 130.477 231.454,130.914 231.940,131.449 232.290 C 131.983 232.640,133.468 233.931,134.749 235.158 C 136.030 236.386,137.989 238.179,139.104 239.143 C 140.218 240.107,141.794 241.509,142.606 242.259 C 143.417 243.009,144.806 244.236,145.691 244.985 C 146.576 245.735,147.970 247.006,148.790 247.809 C 149.609 248.612,150.425 249.271,150.602 249.272 C 150.780 249.274,151.224 249.799,151.589 250.441 C 151.953 251.082,152.519 251.607,152.844 251.607 C 153.170 251.607,153.709 252.132,154.041 252.775 C 154.373 253.418,154.839 253.944,155.077 253.944 C 155.314 253.944,156.370 254.819,157.424 255.890 L 159.340 257.836 158.389 258.270 C 157.866 258.508,157.245 259.126,157.010 259.642 C 156.775 260.158,156.142 260.748,155.604 260.952 C 155.065 261.157,154.625 261.504,154.625 261.724 C 154.625 261.943,153.556 263.157,152.249 264.421 C 150.943 265.685,149.698 266.894,149.484 267.108 C 149.270 267.322,148.744 267.848,148.315 268.277 C 147.887 268.705,147.375 269.204,147.177 269.387 C 146.980 269.569,146.414 270.156,145.920 270.691 C 145.425 271.227,144.684 271.945,144.273 272.287 C 143.861 272.629,143.326 273.243,143.083 273.650 C 142.665 274.351,142.615 274.336,142.163 273.363 C 141.901 272.798,141.256 272.105,140.731 271.824 C 140.205 271.542,139.508 270.860,139.182 270.308 C 138.856 269.756,138.078 269.011,137.454 268.652 C 136.830 268.294,136.319 267.742,136.319 267.425 C 136.319 267.108,135.984 266.743,135.575 266.613 C 135.166 266.483,134.377 265.782,133.823 265.055 C 133.268 264.328,132.473 263.625,132.055 263.492 C 131.638 263.360,131.187 262.908,131.054 262.488 C 130.920 262.068,130.332 261.477,129.746 261.174 C 129.161 260.871,128.476 260.172,128.224 259.620 C 127.973 259.069,127.595 258.617,127.383 258.617 C 127.172 258.617,125.722 257.380,124.162 255.867 C 118.115 250.006,112.022 244.596,111.467 244.596 C 111.236 244.596,110.743 244.081,110.371 243.452 C 110.000 242.823,109.283 242.205,108.778 242.078 C 108.273 241.951,107.695 241.414,107.493 240.885 C 107.292 240.355,106.967 239.922,106.772 239.922 C 106.576 239.922,105.616 239.133,104.638 238.169 C 103.661 237.205,102.719 236.417,102.545 236.417 C 102.371 236.417,102.056 236.026,101.845 235.547 C 101.634 235.069,101.030 234.465,100.503 234.205 C 99.977 233.945,99.412 233.370,99.248 232.927 C 99.084 232.484,98.504 231.952,97.959 231.744 C 97.414 231.537,96.799 230.923,96.592 230.380 C 96.385 229.837,95.758 229.218,95.198 229.005 C 94.638 228.792,94.087 228.262,93.973 227.828 C 93.860 227.393,93.256 226.774,92.631 226.451 C 92.006 226.128,91.331 225.430,91.129 224.901 C 90.928 224.372,90.337 223.777,89.816 223.579 C 89.295 223.381,88.754 222.856,88.613 222.413 C 88.473 221.970,87.838 221.339,87.204 221.011 C 86.440 220.616,85.970 220.013,85.813 219.229 C 85.682 218.577,85.349 217.957,85.072 217.851 C 84.771 217.735,86.158 216.245,88.536 214.132 C 90.717 212.193,92.954 210.148,93.506 209.588 C 95.287 207.780,98.229 205.258,98.557 205.258 C 98.733 205.258,98.988 204.906,99.125 204.475 C 99.262 204.044,99.887 203.426,100.514 203.102 C 101.142 202.777,101.655 202.280,101.655 201.997 C 101.655 201.713,103.101 200.059,104.869 198.320 C 106.636 196.581,110.575 192.698,113.623 189.692 C 116.670 186.686,119.347 184.226,119.572 184.226 C 119.796 184.226,120.148 183.785,120.353 183.245 C 120.558 182.706,121.152 182.102,121.673 181.904 C 122.194 181.706,122.736 181.182,122.876 180.739 C 123.017 180.296,123.653 179.664,124.290 179.334 C 124.927 179.005,125.635 178.325,125.863 177.823 C 126.092 177.322,126.654 176.710,127.113 176.465 C 127.572 176.219,128.246 175.499,128.610 174.864 C 128.974 174.229,129.534 173.710,129.853 173.710 C 130.172 173.710,130.744 173.184,131.123 172.541 C 131.503 171.899,132.030 171.373,132.294 171.373 C 132.558 171.373,133.237 170.766,133.802 170.025 C 134.368 169.284,135.166 168.571,135.575 168.441 C 135.984 168.311,136.319 168.036,136.319 167.830 C 136.319 167.324,145.927 157.741,146.435 157.741 C 146.655 157.741,146.835 157.568,146.835 157.357 C 146.835 156.912,154.099 149.562,154.538 149.562 C 154.698 149.562,155.003 149.182,155.214 148.717 C 155.426 148.253,155.949 147.683,156.378 147.452 C 156.806 147.220,157.298 146.809,157.471 146.538 C 158.031 145.662,162.496 141.383,162.850 141.383 C 163.039 141.383,163.194 141.129,163.194 140.818 C 163.194 140.508,163.800 139.791,164.542 139.226 C 165.283 138.660,165.983 137.905,166.096 137.547 C 166.210 137.189,166.698 136.723,167.182 136.511 C 167.666 136.298,168.235 135.730,168.447 135.248 C 168.658 134.766,168.965 134.372,169.128 134.372 C 169.456 134.372,173.812 130.102,174.347 129.255 C 174.532 128.963,175.034 128.535,175.463 128.303 C 175.891 128.071,176.402 127.531,176.598 127.102 C 176.794 126.673,177.320 126.161,177.767 125.965 C 178.213 125.769,178.747 125.224,178.954 124.754 C 179.160 124.283,179.745 123.676,180.252 123.404 C 180.760 123.132,181.523 122.422,181.948 121.825 C 182.373 121.228,182.934 120.740,183.195 120.740 C 183.455 120.740,183.975 120.220,184.351 119.585 C 184.726 118.950,185.552 118.124,186.187 117.749 C 186.822 117.374,187.342 116.852,187.342 116.588 C 187.342 116.325,187.829 115.822,188.425 115.470 C 189.021 115.118,189.801 114.320,190.160 113.696 C 190.518 113.072,191.077 112.561,191.403 112.561 C 191.729 112.561,192.267 112.035,192.600 111.392 C 192.932 110.750,193.465 110.224,193.784 110.224 C 194.103 110.224,194.709 109.654,195.130 108.958 C 195.658 108.087,196.294 107.617,197.170 107.451 C 197.869 107.319,198.484 107.188,198.535 107.159 C 198.586 107.131,199.637 108.121,200.872 109.359 ", stroke: "none", fill: "#7c7c7c", fillRule: "evenodd" }))));
};

var Icon$10 = function (props) {
    var id = uniqueId__default['default']("svg");
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 48 48" }, props),
        React__default['default'].createElement("g", { clipPath: "url(#" + id + ")" },
            React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M44.4825 9.78846C44.9985 10.9575 44.934 12.0841 44.3506 13.0946C43.7672 14.105 42.8238 14.7242 41.5534 14.8619C40.2449 15.0037 38.5223 14.6345 36.5148 13.4755C34.5072 12.3164 33.3262 11.0092 32.7948 9.80511C32.2788 8.63603 32.3433 7.50943 32.9267 6.49898C33.5101 5.48854 34.4535 4.86941 35.7239 4.73171C37.0324 4.5899 38.755 4.95904 40.7625 6.1181C42.7701 7.27716 43.9511 8.58438 44.4825 9.78846ZM46.7339 8.79481C45.9315 6.97669 44.3045 5.3214 41.993 3.98688C39.6815 2.65235 37.4345 2.07098 35.4588 2.28512C33.445 2.50338 31.7896 3.54667 30.7955 5.26852C29.8014 6.99038 29.7255 8.94565 30.5434 10.7988C31.3458 12.6169 32.9728 14.2722 35.2843 15.6067C37.5958 16.9412 39.8428 17.5226 41.8185 17.3085C43.8323 17.0902 45.4877 16.0469 46.4818 14.325C47.4759 12.6032 47.5518 10.6479 46.7339 8.79481Z", fill: "#FFAF00" }),
            React__default['default'].createElement("path", { d: "M39.2061 12.466C39.4779 11.9952 39.3166 11.3932 38.8458 11.1213L37.3879 10.2796C36.9171 10.0078 36.315 10.1691 36.0432 10.6399L33.7667 14.5829C33.4949 15.0537 33.6562 15.6558 34.127 15.9276L35.5849 16.7693C36.0557 17.0411 36.6577 16.8798 36.9296 16.409L39.2061 12.466Z", fill: "#EB8C00" }),
            React__default['default'].createElement("path", { d: "M42.8521 10.8222C43.1239 10.3514 42.9626 9.74937 42.4917 9.47754L36.9885 6.30023C36.5177 6.02841 35.9156 6.18972 35.6438 6.66054L34.4249 8.77169C34.1531 9.2425 34.3144 9.84453 34.7852 10.1164L40.2885 13.2937C40.7593 13.5655 41.3614 13.4042 41.6332 12.9334L42.8521 10.8222Z", fill: "#FFAF00" }),
            React__default['default'].createElement("path", { d: "M42.8521 10.8222C43.1239 10.3514 42.9626 9.74937 42.4917 9.47754L38.2605 7.03465C37.7897 6.76282 37.1877 6.92413 36.9159 7.39495L35.9418 9.08208C35.67 9.5529 35.8313 10.1549 36.3021 10.4268L40.5333 12.8697C41.0041 13.1415 41.6062 12.9802 41.878 12.5093L42.8521 10.8222Z", fill: "#FFD800" }),
            React__default['default'].createElement("path", { d: "M42.2502 9.90623C42.3862 9.67082 42.3055 9.3698 42.0701 9.23389L41.2265 8.74685C40.9911 8.61094 40.6901 8.6916 40.5542 8.92701L39.0879 11.4666C38.952 11.702 39.0327 12.0031 39.2681 12.139L40.1117 12.626C40.3471 12.7619 40.6481 12.6813 40.784 12.4458L42.2502 9.90623Z", fill: "#FFE971" }),
            React__default['default'].createElement("path", { d: "M14.4276 37.9808C19.0474 45.9826 29.0239 48.079 37.1341 43.3966C45.2442 38.7142 48.4169 29.0261 43.7971 21.0244C39.1773 13.0227 29.2008 10.9262 21.0907 15.6086C12.9805 20.291 9.80785 29.9791 14.4276 37.9808Z", fill: "#EB8C00" }),
            React__default['default'].createElement("path", { d: "M12.9928 35.4957C17.6126 43.4975 27.5891 45.5939 35.6993 40.9115C43.8094 36.2291 46.9821 26.541 42.3623 18.5393C37.7425 10.5375 27.766 8.4411 19.6558 13.1235C11.5457 17.8059 8.37303 27.494 12.9928 35.4957Z", fill: "#FFD800" }),
            React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M11.7043 22.6394C12.3316 20.7707 13.3072 19.0005 14.5942 17.4155L44.4474 25.2401C44.6009 27.2114 44.3704 29.1765 43.7923 31.0497L11.7043 22.6394ZM39.463 38.0997C40.3335 37.2422 41.1005 36.3113 41.7564 35.3244L10.887 27.2335C10.8573 28.381 10.9556 29.5386 11.1892 30.6891L39.463 38.0997Z", fill: "#FFE971" }),
            React__default['default'].createElement("path", { d: "M15.0259 34.3218C19.0448 41.2826 27.6684 43.1382 34.6556 39.1041C41.6428 35.07 44.3477 26.674 40.3288 19.7131C36.31 12.7523 27.6863 10.8967 20.6991 14.9308C13.7119 18.9649 11.0071 27.3609 15.0259 34.3218Z", fill: "#FFC700" }),
            React__default['default'].createElement("path", { d: "M16.5423 33.2959C20.044 39.3611 27.4985 40.8267 33.6123 37.2969C39.7261 33.7671 42.1841 26.5785 38.6824 20.5134C35.1806 14.4482 27.7262 12.9826 21.6123 16.5124C15.4985 20.0422 13.0406 27.2308 16.5423 33.2959Z", fill: "white" }),
            React__default['default'].createElement("path", { d: "M19.6485 19.4094C18.7716 20.2171 20.1105 20.7851 21.1076 20.1316C22.9645 18.9145 25.1882 18.2126 27.5811 18.2248C31.0292 18.2423 34.1409 19.7388 36.319 22.1137C37.0584 22.9199 38.4114 22.545 37.8645 21.5976C34.5623 15.878 27.6235 14.4433 21.9702 17.7072C21.1156 18.2006 20.3393 18.7732 19.6485 19.4094Z", fill: "#E7E8E8" }),
            React__default['default'].createElement("path", { d: "M34.6395 35.043C35.5545 34.2788 34.2368 33.6843 33.2067 34.2845C31.5603 35.2437 29.6432 35.7884 27.5946 35.7783C24.3428 35.7623 21.4084 34.3516 19.3546 32.1127C18.6572 31.3525 17.381 31.706 17.8968 32.5993C21.0104 37.9921 27.5541 39.344 32.8862 36.2656C33.5169 35.9014 34.1025 35.4916 34.6395 35.043Z", fill: "#E7E8E8" }),
            React__default['default'].createElement("path", { d: "M32.5972 20.6118C32.801 20.2587 32.6801 19.8071 32.3269 19.6033L32.0205 19.4263C31.6673 19.2225 31.2158 19.3434 31.0119 19.6966L28.0893 24.7587C27.8854 25.1118 28.0064 25.5633 28.3595 25.7672L28.666 25.9442C29.0191 26.148 29.4707 26.027 29.6745 25.6739L32.5972 20.6118Z", fill: "#452A7A" }),
            React__default['default'].createElement("path", { d: "M21.2036 27.5233C20.8098 27.6288 20.576 28.0336 20.6816 28.4275L20.7784 28.789C20.884 29.1828 21.2888 29.4166 21.6826 29.311L26.2569 28.0854C26.6507 27.9798 26.8844 27.575 26.7789 27.1812L26.682 26.8197C26.5765 26.4258 26.1717 26.1921 25.7778 26.2976L21.2036 27.5233Z", fill: "#452A7A" }),
            React__default['default'].createElement("path", { d: "M25.4809 25.6151C26.244 24.2934 27.8023 23.9359 29.053 24.658C30.3037 25.3801 30.7732 26.9084 30.0101 28.23C29.247 29.5517 27.6887 29.9093 26.438 29.1872C25.1873 28.4651 24.7178 26.9368 25.4809 25.6151Z", fill: "#452A7A" }),
            React__default['default'].createElement("path", { d: "M17.0126 14.6084C16.4241 14.2686 15.5801 14.6286 15.1275 15.4126L10.989 22.5807C10.5364 23.3647 10.6466 24.2756 11.2351 24.6154L11.8085 24.9464C12.397 25.2862 13.241 24.9262 13.6936 24.1422L17.8321 16.9741C18.2847 16.1901 18.1745 15.2792 17.586 14.9394L17.0126 14.6084Z", fill: "#EB8C00" }),
            React__default['default'].createElement("path", { d: "M1.87053 28.4667C-1.14632 26.725 -0.193534 19.9443 3.7222 13.162C7.63794 6.37974 13.0338 2.16425 16.0507 3.90603C19.0675 5.64781 18.1147 12.4285 14.199 19.2108C10.2833 25.993 4.88739 30.2085 1.87053 28.4667Z", fill: "#FFC700" }),
            React__default['default'].createElement("path", { d: "M3.24974 28.6111C0.902471 27.273 2.13775 21.219 5.79373 14.9665C9.44971 8.71396 14.1419 4.63067 16.4892 5.96878C18.8365 7.30688 17.6012 13.3609 13.9452 19.6134C10.2892 25.8659 5.59701 29.9492 3.24974 28.6111Z", fill: "#FFD800" }),
            React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M2.32523 23.3938C2.57644 22.2148 2.99217 20.9038 3.55715 19.5196L17.6473 7.92463C17.7625 8.75342 17.6984 9.77478 17.4703 10.9308L2.32523 23.3938ZM15.6081 16.3772C15.9949 15.5396 16.3319 14.7209 16.6159 13.9331L2.04567 25.923C2.0571 26.4661 2.12846 26.9487 2.26274 27.3591L15.6081 16.3772Z", fill: "#FFE971" })),
        React__default['default'].createElement("defs", null,
            React__default['default'].createElement("clipPath", { id: id },
                React__default['default'].createElement("rect", { width: "48", height: "48", fill: "white", transform: "matrix(-1 0 0 1 48 0)" })))));
};

var Icon$$ = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M9 14.7902C9 15.555 9.82366 16.0367 10.4903 15.6617L15.4505 12.8716C16.1302 12.4893 16.1302 11.5107 15.4505 11.1284L10.4903 8.33827C9.82366 7.96331 9 8.44502 9 9.20985V14.7902ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" })));
};

var Icon$_ = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M3.18731 5.68438C2.44993 5.52604 2.44993 4.47393 3.18731 4.31559L5.3203 3.85755C5.58957 3.79973 5.79991 3.58939 5.85774 3.32012L6.31577 1.18713C6.47411 0.449748 7.52622 0.449751 7.68457 1.18713L8.1426 3.32012C8.20042 3.58939 8.41076 3.79973 8.68003 3.85755L10.813 4.31559C11.5504 4.47393 11.5504 5.52604 10.813 5.68438L8.68003 6.14241C8.41076 6.20024 8.20042 6.41058 8.1426 6.67985L7.68457 8.81284C7.52622 9.55022 6.47411 9.55022 6.31577 8.81284L5.85774 6.67985C5.79991 6.41058 5.58957 6.20024 5.3203 6.14241L3.18731 5.68438Z" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 2.99998C15.866 2.99998 19 6.13399 19 9.99998C19 13.866 15.866 17 12 17C8.13401 17 5 13.866 5 9.99998C5 9.4477 4.55228 8.99998 4 8.99998C3.44772 8.99998 3 9.4477 3 9.99998C3 12.8894 4.36163 15.4608 6.47822 17.1075L5.58579 18C5.21071 18.3751 5 18.8838 5 19.4142V21.5C5 22.3284 5.67157 23 6.5 23H17.5C18.3284 23 19 22.3284 19 21.5V19.4142C19 18.8838 18.7893 18.3751 18.4142 18L17.5218 17.1075C19.6384 15.4608 21 12.8894 21 9.99998C21 5.02942 16.9706 0.999985 12 0.999985C11.4477 0.999985 11 1.4477 11 1.99998C11 2.55227 11.4477 2.99998 12 2.99998ZM12 19C10.6564 19 9.38156 18.7056 8.23649 18.1777L7 19.4142L7 21H17V19.4142L15.7635 18.1777C14.6184 18.7056 13.3436 19 12 19Z" })));
};

var Icon$Z = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 48 48" }, props),
        React__default['default'].createElement("path", { d: "M38 10H34C34 7.79086 32.2091 6 30 6H18C15.7909 6 14 7.79086 14 10H10C7.8 10 6 11.8 6 14V16C6 21.1 9.84 25.26 14.78 25.88C16.04 28.88 18.74 31.14 22 31.8V38H16C14.8954 38 14 38.8954 14 40C14 41.1046 14.8954 42 16 42H32C33.1046 42 34 41.1046 34 40C34 38.8954 33.1046 38 32 38H26V31.8C29.26 31.14 31.96 28.88 33.22 25.88C38.16 25.26 42 21.1 42 16V14C42 11.8 40.2 10 38 10ZM10 16V14H14V21.64C11.68 20.8 10 18.6 10 16ZM24 28C20.7 28 18 25.3 18 22V10H30V22C30 25.3 27.3 28 24 28ZM38 16C38 18.6 36.32 20.8 34 21.64V14H38V16Z" })));
};

var Icon$Y = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M8.99984 5.89661V6.27661C8.16984 5.94661 7.27984 5.77661 6.38984 5.77661C4.96985 5.77661 3.54985 6.20661 2.33985 7.06661C1.82985 7.42661 1.76985 8.15661 2.20985 8.59661L4.77985 11.1666H5.88984V12.2766C6.74984 13.1366 7.86984 13.5866 8.99984 13.6366V15.8966H6.99985C6.44984 15.8966 5.99985 16.3466 5.99985 16.8966V18.8966C5.99985 19.9966 6.89985 20.8966 7.99984 20.8966H17.9998C19.6598 20.8966 20.9998 19.5566 20.9998 17.8966V5.89661C20.9998 5.34661 20.5498 4.89661 19.9998 4.89661H9.99984C9.44984 4.89661 8.99984 5.34661 8.99984 5.89661ZM7.88984 11.3066V9.15661H5.60984L4.56985 8.11661C5.13985 7.89661 5.75985 7.77661 6.38984 7.77661C7.72984 7.77661 8.97985 8.29661 9.92984 9.23661L11.3398 10.6466L11.1398 10.8466C10.6298 11.3566 9.94984 11.6466 9.21984 11.6466C8.74985 11.6466 8.28984 11.5266 7.88984 11.3066ZM18.9998 17.8966C18.9998 18.4466 18.5498 18.8966 17.9998 18.8966C17.4498 18.8966 16.9998 18.4466 16.9998 17.8966V16.8966C16.9998 16.3466 16.5498 15.8966 15.9998 15.8966H10.9998V13.3066C11.5698 13.0766 12.0998 12.7366 12.5598 12.2766L12.7598 12.0766L15.5898 14.8966H16.9998V13.4866L10.9998 7.51661V6.89661H18.9998V17.8966Z" })));
};

var Icon$X = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 20 20" }, props),
        React__default['default'].createElement("path", { d: "M5 10C5 10.55 5.45 11 6 11H14C14.55 11 15 10.55 15 10C15 9.45 14.55 9 14 9H6C5.45 9 5 9.45 5 10ZM10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18Z" })));
};

var Icon$W = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M23 12L20.56 9.21L20.9 5.52L17.29 4.7L15.4 1.5L12 2.96L8.6 1.5L6.71 4.69L3.1 5.5L3.44 9.2L1 12L3.44 14.79L3.1 18.49L6.71 19.31L8.6 22.5L12 21.03L15.4 22.49L17.29 19.3L20.9 18.48L20.56 14.79L23 12ZM9.38 16.01L7 13.61C6.61 13.22 6.61 12.59 7 12.2L7.07 12.13C7.46 11.74 8.1 11.74 8.49 12.13L10.1 13.75L15.25 8.59C15.64 8.2 16.28 8.2 16.67 8.59L16.74 8.66C17.13 9.05 17.13 9.68 16.74 10.07L10.82 16.01C10.41 16.4 9.78 16.4 9.38 16.01Z" })));
};

var Icon$V = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 34 38" }, props),
        React__default['default'].createElement("rect", { x: "8.83594", width: "5.30132", height: "17.3191", rx: "2.65066", fill: "#D1884F" }),
        React__default['default'].createElement("rect", { x: "19.4385", width: "5.30132", height: "17.3191", rx: "2.65066", fill: "#D1884F" }),
        React__default['default'].createElement("path", { d: "M8.5 13.0084C13.1944 8.40751 20.8056 8.40751 25.5 13.0084C30.1944 17.6093 30.1944 25.0689 25.5 29.6698L17.6538 37.3597C17.2927 37.7136 16.7073 37.7136 16.3462 37.3597L8.5 29.6698C3.80558 25.0689 3.80558 17.6093 8.5 13.0084Z", fill: "#D1884F" }),
        React__default['default'].createElement("ellipse", { cx: "12.3696", cy: "19.9172", rx: "1.76711", ry: "2.59786", fill: "white" }),
        React__default['default'].createElement("ellipse", { cx: "21.2056", cy: "19.9172", rx: "1.76711", ry: "2.59786", fill: "white" })));
};

var Icon$U = function (props) {
    var id = lodash.uniqueId("svg");
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 64 64" }, props),
        React__default['default'].createElement("g", { clipPath: "url(#" + id + ")" },
            React__default['default'].createElement("g", { opacity: "0.5" },
                React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M22.9614 22.6577C22.1497 21.837 20.8799 22.1545 20.6502 23.2356C20.4793 24.0399 20.9887 24.8972 21.775 25.1283L26.8237 26.6119L25.8006 25.5283L22.9614 22.6577ZM17.0022 22.0363C17.8377 18.1041 22.4563 16.9493 25.4089 19.9345L28.2841 22.8415L34.1925 29.0996L28.1494 30.7189C27.8283 30.8049 27.4835 30.7985 27.1491 30.7002L21.0935 28.9207C18.2337 28.0803 16.3806 24.9621 17.0022 22.0363Z", fill: "#7A6EAA" }),
                React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M34.5943 19.5405C34.887 18.4239 36.1454 18.064 36.8848 18.8854C37.435 19.4965 37.4224 20.4937 36.8571 21.0869L33.2266 24.8961L33.5708 23.4462L34.5943 19.5405ZM39.4444 16.0228C36.7547 13.0352 32.1775 14.3444 31.1131 18.4059L30.0766 22.3611L28.0888 30.735L34.132 29.1157C34.4531 29.0297 34.7485 28.8517 34.989 28.5994L39.3434 24.0306C41.3999 21.8728 41.4456 18.2458 39.4444 16.0228Z", fill: "#7A6EAA" }),
                React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M19.4563 42.0674L47.2386 34.6231L50.6382 47.3106C51.0042 48.6763 50.1937 50.08 48.828 50.4459L25.9913 56.565C24.6256 56.9309 23.2219 56.1205 22.8559 54.7548L19.4563 42.0674ZM49.0488 31.4878L53.111 46.648C53.8429 49.3793 52.222 52.1868 49.4906 52.9187L26.6538 59.0378C23.9225 59.7696 21.115 58.1487 20.3832 55.4174L16.321 40.2572L49.0488 31.4878Z", fill: "#7A6EAA" }),
                React__default['default'].createElement("path", { d: "M36.1074 37.606L30.6528 39.0675L35.3736 56.686L40.8283 55.2244L36.1074 37.606Z", fill: "#7A6EAA" }),
                React__default['default'].createElement("path", { d: "M17.9272 46.1213L19.5837 52.3033L52.3115 43.5339L50.6551 37.3519L17.9272 46.1213Z", fill: "#7A6EAA" }),
                React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M16.2885 33.8966L45.9617 25.9456C46.6446 25.7627 47.3464 26.1679 47.5294 26.8507L48.4404 30.2508C48.6234 30.9336 48.2182 31.6355 47.5353 31.8185L17.8621 39.7694C17.1793 39.9524 16.4774 39.5471 16.2944 38.8643L15.3834 35.4642C15.2004 34.7814 15.6056 34.0795 16.2885 33.8966ZM45.2991 23.4729C47.3477 22.924 49.4533 24.1396 50.0022 26.1882L50.9132 29.5882C51.4621 31.6367 50.2464 33.7423 48.1979 34.2912L18.5247 42.2422C16.4762 42.7911 14.3706 41.5754 13.8217 39.5269L12.9106 36.1268C12.3617 34.0783 13.5774 31.9727 15.6259 31.4238L45.2991 23.4729Z", fill: "#7A6EAA" }),
                React__default['default'].createElement("path", { d: "M33.2085 26.7876L27.7539 28.2492L30.6526 39.0675L36.1073 37.606L33.2085 26.7876Z", fill: "#7A6EAA" }),
                React__default['default'].createElement("path", { d: "M47.6246 14.7703V14.3912C47.6246 13.8593 47.731 13.4137 47.9437 13.0547C48.1698 12.6956 48.4691 12.3431 48.8414 11.9974C49.1872 11.6649 49.5264 11.379 49.8588 11.1396C50.1913 10.9002 50.464 10.6475 50.6767 10.3815C50.8895 10.1155 50.9959 9.80299 50.9959 9.44391C50.9959 8.92524 50.8097 8.55951 50.4374 8.34672C50.0783 8.12063 49.4732 8.00759 48.622 8.00759C48.0634 8.00759 47.5115 8.08073 46.9662 8.22703C46.421 8.36002 45.9555 8.53291 45.5698 8.7457V6.05259C46.0619 5.81321 46.6404 5.62037 47.3054 5.47408C47.9836 5.32778 48.7217 5.25464 49.5197 5.25464C51.0624 5.25464 52.2394 5.59377 53.0507 6.27203C53.8619 6.937 54.2675 7.85465 54.2675 9.02498C54.2675 9.76974 54.1146 10.3749 53.8087 10.8403C53.5028 11.2925 53.0573 11.758 52.4721 12.2368C51.9801 12.649 51.5678 13.0081 51.2353 13.314C50.9028 13.6066 50.7366 14.0056 50.7366 14.5109V14.7703L47.6246 14.7703ZM47.4849 18.3012V15.9871L50.8563 15.9871V18.3012L47.4849 18.3012Z", fill: "#7A6EAA" }),
                React__default['default'].createElement("path", { d: "M10.6586 50.2406L10.5388 50.0331C10.3706 49.7418 10.2881 49.4643 10.291 49.2004C10.3013 48.9324 10.3538 48.6448 10.4483 48.3378C10.5325 48.0465 10.6278 47.7827 10.7342 47.5466C10.8405 47.3104 10.9099 47.0859 10.9424 46.873C10.9748 46.6602 10.9342 46.4554 10.8207 46.2588C10.6568 45.9749 10.4393 45.8335 10.1681 45.8347C9.90008 45.8244 9.53305 45.9538 9.06706 46.2228C8.76126 46.3994 8.48221 46.6139 8.22993 46.8664C7.97344 47.1115 7.77325 47.3533 7.62936 47.5917L6.7781 46.1173C6.97184 45.8307 7.22761 45.5422 7.54542 45.252C7.87052 44.9575 8.2515 44.6841 8.68836 44.4319C9.53297 43.9443 10.2845 43.7579 10.9431 43.8728C11.5974 43.9804 12.1095 44.3546 12.4795 44.9954C12.7149 45.4031 12.8224 45.7827 12.8021 46.1343C12.7776 46.4785 12.6808 46.8742 12.5117 47.3213C12.3726 47.7025 12.2604 48.0294 12.1751 48.302C12.0855 48.5672 12.1206 48.8382 12.2804 49.1149L12.3624 49.2569L10.6586 50.2406ZM11.6982 52.2178L10.9668 50.9509L12.8125 49.8853L13.544 51.1522L11.6982 52.2178Z", fill: "#7A6EAA" }),
                React__default['default'].createElement("path", { d: "M8.75569 24.6564L8.59567 24.3793C8.37108 23.9903 8.26079 23.6196 8.26479 23.2672C8.27852 22.9091 8.34854 22.5251 8.47485 22.115C8.58734 21.7259 8.71461 21.3737 8.85667 21.0582C8.99873 20.7428 9.09141 20.4429 9.13471 20.1586C9.17802 19.8743 9.12387 19.6008 8.97227 19.3382C8.7533 18.959 8.46275 18.7701 8.10061 18.7717C7.74259 18.758 7.25237 18.9308 6.62997 19.2902C6.22152 19.526 5.84882 19.8125 5.51186 20.1497C5.16928 20.4771 4.90189 20.8001 4.70971 21.1185L3.57272 19.1492C3.83148 18.7664 4.17311 18.3811 4.59759 17.9934C5.03181 17.6001 5.54066 17.235 6.12416 16.8981C7.25226 16.2468 8.2561 15.9979 9.13567 16.1514C10.0096 16.2951 10.6937 16.7949 11.1878 17.6507C11.5022 18.1953 11.6458 18.7023 11.6187 19.1718C11.5859 19.6316 11.4566 20.1601 11.2308 20.7573C11.0451 21.2665 10.8952 21.7031 10.7812 22.0671C10.6616 22.4215 10.7085 22.7834 10.9218 23.1529L11.0313 23.3426L8.75569 24.6564ZM10.1443 27.2974L9.16732 25.6052L11.6326 24.1819L12.6096 25.874L10.1443 27.2974Z", fill: "#7A6EAA" }))),
        React__default['default'].createElement("defs", null,
            React__default['default'].createElement("clipPath", { id: "clip_present_0" },
                React__default['default'].createElement("rect", { width: "64", height: "64", fill: "white" })))));
};

var Icon$T = function (props) {
    var id = uniqueId__default['default']("svg");
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 64 64" }, props),
        React__default['default'].createElement("g", { clipPath: "url(#" + id + ")" },
            React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M43.1934 10.6907C44.0412 9.92381 45.4 10.3246 45.6959 11.4288C45.9144 12.2444 45.4304 13.0827 44.6148 13.3012L38.4955 14.9409L43.1934 10.6907ZM49.112 10.5134C48.1317 6.85481 43.6295 5.52698 40.8207 8.06806L31.0187 16.9358C29.5584 18.2569 30.8604 20.6481 32.7625 20.1385L45.5302 16.7174C48.2324 15.9933 49.8361 13.2157 49.112 10.5134Z", fill: "#7645D9" }),
            React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M30.1886 8.0841C29.8078 6.90274 28.3125 6.54189 27.4349 7.41956C26.7866 8.06782 26.7866 9.11885 27.4349 9.7671L32.2987 14.6309L30.1886 8.0841ZM24.7196 4.70427C27.6276 1.79628 32.5818 2.99187 33.8434 6.90609L38.2461 20.5658C38.902 22.6007 36.3796 24.1424 34.8677 22.6306L24.7196 12.4824C22.5717 10.3345 22.5717 6.85214 24.7196 4.70427Z", fill: "#7645D9" }),
            React__default['default'].createElement("path", { opacity: "0.6", d: "M7.27624 34.0431C7.01094 35.0539 5.57594 35.054 5.31064 34.0431L4.51492 31.0112C4.42182 30.6565 4.14478 30.3794 3.79005 30.2863L0.758148 29.4906C-0.252715 29.2253 -0.252717 27.7903 0.758146 27.525L3.79005 26.7293C4.14478 26.6362 4.42182 26.3591 4.51492 26.0044L5.31064 22.9725C5.57594 21.9616 7.01094 21.9616 7.27624 22.9725L8.07196 26.0044C8.16506 26.3591 8.44209 26.6362 8.79682 26.7293L11.8287 27.525C12.8396 27.7903 12.8396 29.2253 11.8287 29.4906L8.79683 30.2863C8.44209 30.3794 8.16506 30.6565 8.07196 31.0112L7.27624 34.0431Z", fill: "#53DEE9" }),
            React__default['default'].createElement("path", { d: "M9.62029 11.6637C9.62344 12.2763 8.81089 12.494 8.5073 11.9619L7.59673 10.3659C7.4902 10.1791 7.2913 10.0643 7.07631 10.0654L5.23882 10.0748C4.62619 10.078 4.40847 9.26545 4.9406 8.96185L6.53663 8.05128C6.72337 7.94475 6.8382 7.74585 6.8371 7.53087L6.82766 5.69337C6.82451 5.08074 7.63705 4.86302 7.94064 5.39515L8.85121 6.99119C8.95775 7.17792 9.15664 7.29275 9.37163 7.29165L11.2091 7.28221C11.8218 7.27906 12.0395 8.0916 11.5073 8.39519L9.91131 9.30576C9.72458 9.4123 9.60974 9.6112 9.61085 9.82618L9.62029 11.6637Z", fill: "#53DEE9" }),
            React__default['default'].createElement("path", { opacity: "0.8", d: "M53.8712 15.7857C53.2964 15.6348 53.2964 14.8189 53.8712 14.6681L56.9643 13.8563C57.166 13.8033 57.3235 13.6458 57.3764 13.4441L58.1882 10.351C58.3391 9.77623 59.155 9.77623 59.3058 10.351L60.1176 13.4441C60.1706 13.6458 60.3281 13.8033 60.5298 13.8563L63.6229 14.6681C64.1977 14.8189 64.1977 15.6348 63.6229 15.7857L60.5298 16.5975C60.3281 16.6504 60.1706 16.8079 60.1176 17.0096L59.3058 20.1027C59.155 20.6775 58.3391 20.6775 58.1882 20.1027L57.3764 17.0096C57.3235 16.8079 57.166 16.6504 56.9643 16.5975L53.8712 15.7857Z", fill: "#53DEE9" }),
            React__default['default'].createElement("path", { d: "M51.0823 29.9055C50.3505 27.1742 47.543 25.5533 44.8116 26.2851L17.6112 33.5735C14.8798 34.3053 13.2589 37.1128 13.9908 39.8441L18.546 56.8444C19.2778 59.5758 22.0853 61.1967 24.8167 60.4648L52.0171 53.1765C54.7485 52.4446 56.3694 49.6371 55.6375 46.9058L51.0823 29.9055Z", fill: "url(#paint0_linear_won)" }),
            React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.2737 36.0462L45.4742 28.7579C46.8399 28.392 48.2436 29.2024 48.6095 30.5681L53.1648 47.5684C53.5307 48.934 52.7202 50.3378 51.3546 50.7037L24.1541 57.9921C22.7884 58.358 21.3847 57.5475 21.0187 56.1819L16.4635 39.1816C16.0976 37.8159 16.9081 36.4122 18.2737 36.0462ZM44.8116 26.2851C47.543 25.5533 50.3505 27.1742 51.0823 29.9055L55.6375 46.9058C56.3694 49.6371 54.7485 52.4446 52.0171 53.1765L24.8167 60.4648C22.0853 61.1967 19.2778 59.5758 18.546 56.8444L13.9908 39.8441C13.2589 37.1128 14.8798 34.3053 17.6112 33.5735L44.8116 26.2851Z", fill: "#7645D9" }),
            React__default['default'].createElement("path", { d: "M35.2297 28.8525L27.1932 31.0059L34.3987 57.8973L42.4352 55.7439L35.2297 28.8525Z", fill: "#7645D9" }),
            React__default['default'].createElement("path", { d: "M54.5173 42.4023L52.3639 34.3658L15.1113 44.3476L17.2647 52.3841L54.5173 42.4023Z", fill: "#7645D9" }),
            React__default['default'].createElement("g", { style: { mixBlendMode: "multiply" } },
                React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M39.9264 46.3239L31.8613 48.485L32.1926 49.7213L40.2577 47.5603L39.9264 46.3239ZM29.7019 40.4262L37.767 38.2651L37.4358 37.0287L29.3707 39.1898L29.7019 40.4262Z", fill: "#7645D9" })),
            React__default['default'].createElement("path", { d: "M54.8306 24.9448C55.3795 22.8962 54.1638 20.7906 52.1153 20.2417L17.4965 10.9657C15.448 10.4168 13.3424 11.6324 12.7935 13.681L11.8824 17.081C11.3335 19.1295 12.5492 21.2351 14.5977 21.784L49.2165 31.0601C51.265 31.609 53.3706 30.3933 53.9195 28.3448L54.8306 24.9448Z", fill: "url(#paint1_linear_won)" }),
            React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M16.8339 13.4384L51.4527 22.7145C52.1355 22.8975 52.5408 23.5993 52.3578 24.2822L51.4468 27.6822C51.2638 28.3651 50.5619 28.7703 49.8791 28.5873L15.2603 19.3113C14.5775 19.1283 14.1722 18.4264 14.3552 17.7436L15.2662 14.3435C15.4492 13.6607 16.1511 13.2555 16.8339 13.4384ZM52.1153 20.2417C54.1638 20.7906 55.3795 22.8962 54.8306 24.9448L53.9195 28.3448C53.3706 30.3933 51.265 31.609 49.2165 31.0601L14.5977 21.784C12.5492 21.2351 11.3335 19.1295 11.8824 17.081L12.7935 13.681C13.3424 11.6324 15.448 10.4168 17.4965 10.9657L52.1153 20.2417Z", fill: "#7645D9" }),
            React__default['default'].createElement("path", { d: "M38.8242 16.6804L30.7877 14.527L27.8889 25.3454L35.9254 27.4988L38.8242 16.6804Z", fill: "#7645D9" }),
            React__default['default'].createElement("g", { style: { mixBlendMode: "multiply" } },
                React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M38.4257 18.0799L30.4256 15.8399L30.7455 14.3999L38.8813 16.6573L38.4257 18.0799Z", fill: "#7645D9" }))),
        React__default['default'].createElement("defs", null,
            React__default['default'].createElement("linearGradient", { id: "paint0_linear_won", x1: "31.2114", y1: "29.9293", x2: "38.4169", y2: "56.8207", gradientUnits: "userSpaceOnUse" },
                React__default['default'].createElement("stop", { stopColor: "#53DEE9" }),
                React__default['default'].createElement("stop", { offset: "1", stopColor: "#1FC7D4" })),
            React__default['default'].createElement("linearGradient", { id: "paint1_linear_won", x1: "34.8059", y1: "15.6037", x2: "31.9071", y2: "26.4221", gradientUnits: "userSpaceOnUse" },
                React__default['default'].createElement("stop", { stopColor: "#53DEE9" }),
                React__default['default'].createElement("stop", { offset: "1", stopColor: "#1FC7D4" })),
            React__default['default'].createElement("clipPath", { id: id },
                React__default['default'].createElement("rect", { width: "64", height: "64", fill: "white" })))));
};

var Icon$S = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 64 64" }, props),
        React__default['default'].createElement("g", { opacity: "0.5" },
            React__default['default'].createElement("g", { opacity: "0.7" },
                React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M26.4056 18.7282C25.9843 18.048 25.022 18.0595 24.6402 18.7492C24.3536 19.267 24.543 19.9348 25.0585 20.2242L28.5292 22.1722L28.3615 21.8862L26.4056 18.7282ZM21.3507 16.7681C23.1299 13.5535 27.6151 13.5002 29.5786 16.6703L31.5602 19.8696L35.5898 26.7422L29.3273 26.7422C28.996 26.7422 28.6685 26.6559 28.3751 26.4912L23.3004 23.6429C20.8974 22.2942 20.0147 19.1817 21.3507 16.7681Z", fill: "#BDC2C4" }),
                React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M38.1027 18.7282C38.524 18.048 39.4863 18.0595 39.8681 18.7492C40.1547 19.267 39.9653 19.9348 39.4498 20.2242L35.9791 22.1722L36.1468 21.8862L38.1027 18.7282ZM43.1576 16.7681C41.3784 13.5535 36.8932 13.5002 34.9297 16.6703L32.9481 19.8696L28.9185 26.7422L35.181 26.7422C35.5123 26.7422 35.8398 26.6559 36.1332 26.4912L41.2079 23.6429C43.6109 22.2942 44.4936 19.1817 43.1576 16.7681Z", fill: "#BDC2C4" }),
                React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M19.0715 34.3107L45.3455 34.3107L45.3455 44.3815C45.3455 45.7953 44.1994 46.9415 42.7855 46.9415L21.6315 46.9415C20.2176 46.9415 19.0715 45.7953 19.0715 44.3815L19.0715 34.3107ZM47.9055 31.7507L47.9055 44.3815C47.9055 47.2092 45.6132 49.5015 42.7855 49.5015L21.6315 49.5015C18.8038 49.5015 16.5115 47.2092 16.5115 44.3815L16.5115 31.7507L47.9055 31.7507Z", fill: "#BDC2C4" }),
                React__default['default'].createElement("path", { d: "M34.8555 33.9338L29.6231 33.9338L29.6231 49.4886L34.8555 49.4886L34.8555 33.9338Z", fill: "#BDC2C4" }),
                React__default['default'].createElement("path", { d: "M16.5422 36.9358L16.5422 42.3936L47.9363 42.3936L47.9363 36.9358L16.5422 36.9358Z", fill: "#BDC2C4" }),
                React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.2894 26.8808L46.1893 26.8808C46.8962 26.8808 47.4693 27.4539 47.4693 28.1608L47.4693 30.032C47.4693 30.7389 46.8962 31.312 46.1893 31.312L18.2894 31.312C17.5825 31.312 17.0094 30.7389 17.0094 30.032L17.0094 28.1608C17.0094 27.4539 17.5825 26.8808 18.2894 26.8808ZM46.1893 24.3208C48.3101 24.3208 50.0293 26.04 50.0293 28.1608L50.0293 30.032C50.0293 32.1528 48.3101 33.872 46.1893 33.872L18.2894 33.872C16.1686 33.872 14.4494 32.1528 14.4494 30.032L14.4494 28.1608C14.4494 26.04 16.1686 24.3208 18.2894 24.3208L46.1893 24.3208Z", fill: "#BDC2C4" }),
                React__default['default'].createElement("path", { d: "M34.8555 24.3828L29.6231 24.3828L29.6231 33.934L34.8555 33.934L34.8555 24.3828Z", fill: "#BDC2C4" })),
            React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M51.8824 12.0828C51.4644 11.6649 51.0366 11.2628 50.5996 10.8766C39.5466 1.1084 22.6552 1.51047 12.0828 12.0828C1.51047 22.6552 1.1084 39.5466 10.8766 50.5996C11.2628 51.0366 11.6649 51.4644 12.0828 51.8824C12.5008 52.3004 12.9287 52.7025 13.3656 53.0886C24.4186 62.8569 41.31 62.4548 51.8824 51.8824C62.4548 41.31 62.8569 24.4186 53.0886 13.3656C52.7025 12.9287 52.3004 12.5008 51.8824 12.0828ZM48.1051 13.3711C38.4321 4.97437 23.7691 5.37461 14.5719 14.5719C5.37461 23.7691 4.97437 38.4321 13.3711 48.1051L48.1051 13.3711ZM15.8602 50.5941L50.5941 15.8602C58.9909 25.5331 58.5907 40.1961 49.3934 49.3934C40.1961 58.5907 25.5331 58.9909 15.8602 50.5941Z", fill: "#BDC2C4" }))));
};

var Icon$R = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M17.65 6.35C16.02 4.72 13.71 3.78 11.17 4.04C7.50002 4.41 4.48002 7.39 4.07002 11.06C3.52002 15.91 7.27002 20 12 20C15.19 20 17.93 18.13 19.21 15.44C19.53 14.77 19.05 14 18.31 14C17.94 14 17.59 14.2 17.43 14.53C16.3 16.96 13.59 18.5 10.63 17.84C8.41002 17.35 6.62002 15.54 6.15002 13.32C5.31002 9.44 8.26002 6 12 6C13.66 6 15.14 6.69 16.22 7.78L14.71 9.29C14.08 9.92 14.52 11 15.41 11H19C19.55 11 20 10.55 20 10V6.41C20 5.52 18.92 5.07 18.29 5.7L17.65 6.35Z" })));
};

var Icon$Q = function (props) { return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
    React__default['default'].createElement("path", { d: "M7.20816 9.75C7.724 9.75 8.32379 9.92663 8.90251 10.1849C9.28077 10.3537 9.72425 10.1839 9.89305 9.80565C10.0619 9.42739 9.89206 8.98391 9.5138 8.81511C8.84819 8.51806 8.02565 8.25 7.20816 8.25C6.41131 8.25 5.60257 8.34774 4.86317 8.48493C4.45591 8.5605 4.18702 8.95191 4.26258 9.35917C4.33815 9.76644 4.72956 10.0353 5.13682 9.95976C5.81429 9.83406 6.528 9.75 7.20816 9.75Z" }),
    React__default['default'].createElement("path", { d: "M7.20816 12.75C7.724 12.75 8.32379 12.9266 8.90251 13.1849C9.28077 13.3537 9.72425 13.1839 9.89305 12.8056C10.0619 12.4274 9.89206 11.9839 9.5138 11.8151C8.84819 11.5181 8.02565 11.25 7.20816 11.25C6.41131 11.25 5.60257 11.3477 4.86317 11.4849C4.45591 11.5605 4.18702 11.9519 4.26258 12.3592C4.33815 12.7664 4.72956 13.0353 5.13682 12.9598C5.81429 12.8341 6.528 12.75 7.20816 12.75Z" }),
    React__default['default'].createElement("path", { d: "M7.20816 15.75C7.724 15.75 8.32379 15.9266 8.90251 16.1849C9.28077 16.3537 9.72425 16.1839 9.89305 15.8056C10.0619 15.4274 9.89206 14.9839 9.5138 14.8151C8.84819 14.5181 8.02565 14.25 7.20816 14.25C6.41131 14.25 5.60257 14.3477 4.86317 14.4849C4.45591 14.5605 4.18702 14.9519 4.26258 15.3592C4.33815 15.7664 4.72956 16.0353 5.13682 15.9598C5.81429 15.8341 6.528 15.75 7.20816 15.75Z" }),
    React__default['default'].createElement("path", { d: "M15.3057 10.1849C15.8844 9.92663 16.4842 9.75 17 9.75C17.6802 9.75 18.3939 9.83406 19.0713 9.95976C19.4786 10.0353 19.87 9.76644 19.9456 9.35917C20.0211 8.95191 19.7523 8.5605 19.345 8.48493C18.6056 8.34774 17.7969 8.25 17 8.25C16.1825 8.25 15.36 8.51806 14.6944 8.81511C14.3161 8.98391 14.1463 9.42739 14.3151 9.80565C14.4839 10.1839 14.9274 10.3537 15.3057 10.1849Z" }),
    React__default['default'].createElement("path", { d: "M15.3057 13.1849C15.8844 12.9266 16.4842 12.75 17 12.75C17.6802 12.75 18.3939 12.8341 19.0713 12.9598C19.4786 13.0353 19.87 12.7664 19.9456 12.3592C20.0211 11.9519 19.7523 11.5605 19.345 11.4849C18.6056 11.3477 17.7969 11.25 17 11.25C16.1825 11.25 15.36 11.5181 14.6944 11.8151C14.3161 11.9839 14.1463 12.4274 14.3151 12.8056C14.4839 13.1839 14.9274 13.3537 15.3057 13.1849Z" }),
    React__default['default'].createElement("path", { d: "M15.3057 16.1849C15.8844 15.9266 16.4842 15.75 17 15.75C17.6802 15.75 18.3939 15.8341 19.0713 15.9598C19.4786 16.0353 19.87 15.7664 19.9456 15.3592C20.0211 14.9519 19.7523 14.5605 19.345 14.4849C18.6056 14.3477 17.7969 14.25 17 14.25C16.1825 14.25 15.36 14.5181 14.6944 14.8151C14.3161 14.9839 14.1463 15.4274 14.3151 15.8056C14.4839 16.1839 14.9274 16.3537 15.3057 16.1849Z" }),
    React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 5.85855C10.8901 5.28809 8.91267 4.5 7 4.5C4.82602 4.5 2.52707 5.21214 1.62861 5.57152C1.24895 5.72339 1 6.0911 1 6.5V19.5C1 19.7996 1.13432 20.0834 1.36601 20.2733C1.5977 20.4633 1.90234 20.5393 2.19612 20.4806C2.98922 20.322 5.08674 20 7 20C8.73758 20 10.7177 20.8973 11.4837 21.3564C11.4915 21.3611 11.4993 21.3657 11.5073 21.3702C11.8124 21.543 12.1865 21.5436 12.4927 21.3702C12.5007 21.3657 12.5085 21.3611 12.5163 21.3564C13.2823 20.8973 15.2624 20 17 20C18.9133 20 21.0108 20.322 21.8039 20.4806C22.0977 20.5393 22.4023 20.4633 22.634 20.2733C22.8657 20.0834 23 19.7996 23 19.5V6.5C23 6.0911 22.751 5.72339 22.3714 5.57152C21.4729 5.21214 19.174 4.5 17 4.5C15.0873 4.5 13.1099 5.28809 12 5.85855ZM7 18C8.42616 18 9.88831 18.4382 11 18.8976V7.59336C10.0573 7.12035 8.4448 6.5 7 6.5C5.55289 6.5 3.97492 6.89014 3 7.20499V18.318C4.08257 18.1605 5.576 18 7 18ZM13 7.59336V18.8976C14.1117 18.4382 15.5738 18 17 18C18.424 18 19.9174 18.1605 21 18.318V7.20499C20.0251 6.89014 18.4471 6.5 17 6.5C15.5552 6.5 13.9427 7.12035 13 7.59336Z" }))); };

var Icon$P = function (props) { return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
    React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M17 20C15.2624 20 13.2823 20.8973 12.5163 21.3564C12.512 21.359 12.5076 21.3616 12.5031 21.3642C12.4997 21.3662 12.4962 21.3682 12.4927 21.3702C12.1865 21.5436 11.8124 21.543 11.5073 21.3702C11.4993 21.3657 11.4915 21.3611 11.4837 21.3564C10.7177 20.8973 8.73758 20 7 20C5.08674 20 2.98922 20.322 2.19612 20.4806C1.90234 20.5393 1.5977 20.4633 1.36601 20.2733C1.13432 20.0834 1 19.7996 1 19.5V6.5C1 6.0911 1.24895 5.72339 1.62861 5.57152C2.52707 5.21214 4.82602 4.5 7 4.5C8.91267 4.5 10.8901 5.28809 12 5.85855C13.1099 5.28809 15.0873 4.5 17 4.5C19.174 4.5 21.4729 5.21214 22.3714 5.57152C22.751 5.72339 23 6.0911 23 6.5V19.5C23 19.7996 22.8657 20.0834 22.634 20.2733C22.4023 20.4633 22.0977 20.5393 21.8039 20.4806C21.0108 20.322 18.9133 20 17 20ZM9.76044 10.2492C8.91215 9.96324 7.98498 9.75 7.1484 9.75C6.13948 9.75 5.09021 9.84399 4.10409 9.98219C3.69389 10.0397 3.31475 9.75375 3.25726 9.34354C3.19977 8.93334 3.4857 8.5542 3.89591 8.49671C4.92996 8.35179 6.05141 8.25 7.1484 8.25C8.21288 8.25 9.31368 8.51566 10.2396 8.82775C10.6321 8.96006 10.843 9.38551 10.7107 9.77802C10.5784 10.1705 10.153 10.3815 9.76044 10.2492ZM9.76044 13.4799C8.91215 13.194 7.98498 12.9808 7.1484 12.9808C6.13948 12.9808 5.09021 13.0748 4.10409 13.213C3.69389 13.2705 3.31475 12.9845 3.25726 12.5743C3.19977 12.1641 3.4857 11.785 3.89591 11.7275C4.92996 11.5826 6.05141 11.4808 7.1484 11.4808C8.21288 11.4808 9.31368 11.7464 10.2396 12.0585C10.6321 12.1908 10.843 12.6163 10.7107 13.0088C10.5784 13.4013 10.153 13.6123 9.76044 13.4799ZM7.1484 16.2115C7.98498 16.2115 8.91215 16.4248 9.76044 16.7107C10.153 16.843 10.5784 16.6321 10.7107 16.2396C10.843 15.8471 10.6321 15.4216 10.2396 15.2893C9.31368 14.9772 8.21288 14.7115 7.1484 14.7115C6.05141 14.7115 4.92996 14.8133 3.89591 14.9583C3.4857 15.0157 3.19977 15.3949 3.25726 15.8051C3.31475 16.2153 3.69389 16.5012 4.10409 16.4437C5.09021 16.3055 6.13948 16.2115 7.1484 16.2115ZM15.4837 8.4949C14.8158 8.4949 14.312 9.10151 14.4346 9.75811L14.7247 11.3118C13.7418 11.7454 13 12.4942 13 13.4337V14.0051C13 14.7818 13.5138 15.4321 14.2322 15.8711C14.9562 16.3135 15.9355 16.5765 17 16.5765C18.0645 16.5765 19.0438 16.3135 19.7678 15.8711C20.4862 15.4321 21 14.7818 21 14.0051V13.4337C21 12.4892 20.2505 11.7375 19.2592 11.3048L19.548 9.75812C19.6707 9.10151 19.1668 8.4949 18.4989 8.4949C17.9094 8.4949 17.4316 8.97274 17.4316 9.56219V10.8768C17.2898 10.8672 17.1458 10.8623 17 10.8623C16.8483 10.8623 16.6985 10.8676 16.551 10.878V9.56219C16.551 8.97274 16.0732 8.4949 15.4837 8.4949Z" }))); };

var Icon$O = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 40 40" }, props),
        React__default['default'].createElement("path", { d: "M0 10C0 4.47715 4.47715 0 10 0L30 0C35.5228 0 40 4.47715 40 10V30C40 35.5228 35.5228 40 30 40H10C4.47715 40 0 35.5228 0 30L0 10Z", fill: "white" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M30 0.416667L10 0.416667C4.70727 0.416667 0.416667 4.70727 0.416667 10L0.416667 30C0.416667 35.2927 4.70727 39.5833 10 39.5833H30C35.2927 39.5833 39.5833 35.2927 39.5833 30V10C39.5833 4.70727 35.2927 0.416667 30 0.416667ZM10 0C4.47715 0 0 4.47715 0 10L0 30C0 35.5228 4.47715 40 10 40H30C35.5228 40 40 35.5228 40 30V10C40 4.47715 35.5228 0 30 0L10 0Z", fill: "#E7E3EB" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M20.011 17.9331H23.3104V21.0158H20.011V33.6838L19.1439 33.3587C18.7466 33.2142 18.0963 32.9613 17.3015 32.6L16.9283 32.4314V8.09489L20.2157 7.08337L23.3225 8.03468V11.3703L20.2157 10.4069L20.011 10.4671V17.9331ZM12.8823 21.016H8.67969V10.6601L15.965 8.40824V11.7197L11.7624 13.0203V17.9333H15.953V32.1788L15.0257 31.6972C12.1357 30.204 8.67969 27.6872 8.67969 24.1831V22.5333H11.7624V24.1831C11.7624 24.9056 12.1357 25.6762 12.8823 26.459V21.016ZM24.2498 8.33581V27.8677C26.3451 26.796 27.3325 25.5075 27.3325 25.5075V21.0159H31.7157V10.6358L24.2498 8.33581ZM28.633 17.9332H27.3325V12.5986L28.633 12.996V17.9332ZM21.3597 30.3243C24.9843 28.9636 28.633 26.6034 28.633 24.3997V22.5212H31.7157V24.3997C31.7157 29.6379 24.1173 32.6484 21.7932 33.4432L20.9503 33.7322V30.4809L21.3597 30.3243Z", fill: "black" })));
};

var Icon$N = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M15.5 13.9996H14.71L14.43 13.7296C15.63 12.3296 16.25 10.4196 15.91 8.38965C15.44 5.60965 13.12 3.38965 10.32 3.04965C6.09001 2.52965 2.53002 6.08965 3.05002 10.3196C3.39002 13.1196 5.61002 15.4396 8.39002 15.9096C10.42 16.2496 12.33 15.6296 13.73 14.4296L14 14.7096V15.4996L18.25 19.7496C18.66 20.1596 19.33 20.1596 19.74 19.7496C20.15 19.3396 20.15 18.6696 19.74 18.2596L15.5 13.9996ZM9.50002 13.9996C7.01002 13.9996 5.00002 11.9896 5.00002 9.49965C5.00002 7.00965 7.01002 4.99965 9.50002 4.99965C11.99 4.99965 14 7.00965 14 9.49965C14 11.9896 11.99 13.9996 9.50002 13.9996Z" })));
};

var Icon$M = function (props) { return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
    React__default['default'].createElement("path", { d: "M21.9 9.78661L20.85 5.41661C20.63 4.51661 19.85 3.89661 18.94 3.89661H16.73H14.72H13H11H9.27999H7.25999H5.04999C4.14999 3.89661 3.35999 4.52661 3.14999 5.41661L2.09999 9.78661C1.85999 10.8066 2.07999 11.8466 2.71999 12.6666C2.79999 12.7766 2.90999 12.8566 2.99999 12.9566V19.8966C2.99999 20.9966 3.89999 21.8966 4.99999 21.8966H19C20.1 21.8966 21 20.9966 21 19.8966V12.9566C21.09 12.8666 21.2 12.7766 21.28 12.6766C21.92 11.8566 22.15 10.8066 21.9 9.78661ZM7.01999 5.89661L6.43999 10.7566C6.35999 11.4066 5.83999 11.8966 5.22999 11.8966C4.73999 11.8966 4.42999 11.6066 4.29999 11.4266C4.03999 11.0966 3.94999 10.6666 4.04999 10.2566L5.04999 5.89661H7.01999ZM18.91 5.88661L19.96 10.2566C20.06 10.6766 19.97 11.0966 19.71 11.4266C19.57 11.6066 19.27 11.8966 18.77 11.8966C18.16 11.8966 17.63 11.4066 17.56 10.7566L16.98 5.89661L18.91 5.88661ZM15.51 10.4166C15.56 10.8066 15.44 11.1966 15.18 11.4866C14.95 11.7466 14.63 11.8966 14.22 11.8966C13.55 11.8966 13 11.3066 13 10.5866V5.89661H14.96L15.51 10.4166ZM11 10.5866C11 11.3066 10.45 11.8966 9.70999 11.8966C9.36999 11.8966 9.05999 11.7466 8.81999 11.4866C8.56999 11.1966 8.44999 10.8066 8.48999 10.4166L9.03999 5.89661H11V10.5866ZM18 19.8966H5.99999C5.44999 19.8966 4.99999 19.4466 4.99999 18.8966V13.8666C5.07999 13.8766 5.14999 13.8966 5.22999 13.8966C6.09999 13.8966 6.88999 13.5366 7.46999 12.9466C8.06999 13.5466 8.86999 13.8966 9.77999 13.8966C10.65 13.8966 11.43 13.5366 12.01 12.9666C12.6 13.5366 13.4 13.8966 14.3 13.8966C15.14 13.8966 15.94 13.5466 16.54 12.9466C17.12 13.5366 17.91 13.8966 18.78 13.8966C18.86 13.8966 18.93 13.8766 19.01 13.8666V18.8966C19 19.4466 18.55 19.8966 18 19.8966Z" }))); };

var Icon$L = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M18 16.1162C17.24 16.1162 16.56 16.4162 16.04 16.8862L8.91 12.7362C8.96 12.5062 9 12.2762 9 12.0362C9 11.7962 8.96 11.5662 8.91 11.3362L15.96 7.22619C16.5 7.72619 17.21 8.03619 18 8.03619C19.66 8.03619 21 6.69619 21 5.03619C21 3.37619 19.66 2.03619 18 2.03619C16.34 2.03619 15 3.37619 15 5.03619C15 5.27619 15.04 5.50619 15.09 5.73619L8.04 9.84619C7.5 9.34619 6.79 9.03619 6 9.03619C4.34 9.03619 3 10.3762 3 12.0362C3 13.6962 4.34 15.0362 6 15.0362C6.79 15.0362 7.5 14.7262 8.04 14.2262L15.16 18.3862C15.11 18.5962 15.08 18.8162 15.08 19.0362C15.08 20.6462 16.39 21.9562 18 21.9562C19.61 21.9562 20.92 20.6462 20.92 19.0362C20.92 17.4262 19.61 16.1162 18 16.1162Z" })));
};

var Icon$K = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z", fill: "black" })));
};

var Icon$J = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M13.8382 2.20573L16.12 6.82916L21.2222 7.57057C22.9037 7.81489 23.5751 9.88123 22.3584 11.0672L18.6663 14.6661L19.5379 19.7477C19.8251 21.4224 18.0674 22.6995 16.5635 21.9088L11.9998 19.5096L7.43624 21.9088C5.93232 22.6995 4.17457 21.4224 4.4618 19.7477L5.33337 14.6661L1.64134 11.0672C0.424631 9.88125 1.09601 7.8149 2.77747 7.57057L7.87974 6.82916L10.1615 2.20573C10.9135 0.682081 13.0862 0.682068 13.8382 2.20573Z" })));
};

var Icon$I = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.17726 8.2193C9.10443 8.36687 8.96365 8.46916 8.80079 8.49282L3.49187 9.26425C3.08176 9.32385 2.918 9.82783 3.21476 10.1171L7.05633 13.8617C7.17418 13.9766 7.22795 14.1421 7.20013 14.3043L6.29326 19.5917C6.22321 20.0002 6.65192 20.3117 7.01873 20.1188L11.7672 17.6224C11.9128 17.5458 12.0869 17.5458 12.2325 17.6224L16.981 20.1188C17.3478 20.3117 17.7765 20.0002 17.7064 19.5917L16.7996 14.3043C16.7718 14.1421 16.8255 13.9766 16.9434 13.8617L20.7849 10.1171C21.0817 9.82783 20.9179 9.32385 20.5078 9.26425L15.1989 8.49282C15.0361 8.46916 14.8953 8.36687 14.8224 8.2193L12.4482 3.4086C12.2648 3.03698 11.7349 3.03698 11.5515 3.4086L9.17726 8.2193ZM16.2669 6.62701L14.2417 2.52347C13.3247 0.665354 10.675 0.665354 9.75801 2.52347L7.73279 6.62701L3.20427 7.28504C1.15372 7.583 0.334945 10.1029 1.81874 11.5493L5.09561 14.7434L4.32204 19.2537C3.97177 21.2959 6.11535 22.8533 7.94942 21.8891L11.9999 19.7597L16.0503 21.8891C17.8844 22.8533 20.0279 21.2959 19.6777 19.2537L18.9041 14.7434L22.181 11.5493C23.6648 10.1029 22.846 7.583 20.7954 7.28504L16.2669 6.62701Z" })));
};

var Icon$H = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M21.2628 15.8306C21.5556 16.1235 21.5556 16.5983 21.2628 16.8912L18.654 19.5H20.3789C20.7931 19.5 21.1289 19.8358 21.1289 20.25C21.1289 20.6642 20.7931 21 20.3789 21L16.8433 21C16.4291 21 16.0933 20.6642 16.0933 20.25V16.7145C16.0933 16.3002 16.4291 15.9645 16.8433 15.9645C17.2575 15.9645 17.5933 16.3002 17.5933 16.7145V18.4393L20.2021 15.8306C20.495 15.5377 20.9699 15.5377 21.2628 15.8306Z" }),
        React__default['default'].createElement("path", { d: "M2.81293 7.78034C3.10583 8.07323 3.5807 8.07323 3.87359 7.78034L6.48235 5.17158L6.48235 6.89645C6.48235 7.31067 6.81814 7.64645 7.23235 7.64645C7.64656 7.64645 7.98235 7.31067 7.98235 6.89645L7.98235 3.36092C7.98235 3.16201 7.90333 2.97124 7.76268 2.83059C7.62203 2.68994 7.43126 2.61092 7.23235 2.61092L3.69682 2.61092C3.2826 2.61092 2.94682 2.9467 2.94682 3.36092C2.94682 3.77513 3.2826 4.11092 3.69682 4.11092H5.42169L2.81293 6.71968C2.52004 7.01257 2.52004 7.48744 2.81293 7.78034Z" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M8.46203 20.5622C8.66377 20.5827 8.86846 20.5932 9.07561 20.5932C12.3893 20.5932 15.0756 17.9069 15.0756 14.5932C18.3893 14.5932 21.0756 11.9069 21.0756 8.59315C21.0756 5.69362 19.0189 3.27448 16.2847 2.71504C15.9185 2.64011 15.5402 2.59853 15.153 2.59363C15.1272 2.5933 15.1014 2.59314 15.0755 2.59314C11.7618 2.59314 9.07549 5.27943 9.07549 8.59314C5.76179 8.59314 3.07549 11.2794 3.07549 14.5931C3.07549 17.5962 5.28172 20.0839 8.16175 20.524C8.26107 20.5392 8.36118 20.5519 8.46203 20.5622ZM5.07549 14.5931C5.07549 12.384 6.86636 10.5931 9.07549 10.5931C9.19246 10.5931 9.30806 10.5981 9.42214 10.6079C10.0255 12.3008 11.3678 13.6431 13.0607 14.2465C13.0705 14.3606 13.0755 14.4762 13.0755 14.5931C13.0755 16.8023 11.2846 18.5931 9.07549 18.5931C6.86636 18.5931 5.07549 16.8023 5.07549 14.5931ZM11.0755 8.59314C11.0755 6.384 12.8664 4.59314 15.0755 4.59314C17.2846 4.59314 19.0755 6.384 19.0755 8.59314C19.0755 10.8023 17.2846 12.5931 15.0755 12.5931C12.8664 12.5931 11.0755 10.8023 11.0755 8.59314Z" })));
};

var Icon$G = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 25" }, props),
        React__default['default'].createElement("path", { d: "M16 17.01V11C16 10.45 15.55 10 15 10C14.45 10 14 10.45 14 11V17.01H12.21C11.76 17.01 11.54 17.55 11.86 17.86L14.65 20.64C14.85 20.83 15.16 20.83 15.36 20.64L18.15 17.86C18.47 17.55 18.24 17.01 17.8 17.01H16ZM8.65003 3.35002L5.86003 6.14002C5.54003 6.45002 5.76003 6.99002 6.21003 6.99002H8.00003V13C8.00003 13.55 8.45003 14 9.00003 14C9.55003 14 10 13.55 10 13V6.99002H11.79C12.24 6.99002 12.46 6.45002 12.14 6.14002L9.35003 3.35002C9.16003 3.16002 8.84003 3.16002 8.65003 3.35002Z" })));
};

var Icon$F = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 25" }, props),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.86 4.86003L21.65 7.65003C21.84 7.84003 21.84 8.16003 21.64 8.35003L18.85 11.14C18.54 11.46 18 11.24 18 10.79V9.00003H4C3.45 9.00003 3 8.55003 3 8.00003C3 7.45003 3.45 7.00003 4 7.00003H18V5.21003C18 4.76003 18.54 4.54003 18.86 4.86003ZM5.14001 19.14L2.35001 16.35C2.16001 16.16 2.16001 15.84 2.36001 15.65L5.15001 12.86C5.46001 12.54 6.00001 12.76 6.00001 13.21V15H20C20.55 15 21 15.45 21 16C21 16.55 20.55 17 20 17H6.00001V18.79C6.00001 19.24 5.46001 19.46 5.14001 19.14Z" })));
};

var Icon$E = function (props) {
    var id = uniqueId__default['default']("svg");
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 25 25" }, props),
        React__default['default'].createElement("g", { clipPath: "url(#" + id + ")" },
            React__default['default'].createElement("path", { d: "M15.9617 4.03476C16.5597 2.82143 15.6818 1.40061 14.2254 1.22477C13.0389 1.08149 11.9708 1.84428 11.8399 2.9285L11.3896 6.65764C11.2976 7.41951 11.899 8.11875 12.7328 8.21943C13.3889 8.29864 14.0166 7.98162 14.286 7.435L15.9617 4.03476Z", fill: "#1FC7D4" }),
            React__default['default'].createElement("path", { d: "M6.27612 5.16903C5.36287 4.17118 5.80868 2.56162 7.15782 1.98574C8.25706 1.51653 9.49573 1.95041 9.92446 2.95482L11.3991 6.40949C11.7004 7.11529 11.3184 7.95473 10.546 8.28444C9.93817 8.54388 9.24684 8.41494 8.83541 7.9654L6.27612 5.16903Z", fill: "#1FC7D4" }),
            React__default['default'].createElement("path", { d: "M17.0349 9.11691C17.3916 11.6186 15.2219 13.6784 12.2437 14.1031C9.26546 14.5278 6.60649 13.1564 6.24978 10.6548C5.89307 8.15311 8.06278 6.09324 11.041 5.66857C14.0192 5.24391 16.6782 6.61525 17.0349 9.11691Z", fill: "#1FC7D4" }),
            React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M7.53552 12.9725C8.66378 13.937 10.392 14.3672 12.2437 14.1032C14.913 13.7225 16.9328 12.0284 17.0663 9.87986C16.4991 11.4567 14.8084 12.7917 12.6007 13.3832C10.6865 13.8961 8.82955 13.7307 7.53552 12.9725Z", fill: "#0098A1" }),
            React__default['default'].createElement("path", { d: "M11.1696 9.94964C11.3325 10.6295 11.0911 10.9601 10.717 11.0497C10.343 11.1393 9.97795 10.9541 9.81504 10.2742C9.65212 9.5943 9.89356 9.26377 10.2676 9.17414C10.6417 9.08451 11.0067 9.26973 11.1696 9.94964Z", fill: "#017178" }),
            React__default['default'].createElement("path", { d: "M14.4407 9.58045C14.4649 10.2792 14.1625 10.555 13.7781 10.5684C13.3937 10.5817 13.0729 10.3275 13.0486 9.62879C13.0243 8.93005 13.3268 8.65422 13.7112 8.64087C14.0956 8.62753 14.4164 8.88172 14.4407 9.58045Z", fill: "#017178" }),
            React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.3337 10.8946C12.1996 10.9121 12.1051 11.0349 12.1226 11.169C12.1855 11.6513 12.654 11.9486 13.1254 11.8872C13.3584 11.8568 13.563 11.7451 13.7062 11.5832C13.7958 11.4819 13.7863 11.3272 13.685 11.2376C13.5838 11.148 13.429 11.1575 13.3395 11.2588C13.2753 11.3313 13.1788 11.3864 13.0621 11.4016C12.8142 11.4339 12.6305 11.2773 12.6082 11.1057C12.5907 10.9716 12.4678 10.8771 12.3337 10.8946Z", fill: "#017178" }),
            React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.3339 10.8945C12.1998 10.9119 12.1053 11.0348 12.1228 11.1689C12.1452 11.3405 12.0078 11.539 11.76 11.5713C11.6411 11.5868 11.5319 11.557 11.4508 11.5014C11.3393 11.425 11.1869 11.4535 11.1104 11.565C11.034 11.6765 11.0625 11.8289 11.174 11.9054C11.3555 12.0297 11.586 12.0878 11.8233 12.0569C12.2947 11.9954 12.6712 11.5878 12.6083 11.1056C12.5908 10.9715 12.468 10.877 12.3339 10.8945Z", fill: "#017178" }),
            React__default['default'].createElement("path", { d: "M9.50991 12.781C9.67816 11.447 8.51926 10.3246 7.21792 10.5612C6.15761 10.7539 5.45717 11.7854 5.65344 12.8651L6.32848 16.5785C6.4664 17.3372 7.1822 17.8424 7.92727 17.7069C8.51353 17.6004 8.9626 17.1204 9.0384 16.5195L9.50991 12.781Z", fill: "#9A6AFF" }),
            React__default['default'].createElement("path", { d: "M4.93123 13.9946C4.62613 12.6768 3.04713 12.1326 1.80838 12.9183C0.799086 13.5584 0.455077 14.825 1.04002 15.7472L3.05191 18.9192C3.46294 19.5673 4.37109 19.7279 5.08032 19.2781C5.63839 18.9241 5.92368 18.2814 5.78623 17.6877L4.93123 13.9946Z", fill: "#9A6AFF" }),
            React__default['default'].createElement("path", { d: "M12.3621 17.3922C13.4422 19.6768 11.9781 22.2858 9.25833 23.5716C6.53859 24.8574 3.59314 24.333 2.5131 22.0485C1.43306 19.764 2.89716 17.1549 5.6169 15.8691C8.33664 14.5833 11.2821 15.1077 12.3621 17.3922Z", fill: "#9A6AFF" }),
            React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.5245 20.1686C11.9455 21.2367 10.9163 22.1811 9.58715 22.8094C6.86742 24.0952 3.92196 23.5709 2.84192 21.2863C2.41234 20.3777 2.38525 19.4177 2.67957 18.51C2.0738 19.6275 1.96092 20.8804 2.51314 22.0485C3.59318 24.333 6.53864 24.8574 9.25837 23.5716C10.8963 22.7972 12.0789 21.5429 12.5245 20.1686Z", fill: "#7645D9" }),
            React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M8.75939 18.7345C8.86973 18.6564 9.02253 18.6825 9.10068 18.7928C9.45793 19.2972 9.2815 19.9886 8.77528 20.3471C8.66494 20.4253 8.51213 20.3992 8.43398 20.2889C8.35583 20.1785 8.38193 20.0257 8.49227 19.9476C8.8145 19.7193 8.87726 19.3246 8.7011 19.0758C8.62294 18.9655 8.64904 18.8127 8.75939 18.7345Z", fill: "#452A7A" }),
            React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M8.75936 18.7345C8.86971 18.6563 9.02251 18.6824 9.10066 18.7928C9.27683 19.0415 9.67007 19.1133 9.9923 18.8851C10.1026 18.807 10.2554 18.8331 10.3336 18.9434C10.4117 19.0537 10.3856 19.2065 10.2753 19.2847C9.76908 19.6432 9.05832 19.5802 8.70107 19.0758C8.62292 18.9654 8.64902 18.8126 8.75936 18.7345Z", fill: "#452A7A" }),
            React__default['default'].createElement("path", { d: "M7.26609 18.6401C7.75355 19.1413 7.7149 19.5488 7.43915 19.8169C7.16341 20.0851 6.755 20.1124 6.26755 19.6112C5.7801 19.11 5.81875 18.7025 6.09449 18.4343C6.37023 18.1662 6.77864 18.1389 7.26609 18.6401Z", fill: "#452A7A" }),
            React__default['default'].createElement("path", { d: "M10.0286 16.8059C10.429 17.3791 10.3252 17.775 10.0099 17.9953C9.69452 18.2156 9.28705 18.1767 8.88668 17.6036C8.48632 17.0304 8.5901 16.6344 8.90543 16.4142C9.22077 16.1939 9.62825 16.2327 10.0286 16.8059Z", fill: "#452A7A" }),
            React__default['default'].createElement("path", { d: "M15.821 11.1076C15.5183 9.7976 16.5573 8.56337 17.876 8.66668C18.9503 8.75086 19.7518 9.70595 19.6661 10.7999L19.3713 14.5627C19.3111 15.3315 18.6502 15.9067 17.8953 15.8475C17.3012 15.801 16.8058 15.3691 16.6694 14.7789L15.821 11.1076Z", fill: "#FFC700" }),
            React__default['default'].createElement("path", { d: "M20.4641 11.4595C20.469 10.121 21.7611 9.16422 23.0195 9.56738C24.0448 9.89586 24.6059 11.0053 24.2727 12.0453L23.1267 15.6224C22.8925 16.3532 22.1187 16.7586 21.3982 16.5277C20.8313 16.3461 20.4482 15.8139 20.4504 15.2108L20.4641 11.4595Z", fill: "#FFC700" }),
            React__default['default'].createElement("path", { d: "M13.6364 16.264C13.1079 18.7351 15.1302 20.9398 18.072 21.569C21.0138 22.1983 23.7611 21.0137 24.2897 18.5427C24.8182 16.0716 22.7959 13.8669 19.854 13.2376C16.9122 12.6084 14.1649 13.793 13.6364 16.264Z", fill: "#FFC700" }),
            React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.7678 17.3277C18.638 17.2898 18.5021 17.3644 18.4643 17.4942C18.2913 18.0876 18.6839 18.6835 19.2794 18.8571C19.4092 18.8949 19.5451 18.8203 19.583 18.6905C19.6208 18.5607 19.5462 18.4248 19.4164 18.387C19.0373 18.2765 18.8491 17.9238 18.9344 17.6312C18.9722 17.5014 18.8976 17.3655 18.7678 17.3277Z", fill: "#AE5714" }),
            React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.7679 17.3275C18.6381 17.2897 18.5022 17.3642 18.4643 17.494C18.379 17.7867 18.0308 17.983 17.6517 17.8725C17.5219 17.8347 17.386 17.9092 17.3482 18.039C17.3103 18.1689 17.3849 18.3048 17.5147 18.3426C18.1103 18.5162 18.7615 18.2245 18.9344 17.631C18.9723 17.5012 18.8977 17.3653 18.7679 17.3275Z", fill: "#AE5714" }),
            React__default['default'].createElement("path", { d: "M17.78 16.2187C17.6338 16.9024 17.2734 17.0965 16.8973 17.016C16.5212 16.9356 16.2717 16.6111 16.4179 15.9274C16.5642 15.2437 16.9245 15.0496 17.3007 15.13C17.6768 15.2105 17.9263 15.535 17.78 16.2187Z", fill: "#AE5714" }),
            React__default['default'].createElement("path", { d: "M21.344 17.3356C21.0937 17.9884 20.7077 18.1244 20.3485 17.9867C19.9894 17.849 19.7931 17.4897 20.0434 16.8369C20.2937 16.1841 20.6798 16.0482 21.039 16.1859C21.3981 16.3236 21.5943 16.6828 21.344 17.3356Z", fill: "#AE5714" }),
            React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M13.9627 18.7486C14.73 19.7089 15.9227 20.4634 17.3569 20.8477C20.2916 21.6341 23.1259 20.5724 23.7898 18.0947C24.0539 17.1092 23.9086 16.1461 23.4531 15.2939C24.2558 16.2986 24.5929 17.5285 24.2534 18.7954C23.5895 21.2731 20.7552 22.3347 17.8205 21.5484C16.0531 21.0748 14.6523 20.0389 13.9627 18.7486Z", fill: "#EB8C00" })),
        React__default['default'].createElement("defs", null,
            React__default['default'].createElement("clipPath", { id: id },
                React__default['default'].createElement("rect", { width: "24", height: "24", fill: "white", transform: "translate(0.5 0.5)" })))));
};

var Icon$D = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 18 16" }, props),
        React__default['default'].createElement("path", { d: "M10.0002 7.33L15.0002 14H3.00018L8.00018 7.33V2H10.0002V7.33ZM12.9602 0H5.04018C4.62018 0 4.39018 0.48 4.65018 0.81L6.00018 2.5V6.67L0.200175 14.4C-0.289825 15.06 0.180175 16 1.00018 16H17.0002C17.8202 16 18.2902 15.06 17.8002 14.4L12.0002 6.67V2.5L13.3502 0.81C13.6102 0.48 13.3802 0 12.9602 0Z" })));
};

var Icon$C = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 80 80" }, props),
        React__default['default'].createElement("path", { d: "M76.2856 28.6526C77.0883 29.4553 77.1989 30.7184 76.548 31.6485C64.6385 48.6643 49.9116 63.5221 33.0019 75.5817L31.6665 76.5341C30.6872 77.2325 29.3467 77.121 28.4962 76.2705L22.4847 70.259C26.0334 66.5844 25.9945 60.7286 22.3678 57.1019C18.7411 53.4752 12.8853 53.4362 9.21067 56.985L3.68116 51.4555C2.62962 50.4039 2.77462 48.6597 3.98536 47.7962L5.32156 46.8433C21.8225 35.0751 36.1934 20.5765 47.815 3.97204C48.6291 2.80897 50.296 2.66297 51.2998 3.66682L56.9276 9.29459C53.3922 12.97 53.4356 18.8158 57.0578 22.438C60.6799 26.0601 66.5257 26.1035 70.2011 22.5681L76.2856 28.6526Z", fill: "#DBCDF9" }),
        React__default['default'].createElement("path", { d: "M78.9507 30.3151L57.459 57.5291L29.6615 78.5708L24.3156 73.1863L22.3868 70.8482L24.3156 68.0575L24.9915 65.2668L24.6194 62.29L23.5031 59.4993L21.6426 57.2668L19.4101 55.7784L16.9915 55.0342H14.0147L10.8519 56.1505L8.99148 57.8249L4.52637 52.4296L11.7898 51.3463C34.3187 47.9863 55.6053 38.8899 73.6048 24.9307L78.9507 30.3151Z", fill: "#A28BD4" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M19.7724 70.5193C19.7732 69.7287 20.0885 68.971 20.6487 68.4131L20.6586 68.4032C23.1622 65.8996 23.1622 61.8405 20.6586 59.3369C18.155 56.8333 14.0958 56.8333 11.5922 59.3369L11.5823 59.3468C11.0245 59.907 10.2667 60.2223 9.47617 60.2231C8.68561 60.2239 7.92718 59.9103 7.36817 59.3512L1.57656 53.5596C-0.776282 51.2068 -0.451848 47.304 2.25722 45.372L3.59342 44.419L5.32184 46.8426L3.98564 47.7955C2.7749 48.659 2.6299 50.4032 3.68144 51.4548L9.47304 57.2464L9.48735 57.232C9.49192 57.2275 9.49649 57.2229 9.50106 57.2183C13.1682 53.5659 19.1019 53.5705 22.7635 57.232C26.4247 60.8933 26.4295 66.8263 22.778 70.4936C22.7731 70.4984 22.7683 70.5033 22.7635 70.5081L22.7491 70.5224L28.4965 76.2698C29.347 77.1203 30.6875 77.2318 31.6668 76.5334L33.0022 75.581C49.9119 63.5214 64.6388 48.6636 76.5483 31.6478C77.1992 30.7178 77.0886 29.4546 76.2859 28.6519L70.2487 22.6148C70.2268 22.6371 70.2047 22.6594 70.1825 22.6816C70.1603 22.7038 70.138 22.7259 70.1156 22.7479C66.4445 26.3475 60.5503 26.3254 56.9064 22.6816C53.2625 19.0376 53.2405 13.1434 56.8404 9.47221C56.8623 9.44989 56.8843 9.42764 56.9064 9.40548C56.9286 9.38329 56.9509 9.36124 56.9733 9.33932L51.3001 3.66613C50.2962 2.66229 48.6293 2.80829 47.8153 3.97136C36.1937 20.5758 21.8228 35.0744 5.32184 46.8426L3.59342 44.419C19.8185 32.8476 33.9492 18.5913 45.3766 2.26445C47.252 -0.415092 51.0922 -0.751452 53.4049 1.56125L59.0781 7.23444C59.64 7.79626 59.9539 8.55937 59.95 9.35389C59.9461 10.1484 59.6247 10.9084 59.0574 11.4647C59.042 11.4798 59.0267 11.495 59.0113 11.5104C56.5077 14.014 56.5077 18.0731 59.0113 20.5767C61.5149 23.0803 65.5741 23.0803 68.0777 20.5767C68.0929 20.5615 68.1081 20.5461 68.1233 20.5306C68.6796 19.9633 69.4396 19.6419 70.2341 19.6381C71.0287 19.6342 71.7918 19.9481 72.3536 20.5099L78.3907 26.547C80.2148 28.3711 80.4662 31.2413 78.987 33.3547C66.8832 50.648 51.9161 65.7482 34.7306 78.0046L33.3952 78.9569C31.2319 80.4997 28.2705 80.2536 26.3916 78.3747L20.6442 72.6273C20.0852 72.0683 19.7715 71.3099 19.7724 70.5193Z", fill: "#633001" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M39.9888 14.0672L41.3044 15.3827C41.8856 15.964 41.8856 16.9064 41.3044 17.4876C40.7231 18.0688 39.7808 18.0688 39.1995 17.4876L37.884 16.1721C37.3027 15.5908 37.3027 14.6484 37.884 14.0672C38.4652 13.4859 39.4076 13.4859 39.9888 14.0672Z", fill: "#633001" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M45.5142 19.5926L46.8298 20.9081C47.411 21.4894 47.411 22.4317 46.8298 23.013C46.2485 23.5942 45.3062 23.5942 44.7249 23.013L43.4094 21.6974C42.8281 21.1162 42.8281 20.1738 43.4094 19.5926C43.9906 19.0113 44.933 19.0113 45.5142 19.5926Z", fill: "#633001" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M52.3542 28.5384C51.773 29.1196 50.8306 29.1196 50.2493 28.5384L48.6707 26.9597C48.0894 26.3785 48.0894 25.4361 48.6707 24.8549C49.2519 24.2736 50.1943 24.2736 50.7755 24.8549L52.3542 26.4335C52.9354 27.0148 52.9354 27.9571 52.3542 28.5384Z", fill: "#633001" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M57.8796 34.0638C57.2983 34.645 56.356 34.645 55.7747 34.0638L54.1961 32.4851C53.6148 31.9039 53.6148 30.9615 54.1961 30.3802C54.7773 29.799 55.7197 29.799 56.3009 30.3802L57.8796 31.9589C58.4608 32.5401 58.4608 33.4825 57.8796 34.0638Z", fill: "#633001" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M61.8267 35.9051L63.1423 37.2206C63.7235 37.8019 63.7235 38.7442 63.1423 39.3255C62.561 39.9067 61.6187 39.9067 61.0374 39.3255L59.7219 38.0099C59.1406 37.4287 59.1406 36.4863 59.7219 35.9051C60.3031 35.3238 61.2455 35.3238 61.8267 35.9051Z", fill: "#633001" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M67.3521 41.4305L68.6677 42.746C69.2489 43.3273 69.2489 44.2696 68.6677 44.8509C68.0864 45.4321 67.144 45.4321 66.5628 44.8509L65.2472 43.5353C64.666 42.9541 64.666 42.0117 65.2472 41.4305C65.8285 40.8492 66.7709 40.8492 67.3521 41.4305Z", fill: "#633001" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M32.2915 37.1288C30.6927 35.53 30.6927 32.9378 32.2915 31.3389C34.1033 29.5272 37.1152 29.806 38.5636 31.9196L42.2107 37.2416C45.3939 36.2204 48.7719 36.3559 51.0104 38.5945C53.0227 40.6067 53.3281 43.5721 52.6459 46.3981C51.9561 49.256 50.2117 52.2664 47.6467 54.8314C45.0817 57.3964 42.0713 59.1408 39.2134 59.8306C36.3874 60.5128 33.422 60.2073 31.4098 58.1951C29.1842 55.9696 29.0377 52.6168 30.0388 49.4519L24.694 45.7892C22.5804 44.3408 22.3016 41.3289 24.1134 39.5171C25.7122 37.9183 28.3044 37.9183 29.9032 39.5171L33.6067 43.2206C33.9734 42.7908 34.3625 42.3691 34.7735 41.9582C35.1704 41.5613 35.5772 41.1847 35.9918 40.8291L32.2915 37.1288Z", fill: "#633001" }),
        React__default['default'].createElement("ellipse", { cx: "36.9019", cy: "50.5685", rx: "1.79015", ry: "2.60385", transform: "rotate(-45 36.9019 50.5685)", fill: "#DBCDF9" }),
        React__default['default'].createElement("ellipse", { rx: "1.79015", ry: "2.60385", transform: "matrix(0.707107 -0.707106 0.707107 0.707106 43.5768 43.8947)", fill: "#DBCDF9" })));
};

var Icon$B = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M1.4144 13.4824L9.36944 5.52736L10.0765 6.23446C10.3694 6.52736 10.8443 6.52736 11.1372 6.23446C11.4301 5.94157 11.4301 5.4667 11.1372 5.1738L10.4301 4.4667L12.7281 2.16869C13.5092 1.38764 14.7755 1.38764 15.5565 2.16869L16.6173 3.22943C16.8125 3.42465 16.8125 3.74115 16.6173 3.93637C15.641 4.91268 15.641 6.49559 16.6173 7.4719C17.5936 8.44821 19.1765 8.44821 20.1528 7.4719C20.348 7.27669 20.6645 7.27669 20.8597 7.4719L21.9205 8.53265C22.7015 9.3137 22.7015 10.58 21.9205 11.3611L19.6224 13.6592L18.9153 12.9521C18.6224 12.6592 18.1475 12.6592 17.8546 12.9521C17.5617 13.245 17.5617 13.7198 17.8546 14.0127L18.5617 14.7198L10.6068 22.6748C9.82574 23.4558 8.55941 23.4558 7.77836 22.6748L6.7177 21.6141C6.52244 21.4189 6.52244 21.1023 6.7177 20.907C7.69401 19.9307 7.69401 18.3478 6.7177 17.3715C5.74139 16.3952 4.15848 16.3952 3.18217 17.3715C2.9869 17.5667 2.67032 17.5667 2.47506 17.3715L1.4144 16.3108C0.633351 15.5298 0.633351 14.2634 1.4144 13.4824ZM13.2584 7.29521C12.9655 7.00232 12.4907 7.00232 12.1978 7.29521C11.9049 7.5881 11.9049 8.06298 12.1978 8.35587L12.9049 9.06298C13.1978 9.35587 13.6727 9.35587 13.9655 9.06298C14.2584 8.77009 14.2584 8.29521 13.9655 8.00232L13.2584 7.29521ZM15.0262 10.1236C15.3191 9.83075 15.794 9.83074 16.0869 10.1236L16.794 10.8307C17.0869 11.1236 17.0869 11.5985 16.794 11.8914C16.5011 12.1843 16.0262 12.1843 15.7333 11.8914L15.0262 11.1843C14.7333 10.8914 14.7333 10.4165 15.0262 10.1236Z" })));
};

var Icon$A = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 48 48" }, props),
        React__default['default'].createElement("circle", { cx: "24", cy: "24", r: "24", fill: "url(#paint0_linear_ticketround)" }),
        React__default['default'].createElement("path", { d: "M39.0623 18.9777C39.3983 19.3138 39.4447 19.8426 39.1721 20.232C34.1862 27.3557 28.0207 33.576 20.9413 38.6248L20.3823 39.0235C19.9723 39.3159 19.4111 39.2692 19.055 38.9132L16.5383 36.3964C18.024 34.858 18.0077 32.4065 16.4893 30.8881C14.971 29.3698 12.5194 29.3535 10.981 30.8392L8.66608 28.5242C8.22585 28.084 8.28655 27.3538 8.79343 26.9923L9.35284 26.5933C16.261 21.6665 22.2775 15.5966 27.1429 8.64507C27.4837 8.15815 28.1816 8.09702 28.6019 8.51729L30.958 10.8734C29.4778 12.4121 29.496 14.8595 31.0125 16.3759C32.5289 17.8924 34.9762 17.9105 36.515 16.4304L39.0623 18.9777Z", fill: "#DBCDF9" }),
        React__default['default'].createElement("path", { d: "M40.1776 19.6742L31.18 31.0674L19.5425 39.8766L17.3044 37.6224L16.4969 36.6435L17.3044 35.4752L17.5873 34.3068L17.4316 33.0606L16.9642 31.8923L16.1853 30.9576L15.2507 30.3345L14.2381 30.0229H12.9919L11.6678 30.4903L10.8889 31.1913L9.01953 28.9325L12.0604 28.4789C21.4923 27.0723 30.404 23.264 37.9396 17.4199L40.1776 19.6742Z", fill: "#A28BD4" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M15.4028 36.5059C15.4031 36.1749 15.5351 35.8577 15.7697 35.6241L15.7738 35.62C16.822 34.5718 16.822 32.8725 15.7738 31.8243C14.7257 30.7762 13.0263 30.7762 11.9781 31.8243L11.974 31.8285C11.7405 32.063 11.4232 32.195 11.0922 32.1953C10.7613 32.1957 10.4438 32.0643 10.2097 31.8303L7.78504 29.4056C6.80001 28.4206 6.93583 26.7867 8.07 25.9778L8.6294 25.5789L9.35301 26.5935L8.79361 26.9925C8.28673 27.354 8.22602 28.0842 8.66625 28.5244L11.0909 30.9491L11.0969 30.9431C11.0988 30.9412 11.1008 30.9393 11.1027 30.9374C12.638 29.4083 15.1221 29.4102 16.655 30.9431C18.1878 32.4759 18.1899 34.9598 16.6611 36.4951C16.6591 36.4971 16.6571 36.4992 16.655 36.5012L16.649 36.5072L19.0552 38.9134C19.4113 39.2694 19.9725 39.3161 20.3824 39.0237L20.9415 38.625C28.0208 33.5762 34.1863 27.3559 39.1723 20.2321C39.4448 19.8428 39.3985 19.314 39.0625 18.9779L36.535 16.4504C36.5258 16.4598 36.5166 16.4691 36.5073 16.4784C36.498 16.4877 36.4886 16.4969 36.4792 16.5061C34.9423 18.0132 32.4747 18.0039 30.9492 16.4784C29.4236 14.9528 29.4144 12.4852 30.9215 10.9482C30.9307 10.9389 30.9399 10.9296 30.9492 10.9203C30.9585 10.911 30.9678 10.9018 30.9771 10.8926L28.602 8.51747C28.1818 8.0972 27.4839 8.15833 27.1431 8.64525C22.2777 15.5968 16.2612 21.6667 9.35301 26.5935L8.6294 25.5789C15.4221 20.7344 21.338 14.766 26.1221 7.93065C26.9073 6.80885 28.515 6.66803 29.4832 7.63625L31.8584 10.0114C32.0936 10.2466 32.225 10.566 32.2234 10.8987C32.2217 11.2313 32.0872 11.5495 31.8497 11.7824C31.8432 11.7887 31.8368 11.7951 31.8304 11.8015C30.7822 12.8496 30.7822 14.549 31.8304 15.5972C32.8785 16.6453 34.5779 16.6453 35.626 15.5972C35.6324 15.5908 35.6388 15.5844 35.6452 15.5779C35.8781 15.3404 36.1962 15.2058 36.5289 15.2042C36.8615 15.2026 37.181 15.334 37.4162 15.5692L39.9437 18.0967C40.7073 18.8603 40.8126 20.062 40.1933 20.9467C35.126 28.1867 28.8599 34.5084 21.6651 39.6396L21.1061 40.0383C20.2004 40.6842 18.9606 40.5812 18.174 39.7946L15.7678 37.3884C15.5338 37.1544 15.4025 36.8369 15.4028 36.5059Z", fill: "#633001" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M23.8664 12.8716L24.4172 13.4223C24.6605 13.6657 24.6605 14.0602 24.4172 14.3035C24.1738 14.5469 23.7793 14.5469 23.536 14.3035L22.9852 13.7528C22.7419 13.5094 22.7419 13.1149 22.9852 12.8716C23.2285 12.6282 23.6231 12.6282 23.8664 12.8716Z", fill: "#633001" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M26.1799 15.1841L26.7306 15.7348C26.974 15.9782 26.974 16.3727 26.7306 16.616C26.4873 16.8594 26.0928 16.8594 25.8494 16.616L25.2987 16.0653C25.0553 15.8219 25.0553 15.4274 25.2987 15.1841C25.542 14.9407 25.9365 14.9407 26.1799 15.1841Z", fill: "#633001" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M29.0441 18.9295C28.8008 19.1729 28.4062 19.1728 28.1629 18.9295L27.502 18.2686C27.2587 18.0253 27.2587 17.6307 27.502 17.3874C27.7453 17.144 28.1399 17.144 28.3832 17.3874L29.0441 18.0483C29.2875 18.2916 29.2875 18.6862 29.0441 18.9295Z", fill: "#633001" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M31.3576 21.243C31.1143 21.4863 30.7197 21.4863 30.4764 21.243L29.8155 20.5821C29.5721 20.3387 29.5721 19.9442 29.8155 19.7009C30.0588 19.4575 30.4533 19.4575 30.6967 19.7009L31.3576 20.3618C31.6009 20.6051 31.6009 20.9996 31.3576 21.243Z", fill: "#633001" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M33.009 22.0141L33.5597 22.5649C33.8031 22.8082 33.8031 23.2028 33.5597 23.4461C33.3164 23.6895 32.9219 23.6895 32.6785 23.4461L32.1278 22.8953C31.8844 22.652 31.8844 22.2575 32.1278 22.0141C32.3711 21.7708 32.7656 21.7708 33.009 22.0141Z", fill: "#633001" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M35.3225 24.3266L35.8732 24.8774C36.1166 25.1207 36.1166 25.5153 35.8732 25.7586C35.6299 26.002 35.2354 26.002 34.992 25.7586L34.4412 25.2078C34.1979 24.9645 34.1979 24.57 34.4412 24.3266C34.6846 24.0833 35.0791 24.0833 35.3225 24.3266Z", fill: "#633001" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M20.6437 22.5266C19.9743 21.8573 19.9743 20.772 20.6437 20.1027C21.4022 19.3442 22.6632 19.4609 23.2695 20.3458L24.7964 22.5738C26.1291 22.1463 27.5433 22.2031 28.4805 23.1402C29.3229 23.9827 29.4507 25.2241 29.1652 26.4073C28.8764 27.6037 28.1461 28.8641 27.0722 29.9379C25.9984 31.0117 24.7381 31.742 23.5416 32.0308C22.3584 32.3164 21.117 32.1886 20.2745 31.3461C19.3428 30.4144 19.2815 29.0108 19.7006 27.6858L17.4629 26.1524C16.5781 25.546 16.4614 24.285 17.2199 23.5265C17.8892 22.8572 18.9745 22.8572 19.6438 23.5265L21.1943 25.077C21.3478 24.897 21.5107 24.7205 21.6828 24.5485C21.8489 24.3823 22.0193 24.2247 22.1928 24.0758L20.6437 22.5266Z", fill: "#633001" }),
        React__default['default'].createElement("ellipse", { rx: "0.749452", ry: "1.09011", transform: "matrix(0.707107 -0.707106 0.707107 0.707106 22.5742 28.153)", fill: "#DBCDF9" }),
        React__default['default'].createElement("ellipse", { cx: "25.3682", cy: "25.359", rx: "0.749453", ry: "1.09011", transform: "rotate(-45 25.3682 25.359)", fill: "#DBCDF9" }),
        React__default['default'].createElement("path", { d: "M40.2095 34.2904C40.0804 34.7825 39.3818 34.7825 39.2527 34.2904L38.5576 31.6422C38.5123 31.4695 38.3775 31.3346 38.2048 31.2893L35.5566 30.5943C35.0645 30.4651 35.0645 29.7666 35.5566 29.6374L38.2048 28.9424C38.3775 28.8971 38.5123 28.7622 38.5576 28.5895L39.2527 25.9413C39.3818 25.4492 40.0804 25.4492 40.2095 25.9413L40.9045 28.5895C40.9499 28.7622 41.0847 28.8971 41.2574 28.9424L43.9056 29.6374C44.3977 29.7666 44.3977 30.4651 43.9056 30.5943L41.2574 31.2893C41.0847 31.3346 40.9499 31.4695 40.9045 31.6422L40.2095 34.2904Z", fill: "#53DEE9" }),
        React__default['default'].createElement("path", { d: "M16.4183 7.94926C16.5088 7.60415 16.9988 7.60415 17.0893 7.94926L17.5767 9.80644C17.6085 9.92754 17.7031 10.0221 17.8242 10.0539L19.6814 10.5413C20.0265 10.6319 20.0265 11.1218 19.6814 11.2124L17.8242 11.6998C17.7031 11.7316 17.6085 11.8261 17.5767 11.9473L17.0893 13.8044C16.9988 14.1495 16.5088 14.1495 16.4183 13.8044L15.9309 11.9473C15.8991 11.8261 15.8045 11.7316 15.6834 11.6998L13.8262 11.2124C13.4811 11.1218 13.4811 10.6319 13.8262 10.5413L15.6834 10.0539C15.8045 10.0221 15.8991 9.92754 15.9309 9.80644L16.4183 7.94926Z", fill: "#53DEE9" }),
        React__default['default'].createElement("path", { d: "M10.3511 38.7118C10.2924 38.9355 9.97486 38.9355 9.91616 38.7118L9.60024 37.5081C9.57964 37.4296 9.51834 37.3683 9.43985 37.3477L8.23612 37.0318C8.01244 36.9731 8.01244 36.6555 8.23612 36.5968L9.43985 36.2809C9.51834 36.2603 9.57964 36.199 9.60024 36.1205L9.91616 34.9168C9.97486 34.6931 10.2924 34.6931 10.3511 34.9168L10.667 36.1205C10.6876 36.199 10.7489 36.2603 10.8274 36.2809L12.0311 36.5968C12.2548 36.6555 12.2548 36.9731 12.0311 37.0318L10.8274 37.3477C10.7489 37.3683 10.6876 37.4296 10.667 37.5081L10.3511 38.7118Z", fill: "#53DEE9" }),
        React__default['default'].createElement("defs", null,
            React__default['default'].createElement("linearGradient", { id: "paint0_linear_ticketround", x1: "24", y1: "0", x2: "24", y2: "48", gradientUnits: "userSpaceOnUse" },
                React__default['default'].createElement("stop", { stopColor: "#54DADE" }),
                React__default['default'].createElement("stop", { offset: "0.762157", stopColor: "#24C7D6" })))));
};

var Icon$z = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M15.0701 1.01H9.07007V3.01H15.0701V1.01ZM11.0701 14.01H13.0701V8.01H11.0701V14.01ZM19.1001 7.39L20.5201 5.97C20.0901 5.46 19.6201 4.98 19.1101 4.56L17.6901 5.98C16.1401 4.74 14.1901 4 12.0701 4C7.10007 4 3.07007 8.03 3.07007 13C3.07007 17.97 7.09007 22 12.0701 22C17.0501 22 21.0701 17.97 21.0701 13C21.0701 10.89 20.3301 8.94 19.1001 7.39ZM12.0701 20.01C8.20007 20.01 5.07007 16.88 5.07007 13.01C5.07007 9.14 8.20007 6.01 12.0701 6.01C15.9401 6.01 19.0701 9.14 19.0701 13.01C19.0701 16.88 15.9401 20.01 12.0701 20.01Z" })));
};

var Icon$y = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 40 40" }, props),
        React__default['default'].createElement("path", { d: "M17.6755 13.1415V5.73914H3.98114C3.70355 5.73914 3.51849 5.92419 3.51849 6.20178V16.6576C3.51849 16.9352 3.70355 17.1203 3.98114 17.1203H9.25532V36.1814C9.25532 36.4589 9.44038 36.644 9.71797 36.644H18.3232C18.6008 36.644 18.7859 36.4589 18.7859 36.1814V13.1415H17.6755Z", fill: "#29AEFF" }),
        React__default['default'].createElement("path", { d: "M27.2061 3.33337H23.875H14.8997C14.6221 3.33337 14.437 3.51843 14.437 3.79602V33.7756C14.437 34.0532 14.6221 34.2382 14.8997 34.2382H23.5049C23.7825 34.2382 23.9676 34.0532 23.9676 33.7756V26.1882H27.2986C33.5906 26.1882 38.6797 21.099 38.6797 14.807C38.6797 8.4225 33.4981 3.33337 27.2061 3.33337Z", fill: "#2761E7" })));
};

var Icon$x = function (props) { return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
    React__default['default'].createElement("path", { d: "M21.2627 15.8306C21.5556 16.1235 21.5556 16.5983 21.2627 16.8912L18.6539 19.5H20.3788C20.793 19.5 21.1288 19.8358 21.1288 20.25C21.1288 20.6642 20.793 21 20.3788 21L16.8433 21C16.429 21 16.0933 20.6642 16.0933 20.25V16.7145C16.0933 16.3002 16.429 15.9645 16.8433 15.9645C17.2575 15.9645 17.5933 16.3002 17.5933 16.7145V18.4393L20.202 15.8306C20.4949 15.5377 20.9698 15.5377 21.2627 15.8306Z" }),
    React__default['default'].createElement("path", { d: "M2.81285 7.78034C3.10575 8.07323 3.58062 8.07323 3.87352 7.78034L6.48227 5.17158L6.48227 6.89645C6.48227 7.31067 6.81806 7.64645 7.23227 7.64645C7.64649 7.64645 7.98227 7.31067 7.98227 6.89645L7.98227 3.36092C7.98227 3.16201 7.90326 2.97124 7.7626 2.83059C7.62195 2.68994 7.43119 2.61092 7.23227 2.61092L3.69674 2.61092C3.28253 2.61092 2.94674 2.9467 2.94674 3.36092C2.94674 3.77513 3.28253 4.11092 3.69674 4.11092H5.42161L2.81285 6.71968C2.51996 7.01257 2.51996 7.48744 2.81285 7.78034Z" }),
    React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M8.46195 20.5622C8.66369 20.5827 8.86838 20.5932 9.07553 20.5932C12.3892 20.5932 15.0755 17.9069 15.0755 14.5932C18.3892 14.5932 21.0755 11.9069 21.0755 8.59315C21.0755 5.69362 19.0188 3.27448 16.2846 2.71504C15.9185 2.64011 15.5401 2.59853 15.153 2.59363C15.1272 2.5933 15.1013 2.59314 15.0754 2.59314C11.7617 2.59314 9.07542 5.27943 9.07542 8.59314C5.76171 8.59314 3.07542 11.2794 3.07542 14.5931C3.07542 17.5962 5.28164 20.0839 8.16168 20.524C8.26099 20.5392 8.3611 20.5519 8.46195 20.5622ZM5.07542 14.5931C5.07542 12.384 6.86628 10.5931 9.07542 10.5931C9.19238 10.5931 9.30799 10.5981 9.42207 10.6079C10.0255 12.3008 11.3677 13.6431 13.0607 14.2465C13.0704 14.3606 13.0754 14.4762 13.0754 14.5931C13.0754 16.8023 11.2846 18.5931 9.07542 18.5931C6.86628 18.5931 5.07542 16.8023 5.07542 14.5931ZM11.0754 8.59314C11.0754 6.384 12.8663 4.59314 15.0754 4.59314C17.2846 4.59314 19.0754 6.384 19.0754 8.59314C19.0754 10.8023 17.2846 12.5931 15.0754 12.5931C12.8663 12.5931 11.0754 10.8023 11.0754 8.59314Z" }))); };

var Icon$w = function (props) { return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
    React__default['default'].createElement("path", { d: "M3.87033 7.75941C3.57743 8.05231 3.10256 8.05231 2.80967 7.75941C2.51677 7.46652 2.51677 6.99165 2.80967 6.69875L5.41842 4.09L3.69355 4.09C3.27934 4.09 2.94355 3.75421 2.94355 3.34C2.94355 2.92578 3.27934 2.59 3.69355 2.59H7.22908C7.428 2.59 7.61876 2.66901 7.75941 2.80967C7.90007 2.95032 7.97908 3.14108 7.97908 3.34L7.97908 6.87553C7.97908 7.28974 7.6433 7.62553 7.22908 7.62553C6.81487 7.62553 6.47908 7.28974 6.47908 6.87553L6.47908 5.15066L3.87033 7.75941Z" }),
    React__default['default'].createElement("path", { d: "M15.0722 3.57222C17.8337 3.57222 20.0722 5.81079 20.0722 8.57222C20.0722 11.1919 18.0576 13.341 15.4931 13.5548C15.0568 10.7797 12.8647 8.58763 10.0897 8.15139C10.3034 5.5869 12.4525 3.57222 15.0722 3.57222Z" }),
    React__default['default'].createElement("path", { d: "M14.0721 14.5722C14.0721 11.8108 11.8335 9.57222 9.07212 9.57222C6.31069 9.57222 4.07212 11.8108 4.07212 14.5722C4.07212 17.3336 6.31069 19.5722 9.07212 19.5722C11.8335 19.5722 14.0721 17.3336 14.0721 14.5722Z" }),
    React__default['default'].createElement("path", { d: "M21.2594 15.8096C21.5523 16.1025 21.5523 16.5774 21.2594 16.8703L18.6506 19.4791H20.3755C20.7897 19.4791 21.1255 19.8148 21.1255 20.2291C21.1255 20.6433 20.7897 20.9791 20.3755 20.9791H16.84C16.4257 20.9791 16.09 20.6433 16.09 20.2291L16.09 16.6935C16.09 16.2793 16.4257 15.9435 16.84 15.9435C17.2542 15.9435 17.59 16.2793 17.59 16.6935L17.59 18.4184L20.1987 15.8096C20.4916 15.5168 20.9665 15.5168 21.2594 15.8096Z", fill: "black" }))); };

var Icon$v = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 25 25" }, props),
        React__default['default'].createElement("path", { d: "M16.8196 4.04526C17.2184 2.78478 16.2774 1.5 14.9553 1.5C13.8754 1.5 13 2.37543 13 3.45534L13 7.25679C13 8.01243 13.6126 8.625 14.3682 8.625C14.9648 8.625 15.4927 8.2384 15.6727 7.66958L16.8196 4.04526Z", fill: "#FFD800" }),
        React__default['default'].createElement("path", { d: "M8.05539 4.04526C7.65652 2.78478 8.59753 1.5 9.91962 1.5C10.9995 1.5 11.875 2.37543 11.875 3.45534L11.875 7.25679C11.875 8.01243 11.2624 8.625 10.5067 8.625C9.91013 8.625 9.3823 8.2384 9.2023 7.66958L8.05539 4.04526Z", fill: "#FFD800" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M5.24713 8.9375L13.4374 8.9375V17.0625H7.96396C7.92764 17.0625 7.89183 17.0625 7.85651 17.0625C7.06169 17.0627 6.51444 17.0629 6.00729 16.9494C4.88983 16.6995 3.90253 16.0491 3.23171 15.1211C2.92726 14.6999 2.71136 14.1971 2.39779 13.4667C2.38385 13.4342 2.36972 13.4013 2.35539 13.368L2.34484 13.3434C2.19078 12.9849 2.05946 12.6793 1.96737 12.4255C1.87345 12.1667 1.79043 11.8847 1.78065 11.583C1.7455 10.4988 2.39693 9.50984 3.40701 9.11409C3.68809 9.00396 3.97989 8.96895 4.25478 8.95306C4.5243 8.93749 4.85692 8.93749 5.24713 8.9375ZM4.36295 10.8249C4.15337 10.837 4.09575 10.858 4.09101 10.8599C3.82001 10.9661 3.64524 11.2314 3.65467 11.5223C3.65483 11.5274 3.65831 11.5886 3.72992 11.7859C3.80127 11.9825 3.91061 12.238 4.0781 12.6278C4.4505 13.4945 4.5838 13.791 4.75127 14.0227C5.15376 14.5795 5.74615 14.9697 6.41662 15.1197C6.6956 15.1821 7.02062 15.1875 7.96396 15.1875H11.5624V10.8125H5.27387C4.84961 10.8125 4.57176 10.8129 4.36295 10.8249Z", fill: "#FFD800" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M20.637 10.8249C20.4282 10.8129 20.1503 10.8125 19.7261 10.8125H13.4375V15.1875H17.036C17.9793 15.1875 18.3043 15.1821 18.5833 15.1197C19.2538 14.9697 19.8462 14.5795 20.2487 14.0227C20.4161 13.791 20.5494 13.4945 20.9218 12.6278C21.0893 12.238 21.1987 11.9825 21.27 11.7859C21.3416 11.5886 21.3451 11.5274 21.3453 11.5223C21.3547 11.2314 21.1799 10.9661 20.9089 10.8599C20.9042 10.858 20.8466 10.837 20.637 10.8249ZM20.7452 8.95306C21.0201 8.96895 21.3118 9.00396 21.5929 9.11409C22.603 9.50984 23.2544 10.4988 23.2193 11.583C23.2095 11.8847 23.1265 12.1667 23.0326 12.4255C22.9405 12.6793 22.8092 12.9849 22.6551 13.3434L22.6446 13.368C22.6302 13.4013 22.6161 13.4342 22.6022 13.4667C22.2886 14.197 22.0727 14.6999 21.7682 15.1211C21.0974 16.0491 20.1101 16.6995 18.9927 16.9494C18.4855 17.0629 17.9383 17.0627 17.1434 17.0625C17.1081 17.0625 17.0723 17.0625 17.036 17.0625H11.5625V8.9375L19.7528 8.9375C20.143 8.93749 20.4756 8.93749 20.7452 8.95306Z", fill: "#FFD800" }),
        React__default['default'].createElement("path", { d: "M8.07961 10.8125H4.6577C4.61915 10.8125 4.58174 10.8125 4.5454 10.8125C4.39673 10.5329 4.3125 10.2138 4.3125 9.875C4.3125 9.53623 4.39673 9.21713 4.54539 8.9375C4.57317 8.9375 4.60124 8.9375 4.62961 8.9375L8.07961 8.9375C8.22827 9.21713 8.3125 9.53623 8.3125 9.875C8.3125 10.2138 8.22827 10.5329 8.07961 10.8125Z", fill: "#FFAF00" }),
        React__default['default'].createElement("path", { d: "M8.4231 15.1875L9.18751 17.0104L9.06332 17.0625L7.23815 17.0625C7.0893 17.0626 6.94898 17.0626 6.81591 17.0619L6.01688 15.1564C6.27346 15.1844 6.63759 15.1875 7.3468 15.1875H8.4231Z", fill: "#FFAF00" }),
        React__default['default'].createElement("path", { d: "M16.9204 10.8125H20.3423C20.3809 10.8125 20.4183 10.8125 20.4546 10.8125C20.6033 10.5329 20.6875 10.2138 20.6875 9.875C20.6875 9.53623 20.6033 9.21713 20.4546 8.9375C20.4268 8.9375 20.3988 8.9375 20.3704 8.9375L16.9204 8.9375C16.7717 9.21713 16.6875 9.53623 16.6875 9.875C16.6875 10.2138 16.7717 10.5329 16.9204 10.8125Z", fill: "#EB8C00" }),
        React__default['default'].createElement("path", { d: "M16.5769 15.1875L15.8125 17.0104L15.9367 17.0625L17.7619 17.0625C17.9107 17.0626 18.051 17.0626 18.1841 17.0619L18.9831 15.1564C18.7266 15.1844 18.3624 15.1875 17.6532 15.1875H16.5769Z", fill: "#EB8C00" }),
        React__default['default'].createElement("path", { d: "M10.9347 16.6152C10.8361 15.6854 11.5651 14.875 12.5002 14.875C13.4353 14.875 14.1642 15.6853 14.0656 16.6152L13.7087 19.9805C13.6547 20.4891 13.2257 20.875 12.7142 20.875H12.2861C11.7746 20.875 11.3456 20.4891 11.2917 19.9805L10.9347 16.6152Z", fill: "#EB8C00" }),
        React__default['default'].createElement("path", { d: "M8.875 21.5312C8.875 20.5475 9.67249 19.75 10.6562 19.75H14.3438C15.3275 19.75 16.125 20.5475 16.125 21.5312C16.125 21.8592 15.8592 22.125 15.5312 22.125H9.46875C9.14083 22.125 8.875 21.8592 8.875 21.5312Z", fill: "#FFD800" }),
        React__default['default'].createElement("path", { d: "M6.88325 14.6524C5.89136 12.0714 5.39541 10.7809 5.56796 9.74082C5.75596 8.6076 6.43705 7.61619 7.42741 7.03418C8.33639 6.5 9.72434 6.5 12.5002 6.5C15.2761 6.5 16.664 6.5 17.573 7.03418C18.5634 7.61619 19.2445 8.6076 19.4325 9.74082C19.605 10.7809 19.1091 12.0714 18.1172 14.6524C17.6137 15.9625 17.362 16.6176 16.9476 17.1125C16.494 17.6543 15.9009 18.0617 15.2324 18.2908C14.6218 18.5 13.9146 18.5 12.5002 18.5C11.0858 18.5 10.3786 18.5 9.768 18.2908C9.09952 18.0617 8.5064 17.6543 8.0528 17.1125C7.63848 16.6176 7.38674 15.9625 6.88325 14.6524Z", fill: "#FFD800" }),
        React__default['default'].createElement("path", { d: "M17.903 7.86713C18.1516 8.78956 17.8918 9.94993 17.3722 12.2707L17.1257 13.372C16.8386 14.6541 16.6951 15.2952 16.4026 15.8048C15.9154 16.6532 15.1253 17.286 14.1908 17.5761C13.6297 17.7503 12.9728 17.7503 11.6589 17.7503C10.5622 17.7503 10.0139 17.7503 9.52467 17.6202C8.79145 17.4253 8.13341 17.02 7.63037 16.4569C7.76277 16.7161 7.89603 16.9258 8.05248 17.1127C8.50608 17.6545 9.0992 18.062 9.76768 18.291C10.3783 18.5002 11.0855 18.5002 12.4999 18.5002C13.9143 18.5002 14.6215 18.5002 15.2321 18.291C15.9006 18.062 16.4937 17.6545 16.9473 17.1127C17.3616 16.6178 17.6134 15.9627 18.1169 14.6526C19.1088 12.0716 19.6047 10.7811 19.4321 9.74103C19.2442 8.60781 18.5631 7.6164 17.5727 7.0344C17.572 7.034 17.5713 7.0336 17.5707 7.0332C17.7122 7.29512 17.8242 7.57465 17.903 7.86713Z", fill: "#FFAF00" }),
        React__default['default'].createElement("path", { d: "M20.1942 7.55201C20.1249 7.816 19.7501 7.816 19.6808 7.55201L19.308 6.13133C19.2837 6.03869 19.2113 5.96634 19.1187 5.94202L17.698 5.56917C17.434 5.49988 17.434 5.12512 17.698 5.05584L19.1187 4.68298C19.2113 4.65867 19.2837 4.58632 19.308 4.49368L19.6808 3.073C19.7501 2.809 20.1249 2.809 20.1942 3.073L20.567 4.49368C20.5913 4.58632 20.6637 4.65867 20.7563 4.68298L22.177 5.05584C22.441 5.12512 22.441 5.49988 22.177 5.56917L20.7563 5.94202C20.6637 5.96634 20.5913 6.03869 20.567 6.13133L20.1942 7.55201Z", fill: "#FEED8D" }),
        React__default['default'].createElement("path", { d: "M4.46705 4.12184C4.50969 3.95939 4.74031 3.95939 4.78295 4.12184L5.0124 4.99611C5.02736 5.05312 5.07188 5.09764 5.12889 5.1126L6.00316 5.34205C6.16561 5.38469 6.16561 5.61531 6.00316 5.65795L5.12889 5.8874C5.07188 5.90236 5.02736 5.94688 5.0124 6.00389L4.78295 6.87816C4.74031 7.04061 4.50969 7.04061 4.46705 6.87816L4.2376 6.00389C4.22264 5.94688 4.17812 5.90236 4.12111 5.8874L3.24684 5.65795C3.08439 5.61531 3.08439 5.38469 3.24684 5.34205L4.12111 5.1126C4.17812 5.09764 4.22264 5.05312 4.2376 4.99611L4.46705 4.12184Z", fill: "#FEED8D" }),
        React__default['default'].createElement("path", { d: "M5.3257 21.0184C5.2884 21.1605 5.0866 21.1605 5.0493 21.0184L4.84853 20.2534C4.83543 20.2035 4.79648 20.1646 4.74659 20.1515L3.98161 19.9507C3.83946 19.9134 3.83946 19.7116 3.98161 19.6743L4.74659 19.4735C4.79648 19.4604 4.83543 19.4215 4.84853 19.3716L5.0493 18.6066C5.0866 18.4645 5.2884 18.4645 5.3257 18.6066L5.52647 19.3716C5.53957 19.4215 5.57852 19.4604 5.62841 19.4735L6.39339 19.6743C6.53554 19.7116 6.53554 19.9134 6.39339 19.9507L5.62841 20.1515C5.57852 20.1646 5.53957 20.2035 5.52647 20.2534L5.3257 21.0184Z", fill: "#FEED8D" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M8.13603 7.98393C8.40807 8.2437 8.418 8.67482 8.15822 8.94685L8.04567 9.06471C7.79436 9.32787 7.65414 9.67776 7.65414 10.0416L7.65414 10.2898C7.65414 10.6659 7.34921 10.9708 6.97306 10.9708C6.59692 10.9708 6.29199 10.6659 6.29199 10.2898L6.29199 10.0416C6.29199 9.32735 6.56725 8.64055 7.06056 8.12398L7.17311 8.00611C7.43289 7.73408 7.864 7.72415 8.13603 7.98393Z", fill: "#FEED8D" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.93527 2.21472C10.1387 2.409 10.1461 2.73142 9.95187 2.93487L9.86769 3.02302C9.67974 3.21983 9.57487 3.4815 9.57487 3.75363V3.93921C9.57487 4.22052 9.34682 4.44857 9.06551 4.44857C8.7842 4.44857 8.55615 4.22052 8.55615 3.93921V3.75363C8.55615 3.21944 8.76201 2.70579 9.13094 2.31946L9.21512 2.23131C9.4094 2.02786 9.73183 2.02044 9.93527 2.21472Z", fill: "#FEED8D" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M14.8469 2.21472C15.0503 2.409 15.0578 2.73142 14.8635 2.93487L14.7793 3.02302C14.5914 3.21983 14.4865 3.4815 14.4865 3.75363V3.93921C14.4865 4.22052 14.2584 4.44857 13.9771 4.44857C13.6958 4.44857 13.4678 4.22052 13.4678 3.93921V3.75363C13.4678 3.21944 13.6736 2.70579 14.0426 2.31946L14.1267 2.23131C14.321 2.02786 14.6434 2.02044 14.8469 2.21472Z", fill: "#FEED8D" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.789 9.61642C12.789 9.0473 13.2462 8.58594 13.8102 8.58594C14.4493 8.58594 14.9313 9.17163 14.814 9.80558L14.5186 11.4019C15.2601 11.7867 15.832 12.412 15.832 13.2088C15.832 13.9251 15.3629 14.5072 14.7441 14.8888C14.1184 15.2747 13.2798 15.5 12.375 15.5C11.4702 15.5 10.6316 15.2747 10.0059 14.8888C9.38712 14.5072 8.91797 13.9251 8.91797 13.2088C8.91797 12.4166 9.48346 11.7938 10.2182 11.4087L9.92155 9.80559C9.80423 9.17163 10.2863 8.58594 10.9254 8.58594C11.4894 8.58594 11.9466 9.04731 11.9466 9.61642L11.9466 10.9347C12.087 10.9235 12.23 10.9177 12.375 10.9177C12.515 10.9177 12.6532 10.9231 12.789 10.9336V9.61642Z", fill: "#FFAF00" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.789 9.15548C12.789 8.58636 13.2462 8.125 13.8102 8.125C14.4493 8.125 14.9313 8.71069 14.814 9.34464L14.5186 10.9409C15.2601 11.3257 15.832 11.9511 15.832 12.7479C15.832 13.4642 15.3629 14.0463 14.7441 14.4279C14.1184 14.8137 13.2798 15.0391 12.375 15.0391C11.4702 15.0391 10.6316 14.8137 10.0059 14.4279C9.38712 14.0463 8.91797 13.4642 8.91797 12.7479C8.91797 11.9557 9.48346 11.3329 10.2182 10.9478L9.92155 9.34465C9.80423 8.7107 10.2863 8.12501 10.9254 8.12501C11.4894 8.12501 11.9466 8.58637 11.9466 9.15548L11.9466 10.4738C12.087 10.4625 12.23 10.4567 12.375 10.4567C12.515 10.4567 12.6532 10.4621 12.789 10.4726V9.15548ZM11.6782 12.3681C11.6782 12.73 11.4783 13.0234 11.2317 13.0234C10.9851 13.0234 10.7852 12.73 10.7852 12.3681C10.7852 12.0061 10.9851 11.7127 11.2317 11.7127C11.4783 11.7127 11.6782 12.0061 11.6782 12.3681ZM13.5861 13.0234C13.8327 13.0234 14.0326 12.73 14.0326 12.368C14.0326 12.0061 13.8327 11.7127 13.5861 11.7127C13.3395 11.7127 13.1396 12.0061 13.1396 12.368C13.1396 12.73 13.3395 13.0234 13.5861 13.0234Z", fill: "#ED8103" })));
};

var Icon$u = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 40 40" }, props),
        React__default['default'].createElement("path", { opacity: "0.9", d: "M19.9959 4.8377L20.7771 3.82105C20.5523 3.64825 20.2766 3.55457 19.9931 3.55457C19.7095 3.55457 19.4339 3.64825 19.209 3.82105L19.9959 4.8377ZM33.425 8.7837H34.7059C34.7081 8.61378 34.6767 8.44509 34.6134 8.28737C34.5502 8.12965 34.4563 7.98603 34.3372 7.8648C34.2181 7.74358 34.0762 7.64714 33.9196 7.58107C33.763 7.515 33.5949 7.4806 33.425 7.47985V8.7837ZM19.9959 36.2161L19.2837 37.2845C19.4936 37.425 19.7405 37.5 19.9931 37.5C20.2457 37.5 20.4925 37.425 20.7024 37.2845L19.9959 36.2161ZM6.57841 8.7837V7.49709C6.40847 7.49783 6.24036 7.53223 6.0838 7.5983C5.92723 7.66437 5.7853 7.76081 5.66621 7.88204C5.54712 8.00326 5.45322 8.14688 5.38995 8.3046C5.32667 8.46232 5.29526 8.63101 5.29754 8.80093L6.57841 8.7837ZM19.2148 5.84861C25.0275 10.3518 31.6846 10.0646 33.4307 10.0646V7.49709C31.6214 7.49709 25.8259 7.72684 20.7943 3.82105L19.2148 5.84861ZM32.1499 8.76073C32.0522 14.7113 31.7995 18.91 31.317 22.0174C30.8345 25.1248 30.1682 26.9399 29.2894 28.238C28.4106 29.5361 27.2848 30.3804 25.6364 31.3626C23.9879 32.3448 21.8799 33.4361 19.2837 35.1535L20.7312 37.2845C23.1895 35.6475 25.2343 34.6021 26.9747 33.5625C28.7284 32.6075 30.2502 31.2779 31.4319 29.6682C32.5806 27.9451 33.3675 25.6475 33.873 22.408C34.3785 19.1685 34.6369 14.809 34.7346 8.80093L32.1499 8.76073ZM20.7312 35.1535C18.1522 33.4304 16.05 32.362 14.413 31.3684C12.776 30.3747 11.6502 29.582 10.7656 28.238C9.8811 26.8939 9.16312 25.1076 8.66915 22.0174C8.17519 18.9273 7.95692 14.7113 7.85928 8.76073L5.29754 8.80093C5.39518 14.809 5.6594 19.18 6.15911 22.408C6.65882 25.636 7.42275 27.9336 8.59448 29.6682C9.77051 31.2788 11.2888 32.6088 13.0402 33.5625C14.7633 34.6021 16.8254 35.6475 19.2837 37.2845L20.7312 35.1535ZM6.57841 10.0646C8.30155 10.0646 14.9644 10.3518 20.7771 5.84861L19.209 3.82105C14.166 7.72684 8.37048 7.49709 6.57266 7.49709L6.57841 10.0646Z", fill: "#3688EB" })));
};

var Icon$t = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M0 0h24v24H0z", fill: "none" }),
        React__default['default'].createElement("path", { d: "M3 17v2h6v-2H3zM3 5v2h10V5H3zm10 16v-2h8v-2h-8v-2h-2v6h2zM7 9v2H3v2h4v2h2V9H7zm14 4v-2H11v2h10zm-6-4h2V7h4V5h-4V3h-2v6z" })));
};

var Icon$s = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M12 6.49999C14.76 6.49999 17 8.73999 17 11.5C17 12.01 16.9 12.5 16.76 12.96L19.82 16.02C21.21 14.79 22.31 13.25 23 11.49C21.27 7.10999 17 3.99999 12 3.99999C10.73 3.99999 9.51 4.19999 8.36 4.56999L10.53 6.73999C11 6.59999 11.49 6.49999 12 6.49999ZM2.71 3.15999C2.32 3.54999 2.32 4.17999 2.71 4.56999L4.68 6.53999C3.06 7.82999 1.77 9.52999 1 11.5C2.73 15.89 7 19 12 19C13.52 19 14.97 18.7 16.31 18.18L19.03 20.9C19.42 21.29 20.05 21.29 20.44 20.9C20.83 20.51 20.83 19.88 20.44 19.49L4.13 3.15999C3.74 2.76999 3.1 2.76999 2.71 3.15999ZM12 16.5C9.24 16.5 7 14.26 7 11.5C7 10.73 7.18 9.99999 7.49 9.35999L9.06 10.93C9.03 11.11 9 11.3 9 11.5C9 13.16 10.34 14.5 12 14.5C12.2 14.5 12.38 14.47 12.57 14.43L14.14 16C13.49 16.32 12.77 16.5 12 16.5ZM14.97 11.17C14.82 9.76999 13.72 8.67999 12.33 8.52999L14.97 11.17Z" })));
};

var Icon$r = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M12 4C7 4 2.73 7.11 1 11.5C2.73 15.89 7 19 12 19C17 19 21.27 15.89 23 11.5C21.27 7.11 17 4 12 4ZM12 16.5C9.24 16.5 7 14.26 7 11.5C7 8.74 9.24 6.5 12 6.5C14.76 6.5 17 8.74 17 11.5C17 14.26 14.76 16.5 12 16.5ZM12 8.5C10.34 8.5 9 9.84 9 11.5C9 13.16 10.34 14.5 12 14.5C13.66 14.5 15 13.16 15 11.5C15 9.84 13.66 8.5 12 8.5Z" })));
};

var Icon$q = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M3.63 3.63C3.24 4.02 3.24 4.65 3.63 5.04L7.29 8.7L7 9H4C3.45 9 3 9.45 3 10V14C3 14.55 3.45 15 4 15H7L10.29 18.29C10.92 18.92 12 18.47 12 17.58V13.41L16.18 17.59C15.69 17.96 15.16 18.27 14.58 18.5C14.22 18.65 14 19.03 14 19.42C14 20.14 14.73 20.6 15.39 20.33C16.19 20 16.94 19.56 17.61 19.02L18.95 20.36C19.34 20.75 19.97 20.75 20.36 20.36C20.75 19.97 20.75 19.34 20.36 18.95L5.05 3.63C4.66 3.24 4.03 3.24 3.63 3.63ZM19 12C19 12.82 18.85 13.61 18.59 14.34L20.12 15.87C20.68 14.7 21 13.39 21 12C21 8.17 18.6 4.89 15.22 3.6C14.63 3.37 14 3.83 14 4.46V4.65C14 5.03 14.25 5.36 14.61 5.5C17.18 6.54 19 9.06 19 12ZM10.29 5.71L10.12 5.88L12 7.76V6.41C12 5.52 10.92 5.08 10.29 5.71ZM16.5 12C16.5 10.23 15.48 8.71 14 7.97V9.76L16.48 12.24C16.49 12.16 16.5 12.08 16.5 12Z" })));
};

var Icon$p = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M3 10V14C3 14.55 3.45 15 4 15H7L10.29 18.29C10.92 18.92 12 18.47 12 17.58V6.41C12 5.52 10.92 5.07 10.29 5.7L7 9H4C3.45 9 3 9.45 3 10ZM16.5 12C16.5 10.23 15.48 8.71 14 7.97V16.02C15.48 15.29 16.5 13.77 16.5 12ZM14 4.45V4.65C14 5.03 14.25 5.36 14.6 5.5C17.18 6.53 19 9.06 19 12C19 14.94 17.18 17.47 14.6 18.5C14.24 18.64 14 18.97 14 19.35V19.55C14 20.18 14.63 20.62 15.21 20.4C18.6 19.11 21 15.84 21 12C21 8.16 18.6 4.89 15.21 3.6C14.63 3.37 14 3.82 14 4.45Z" })));
};

var Icon$o = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M2 21.8966H12C12.55 21.8966 13 22.3466 13 22.8966C13 23.4466 12.55 23.8966 12 23.8966H2C1.45 23.8966 1 23.4466 1 22.8966C1 22.3466 1.45 21.8966 2 21.8966ZM5.24 8.96661L8.07 6.13661L20.8 18.8666C21.58 19.6466 21.58 20.9166 20.8 21.6966C20.02 22.4766 18.75 22.4766 17.97 21.6966L5.24 8.96661ZM13.73 3.30661L16.56 6.13661C17.34 6.91661 17.34 8.18661 16.56 8.96661L15.14 10.3866L9.49 4.72661L10.9 3.31661C11.68 2.52661 12.95 2.52661 13.73 3.30661ZM3.83 10.3766L9.49 16.0366L8.08 17.4466C7.3 18.2266 6.03 18.2266 5.25 17.4466L2.42 14.6166C1.64 13.8366 1.64 12.5666 2.42 11.7866L3.83 10.3766Z" })));
};

var Icon$n = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M4.47 20.9999H19.53C21.07 20.9999 22.03 19.3299 21.26 17.9999L13.73 4.98993C12.96 3.65993 11.04 3.65993 10.27 4.98993L2.74 17.9999C1.97 19.3299 2.93 20.9999 4.47 20.9999ZM12 13.9999C11.45 13.9999 11 13.5499 11 12.9999V10.9999C11 10.4499 11.45 9.99993 12 9.99993C12.55 9.99993 13 10.4499 13 10.9999V12.9999C13 13.5499 12.55 13.9999 12 13.9999ZM13 17.9999H11V15.9999H13V17.9999Z" })));
};

var Icon$m = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 40 40" }, props),
        React__default['default'].createElement("path", { d: "M8.68096 12.4756C14.9323 6.39698 25.0677 6.39698 31.3191 12.4756L32.0714 13.2071C32.384 13.511 32.384 14.0038 32.0714 14.3077L29.4978 16.8103C29.3415 16.9622 29.0881 16.9622 28.9318 16.8103L27.8965 15.8036C23.5354 11.563 16.4647 11.563 12.1036 15.8036L10.9948 16.8817C10.8385 17.0336 10.5851 17.0336 10.4288 16.8817L7.85517 14.3791C7.54261 14.0752 7.54261 13.5824 7.85517 13.2785L8.68096 12.4756ZM36.6417 17.6511L38.9322 19.8783C39.2448 20.1823 39.2448 20.675 38.9322 20.979L28.6039 31.022C28.2913 31.3259 27.7846 31.3259 27.472 31.022C27.472 31.022 27.472 31.022 27.472 31.022L20.1416 23.8942C20.0634 23.8182 19.9367 23.8182 19.8586 23.8942C19.8586 23.8942 19.8586 23.8942 19.8586 23.8942L12.5283 31.022C12.2157 31.3259 11.709 31.3259 11.3964 31.022C11.3964 31.022 11.3964 31.022 11.3964 31.022L1.06775 20.9788C0.755186 20.6749 0.755186 20.1821 1.06775 19.8782L3.35833 17.6509C3.6709 17.347 4.17767 17.347 4.49024 17.6509L11.8208 24.7789C11.8989 24.8549 12.0256 24.8549 12.1038 24.7789C12.1038 24.7789 12.1038 24.7789 12.1038 24.7789L19.4339 17.6509C19.7465 17.347 20.2533 17.347 20.5658 17.6509C20.5658 17.6509 20.5658 17.6509 20.5658 17.6509L27.8964 24.7789C27.9745 24.8549 28.1012 24.8549 28.1794 24.7789L35.5098 17.6511C35.8223 17.3471 36.3291 17.3471 36.6417 17.6511Z", fill: "#3389FB" })));
};

var Icon$l = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M17.5 12.323C17.5 13.1514 16.8284 13.823 16 13.823C15.1716 13.823 14.5 13.1514 14.5 12.323C14.5 11.4946 15.1716 10.823 16 10.823C16.8284 10.823 17.5 11.4946 17.5 12.323Z" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M21 5.323V7.603C21.59 7.953 22 8.583 22 9.323V15.323C22 16.063 21.59 16.693 21 17.043V19.323C21 20.423 20.1 21.323 19 21.323H5C3.89 21.323 3 20.423 3 19.323V5.323C3 4.223 3.89 3.323 5 3.323H19C20.1 3.323 21 4.223 21 5.323ZM13 15.323H20V9.323H13V15.323ZM5 5.323V19.323H19V17.323H13C11.9 17.323 11 16.423 11 15.323V9.323C11 8.223 11.9 7.323 13 7.323H19V5.323H5Z" })));
};

var Icon$k = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M17 4C18.5 4 19 4.5 19 6L19 8C20.1046 8 21 8.89543 21 10L21 17C21 19 20 20 17.999 20H6C4 20 3 19 3 17L3 7C3 5.5 4.5 4 6 4L17 4ZM5 7C5 6.44772 5.44772 6 6 6L19 6L19 8L6 8C5.44772 8 5 7.55229 5 7ZM17 16C18 16 19.001 15 19 14C18.999 13 18 12 17 12C16 12 15 13 15 14C15 15 16 16 17 16Z" })));
};

var Icon$j = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM12.5 7.75C12.5 7.33579 12.1642 7 11.75 7C11.3358 7 11 7.33579 11 7.75V13L15.5537 15.8022C15.9106 16.0219 16.3781 15.9106 16.5978 15.5537C16.8192 15.1938 16.7041 14.7225 16.3419 14.5051L12.5 12.2V7.75Z" })));
};

var ExpandableButton = function (_a) {
    var onClick = _a.onClick, expanded = _a.expanded, children = _a.children;
    return (React__default['default'].createElement(IconButton, { "aria-label": "Hide or show expandable content", onClick: onClick },
        children,
        expanded ? React__default['default'].createElement(Icon$1F, { color: "invertedContrast" }) : React__default['default'].createElement(Icon$1I, { color: "invertedContrast" })));
};
ExpandableButton.defaultProps = {
    expanded: false,
};
var ExpandableLabel = function (_a) {
    var onClick = _a.onClick, expanded = _a.expanded, children = _a.children;
    return (React__default['default'].createElement(Button, { variant: "text", "aria-label": "Hide or show expandable content", onClick: onClick, endIcon: expanded ? React__default['default'].createElement(Icon$1F, { color: "primary" }) : React__default['default'].createElement(Icon$1I, { color: "primary" }) }, children));
};
ExpandableLabel.defaultProps = {
    expanded: false,
};

var Box = styled__default['default'].div(templateObject_1$14 || (templateObject_1$14 = __makeTemplateObject(["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"], ["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"])), styledSystem.background, styledSystem.border, styledSystem.layout, styledSystem.position, styledSystem.space);
var templateObject_1$14;

var Flex = styled__default['default'](Box)(templateObject_1$13 || (templateObject_1$13 = __makeTemplateObject(["\n  display: flex;\n  ", "\n"], ["\n  display: flex;\n  ", "\n"])), styledSystem.flexbox);
var templateObject_1$13;

var variants$5 = {
    INFO: "info",
    DANGER: "danger",
    SUCCESS: "success",
    WARNING: "warning",
};

var getThemeColor = function (_a) {
    var theme = _a.theme, _b = _a.variant, variant = _b === void 0 ? variants$5.INFO : _b;
    switch (variant) {
        case variants$5.DANGER:
            return theme.colors.failure;
        case variants$5.WARNING:
            return theme.colors.warning;
        case variants$5.SUCCESS:
            return theme.colors.success;
        case variants$5.INFO:
        default:
            return theme.colors.secondary;
    }
};
var getIcon = function (variant) {
    if (variant === void 0) { variant = variants$5.INFO; }
    switch (variant) {
        case variants$5.DANGER:
            return Icon$28;
        case variants$5.WARNING:
            return Icon$29;
        case variants$5.SUCCESS:
            return Icon$2a;
        case variants$5.INFO:
        default:
            return Icon$27;
    }
};
var IconLabel = styled__default['default'].div(templateObject_1$12 || (templateObject_1$12 = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: 16px 0 0 16px;\n  color: ", ";\n  padding: 12px;\n"], ["\n  background-color: ", ";\n  border-radius: 16px 0 0 16px;\n  color: ", ";\n  padding: 12px;\n"])), getThemeColor, function (_a) {
    var theme = _a.theme;
    return theme.alert.background;
});
var withHandlerSpacing = 32 + 12 + 8; // button size + inner spacing + handler position
var Details = styled__default['default'].div(templateObject_2$u || (templateObject_2$u = __makeTemplateObject(["\n  flex: 1;\n  padding-bottom: 12px;\n  padding-left: 12px;\n  padding-right: ", ";\n  padding-top: 12px;\n"], ["\n  flex: 1;\n  padding-bottom: 12px;\n  padding-left: 12px;\n  padding-right: ", ";\n  padding-top: 12px;\n"])), function (_a) {
    var hasHandler = _a.hasHandler;
    return (hasHandler ? withHandlerSpacing + "px" : "12px");
});
var CloseHandler = styled__default['default'].div(templateObject_3$e || (templateObject_3$e = __makeTemplateObject(["\n  border-radius: 0 16px 16px 0;\n  right: 8px;\n  position: absolute;\n  top: 8px;\n"], ["\n  border-radius: 0 16px 16px 0;\n  right: 8px;\n  position: absolute;\n  top: 8px;\n"])));
var StyledAlert = styled__default['default'](Flex)(templateObject_4$9 || (templateObject_4$9 = __makeTemplateObject(["\n  position: relative;\n  background-color: ", ";\n  border-radius: 16px;\n  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);\n"], ["\n  position: relative;\n  background-color: ", ";\n  border-radius: 16px;\n  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);\n"])), function (_a) {
    var theme = _a.theme;
    return theme.alert.background;
});
var Alert = function (_a) {
    var title = _a.title, children = _a.children, variant = _a.variant, onClick = _a.onClick;
    var Icon = getIcon(variant);
    return (React__default['default'].createElement(StyledAlert, null,
        React__default['default'].createElement(IconLabel, { variant: variant, hasDescription: !!children },
            React__default['default'].createElement(Icon, { color: "currentColor", width: "24px" })),
        React__default['default'].createElement(Details, { hasHandler: !!onClick },
            React__default['default'].createElement(Text, { bold: true }, title),
            typeof children === "string" ? React__default['default'].createElement(Text, { as: "p" }, children) : children),
        onClick && (React__default['default'].createElement(CloseHandler, null,
            React__default['default'].createElement(IconButton, { scale: "sm", variant: "text", onClick: onClick },
                React__default['default'].createElement(Icon$1E, { width: "24px", color: "currentColor" }))))));
};
var templateObject_1$12, templateObject_2$u, templateObject_3$e, templateObject_4$9;

var Grid = styled__default['default'](Box)(templateObject_1$11 || (templateObject_1$11 = __makeTemplateObject(["\n  display: grid;\n  ", "\n  ", "\n"], ["\n  display: grid;\n  ", "\n  ", "\n"])), styledSystem.flexbox, styledSystem.grid);
var templateObject_1$11;

var scales$7 = {
    SM: "sm",
    MD: "md",
    LG: "lg",
};

/**
 * Priority: Warning --> Success
 */
var getBoxShadow = function (_a) {
    var _b = _a.isSuccess, isSuccess = _b === void 0 ? false : _b, _c = _a.isWarning, isWarning = _c === void 0 ? false : _c, theme = _a.theme;
    if (isWarning) {
        return theme.shadows.warning;
    }
    if (isSuccess) {
        return theme.shadows.success;
    }
    return theme.shadows.inset;
};
var getHeight = function (_a) {
    var _b = _a.scale, scale = _b === void 0 ? scales$7.MD : _b;
    switch (scale) {
        case scales$7.SM:
            return "32px";
        case scales$7.LG:
            return "48px";
        case scales$7.MD:
        default:
            return "40px";
    }
};
var Input$1 = styled__default['default'].input(templateObject_1$10 || (templateObject_1$10 = __makeTemplateObject(["\n  background-color: ", ";\n  border: 0;\n  border-radius: 16px;\n  box-shadow: ", ";\n  color: ", ";\n  display: block;\n  font-size: 16px;\n  height: ", ";\n  outline: 0;\n  padding: 0 16px;\n  width: 100%;\n  border: 1px solid ", ";\n\n  &::placeholder {\n    color: ", ";\n  }\n\n  &:disabled {\n    background-color: ", ";\n    box-shadow: none;\n    color: ", ";\n    cursor: not-allowed;\n  }\n\n  &:focus:not(:disabled) {\n    box-shadow: ", ";\n  }\n"], ["\n  background-color: ", ";\n  border: 0;\n  border-radius: 16px;\n  box-shadow: ", ";\n  color: ", ";\n  display: block;\n  font-size: 16px;\n  height: ", ";\n  outline: 0;\n  padding: 0 16px;\n  width: 100%;\n  border: 1px solid ", ";\n\n  &::placeholder {\n    color: ", ";\n  }\n\n  &:disabled {\n    background-color: ", ";\n    box-shadow: none;\n    color: ", ";\n    cursor: not-allowed;\n  }\n\n  &:focus:not(:disabled) {\n    box-shadow: ", ";\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
}, getBoxShadow, function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
}, getHeight, function (_a) {
    var theme = _a.theme;
    return theme.colors.inputSecondary;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.textSubtle;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.backgroundDisabled;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.textDisabled;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
});
Input$1.defaultProps = {
    scale: scales$7.MD,
    isSuccess: false,
    isWarning: false,
};
var templateObject_1$10;

var SwitchUnitsButton = styled__default['default'](IconButton)(templateObject_1$$ || (templateObject_1$$ = __makeTemplateObject(["\n  width: 16px;\n"], ["\n  width: 16px;\n"])));
var UnitContainer = styled__default['default'](Text)(templateObject_2$t || (templateObject_2$t = __makeTemplateObject(["\n  margin-left: 4px;\n  text-align: right;\n  color: ", ";\n  white-space: nowrap;\n"], ["\n  margin-left: 4px;\n  text-align: right;\n  color: ", ";\n  white-space: nowrap;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.textSubtle;
});
var StyledBalanceInput = styled__default['default'](Box)(templateObject_3$d || (templateObject_3$d = __makeTemplateObject(["\n  background-color: ", ";\n  border: 1px solid ", ";\n  border-radius: 16px;\n  box-shadow: ", ";\n  padding: 8px 16px;\n"], ["\n  background-color: ", ";\n  border: 1px solid ", ";\n  border-radius: 16px;\n  box-shadow: ", ";\n  padding: 8px 16px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.inputSecondary;
}, function (_a) {
    var theme = _a.theme, isWarning = _a.isWarning;
    return theme.shadows[isWarning ? "warning" : "inset"];
});
var StyledInput$1 = styled__default['default'](Input$1)(templateObject_4$8 || (templateObject_4$8 = __makeTemplateObject(["\n  background: transparent;\n  border-radius: 0;\n  box-shadow: none;\n  padding-left: 0;\n  padding-right: 0;\n  text-align: ", ";\n  border: none;\n\n  ::placeholder {\n    color: ", ";\n  }\n\n  &:focus:not(:disabled) {\n    box-shadow: none;\n  }\n"], ["\n  background: transparent;\n  border-radius: 0;\n  box-shadow: none;\n  padding-left: 0;\n  padding-right: 0;\n  text-align: ", ";\n  border: none;\n\n  ::placeholder {\n    color: ", ";\n  }\n\n  &:focus:not(:disabled) {\n    box-shadow: none;\n  }\n"])), function (_a) {
    var _b = _a.textAlign, textAlign = _b === void 0 ? "right" : _b;
    return textAlign;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.textSubtle;
});
var templateObject_1$$, templateObject_2$t, templateObject_3$d, templateObject_4$8;

var BalanceInput = function (_a) {
    var value = _a.value, _b = _a.placeholder, placeholder = _b === void 0 ? "0.0" : _b, onUserInput = _a.onUserInput, currencyValue = _a.currencyValue, inputProps = _a.inputProps, innerRef = _a.innerRef, _c = _a.isWarning, isWarning = _c === void 0 ? false : _c, _d = _a.decimals, decimals = _d === void 0 ? 18 : _d, unit = _a.unit, switchEditingUnits = _a.switchEditingUnits, props = __rest(_a, ["value", "placeholder", "onUserInput", "currencyValue", "inputProps", "innerRef", "isWarning", "decimals", "unit", "switchEditingUnits"]);
    var handleOnChange = function (e) {
        if (e.currentTarget.validity.valid) {
            onUserInput(e.currentTarget.value.replace(/,/g, "."));
        }
    };
    return (React__default['default'].createElement(StyledBalanceInput, __assign({ isWarning: isWarning }, props),
        React__default['default'].createElement(Flex, { justifyContent: "flex-end" },
            React__default['default'].createElement(Box, null,
                React__default['default'].createElement(Flex, { alignItems: "center" },
                    React__default['default'].createElement(StyledInput$1, __assign({ pattern: "^[0-9]*[.,]?[0-9]{0," + decimals + "}$", inputMode: "decimal", min: "0", value: value, onChange: handleOnChange, placeholder: placeholder, ref: innerRef }, inputProps)),
                    unit && React__default['default'].createElement(UnitContainer, null, unit)),
                currencyValue && (React__default['default'].createElement(Text, { fontSize: "12px", textAlign: "right", color: "textSubtle" }, currencyValue))),
            switchEditingUnits && (React__default['default'].createElement(Flex, { alignItems: "center", pl: "12px" },
                React__default['default'].createElement(SwitchUnitsButton, { scale: "sm", variant: "text", onClick: switchEditingUnits },
                    React__default['default'].createElement(Icon$G, { color: "textSubtle" })))))));
};

var Textfield = function (_a) {
    var label = _a.label, value = _a.value, placeholder = _a.placeholder, onUserInput = _a.onUserInput, inputProps = _a.inputProps, _b = _a.isWarning, isWarning = _b === void 0 ? false : _b;
    var handleOnChange = function (e) {
        onUserInput(e.target.value);
    };
    return (React__default['default'].createElement(StyledBalanceInput, { isWarning: isWarning },
        React__default['default'].createElement(Text, { fontSize: "14px" }, label),
        React__default['default'].createElement(StyledInput$1, __assign({ value: value, onChange: handleOnChange, placeholder: placeholder, textAlign: "left" }, inputProps))));
};

var Separator = styled__default['default'].div(templateObject_1$_ || (templateObject_1$_ = __makeTemplateObject(["\n  align-items: center;\n  color: ", ";\n  display: flex;\n  justify-content: center;\n  padding-left: 4px;\n  padding-right: 4px;\n\n  ", " {\n    padding-left: 8px;\n    padding-right: 8px;\n  }\n\n  ", " {\n    padding-left: 16px;\n    padding-right: 16px;\n  }\n"], ["\n  align-items: center;\n  color: ", ";\n  display: flex;\n  justify-content: center;\n  padding-left: 4px;\n  padding-right: 4px;\n\n  ", " {\n    padding-left: 8px;\n    padding-right: 8px;\n  }\n\n  ", " {\n    padding-left: 16px;\n    padding-right: 16px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.textDisabled;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
});
var StyledBreadcrumbs = styled__default['default'].ul(templateObject_2$s || (templateObject_2$s = __makeTemplateObject(["\n  align-items: center;\n  display: flex;\n  flex-wrap: wrap;\n  list-style-type: none;\n\n  a {\n    color: ", ";\n\n    &:hover {\n      color: ", ";\n    }\n  }\n\n  ", "\n"], ["\n  align-items: center;\n  display: flex;\n  flex-wrap: wrap;\n  list-style-type: none;\n\n  a {\n    color: ", ";\n\n    &:hover {\n      color: ", ";\n    }\n  }\n\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.primary;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.primaryBright;
}, styledSystem.space);
var insertSeparators = function (items, separator) {
    return items.reduce(function (accum, item, index) {
        if (index === 0) {
            return __spreadArray(__spreadArray([], accum), [item]);
        }
        return __spreadArray(__spreadArray([], accum), [
            React__default['default'].createElement(Separator, { "aria-hidden": true, key: "seperator-" + index }, separator),
            item,
        ]);
    }, []);
};
var DefaultSeparator = React__default['default'].createElement(Icon$1G, { color: "currentColor", width: "24px" });
var Breadcrumbs = function (_a) {
    var _b = _a.separator, separator = _b === void 0 ? DefaultSeparator : _b, children = _a.children;
    var validItems = React.Children.toArray(children).filter(function (child) { return React.isValidElement(child); });
    var items = insertSeparators(validItems, separator);
    return (React__default['default'].createElement(StyledBreadcrumbs, null, items.map(function (item, index) { return (React__default['default'].createElement("li", { key: "child-" + index }, item)); })));
};
var templateObject_1$_, templateObject_2$s;

var getBackgroundColor = function (_a) {
    var theme = _a.theme, variant = _a.variant;
    return theme.colors[variant === variants$6.SUBTLE ? "input" : "tertiary"];
};
var getBorderColor$1 = function (_a) {
    var theme = _a.theme, variant = _a.variant;
    return theme.colors[variant === variants$6.SUBTLE ? "inputSecondary" : "disabled"];
};
var StyledButtonMenu = styled__default['default'].div(templateObject_1$Z || (templateObject_1$Z = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: 16px;\n  display: ", ";\n  border: 1px solid ", ";\n  width: ", ";\n\n  & > button,\n  & > a {\n    flex: ", ";\n  }\n\n  & > button + button,\n  & > a + a {\n    margin-left: 2px; // To avoid focus shadow overlap\n  }\n\n  & > button,\n  & a {\n    box-shadow: none;\n  }\n\n  ", "\n  ", "\n"], ["\n  background-color: ", ";\n  border-radius: 16px;\n  display: ", ";\n  border: 1px solid ", ";\n  width: ", ";\n\n  & > button,\n  & > a {\n    flex: ", ";\n  }\n\n  & > button + button,\n  & > a + a {\n    margin-left: 2px; // To avoid focus shadow overlap\n  }\n\n  & > button,\n  & a {\n    box-shadow: none;\n  }\n\n  ",
    "\n  ", "\n"])), getBackgroundColor, function (_a) {
    var fullWidth = _a.fullWidth;
    return (fullWidth ? "flex" : "inline-flex");
}, getBorderColor$1, function (_a) {
    var fullWidth = _a.fullWidth;
    return (fullWidth ? "100%" : "auto");
}, function (_a) {
    var fullWidth = _a.fullWidth;
    return (fullWidth ? 1 : "auto");
}, function (_a) {
    var disabled = _a.disabled, theme = _a.theme, variant = _a.variant;
    if (disabled) {
        return "\n        opacity: 0.5;\n\n        & > button:disabled {\n          background-color: transparent;\n          color: " + (variant === variants$6.PRIMARY ? theme.colors.primary : theme.colors.textSubtle) + ";\n        }\n    ";
    }
    return "";
}, styledSystem.space);
var ButtonMenu$1 = function (_a) {
    var _b = _a.activeIndex, activeIndex = _b === void 0 ? 0 : _b, _c = _a.scale, scale = _c === void 0 ? scales$8.MD : _c, _d = _a.variant, variant = _d === void 0 ? variants$6.PRIMARY : _d, onItemClick = _a.onItemClick, disabled = _a.disabled, children = _a.children, _e = _a.fullWidth, fullWidth = _e === void 0 ? false : _e, props = __rest(_a, ["activeIndex", "scale", "variant", "onItemClick", "disabled", "children", "fullWidth"]);
    return (React__default['default'].createElement(StyledButtonMenu, __assign({ disabled: disabled, variant: variant, fullWidth: fullWidth }, props), React.Children.map(children, function (child, index) {
        return React.cloneElement(child, {
            isActive: activeIndex === index,
            onClick: onItemClick ? function () { return onItemClick(index); } : undefined,
            scale: scale,
            variant: variant,
            disabled: disabled,
        });
    })));
};
var templateObject_1$Z;

var InactiveButton = styled__default['default'](Button)(templateObject_1$Y || (templateObject_1$Y = __makeTemplateObject(["\n  background-color: transparent;\n  color: ", ";\n  &:hover:not(:disabled):not(:active) {\n    background-color: transparent;\n  }\n"], ["\n  background-color: transparent;\n  color: ", ";\n  &:hover:not(:disabled):not(:active) {\n    background-color: transparent;\n  }\n"])), function (_a) {
    var theme = _a.theme, variant = _a.variant;
    return (variant === variants$6.PRIMARY ? theme.colors.primary : theme.colors.textSubtle);
});
var ButtonMenuItem = function (_a) {
    var _b = _a.isActive, isActive = _b === void 0 ? false : _b, _c = _a.variant, variant = _c === void 0 ? variants$6.PRIMARY : _c, as = _a.as, props = __rest(_a, ["isActive", "variant", "as"]);
    if (!isActive) {
        return React__default['default'].createElement(InactiveButton, __assign({ forwardedAs: as, variant: variant }, props));
    }
    return React__default['default'].createElement(Button, __assign({ as: as, variant: variant }, props));
};
var templateObject_1$Y;

var PromotedGradient = styled.keyframes(templateObject_1$X || (templateObject_1$X = __makeTemplateObject(["\n  0% {\n    background-position: 50% 0%;\n  }\n  50% {\n    background-position: 50% 100%;\n  }\n  100% {\n    background-position: 50% 0%;\n  }\n"], ["\n  0% {\n    background-position: 50% 0%;\n  }\n  50% {\n    background-position: 50% 100%;\n  }\n  100% {\n    background-position: 50% 0%;\n  }\n"])));
/**
 * Priority: Warning --> Success --> Active
 */
var getBorderColor = function (_a) {
    var isActive = _a.isActive, isSuccess = _a.isSuccess, isWarning = _a.isWarning, borderBackground = _a.borderBackground, theme = _a.theme;
    if (borderBackground) {
        return borderBackground;
    }
    if (isWarning) {
        return theme.colors.warning;
    }
    if (isSuccess) {
        return theme.colors.success;
    }
    if (isActive) {
        return "linear-gradient(180deg, " + theme.colors.primaryBright + ", " + theme.colors.secondary + ")";
    }
    return theme.colors.cardBorder;
};
var StyledCard = styled__default['default'].div(templateObject_3$c || (templateObject_3$c = __makeTemplateObject(["\n  background: ", ";\n  border-radius: ", ";\n  color: ", ";\n  overflow: hidden;\n  position: relative;\n\n  ", "\n\n  padding: 1px 1px 3px 1px;\n\n  ", "\n"], ["\n  background: ", ";\n  border-radius: ", ";\n  color: ", ";\n  overflow: hidden;\n  position: relative;\n\n  ",
    "\n\n  padding: 1px 1px 3px 1px;\n\n  ", "\n"])), getBorderColor, function (_a) {
    var theme = _a.theme;
    return theme.radii.card;
}, function (_a) {
    var theme = _a.theme, isDisabled = _a.isDisabled;
    return theme.colors[isDisabled ? "textDisabled" : "text"];
}, function (_a) {
    var isActive = _a.isActive;
    return isActive && styled.css(templateObject_2$r || (templateObject_2$r = __makeTemplateObject(["\n      animation: ", " 3s ease infinite;\n      background-size: 400% 400%;\n    "], ["\n      animation: ", " 3s ease infinite;\n      background-size: 400% 400%;\n    "])), PromotedGradient);
}, styledSystem.space);
var StyledCardInner = styled__default['default'](Box)(templateObject_4$7 || (templateObject_4$7 = __makeTemplateObject(["\n  width: 100%;\n  height: 100%;\n  overflow: ", ";\n  background: ", ";\n  border-radius: ", ";\n"], ["\n  width: 100%;\n  height: 100%;\n  overflow: ", ";\n  background: ", ";\n  border-radius: ", ";\n"])), function (_a) {
    var hasCustomBorder = _a.hasCustomBorder;
    return (hasCustomBorder ? "initial" : "inherit");
}, function (_a) {
    var theme = _a.theme, background = _a.background;
    return background !== null && background !== void 0 ? background : theme.card.background;
}, function (_a) {
    var theme = _a.theme;
    return theme.radii.card;
});
StyledCard.defaultProps = {
    isActive: false,
    isSuccess: false,
    isWarning: false,
    isDisabled: false,
};
var templateObject_1$X, templateObject_2$r, templateObject_3$c, templateObject_4$7;

var Card = function (_a) {
    var ribbon = _a.ribbon, children = _a.children, background = _a.background, props = __rest(_a, ["ribbon", "children", "background"]);
    return (React__default['default'].createElement(StyledCard, __assign({}, props),
        React__default['default'].createElement(StyledCardInner, { background: background, hasCustomBorder: !!props.borderBackground },
            ribbon,
            children)));
};

var CardBody = styled__default['default'].div(templateObject_1$W || (templateObject_1$W = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), styledSystem.space);
CardBody.defaultProps = {
    p: "24px",
};
var templateObject_1$W;

var CardHeader = styled__default['default'].div(templateObject_1$V || (templateObject_1$V = __makeTemplateObject(["\n  background: ", ";\n  border-radius: ", ";\n  ", "\n"], ["\n  background: ", ";\n  border-radius: ", ";\n  ", "\n"])), function (_a) {
    var theme = _a.theme, _b = _a.variant, variant = _b === void 0 ? "default" : _b;
    return theme.card.cardHeaderBackground[variant];
}, function (_a) {
    var theme = _a.theme;
    return theme.radii.card + " " + theme.radii.card + " 0 0";
}, styledSystem.space);
CardHeader.defaultProps = {
    p: "24px",
};
var templateObject_1$V;

var CardFooter = styled__default['default'].div(templateObject_1$U || (templateObject_1$U = __makeTemplateObject(["\n  border-top: 1px solid ", ";\n  ", "\n"], ["\n  border-top: 1px solid ", ";\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.cardBorder;
}, styledSystem.space);
CardFooter.defaultProps = {
    p: "24px",
};
var templateObject_1$U;

var StyledCardRibbon = styled__default['default'].div(templateObject_1$T || (templateObject_1$T = __makeTemplateObject(["\n  z-index: 10;\n  background-color: ", ";\n  color: white;\n  margin: 0;\n  padding: 0;\n  padding: 8px 0;\n  position: absolute;\n  right: ", ";\n  top: 0;\n  text-align: center;\n  transform: translateX(30%) translateY(0%) rotate(45deg);\n  transform: ", ";\n  transform-origin: top left;\n  width: 96px;\n\n  &:before,\n  &:after {\n    background-color: ", ";\n    content: \"\";\n    height: 100%;\n    margin: 0 -1px; /* Removes tiny gap */\n    position: absolute;\n    top: 0;\n    width: 100%;\n  }\n\n  &:before {\n    right: 100%;\n  }\n\n  &:after {\n    left: 100%;\n  }\n\n  & > div {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    width: 96px;\n  }\n"], ["\n  z-index: 10;\n  background-color: ", ";\n  color: white;\n  margin: 0;\n  padding: 0;\n  padding: 8px 0;\n  position: absolute;\n  right: ", ";\n  top: 0;\n  text-align: center;\n  transform: translateX(30%) translateY(0%) rotate(45deg);\n  transform: ",
    ";\n  transform-origin: top left;\n  width: 96px;\n\n  &:before,\n  &:after {\n    background-color: ", ";\n    content: \"\";\n    height: 100%;\n    margin: 0 -1px; /* Removes tiny gap */\n    position: absolute;\n    top: 0;\n    width: 100%;\n  }\n\n  &:before {\n    right: 100%;\n  }\n\n  &:after {\n    left: 100%;\n  }\n\n  & > div {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    width: 96px;\n  }\n"])), function (_a) {
    var _b = _a.variantColor, variantColor = _b === void 0 ? "secondary" : _b, theme = _a.theme;
    return theme.colors[variantColor];
}, function (_a) {
    var ribbonPosition = _a.ribbonPosition;
    return (ribbonPosition === "right" ? 0 : "auto");
}, function (_a) {
    var ribbonPosition = _a.ribbonPosition;
    return ribbonPosition === "right"
        ? "translateX(30%) translateY(0%) rotate(45deg)"
        : "translateX(0%) translateY(200%) rotate(-45deg)";
}, function (_a) {
    var _b = _a.variantColor, variantColor = _b === void 0 ? "secondary" : _b, theme = _a.theme;
    return theme.colors[variantColor];
});
var CardRibbon = function (_a) {
    var variantColor = _a.variantColor, text = _a.text, ribbonPosition = _a.ribbonPosition, props = __rest(_a, ["variantColor", "text", "ribbonPosition"]);
    return (React__default['default'].createElement(StyledCardRibbon, __assign({ variantColor: variantColor, ribbonPosition: ribbonPosition }, props),
        React__default['default'].createElement("div", { title: text }, text)));
};
CardRibbon.defaultProps = {
    ribbonPosition: "right",
};
var templateObject_1$T;

var scales$6 = {
    SM: "sm",
    MD: "md",
};

var getScale$3 = function (_a) {
    var scale = _a.scale;
    switch (scale) {
        case scales$6.SM:
            return "24px";
        case scales$6.MD:
        default:
            return "32px";
    }
};
var Checkbox = styled__default['default'].input.attrs({ type: "checkbox" })(templateObject_1$S || (templateObject_1$S = __makeTemplateObject(["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ", ";\n  width: ", ";\n  vertical-align: middle;\n  transition: background-color 0.2s ease-in-out;\n  border: 0;\n  border-radius: 8px;\n  background-color: ", ";\n  box-shadow: ", ";\n\n  &:after {\n    content: \"\";\n    position: absolute;\n    border-bottom: 2px solid;\n    border-left: 2px solid;\n    border-color: transparent;\n    top: 30%;\n    left: 0;\n    right: 0;\n    width: 50%;\n    height: 25%;\n    margin: auto;\n    transform: rotate(-50deg);\n    transition: border-color 0.2s ease-in-out;\n  }\n\n  &:hover:not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: ", ";\n  }\n\n  &:checked {\n    background-color: ", ";\n    &:after {\n      border-color: white;\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n"], ["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ", ";\n  width: ", ";\n  vertical-align: middle;\n  transition: background-color 0.2s ease-in-out;\n  border: 0;\n  border-radius: 8px;\n  background-color: ", ";\n  box-shadow: ", ";\n\n  &:after {\n    content: \"\";\n    position: absolute;\n    border-bottom: 2px solid;\n    border-left: 2px solid;\n    border-color: transparent;\n    top: 30%;\n    left: 0;\n    right: 0;\n    width: 50%;\n    height: 25%;\n    margin: auto;\n    transform: rotate(-50deg);\n    transition: border-color 0.2s ease-in-out;\n  }\n\n  &:hover:not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: ", ";\n  }\n\n  &:checked {\n    background-color: ", ";\n    &:after {\n      border-color: white;\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n"])), getScale$3, getScale$3, function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.inset;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.success;
});
Checkbox.defaultProps = {
    scale: scales$6.MD,
};
var templateObject_1$S;

var getLeft = function (_a) {
    var position = _a.position;
    if (position === "top-right") {
        return "100%";
    }
    return "50%";
};
var getBottom = function (_a) {
    var position = _a.position;
    if (position === "top" || position === "top-right") {
        return "100%";
    }
    return "auto";
};
var DropdownContent = styled__default['default'].div(templateObject_1$R || (templateObject_1$R = __makeTemplateObject(["\n  width: max-content;\n  display: none;\n  flex-direction: column;\n  position: absolute;\n  transform: translate(-50%, 0);\n  left: ", ";\n  bottom: ", ";\n  background-color: ", ";\n  box-shadow: ", ";\n  padding: 16px;\n  max-height: 400px;\n  overflow-y: auto;\n  z-index: ", ";\n  border-radius: ", ";\n"], ["\n  width: max-content;\n  display: none;\n  flex-direction: column;\n  position: absolute;\n  transform: translate(-50%, 0);\n  left: ", ";\n  bottom: ", ";\n  background-color: ", ";\n  box-shadow: ", ";\n  padding: 16px;\n  max-height: 400px;\n  overflow-y: auto;\n  z-index: ", ";\n  border-radius: ", ";\n"])), getLeft, getBottom, function (_a) {
    var theme = _a.theme;
    return theme.nav.background;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.level1;
}, function (_a) {
    var theme = _a.theme;
    return theme.zIndices.dropdown;
}, function (_a) {
    var theme = _a.theme;
    return theme.radii.small;
});
var Container$4 = styled__default['default'].div(templateObject_2$q || (templateObject_2$q = __makeTemplateObject(["\n  position: relative;\n  &:hover ", ", &:focus-within ", " {\n    display: flex;\n  }\n"], ["\n  position: relative;\n  &:hover ", ", &:focus-within ", " {\n    display: flex;\n  }\n"])), DropdownContent, DropdownContent);
var Dropdown = function (_a) {
    var target = _a.target, _b = _a.position, position = _b === void 0 ? "bottom" : _b, children = _a.children;
    return (React__default['default'].createElement(Container$4, null,
        target,
        React__default['default'].createElement(DropdownContent, { position: position }, children)));
};
Dropdown.defaultProps = {
    position: "bottom",
};
var templateObject_1$R, templateObject_2$q;

var bunnyFall = styled.keyframes(templateObject_1$Q || (templateObject_1$Q = __makeTemplateObject(["\n  0% {\n    opacity: 1;\n    transform: translate(0, -100%) rotateZ(0deg);\n  }\n\n  75% {\n    opacity: 1;\n    transform: translate(100px, 75vh) rotateZ(270deg);\n  }\n\n  100% {\n    opacity: 0;\n    transform: translate(150px, 100vh) rotateZ(360deg);\n  }\n"], ["\n  0% {\n    opacity: 1;\n    transform: translate(0, -100%) rotateZ(0deg);\n  }\n\n  75% {\n    opacity: 1;\n    transform: translate(100px, 75vh) rotateZ(270deg);\n  }\n\n  100% {\n    opacity: 0;\n    transform: translate(150px, 100vh) rotateZ(360deg);\n  }\n"])));
var Bunny = styled__default['default'].div(templateObject_2$p || (templateObject_2$p = __makeTemplateObject(["\n  display: inline-flex;\n  position: fixed;\n  top: 0;\n  left: ", ";\n  transform: translate3d(0, -100%, 0);\n  user-select: none;\n  pointer-events: none;\n  z-index: 99999;\n\n  animation-name: ", ";\n  animation-duration: ", ";\n  animation-timing-function: linear;\n  animation-iteration-count: ", ";\n  animation-play-state: running;\n\n  &:nth-child(5n + 5) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(3n + 2) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(2n + 5) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(3n + 10) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(7n + 2) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(4n + 5) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(3n + 7) {\n    animation-delay: ", ";\n  }\n"], ["\n  display: inline-flex;\n  position: fixed;\n  top: 0;\n  left: ", ";\n  transform: translate3d(0, -100%, 0);\n  user-select: none;\n  pointer-events: none;\n  z-index: 99999;\n\n  animation-name: ", ";\n  animation-duration: ", ";\n  animation-timing-function: linear;\n  animation-iteration-count: ", ";\n  animation-play-state: running;\n\n  &:nth-child(5n + 5) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(3n + 2) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(2n + 5) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(3n + 10) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(7n + 2) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(4n + 5) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(3n + 7) {\n    animation-delay: ", ";\n  }\n"])), function (_a) {
    var position = _a.position;
    return position + "vw";
}, bunnyFall, function (_a) {
    var duration = _a.duration;
    return duration + "s";
}, function (_a) {
    var iterations = _a.iterations;
    return (Number.isFinite(iterations) ? String(iterations) : "infinite");
}, function (_a) {
    var duration = _a.duration;
    return (duration / 10) * 1.3 + "s";
}, function (_a) {
    var duration = _a.duration;
    return (duration / 10) * 1.5 + "s";
}, function (_a) {
    var duration = _a.duration;
    return (duration / 10) * 1.7 + "s";
}, function (_a) {
    var duration = _a.duration;
    return (duration / 10) * 2.7 + "s";
}, function (_a) {
    var duration = _a.duration;
    return (duration / 10) * 3.5 + "s";
}, function (_a) {
    var duration = _a.duration;
    return (duration / 10) * 5.5 + "s";
}, function (_a) {
    var duration = _a.duration;
    return (duration / 10) * 8 + "s";
});
var FallingBunnies = function (_a) {
    var _b = _a.count, count = _b === void 0 ? 30 : _b, _c = _a.size, size = _c === void 0 ? 32 : _c, _d = _a.iterations, iterations = _d === void 0 ? Infinity : _d, _e = _a.duration, duration = _e === void 0 ? 10 : _e;
    var bunnies = __spreadArray([], Array(count)).map(function (_, index) { return (React__default['default'].createElement(Bunny, { key: String(index), position: Math.random() * 100, iterations: iterations, duration: duration },
        React__default['default'].createElement(Icon$1l, { width: size, height: size }))); });
    return React__default['default'].createElement("div", null, bunnies);
};
var templateObject_1$Q, templateObject_2$p;

var tags = {
    H1: "h1",
    H2: "h2",
    H3: "h3",
    H4: "h4",
    H5: "h5",
    H6: "h6",
};
var scales$5 = {
    MD: "md",
    LG: "lg",
    XL: "xl",
    XXL: "xxl",
};

var _a$3;
var style = (_a$3 = {},
    _a$3[scales$5.MD] = {
        fontSize: "20px",
        fontSizeLg: "20px",
    },
    _a$3[scales$5.LG] = {
        fontSize: "24px",
        fontSizeLg: "24px",
    },
    _a$3[scales$5.XL] = {
        fontSize: "32px",
        fontSizeLg: "40px",
    },
    _a$3[scales$5.XXL] = {
        fontSize: "48px",
        fontSizeLg: "64px",
    },
    _a$3);
var Heading = styled__default['default'](Text).attrs({ bold: true })(templateObject_1$P || (templateObject_1$P = __makeTemplateObject(["\n  font-size: ", ";\n  font-weight: 600;\n  line-height: 1.1;\n\n  ", " {\n    font-size: ", ";\n  }\n"], ["\n  font-size: ", ";\n  font-weight: 600;\n  line-height: 1.1;\n\n  ", " {\n    font-size: ", ";\n  }\n"])), function (_a) {
    var scale = _a.scale;
    return style[scale || scales$5.MD].fontSize;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.lg;
}, function (_a) {
    var scale = _a.scale;
    return style[scale || scales$5.MD].fontSizeLg;
});
Heading.defaultProps = {
    as: tags.H2,
};
var templateObject_1$P;

var observerOptions = {
    root: null,
    rootMargin: "200px",
    threshold: 0,
};

var StyledWrapper = styled__default['default'].div(templateObject_1$O || (templateObject_1$O = __makeTemplateObject(["\n  max-height: ", "px;\n  max-width: ", "px;\n  position: relative;\n  width: 100%;\n\n  &:after {\n    content: \"\";\n    display: block;\n    padding-top: ", "%;\n  }\n\n  ", "\n"], ["\n  max-height: ", "px;\n  max-width: ", "px;\n  position: relative;\n  width: 100%;\n\n  &:after {\n    content: \"\";\n    display: block;\n    padding-top: ", "%;\n  }\n\n  ", "\n"])), function (_a) {
    var $height = _a.$height;
    return $height;
}, function (_a) {
    var $width = _a.$width;
    return $width;
}, function (_a) {
    var $width = _a.$width, $height = _a.$height;
    return ($height / $width) * 100;
}, styledSystem.space);
var Wrapper$3 = React.forwardRef(function (_a, ref) {
    var width = _a.width, height = _a.height, props = __rest(_a, ["width", "height"]);
    return React__default['default'].createElement(StyledWrapper, __assign({ ref: ref, "$width": width, "$height": height }, props));
});
var templateObject_1$O;

var Placeholder = styled__default['default'].div(templateObject_1$N || (templateObject_1$N = __makeTemplateObject(["\n  height: 100%;\n  left: 0;\n  position: absolute;\n  top: 0;\n  width: 100%;\n"], ["\n  height: 100%;\n  left: 0;\n  position: absolute;\n  top: 0;\n  width: 100%;\n"])));
var templateObject_1$N;

var StyledBackgroundImage = styled__default['default'](Wrapper$3)(templateObject_1$M || (templateObject_1$M = __makeTemplateObject(["\n  background-repeat: no-repeat;\n  background-size: contain;\n"], ["\n  background-repeat: no-repeat;\n  background-size: contain;\n"])));
var BackgroundImage = function (_a) {
    var loadingPlaceholder = _a.loadingPlaceholder, src = _a.src, width = _a.width, height = _a.height, props = __rest(_a, ["loadingPlaceholder", "src", "width", "height"]);
    var _b = React.useState(false), isLoaded = _b[0], setIsLoaded = _b[1];
    var ref = React.useRef(null);
    var placeholder = loadingPlaceholder || React__default['default'].createElement(Placeholder, null);
    React.useEffect(function () {
        var observer;
        if (ref.current) {
            var div_1 = ref.current;
            observer = new IntersectionObserver(function (entries) {
                entries.forEach(function (entry) {
                    var isIntersecting = entry.isIntersecting;
                    if (isIntersecting) {
                        if (src) {
                            // Load the image via an image element so we can show a placeholder until the image is downloaded
                            var img = document.createElement("img");
                            img.onload = function () {
                                div_1.style.backgroundImage = "url(\"" + src + "\")";
                                setIsLoaded(true);
                            };
                            img.src = src;
                        }
                        observer.disconnect();
                    }
                });
            }, observerOptions);
            observer.observe(div_1);
        }
        return function () {
            if (observer) {
                observer.disconnect();
            }
        };
    }, [src, setIsLoaded]);
    return (React__default['default'].createElement(StyledBackgroundImage, __assign({ ref: ref, width: width, height: height }, props), !isLoaded && placeholder));
};
var templateObject_1$M;

var StyledImage = styled__default['default'].img(templateObject_1$L || (templateObject_1$L = __makeTemplateObject(["\n  height: 100%;\n  left: 0;\n  position: absolute;\n  top: 0;\n  width: 100%;\n"], ["\n  height: 100%;\n  left: 0;\n  position: absolute;\n  top: 0;\n  width: 100%;\n"])));
var Image = function (_a) {
    var src = _a.src, alt = _a.alt, width = _a.width, height = _a.height, props = __rest(_a, ["src", "alt", "width", "height"]);
    var imgRef = React.useRef(null);
    var _b = React.useState(false), isLoaded = _b[0], setIsLoaded = _b[1];
    React.useEffect(function () {
        var observer;
        if (imgRef.current) {
            observer = new IntersectionObserver(function (entries) {
                entries.forEach(function (entry) {
                    var isIntersecting = entry.isIntersecting;
                    if (isIntersecting) {
                        setIsLoaded(true);
                        observer.disconnect();
                    }
                });
            }, observerOptions);
            observer.observe(imgRef.current);
        }
        return function () {
            if (observer) {
                observer.disconnect();
            }
        };
    }, [src]);
    return (React__default['default'].createElement(Wrapper$3, __assign({ ref: imgRef, height: height, width: width }, props), isLoaded ? React__default['default'].createElement(StyledImage, { src: src, alt: alt }) : React__default['default'].createElement(Placeholder, null)));
};
var templateObject_1$L;

var TokenImage = styled__default['default'](Image)(templateObject_1$K || (templateObject_1$K = __makeTemplateObject(["\n  &:before {\n    border-radius: 50%;\n    border: 1px solid rgba(0, 0, 0, 0.25);\n    content: \"\";\n    height: 100%;\n    left: 0;\n    position: absolute;\n    top: 0;\n    width: 100%;\n    z-index: 7;\n  }\n"], ["\n  &:before {\n    border-radius: 50%;\n    border: 1px solid rgba(0, 0, 0, 0.25);\n    content: \"\";\n    height: 100%;\n    left: 0;\n    position: absolute;\n    top: 0;\n    width: 100%;\n    z-index: 7;\n  }\n"])));
var templateObject_1$K;

var variants$4 = {
    DEFAULT: "default",
    INVERTED: "inverted",
};

var _a$2, _b$2;
var StyledPrimaryImage = styled__default['default'](TokenImage)(templateObject_1$J || (templateObject_1$J = __makeTemplateObject(["\n  position: absolute;\n  width: ", "; // 92, 82 are arbitrary numbers to fit the variant\n\n  ", "\n"], ["\n  position: absolute;\n  width: ",
    "; // 92, 82 are arbitrary numbers to fit the variant\n\n  ",
    "\n"])), function (_a) {
    var variant = _a.variant;
    return variant === variants$4.DEFAULT ? "92%" : "82%";
}, styledSystem.variant({
    variants: (_a$2 = {},
        _a$2[variants$4.DEFAULT] = {
            bottom: "auto",
            left: 0,
            right: "auto",
            top: 0,
            zIndex: 5,
        },
        _a$2[variants$4.INVERTED] = {
            bottom: 0,
            left: "auto",
            right: 0,
            top: "auto",
            zIndex: 6,
        },
        _a$2),
}));
var StyledSecondaryImage = styled__default['default'](TokenImage)(templateObject_2$o || (templateObject_2$o = __makeTemplateObject(["\n  position: absolute;\n  width: 50%;\n\n  ", "\n"], ["\n  position: absolute;\n  width: 50%;\n\n  ",
    "\n"])), styledSystem.variant({
    variants: (_b$2 = {},
        _b$2[variants$4.DEFAULT] = {
            bottom: 0,
            left: "auto",
            right: 0,
            top: "auto",
            zIndex: 6,
        },
        _b$2[variants$4.INVERTED] = {
            bottom: "auto",
            left: 0,
            right: "auto",
            top: 0,
            zIndex: 5,
        },
        _b$2),
}));
var templateObject_1$J, templateObject_2$o;

var TokenPairImage = function (_a) {
    var primarySrc = _a.primarySrc, secondarySrc = _a.secondarySrc, width = _a.width, height = _a.height, _b = _a.variant, variant = _b === void 0 ? variants$4.DEFAULT : _b, _c = _a.primaryImageProps, primaryImageProps = _c === void 0 ? {} : _c, _d = _a.secondaryImageProps, secondaryImageProps = _d === void 0 ? {} : _d, props = __rest(_a, ["primarySrc", "secondarySrc", "width", "height", "variant", "primaryImageProps", "secondaryImageProps"]);
    var secondaryImageSize = Math.floor(width / 2);
    return (React__default['default'].createElement(Wrapper$3, __assign({ position: "relative", width: width, height: height }, props),
        React__default['default'].createElement(StyledPrimaryImage, __assign({ variant: variant, src: primarySrc, width: width, height: height }, primaryImageProps)),
        React__default['default'].createElement(StyledSecondaryImage, __assign({ variant: variant, src: secondarySrc, width: secondaryImageSize, height: secondaryImageSize }, secondaryImageProps))));
};

var StyledProfileAvatar = styled__default['default'](BackgroundImage)(templateObject_1$I || (templateObject_1$I = __makeTemplateObject(["\n  border-radius: 50%;\n"], ["\n  border-radius: 50%;\n"])));
var StyledBunnyPlaceholder = styled__default['default'](Icon$1R)(templateObject_2$n || (templateObject_2$n = __makeTemplateObject(["\n  height: 100%;\n  width: 100%;\n"], ["\n  height: 100%;\n  width: 100%;\n"])));
var ProfileAvatar = function (props) { return (React__default['default'].createElement(StyledProfileAvatar, __assign({ loadingPlaceholder: React__default['default'].createElement(StyledBunnyPlaceholder, null) }, props))); };
var templateObject_1$I, templateObject_2$n;

var getPadding$1 = function (scale, hasIcon) {
    if (!hasIcon) {
        return "16px";
    }
    switch (scale) {
        case scales$7.SM:
            return "32px";
        case scales$7.LG:
            return "56px";
        case scales$7.MD:
        default:
            return "48px";
    }
};
var StyledInputGroup = styled__default['default'](Box)(templateObject_1$H || (templateObject_1$H = __makeTemplateObject(["\n  ", " {\n    padding-left: ", ";\n    padding-right: ", ";\n  }\n"], ["\n  ", " {\n    padding-left: ", ";\n    padding-right: ", ";\n  }\n"])), Input$1, function (_a) {
    var hasStartIcon = _a.hasStartIcon, scale = _a.scale;
    return getPadding$1(scale, hasStartIcon);
}, function (_a) {
    var hasEndIcon = _a.hasEndIcon, scale = _a.scale;
    return getPadding$1(scale, hasEndIcon);
});
var InputIcon = styled__default['default'].div(templateObject_2$m || (templateObject_2$m = __makeTemplateObject(["\n  align-items: center;\n  display: flex;\n  height: 100%;\n  position: absolute;\n  top: 0;\n\n  ", "\n"], ["\n  align-items: center;\n  display: flex;\n  height: 100%;\n  position: absolute;\n  top: 0;\n\n  ",
    "\n"])), function (_a) {
    var isEndIcon = _a.isEndIcon, scale = _a.scale;
    return isEndIcon
        ? "\n    right: " + (scale === scales$7.SM ? "8px" : "16px") + ";\n  "
        : "\n    left: " + (scale === scales$7.SM ? "8px" : "16px") + ";\n  ";
});
var InputGroup = function (_a) {
    var _b = _a.scale, scale = _b === void 0 ? scales$7.MD : _b, startIcon = _a.startIcon, endIcon = _a.endIcon, children = _a.children, props = __rest(_a, ["scale", "startIcon", "endIcon", "children"]);
    return (React__default['default'].createElement(StyledInputGroup, __assign({ scale: scale, width: "100%", position: "relative", hasStartIcon: !!startIcon, hasEndIcon: !!endIcon }, props),
        startIcon && React__default['default'].createElement(InputIcon, { scale: scale }, startIcon),
        React.cloneElement(children, { scale: scale }),
        endIcon && (React__default['default'].createElement(InputIcon, { scale: scale, isEndIcon: true }, endIcon))));
};
var templateObject_1$H, templateObject_2$m;

var GridLayout$1 = styled__default['default'](Grid)(templateObject_1$G || (templateObject_1$G = __makeTemplateObject(["\n  grid-template-columns: repeat(6, 1fr);\n  grid-gap: 16px;\n  ", " {\n    grid-template-columns: repeat(8, 1fr);\n    grid-gap: 24px;\n  }\n  ", " {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 24px;\n  }\n  ", " {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 32px;\n  }\n"], ["\n  grid-template-columns: repeat(6, 1fr);\n  grid-gap: 16px;\n  ", " {\n    grid-template-columns: repeat(8, 1fr);\n    grid-gap: 24px;\n  }\n  ", " {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 24px;\n  }\n  ", " {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 32px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.lg;
});
var templateObject_1$G;

var GridLayout = styled__default['default'](GridLayout$1)(templateObject_1$F || (templateObject_1$F = __makeTemplateObject(["\n  & > div {\n    grid-column: span 6;\n    ", " {\n      grid-column: span 4;\n    }\n  }\n"], ["\n  & > div {\n    grid-column: span 6;\n    ", " {\n      grid-column: span 4;\n    }\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var templateObject_1$F;

var StyledLink$1 = styled__default['default'](Text)(templateObject_1$E || (templateObject_1$E = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  width: fit-content;\n  &:hover {\n    text-decoration: underline;\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  width: fit-content;\n  &:hover {\n    text-decoration: underline;\n  }\n"])));
var Link = function (_a) {
    var external = _a.external, props = __rest(_a, ["external"]);
    var internalProps = external ? getExternalLinkProps() : {};
    return React__default['default'].createElement(StyledLink$1, __assign({ as: "a", bold: true }, internalProps, props));
};
Link.defaultProps = {
    color: "primary",
};
var templateObject_1$E;

var LinkExternal = function (_a) {
    var children = _a.children, props = __rest(_a, ["children"]);
    return (React__default['default'].createElement(Link, __assign({ external: true }, props),
        children,
        React__default['default'].createElement(Icon$15, { color: props.color ? props.color : "primary", ml: "4px" })));
};

var variants$3 = {
    warning: {
        background: "#FFB23719",
        borderColor: "warning",
    },
    danger: {
        background: "#ED4B9E19",
        borderColor: "failure",
    },
};

var Icons$2 = {
    warning: Icon$n,
    danger: Icon$29,
};
var MessageContainer = styled__default['default'].div(templateObject_1$D || (templateObject_1$D = __makeTemplateObject(["\n  display: flex;\n  background-color: gray;\n  padding: 16px;\n  border-radius: 16px;\n  border: solid 1px;\n\n  ", "\n  ", "\n"], ["\n  display: flex;\n  background-color: gray;\n  padding: 16px;\n  border-radius: 16px;\n  border: solid 1px;\n\n  ", "\n  ",
    "\n"])), styledSystem.space, styledSystem.variant({
    variants: variants$3,
}));
var Message = function (_a) {
    var children = _a.children, variant = _a.variant, icon = _a.icon, props = __rest(_a, ["children", "variant", "icon"]);
    var Icon = Icons$2[variant];
    return (React__default['default'].createElement(MessageContainer, __assign({ variant: variant }, props),
        React__default['default'].createElement(Box, { mr: "12px" }, icon !== null && icon !== void 0 ? icon : React__default['default'].createElement(Icon, { color: variants$3[variant].borderColor, width: "24px" })),
        children));
};
var templateObject_1$D;

var NotificationDotRoot = styled__default['default'].span(templateObject_1$C || (templateObject_1$C = __makeTemplateObject(["\n  display: inline-flex;\n  position: relative;\n"], ["\n  display: inline-flex;\n  position: relative;\n"])));
var Dot = styled__default['default'].span(templateObject_2$l || (templateObject_2$l = __makeTemplateObject(["\n  display: ", ";\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 10px;\n  height: 10px;\n  pointer-events: none;\n  border: 2px solid ", ";\n  border-radius: 50%;\n  background-color: ", ";\n"], ["\n  display: ", ";\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 10px;\n  height: 10px;\n  pointer-events: none;\n  border: 2px solid ", ";\n  border-radius: 50%;\n  background-color: ", ";\n"])), function (_a) {
    var show = _a.show;
    return (show ? "inline-flex" : "none");
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.invertedContrast;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.failure;
});
var NotificationDot = function (_a) {
    var _b = _a.show, show = _b === void 0 ? false : _b, children = _a.children, props = __rest(_a, ["show", "children"]);
    return (React__default['default'].createElement(NotificationDotRoot, null,
        React.Children.map(children, function (child) { return React.cloneElement(child, props); }),
        React__default['default'].createElement(Dot, { show: show })));
};
var templateObject_1$C, templateObject_2$l;

var Overlay = styled__default['default'].div.attrs({ role: "presentation" })(templateObject_1$B || (templateObject_1$B = __makeTemplateObject(["\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n  background-color: ", ";\n  transition: opacity 0.4s;\n  opacity: ", ";\n  z-index: ", ";\n  pointer-events: ", ";\n"], ["\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n  background-color: ", ";\n  transition: opacity 0.4s;\n  opacity: ", ";\n  z-index: ", ";\n  pointer-events: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.overlay;
}, function (_a) {
    var show = _a.show;
    return (show ? 0.6 : 0);
}, function (_a) {
    var zIndex = _a.zIndex;
    return zIndex;
}, function (_a) {
    var show = _a.show;
    return (show ? "initial" : "none");
});
Overlay.defaultProps = {
    show: false,
    zIndex: 10,
};
var templateObject_1$B;

var scales$4 = {
    SM: "sm",
    MD: "md",
    LG: "lg",
};

var scaleKeyValues$1 = {
    sm: {
        pancakeSize: "14px",
        travelDistance: "14px",
        toggleHeight: "20px",
        toggleWidth: "36px",
        pancakeThickness: "1px",
        pancakeTwoOffset: "0px",
        pancakeThreeOffset: "-3px",
        butterTop: "3px",
        butterLeft: "10px",
        butterWidth: "6px",
        butterHeight: "5px",
        butterThickness: "0.5px",
        butterRadius: "2px",
        butterSmearOneTop: "10px",
        butterSmearOneLeft: "2.5px",
        butterSmearTwoTop: "11px",
        butterSmearTwoRight: "2.5px", // these values adjust the position of it
    },
    md: {
        pancakeSize: "24px",
        travelDistance: "24px",
        toggleHeight: "32px",
        toggleWidth: "56px",
        pancakeThickness: "1.5px",
        pancakeTwoOffset: "-1px",
        pancakeThreeOffset: "-6px",
        butterTop: "5px",
        butterLeft: "13px",
        butterWidth: "10px",
        butterHeight: "8px",
        butterThickness: "0.75px",
        butterRadius: "3px",
        butterSmearOneTop: "15px",
        butterSmearOneLeft: "3.75px",
        butterSmearTwoTop: "16px",
        butterSmearTwoRight: "3.75px",
    },
    lg: {
        pancakeSize: "31px",
        travelDistance: "31px",
        toggleHeight: "40px",
        toggleWidth: "72px",
        pancakeThickness: "2px",
        pancakeTwoOffset: "-3px",
        pancakeThreeOffset: "-8px",
        butterTop: "3px",
        butterLeft: "16px",
        butterWidth: "12px",
        butterHeight: "11px",
        butterThickness: "1px",
        butterRadius: "4px",
        butterSmearOneTop: "20px",
        butterSmearOneLeft: "5px",
        butterSmearTwoTop: "22px",
        butterSmearTwoRight: "5px",
    },
};
var getScale$2 = function (property) {
    return function (_a) {
        var _b = _a.scale, scale = _b === void 0 ? scales$4.LG : _b;
        return scaleKeyValues$1[scale][property];
    };
};
var PancakeStack = styled__default['default'].div(templateObject_1$A || (templateObject_1$A = __makeTemplateObject(["\n  position: relative;\n  display: inline-block;\n\n  &:label:before {\n    content: none;\n  }\n\n  .pancakes {\n    position: absolute;\n    transition: 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n  }\n\n  .pancake {\n    background: #e27c31;\n    border-radius: 50%;\n    width: ", ";\n    height: ", ";\n    position: absolute;\n    transition: 0.4s ease;\n    top: 2px;\n    left: 4px;\n    box-shadow: 0 ", " 0 ", " #fbbe7c;\n  }\n\n  .pancake:nth-child(1) {\n    background: ", ";\n    box-shadow: 0 ", " 0 ", "\n      ", ";\n  }\n\n  .pancake:nth-child(2) {\n    left: 0;\n    top: ", ";\n    transform: scale(0);\n    transition: 0.2s ease 0.2s;\n  }\n\n  .pancake:nth-child(3) {\n    top: ", ";\n    transform: scale(0);\n    transition: 0.2s ease 0.2s;\n  }\n\n  .pancake:nth-child(3):before,\n  .pancake:nth-child(3):after {\n    content: \"\";\n    position: absolute;\n    background: #ef8927;\n    border-radius: 20px;\n    width: 50%;\n    height: 20%;\n  }\n\n  .pancake:nth-child(3):before {\n    top: ", ";\n    left: ", ";\n  }\n\n  .pancake:nth-child(3):after {\n    top: ", ";\n    right: ", ";\n  }\n\n  .butter {\n    width: ", ";\n    height: ", ";\n    background: #fbdb60;\n    top: ", ";\n    left: ", ";\n    position: absolute;\n    border-radius: ", ";\n    box-shadow: 0 ", " 0 ", " #d67823;\n    transform: scale(0);\n    transition: 0.2s ease;\n  }\n"], ["\n  position: relative;\n  display: inline-block;\n\n  &:label:before {\n    content: none;\n  }\n\n  .pancakes {\n    position: absolute;\n    transition: 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n  }\n\n  .pancake {\n    background: #e27c31;\n    border-radius: 50%;\n    width: ", ";\n    height: ", ";\n    position: absolute;\n    transition: 0.4s ease;\n    top: 2px;\n    left: 4px;\n    box-shadow: 0 ", " 0 ", " #fbbe7c;\n  }\n\n  .pancake:nth-child(1) {\n    background: ", ";\n    box-shadow: 0 ", " 0 ", "\n      ", ";\n  }\n\n  .pancake:nth-child(2) {\n    left: 0;\n    top: ", ";\n    transform: scale(0);\n    transition: 0.2s ease 0.2s;\n  }\n\n  .pancake:nth-child(3) {\n    top: ", ";\n    transform: scale(0);\n    transition: 0.2s ease 0.2s;\n  }\n\n  .pancake:nth-child(3):before,\n  .pancake:nth-child(3):after {\n    content: \"\";\n    position: absolute;\n    background: #ef8927;\n    border-radius: 20px;\n    width: 50%;\n    height: 20%;\n  }\n\n  .pancake:nth-child(3):before {\n    top: ", ";\n    left: ", ";\n  }\n\n  .pancake:nth-child(3):after {\n    top: ", ";\n    right: ", ";\n  }\n\n  .butter {\n    width: ", ";\n    height: ", ";\n    background: #fbdb60;\n    top: ", ";\n    left: ", ";\n    position: absolute;\n    border-radius: ", ";\n    box-shadow: 0 ", " 0 ", " #d67823;\n    transform: scale(0);\n    transition: 0.2s ease;\n  }\n"])), getScale$2("pancakeSize"), getScale$2("pancakeSize"), getScale$2("pancakeThickness"), getScale$2("pancakeThickness"), function (_a) {
    var theme = _a.theme;
    return theme.pancakeToggle.handleBackground;
}, getScale$2("pancakeThickness"), getScale$2("pancakeThickness"), function (_a) {
    var theme = _a.theme;
    return theme.pancakeToggle.handleShadow;
}, getScale$2("pancakeTwoOffset"), getScale$2("pancakeThreeOffset"), getScale$2("butterSmearOneTop"), getScale$2("butterSmearOneLeft"), getScale$2("butterSmearTwoTop"), getScale$2("butterSmearTwoRight"), getScale$2("butterWidth"), getScale$2("butterHeight"), getScale$2("butterTop"), getScale$2("butterLeft"), getScale$2("butterRadius"), getScale$2("butterThickness"), getScale$2("butterThickness"));
var PancakeInput = styled__default['default'].input(templateObject_2$k || (templateObject_2$k = __makeTemplateObject(["\n  height: 40px;\n  left: 0;\n  opacity: 0;\n  position: absolute;\n  top: 0;\n  width: 40px;\n\n  &:focus + label {\n    box-shadow: ", ";\n  }\n\n  &:checked + label .pancakes {\n    transform: translateX(", ");\n  }\n\n  &:checked + label .pancake:nth-child(1) {\n    background: #e27c31;\n    box-shadow: 0 ", " 0 ", " #fbbe7c;\n    transition-delay: 0.2s;\n  }\n\n  &:checked + label .pancake:nth-child(2) {\n    transform: scale(1);\n    transition-delay: 0.2s;\n  }\n\n  &:checked + label .pancake:nth-child(3) {\n    transform: scale(1);\n    transition-delay: 0.4s;\n  }\n\n  &:checked + label .butter {\n    transform: scale(1);\n    transition-delay: 0.6s;\n  }\n"], ["\n  height: 40px;\n  left: 0;\n  opacity: 0;\n  position: absolute;\n  top: 0;\n  width: 40px;\n\n  &:focus + label {\n    box-shadow: ", ";\n  }\n\n  &:checked + label .pancakes {\n    transform: translateX(", ");\n  }\n\n  &:checked + label .pancake:nth-child(1) {\n    background: #e27c31;\n    box-shadow: 0 ", " 0 ", " #fbbe7c;\n    transition-delay: 0.2s;\n  }\n\n  &:checked + label .pancake:nth-child(2) {\n    transform: scale(1);\n    transition-delay: 0.2s;\n  }\n\n  &:checked + label .pancake:nth-child(3) {\n    transform: scale(1);\n    transition-delay: 0.4s;\n  }\n\n  &:checked + label .butter {\n    transform: scale(1);\n    transition-delay: 0.6s;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, getScale$2("travelDistance"), getScale$2("pancakeThickness"), getScale$2("pancakeThickness"));
var PancakeLabel = styled__default['default'].label(templateObject_3$b || (templateObject_3$b = __makeTemplateObject(["\n  width: ", ";\n  height: ", ";\n  background: ", ";\n  box-shadow: ", ";\n  display: inline-block;\n  border-radius: 50px;\n  position: relative;\n  transition: all 0.3s ease;\n  transform-origin: 20% center;\n  cursor: pointer;\n"], ["\n  width: ", ";\n  height: ", ";\n  background: ", ";\n  box-shadow: ", ";\n  display: inline-block;\n  border-radius: 50px;\n  position: relative;\n  transition: all 0.3s ease;\n  transform-origin: 20% center;\n  cursor: pointer;\n"])), getScale$2("toggleWidth"), getScale$2("toggleHeight"), function (_a) {
    var theme = _a.theme, checked = _a.checked;
    return theme.colors[checked ? "success" : "input"];
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.inset;
});
var templateObject_1$A, templateObject_2$k, templateObject_3$b;

var PancakeToggle = function (_a) {
    var checked = _a.checked, _b = _a.scale, scale = _b === void 0 ? scales$4.LG : _b, props = __rest(_a, ["checked", "scale"]);
    return (React__default['default'].createElement(PancakeStack, { scale: scale },
        React__default['default'].createElement(PancakeInput, __assign({ id: props.id || "pancake-toggle", scale: scale, type: "checkbox", checked: checked }, props)),
        React__default['default'].createElement(PancakeLabel, { scale: scale, checked: checked, htmlFor: props.id || "pancake-toggle" },
            React__default['default'].createElement("div", { className: "pancakes" },
                React__default['default'].createElement("div", { className: "pancake" }),
                React__default['default'].createElement("div", { className: "pancake" }),
                React__default['default'].createElement("div", { className: "pancake" }),
                React__default['default'].createElement("div", { className: "butter" })))));
};

var variants$2 = {
    ROUND: "round",
    FLAT: "flat",
};
var scales$3 = {
    MD: "md",
    SM: "sm",
};

var _a$1, _b$1;
var styleVariants$1 = (_a$1 = {},
    _a$1[variants$2.ROUND] = {
        borderRadius: "32px",
    },
    _a$1[variants$2.FLAT] = {
        borderRadius: 0,
    },
    _a$1);
var styleScales = (_b$1 = {},
    _b$1[scales$3.MD] = {
        height: "16px",
    },
    _b$1[scales$3.SM] = {
        height: "8px",
    },
    _b$1);

var Bar = styled__default['default'].div(templateObject_1$z || (templateObject_1$z = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-color: ", ";\n  height: 100%;\n  transition: width 200ms ease;\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-color: ", ";\n  height: 100%;\n  transition: width 200ms ease;\n"])), function (props) { return (props.primary ? props.theme.colors.secondary : props.theme.colors.secondary + "80"); });
Bar.defaultProps = {
    primary: false,
};
var StyledProgress = styled__default['default'].div(templateObject_2$j || (templateObject_2$j = __makeTemplateObject(["\n  position: relative;\n  background-color: ", ";\n  box-shadow: ", ";\n  overflow: hidden;\n\n  ", " {\n    border-top-left-radius: ", ";\n    border-bottom-left-radius: ", ";\n  }\n\n  ", "\n  ", "\n  ", "\n"], ["\n  position: relative;\n  background-color: ", ";\n  box-shadow: ", ";\n  overflow: hidden;\n\n  ", " {\n    border-top-left-radius: ", ";\n    border-bottom-left-radius: ", ";\n  }\n\n  ",
    "\n  ",
    "\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.inset;
}, Bar, function (_a) {
    var variant = _a.variant;
    return (variant === variants$2.FLAT ? "0" : "32px");
}, function (_a) {
    var variant = _a.variant;
    return (variant === variants$2.FLAT ? "0" : "32px");
}, styledSystem.variant({
    variants: styleVariants$1,
}), styledSystem.variant({
    prop: "scale",
    variants: styleScales,
}), styledSystem.space);
var templateObject_1$z, templateObject_2$j;

var ProgressBunnyWrapper = styled__default['default'].div(templateObject_1$y || (templateObject_1$y = __makeTemplateObject(["\n  display: flex;\n  z-index: 2;\n  top: -65%;\n  position: absolute;\n  transform: translate(-50%, -50%);\n  transition: left 200ms ease-out;\n"], ["\n  display: flex;\n  z-index: 2;\n  top: -65%;\n  position: absolute;\n  transform: translate(-50%, -50%);\n  transition: left 200ms ease-out;\n"])));
var templateObject_1$y;

var stepGuard = function (step) {
    if (step < 0) {
        return 0;
    }
    if (step > 100) {
        return 100;
    }
    return step;
};
var Progress = function (_a) {
    var _b = _a.variant, variant = _b === void 0 ? variants$2.ROUND : _b, _c = _a.scale, scale = _c === void 0 ? scales$3.MD : _c, _d = _a.primaryStep, primaryStep = _d === void 0 ? 0 : _d, _e = _a.secondaryStep, secondaryStep = _e === void 0 ? null : _e, _f = _a.showProgressBunny, showProgressBunny = _f === void 0 ? false : _f;
    return (React__default['default'].createElement(StyledProgress, { variant: variant, scale: scale },
        showProgressBunny && (React__default['default'].createElement(ProgressBunnyWrapper, { style: { left: stepGuard(primaryStep) + "%" } },
            React__default['default'].createElement(Icon$V, null))),
        React__default['default'].createElement(Bar, { primary: true, style: { width: stepGuard(primaryStep) + "%" } }),
        secondaryStep ? React__default['default'].createElement(Bar, { style: { width: stepGuard(secondaryStep) + "%" } }) : null));
};

var scales$2 = {
    SM: "sm",
    MD: "md",
};

var getScale$1 = function (_a) {
    var scale = _a.scale;
    switch (scale) {
        case scales$2.SM:
            return "24px";
        case scales$2.MD:
        default:
            return "32px";
    }
};
var getCheckedScale = function (_a) {
    var scale = _a.scale;
    switch (scale) {
        case scales$2.SM:
            return "12px";
        case scales$2.MD:
        default:
            return "20px";
    }
};
var Radio = styled__default['default'].input.attrs({ type: "radio" })(templateObject_1$x || (templateObject_1$x = __makeTemplateObject(["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ", ";\n  width: ", ";\n  vertical-align: middle;\n  transition: background-color 0.2s ease-in-out;\n  border: 0;\n  border-radius: 50%;\n  background-color: ", ";\n  box-shadow: ", ";\n\n  &:after {\n    border-radius: 50%;\n    content: \"\";\n    height: ", ";\n    left: 6px;\n    position: absolute;\n    top: 6px;\n    width: ", ";\n  }\n\n  &:hover:not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: ", ";\n  }\n\n  &:checked {\n    background-color: ", ";\n    &:after {\n      background-color: ", ";\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n  ", "\n"], ["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ", ";\n  width: ", ";\n  vertical-align: middle;\n  transition: background-color 0.2s ease-in-out;\n  border: 0;\n  border-radius: 50%;\n  background-color: ", ";\n  box-shadow: ", ";\n\n  &:after {\n    border-radius: 50%;\n    content: \"\";\n    height: ", ";\n    left: 6px;\n    position: absolute;\n    top: 6px;\n    width: ", ";\n  }\n\n  &:hover:not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: ", ";\n  }\n\n  &:checked {\n    background-color: ", ";\n    &:after {\n      background-color: ", ";\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n  ", "\n"])), getScale$1, getScale$1, function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.inset;
}, getCheckedScale, getCheckedScale, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.primary;
}, function (_a) {
    var theme = _a.theme;
    return theme.radio.handleBackground;
}, styledSystem.space);
Radio.defaultProps = {
    scale: scales$2.MD,
    m: 0,
};
var templateObject_1$x;

var bunnyHeadMain = "data:image/svg+xml,%3Csvg%20width%3D%2224%22%20height%3D%2232%22%20viewBox%3D%220%200%2028%2032%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Crect%20x%3D%221%22%20y%3D%2219%22%20width%3D%2217%22%20height%3D%2211%22%20fill%3D%22%231FC7D4%22%2F%3E%3Cpath%20d%3D%22M9.507%2024.706C8.14635%2026.0666%209.73795%2028.2313%2011.7555%2030.2489C13.7731%2032.2665%2015.9378%2033.8581%2017.2984%2032.4974C18.6591%2031.1368%2017.9685%2028.0711%2015.9509%2026.0535C13.9333%2024.0359%2010.8676%2023.3453%209.507%2024.706Z%22%20fill%3D%22%231FC7D4%22%2F%3E%3Cpath%20d%3D%22M15.507%2022.706C14.1463%2024.0666%2015.7379%2026.2313%2017.7555%2028.2489C19.7731%2030.2665%2021.9378%2031.8581%2023.2984%2030.4974C24.6591%2029.1368%2023.9685%2026.0711%2021.9509%2024.0535C19.9333%2022.0359%2016.8676%2021.3453%2015.507%2022.706Z%22%20fill%3D%22%231FC7D4%22%2F%3E%3Cg%20filter%3D%22url%28%23filter0_d%29%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M14.146%206.75159C14.2105%207.10896%2014.2703%207.48131%2014.3281%207.86164C14.2189%207.85865%2014.1095%207.85714%2014%207.85714C13.3803%207.85714%2012.7648%207.90539%2012.159%207.99779C11.879%207.41458%2011.5547%206.82246%2011.1872%206.23145C8.69897%202.22947%206.53826%201.98679%204.67882%202.98366C2.81938%203.98052%202.85628%206.67644%205.26696%209.40538C5.58076%209.76061%205.90097%2010.1398%206.2247%2010.5286C3.69013%2012.4659%202%2015.2644%202%2018.2695C2%2023.8292%207.78518%2025%2014%2025C20.2148%2025%2026%2023.8292%2026%2018.2695C26%2014.8658%2023.8318%2011.7272%2020.7243%209.80476C20.9022%208.86044%2021%207.83019%2021%206.75159C21%202.19612%2019.2549%201%2017.1022%201C14.9495%201%2013.5261%203.31847%2014.146%206.75159Z%22%20fill%3D%22url%28%23paint0_linear_bunnyhead_main%29%22%2F%3E%3C%2Fg%3E%3Cg%20transform%3D%22translate%282%29%22%3E%3Cpath%20d%3D%22M12.7284%2016.4446C12.796%2017.3149%2012.4446%2019.0556%2010.498%2019.0556%22%20stroke%3D%22%23452A7A%22%20stroke-linecap%3D%22round%22%2F%3E%3Cpath%20d%3D%22M12.7457%2016.4446C12.6781%2017.3149%2013.0296%2019.0556%2014.9761%2019.0556%22%20stroke%3D%22%23452A7A%22%20stroke-linecap%3D%22round%22%2F%3E%3Cpath%20d%3D%22M9%2014.5C9%2015.6046%208.55228%2016%208%2016C7.44772%2016%207%2015.6046%207%2014.5C7%2013.3954%207.44772%2013%208%2013C8.55228%2013%209%2013.3954%209%2014.5Z%22%20fill%3D%22%23452A7A%22%2F%3E%3Cpath%20d%3D%22M18%2014.5C18%2015.6046%2017.5523%2016%2017%2016C16.4477%2016%2016%2015.6046%2016%2014.5C16%2013.3954%2016.4477%2013%2017%2013C17.5523%2013%2018%2013.3954%2018%2014.5Z%22%20fill%3D%22%23452A7A%22%2F%3E%3C%2Fg%3E%3Cdefs%3E%3Cfilter%20id%3D%22filter0_d%22%3E%3CfeFlood%20flood-opacity%3D%220%22%20result%3D%22BackgroundImageFix%22%2F%3E%3CfeColorMatrix%20in%3D%22SourceAlpha%22%20type%3D%22matrix%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200%22%2F%3E%3CfeOffset%20dy%3D%221%22%2F%3E%3CfeGaussianBlur%20stdDeviation%3D%221%22%2F%3E%3CfeColorMatrix%20type%3D%22matrix%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200.5%200%22%2F%3E%3CfeBlend%20mode%3D%22normal%22%20in2%3D%22BackgroundImageFix%22%20result%3D%22effect1_dropShadow%22%2F%3E%3CfeBlend%20mode%3D%22normal%22%20in%3D%22SourceGraphic%22%20in2%3D%22effect1_dropShadow%22%20result%3D%22shape%22%2F%3E%3C%2Ffilter%3E%3ClinearGradient%20id%3D%22paint0_linear_bunnyhead_main%22%20x1%3D%2214%22%20y1%3D%221%22%20x2%3D%2214%22%20y2%3D%2225%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%3Cstop%20stop-color%3D%22%2353DEE9%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%231FC7D4%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3C%2Fsvg%3E";

var bunnyHeadMax = "data:image/svg+xml,%3Csvg%20width%3D%2224%22%20height%3D%2232%22%20viewBox%3D%220%200%2028%2032%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Crect%20x%3D%221%22%20y%3D%2219%22%20width%3D%2217%22%20height%3D%2211%22%20fill%3D%22%231FC7D4%22%2F%3E%3Cpath%20d%3D%22M9.507%2024.706C8.14635%2026.0666%209.73795%2028.2313%2011.7555%2030.2489C13.7731%2032.2665%2015.9378%2033.8581%2017.2984%2032.4974C18.6591%2031.1368%2017.9685%2028.0711%2015.9509%2026.0535C13.9333%2024.0359%2010.8676%2023.3453%209.507%2024.706Z%22%20fill%3D%22%231FC7D4%22%2F%3E%3Cpath%20d%3D%22M15.507%2022.706C14.1463%2024.0666%2015.7379%2026.2313%2017.7555%2028.2489C19.7731%2030.2665%2021.9378%2031.8581%2023.2984%2030.4974C24.6591%2029.1368%2023.9685%2026.0711%2021.9509%2024.0535C19.9333%2022.0359%2016.8676%2021.3453%2015.507%2022.706Z%22%20fill%3D%22%231FC7D4%22%2F%3E%3Cg%20filter%3D%22url%28%23filter0_d%29%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M14.146%206.75159C14.2105%207.10896%2014.2703%207.48131%2014.3281%207.86164C14.2189%207.85865%2014.1095%207.85714%2014%207.85714C13.3803%207.85714%2012.7648%207.90539%2012.159%207.99779C11.879%207.41458%2011.5547%206.82246%2011.1872%206.23145C8.69897%202.22947%206.53826%201.98679%204.67882%202.98366C2.81938%203.98052%202.85628%206.67644%205.26696%209.40538C5.58076%209.76061%205.90097%2010.1398%206.2247%2010.5286C3.69013%2012.4659%202%2015.2644%202%2018.2695C2%2023.8292%207.78518%2025%2014%2025C20.2148%2025%2026%2023.8292%2026%2018.2695C26%2014.8658%2023.8318%2011.7272%2020.7243%209.80476C20.9022%208.86044%2021%207.83019%2021%206.75159C21%202.19612%2019.2549%201%2017.1022%201C14.9495%201%2013.5261%203.31847%2014.146%206.75159Z%22%20fill%3D%22url%28%23paint0_linear_bunnyhead_max%29%22%2F%3E%3C%2Fg%3E%3Cpath%20d%3D%22M11.5047%2016.0634C10.9435%2014.4456%208.79685%2014.4456%208.08131%2016.0635%22%20stroke%3D%22%23452A7A%22%20stroke-linecap%3D%22round%22%2F%3E%3Cpath%20d%3D%22M20.8894%2016.0634C20.3283%2014.4456%2018.1816%2014.4456%2017.4661%2016.0635%22%20stroke%3D%22%23452A7A%22%20stroke-linecap%3D%22round%22%2F%3E%3Cpath%20d%3D%22M14.7284%2017.4446C14.796%2018.3149%2014.4446%2020.0556%2012.498%2020.0556%22%20stroke%3D%22%23452A7A%22%20stroke-linecap%3D%22round%22%2F%3E%3Cpath%20d%3D%22M14.7457%2017.4446C14.6781%2018.3149%2015.0296%2020.0556%2016.9761%2020.0556%22%20stroke%3D%22%23452A7A%22%20stroke-linecap%3D%22round%22%2F%3E%3Cpath%20d%3D%22M13.4505%2020.0787C13.4505%2021.5097%2015.955%2021.5097%2015.955%2020.0787%22%20stroke%3D%22%23452A7A%22%20stroke-linecap%3D%22round%22%2F%3E%3Cdefs%3E%3Cfilter%20id%3D%22filter0_d%22%20x%3D%220%22%20y%3D%220%22%20width%3D%2228%22%20height%3D%2228%22%20filterUnits%3D%22userSpaceOnUse%22%20color-interpolation-filters%3D%22sRGB%22%3E%3CfeFlood%20flood-opacity%3D%220%22%20result%3D%22BackgroundImageFix%22%2F%3E%3CfeColorMatrix%20in%3D%22SourceAlpha%22%20type%3D%22matrix%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200%22%2F%3E%3CfeOffset%20dy%3D%221%22%2F%3E%3CfeGaussianBlur%20stdDeviation%3D%221%22%2F%3E%3CfeColorMatrix%20type%3D%22matrix%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200.5%200%22%2F%3E%3CfeBlend%20mode%3D%22normal%22%20in2%3D%22BackgroundImageFix%22%20result%3D%22effect1_dropShadow%22%2F%3E%3CfeBlend%20mode%3D%22normal%22%20in%3D%22SourceGraphic%22%20in2%3D%22effect1_dropShadow%22%20result%3D%22shape%22%2F%3E%3C%2Ffilter%3E%3ClinearGradient%20id%3D%22paint0_linear_bunnyhead_max%22%20x1%3D%2214%22%20y1%3D%221%22%20x2%3D%2214%22%20y2%3D%2225%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%3Cstop%20stop-color%3D%22%2353DEE9%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%231FC7D4%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3C%2Fsvg%3E";

var bunnyButt = "data:image/svg+xml,%3Csvg%20width%3D%2215%22%20height%3D%2232%22%20viewBox%3D%220%200%2015%2032%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M9.58803%2020.8649C7.72935%2021.3629%208.02539%2024.0334%208.76388%2026.7895C9.50238%2029.5456%2010.5812%2032.0062%2012.4399%2031.5082C14.2986%2031.0102%2015.2334%2028.0099%2014.4949%2025.2538C13.7564%2022.4978%2011.4467%2020.3669%209.58803%2020.8649Z%22%20fill%3D%22%230098A1%22%2F%3E%3Cpath%20d%3D%22M1%2024.4516C1%2020.8885%203.88849%2018%207.45161%2018H15V28H4.54839C2.58867%2028%201%2026.4113%201%2024.4516Z%22%20fill%3D%22%231FC7D4%22%2F%3E%3Cpath%20d%3D%22M6.11115%2017.2246C6.79693%2018.4124%205.77784%2019.3343%204.52793%2020.0559C3.27802%2020.7776%201.97011%2021.1992%201.28433%2020.0114C0.598546%2018.8236%201.1635%2017.1151%202.41341%2016.3935C3.66332%2015.6718%205.42537%2016.0368%206.11115%2017.2246Z%22%20fill%3D%22%2353DEE9%22%2F%3E%3Cpath%20d%3D%22M1.64665%2023.6601C0.285995%2025.0207%201.87759%2027.1854%203.89519%2029.203C5.91279%2031.2206%208.07743%2032.8122%209.43808%2031.4515C10.7987%2030.0909%2010.1082%2027.0252%208.09058%2025.0076C6.07298%2022.99%203.0073%2022.2994%201.64665%2023.6601Z%22%20fill%3D%22%231FC7D4%22%2F%3E%3C%2Fsvg%3E";

var getCursorStyle = function (_a) {
    var _b = _a.disabled, disabled = _b === void 0 ? false : _b;
    return disabled ? "not-allowed" : "cursor";
};
var getBaseThumbStyles = function (_a) {
    var isMax = _a.isMax, disabled = _a.disabled;
    return "\n  -webkit-appearance: none;\n  background-image: url(" + (isMax ? bunnyHeadMax : bunnyHeadMain) + ");\n  background-color: transparent;\n  border: 0;\n  cursor: " + getCursorStyle + ";\n  width: 24px;\n  height: 32px;\n  filter: " + (disabled ? "grayscale(100%)" : "none") + ";\n  transform: translate(-2px, -2px);\n  transition: 200ms transform;\n\n  &:hover {\n    transform: " + (disabled ? "scale(1) translate(-2px, -2px)" : "scale(1.1) translate(-3px, -3px)") + ";\n  }\n";
};
var SliderLabelContainer = styled__default['default'].div(templateObject_1$w || (templateObject_1$w = __makeTemplateObject(["\n  bottom: 0;\n  position: absolute;\n  left: 14px;\n  width: calc(100% - 30px);\n"], ["\n  bottom: 0;\n  position: absolute;\n  left: 14px;\n  width: calc(100% - 30px);\n"])));
var SliderLabel = styled__default['default'](Text)(templateObject_2$i || (templateObject_2$i = __makeTemplateObject(["\n  bottom: 0;\n  font-size: 12px;\n  left: ", ";\n  position: absolute;\n  text-align: center;\n  min-width: 24px; // Slider thumb size\n"], ["\n  bottom: 0;\n  font-size: 12px;\n  left: ", ";\n  position: absolute;\n  text-align: center;\n  min-width: 24px; // Slider thumb size\n"])), function (_a) {
    var progress = _a.progress;
    return progress;
});
var BunnyButt = styled__default['default'].div(templateObject_3$a || (templateObject_3$a = __makeTemplateObject(["\n  background: url(", ") no-repeat;\n  height: 32px;\n  filter: ", ";\n  position: absolute;\n  width: 15px;\n"], ["\n  background: url(", ") no-repeat;\n  height: 32px;\n  filter: ", ";\n  position: absolute;\n  width: 15px;\n"])), bunnyButt, function (_a) {
    var disabled = _a.disabled;
    return (disabled ? "grayscale(100%)" : "none");
});
var BunnySlider = styled__default['default'].div(templateObject_4$6 || (templateObject_4$6 = __makeTemplateObject(["\n  position: absolute;\n  left: 14px;\n  width: calc(100% - 14px);\n"], ["\n  position: absolute;\n  left: 14px;\n  width: calc(100% - 14px);\n"])));
var StyledInput = styled__default['default'].input(templateObject_5$3 || (templateObject_5$3 = __makeTemplateObject(["\n  cursor: ", ";\n  height: 32px;\n  position: relative;\n\n  ::-webkit-slider-thumb {\n    ", "\n  }\n\n  ::-moz-range-thumb {\n    ", "\n  }\n\n  ::-ms-thumb {\n    ", "\n  }\n"], ["\n  cursor: ", ";\n  height: 32px;\n  position: relative;\n\n  ::-webkit-slider-thumb {\n    ", "\n  }\n\n  ::-moz-range-thumb {\n    ", "\n  }\n\n  ::-ms-thumb {\n    ", "\n  }\n"])), getCursorStyle, getBaseThumbStyles, getBaseThumbStyles, getBaseThumbStyles);
var BarBackground = styled__default['default'].div(templateObject_6$1 || (templateObject_6$1 = __makeTemplateObject(["\n  background-color: ", ";\n  height: 2px;\n  position: absolute;\n  top: 18px;\n  width: 100%;\n"], ["\n  background-color: ", ";\n  height: 2px;\n  position: absolute;\n  top: 18px;\n  width: 100%;\n"])), function (_a) {
    var theme = _a.theme, disabled = _a.disabled;
    return theme.colors[disabled ? "textDisabled" : "inputSecondary"];
});
var BarProgress = styled__default['default'].div(templateObject_7$1 || (templateObject_7$1 = __makeTemplateObject(["\n  background-color: ", ";\n  filter: ", ";\n  height: 10px;\n  position: absolute;\n  top: 18px;\n"], ["\n  background-color: ", ";\n  filter: ", ";\n  height: 10px;\n  position: absolute;\n  top: 18px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.primary;
}, function (_a) {
    var disabled = _a.disabled;
    return (disabled ? "grayscale(100%)" : "none");
});
var templateObject_1$w, templateObject_2$i, templateObject_3$a, templateObject_4$6, templateObject_5$3, templateObject_6$1, templateObject_7$1;

var Slider = function (_a) {
    var name = _a.name, min = _a.min, max = _a.max, value = _a.value, onValueChanged = _a.onValueChanged, valueLabel = _a.valueLabel, _b = _a.step, step = _b === void 0 ? "any" : _b, _c = _a.disabled, disabled = _c === void 0 ? false : _c, props = __rest(_a, ["name", "min", "max", "value", "onValueChanged", "valueLabel", "step", "disabled"]);
    var handleChange = function (_a) {
        var target = _a.target;
        onValueChanged(parseFloat(target.value));
    };
    var progressPercentage = (value / max) * 100;
    var isMax = value === max;
    var progressWidth;
    if (progressPercentage <= 10) {
        progressWidth = progressPercentage + 0.5 + "%";
    }
    else if (progressPercentage >= 90) {
        progressWidth = progressPercentage - 4 + "%";
    }
    else if (progressPercentage >= 60) {
        progressWidth = progressPercentage - 2.5 + "%";
    }
    else {
        progressWidth = progressPercentage + "%";
    }
    var labelProgress = isMax ? "calc(100% - 12px)" : progressPercentage + "%";
    var displayValueLabel = isMax ? "MAX" : valueLabel;
    return (React__default['default'].createElement(Box, __assign({ position: "relative", height: "48px" }, props),
        React__default['default'].createElement(BunnyButt, { disabled: disabled }),
        React__default['default'].createElement(BunnySlider, null,
            React__default['default'].createElement(BarBackground, { disabled: disabled }),
            React__default['default'].createElement(BarProgress, { style: { width: progressWidth }, disabled: disabled }),
            React__default['default'].createElement(StyledInput, { name: name, type: "range", min: min, max: max, value: value, step: step, onChange: handleChange, isMax: isMax, disabled: disabled })),
        valueLabel && (React__default['default'].createElement(SliderLabelContainer, null,
            React__default['default'].createElement(SliderLabel, { progress: labelProgress }, displayValueLabel)))));
};

var animation = {
    WAVES: "waves",
    PULSE: "pulse",
};
var variant = {
    RECT: "rect",
    CIRCLE: "circle",
};

var waves = styled.keyframes(templateObject_1$v || (templateObject_1$v = __makeTemplateObject(["\n   from {\n        left: -150px;\n    }\n    to   {\n        left: 100%;\n    }\n"], ["\n   from {\n        left: -150px;\n    }\n    to   {\n        left: 100%;\n    }\n"])));
var pulse$1 = styled.keyframes(templateObject_2$h || (templateObject_2$h = __makeTemplateObject(["\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.4;\n  }\n  100% {\n    opacity: 1;\n  }\n"], ["\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.4;\n  }\n  100% {\n    opacity: 1;\n  }\n"])));
var Root = styled__default['default'].div(templateObject_3$9 || (templateObject_3$9 = __makeTemplateObject(["\n  min-height: 20px;\n  display: block;\n  background-color: ", ";\n  border-radius: ", ";\n\n  ", "\n  ", "\n"], ["\n  min-height: 20px;\n  display: block;\n  background-color: ", ";\n  border-radius: ", ";\n\n  ", "\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.backgroundDisabled;
}, function (_a) {
    var variant$1 = _a.variant, theme = _a.theme;
    return (variant$1 === variant.CIRCLE ? theme.radii.circle : theme.radii.small);
}, styledSystem.layout, styledSystem.space);
var Pulse = styled__default['default'](Root)(templateObject_4$5 || (templateObject_4$5 = __makeTemplateObject(["\n  animation: ", " 2s infinite ease-out;\n  transform: translate3d(0, 0, 0);\n"], ["\n  animation: ", " 2s infinite ease-out;\n  transform: translate3d(0, 0, 0);\n"])), pulse$1);
var Waves = styled__default['default'](Root)(templateObject_5$2 || (templateObject_5$2 = __makeTemplateObject(["\n  position: relative;\n  overflow: hidden;\n  transform: translate3d(0, 0, 0);\n  &:before {\n    content: \"\";\n    position: absolute;\n    background-image: linear-gradient(90deg, transparent, rgba(243, 243, 243, 0.5), transparent);\n    top: 0;\n    left: -150px;\n    height: 100%;\n    width: 150px;\n    animation: ", " 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;\n  }\n"], ["\n  position: relative;\n  overflow: hidden;\n  transform: translate3d(0, 0, 0);\n  &:before {\n    content: \"\";\n    position: absolute;\n    background-image: linear-gradient(90deg, transparent, rgba(243, 243, 243, 0.5), transparent);\n    top: 0;\n    left: -150px;\n    height: 100%;\n    width: 150px;\n    animation: ", " 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;\n  }\n"])), waves);
var Skeleton = function (_a) {
    var _b = _a.variant, variant$1 = _b === void 0 ? variant.RECT : _b, _c = _a.animation, animation$1 = _c === void 0 ? animation.PULSE : _c, props = __rest(_a, ["variant", "animation"]);
    if (animation$1 === animation.WAVES) {
        return React__default['default'].createElement(Waves, __assign({ variant: variant$1 }, props));
    }
    return React__default['default'].createElement(Pulse, __assign({ variant: variant$1 }, props));
};
var templateObject_1$v, templateObject_2$h, templateObject_3$9, templateObject_4$5, templateObject_5$2;

var Icon$i = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 512 512" }, props),
        React__default['default'].createElement("image", { height: "512", href: '/images/logo.png' })));
};

var pulse = styled.keyframes(templateObject_1$u || (templateObject_1$u = __makeTemplateObject(["\n  0% { transform: rotate(0deg); }\n  20% { transform: rotate(360deg); }\n  40% { transform: rotate(0deg); }\n  50% { transform: scale(1); }\n  55% { transform: scale(1.1); }\n  60% { transform: scale(1.2); }\n  65% { transform: scale(1.3); }\n  70% { transform: scale(1.4); }\n  75% { transform: scale(1.5); }\n  80% { transform: scale(1.2); }\n  90% { transform: scale(1.1); }\n  100% { transform: scale(1); }\n"], ["\n  0% { transform: rotate(0deg); }\n  20% { transform: rotate(360deg); }\n  40% { transform: rotate(0deg); }\n  50% { transform: scale(1); }\n  55% { transform: scale(1.1); }\n  60% { transform: scale(1.2); }\n  65% { transform: scale(1.3); }\n  70% { transform: scale(1.4); }\n  75% { transform: scale(1.5); }\n  80% { transform: scale(1.2); }\n  90% { transform: scale(1.1); }\n  100% { transform: scale(1); }\n"])));
var Container$3 = styled__default['default'].div(templateObject_2$g || (templateObject_2$g = __makeTemplateObject(["\n  position: relative;\n"], ["\n  position: relative;\n"])));
var FloatingPanIcon = styled__default['default'](Icon$i)(templateObject_3$8 || (templateObject_3$8 = __makeTemplateObject(["\nposition: absolute;\ntop: 0;\nleft: 0;\nanimation: ", " 5s linear infinite;\ntransform: translate3d(0, 0, 0);\n"], ["\nposition: absolute;\ntop: 0;\nleft: 0;\nanimation: ", " 5s linear infinite;\ntransform: translate3d(0, 0, 0);\n"])), pulse);
var Spinner = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 128 : _b;
    return (React__default['default'].createElement(Container$3, null,
        React__default['default'].createElement(FloatingPanIcon, { width: size + "px" })));
};
var templateObject_1$u, templateObject_2$g, templateObject_3$8;

var StepperWrapper = styled__default['default'].div(templateObject_1$t || (templateObject_1$t = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  width: fit-content;\n"], ["\n  display: flex;\n  flex-direction: column;\n  width: fit-content;\n"])));
var Stepper = function (_a) {
    var children = _a.children;
    var numberOfSteps = React__default['default'].Children.count(children);
    return (React__default['default'].createElement(StepperWrapper, null, React__default['default'].Children.map(children, function (child) {
        if (React__default['default'].isValidElement(child)) {
            return React__default['default'].cloneElement(child, { numberOfSteps: numberOfSteps });
        }
        return child;
    })));
};
var templateObject_1$t;

var getStepNumberFontColor = function (_a) {
    var theme = _a.theme, status = _a.status;
    if (status === "past") {
        return theme.colors.success;
    }
    if (status === "current") {
        return theme.colors.invertedContrast;
    }
    return theme.colors.textDisabled;
};
var StyledStep = styled__default['default'](Flex)(templateObject_1$s || (templateObject_1$s = __makeTemplateObject(["\n  ", " {\n    justify-content: center;\n  }\n"], ["\n  ", " {\n    justify-content: center;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
});
var Connector = styled__default['default'].div(templateObject_2$f || (templateObject_2$f = __makeTemplateObject(["\n  position: absolute;\n  width: 4px;\n  height: 110%;\n  top: 50%;\n  left: calc(50% - 2px);\n  background-color: ", ";\n"], ["\n  position: absolute;\n  width: 4px;\n  height: 110%;\n  top: 50%;\n  left: calc(50% - 2px);\n  background-color: ", ";\n"])), function (_a) {
    var theme = _a.theme, status = _a.status;
    return theme.colors[status === "past" ? "success" : "textDisabled"];
});
var ChildrenWrapper = styled__default['default'](Box)(templateObject_3$7 || (templateObject_3$7 = __makeTemplateObject(["\n  ", " {\n    visibility: ", ";\n  }\n"], ["\n  ", " {\n    visibility: ", ";\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
}, function (_a) {
    var isVisible = _a.isVisible;
    return (isVisible ? "visible" : "hidden");
});
var ChildrenLeftWrapper = styled__default['default'](ChildrenWrapper)(templateObject_4$4 || (templateObject_4$4 = __makeTemplateObject(["\n  display: none;\n  ", " {\n    display: block;\n    margin-right: 16px;\n  }\n"], ["\n  display: none;\n  ", " {\n    display: block;\n    margin-right: 16px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
});
var ChildrenRightWrapper = styled__default['default'](ChildrenWrapper)(templateObject_5$1 || (templateObject_5$1 = __makeTemplateObject(["\n  margin-left: 8px;\n  ", " {\n    margin-left: 16px;\n  }\n"], ["\n  margin-left: 8px;\n  ", " {\n    margin-left: 16px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
});
var Wrapper$2 = styled__default['default'].div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n  align-items: center;\n"], ["\n  position: relative;\n  display: flex;\n  align-items: center;\n"])));
var StepNumber = styled__default['default'].div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  box-shadow: 0px 1px 4px rgba(25, 19, 38, 0.15);\n  background-color: ", ";\n  border: 2px solid ", ";\n  border-radius: ", ";\n  color: ", ";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-weight: 600;\n  font-size: 32px;\n  width: 48px;\n  height: 48px;\n  z-index: 1;\n  ", " {\n    font-size: 40px;\n    width: 80px;\n    height: 80px;\n  }\n"], ["\n  box-shadow: 0px 1px 4px rgba(25, 19, 38, 0.15);\n  background-color: ", ";\n  border: 2px solid ", ";\n  border-radius: ", ";\n  color: ", ";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-weight: 600;\n  font-size: 32px;\n  width: 48px;\n  height: 48px;\n  z-index: 1;\n  ", " {\n    font-size: 40px;\n    width: 80px;\n    height: 80px;\n  }\n"])), function (_a) {
    var theme = _a.theme, status = _a.status;
    return theme.colors[status === "current" ? "secondary" : "invertedContrast"];
}, function (_a) {
    var theme = _a.theme, status = _a.status;
    return (status === "past" ? theme.colors.success : "transparent");
}, function (_a) {
    var theme = _a.theme;
    return theme.radii.circle;
}, getStepNumberFontColor, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
});
/**
 * ChildrenLeftWrapper and ChildrenRightWrapper are used on the non mobile version, to force the alternate layout.
 * One of the child is hidden based on the step number.
 */
var Step = function (_a) {
    var index = _a.index, status = _a.status, _b = _a.numberOfSteps, numberOfSteps = _b === void 0 ? 0 : _b, children = _a.children;
    var isIndexPair = index % 2 === 0;
    return (React__default['default'].createElement(StyledStep, { mb: index < numberOfSteps - 1 ? "16px" : 0 },
        React__default['default'].createElement(ChildrenLeftWrapper, { isVisible: !isIndexPair }, children),
        React__default['default'].createElement(Wrapper$2, null,
            React__default['default'].createElement(StepNumber, { status: status }, index + 1),
            index < numberOfSteps - 1 && React__default['default'].createElement(Connector, { status: status })),
        React__default['default'].createElement(ChildrenRightWrapper, { isVisible: isIndexPair }, children)));
};
var templateObject_1$s, templateObject_2$f, templateObject_3$7, templateObject_4$4, templateObject_5$1, templateObject_6, templateObject_7;

var InlineMenuContainer = styled__default['default'](Box)(templateObject_1$r || (templateObject_1$r = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: ", ";\n  box-shadow: ", ";\n"], ["\n  background-color: ", ";\n  border-radius: ", ";\n  box-shadow: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.backgroundAlt;
}, function (_a) {
    var theme = _a.theme;
    return theme.radii.card;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.tooltip;
});
var SubMenuContainer = styled__default['default'](Flex)(templateObject_2$e || (templateObject_2$e = __makeTemplateObject(["\n  flex-direction: column;\n  overflow: hidden;\n  min-width: 136px;\n  background: ", ";\n  border-radius: ", ";\n  border: ", ";\n"], ["\n  flex-direction: column;\n  overflow: hidden;\n  min-width: 136px;\n  background: ", ";\n  border-radius: ", ";\n  border: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
}, function (_a) {
    var theme = _a.theme;
    return theme.radii.default;
}, function (_a) {
    var theme = _a.theme;
    return "1px solid " + theme.colors.inputSecondary;
});
var ClickableElementContainer = styled__default['default'].div(templateObject_3$6 || (templateObject_3$6 = __makeTemplateObject(["\n  cursor: pointer;\n  display: inline-flex;\n"], ["\n  cursor: pointer;\n  display: inline-flex;\n"])));
var SubMenuItem = styled__default['default'].button(templateObject_4$3 || (templateObject_4$3 = __makeTemplateObject(["\n  border: 0;\n  outline: 0;\n  cursor: pointer;\n  background: transparent;\n  padding: 8px 16px;\n  color: ", ";\n  width: 100%;\n  font-size: 16px;\n  text-align: left;\n\n  &:hover {\n    background-color: ", ";\n    text-decoration: none;\n  }\n"], ["\n  border: 0;\n  outline: 0;\n  cursor: pointer;\n  background: transparent;\n  padding: 8px 16px;\n  color: ", ";\n  width: 100%;\n  font-size: 16px;\n  text-align: left;\n\n  &:hover {\n    background-color: ", ";\n    text-decoration: none;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.inputSecondary;
});
var templateObject_1$r, templateObject_2$e, templateObject_3$6, templateObject_4$3;

var portalRoot$1 = document.getElementById("portal-root");
var BaseMenu = function (_a) {
    var _b, _c, _d;
    var component = _a.component, options = _a.options, children = _a.children, _e = _a.isOpen, isOpen = _e === void 0 ? false : _e;
    var _f = React.useState(null), targetElement = _f[0], setTargetElement = _f[1];
    var _g = React.useState(null), menuElement = _g[0], setMenuElement = _g[1];
    var placement = (_b = options === null || options === void 0 ? void 0 : options.placement) !== null && _b !== void 0 ? _b : "bottom";
    var offset = (_c = options === null || options === void 0 ? void 0 : options.offset) !== null && _c !== void 0 ? _c : [0, 10];
    var padding = (_d = options === null || options === void 0 ? void 0 : options.padding) !== null && _d !== void 0 ? _d : { left: 16, right: 16 };
    var _h = React.useState(isOpen), isMenuOpen = _h[0], setIsMenuOpen = _h[1];
    var toggle = function () {
        setIsMenuOpen(function (prev) { return !prev; });
    };
    var open = function () {
        setIsMenuOpen(true);
    };
    var close = function () {
        setIsMenuOpen(false);
    };
    // Allow for component to be controlled
    React.useEffect(function () {
        setIsMenuOpen(isOpen);
    }, [isOpen, setIsMenuOpen]);
    React.useEffect(function () {
        var handleClickOutside = function (_a) {
            var target = _a.target;
            if (target instanceof Node) {
                if (menuElement !== null &&
                    targetElement !== null &&
                    !menuElement.contains(target) &&
                    !targetElement.contains(target)) {
                    setIsMenuOpen(false);
                }
            }
        };
        if (menuElement !== null) {
            document.addEventListener("click", handleClickOutside);
        }
        return function () {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [menuElement, targetElement]);
    var _j = reactPopper.usePopper(targetElement, menuElement, {
        placement: placement,
        modifiers: [
            { name: "offset", options: { offset: offset } },
            { name: "preventOverflow", options: { padding: padding } },
        ],
    }), styles = _j.styles, attributes = _j.attributes;
    var menu = (React__default['default'].createElement("div", __assign({ ref: setMenuElement, style: styles.popper }, attributes.popper), typeof children === "function" ? children({ toggle: toggle, open: open, close: close }) : children));
    var renderMenu = portalRoot$1 ? reactDom.createPortal(menu, portalRoot$1) : menu;
    return (React__default['default'].createElement(React__default['default'].Fragment, null,
        React__default['default'].createElement(ClickableElementContainer, { ref: setTargetElement, onClick: toggle }, component),
        isMenuOpen && renderMenu));
};

var InlineMenu = function (_a) {
    var children = _a.children, component = _a.component, _b = _a.isOpen, isOpen = _b === void 0 ? false : _b, props = __rest(_a, ["children", "component", "isOpen"]);
    return (React__default['default'].createElement(BaseMenu, { options: { placement: "bottom" }, component: component, isOpen: isOpen },
        React__default['default'].createElement(InlineMenuContainer, __assign({}, props), children)));
};

var SubMenu = function (_a) {
    var children = _a.children, component = _a.component, options = _a.options, _b = _a.isOpen, isOpen = _b === void 0 ? false : _b, props = __rest(_a, ["children", "component", "options", "isOpen"]);
    return (React__default['default'].createElement(BaseMenu, { component: component, options: options, isOpen: isOpen },
        React__default['default'].createElement(SubMenuContainer, __assign({}, props), children)));
};

var Td = styled__default['default'].td(templateObject_1$q || (templateObject_1$q = __makeTemplateObject(["\n  border-bottom: 1px solid ", ";\n  color: ", ";\n  padding: 16px;\n  vertical-align: middle;\n\n  ", "\n"], ["\n  border-bottom: 1px solid ", ";\n  color: ", ";\n  padding: 16px;\n  vertical-align: middle;\n\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.cardBorder;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
}, styledSystem.typography);
var Th = styled__default['default'](Td).attrs({ as: "th" })(templateObject_2$d || (templateObject_2$d = __makeTemplateObject(["\n  color: ", ";\n  font-size: 12px;\n  text-transform: uppercase;\n"], ["\n  color: ", ";\n  font-size: 12px;\n  text-transform: uppercase;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.secondary;
});
var templateObject_1$q, templateObject_2$d;

var Table = styled__default['default'].table(templateObject_1$p || (templateObject_1$p = __makeTemplateObject(["\n  max-width: 100%;\n  width: 100%;\n\n  tbody tr:last-child {\n    ", " {\n      border-bottom: 0;\n    }\n  }\n\n  ", "\n"], ["\n  max-width: 100%;\n  width: 100%;\n\n  tbody tr:last-child {\n    ", " {\n      border-bottom: 0;\n    }\n  }\n\n  ", "\n"])), Td, styledSystem.space);
var templateObject_1$p;

var byTextAscending = function (getTextProperty) {
    return function (objectA, objectB) {
        var upperA = getTextProperty(objectA).toUpperCase();
        var upperB = getTextProperty(objectB).toUpperCase();
        if (upperA < upperB) {
            return -1;
        }
        if (upperA > upperB) {
            return 1;
        }
        return 0;
    };
};
var byTextDescending = function (getTextProperty) {
    return function (objectA, objectB) {
        var upperA = getTextProperty(objectA).toUpperCase();
        var upperB = getTextProperty(objectB).toUpperCase();
        if (upperA > upperB) {
            return -1;
        }
        if (upperA < upperB) {
            return 1;
        }
        return 0;
    };
};

var sortByColumn = function (data, sortColumn, columns) {
    var isAscending = null;
    var sortedRows = __spreadArray([], data);
    columns.forEach(function (column) {
        // if the row was found
        if (sortColumn === column.name) {
            isAscending = column.sorted.asc;
            if (column.sort) {
                sortedRows = isAscending ? data.sort(column.sort) : data.sort(column.sort).reverse();
                // default to sort by string
            }
            else {
                sortedRows = isAscending
                    ? data.sort(byTextAscending(function (object) { return object.original[sortColumn]; }))
                    : data.sort(byTextDescending(function (object) { return object.original[sortColumn]; }));
            }
        }
    });
    return sortedRows;
};
var getPaginatedData = function (rows, perPage, page) {
    var start = (page - 1) * perPage;
    var end = start + perPage;
    return rows.slice(start, end);
};
var getColumnsByName = function (columns) {
    var columnsByName = {};
    columns.forEach(function (column) {
        var col = {
            name: column.name,
            label: column.label,
        };
        if (column.render) {
            col.render = column.render;
        }
        col.hidden = column.hidden;
        columnsByName[column.name] = col;
    });
    return columnsByName;
};
var createReducer = function () {
    return function (state, action) {
        var rows = [];
        var nextPage = 0;
        var prevPage = 0;
        var isAscending = null;
        var sortedRows = [];
        var columnCopy = [];
        var filteredRows = [];
        var selectedRowsById = {};
        var stateCopy = __assign({}, state);
        var rowIds = {};
        switch (action.type) {
            case "SET_ROWS":
                rows = __spreadArray([], action.data);
                // preserve sorting if a sort is already enabled when data changes
                if (state.sortColumn) {
                    rows = sortByColumn(action.data, state.sortColumn, state.columns);
                }
                if (state.paginationEnabled === true) {
                    rows = getPaginatedData(rows, state.pagination.perPage, state.pagination.page);
                }
                if (state.paginationEnabled === true) {
                    rows = getPaginatedData(rows, state.pagination.perPage, state.pagination.page);
                }
                columnCopy = state.columns.map(function (column) {
                    if (state.sortColumn === column.name) {
                        return __assign(__assign({}, column), { sorted: {
                                on: true,
                                asc: column.sorted.asc,
                            } });
                    }
                    return column;
                });
                return __assign(__assign({}, state), { rows: rows, originalRows: action.data, columns: columnCopy });
            case "NEXT_PAGE":
                nextPage = state.pagination.page + 1;
                return __assign(__assign({}, state), { rows: getPaginatedData(state.originalRows, state.pagination.perPage, nextPage), pagination: __assign(__assign({}, state.pagination), { page: nextPage, canNext: nextPage * state.pagination.perPage < state.originalRows.length, canPrev: nextPage !== 1 }) });
            case "PREV_PAGE":
                prevPage = state.pagination.page === 1 ? 1 : state.pagination.page - 1;
                return __assign(__assign({}, state), { rows: getPaginatedData(state.originalRows, state.pagination.perPage, prevPage), pagination: __assign(__assign({}, state.pagination), { page: prevPage, canNext: prevPage * state.pagination.perPage < state.originalRows.length, canPrev: prevPage !== 1 }) });
            case "TOGGLE_SORT":
                if (!(action.columnName in state.columnsByName)) {
                    throw new Error("Invalid column, " + action.columnName + " not found");
                }
                // loop through all columns and set the sort parameter to off unless
                // it's the specified column (only one column at a time for )
                columnCopy = state.columns.map(function (column) {
                    // if the row was found
                    if (action.columnName === column.name) {
                        if (action.isAscOverride !== undefined) {
                            // force the sort order
                            isAscending = action.isAscOverride;
                        }
                        else {
                            // if it's undefined, start by setting to ascending, otherwise toggle
                            isAscending = column.sorted.asc === undefined ? true : !column.sorted.asc;
                        }
                        if (column.sort) {
                            sortedRows = isAscending ? state.rows.sort(column.sort) : state.rows.sort(column.sort).reverse();
                            // default to sort by string
                        }
                        else {
                            sortedRows = isAscending
                                ? state.rows.sort(byTextAscending(function (object) { return object.original[action.columnName]; }))
                                : state.rows.sort(byTextDescending(function (object) { return object.original[action.columnName]; }));
                        }
                        return __assign(__assign({}, column), { sorted: {
                                on: true,
                                asc: isAscending,
                            } });
                    }
                    // set sorting to false for all other columns
                    return __assign(__assign({}, column), { sorted: {
                            on: false,
                            asc: false,
                        } });
                });
                return __assign(__assign({}, state), { columns: columnCopy, rows: sortedRows, sortColumn: action.columnName, columnsByName: getColumnsByName(columnCopy) });
            case "GLOBAL_FILTER":
                filteredRows = action.filter(state.originalRows);
                selectedRowsById = {};
                state.selectedRows.forEach(function (row) {
                    var _a;
                    selectedRowsById[row.id] = (_a = row.selected) !== null && _a !== void 0 ? _a : false;
                });
                return __assign(__assign({}, state), { rows: filteredRows.map(function (row) {
                        return selectedRowsById[row.id] ? __assign(__assign({}, row), { selected: selectedRowsById[row.id] }) : __assign({}, row);
                    }), filterOn: true });
            case "SELECT_ROW":
                stateCopy = __assign({}, state);
                stateCopy.rows = stateCopy.rows.map(function (row) {
                    var newRow = __assign({}, row);
                    if (newRow.id === action.rowId) {
                        newRow.selected = !newRow.selected;
                    }
                    return newRow;
                });
                stateCopy.originalRows = stateCopy.originalRows.map(function (row) {
                    var newRow = __assign({}, row);
                    if (newRow.id === action.rowId) {
                        newRow.selected = !newRow.selected;
                    }
                    return newRow;
                });
                stateCopy.selectedRows = stateCopy.originalRows.filter(function (row) { return row.selected === true; });
                stateCopy.toggleAllState =
                    stateCopy.selectedRows.length === stateCopy.rows.length
                        ? (stateCopy.toggleAllState = true)
                        : (stateCopy.toggleAllState = false);
                return stateCopy;
            case "SEARCH_STRING":
                stateCopy = __assign({}, state);
                stateCopy.rows = stateCopy.originalRows.filter(function (row) {
                    return (row.cells.filter(function (cell) {
                        if (cell.value.includes(action.searchString)) {
                            return true;
                        }
                        return false;
                    }).length > 0);
                });
                return stateCopy;
            case "TOGGLE_ALL":
                if (state.selectedRows.length < state.rows.length) {
                    stateCopy.rows = stateCopy.rows.map(function (row) {
                        rowIds[row.id] = true;
                        return __assign(__assign({}, row), { selected: true });
                    });
                    stateCopy.toggleAllState = true;
                }
                else {
                    stateCopy.rows = stateCopy.rows.map(function (row) {
                        rowIds[row.id] = false;
                        return __assign(__assign({}, row), { selected: false });
                    });
                    stateCopy.toggleAllState = false;
                }
                stateCopy.originalRows = stateCopy.originalRows.map(function (row) {
                    return row.id in rowIds ? __assign(__assign({}, row), { selected: rowIds[row.id] }) : __assign({}, row);
                });
                stateCopy.selectedRows = stateCopy.originalRows.filter(function (row) { return row.selected; });
                return stateCopy;
            default:
                throw new Error("Invalid reducer action");
        }
    };
};
var sortDataInOrder = function (data, columns) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return data.map(function (row) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        var newRow = {};
        columns.forEach(function (column) {
            if (!(column.name in row)) {
                throw new Error("Invalid row data, " + column.name + " not found");
            }
            newRow[column.name] = row[column.name];
        });
        return newRow;
    });
};
var makeRender = function (
// eslint-disable-next-line
value, 
// eslint-disable-next-line @typescript-eslint/no-explicit-any
render, row) {
    return render ? function () { return render({ row: row, value: value }); } : function () { return value; };
};
var makeHeaderRender = function (label, render) {
    return render ? function () { return render({ label: label }); } : function () { return label; };
};
var useTable = function (columns, data, options) {
    var columnsWithSorting = React.useMemo(function () {
        return columns.map(function (column) {
            return __assign(__assign({}, column), { label: column.label ? column.label : column.name, hidden: column.hidden ? column.hidden : false, sort: column.sort, sorted: {
                    on: false,
                    asc: false,
                } });
        });
    }, [columns]);
    var columnsByName = React.useMemo(function () { return getColumnsByName(columnsWithSorting); }, [columnsWithSorting]);
    var tableData = React.useMemo(function () {
        var sortedData = sortDataInOrder(data, columnsWithSorting);
        var newData = sortedData.map(function (row, idx) {
            return {
                id: idx,
                selected: false,
                hidden: false,
                original: row,
                cells: Object.entries(row)
                    .map(function (_a) {
                    var column = _a[0], value = _a[1];
                    return {
                        hidden: columnsByName[column].hidden,
                        field: column,
                        value: value,
                        render: makeRender(value, columnsByName[column].render, row),
                    };
                })
                    .filter(function (cell) { return !cell.hidden; }),
            };
        });
        return newData;
    }, [data, columnsWithSorting, columnsByName]);
    var reducer = createReducer();
    var _a = React.useReducer(reducer, {
        columns: columnsWithSorting,
        columnsByName: columnsByName,
        originalRows: tableData,
        rows: tableData,
        selectedRows: [],
        toggleAllState: false,
        filterOn: !!(options === null || options === void 0 ? void 0 : options.filter),
        sortColumn: options === null || options === void 0 ? void 0 : options.sortColumn,
        paginationEnabled: !!(options === null || options === void 0 ? void 0 : options.pagination),
        pagination: {
            page: 1,
            perPage: 10,
            canNext: true,
            canPrev: false,
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            nextPage: noop__default['default'],
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            prevPage: noop__default['default'],
        },
    }), state = _a[0], dispatch = _a[1];
    state.pagination.nextPage = React.useCallback(function () {
        dispatch({ type: "NEXT_PAGE" });
    }, [dispatch]);
    state.pagination.prevPage = React.useCallback(function () { return dispatch({ type: "PREV_PAGE" }); }, [dispatch]);
    React.useEffect(function () {
        dispatch({ type: "SET_ROWS", data: tableData });
    }, [tableData]);
    var headers = React.useMemo(function () {
        return __spreadArray([], state.columns.map(function (column) {
            var label = column.label ? column.label : column.name;
            return __assign(__assign({}, column), { render: makeHeaderRender(label, column.headerRender) });
        }));
    }, [state.columns]);
    React.useEffect(function () {
        if (options && options.filter) {
            dispatch({ type: "GLOBAL_FILTER", filter: options.filter });
        }
    });
    return {
        headers: headers.filter(function (column) { return !column.hidden; }),
        rows: state.rows,
        originalRows: state.originalRows,
        selectedRows: state.selectedRows,
        dispatch: dispatch,
        selectRow: function (rowId) { return dispatch({ type: "SELECT_ROW", rowId: rowId }); },
        toggleAll: function () { return dispatch({ type: "TOGGLE_ALL" }); },
        toggleSort: function (columnName, isAscOverride) {
            return dispatch({ type: "TOGGLE_SORT", columnName: columnName, isAscOverride: isAscOverride });
        },
        setSearchString: function (searchString) { return dispatch({ type: "SEARCH_STRING", searchString: searchString }); },
        pagination: state.pagination,
        toggleAllState: state.toggleAllState,
    };
};

var Wrapper$1 = styled__default['default'](Flex)(templateObject_1$o || (templateObject_1$o = __makeTemplateObject(["\n  border-bottom: 2px solid ", ";\n  overflow-x: scroll;\n\n  ::-webkit-scrollbar {\n    display: none;\n  }\n  -ms-overflow-style: none; /* IE and Edge */\n  scrollbar-width: none; /* Firefox */\n"], ["\n  border-bottom: 2px solid ", ";\n  overflow-x: scroll;\n\n  ::-webkit-scrollbar {\n    display: none;\n  }\n  -ms-overflow-style: none; /* IE and Edge */\n  scrollbar-width: none; /* Firefox */\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.textSubtle;
});
var Inner$1 = styled__default['default'](Flex)(templateObject_2$c || (templateObject_2$c = __makeTemplateObject(["\n  justify-content: space-between;\n  flex-grow: 1;\n\n  & > button + button {\n    margin-left: 4px;\n  }\n\n  ", " {\n    flex-grow: 0;\n  }\n"], ["\n  justify-content: space-between;\n  flex-grow: 1;\n\n  & > button + button {\n    margin-left: 4px;\n  }\n\n  ", " {\n    flex-grow: 0;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
});
var ButtonMenu = function (_a) {
    var _b = _a.activeIndex, activeIndex = _b === void 0 ? 0 : _b, onItemClick = _a.onItemClick, children = _a.children;
    return (React__default['default'].createElement(Wrapper$1, { p: ["0 4px", "0 16px"] },
        React__default['default'].createElement(Inner$1, null, React.Children.map(children, function (child, index) {
            var isActive = activeIndex === index;
            return React.cloneElement(child, {
                isActive: isActive,
                onClick: onItemClick ? function () { return onItemClick(index); } : undefined,
                color: isActive ? "backgroundAlt" : "textSubtle",
                backgroundColor: isActive ? "textSubtle" : "input",
            });
        }))));
};
var templateObject_1$o, templateObject_2$c;

var getBorderRadius = function (_a) {
    var scale = _a.scale;
    return (scale === "md" ? "16px 16px 0 0" : "24px 24px 0 0");
};
var getPadding = function (_a) {
    var scale = _a.scale;
    return (scale === "md" ? "8px" : "16px");
};
var Tab = styled__default['default'].button(templateObject_1$n || (templateObject_1$n = __makeTemplateObject(["\n  display: inline-flex;\n  justify-content: center;\n  cursor: pointer;\n  border: 0;\n  outline: 0;\n  flex-grow: 1;\n  padding: ", ";\n  border-radius: ", ";\n  font-size: 16px;\n  font-weight: 600;\n\n  ", " {\n    flex-grow: 0;\n  }\n\n  ", "\n"], ["\n  display: inline-flex;\n  justify-content: center;\n  cursor: pointer;\n  border: 0;\n  outline: 0;\n  flex-grow: 1;\n  padding: ", ";\n  border-radius: ", ";\n  font-size: 16px;\n  font-weight: 600;\n\n  ", " {\n    flex-grow: 0;\n  }\n\n  ", "\n"])), getPadding, getBorderRadius, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
}, styledSystem.color);
Tab.defaultProps = {
    scale: "md",
};
var templateObject_1$n;

var variants$1 = {
    PRIMARY: "primary",
    SECONDARY: "secondary",
    SUCCESS: "success",
    TEXTDISABLED: "textDisabled",
    TEXTSUBTLE: "textSubtle",
    BINANCE: "binance",
    FAILURE: "failure",
    WARNING: "warning",
};
var scales$1 = {
    MD: "md",
    SM: "sm",
};

var _a, _b;
var scaleVariants = (_a = {},
    _a[scales$1.MD] = {
        height: "28px",
        padding: "0 8px",
        fontSize: "14px",
    },
    _a[scales$1.SM] = {
        height: "24px",
        padding: "0 4px",
        fontSize: "12px",
    },
    _a);
var styleVariants = (_b = {},
    _b[variants$1.PRIMARY] = {
        backgroundColor: "primary",
    },
    _b[variants$1.SECONDARY] = {
        backgroundColor: "secondary",
    },
    _b[variants$1.SUCCESS] = {
        backgroundColor: "success",
    },
    _b[variants$1.TEXTDISABLED] = {
        backgroundColor: "textDisabled",
    },
    _b[variants$1.TEXTSUBTLE] = {
        backgroundColor: "textSubtle",
    },
    _b[variants$1.BINANCE] = {
        backgroundColor: "binance",
    },
    _b[variants$1.FAILURE] = {
        backgroundColor: "failure",
    },
    _b[variants$1.WARNING] = {
        backgroundColor: "warning",
    },
    _b);

var getOutlineStyles = function (_a) {
    var outline = _a.outline, theme = _a.theme, _b = _a.variant, variantKey = _b === void 0 ? variants$1.PRIMARY : _b;
    if (outline) {
        var themeColorKey = styleVariants[variantKey].backgroundColor;
        var color = theme.colors[themeColorKey];
        return "\n      color: " + color + ";\n      background: transparent;\n      border: 2px solid " + color + ";\n    ";
    }
    return "";
};
var StyledTag = styled__default['default'].div(templateObject_1$m || (templateObject_1$m = __makeTemplateObject(["\n  align-items: center;\n  border-radius: 16px;\n  color: #ffffff;\n  display: inline-flex;\n  font-weight: 400;\n  white-space: nowrap;\n\n  & > svg {\n    fill: currentColor;\n  }\n\n  ", "\n\n  ", "\n  ", "\n  ", "\n  ", "\n\n  ", "\n"], ["\n  align-items: center;\n  border-radius: 16px;\n  color: #ffffff;\n  display: inline-flex;\n  font-weight: 400;\n  white-space: nowrap;\n\n  & > svg {\n    fill: currentColor;\n  }\n\n  ", "\n\n  ",
    "\n  ",
    "\n  ", "\n  ", "\n\n  ", "\n"])), function (_a) {
    var textTransform = _a.textTransform;
    return textTransform && "text-transform: " + textTransform + ";";
}, styledSystem.variant({
    prop: "scale",
    variants: scaleVariants,
}), styledSystem.variant({
    variants: styleVariants,
}), styledSystem.space, styledSystem.typography, getOutlineStyles);
var templateObject_1$m;

var Tag = function (_a) {
    var startIcon = _a.startIcon, endIcon = _a.endIcon, children = _a.children, props = __rest(_a, ["startIcon", "endIcon", "children"]);
    return (React__default['default'].createElement(StyledTag, __assign({}, props),
        React__default['default'].isValidElement(startIcon) &&
            React__default['default'].cloneElement(startIcon, {
                mr: "0.5em",
            }),
        children,
        React__default['default'].isValidElement(endIcon) &&
            React__default['default'].cloneElement(endIcon, {
                ml: "0.5em",
            })));
};
Tag.defaultProps = {
    variant: "primary",
    scale: scales$1.MD,
    outline: false,
};

var scales = {
    SM: "sm",
    MD: "md",
    LG: "lg",
};

var scaleKeyValues = {
    sm: {
        handleHeight: "16px",
        handleWidth: "16px",
        handleLeft: "2px",
        handleTop: "2px",
        checkedLeft: "calc(100% - 18px)",
        toggleHeight: "20px",
        toggleWidth: "36px",
    },
    md: {
        handleHeight: "26px",
        handleWidth: "26px",
        handleLeft: "3px",
        handleTop: "3px",
        checkedLeft: "calc(100% - 30px)",
        toggleHeight: "32px",
        toggleWidth: "56px",
    },
    lg: {
        handleHeight: "32px",
        handleWidth: "32px",
        handleLeft: "4px",
        handleTop: "4px",
        checkedLeft: "calc(100% - 36px)",
        toggleHeight: "40px",
        toggleWidth: "72px",
    },
};
var getScale = function (property) {
    return function (_a) {
        var _b = _a.scale, scale = _b === void 0 ? scales.LG : _b;
        return scaleKeyValues[scale][property];
    };
};
var Handle = styled__default['default'].div(templateObject_1$l || (templateObject_1$l = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: 50%;\n  cursor: pointer;\n  height: ", ";\n  left: ", ";\n  position: absolute;\n  top: ", ";\n  transition: left 200ms ease-in;\n  width: ", ";\n  z-index: 1;\n"], ["\n  background-color: ", ";\n  border-radius: 50%;\n  cursor: pointer;\n  height: ", ";\n  left: ", ";\n  position: absolute;\n  top: ", ";\n  transition: left 200ms ease-in;\n  width: ", ";\n  z-index: 1;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.toggle.handleBackground;
}, getScale("handleHeight"), getScale("handleLeft"), getScale("handleTop"), getScale("handleWidth"));
var Input = styled__default['default'].input(templateObject_2$b || (templateObject_2$b = __makeTemplateObject(["\n  cursor: pointer;\n  opacity: 0;\n  height: 100%;\n  position: absolute;\n  width: 100%;\n  z-index: 3;\n\n  &:checked + ", " {\n    left: ", ";\n  }\n\n  &:focus + ", " {\n    box-shadow: ", ";\n  }\n\n  &:hover + ", ":not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n"], ["\n  cursor: pointer;\n  opacity: 0;\n  height: 100%;\n  position: absolute;\n  width: 100%;\n  z-index: 3;\n\n  &:checked + ", " {\n    left: ", ";\n  }\n\n  &:focus + ", " {\n    box-shadow: ", ";\n  }\n\n  &:hover + ", ":not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n"])), Handle, getScale("checkedLeft"), Handle, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, Handle, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
});
var StyledToggle = styled__default['default'].div(templateObject_3$5 || (templateObject_3$5 = __makeTemplateObject(["\n  align-items: center;\n  background-color: ", ";\n  border-radius: 24px;\n  box-shadow: ", ";\n  cursor: pointer;\n  display: inline-flex;\n  height: ", ";\n  position: relative;\n  transition: background-color 200ms;\n  width: ", ";\n"], ["\n  align-items: center;\n  background-color: ", ";\n  border-radius: 24px;\n  box-shadow: ", ";\n  cursor: pointer;\n  display: inline-flex;\n  height: ", ";\n  position: relative;\n  transition: background-color 200ms;\n  width: ", ";\n"])), function (_a) {
    var theme = _a.theme, checked = _a.checked;
    return theme.colors[checked ? "primary" : "input"];
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.inset;
}, getScale("toggleHeight"), getScale("toggleWidth"));
var templateObject_1$l, templateObject_2$b, templateObject_3$5;

var Toggle = function (_a) {
    var checked = _a.checked, _b = _a.scale, scale = _b === void 0 ? scales.LG : _b, props = __rest(_a, ["checked", "scale"]);
    var isChecked = !!checked;
    return (React__default['default'].createElement(StyledToggle, { checked: isChecked, scale: scale },
        React__default['default'].createElement(Input, __assign({ checked: checked, scale: scale }, props, { type: "checkbox" })),
        React__default['default'].createElement(Handle, { scale: scale })));
};

var breakpointMap = {
    xs: 370,
    sm: 576,
    md: 852,
    lg: 968,
    xl: 1080,
    xxl: 1200,
};
var breakpoints = Object.values(breakpointMap).map(function (breakpoint) { return breakpoint + "px"; });
var mediaQueries$1 = {
    xs: "@media screen and (min-width: " + breakpointMap.xs + "px)",
    sm: "@media screen and (min-width: " + breakpointMap.sm + "px)",
    md: "@media screen and (min-width: " + breakpointMap.md + "px)",
    lg: "@media screen and (min-width: " + breakpointMap.lg + "px)",
    xl: "@media screen and (min-width: " + breakpointMap.xl + "px)",
    xxl: "@media screen and (min-width: " + breakpointMap.xxl + "px)",
    nav: "@media screen and (min-width: " + breakpointMap.lg + "px)",
};
var shadows = {
    level1: "0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05)",
    active: "0px 0px 0px 1px #0098A1, 0px 0px 4px 8px rgba(31, 199, 212, 0.4)",
    success: "0px 0px 0px 1px #31D0AA, 0px 0px 0px 4px rgba(49, 208, 170, 0.2)",
    warning: "0px 0px 0px 1px #ED4B9E, 0px 0px 0px 4px rgba(237, 75, 158, 0.2)",
    focus: "0px 0px 0px 1px #b60b0b, 0px 0px 0px 4px rgba(182, 11, 11, 0.6)",
    inset: "inset 0px 2px 2px -1px rgba(74, 74, 104, 0.1)",
    tooltip: "0px 0px 2px rgba(0, 0, 0, 0.2), 0px 4px 12px -8px rgba(14, 14, 44, 0.1)",
};
var spacing = [0, 4, 8, 16, 24, 32, 48, 64];
var radii = {
    small: "4px",
    default: "16px",
    card: "24px",
    circle: "50%",
};
var zIndices = {
    dropdown: 10,
    modal: 100,
};
var base = {
    siteWidth: 1200,
    breakpoints: breakpoints,
    mediaQueries: mediaQueries$1,
    spacing: spacing,
    shadows: shadows,
    radii: radii,
    zIndices: zIndices,
};

/**
 * Can't use the media queries from "base.mediaQueries" because of how matchMedia works
 * In order for the listener to trigger we need have have the media query with a range, e.g.
 * (min-width: 370px) and (max-width: 576px)
 * @see https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList
 */
var mediaQueries = (function () {
    var prevMinWidth = 0;
    return Object.keys(breakpointMap).reduce(function (accum, size, index) {
        var _a, _b;
        // Largest size is just a min-width of second highest max-width
        if (index === Object.keys(breakpointMap).length - 1) {
            return __assign(__assign({}, accum), (_a = {}, _a[size] = "(min-width: " + prevMinWidth + "px)", _a));
        }
        var minWidth = prevMinWidth;
        var breakpoint = breakpointMap[size];
        // Min width for next iteration
        prevMinWidth = breakpoint + 1;
        return __assign(__assign({}, accum), (_b = {}, _b[size] = "(min-width: " + minWidth + "px) and (max-width: " + breakpoint + "px)", _b));
    }, {});
})();
var getKey = function (size) { return "is" + size.charAt(0).toUpperCase() + size.slice(1); };
var useMatchBreakpoints = function () {
    var _a = React.useState(function () {
        return Object.keys(mediaQueries).reduce(function (accum, size) {
            var _a;
            var key = getKey(size);
            var mql = window.matchMedia(mediaQueries[size]);
            return __assign(__assign({}, accum), (_a = {}, _a[key] = mql.matches, _a));
        }, {});
    }), state = _a[0], setState = _a[1];
    React.useEffect(function () {
        // Create listeners for each media query returning a function to unsubscribe
        var handlers = Object.keys(mediaQueries).map(function (size) {
            var mql = window.matchMedia(mediaQueries[size]);
            var handler = function (matchMediaQuery) {
                var key = getKey(size);
                setState(function (prevState) {
                    var _a;
                    return (__assign(__assign({}, prevState), (_a = {}, _a[key] = matchMediaQuery.matches, _a)));
                });
            };
            // Safari < 14 fix
            if (mql.addEventListener) {
                mql.addEventListener("change", handler);
            }
            return function () {
                // Safari < 14 fix
                if (mql.removeEventListener) {
                    mql.removeEventListener("change", handler);
                }
            };
        });
        return function () {
            handlers.forEach(function (unsubscribe) {
                unsubscribe();
            });
        };
    }, [setState]);
    return __assign(__assign({}, state), { isMobile: state.isXs || state.isSm, isTablet: state.isMd || state.isLg, isDesktop: state.isXl || state.isXxl });
};

var defaultParticleOptions = {
    size: 30,
    distance: 500,
};
var createParticle = function (x, y, imgSrc, options) {
    if (options === void 0) { options = {}; }
    var _a = __assign(__assign({}, defaultParticleOptions), options), size = _a.size, distance = _a.distance;
    var particle = document.createElement("particle");
    document.body.appendChild(particle);
    var width = Math.floor(Math.random() * size + 8);
    var height = width;
    var destinationX = (Math.random() - 0.5) * distance;
    var destinationY = (Math.random() - 0.5) * distance;
    var rotation = Math.random() * 520;
    var delay = Math.random() * 200;
    particle.style.backgroundRepeat = "no-repeat";
    particle.style.backgroundSize = "contain";
    particle.style.backgroundImage = "url(" + imgSrc + ")";
    particle.style.left = "0";
    particle.style.top = "0";
    particle.style.opacity = "0";
    particle.style.pointerEvents = "none";
    particle.style.position = "fixed";
    particle.style.width = width + "px";
    particle.style.height = height + "px";
    var animation = particle.animate([
        {
            transform: "translate(-50%, -50%) translate(" + x + "px, " + y + "px) rotate(0deg)",
            opacity: 1,
        },
        {
            transform: "translate(-50%, -50%) translate(" + (x + destinationX) + "px, " + (y + destinationY) + "px) rotate(" + rotation + "deg)",
            opacity: 0,
        },
    ], {
        duration: Math.random() * 1000 + 5000,
        easing: "cubic-bezier(0, .9, .57, 1)",
        delay: delay,
    });
    animation.onfinish = function () {
        particle.remove();
    };
};
var defaultOptions = {
    numberOfParticles: 30,
    debounceDuration: 200,
    particleOptions: {},
};
/**
 * @see https://css-tricks.com/playing-with-particles-using-the-web-animations-api/
 */
var useParticleBurst = function (options) {
    var _a = __assign(__assign({}, defaultOptions), options), selector = _a.selector, numberOfParticles = _a.numberOfParticles, debounceDuration = _a.debounceDuration, imgSrc = _a.imgSrc, disableWhen = _a.disableWhen, particleOptions = _a.particleOptions;
    var makeListener = React.useCallback(function () {
        return debounce__default['default'](function (event) {
            var isDisabled = disableWhen && disableWhen();
            if (!isDisabled) {
                var node = event.currentTarget;
                if (event.clientX === 0 && event.clientY === 0) {
                    var _a = node.getBoundingClientRect(), left = _a.left, width = _a.width, top_1 = _a.top, height = _a.height;
                    var x = left + width / 2;
                    var y = top_1 + height / 2;
                    for (var i = 0; i < numberOfParticles; i += 1) {
                        createParticle(x, y, imgSrc, particleOptions);
                    }
                }
                else {
                    for (var i = 0; i < numberOfParticles; i += 1) {
                        createParticle(event.clientX, event.clientY + window.scrollY, imgSrc, particleOptions);
                    }
                }
            }
        }, debounceDuration, { leading: true });
    }, [debounceDuration, numberOfParticles, imgSrc, disableWhen, particleOptions]);
    var listener = makeListener();
    var initialize = React.useCallback(function () {
        if (selector) {
            document.querySelectorAll(selector).forEach(function (element) {
                element.addEventListener("click", listener);
            });
        }
        else {
            document.addEventListener("click", listener);
        }
    }, [selector, listener]);
    var teardown = React.useCallback(function () {
        if (selector) {
            document.querySelectorAll(selector).forEach(function (element) {
                element.removeEventListener("click", listener);
            });
        }
        else {
            document.removeEventListener("click", listener);
        }
    }, [selector, listener]);
    React.useEffect(function () {
        initialize();
        return function () { return teardown(); };
    }, [initialize, teardown]);
    return { initialize: initialize, teardown: teardown };
};

var useKonamiCheatCode = function (matchedCodeHandler) {
    React.useEffect(function () {
        var pattern = [
            "ArrowUp",
            "ArrowUp",
            "ArrowDown",
            "ArrowDown",
            "ArrowLeft",
            "ArrowRight",
            "ArrowLeft",
            "ArrowRight",
        ];
        var currentIndex = 0;
        var onKeyUpHandler = function (event) {
            var key = event.key;
            // is key in correct order otherwise reset
            if (key !== pattern[currentIndex]) {
                currentIndex = 0;
                return;
            }
            currentIndex += 1;
            if (pattern.length === currentIndex) {
                currentIndex = 0;
                matchedCodeHandler();
            }
        };
        document.addEventListener("keyup", onKeyUpHandler);
        return function () { return document.removeEventListener("keyup", onKeyUpHandler); };
    }, [matchedCodeHandler]);
};

var baseColors = {
    failure: "#ED4B9E",
    primary: "#b60b0b",
    primaryBright: "#EAA7E5",
    primaryDark: "#0098A1",
    secondary: "#7645D9",
    success: "#31D0AA",
    warning: "#FFB237",
};
var additionalColors = {
    binance: "#F0B90B",
    overlay: "#452a7a",
    gold: "#FFC700",
    silver: "#B2B2B2",
    bronze: "#E7974D",
};
var lightColors = __assign(__assign(__assign({}, baseColors), additionalColors), { background: "#FAF9FA", backgroundDisabled: "#E9EAEB", backgroundAlt: "#FFFFFF", cardBorder: "#E7E3EB", contrast: "#191326", dropdown: "#F6F6F6", dropdownDeep: "#EEEEEE", invertedContrast: "#FFFFFF", input: "#eeeaf4", inputSecondary: "#d7caec", tertiary: "#EFF4F5", text: "#280D5F", textDisabled: "#BDC2C4", textSubtle: "#7A6EAA", disabled: "#E9EAEB", gradients: {
        bubblegum: "linear-gradient(139.73deg, #141f2e 0%, #141f2e 100%)",
        inverseBubblegum: "linear-gradient(139.73deg, #F3EFFF 0%, #E5FDFF 100%)",
        cardHeader: "linear-gradient(111.68deg, #F2ECF2 0%, #E8F2F6 100%)",
        blue: "linear-gradient(180deg, #A7E8F1 0%, #94E1F2 100%)",
        violet: "linear-gradient(180deg, #E2C9FB 0%, #CDB8FA 100%)",
        violetAlt: "linear-gradient(180deg, #CBD7EF 0%, #9A9FD0 100%)",
        gold: "linear-gradient(180deg, #FFD800 0%, #FDAB32 100%)",
    } });
var darkColors = __assign(__assign(__assign({}, baseColors), additionalColors), { secondary: "#f39016", background: "#141f2e", backgroundDisabled: "#3c3742", backgroundAlt: "#020316", cardBorder: "#383241", contrast: "#FFFFFF", dropdown: "#1E1D20", dropdownDeep: "#100C18", invertedContrast: "#191326", input: "#372F47", inputSecondary: "#262130", primaryDark: "#0098A1", tertiary: "#353547", text: "#F4EEFF", textDisabled: "#666171", textSubtle: "#B8ADD2", disabled: "#524B63", gradients: {
        bubblegum: "linear-gradient(139.73deg, #141f2e 0%, #141f2e 100%)",
        inverseBubblegum: "linear-gradient(139.73deg, #3D2A54 0%, #313D5C 100%)",
        cardHeader: "linear-gradient(166.77deg, #3B4155 0%, #3A3045 100%)",
        blue: "linear-gradient(180deg, #00707F 0%, #19778C 100%)",
        violet: "linear-gradient(180deg, #6C4999 0%, #6D4DB2 100%)",
        violetAlt: "linear-gradient(180deg, #434575 0%, #66578D 100%)",
        gold: "linear-gradient(180deg, #FFD800 0%, #FDAB32 100%)",
    } });

var light$7 = {
    background: lightColors.backgroundAlt,
};
var dark$7 = {
    background: darkColors.backgroundAlt,
};

var light$6 = {
    background: lightColors.backgroundAlt,
    boxShadow: shadows.level1,
    boxShadowActive: shadows.active,
    boxShadowSuccess: shadows.success,
    boxShadowWarning: shadows.warning,
    cardHeaderBackground: {
        default: lightColors.gradients.cardHeader,
        blue: lightColors.gradients.blue,
        bubblegum: lightColors.gradients.bubblegum,
        violet: lightColors.gradients.violet,
    },
    dropShadow: "drop-shadow(0px 1px 4px rgba(25, 19, 38, 0.15))",
};
var dark$6 = {
    background: darkColors.backgroundAlt,
    boxShadow: shadows.level1,
    boxShadowActive: shadows.active,
    boxShadowSuccess: shadows.success,
    boxShadowWarning: shadows.warning,
    cardHeaderBackground: {
        default: darkColors.gradients.cardHeader,
        blue: darkColors.gradients.blue,
        bubblegum: lightColors.gradients.bubblegum,
        violet: darkColors.gradients.violet,
    },
    dropShadow: "drop-shadow(0px 1px 4px rgba(25, 19, 38, 0.15))",
};

var light$5 = {
    handleBackground: lightColors.backgroundAlt,
    handleShadow: lightColors.textDisabled,
};
var dark$5 = {
    handleBackground: darkColors.backgroundAlt,
    handleShadow: darkColors.textDisabled,
};

var light$4 = {
    handleBackground: lightColors.backgroundAlt,
};
var dark$4 = {
    handleBackground: darkColors.backgroundAlt,
};

var light$3 = {
    handleBackground: lightColors.backgroundAlt,
};
var dark$3 = {
    handleBackground: darkColors.backgroundAlt,
};

var light$2 = {
    background: lightColors.backgroundAlt,
};
var dark$2 = {
    background: darkColors.backgroundAlt,
};

var light$1 = {
    background: lightColors.backgroundAlt,
};
var dark$1 = {
    background: darkColors.backgroundAlt,
};

var light = {
    background: darkColors.backgroundAlt,
    text: darkColors.text,
    boxShadow: shadows.tooltip,
};
var dark = {
    background: lightColors.backgroundAlt,
    text: lightColors.text,
    boxShadow: shadows.tooltip,
};

var darkTheme = __assign(__assign({}, base), { isDark: true, alert: dark$7, colors: darkColors, card: dark$6, toggle: dark$3, nav: dark$2, modal: dark$1, pancakeToggle: dark$5, radio: dark$4, tooltip: dark });

var lightTheme = __assign(__assign({}, base), { isDark: false, alert: light$7, colors: lightColors, card: light$6, toggle: light$3, nav: light$2, modal: light$1, pancakeToggle: light$5, radio: light$4, tooltip: light });

var isTouchDevice = function () {
    return "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
};

var Arrow = styled__default['default'].div(templateObject_1$k || (templateObject_1$k = __makeTemplateObject(["\n  &,\n  &::before {\n    position: absolute;\n    width: 10px;\n    height: 10px;\n    border-radius: 2px;\n    z-index: -1;\n  }\n\n  &::before {\n    content: \"\";\n    transform: rotate(45deg);\n    background: ", ";\n  }\n"], ["\n  &,\n  &::before {\n    position: absolute;\n    width: 10px;\n    height: 10px;\n    border-radius: 2px;\n    z-index: -1;\n  }\n\n  &::before {\n    content: \"\";\n    transform: rotate(45deg);\n    background: ", ";\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.tooltip.background;
});
var StyledTooltip = styled__default['default'].div(templateObject_2$a || (templateObject_2$a = __makeTemplateObject(["\n  padding: 16px;\n  font-size: 16px;\n  line-height: 130%;\n  border-radius: 16px;\n  max-width: 320px;\n  z-index: 101;\n  background: ", ";\n  color: ", ";\n  box-shadow: ", ";\n\n  &[data-popper-placement^=\"top\"] > ", " {\n    bottom: -4px;\n  }\n\n  &[data-popper-placement^=\"bottom\"] > ", " {\n    top: -4px;\n  }\n\n  &[data-popper-placement^=\"left\"] > ", " {\n    right: -4px;\n  }\n\n  &[data-popper-placement^=\"right\"] > ", " {\n    left: -4px;\n  }\n"], ["\n  padding: 16px;\n  font-size: 16px;\n  line-height: 130%;\n  border-radius: 16px;\n  max-width: 320px;\n  z-index: 101;\n  background: ", ";\n  color: ", ";\n  box-shadow: ", ";\n\n  &[data-popper-placement^=\"top\"] > ", " {\n    bottom: -4px;\n  }\n\n  &[data-popper-placement^=\"bottom\"] > ", " {\n    top: -4px;\n  }\n\n  &[data-popper-placement^=\"left\"] > ", " {\n    right: -4px;\n  }\n\n  &[data-popper-placement^=\"right\"] > ", " {\n    left: -4px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.tooltip.background;
}, function (_a) {
    var theme = _a.theme;
    return theme.tooltip.text;
}, function (_a) {
    var theme = _a.theme;
    return theme.tooltip.boxShadow;
}, Arrow, Arrow, Arrow, Arrow);
var templateObject_1$k, templateObject_2$a;

var invertTheme = function (currentTheme) {
    if (currentTheme.isDark) {
        return lightTheme;
    }
    return darkTheme;
};
var portalRoot = document.getElementById("portal-root");
var useTooltip = function (content, options) {
    var _a = options.placement, placement = _a === void 0 ? "auto" : _a, _b = options.trigger, trigger = _b === void 0 ? "hover" : _b, _c = options.arrowPadding, arrowPadding = _c === void 0 ? 16 : _c, _d = options.tooltipPadding, tooltipPadding = _d === void 0 ? { left: 16, right: 16 } : _d, _e = options.tooltipOffset, tooltipOffset = _e === void 0 ? [0, 10] : _e;
    var _f = React.useState(null), targetElement = _f[0], setTargetElement = _f[1];
    var _g = React.useState(null), tooltipElement = _g[0], setTooltipElement = _g[1];
    var _h = React.useState(null), arrowElement = _h[0], setArrowElement = _h[1];
    var _j = React.useState(false), visible = _j[0], setVisible = _j[1];
    var isHoveringOverTooltip = React.useRef(false);
    var hideTimeout = React.useRef();
    var hideTooltip = React.useCallback(function (e) {
        var hide = function () {
            e.stopPropagation();
            e.preventDefault();
            setVisible(false);
        };
        if (trigger === "hover") {
            if (hideTimeout.current) {
                window.clearTimeout(hideTimeout.current);
            }
            if (e.target === tooltipElement) {
                isHoveringOverTooltip.current = false;
            }
            if (!isHoveringOverTooltip.current) {
                hideTimeout.current = window.setTimeout(function () {
                    if (!isHoveringOverTooltip.current) {
                        hide();
                    }
                }, 100);
            }
        }
        else {
            hide();
        }
    }, [tooltipElement, trigger]);
    var showTooltip = React.useCallback(function (e) {
        e.stopPropagation();
        e.preventDefault();
        setVisible(true);
        if (trigger === "hover") {
            if (e.target === targetElement) {
                // If we were about to close the tooltip and got back to it
                // then prevent closing it.
                clearTimeout(hideTimeout.current);
            }
            if (e.target === tooltipElement) {
                isHoveringOverTooltip.current = true;
            }
        }
    }, [tooltipElement, targetElement, trigger]);
    var toggleTooltip = React.useCallback(function (e) {
        e.stopPropagation();
        setVisible(!visible);
    }, [visible]);
    // Trigger = hover
    React.useEffect(function () {
        if (targetElement === null || trigger !== "hover")
            return undefined;
        if (isTouchDevice()) {
            targetElement.addEventListener("touchstart", showTooltip);
            targetElement.addEventListener("touchend", hideTooltip);
        }
        else {
            targetElement.addEventListener("mouseenter", showTooltip);
            targetElement.addEventListener("mouseleave", hideTooltip);
        }
        return function () {
            targetElement.removeEventListener("touchstart", showTooltip);
            targetElement.removeEventListener("touchend", hideTooltip);
            targetElement.removeEventListener("mouseenter", showTooltip);
            targetElement.removeEventListener("mouseleave", showTooltip);
        };
    }, [trigger, targetElement, hideTooltip, showTooltip]);
    // Keep tooltip open when cursor moves from the targetElement to the tooltip
    React.useEffect(function () {
        if (tooltipElement === null || trigger !== "hover")
            return undefined;
        tooltipElement.addEventListener("mouseenter", showTooltip);
        tooltipElement.addEventListener("mouseleave", hideTooltip);
        return function () {
            tooltipElement.removeEventListener("mouseenter", showTooltip);
            tooltipElement.removeEventListener("mouseleave", hideTooltip);
        };
    }, [trigger, tooltipElement, hideTooltip, showTooltip]);
    // Trigger = click
    React.useEffect(function () {
        if (targetElement === null || trigger !== "click")
            return undefined;
        targetElement.addEventListener("click", toggleTooltip);
        return function () { return targetElement.removeEventListener("click", toggleTooltip); };
    }, [trigger, targetElement, visible, toggleTooltip]);
    // Handle click outside
    React.useEffect(function () {
        if (trigger !== "click")
            return undefined;
        var handleClickOutside = function (_a) {
            var target = _a.target;
            if (target instanceof Node) {
                if (tooltipElement != null &&
                    targetElement != null &&
                    !tooltipElement.contains(target) &&
                    !targetElement.contains(target)) {
                    setVisible(false);
                }
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return function () { return document.removeEventListener("mousedown", handleClickOutside); };
    }, [trigger, targetElement, tooltipElement]);
    // Trigger = focus
    React.useEffect(function () {
        if (targetElement === null || trigger !== "focus")
            return undefined;
        targetElement.addEventListener("focus", showTooltip);
        targetElement.addEventListener("blur", hideTooltip);
        return function () {
            targetElement.removeEventListener("focus", showTooltip);
            targetElement.removeEventListener("blur", hideTooltip);
        };
    }, [trigger, targetElement, showTooltip, hideTooltip]);
    // On small screens Popper.js tries to squeeze the tooltip to available space without overflowing beyound the edge
    // of the screen. While it works fine when the element is in the middle of the screen it does not handle well the
    // cases when the target element is very close to the edge of the screen - no margin is applied between the tooltip
    // and the screen edge.
    // preventOverflow mitigates this behaviour, default 16px paddings on left and right solve the problem for all screen sizes
    // that we support.
    // Note that in the farm page where there are tooltips very close to the edge of the screen this padding works perfectly
    // even on the iPhone 5 screen (320px wide), BUT in the storybook with the contrived example ScreenEdges example
    // iPhone 5 behaves differently overflowing beyound the edge. All paddings are identical so I have no idea why it is,
    // and fixing that seems like a very bad use of time.
    var _k = reactPopper.usePopper(targetElement, tooltipElement, {
        placement: placement,
        modifiers: [
            {
                name: "arrow",
                options: { element: arrowElement, padding: arrowPadding },
            },
            { name: "offset", options: { offset: tooltipOffset } },
            { name: "preventOverflow", options: { padding: tooltipPadding } },
        ],
    }), styles = _k.styles, attributes = _k.attributes;
    var tooltip = (React__default['default'].createElement(StyledTooltip, __assign({ ref: setTooltipElement, style: styles.popper }, attributes.popper),
        React__default['default'].createElement(styled.ThemeProvider, { theme: invertTheme }, content),
        React__default['default'].createElement(Arrow, { ref: setArrowElement, style: styles.arrow })));
    var tooltipInPortal = portalRoot ? reactDom.createPortal(tooltip, portalRoot) : null;
    return {
        targetRef: setTargetElement,
        tooltip: tooltipInPortal !== null && tooltipInPortal !== void 0 ? tooltipInPortal : tooltip,
        tooltipVisible: visible,
    };
};

var ModalHeader = styled__default['default'].div(templateObject_1$j || (templateObject_1$j = __makeTemplateObject(["\n  align-items: center;\n  background: ", ";\n  border-bottom: 1px solid ", ";\n  display: flex;\n  padding: 12px 24px;\n"], ["\n  align-items: center;\n  background: ", ";\n  border-bottom: 1px solid ", ";\n  display: flex;\n  padding: 12px 24px;\n"])), function (_a) {
    var background = _a.background;
    return background || "transparent";
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.cardBorder;
});
var ModalTitle = styled__default['default'](Flex)(templateObject_2$9 || (templateObject_2$9 = __makeTemplateObject(["\n  align-items: center;\n  flex: 1;\n"], ["\n  align-items: center;\n  flex: 1;\n"])));
var ModalBody = styled__default['default'](Flex)(templateObject_3$4 || (templateObject_3$4 = __makeTemplateObject(["\n  flex-direction: column;\n  max-height: 90vh;\n  overflow-y: auto;\n"], ["\n  flex-direction: column;\n  max-height: 90vh;\n  overflow-y: auto;\n"])));
var ModalCloseButton = function (_a) {
    var onDismiss = _a.onDismiss;
    return (React__default['default'].createElement(IconButton, { variant: "text", onClick: onDismiss, "aria-label": "Close the dialog" },
        React__default['default'].createElement(Icon$1E, { color: "primary" })));
};
var ModalBackButton = function (_a) {
    var onBack = _a.onBack;
    return (React__default['default'].createElement(IconButton, { variant: "text", onClick: onBack, "area-label": "go back", mr: "8px" },
        React__default['default'].createElement(Icon$23, { color: "primary" })));
};
var ModalContainer = styled__default['default'](Box)(templateObject_4$2 || (templateObject_4$2 = __makeTemplateObject(["\n  overflow: hidden;\n  background: ", ";\n  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);\n  border: 1px solid ", ";\n  border-radius: 32px;\n  width: 100%;\n  max-height: 100vh;\n  z-index: ", ";\n\n  ", " {\n    width: auto;\n    min-width: ", ";\n    max-width: 100%;\n  }\n"], ["\n  overflow: hidden;\n  background: ", ";\n  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);\n  border: 1px solid ", ";\n  border-radius: 32px;\n  width: 100%;\n  max-height: 100vh;\n  z-index: ", ";\n\n  ", " {\n    width: auto;\n    min-width: ", ";\n    max-width: 100%;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.modal.background;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.cardBorder;
}, function (_a) {
    var theme = _a.theme;
    return theme.zIndices.modal;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.xs;
}, function (_a) {
    var minWidth = _a.minWidth;
    return minWidth;
});
var templateObject_1$j, templateObject_2$9, templateObject_3$4, templateObject_4$2;

var Modal = function (_a) {
    var title = _a.title, onDismiss = _a.onDismiss, onBack = _a.onBack, children = _a.children, _b = _a.hideCloseButton, hideCloseButton = _b === void 0 ? false : _b, _c = _a.bodyPadding, bodyPadding = _c === void 0 ? "24px" : _c, _d = _a.headerBackground, headerBackground = _d === void 0 ? "transparent" : _d, _e = _a.minWidth, minWidth = _e === void 0 ? "320px" : _e, props = __rest(_a, ["title", "onDismiss", "onBack", "children", "hideCloseButton", "bodyPadding", "headerBackground", "minWidth"]);
    var theme = styled.useTheme();
    return (React__default['default'].createElement(ModalContainer, __assign({ minWidth: minWidth }, props),
        React__default['default'].createElement(ModalHeader, { background: getThemeValue("colors." + headerBackground, headerBackground)(theme) },
            React__default['default'].createElement(ModalTitle, null,
                onBack && React__default['default'].createElement(ModalBackButton, { onBack: onBack }),
                React__default['default'].createElement(Heading, null, title)),
            !hideCloseButton && React__default['default'].createElement(ModalCloseButton, { onDismiss: onDismiss })),
        React__default['default'].createElement(ModalBody, { p: bodyPadding }, children)));
};

var ModalWrapper = styled__default['default'].div(templateObject_1$i || (templateObject_1$i = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: ", ";\n"], ["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.zIndices.modal - 1;
});
var Context = React.createContext({
    isOpen: false,
    nodeId: "",
    modalNode: null,
    setModalNode: function () { return null; },
    onPresent: function () { return null; },
    onDismiss: function () { return null; },
    setCloseOnOverlayClick: function () { return true; },
});
var ModalProvider = function (_a) {
    var children = _a.children;
    var _b = React.useState(false), isOpen = _b[0], setIsOpen = _b[1];
    var _c = React.useState(), modalNode = _c[0], setModalNode = _c[1];
    var _d = React.useState(""), nodeId = _d[0], setNodeId = _d[1];
    var _e = React.useState(true), closeOnOverlayClick = _e[0], setCloseOnOverlayClick = _e[1];
    var handlePresent = function (node, newNodeId) {
        setModalNode(node);
        setIsOpen(true);
        setNodeId(newNodeId);
    };
    var handleDismiss = function () {
        setModalNode(undefined);
        setIsOpen(false);
        setNodeId("");
    };
    var handleOverlayDismiss = function () {
        if (closeOnOverlayClick) {
            handleDismiss();
        }
    };
    return (React__default['default'].createElement(Context.Provider, { value: {
            isOpen: isOpen,
            nodeId: nodeId,
            modalNode: modalNode,
            setModalNode: setModalNode,
            onPresent: handlePresent,
            onDismiss: handleDismiss,
            setCloseOnOverlayClick: setCloseOnOverlayClick,
        } },
        isOpen && (React__default['default'].createElement(ModalWrapper, null,
            React__default['default'].createElement(Overlay, { show: true, onClick: handleOverlayDismiss }),
            React__default['default'].isValidElement(modalNode) &&
                React__default['default'].cloneElement(modalNode, {
                    onDismiss: handleDismiss,
                }))),
        children));
};
var templateObject_1$i;

var useModal = function (modal, closeOnOverlayClick, updateOnPropsChange, modalId) {
    if (closeOnOverlayClick === void 0) { closeOnOverlayClick = true; }
    if (updateOnPropsChange === void 0) { updateOnPropsChange = false; }
    if (modalId === void 0) { modalId = "defaultNodeId"; }
    var _a = React.useContext(Context), isOpen = _a.isOpen, nodeId = _a.nodeId, modalNode = _a.modalNode, setModalNode = _a.setModalNode, onPresent = _a.onPresent, onDismiss = _a.onDismiss, setCloseOnOverlayClick = _a.setCloseOnOverlayClick;
    var onPresentCallback = React.useCallback(function () {
        onPresent(modal, modalId);
    }, [modal, modalId, onPresent]);
    // Updates the "modal" component if props are changed
    // Use carefully since it might result in unnecessary rerenders
    // Typically if modal is staic there is no need for updates, use when you expect props to change
    React.useEffect(function () {
        // NodeId is needed in case there are 2 useModal hooks on the same page and one has updateOnPropsChange
        if (updateOnPropsChange && isOpen && nodeId === modalId) {
            var modalProps = get__default['default'](modal, "props");
            var oldModalProps = get__default['default'](modalNode, "props");
            // Note: I tried to use lodash isEqual to compare props but it is giving false-negatives too easily
            // For example ConfirmSwapModal in exchange has ~500 lines prop object that stringifies to same string
            // and online diff checker says both objects are identical but lodash isEqual thinks they are different
            // Do not try to replace JSON.stringify with isEqual, high risk of infinite rerenders
            // TODO: Find a good way to handle modal updates, this whole flow is just backwards-compatible workaround,
            // would be great to simplify the logic here
            if (modalProps && oldModalProps && JSON.stringify(modalProps) !== JSON.stringify(oldModalProps)) {
                setModalNode(modal);
            }
        }
    }, [updateOnPropsChange, nodeId, modalId, isOpen, modal, modalNode, setModalNode]);
    React.useEffect(function () {
        setCloseOnOverlayClick(closeOnOverlayClick);
    }, [closeOnOverlayClick, setCloseOnOverlayClick]);
    return [onPresentCallback, onDismiss];
};

var Icon$h = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M13.7803 2.71967C14.0732 3.01256 14.0732 3.48744 13.7803 3.78033L12.8107 4.75L14.0307 5.96999H20C21.1 5.96999 22 6.86999 22 7.96999V12.73C21.28 12.25 20.43 11.97 19.5 11.97C17.19 11.97 15.3 13.73 15.05 15.97H11.91C11.96 15.64 12 15.31 12 14.97C12 13.43 11.41 12.03 10.46 10.97H11C12.1 10.97 13 10.07 13 8.96999V7.06068L11.75 5.81066L10.7803 6.78033C10.4874 7.07322 10.0126 7.07322 9.71967 6.78033C9.42678 6.48744 9.42678 6.01256 9.71967 5.71967L12.7197 2.71967C13.0126 2.42678 13.4874 2.42678 13.7803 2.71967Z" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M11 15C11 17.7614 8.76142 20 6 20C3.23858 20 1 17.7614 1 15C1 12.2386 3.23858 10 6 10C8.76142 10 11 12.2386 11 15ZM9 15C9 16.6569 7.65685 18 6 18C4.34315 18 3 16.6569 3 15C3 13.3431 4.34315 12 6 12C7.65685 12 9 13.3431 9 15Z" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M19.5 12.97C17.57 12.97 16 14.54 16 16.47C16 18.4 17.57 19.97 19.5 19.97C21.43 19.97 23 18.4 23 16.47C23 14.54 21.43 12.97 19.5 12.97ZM19.5 17.97C18.67 17.97 18 17.3 18 16.47C18 15.64 18.67 14.97 19.5 14.97C20.33 14.97 21 15.64 21 16.47C21 17.3 20.33 17.97 19.5 17.97Z" }),
        React__default['default'].createElement("path", { d: "M9 8.96997H4C3.45 8.96997 3 8.52997 3 7.96997C3 7.41997 3.45 6.96997 4 6.96997H7C8.1 6.96997 9 7.86997 9 8.96997Z" })));
};

var Icon$g = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M12 12.75C13.63 12.75 15.07 13.14 16.24 13.65C17.32 14.13 18 15.21 18 16.38V17C18 17.55 17.55 18 17 18H7C6.45 18 6 17.55 6 17V16.39C6 15.21 6.68 14.13 7.76 13.66C8.93 13.14 10.37 12.75 12 12.75ZM4 13C5.1 13 6 12.1 6 11C6 9.9 5.1 9 4 9C2.9 9 2 9.9 2 11C2 12.1 2.9 13 4 13ZM5.13 14.1C4.76 14.04 4.39 14 4 14C3.01 14 2.07 14.21 1.22 14.58C0.48 14.9 0 15.62 0 16.43V17C0 17.55 0.45 18 1 18H4.5V16.39C4.5 15.56 4.73 14.78 5.13 14.1ZM20 13C21.1 13 22 12.1 22 11C22 9.9 21.1 9 20 9C18.9 9 18 9.9 18 11C18 12.1 18.9 13 20 13ZM24 16.43C24 15.62 23.52 14.9 22.78 14.58C21.93 14.21 20.99 14 20 14C19.61 14 19.24 14.04 18.87 14.1C19.27 14.78 19.5 15.56 19.5 16.39V18H23C23.55 18 24 17.55 24 17V16.43ZM12 6C13.66 6 15 7.34 15 9C15 10.66 13.66 12 12 12C10.34 12 9 10.66 9 9C9 7.34 10.34 6 12 6Z" })));
};

var Icon$f = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M4 18H20C20.55 18 21 17.55 21 17C21 16.45 20.55 16 20 16H4C3.45 16 3 16.45 3 17C3 17.55 3.45 18 4 18ZM4 13H20C20.55 13 21 12.55 21 12C21 11.45 20.55 11 20 11H4C3.45 11 3 11.45 3 12C3 12.55 3.45 13 4 13ZM3 7C3 7.55 3.45 8 4 8H20C20.55 8 21 7.55 21 7C21 6.45 20.55 6 20 6H4C3.45 6 3 6.45 3 7Z" })));
};

var Icon$e = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M4 18H15C15.55 18 16 17.55 16 17C16 16.45 15.55 16 15 16H4C3.45 16 3 16.45 3 17C3 17.55 3.45 18 4 18ZM4 13H12C12.55 13 13 12.55 13 12C13 11.45 12.55 11 12 11H4C3.45 11 3 11.45 3 12C3 12.55 3.45 13 4 13ZM3 7C3 7.55 3.45 8 4 8H15C15.55 8 16 7.55 16 7C16 6.45 15.55 6 15 6H4C3.45 6 3 6.45 3 7ZM20.3 14.88L17.42 12L20.3 9.12C20.69 8.73 20.69 8.1 20.3 7.71C19.91 7.32 19.28 7.32 18.89 7.71L15.3 11.3C14.91 11.69 14.91 12.32 15.3 12.71L18.89 16.3C19.28 16.69 19.91 16.69 20.3 16.3C20.68 15.91 20.69 15.27 20.3 14.88Z" })));
};

var Icon$d = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M9.99998 19V14H14V19C14 19.55 14.45 20 15 20H18C18.55 20 19 19.55 19 19V12H20.7C21.16 12 21.38 11.43 21.03 11.13L12.67 3.59997C12.29 3.25997 11.71 3.25997 11.33 3.59997L2.96998 11.13C2.62998 11.43 2.83998 12 3.29998 12H4.99998V19C4.99998 19.55 5.44998 20 5.99998 20H8.99998C9.54998 20 9.99998 19.55 9.99998 19Z" })));
};

var Icon$c = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M21.9 8.89L20.85 4.52C20.63 3.62 19.85 3 18.94 3H16.73H14.72H13H11H9.28001H7.26001H5.05001C4.15001 3 3.36001 3.63 3.15001 4.52L2.10001 8.89C1.86001 9.91 2.08001 10.95 2.72001 11.77C2.80001 11.88 2.91001 11.96 3.00001 12.06V19C3.00001 20.1 3.90001 21 5.00001 21H19C20.1 21 21 20.1 21 19V12.06C21.09 11.97 21.2 11.88 21.28 11.78C21.92 10.96 22.15 9.91 21.9 8.89ZM7.02001 5L6.44001 9.86C6.36001 10.51 5.84001 11 5.23001 11C4.74001 11 4.43001 10.71 4.30001 10.53C4.04001 10.2 3.95001 9.77 4.05001 9.36L5.05001 5H7.02001ZM18.91 4.99L19.96 9.36C20.06 9.78 19.97 10.2 19.71 10.53C19.57 10.71 19.27 11 18.77 11C18.16 11 17.63 10.51 17.56 9.86L16.98 5L18.91 4.99ZM15.51 9.52C15.56 9.91 15.44 10.3 15.18 10.59C14.95 10.85 14.63 11 14.22 11C13.55 11 13 10.41 13 9.69V5H14.96L15.51 9.52ZM11 9.69C11 10.41 10.45 11 9.71001 11C9.37001 11 9.06001 10.85 8.82001 10.59C8.57001 10.3 8.45001 9.91 8.49001 9.52L9.04001 5H11V9.69ZM18 19H6.00001C5.45001 19 5.00001 18.55 5.00001 18V12.97C5.08001 12.98 5.15001 13 5.23001 13C6.10001 13 6.89001 12.64 7.47001 12.05C8.07001 12.65 8.87001 13 9.78001 13C10.65 13 11.43 12.64 12.01 12.07C12.6 12.64 13.4 13 14.3 13C15.14 13 15.94 12.65 16.54 12.05C17.12 12.64 17.91 13 18.78 13C18.86 13 18.93 12.98 19.01 12.97V18C19 18.55 18.55 19 18 19Z" })));
};

var Icon$b = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M5 7C5 6.44772 4.55228 6 4 6C3.44772 6 3 6.44772 3 7V18C3 19.1046 3.89543 20 5 20H20C20.5523 20 21 19.5523 21 19C21 18.4477 20.5523 18 20 18H5V7Z" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M19 17H7C6.44772 17 6 16.5523 6 16V12C6 11.4477 6.44772 11 7 11H10V10C10 9.44772 10.4477 9 11 9H14V7C14 6.44772 14.4477 6 15 6H19C19.5523 6 20 6.44772 20 7V16C20 16.5523 19.5523 17 19 17ZM16 8H18V15H16V8ZM12 15H14V11H12V15ZM10 13H8V15H10V13Z" })));
};

var Logo$2 = function (_a) {
    _a.isDark; var props = __rest(_a, ["isDark"]);
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 182 80" }, props),
        React__default['default'].createElement("image", { height: "80", href: '/images/LogoText.png' })));
};
var LogoWithText = React__default['default'].memo(Logo$2, function (prev, next) { return prev.isDark === next.isDark; });

var Icon$a = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.1534 13.6089L4.15362 13.61C4.77322 16.8113 7.42207 19.3677 10.647 19.8853L10.6502 19.8858C13.0412 20.2736 15.2625 19.6103 16.9422 18.2833C11.3549 16.2878 7.9748 10.3524 9.26266 4.48816C5.69846 5.77194 3.35817 9.51245 4.1534 13.6089ZM10.0083 2.21054C4.76622 3.2533 1.09895 8.36947 2.19006 13.9901C2.97006 18.0201 6.28006 21.2101 10.3301 21.8601C13.8512 22.4311 17.0955 21.1608 19.2662 18.8587C19.2765 18.8478 19.2866 18.837 19.2968 18.8261C19.4385 18.6745 19.5757 18.5184 19.7079 18.3581C19.7105 18.355 19.713 18.3519 19.7156 18.3487C19.8853 18.1426 20.0469 17.9295 20.2001 17.7101C20.4101 17.4001 20.2401 16.9601 19.8701 16.9201C19.5114 16.8796 19.1602 16.8209 18.817 16.7452C18.7964 16.7406 18.7758 16.736 18.7552 16.7313C18.6676 16.7114 18.5804 16.6903 18.4938 16.6681C18.4919 16.6676 18.4901 16.6672 18.4882 16.6667C13.0234 15.2647 9.72516 9.48006 11.4542 4.03417C11.4549 4.03214 11.4555 4.03012 11.4562 4.0281C11.4875 3.92954 11.5205 3.83109 11.5552 3.73278C11.5565 3.72911 11.5578 3.72543 11.5591 3.72175C11.6768 3.38921 11.8136 3.05829 11.9701 2.73005C12.1301 2.39005 11.8501 2.01005 11.4701 2.03005C11.1954 2.04379 10.924 2.06848 10.6561 2.10368C10.6517 2.10427 10.6472 2.10486 10.6428 2.10545C10.4413 2.13221 10.2418 2.16492 10.0446 2.2034C10.0325 2.20576 10.0204 2.20814 10.0083 2.21054Z" })));
};

var Icon$9 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M6 10C4.9 10 4 10.9 4 12C4 13.1 4.9 14 6 14C7.1 14 8 13.1 8 12C8 10.9 7.1 10 6 10ZM18 10C16.9 10 16 10.9 16 12C16 13.1 16.9 14 18 14C19.1 14 20 13.1 20 12C20 10.9 19.1 10 18 10ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z" })));
};

var Icon$8 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M12.8533 3.39627C12.4634 2.75821 11.5366 2.75821 11.1467 3.39627L7.42977 9.47855C7.02256 10.1449 7.50213 11 8.28306 11H15.7169C16.4979 11 16.9774 10.1449 16.5702 9.47855L12.8533 3.39627ZM12 5.84L13.93 9H10.06L12 5.84ZM17.5 13C15.01 13 13 15.01 13 17.5C13 19.99 15.01 22 17.5 22C19.99 22 22 19.99 22 17.5C22 15.01 19.99 13 17.5 13ZM17.5 20C16.12 20 15 18.88 15 17.5C15 16.12 16.12 15 17.5 15C18.88 15 20 16.12 20 17.5C20 18.88 18.88 20 17.5 20ZM3 19.5C3 20.6046 3.89543 21.5 5 21.5H9C10.1046 21.5 11 20.6046 11 19.5V15.5C11 14.3954 10.1046 13.5 9 13.5H5C3.89543 13.5 3 14.3954 3 15.5V19.5ZM5 15.5H9V19.5H5V15.5Z" })));
};

var Icon$7 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M7.5 13C7.5 11.8954 8.39543 11 9.5 11H12.5C13.6046 11 14.5 11.8954 14.5 13V15C14.5 16.1046 13.6046 17 12.5 17H9.5C8.39543 17 7.5 16.1046 7.5 15V13Z" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.5 2C8.39543 2 7.5 2.89543 7.5 4V6.49482C7.5 6.93167 7.2113 7.30895 6.81834 7.49981C5.15004 8.31009 4 10.0207 4 12V17C4 19.2091 5.79086 21 8 21H14C16.2091 21 18 19.2091 18 17V12C18 11.4175 17.9004 10.8583 17.7173 10.3385L17.7892 10.297C19.4786 9.32167 20.0574 7.16153 19.082 5.47221C18.1552 3.86682 16.1534 3.25957 14.5 4.05146V4C14.5 2.89543 13.6046 2 12.5 2H9.5ZM9.5 6.25V4H12.5V6.25H9.5ZM9.22663 7.75C8.89473 8.46917 8.30318 9.00205 7.69211 9.29884C6.68638 9.78731 6 10.8154 6 12V17C6 18.1046 6.89543 19 8 19H14C15.1046 19 16 18.1046 16 17V12C16 10.8154 15.3136 9.78731 14.3079 9.29884C13.6968 9.00205 13.1053 8.46917 12.7734 7.75H9.22663ZM14.5 6.3226V6.49482C14.5 6.93167 14.7887 7.30895 15.1817 7.49981C15.7529 7.77726 16.2634 8.16029 16.6878 8.62352L16.7892 8.56495C17.522 8.1419 17.773 7.20495 17.35 6.47221C16.9346 5.75269 16.0213 5.49542 15.2914 5.89229L14.5 6.3226Z" })));
};

var Icon$6 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M5.66 4.2L6.05 4.59C6.44 4.97 6.44 5.61 6.05 5.99L6.04 6C5.65 6.39 5.03 6.39 4.64 6L4.25 5.61C3.86 5.23 3.86 4.6 4.25 4.21L4.26 4.2C4.64 3.82 5.27 3.81 5.66 4.2Z" }),
        React__default['default'].createElement("path", { d: "M1.99 10.95H3.01C3.56 10.95 4 11.39 4 11.95V11.96C4 12.51 3.56 12.95 3 12.94H1.99C1.44 12.94 1 12.5 1 11.95V11.94C1 11.39 1.44 10.95 1.99 10.95Z" }),
        React__default['default'].createElement("path", { d: "M12 1H12.01C12.56 1 13 1.44 13 1.99V2.96C13 3.51 12.56 3.95 12 3.94H11.99C11.44 3.94 11 3.5 11 2.95V1.99C11 1.44 11.44 1 12 1Z" }),
        React__default['default'].createElement("path", { d: "M18.34 4.2C18.73 3.82 19.36 3.82 19.75 4.21C20.14 4.6 20.14 5.22 19.75 5.61L19.36 6C18.98 6.39 18.35 6.39 17.96 6L17.95 5.99C17.56 5.61 17.56 4.98 17.95 4.59L18.34 4.2Z" }),
        React__default['default'].createElement("path", { d: "M18.33 19.7L17.94 19.31C17.55 18.92 17.55 18.3 17.95 17.9C18.33 17.52 18.96 17.51 19.35 17.9L19.74 18.29C20.13 18.68 20.13 19.31 19.74 19.7C19.35 20.09 18.72 20.09 18.33 19.7Z" }),
        React__default['default'].createElement("path", { d: "M20 11.95V11.94C20 11.39 20.44 10.95 20.99 10.95H22C22.55 10.95 22.99 11.39 22.99 11.94V11.95C22.99 12.5 22.55 12.94 22 12.94H20.99C20.44 12.94 20 12.5 20 11.95Z" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M6 11.95C6 8.64 8.69 5.95 12 5.95C15.31 5.95 18 8.64 18 11.95C18 15.26 15.31 17.95 12 17.95C8.69 17.95 6 15.26 6 11.95ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" }),
        React__default['default'].createElement("path", { d: "M12 22.9H11.99C11.44 22.9 11 22.46 11 21.91V20.95C11 20.4 11.44 19.96 11.99 19.96H12C12.55 19.96 12.99 20.4 12.99 20.95V21.91C12.99 22.46 12.55 22.9 12 22.9Z" }),
        React__default['default'].createElement("path", { d: "M5.66 19.69C5.27 20.08 4.64 20.08 4.25 19.69C3.86 19.3 3.86 18.68 4.24 18.28L4.63 17.89C5.02 17.5 5.65 17.5 6.04 17.89L6.05 17.9C6.43 18.28 6.44 18.91 6.05 19.3L5.66 19.69Z" })));
};

var Icon$5 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M19 5H17C17 3.89543 16.1046 3 15 3H9C7.89543 3 7 3.89543 7 5H5C3.9 5 3 5.9 3 7V8C3 10.55 4.92 12.63 7.39 12.94C8.02 14.44 9.37 15.57 11 15.9V19H8C7.44772 19 7 19.4477 7 20C7 20.5523 7.44772 21 8 21H16C16.5523 21 17 20.5523 17 20C17 19.4477 16.5523 19 16 19H13V15.9C14.63 15.57 15.98 14.44 16.61 12.94C19.08 12.63 21 10.55 21 8V7C21 5.9 20.1 5 19 5ZM5 8V7H7V10.82C5.84 10.4 5 9.3 5 8ZM12 14C10.35 14 9 12.65 9 11V5H15V11C15 12.65 13.65 14 12 14ZM19 8C19 9.3 18.16 10.4 17 10.82V7H19V8Z" })));
};

var Icon$4 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M12 3C7.02985 3 3 7.02985 3 11.9904C3 16.9606 7.02985 21 12 21C16.9701 21 21 16.9606 21 11.9904C21 7.02985 16.9701 3 12 3ZM16.4328 8.65139C16.3753 9.48614 14.8305 15.7228 14.8305 15.7228C14.8305 15.7228 14.7345 16.0874 14.3987 16.097C14.2836 16.097 14.1301 16.0874 13.9574 15.9243C13.6023 15.6269 12.7964 15.0512 12.0384 14.5235C12.0096 14.5522 11.9808 14.581 11.9424 14.6098C11.7697 14.7633 11.5107 14.984 11.2324 15.2527C11.1269 15.3486 11.0117 15.4542 10.8966 15.5693L10.887 15.5789C10.8198 15.6461 10.7623 15.694 10.7143 15.7324C10.3401 16.0394 10.3017 15.7804 10.3017 15.6461L10.5032 13.4488V13.4296L10.5128 13.4104C10.5224 13.3817 10.5416 13.3721 10.5416 13.3721C10.5416 13.3721 14.4659 9.87953 14.5714 9.50533C14.581 9.48614 14.5522 9.46695 14.5043 9.48614C14.2452 9.57249 9.72601 12.4318 9.22708 12.7484C9.19829 12.7676 9.11194 12.758 9.11194 12.758L6.91471 12.0384C6.91471 12.0384 6.65565 11.9328 6.742 11.693C6.76119 11.645 6.78998 11.597 6.89552 11.5299C7.38486 11.1844 15.8955 8.12367 15.8955 8.12367C15.8955 8.12367 16.1354 8.04691 16.2793 8.09488C16.3465 8.12367 16.3849 8.15245 16.4232 8.2484C16.4328 8.28678 16.4424 8.36354 16.4424 8.44989C16.4424 8.49787 16.4328 8.55544 16.4328 8.65139Z" })));
};

var Icon$3 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 18 18", xmlns: "http://www.w3.org/2000/svg" }, props),
        React__default['default'].createElement("path", { d: "M9 1.625c2.407 0 2.685.01 3.641.052.874.04 1.358.185 1.666.308.422.165.72.36 1.04.669.318.319.514.617.668 1.039.123.318.267.792.308 1.666.042.946.052 1.234.052 3.641s-.01 2.685-.052 3.641c-.04.874-.185 1.358-.308 1.666-.165.422-.36.72-.669 1.04a2.66 2.66 0 01-1.039.668c-.318.123-.792.267-1.666.308-.946.042-1.234.052-3.641.052s-2.685-.01-3.641-.052c-.874-.04-1.358-.185-1.666-.308a2.911 2.911 0 01-1.04-.669 2.659 2.659 0 01-.668-1.039c-.123-.318-.267-.792-.308-1.666-.042-.946-.052-1.234-.052-3.641s.01-2.685.052-3.641c.04-.874.185-1.358.308-1.666.165-.422.36-.72.669-1.04a2.658 2.658 0 011.039-.668c.318-.123.792-.267 1.666-.308.956-.042 1.234-.052 3.641-.052zM9 0C6.552 0 6.254.01 5.287.051c-.957.052-1.615.196-2.18.422a4.311 4.311 0 00-1.595 1.039A4.311 4.311 0 00.473 3.106c-.226.566-.37 1.224-.422 2.18C.011 6.255 0 6.553 0 9s.01 2.746.051 3.713c.042.957.196 1.615.422 2.18.226.597.535 1.091 1.039 1.595.504.504.998.813 1.594 1.039.576.226 1.224.37 2.18.422.957.04 1.266.051 3.714.051s2.746-.01 3.713-.051c.957-.042 1.615-.196 2.18-.422a4.311 4.311 0 001.595-1.039 4.311 4.311 0 001.039-1.594c.226-.576.37-1.224.422-2.18.04-.957.051-1.266.051-3.714s-.01-2.746-.051-3.713c-.042-.957-.196-1.615-.422-2.18a4.312 4.312 0 00-1.039-1.595A4.311 4.311 0 0014.894.473c-.576-.226-1.224-.37-2.18-.422C11.745.011 11.447 0 9 0z" }),
        React__default['default'].createElement("path", { d: "M9 4.382a4.618 4.618 0 100 9.236 4.618 4.618 0 000-9.236zm0 7.621A3.007 3.007 0 015.997 9 3.007 3.007 0 019 5.997 3.007 3.007 0 0112.003 9 3.007 3.007 0 019 12.003zM13.803 5.277a1.08 1.08 0 100-2.16 1.08 1.08 0 000 2.16z" })));
};

var Icon$2 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M14.3137 3L15.2631 3.94934C14.5597 5.19866 14.7398 6.81097 15.8032 7.87441C16.8667 8.93786 18.479 9.11792 19.7283 8.4146L20.6777 9.36396L17.6569 12.3848L17.1287 11.8566C16.7382 11.4661 16.105 11.4661 15.7145 11.8566C15.3239 12.2471 15.3239 12.8803 15.7145 13.2708L16.2426 13.799L9.36396 20.6777L8.49923 19.8129C9.71921 18.5286 9.69924 16.4983 8.43932 15.2384C7.1794 13.9784 5.14908 13.9585 3.86473 15.1784L3 14.3137L9.87868 7.43503L10.2145 7.77081C10.605 8.16134 11.2382 8.16134 11.6287 7.77081C12.0192 7.38029 12.0192 6.74713 11.6287 6.3566L11.2929 6.02081L14.3137 3ZM12.8995 1.58579C13.6805 0.804738 14.9469 0.804738 15.7279 1.58579L17.299 3.15684C17.6895 3.54736 17.6895 4.18053 17.299 4.57105L17.2175 4.65257C16.7183 5.15173 16.7183 5.96103 17.2175 6.4602C17.7166 6.95936 18.5259 6.95936 19.0251 6.4602L19.1066 6.37868C19.4971 5.98816 20.1303 5.98816 20.5208 6.37868L22.0919 7.94975C22.8729 8.7308 22.8729 9.99713 22.0919 10.7782L10.7782 22.0919C9.99713 22.8729 8.7308 22.8729 7.94975 22.0919L6.37869 20.5208C5.98817 20.1303 5.98817 19.4971 6.37869 19.1066L7.02511 18.4602C7.52427 17.961 7.52427 17.1517 7.02511 16.6526C6.52594 16.1534 5.71664 16.1534 5.21748 16.6526L4.57106 17.299C4.18054 17.6895 3.54737 17.6895 3.15685 17.299L1.58579 15.7279C0.804738 14.9469 0.804738 13.6805 1.58579 12.8995L12.8995 1.58579ZM13.8787 8.6066C13.4882 8.21608 12.855 8.21608 12.4645 8.6066C12.0739 8.99712 12.0739 9.63029 12.4645 10.0208L13.4645 11.0208C13.855 11.4113 14.4882 11.4113 14.8787 11.0208C15.2692 10.6303 15.2692 9.99713 14.8787 9.6066L13.8787 8.6066Z" })));
};

var Icon$1 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.86 4.86003L21.65 7.65003C21.84 7.84003 21.84 8.16003 21.64 8.35003L18.85 11.14C18.54 11.46 18 11.24 18 10.79V9.00003H4C3.45 9.00003 3 8.55003 3 8.00003C3 7.45003 3.45 7.00003 4 7.00003H18V5.21003C18 4.76003 18.54 4.54003 18.86 4.86003ZM5.14001 19.14L2.35001 16.35C2.16001 16.16 2.16001 15.84 2.36001 15.65L5.15001 12.86C5.46001 12.54 6.00001 12.76 6.00001 13.21V15H20C20.55 15 21 15.45 21 16C21 16.55 20.55 17 20 17H6.00001V18.79C6.00001 19.24 5.46001 19.46 5.14001 19.14Z" })));
};

var Icon = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M8.65854 19C15.4488 19 19.1659 13.2338 19.1659 8.23717C19.1659 8.07728 19.1659 7.91739 19.1561 7.7475C19.878 7.21785 20.5024 6.5483 21 5.78881C20.3366 6.08861 19.6244 6.28847 18.8732 6.38841C19.6341 5.91872 20.2195 5.17921 20.5024 4.28981C19.7902 4.72951 19 5.03931 18.1512 5.20919C17.478 4.45969 16.522 4 15.4585 4C13.4195 4 11.761 5.69887 11.761 7.78747C11.761 8.08728 11.8 8.36709 11.8585 8.6469C8.79512 8.497 6.07317 6.97801 4.24878 4.68954C3.92683 5.25916 3.75122 5.90873 3.75122 6.59827C3.75122 7.90739 4.40488 9.06662 5.39024 9.74617C4.78537 9.72618 4.21951 9.5563 3.72195 9.27648C3.72195 9.28648 3.72195 9.30646 3.72195 9.32645C3.72195 11.1552 5 12.6942 6.67805 13.034C6.36585 13.1239 6.0439 13.1639 5.70244 13.1639C5.46829 13.1639 5.23415 13.1439 5.00976 13.0939C5.47805 14.6029 6.8439 15.6922 8.46341 15.7222C7.19512 16.7415 5.60488 17.3411 3.87805 17.3411C3.58537 17.3411 3.28293 17.3311 3 17.2911C4.62927 18.3704 6.57073 19 8.65854 19Z" })));
};

var IconModule = /*#__PURE__*/Object.freeze({
    __proto__: null,
    FarmIcon: Icon$h,
    GroupsIcon: Icon$g,
    HamburgerIcon: Icon$f,
    HamburgerCloseIcon: Icon$e,
    HomeIcon: Icon$d,
    IfoIcon: Icon$c,
    InfoIcon: Icon$b,
    LogoIcon: LogoWithText,
    MoonIcon: Icon$a,
    MoreIcon: Icon$9,
    NftIcon: Icon$8,
    PoolIcon: Icon$7,
    PredictionsIcon: Icon$_,
    SunIcon: Icon$6,
    TeamBattleIcon: Icon$5,
    TelegramIcon: Icon$4,
    InstagramIcon: Icon$3,
    TicketIcon: Icon$2,
    TradeIcon: Icon$1,
    TwitterIcon: Icon
});

var MenuButton$1 = styled__default['default'](Button)(templateObject_1$h || (templateObject_1$h = __makeTemplateObject(["\n  color: ", ";\n  padding: 0 8px;\n  border-radius: 8px;\n"], ["\n  color: ", ";\n  padding: 0 8px;\n  border-radius: 8px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
});
MenuButton$1.defaultProps = {
    variant: "text",
    size: "sm",
};
var templateObject_1$h;

var blink = styled.keyframes(templateObject_1$g || (templateObject_1$g = __makeTemplateObject(["\n  0%,  100% { transform: scaleY(1); } \n  50% { transform:  scaleY(0.1); } \n"], ["\n  0%,  100% { transform: scaleY(1); } \n  50% { transform:  scaleY(0.1); } \n"])));
var StyledLink = styled__default['default'](reactRouterDom.Link)(templateObject_2$8 || (templateObject_2$8 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  .mobile-icon {\n    width: 32px;\n    ", " {\n      display: none;\n    }\n  }\n  .desktop-icon {\n    width: 160px;\n    display: none;\n    ", " {\n      display: block;\n    }\n  }\n  .right-eye {\n    animation-delay: 20ms;\n  }\n  &:hover {\n    .left-eye,\n    .right-eye {\n      transform-origin: center 60%;\n      animation-name: ", ";\n      animation-duration: 350ms;\n      animation-iteration-count: 1;\n    }\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  .mobile-icon {\n    width: 32px;\n    ", " {\n      display: none;\n    }\n  }\n  .desktop-icon {\n    width: 160px;\n    display: none;\n    ", " {\n      display: block;\n    }\n  }\n  .right-eye {\n    animation-delay: 20ms;\n  }\n  &:hover {\n    .left-eye,\n    .right-eye {\n      transform-origin: center 60%;\n      animation-name: ", ";\n      animation-duration: 350ms;\n      animation-iteration-count: 1;\n    }\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
}, blink);
var Logo = function (_a) {
    var isPushed = _a.isPushed, togglePush = _a.togglePush, isDark = _a.isDark, href = _a.href;
    var isAbsoluteUrl = href.startsWith("http");
    var innerLogo = (React__default['default'].createElement(React__default['default'].Fragment, null,
        React__default['default'].createElement(Icon$1l, { className: "mobile-icon" }),
        React__default['default'].createElement(LogoWithText, { className: "desktop-icon", isDark: isDark })));
    return (React__default['default'].createElement(Flex, null,
        React__default['default'].createElement(MenuButton$1, { "aria-label": "Toggle menu", onClick: togglePush, mr: "24px" }, isPushed ? (React__default['default'].createElement(Icon$e, { width: "24px", color: "textSubtle" })) : (React__default['default'].createElement(Icon$f, { width: "24px", color: "textSubtle" }))),
        isAbsoluteUrl ? (React__default['default'].createElement(StyledLink, { as: "a", href: href, "aria-label": "Pancake home page" }, innerLogo)) : (React__default['default'].createElement(StyledLink, { to: href, "aria-label": "Pancake home page" }, innerLogo))));
};
var Logo$1 = React__default['default'].memo(Logo, function (prev, next) { return prev.isPushed === next.isPushed && prev.isDark === next.isDark; });
var templateObject_1$g, templateObject_2$8;

var status = {
    LIVE: {
        text: "LIVE",
        color: "failure",
    },
    SOON: {
        text: "SOON",
        color: "warning",
    },
    NEW: {
        text: "NEW",
        color: "success",
    },
};
var links = [
    {
        label: "Home",
        icon: "HomeIcon",
        href: "/",
    },
    {
        label: "Trade",
        icon: "TradeIcon",
        items: [
            {
                label: "Exchange",
                href: "https://exchange.pancakeswap.finance",
            },
            {
                label: "Liquidity",
                href: "https://exchange.pancakeswap.finance/#/pool",
            },
        ],
    },
    {
        label: "Farms",
        icon: "FarmIcon",
        href: "/farms",
        status: status.LIVE,
    },
    {
        label: "Pools",
        icon: "PoolIcon",
        href: "/syrup",
    },
    {
        label: "Lottery",
        icon: "TicketIcon",
        href: "/lottery",
    },
    {
        label: "NFT",
        icon: "NftIcon",
        href: "/nft",
    },
    {
        label: "Team Battle",
        icon: "TeamBattleIcon",
        href: "/competition",
        status: status.SOON,
    },
    {
        label: "Profile & Teams",
        icon: "GroupsIcon",
        status: status.LIVE,
        items: [
            {
                label: "Leaderboard",
                href: "/teams",
                status: status.NEW,
            },
            {
                label: "YourProfile",
                href: "/",
            },
        ],
        calloutClass: "rainbow",
    },
    {
        label: "Info",
        icon: "InfoIcon",
        items: [
            {
                label: "Overview",
                href: "https://pancakeswap.info",
            },
            {
                label: "Tokens",
                href: "https://pancakeswap.info/tokens",
            },
            {
                label: "Pairs",
                href: "https://pancakeswap.info/pairs",
            },
            {
                label: "Accounts",
                href: "https://pancakeswap.info/accounts",
            },
        ],
    },
    {
        label: "IFO",
        icon: "IfoIcon",
        items: [
            {
                label: "Next",
                href: "/ifo",
            },
            {
                label: "History",
                href: "/ifo/history",
            },
        ],
    },
    {
        label: "More",
        icon: "MoreIcon",
        items: [
            {
                label: "Voting",
                href: "https://voting.pancakeswap.finance",
            },
            {
                label: "Github",
                href: "https://github.com/pancakeswap",
            },
            {
                label: "Docs",
                href: "https://docs.pancakeswap.finance",
            },
            {
                label: "Blog",
                href: "https://pancakeswap.medium.com",
            },
        ],
    },
];
var socials = [
    {
        label: "Instagram",
        icon: "InstagramIcon",
        href: 'https://instagram.com/alpinecoin?utm_medium=copy_link'
    },
    {
        label: "Telegram",
        icon: "TelegramIcon",
        href: 'https://t.me/Alpinecoin_chat'
    },
    {
        label: "Twitter",
        icon: "TwitterIcon",
        href: "https://twitter.com/Alpine_Coin?s=09",
    },
];
var MENU_HEIGHT = 64;
var MENU_ENTRY_HEIGHT = 48;
var SIDEBAR_WIDTH_FULL = 240;
var SIDEBAR_WIDTH_REDUCED = 56;

var rainbowAnimation = styled.keyframes(templateObject_1$f || (templateObject_1$f = __makeTemplateObject(["\n  0%,\n  100% {\n    background-position: 0 0;\n  }\n  50% {\n    background-position: 100% 0;\n  }\n"], ["\n  0%,\n  100% {\n    background-position: 0 0;\n  }\n  50% {\n    background-position: 100% 0;\n  }\n"])));
var LinkLabel = styled__default['default'].div(templateObject_2$7 || (templateObject_2$7 = __makeTemplateObject(["\n  color: ", ";\n  transition: color 0.4s;\n  flex-grow: 1;\n"], ["\n  color: ", ";\n  transition: color 0.4s;\n  flex-grow: 1;\n"])), function (_a) {
    var isPushed = _a.isPushed, theme = _a.theme;
    return (isPushed ? theme.colors.textSubtle : "transparent");
});
var MenuEntry = styled__default['default'].div(templateObject_3$3 || (templateObject_3$3 = __makeTemplateObject(["\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  height: ", "px;\n  padding: ", ";\n  font-size: ", ";\n  background-color: ", ";\n  color: ", ";\n  box-shadow: ", ";\n\n  a {\n    display: flex;\n    align-items: center;\n    width: 100%;\n    height: 100%;\n  }\n\n  svg {\n    fill: ", ";\n  }\n\n  &:hover {\n    background-color: ", ";\n  }\n\n  // Safari fix\n  flex-shrink: 0;\n\n  &.rainbow {\n    background-clip: text;\n    animation: ", " 3s ease-in-out infinite;\n    background: ", ";\n    background-size: 400% 100%;\n  }\n"], ["\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  height: ", "px;\n  padding: ", ";\n  font-size: ", ";\n  background-color: ", ";\n  color: ", ";\n  box-shadow: ", ";\n\n  a {\n    display: flex;\n    align-items: center;\n    width: 100%;\n    height: 100%;\n  }\n\n  svg {\n    fill: ", ";\n  }\n\n  &:hover {\n    background-color: ", ";\n  }\n\n  // Safari fix\n  flex-shrink: 0;\n\n  &.rainbow {\n    background-clip: text;\n    animation: ", " 3s ease-in-out infinite;\n    background: ", ";\n    background-size: 400% 100%;\n  }\n"])), MENU_ENTRY_HEIGHT, function (_a) {
    var secondary = _a.secondary;
    return (secondary ? "0 32px" : "0 16px");
}, function (_a) {
    var secondary = _a.secondary;
    return (secondary ? "14px" : "16px");
}, function (_a) {
    var secondary = _a.secondary, theme = _a.theme;
    return (secondary ? theme.colors.background : "transparent");
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.textSubtle;
}, function (_a) {
    var isActive = _a.isActive, theme = _a.theme;
    return (isActive ? "inset 4px 0px 0px " + theme.colors.primary : "none");
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.textSubtle;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.tertiary;
}, rainbowAnimation, function (_a) {
    var theme = _a.theme;
    return theme.colors.gradients.bubblegum;
});
MenuEntry.defaultProps = {
    secondary: false,
    isActive: false,
};
var LinkStatus = styled__default['default'](Text)(templateObject_4$1 || (templateObject_4$1 = __makeTemplateObject(["\n  border-radius: ", ";\n  padding: 0 8px;\n  border: 2px solid;\n  border-color: ", ";\n  box-shadow: none;\n  color: ", ";\n  margin-left: 8px;\n"], ["\n  border-radius: ", ";\n  padding: 0 8px;\n  border: 2px solid;\n  border-color: ", ";\n  box-shadow: none;\n  color: ", ";\n  margin-left: 8px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.radii.default;
}, function (_a) {
    var theme = _a.theme, color = _a.color;
    return theme.colors[color];
}, function (_a) {
    var theme = _a.theme, color = _a.color;
    return theme.colors[color];
});
var LinkLabelMemo = React__default['default'].memo(LinkLabel, function (prev, next) { return prev.isPushed === next.isPushed; });
var templateObject_1$f, templateObject_2$7, templateObject_3$3, templateObject_4$1;

var Container$2 = styled__default['default'].div(templateObject_1$e || (templateObject_1$e = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  // Safari fix\n  flex-shrink: 0;\n"], ["\n  display: flex;\n  flex-direction: column;\n  // Safari fix\n  flex-shrink: 0;\n"])));
var AccordionContent = styled__default['default'].div(templateObject_2$6 || (templateObject_2$6 = __makeTemplateObject(["\n  max-height: ", ";\n  transition: max-height 0.3s ease-out;\n  overflow: hidden;\n  border-color: ", ";\n  border-style: solid;\n  border-width: 1px 0;\n"], ["\n  max-height: ", ";\n  transition: max-height 0.3s ease-out;\n  overflow: hidden;\n  border-color: ", ";\n  border-style: solid;\n  border-width: 1px 0;\n"])), function (_a) {
    var isOpen = _a.isOpen, maxHeight = _a.maxHeight;
    return (isOpen ? maxHeight + "px" : 0);
}, function (_a) {
    var isOpen = _a.isOpen, isPushed = _a.isPushed;
    return (isOpen && isPushed ? "rgba(133, 133, 133, 0.1)" : "transparent");
});
var Accordion = function (_a) {
    var label = _a.label, status = _a.status, icon = _a.icon, isPushed = _a.isPushed, pushNav = _a.pushNav, _b = _a.initialOpenState, initialOpenState = _b === void 0 ? false : _b, children = _a.children, className = _a.className, isActive = _a.isActive;
    var _c = React.useState(initialOpenState), isOpen = _c[0], setIsOpen = _c[1];
    var handleClick = function () {
        if (isPushed) {
            setIsOpen(function (prevState) { return !prevState; });
        }
        else {
            pushNav(true);
            setIsOpen(true);
        }
    };
    return (React__default['default'].createElement(Container$2, null,
        React__default['default'].createElement(MenuEntry, { onClick: handleClick, className: className, isActive: isActive, role: "button" },
            icon,
            React__default['default'].createElement(LinkLabelMemo, { isPushed: isPushed }, label),
            status && (React__default['default'].createElement(LinkStatus, { color: status.color, fontSize: "14px" }, status.text)),
            isOpen ? React__default['default'].createElement(Icon$20, null) : React__default['default'].createElement(Icon$21, null)),
        React__default['default'].createElement(AccordionContent, { isOpen: isOpen, isPushed: isPushed, maxHeight: React__default['default'].Children.count(children) * MENU_ENTRY_HEIGHT }, children)));
};
var templateObject_1$e, templateObject_2$6;

var MenuLink = function (_a) {
    var href = _a.href, otherProps = __rest(_a, ["href"]);
    var isHttpLink = href === null || href === void 0 ? void 0 : href.startsWith("http");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var Tag = isHttpLink ? "a" : reactRouterDom.NavLink;
    var props = isHttpLink ? { href: href } : { to: href };
    return React__default['default'].createElement(Tag, __assign({ role: "button" }, props, otherProps));
};

var Icons$1 = IconModule;
var Container$1 = styled__default['default'].div(templateObject_1$d || (templateObject_1$d = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  overflow-y: auto;\n  overflow-x: hidden;\n  height: 100%;\n"], ["\n  display: flex;\n  flex-direction: column;\n  overflow-y: auto;\n  overflow-x: hidden;\n  height: 100%;\n"])));
var PanelBody = function (_a) {
    var isPushed = _a.isPushed, pushNav = _a.pushNav, isMobile = _a.isMobile, links = _a.links;
    var location = reactRouterDom.useLocation();
    // Close the menu when a user clicks a link on mobile
    var handleClick = isMobile ? function () { return pushNav(false); } : undefined;
    return (React__default['default'].createElement(Container$1, null, links.map(function (entry) {
        var Icon = Icons$1[entry.icon];
        var iconElement = React__default['default'].createElement(Icon, { width: "24px", mr: "8px" });
        var calloutClass = entry.calloutClass ? entry.calloutClass : undefined;
        if (entry.items) {
            var itemsMatchIndex = entry.items.findIndex(function (item) { return item.href === location.pathname; });
            var initialOpenState = entry.initialOpenState === true ? entry.initialOpenState : itemsMatchIndex >= 0;
            return (React__default['default'].createElement(Accordion, { key: entry.label, isPushed: isPushed, pushNav: pushNav, icon: iconElement, label: entry.label, status: entry.status, initialOpenState: initialOpenState, className: calloutClass, isActive: entry.items.some(function (item) { return item.href === location.pathname; }) }, isPushed &&
                entry.items.map(function (item) { return (React__default['default'].createElement(MenuEntry, { key: item.href, secondary: true, isActive: item.href === location.pathname, onClick: handleClick },
                    React__default['default'].createElement(MenuLink, { href: item.href },
                        React__default['default'].createElement(LinkLabelMemo, { isPushed: isPushed }, item.label),
                        item.status && (React__default['default'].createElement(LinkStatus, { color: item.status.color, fontSize: "14px" }, item.status.text))))); })));
        }
        return (React__default['default'].createElement(MenuEntry, { key: entry.label, isActive: entry.href === location.pathname, className: calloutClass },
            React__default['default'].createElement(MenuLink, { href: entry.href, onClick: handleClick },
                iconElement,
                React__default['default'].createElement(LinkLabelMemo, { isPushed: isPushed }, entry.label),
                entry.status && (React__default['default'].createElement(LinkStatus, { color: entry.status.color, fontSize: "14px" }, entry.status.text)))));
    })));
};
var templateObject_1$d;

var PriceLink$1 = styled__default['default'].a(templateObject_1$c || (templateObject_1$c = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  svg {\n    transition: transform 0.3s;\n  }\n  :hover {\n    svg {\n      transform: scale(1.2);\n    }\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  svg {\n    transition: transform 0.3s;\n  }\n  :hover {\n    svg {\n      transform: scale(1.2);\n    }\n  }\n"])));
var CakePrice = function (_a) {
    var cakePriceUsd = _a.cakePriceUsd;
    return cakePriceUsd ? (React__default['default'].createElement(PriceLink$1, { href: "https://pancakeswap.finance/swap?outputCurrency=0x35Ddb5198F88423bA7e1f27A687CCFaC0Ab8e59f", target: "_blank" },
        React__default['default'].createElement(Icon$12, { width: "24px", mr: "8px" }),
        React__default['default'].createElement(Text, { color: "textSubtle", bold: true }, "$" + cakePriceUsd.toFixed(3)))) : (React__default['default'].createElement(Skeleton, { width: 80, height: 24 }));
};
var CakePrice$1 = React__default['default'].memo(CakePrice);
var templateObject_1$c;

var PriceLink = styled__default['default'].a(templateObject_1$b || (templateObject_1$b = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  svg {\n    transition: transform 0.3s;\n  }\n  :hover {\n    svg {\n      transform: scale(1.2);\n    }\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  svg {\n    transition: transform 0.3s;\n  }\n  :hover {\n    svg {\n      transform: scale(1.2);\n    }\n  }\n"])));
var PinePrice = function (_a) {
    var pinePriceUsd = _a.pinePriceUsd;
    return pinePriceUsd ? (React__default['default'].createElement(PriceLink, { href: "https://pancakeswap.finance/swap?outputCurrency=0xec5b9074717e467be06e96091f3d47c6e7871a95", target: "_blank" },
        React__default['default'].createElement(Icon$11, { width: "24px", mr: "8px" }),
        React__default['default'].createElement(Text, { color: "textSubtle", bold: true }, "$" + pinePriceUsd.toFixed(3)))) : (React__default['default'].createElement(Skeleton, { width: 80, height: 24 }));
};
var PinePrice$1 = React__default['default'].memo(PinePrice);
var templateObject_1$b;

var Icons = IconModule;
var SocialLinks = function () { return (React__default['default'].createElement(Flex, null, socials.map(function (social, index) {
    var Icon = Icons[social.icon];
    var iconProps = { width: "24px", color: "textSubtle", style: { cursor: "pointer" } };
    var mr = index < socials.length - 1 ? "12px" : 0;
    // if (social.items) {
    //   return (
    //     <Dropdown key={social.label} position="top" target={<Icon {...iconProps} mr={mr} />}>
    //       {social.items.map((item) => (
    //         <Link external key={item.label} href={item.href} aria-label={item.label} color="textSubtle">
    //           {item.label}
    //         </Link>
    //       ))}
    //     </Dropdown>
    //   );
    // }
    return (React__default['default'].createElement(Link, { external: true, key: social.label, href: social.href, "aria-label": social.label, mr: mr },
        React__default['default'].createElement(Icon, __assign({}, iconProps))));
}))); };
var SocialLinks$1 = React__default['default'].memo(SocialLinks, function () { return true; });

var LangSelector$2 = function (_a) {
    var currentLang = _a.currentLang, langs = _a.langs, setLang = _a.setLang;
    return (React__default['default'].createElement(Dropdown, { position: "top-right", target: React__default['default'].createElement(Button, { variant: "text", startIcon: React__default['default'].createElement(Icon$1r, { color: "textSubtle", width: "24px" }) },
            React__default['default'].createElement(Text, { color: "textSubtle" }, currentLang === null || currentLang === void 0 ? void 0 : currentLang.toUpperCase())) }, langs.map(function (lang) { return (React__default['default'].createElement(MenuButton$1, { key: lang.locale, fullWidth: true, onClick: function () { return setLang(lang); }, 
        // Safari fix
        style: { minHeight: "32px", height: "auto" } }, lang.language)); })));
};
var LangSelector$3 = React__default['default'].memo(LangSelector$2, function (prev, next) { return prev.currentLang === next.currentLang; });

var Container = styled__default['default'].div(templateObject_1$a || (templateObject_1$a = __makeTemplateObject(["\n  flex: none;\n  padding: 8px 4px;\n  background-color: ", ";\n  border-top: solid 2px rgba(133, 133, 133, 0.1);\n"], ["\n  flex: none;\n  padding: 8px 4px;\n  background-color: ", ";\n  border-top: solid 2px rgba(133, 133, 133, 0.1);\n"])), function (_a) {
    var theme = _a.theme;
    return theme.nav.background;
});
var SettingsEntry = styled__default['default'].div(templateObject_2$5 || (templateObject_2$5 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: ", "px;\n  padding: 0 8px;\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: ", "px;\n  padding: 0 8px;\n"])), MENU_ENTRY_HEIGHT);
var SocialEntry = styled__default['default'].div(templateObject_3$2 || (templateObject_3$2 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: ", "px;\n  padding: 0 16px;\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: ", "px;\n  padding: 0 16px;\n"])), MENU_ENTRY_HEIGHT);
var PanelFooter = function (_a) {
    var isPushed = _a.isPushed, pushNav = _a.pushNav; _a.toggleTheme; _a.isDark; var cakePriceUsd = _a.cakePriceUsd, pinePriceUsd = _a.pinePriceUsd, currentLang = _a.currentLang, langs = _a.langs, setLang = _a.setLang;
    if (!isPushed) {
        return (React__default['default'].createElement(Container, null,
            React__default['default'].createElement(IconButton, { variant: "text", onClick: function () { return pushNav(true); } },
                React__default['default'].createElement(Icon$1D, null))));
    }
    return (React__default['default'].createElement(Container, null,
        React__default['default'].createElement(SocialEntry, null,
            React__default['default'].createElement(CakePrice$1, { cakePriceUsd: cakePriceUsd }),
            React__default['default'].createElement(SocialLinks$1, null)),
        React__default['default'].createElement(SettingsEntry, null,
            React__default['default'].createElement(LangSelector$3, { currentLang: currentLang, langs: langs, setLang: setLang }),
            React__default['default'].createElement(PinePrice$1, { pinePriceUsd: pinePriceUsd }))));
};
var templateObject_1$a, templateObject_2$5, templateObject_3$2;

var StyledPanel = styled__default['default'].div(templateObject_1$9 || (templateObject_1$9 = __makeTemplateObject(["\n  position: fixed;\n  padding-top: ", ";\n  top: 0;\n  left: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  flex-shrink: 0;\n  background-color: ", ";\n  width: ", ";\n  height: 100%;\n  transition: padding-top 0.2s, width 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n  border-right: ", ";\n  z-index: 11;\n  overflow: ", ";\n  transform: translate3d(0, 0, 0);\n  ", ";\n\n  ", " {\n    border-right: 2px solid rgba(133, 133, 133, 0.1);\n    width: ", ";\n  }\n"], ["\n  position: fixed;\n  padding-top: ", ";\n  top: 0;\n  left: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  flex-shrink: 0;\n  background-color: ", ";\n  width: ", ";\n  height: 100%;\n  transition: padding-top 0.2s, width 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n  border-right: ", ";\n  z-index: 11;\n  overflow: ", ";\n  transform: translate3d(0, 0, 0);\n  ", ";\n\n  ", " {\n    border-right: 2px solid rgba(133, 133, 133, 0.1);\n    width: ", ";\n  }\n"])), function (_a) {
    var showMenu = _a.showMenu;
    return (showMenu ? "80px" : 0);
}, function (_a) {
    var theme = _a.theme;
    return theme.nav.background;
}, function (_a) {
    var isPushed = _a.isPushed;
    return (isPushed ? SIDEBAR_WIDTH_FULL + "px" : 0);
}, function (_a) {
    var isPushed = _a.isPushed;
    return (isPushed ? "2px solid rgba(133, 133, 133, 0.1)" : 0);
}, function (_a) {
    var isPushed = _a.isPushed;
    return (isPushed ? "initial" : "hidden");
}, function (_a) {
    var isPushed = _a.isPushed;
    return !isPushed && "white-space: nowrap;";
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
}, function (_a) {
    var isPushed = _a.isPushed;
    return (isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED) + "px";
});
var Panel = function (props) {
    var isPushed = props.isPushed, showMenu = props.showMenu;
    return (React__default['default'].createElement(StyledPanel, { isPushed: isPushed, showMenu: showMenu },
        React__default['default'].createElement(PanelBody, __assign({}, props)),
        React__default['default'].createElement(PanelFooter, __assign({}, props))));
};
var templateObject_1$9;

var MenuButton = styled__default['default'](Button)(templateObject_1$8 || (templateObject_1$8 = __makeTemplateObject(["\n  color: ", ";\n  padding: 0 8px;\n  border-radius: 8px;\n"], ["\n  color: ", ";\n  padding: 0 8px;\n  border-radius: 8px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
});
MenuButton.defaultProps = {
    variant: "text",
    size: "sm",
};
var templateObject_1$8;

var LangSelector = function (_a) {
    var currentLang = _a.currentLang, langs = _a.langs, setLang = _a.setLang, _b = _a.dropdownPosition, dropdownPosition = _b === void 0 ? "top-right" : _b, _c = _a.buttonScale, buttonScale = _c === void 0 ? "md" : _c;
    return (React__default['default'].createElement(Dropdown, { position: dropdownPosition, target: React__default['default'].createElement(Button, { scale: buttonScale, variant: "text", startIcon: React__default['default'].createElement(Icon$1r, { color: "textSubtle", width: "24px" }) },
            React__default['default'].createElement(Text, { color: "textSubtle" }, currentLang === null || currentLang === void 0 ? void 0 : currentLang.toUpperCase())) }, langs.map(function (lang) { return (React__default['default'].createElement(MenuButton, { key: lang.locale, fullWidth: true, onClick: function () { return setLang(lang); }, 
        // Safari fix
        style: { minHeight: "32px", height: "auto" } }, lang.language)); })));
};
var LangSelector$1 = React__default['default'].memo(LangSelector, function (prev, next) { return prev.currentLang === next.currentLang; });

var Wrapper = styled__default['default'].div(templateObject_1$7 || (templateObject_1$7 = __makeTemplateObject(["\n  position: relative;\n  width: 100%;\n"], ["\n  position: relative;\n  width: 100%;\n"])));
var StyledNav = styled__default['default'].nav(templateObject_2$4 || (templateObject_2$4 = __makeTemplateObject(["\n  position: fixed;\n  top: ", ";\n  left: 0;\n  transition: top 0.2s;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-left: 8px;\n  padding-right: 16px;\n  width: 100%;\n  height: ", "px;\n  background-color: ", ";\n  border-bottom: solid 2px rgba(133, 133, 133, 0.1);\n  z-index: 20;\n  transform: translate3d(0, 0, 0);\n"], ["\n  position: fixed;\n  top: ", ";\n  left: 0;\n  transition: top 0.2s;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-left: 8px;\n  padding-right: 16px;\n  width: 100%;\n  height: ", "px;\n  background-color: ", ";\n  border-bottom: solid 2px rgba(133, 133, 133, 0.1);\n  z-index: 20;\n  transform: translate3d(0, 0, 0);\n"])), function (_a) {
    var showMenu = _a.showMenu;
    return (showMenu ? 0 : "-" + MENU_HEIGHT + "px");
}, MENU_HEIGHT, function (_a) {
    var theme = _a.theme;
    return theme.nav.background;
});
var BodyWrapper = styled__default['default'].div(templateObject_3$1 || (templateObject_3$1 = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n"], ["\n  position: relative;\n  display: flex;\n"])));
var Inner = styled__default['default'].div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  flex-grow: 1;\n  margin-top: ", ";\n  transition: margin-top 0.2s, margin-left 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n  transform: translate3d(0, 0, 0);\n  max-width: 100%;\n\n  ", " {\n    margin-left: ", ";\n    max-width: ", ";\n  }\n"], ["\n  flex-grow: 1;\n  margin-top: ", ";\n  transition: margin-top 0.2s, margin-left 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n  transform: translate3d(0, 0, 0);\n  max-width: 100%;\n\n  ", " {\n    margin-left: ", ";\n    max-width: ", ";\n  }\n"])), function (_a) {
    var showMenu = _a.showMenu;
    return (showMenu ? MENU_HEIGHT + "px" : 0);
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
}, function (_a) {
    var isPushed = _a.isPushed;
    return (isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED) + "px";
}, function (_a) {
    var isPushed = _a.isPushed;
    return "calc(100% - " + (isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED) + "px)";
});
var MobileOnlyOverlay = styled__default['default'](Overlay)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  position: fixed;\n  height: 100%;\n\n  ", " {\n    display: none;\n  }\n"], ["\n  position: fixed;\n  height: 100%;\n\n  ", " {\n    display: none;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
});
var Menu$1 = function (_a) {
    var _b;
    var userMenu = _a.userMenu, globalMenu = _a.globalMenu, isDark = _a.isDark, toggleTheme = _a.toggleTheme, langs = _a.langs, setLang = _a.setLang, currentLang = _a.currentLang, cakePriceUsd = _a.cakePriceUsd, pinePriceUsd = _a.pinePriceUsd, links = _a.links, children = _a.children;
    var _c = useMatchBreakpoints(), isMobile = _c.isMobile, isTablet = _c.isTablet;
    var isSmallerScreen = isMobile || isTablet;
    var _d = React.useState(!isSmallerScreen), isPushed = _d[0], setIsPushed = _d[1];
    var _e = React.useState(true), showMenu = _e[0], setShowMenu = _e[1];
    var refPrevOffset = React.useRef(window.pageYOffset);
    React.useEffect(function () {
        var handleScroll = function () {
            var currentOffset = window.pageYOffset;
            var isBottomOfPage = window.document.body.clientHeight === currentOffset + window.innerHeight;
            var isTopOfPage = currentOffset === 0;
            // Always show the menu when user reach the top
            if (isTopOfPage) {
                setShowMenu(true);
            }
            // Avoid triggering anything at the bottom because of layout shift
            else if (!isBottomOfPage) {
                if (currentOffset < refPrevOffset.current) {
                    // Has scroll up
                    setShowMenu(true);
                }
                else {
                    // Has scroll down
                    setShowMenu(false);
                }
            }
            refPrevOffset.current = currentOffset;
        };
        var throttledHandleScroll = throttle__default['default'](handleScroll, 200);
        window.addEventListener("scroll", throttledHandleScroll);
        return function () {
            window.removeEventListener("scroll", throttledHandleScroll);
        };
    }, []);
    // Find the home link if provided
    var homeLink = links.find(function (link) { return link.label === "Home"; });
    return (React__default['default'].createElement(Wrapper, null,
        React__default['default'].createElement(StyledNav, { showMenu: showMenu },
            React__default['default'].createElement(Logo$1, { isPushed: isPushed, togglePush: function () { return setIsPushed(function (prevState) { return !prevState; }); }, isDark: isDark, href: (_b = homeLink === null || homeLink === void 0 ? void 0 : homeLink.href) !== null && _b !== void 0 ? _b : "/" }),
            React__default['default'].createElement(Flex, null,
                !isMobile && (React__default['default'].createElement(React__default['default'].Fragment, null,
                    React__default['default'].createElement(Box, { mr: "12px", pt: "4px" },
                        React__default['default'].createElement(PinePrice$1, { pinePriceUsd: pinePriceUsd })),
                    React__default['default'].createElement(Box, { mr: "12px", pt: "6px" },
                        React__default['default'].createElement(LangSelector$1, { buttonScale: "xs", currentLang: currentLang, langs: langs, setLang: setLang, dropdownPosition: 'bottom' })),
                    React__default['default'].createElement(Box, { mr: "12px", pt: "4px" },
                        React__default['default'].createElement(CakePrice$1, { cakePriceUsd: cakePriceUsd })),
                    React__default['default'].createElement(Box, { mr: "12px", pt: "4px" },
                        React__default['default'].createElement(SocialLinks$1, null)))),
                globalMenu,
                " ",
                userMenu)),
        React__default['default'].createElement(BodyWrapper, null,
            React__default['default'].createElement(Panel, { isPushed: isPushed, isMobile: isSmallerScreen, showMenu: showMenu, isDark: isDark, toggleTheme: toggleTheme, langs: langs, setLang: setLang, currentLang: currentLang, cakePriceUsd: cakePriceUsd, pinePriceUsd: pinePriceUsd, pushNav: setIsPushed, links: links }),
            React__default['default'].createElement(Inner, { isPushed: isPushed, showMenu: showMenu }, children),
            React__default['default'].createElement(MobileOnlyOverlay, { show: isPushed, onClick: function () { return setIsPushed(false); }, role: "presentation" }))));
};
var templateObject_1$7, templateObject_2$4, templateObject_3$1, templateObject_4, templateObject_5;

var variants = {
    DEFAULT: "default",
    WARNING: "warning",
    DANGER: "danger",
    PENDING: "pending",
};

var MenuIconWrapper = styled__default['default'].div(templateObject_1$6 || (templateObject_1$6 = __makeTemplateObject(["\n  align-items: center;\n  background-color: ", ";\n  border-color: ", ";\n  border-radius: 50%;\n  border-style: solid;\n  border-width: 2px;\n  display: flex;\n  height: 40px;\n  justify-content: center;\n  left: 0;\n  position: absolute;\n  top: -4px;\n  width: 40px;\n  z-index: 102;\n"], ["\n  align-items: center;\n  background-color: ", ";\n  border-color: ", ";\n  border-radius: 50%;\n  border-style: solid;\n  border-width: 2px;\n  display: flex;\n  height: 40px;\n  justify-content: center;\n  left: 0;\n  position: absolute;\n  top: -4px;\n  width: 40px;\n  z-index: 102;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.background;
}, function (_a) {
    var theme = _a.theme, borderColor = _a.borderColor;
    return theme.colors[borderColor];
});
var ProfileIcon = styled__default['default'](Image)(templateObject_2$3 || (templateObject_2$3 = __makeTemplateObject(["\n  left: 0;\n  position: absolute;\n  top: -4px;\n  z-index: 102;\n\n  & > img {\n    border-radius: 50%;\n  }\n"], ["\n  left: 0;\n  position: absolute;\n  top: -4px;\n  z-index: 102;\n\n  & > img {\n    border-radius: 50%;\n  }\n"])));
var NoProfileMenuIcon = function () { return (React__default['default'].createElement(MenuIconWrapper, { borderColor: "primary" },
    React__default['default'].createElement(Icon$k, { color: "primary", width: "24px" }))); };
var PendingMenuIcon = function () { return (React__default['default'].createElement(MenuIconWrapper, { borderColor: "secondary" },
    React__default['default'].createElement(Icon$R, { color: "secondary", width: "24px", spin: true }))); };
var WarningMenuIcon = function () { return (React__default['default'].createElement(MenuIconWrapper, { borderColor: "warning" },
    React__default['default'].createElement(Icon$n, { color: "warning", width: "24px" }))); };
var DangerMenuIcon = function () { return (React__default['default'].createElement(MenuIconWrapper, { borderColor: "failure" },
    React__default['default'].createElement(Icon$n, { color: "failure", width: "24px" }))); };
var MenuIcon = function (_a) {
    var avatarSrc = _a.avatarSrc, variant = _a.variant;
    if (variant === variants.DANGER) {
        return React__default['default'].createElement(DangerMenuIcon, null);
    }
    if (variant === variants.WARNING) {
        return React__default['default'].createElement(WarningMenuIcon, null);
    }
    if (variant === variants.PENDING) {
        return React__default['default'].createElement(PendingMenuIcon, null);
    }
    if (!avatarSrc) {
        return React__default['default'].createElement(NoProfileMenuIcon, null);
    }
    return React__default['default'].createElement(ProfileIcon, { src: avatarSrc, height: 40, width: 40 });
};
var templateObject_1$6, templateObject_2$3;

var UserMenuDivider = styled__default['default'].hr(templateObject_1$5 || (templateObject_1$5 = __makeTemplateObject(["\n  border-color: ", ";\n  border-style: solid;\n  border-width: 1px 0 0;\n  margin: 4px 0;\n"], ["\n  border-color: ", ";\n  border-style: solid;\n  border-width: 1px 0 0;\n  margin: 4px 0;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.cardBorder;
});
var UserMenuItem = styled__default['default'].button(templateObject_2$2 || (templateObject_2$2 = __makeTemplateObject(["\n  align-items: center;\n  border: 0;\n  background: transparent;\n  color: ", ";\n  cursor: ", ";\n  display: flex;\n  font-size: 16px;\n  height: 48px;\n  justify-content: space-between;\n  outline: 0;\n  padding-left: 16px;\n  padding-right: 16px;\n  width: 100%;\n\n  &:hover:not(:disabled) {\n    background-color: ", ";\n  }\n\n  &:active:not(:disabled) {\n    opacity: 0.85;\n    transform: translateY(1px);\n  }\n"], ["\n  align-items: center;\n  border: 0;\n  background: transparent;\n  color: ", ";\n  cursor: ", ";\n  display: flex;\n  font-size: 16px;\n  height: 48px;\n  justify-content: space-between;\n  outline: 0;\n  padding-left: 16px;\n  padding-right: 16px;\n  width: 100%;\n\n  &:hover:not(:disabled) {\n    background-color: ", ";\n  }\n\n  &:active:not(:disabled) {\n    opacity: 0.85;\n    transform: translateY(1px);\n  }\n"])), function (_a) {
    var theme = _a.theme, disabled = _a.disabled;
    return theme.colors[disabled ? "textDisabled" : "textSubtle"];
}, function (_a) {
    var disabled = _a.disabled;
    return (disabled ? "not-allowed" : "pointer");
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.tertiary;
});
var templateObject_1$5, templateObject_2$2;

var StyledUserMenu = styled__default['default'](Flex)(templateObject_1$4 || (templateObject_1$4 = __makeTemplateObject(["\n  align-items: center;\n  background-color: ", ";\n  border-radius: 16px;\n  box-shadow: inset 0px -2px 0px rgba(0, 0, 0, 0.1);\n  cursor: pointer;\n  display: inline-flex;\n  height: 32px;\n  padding-left: 40px;\n  padding-right: 8px;\n  position: relative;\n\n  &:hover {\n    opacity: 0.65;\n  }\n"], ["\n  align-items: center;\n  background-color: ", ";\n  border-radius: 16px;\n  box-shadow: inset 0px -2px 0px rgba(0, 0, 0, 0.1);\n  cursor: pointer;\n  display: inline-flex;\n  height: 32px;\n  padding-left: 40px;\n  padding-right: 8px;\n  position: relative;\n\n  &:hover {\n    opacity: 0.65;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.tertiary;
});
var LabelText = styled__default['default'].div(templateObject_2$1 || (templateObject_2$1 = __makeTemplateObject(["\n  color: ", ";\n  display: none;\n  font-weight: 600;\n\n  ", " {\n    display: block;\n    margin-left: 8px;\n    margin-right: 4px;\n  }\n"], ["\n  color: ", ";\n  display: none;\n  font-weight: 600;\n\n  ", " {\n    display: block;\n    margin-left: 8px;\n    margin-right: 4px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var Menu = styled__default['default'].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  background-color: ", ";\n  border: 1px solid ", ";\n  border-radius: 16px;\n  padding-bottom: 4px;\n  padding-top: 4px;\n  pointer-events: auto;\n  width: 280px;\n  visibility: visible;\n  z-index: 1001;\n\n  ", "\n\n  ", ":first-child {\n    border-radius: 8px 8px 0 0;\n  }\n\n  ", ":last-child {\n    border-radius: 0 0 8px 8px;\n  }\n"], ["\n  background-color: ", ";\n  border: 1px solid ", ";\n  border-radius: 16px;\n  padding-bottom: 4px;\n  padding-top: 4px;\n  pointer-events: auto;\n  width: 280px;\n  visibility: visible;\n  z-index: 1001;\n\n  ",
    "\n\n  ", ":first-child {\n    border-radius: 8px 8px 0 0;\n  }\n\n  ", ":last-child {\n    border-radius: 0 0 8px 8px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.card.background;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.cardBorder;
}, function (_a) {
    var isOpen = _a.isOpen;
    return !isOpen &&
        "\n    pointer-events: none;\n    visibility: hidden;\n  ";
}, UserMenuItem, UserMenuItem);
var UserMenu = function (_a) {
    var account = _a.account, text = _a.text, avatarSrc = _a.avatarSrc, _b = _a.variant, variant = _b === void 0 ? variants.DEFAULT : _b, children = _a.children, props = __rest(_a, ["account", "text", "avatarSrc", "variant", "children"]);
    var _c = React.useState(false), isOpen = _c[0], setIsOpen = _c[1];
    var _d = React.useState(null), targetRef = _d[0], setTargetRef = _d[1];
    var _e = React.useState(null), tooltipRef = _e[0], setTooltipRef = _e[1];
    var hideTimeout = React.useRef();
    var isHoveringOverTooltip = React.useRef(false);
    var accountEllipsis = account ? account.substring(0, 2) + "..." + account.substring(account.length - 4) : null;
    var _f = reactPopper.usePopper(targetRef, tooltipRef, {
        placement: "bottom-end",
        modifiers: [{ name: "offset", options: { offset: [0, 12] } }],
    }), styles = _f.styles, attributes = _f.attributes;
    /**
     * See "useTooltip"
     */
    React.useEffect(function () {
        var showTooltip = function (evt) {
            setIsOpen(true);
            if (evt.target === targetRef) {
                clearTimeout(hideTimeout.current);
            }
            if (evt.target === tooltipRef) {
                isHoveringOverTooltip.current = true;
            }
        };
        var hideTooltip = function (evt) {
            if (hideTimeout.current) {
                window.clearTimeout(hideTimeout.current);
            }
            if (evt.target === tooltipRef) {
                isHoveringOverTooltip.current = false;
            }
            if (!isHoveringOverTooltip.current) {
                hideTimeout.current = window.setTimeout(function () {
                    if (!isHoveringOverTooltip.current) {
                        setIsOpen(false);
                    }
                }, 150);
            }
        };
        var toggleTouch = function (evt) {
            var target = evt.target;
            var isTouchingTargetRef = target && (targetRef === null || targetRef === void 0 ? void 0 : targetRef.contains(target));
            var isTouchingTooltipRef = target && (tooltipRef === null || tooltipRef === void 0 ? void 0 : tooltipRef.contains(target));
            if (isTouchingTargetRef) {
                setIsOpen(function (prevOpen) { return !prevOpen; });
            }
            else if (isTouchingTooltipRef) {
                // Don't close the menu immediately so it catches the event
                setTimeout(function () {
                    setIsOpen(false);
                }, 100);
            }
            else {
                setIsOpen(false);
            }
        };
        if (isTouchDevice()) {
            document.addEventListener("touchstart", toggleTouch);
        }
        else {
            targetRef === null || targetRef === void 0 ? void 0 : targetRef.addEventListener("mouseenter", showTooltip);
            targetRef === null || targetRef === void 0 ? void 0 : targetRef.addEventListener("mouseleave", hideTooltip);
            tooltipRef === null || tooltipRef === void 0 ? void 0 : tooltipRef.addEventListener("mouseenter", showTooltip);
            tooltipRef === null || tooltipRef === void 0 ? void 0 : tooltipRef.addEventListener("mouseleave", hideTooltip);
        }
        return function () {
            if (isTouchDevice()) {
                document.removeEventListener("touchstart", toggleTouch);
            }
            else {
                targetRef === null || targetRef === void 0 ? void 0 : targetRef.removeEventListener("mouseenter", showTooltip);
                targetRef === null || targetRef === void 0 ? void 0 : targetRef.removeEventListener("mouseleave", hideTooltip);
                tooltipRef === null || tooltipRef === void 0 ? void 0 : tooltipRef.removeEventListener("mouseenter", showTooltip);
                tooltipRef === null || tooltipRef === void 0 ? void 0 : tooltipRef.removeEventListener("mouseleave", hideTooltip);
            }
        };
    }, [targetRef, tooltipRef, hideTimeout, isHoveringOverTooltip, setIsOpen]);
    return (React__default['default'].createElement(React__default['default'].Fragment, null,
        React__default['default'].createElement(StyledUserMenu, __assign({ ref: setTargetRef }, props),
            React__default['default'].createElement(MenuIcon, { avatarSrc: avatarSrc, variant: variant }),
            React__default['default'].createElement(LabelText, { title: text || account }, text || accountEllipsis),
            React__default['default'].createElement(Icon$1I, { color: "text", width: "24px" })),
        React__default['default'].createElement(Menu, __assign({ style: styles.popper, ref: setTooltipRef }, attributes.popper, { isOpen: isOpen }), children)));
};
var templateObject_1$4, templateObject_2$1, templateObject_3;

exports.ConnectorNames = void 0;
(function (ConnectorNames) {
    ConnectorNames["Injected"] = "injected";
    ConnectorNames["WalletConnect"] = "walletconnect";
    ConnectorNames["BSC"] = "bsc";
})(exports.ConnectorNames || (exports.ConnectorNames = {}));

var connectors = [
    {
        title: "Metamask",
        icon: Icon$1c,
        connectorId: exports.ConnectorNames.Injected,
        priority: 1,
    },
    {
        title: "WalletConnect",
        icon: Icon$m,
        connectorId: exports.ConnectorNames.WalletConnect,
        priority: 2,
    },
    {
        title: "Trust Wallet",
        icon: Icon$u,
        connectorId: exports.ConnectorNames.Injected,
        priority: 3,
    },
    {
        title: "MathWallet",
        icon: Icon$1j,
        connectorId: exports.ConnectorNames.Injected,
        priority: 999,
    },
    {
        title: "TokenPocket",
        icon: Icon$y,
        connectorId: exports.ConnectorNames.Injected,
        priority: 999,
    },
    {
        title: "Binance Chain",
        icon: Icon$1V,
        connectorId: exports.ConnectorNames.BSC,
        priority: 999,
    },
    {
        title: "SafePal",
        icon: Icon$O,
        connectorId: exports.ConnectorNames.Injected,
        priority: 999,
    },
    {
        title: "Coin98",
        icon: Icon$1C,
        connectorId: exports.ConnectorNames.Injected,
        priority: 999,
    },
];
var connectorLocalStorageKey = "connectorIdv2";
var walletLocalStorageKey = "wallet";

var WalletButton = styled__default['default'](Button).attrs({ width: "100%", variant: "text", py: "16px" })(templateObject_1$3 || (templateObject_1$3 = __makeTemplateObject(["\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  height: auto;\n  justify-content: center;\n  margin-left: auto;\n  margin-right: auto;\n"], ["\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  height: auto;\n  justify-content: center;\n  margin-left: auto;\n  margin-right: auto;\n"])));
var MoreWalletCard = function (_a) {
    var t = _a.t, props = __rest(_a, ["t"]);
    return (React__default['default'].createElement(WalletButton, __assign({ variant: "tertiary" }, props),
        React__default['default'].createElement(Icon$1a, { width: "40px", mb: "8px", color: "textSubtle" }),
        React__default['default'].createElement(Text, { fontSize: "14px" }, t("More"))));
};
var WalletCard = function (_a) {
    var login = _a.login, walletConfig = _a.walletConfig, onDismiss = _a.onDismiss;
    var title = walletConfig.title, Icon = walletConfig.icon;
    return (React__default['default'].createElement(WalletButton, { variant: "tertiary", onClick: function () {
            var isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
            // Since iOS does not support Trust Wallet we fall back to WalletConnect
            if (walletConfig.title === "Trust Wallet" && isIOS) {
                login(exports.ConnectorNames.WalletConnect);
            }
            else {
                login(walletConfig.connectorId);
            }
            localStorage.setItem(walletLocalStorageKey, walletConfig.title);
            localStorage.setItem(connectorLocalStorageKey, walletConfig.connectorId);
            onDismiss();
        }, id: "wallet-connect-" + title.toLocaleLowerCase() },
        React__default['default'].createElement(Icon, { width: "40px", mb: "8px" }),
        React__default['default'].createElement(Text, { fontSize: "14px" }, title)));
};
var templateObject_1$3;

var WalletWrapper = styled__default['default'](Box)(templateObject_1$2 || (templateObject_1$2 = __makeTemplateObject(["\n  border-bottom: 1px solid ", ";\n"], ["\n  border-bottom: 1px solid ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.cardBorder;
});
/**
 * Checks local storage if we have saved the last wallet the user connected with
 * If we find something we put it at the top of the list
 *
 * @returns sorted config
 */
var getPreferredConfig = function (walletConfig) {
    var preferredWalletName = localStorage.getItem(walletLocalStorageKey);
    var sortedConfig = walletConfig.sort(function (a, b) { return a.priority - b.priority; });
    if (!preferredWalletName) {
        return sortedConfig;
    }
    var preferredWallet = sortedConfig.find(function (sortedWalletConfig) { return sortedWalletConfig.title === preferredWalletName; });
    if (!preferredWallet) {
        return sortedConfig;
    }
    return __spreadArray([
        preferredWallet
    ], sortedConfig.filter(function (sortedWalletConfig) { return sortedWalletConfig.title !== preferredWalletName; }));
};
var ConnectModal = function (_a) {
    var login = _a.login, _b = _a.onDismiss, onDismiss = _b === void 0 ? function () { return null; } : _b, _c = _a.displayCount, displayCount = _c === void 0 ? 3 : _c, t = _a.t;
    var _d = React.useState(false), showMore = _d[0], setShowMore = _d[1];
    var theme = styled.useTheme();
    var sortedConfig = getPreferredConfig(connectors);
    var displayListConfig = showMore ? sortedConfig : sortedConfig.slice(0, displayCount);
    return (React__default['default'].createElement(ModalContainer, { minWidth: "320px" },
        React__default['default'].createElement(ModalHeader, { background: getThemeValue("colors.gradients.bubblegum")(theme) },
            React__default['default'].createElement(ModalTitle, null,
                React__default['default'].createElement(Heading, null, t("Connect Wallet"))),
            React__default['default'].createElement(ModalCloseButton, { onDismiss: onDismiss })),
        React__default['default'].createElement(ModalBody, { width: ["320px", null, "340px"] },
            React__default['default'].createElement(WalletWrapper, { py: "24px", maxHeight: "453px", overflowY: "auto" },
                React__default['default'].createElement(Grid, { gridTemplateColumns: "1fr 1fr" },
                    displayListConfig.map(function (wallet) { return (React__default['default'].createElement(Box, { key: wallet.title },
                        React__default['default'].createElement(WalletCard, { walletConfig: wallet, login: login, onDismiss: onDismiss }))); }),
                    !showMore && React__default['default'].createElement(MoreWalletCard, { t: t, onClick: function () { return setShowMore(true); } }))),
            React__default['default'].createElement(Box, { p: "24px" },
                React__default['default'].createElement(Text, { textAlign: "center", color: "textSubtle", as: "p", mb: "16px" }, t("Haven’t got a crypto wallet yet?")),
                React__default['default'].createElement(Button, __assign({ as: "a", href: "https://docs.pancakeswap.finance/get-started/connection-guide", variant: "subtle", width: "100%" }, getExternalLinkProps()), t("Learn How to Connect"))))));
};
var templateObject_1$2;

var StyleButton = styled__default['default'](Text).attrs({ role: "button" })(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n  align-items: center;\n  color: ", ";\n"], ["\n  position: relative;\n  display: flex;\n  align-items: center;\n  color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.primary;
});
var Tooltip = styled__default['default'].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: ", ";\n  position: absolute;\n  bottom: -22px;\n  right: 0;\n  left: 0;\n  text-align: center;\n  background-color: ", ";\n  color: ", ";\n  border-radius: 16px;\n  opacity: 0.7;\n"], ["\n  display: ", ";\n  position: absolute;\n  bottom: -22px;\n  right: 0;\n  left: 0;\n  text-align: center;\n  background-color: ", ";\n  color: ", ";\n  border-radius: 16px;\n  opacity: 0.7;\n"])), function (_a) {
    var isTooltipDisplayed = _a.isTooltipDisplayed;
    return (isTooltipDisplayed ? "block" : "none");
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.contrast;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.invertedContrast;
});
var CopyToClipboard = function (_a) {
    var toCopy = _a.toCopy, children = _a.children, props = __rest(_a, ["toCopy", "children"]);
    var _b = React.useState(false), isTooltipDisplayed = _b[0], setIsTooltipDisplayed = _b[1];
    var copyToClipboardWithCommand = function (content) {
        var el = document.createElement("textarea");
        el.value = content;
        document.body.appendChild(el);
        el.select();
        document.execCommand("copy");
        document.body.removeChild(el);
    };
    function displayTooltip() {
        setIsTooltipDisplayed(true);
        setTimeout(function () {
            setIsTooltipDisplayed(false);
        }, 1000);
    }
    return (React__default['default'].createElement(StyleButton, __assign({ small: true, bold: true, onClick: function () {
            if (navigator.clipboard && navigator.permissions) {
                navigator.clipboard.writeText(toCopy).then(function () { return displayTooltip(); });
            }
            else if (document.queryCommandSupported("copy")) {
                copyToClipboardWithCommand(toCopy);
                displayTooltip();
            }
        } }, props),
        children,
        React__default['default'].createElement(Icon$1z, { width: "20px", color: "primary", ml: "4px" }),
        React__default['default'].createElement(Tooltip, { isTooltipDisplayed: isTooltipDisplayed }, "Copied")));
};
var templateObject_1$1, templateObject_2;

var AccountModal = function (_a) {
    var account = _a.account, logout = _a.logout, _b = _a.onDismiss, onDismiss = _b === void 0 ? function () { return null; } : _b, t = _a.t;
    return (React__default['default'].createElement(Modal, { title: t("Your wallet"), onDismiss: onDismiss },
        React__default['default'].createElement(Text, { fontSize: "20px", bold: true, style: { whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", marginBottom: "8px" } }, account),
        React__default['default'].createElement(Flex, { mb: "32px" },
            React__default['default'].createElement(LinkExternal, { small: true, href: "https://bscscan.com/address/" + account, mr: "16px" }, t("View on BscScan")),
            React__default['default'].createElement(CopyToClipboard, { toCopy: account }, t("Copy Address"))),
        React__default['default'].createElement(Flex, { justifyContent: "center" },
            React__default['default'].createElement(Button, { scale: "sm", variant: "secondary", onClick: function () {
                    logout();
                    window.localStorage.removeItem(connectorLocalStorageKey);
                    onDismiss();
                } }, t("Logout")))));
};

var useWalletModal = function (login, logout, t, account) {
    var onPresentConnectModal = useModal(React__default['default'].createElement(ConnectModal, { login: login, t: t }))[0];
    var onPresentAccountModal = useModal(React__default['default'].createElement(AccountModal, { account: account || "", logout: logout, t: t }))[0];
    return { onPresentConnectModal: onPresentConnectModal, onPresentAccountModal: onPresentAccountModal };
};

var ResetCSS = styled.createGlobalStyle(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  /* prettier-ignore */\n  html, body, div, span, applet, object, iframe,\n  h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n  a, abbr, acronym, address, big, cite, code,\n  del, dfn, em, img, ins, kbd, q, s, samp,\n  small, strike, strong, sub, sup, tt, var,\n  b, u, i, center,\n  dl, dt, dd, ol, ul, li,\n  fieldset, form, label, legend,\n  table, caption, tbody, tfoot, thead, tr, th, td,\n  article, aside, canvas, details, embed, \n  figure, figcaption, footer, header, hgroup, \n  menu, nav, output, ruby, section, summary,\n  time, mark, audio, video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    vertical-align: baseline;\n  }\n  /* HTML5 display-role reset for older browsers */\n  /* prettier-ignore */\n  article, aside, details, figcaption, figure, \n  footer, header, hgroup, menu, nav, section {\n    display: block;\n  }\n  body {\n    line-height: 1;\n    font-size: 16px;\n  }\n  ol,\n  ul {\n    list-style: disc;\n    list-style-position: inside;\n  }\n  blockquote,\n  q {\n    quotes: none;\n  }\n  blockquote:before,\n  blockquote:after,\n  q:before,\n  q:after {\n    content: \"\";\n    content: none;\n  }\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n  a {\n    color: inherit;\n    text-decoration: none;\n  }\n  [role=\"button\"] {\n    cursor: pointer;\n  }\n  *,\n  *::before,\n  *::after {\n    box-sizing: border-box;\n  }\n  * {\n    font-family: 'Kanit', sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  /* Number */\n  input::-webkit-outer-spin-button,\n  input::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n    margin: 0;\n  }\n  input[type=number] {\n    -moz-appearance: textfield;\n  }\n\n  /* Scrollbar */\n  ::-webkit-scrollbar {\n    width: 8px;\n  }\n  ::-webkit-scrollbar-thumb {\n    background: ", "; \n    border-radius: 8px;\n  }\n  ::-webkit-scrollbar-track {\n    box-shadow: inset 0 0 5px ", "; \n    border-radius: 10px;\n  }\n\n  /* Slider */ \n  input[type=range] {\n    -webkit-appearance: none; /* Hides the slider so that custom slider can be made */\n    width: 100%; /* Specific width is required for Firefox. */\n    background: transparent; /* Otherwise white in Chrome */\n  }\n  input[type=range]::-webkit-slider-thumb {\n    -webkit-appearance: none;\n  }\n  input[type=range]:focus {\n    outline: none; /* Removes the blue border. You should probably do some kind of focus styling for accessibility reasons though. */\n  }\n  input[type=range]::-ms-track {\n    width: 100%;\n    cursor: pointer;\n    /* Hides the slider so custom styles can be added */\n    background: transparent; \n    border-color: transparent;\n    color: transparent;\n  }  \n"], ["\n  /* prettier-ignore */\n  html, body, div, span, applet, object, iframe,\n  h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n  a, abbr, acronym, address, big, cite, code,\n  del, dfn, em, img, ins, kbd, q, s, samp,\n  small, strike, strong, sub, sup, tt, var,\n  b, u, i, center,\n  dl, dt, dd, ol, ul, li,\n  fieldset, form, label, legend,\n  table, caption, tbody, tfoot, thead, tr, th, td,\n  article, aside, canvas, details, embed, \n  figure, figcaption, footer, header, hgroup, \n  menu, nav, output, ruby, section, summary,\n  time, mark, audio, video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    vertical-align: baseline;\n  }\n  /* HTML5 display-role reset for older browsers */\n  /* prettier-ignore */\n  article, aside, details, figcaption, figure, \n  footer, header, hgroup, menu, nav, section {\n    display: block;\n  }\n  body {\n    line-height: 1;\n    font-size: 16px;\n  }\n  ol,\n  ul {\n    list-style: disc;\n    list-style-position: inside;\n  }\n  blockquote,\n  q {\n    quotes: none;\n  }\n  blockquote:before,\n  blockquote:after,\n  q:before,\n  q:after {\n    content: \"\";\n    content: none;\n  }\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n  a {\n    color: inherit;\n    text-decoration: none;\n  }\n  [role=\"button\"] {\n    cursor: pointer;\n  }\n  *,\n  *::before,\n  *::after {\n    box-sizing: border-box;\n  }\n  * {\n    font-family: 'Kanit', sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  /* Number */\n  input::-webkit-outer-spin-button,\n  input::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n    margin: 0;\n  }\n  input[type=number] {\n    -moz-appearance: textfield;\n  }\n\n  /* Scrollbar */\n  ::-webkit-scrollbar {\n    width: 8px;\n  }\n  ::-webkit-scrollbar-thumb {\n    background: ", "; \n    border-radius: 8px;\n  }\n  ::-webkit-scrollbar-track {\n    box-shadow: inset 0 0 5px ", "; \n    border-radius: 10px;\n  }\n\n  /* Slider */ \n  input[type=range] {\n    -webkit-appearance: none; /* Hides the slider so that custom slider can be made */\n    width: 100%; /* Specific width is required for Firefox. */\n    background: transparent; /* Otherwise white in Chrome */\n  }\n  input[type=range]::-webkit-slider-thumb {\n    -webkit-appearance: none;\n  }\n  input[type=range]:focus {\n    outline: none; /* Removes the blue border. You should probably do some kind of focus styling for accessibility reasons though. */\n  }\n  input[type=range]::-ms-track {\n    width: 100%;\n    cursor: pointer;\n    /* Hides the slider so custom styles can be added */\n    background: transparent; \n    border-color: transparent;\n    color: transparent;\n  }  \n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.textSubtle;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
});
var templateObject_1;

exports.AccountFilledIcon = Icon$25;
exports.AccountIcon = Icon$26;
exports.AddIcon = Icon$24;
exports.Alert = Alert;
exports.ArrowBackIcon = Icon$23;
exports.ArrowDownIcon = Icon$22;
exports.ArrowDropDownIcon = Icon$21;
exports.ArrowDropUpIcon = Icon$20;
exports.ArrowFirstIcon = Icon$1$;
exports.ArrowForwardIcon = Icon$1_;
exports.ArrowLastIcon = Icon$1Z;
exports.ArrowUpIcon = Icon$1Y;
exports.AutoRenewIcon = Icon$1X;
exports.BackgroundImage = BackgroundImage;
exports.BalanceInput = BalanceInput;
exports.BaseLayout = GridLayout$1;
exports.BaseMenu = BaseMenu;
exports.BinanceChainIcon = Icon$1V;
exports.BinanceIcon = Icon$1W;
exports.BlockIcon = Icon$28;
exports.BnbUsdtPairTokenIcon = Icon$1U;
exports.Box = Box;
exports.Breadcrumbs = Breadcrumbs;
exports.BscScanIcon = Icon$1T;
exports.BunnyCardsIcon = Icon$1S;
exports.BunnyPlaceholderIcon = Icon$1R;
exports.Button = Button;
exports.ButtonMenu = ButtonMenu$1;
exports.ButtonMenuItem = ButtonMenuItem;
exports.CalculateIcon = Icon$1N;
exports.CameraIcon = Icon$1Q;
exports.Card = Card;
exports.CardBody = CardBody;
exports.CardFooter = CardFooter;
exports.CardHeader = CardHeader;
exports.CardRibbon = CardRibbon;
exports.CardViewIcon = Icon$1O;
exports.Cards = Icon$1P;
exports.CardsLayout = GridLayout;
exports.ChartIcon = Icon$1L;
exports.Checkbox = Checkbox;
exports.CheckmarkCircleFillIcon = Icon$1J;
exports.CheckmarkCircleIcon = Icon$2a;
exports.CheckmarkIcon = Icon$1K;
exports.ChevronDownIcon = Icon$1I;
exports.ChevronLeftIcon = Icon$1H;
exports.ChevronRightIcon = Icon$1G;
exports.ChevronUpIcon = Icon$1F;
exports.CircleOutlineIcon = Icon$1M;
exports.ClickableElementContainer = ClickableElementContainer;
exports.CloseIcon = Icon$1E;
exports.CogIcon = Icon$1D;
exports.Coin98Icon = Icon$1C;
exports.CommunityFilledIcon = Icon$1A;
exports.CommunityIcon = Icon$1B;
exports.CopyIcon = Icon$1z;
exports.CrownIcon = Icon$1y;
exports.CurrencyIcon = Icon$1x;
exports.Dropdown = Dropdown;
exports.EarnFilledIcon = Icon$1v;
exports.EarnIcon = Icon$1w;
exports.EllipsisIcon = Icon$1u;
exports.ErrorIcon = Icon$29;
exports.ExpandableButton = ExpandableButton;
exports.ExpandableLabel = ExpandableLabel;
exports.FallingBunnies = FallingBunnies;
exports.Flex = Flex;
exports.Grid = Grid;
exports.Heading = Heading;
exports.HelpIcon = Icon$1t;
exports.HistoryIcon = Icon$1s;
exports.IconButton = IconButton;
exports.Image = Image;
exports.InfoIcon = Icon$27;
exports.InlineMenu = InlineMenu;
exports.InlineMenuContainer = InlineMenuContainer;
exports.Input = Input$1;
exports.InputGroup = InputGroup;
exports.LanguageCurrencyIcon = Icon$1q;
exports.LanguageIcon = Icon$1r;
exports.LaurelLeftIcon = Icon$1p;
exports.LaurelRightIcon = Icon$1o;
exports.Link = Link;
exports.LinkExternal = LinkExternal;
exports.ListViewIcon = Icon$1n;
exports.LoginIcon = Icon$1m;
exports.LogoIcon = Icon$1l;
exports.LogoRoundIcon = Icon$1k;
exports.LogoutIcon = Icon$1i;
exports.MathWalletIcon = Icon$1j;
exports.MedalBronzeIcon = Icon$1h;
exports.MedalGoldIcon = Icon$1g;
exports.MedalPurpleIcon = Icon$1f;
exports.MedalSilverIcon = Icon$1e;
exports.MedalTealIcon = Icon$1d;
exports.Menu = Menu$1;
exports.Message = Message;
exports.MetamaskIcon = Icon$1c;
exports.MinusIcon = Icon$1b;
exports.Modal = Modal;
exports.ModalBackButton = ModalBackButton;
exports.ModalBody = ModalBody;
exports.ModalCloseButton = ModalCloseButton;
exports.ModalContainer = ModalContainer;
exports.ModalHeader = ModalHeader;
exports.ModalProvider = ModalProvider;
exports.ModalTitle = ModalTitle;
exports.MoreHorizontalIcon = Icon$1a;
exports.MoreVerticalIcon = Icon$19;
exports.NftFilledIcon = Icon$17;
exports.NftIcon = Icon$18;
exports.NoProfileAvatarIcon = Icon$16;
exports.NotificationDot = NotificationDot;
exports.OpenNewIcon = Icon$15;
exports.Overlay = Overlay;
exports.PancakeRoundIcon = Icon$12;
exports.PancakeToggle = PancakeToggle;
exports.PancakesIcon = Icon$14;
exports.PencilIcon = Icon$13;
exports.PineRoundIcon = Icon$11;
exports.PlayCircleOutlineIcon = Icon$$;
exports.PocketWatchIcon = Icon$10;
exports.PredictionsIcon = Icon$_;
exports.PresentCheckIcon = Icon$U;
exports.PresentNoneIcon = Icon$S;
exports.PresentWonIcon = Icon$T;
exports.PrizeIcon = Icon$Z;
exports.ProfileAvatar = ProfileAvatar;
exports.Progress = Progress;
exports.ProgressBunny = Icon$V;
exports.ProposalIcon = Icon$Y;
exports.Radio = Radio;
exports.RefreshIcon = Icon$R;
exports.RemoveIcon = Icon$X;
exports.ResetCSS = ResetCSS;
exports.ResourcesFilledIcon = Icon$P;
exports.ResourcesIcon = Icon$Q;
exports.SafePalIcon = Icon$O;
exports.SearchIcon = Icon$N;
exports.SellIcon = Icon$M;
exports.ShareIcon = Icon$L;
exports.Skeleton = Skeleton;
exports.Slider = Slider;
exports.SmallDotIcon = Icon$K;
exports.Spinner = Spinner;
exports.StarFillIcon = Icon$J;
exports.StarLineIcon = Icon$I;
exports.Step = Step;
exports.Stepper = Stepper;
exports.SubMenu = SubMenu;
exports.SubMenuContainer = SubMenuContainer;
exports.SubMenuItem = SubMenuItem;
exports.Svg = Svg;
exports.SwapIcon = Icon$H;
exports.SwapVertIcon = Icon$G;
exports.SyncAltIcon = Icon$F;
exports.Tab = Tab;
exports.TabMenu = ButtonMenu;
exports.Table = Table;
exports.Tag = Tag;
exports.Td = Td;
exports.TeamPlayerIcon = Icon$E;
exports.TestnetIcon = Icon$D;
exports.Text = Text;
exports.TextField = Textfield;
exports.Th = Th;
exports.Ticket = Icon$C;
exports.TicketFillIcon = Icon$B;
exports.TicketRound = Icon$A;
exports.TimerIcon = Icon$z;
exports.Toggle = Toggle;
exports.TokenImage = TokenImage;
exports.TokenPairImage = TokenPairImage;
exports.TokenPocketIcon = Icon$y;
exports.TooltipText = TooltipText;
exports.TradeFilledIcon = Icon$w;
exports.TradeIcon = Icon$x;
exports.TrophyGoldIcon = Icon$v;
exports.TrustWalletIcon = Icon$u;
exports.TuneIcon = Icon$t;
exports.UserMenu = UserMenu;
exports.UserMenuDivider = UserMenuDivider;
exports.UserMenuItem = UserMenuItem;
exports.VerifiedIcon = Icon$W;
exports.VisibilityOff = Icon$s;
exports.VisibilityOn = Icon$r;
exports.VolumeOffIcon = Icon$q;
exports.VolumeUpIcon = Icon$p;
exports.VoteIcon = Icon$o;
exports.WaitIcon = Icon$j;
exports.WalletConnectIcon = Icon$m;
exports.WalletFilledIcon = Icon$k;
exports.WalletIcon = Icon$l;
exports.WarningIcon = Icon$n;
exports.alertVariants = variants$5;
exports.byTextAscending = byTextAscending;
exports.byTextDescending = byTextDescending;
exports.connectorLocalStorageKey = connectorLocalStorageKey;
exports.dark = darkTheme;
exports.darkColors = darkColors;
exports.light = lightTheme;
exports.lightColors = lightColors;
exports.makeRender = makeRender;
exports.menuConfig = links;
exports.menuStatus = status;
exports.useKonamiCheatCode = useKonamiCheatCode;
exports.useMatchBreakpoints = useMatchBreakpoints;
exports.useModal = useModal;
exports.useParticleBurst = useParticleBurst;
exports.useTable = useTable;
exports.useTooltip = useTooltip;
exports.useWalletModal = useWalletModal;
