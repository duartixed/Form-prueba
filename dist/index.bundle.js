"use strict";
(self["webpackChunkformulario"] = self["webpackChunkformulario"] || []).push([["index"],{

/***/ "./src/js/modules/formHandler.js":
/*!***************************************!*\
  !*** ./src/js/modules/formHandler.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ setupFormHandler)
/* harmony export */ });
function setupFormHandler() {
  const form = document.getElementById('survey-form');
  const messageContainer = document.getElementById('message-container');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const age = document.getElementById('number').value;
    const dropdown = document.getElementById('dropdown').value;
    const radioButtons = document.querySelectorAll('input[name="choice"]:checked');
    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    const comments = document.getElementById('comments').value;

    if (name && email && age && dropdown && radioButtons && checkboxes.length > 0 && comments) {
      messageContainer.textContent = 'FORMULARIO ENVIADO CON ÉXITO';
      messageContainer.style.color = 'green'; // Estilo para el mensaje de éxito
      form.reset(); // Opcional: Resetea el formulario después de enviarlo
    } else {
      messageContainer.textContent = 'Por favor, complete todos los campos requeridos.';
      messageContainer.style.color = 'red'; // Estilo para el mensaje de error
    }
  });
}

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_modules_formHandler_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/modules/formHandler.js */ "./src/js/modules/formHandler.js");


document.addEventListener('DOMContentLoaded', () => {
  (0,_js_modules_formHandler_js__WEBPACK_IMPORTED_MODULE_0__["default"])(); // configurar el listener delformulario
});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/main.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBZTtBQUNmO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsOENBQThDO0FBQzlDLG9CQUFvQjtBQUNwQixNQUFNO0FBQ047QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7OztBQ3hCMkQ7O0FBRTNEO0FBQ0EsRUFBRSxzRUFBZ0IsSUFBSTtBQUN0QixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZm9ybXVsYXJpby8uL3NyYy9qcy9tb2R1bGVzL2Zvcm1IYW5kbGVyLmpzIiwid2VicGFjazovL2Zvcm11bGFyaW8vLi9zcmMvbWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZXR1cEZvcm1IYW5kbGVyKCkge1xuICBjb25zdCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1cnZleS1mb3JtJyk7XG4gIGNvbnN0IG1lc3NhZ2VDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVzc2FnZS1jb250YWluZXInKTtcblxuICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hbWUnKS52YWx1ZTtcbiAgICBjb25zdCBlbWFpbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbWFpbCcpLnZhbHVlO1xuICAgIGNvbnN0IGFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdudW1iZXInKS52YWx1ZTtcbiAgICBjb25zdCBkcm9wZG93biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkcm9wZG93bicpLnZhbHVlO1xuICAgIGNvbnN0IHJhZGlvQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W25hbWU9XCJjaG9pY2VcIl06Y2hlY2tlZCcpO1xuICAgIGNvbnN0IGNoZWNrYm94ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06Y2hlY2tlZCcpO1xuICAgIGNvbnN0IGNvbW1lbnRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbW1lbnRzJykudmFsdWU7XG5cbiAgICBpZiAobmFtZSAmJiBlbWFpbCAmJiBhZ2UgJiYgZHJvcGRvd24gJiYgcmFkaW9CdXR0b25zICYmIGNoZWNrYm94ZXMubGVuZ3RoID4gMCAmJiBjb21tZW50cykge1xuICAgICAgbWVzc2FnZUNvbnRhaW5lci50ZXh0Q29udGVudCA9ICdGT1JNVUxBUklPIEVOVklBRE8gQ09OIMOJWElUTyc7XG4gICAgICBtZXNzYWdlQ29udGFpbmVyLnN0eWxlLmNvbG9yID0gJ2dyZWVuJzsgLy8gRXN0aWxvIHBhcmEgZWwgbWVuc2FqZSBkZSDDqXhpdG9cbiAgICAgIGZvcm0ucmVzZXQoKTsgLy8gT3BjaW9uYWw6IFJlc2V0ZWEgZWwgZm9ybXVsYXJpbyBkZXNwdcOpcyBkZSBlbnZpYXJsb1xuICAgIH0gZWxzZSB7XG4gICAgICBtZXNzYWdlQ29udGFpbmVyLnRleHRDb250ZW50ID0gJ1BvciBmYXZvciwgY29tcGxldGUgdG9kb3MgbG9zIGNhbXBvcyByZXF1ZXJpZG9zLic7XG4gICAgICBtZXNzYWdlQ29udGFpbmVyLnN0eWxlLmNvbG9yID0gJ3JlZCc7IC8vIEVzdGlsbyBwYXJhIGVsIG1lbnNhamUgZGUgZXJyb3JcbiAgICB9XG4gIH0pO1xufSIsImltcG9ydCBzZXR1cEZvcm1IYW5kbGVyIGZyb20gJy4vanMvbW9kdWxlcy9mb3JtSGFuZGxlci5qcyc7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gIHNldHVwRm9ybUhhbmRsZXIoKTsgLy8gY29uZmlndXJhciBlbCBsaXN0ZW5lciBkZWxmb3JtdWxhcmlvXG59KTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=