"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_dom_1 = require("react-dom");
var App_1 = require("./component/App");
require("jquery");
require("bootstrap");
require("./style/index.scss");
react_dom_1["default"].render(<App_1.App />, document.getElementById("root"));
