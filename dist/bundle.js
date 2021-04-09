(function () {
  'use strict';

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }

    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  }

  function _asyncToGenerator(fn) {
    return function () {
      var self = this,
          args = arguments;
      return new Promise(function (resolve, reject) {
        var gen = fn.apply(self, args);

        function _next(value) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
        }

        function _throw(err) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
        }

        _next(undefined);
      });
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _construct(Parent, args, Class) {
    if (_isNativeReflectConstruct()) {
      _construct = Reflect.construct;
    } else {
      _construct = function _construct(Parent, args, Class) {
        var a = [null];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) _setPrototypeOf(instance, Class.prototype);
        return instance;
      };
    }

    return _construct.apply(null, arguments);
  }

  function _isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
  }

  function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;

    _wrapNativeSuper = function _wrapNativeSuper(Class) {
      if (Class === null || !_isNativeFunction(Class)) return Class;

      if (typeof Class !== "function") {
        throw new TypeError("Super expression must either be null or a function");
      }

      if (typeof _cache !== "undefined") {
        if (_cache.has(Class)) return _cache.get(Class);

        _cache.set(Class, Wrapper);
      }

      function Wrapper() {
        return _construct(Class, arguments, _getPrototypeOf(this).constructor);
      }

      Wrapper.prototype = Object.create(Class.prototype, {
        constructor: {
          value: Wrapper,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      return _setPrototypeOf(Wrapper, Class);
    };

    return _wrapNativeSuper(Class);
  }

  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    return target;
  }

  function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};

    var target = _objectWithoutPropertiesLoose(source, excluded);

    var key, i;

    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
        target[key] = source[key];
      }
    }

    return target;
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
          result;

      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;

        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return _possibleConstructorReturn(this, result);
    };
  }

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArrayLimit(arr, i) {
    if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  /*
   * Animate Plus v2.1.1
   * Copyright (c) 2017-2018 Benjamin De Cock
   * http://animateplus.com/license
   */
  // logic
  // =====
  var first = function first(_ref) {
    var _ref2 = _slicedToArray(_ref, 1),
        item = _ref2[0];

    return item;
  };

  var computeValue = function computeValue(value, index) {
    return typeof value == "function" ? value(index) : value;
  }; // dom
  // ===


  var getElements = function getElements(elements) {
    if (Array.isArray(elements)) return elements;
    if (!elements || elements.nodeType) return [elements];
    return Array.from(typeof elements == "string" ? document.querySelectorAll(elements) : elements);
  };

  var accelerate = function accelerate(_ref3, keyframes) {
    var style = _ref3.style;
    return style.willChange = keyframes ? keyframes.map(function (_ref4) {
      var property = _ref4.property;
      return property;
    }).join() : "auto";
  };

  var createSVG = function createSVG(element, attributes) {
    return Object.entries(attributes).reduce(function (node, _ref5) {
      var _ref6 = _slicedToArray(_ref5, 2),
          attribute = _ref6[0],
          value = _ref6[1];

      node.setAttribute(attribute, value);
      return node;
    }, document.createElementNS("http://www.w3.org/2000/svg", element));
  }; // motion blur
  // ===========


  var blurs = {
    axes: ["x", "y"],
    count: 0,
    add: function add(_ref7) {
      var element = _ref7.element,
          blur = _ref7.blur;
      var id = "motion-blur-".concat(this.count++);
      var svg = createSVG("svg", {
        style: "position: absolute; width: 0; height: 0"
      });
      var filter = createSVG("filter", this.axes.reduce(function (attributes, axis) {
        var offset = blur[axis] * 2;
        attributes[axis] = "-".concat(offset, "%");
        attributes[axis == "x" ? "width" : "height"] = "".concat(100 + offset * 2, "%");
        return attributes;
      }, {
        id: id,
        "color-interpolation-filters": "sRGB"
      }));
      var gaussian = createSVG("feGaussianBlur", {
        in: "SourceGraphic"
      });
      filter.append(gaussian);
      svg.append(filter);
      element.style.filter = "url(\"#".concat(id, "\")");
      document.body.prepend(svg);
      return gaussian;
    }
  };

  var getDeviation = function getDeviation(blur, _ref8, curve) {
    var easing = _ref8.easing;
    var progress = blur * curve;
    var out = blur - progress;

    var deviation = function () {
      if (easing == "linear") return blur;
      if (easing.startsWith("in-out")) return (curve < .5 ? progress : out) * 2;
      if (easing.startsWith("in")) return progress;
      return out;
    }();

    return Math.max(0, deviation);
  };

  var setDeviation = function setDeviation(_ref9, curve) {
    var blur = _ref9.blur,
        gaussian = _ref9.gaussian,
        easing = _ref9.easing;
    var values = blurs.axes.map(function (axis) {
      return getDeviation(blur[axis], easing, curve);
    });
    gaussian.setAttribute("stdDeviation", values.join());
  };

  var normalizeBlur = function normalizeBlur(blur) {
    var defaults = blurs.axes.reduce(function (object, axis) {
      object[axis] = 0;
      return object;
    }, {});
    return Object.assign(defaults, blur);
  };

  var clearBlur = function clearBlur(_ref10, _ref11) {
    var style = _ref10.style;
    var svg = _ref11.parentNode.parentNode;
    style.filter = "none";
    svg.remove();
  }; // color conversion
  // ================


  var hexPairs = function hexPairs(color) {
    var split = color.split("");
    var pairs = color.length < 5 ? split.map(function (string) {
      return string + string;
    }) : split.reduce(function (array, string, index) {
      if (index % 2) array.push(split[index - 1] + string);
      return array;
    }, []);
    if (pairs.length < 4) pairs.push("ff");
    return pairs;
  };

  var convert = function convert(color) {
    return hexPairs(color).map(function (string) {
      return parseInt(string, 16);
    });
  };

  var rgba = function rgba(hex) {
    var color = hex.slice(1);

    var _convert = convert(color),
        _convert2 = _slicedToArray(_convert, 4),
        r = _convert2[0],
        g = _convert2[1],
        b = _convert2[2],
        a = _convert2[3];

    return "rgba(".concat(r, ", ").concat(g, ", ").concat(b, ", ").concat(a / 255, ")");
  }; // easing equations
  // ================


  var pi2 = Math.PI * 2;

  var getOffset = function getOffset(strength, period) {
    return period / pi2 * Math.asin(1 / strength);
  };

  var easings = {
    "linear": function linear(progress) {
      return progress;
    },
    "in-cubic": function inCubic(progress) {
      return Math.pow(progress, 3);
    },
    "in-quartic": function inQuartic(progress) {
      return Math.pow(progress, 4);
    },
    "in-quintic": function inQuintic(progress) {
      return Math.pow(progress, 5);
    },
    "in-exponential": function inExponential(progress) {
      return Math.pow(1024, progress - 1);
    },
    "in-circular": function inCircular(progress) {
      return 1 - Math.sqrt(1 - Math.pow(progress, 2));
    },
    "in-elastic": function inElastic(progress, amplitude, period) {
      var strength = Math.max(amplitude, 1);
      var offset = getOffset(strength, period);
      return -(strength * Math.pow(2, 10 * (progress -= 1)) * Math.sin((progress - offset) * pi2 / period));
    },
    "out-cubic": function outCubic(progress) {
      return Math.pow(--progress, 3) + 1;
    },
    "out-quartic": function outQuartic(progress) {
      return 1 - Math.pow(--progress, 4);
    },
    "out-quintic": function outQuintic(progress) {
      return Math.pow(--progress, 5) + 1;
    },
    "out-exponential": function outExponential(progress) {
      return 1 - Math.pow(2, -10 * progress);
    },
    "out-circular": function outCircular(progress) {
      return Math.sqrt(1 - Math.pow(--progress, 2));
    },
    "out-elastic": function outElastic(progress, amplitude, period) {
      var strength = Math.max(amplitude, 1);
      var offset = getOffset(strength, period);
      return strength * Math.pow(2, -10 * progress) * Math.sin((progress - offset) * pi2 / period) + 1;
    },
    "in-out-cubic": function inOutCubic(progress) {
      return (progress *= 2) < 1 ? .5 * Math.pow(progress, 3) : .5 * ((progress -= 2) * Math.pow(progress, 2) + 2);
    },
    "in-out-quartic": function inOutQuartic(progress) {
      return (progress *= 2) < 1 ? .5 * Math.pow(progress, 4) : -.5 * ((progress -= 2) * Math.pow(progress, 3) - 2);
    },
    "in-out-quintic": function inOutQuintic(progress) {
      return (progress *= 2) < 1 ? .5 * Math.pow(progress, 5) : .5 * ((progress -= 2) * Math.pow(progress, 4) + 2);
    },
    "in-out-exponential": function inOutExponential(progress) {
      return (progress *= 2) < 1 ? .5 * Math.pow(1024, progress - 1) : .5 * (-Math.pow(2, -10 * (progress - 1)) + 2);
    },
    "in-out-circular": function inOutCircular(progress) {
      return (progress *= 2) < 1 ? -.5 * (Math.sqrt(1 - Math.pow(progress, 2)) - 1) : .5 * (Math.sqrt(1 - (progress -= 2) * progress) + 1);
    },
    "in-out-elastic": function inOutElastic(progress, amplitude, period) {
      var strength = Math.max(amplitude, 1);
      var offset = getOffset(strength, period);
      return (progress *= 2) < 1 ? -.5 * (strength * Math.pow(2, 10 * (progress -= 1)) * Math.sin((progress - offset) * pi2 / period)) : strength * Math.pow(2, -10 * (progress -= 1)) * Math.sin((progress - offset) * pi2 / period) * .5 + 1;
    }
  };

  var decomposeEasing = function decomposeEasing(string) {
    var _string$trim$split = string.trim().split(" "),
        _string$trim$split2 = _slicedToArray(_string$trim$split, 3),
        easing = _string$trim$split2[0],
        _string$trim$split2$ = _string$trim$split2[1],
        amplitude = _string$trim$split2$ === void 0 ? 1 : _string$trim$split2$,
        _string$trim$split2$2 = _string$trim$split2[2],
        period = _string$trim$split2$2 === void 0 ? .4 : _string$trim$split2$2;

    return {
      easing: easing,
      amplitude: amplitude,
      period: period
    };
  };

  var ease = function ease(_ref12, progress) {
    var easing = _ref12.easing,
        amplitude = _ref12.amplitude,
        period = _ref12.period;
    return easings[easing](progress, amplitude, period);
  }; // keyframes composition
  // =====================


  var extractRegExp = /-?\d*\.?\d+/g;

  var extractStrings = function extractStrings(value) {
    return value.split(extractRegExp);
  };

  var extractNumbers = function extractNumbers(value) {
    return value.match(extractRegExp).map(Number);
  };

  var sanitize = function sanitize(values) {
    return values.map(function (value) {
      var string = String(value);
      return string.startsWith("#") ? rgba(string) : string;
    });
  };

  var addPropertyKeyframes = function addPropertyKeyframes(property, values) {
    var animatable = sanitize(values);
    var strings = extractStrings(first(animatable));
    var numbers = animatable.map(extractNumbers);
    var round = first(strings).startsWith("rgb");
    return {
      property: property,
      strings: strings,
      numbers: numbers,
      round: round
    };
  };

  var createAnimationKeyframes = function createAnimationKeyframes(keyframes, index) {
    return Object.entries(keyframes).map(function (_ref13) {
      var _ref14 = _slicedToArray(_ref13, 2),
          property = _ref14[0],
          values = _ref14[1];

      return addPropertyKeyframes(property, computeValue(values, index));
    });
  };

  var getCurrentValue = function getCurrentValue(from, to, easing) {
    return from + (to - from) * easing;
  };

  var recomposeValue = function recomposeValue(_ref15, strings, round, easing) {
    var _ref16 = _slicedToArray(_ref15, 2),
        from = _ref16[0],
        to = _ref16[1];

    return strings.reduce(function (style, string, index) {
      var previous = index - 1;
      var value = getCurrentValue(from[previous], to[previous], easing);
      return style + (round && index < 4 ? Math.round(value) : value) + string;
    });
  };

  var createStyles = function createStyles(keyframes, easing) {
    return keyframes.reduce(function (styles, _ref17) {
      var property = _ref17.property,
          numbers = _ref17.numbers,
          strings = _ref17.strings,
          round = _ref17.round;
      styles[property] = recomposeValue(numbers, strings, round, easing);
      return styles;
    }, {});
  };

  var reverseKeyframes = function reverseKeyframes(keyframes) {
    return keyframes.forEach(function (_ref18) {
      var numbers = _ref18.numbers;
      return numbers.reverse();
    });
  }; // animation tracking
  // ==================


  var rAF = {
    all: new Set(),
    add: function add(object) {
      if (this.all.add(object).size < 2) requestAnimationFrame(tick);
    }
  };
  var paused = {};

  var trackTime = function trackTime(timing, now) {
    if (!timing.startTime) timing.startTime = now;
    timing.elapsed = now - timing.startTime;
  };

  var resetTime = function resetTime(object) {
    return object.startTime = 0;
  };

  var getProgress = function getProgress(_ref19) {
    var elapsed = _ref19.elapsed,
        duration = _ref19.duration;
    return duration > 0 ? Math.min(elapsed / duration, 1) : 1;
  };

  var setSpeed = function setSpeed(speed, value, index) {
    return speed > 0 ? computeValue(value, index) / speed : 0;
  };

  var addAnimations = function addAnimations(options, resolve) {
    var _options$elements = options.elements,
        elements = _options$elements === void 0 ? null : _options$elements,
        _options$easing = options.easing,
        easing = _options$easing === void 0 ? "out-elastic" : _options$easing,
        _options$duration = options.duration,
        duration = _options$duration === void 0 ? 1000 : _options$duration,
        _options$delay = options.delay,
        timeout = _options$delay === void 0 ? 0 : _options$delay,
        _options$speed = options.speed,
        speed = _options$speed === void 0 ? 1 : _options$speed,
        _options$loop = options.loop,
        loop = _options$loop === void 0 ? false : _options$loop,
        _options$optimize = options.optimize,
        optimize = _options$optimize === void 0 ? false : _options$optimize,
        _options$direction = options.direction,
        direction = _options$direction === void 0 ? "normal" : _options$direction,
        _options$blur = options.blur,
        blur = _options$blur === void 0 ? null : _options$blur,
        _options$change = options.change,
        change = _options$change === void 0 ? null : _options$change,
        rest = _objectWithoutProperties(options, ["elements", "easing", "duration", "delay", "speed", "loop", "optimize", "direction", "blur", "change"]);

    var last = {
      totalDuration: -1
    };
    getElements(elements).forEach( /*#__PURE__*/function () {
      var _ref20 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(element, index) {
        var keyframes, animation, animationTimeout, totalDuration;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                keyframes = createAnimationKeyframes(rest, index);
                animation = {
                  element: element,
                  keyframes: keyframes,
                  loop: loop,
                  optimize: optimize,
                  direction: direction,
                  change: change,
                  easing: decomposeEasing(easing),
                  duration: setSpeed(speed, duration, index)
                };
                animationTimeout = setSpeed(speed, timeout, index);
                totalDuration = animationTimeout + animation.duration;
                if (direction != "normal") reverseKeyframes(keyframes);

                if (element) {
                  if (optimize) accelerate(element, keyframes);

                  if (blur) {
                    animation.blur = normalizeBlur(computeValue(blur, index));
                    animation.gaussian = blurs.add(animation);
                  }
                }

                if (totalDuration > last.totalDuration) {
                  last.animation = animation;
                  last.totalDuration = totalDuration;
                }

                if (!animationTimeout) {
                  _context.next = 10;
                  break;
                }

                _context.next = 10;
                return delay(animationTimeout);

              case 10:
                rAF.add(animation);

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x, _x2) {
        return _ref20.apply(this, arguments);
      };
    }());
    var animation = last.animation;
    if (!animation) return;
    animation.end = resolve;
    animation.options = options;
  };

  var tick = function tick(now) {
    var all = rAF.all;
    all.forEach(function (object) {
      trackTime(object, now);
      var progress = getProgress(object);
      var element = object.element,
          keyframes = object.keyframes,
          loop = object.loop,
          optimize = object.optimize,
          direction = object.direction,
          change = object.change,
          easing = object.easing,
          duration = object.duration,
          gaussian = object.gaussian,
          end = object.end,
          options = object.options; // object is an animation

      if (direction) {
        var curve = progress;

        switch (progress) {
          case 0:
            if (direction == "alternate") reverseKeyframes(keyframes);
            break;

          case 1:
            if (loop) resetTime(object);else {
              all.delete(object);
              if (optimize && element) accelerate(element);
              if (gaussian) clearBlur(element, gaussian);
            }
            if (end) end(options);
            break;

          default:
            curve = ease(easing, progress);
        }

        if (gaussian) setDeviation(object, curve);
        if (change && end) change(curve);
        if (element) Object.assign(element.style, createStyles(keyframes, curve));
        return;
      } // object is a delay


      if (progress < 1) return;
      all.delete(object);
      end(duration);
    });
    if (all.size) requestAnimationFrame(tick);
  };

  document.addEventListener("visibilitychange", function () {
    var now = performance.now();

    if (document.hidden) {
      var _all = rAF.all;
      paused.time = now;
      paused.all = new Set(_all);

      _all.clear();

      return;
    }

    var all = paused.all,
        time = paused.time;
    if (!all) return;
    var elapsed = now - time;
    requestAnimationFrame(function () {
      return all.forEach(function (object) {
        object.startTime += elapsed;
        rAF.add(object);
      });
    });
  }); // exports
  // =======

  var animate = (function (options) {
    return new Promise(function (resolve) {
      return addAnimations(options, resolve);
    });
  });
  var delay = function delay(duration) {
    return new Promise(function (resolve) {
      return rAF.add({
        duration: duration,
        end: resolve
      });
    });
  };

  var colors = ["266dd3", "344055", "888098", "cfb3cd", "dfc2f2"];

  var getPosition = function getPosition(values, index) {
    var valuesInNumbers = values.map(function (value) {
      return Number(value);
    });
    var previousValues = valuesInNumbers.slice(0, index);
    var previousValuesTotal = previousValues.reduce(function (sum, current) {
      return sum + current;
    }, 0);
    var position = index > 0 ? previousValuesTotal : 0;
    return position;
  };

  var template = function template(values) {
    return "\n    <svg style=\"display:block\" viewBox=\"0 0 100 4\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n      \n      <rect width=\"100\" height=\"4\" fill=\"#e3e3e3\"></rect>\n      \n      ".concat(values.map(function (value, index) {
      return "\n      <g>\n        <rect ".concat(values > 0 ? "animate" : "", " x=\"").concat(getPosition(values, index), "\"  width=\"").concat(value, "\" height=\"4\" fill=\"#").concat(colors[index], "\"></rect>\n\n        <text fill=\"white\" font-family=\"arial\"\n          font-size=\"2\" x=\"").concat(getPosition(values, index) + 1, "\" y=\"50%\">").concat(value, "</text>\n      </g>\n      ");
    }).join(''), "\n\n    </svg>");
  };

  var BarChart = /*#__PURE__*/function (_HTMLElement) {
    _inherits(BarChart, _HTMLElement);

    var _super = _createSuper(BarChart);

    function BarChart() {
      var _this;

      _classCallCheck(this, BarChart);

      _this = _super.call(this); // One value

      if (_this.getAttribute('value')) _this.values = [_this.getAttribute('value')]; // Multi value

      if (_this.getAttribute('values')) _this.values = _this.getAttribute('values').split(',');

      _this.attachShadow({
        mode: 'open'
      });

      _this.shadowRoot.innerHTML = template(_this.values);
      return _this;
    }

    _createClass(BarChart, [{
      key: "connectedCallback",
      value: function connectedCallback() {
        var elements = this.shadowRoot.querySelectorAll("[animate]");
        console.log(elements);
        animate({
          elements: elements,
          duration: 1200,
          delay: function delay(index) {
            return index * 100;
          },
          transform: ["scalex(0)", "scalex(1)"],
          fill: ["#80f", "#fc0"]
        });
        /*
        [...this.shadowRoot.querySelectorAll('rect[animate]')].map(
            rect => this.animate2(rect)
        )*/
      }
    }, {
      key: "animate2",
      value: function animate2(element) {
        var _this2 = this;

        // https://gist.github.com/bendc/4d66878dce526da728997d1e4e39325f
        // animation utils
        // ==============
        var trackTime = function trackTime(id) {
          var _performance$getEntri = performance.getEntriesByName(id),
              _performance$getEntri2 = _slicedToArray(_performance$getEntri, 1),
              entry = _performance$getEntri2[0];

          if (!entry) {
            performance.mark(id);
            return 0;
          }

          return performance.now() - entry.startTime;
        };

        var delay = function delay(callback, duration) {
          var tick = function tick() {
            return getProgress(time) < 1 ? requestAnimationFrame(tick) : callback();
          };

          var time = {
            duration: duration,
            id: requestAnimationFrame(tick)
          };
        };

        var getProgress = function getProgress(_ref) {
          var _ref$duration = _ref.duration,
              duration = _ref$duration === void 0 ? 1000 : _ref$duration,
              id = _ref.id;
          var progress = duration ? Math.min(trackTime(id) / duration, 1) : 1;
          if (progress == 1) performance.clearMarks(id);
          return progress;
        };

        var getCurrentValue = function getCurrentValue(_ref2) {
          var _ref2$from = _ref2.from,
              from = _ref2$from === void 0 ? 0 : _ref2$from,
              to = _ref2.to,
              easing = _ref2.easing;
          return from + (to - from) * easing;
        }; // easing equations
        // ================


        var ease = {
          in: {
            cubic: function cubic(progress) {
              return Math.pow(progress, 3);
            },
            quartic: function quartic(progress) {
              return Math.pow(progress, 4);
            },
            quintic: function quintic(progress) {
              return Math.pow(progress, 5);
            },
            exponential: function exponential(progress) {
              return progress > 0 ? Math.pow(1024, progress - 1) : 0;
            },
            circular: function circular(progress) {
              return 1 - Math.sqrt(1 - Math.pow(progress, 2));
            },
            elastic: function elastic(progress) {
              if (progress == 0) return 0;
              if (progress == 1) return 1;
              return -Math.pow(2, 10 * (progress - 1)) * Math.sin((progress - 1.1) * 5 * Math.PI);
            }
          },
          out: {
            cubic: function cubic(progress) {
              return Math.pow(--progress, 3) + 1;
            },
            quartic: function quartic(progress) {
              return 1 - Math.pow(--progress, 4);
            },
            quintic: function quintic(progress) {
              return Math.pow(--progress, 5) + 1;
            },
            exponential: function exponential(progress) {
              return progress < 1 ? 1 - Math.pow(2, -10 * progress) : 1;
            },
            circular: function circular(progress) {
              return Math.sqrt(1 - Math.pow(--progress, 2));
            },
            elastic: function elastic(progress) {
              if (progress == 0) return 0;
              if (progress == 1) return 1;
              return Math.pow(2, -10 * progress) * Math.sin((progress - .1) * 5 * Math.PI) + 1;
            }
          },
          inOut: {
            cubic: function cubic(progress) {
              return (progress *= 2) < 1 ? .5 * Math.pow(progress, 3) : .5 * ((progress -= 2) * Math.pow(progress, 2) + 2);
            },
            quartic: function quartic(progress) {
              return (progress *= 2) < 1 ? .5 * Math.pow(progress, 4) : -.5 * ((progress -= 2) * Math.pow(progress, 3) - 2);
            },
            quintic: function quintic(progress) {
              return (progress *= 2) < 1 ? .5 * Math.pow(progress, 5) : .5 * ((progress -= 2) * Math.pow(progress, 4) + 2);
            },
            exponential: function exponential(progress) {
              if (progress == 0) return 0;
              if (progress == 1) return 1;
              return (progress *= 2) < 1 ? .5 * Math.pow(1024, progress - 1) : .5 * (-Math.pow(2, -10 * (progress - 1)) + 2);
            },
            circular: function circular(progress) {
              return (progress *= 2) < 1 ? -.5 * (Math.sqrt(1 - Math.pow(progress, 2)) - 1) : .5 * (Math.sqrt(1 - (progress -= 2) * progress) + 1);
            },
            elastic: function elastic(progress) {
              if (progress == 0) return 0;
              if (progress == 1) return 1;
              progress *= 2;
              var sin = Math.sin((progress - 1.1) * 5 * Math.PI);
              return progress < 1 ? -.5 * Math.pow(2, 10 * (progress - 1)) * sin : .5 * Math.pow(2, -10 * (progress - 1)) * sin + 1;
            }
          }
        }; // animation example
        // =================

        var animate = function animate() {
          var tick = function tick() {
            var progress = getProgress(animation);
            if (progress < 1) requestAnimationFrame(tick); // 1.Animation logic -----------------------------------------------------------

            var easing = ease.out.elastic(progress);
            var value = getCurrentValue({
              from: 0,
              to: _this2.getAttribute('value'),
              easing: easing
            });
            element.setAttribute("width", value);
          };

          var animation = {
            // 2. optionnaly specify a duration (defaults to 1s) ---------------------------
            duration: 1200,
            id: requestAnimationFrame(tick)
          };
        }; // 3. optionally set a timeout ----------------------------------------------------


        delay(animate, 250);
      }
    }]);

    return BarChart;
  }( /*#__PURE__*/_wrapNativeSuper(HTMLElement));

  customElements.define("bar-chart", BarChart);

}());
