"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
(function (window) {
  window.app = {
    components: {},
    isDev: function isDev() {
      return /^localhost/.test(window.location.host);
    },
    getIcon: function getIcon(iconName) {
      return window.app.isDev() ? "/assets/icons/default/sprite.svg#".concat(iconName) : "/local/templates/frp/public/assets/icons/default/sprite.svg#".concat(iconName);
    },
    getActualImage: function getActualImage(href) {
      return window.app.isDev() ? "/assets/".concat(href) : "/local/templates/frp/public/assets/".concat(href);
    },
    closeModal: function closeModal(id) {
      bootstrap.Modal.getInstance("#".concat(id)).hide();
    },
    openModal: function openModal(id) {
      var myModal = new bootstrap.Modal(document.getElementById(id));
      if (myModal) {
        myModal.show();
      } else {
        console.log('Элемента с таким id не существет');
      }
    }
  };
})(window);
(function (window) {
  if (!window.app) {
    window.app = {};
  }
  var breakpoints = {
    xxl: 1919,
    xl: 1439,
    lg: 1279,
    md: 991,
    sm: 575
  };
  var events = {}; // кастомные события

  window.app.config = {
    events: events,
    breakpoints: breakpoints

    // ...
  };
})(window);
(function (window) {
  if (!window.app) {
    window.app = {};
  }
  var checkResponse = function checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject("\u041E\u0448\u0438\u0431\u043A\u0430 ".concat(res.status));
  };
  var checkResponseSuccess = function checkResponseSuccess(res) {
    if (res && res.success) {
      return res;
    }
    return Promise.reject("\u041E\u0442\u0432\u0435\u0442 \u043D\u0435 success: ".concat(res));
  };
  var buildHttpClient = function buildHttpClient(baseUrl) {
    return function (endpoint) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return fetch("".concat(baseUrl).concat(endpoint), options).then(checkResponse).then(checkResponseSuccess);
    };
  };
  var setObserver = function setObserver(element, handleObserve) {
    var manualConfig = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var config = _objectSpread({
      childList: true
    }, manualConfig);
    var observer = new MutationObserver(function () {
      return handleObserve(element);
    });
    observer.observe(element, config);
  };
  var findAncestorsByClassName = function findAncestorsByClassName(el, className) {
    var stopElement = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    var ancestorEls = [];
    var currentParent = el.parentElement;
    if (!currentParent) {
      return ancestorEls;
    }
    while (currentParent !== null && currentParent !== stopElement) {
      if (currentParent.classList.contains(className)) {
        ancestorEls = [].concat(_toConsumableArray(ancestorEls), [currentParent]);
      }
      currentParent = currentParent.parentElement;
    }
    return ancestorEls;
  };
  var findAncestorByClassName = function findAncestorByClassName(el, className) {
    var ancestorEl = el.parentElement;
    while (!ancestorEl.classList.contains(className)) {
      ancestorEl = ancestorEl.parentElement;
      if (!ancestorEl) {
        return null;
      }
    }
    return ancestorEl;
  };
  var buildComponentLogger = function buildComponentLogger(componentName) {
    return function (text) {
      var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var msg = context ? "".concat(componentName, ":").concat(context, ":").concat(text) : "".concat(componentName, ":").concat(text);
      console.debug(msg);
      if (data) {
        console.dir(data);
      }
    };
  };
  var debounce = function debounce(callee, timeoutMs) {
    return function perform() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      var previousCall = this.lastCall;
      this.lastCall = Date.now();
      if (previousCall && this.lastCall - previousCall <= timeoutMs) {
        clearTimeout(this.lastCallTimer);
      }
      this.lastCallTimer = setTimeout(function () {
        return callee.apply(void 0, args);
      }, timeoutMs);
    };
  };
  var throttle = function throttle(callee, timeout) {
    var timer = null;
    return function perform() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      if (timer) return;
      timer = setTimeout(function () {
        callee.apply(void 0, args);
        clearTimeout(timer);
        timer = null;
      }, timeout);
    };
  };
  window.app.lib = {
    setObserver: setObserver,
    findAncestorsByClassName: findAncestorsByClassName,
    findAncestorByClassName: findAncestorByClassName,
    buildComponentLogger: buildComponentLogger,
    debounce: debounce,
    throttle: throttle,
    checkResponse: checkResponse,
    checkResponseSuccess: checkResponseSuccess,
    buildHttpClient: buildHttpClient
  };
})(window);
(function (window) {
  var dateInput = document.querySelector('[data-mask="date"]');
  var component = function component(element) {
    var _window$IMask, _window$IMask2, _window$IMask3;
    if (!element) {
      return;
    }
    var formatMobilePhone = {
      mask: '+{7} 000 000 00 00'
    };
    var formatINN = {
      mask: '0000000000'
    };
    var formatNumber = {
      mask: Number
    };
    var formatDate = {
      mask: Date,
      pattern: 'd.m.Y',
      placeholderChar: '_',
      lazy: false,
      blocks: {
        d: {
          mask: (_window$IMask = window.IMask) === null || _window$IMask === void 0 ? void 0 : _window$IMask.MaskedRange,
          from: 1,
          to: 31,
          maxLength: 2
        },
        m: {
          mask: (_window$IMask2 = window.IMask) === null || _window$IMask2 === void 0 ? void 0 : _window$IMask2.MaskedRange,
          from: 1,
          to: 12,
          maxLength: 2
        },
        Y: {
          mask: (_window$IMask3 = window.IMask) === null || _window$IMask3 === void 0 ? void 0 : _window$IMask3.MaskedRange,
          from: 1900,
          to: 2999,
          maxLength: 4
        }
      }
    };
    var formatEmail = {
      mask: /^\S*@?\S*$/
    };
    var formatText = {
      mask: /^[A-Za-zА-Яа-я\s]*$/
    };
    function applyMask() {
      if (!element.hasAttribute('data-mask')) {
        return;
      }
      var maskType = element.getAttribute('data-mask');
      var mask;
      switch (maskType) {
        case 'mobile-phone':
          mask = IMask(element, formatMobilePhone);
          break;
        case 'inn':
          mask = IMask(element, formatINN);
          break;
        case 'number':
          mask = IMask(element, formatNumber);
          break;
        case 'date':
          mask = IMask(element, formatDate);
          break;
        case 'email':
          mask = IMask(element, formatEmail);
          break;
        case 'text':
          mask = IMask(element, formatText);
          break;
        default:
          break;
      }
    }
    try {
      applyMask();
    } catch (e) {
      console.log(e.message);
    }
  };
  var mount = function mount() {
    var elements = document.querySelectorAll('input');
    elements.forEach(component);
  };
  var handleColor = function handleColor() {
    if (dateInput.value === '__.__.____') {
      dateInput.classList.remove('_color_active');
    } else {
      dateInput.classList.add('_color_active');
    }
  };
  document.addEventListener('DOMContentLoaded', mount);
  if (dateInput) {
    dateInput.addEventListener('change', handleColor);
    dateInput.addEventListener('input', handleColor);
  }
})(window);
(function () {
  var component = function component(element) {
    if (!element) return;
    var inputField = element.querySelector('.input__field');
    var input = element.querySelector('.input__field-input');
    var removeErrorClass = function removeErrorClass() {
      return element.classList.remove('_error');
    };
    if (inputField) inputField.addEventListener('input', removeErrorClass);
    if (element.dataset.type === 'password') {
      var toggler = element.querySelector('.input__password-toggler');
      if (!input || !toggler) return;
      var togglePasswordVisibility = function togglePasswordVisibility() {
        input.type = input.type === 'password' ? 'text' : 'password';
        toggler.innerHTML = "<svg class=\"icon _size_sm input__password-icon\"><use xlink:href=\"".concat(window.app.getIcon(input.type === 'password' ? 'password-unlock' : 'password-lock'), "\"></use></svg>");
      };
      var updateStyles = function updateStyles() {
        element.classList.toggle('_focus', input === document.activeElement);
        element.classList.toggle('_filled', !!input.value);
      };
      toggler.addEventListener('click', togglePasswordVisibility);
      input.addEventListener('focus', updateStyles);
      input.addEventListener('blur', updateStyles);
      input.addEventListener('input', updateStyles);
      updateStyles();
    }
    if (element.classList.contains('_type_search')) {
      var searchButton = element.querySelector('.input__search-button');
      var crossButton = element.querySelector('.input__cross-button');
      if (!input || !searchButton || !crossButton) return;
      var addActiveStyles = function addActiveStyles() {
        if (input.value) {
          element.classList.add('_active');
          element.classList.remove('_dropdown-close');
        } else {
          element.classList.remove('_active');
          element.classList.remove('_dropdown-close');
        }
      };
      var removeActiveStyles = function removeActiveStyles() {
        input.value = '';
        element.classList.remove('_active');
      };
      var handleOutsideClick = function handleOutsideClick(e) {
        var target = e.target;
        if (!element.contains(target)) {
          element.classList.add('_dropdown-close');
        }
      };
      try {
        if (searchButton) searchButton.addEventListener('click', addActiveStyles);
        if (input) input.addEventListener('input', addActiveStyles);
        if (crossButton) crossButton.addEventListener('click', removeActiveStyles);
        document.addEventListener('click', handleOutsideClick);
      } catch (e) {
        console.error("Error:", e.message);
      }
    }
    if (element.classList.contains('_type_promo')) {
      var toggleStyles = function toggleStyles() {
        element.classList.toggle('_active', !!inputField.value);
      };
      inputField.addEventListener('input', toggleStyles);
    }
  };
  var mount = function mount() {
    document.querySelectorAll('.input').forEach(component);
  };
  document.addEventListener('DOMContentLoaded', mount);
})();
(function () {
  var component = function component(element) {
    if (!element) return;
    var dropdownElement = element.querySelector('.select__dropdown');
    var icon = element.querySelector('.select__toggle-icon');
    var trigger = element.querySelector('.select__trigger');
    var resultElement = element.querySelector('.select__selected-option');
    var state = {
      visibility: 'hidden',
      value: ''
    };
    var initSelectedClass = function initSelectedClass() {
      var selectItems = element.querySelectorAll('.select__item');
      if (!selectItems) return;
      selectItems.forEach(function (item) {
        if (item.checked) {
          var labelElement = item.closest('.select__dropdown-item');
          labelElement.classList.add('_active');
          trigger.classList.add('_selected');
        }
      });
    };
    var renderVisibility = function renderVisibility() {
      if (state.visibility === 'shown') {
        if (dropdownElement) dropdownElement.classList.remove('_hidden');
        if (icon) icon.classList.add('_rotate');
      } else {
        if (dropdownElement) dropdownElement.classList.add('_hidden');
        if (icon) icon.classList.remove('_rotate');
      }
    };
    var renderResult = function renderResult() {
      if (resultElement) {
        resultElement.textContent = state.value;
      } else {
        console.error('resultElement not found');
      }
    };
    var handleTogglerClick = function handleTogglerClick(e) {
      if (element.classList.contains('_disabled')) return;
      state.visibility = state.visibility === 'hidden' ? 'shown' : 'hidden';
      renderVisibility();
    };
    var handleValueChange = function handleValueChange(e) {
      e.stopPropagation();
      var target = e.target;
      var labelElement = target.closest('.select__dropdown-item');
      var labelElemets = element.querySelectorAll('.select__dropdown-item');
      var targetValue = labelElement ? labelElement.textContent : null;
      state.value = targetValue;
      state.visibility = 'hidden';
      trigger.classList.add('_selected');
      labelElemets.forEach(function (label) {
        label.classList.remove('_active');
        label.classList.remove('_checked');
      });
      labelElement.classList.add('_active');
      if (element.classList.contains('_type_check')) {
        labelElement.classList.add('_checked');
      }
      renderVisibility();
      renderResult();

      //диспатч
      var event = new CustomEvent('itemSelected', {
        detail: {
          value: targetValue
        }
      });
      element.dispatchEvent(event);
    };
    var handleIconClick = function handleIconClick(e) {
      e.stopPropagation();
      state.visibility = 'shown';
      renderVisibility();
    };
    var syncState = function syncState() {
      var labels = element.querySelectorAll('.select__dropdown-item');
      labels.forEach(function (label) {
        var input = label.querySelector('input');
        var targetValue = label ? label.textContent : null;
        if (!input.checked) {
          return;
        }
        state.value = targetValue;
      });
    };
    var handleInit = function handleInit() {
      syncState();
      if (state.value) renderResult();
    };
    var onManualRefresh = function onManualRefresh() {
      state.value = '';
      syncState();
      renderResult();
    };
    var handleOutsideClick = function handleOutsideClick(e) {
      var target = e.target;
      if (!element.contains(target) && state.visibility === 'shown') {
        state.visibility = 'hidden';
        renderVisibility();
      }
    };
    try {
      initSelectedClass();
      handleInit();
      element.addEventListener('select:manual:refresh', onManualRefresh);
      element.addEventListener('click', handleTogglerClick);
      if (dropdownElement) dropdownElement.addEventListener('change', handleValueChange);
      document.addEventListener('click', handleOutsideClick);
      if (icon) icon.addEventListener('click', handleIconClick);
    } catch (e) {
      console.error("Error:", e.message);
    }
  };
  var mount = function mount() {
    document.querySelectorAll('.select').forEach(component);
  };
  document.addEventListener('DOMContentLoaded', mount);
})();
(function () {
  var component = function component(element) {
    if (!element) return;
    var priceMinInput = element.querySelector('.counter__input._min');
    var priceMaxInput = element.querySelector('.counter__input._max');
    var priceMin = element.dataset.min;
    var priceMax = element.dataset.max;
    noUiSlider.create(element, {
      start: [priceMin, priceMax],
      connect: true,
      range: {
        'min': 0,
        'max': +priceMax
      },
      format: {
        to: function to(value) {
          return Math.round(value);
        },
        from: function from(value) {
          return Math.round(value);
        }
      }
    });
    var toggleTooltips = function toggleTooltips(slider) {
      var inputs = slider.querySelectorAll('.counter__input');
      slider.noUiSlider.on('start', function () {
        inputs.forEach(function (input) {
          input.classList.add('_active');
        });
      });
    };
    element.noUiSlider.on('update', function (values, handle) {
      if (handle === 0) {
        priceMinInput.value = "".concat(Math.round(values[handle]), " - ");
      }
      if (handle === 1) {
        priceMaxInput.value = "".concat(Math.round(values[handle]), " $");
      }
    });
    priceMinInput.addEventListener('change', function (event) {
      var minPrice = parseFloat(event.target.value);
      var maxPrice = parseFloat(priceMaxInput.value.replace('$', ''));
      if (minPrice > maxPrice || isNaN(minPrice) || isNaN(maxPrice)) {
        return;
      }
      element.noUiSlider.set([minPrice, null]);
    });
    priceMaxInput.addEventListener('change', function (event) {
      var maxPrice = parseFloat(event.target.value.replace('$', ''));
      var minPrice = parseFloat(priceMinInput.value.replace('$', ''));
      if (maxPrice < minPrice || isNaN(maxPrice) || isNaN(minPrice)) {
        return;
      }
      element.noUiSlider.set([null, maxPrice]);
    });
    toggleTooltips(element);
  };
  var mount = function mount() {
    document.querySelectorAll('.counter').forEach(component);
  };
  document.addEventListener('DOMContentLoaded', mount);
})();
(function () {
  var component = function component(element) {
    if (!element) return;
    var toggleActive = function toggleActive() {
      element.classList.toggle('active');
    };
    element.addEventListener('click', toggleActive);
  };
  var mount = function mount() {
    document.querySelectorAll('.like').forEach(component);
  };
  document.addEventListener('DOMContentLoaded', mount);
})();
(function () {
  var component = function component(element) {
    if (!element) return;
    var toggleDirection = function toggleDirection() {
      element.classList.toggle('_type_up');
    };
    element.addEventListener('click', toggleDirection);
  };
  var mount = function mount() {
    document.querySelectorAll('.sort').forEach(component);
  };
  document.addEventListener('DOMContentLoaded', mount);
})();
(function () {
  var component = function component(element) {
    if (!element) return;
    var addButton = element.querySelector('.input-images__button');
    var fileInput = element.querySelector('.input-images__input');
    var imageWrapper = element.querySelector('.input-images__swiper-wrapper');
    var deleteAllButton = element.querySelector('.input-images__button-delete-all');
    var slider = element.querySelector('.input-images__swiper') || element.closest('.input-images__swiper');
    var uploadedFiles = [];
    new Swiper(slider, {
      spaceBetween: 8,
      slidesPerView: 'auto'
    });
    if (addButton && fileInput) addButton.addEventListener('click', function () {
      fileInput.click();
    });
    var toggleActiveClass = function toggleActiveClass() {
      if (uploadedFiles) {
        element.classList.add('active');
      } else {
        element.classList.remove('active');
      }
    };
    if (fileInput) fileInput.addEventListener('change', function (event) {
      var files = Array.from(event.target.files);
      files.forEach(function (file) {
        if (file.type.startsWith('image/')) {
          uploadedFiles.push(file);
          var reader = new FileReader();
          reader.onload = function (e) {
            var imageUrl = e.target.result;
            addImage(imageUrl, file.name);
          };
          reader.readAsDataURL(file);
        }
      });
      updateFileInput();
      toggleActiveClass();
    });
    function addImage(imageUrl, fileName) {
      if (imageWrapper) {
        var slide = document.createElement('div');
        slide.classList.add('swiper-slide', 'input-images__swiper-slide');
        slide.setAttribute('data-file-name', fileName);
        var imageDiv = document.createElement('div');
        imageDiv.classList.add('input-images__image');
        var img = document.createElement('img');
        img.src = imageUrl;
        img.alt = '';
        var deleteButton = document.createElement('button');
        deleteButton.classList.add('input-images__image-delete-btn');
        deleteButton.innerHTML = "<svg class=\"icon _size_sm\"><use xlink:href=\"assets/icons/default/sprite.svg#bin\"></use></svg>";
        deleteButton.addEventListener('click', function () {
          deleteImage(fileName, slide);
        });
        imageDiv.appendChild(img);
        imageDiv.appendChild(deleteButton);
        slide.appendChild(imageDiv);
        imageWrapper.appendChild(slide);
      } else {
        console.log('image wrapper is not found');
      }
    }
    function deleteImage(fileName, slideElement) {
      uploadedFiles = uploadedFiles.filter(function (file) {
        return file.name !== fileName;
      });
      slideElement.remove();
      updateFileInput();
      toggleActiveClass();
    }
    function updateFileInput() {
      if (fileInput) {
        var dataTransfer = new DataTransfer();
        uploadedFiles.forEach(function (file) {
          return dataTransfer.items.add(file);
        });
        fileInput.files = dataTransfer.files;
        toggleActiveClass();
      } else {
        console.log('file input is not found');
      }
    }
    deleteAllButton.addEventListener('click', function () {
      uploadedFiles = [];
      if (imageWrapper) {
        while (imageWrapper.firstChild) {
          imageWrapper.removeChild(imageWrapper.firstChild);
        }
      }
      updateFileInput();
      toggleActiveClass();
    });
  };
  var mount = function mount() {
    document.querySelectorAll('.input-images').forEach(component);
  };
  document.addEventListener('DOMContentLoaded', mount);
})();
(function () {
  var component = function component(element) {
    if (!element) return;
    var burgerButton = element.querySelector('.header__burger');
    var closeButton = element.querySelector('.header__close-icon');
    var menu = element.querySelector('.header__content');
    var addActiveClass = function addActiveClass() {
      menu.classList.add('active');
    };
    var removeActiveClass = function removeActiveClass() {
      menu.classList.remove('active');
    };
    try {
      if (burgerButton) burgerButton.addEventListener('click', addActiveClass);
      if (closeButton) closeButton.addEventListener('click', removeActiveClass);
    } catch (e) {
      console.error("Error:", e.message);
    }
  };
  var mount = function mount() {
    document.querySelectorAll('.header').forEach(component);
  };
  document.addEventListener('DOMContentLoaded', mount);
})();
(function (window) {
  var windowWidth = window.innerWidth;
  var component = function component(element) {
    if (!element) {
      return;
    }
    var sliderPromo = element.querySelector('.s-promo__swiper') || element.closest('.s-promo__swiper');
    var sliderVideoTutorials = element.querySelector('.s-video-tutorials__swiper') || element.closest('.s-video-tutorials__swiper');
    var sliderBlog = element.querySelector('.s-blog__swiper') || element.closest('.s-blog__swiper');
    var sliderStories = element.querySelector('.s-stories__swiper') || element.closest('.s-stories__swiper');
    var sliderReviews = element.querySelector('.s-reviews__swiper') || element.closest('.s-reviews__swiper');
    var sliderComment = element.querySelector('.comment__swiper') || element.closest('.comment__swiper');
    var sliderAdvantages = element.querySelector('.s-about__swiper') || element.closest('.s-about__swiper');
    var sliderOrderCard = element.querySelector('.order-userpage__swiper') || element.closest('.order-userpage__swiper');
    var sliderVideoTutorialsPage = element.querySelector('.s-video-tutorials__slider') || element.closest('.s-video-tutorials__slider');
    var sliderMasterClassInfo = element.querySelector('.s-master-class__info-swiper') || element.closest('.s-master-class__info-swiper');
    var sliderCategory = element.querySelector('.s-category__slider') || element.closest('.s-category__slider');
    var sliderPatterns = element.querySelector('.s-patterns__swiper') || element.closest('.s-patterns__swiper');
    var sliderPatternGalleryMain = document.querySelector('.s-pattern__gallery-main') || element.closest('.s-pattern__gallery-main');
    var sliderPatternGalleryThumbs = document.querySelector('.s-pattern__gallery-thumbs') || element.closest('.s-pattern__gallery-thumbs');
    var navNextBtn = element.querySelector('.swiper-button-next');
    var navPrevBtn = element.querySelector('.swiper-button-prev');
    new Swiper(sliderPromo, {
      slidesPerView: 1,
      spaceBetween: 8,
      pagination: {
        el: ".swiper-pagination"
      },
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false
      },
      observer: true,
      observeParents: true,
      preventClicks: false,
      preventClicksPropagation: false,
      preventInteractionOnTransition: false
    });
    new Swiper(sliderVideoTutorials, {
      breakpoints: {
        1: {
          slidesPerView: 2,
          spaceBetween: 12
        },
        576: {
          slidesPerView: 3,
          spaceBetween: 20
        },
        1439: {
          slidesPerView: 4,
          spaceBetween: 20
        }
      },
      navigation: {
        nextEl: navNextBtn,
        prevEl: navPrevBtn
      }
    });
    new Swiper(sliderBlog, {
      breakpoints: {
        1: {
          slidesPerView: 2,
          spaceBetween: 12
        },
        576: {
          slidesPerView: 3,
          spaceBetween: 20
        },
        1439: {
          slidesPerView: 4,
          spaceBetween: 20
        }
      },
      navigation: {
        nextEl: navNextBtn,
        prevEl: navPrevBtn
      }
    });
    new Swiper(sliderStories, {
      breakpoints: {
        1: {
          slidesPerView: 1,
          spaceBetween: 12
        },
        576: {
          slidesPerView: 3,
          spaceBetween: 20
        },
        1439: {
          slidesPerView: 4,
          spaceBetween: 20
        }
      },
      navigation: {
        nextEl: navNextBtn,
        prevEl: navPrevBtn
      }
    });
    new Swiper(sliderComment, {
      spaceBetween: 10,
      slidesPerView: 'auto'
    });
    new Swiper(sliderReviews, {
      breakpoints: {
        1: {
          slidesPerView: 1,
          spaceBetween: 12
        },
        576: {
          slidesPerView: 3,
          spaceBetween: 20
        },
        1439: {
          slidesPerView: 4,
          spaceBetween: 20
        }
      },
      navigation: {
        nextEl: navNextBtn,
        prevEl: navPrevBtn
      }
    });
    new Swiper(sliderVideoTutorialsPage, {
      slidesPerView: 4,
      spaceBetween: 10,
      navigation: {
        nextEl: '.s-video-tutorials-arrow-next',
        prevEl: '.s-video-tutorials-arrow-prev'
      },
      breakpoints: {
        1: {
          slidesPerView: 2
        },
        767: {
          slidesPerView: 2
        },
        1279: {
          slidesPerView: 3
        },
        1919: {
          slidesPerView: 4
        }
      }
    });
    new Swiper(sliderCategory, {
      slidesPerView: 4,
      spaceBetween: 10,
      navigation: {
        nextEl: '.s-category-arrow-next',
        prevEl: '.s-category-arrow-prev'
      },
      breakpoints: {
        1: {
          slidesPerView: 2
        },
        767: {
          slidesPerView: 2
        },
        1279: {
          slidesPerView: 3
        },
        1919: {
          slidesPerView: 4
        }
      }
    });
    new Swiper(sliderOrderCard, {
      spaceBetween: 10,
      breakpoints: {
        1: {
          slidesPerView: 3
        },
        769: {
          slidesPerView: 4
        },
        1025: {
          slidesPerView: 3
        },
        1919: {
          slidesPerView: 4
        }
      }
    });
    new Swiper(sliderMasterClassInfo, {
      slidesPerView: 2,
      spaceBetween: 20,
      navigation: {
        nextEl: '.s-master-class-arrow-next',
        prevEl: '.s-master-class-arrow-prev'
      }
    });
    if (window.innerWidth < 576) {
      new Swiper(sliderAdvantages, _defineProperty({
        navigation: {
          nextEl: navNextBtn,
          prevEl: navPrevBtn
        }
      }, "navigation", {
        nextEl: '.s-about-custom-arrow-next',
        prevEl: '.s-about-custom-arrow-prev'
      }));
    }
    var sliderPatternThumbs = new Swiper(sliderPatternGalleryThumbs, {
      spaceBetween: 10,
      slidesPerView: 4,
      watchSlidesProgress: true,
      direction: "vertical",
      navigation: {
        nextEl: '.s-pattern__nav-arrow-next',
        prevEl: '.s-pattern__nav-arrow-prev'
      },
      breakpoints: {
        1: {
          direction: "horizontal",
          slidesPerView: 5,
          spaceBetween: 8
        },
        1920: {
          slidesPerView: 5
        }
      }
    });
    var sliderPatternMain = new Swiper(sliderPatternGalleryMain, {
      spaceBetween: 10,
      thumbs: {
        swiper: sliderPatternThumbs
      }
    });
    new Swiper(sliderPatterns, {
      slidesPerView: 1,
      navigation: {
        nextEl: '.s-patterns__swiper-arrow-next',
        prevEl: '.s-patterns__swiper-arrow-prev'
      },
      pagination: {
        el: ".swiper-pagination"
      }
    });
  };
  var mount = function mount() {
    var elements = document.querySelectorAll('.swiper');
    elements.forEach(component);
  };
  document.addEventListener('DOMContentLoaded', mount);
})(window);
(function (window) {
  var component = function component(element) {
    if (!element) {
      return;
    }
    var sliderStory = element.querySelector('.story__swiper') || element.closest('.story__swiper');
    var progressBarsContainer = element.querySelector('.story__progress-bars');
    var slides = element.querySelectorAll('.swiper-slide');
    var swiper = new Swiper(sliderStory, {
      slidesPerView: 1,
      on: {
        init: function init() {
          updateProgressBars.call(this); // Ensure initial state is set correctly
        },
        slideChange: function slideChange() {
          updateProgressBars.call(this); // Update progress bars on slide change
        }
      }
    });
    if (progressBarsContainer && slides.length > 1) {
      slides.forEach(function () {
        var progressBar = document.createElement('div');
        progressBar.classList.add('story__progress-bar');
        var progressBarLine = document.createElement('div');
        progressBarLine.classList.add('story__progress-bar-line');
        progressBar.appendChild(progressBarLine);
        progressBarsContainer.appendChild(progressBar);
      });
    }
    function updateProgressBars() {
      var activeIndex = this.activeIndex;
      var activeSlide = slides[activeIndex];
      var isVideo = activeSlide.querySelector('video') !== null;
      document.querySelectorAll('.story__progress-bar').forEach(function (bar, index) {
        var line = bar.querySelector('.story__progress-bar-line');
        if (index < activeIndex) {
          line.style.width = '100%'; // Set previous slide's progress bar to 100%
        } else if (index === activeIndex) {
          line.style.width = '0%';
          line.classList.add('active');
          if (isVideo) {
            var video = activeSlide.querySelector('video');
            video.play();
            line.style.animation = "progress ".concat(video.duration, "s linear forwards");
            video.onended = function () {
              swiper.slideNext();
            };
          } else {
            line.style.animation = 'progress 5s linear forwards';
            setTimeout(function () {
              swiper.slideNext();
            }, 5000);
          }
        } else {
          line.style.width = '0%';
          line.classList.remove('active');
        }
      });
    }

    // Ensure initial update of progress bars
    updateProgressBars.call(swiper);

    // Handle user-initiated slide change to interrupt animation
    swiper.on('slideChangeTransitionStart', function () {
      var previousIndex = swiper.previousIndex;
      var previousSlide = slides[previousIndex];
      var previousProgressBar = progressBarsContainer.children[previousIndex].querySelector('.story__progress-bar-line');
      previousProgressBar.style.width = '100%'; // Set width to 100% immediately
      previousProgressBar.style.animation = ''; // Clear animation
    });
  };
  var mount = function mount() {
    var elements = document.querySelectorAll('.story');
    elements.forEach(component);
  };
  document.addEventListener('DOMContentLoaded', mount);
})(window);
(function () {
  var component = function component(element) {
    if (!element) return;
    var button = element.querySelector('.comment__button');
    var buttonText = element.querySelector('.comment__button-text');
    var toggleAnswer = function toggleAnswer() {
      element.classList.toggle('active');
      if (element.classList.contains('active')) {
        buttonText.innerText = 'Hide answer';
      } else {
        buttonText.innerText = 'Show answer';
      }
    };
    if (button && buttonText) button.addEventListener('click', toggleAnswer);
  };
  var mount = function mount() {
    document.querySelectorAll('.comment').forEach(component);
  };
  document.addEventListener('DOMContentLoaded', mount);
})();
(function () {
  var accordionInit = function accordionInit() {
    var accordionItems = document.querySelectorAll('.accordion__checkbox');
    var accordionBlocks = document.querySelectorAll('.accordion__content');
    var openTextBlock = function openTextBlock(num) {
      if (accordionBlocks[num].classList.contains('_opened')) {
        accordionBlocks[num].classList.remove('_opened');
      } else {
        accordionBlocks[num].classList.add('_opened');
      }
    };
    accordionItems.forEach(function (button, index) {
      return button.addEventListener('click', function () {
        return openTextBlock(index);
      });
    });
  };
  document.addEventListener('DOMContentLoaded', accordionInit);
})();
(function () {
  var filterItemButton = document.querySelectorAll('.filter-item__heading');
  var filterItem = document.querySelectorAll('.filter-item');
  var handleFilterItemBody = function handleFilterItemBody(i) {
    filterItem[i].classList.toggle('filter-item_active');
  };
  var initFilterItems = function initFilterItems() {
    filterItemButton.forEach(function (itemButton, i) {
      itemButton.addEventListener('click', function () {
        return handleFilterItemBody(i);
      });
    });
  };
  document.addEventListener('DOMContentLoaded', initFilterItems);
})();
(function () {
  var buttons = document.querySelectorAll('[data-edit-profile]');
  var cancelButtons = document.querySelectorAll('[data-cancel-profile]');
  var defaultUserBlock = document.querySelector('.s-profile__user');
  var toggleButtons = function toggleButtons(editable) {
    document.querySelector("[data-edit-profile=".concat(editable, "]")).classList.toggle('_visible_hidden');
    document.querySelector("[data-editable-profile=".concat(editable, "]")).classList.toggle('_visible_opened');
  };
  var editProfileButtonsInit = function editProfileButtonsInit() {
    var handleEditable = function handleEditable(e) {
      var editable = e.currentTarget.dataset.editProfile;
      var editableSection = document.querySelector("[data-section-profile=".concat(editable, "]"));
      if (editable === 'main') {
        defaultUserBlock.style.display = 'none';
        editableSection.classList.remove('_type_main');
        toggleButtons(editable);
      }
      if (editable === 'size') {
        editableSection.querySelectorAll('input').forEach(function (input) {
          return input.disabled = false;
        });
        toggleButtons(editable);
      }
      if (editable === 'password') {
        editableSection.querySelectorAll('input').forEach(function (input) {
          return input.disabled = false;
        });
        editableSection.querySelectorAll('.s-profile__input')[1].classList.toggle('_type_repeat-pass');
        toggleButtons(editable);
      }
    };
    var cancelEditable = function cancelEditable(e) {
      var editable = e.currentTarget.dataset.cancelProfile;
      var editableSection = document.querySelector("[data-section-profile=".concat(editable, "]"));
      if (editable === 'main') {
        defaultUserBlock.style.display = 'flex';
        editableSection.classList.add('_type_main');
        toggleButtons(editable);
      }
      if (editable === 'size') {
        editableSection.querySelectorAll('input').forEach(function (input) {
          return input.disabled = true;
        });
        toggleButtons(editable);
      }
      if (editable === 'password') {
        editableSection.querySelectorAll('input').forEach(function (input) {
          return input.disabled = true;
        });
        editableSection.querySelectorAll('.s-profile__input')[1].classList.toggle('_type_repeat-pass');
        toggleButtons(editable);
      }
    };
    buttons.forEach(function (button) {
      return button.addEventListener('click', function (e) {
        return handleEditable(e);
      });
    });
    cancelButtons.forEach(function (button) {
      return button.addEventListener('click', function (e) {
        return cancelEditable(e);
      });
    });
  };
  document.addEventListener('DOMContentLoaded', editProfileButtonsInit);
})();
(function () {
  var links = document.querySelectorAll('.s-category__link');
  var showButton = document.querySelector('.s-category__show-button');
  var mobileLinks = document.querySelectorAll('.s-category__link-mobile');
  var mobileShowButton = document.querySelector('.s-category__show-button-sm');
  var categoryLinksInit = function categoryLinksInit() {
    if (!showButton) return;
    var showMoreLinks = function showMoreLinks() {
      if (links[links.length - 1].classList.contains('_visible_hidden')) {
        links.forEach(function (link) {
          return link.classList.remove('_visible_hidden');
        });
        showButton.querySelector('.button__text').textContent = 'Hide';
      } else {
        links.forEach(function (link, index) {
          if (index > 5) {
            link.classList.add('_visible_hidden');
            showButton.querySelector('.button__text').textContent = 'Show all';
          }
        });
      }
    };
    var showMoreMobileLinks = function showMoreMobileLinks() {
      if (mobileLinks[mobileLinks.length - 1].classList.contains('_visible_hidden')) {
        mobileLinks.forEach(function (link) {
          return link.classList.remove('_visible_hidden');
        });
        mobileShowButton.querySelector('.button__text').textContent = 'Hide';
      } else {
        mobileLinks.forEach(function (link, index) {
          if (index > 5) {
            link.classList.add('_visible_hidden');
            mobileShowButton.querySelector('.button__text').textContent = 'Show all';
          }
        });
      }
    };
    showButton.addEventListener('click', showMoreLinks);
    mobileShowButton.addEventListener('click', showMoreMobileLinks);
  };
  document.addEventListener('DOMContentLoaded', categoryLinksInit);
})();
(function () {
  var patternPageInit = function patternPageInit() {
    var windowWidth;
    var togetherBlock = document.querySelector('.s-pattern__take-together') || '';
    var tabsBlock = document.querySelector('.s-pattern__tabs') || '';
    var infoBlock = document.querySelector('.s-pattern__info') || '';
    var instructionsBlock = document.querySelector('.s-pattern__instructions') || '';
    var copyrightBlock = document.querySelector('.s-pattern__copyright') || '';
    var galleryBlock = document.querySelector('.s-pattern__gallery') || '';
    var commentsBlock = document.querySelector('.s-pattern__comments') || '';
    var mobileTabs = document.querySelectorAll('.s-pattern__mobile-tab') || '';
    var accordionBlock = document.querySelector('.accordion') || '';
    var wrapper = document.querySelector('.s-pattern__laptop-wrapper');
    var galleryWrapper = document.querySelector('.s-pattern__mobile-gallery');
    var leftCol = document.querySelectorAll('.s-pattern__col')[0];
    var rightCol = document.querySelectorAll('.s-pattern__col')[1];
    if (!wrapper) return;
    var setInnerWidth = function setInnerWidth() {
      windowWidth = window.innerWidth;
      if (windowWidth > 1600) {
        rightCol.append(tabsBlock, commentsBlock, infoBlock, accordionBlock, instructionsBlock, copyrightBlock);
      }
      if (windowWidth < 1600 && windowWidth > 1025) {
        leftCol.append(galleryBlock);
        wrapper.append(togetherBlock, tabsBlock, commentsBlock, copyrightBlock);
      }
      if (windowWidth < 1025) {
        galleryWrapper.append(galleryBlock);
        mobileTabs[0].append(infoBlock, accordionBlock, instructionsBlock);
        mobileTabs[1].append(commentsBlock);
        wrapper.append(togetherBlock);
      }
    };
    window.addEventListener('resize', setInnerWidth);
    setInnerWidth();
  };
  document.addEventListener('DOMContentLoaded', patternPageInit);
})();