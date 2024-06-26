/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 */
jQuery.easing.jswing = jQuery.easing.swing;
jQuery.extend(jQuery.easing, {
  def: "easeOutQuad",
  swing: function (e, f, a, h, g) {
    return jQuery.easing[jQuery.easing.def](e, f, a, h, g);
  },
  easeInQuad: function (e, f, a, h, g) {
    return h * (f /= g) * f + a;
  },
  easeOutQuad: function (e, f, a, h, g) {
    return -h * (f /= g) * (f - 2) + a;
  },
  easeInOutQuad: function (e, f, a, h, g) {
    if ((f /= g / 2) < 1) {
      return (h / 2) * f * f + a;
    }
    return (-h / 2) * (--f * (f - 2) - 1) + a;
  },
  easeInCubic: function (e, f, a, h, g) {
    return h * (f /= g) * f * f + a;
  },
  easeOutCubic: function (e, f, a, h, g) {
    return h * ((f = f / g - 1) * f * f + 1) + a;
  },
  easeInOutCubic: function (e, f, a, h, g) {
    if ((f /= g / 2) < 1) {
      return (h / 2) * f * f * f + a;
    }
    return (h / 2) * ((f -= 2) * f * f + 2) + a;
  },
  easeInQuart: function (e, f, a, h, g) {
    return h * (f /= g) * f * f * f + a;
  },
  easeOutQuart: function (e, f, a, h, g) {
    return -h * ((f = f / g - 1) * f * f * f - 1) + a;
  },
  easeInOutQuart: function (e, f, a, h, g) {
    if ((f /= g / 2) < 1) {
      return (h / 2) * f * f * f * f + a;
    }
    return (-h / 2) * ((f -= 2) * f * f * f - 2) + a;
  },
  easeInQuint: function (e, f, a, h, g) {
    return h * (f /= g) * f * f * f * f + a;
  },
  easeOutQuint: function (e, f, a, h, g) {
    return h * ((f = f / g - 1) * f * f * f * f + 1) + a;
  },
  easeInOutQuint: function (e, f, a, h, g) {
    if ((f /= g / 2) < 1) {
      return (h / 2) * f * f * f * f * f + a;
    }
    return (h / 2) * ((f -= 2) * f * f * f * f + 2) + a;
  },
  easeInSine: function (e, f, a, h, g) {
    return -h * Math.cos((f / g) * (Math.PI / 2)) + h + a;
  },
  easeOutSine: function (e, f, a, h, g) {
    return h * Math.sin((f / g) * (Math.PI / 2)) + a;
  },
  easeInOutSine: function (e, f, a, h, g) {
    return (-h / 2) * (Math.cos((Math.PI * f) / g) - 1) + a;
  },
  easeInExpo: function (e, f, a, h, g) {
    return f == 0 ? a : h * Math.pow(2, 10 * (f / g - 1)) + a;
  },
  easeOutExpo: function (e, f, a, h, g) {
    return f == g ? a + h : h * (-Math.pow(2, (-10 * f) / g) + 1) + a;
  },
  easeInOutExpo: function (e, f, a, h, g) {
    if (f == 0) {
      return a;
    }
    if (f == g) {
      return a + h;
    }
    if ((f /= g / 2) < 1) {
      return (h / 2) * Math.pow(2, 10 * (f - 1)) + a;
    }
    return (h / 2) * (-Math.pow(2, -10 * --f) + 2) + a;
  },
  easeInCirc: function (e, f, a, h, g) {
    return -h * (Math.sqrt(1 - (f /= g) * f) - 1) + a;
  },
  easeOutCirc: function (e, f, a, h, g) {
    return h * Math.sqrt(1 - (f = f / g - 1) * f) + a;
  },
  easeInOutCirc: function (e, f, a, h, g) {
    if ((f /= g / 2) < 1) {
      return (-h / 2) * (Math.sqrt(1 - f * f) - 1) + a;
    }
    return (h / 2) * (Math.sqrt(1 - (f -= 2) * f) + 1) + a;
  },
  easeInElastic: function (f, h, e, l, k) {
    var i = 1.70158;
    var j = 0;
    var g = l;
    if (h == 0) {
      return e;
    }
    if ((h /= k) == 1) {
      return e + l;
    }
    if (!j) {
      j = k * 0.3;
    }
    if (g < Math.abs(l)) {
      g = l;
      var i = j / 4;
    } else {
      var i = (j / (2 * Math.PI)) * Math.asin(l / g);
    }
    return (
      -(
        g *
        Math.pow(2, 10 * (h -= 1)) *
        Math.sin(((h * k - i) * (2 * Math.PI)) / j)
      ) + e
    );
  },
  easeOutElastic: function (f, h, e, l, k) {
    var i = 1.70158;
    var j = 0;
    var g = l;
    if (h == 0) {
      return e;
    }
    if ((h /= k) == 1) {
      return e + l;
    }
    if (!j) {
      j = k * 0.3;
    }
    if (g < Math.abs(l)) {
      g = l;
      var i = j / 4;
    } else {
      var i = (j / (2 * Math.PI)) * Math.asin(l / g);
    }
    return (
      g * Math.pow(2, -10 * h) * Math.sin(((h * k - i) * (2 * Math.PI)) / j) +
      l +
      e
    );
  },
  easeInOutElastic: function (f, h, e, l, k) {
    var i = 1.70158;
    var j = 0;
    var g = l;
    if (h == 0) {
      return e;
    }
    if ((h /= k / 2) == 2) {
      return e + l;
    }
    if (!j) {
      j = k * (0.3 * 1.5);
    }
    if (g < Math.abs(l)) {
      g = l;
      var i = j / 4;
    } else {
      var i = (j / (2 * Math.PI)) * Math.asin(l / g);
    }
    if (h < 1) {
      return (
        -0.5 *
          (g *
            Math.pow(2, 10 * (h -= 1)) *
            Math.sin(((h * k - i) * (2 * Math.PI)) / j)) +
        e
      );
    }
    return (
      g *
        Math.pow(2, -10 * (h -= 1)) *
        Math.sin(((h * k - i) * (2 * Math.PI)) / j) *
        0.5 +
      l +
      e
    );
  },
  easeInBack: function (e, f, a, i, h, g) {
    if (g == undefined) {
      g = 1.70158;
    }
    return i * (f /= h) * f * ((g + 1) * f - g) + a;
  },
  easeOutBack: function (e, f, a, i, h, g) {
    if (g == undefined) {
      g = 1.70158;
    }
    return i * ((f = f / h - 1) * f * ((g + 1) * f + g) + 1) + a;
  },
  easeInOutBack: function (e, f, a, i, h, g) {
    if (g == undefined) {
      g = 1.70158;
    }
    if ((f /= h / 2) < 1) {
      return (i / 2) * (f * f * (((g *= 1.525) + 1) * f - g)) + a;
    }
    return (i / 2) * ((f -= 2) * f * (((g *= 1.525) + 1) * f + g) + 2) + a;
  },
  easeInBounce: function (e, f, a, h, g) {
    return h - jQuery.easing.easeOutBounce(e, g - f, 0, h, g) + a;
  },
  easeOutBounce: function (e, f, a, h, g) {
    if ((f /= g) < 1 / 2.75) {
      return h * (7.5625 * f * f) + a;
    } else {
      if (f < 2 / 2.75) {
        return h * (7.5625 * (f -= 1.5 / 2.75) * f + 0.75) + a;
      } else {
        if (f < 2.5 / 2.75) {
          return h * (7.5625 * (f -= 2.25 / 2.75) * f + 0.9375) + a;
        } else {
          return h * (7.5625 * (f -= 2.625 / 2.75) * f + 0.984375) + a;
        }
      }
    }
  },
  easeInOutBounce: function (e, f, a, h, g) {
    if (f < g / 2) {
      return jQuery.easing.easeInBounce(e, f * 2, 0, h, g) * 0.5 + a;
    }
    return (
      jQuery.easing.easeOutBounce(e, f * 2 - g, 0, h, g) * 0.5 + h * 0.5 + a
    );
  },
});

/**
 * Check if browser is a mobile device
 */
(function () {
  (jQuery.browser = jQuery.browser || {}).mobile =
    /android|webos|iphone|ipad|ipod|blackberry/i.test(
      navigator.userAgent.toLowerCase()
    );
})(navigator.userAgent || navigator.vendor || window.opera);

/*!
 * Bootstrap v3.3.4 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
if ("undefined" == typeof jQuery)
  throw new Error("Bootstrap's JavaScript requires jQuery");
+(function (a) {
  "use strict";
  var b = a.fn.jquery.split(" ")[0].split(".");
  if ((b[0] < 2 && b[1] < 9) || (1 == b[0] && 9 == b[1] && b[2] < 1))
    throw new Error(
      "Bootstrap's JavaScript requires jQuery version 1.9.1 or higher"
    );
})(jQuery),
  +(function (a) {
    "use strict";
    function b() {
      var a = document.createElement("bootstrap"),
        b = {
          WebkitTransition: "webkitTransitionEnd",
          MozTransition: "transitionend",
          OTransition: "oTransitionEnd otransitionend",
          transition: "transitionend",
        };
      for (var c in b) if (void 0 !== a.style[c]) return { end: b[c] };
      return !1;
    }
    (a.fn.emulateTransitionEnd = function (b) {
      var c = !1,
        d = this;
      a(this).one("bsTransitionEnd", function () {
        c = !0;
      });
      var e = function () {
        c || a(d).trigger(a.support.transition.end);
      };
      return setTimeout(e, b), this;
    }),
      a(function () {
        (a.support.transition = b()),
          a.support.transition &&
            (a.event.special.bsTransitionEnd = {
              bindType: a.support.transition.end,
              delegateType: a.support.transition.end,
              handle: function (b) {
                return a(b.target).is(this)
                  ? b.handleObj.handler.apply(this, arguments)
                  : void 0;
              },
            });
      });
  })(jQuery),
  +(function (a) {
    "use strict";
    function b(b) {
      return this.each(function () {
        var c = a(this),
          e = c.data("bs.alert");
        e || c.data("bs.alert", (e = new d(this))),
          "string" == typeof b && e[b].call(c);
      });
    }
    var c = '[data-dismiss="alert"]',
      d = function (b) {
        a(b).on("click", c, this.close);
      };
    (d.VERSION = "3.3.4"),
      (d.TRANSITION_DURATION = 150),
      (d.prototype.close = function (b) {
        function c() {
          g.detach().trigger("closed.bs.alert").remove();
        }
        var e = a(this),
          f = e.attr("data-target");
        f || ((f = e.attr("href")), (f = f && f.replace(/.*(?=#[^\s]*$)/, "")));
        var g = a(f);
        b && b.preventDefault(),
          g.length || (g = e.closest(".alert")),
          g.trigger((b = a.Event("close.bs.alert"))),
          b.isDefaultPrevented() ||
            (g.removeClass("in"),
            a.support.transition && g.hasClass("fade")
              ? g
                  .one("bsTransitionEnd", c)
                  .emulateTransitionEnd(d.TRANSITION_DURATION)
              : c());
      });
    var e = a.fn.alert;
    (a.fn.alert = b),
      (a.fn.alert.Constructor = d),
      (a.fn.alert.noConflict = function () {
        return (a.fn.alert = e), this;
      }),
      a(document).on("click.bs.alert.data-api", c, d.prototype.close);
  })(jQuery),
  +(function (a) {
    "use strict";
    function b(b) {
      return this.each(function () {
        var d = a(this),
          e = d.data("bs.button"),
          f = "object" == typeof b && b;
        e || d.data("bs.button", (e = new c(this, f))),
          "toggle" == b ? e.toggle() : b && e.setState(b);
      });
    }
    var c = function (b, d) {
      (this.$element = a(b)),
        (this.options = a.extend({}, c.DEFAULTS, d)),
        (this.isLoading = !1);
    };
    (c.VERSION = "3.3.4"),
      (c.DEFAULTS = { loadingText: "loading..." }),
      (c.prototype.setState = function (b) {
        var c = "disabled",
          d = this.$element,
          e = d.is("input") ? "val" : "html",
          f = d.data();
        (b += "Text"),
          null == f.resetText && d.data("resetText", d[e]()),
          setTimeout(
            a.proxy(function () {
              d[e](null == f[b] ? this.options[b] : f[b]),
                "loadingText" == b
                  ? ((this.isLoading = !0), d.addClass(c).attr(c, c))
                  : this.isLoading &&
                    ((this.isLoading = !1), d.removeClass(c).removeAttr(c));
            }, this),
            0
          );
      }),
      (c.prototype.toggle = function () {
        var a = !0,
          b = this.$element.closest('[data-toggle="buttons"]');
        if (b.length) {
          var c = this.$element.find("input");
          "radio" == c.prop("type") &&
            (c.prop("checked") && this.$element.hasClass("active")
              ? (a = !1)
              : b.find(".active").removeClass("active")),
            a &&
              c
                .prop("checked", !this.$element.hasClass("active"))
                .trigger("change");
        } else
          this.$element.attr("aria-pressed", !this.$element.hasClass("active"));
        a && this.$element.toggleClass("active");
      });
    var d = a.fn.button;
    (a.fn.button = b),
      (a.fn.button.Constructor = c),
      (a.fn.button.noConflict = function () {
        return (a.fn.button = d), this;
      }),
      a(document)
        .on(
          "click.bs.button.data-api",
          '[data-toggle^="button"]',
          function (c) {
            var d = a(c.target);
            d.hasClass("btn") || (d = d.closest(".btn")),
              b.call(d, "toggle"),
              c.preventDefault();
          }
        )
        .on(
          "focus.bs.button.data-api blur.bs.button.data-api",
          '[data-toggle^="button"]',
          function (b) {
            a(b.target)
              .closest(".btn")
              .toggleClass("focus", /^focus(in)?$/.test(b.type));
          }
        );
  })(jQuery),
  +(function (a) {
    "use strict";
    function b(b) {
      return this.each(function () {
        var d = a(this),
          e = d.data("bs.carousel"),
          f = a.extend({}, c.DEFAULTS, d.data(), "object" == typeof b && b),
          g = "string" == typeof b ? b : f.slide;
        e || d.data("bs.carousel", (e = new c(this, f))),
          "number" == typeof b
            ? e.to(b)
            : g
            ? e[g]()
            : f.interval && e.pause().cycle();
      });
    }
    var c = function (b, c) {
      (this.$element = a(b)),
        (this.$indicators = this.$element.find(".carousel-indicators")),
        (this.options = c),
        (this.paused = null),
        (this.sliding = null),
        (this.interval = null),
        (this.$active = null),
        (this.$items = null),
        this.options.keyboard &&
          this.$element.on("keydown.bs.carousel", a.proxy(this.keydown, this)),
        "hover" == this.options.pause &&
          !("ontouchstart" in document.documentElement) &&
          this.$element
            .on("mouseenter.bs.carousel", a.proxy(this.pause, this))
            .on("mouseleave.bs.carousel", a.proxy(this.cycle, this));
    };
    (c.VERSION = "3.3.4"),
      (c.TRANSITION_DURATION = 600),
      (c.DEFAULTS = { interval: 5e3, pause: "hover", wrap: !0, keyboard: !0 }),
      (c.prototype.keydown = function (a) {
        if (!/input|textarea/i.test(a.target.tagName)) {
          switch (a.which) {
            case 37:
              this.prev();
              break;
            case 39:
              this.next();
              break;
            default:
              return;
          }
          a.preventDefault();
        }
      }),
      (c.prototype.cycle = function (b) {
        return (
          b || (this.paused = !1),
          this.interval && clearInterval(this.interval),
          this.options.interval &&
            !this.paused &&
            (this.interval = setInterval(
              a.proxy(this.next, this),
              this.options.interval
            )),
          this
        );
      }),
      (c.prototype.getItemIndex = function (a) {
        return (
          (this.$items = a.parent().children(".item")),
          this.$items.index(a || this.$active)
        );
      }),
      (c.prototype.getItemForDirection = function (a, b) {
        var c = this.getItemIndex(b),
          d =
            ("prev" == a && 0 === c) ||
            ("next" == a && c == this.$items.length - 1);
        if (d && !this.options.wrap) return b;
        var e = "prev" == a ? -1 : 1,
          f = (c + e) % this.$items.length;
        return this.$items.eq(f);
      }),
      (c.prototype.to = function (a) {
        var b = this,
          c = this.getItemIndex(
            (this.$active = this.$element.find(".item.active"))
          );
        return a > this.$items.length - 1 || 0 > a
          ? void 0
          : this.sliding
          ? this.$element.one("slid.bs.carousel", function () {
              b.to(a);
            })
          : c == a
          ? this.pause().cycle()
          : this.slide(a > c ? "next" : "prev", this.$items.eq(a));
      }),
      (c.prototype.pause = function (b) {
        return (
          b || (this.paused = !0),
          this.$element.find(".next, .prev").length &&
            a.support.transition &&
            (this.$element.trigger(a.support.transition.end), this.cycle(!0)),
          (this.interval = clearInterval(this.interval)),
          this
        );
      }),
      (c.prototype.next = function () {
        return this.sliding ? void 0 : this.slide("next");
      }),
      (c.prototype.prev = function () {
        return this.sliding ? void 0 : this.slide("prev");
      }),
      (c.prototype.slide = function (b, d) {
        var e = this.$element.find(".item.active"),
          f = d || this.getItemForDirection(b, e),
          g = this.interval,
          h = "next" == b ? "left" : "right",
          i = this;
        if (f.hasClass("active")) return (this.sliding = !1);
        var j = f[0],
          k = a.Event("slide.bs.carousel", { relatedTarget: j, direction: h });
        if ((this.$element.trigger(k), !k.isDefaultPrevented())) {
          if (
            ((this.sliding = !0), g && this.pause(), this.$indicators.length)
          ) {
            this.$indicators.find(".active").removeClass("active");
            var l = a(this.$indicators.children()[this.getItemIndex(f)]);
            l && l.addClass("active");
          }
          var m = a.Event("slid.bs.carousel", {
            relatedTarget: j,
            direction: h,
          });
          return (
            a.support.transition && this.$element.hasClass("slide")
              ? (f.addClass(b),
                f[0].offsetWidth,
                e.addClass(h),
                f.addClass(h),
                e
                  .one("bsTransitionEnd", function () {
                    f.removeClass([b, h].join(" ")).addClass("active"),
                      e.removeClass(["active", h].join(" ")),
                      (i.sliding = !1),
                      setTimeout(function () {
                        i.$element.trigger(m);
                      }, 0);
                  })
                  .emulateTransitionEnd(c.TRANSITION_DURATION))
              : (e.removeClass("active"),
                f.addClass("active"),
                (this.sliding = !1),
                this.$element.trigger(m)),
            g && this.cycle(),
            this
          );
        }
      });
    var d = a.fn.carousel;
    (a.fn.carousel = b),
      (a.fn.carousel.Constructor = c),
      (a.fn.carousel.noConflict = function () {
        return (a.fn.carousel = d), this;
      });
    var e = function (c) {
      var d,
        e = a(this),
        f = a(
          e.attr("data-target") ||
            ((d = e.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, ""))
        );
      if (f.hasClass("carousel")) {
        var g = a.extend({}, f.data(), e.data()),
          h = e.attr("data-slide-to");
        h && (g.interval = !1),
          b.call(f, g),
          h && f.data("bs.carousel").to(h),
          c.preventDefault();
      }
    };
    a(document)
      .on("click.bs.carousel.data-api", "[data-slide]", e)
      .on("click.bs.carousel.data-api", "[data-slide-to]", e),
      a(window).on("load", function () {
        a('[data-ride="carousel"]').each(function () {
          var c = a(this);
          b.call(c, c.data());
        });
      });
  })(jQuery),
  +(function (a) {
    "use strict";
    function b(b) {
      var c,
        d =
          b.attr("data-target") ||
          ((c = b.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, ""));
      return a(d);
    }
    function c(b) {
      return this.each(function () {
        var c = a(this),
          e = c.data("bs.collapse"),
          f = a.extend({}, d.DEFAULTS, c.data(), "object" == typeof b && b);
        !e && f.toggle && /show|hide/.test(b) && (f.toggle = !1),
          e || c.data("bs.collapse", (e = new d(this, f))),
          "string" == typeof b && e[b]();
      });
    }
    var d = function (b, c) {
      (this.$element = a(b)),
        (this.options = a.extend({}, d.DEFAULTS, c)),
        (this.$trigger = a(
          '[data-toggle="collapse"][href="#' +
            b.id +
            '"],[data-toggle="collapse"][data-target="#' +
            b.id +
            '"]'
        )),
        (this.transitioning = null),
        this.options.parent
          ? (this.$parent = this.getParent())
          : this.addAriaAndCollapsedClass(this.$element, this.$trigger),
        this.options.toggle && this.toggle();
    };
    (d.VERSION = "3.3.4"),
      (d.TRANSITION_DURATION = 350),
      (d.DEFAULTS = { toggle: !0 }),
      (d.prototype.dimension = function () {
        var a = this.$element.hasClass("width");
        return a ? "width" : "height";
      }),
      (d.prototype.show = function () {
        if (!this.transitioning && !this.$element.hasClass("in")) {
          var b,
            e =
              this.$parent &&
              this.$parent.children(".panel").children(".in, .collapsing");
          if (
            !(
              e &&
              e.length &&
              ((b = e.data("bs.collapse")), b && b.transitioning)
            )
          ) {
            var f = a.Event("show.bs.collapse");
            if ((this.$element.trigger(f), !f.isDefaultPrevented())) {
              e &&
                e.length &&
                (c.call(e, "hide"), b || e.data("bs.collapse", null));
              var g = this.dimension();
              this.$element
                .removeClass("collapse")
                .addClass("collapsing")
                [g](0)
                .attr("aria-expanded", !0),
                this.$trigger
                  .removeClass("collapsed")
                  .attr("aria-expanded", !0),
                (this.transitioning = 1);
              var h = function () {
                this.$element
                  .removeClass("collapsing")
                  .addClass("collapse in")
                  [g](""),
                  (this.transitioning = 0),
                  this.$element.trigger("shown.bs.collapse");
              };
              if (!a.support.transition) return h.call(this);
              var i = a.camelCase(["scroll", g].join("-"));
              this.$element
                .one("bsTransitionEnd", a.proxy(h, this))
                .emulateTransitionEnd(d.TRANSITION_DURATION)
                [g](this.$element[0][i]);
            }
          }
        }
      }),
      (d.prototype.hide = function () {
        if (!this.transitioning && this.$element.hasClass("in")) {
          var b = a.Event("hide.bs.collapse");
          if ((this.$element.trigger(b), !b.isDefaultPrevented())) {
            var c = this.dimension();
            this.$element[c](this.$element[c]())[0].offsetHeight,
              this.$element
                .addClass("collapsing")
                .removeClass("collapse in")
                .attr("aria-expanded", !1),
              this.$trigger.addClass("collapsed").attr("aria-expanded", !1),
              (this.transitioning = 1);
            var e = function () {
              (this.transitioning = 0),
                this.$element
                  .removeClass("collapsing")
                  .addClass("collapse")
                  .trigger("hidden.bs.collapse");
            };
            return a.support.transition
              ? void this.$element[c](0)
                  .one("bsTransitionEnd", a.proxy(e, this))
                  .emulateTransitionEnd(d.TRANSITION_DURATION)
              : e.call(this);
          }
        }
      }),
      (d.prototype.toggle = function () {
        this[this.$element.hasClass("in") ? "hide" : "show"]();
      }),
      (d.prototype.getParent = function () {
        return a(this.options.parent)
          .find(
            '[data-toggle="collapse"][data-parent="' +
              this.options.parent +
              '"]'
          )
          .each(
            a.proxy(function (c, d) {
              var e = a(d);
              this.addAriaAndCollapsedClass(b(e), e);
            }, this)
          )
          .end();
      }),
      (d.prototype.addAriaAndCollapsedClass = function (a, b) {
        var c = a.hasClass("in");
        a.attr("aria-expanded", c),
          b.toggleClass("collapsed", !c).attr("aria-expanded", c);
      });
    var e = a.fn.collapse;
    (a.fn.collapse = c),
      (a.fn.collapse.Constructor = d),
      (a.fn.collapse.noConflict = function () {
        return (a.fn.collapse = e), this;
      }),
      a(document).on(
        "click.bs.collapse.data-api",
        '[data-toggle="collapse"]',
        function (d) {
          var e = a(this);
          e.attr("data-target") || d.preventDefault();
          var f = b(e),
            g = f.data("bs.collapse"),
            h = g ? "toggle" : e.data();
          c.call(f, h);
        }
      );
  })(jQuery),
  +(function (a) {
    "use strict";
    function b(b) {
      (b && 3 === b.which) ||
        (a(e).remove(),
        a(f).each(function () {
          var d = a(this),
            e = c(d),
            f = { relatedTarget: this };
          e.hasClass("open") &&
            (e.trigger((b = a.Event("hide.bs.dropdown", f))),
            b.isDefaultPrevented() ||
              (d.attr("aria-expanded", "false"),
              e.removeClass("open").trigger("hidden.bs.dropdown", f)));
        }));
    }
    function c(b) {
      var c = b.attr("data-target");
      c ||
        ((c = b.attr("href")),
        (c = c && /#[A-Za-z]/.test(c) && c.replace(/.*(?=#[^\s]*$)/, "")));
      var d = c && a(c);
      return d && d.length ? d : b.parent();
    }
    function d(b) {
      return this.each(function () {
        var c = a(this),
          d = c.data("bs.dropdown");
        d || c.data("bs.dropdown", (d = new g(this))),
          "string" == typeof b && d[b].call(c);
      });
    }
    var e = ".dropdown-backdrop",
      f = '[data-toggle="dropdown"]',
      g = function (b) {
        a(b).on("click.bs.dropdown", this.toggle);
      };
    (g.VERSION = "3.3.4"),
      (g.prototype.toggle = function (d) {
        var e = a(this);
        if (!e.is(".disabled, :disabled")) {
          var f = c(e),
            g = f.hasClass("open");
          if ((b(), !g)) {
            "ontouchstart" in document.documentElement &&
              !f.closest(".navbar-nav").length &&
              a('<div class="dropdown-backdrop"/>')
                .insertAfter(a(this))
                .on("click", b);
            var h = { relatedTarget: this };
            if (
              (f.trigger((d = a.Event("show.bs.dropdown", h))),
              d.isDefaultPrevented())
            )
              return;
            e.trigger("focus").attr("aria-expanded", "true"),
              f.toggleClass("open").trigger("shown.bs.dropdown", h);
          }
          return !1;
        }
      }),
      (g.prototype.keydown = function (b) {
        if (
          /(38|40|27|32)/.test(b.which) &&
          !/input|textarea/i.test(b.target.tagName)
        ) {
          var d = a(this);
          if (
            (b.preventDefault(),
            b.stopPropagation(),
            !d.is(".disabled, :disabled"))
          ) {
            var e = c(d),
              g = e.hasClass("open");
            if ((!g && 27 != b.which) || (g && 27 == b.which))
              return (
                27 == b.which && e.find(f).trigger("focus"), d.trigger("click")
              );
            var h = " li:not(.disabled):visible a",
              i = e.find('[role="menu"]' + h + ', [role="listbox"]' + h);
            if (i.length) {
              var j = i.index(b.target);
              38 == b.which && j > 0 && j--,
                40 == b.which && j < i.length - 1 && j++,
                ~j || (j = 0),
                i.eq(j).trigger("focus");
            }
          }
        }
      });
    var h = a.fn.dropdown;
    (a.fn.dropdown = d),
      (a.fn.dropdown.Constructor = g),
      (a.fn.dropdown.noConflict = function () {
        return (a.fn.dropdown = h), this;
      }),
      a(document)
        .on("click.bs.dropdown.data-api", b)
        .on("click.bs.dropdown.data-api", ".dropdown form", function (a) {
          a.stopPropagation();
        })
        .on("click.bs.dropdown.data-api", f, g.prototype.toggle)
        .on("keydown.bs.dropdown.data-api", f, g.prototype.keydown)
        .on(
          "keydown.bs.dropdown.data-api",
          '[role="menu"]',
          g.prototype.keydown
        )
        .on(
          "keydown.bs.dropdown.data-api",
          '[role="listbox"]',
          g.prototype.keydown
        );
  })(jQuery),
  +(function (a) {
    "use strict";
    function b(b, d) {
      return this.each(function () {
        var e = a(this),
          f = e.data("bs.modal"),
          g = a.extend({}, c.DEFAULTS, e.data(), "object" == typeof b && b);
        f || e.data("bs.modal", (f = new c(this, g))),
          "string" == typeof b ? f[b](d) : g.show && f.show(d);
      });
    }
    var c = function (b, c) {
      (this.options = c),
        (this.$body = a(document.body)),
        (this.$element = a(b)),
        (this.$dialog = this.$element.find(".modal-dialog")),
        (this.$backdrop = null),
        (this.isShown = null),
        (this.originalBodyPad = null),
        (this.scrollbarWidth = 0),
        (this.ignoreBackdropClick = !1),
        this.options.remote &&
          this.$element.find(".modal-content").load(
            this.options.remote,
            a.proxy(function () {
              this.$element.trigger("loaded.bs.modal");
            }, this)
          );
    };
    (c.VERSION = "3.3.4"),
      (c.TRANSITION_DURATION = 300),
      (c.BACKDROP_TRANSITION_DURATION = 150),
      (c.DEFAULTS = { backdrop: !0, keyboard: !0, show: !0 }),
      (c.prototype.toggle = function (a) {
        return this.isShown ? this.hide() : this.show(a);
      }),
      (c.prototype.show = function (b) {
        var d = this,
          e = a.Event("show.bs.modal", { relatedTarget: b });
        this.$element.trigger(e),
          this.isShown ||
            e.isDefaultPrevented() ||
            ((this.isShown = !0),
            this.checkScrollbar(),
            this.setScrollbar(),
            this.$body.addClass("modal-open"),
            this.escape(),
            this.resize(),
            this.$element.on(
              "click.dismiss.bs.modal",
              '[data-dismiss="modal"]',
              a.proxy(this.hide, this)
            ),
            this.$dialog.on("mousedown.dismiss.bs.modal", function () {
              d.$element.one("mouseup.dismiss.bs.modal", function (b) {
                a(b.target).is(d.$element) && (d.ignoreBackdropClick = !0);
              });
            }),
            this.backdrop(function () {
              var e = a.support.transition && d.$element.hasClass("fade");
              d.$element.parent().length || d.$element.appendTo(d.$body),
                d.$element.show().scrollTop(0),
                d.adjustDialog(),
                e && d.$element[0].offsetWidth,
                d.$element.addClass("in").attr("aria-hidden", !1),
                d.enforceFocus();
              var f = a.Event("shown.bs.modal", { relatedTarget: b });
              e
                ? d.$dialog
                    .one("bsTransitionEnd", function () {
                      d.$element.trigger("focus").trigger(f);
                    })
                    .emulateTransitionEnd(c.TRANSITION_DURATION)
                : d.$element.trigger("focus").trigger(f);
            }));
      }),
      (c.prototype.hide = function (b) {
        b && b.preventDefault(),
          (b = a.Event("hide.bs.modal")),
          this.$element.trigger(b),
          this.isShown &&
            !b.isDefaultPrevented() &&
            ((this.isShown = !1),
            this.escape(),
            this.resize(),
            a(document).off("focusin.bs.modal"),
            this.$element
              .removeClass("in")
              .attr("aria-hidden", !0)
              .off("click.dismiss.bs.modal")
              .off("mouseup.dismiss.bs.modal"),
            this.$dialog.off("mousedown.dismiss.bs.modal"),
            a.support.transition && this.$element.hasClass("fade")
              ? this.$element
                  .one("bsTransitionEnd", a.proxy(this.hideModal, this))
                  .emulateTransitionEnd(c.TRANSITION_DURATION)
              : this.hideModal());
      }),
      (c.prototype.enforceFocus = function () {
        a(document)
          .off("focusin.bs.modal")
          .on(
            "focusin.bs.modal",
            a.proxy(function (a) {
              this.$element[0] === a.target ||
                this.$element.has(a.target).length ||
                this.$element.trigger("focus");
            }, this)
          );
      }),
      (c.prototype.escape = function () {
        this.isShown && this.options.keyboard
          ? this.$element.on(
              "keydown.dismiss.bs.modal",
              a.proxy(function (a) {
                27 == a.which && this.hide();
              }, this)
            )
          : this.isShown || this.$element.off("keydown.dismiss.bs.modal");
      }),
      (c.prototype.resize = function () {
        this.isShown
          ? a(window).on("resize.bs.modal", a.proxy(this.handleUpdate, this))
          : a(window).off("resize.bs.modal");
      }),
      (c.prototype.hideModal = function () {
        var a = this;
        this.$element.hide(),
          this.backdrop(function () {
            a.$body.removeClass("modal-open"),
              a.resetAdjustments(),
              a.resetScrollbar(),
              a.$element.trigger("hidden.bs.modal");
          });
      }),
      (c.prototype.removeBackdrop = function () {
        this.$backdrop && this.$backdrop.remove(), (this.$backdrop = null);
      }),
      (c.prototype.backdrop = function (b) {
        var d = this,
          e = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
          var f = a.support.transition && e;
          if (
            ((this.$backdrop = a(
              '<div class="modal-backdrop ' + e + '" />'
            ).appendTo(this.$body)),
            this.$element.on(
              "click.dismiss.bs.modal",
              a.proxy(function (a) {
                return this.ignoreBackdropClick
                  ? void (this.ignoreBackdropClick = !1)
                  : void (
                      a.target === a.currentTarget &&
                      ("static" == this.options.backdrop
                        ? this.$element[0].focus()
                        : this.hide())
                    );
              }, this)
            ),
            f && this.$backdrop[0].offsetWidth,
            this.$backdrop.addClass("in"),
            !b)
          )
            return;
          f
            ? this.$backdrop
                .one("bsTransitionEnd", b)
                .emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION)
            : b();
        } else if (!this.isShown && this.$backdrop) {
          this.$backdrop.removeClass("in");
          var g = function () {
            d.removeBackdrop(), b && b();
          };
          a.support.transition && this.$element.hasClass("fade")
            ? this.$backdrop
                .one("bsTransitionEnd", g)
                .emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION)
            : g();
        } else b && b();
      }),
      (c.prototype.handleUpdate = function () {
        this.adjustDialog();
      }),
      (c.prototype.adjustDialog = function () {
        var a =
          this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
          paddingLeft: !this.bodyIsOverflowing && a ? this.scrollbarWidth : "",
          paddingRight: this.bodyIsOverflowing && !a ? this.scrollbarWidth : "",
        });
      }),
      (c.prototype.resetAdjustments = function () {
        this.$element.css({ paddingLeft: "", paddingRight: "" });
      }),
      (c.prototype.checkScrollbar = function () {
        var a = window.innerWidth;
        if (!a) {
          var b = document.documentElement.getBoundingClientRect();
          a = b.right - Math.abs(b.left);
        }
        (this.bodyIsOverflowing = document.body.clientWidth < a),
          (this.scrollbarWidth = this.measureScrollbar());
      }),
      (c.prototype.setScrollbar = function () {
        var a = parseInt(this.$body.css("padding-right") || 0, 10);
        (this.originalBodyPad = document.body.style.paddingRight || ""),
          this.bodyIsOverflowing &&
            this.$body.css("padding-right", a + this.scrollbarWidth);
      }),
      (c.prototype.resetScrollbar = function () {
        this.$body.css("padding-right", this.originalBodyPad);
      }),
      (c.prototype.measureScrollbar = function () {
        var a = document.createElement("div");
        (a.className = "modal-scrollbar-measure"), this.$body.append(a);
        var b = a.offsetWidth - a.clientWidth;
        return this.$body[0].removeChild(a), b;
      });
    var d = a.fn.modal;
    (a.fn.modal = b),
      (a.fn.modal.Constructor = c),
      (a.fn.modal.noConflict = function () {
        return (a.fn.modal = d), this;
      }),
      a(document).on(
        "click.bs.modal.data-api",
        '[data-toggle="modal"]',
        function (c) {
          var d = a(this),
            e = d.attr("href"),
            f = a(
              d.attr("data-target") || (e && e.replace(/.*(?=#[^\s]+$)/, ""))
            ),
            g = f.data("bs.modal")
              ? "toggle"
              : a.extend({ remote: !/#/.test(e) && e }, f.data(), d.data());
          d.is("a") && c.preventDefault(),
            f.one("show.bs.modal", function (a) {
              a.isDefaultPrevented() ||
                f.one("hidden.bs.modal", function () {
                  d.is(":visible") && d.trigger("focus");
                });
            }),
            b.call(f, g, this);
        }
      );
  })(jQuery),
  +(function (a) {
    "use strict";
    function b(b) {
      return this.each(function () {
        var d = a(this),
          e = d.data("bs.tooltip"),
          f = "object" == typeof b && b;
        (e || !/destroy|hide/.test(b)) &&
          (e || d.data("bs.tooltip", (e = new c(this, f))),
          "string" == typeof b && e[b]());
      });
    }
    var c = function (a, b) {
      (this.type = null),
        (this.options = null),
        (this.enabled = null),
        (this.timeout = null),
        (this.hoverState = null),
        (this.$element = null),
        this.init("tooltip", a, b);
    };
    (c.VERSION = "3.3.4"),
      (c.TRANSITION_DURATION = 150),
      (c.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template:
          '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: { selector: "body", padding: 0 },
      }),
      (c.prototype.init = function (b, c, d) {
        if (
          ((this.enabled = !0),
          (this.type = b),
          (this.$element = a(c)),
          (this.options = this.getOptions(d)),
          (this.$viewport =
            this.options.viewport &&
            a(this.options.viewport.selector || this.options.viewport)),
          this.$element[0] instanceof document.constructor &&
            !this.options.selector)
        )
          throw new Error(
            "`selector` option must be specified when initializing " +
              this.type +
              " on the window.document object!"
          );
        for (var e = this.options.trigger.split(" "), f = e.length; f--; ) {
          var g = e[f];
          if ("click" == g)
            this.$element.on(
              "click." + this.type,
              this.options.selector,
              a.proxy(this.toggle, this)
            );
          else if ("manual" != g) {
            var h = "hover" == g ? "mouseenter" : "focusin",
              i = "hover" == g ? "mouseleave" : "focusout";
            this.$element.on(
              h + "." + this.type,
              this.options.selector,
              a.proxy(this.enter, this)
            ),
              this.$element.on(
                i + "." + this.type,
                this.options.selector,
                a.proxy(this.leave, this)
              );
          }
        }
        this.options.selector
          ? (this._options = a.extend({}, this.options, {
              trigger: "manual",
              selector: "",
            }))
          : this.fixTitle();
      }),
      (c.prototype.getDefaults = function () {
        return c.DEFAULTS;
      }),
      (c.prototype.getOptions = function (b) {
        return (
          (b = a.extend({}, this.getDefaults(), this.$element.data(), b)),
          b.delay &&
            "number" == typeof b.delay &&
            (b.delay = { show: b.delay, hide: b.delay }),
          b
        );
      }),
      (c.prototype.getDelegateOptions = function () {
        var b = {},
          c = this.getDefaults();
        return (
          this._options &&
            a.each(this._options, function (a, d) {
              c[a] != d && (b[a] = d);
            }),
          b
        );
      }),
      (c.prototype.enter = function (b) {
        var c =
          b instanceof this.constructor
            ? b
            : a(b.currentTarget).data("bs." + this.type);
        return c && c.$tip && c.$tip.is(":visible")
          ? void (c.hoverState = "in")
          : (c ||
              ((c = new this.constructor(
                b.currentTarget,
                this.getDelegateOptions()
              )),
              a(b.currentTarget).data("bs." + this.type, c)),
            clearTimeout(c.timeout),
            (c.hoverState = "in"),
            c.options.delay && c.options.delay.show
              ? void (c.timeout = setTimeout(function () {
                  "in" == c.hoverState && c.show();
                }, c.options.delay.show))
              : c.show());
      }),
      (c.prototype.leave = function (b) {
        var c =
          b instanceof this.constructor
            ? b
            : a(b.currentTarget).data("bs." + this.type);
        return (
          c ||
            ((c = new this.constructor(
              b.currentTarget,
              this.getDelegateOptions()
            )),
            a(b.currentTarget).data("bs." + this.type, c)),
          clearTimeout(c.timeout),
          (c.hoverState = "out"),
          c.options.delay && c.options.delay.hide
            ? void (c.timeout = setTimeout(function () {
                "out" == c.hoverState && c.hide();
              }, c.options.delay.hide))
            : c.hide()
        );
      }),
      (c.prototype.show = function () {
        var b = a.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
          this.$element.trigger(b);
          var d = a.contains(
            this.$element[0].ownerDocument.documentElement,
            this.$element[0]
          );
          if (b.isDefaultPrevented() || !d) return;
          var e = this,
            f = this.tip(),
            g = this.getUID(this.type);
          this.setContent(),
            f.attr("id", g),
            this.$element.attr("aria-describedby", g),
            this.options.animation && f.addClass("fade");
          var h =
              "function" == typeof this.options.placement
                ? this.options.placement.call(this, f[0], this.$element[0])
                : this.options.placement,
            i = /\s?auto?\s?/i,
            j = i.test(h);
          j && (h = h.replace(i, "") || "top"),
            f
              .detach()
              .css({ top: 0, left: 0, display: "block" })
              .addClass(h)
              .data("bs." + this.type, this),
            this.options.container
              ? f.appendTo(this.options.container)
              : f.insertAfter(this.$element);
          var k = this.getPosition(),
            l = f[0].offsetWidth,
            m = f[0].offsetHeight;
          if (j) {
            var n = h,
              o = this.options.container
                ? a(this.options.container)
                : this.$element.parent(),
              p = this.getPosition(o);
            (h =
              "bottom" == h && k.bottom + m > p.bottom
                ? "top"
                : "top" == h && k.top - m < p.top
                ? "bottom"
                : "right" == h && k.right + l > p.width
                ? "left"
                : "left" == h && k.left - l < p.left
                ? "right"
                : h),
              f.removeClass(n).addClass(h);
          }
          var q = this.getCalculatedOffset(h, k, l, m);
          this.applyPlacement(q, h);
          var r = function () {
            var a = e.hoverState;
            e.$element.trigger("shown.bs." + e.type),
              (e.hoverState = null),
              "out" == a && e.leave(e);
          };
          a.support.transition && this.$tip.hasClass("fade")
            ? f
                .one("bsTransitionEnd", r)
                .emulateTransitionEnd(c.TRANSITION_DURATION)
            : r();
        }
      }),
      (c.prototype.applyPlacement = function (b, c) {
        var d = this.tip(),
          e = d[0].offsetWidth,
          f = d[0].offsetHeight,
          g = parseInt(d.css("margin-top"), 10),
          h = parseInt(d.css("margin-left"), 10);
        isNaN(g) && (g = 0),
          isNaN(h) && (h = 0),
          (b.top = b.top + g),
          (b.left = b.left + h),
          a.offset.setOffset(
            d[0],
            a.extend(
              {
                using: function (a) {
                  d.css({ top: Math.round(a.top), left: Math.round(a.left) });
                },
              },
              b
            ),
            0
          ),
          d.addClass("in");
        var i = d[0].offsetWidth,
          j = d[0].offsetHeight;
        "top" == c && j != f && (b.top = b.top + f - j);
        var k = this.getViewportAdjustedDelta(c, b, i, j);
        k.left ? (b.left += k.left) : (b.top += k.top);
        var l = /top|bottom/.test(c),
          m = l ? 2 * k.left - e + i : 2 * k.top - f + j,
          n = l ? "offsetWidth" : "offsetHeight";
        d.offset(b), this.replaceArrow(m, d[0][n], l);
      }),
      (c.prototype.replaceArrow = function (a, b, c) {
        this.arrow()
          .css(c ? "left" : "top", 50 * (1 - a / b) + "%")
          .css(c ? "top" : "left", "");
      }),
      (c.prototype.setContent = function () {
        var a = this.tip(),
          b = this.getTitle();
        a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b),
          a.removeClass("fade in top bottom left right");
      }),
      (c.prototype.hide = function (b) {
        function d() {
          "in" != e.hoverState && f.detach(),
            e.$element
              .removeAttr("aria-describedby")
              .trigger("hidden.bs." + e.type),
            b && b();
        }
        var e = this,
          f = a(this.$tip),
          g = a.Event("hide.bs." + this.type);
        return (
          this.$element.trigger(g),
          g.isDefaultPrevented()
            ? void 0
            : (f.removeClass("in"),
              a.support.transition && f.hasClass("fade")
                ? f
                    .one("bsTransitionEnd", d)
                    .emulateTransitionEnd(c.TRANSITION_DURATION)
                : d(),
              (this.hoverState = null),
              this)
        );
      }),
      (c.prototype.fixTitle = function () {
        var a = this.$element;
        (a.attr("title") || "string" != typeof a.attr("data-original-title")) &&
          a
            .attr("data-original-title", a.attr("title") || "")
            .attr("title", "");
      }),
      (c.prototype.hasContent = function () {
        return this.getTitle();
      }),
      (c.prototype.getPosition = function (b) {
        b = b || this.$element;
        var c = b[0],
          d = "BODY" == c.tagName,
          e = c.getBoundingClientRect();
        null == e.width &&
          (e = a.extend({}, e, {
            width: e.right - e.left,
            height: e.bottom - e.top,
          }));
        var f = d ? { top: 0, left: 0 } : b.offset(),
          g = {
            scroll: d
              ? document.documentElement.scrollTop || document.body.scrollTop
              : b.scrollTop(),
          },
          h = d
            ? { width: a(window).width(), height: a(window).height() }
            : null;
        return a.extend({}, e, g, h, f);
      }),
      (c.prototype.getCalculatedOffset = function (a, b, c, d) {
        return "bottom" == a
          ? { top: b.top + b.height, left: b.left + b.width / 2 - c / 2 }
          : "top" == a
          ? { top: b.top - d, left: b.left + b.width / 2 - c / 2 }
          : "left" == a
          ? { top: b.top + b.height / 2 - d / 2, left: b.left - c }
          : { top: b.top + b.height / 2 - d / 2, left: b.left + b.width };
      }),
      (c.prototype.getViewportAdjustedDelta = function (a, b, c, d) {
        var e = { top: 0, left: 0 };
        if (!this.$viewport) return e;
        var f = (this.options.viewport && this.options.viewport.padding) || 0,
          g = this.getPosition(this.$viewport);
        if (/right|left/.test(a)) {
          var h = b.top - f - g.scroll,
            i = b.top + f - g.scroll + d;
          h < g.top
            ? (e.top = g.top - h)
            : i > g.top + g.height && (e.top = g.top + g.height - i);
        } else {
          var j = b.left - f,
            k = b.left + f + c;
          j < g.left
            ? (e.left = g.left - j)
            : k > g.width && (e.left = g.left + g.width - k);
        }
        return e;
      }),
      (c.prototype.getTitle = function () {
        var a,
          b = this.$element,
          c = this.options;
        return (a =
          b.attr("data-original-title") ||
          ("function" == typeof c.title ? c.title.call(b[0]) : c.title));
      }),
      (c.prototype.getUID = function (a) {
        do a += ~~(1e6 * Math.random());
        while (document.getElementById(a));
        return a;
      }),
      (c.prototype.tip = function () {
        return (this.$tip = this.$tip || a(this.options.template));
      }),
      (c.prototype.arrow = function () {
        return (this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow"));
      }),
      (c.prototype.enable = function () {
        this.enabled = !0;
      }),
      (c.prototype.disable = function () {
        this.enabled = !1;
      }),
      (c.prototype.toggleEnabled = function () {
        this.enabled = !this.enabled;
      }),
      (c.prototype.toggle = function (b) {
        var c = this;
        b &&
          ((c = a(b.currentTarget).data("bs." + this.type)),
          c ||
            ((c = new this.constructor(
              b.currentTarget,
              this.getDelegateOptions()
            )),
            a(b.currentTarget).data("bs." + this.type, c))),
          c.tip().hasClass("in") ? c.leave(c) : c.enter(c);
      }),
      (c.prototype.destroy = function () {
        var a = this;
        clearTimeout(this.timeout),
          this.hide(function () {
            a.$element.off("." + a.type).removeData("bs." + a.type);
          });
      });
    var d = a.fn.tooltip;
    (a.fn.tooltip = b),
      (a.fn.tooltip.Constructor = c),
      (a.fn.tooltip.noConflict = function () {
        return (a.fn.tooltip = d), this;
      });
  })(jQuery),
  +(function (a) {
    "use strict";
    function b(b) {
      return this.each(function () {
        var d = a(this),
          e = d.data("bs.popover"),
          f = "object" == typeof b && b;
        (e || !/destroy|hide/.test(b)) &&
          (e || d.data("bs.popover", (e = new c(this, f))),
          "string" == typeof b && e[b]());
      });
    }
    var c = function (a, b) {
      this.init("popover", a, b);
    };
    if (!a.fn.tooltip) throw new Error("Popover requires tooltip.js");
    (c.VERSION = "3.3.4"),
      (c.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template:
          '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>',
      })),
      (c.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype)),
      (c.prototype.constructor = c),
      (c.prototype.getDefaults = function () {
        return c.DEFAULTS;
      }),
      (c.prototype.setContent = function () {
        var a = this.tip(),
          b = this.getTitle(),
          c = this.getContent();
        a.find(".popover-title")[this.options.html ? "html" : "text"](b),
          a
            .find(".popover-content")
            .children()
            .detach()
            .end()
            [
              this.options.html
                ? "string" == typeof c
                  ? "html"
                  : "append"
                : "text"
            ](c),
          a.removeClass("fade top bottom left right in"),
          a.find(".popover-title").html() || a.find(".popover-title").hide();
      }),
      (c.prototype.hasContent = function () {
        return this.getTitle() || this.getContent();
      }),
      (c.prototype.getContent = function () {
        var a = this.$element,
          b = this.options;
        return (
          a.attr("data-content") ||
          ("function" == typeof b.content ? b.content.call(a[0]) : b.content)
        );
      }),
      (c.prototype.arrow = function () {
        return (this.$arrow = this.$arrow || this.tip().find(".arrow"));
      });
    var d = a.fn.popover;
    (a.fn.popover = b),
      (a.fn.popover.Constructor = c),
      (a.fn.popover.noConflict = function () {
        return (a.fn.popover = d), this;
      });
  })(jQuery),
  +(function (a) {
    "use strict";
    function b(c, d) {
      (this.$body = a(document.body)),
        (this.$scrollElement = a(a(c).is(document.body) ? window : c)),
        (this.options = a.extend({}, b.DEFAULTS, d)),
        (this.selector = (this.options.target || "") + " .nav li > a"),
        (this.offsets = []),
        (this.targets = []),
        (this.activeTarget = null),
        (this.scrollHeight = 0),
        this.$scrollElement.on(
          "scroll.bs.scrollspy",
          a.proxy(this.process, this)
        ),
        this.refresh(),
        this.process();
    }
    function c(c) {
      return this.each(function () {
        var d = a(this),
          e = d.data("bs.scrollspy"),
          f = "object" == typeof c && c;
        e || d.data("bs.scrollspy", (e = new b(this, f))),
          "string" == typeof c && e[c]();
      });
    }
    (b.VERSION = "3.3.4"),
      (b.DEFAULTS = { offset: 10 }),
      (b.prototype.getScrollHeight = function () {
        return (
          this.$scrollElement[0].scrollHeight ||
          Math.max(
            this.$body[0].scrollHeight,
            document.documentElement.scrollHeight
          )
        );
      }),
      (b.prototype.refresh = function () {
        var b = this,
          c = "offset",
          d = 0;
        (this.offsets = []),
          (this.targets = []),
          (this.scrollHeight = this.getScrollHeight()),
          a.isWindow(this.$scrollElement[0]) ||
            ((c = "position"), (d = this.$scrollElement.scrollTop())),
          this.$body
            .find(this.selector)
            .map(function () {
              var b = a(this),
                e = b.data("target") || b.attr("href"),
                f = /^#./.test(e) && a(e);
              return (
                (f && f.length && f.is(":visible") && [[f[c]().top + d, e]]) ||
                null
              );
            })
            .sort(function (a, b) {
              return a[0] - b[0];
            })
            .each(function () {
              b.offsets.push(this[0]), b.targets.push(this[1]);
            });
      }),
      (b.prototype.process = function () {
        var a,
          b = this.$scrollElement.scrollTop() + this.options.offset,
          c = this.getScrollHeight(),
          d = this.options.offset + c - this.$scrollElement.height(),
          e = this.offsets,
          f = this.targets,
          g = this.activeTarget;
        if ((this.scrollHeight != c && this.refresh(), b >= d))
          return g != (a = f[f.length - 1]) && this.activate(a);
        if (g && b < e[0]) return (this.activeTarget = null), this.clear();
        for (a = e.length; a--; )
          g != f[a] &&
            b >= e[a] &&
            (void 0 === e[a + 1] || b < e[a + 1]) &&
            this.activate(f[a]);
      }),
      (b.prototype.activate = function (b) {
        (this.activeTarget = b), this.clear();
        var c =
            this.selector +
            '[data-target="' +
            b +
            '"],' +
            this.selector +
            '[href="' +
            b +
            '"]',
          d = a(c).parents("li").addClass("active");
        d.parent(".dropdown-menu").length &&
          (d = d.closest("li.dropdown").addClass("active")),
          d.trigger("activate.bs.scrollspy");
      }),
      (b.prototype.clear = function () {
        a(this.selector)
          .parentsUntil(this.options.target, ".active")
          .removeClass("active");
      });
    var d = a.fn.scrollspy;
    (a.fn.scrollspy = c),
      (a.fn.scrollspy.Constructor = b),
      (a.fn.scrollspy.noConflict = function () {
        return (a.fn.scrollspy = d), this;
      }),
      a(window).on("load.bs.scrollspy.data-api", function () {
        a('[data-spy="scroll"]').each(function () {
          var b = a(this);
          c.call(b, b.data());
        });
      });
  })(jQuery),
  +(function (a) {
    "use strict";
    function b(b) {
      return this.each(function () {
        var d = a(this),
          e = d.data("bs.tab");
        e || d.data("bs.tab", (e = new c(this))),
          "string" == typeof b && e[b]();
      });
    }
    var c = function (b) {
      this.element = a(b);
    };
    (c.VERSION = "3.3.4"),
      (c.TRANSITION_DURATION = 150),
      (c.prototype.show = function () {
        var b = this.element,
          c = b.closest("ul:not(.dropdown-menu)"),
          d = b.data("target");
        if (
          (d ||
            ((d = b.attr("href")), (d = d && d.replace(/.*(?=#[^\s]*$)/, ""))),
          !b.parent("li").hasClass("active"))
        ) {
          var e = c.find(".active:last a"),
            f = a.Event("hide.bs.tab", { relatedTarget: b[0] }),
            g = a.Event("show.bs.tab", { relatedTarget: e[0] });
          if (
            (e.trigger(f),
            b.trigger(g),
            !g.isDefaultPrevented() && !f.isDefaultPrevented())
          ) {
            var h = a(d);
            this.activate(b.closest("li"), c),
              this.activate(h, h.parent(), function () {
                e.trigger({ type: "hidden.bs.tab", relatedTarget: b[0] }),
                  b.trigger({ type: "shown.bs.tab", relatedTarget: e[0] });
              });
          }
        }
      }),
      (c.prototype.activate = function (b, d, e) {
        function f() {
          g
            .removeClass("active")
            .find("> .dropdown-menu > .active")
            .removeClass("active")
            .end()
            .find('[data-toggle="tab"]')
            .attr("aria-expanded", !1),
            b
              .addClass("active")
              .find('[data-toggle="tab"]')
              .attr("aria-expanded", !0),
            h ? (b[0].offsetWidth, b.addClass("in")) : b.removeClass("fade"),
            b.parent(".dropdown-menu").length &&
              b
                .closest("li.dropdown")
                .addClass("active")
                .end()
                .find('[data-toggle="tab"]')
                .attr("aria-expanded", !0),
            e && e();
        }
        var g = d.find("> .active"),
          h =
            e &&
            a.support.transition &&
            ((g.length && g.hasClass("fade")) || !!d.find("> .fade").length);
        g.length && h
          ? g
              .one("bsTransitionEnd", f)
              .emulateTransitionEnd(c.TRANSITION_DURATION)
          : f(),
          g.removeClass("in");
      });
    var d = a.fn.tab;
    (a.fn.tab = b),
      (a.fn.tab.Constructor = c),
      (a.fn.tab.noConflict = function () {
        return (a.fn.tab = d), this;
      });
    var e = function (c) {
      c.preventDefault(), b.call(a(this), "show");
    };
    a(document)
      .on("click.bs.tab.data-api", '[data-toggle="tab"]', e)
      .on("click.bs.tab.data-api", '[data-toggle="pill"]', e);
  })(jQuery),
  +(function (a) {
    "use strict";
    function b(b) {
      return this.each(function () {
        var d = a(this),
          e = d.data("bs.affix"),
          f = "object" == typeof b && b;
        e || d.data("bs.affix", (e = new c(this, f))),
          "string" == typeof b && e[b]();
      });
    }
    var c = function (b, d) {
      (this.options = a.extend({}, c.DEFAULTS, d)),
        (this.$target = a(this.options.target)
          .on("scroll.bs.affix.data-api", a.proxy(this.checkPosition, this))
          .on(
            "click.bs.affix.data-api",
            a.proxy(this.checkPositionWithEventLoop, this)
          )),
        (this.$element = a(b)),
        (this.affixed = null),
        (this.unpin = null),
        (this.pinnedOffset = null),
        this.checkPosition();
    };
    (c.VERSION = "3.3.4"),
      (c.RESET = "affix affix-top affix-bottom"),
      (c.DEFAULTS = { offset: 0, target: window }),
      (c.prototype.getState = function (a, b, c, d) {
        var e = this.$target.scrollTop(),
          f = this.$element.offset(),
          g = this.$target.height();
        if (null != c && "top" == this.affixed) return c > e ? "top" : !1;
        if ("bottom" == this.affixed)
          return null != c
            ? e + this.unpin <= f.top
              ? !1
              : "bottom"
            : a - d >= e + g
            ? !1
            : "bottom";
        var h = null == this.affixed,
          i = h ? e : f.top,
          j = h ? g : b;
        return null != c && c >= e
          ? "top"
          : null != d && i + j >= a - d
          ? "bottom"
          : !1;
      }),
      (c.prototype.getPinnedOffset = function () {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(c.RESET).addClass("affix");
        var a = this.$target.scrollTop(),
          b = this.$element.offset();
        return (this.pinnedOffset = b.top - a);
      }),
      (c.prototype.checkPositionWithEventLoop = function () {
        setTimeout(a.proxy(this.checkPosition, this), 1);
      }),
      (c.prototype.checkPosition = function () {
        if (this.$element.is(":visible")) {
          var b = this.$element.height(),
            d = this.options.offset,
            e = d.top,
            f = d.bottom,
            g = a(document.body).height();
          "object" != typeof d && (f = e = d),
            "function" == typeof e && (e = d.top(this.$element)),
            "function" == typeof f && (f = d.bottom(this.$element));
          var h = this.getState(g, b, e, f);
          if (this.affixed != h) {
            null != this.unpin && this.$element.css("top", "");
            var i = "affix" + (h ? "-" + h : ""),
              j = a.Event(i + ".bs.affix");
            if ((this.$element.trigger(j), j.isDefaultPrevented())) return;
            (this.affixed = h),
              (this.unpin = "bottom" == h ? this.getPinnedOffset() : null),
              this.$element
                .removeClass(c.RESET)
                .addClass(i)
                .trigger(i.replace("affix", "affixed") + ".bs.affix");
          }
          "bottom" == h && this.$element.offset({ top: g - b - f });
        }
      });
    var d = a.fn.affix;
    (a.fn.affix = b),
      (a.fn.affix.Constructor = c),
      (a.fn.affix.noConflict = function () {
        return (a.fn.affix = d), this;
      }),
      a(window).on("load", function () {
        a('[data-spy="affix"]').each(function () {
          var c = a(this),
            d = c.data();
          (d.offset = d.offset || {}),
            null != d.offsetBottom && (d.offset.bottom = d.offsetBottom),
            null != d.offsetTop && (d.offset.top = d.offsetTop),
            b.call(c, d);
        });
      });
  })(jQuery);

/**
 * @preserve
 * Project: Bootstrap Hover Dropdown
 * Author: Cameron Spear
 * Version: v2.1.3
 * Contributors: Mattia Larentis
 * Dependencies: Bootstrap's Dropdown plugin, jQuery
 * Description: A simple plugin to enable Bootstrap dropdowns to active on hover and provide a nice user experience.
 * License: MIT
 * Homepage: http://cameronspear.com/blog/bootstrap-dropdown-on-hover-plugin/
 */
!(function (e, n) {
  var o = e();
  (e.fn.dropdownHover = function (t) {
    /*return"ontouchstart"in document?this:*/ (o = o.add(this.parent())),
      this.each(function () {
        function r() {
          n.clearTimeout(a),
            n.clearTimeout(i),
            (i = n.setTimeout(function () {
              o.find(":focus").blur(),
                f.instantlyCloseOthers === !0 && o.removeClass("open"),
                n.clearTimeout(i),
                d.attr("aria-expanded", "true"),
                s.addClass("open"),
                d.trigger(l);
            }, f.hoverDelay));
        }
        var a,
          i,
          d = e(this),
          s = d.parent(),
          u = { delay: 500, hoverDelay: 0, instantlyCloseOthers: !0 },
          h = {
            delay: e(this).data("delay"),
            hoverDelay: e(this).data("hover-delay"),
            instantlyCloseOthers: e(this).data("close-others"),
          },
          l = "show.bs.dropdown",
          c = "hide.bs.dropdown",
          f = e.extend(!0, {}, u, t, h);
        s.hover(
          function (e) {
            return s.hasClass("open") || d.is(e.target) ? void r(e) : !0;
          },
          function () {
            n.clearTimeout(i),
              (a = n.setTimeout(function () {
                d.attr("aria-expanded", "false"),
                  s.removeClass("open"),
                  d.trigger(c);
              }, f.delay));
          }
        ),
          d.hover(function (e) {
            return s.hasClass("open") || s.is(e.target) ? void r(e) : !0;
          }),
          s.find(".dropdown-submenu").each(function () {
            var o,
              t = e(this);
            t.hover(
              function () {
                n.clearTimeout(o),
                  t.children(".dropdown-menu").show(),
                  t.siblings().children(".dropdown-menu").hide();
              },
              function () {
                var e = t.children(".dropdown-menu");
                o = n.setTimeout(function () {
                  e.hide();
                }, f.delay);
              }
            );
          });
      });
  }),
    e(document).ready(function () {
      e('[data-hover="dropdown"]').dropdownHover();
    });
})(jQuery, window);

/*!
Waypoints - 3.1.1
Copyright © 2011-2015 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blog/master/licenses.txt
*/
!(function () {
  "use strict";
  function t(o) {
    if (!o) throw new Error("No options passed to Waypoint constructor");
    if (!o.element)
      throw new Error("No element option passed to Waypoint constructor");
    if (!o.handler)
      throw new Error("No handler option passed to Waypoint constructor");
    (this.key = "waypoint-" + e),
      (this.options = t.Adapter.extend({}, t.defaults, o)),
      (this.element = this.options.element),
      (this.adapter = new t.Adapter(this.element)),
      (this.callback = o.handler),
      (this.axis = this.options.horizontal ? "horizontal" : "vertical"),
      (this.enabled = this.options.enabled),
      (this.triggerPoint = null),
      (this.group = t.Group.findOrCreate({
        name: this.options.group,
        axis: this.axis,
      })),
      (this.context = t.Context.findOrCreateByElement(this.options.context)),
      t.offsetAliases[this.options.offset] &&
        (this.options.offset = t.offsetAliases[this.options.offset]),
      this.group.add(this),
      this.context.add(this),
      (i[this.key] = this),
      (e += 1);
  }
  var e = 0,
    i = {};
  (t.prototype.queueTrigger = function (t) {
    this.group.queueTrigger(this, t);
  }),
    (t.prototype.trigger = function (t) {
      this.enabled && this.callback && this.callback.apply(this, t);
    }),
    (t.prototype.destroy = function () {
      this.context.remove(this), this.group.remove(this), delete i[this.key];
    }),
    (t.prototype.disable = function () {
      return (this.enabled = !1), this;
    }),
    (t.prototype.enable = function () {
      return this.context.refresh(), (this.enabled = !0), this;
    }),
    (t.prototype.next = function () {
      return this.group.next(this);
    }),
    (t.prototype.previous = function () {
      return this.group.previous(this);
    }),
    (t.invokeAll = function (t) {
      var e = [];
      for (var o in i) e.push(i[o]);
      for (var n = 0, r = e.length; r > n; n++) e[n][t]();
    }),
    (t.destroyAll = function () {
      t.invokeAll("destroy");
    }),
    (t.disableAll = function () {
      t.invokeAll("disable");
    }),
    (t.enableAll = function () {
      t.invokeAll("enable");
    }),
    (t.refreshAll = function () {
      t.Context.refreshAll();
    }),
    (t.viewportHeight = function () {
      return window.innerHeight || document.documentElement.clientHeight;
    }),
    (t.viewportWidth = function () {
      return document.documentElement.clientWidth;
    }),
    (t.adapters = []),
    (t.defaults = {
      context: window,
      continuous: !0,
      enabled: !0,
      group: "default",
      horizontal: !1,
      offset: 0,
    }),
    (t.offsetAliases = {
      "bottom-in-view": function () {
        return this.context.innerHeight() - this.adapter.outerHeight();
      },
      "right-in-view": function () {
        return this.context.innerWidth() - this.adapter.outerWidth();
      },
    }),
    (window.Waypoint = t);
})(),
  (function () {
    "use strict";
    function t(t) {
      window.setTimeout(t, 1e3 / 60);
    }
    function e(t) {
      (this.element = t),
        (this.Adapter = n.Adapter),
        (this.adapter = new this.Adapter(t)),
        (this.key = "waypoint-context-" + i),
        (this.didScroll = !1),
        (this.didResize = !1),
        (this.oldScroll = {
          x: this.adapter.scrollLeft(),
          y: this.adapter.scrollTop(),
        }),
        (this.waypoints = { vertical: {}, horizontal: {} }),
        (t.waypointContextKey = this.key),
        (o[t.waypointContextKey] = this),
        (i += 1),
        this.createThrottledScrollHandler(),
        this.createThrottledResizeHandler();
    }
    var i = 0,
      o = {},
      n = window.Waypoint,
      r = window.onload;
    (e.prototype.add = function (t) {
      var e = t.options.horizontal ? "horizontal" : "vertical";
      (this.waypoints[e][t.key] = t), this.refresh();
    }),
      (e.prototype.checkEmpty = function () {
        var t = this.Adapter.isEmptyObject(this.waypoints.horizontal),
          e = this.Adapter.isEmptyObject(this.waypoints.vertical);
        t && e && (this.adapter.off(".waypoints"), delete o[this.key]);
      }),
      (e.prototype.createThrottledResizeHandler = function () {
        function t() {
          e.handleResize(), (e.didResize = !1);
        }
        var e = this;
        this.adapter.on("resize.waypoints", function () {
          e.didResize || ((e.didResize = !0), n.requestAnimationFrame(t));
        });
      }),
      (e.prototype.createThrottledScrollHandler = function () {
        function t() {
          e.handleScroll(), (e.didScroll = !1);
        }
        var e = this;
        this.adapter.on("scroll.waypoints", function () {
          (!e.didScroll || n.isTouch) &&
            ((e.didScroll = !0), n.requestAnimationFrame(t));
        });
      }),
      (e.prototype.handleResize = function () {
        n.Context.refreshAll();
      }),
      (e.prototype.handleScroll = function () {
        var t = {},
          e = {
            horizontal: {
              newScroll: this.adapter.scrollLeft(),
              oldScroll: this.oldScroll.x,
              forward: "right",
              backward: "left",
            },
            vertical: {
              newScroll: this.adapter.scrollTop(),
              oldScroll: this.oldScroll.y,
              forward: "down",
              backward: "up",
            },
          };
        for (var i in e) {
          var o = e[i],
            n = o.newScroll > o.oldScroll,
            r = n ? o.forward : o.backward;
          for (var s in this.waypoints[i]) {
            var a = this.waypoints[i][s],
              l = o.oldScroll < a.triggerPoint,
              h = o.newScroll >= a.triggerPoint,
              p = l && h,
              u = !l && !h;
            (p || u) && (a.queueTrigger(r), (t[a.group.id] = a.group));
          }
        }
        for (var c in t) t[c].flushTriggers();
        this.oldScroll = { x: e.horizontal.newScroll, y: e.vertical.newScroll };
      }),
      (e.prototype.innerHeight = function () {
        return this.element == this.element.window
          ? n.viewportHeight()
          : this.adapter.innerHeight();
      }),
      (e.prototype.remove = function (t) {
        delete this.waypoints[t.axis][t.key], this.checkEmpty();
      }),
      (e.prototype.innerWidth = function () {
        return this.element == this.element.window
          ? n.viewportWidth()
          : this.adapter.innerWidth();
      }),
      (e.prototype.destroy = function () {
        var t = [];
        for (var e in this.waypoints)
          for (var i in this.waypoints[e]) t.push(this.waypoints[e][i]);
        for (var o = 0, n = t.length; n > o; o++) t[o].destroy();
      }),
      (e.prototype.refresh = function () {
        var t,
          e = this.element == this.element.window,
          i = this.adapter.offset(),
          o = {};
        this.handleScroll(),
          (t = {
            horizontal: {
              contextOffset: e ? 0 : i.left,
              contextScroll: e ? 0 : this.oldScroll.x,
              contextDimension: this.innerWidth(),
              oldScroll: this.oldScroll.x,
              forward: "right",
              backward: "left",
              offsetProp: "left",
            },
            vertical: {
              contextOffset: e ? 0 : i.top,
              contextScroll: e ? 0 : this.oldScroll.y,
              contextDimension: this.innerHeight(),
              oldScroll: this.oldScroll.y,
              forward: "down",
              backward: "up",
              offsetProp: "top",
            },
          });
        for (var n in t) {
          var r = t[n];
          for (var s in this.waypoints[n]) {
            var a,
              l,
              h,
              p,
              u,
              c = this.waypoints[n][s],
              d = c.options.offset,
              f = c.triggerPoint,
              w = 0,
              y = null == f;
            c.element !== c.element.window &&
              (w = c.adapter.offset()[r.offsetProp]),
              "function" == typeof d
                ? (d = d.apply(c))
                : "string" == typeof d &&
                  ((d = parseFloat(d)),
                  c.options.offset.indexOf("%") > -1 &&
                    (d = Math.ceil((r.contextDimension * d) / 100))),
              (a = r.contextScroll - r.contextOffset),
              (c.triggerPoint = w + a - d),
              (l = f < r.oldScroll),
              (h = c.triggerPoint >= r.oldScroll),
              (p = l && h),
              (u = !l && !h),
              !y && p
                ? (c.queueTrigger(r.backward), (o[c.group.id] = c.group))
                : !y && u
                ? (c.queueTrigger(r.forward), (o[c.group.id] = c.group))
                : y &&
                  r.oldScroll >= c.triggerPoint &&
                  (c.queueTrigger(r.forward), (o[c.group.id] = c.group));
          }
        }
        for (var g in o) o[g].flushTriggers();
        return this;
      }),
      (e.findOrCreateByElement = function (t) {
        return e.findByElement(t) || new e(t);
      }),
      (e.refreshAll = function () {
        for (var t in o) o[t].refresh();
      }),
      (e.findByElement = function (t) {
        return o[t.waypointContextKey];
      }),
      (window.onload = function () {
        r && r(), e.refreshAll();
      }),
      (n.requestAnimationFrame = function (e) {
        var i =
          window.requestAnimationFrame ||
          window.mozRequestAnimationFrame ||
          window.webkitRequestAnimationFrame ||
          t;
        i.call(window, e);
      }),
      (n.Context = e);
  })(),
  (function () {
    "use strict";
    function t(t, e) {
      return t.triggerPoint - e.triggerPoint;
    }
    function e(t, e) {
      return e.triggerPoint - t.triggerPoint;
    }
    function i(t) {
      (this.name = t.name),
        (this.axis = t.axis),
        (this.id = this.name + "-" + this.axis),
        (this.waypoints = []),
        this.clearTriggerQueues(),
        (o[this.axis][this.name] = this);
    }
    var o = { vertical: {}, horizontal: {} },
      n = window.Waypoint;
    (i.prototype.add = function (t) {
      this.waypoints.push(t);
    }),
      (i.prototype.clearTriggerQueues = function () {
        this.triggerQueues = { up: [], down: [], left: [], right: [] };
      }),
      (i.prototype.flushTriggers = function () {
        for (var i in this.triggerQueues) {
          var o = this.triggerQueues[i],
            n = "up" === i || "left" === i;
          o.sort(n ? e : t);
          for (var r = 0, s = o.length; s > r; r += 1) {
            var a = o[r];
            (a.options.continuous || r === o.length - 1) && a.trigger([i]);
          }
        }
        this.clearTriggerQueues();
      }),
      (i.prototype.next = function (e) {
        this.waypoints.sort(t);
        var i = n.Adapter.inArray(e, this.waypoints),
          o = i === this.waypoints.length - 1;
        return o ? null : this.waypoints[i + 1];
      }),
      (i.prototype.previous = function (e) {
        this.waypoints.sort(t);
        var i = n.Adapter.inArray(e, this.waypoints);
        return i ? this.waypoints[i - 1] : null;
      }),
      (i.prototype.queueTrigger = function (t, e) {
        this.triggerQueues[e].push(t);
      }),
      (i.prototype.remove = function (t) {
        var e = n.Adapter.inArray(t, this.waypoints);
        e > -1 && this.waypoints.splice(e, 1);
      }),
      (i.prototype.first = function () {
        return this.waypoints[0];
      }),
      (i.prototype.last = function () {
        return this.waypoints[this.waypoints.length - 1];
      }),
      (i.findOrCreate = function (t) {
        return o[t.axis][t.name] || new i(t);
      }),
      (n.Group = i);
  })(),
  (function () {
    "use strict";
    function t(t) {
      this.$element = e(t);
    }
    var e = window.jQuery,
      i = window.Waypoint;
    e.each(
      [
        "innerHeight",
        "innerWidth",
        "off",
        "offset",
        "on",
        "outerHeight",
        "outerWidth",
        "scrollLeft",
        "scrollTop",
      ],
      function (e, i) {
        t.prototype[i] = function () {
          var t = Array.prototype.slice.call(arguments);
          return this.$element[i].apply(this.$element, t);
        };
      }
    ),
      e.each(["extend", "inArray", "isEmptyObject"], function (i, o) {
        t[o] = e[o];
      }),
      i.adapters.push({ name: "jquery", Adapter: t }),
      (i.Adapter = t);
  })(),
  (function () {
    "use strict";
    function t(t) {
      return function () {
        var i = [],
          o = arguments[0];
        return (
          t.isFunction(arguments[0]) &&
            ((o = t.extend({}, arguments[1])), (o.handler = arguments[0])),
          this.each(function () {
            var n = t.extend({}, o, { element: this });
            "string" == typeof n.context &&
              (n.context = t(this).closest(n.context)[0]),
              i.push(new e(n));
          }),
          i
        );
      };
    }
    var e = window.Waypoint;
    window.jQuery && (window.jQuery.fn.waypoint = t(window.jQuery)),
      window.Zepto && (window.Zepto.fn.waypoint = t(window.Zepto));
  })();

/*!
Waypoints Sticky Element Shortcut - 3.1.1
Copyright © 2011-2015 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blog/master/licenses.txt
*/
!(function () {
  "use strict";
  function t(s) {
    (this.options = e.extend({}, i.defaults, t.defaults, s)),
      (this.element = this.options.element),
      (this.$element = e(this.element)),
      this.createWrapper(),
      this.createWaypoint();
  }
  var e = window.jQuery,
    i = window.Waypoint;
  (t.prototype.createWaypoint = function () {
    var t = this.options.handler;
    this.waypoint = new i(
      e.extend({}, this.options, {
        element: this.wrapper,
        handler: e.proxy(function (e) {
          var i = this.options.direction.indexOf(e) > -1,
            s = i ? this.$element.outerHeight(!0) : "";
          this.$wrapper.height(s),
            this.$element.toggleClass(this.options.stuckClass, i),
            t && t.call(this, e);
        }, this),
      })
    );
  }),
    (t.prototype.createWrapper = function () {
      this.$element.wrap(this.options.wrapper),
        (this.$wrapper = this.$element.parent()),
        (this.wrapper = this.$wrapper[0]);
    }),
    (t.prototype.destroy = function () {
      this.$element.parent()[0] === this.wrapper &&
        (this.waypoint.destroy(),
        this.$element.removeClass(this.options.stuckClass).unwrap());
    }),
    (t.defaults = {
      wrapper: '<div class="sticky-wrapper" />',
      stuckClass: "stuck",
      direction: "down right",
    }),
    (i.Sticky = t);
})();

/* jquery.nicescroll
-- version 3.5.0 BETA5
-- copyright 2011-12-13 InuYaksa*2013
-- licensed under the MIT
--
-- http://areaaperta.com/nicescroll
-- https://github.com/inuyaksa/jquery.nicescroll
--
*/
!(function (e) {
  function o() {
    var e = document.getElementsByTagName("script"),
      o = e[e.length - 1].src.split("?")[0];
    return o.split("/").length > 0
      ? o.split("/").slice(0, -1).join("/") + "/"
      : "";
  }
  function t(e, o, t) {
    for (var r = 0; r < o.length; r++) t(e, o[r]);
  }
  var r = !1,
    i = !1,
    n = 5e3,
    s = 2e3,
    l = 0,
    c = e,
    d = o(),
    u = ["ms", "moz", "webkit", "o"],
    h = window.requestAnimationFrame || !1,
    p = window.cancelAnimationFrame || !1;
  if (!h)
    for (var m in u) {
      var f = u[m];
      h || (h = window[f + "RequestAnimationFrame"]),
        p ||
          (p =
            window[f + "CancelAnimationFrame"] ||
            window[f + "CancelRequestAnimationFrame"]);
    }
  var g = window.MutationObserver || window.WebKitMutationObserver || !1,
    w = {
      zindex: "auto",
      cursoropacitymin: 0,
      cursoropacitymax: 1,
      cursorcolor: "#424242",
      cursorwidth: "5px",
      cursorborder: "1px solid #fff",
      cursorborderradius: "5px",
      scrollspeed: 60,
      mousescrollstep: 24,
      touchbehavior: !1,
      hwacceleration: !0,
      usetransition: !0,
      boxzoom: !1,
      dblclickzoom: !0,
      gesturezoom: !0,
      grabcursorenabled: !0,
      autohidemode: !0,
      background: "",
      iframeautoresize: !0,
      cursorminheight: 32,
      preservenativescrolling: !0,
      railoffset: !1,
      bouncescroll: !0,
      spacebarenabled: !0,
      railpadding: { top: 0, right: 0, left: 0, bottom: 0 },
      disableoutline: !0,
      horizrailenabled: !0,
      railalign: "right",
      railvalign: "bottom",
      enabletranslate3d: !0,
      enablemousewheel: !0,
      enablekeyboard: !0,
      smoothscroll: !0,
      sensitiverail: !0,
      enablemouselockapi: !0,
      cursorfixedheight: !1,
      directionlockdeadzone: 6,
      hidecursordelay: 400,
      nativeparentscrolling: !0,
      enablescrollonselection: !0,
      overflowx: !0,
      overflowy: !0,
      cursordragspeed: 0.3,
      rtlmode: !1,
      cursordragontouch: !1,
      oneaxismousemode: "auto",
    },
    v = !1,
    y = function () {
      function e() {
        var e = ["-moz-grab", "-webkit-grab", "grab"];
        ((t.ischrome && !t.ischrome22) || t.isie) && (e = []);
        for (var r = 0; r < e.length; r++) {
          var i = e[r];
          if (((o.style.cursor = i), o.style.cursor == i)) return i;
        }
        return "url(http://www.google.com/intl/en_ALL/mapfiles/openhand.cur),n-resize";
      }
      if (v) return v;
      var o = document.createElement("DIV"),
        t = {};
      (t.haspointerlock =
        "pointerLockElement" in document ||
        "mozPointerLockElement" in document ||
        "webkitPointerLockElement" in document),
        (t.isopera = "opera" in window),
        (t.isopera12 = t.isopera && "getUserMedia" in navigator),
        (t.isoperamini =
          "[object OperaMini]" ===
          Object.prototype.toString.call(window.operamini)),
        (t.isie = "all" in document && "attachEvent" in o && !t.isopera),
        (t.isieold = t.isie && !("msInterpolationMode" in o.style)),
        (t.isie7 = !(
          !t.isie ||
          t.isieold ||
          ("documentMode" in document && 7 != document.documentMode)
        )),
        (t.isie8 =
          t.isie && "documentMode" in document && 8 == document.documentMode),
        (t.isie9 =
          t.isie && "performance" in window && document.documentMode >= 9),
        (t.isie10 =
          t.isie && "performance" in window && document.documentMode >= 10),
        (t.isie9mobile = /iemobile.9/i.test(navigator.userAgent)),
        t.isie9mobile && (t.isie9 = !1),
        (t.isie7mobile =
          !t.isie9mobile && t.isie7 && /iemobile/i.test(navigator.userAgent)),
        (t.ismozilla = "MozAppearance" in o.style),
        (t.iswebkit = "WebkitAppearance" in o.style),
        (t.ischrome = "chrome" in window),
        (t.ischrome22 = t.ischrome && t.haspointerlock),
        (t.ischrome26 = t.ischrome && "transition" in o.style),
        (t.cantouch =
          "ontouchstart" in document.documentElement ||
          "ontouchstart" in window),
        (t.hasmstouch = window.navigator.msPointerEnabled || !1),
        (t.ismac = /^mac$/i.test(navigator.platform)),
        (t.isios = t.cantouch && /iphone|ipad|ipod/i.test(navigator.platform)),
        (t.isios4 = t.isios && !("seal" in Object)),
        (t.isandroid = /android/i.test(navigator.userAgent)),
        (t.trstyle = !1),
        (t.hastransform = !1),
        (t.hastranslate3d = !1),
        (t.transitionstyle = !1),
        (t.hastransition = !1),
        (t.transitionend = !1);
      for (
        var r = [
            "transform",
            "msTransform",
            "webkitTransform",
            "MozTransform",
            "OTransform",
          ],
          i = 0;
        i < r.length;
        i++
      )
        if ("undefined" != typeof o.style[r[i]]) {
          t.trstyle = r[i];
          break;
        }
      (t.hastransform = 0 != t.trstyle),
        t.hastransform &&
          ((o.style[t.trstyle] = "translate3d(1px,2px,3px)"),
          (t.hastranslate3d = /translate3d/.test(o.style[t.trstyle]))),
        (t.transitionstyle = !1),
        (t.prefixstyle = ""),
        (t.transitionend = !1);
      for (
        var r = [
            "transition",
            "webkitTransition",
            "MozTransition",
            "OTransition",
            "OTransition",
            "msTransition",
            "KhtmlTransition",
          ],
          n = ["", "-webkit-", "-moz-", "-o-", "-o", "-ms-", "-khtml-"],
          s = [
            "transitionend",
            "webkitTransitionEnd",
            "transitionend",
            "otransitionend",
            "oTransitionEnd",
            "msTransitionEnd",
            "KhtmlTransitionEnd",
          ],
          i = 0;
        i < r.length;
        i++
      )
        if (r[i] in o.style) {
          (t.transitionstyle = r[i]),
            (t.prefixstyle = n[i]),
            (t.transitionend = s[i]);
          break;
        }
      return (
        t.ischrome26 && (t.prefixstyle = n[1]),
        (t.hastransition = t.transitionstyle),
        (t.cursorgrabvalue = e()),
        (t.hasmousecapture = "setCapture" in o),
        (t.hasMutationObserver = g !== !1),
        (o = null),
        (v = t),
        t
      );
    },
    b = function (e, o) {
      function t() {
        var e = v.doc.css(S.trstyle);
        return e && "matrix" == e.substr(0, 6)
          ? e
              .replace(/^.*\((.*)\)$/g, "$1")
              .replace(/px/g, "")
              .split(/, +/)
          : !1;
      }
      function a() {
        var e = v.win;
        if ("zIndex" in e) return e.zIndex();
        for (; e.length > 0; ) {
          if (9 == e[0].nodeType) return !1;
          var o = e.css("zIndex");
          if (!isNaN(o) && 0 != o) return parseInt(o);
          e = e.parent();
        }
        return !1;
      }
      function u(e, o, t) {
        var r = e.css(o),
          i = parseFloat(r);
        if (isNaN(i)) {
          i = z[r] || 0;
          var n =
            3 == i
              ? t
                ? v.win.outerHeight() - v.win.innerHeight()
                : v.win.outerWidth() - v.win.innerWidth()
              : 1;
          return v.isie8 && i && (i += 1), n ? i : 0;
        }
        return i;
      }
      function m(e, o, t, r) {
        v._bind(
          e,
          o,
          function (r) {
            var r = r ? r : window.event,
              i = {
                original: r,
                target: r.target || r.srcElement,
                type: "wheel",
                deltaMode: "MozMousePixelScroll" == r.type ? 0 : 1,
                deltaX: 0,
                deltaZ: 0,
                preventDefault: function () {
                  return (
                    r.preventDefault
                      ? r.preventDefault()
                      : (r.returnValue = !1),
                    !1
                  );
                },
                stopImmediatePropagation: function () {
                  r.stopImmediatePropagation
                    ? r.stopImmediatePropagation()
                    : (r.cancelBubble = !0);
                },
              };
            return (
              "mousewheel" == o
                ? ((i.deltaY = (-1 / 40) * r.wheelDelta),
                  r.wheelDeltaX && (i.deltaX = (-1 / 40) * r.wheelDeltaX))
                : (i.deltaY = r.detail),
              t.call(e, i)
            );
          },
          r
        );
      }
      function f(e, o, t) {
        var r, i;
        if (
          (0 == e.deltaMode
            ? ((r = -Math.floor(e.deltaX * (v.opt.mousescrollstep / 54))),
              (i = -Math.floor(e.deltaY * (v.opt.mousescrollstep / 54))))
            : 1 == e.deltaMode &&
              ((r = -Math.floor(e.deltaX * v.opt.mousescrollstep)),
              (i = -Math.floor(e.deltaY * v.opt.mousescrollstep))),
          o && v.opt.oneaxismousemode && 0 == r && i && ((r = i), (i = 0)),
          r &&
            (v.scrollmom && v.scrollmom.stop(),
            (v.lastdeltax += r),
            v.debounced(
              "mousewheelx",
              function () {
                var e = v.lastdeltax;
                (v.lastdeltax = 0), v.rail.drag || v.doScrollLeftBy(e);
              },
              120
            )),
          i)
        ) {
          if (v.opt.nativeparentscrolling && t && !v.ispage && !v.zoomactive)
            if (0 > i) {
              if (v.getScrollTop() >= v.page.maxh) return !0;
            } else if (v.getScrollTop() <= 0) return !0;
          v.scrollmom && v.scrollmom.stop(),
            (v.lastdeltay += i),
            v.debounced(
              "mousewheely",
              function () {
                var e = v.lastdeltay;
                (v.lastdeltay = 0), v.rail.drag || v.doScrollBy(e);
              },
              120
            );
        }
        return e.stopImmediatePropagation(), e.preventDefault();
      }
      var v = this;
      if (
        ((this.version = "3.5.0 BETA5"),
        (this.name = "nicescroll"),
        (this.me = o),
        (this.opt = { doc: c("body"), win: !1 }),
        c.extend(this.opt, w),
        (this.opt.snapbackspeed = 80),
        e)
      )
        for (var b in v.opt) "undefined" != typeof e[b] && (v.opt[b] = e[b]);
      (this.doc = v.opt.doc),
        (this.iddoc = this.doc && this.doc[0] ? this.doc[0].id || "" : ""),
        (this.ispage = /BODY|HTML/.test(
          v.opt.win ? v.opt.win[0].nodeName : this.doc[0].nodeName
        )),
        (this.haswrapper = v.opt.win !== !1),
        (this.win = v.opt.win || (this.ispage ? c(window) : this.doc)),
        (this.docscroll =
          this.ispage && !this.haswrapper ? c(window) : this.win),
        (this.body = c("body")),
        (this.viewport = !1),
        (this.isfixed = !1),
        (this.iframe = !1),
        (this.isiframe =
          "IFRAME" == this.doc[0].nodeName && "IFRAME" == this.win[0].nodeName),
        (this.istextarea = "TEXTAREA" == this.win[0].nodeName),
        (this.forcescreen = !1),
        (this.canshowonmouseevent = "scroll" != v.opt.autohidemode),
        (this.onmousedown = !1),
        (this.onmouseup = !1),
        (this.onmousemove = !1),
        (this.onmousewheel = !1),
        (this.onkeypress = !1),
        (this.ongesturezoom = !1),
        (this.onclick = !1),
        (this.onscrollstart = !1),
        (this.onscrollend = !1),
        (this.onscrollcancel = !1),
        (this.onzoomin = !1),
        (this.onzoomout = !1),
        (this.view = !1),
        (this.page = !1),
        (this.scroll = { x: 0, y: 0 }),
        (this.scrollratio = { x: 0, y: 0 }),
        (this.cursorheight = 20),
        (this.scrollvaluemax = 0),
        (this.checkrtlmode = !1),
        (this.scrollrunning = !1),
        (this.scrollmom = !1),
        (this.observer = !1),
        (this.observerremover = !1);
      do this.id = "ascrail" + s++;
      while (document.getElementById(this.id));
      (this.rail = !1),
        (this.cursor = !1),
        (this.cursorfreezed = !1),
        (this.selectiondrag = !1),
        (this.zoom = !1),
        (this.zoomactive = !1),
        (this.hasfocus = !1),
        (this.hasmousefocus = !1),
        (this.visibility = !0),
        (this.locked = !1),
        (this.hidden = !1),
        (this.cursoractive = !0),
        (this.overflowx = v.opt.overflowx),
        (this.overflowy = v.opt.overflowy),
        (this.nativescrollingarea = !1),
        (this.checkarea = 0),
        (this.events = []),
        (this.saved = {}),
        (this.delaylist = {}),
        (this.synclist = {}),
        (this.lastdeltax = 0),
        (this.lastdeltay = 0),
        (this.detected = y());
      var S = c.extend({}, this.detected);
      (this.canhwscroll = S.hastransform && v.opt.hwacceleration),
        (this.ishwscroll = this.canhwscroll && v.haswrapper),
        (this.istouchcapable = !1),
        S.cantouch &&
          S.ischrome &&
          !S.isios &&
          !S.isandroid &&
          ((this.istouchcapable = !0), (S.cantouch = !1)),
        S.cantouch &&
          S.ismozilla &&
          !S.isios &&
          !S.isandroid &&
          ((this.istouchcapable = !0), (S.cantouch = !1)),
        v.opt.enablemouselockapi ||
          ((S.hasmousecapture = !1), (S.haspointerlock = !1)),
        (this.delayed = function (e, o, t, r) {
          var i = v.delaylist[e],
            n = new Date().getTime();
          return !r && i && i.tt
            ? !1
            : (i && i.tt && clearTimeout(i.tt),
              void (i && i.last + t > n && !i.tt
                ? (v.delaylist[e] = {
                    last: n + t,
                    tt: setTimeout(function () {
                      (v.delaylist[e].tt = 0), o.call();
                    }, t),
                  })
                : (i && i.tt) ||
                  ((v.delaylist[e] = { last: n, tt: 0 }),
                  setTimeout(function () {
                    o.call();
                  }, 0))));
        }),
        (this.debounced = function (e, o, t) {
          {
            var r = v.delaylist[e];
            new Date().getTime();
          }
          (v.delaylist[e] = o),
            r ||
              setTimeout(function () {
                var o = v.delaylist[e];
                (v.delaylist[e] = !1), o.call();
              }, t);
        }),
        (this.synched = function (e, o) {
          function t() {
            v.onsync ||
              (h(function () {
                v.onsync = !1;
                for (e in v.synclist) {
                  var o = v.synclist[e];
                  o && o.call(v), (v.synclist[e] = !1);
                }
              }),
              (v.onsync = !0));
          }
          return (v.synclist[e] = o), t(), e;
        }),
        (this.unsynched = function (e) {
          v.synclist[e] && (v.synclist[e] = !1);
        }),
        (this.css = function (e, o) {
          for (var t in o) v.saved.css.push([e, t, e.css(t)]), e.css(t, o[t]);
        }),
        (this.scrollTop = function (e) {
          return "undefined" == typeof e ? v.getScrollTop() : v.setScrollTop(e);
        }),
        (this.scrollLeft = function (e) {
          return "undefined" == typeof e
            ? v.getScrollLeft()
            : v.setScrollLeft(e);
        }),
        (BezierClass = function (e, o, t, r, i, n, s) {
          (this.st = e),
            (this.ed = o),
            (this.spd = t),
            (this.p1 = r || 0),
            (this.p2 = i || 1),
            (this.p3 = n || 0),
            (this.p4 = s || 1),
            (this.ts = new Date().getTime()),
            (this.df = this.ed - this.st);
        }),
        (BezierClass.prototype = {
          B2: function (e) {
            return 3 * e * e * (1 - e);
          },
          B3: function (e) {
            return 3 * e * (1 - e) * (1 - e);
          },
          B4: function (e) {
            return (1 - e) * (1 - e) * (1 - e);
          },
          getNow: function () {
            var e = new Date().getTime(),
              o = 1 - (e - this.ts) / this.spd,
              t = this.B2(o) + this.B3(o) + this.B4(o);
            return 0 > o ? this.ed : this.st + Math.round(this.df * t);
          },
          update: function (e, o) {
            return (
              (this.st = this.getNow()),
              (this.ed = e),
              (this.spd = o),
              (this.ts = new Date().getTime()),
              (this.df = this.ed - this.st),
              this
            );
          },
        }),
        this.ishwscroll
          ? ((this.doc.translate = { x: 0, y: 0, tx: "0px", ty: "0px" }),
            S.hastranslate3d &&
              S.isios &&
              this.doc.css("-webkit-backface-visibility", "hidden"),
            (this.getScrollTop = function (e) {
              if (!e) {
                var o = t();
                if (o) return 16 == o.length ? -o[13] : -o[5];
                if (v.timerscroll && v.timerscroll.bz)
                  return v.timerscroll.bz.getNow();
              }
              return v.doc.translate.y;
            }),
            (this.getScrollLeft = function (e) {
              if (!e) {
                var o = t();
                if (o) return 16 == o.length ? -o[12] : -o[4];
                if (v.timerscroll && v.timerscroll.bh)
                  return v.timerscroll.bh.getNow();
              }
              return v.doc.translate.x;
            }),
            (this.notifyScrollEvent = document.createEvent
              ? function (e) {
                  var o = document.createEvent("UIEvents");
                  o.initUIEvent("scroll", !1, !0, window, 1),
                    e.dispatchEvent(o);
                }
              : document.fireEvent
              ? function (e) {
                  var o = document.createEventObject();
                  e.fireEvent("onscroll"), (o.cancelBubble = !0);
                }
              : function () {}),
            S.hastranslate3d && v.opt.enabletranslate3d
              ? ((this.setScrollTop = function (e, o) {
                  (v.doc.translate.y = e),
                    (v.doc.translate.ty = -1 * e + "px"),
                    v.doc.css(
                      S.trstyle,
                      "translate3d(" +
                        v.doc.translate.tx +
                        "," +
                        v.doc.translate.ty +
                        ",0px)"
                    ),
                    o || v.notifyScrollEvent(v.win[0]);
                }),
                (this.setScrollLeft = function (e, o) {
                  (v.doc.translate.x = e),
                    (v.doc.translate.tx = -1 * e + "px"),
                    v.doc.css(
                      S.trstyle,
                      "translate3d(" +
                        v.doc.translate.tx +
                        "," +
                        v.doc.translate.ty +
                        ",0px)"
                    ),
                    o || v.notifyScrollEvent(v.win[0]);
                }))
              : ((this.setScrollTop = function (e, o) {
                  (v.doc.translate.y = e),
                    (v.doc.translate.ty = -1 * e + "px"),
                    v.doc.css(
                      S.trstyle,
                      "translate(" +
                        v.doc.translate.tx +
                        "," +
                        v.doc.translate.ty +
                        ")"
                    ),
                    o || v.notifyScrollEvent(v.win[0]);
                }),
                (this.setScrollLeft = function (e, o) {
                  (v.doc.translate.x = e),
                    (v.doc.translate.tx = -1 * e + "px"),
                    v.doc.css(
                      S.trstyle,
                      "translate(" +
                        v.doc.translate.tx +
                        "," +
                        v.doc.translate.ty +
                        ")"
                    ),
                    o || v.notifyScrollEvent(v.win[0]);
                })))
          : ((this.getScrollTop = function () {
              return v.docscroll.scrollTop();
            }),
            (this.setScrollTop = function (e) {
              return v.docscroll.scrollTop(e);
            }),
            (this.getScrollLeft = function () {
              return v.docscroll.scrollLeft();
            }),
            (this.setScrollLeft = function (e) {
              return v.docscroll.scrollLeft(e);
            })),
        (this.getTarget = function (e) {
          return e
            ? e.target
              ? e.target
              : e.srcElement
              ? e.srcElement
              : !1
            : !1;
        }),
        (this.hasParent = function (e, o) {
          if (!e) return !1;
          for (var t = e.target || e.srcElement || e || !1; t && t.id != o; )
            t = t.parentNode || !1;
          return t !== !1;
        });
      var z = { thin: 1, medium: 3, thick: 5 };
      (this.getOffset = function () {
        if (v.isfixed)
          return {
            top: parseFloat(v.win.css("top")),
            left: parseFloat(v.win.css("left")),
          };
        if (!v.viewport) return v.win.offset();
        var e = v.win.offset(),
          o = v.viewport.offset();
        return {
          top: e.top - o.top + v.viewport.scrollTop(),
          left: e.left - o.left + v.viewport.scrollLeft(),
        };
      }),
        (this.updateScrollBar = function (e) {
          if (v.ishwscroll)
            v.rail.css({ height: v.win.innerHeight() }),
              v.railh && v.railh.css({ width: v.win.innerWidth() });
          else {
            var o = v.getOffset(),
              t = { top: o.top, left: o.left };
            t.top += u(v.win, "border-top-width", !0);
            {
              (v.win.outerWidth() - v.win.innerWidth()) / 2;
            }
            t.left += v.rail.align
              ? v.win.outerWidth() -
                u(v.win, "border-right-width") -
                v.rail.width
              : u(v.win, "border-left-width");
            var r = v.opt.railoffset;
            if (
              (r &&
                (r.top && (t.top += r.top),
                v.rail.align && r.left && (t.left += r.left)),
              v.locked ||
                v.rail.css({
                  top: t.top,
                  left: t.left,
                  height: e ? e.h : v.win.innerHeight(),
                }),
              v.zoom &&
                v.zoom.css({
                  top: t.top + 1,
                  left:
                    1 == v.rail.align ? t.left - 20 : t.left + v.rail.width + 4,
                }),
              v.railh && !v.locked)
            ) {
              var t = { top: o.top, left: o.left },
                i = v.railh.align
                  ? t.top +
                    u(v.win, "border-top-width", !0) +
                    v.win.innerHeight() -
                    v.railh.height
                  : t.top + u(v.win, "border-top-width", !0),
                n = t.left + u(v.win, "border-left-width");
              v.railh.css({ top: i, left: n, width: v.railh.width });
            }
          }
        }),
        (this.doRailClick = function (e, o, t) {
          var r, i, n, s;
          v.locked ||
            (v.cancelEvent(e),
            o
              ? ((r = t ? v.doScrollLeft : v.doScrollTop),
                (n = t
                  ? (e.pageX - v.railh.offset().left - v.cursorwidth / 2) *
                    v.scrollratio.x
                  : (e.pageY - v.rail.offset().top - v.cursorheight / 2) *
                    v.scrollratio.y),
                r(n))
              : ((r = t ? v.doScrollLeftBy : v.doScrollBy),
                (n = t ? v.scroll.x : v.scroll.y),
                (s = t
                  ? e.pageX - v.railh.offset().left
                  : e.pageY - v.rail.offset().top),
                (i = t ? v.view.w : v.view.h),
                r(n >= s ? i : -i)));
        }),
        (v.hasanimationframe = h),
        (v.hascancelanimationframe = p),
        v.hasanimationframe
          ? v.hascancelanimationframe ||
            (p = function () {
              v.cancelAnimationFrame = !0;
            })
          : ((h = function (e) {
              return setTimeout(e, 15 - (Math.floor(+new Date() / 1e3) % 16));
            }),
            (p = clearInterval)),
        (this.init = function () {
          function e(o) {
            if (v.selectiondrag) {
              if (o) {
                var t = v.win.outerHeight(),
                  r = o.pageY - v.selectiondrag.top;
                r > 0 && t > r && (r = 0),
                  r >= t && (r -= t),
                  (v.selectiondrag.df = r);
              }
              if (0 != v.selectiondrag.df) {
                var i = 2 * -Math.floor(v.selectiondrag.df / 6);
                v.doScrollBy(i),
                  v.debounced(
                    "doselectionscroll",
                    function () {
                      e();
                    },
                    50
                  );
              }
            }
          }
          function o() {
            v.iframexd = !1;
            try {
              {
                var e =
                  "contentDocument" in this
                    ? this.contentDocument
                    : this.contentWindow.document;
                e.domain;
              }
            } catch (o) {
              (v.iframexd = !0), (e = !1);
            }
            if (v.iframexd)
              return (
                "console" in window &&
                  console.log("NiceScroll error: policy restriced iframe"),
                !0
              );
            if (
              ((v.forcescreen = !0),
              v.isiframe &&
                ((v.iframe = {
                  doc: c(e),
                  html: v.doc.contents().find("html")[0],
                  body: v.doc.contents().find("body")[0],
                }),
                (v.getContentSize = function () {
                  return {
                    w: Math.max(
                      v.iframe.html.scrollWidth,
                      v.iframe.body.scrollWidth
                    ),
                    h: Math.max(
                      v.iframe.html.scrollHeight,
                      v.iframe.body.scrollHeight
                    ),
                  };
                }),
                (v.docscroll = c(v.iframe.body))),
              !S.isios && v.opt.iframeautoresize && !v.isiframe)
            ) {
              v.win.scrollTop(0), v.doc.height("");
              var t = Math.max(
                e.getElementsByTagName("html")[0].scrollHeight,
                e.body.scrollHeight
              );
              v.doc.height(t);
            }
            v.lazyResize(30),
              S.isie7 && v.css(c(v.iframe.html), { "overflow-y": "hidden" }),
              v.css(c(v.iframe.body), { "overflow-y": "hidden" }),
              S.isios &&
                v.haswrapper &&
                (v.css(c(e.body), {
                  "-webkit-transform": "translate3d(0,0,0)",
                }),
                console.log(1)),
              "contentWindow" in this
                ? v.bind(this.contentWindow, "scroll", v.onscroll)
                : v.bind(e, "scroll", v.onscroll),
              v.opt.enablemousewheel && v.bind(e, "mousewheel", v.onmousewheel),
              v.opt.enablekeyboard &&
                v.bind(e, S.isopera ? "keypress" : "keydown", v.onkeypress),
              (S.cantouch || v.opt.touchbehavior) &&
                (v.bind(e, "mousedown", v.ontouchstart),
                v.bind(e, "mousemove", function (e) {
                  v.ontouchmove(e, !0);
                }),
                v.opt.grabcursorenabled &&
                  S.cursorgrabvalue &&
                  v.css(c(e.body), { cursor: S.cursorgrabvalue })),
              v.bind(e, "mouseup", v.ontouchend),
              v.zoom &&
                (v.opt.dblclickzoom && v.bind(e, "dblclick", v.doZoom),
                v.ongesturezoom && v.bind(e, "gestureend", v.ongesturezoom));
          }
          if (((v.saved.css = []), S.isie7mobile)) return !0;
          if (S.isoperamini) return !0;
          if (
            (S.hasmstouch &&
              v.css(v.ispage ? c("html") : v.win, {
                "-ms-touch-action": "none",
              }),
            (v.zindex = "auto"),
            (v.zindex =
              v.ispage || "auto" != v.opt.zindex
                ? v.opt.zindex
                : a() || "auto"),
            v.ispage || "auto" == v.zindex || (v.zindex > l && (l = v.zindex)),
            v.isie &&
              0 == v.zindex &&
              "auto" == v.opt.zindex &&
              (v.zindex = "auto"),
            !v.ispage || (!S.cantouch && !S.isieold && !S.isie9mobile))
          ) {
            var t = v.docscroll;
            v.ispage && (t = v.haswrapper ? v.win : v.doc),
              S.isie9mobile || v.css(t, { "overflow-y": "hidden" }),
              v.ispage &&
                S.isie7 &&
                ("BODY" == v.doc[0].nodeName
                  ? v.css(c("html"), { "overflow-y": "hidden" })
                  : "HTML" == v.doc[0].nodeName &&
                    v.css(c("body"), { "overflow-y": "hidden" })),
              !S.isios ||
                v.ispage ||
                v.haswrapper ||
                v.css(c("body"), { "-webkit-overflow-scrolling": "touch" });
            var s = c(document.createElement("div"));
            s.css({
              position: "relative",
              top: 0,
              float: "right",
              width: v.opt.cursorwidth,
              height: "0px",
              "background-color": v.opt.cursorcolor,
              border: v.opt.cursorborder,
              "background-clip": "padding-box",
              "-webkit-border-radius": v.opt.cursorborderradius,
              "-moz-border-radius": v.opt.cursorborderradius,
              "border-radius": v.opt.cursorborderradius,
            }),
              (s.hborder = parseFloat(s.outerHeight() - s.innerHeight())),
              (v.cursor = s);
            var u = c(document.createElement("div"));
            u.attr("id", v.id), u.addClass("nicescroll-rails");
            var h,
              p,
              m = ["left", "right"];
            for (var f in m)
              (p = m[f]),
                (h = v.opt.railpadding[p]),
                h
                  ? u.css("padding-" + p, h + "px")
                  : (v.opt.railpadding[p] = 0);
            u.append(s),
              (u.width =
                Math.max(parseFloat(v.opt.cursorwidth), s.outerWidth()) +
                v.opt.railpadding.left +
                v.opt.railpadding.right),
              u.css({
                width: u.width + "px",
                zIndex: v.zindex,
                background: v.opt.background,
                cursor: "default",
              }),
              (u.visibility = !0),
              (u.scrollable = !0),
              (u.align = "left" == v.opt.railalign ? 0 : 1),
              (v.rail = u),
              (v.rail.drag = !1);
            var w = !1;
            if (
              (!v.opt.boxzoom ||
                v.ispage ||
                S.isieold ||
                ((w = document.createElement("div")),
                v.bind(w, "click", v.doZoom),
                (v.zoom = c(w)),
                v.zoom.css({
                  cursor: "pointer",
                  "z-index": v.zindex,
                  backgroundImage: "url(" + d + "zoomico.png)",
                  height: 18,
                  width: 18,
                  backgroundPosition: "0px 0px",
                }),
                v.opt.dblclickzoom && v.bind(v.win, "dblclick", v.doZoom),
                S.cantouch &&
                  v.opt.gesturezoom &&
                  ((v.ongesturezoom = function (e) {
                    return (
                      e.scale > 1.5 && v.doZoomIn(e),
                      e.scale < 0.8 && v.doZoomOut(e),
                      v.cancelEvent(e)
                    );
                  }),
                  v.bind(v.win, "gestureend", v.ongesturezoom))),
              (v.railh = !1),
              v.opt.horizrailenabled)
            ) {
              v.css(t, { "overflow-x": "hidden" });
              var s = c(document.createElement("div"));
              s.css({
                position: "relative",
                top: 0,
                height: v.opt.cursorwidth,
                width: "0px",
                "background-color": v.opt.cursorcolor,
                border: v.opt.cursorborder,
                "background-clip": "padding-box",
                "-webkit-border-radius": v.opt.cursorborderradius,
                "-moz-border-radius": v.opt.cursorborderradius,
                "border-radius": v.opt.cursorborderradius,
              }),
                (s.wborder = parseFloat(s.outerWidth() - s.innerWidth())),
                (v.cursorh = s);
              var y = c(document.createElement("div"));
              y.attr("id", v.id + "-hr"),
                y.addClass("nicescroll-rails"),
                (y.height = Math.max(
                  parseFloat(v.opt.cursorwidth),
                  s.outerHeight()
                )),
                y.css({
                  height: y.height + "px",
                  zIndex: v.zindex,
                  background: v.opt.background,
                }),
                y.append(s),
                (y.visibility = !0),
                (y.scrollable = !0),
                (y.align = "top" == v.opt.railvalign ? 0 : 1),
                (v.railh = y),
                (v.railh.drag = !1);
            }
            if (v.ispage)
              u.css({ position: "fixed", top: "0px", height: "100%" }),
                u.css(u.align ? { right: "0px" } : { left: "0px" }),
                v.body.append(u),
                v.railh &&
                  (y.css({ position: "fixed", left: "0px", width: "100%" }),
                  y.css(y.align ? { bottom: "0px" } : { top: "0px" }),
                  v.body.append(y));
            else {
              if (v.ishwscroll) {
                "static" == v.win.css("position") &&
                  v.css(v.win, { position: "relative" });
                var b = "HTML" == v.win[0].nodeName ? v.body : v.win;
                v.zoom &&
                  (v.zoom.css({
                    position: "absolute",
                    top: 1,
                    right: 0,
                    "margin-right": u.width + 4,
                  }),
                  b.append(v.zoom)),
                  u.css({ position: "absolute", top: 0 }),
                  u.css(u.align ? { right: 0 } : { left: 0 }),
                  b.append(u),
                  y &&
                    (y.css({ position: "absolute", left: 0, bottom: 0 }),
                    y.css(y.align ? { bottom: 0 } : { top: 0 }),
                    b.append(y));
              } else {
                v.isfixed = "fixed" == v.win.css("position");
                var z = v.isfixed ? "fixed" : "absolute";
                v.isfixed || (v.viewport = v.getViewport(v.win[0])),
                  v.viewport &&
                    ((v.body = v.viewport),
                    0 == /relative|absolute/.test(v.viewport.css("position")) &&
                      v.css(v.viewport, { position: "relative" })),
                  u.css({ position: z }),
                  v.zoom && v.zoom.css({ position: z }),
                  v.updateScrollBar(),
                  v.body.append(u),
                  v.zoom && v.body.append(v.zoom),
                  v.railh && (y.css({ position: z }), v.body.append(y));
              }
              S.isios &&
                v.css(v.win, {
                  "-webkit-tap-highlight-color": "rgba(0,0,0,0)",
                  "-webkit-touch-callout": "none",
                }),
                S.isie &&
                  v.opt.disableoutline &&
                  v.win.attr("hideFocus", "true"),
                S.iswebkit &&
                  v.opt.disableoutline &&
                  v.win.css({ outline: "none" });
            }
            if (
              (v.opt.autohidemode === !1
                ? ((v.autohidedom = !1),
                  v.rail.css({ opacity: v.opt.cursoropacitymax }),
                  v.railh && v.railh.css({ opacity: v.opt.cursoropacitymax }))
                : v.opt.autohidemode === !0
                ? ((v.autohidedom = c().add(v.rail)),
                  S.isie8 && (v.autohidedom = v.autohidedom.add(v.cursor)),
                  v.railh && (v.autohidedom = v.autohidedom.add(v.railh)),
                  v.railh &&
                    S.isie8 &&
                    (v.autohidedom = v.autohidedom.add(v.cursorh)))
                : "scroll" == v.opt.autohidemode
                ? ((v.autohidedom = c().add(v.rail)),
                  v.railh && (v.autohidedom = v.autohidedom.add(v.railh)))
                : "cursor" == v.opt.autohidemode
                ? ((v.autohidedom = c().add(v.cursor)),
                  v.railh && (v.autohidedom = v.autohidedom.add(v.cursorh)))
                : "hidden" == v.opt.autohidemode &&
                  ((v.autohidedom = !1), v.hide(), (v.locked = !1)),
              S.isie9mobile)
            ) {
              (v.scrollmom = new x(v)),
                (v.onmangotouch = function () {
                  var e = v.getScrollTop(),
                    o = v.getScrollLeft();
                  if (
                    e == v.scrollmom.lastscrolly &&
                    o == v.scrollmom.lastscrollx
                  )
                    return !0;
                  var t = e - v.mangotouch.sy,
                    r = o - v.mangotouch.sx,
                    i = Math.round(Math.sqrt(Math.pow(r, 2) + Math.pow(t, 2)));
                  if (0 != i) {
                    var n = 0 > t ? -1 : 1,
                      s = 0 > r ? -1 : 1,
                      l = +new Date();
                    if (
                      (v.mangotouch.lazy && clearTimeout(v.mangotouch.lazy),
                      l - v.mangotouch.tm > 80 ||
                        v.mangotouch.dry != n ||
                        v.mangotouch.drx != s)
                    )
                      v.scrollmom.stop(),
                        v.scrollmom.reset(o, e),
                        (v.mangotouch.sy = e),
                        (v.mangotouch.ly = e),
                        (v.mangotouch.sx = o),
                        (v.mangotouch.lx = o),
                        (v.mangotouch.dry = n),
                        (v.mangotouch.drx = s),
                        (v.mangotouch.tm = l);
                    else {
                      v.scrollmom.stop(),
                        v.scrollmom.update(
                          v.mangotouch.sx - r,
                          v.mangotouch.sy - t
                        );
                      {
                        l - v.mangotouch.tm;
                      }
                      v.mangotouch.tm = l;
                      var a = Math.max(
                        Math.abs(v.mangotouch.ly - e),
                        Math.abs(v.mangotouch.lx - o)
                      );
                      (v.mangotouch.ly = e),
                        (v.mangotouch.lx = o),
                        a > 2 &&
                          (v.mangotouch.lazy = setTimeout(function () {
                            (v.mangotouch.lazy = !1),
                              (v.mangotouch.dry = 0),
                              (v.mangotouch.drx = 0),
                              (v.mangotouch.tm = 0),
                              v.scrollmom.doMomentum(30);
                          }, 100));
                    }
                  }
                });
              var T = v.getScrollTop(),
                k = v.getScrollLeft();
              (v.mangotouch = {
                sy: T,
                ly: T,
                dry: 0,
                sx: k,
                lx: k,
                drx: 0,
                lazy: !1,
                tm: 0,
              }),
                v.bind(v.docscroll, "scroll", v.onmangotouch);
            } else {
              if (
                S.cantouch ||
                v.istouchcapable ||
                v.opt.touchbehavior ||
                S.hasmstouch
              ) {
                (v.scrollmom = new x(v)),
                  (v.ontouchstart = function (e) {
                    if (e.pointerType && 2 != e.pointerType) return !1;
                    if (!v.locked) {
                      if (S.hasmstouch)
                        for (var o = e.target ? e.target : !1; o; ) {
                          var t = c(o).getNiceScroll();
                          if (t.length > 0 && t[0].me == v.me) break;
                          if (t.length > 0) return !1;
                          if ("DIV" == o.nodeName && o.id == v.id) break;
                          o = o.parentNode ? o.parentNode : !1;
                        }
                      v.cancelScroll();
                      var o = v.getTarget(e);
                      if (o) {
                        var r =
                          /INPUT/i.test(o.nodeName) && /range/i.test(o.type);
                        if (r) return v.stopPropagation(e);
                      }
                      if (
                        (!("clientX" in e) &&
                          "changedTouches" in e &&
                          ((e.clientX = e.changedTouches[0].clientX),
                          (e.clientY = e.changedTouches[0].clientY)),
                        v.forcescreen)
                      ) {
                        var i = e,
                          e = { original: e.original ? e.original : e };
                        (e.clientX = i.screenX), (e.clientY = i.screenY);
                      }
                      if (
                        ((v.rail.drag = {
                          x: e.clientX,
                          y: e.clientY,
                          sx: v.scroll.x,
                          sy: v.scroll.y,
                          st: v.getScrollTop(),
                          sl: v.getScrollLeft(),
                          pt: 2,
                          dl: !1,
                        }),
                        v.ispage || !v.opt.directionlockdeadzone)
                      )
                        v.rail.drag.dl = "f";
                      else {
                        var n = { w: c(window).width(), h: c(window).height() },
                          s = {
                            w: Math.max(
                              document.body.scrollWidth,
                              document.documentElement.scrollWidth
                            ),
                            h: Math.max(
                              document.body.scrollHeight,
                              document.documentElement.scrollHeight
                            ),
                          },
                          l = Math.max(0, s.h - n.h),
                          a = Math.max(0, s.w - n.w);
                        (v.rail.drag.ck =
                          !v.rail.scrollable && v.railh.scrollable
                            ? l > 0
                              ? "v"
                              : !1
                            : v.rail.scrollable && !v.railh.scrollable && a > 0
                            ? "h"
                            : !1),
                          v.rail.drag.ck || (v.rail.drag.dl = "f");
                      }
                      if (v.opt.touchbehavior && v.isiframe && S.isie) {
                        var d = v.win.position();
                        (v.rail.drag.x += d.left), (v.rail.drag.y += d.top);
                      }
                      if (
                        ((v.hasmoving = !1),
                        (v.lastmouseup = !1),
                        v.scrollmom.reset(e.clientX, e.clientY),
                        !S.cantouch && !this.istouchcapable && !S.hasmstouch)
                      ) {
                        var u = o
                          ? /INPUT|SELECT|TEXTAREA/i.test(o.nodeName)
                          : !1;
                        if (!u)
                          return (
                            !v.ispage && S.hasmousecapture && o.setCapture(),
                            v.opt.touchbehavior
                              ? v.cancelEvent(e)
                              : v.stopPropagation(e)
                          );
                        /SUBMIT|CANCEL|BUTTON/i.test(c(o).attr("type")) &&
                          ((pc = { tg: o, click: !1 }), (v.preventclick = pc));
                      }
                    }
                  }),
                  (v.ontouchend = function (e) {
                    return e.pointerType && 2 != e.pointerType
                      ? !1
                      : v.rail.drag &&
                        2 == v.rail.drag.pt &&
                        (v.scrollmom.doMomentum(),
                        (v.rail.drag = !1),
                        v.hasmoving &&
                          ((v.hasmoving = !1),
                          (v.lastmouseup = !0),
                          v.hideCursor(),
                          S.hasmousecapture && document.releaseCapture(),
                          !S.cantouch))
                      ? v.cancelEvent(e)
                      : void 0;
                  });
                var M = v.opt.touchbehavior && v.isiframe && !S.hasmousecapture;
                v.ontouchmove = function (e, o) {
                  if (e.pointerType && 2 != e.pointerType) return !1;
                  if (v.rail.drag && 2 == v.rail.drag.pt) {
                    if (S.cantouch && "undefined" == typeof e.original)
                      return !0;
                    (v.hasmoving = !0),
                      v.preventclick &&
                        !v.preventclick.click &&
                        ((v.preventclick.click =
                          v.preventclick.tg.onclick || !1),
                        (v.preventclick.tg.onclick = v.onpreventclick));
                    var t = c.extend({ original: e }, e);
                    if (
                      ((e = t),
                      "changedTouches" in e &&
                        ((e.clientX = e.changedTouches[0].clientX),
                        (e.clientY = e.changedTouches[0].clientY)),
                      v.forcescreen)
                    ) {
                      var r = e,
                        e = { original: e.original ? e.original : e };
                      (e.clientX = r.screenX), (e.clientY = r.screenY);
                    }
                    var i = (ofy = 0);
                    if (M && !o) {
                      var n = v.win.position();
                      (i = -n.left), (ofy = -n.top);
                    }
                    var s = e.clientY + ofy,
                      l = s - v.rail.drag.y,
                      a = e.clientX + i,
                      d = a - v.rail.drag.x,
                      u = v.rail.drag.st - l;
                    if (
                      (v.ishwscroll && v.opt.bouncescroll
                        ? 0 > u
                          ? (u = Math.round(u / 2))
                          : u > v.page.maxh &&
                            (u =
                              v.page.maxh + Math.round((u - v.page.maxh) / 2))
                        : (0 > u && ((u = 0), (s = 0)),
                          u > v.page.maxh && ((u = v.page.maxh), (s = 0))),
                      v.railh && v.railh.scrollable)
                    ) {
                      var h = v.rail.drag.sl - d;
                      v.ishwscroll && v.opt.bouncescroll
                        ? 0 > h
                          ? (h = Math.round(h / 2))
                          : h > v.page.maxw &&
                            (h =
                              v.page.maxw + Math.round((h - v.page.maxw) / 2))
                        : (0 > h && ((h = 0), (a = 0)),
                          h > v.page.maxw && ((h = v.page.maxw), (a = 0)));
                    }
                    var p = !1;
                    if (v.rail.drag.dl)
                      (p = !0),
                        "v" == v.rail.drag.dl
                          ? (h = v.rail.drag.sl)
                          : "h" == v.rail.drag.dl && (u = v.rail.drag.st);
                    else {
                      var m = Math.abs(l),
                        f = Math.abs(d),
                        g = v.opt.directionlockdeadzone;
                      if ("v" == v.rail.drag.ck) {
                        if (m > g && 0.3 * m >= f)
                          return (v.rail.drag = !1), !0;
                        f > g &&
                          ((v.rail.drag.dl = "f"),
                          c("body").scrollTop(c("body").scrollTop()));
                      } else if ("h" == v.rail.drag.ck) {
                        if (f > g && 0.3 * f >= m)
                          return (v.rail.drag = !1), !0;
                        m > g &&
                          ((v.rail.drag.dl = "f"),
                          c("body").scrollLeft(c("body").scrollLeft()));
                      }
                    }
                    if (
                      (v.synched("touchmove", function () {
                        v.rail.drag &&
                          2 == v.rail.drag.pt &&
                          (v.prepareTransition && v.prepareTransition(0),
                          v.rail.scrollable && v.setScrollTop(u),
                          v.scrollmom.update(a, s),
                          v.railh && v.railh.scrollable
                            ? (v.setScrollLeft(h), v.showCursor(u, h))
                            : v.showCursor(u),
                          S.isie10 && document.selection.clear());
                      }),
                      S.ischrome && v.istouchcapable && (p = !1),
                      p)
                    )
                      return v.cancelEvent(e);
                  }
                };
              }
              (v.onmousedown = function (e, o) {
                if (!v.rail.drag || 1 == v.rail.drag.pt) {
                  if (v.locked) return v.cancelEvent(e);
                  v.cancelScroll(),
                    (v.rail.drag = {
                      x: e.clientX,
                      y: e.clientY,
                      sx: v.scroll.x,
                      sy: v.scroll.y,
                      pt: 1,
                      hr: !!o,
                    });
                  var t = v.getTarget(e);
                  return (
                    !v.ispage && S.hasmousecapture && t.setCapture(),
                    v.isiframe &&
                      !S.hasmousecapture &&
                      ((v.saved.csspointerevents = v.doc.css("pointer-events")),
                      v.css(v.doc, { "pointer-events": "none" })),
                    v.cancelEvent(e)
                  );
                }
              }),
                (v.onmouseup = function (e) {
                  if (v.rail.drag) {
                    if (
                      (S.hasmousecapture && document.releaseCapture(),
                      v.isiframe &&
                        !S.hasmousecapture &&
                        v.doc.css("pointer-events", v.saved.csspointerevents),
                      1 != v.rail.drag.pt)
                    )
                      return;
                    return (v.rail.drag = !1), v.cancelEvent(e);
                  }
                }),
                (v.onmousemove = function (e) {
                  if (v.rail.drag) {
                    if (1 != v.rail.drag.pt) return;
                    if (S.ischrome && 0 == e.which) return v.onmouseup(e);
                    if (((v.cursorfreezed = !0), v.rail.drag.hr)) {
                      (v.scroll.x =
                        v.rail.drag.sx + (e.clientX - v.rail.drag.x)),
                        v.scroll.x < 0 && (v.scroll.x = 0);
                      var o = v.scrollvaluemaxw;
                      v.scroll.x > o && (v.scroll.x = o);
                    } else {
                      (v.scroll.y =
                        v.rail.drag.sy + (e.clientY - v.rail.drag.y)),
                        v.scroll.y < 0 && (v.scroll.y = 0);
                      var t = v.scrollvaluemax;
                      v.scroll.y > t && (v.scroll.y = t);
                    }
                    return (
                      v.synched("mousemove", function () {
                        v.rail.drag &&
                          1 == v.rail.drag.pt &&
                          (v.showCursor(),
                          v.rail.drag.hr
                            ? v.doScrollLeft(
                                Math.round(v.scroll.x * v.scrollratio.x),
                                v.opt.cursordragspeed
                              )
                            : v.doScrollTop(
                                Math.round(v.scroll.y * v.scrollratio.y),
                                v.opt.cursordragspeed
                              ));
                      }),
                      v.cancelEvent(e)
                    );
                  }
                }),
                S.cantouch || v.opt.touchbehavior
                  ? ((v.onpreventclick = function (e) {
                      return v.preventclick
                        ? ((v.preventclick.tg.onclick = v.preventclick.click),
                          (v.preventclick = !1),
                          v.cancelEvent(e))
                        : void 0;
                    }),
                    v.bind(v.win, "mousedown", v.ontouchstart),
                    (v.onclick = S.isios
                      ? !1
                      : function (e) {
                          return v.lastmouseup
                            ? ((v.lastmouseup = !1), v.cancelEvent(e))
                            : !0;
                        }),
                    v.opt.grabcursorenabled &&
                      S.cursorgrabvalue &&
                      (v.css(v.ispage ? v.doc : v.win, {
                        cursor: S.cursorgrabvalue,
                      }),
                      v.css(v.rail, { cursor: S.cursorgrabvalue })))
                  : ((v.hasTextSelected =
                      "getSelection" in document
                        ? function () {
                            return document.getSelection().rangeCount > 0;
                          }
                        : "selection" in document
                        ? function () {
                            return "None" != document.selection.type;
                          }
                        : function () {
                            return !1;
                          }),
                    (v.onselectionstart = function () {
                      v.ispage || (v.selectiondrag = v.win.offset());
                    }),
                    (v.onselectionend = function () {
                      v.selectiondrag = !1;
                    }),
                    (v.onselectiondrag = function (o) {
                      v.selectiondrag &&
                        v.hasTextSelected() &&
                        v.debounced(
                          "selectionscroll",
                          function () {
                            e(o);
                          },
                          250
                        );
                    })),
                S.hasmstouch &&
                  (v.css(v.rail, { "-ms-touch-action": "none" }),
                  v.css(v.cursor, { "-ms-touch-action": "none" }),
                  v.bind(v.win, "MSPointerDown", v.ontouchstart),
                  v.bind(document, "MSPointerUp", v.ontouchend),
                  v.bind(document, "MSPointerMove", v.ontouchmove),
                  v.bind(v.cursor, "MSGestureHold", function (e) {
                    e.preventDefault();
                  }),
                  v.bind(v.cursor, "contextmenu", function (e) {
                    e.preventDefault();
                  })),
                this.istouchcapable &&
                  (v.bind(v.win, "touchstart", v.ontouchstart),
                  v.bind(document, "touchend", v.ontouchend),
                  v.bind(document, "touchcancel", v.ontouchend),
                  v.bind(document, "touchmove", v.ontouchmove)),
                v.bind(v.cursor, "mousedown", v.onmousedown),
                v.bind(v.cursor, "mouseup", v.onmouseup),
                v.railh &&
                  (v.bind(v.cursorh, "mousedown", function (e) {
                    v.onmousedown(e, !0);
                  }),
                  v.bind(v.cursorh, "mouseup", function (e) {
                    return v.rail.drag && 2 == v.rail.drag.pt
                      ? void 0
                      : ((v.rail.drag = !1),
                        (v.hasmoving = !1),
                        v.hideCursor(),
                        S.hasmousecapture && document.releaseCapture(),
                        v.cancelEvent(e));
                  })),
                (v.opt.cursordragontouch ||
                  (!S.cantouch && !v.opt.touchbehavior)) &&
                  (v.rail.css({ cursor: "default" }),
                  v.railh && v.railh.css({ cursor: "default" }),
                  v.jqbind(v.rail, "mouseenter", function () {
                    v.canshowonmouseevent && v.showCursor(),
                      (v.rail.active = !0);
                  }),
                  v.jqbind(v.rail, "mouseleave", function () {
                    (v.rail.active = !1), v.rail.drag || v.hideCursor();
                  }),
                  v.opt.sensitiverail &&
                    (v.bind(v.rail, "click", function (e) {
                      v.doRailClick(e, !1, !1);
                    }),
                    v.bind(v.rail, "dblclick", function (e) {
                      v.doRailClick(e, !0, !1);
                    }),
                    v.bind(v.cursor, "click", function (e) {
                      v.cancelEvent(e);
                    }),
                    v.bind(v.cursor, "dblclick", function (e) {
                      v.cancelEvent(e);
                    })),
                  v.railh &&
                    (v.jqbind(v.railh, "mouseenter", function () {
                      v.canshowonmouseevent && v.showCursor(),
                        (v.rail.active = !0);
                    }),
                    v.jqbind(v.railh, "mouseleave", function () {
                      (v.rail.active = !1), v.rail.drag || v.hideCursor();
                    }),
                    v.opt.sensitiverail &&
                      (v.bind(v.railh, "click", function (e) {
                        v.doRailClick(e, !1, !0);
                      }),
                      v.bind(v.railh, "dblclick", function (e) {
                        v.doRailClick(e, !0, !0);
                      }),
                      v.bind(v.cursorh, "click", function (e) {
                        v.cancelEvent(e);
                      }),
                      v.bind(v.cursorh, "dblclick", function (e) {
                        v.cancelEvent(e);
                      })))),
                S.cantouch || v.opt.touchbehavior
                  ? (v.bind(
                      S.hasmousecapture ? v.win : document,
                      "mouseup",
                      v.ontouchend
                    ),
                    v.bind(document, "mousemove", v.ontouchmove),
                    v.onclick && v.bind(document, "click", v.onclick),
                    v.opt.cursordragontouch &&
                      (v.bind(v.cursor, "mousedown", v.onmousedown),
                      v.bind(v.cursor, "mousemove", v.onmousemove),
                      v.cursorh &&
                        v.bind(v.cursorh, "mousedown", v.onmousedown),
                      v.cursorh &&
                        v.bind(v.cursorh, "mousemove", v.onmousemove)))
                  : (v.bind(
                      S.hasmousecapture ? v.win : document,
                      "mouseup",
                      v.onmouseup
                    ),
                    v.bind(document, "mousemove", v.onmousemove),
                    v.onclick && v.bind(document, "click", v.onclick),
                    !v.ispage &&
                      v.opt.enablescrollonselection &&
                      (v.bind(v.win[0], "mousedown", v.onselectionstart),
                      v.bind(document, "mouseup", v.onselectionend),
                      v.bind(v.cursor, "mouseup", v.onselectionend),
                      v.cursorh &&
                        v.bind(v.cursorh, "mouseup", v.onselectionend),
                      v.bind(document, "mousemove", v.onselectiondrag)),
                    v.zoom &&
                      (v.jqbind(v.zoom, "mouseenter", function () {
                        v.canshowonmouseevent && v.showCursor(),
                          (v.rail.active = !0);
                      }),
                      v.jqbind(v.zoom, "mouseleave", function () {
                        (v.rail.active = !1), v.rail.drag || v.hideCursor();
                      }))),
                v.opt.enablemousewheel &&
                  (v.isiframe ||
                    v.bind(
                      S.isie && v.ispage ? document : v.win,
                      "mousewheel",
                      v.onmousewheel
                    ),
                  v.bind(v.rail, "mousewheel", v.onmousewheel),
                  v.railh && v.bind(v.railh, "mousewheel", v.onmousewheelhr)),
                v.ispage ||
                  S.cantouch ||
                  /HTML|BODY/.test(v.win[0].nodeName) ||
                  (v.win.attr("tabindex") || v.win.attr({ tabindex: n++ }),
                  v.jqbind(v.win, "focus", function (e) {
                    (r = v.getTarget(e).id || !0),
                      (v.hasfocus = !0),
                      v.canshowonmouseevent && v.noticeCursor();
                  }),
                  v.jqbind(v.win, "blur", function () {
                    (r = !1), (v.hasfocus = !1);
                  }),
                  v.jqbind(v.win, "mouseenter", function (e) {
                    (i = v.getTarget(e).id || !0),
                      (v.hasmousefocus = !0),
                      v.canshowonmouseevent && v.noticeCursor();
                  }),
                  v.jqbind(v.win, "mouseleave", function () {
                    (i = !1), (v.hasmousefocus = !1);
                  }));
            }
            if (
              ((v.onkeypress = function (e) {
                if (v.locked && 0 == v.page.maxh) return !0;
                e = e ? e : window.e;
                var o = v.getTarget(e);
                if (o && /INPUT|TEXTAREA|SELECT|OPTION/.test(o.nodeName)) {
                  var t = o.getAttribute("type") || o.type || !1;
                  if (!t || !/submit|button|cancel/i.tp) return !0;
                }
                if (
                  v.hasfocus ||
                  (v.hasmousefocus && !r) ||
                  (v.ispage && !r && !i)
                ) {
                  var n = e.keyCode;
                  if (v.locked && 27 != n) return v.cancelEvent(e);
                  var s = e.ctrlKey || !1,
                    l = e.shiftKey || !1,
                    a = !1;
                  switch (n) {
                    case 38:
                    case 63233:
                      v.doScrollBy(72), (a = !0);
                      break;
                    case 40:
                    case 63235:
                      v.doScrollBy(-72), (a = !0);
                      break;
                    case 37:
                    case 63232:
                      v.railh &&
                        (s ? v.doScrollLeft(0) : v.doScrollLeftBy(72),
                        (a = !0));
                      break;
                    case 39:
                    case 63234:
                      v.railh &&
                        (s
                          ? v.doScrollLeft(v.page.maxw)
                          : v.doScrollLeftBy(-72),
                        (a = !0));
                      break;
                    case 33:
                    case 63276:
                      v.doScrollBy(v.view.h), (a = !0);
                      break;
                    case 34:
                    case 63277:
                      v.doScrollBy(-v.view.h), (a = !0);
                      break;
                    case 36:
                    case 63273:
                      v.railh && s ? v.doScrollPos(0, 0) : v.doScrollTo(0),
                        (a = !0);
                      break;
                    case 35:
                    case 63275:
                      v.railh && s
                        ? v.doScrollPos(v.page.maxw, v.page.maxh)
                        : v.doScrollTo(v.page.maxh),
                        (a = !0);
                      break;
                    case 32:
                      v.opt.spacebarenabled &&
                        (v.doScrollBy(l ? v.view.h : -v.view.h), (a = !0));
                      break;
                    case 27:
                      v.zoomactive && (v.doZoom(), (a = !0));
                  }
                  if (a) return v.cancelEvent(e);
                }
              }),
              v.opt.enablekeyboard &&
                v.bind(
                  document,
                  S.isopera && !S.isopera12 ? "keypress" : "keydown",
                  v.onkeypress
                ),
              v.bind(window, "resize", v.lazyResize),
              v.bind(window, "orientationchange", v.lazyResize),
              v.bind(window, "load", v.lazyResize),
              S.ischrome && !v.ispage && !v.haswrapper)
            ) {
              var E = v.win.attr("style"),
                L = parseFloat(v.win.css("width")) + 1;
              v.win.css("width", L),
                v.synched("chromefix", function () {
                  v.win.attr("style", E);
                });
            }
            (v.onAttributeChange = function () {
              v.lazyResize(250);
            }),
              v.ispage ||
                v.haswrapper ||
                (g !== !1
                  ? ((v.observer = new g(function (e) {
                      e.forEach(v.onAttributeChange);
                    })),
                    v.observer.observe(v.win[0], {
                      childList: !0,
                      characterData: !1,
                      attributes: !0,
                      subtree: !1,
                    }),
                    (v.observerremover = new g(function (e) {
                      e.forEach(function (e) {
                        if (e.removedNodes.length > 0)
                          for (var o in e.removedNodes)
                            if (e.removedNodes[o] == v.win[0])
                              return v.remove();
                      });
                    })),
                    v.observerremover.observe(v.win[0].parentNode, {
                      childList: !0,
                      characterData: !1,
                      attributes: !1,
                      subtree: !1,
                    }))
                  : (v.bind(
                      v.win,
                      S.isie && !S.isie9 ? "propertychange" : "DOMAttrModified",
                      v.onAttributeChange
                    ),
                    S.isie9 &&
                      v.win[0].attachEvent(
                        "onpropertychange",
                        v.onAttributeChange
                      ),
                    v.bind(v.win, "DOMNodeRemoved", function (e) {
                      e.target == v.win[0] && v.remove();
                    }))),
              !v.ispage &&
                v.opt.boxzoom &&
                v.bind(window, "resize", v.resizeZoom),
              v.istextarea && v.bind(v.win, "mouseup", v.lazyResize),
              (v.checkrtlmode = !0),
              v.lazyResize(30);
          }
          "IFRAME" == this.doc[0].nodeName &&
            (this.doc[0].readyState &&
              "complete" == this.doc[0].readyState &&
              setTimeout(function () {
                o.call(v.doc[0], !1);
              }, 500),
            v.bind(this.doc, "load", o));
        }),
        (this.showCursor = function (e, o) {
          v.cursortimeout &&
            (clearTimeout(v.cursortimeout), (v.cursortimeout = 0)),
            v.rail &&
              (v.autohidedom &&
                (v.autohidedom.stop().css({ opacity: v.opt.cursoropacitymax }),
                (v.cursoractive = !0)),
              (v.rail.drag && 1 == v.rail.drag.pt) ||
                ("undefined" != typeof e &&
                  e !== !1 &&
                  (v.scroll.y = Math.round((1 * e) / v.scrollratio.y)),
                "undefined" != typeof o &&
                  (v.scroll.x = Math.round((1 * o) / v.scrollratio.x))),
              v.cursor.css({ height: v.cursorheight, top: v.scroll.y }),
              v.cursorh &&
                (v.cursorh.css(
                  !v.rail.align && v.rail.visibility
                    ? { width: v.cursorwidth, left: v.scroll.x + v.rail.width }
                    : { width: v.cursorwidth, left: v.scroll.x }
                ),
                (v.cursoractive = !0)),
              v.zoom && v.zoom.stop().css({ opacity: v.opt.cursoropacitymax }));
        }),
        (this.hideCursor = function (e) {
          v.cursortimeout ||
            (v.rail &&
              v.autohidedom &&
              (v.cursortimeout = setTimeout(function () {
                (v.rail.active && v.showonmouseevent) ||
                  (v.autohidedom
                    .stop()
                    .animate({ opacity: v.opt.cursoropacitymin }),
                  v.zoom &&
                    v.zoom.stop().animate({ opacity: v.opt.cursoropacitymin }),
                  (v.cursoractive = !1)),
                  (v.cursortimeout = 0);
              }, e || v.opt.hidecursordelay)));
        }),
        (this.noticeCursor = function (e, o, t) {
          v.showCursor(o, t), v.rail.active || v.hideCursor(e);
        }),
        (this.getContentSize = v.ispage
          ? function () {
              return {
                w: Math.max(
                  document.body.scrollWidth,
                  document.documentElement.scrollWidth
                ),
                h: Math.max(
                  document.body.scrollHeight,
                  document.documentElement.scrollHeight
                ),
              };
            }
          : v.haswrapper
          ? function () {
              return {
                w:
                  v.doc.outerWidth() +
                  parseInt(v.win.css("paddingLeft")) +
                  parseInt(v.win.css("paddingRight")),
                h:
                  v.doc.outerHeight() +
                  parseInt(v.win.css("paddingTop")) +
                  parseInt(v.win.css("paddingBottom")),
              };
            }
          : function () {
              return {
                w: v.docscroll[0].scrollWidth,
                h: v.docscroll[0].scrollHeight,
              };
            }),
        (this.onResize = function (e, o) {
          if (!v.win) return !1;
          if (!v.haswrapper && !v.ispage) {
            if ("none" == v.win.css("display"))
              return v.visibility && v.hideRail().hideRailHr(), !1;
            v.hidden || v.visibility || v.showRail().showRailHr();
          }
          var t = v.page.maxh,
            r = v.page.maxw,
            i = { h: v.view.h, w: v.view.w };
          if (
            ((v.view = {
              w: v.ispage ? v.win.width() : parseInt(v.win[0].clientWidth),
              h: v.ispage ? v.win.height() : parseInt(v.win[0].clientHeight),
            }),
            (v.page = o ? o : v.getContentSize()),
            (v.page.maxh = Math.max(0, v.page.h - v.view.h)),
            (v.page.maxw = Math.max(0, v.page.w - v.view.w)),
            v.page.maxh == t && v.page.maxw == r && v.view.w == i.w)
          ) {
            if (v.ispage) return v;
            var n = v.win.offset();
            if (v.lastposition) {
              var s = v.lastposition;
              if (s.top == n.top && s.left == n.left) return v;
            }
            v.lastposition = n;
          }
          if (
            (0 == v.page.maxh
              ? (v.hideRail(),
                (v.scrollvaluemax = 0),
                (v.scroll.y = 0),
                (v.scrollratio.y = 0),
                (v.cursorheight = 0),
                v.setScrollTop(0),
                (v.rail.scrollable = !1))
              : (v.rail.scrollable = !0),
            0 == v.page.maxw
              ? (v.hideRailHr(),
                (v.scrollvaluemaxw = 0),
                (v.scroll.x = 0),
                (v.scrollratio.x = 0),
                (v.cursorwidth = 0),
                v.setScrollLeft(0),
                (v.railh.scrollable = !1))
              : (v.railh.scrollable = !0),
            (v.locked = 0 == v.page.maxh && 0 == v.page.maxw),
            v.locked)
          )
            return v.ispage || v.updateScrollBar(v.view), !1;
          v.hidden || v.visibility
            ? v.hidden || v.railh.visibility || v.showRailHr()
            : v.showRail().showRailHr(),
            v.istextarea &&
              v.win.css("resize") &&
              "none" != v.win.css("resize") &&
              (v.view.h -= 20),
            (v.cursorheight = Math.min(
              v.view.h,
              Math.round(v.view.h * (v.view.h / v.page.h))
            )),
            (v.cursorheight = v.opt.cursorfixedheight
              ? v.opt.cursorfixedheight
              : Math.max(v.opt.cursorminheight, v.cursorheight)),
            (v.cursorwidth = Math.min(
              v.view.w,
              Math.round(v.view.w * (v.view.w / v.page.w))
            )),
            (v.cursorwidth = v.opt.cursorfixedheight
              ? v.opt.cursorfixedheight
              : Math.max(v.opt.cursorminheight, v.cursorwidth)),
            (v.scrollvaluemax = v.view.h - v.cursorheight - v.cursor.hborder),
            v.railh &&
              ((v.railh.width =
                v.page.maxh > 0 ? v.view.w - v.rail.width : v.view.w),
              (v.scrollvaluemaxw =
                v.railh.width - v.cursorwidth - v.cursorh.wborder)),
            v.checkrtlmode &&
              v.railh &&
              ((v.checkrtlmode = !1),
              v.opt.rtlmode && 0 == v.scroll.x && v.setScrollLeft(v.page.maxw)),
            v.ispage || v.updateScrollBar(v.view),
            (v.scrollratio = {
              x: v.page.maxw / v.scrollvaluemaxw,
              y: v.page.maxh / v.scrollvaluemax,
            });
          var l = v.getScrollTop();
          return (
            l > v.page.maxh
              ? v.doScrollTop(v.page.maxh)
              : ((v.scroll.y = Math.round(
                  v.getScrollTop() * (1 / v.scrollratio.y)
                )),
                (v.scroll.x = Math.round(
                  v.getScrollLeft() * (1 / v.scrollratio.x)
                )),
                v.cursoractive && v.noticeCursor()),
            v.scroll.y &&
              0 == v.getScrollTop() &&
              v.doScrollTo(Math.floor(v.scroll.y * v.scrollratio.y)),
            v
          );
        }),
        (this.resize = v.onResize),
        (this.lazyResize = function (e) {
          return (e = isNaN(e) ? 30 : e), v.delayed("resize", v.resize, e), v;
        }),
        (this._bind = function (e, o, t, r) {
          v.events.push({ e: e, n: o, f: t, b: r, q: !1 }),
            e.addEventListener
              ? e.addEventListener(o, t, r || !1)
              : e.attachEvent
              ? e.attachEvent("on" + o, t)
              : (e["on" + o] = t);
        }),
        (this.jqbind = function (e, o, t) {
          v.events.push({ e: e, n: o, f: t, q: !0 }), c(e).bind(o, t);
        }),
        (this.bind = function (e, o, t, r) {
          var i = "jquery" in e ? e[0] : e;
          if ("mousewheel" == o)
            if ("onwheel" in v.win) v._bind(i, "wheel", t, r || !1);
            else {
              var n =
                "undefined" != typeof document.onmousewheel
                  ? "mousewheel"
                  : "DOMMouseScroll";
              m(i, n, t, r || !1),
                "DOMMouseScroll" == n &&
                  m(i, "MozMousePixelScroll", t, r || !1);
            }
          else if (i.addEventListener) {
            if (S.cantouch && /mouseup|mousedown|mousemove/.test(o)) {
              var s =
                "mousedown" == o
                  ? "touchstart"
                  : "mouseup" == o
                  ? "touchend"
                  : "touchmove";
              v._bind(
                i,
                s,
                function (e) {
                  if (e.touches) {
                    if (e.touches.length < 2) {
                      var o = e.touches.length ? e.touches[0] : e;
                      (o.original = e), t.call(this, o);
                    }
                  } else if (e.changedTouches) {
                    var o = e.changedTouches[0];
                    (o.original = e), t.call(this, o);
                  }
                },
                r || !1
              );
            }
            v._bind(i, o, t, r || !1),
              S.cantouch &&
                "mouseup" == o &&
                v._bind(i, "touchcancel", t, r || !1);
          } else
            v._bind(i, o, function (e) {
              return (
                (e = e || window.event || !1),
                e && e.srcElement && (e.target = e.srcElement),
                "pageY" in e ||
                  ((e.pageX = e.clientX + document.documentElement.scrollLeft),
                  (e.pageY = e.clientY + document.documentElement.scrollTop)),
                t.call(i, e) === !1 || r === !1 ? v.cancelEvent(e) : !0
              );
            });
        }),
        (this._unbind = function (e, o, t, r) {
          e.removeEventListener
            ? e.removeEventListener(o, t, r)
            : e.detachEvent
            ? e.detachEvent("on" + o, t)
            : (e["on" + o] = !1);
        }),
        (this.unbindAll = function () {
          for (var e = 0; e < v.events.length; e++) {
            var o = v.events[e];
            o.q ? o.e.unbind(o.n, o.f) : v._unbind(o.e, o.n, o.f, o.b);
          }
        }),
        (this.cancelEvent = function (e) {
          var e = e.original ? e.original : e ? e : window.event || !1;
          return e
            ? (e.preventDefault && e.preventDefault(),
              e.stopPropagation && e.stopPropagation(),
              e.preventManipulation && e.preventManipulation(),
              (e.cancelBubble = !0),
              (e.cancel = !0),
              (e.returnValue = !1),
              !1)
            : !1;
        }),
        (this.stopPropagation = function (e) {
          var e = e.original ? e.original : e ? e : window.event || !1;
          return e
            ? e.stopPropagation
              ? e.stopPropagation()
              : (e.cancelBubble && (e.cancelBubble = !0), !1)
            : !1;
        }),
        (this.showRail = function () {
          return (
            0 == v.page.maxh ||
              (!v.ispage && "none" == v.win.css("display")) ||
              ((v.visibility = !0),
              (v.rail.visibility = !0),
              v.rail.css("display", "block")),
            v
          );
        }),
        (this.showRailHr = function () {
          return v.railh
            ? (0 == v.page.maxw ||
                (!v.ispage && "none" == v.win.css("display")) ||
                ((v.railh.visibility = !0), v.railh.css("display", "block")),
              v)
            : v;
        }),
        (this.hideRail = function () {
          return (
            (v.visibility = !1),
            (v.rail.visibility = !1),
            v.rail.css("display", "none"),
            v
          );
        }),
        (this.hideRailHr = function () {
          return v.railh
            ? ((v.railh.visibility = !1), v.railh.css("display", "none"), v)
            : v;
        }),
        (this.show = function () {
          return (v.hidden = !1), (v.locked = !1), v.showRail().showRailHr();
        }),
        (this.hide = function () {
          return (v.hidden = !0), (v.locked = !0), v.hideRail().hideRailHr();
        }),
        (this.toggle = function () {
          return v.hidden ? v.show() : v.hide();
        }),
        (this.remove = function () {
          v.stop(),
            v.cursortimeout && clearTimeout(v.cursortimeout),
            v.doZoomOut(),
            v.unbindAll(),
            S.isie9 &&
              v.win[0].detachEvent("onpropertychange", v.onAttributeChange),
            v.observer !== !1 && v.observer.disconnect(),
            v.observerremover !== !1 && v.observerremover.disconnect(),
            (v.events = null),
            v.cursor && v.cursor.remove(),
            v.cursorh && v.cursorh.remove(),
            v.rail && v.rail.remove(),
            v.railh && v.railh.remove(),
            v.zoom && v.zoom.remove();
          for (var e = 0; e < v.saved.css.length; e++) {
            var o = v.saved.css[e];
            o[0].css(o[1], "undefined" == typeof o[2] ? "" : o[2]);
          }
          (v.saved = !1), v.me.data("__nicescroll", "");
          var t = c.nicescroll;
          t.each(function (e) {
            if (this && this.id === v.id) {
              delete t[e];
              for (var o = ++e; o < t.length; o++, e++) t[e] = t[o];
              t.length--, t.length && delete t[t.length];
            }
          });
          for (var r in v) (v[r] = null), delete v[r];
          v = null;
        }),
        (this.scrollstart = function (e) {
          return (this.onscrollstart = e), v;
        }),
        (this.scrollend = function (e) {
          return (this.onscrollend = e), v;
        }),
        (this.scrollcancel = function (e) {
          return (this.onscrollcancel = e), v;
        }),
        (this.zoomin = function (e) {
          return (this.onzoomin = e), v;
        }),
        (this.zoomout = function (e) {
          return (this.onzoomout = e), v;
        }),
        (this.isScrollable = function (e) {
          var o = e.target ? e.target : e;
          if ("OPTION" == o.nodeName) return !0;
          for (; o && 1 == o.nodeType && !/BODY|HTML/.test(o.nodeName); ) {
            var t = c(o),
              r =
                t.css("overflowY") ||
                t.css("overflowX") ||
                t.css("overflow") ||
                "";
            if (/scroll|auto/.test(r)) return o.clientHeight != o.scrollHeight;
            o = o.parentNode ? o.parentNode : !1;
          }
          return !1;
        }),
        (this.getViewport = function (e) {
          for (
            var o = e && e.parentNode ? e.parentNode : !1;
            o && 1 == o.nodeType && !/BODY|HTML/.test(o.nodeName);

          ) {
            var t = c(o),
              r =
                t.css("overflowY") ||
                t.css("overflowX") ||
                t.css("overflow") ||
                "";
            if (/scroll|auto/.test(r) && o.clientHeight != o.scrollHeight)
              return t;
            if (t.getNiceScroll().length > 0) return t;
            o = o.parentNode ? o.parentNode : !1;
          }
          return !1;
        }),
        (this.onmousewheel = function (e) {
          if (v.locked) return v.debounced("checkunlock", v.resize, 250), !0;
          if (v.rail.drag) return v.cancelEvent(e);
          if (
            ("auto" == v.opt.oneaxismousemode &&
              0 != e.deltaX &&
              (v.opt.oneaxismousemode = !1),
            v.opt.oneaxismousemode && 0 == e.deltaX && !v.rail.scrollable)
          )
            return v.railh && v.railh.scrollable ? v.onmousewheelhr(e) : !0;
          var o = +new Date(),
            t = !1;
          if (
            (v.opt.preservenativescrolling &&
              v.checkarea + 600 < o &&
              ((v.nativescrollingarea = v.isScrollable(e)), (t = !0)),
            (v.checkarea = o),
            v.nativescrollingarea)
          )
            return !0;
          var r = f(e, !1, t);
          return r && (v.checkarea = 0), r;
        }),
        (this.onmousewheelhr = function (e) {
          if (v.locked || !v.railh.scrollable) return !0;
          if (v.rail.drag) return v.cancelEvent(e);
          var o = +new Date(),
            t = !1;
          return (
            v.opt.preservenativescrolling &&
              v.checkarea + 600 < o &&
              ((v.nativescrollingarea = v.isScrollable(e)), (t = !0)),
            (v.checkarea = o),
            v.nativescrollingarea
              ? !0
              : v.locked
              ? v.cancelEvent(e)
              : f(e, !0, t)
          );
        }),
        (this.stop = function () {
          return (
            v.cancelScroll(),
            v.scrollmon && v.scrollmon.stop(),
            (v.cursorfreezed = !1),
            (v.scroll.y = Math.round(v.getScrollTop() * (1 / v.scrollratio.y))),
            v.noticeCursor(),
            v
          );
        }),
        (this.getTransitionSpeed = function (e) {
          var o = Math.round(10 * v.opt.scrollspeed),
            t = Math.min(o, Math.round((e / 20) * v.opt.scrollspeed));
          return t > 20 ? t : 0;
        }),
        v.opt.smoothscroll
          ? v.ishwscroll && S.hastransition && v.opt.usetransition
            ? ((this.prepareTransition = function (e, o) {
                var t = o ? (e > 20 ? e : 0) : v.getTransitionSpeed(e),
                  r = t ? S.prefixstyle + "transform " + t + "ms ease-out" : "";
                return (
                  (v.lasttransitionstyle && v.lasttransitionstyle == r) ||
                    ((v.lasttransitionstyle = r),
                    v.doc.css(S.transitionstyle, r)),
                  t
                );
              }),
              (this.doScrollLeft = function (e, o) {
                var t = v.scrollrunning ? v.newscrolly : v.getScrollTop();
                v.doScrollPos(e, t, o);
              }),
              (this.doScrollTop = function (e, o) {
                var t = v.scrollrunning ? v.newscrollx : v.getScrollLeft();
                v.doScrollPos(t, e, o);
              }),
              (this.doScrollPos = function (e, o, t) {
                var r = v.getScrollTop(),
                  i = v.getScrollLeft();
                return (
                  ((v.newscrolly - r) * (o - r) < 0 ||
                    (v.newscrollx - i) * (e - i) < 0) &&
                    v.cancelScroll(),
                  0 == v.opt.bouncescroll &&
                    (0 > o ? (o = 0) : o > v.page.maxh && (o = v.page.maxh),
                    0 > e ? (e = 0) : e > v.page.maxw && (e = v.page.maxw)),
                  v.scrollrunning && e == v.newscrollx && o == v.newscrolly
                    ? !1
                    : ((v.newscrolly = o),
                      (v.newscrollx = e),
                      (v.newscrollspeed = t || !1),
                      v.timer
                        ? !1
                        : void (v.timer = setTimeout(function () {
                            var t = v.getScrollTop(),
                              r = v.getScrollLeft(),
                              i = {};
                            (i.x = e - r),
                              (i.y = o - t),
                              (i.px = r),
                              (i.py = t);
                            var n = Math.round(
                                Math.sqrt(Math.pow(i.x, 2) + Math.pow(i.y, 2))
                              ),
                              s =
                                v.newscrollspeed && v.newscrollspeed > 1
                                  ? v.newscrollspeed
                                  : v.getTransitionSpeed(n);
                            if (
                              (v.newscrollspeed &&
                                v.newscrollspeed <= 1 &&
                                (s *= v.newscrollspeed),
                              v.prepareTransition(s, !0),
                              v.timerscroll &&
                                v.timerscroll.tm &&
                                clearInterval(v.timerscroll.tm),
                              s > 0)
                            ) {
                              if (!v.scrollrunning && v.onscrollstart) {
                                var l = {
                                  type: "scrollstart",
                                  current: { x: r, y: t },
                                  request: { x: e, y: o },
                                  end: { x: v.newscrollx, y: v.newscrolly },
                                  speed: s,
                                };
                                v.onscrollstart.call(v, l);
                              }
                              S.transitionend
                                ? v.scrollendtrapped ||
                                  ((v.scrollendtrapped = !0),
                                  v.bind(
                                    v.doc,
                                    S.transitionend,
                                    v.onScrollEnd,
                                    !1
                                  ))
                                : (v.scrollendtrapped &&
                                    clearTimeout(v.scrollendtrapped),
                                  (v.scrollendtrapped = setTimeout(
                                    v.onScrollEnd,
                                    s
                                  )));
                              var a = t,
                                c = r;
                              (v.timerscroll = {
                                bz: new BezierClass(
                                  a,
                                  v.newscrolly,
                                  s,
                                  0,
                                  0,
                                  0.58,
                                  1
                                ),
                                bh: new BezierClass(
                                  c,
                                  v.newscrollx,
                                  s,
                                  0,
                                  0,
                                  0.58,
                                  1
                                ),
                              }),
                                v.cursorfreezed ||
                                  (v.timerscroll.tm = setInterval(function () {
                                    v.showCursor(
                                      v.getScrollTop(),
                                      v.getScrollLeft()
                                    );
                                  }, 60));
                            }
                            v.synched("doScroll-set", function () {
                              (v.timer = 0),
                                v.scrollendtrapped && (v.scrollrunning = !0),
                                v.setScrollTop(v.newscrolly),
                                v.setScrollLeft(v.newscrollx),
                                v.scrollendtrapped || v.onScrollEnd();
                            });
                          }, 50)))
                );
              }),
              (this.cancelScroll = function () {
                if (!v.scrollendtrapped) return !0;
                var e = v.getScrollTop(),
                  o = v.getScrollLeft();
                return (
                  (v.scrollrunning = !1),
                  S.transitionend || clearTimeout(S.transitionend),
                  (v.scrollendtrapped = !1),
                  v._unbind(v.doc, S.transitionend, v.onScrollEnd),
                  v.prepareTransition(0),
                  v.setScrollTop(e),
                  v.railh && v.setScrollLeft(o),
                  v.timerscroll &&
                    v.timerscroll.tm &&
                    clearInterval(v.timerscroll.tm),
                  (v.timerscroll = !1),
                  (v.cursorfreezed = !1),
                  v.showCursor(e, o),
                  v
                );
              }),
              (this.onScrollEnd = function () {
                v.scrollendtrapped &&
                  v._unbind(v.doc, S.transitionend, v.onScrollEnd),
                  (v.scrollendtrapped = !1),
                  v.prepareTransition(0),
                  v.timerscroll &&
                    v.timerscroll.tm &&
                    clearInterval(v.timerscroll.tm),
                  (v.timerscroll = !1);
                var e = v.getScrollTop(),
                  o = v.getScrollLeft();
                if (
                  (v.setScrollTop(e),
                  v.railh && v.setScrollLeft(o),
                  v.noticeCursor(!1, e, o),
                  (v.cursorfreezed = !1),
                  0 > e ? (e = 0) : e > v.page.maxh && (e = v.page.maxh),
                  0 > o ? (o = 0) : o > v.page.maxw && (o = v.page.maxw),
                  e != v.newscrolly || o != v.newscrollx)
                )
                  return v.doScrollPos(o, e, v.opt.snapbackspeed);
                if (v.onscrollend && v.scrollrunning) {
                  var t = {
                    type: "scrollend",
                    current: { x: o, y: e },
                    end: { x: v.newscrollx, y: v.newscrolly },
                  };
                  v.onscrollend.call(v, t);
                }
                v.scrollrunning = !1;
              }))
            : ((this.doScrollLeft = function (e, o) {
                var t = v.scrollrunning ? v.newscrolly : v.getScrollTop();
                v.doScrollPos(e, t, o);
              }),
              (this.doScrollTop = function (e, o) {
                var t = v.scrollrunning ? v.newscrollx : v.getScrollLeft();
                v.doScrollPos(t, e, o);
              }),
              (this.doScrollPos = function (e, o, t) {
                function r() {
                  if (v.cancelAnimationFrame) return !0;
                  if (((v.scrollrunning = !0), (d = 1 - d)))
                    return (v.timer = h(r) || 1);
                  var e = 0,
                    o = (sy = v.getScrollTop());
                  if (v.dst.ay) {
                    o = v.bzscroll
                      ? v.dst.py + v.bzscroll.getNow() * v.dst.ay
                      : v.newscrolly;
                    var t = o - sy;
                    ((0 > t && o < v.newscrolly) ||
                      (t > 0 && o > v.newscrolly)) &&
                      (o = v.newscrolly),
                      v.setScrollTop(o),
                      o == v.newscrolly && (e = 1);
                  } else e = 1;
                  var i = (sx = v.getScrollLeft());
                  if (v.dst.ax) {
                    i = v.bzscroll
                      ? v.dst.px + v.bzscroll.getNow() * v.dst.ax
                      : v.newscrollx;
                    var t = i - sx;
                    ((0 > t && i < v.newscrollx) ||
                      (t > 0 && i > v.newscrollx)) &&
                      (i = v.newscrollx),
                      v.setScrollLeft(i),
                      i == v.newscrollx && (e += 1);
                  } else e += 1;
                  if (2 == e) {
                    if (
                      ((v.timer = 0),
                      (v.cursorfreezed = !1),
                      (v.bzscroll = !1),
                      (v.scrollrunning = !1),
                      0 > o ? (o = 0) : o > v.page.maxh && (o = v.page.maxh),
                      0 > i ? (i = 0) : i > v.page.maxw && (i = v.page.maxw),
                      i != v.newscrollx || o != v.newscrolly)
                    )
                      v.doScrollPos(i, o);
                    else if (v.onscrollend) {
                      var n = {
                        type: "scrollend",
                        current: { x: sx, y: sy },
                        end: { x: v.newscrollx, y: v.newscrolly },
                      };
                      v.onscrollend.call(v, n);
                    }
                  } else v.timer = h(r) || 1;
                }
                var o =
                  "undefined" == typeof o || o === !1 ? v.getScrollTop(!0) : o;
                if (v.timer && v.newscrolly == o && v.newscrollx == e)
                  return !0;
                v.timer && p(v.timer), (v.timer = 0);
                var i = v.getScrollTop(),
                  n = v.getScrollLeft();
                ((v.newscrolly - i) * (o - i) < 0 ||
                  (v.newscrollx - n) * (e - n) < 0) &&
                  v.cancelScroll(),
                  (v.newscrolly = o),
                  (v.newscrollx = e),
                  (v.bouncescroll && v.rail.visibility) ||
                    (v.newscrolly < 0
                      ? (v.newscrolly = 0)
                      : v.newscrolly > v.page.maxh &&
                        (v.newscrolly = v.page.maxh)),
                  (v.bouncescroll && v.railh.visibility) ||
                    (v.newscrollx < 0
                      ? (v.newscrollx = 0)
                      : v.newscrollx > v.page.maxw &&
                        (v.newscrollx = v.page.maxw)),
                  (v.dst = {}),
                  (v.dst.x = e - n),
                  (v.dst.y = o - i),
                  (v.dst.px = n),
                  (v.dst.py = i);
                var s = Math.round(
                  Math.sqrt(Math.pow(v.dst.x, 2) + Math.pow(v.dst.y, 2))
                );
                (v.dst.ax = v.dst.x / s), (v.dst.ay = v.dst.y / s);
                var l = 0,
                  a = s;
                0 == v.dst.x
                  ? ((l = i), (a = o), (v.dst.ay = 1), (v.dst.py = 0))
                  : 0 == v.dst.y &&
                    ((l = n), (a = e), (v.dst.ax = 1), (v.dst.px = 0));
                var c = v.getTransitionSpeed(s);
                if (
                  (t && 1 >= t && (c *= t),
                  (v.bzscroll =
                    c > 0
                      ? v.bzscroll
                        ? v.bzscroll.update(a, c)
                        : new BezierClass(l, a, c, 0, 1, 0, 1)
                      : !1),
                  !v.timer)
                ) {
                  ((i == v.page.maxh && o >= v.page.maxh) ||
                    (n == v.page.maxw && e >= v.page.maxw)) &&
                    v.checkContentSize();
                  var d = 1;
                  if (
                    ((v.cancelAnimationFrame = !1),
                    (v.timer = 1),
                    v.onscrollstart && !v.scrollrunning)
                  ) {
                    var u = {
                      type: "scrollstart",
                      current: { x: n, y: i },
                      request: { x: e, y: o },
                      end: { x: v.newscrollx, y: v.newscrolly },
                      speed: c,
                    };
                    v.onscrollstart.call(v, u);
                  }
                  r(),
                    ((i == v.page.maxh && o >= i) ||
                      (n == v.page.maxw && e >= n)) &&
                      v.checkContentSize(),
                    v.noticeCursor();
                }
              }),
              (this.cancelScroll = function () {
                return (
                  v.timer && p(v.timer),
                  (v.timer = 0),
                  (v.bzscroll = !1),
                  (v.scrollrunning = !1),
                  v
                );
              }))
          : ((this.doScrollLeft = function (e, o) {
              var t = v.getScrollTop();
              v.doScrollPos(e, t, o);
            }),
            (this.doScrollTop = function (e, o) {
              var t = v.getScrollLeft();
              v.doScrollPos(t, e, o);
            }),
            (this.doScrollPos = function (e, o) {
              var t = e > v.page.maxw ? v.page.maxw : e;
              0 > t && (t = 0);
              var r = o > v.page.maxh ? v.page.maxh : o;
              0 > r && (r = 0),
                v.synched("scroll", function () {
                  v.setScrollTop(r), v.setScrollLeft(t);
                });
            }),
            (this.cancelScroll = function () {})),
        (this.doScrollBy = function (e, o) {
          var t = 0;
          if (o) t = Math.floor((v.scroll.y - e) * v.scrollratio.y);
          else {
            var r = v.timer ? v.newscrolly : v.getScrollTop(!0);
            t = r - e;
          }
          if (v.bouncescroll) {
            var i = Math.round(v.view.h / 2);
            -i > t ? (t = -i) : t > v.page.maxh + i && (t = v.page.maxh + i);
          }
          return (
            (v.cursorfreezed = !1),
            (py = v.getScrollTop(!0)),
            0 > t && py <= 0
              ? v.noticeCursor()
              : t > v.page.maxh && py >= v.page.maxh
              ? (v.checkContentSize(), v.noticeCursor())
              : void v.doScrollTop(t)
          );
        }),
        (this.doScrollLeftBy = function (e, o) {
          var t = 0;
          if (o) t = Math.floor((v.scroll.x - e) * v.scrollratio.x);
          else {
            var r = v.timer ? v.newscrollx : v.getScrollLeft(!0);
            t = r - e;
          }
          if (v.bouncescroll) {
            var i = Math.round(v.view.w / 2);
            -i > t ? (t = -i) : t > v.page.maxw + i && (t = v.page.maxw + i);
          }
          return (
            (v.cursorfreezed = !1),
            (px = v.getScrollLeft(!0)),
            0 > t && px <= 0
              ? v.noticeCursor()
              : t > v.page.maxw && px >= v.page.maxw
              ? v.noticeCursor()
              : void v.doScrollLeft(t)
          );
        }),
        (this.doScrollTo = function (e, o) {
          var t = o ? Math.round(e * v.scrollratio.y) : e;
          0 > t ? (t = 0) : t > v.page.maxh && (t = v.page.maxh),
            (v.cursorfreezed = !1),
            v.doScrollTop(e);
        }),
        (this.checkContentSize = function () {
          var e = v.getContentSize();
          (e.h != v.page.h || e.w != v.page.w) && v.resize(!1, e);
        }),
        (v.onscroll = function () {
          v.rail.drag ||
            v.cursorfreezed ||
            v.synched("scroll", function () {
              (v.scroll.y = Math.round(
                v.getScrollTop() * (1 / v.scrollratio.y)
              )),
                v.railh &&
                  (v.scroll.x = Math.round(
                    v.getScrollLeft() * (1 / v.scrollratio.x)
                  )),
                v.noticeCursor();
            });
        }),
        v.bind(v.docscroll, "scroll", v.onscroll),
        (this.doZoomIn = function (e) {
          if (!v.zoomactive) {
            (v.zoomactive = !0), (v.zoomrestore = { style: {} });
            var o = [
                "position",
                "top",
                "left",
                "zIndex",
                "backgroundColor",
                "marginTop",
                "marginBottom",
                "marginLeft",
                "marginRight",
              ],
              t = v.win[0].style;
            for (var r in o) {
              var i = o[r];
              v.zoomrestore.style[i] = "undefined" != typeof t[i] ? t[i] : "";
            }
            (v.zoomrestore.style.width = v.win.css("width")),
              (v.zoomrestore.style.height = v.win.css("height")),
              (v.zoomrestore.padding = {
                w: v.win.outerWidth() - v.win.width(),
                h: v.win.outerHeight() - v.win.height(),
              }),
              S.isios4 &&
                ((v.zoomrestore.scrollTop = c(window).scrollTop()),
                c(window).scrollTop(0)),
              v.win.css({
                position: S.isios4 ? "absolute" : "fixed",
                top: 0,
                left: 0,
                "z-index": l + 100,
                margin: "0px",
              });
            var n = v.win.css("backgroundColor");
            return (
              ("" == n ||
                /transparent|rgba\(0, 0, 0, 0\)|rgba\(0,0,0,0\)/.test(n)) &&
                v.win.css("backgroundColor", "#fff"),
              v.rail.css({ "z-index": l + 101 }),
              v.zoom.css({ "z-index": l + 102 }),
              v.zoom.css("backgroundPosition", "0px -18px"),
              v.resizeZoom(),
              v.onzoomin && v.onzoomin.call(v),
              v.cancelEvent(e)
            );
          }
        }),
        (this.doZoomOut = function (e) {
          return v.zoomactive
            ? ((v.zoomactive = !1),
              v.win.css("margin", ""),
              v.win.css(v.zoomrestore.style),
              S.isios4 && c(window).scrollTop(v.zoomrestore.scrollTop),
              v.rail.css({ "z-index": v.zindex }),
              v.zoom.css({ "z-index": v.zindex }),
              (v.zoomrestore = !1),
              v.zoom.css("backgroundPosition", "0px 0px"),
              v.onResize(),
              v.onzoomout && v.onzoomout.call(v),
              v.cancelEvent(e))
            : void 0;
        }),
        (this.doZoom = function (e) {
          return v.zoomactive ? v.doZoomOut(e) : v.doZoomIn(e);
        }),
        (this.resizeZoom = function () {
          if (v.zoomactive) {
            var e = v.getScrollTop();
            v.win.css({
              width: c(window).width() - v.zoomrestore.padding.w + "px",
              height: c(window).height() - v.zoomrestore.padding.h + "px",
            }),
              v.onResize(),
              v.setScrollTop(Math.min(v.page.maxh, e));
          }
        }),
        this.init(),
        c.nicescroll.push(this);
    },
    x = function (e) {
      var o = this;
      (this.nc = e),
        (this.lastx = 0),
        (this.lasty = 0),
        (this.speedx = 0),
        (this.speedy = 0),
        (this.lasttime = 0),
        (this.steptime = 0),
        (this.snapx = !1),
        (this.snapy = !1),
        (this.demulx = 0),
        (this.demuly = 0),
        (this.lastscrollx = -1),
        (this.lastscrolly = -1),
        (this.chkx = 0),
        (this.chky = 0),
        (this.timer = 0),
        (this.time = function () {
          return +new Date();
        }),
        (this.reset = function (e, t) {
          o.stop();
          var r = o.time();
          (o.steptime = 0),
            (o.lasttime = r),
            (o.speedx = 0),
            (o.speedy = 0),
            (o.lastx = e),
            (o.lasty = t),
            (o.lastscrollx = -1),
            (o.lastscrolly = -1);
        }),
        (this.update = function (e, t) {
          var r = o.time();
          (o.steptime = r - o.lasttime), (o.lasttime = r);
          var i = t - o.lasty,
            n = e - o.lastx,
            s = o.nc.getScrollTop(),
            l = o.nc.getScrollLeft(),
            a = s + i,
            c = l + n;
          (o.snapx = 0 > c || c > o.nc.page.maxw),
            (o.snapy = 0 > a || a > o.nc.page.maxh),
            (o.speedx = n),
            (o.speedy = i),
            (o.lastx = e),
            (o.lasty = t);
        }),
        (this.stop = function () {
          o.nc.unsynched("domomentum2d"),
            o.timer && clearTimeout(o.timer),
            (o.timer = 0),
            (o.lastscrollx = -1),
            (o.lastscrolly = -1);
        }),
        (this.doSnapy = function (e, t) {
          var r = !1;
          0 > t
            ? ((t = 0), (r = !0))
            : t > o.nc.page.maxh && ((t = o.nc.page.maxh), (r = !0)),
            0 > e
              ? ((e = 0), (r = !0))
              : e > o.nc.page.maxw && ((e = o.nc.page.maxw), (r = !0)),
            r && o.nc.doScrollPos(e, t, o.nc.opt.snapbackspeed);
        }),
        (this.doMomentum = function (e) {
          var t = o.time(),
            r = e ? t + e : o.lasttime,
            i = o.nc.getScrollLeft(),
            n = o.nc.getScrollTop(),
            s = o.nc.page.maxh,
            l = o.nc.page.maxw;
          (o.speedx = l > 0 ? Math.min(60, o.speedx) : 0),
            (o.speedy = s > 0 ? Math.min(60, o.speedy) : 0);
          var a = r && 60 >= t - r;
          (0 > n || n > s || 0 > i || i > l) && (a = !1);
          var c = o.speedy && a ? o.speedy : !1,
            d = o.speedx && a ? o.speedx : !1;
          if (c || d) {
            var u = Math.max(16, o.steptime);
            if (u > 50) {
              var h = u / 50;
              (o.speedx *= h), (o.speedy *= h), (u = 50);
            }
            (o.demulxy = 0),
              (o.lastscrollx = o.nc.getScrollLeft()),
              (o.chkx = o.lastscrollx),
              (o.lastscrolly = o.nc.getScrollTop()),
              (o.chky = o.lastscrolly);
            var p = o.lastscrollx,
              m = o.lastscrolly,
              f = function () {
                var e = o.time() - t > 600 ? 0.04 : 0.02;
                o.speedx &&
                  ((p = Math.floor(o.lastscrollx - o.speedx * (1 - o.demulxy))),
                  (o.lastscrollx = p),
                  (0 > p || p > l) && (e = 0.1)),
                  o.speedy &&
                    ((m = Math.floor(
                      o.lastscrolly - o.speedy * (1 - o.demulxy)
                    )),
                    (o.lastscrolly = m),
                    (0 > m || m > s) && (e = 0.1)),
                  (o.demulxy = Math.min(1, o.demulxy + e)),
                  o.nc.synched("domomentum2d", function () {
                    if (o.speedx) {
                      var e = o.nc.getScrollLeft();
                      e != o.chkx && o.stop(),
                        (o.chkx = p),
                        o.nc.setScrollLeft(p);
                    }
                    if (o.speedy) {
                      var t = o.nc.getScrollTop();
                      t != o.chky && o.stop(),
                        (o.chky = m),
                        o.nc.setScrollTop(m);
                    }
                    o.timer || (o.nc.hideCursor(), o.doSnapy(p, m));
                  }),
                  o.demulxy < 1
                    ? (o.timer = setTimeout(f, u))
                    : (o.stop(), o.nc.hideCursor(), o.doSnapy(p, m));
              };
            f();
          } else o.doSnapy(o.nc.getScrollLeft(), o.nc.getScrollTop());
        });
    },
    S = e.fn.scrollTop;
  (e.cssHooks.pageYOffset = {
    get: function (e) {
      var o = c.data(e, "__nicescroll") || !1;
      return o && o.ishwscroll ? o.getScrollTop() : S.call(e);
    },
    set: function (e, o) {
      var t = c.data(e, "__nicescroll") || !1;
      return (
        t && t.ishwscroll ? t.setScrollTop(parseInt(o)) : S.call(e, o), this
      );
    },
  }),
    (e.fn.scrollTop = function (e) {
      if ("undefined" == typeof e) {
        var o = this[0] ? c.data(this[0], "__nicescroll") || !1 : !1;
        return o && o.ishwscroll ? o.getScrollTop() : S.call(this);
      }
      return this.each(function () {
        var o = c.data(this, "__nicescroll") || !1;
        o && o.ishwscroll ? o.setScrollTop(parseInt(e)) : S.call(c(this), e);
      });
    });
  var z = e.fn.scrollLeft;
  (c.cssHooks.pageXOffset = {
    get: function (e) {
      var o = c.data(e, "__nicescroll") || !1;
      return o && o.ishwscroll ? o.getScrollLeft() : z.call(e);
    },
    set: function (e, o) {
      var t = c.data(e, "__nicescroll") || !1;
      return (
        t && t.ishwscroll ? t.setScrollLeft(parseInt(o)) : z.call(e, o), this
      );
    },
  }),
    (e.fn.scrollLeft = function (e) {
      if ("undefined" == typeof e) {
        var o = this[0] ? c.data(this[0], "__nicescroll") || !1 : !1;
        return o && o.ishwscroll ? o.getScrollLeft() : z.call(this);
      }
      return this.each(function () {
        var o = c.data(this, "__nicescroll") || !1;
        o && o.ishwscroll ? o.setScrollLeft(parseInt(e)) : z.call(c(this), e);
      });
    });
  var T = function (e) {
    var o = this;
    if (
      ((this.length = 0),
      (this.name = "nicescrollarray"),
      (this.each = function (e) {
        for (var t = 0, r = 0; t < o.length; t++) e.call(o[t], r++);
        return o;
      }),
      (this.push = function (e) {
        (o[o.length] = e), o.length++;
      }),
      (this.eq = function (e) {
        return o[e];
      }),
      e)
    )
      for (a = 0; a < e.length; a++) {
        var t = c.data(e[a], "__nicescroll") || !1;
        t && ((this[this.length] = t), this.length++);
      }
    return this;
  };
  t(
    T.prototype,
    [
      "show",
      "hide",
      "toggle",
      "onResize",
      "resize",
      "remove",
      "stop",
      "doScrollPos",
    ],
    function (e, o) {
      e[o] = function () {
        var e = arguments;
        return this.each(function () {
          this[o].apply(this, e);
        });
      };
    }
  ),
    (e.fn.getNiceScroll = function (e) {
      if ("undefined" == typeof e) return new T(this);
      var o = (this[e] && c.data(this[e], "__nicescroll")) || !1;
      return o;
    }),
    e.extend(e.expr[":"], {
      nicescroll: function (e) {
        return c.data(e, "__nicescroll") ? !0 : !1;
      },
    }),
    (c.fn.niceScroll = function (e, o) {
      "undefined" == typeof o &&
        ("object" != typeof e || "jquery" in e || ((o = e), (e = !1)));
      var t = new T();
      "undefined" == typeof o && (o = {}),
        e && ((o.doc = c(e)), (o.win = c(this)));
      var r = !("doc" in o);
      return (
        r || "win" in o || (o.win = c(this)),
        this.each(function () {
          var e = c(this).data("__nicescroll") || !1;
          e ||
            ((o.doc = r ? c(this) : o.doc),
            (e = new b(o, c(this))),
            c(this).data("__nicescroll", e)),
            t.push(e);
        }),
        1 == t.length ? t[0] : t
      );
    }),
    (window.NiceScroll = {
      getjQuery: function () {
        return e;
      },
    }),
    c.nicescroll || ((c.nicescroll = new T()), (c.nicescroll.options = w));
})(jQuery);

/* jquery.nicescroll.plus
-- the addon for nicescroll
-- version 1.0.0 BETA
-- copyright 13 InuYaksa*2013
-- licensed under the MIT
--
-- http://areaaperta.com/nicescroll
-- https://github.com/inuyaksa/jquery.nicescroll
--
*/
!(function (r) {
  function o(r) {
    var o = {};
    switch (r) {
      case "fb":
        (o.autohidemode = !1),
          (o.cursorcolor = "#7B7C7E"),
          (o.railcolor = ""),
          (o.cursoropacitymax = 0.8),
          (o.cursorwidth = 10),
          (o.cursorborder = "1px solid #868688"),
          (o.cursorborderradius = "10px");
    }
    return o;
  }
  function i(r, o) {
    function i() {
      (o._stylerfbstate = !1),
        o.rail.css({ backgroundColor: "" }),
        o.cursor.stop().animate({ width: 3 }, 200);
    }
    if (o.rail)
      switch (r) {
        case "fb":
          o.rail.css({
            "-webkit-border-radius": "10px",
            "-moz-border-radius": "10px",
            "border-radius": "10px",
          }),
            o.cursor.css({ width: 3 });
          var t = o.ispage ? o.rail : o.win;
          t.hover(
            function () {
              (o._stylerfbstate = !0),
                o.rail.css({ backgroundColor: "transparent" }),
                o.cursor.stop().css({ width: 10 });
            },
            function () {
              o.rail.drag || i();
            }
          ),
            c(document).mouseup(function () {
              o._stylerfbstate && i();
            });
      }
  }
  var c = r;
  if (c && "nicescroll" in c) {
    c.extend(c.nicescroll.options, { styler: !1 });
    var t = { niceScroll: c.fn.niceScroll, getNiceScroll: c.fn.getNiceScroll };
    (c.fn.niceScroll = function (r, s) {
      "undefined" != typeof r && "object" == typeof r && ((s = r), (r = !1));
      var n = (s && s.styler) || c.nicescroll.options.styler || !1;
      n && ((nw = o(n)), c.extend(nw, s), (s = nw));
      var l = t.niceScroll.call(this, r, s);
      return (
        n && i(n, l),
        (l.scrollTo = function (r) {
          var o = this.win.position(),
            i = this.win.find(r).position();
          if (i) {
            var c = Math.floor(i.top - o.top + this.scrollTop());
            this.doScrollTop(c);
          }
        }),
        l
      );
    }),
      (c.fn.getNiceScroll = function (r) {
        var o = t.getNiceScroll.call(this, r);
        return (
          (o.scrollTo = function (r) {
            this.each(function () {
              this.scrollTo.call(this, r);
            });
          }),
          o
        );
      });
  }
})(jQuery);

/* HTML5 Placeholder jQuery Plugin - v2.1.2
 * Copyright (c)2015 Mathias Bynens
 * 2015-06-09
 */
!(function (a) {
  "function" == typeof define && define.amd
    ? define(["jquery"], a)
    : a(
        "object" == typeof module && module.exports ? require("jquery") : jQuery
      );
})(function (a) {
  function b(b) {
    var c = {},
      d = /^jQuery\d+$/;
    return (
      a.each(b.attributes, function (a, b) {
        b.specified && !d.test(b.name) && (c[b.name] = b.value);
      }),
      c
    );
  }
  function c(b, c) {
    var d = this,
      f = a(d);
    if (d.value == f.attr("placeholder") && f.hasClass(m.customClass))
      if (f.data("placeholder-password")) {
        if (
          ((f = f
            .hide()
            .nextAll('input[type="password"]:first')
            .show()
            .attr("id", f.removeAttr("id").data("placeholder-id"))),
          b === !0)
        )
          return (f[0].value = c);
        f.focus();
      } else
        (d.value = ""), f.removeClass(m.customClass), d == e() && d.select();
  }
  function d() {
    var d,
      e = this,
      f = a(e),
      g = this.id;
    if ("" === e.value) {
      if ("password" === e.type) {
        if (!f.data("placeholder-textinput")) {
          try {
            d = f.clone().prop({ type: "text" });
          } catch (h) {
            d = a("<input>").attr(a.extend(b(this), { type: "text" }));
          }
          d
            .removeAttr("name")
            .data({ "placeholder-password": f, "placeholder-id": g })
            .bind("focus.placeholder", c),
            f
              .data({ "placeholder-textinput": d, "placeholder-id": g })
              .before(d);
        }
        f = f
          .removeAttr("id")
          .hide()
          .prevAll('input[type="text"]:first')
          .attr("id", g)
          .show();
      }
      f.addClass(m.customClass), (f[0].value = f.attr("placeholder"));
    } else f.removeClass(m.customClass);
  }
  function e() {
    try {
      return document.activeElement;
    } catch (a) {}
  }
  var f,
    g,
    h =
      "[object OperaMini]" == Object.prototype.toString.call(window.operamini),
    i = "placeholder" in document.createElement("input") && !h,
    j = "placeholder" in document.createElement("textarea") && !h,
    k = a.valHooks,
    l = a.propHooks;
  if (i && j)
    (g = a.fn.placeholder =
      function () {
        return this;
      }),
      (g.input = g.textarea = !0);
  else {
    var m = {};
    (g = a.fn.placeholder =
      function (b) {
        var e = { customClass: "placeholder" };
        m = a.extend({}, e, b);
        var f = this;
        return (
          f
            .filter((i ? "textarea" : ":input") + "[placeholder]")
            .not("." + m.customClass)
            .bind({ "focus.placeholder": c, "blur.placeholder": d })
            .data("placeholder-enabled", !0)
            .trigger("blur.placeholder"),
          f
        );
      }),
      (g.input = i),
      (g.textarea = j),
      (f = {
        get: function (b) {
          var c = a(b),
            d = c.data("placeholder-password");
          return d
            ? d[0].value
            : c.data("placeholder-enabled") && c.hasClass(m.customClass)
            ? ""
            : b.value;
        },
        set: function (b, f) {
          var g = a(b),
            h = g.data("placeholder-password");
          return h
            ? (h[0].value = f)
            : g.data("placeholder-enabled")
            ? ("" === f
                ? ((b.value = f), b != e() && d.call(b))
                : g.hasClass(m.customClass)
                ? c.call(b, !0, f) || (b.value = f)
                : (b.value = f),
              g)
            : (b.value = f);
        },
      }),
      i || ((k.input = f), (l.value = f)),
      j || ((k.textarea = f), (l.value = f)),
      a(function () {
        a(document).delegate("form", "submit.placeholder", function () {
          var b = a("." + m.customClass, this).each(c);
          setTimeout(function () {
            b.each(d);
          }, 10);
        });
      }),
      a(window).bind("beforeunload.placeholder", function () {
        a("." + m.customClass).each(function () {
          this.value = "";
        });
      });
  }
});

/*!
 * Retina.js v2.1.0
 *
 * Copyright 2016 Imulus, LLC
 * Released under the MIT license
 *
 * Retina.js is an open source script that makes it easy to serve
 * high-resolution images to devices with retina displays.
 */
!(function () {
  function t(t) {
    return Array.prototype.slice.call(t);
  }
  function e(t) {
    var e = parseInt(t, 10);
    return e > f ? f : e;
  }
  function r(t) {
    return (
      t.hasAttribute("data-no-resize") ||
        (0 === t.offsetWidth && 0 === t.offsetHeight
          ? (t.setAttribute("width", t.naturalWidth),
            t.setAttribute("height", t.naturalHeight))
          : (t.setAttribute("width", t.offsetWidth),
            t.setAttribute("height", t.offsetHeight))),
      t
    );
  }
  function n(t, e) {
    var n = t.nodeName.toLowerCase(),
      i = document.createElement("img");
    i.addEventListener("load", function () {
      "img" === n
        ? r(t).setAttribute("src", e)
        : (t.style.backgroundImage = "url(" + e + ")");
    }),
      i.setAttribute("src", e),
      t.setAttribute(h, !0);
  }
  function i(t, r) {
    var i = arguments.length <= 2 || void 0 === arguments[2] ? 1 : arguments[2],
      o = e(i);
    if (r && o > 1) {
      var a = r.replace(c, "@" + o + "x$1");
      n(t, a);
    }
  }
  function o(t, e, r) {
    f > 1 && n(t, r);
  }
  function a(e) {
    return e
      ? "function" == typeof e.forEach
        ? e
        : t(e)
      : "undefined" != typeof document
      ? t(document.querySelectorAll(g))
      : [];
  }
  function u(t) {
    return t.style.backgroundImage.replace(l, "$2");
  }
  function d(t) {
    a(t).forEach(function (t) {
      if (!t.getAttribute(h)) {
        var e = "img" === t.nodeName.toLowerCase(),
          r = e ? t.getAttribute("src") : u(t),
          n = t.getAttribute("data-rjs"),
          a = !isNaN(parseInt(n, 10));
        a ? i(t, r, n) : o(t, r, n);
      }
    });
  }
  "undefined" == typeof exports && (exports = {}),
    Object.defineProperty(exports, "__esModule", { value: !0 });
  var s = "undefined" != typeof window,
    f = s ? window.devicePixelRatio || 1 : 1,
    c = /(\.[A-z]{3,4}\/?(\?.*)?)$/,
    l = /url\(('|")?([^\)'"]+)('|")?\)/i,
    g = "[data-rjs]",
    h = "data-rjs-processed";
  s && (window.addEventListener("load", d), (window.retinajs = d)),
    (exports["default"] = d);
})();

/**
 * Arctext.js
 * A jQuery plugin for curved text
 * http://www.codrops.com
 *
 * Copyright 2011, Pedro Botelho / Codrops
 * Free to use under the MIT license.
 *
 * Date: Mon Jan 23 2012
 */
!(function (t, i) {
  function s(i, s, n, a) {
    var e,
      r = i.text().split(s),
      o = "";
    r.length &&
      (t(r).each(function (t, i) {
        (e = ""),
          " " === i && ((e = " empty"), (i = "&nbsp;")),
          (o += '<span class="' + n + (t + 1) + e + '">' + i + "</span>" + a);
      }),
      i.empty().append(o));
  }
  t.fn.fitText = function (i, s) {
    var n = {
      minFontSize: Number.NEGATIVE_INFINITY,
      maxFontSize: Number.POSITIVE_INFINITY,
    };
    return this.each(function () {
      var a = t(this),
        e = i || 1;
      s && t.extend(n, s);
      var r = function () {
        a.css(
          "font-size",
          Math.max(
            Math.min(a.width() / (10 * e), parseFloat(n.maxFontSize)),
            parseFloat(n.minFontSize)
          )
        );
      };
      r(), t(window).resize(r);
    });
  };
  var n = {
    init: function () {
      return this.each(function () {
        s(t(this), "", "char", "");
      });
    },
    words: function () {
      return this.each(function () {
        s(t(this), " ", "word", " ");
      });
    },
    lines: function () {
      return this.each(function () {
        var i = "eefec303079ad17405c889e092e105b0";
        s(t(this).children("br").replaceWith(i).end(), i, "line", "");
      });
    },
  };
  (t.fn.lettering = function (i) {
    return i && n[i]
      ? n[i].apply(this, [].slice.call(arguments, 1))
      : "letters" !== i && i
      ? (t.error("Method " + i + " does not exist on jQuery.lettering"), this)
      : n.init.apply(this, [].slice.call(arguments, 0));
  }),
    (t.Arctext = function (i, s) {
      (this.$el = t(s)), this._init(i);
    }),
    (t.Arctext.defaults = { radius: 0, dir: 1, rotate: !0, fitText: !1 }),
    (t.Arctext.prototype = {
      _init: function (i) {
        (this.options = t.extend(!0, {}, t.Arctext.defaults, i)),
          this._applyLettering(),
          this.$el.data("arctext", !0),
          this._calc(),
          this._rotateWord(),
          this._loadEvents();
      },
      _applyLettering: function () {
        this.$el.lettering(),
          this.options.fitText && this.$el.fitText(),
          (this.$letters = this.$el
            .find("span")
            .css("display", "inline-block"));
      },
      _calc: function () {
        return -1 === this.options.radius
          ? !1
          : (this._calcBase(), void this._calcLetters());
      },
      _calcBase: function () {
        this.dtWord = 0;
        var i = this;
        this.$letters.each(function () {
          var s = t(this),
            n = s.outerWidth(!0);
          (i.dtWord += n), s.data("center", i.dtWord - n / 2);
        });
        var s = this.dtWord / 2;
        this.options.radius < s && (this.options.radius = s),
          (this.dtArcBase = this.dtWord);
        var n = 2 * Math.asin(this.dtArcBase / (2 * this.options.radius));
        this.dtArc = this.options.radius * n;
      },
      _calcLetters: function () {
        var i = this,
          s = 0;
        this.$letters.each(function () {
          var n = t(this),
            a = (n.outerWidth(!0) / i.dtWord) * i.dtArc,
            e = a / i.options.radius,
            r = i.options.radius * Math.cos(e / 2),
            o = Math.acos((i.dtWord / 2 - s) / i.options.radius),
            c = o + e / 2,
            h = Math.cos(c) * r,
            d = Math.sin(c) * r,
            u = s + Math.abs(i.dtWord / 2 - h - s),
            l = 0 | (u - n.data("center")),
            f = 0 | (i.options.radius - d),
            p = i.options.rotate
              ? 0 | (-Math.asin(h / i.options.radius) * (180 / Math.PI))
              : 0;
          (s = 2 * u - s),
            n.data({
              x: l,
              y: 1 === i.options.dir ? f : -f,
              a: 1 === i.options.dir ? p : -p,
            });
        });
      },
      _rotateWord: function (i) {
        if (!this.$el.data("arctext")) return !1;
        var s = this;
        this.$letters.each(function () {
          var n = t(this),
            a =
              -1 === s.options.radius
                ? "none"
                : "translateX(" +
                  n.data("x") +
                  "px) translateY(" +
                  n.data("y") +
                  "px) rotate(" +
                  n.data("a") +
                  "deg)",
            e = i
              ? "all " + (i.speed || 0) + "ms " + (i.easing || "linear")
              : "none";
          n.css({
            "-webkit-transition": e,
            "-moz-transition": e,
            "-o-transition": e,
            "-ms-transition": e,
            transition: e,
          }).css({
            "-webkit-transform": a,
            "-moz-transform": a,
            "-o-transform": a,
            "-ms-transform": a,
            transform: a,
          });
        });
      },
      _loadEvents: function () {
        if (this.options.fitText) {
          var i = this;
          t(window).on("resize.arctext", function () {
            i._calc(), i._rotateWord();
          });
        }
      },
      set: function (t) {
        return t.radius || t.dir || "undefined" !== t.rotate
          ? ((this.options.radius = t.radius || this.options.radius),
            (this.options.dir = t.dir || this.options.dir),
            t.rotate !== i && (this.options.rotate = t.rotate),
            this._calc(),
            void this._rotateWord(t.animation))
          : !1;
      },
      destroy: function () {
        (this.options.radius = -1),
          this._rotateWord(),
          this.$letters.removeData("x y a center"),
          this.$el.removeData("arctext"),
          t(window).off(".arctext");
      },
    });
  var a = function (t) {
    this.console && console.error(t);
  };
  t.fn.arctext = function (i) {
    if ("string" == typeof i) {
      var s = Array.prototype.slice.call(arguments, 1);
      this.each(function () {
        var n = t.data(this, "arctext");
        return n
          ? t.isFunction(n[i]) && "_" !== i.charAt(0)
            ? void n[i].apply(n, s)
            : void a("no such method '" + i + "' for arctext instance")
          : void a(
              "cannot call methods on arctext prior to initialization; attempted to call method '" +
                i +
                "'"
            );
      });
    } else
      this.each(function () {
        var s = t.data(this, "arctext");
        s || t.data(this, "arctext", new t.Arctext(i, this));
      });
    return this;
  };
})(jQuery);

/**
 * A RichMarker that allows any HTML/DOM to be added to a map and be draggable.
 *
 * @param {Object.<string, *>=} opt_options Optional properties to set.
 * @extends {google.maps.OverlayView}
 * @constructor
 */
if (typeof google !== "undefined") {
  !(function () {
    function t(t) {
      var e = t || {};
      (this.d = this.c = c),
        void 0 == t.visible && (t.visible = l),
        void 0 == t.shadow && (t.shadow = "7px -3px 5px rgba(88,88,88,0.7)"),
        void 0 == t.anchor && (t.anchor = y.BOTTOM),
        this.setValues(e);
    }
    function e(t, e) {
      var o = document.createElement("DIV");
      if (((o.innerHTML = e), 1 == o.childNodes.length))
        return o.removeChild(o.firstChild);
      for (var i = document.createDocumentFragment(); o.firstChild; )
        i.appendChild(o.firstChild);
      return i;
    }
    function o(t, e) {
      if (e) for (var o; (o = e.firstChild); ) e.removeChild(o);
    }
    function i(t, e) {
      if (t.c) {
        var o = "";
        -1 !== navigator.userAgent.indexOf("Gecko/")
          ? ("dragging" == e && (o = "-moz-grabbing"),
            "dragready" == e && (o = "-moz-grab"))
          : ("dragging" == e || "dragready" == e) && (o = "move"),
          "draggable" == e && (o = "pointer"),
          t.a.style.cursor != o && (t.a.style.cursor = o);
      }
    }
    function n(t, e) {
      if (t.getDraggable() && !t.d) {
        t.d = l;
        var o = t.getMap();
        (t.m = o.get("draggable")),
          o.set("draggable", c),
          (t.h = e.clientX),
          (t.i = e.clientY),
          i(t, "dragready"),
          (t.a.style.MozUserSelect = "none"),
          (t.a.style.KhtmlUserSelect = "none"),
          (t.a.style.WebkitUserSelect = "none"),
          (t.a.unselectable = "on"),
          (t.a.onselectstart = function () {
            return c;
          }),
          g(t),
          google.maps.event.trigger(t, "dragstart");
      }
    }
    function r(t) {
      t.getDraggable() &&
        t.d &&
        ((t.d = c),
        t.getMap().set("draggable", t.m),
        (t.h = t.i = t.m = null),
        (t.a.style.MozUserSelect = ""),
        (t.a.style.KhtmlUserSelect = ""),
        (t.a.style.WebkitUserSelect = ""),
        (t.a.unselectable = "off"),
        (t.a.onselectstart = function () {}),
        h(t),
        i(t, "draggable"),
        google.maps.event.trigger(t, "dragend"),
        t.draw());
    }
    function s(t, e) {
      if (t.getDraggable() && t.d) {
        var o = t.h - e.clientX,
          n = t.i - e.clientY;
        (t.h = e.clientX),
          (t.i = e.clientY),
          (o = parseInt(t.a.style.left, 10) - o),
          (n = parseInt(t.a.style.top, 10) - n),
          (t.a.style.left = o + "px"),
          (t.a.style.top = n + "px");
        var s = d(t);
        t.setPosition(
          t
            .getProjection()
            .fromDivPixelToLatLng(
              new google.maps.Point(o - s.width, n - s.height)
            )
        ),
          i(t, "dragging"),
          google.maps.event.trigger(t, "drag");
      } else r(t);
    }
    function a(t) {
      t.f && (google.maps.event.removeListener(t.f), delete t.f), i(t, "");
    }
    function p(t, e) {
      e &&
        ((t.f = google.maps.event.addDomListener(e, "mousedown", function (e) {
          n(t, e);
        })),
        i(t, "draggable"));
    }
    function g(t) {
      t.a.setCapture
        ? (t.a.setCapture(l),
          (t.e = [
            google.maps.event.addDomListener(
              t.a,
              "mousemove",
              function (e) {
                s(t, e);
              },
              l
            ),
            google.maps.event.addDomListener(
              t.a,
              "mouseup",
              function () {
                r(t), t.a.releaseCapture();
              },
              l
            ),
          ]))
        : (t.e = [
            google.maps.event.addDomListener(
              window,
              "mousemove",
              function (e) {
                s(t, e);
              },
              l
            ),
            google.maps.event.addDomListener(
              window,
              "mouseup",
              function () {
                r(t);
              },
              l
            ),
          ]);
    }
    function h(t) {
      if (t.e) {
        for (var e, o = 0; (e = t.e[o]); o++)
          google.maps.event.removeListener(e);
        t.e.length = 0;
      }
    }
    function d(t) {
      var e = t.l();
      if ("object" == typeof e) return e;
      var o = new google.maps.Size(0, 0);
      if (!t.b) return o;
      var i = t.b.offsetWidth;
      switch (((t = t.b.offsetHeight), e)) {
        case y.TOP:
          o.width = -i / 2;
          break;
        case y.TOP_RIGHT:
          o.width = -i;
          break;
        case y.LEFT:
          o.height = -t / 2;
          break;
        case y.MIDDLE:
          (o.width = -i / 2), (o.height = -t / 2);
          break;
        case y.RIGHT:
          (o.width = -i), (o.height = -t / 2);
          break;
        case y.BOTTOM_LEFT:
          o.height = -t;
          break;
        case y.BOTTOM:
          (o.width = -i / 2), (o.height = -t);
          break;
        case y.BOTTOM_RIGHT:
          (o.width = -i), (o.height = -t);
      }
      return o;
    }
    var l = !0,
      c = !1;
    (t.prototype = new google.maps.OverlayView()),
      (window.RichMarker = t),
      (t.prototype.getVisible = function () {
        return this.get("visible");
      }),
      (t.prototype.getVisible = t.prototype.getVisible),
      (t.prototype.setVisible = function (t) {
        this.set("visible", t);
      }),
      (t.prototype.setVisible = t.prototype.setVisible),
      (t.prototype.s = function () {
        this.c &&
          ((this.a.style.display = this.getVisible() ? "" : "none"),
          this.draw());
      }),
      (t.prototype.visible_changed = t.prototype.s),
      (t.prototype.setFlat = function (t) {
        this.set("flat", !!t);
      }),
      (t.prototype.setFlat = t.prototype.setFlat),
      (t.prototype.getFlat = function () {
        return this.get("flat");
      }),
      (t.prototype.getFlat = t.prototype.getFlat),
      (t.prototype.p = function () {
        return this.get("width");
      }),
      (t.prototype.getWidth = t.prototype.p),
      (t.prototype.o = function () {
        return this.get("height");
      }),
      (t.prototype.getHeight = t.prototype.o),
      (t.prototype.setShadow = function (t) {
        this.set("shadow", t), this.g();
      }),
      (t.prototype.setShadow = t.prototype.setShadow),
      (t.prototype.getShadow = function () {
        return this.get("shadow");
      }),
      (t.prototype.getShadow = t.prototype.getShadow),
      (t.prototype.g = function () {
        this.c &&
          (this.a.style.boxShadow =
            this.a.style.webkitBoxShadow =
            this.a.style.MozBoxShadow =
              this.getFlat() ? "" : this.getShadow());
      }),
      (t.prototype.flat_changed = t.prototype.g),
      (t.prototype.setZIndex = function (t) {
        this.set("zIndex", t);
      }),
      (t.prototype.setZIndex = t.prototype.setZIndex),
      (t.prototype.getZIndex = function () {
        return this.get("zIndex");
      }),
      (t.prototype.getZIndex = t.prototype.getZIndex),
      (t.prototype.t = function () {
        this.getZIndex() && this.c && (this.a.style.zIndex = this.getZIndex());
      }),
      (t.prototype.zIndex_changed = t.prototype.t),
      (t.prototype.getDraggable = function () {
        return this.get("draggable");
      }),
      (t.prototype.getDraggable = t.prototype.getDraggable),
      (t.prototype.setDraggable = function (t) {
        this.set("draggable", !!t);
      }),
      (t.prototype.setDraggable = t.prototype.setDraggable),
      (t.prototype.k = function () {
        this.c && (this.getDraggable() ? p(this, this.a) : a(this));
      }),
      (t.prototype.draggable_changed = t.prototype.k),
      (t.prototype.getPosition = function () {
        return this.get("position");
      }),
      (t.prototype.getPosition = t.prototype.getPosition),
      (t.prototype.setPosition = function (t) {
        this.set("position", t);
      }),
      (t.prototype.setPosition = t.prototype.setPosition),
      (t.prototype.q = function () {
        this.draw();
      }),
      (t.prototype.position_changed = t.prototype.q),
      (t.prototype.l = function () {
        return this.get("anchor");
      }),
      (t.prototype.getAnchor = t.prototype.l),
      (t.prototype.r = function (t) {
        this.set("anchor", t);
      }),
      (t.prototype.setAnchor = t.prototype.r),
      (t.prototype.n = function () {
        this.draw();
      }),
      (t.prototype.anchor_changed = t.prototype.n),
      (t.prototype.setContent = function (t) {
        this.set("content", t);
      }),
      (t.prototype.setContent = t.prototype.setContent),
      (t.prototype.getContent = function () {
        return this.get("content");
      }),
      (t.prototype.getContent = t.prototype.getContent),
      (t.prototype.j = function () {
        if (this.b) {
          o(this, this.b);
          var t = this.getContent();
          if (t) {
            "string" == typeof t &&
              ((t = t.replace(/^\s*([\S\s]*)\b\s*$/, "$1")), (t = e(this, t))),
              this.b.appendChild(t);
            var i = this;
            t = this.b.getElementsByTagName("IMG");
            for (var n, r = 0; (n = t[r]); r++)
              google.maps.event.addDomListener(n, "mousedown", function (t) {
                i.getDraggable() &&
                  (t.preventDefault && t.preventDefault(), (t.returnValue = c));
              }),
                google.maps.event.addDomListener(n, "load", function () {
                  i.draw();
                });
            google.maps.event.trigger(this, "domready");
          }
          this.c && this.draw();
        }
      }),
      (t.prototype.content_changed = t.prototype.j),
      (t.prototype.onAdd = function () {
        if (
          (this.a ||
            ((this.a = document.createElement("DIV")),
            (this.a.style.position = "absolute")),
          this.getZIndex() && (this.a.style.zIndex = this.getZIndex()),
          (this.a.style.display = this.getVisible() ? "" : "none"),
          !this.b)
        ) {
          (this.b = document.createElement("DIV")), this.a.appendChild(this.b);
          var t = this;
          google.maps.event.addDomListener(this.b, "click", function () {
            google.maps.event.trigger(t, "click");
          }),
            google.maps.event.addDomListener(this.b, "mouseover", function () {
              google.maps.event.trigger(t, "mouseover");
            }),
            google.maps.event.addDomListener(this.b, "mouseout", function () {
              google.maps.event.trigger(t, "mouseout");
            });
        }
        (this.c = l), this.j(), this.g(), this.k();
        var e = this.getPanes();
        e && e.overlayImage.appendChild(this.a),
          google.maps.event.trigger(this, "ready");
      }),
      (t.prototype.onAdd = t.prototype.onAdd),
      (t.prototype.draw = function () {
        if (this.c && !this.d) {
          var t = this.getProjection();
          if (t) {
            var e = this.get("position");
            (t = t.fromLatLngToDivPixel(e)),
              (e = d(this)),
              (this.a.style.top = t.y + e.height + "px"),
              (this.a.style.left = t.x + e.width + "px"),
              (t = this.b.offsetHeight),
              (e = this.b.offsetWidth),
              e != this.get("width") && this.set("width", e),
              t != this.get("height") && this.set("height", t);
          }
        }
      }),
      (t.prototype.draw = t.prototype.draw),
      (t.prototype.onRemove = function () {
        this.a && this.a.parentNode && this.a.parentNode.removeChild(this.a),
          a(this);
      }),
      (t.prototype.onRemove = t.prototype.onRemove);
    var y = {
      TOP_LEFT: 1,
      TOP: 2,
      TOP_RIGHT: 3,
      LEFT: 4,
      MIDDLE: 5,
      RIGHT: 6,
      BOTTOM_LEFT: 7,
      BOTTOM: 8,
      BOTTOM_RIGHT: 9,
    };
    window.RichMarkerPosition = y;
  })();
}

/* ------------------------------------------------------------------------
	Class: prettyPhoto
	Use: Lightbox clone for jQuery
	Author: Stephane Caron (http://www.no-margin-for-errors.com)
	Version: 3.1.6
------------------------------------------------------------------------- */
!(function (e) {
  function t() {
    var e = location.href;
    return (
      (hashtag =
        -1 !== e.indexOf("#prettyPhoto")
          ? decodeURI(e.substring(e.indexOf("#prettyPhoto") + 1, e.length))
          : !1),
      hashtag && (hashtag = hashtag.replace(/<|>/g, "")),
      hashtag
    );
  }
  function i() {
    "undefined" != typeof theRel &&
      (location.hash = theRel + "/" + rel_index + "/");
  }
  function p() {
    -1 !== location.href.indexOf("#prettyPhoto") &&
      (location.hash = "prettyPhoto");
  }
  function o(e, t) {
    e = e.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var i = "[\\?&]" + e + "=([^&#]*)",
      p = new RegExp(i),
      o = p.exec(t);
    return null == o ? "" : o[1];
  }
  (e.prettyPhoto = { version: "3.1.6" }),
    (e.fn.prettyPhoto = function (a) {
      function s() {
        e(".pp_loaderIcon").hide(),
          (projectedTop =
            scroll_pos.scrollTop + (I / 2 - f.containerHeight / 2)),
          projectedTop < 0 && (projectedTop = 0),
          $ppt.fadeTo(settings.animation_speed, 1),
          $pp_pic_holder
            .find(".pp_content")
            .animate(
              { height: f.contentHeight, width: f.contentWidth },
              settings.animation_speed
            ),
          $pp_pic_holder.animate(
            {
              top: projectedTop,
              left:
                j / 2 - f.containerWidth / 2 < 0
                  ? 0
                  : j / 2 - f.containerWidth / 2,
              width: f.containerWidth,
            },
            settings.animation_speed,
            function () {
              $pp_pic_holder
                .find(".pp_hoverContainer,#fullResImage")
                .height(f.height)
                .width(f.width),
                $pp_pic_holder
                  .find(".pp_fade")
                  .fadeIn(settings.animation_speed),
                isSet && "image" == h(pp_images[set_position])
                  ? $pp_pic_holder.find(".pp_hoverContainer").show()
                  : $pp_pic_holder.find(".pp_hoverContainer").hide(),
                settings.allow_expand &&
                  (f.resized
                    ? e("a.pp_expand,a.pp_contract").show()
                    : e("a.pp_expand").hide()),
                !settings.autoplay_slideshow ||
                  P ||
                  v ||
                  e.prettyPhoto.startSlideshow(),
                settings.changepicturecallback(),
                (v = !0);
            }
          ),
          m(),
          a.ajaxcallback();
      }
      function n(t) {
        $pp_pic_holder
          .find("#pp_full_res object,#pp_full_res embed")
          .css("visibility", "hidden"),
          $pp_pic_holder
            .find(".pp_fade")
            .fadeOut(settings.animation_speed, function () {
              e(".pp_loaderIcon").show(), t();
            });
      }
      function r(t) {
        t > 1 ? e(".pp_nav").show() : e(".pp_nav").hide();
      }
      function l(e, t) {
        if (
          ((resized = !1),
          d(e, t),
          (imageWidth = e),
          (imageHeight = t),
          (k > j || b > I) && doresize && settings.allow_resize && !$)
        ) {
          for (resized = !0, fitting = !1; !fitting; )
            k > j
              ? ((imageWidth = j - 200), (imageHeight = (t / e) * imageWidth))
              : b > I
              ? ((imageHeight = I - 200), (imageWidth = (e / t) * imageHeight))
              : (fitting = !0),
              (b = imageHeight),
              (k = imageWidth);
          (k > j || b > I) && l(k, b), d(imageWidth, imageHeight);
        }
        return {
          width: Math.floor(imageWidth),
          height: Math.floor(imageHeight),
          containerHeight: Math.floor(b),
          containerWidth: Math.floor(k) + 2 * settings.horizontal_padding,
          contentHeight: Math.floor(y),
          contentWidth: Math.floor(w),
          resized: resized,
        };
      }
      function d(t, i) {
        (t = parseFloat(t)),
          (i = parseFloat(i)),
          ($pp_details = $pp_pic_holder.find(".pp_details")),
          $pp_details.width(t),
          (detailsHeight =
            parseFloat($pp_details.css("marginTop")) +
            parseFloat($pp_details.css("marginBottom"))),
          ($pp_details = $pp_details
            .clone()
            .addClass(settings.theme)
            .width(t)
            .appendTo(e("body"))
            .css({ position: "absolute", top: -1e4 })),
          (detailsHeight += $pp_details.height()),
          (detailsHeight = detailsHeight <= 34 ? 36 : detailsHeight),
          $pp_details.remove(),
          ($pp_title = $pp_pic_holder.find(".ppt")),
          $pp_title.width(t),
          (titleHeight =
            parseFloat($pp_title.css("marginTop")) +
            parseFloat($pp_title.css("marginBottom"))),
          ($pp_title = $pp_title
            .clone()
            .appendTo(e("body"))
            .css({ position: "absolute", top: -1e4 })),
          (titleHeight += $pp_title.height()),
          $pp_title.remove(),
          (y = i + detailsHeight),
          (w = t),
          (b =
            y +
            titleHeight +
            $pp_pic_holder.find(".pp_top").height() +
            $pp_pic_holder.find(".pp_bottom").height()),
          (k = t);
      }
      function h(e) {
        return e.match(/youtube\.com\/watch/i) || e.match(/youtu\.be/i)
          ? "youtube"
          : e.match(/vimeo\.com/i)
          ? "vimeo"
          : e.match(/\b.mov\b/i)
          ? "quicktime"
          : e.match(/\b.swf\b/i)
          ? "flash"
          : e.match(/\biframe=true\b/i)
          ? "iframe"
          : e.match(/\bajax=true\b/i)
          ? "ajax"
          : e.match(/\bcustom=true\b/i)
          ? "custom"
          : "#" == e.substr(0, 1)
          ? "inline"
          : "image";
      }
      function c() {
        if (doresize && "undefined" != typeof $pp_pic_holder) {
          if (
            ((scroll_pos = _()),
            (contentHeight = $pp_pic_holder.height()),
            (contentwidth = $pp_pic_holder.width()),
            (projectedTop = I / 2 + scroll_pos.scrollTop - contentHeight / 2),
            projectedTop < 0 && (projectedTop = 0),
            contentHeight > I)
          )
            return;
          $pp_pic_holder.css({
            top: projectedTop,
            left: j / 2 + scroll_pos.scrollLeft - contentwidth / 2,
          });
        }
      }
      function _() {
        return self.pageYOffset
          ? { scrollTop: self.pageYOffset, scrollLeft: self.pageXOffset }
          : document.documentElement && document.documentElement.scrollTop
          ? {
              scrollTop: document.documentElement.scrollTop,
              scrollLeft: document.documentElement.scrollLeft,
            }
          : document.body
          ? {
              scrollTop: document.body.scrollTop,
              scrollLeft: document.body.scrollLeft,
            }
          : void 0;
      }
      function g() {
        (I = e(window).height()),
          (j = e(window).width()),
          "undefined" != typeof $pp_overlay &&
            $pp_overlay.height(e(document).height()).width(j);
      }
      function m() {
        isSet &&
        settings.overlay_gallery &&
        "image" == h(pp_images[set_position])
          ? ((itemWidth = 57),
            (navWidth =
              "facebook" == settings.theme || "pp_default" == settings.theme
                ? 50
                : 30),
            (itemsPerPage = Math.floor(
              (f.containerWidth - 100 - navWidth) / itemWidth
            )),
            (itemsPerPage =
              itemsPerPage < pp_images.length
                ? itemsPerPage
                : pp_images.length),
            (totalPage = Math.ceil(pp_images.length / itemsPerPage) - 1),
            0 == totalPage
              ? ((navWidth = 0),
                $pp_gallery.find(".pp_arrow_next,.pp_arrow_previous").hide())
              : $pp_gallery.find(".pp_arrow_next,.pp_arrow_previous").show(),
            (galleryWidth = itemsPerPage * itemWidth),
            (fullGalleryWidth = pp_images.length * itemWidth),
            $pp_gallery
              .css("margin-left", -(galleryWidth / 2 + navWidth / 2))
              .find("div:first")
              .width(galleryWidth + 5)
              .find("ul")
              .width(fullGalleryWidth)
              .find("li.selected")
              .removeClass("selected"),
            (goToPage =
              Math.floor(set_position / itemsPerPage) < totalPage
                ? Math.floor(set_position / itemsPerPage)
                : totalPage),
            e.prettyPhoto.changeGalleryPage(goToPage),
            $pp_gallery_li
              .filter(":eq(" + set_position + ")")
              .addClass("selected"))
          : $pp_pic_holder.find(".pp_content").unbind("mouseenter mouseleave");
      }
      function u() {
        if (
          (settings.social_tools &&
            (facebook_like_link = settings.social_tools.replace(
              "{location_href}",
              encodeURIComponent(location.href)
            )),
          (settings.markup = settings.markup.replace("{pp_social}", "")),
          e("body").append(settings.markup),
          ($pp_pic_holder = e(".pp_pic_holder")),
          ($ppt = e(".ppt")),
          ($pp_overlay = e("div.pp_overlay")),
          isSet && settings.overlay_gallery)
        ) {
          (currentGalleryPage = 0), (toInject = "");
          for (var t = 0; t < pp_images.length; t++)
            pp_images[t].match(/\b(jpg|jpeg|png|gif)\b/gi)
              ? ((classname = ""), (img_src = pp_images[t]))
              : ((classname = "default"), (img_src = "")),
              (toInject +=
                "<li class='" +
                classname +
                "'><a href='#'><img src='" +
                img_src +
                "' width='50' alt='' /></a></li>");
          (toInject = settings.gallery_markup.replace(/{gallery}/g, toInject)),
            $pp_pic_holder.find("#pp_full_res").after(toInject),
            ($pp_gallery = e(".pp_pic_holder .pp_gallery")),
            ($pp_gallery_li = $pp_gallery.find("li")),
            $pp_gallery.find(".pp_arrow_next").click(function () {
              return (
                e.prettyPhoto.changeGalleryPage("next"),
                e.prettyPhoto.stopSlideshow(),
                !1
              );
            }),
            $pp_gallery.find(".pp_arrow_previous").click(function () {
              return (
                e.prettyPhoto.changeGalleryPage("previous"),
                e.prettyPhoto.stopSlideshow(),
                !1
              );
            }),
            $pp_pic_holder.find(".pp_content").hover(
              function () {
                $pp_pic_holder.find(".pp_gallery:not(.disabled)").fadeIn();
              },
              function () {
                $pp_pic_holder.find(".pp_gallery:not(.disabled)").fadeOut();
              }
            ),
            (itemWidth = 57),
            $pp_gallery_li.each(function (t) {
              e(this)
                .find("a")
                .click(function () {
                  return (
                    e.prettyPhoto.changePage(t),
                    e.prettyPhoto.stopSlideshow(),
                    !1
                  );
                });
            });
        }
        settings.slideshow &&
          ($pp_pic_holder
            .find(".pp_nav")
            .prepend('<a href="#" class="pp_play">Play</a>'),
          $pp_pic_holder.find(".pp_nav .pp_play").click(function () {
            return e.prettyPhoto.startSlideshow(), !1;
          })),
          $pp_pic_holder.attr("class", "pp_pic_holder " + settings.theme),
          $pp_overlay
            .css({
              opacity: 0,
              height: e(document).height(),
              width: e(window).width(),
            })
            .bind("click", function () {
              settings.modal || e.prettyPhoto.close();
            }),
          e("a.pp_close").bind("click", function () {
            return e.prettyPhoto.close(), !1;
          }),
          settings.allow_expand &&
            e("a.pp_expand").bind("click", function () {
              return (
                e(this).hasClass("pp_expand")
                  ? (e(this).removeClass("pp_expand").addClass("pp_contract"),
                    (doresize = !1))
                  : (e(this).removeClass("pp_contract").addClass("pp_expand"),
                    (doresize = !0)),
                n(function () {
                  e.prettyPhoto.open();
                }),
                !1
              );
            }),
          $pp_pic_holder
            .find(".pp_previous, .pp_nav .pp_arrow_previous")
            .bind("click", function () {
              return (
                e.prettyPhoto.changePage("previous"),
                e.prettyPhoto.stopSlideshow(),
                !1
              );
            }),
          $pp_pic_holder
            .find(".pp_next, .pp_nav .pp_arrow_next")
            .bind("click", function () {
              return (
                e.prettyPhoto.changePage("next"),
                e.prettyPhoto.stopSlideshow(),
                !1
              );
            }),
          c();
      }
      a = jQuery.extend(
        {
          hook: "rel",
          animation_speed: "fast",
          ajaxcallback: function () {},
          slideshow: 5e3,
          autoplay_slideshow: !1,
          opacity: 0.8,
          show_title: !0,
          allow_resize: !0,
          allow_expand: !0,
          default_width: 500,
          default_height: 344,
          counter_separator_label: "/",
          theme: "pp_default",
          horizontal_padding: 20,
          hideflash: !1,
          wmode: "opaque",
          autoplay: !0,
          modal: !1,
          deeplinking: !0,
          overlay_gallery: !0,
          overlay_gallery_max: 30,
          keyboard_shortcuts: !0,
          changepicturecallback: function () {},
          callback: function () {},
          ie6_fallback: !0,
          markup:
            '<div class="pp_pic_holder"> 						<div class="ppt">&nbsp;</div> 						<div class="pp_top"> 							<div class="pp_left"></div> 							<div class="pp_middle"></div> 							<div class="pp_right"></div> 						</div> 						<div class="pp_content_container"> 							<div class="pp_left"> 							<div class="pp_right"> 								<div class="pp_content"> 									<div class="pp_loaderIcon"></div> 									<div class="pp_fade"> 										<a href="#" class="pp_expand" title="Expand the image">Expand</a> 										<div class="pp_hoverContainer"> 											<a class="pp_next" href="#">next</a> 											<a class="pp_previous" href="#">previous</a> 										</div> 										<div id="pp_full_res"></div> 										<div class="pp_details"> 											<div class="pp_nav"> 												<a href="#" class="pp_arrow_previous">Previous</a> 												<p class="currentTextHolder">0/0</p> 												<a href="#" class="pp_arrow_next">Next</a> 											</div> 											<p class="pp_description"></p> 											<div class="pp_social">{pp_social}</div> 											<a class="pp_close" href="#">Close</a> 										</div> 									</div> 								</div> 							</div> 							</div> 						</div> 						<div class="pp_bottom"> 							<div class="pp_left"></div> 							<div class="pp_middle"></div> 							<div class="pp_right"></div> 						</div> 					</div> 					<div class="pp_overlay"></div>',
          gallery_markup:
            '<div class="pp_gallery"> 								<a href="#" class="pp_arrow_previous">Previous</a> 								<div> 									<ul> 										{gallery} 									</ul> 								</div> 								<a href="#" class="pp_arrow_next">Next</a> 							</div>',
          image_markup: '<img id="fullResImage" src="{path}" />',
          flash_markup:
            '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="{width}" height="{height}"><param name="wmode" value="{wmode}" /><param name="allowfullscreen" value="true" /><param name="allowscriptaccess" value="always" /><param name="movie" value="{path}" /><embed src="{path}" type="application/x-shockwave-flash" allowfullscreen="true" allowscriptaccess="always" width="{width}" height="{height}" wmode="{wmode}"></embed></object>',
          quicktime_markup:
            '<object classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" height="{height}" width="{width}"><param name="src" value="{path}"><param name="autoplay" value="{autoplay}"><param name="type" value="video/quicktime"><embed src="{path}" height="{height}" width="{width}" autoplay="{autoplay}" type="video/quicktime" pluginspage="http://www.apple.com/quicktime/download/"></embed></object>',
          iframe_markup:
            '<iframe src ="{path}" width="{width}" height="{height}" frameborder="no"></iframe>',
          inline_markup: '<div class="pp_inline">{content}</div>',
          custom_markup: "",
          social_tools:
            '<div class="twitter"><a href="http://twitter.com/share" class="twitter-share-button" data-count="none">Tweet</a><script type="text/javascript" src="http://platform.twitter.com/widgets.js"></script></div><div class="facebook"><iframe src="//www.facebook.com/plugins/like.php?locale=en_US&href={location_href}&layout=button_count&show_faces=true&width=500&action=like&font&colorscheme=light&height=23" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:500px; height:23px;" allowTransparency="true"></iframe></div>',
        },
        a
      );
      var f,
        v,
        y,
        w,
        b,
        k,
        P,
        x = this,
        $ = !1,
        I = e(window).height(),
        j = e(window).width();
      return (
        (doresize = !0),
        (scroll_pos = _()),
        e(window)
          .unbind("resize.prettyphoto")
          .bind("resize.prettyphoto", function () {
            c(), g();
          }),
        a.keyboard_shortcuts &&
          e(document)
            .unbind("keydown.prettyphoto")
            .bind("keydown.prettyphoto", function (t) {
              if (
                "undefined" != typeof $pp_pic_holder &&
                $pp_pic_holder.is(":visible")
              )
                switch (t.keyCode) {
                  case 37:
                    e.prettyPhoto.changePage("previous"), t.preventDefault();
                    break;
                  case 39:
                    e.prettyPhoto.changePage("next"), t.preventDefault();
                    break;
                  case 27:
                    settings.modal || e.prettyPhoto.close(), t.preventDefault();
                }
            }),
        (e.prettyPhoto.initialize = function () {
          return (
            (settings = a),
            "pp_default" == settings.theme &&
              (settings.horizontal_padding = 16),
            (theRel = e(this).attr(settings.hook)),
            (galleryRegExp = /\[(?:.*)\]/),
            (isSet = galleryRegExp.exec(theRel) ? !0 : !1),
            (pp_images = isSet
              ? jQuery.map(x, function (t) {
                  return -1 != e(t).attr(settings.hook).indexOf(theRel)
                    ? e(t).attr("href")
                    : void 0;
                })
              : e.makeArray(e(this).attr("href"))),
            (pp_titles = isSet
              ? jQuery.map(x, function (t) {
                  return -1 != e(t).attr(settings.hook).indexOf(theRel)
                    ? e(t).find("img").attr("alt")
                      ? e(t).find("img").attr("alt")
                      : ""
                    : void 0;
                })
              : e.makeArray(e(this).find("img").attr("alt"))),
            (pp_descriptions = isSet
              ? jQuery.map(x, function (t) {
                  return -1 != e(t).attr(settings.hook).indexOf(theRel)
                    ? e(t).attr("title")
                      ? e(t).attr("title")
                      : ""
                    : void 0;
                })
              : e.makeArray(e(this).attr("title"))),
            pp_images.length > settings.overlay_gallery_max &&
              (settings.overlay_gallery = !1),
            (set_position = jQuery.inArray(e(this).attr("href"), pp_images)),
            (rel_index = isSet
              ? set_position
              : e("a[" + settings.hook + "^='" + theRel + "']").index(e(this))),
            u(this),
            settings.allow_resize &&
              e(window).bind("scroll.prettyphoto", function () {
                c();
              }),
            e.prettyPhoto.open(),
            !1
          );
        }),
        (e.prettyPhoto.open = function (t) {
          return (
            "undefined" == typeof settings &&
              ((settings = a),
              (pp_images = e.makeArray(arguments[0])),
              (pp_titles = e.makeArray(arguments[1] ? arguments[1] : "")),
              (pp_descriptions = e.makeArray(arguments[2] ? arguments[2] : "")),
              (isSet = pp_images.length > 1 ? !0 : !1),
              (set_position = arguments[3] ? arguments[3] : 0),
              u(t.target)),
            settings.hideflash &&
              e("object,embed,iframe[src*=youtube],iframe[src*=vimeo]").css(
                "visibility",
                "hidden"
              ),
            r(e(pp_images).size()),
            e(".pp_loaderIcon").show(),
            settings.deeplinking && i(),
            settings.social_tools &&
              ((facebook_like_link = settings.social_tools.replace(
                "{location_href}",
                encodeURIComponent(location.href)
              )),
              $pp_pic_holder.find(".pp_social").html(facebook_like_link)),
            $ppt.is(":hidden") && $ppt.css("opacity", 0).show(),
            $pp_overlay
              .show()
              .fadeTo(settings.animation_speed, settings.opacity),
            $pp_pic_holder
              .find(".currentTextHolder")
              .text(
                set_position +
                  1 +
                  settings.counter_separator_label +
                  e(pp_images).size()
              ),
            "undefined" != typeof pp_descriptions[set_position] &&
            "" != pp_descriptions[set_position]
              ? $pp_pic_holder
                  .find(".pp_description")
                  .show()
                  .html(unescape(pp_descriptions[set_position]))
              : $pp_pic_holder.find(".pp_description").hide(),
            (movie_width = parseFloat(o("width", pp_images[set_position]))
              ? o("width", pp_images[set_position])
              : settings.default_width.toString()),
            (movie_height = parseFloat(o("height", pp_images[set_position]))
              ? o("height", pp_images[set_position])
              : settings.default_height.toString()),
            ($ = !1),
            -1 != movie_height.indexOf("%") &&
              ((movie_height = parseFloat(
                (e(window).height() * parseFloat(movie_height)) / 100 - 150
              )),
              ($ = !0)),
            -1 != movie_width.indexOf("%") &&
              ((movie_width = parseFloat(
                (e(window).width() * parseFloat(movie_width)) / 100 - 150
              )),
              ($ = !0)),
            $pp_pic_holder.fadeIn(function () {
              switch (
                ($ppt.html(
                  settings.show_title &&
                    "" != pp_titles[set_position] &&
                    "undefined" != typeof pp_titles[set_position]
                    ? unescape(pp_titles[set_position])
                    : "&nbsp;"
                ),
                (imgPreloader = ""),
                (skipInjection = !1),
                h(pp_images[set_position]))
              ) {
                case "image":
                  (imgPreloader = new Image()),
                    (nextImage = new Image()),
                    isSet &&
                      set_position < e(pp_images).size() - 1 &&
                      (nextImage.src = pp_images[set_position + 1]),
                    (prevImage = new Image()),
                    isSet &&
                      pp_images[set_position - 1] &&
                      (prevImage.src = pp_images[set_position - 1]),
                    ($pp_pic_holder.find("#pp_full_res")[0].innerHTML =
                      settings.image_markup.replace(
                        /{path}/g,
                        pp_images[set_position]
                      )),
                    (imgPreloader.onload = function () {
                      (f = l(imgPreloader.width, imgPreloader.height)), s();
                    }),
                    (imgPreloader.onerror = function () {
                      alert(
                        "Image cannot be loaded. Make sure the path is correct and image exist."
                      ),
                        e.prettyPhoto.close();
                    }),
                    (imgPreloader.src = pp_images[set_position]);
                  break;
                case "youtube":
                  (f = l(movie_width, movie_height)),
                    (movie_id = o("v", pp_images[set_position])),
                    "" == movie_id &&
                      ((movie_id = pp_images[set_position].split("youtu.be/")),
                      (movie_id = movie_id[1]),
                      movie_id.indexOf("?") > 0 &&
                        (movie_id = movie_id.substr(0, movie_id.indexOf("?"))),
                      movie_id.indexOf("&") > 0 &&
                        (movie_id = movie_id.substr(0, movie_id.indexOf("&")))),
                    (movie = "http://www.youtube.com/embed/" + movie_id),
                    (movie += o("rel", pp_images[set_position])
                      ? "?rel=" + o("rel", pp_images[set_position])
                      : "?rel=1"),
                    settings.autoplay && (movie += "&autoplay=1"),
                    (toInject = settings.iframe_markup
                      .replace(/{width}/g, f.width)
                      .replace(/{height}/g, f.height)
                      .replace(/{wmode}/g, settings.wmode)
                      .replace(/{path}/g, movie));
                  break;
                case "vimeo":
                  (f = l(movie_width, movie_height)),
                    (movie_id = pp_images[set_position]);
                  var t = /http(s?):\/\/(www\.)?vimeo.com\/(\d+)/,
                    i = movie_id.match(t);
                  (movie =
                    "http://player.vimeo.com/video/" +
                    i[3] +
                    "?title=0&byline=0&portrait=0"),
                    settings.autoplay && (movie += "&autoplay=1;"),
                    (vimeo_width = f.width + "/embed/?moog_width=" + f.width),
                    (toInject = settings.iframe_markup
                      .replace(/{width}/g, vimeo_width)
                      .replace(/{height}/g, f.height)
                      .replace(/{path}/g, movie));
                  break;
                case "quicktime":
                  (f = l(movie_width, movie_height)),
                    (f.height += 15),
                    (f.contentHeight += 15),
                    (f.containerHeight += 15),
                    (toInject = settings.quicktime_markup
                      .replace(/{width}/g, f.width)
                      .replace(/{height}/g, f.height)
                      .replace(/{wmode}/g, settings.wmode)
                      .replace(/{path}/g, pp_images[set_position])
                      .replace(/{autoplay}/g, settings.autoplay));
                  break;
                case "flash":
                  (f = l(movie_width, movie_height)),
                    (flash_vars = pp_images[set_position]),
                    (flash_vars = flash_vars.substring(
                      pp_images[set_position].indexOf("flashvars") + 10,
                      pp_images[set_position].length
                    )),
                    (filename = pp_images[set_position]),
                    (filename = filename.substring(0, filename.indexOf("?"))),
                    (toInject = settings.flash_markup
                      .replace(/{width}/g, f.width)
                      .replace(/{height}/g, f.height)
                      .replace(/{wmode}/g, settings.wmode)
                      .replace(/{path}/g, filename + "?" + flash_vars));
                  break;
                case "iframe":
                  (f = l(movie_width, movie_height)),
                    (frame_url = pp_images[set_position]),
                    (frame_url = frame_url.substr(
                      0,
                      frame_url.indexOf("iframe") - 1
                    )),
                    (toInject = settings.iframe_markup
                      .replace(/{width}/g, f.width)
                      .replace(/{height}/g, f.height)
                      .replace(/{path}/g, frame_url));
                  break;
                case "ajax":
                  (doresize = !1),
                    (f = l(movie_width, movie_height)),
                    (doresize = !0),
                    (skipInjection = !0),
                    e.get(pp_images[set_position], function (e) {
                      (toInject = settings.inline_markup.replace(
                        /{content}/g,
                        e
                      )),
                        ($pp_pic_holder.find("#pp_full_res")[0].innerHTML =
                          toInject),
                        s();
                    });
                  break;
                case "custom":
                  (f = l(movie_width, movie_height)),
                    (toInject = settings.custom_markup);
                  break;
                case "inline":
                  (myClone = e(pp_images[set_position])
                    .clone()
                    .append('<br clear="all" />')
                    .css({ width: settings.default_width })
                    .wrapInner(
                      '<div id="pp_full_res"><div class="pp_inline"></div></div>'
                    )
                    .appendTo(e("body"))
                    .show()),
                    (doresize = !1),
                    (f = l(e(myClone).width(), e(myClone).height())),
                    (doresize = !0),
                    e(myClone).remove(),
                    (toInject = settings.inline_markup.replace(
                      /{content}/g,
                      e(pp_images[set_position]).html()
                    ));
              }
              imgPreloader ||
                skipInjection ||
                (($pp_pic_holder.find("#pp_full_res")[0].innerHTML = toInject),
                s());
            }),
            !1
          );
        }),
        (e.prettyPhoto.changePage = function (t) {
          (currentGalleryPage = 0),
            "previous" == t
              ? (set_position--,
                set_position < 0 && (set_position = e(pp_images).size() - 1))
              : "next" == t
              ? (set_position++,
                set_position > e(pp_images).size() - 1 && (set_position = 0))
              : (set_position = t),
            (rel_index = set_position),
            doresize || (doresize = !0),
            settings.allow_expand &&
              e(".pp_contract")
                .removeClass("pp_contract")
                .addClass("pp_expand"),
            n(function () {
              e.prettyPhoto.open();
            });
        }),
        (e.prettyPhoto.changeGalleryPage = function (e) {
          "next" == e
            ? (currentGalleryPage++,
              currentGalleryPage > totalPage && (currentGalleryPage = 0))
            : "previous" == e
            ? (currentGalleryPage--,
              currentGalleryPage < 0 && (currentGalleryPage = totalPage))
            : (currentGalleryPage = e),
            (slide_speed =
              "next" == e || "previous" == e ? settings.animation_speed : 0),
            (slide_to = currentGalleryPage * itemsPerPage * itemWidth),
            $pp_gallery.find("ul").animate({ left: -slide_to }, slide_speed);
        }),
        (e.prettyPhoto.startSlideshow = function () {
          "undefined" == typeof P
            ? ($pp_pic_holder
                .find(".pp_play")
                .unbind("click")
                .removeClass("pp_play")
                .addClass("pp_pause")
                .click(function () {
                  return e.prettyPhoto.stopSlideshow(), !1;
                }),
              (P = setInterval(
                e.prettyPhoto.startSlideshow,
                settings.slideshow
              )))
            : e.prettyPhoto.changePage("next");
        }),
        (e.prettyPhoto.stopSlideshow = function () {
          $pp_pic_holder
            .find(".pp_pause")
            .unbind("click")
            .removeClass("pp_pause")
            .addClass("pp_play")
            .click(function () {
              return e.prettyPhoto.startSlideshow(), !1;
            }),
            clearInterval(P),
            (P = void 0);
        }),
        (e.prettyPhoto.close = function () {
          $pp_overlay.is(":animated") ||
            (e.prettyPhoto.stopSlideshow(),
            $pp_pic_holder
              .stop()
              .find("object,embed")
              .css("visibility", "hidden"),
            e("div.pp_pic_holder,div.ppt,.pp_fade").fadeOut(
              settings.animation_speed,
              function () {
                e(this).remove();
              }
            ),
            $pp_overlay.fadeOut(settings.animation_speed, function () {
              settings.hideflash &&
                e("object,embed,iframe[src*=youtube],iframe[src*=vimeo]").css(
                  "visibility",
                  "visible"
                ),
                e(this).remove(),
                e(window).unbind("scroll.prettyphoto"),
                p(),
                settings.callback(),
                (doresize = !0),
                (v = !1),
                delete settings;
            }));
        }),
        !pp_alreadyInitialized &&
          t() &&
          ((pp_alreadyInitialized = !0),
          (hashIndex = t()),
          (hashRel = hashIndex),
          (hashIndex = hashIndex.substring(
            hashIndex.indexOf("/") + 1,
            hashIndex.length - 1
          )),
          (hashRel = hashRel.substring(0, hashRel.indexOf("/"))),
          setTimeout(function () {
            e(
              "a[" + a.hook + "^='" + hashRel + "']:eq(" + hashIndex + ")"
            ).trigger("click");
          }, 50)),
        this.unbind("click.prettyphoto").bind(
          "click.prettyphoto",
          e.prettyPhoto.initialize
        )
      );
    });
})(jQuery);
var pp_alreadyInitialized = !1;

/*
 *  jQuery OwlCarousel v1.3.3
 *
 *  Copyright (c) 2013 Bartosz Wojciechowski
 *  http://www.owlgraphic.com/owlcarousel/
 *
 *  Licensed under MIT
 *
 */
"function" != typeof Object.create &&
  (Object.create = function (t) {
    function i() {}
    return (i.prototype = t), new i();
  }),
  (function (t, i, s) {
    var e = {
      init: function (i, s) {
        (this.$elem = t(s)),
          (this.options = t.extend(
            {},
            t.fn.owlCarousel.options,
            this.$elem.data(),
            i
          )),
          (this.userOptions = i),
          this.loadContent();
      },
      loadContent: function () {
        function i(t) {
          var i,
            s = "";
          if ("function" == typeof e.options.jsonSuccess)
            e.options.jsonSuccess.apply(this, [t]);
          else {
            for (i in t.owl) t.owl.hasOwnProperty(i) && (s += t.owl[i].item);
            e.$elem.html(s);
          }
          e.logIn();
        }
        var s,
          e = this;
        "function" == typeof e.options.beforeInit &&
          e.options.beforeInit.apply(this, [e.$elem]),
          "string" == typeof e.options.jsonPath
            ? ((s = e.options.jsonPath), t.getJSON(s, i))
            : e.logIn();
      },
      logIn: function () {
        this.$elem.data("owl-originalStyles", this.$elem.attr("style")),
          this.$elem.data("owl-originalClasses", this.$elem.attr("class")),
          this.$elem.css({ opacity: 0 }),
          (this.orignalItems = this.options.items),
          this.checkBrowser(),
          (this.wrapperWidth = 0),
          (this.checkVisible = null),
          this.setVars();
      },
      setVars: function () {
        return 0 === this.$elem.children().length
          ? !1
          : (this.baseClass(),
            this.eventTypes(),
            (this.$userItems = this.$elem.children()),
            (this.itemsAmount = this.$userItems.length),
            this.wrapItems(),
            (this.$owlItems = this.$elem.find(".owl-item")),
            (this.$owlWrapper = this.$elem.find(".owl-wrapper")),
            (this.playDirection = "next"),
            (this.prevItem = 0),
            (this.prevArr = [0]),
            (this.currentItem = 0),
            this.customEvents(),
            void this.onStartup());
      },
      onStartup: function () {
        this.updateItems(),
          this.calculateAll(),
          this.buildControls(),
          this.updateControls(),
          this.response(),
          this.moveEvents(),
          this.stopOnHover(),
          this.owlStatus(),
          !1 !== this.options.transitionStyle &&
            this.transitionTypes(this.options.transitionStyle),
          !0 === this.options.autoPlay && (this.options.autoPlay = 5e3),
          this.play(),
          this.$elem.find(".owl-wrapper").css("display", "block"),
          this.$elem.is(":visible")
            ? this.$elem.css("opacity", 1)
            : this.watchVisibility(),
          (this.onstartup = !1),
          this.eachMoveUpdate(),
          "function" == typeof this.options.afterInit &&
            this.options.afterInit.apply(this, [this.$elem]);
      },
      eachMoveUpdate: function () {
        !0 === this.options.lazyLoad && this.lazyLoad(),
          !0 === this.options.autoHeight && this.autoHeight(),
          this.onVisibleItems(),
          "function" == typeof this.options.afterAction &&
            this.options.afterAction.apply(this, [this.$elem]);
      },
      updateVars: function () {
        "function" == typeof this.options.beforeUpdate &&
          this.options.beforeUpdate.apply(this, [this.$elem]),
          this.watchVisibility(),
          this.updateItems(),
          this.calculateAll(),
          this.updatePosition(),
          this.updateControls(),
          this.eachMoveUpdate(),
          "function" == typeof this.options.afterUpdate &&
            this.options.afterUpdate.apply(this, [this.$elem]);
      },
      reload: function () {
        var t = this;
        i.setTimeout(function () {
          t.updateVars();
        }, 0);
      },
      watchVisibility: function () {
        var t = this;
        return !1 !== t.$elem.is(":visible")
          ? !1
          : (t.$elem.css({ opacity: 0 }),
            i.clearInterval(t.autoPlayInterval),
            i.clearInterval(t.checkVisible),
            void (t.checkVisible = i.setInterval(function () {
              t.$elem.is(":visible") &&
                (t.reload(),
                t.$elem.animate({ opacity: 1 }, 200),
                i.clearInterval(t.checkVisible));
            }, 500)));
      },
      wrapItems: function () {
        this.$userItems
          .wrapAll('<div class="owl-wrapper">')
          .wrap('<div class="owl-item"></div>'),
          this.$elem
            .find(".owl-wrapper")
            .wrap('<div class="owl-wrapper-outer">'),
          (this.wrapperOuter = this.$elem.find(".owl-wrapper-outer")),
          this.$elem.css("display", "block");
      },
      baseClass: function () {
        var t = this.$elem.hasClass(this.options.baseClass),
          i = this.$elem.hasClass(this.options.theme);
        t || this.$elem.addClass(this.options.baseClass),
          i || this.$elem.addClass(this.options.theme);
      },
      updateItems: function () {
        var i, s;
        if (!1 === this.options.responsive) return !1;
        if (!0 === this.options.singleItem)
          return (
            (this.options.items = this.orignalItems = 1),
            (this.options.itemsCustom = !1),
            (this.options.itemsDesktop = !1),
            (this.options.itemsDesktopSmall = !1),
            (this.options.itemsTablet = !1),
            (this.options.itemsTabletSmall = !1),
            (this.options.itemsMobile = !1)
          );
        if (
          ((i = t(this.options.responsiveBaseWidth).width()),
          i > (this.options.itemsDesktop[0] || this.orignalItems) &&
            (this.options.items = this.orignalItems),
          !1 !== this.options.itemsCustom)
        )
          for (
            this.options.itemsCustom.sort(function (t, i) {
              return t[0] - i[0];
            }),
              s = 0;
            s < this.options.itemsCustom.length;
            s += 1
          )
            this.options.itemsCustom[s][0] <= i &&
              (this.options.items = this.options.itemsCustom[s][1]);
        else
          i <= this.options.itemsDesktop[0] &&
            !1 !== this.options.itemsDesktop &&
            (this.options.items = this.options.itemsDesktop[1]),
            i <= this.options.itemsDesktopSmall[0] &&
              !1 !== this.options.itemsDesktopSmall &&
              (this.options.items = this.options.itemsDesktopSmall[1]),
            i <= this.options.itemsTablet[0] &&
              !1 !== this.options.itemsTablet &&
              (this.options.items = this.options.itemsTablet[1]),
            i <= this.options.itemsTabletSmall[0] &&
              !1 !== this.options.itemsTabletSmall &&
              (this.options.items = this.options.itemsTabletSmall[1]),
            i <= this.options.itemsMobile[0] &&
              !1 !== this.options.itemsMobile &&
              (this.options.items = this.options.itemsMobile[1]);
        this.options.items > this.itemsAmount &&
          !0 === this.options.itemsScaleUp &&
          (this.options.items = this.itemsAmount);
      },
      response: function () {
        var s,
          e,
          o = this;
        return !0 !== o.options.responsive
          ? !1
          : ((e = t(i).width()),
            (o.resizer = function () {
              t(i).width() !== e &&
                (!1 !== o.options.autoPlay &&
                  i.clearInterval(o.autoPlayInterval),
                i.clearTimeout(s),
                (s = i.setTimeout(function () {
                  (e = t(i).width()), o.updateVars();
                }, o.options.responsiveRefreshRate)));
            }),
            void t(i).resize(o.resizer));
      },
      updatePosition: function () {
        this.jumpTo(this.currentItem),
          !1 !== this.options.autoPlay && this.checkAp();
      },
      appendItemsSizes: function () {
        var i = this,
          s = 0,
          e = i.itemsAmount - i.options.items;
        i.$owlItems.each(function (o) {
          var n = t(this);
          n.css({ width: i.itemWidth }).data("owl-item", Number(o)),
            (0 === o % i.options.items || o === e) && (o > e || (s += 1)),
            n.data("owl-roundPages", s);
        });
      },
      appendWrapperSizes: function () {
        this.$owlWrapper.css({
          width: this.$owlItems.length * this.itemWidth * 2,
          left: 0,
        }),
          this.appendItemsSizes();
      },
      calculateAll: function () {
        this.calculateWidth(),
          this.appendWrapperSizes(),
          this.loops(),
          this.max();
      },
      calculateWidth: function () {
        this.itemWidth = Math.round(this.$elem.width() / this.options.items);
      },
      max: function () {
        var t =
          -1 *
          (this.itemsAmount * this.itemWidth -
            this.options.items * this.itemWidth);
        return (
          this.options.items > this.itemsAmount
            ? (this.maximumPixels = t = this.maximumItem = 0)
            : ((this.maximumItem = this.itemsAmount - this.options.items),
              (this.maximumPixels = t)),
          t
        );
      },
      min: function () {
        return 0;
      },
      loops: function () {
        var i,
          s,
          e = 0,
          o = 0;
        for (
          this.positionsInArray = [0], this.pagesInArray = [], i = 0;
          i < this.itemsAmount;
          i += 1
        )
          (o += this.itemWidth),
            this.positionsInArray.push(-o),
            !0 === this.options.scrollPerPage &&
              ((s = t(this.$owlItems[i])),
              (s = s.data("owl-roundPages")),
              s !== e &&
                ((this.pagesInArray[e] = this.positionsInArray[i]), (e = s)));
      },
      buildControls: function () {
        (!0 === this.options.navigation || !0 === this.options.pagination) &&
          (this.owlControls = t('<div class="owl-controls"/>')
            .toggleClass("clickable", !this.browser.isTouch)
            .appendTo(this.$elem)),
          !0 === this.options.pagination && this.buildPagination(),
          !0 === this.options.navigation && this.buildButtons();
      },
      buildButtons: function () {
        var i = this,
          s = t('<div class="owl-buttons"/>');
        i.owlControls.append(s),
          (i.buttonPrev = t("<div/>", {
            class: "owl-prev",
            html: i.options.navigationText[0] || "",
          })),
          (i.buttonNext = t("<div/>", {
            class: "owl-next",
            html: i.options.navigationText[1] || "",
          })),
          s.append(i.buttonPrev).append(i.buttonNext),
          s.on(
            "touchstart.owlControls mousedown.owlControls",
            'div[class^="owl"]',
            function (t) {
              t.preventDefault();
            }
          ),
          s.on(
            "touchend.owlControls mouseup.owlControls",
            'div[class^="owl"]',
            function (s) {
              s.preventDefault(),
                t(this).hasClass("owl-next") ? i.next() : i.prev();
            }
          );
      },
      buildPagination: function () {
        var i = this;
        (i.paginationWrapper = t('<div class="owl-pagination"/>')),
          i.owlControls.append(i.paginationWrapper),
          i.paginationWrapper.on(
            "touchend.owlControls mouseup.owlControls",
            ".owl-page",
            function (s) {
              s.preventDefault(),
                Number(t(this).data("owl-page")) !== i.currentItem &&
                  i.goTo(Number(t(this).data("owl-page")), !0);
            }
          );
      },
      updatePagination: function () {
        var i, s, e, o, n, a;
        if (!1 === this.options.pagination) return !1;
        for (
          this.paginationWrapper.html(""),
            i = 0,
            s = this.itemsAmount - (this.itemsAmount % this.options.items),
            o = 0;
          o < this.itemsAmount;
          o += 1
        )
          0 === o % this.options.items &&
            ((i += 1),
            s === o && (e = this.itemsAmount - this.options.items),
            (n = t("<div/>", { class: "owl-page" })),
            (a = t("<span></span>", {
              text: !0 === this.options.paginationNumbers ? i : "",
              class: !0 === this.options.paginationNumbers ? "owl-numbers" : "",
            })),
            n.append(a),
            n.data("owl-page", s === o ? e : o),
            n.data("owl-roundPages", i),
            this.paginationWrapper.append(n));
        this.checkPagination();
      },
      checkPagination: function () {
        var i = this;
        return !1 === i.options.pagination
          ? !1
          : void i.paginationWrapper.find(".owl-page").each(function () {
              t(this).data("owl-roundPages") ===
                t(i.$owlItems[i.currentItem]).data("owl-roundPages") &&
                (i.paginationWrapper.find(".owl-page").removeClass("active"),
                t(this).addClass("active"));
            });
      },
      checkNavigation: function () {
        return !1 === this.options.navigation
          ? !1
          : void (
              !1 === this.options.rewindNav &&
              (0 === this.currentItem && 0 === this.maximumItem
                ? (this.buttonPrev.addClass("disabled"),
                  this.buttonNext.addClass("disabled"))
                : 0 === this.currentItem && 0 !== this.maximumItem
                ? (this.buttonPrev.addClass("disabled"),
                  this.buttonNext.removeClass("disabled"))
                : this.currentItem === this.maximumItem
                ? (this.buttonPrev.removeClass("disabled"),
                  this.buttonNext.addClass("disabled"))
                : 0 !== this.currentItem &&
                  this.currentItem !== this.maximumItem &&
                  (this.buttonPrev.removeClass("disabled"),
                  this.buttonNext.removeClass("disabled")))
            );
      },
      updateControls: function () {
        this.updatePagination(),
          this.checkNavigation(),
          this.owlControls &&
            (this.options.items >= this.itemsAmount
              ? this.owlControls.hide()
              : this.owlControls.show());
      },
      destroyControls: function () {
        this.owlControls && this.owlControls.remove();
      },
      next: function (t) {
        if (this.isTransition) return !1;
        if (
          ((this.currentItem +=
            !0 === this.options.scrollPerPage ? this.options.items : 1),
          this.currentItem >
            this.maximumItem +
              (!0 === this.options.scrollPerPage ? this.options.items - 1 : 0))
        ) {
          if (!0 !== this.options.rewindNav)
            return (this.currentItem = this.maximumItem), !1;
          (this.currentItem = 0), (t = "rewind");
        }
        this.goTo(this.currentItem, t);
      },
      prev: function (t) {
        if (this.isTransition) return !1;
        if (
          ((this.currentItem =
            !0 === this.options.scrollPerPage &&
            0 < this.currentItem &&
            this.currentItem < this.options.items
              ? 0
              : this.currentItem -
                (!0 === this.options.scrollPerPage ? this.options.items : 1)),
          0 > this.currentItem)
        ) {
          if (!0 !== this.options.rewindNav) return (this.currentItem = 0), !1;
          (this.currentItem = this.maximumItem), (t = "rewind");
        }
        this.goTo(this.currentItem, t);
      },
      goTo: function (t, s, e) {
        var o = this;
        return o.isTransition
          ? !1
          : ("function" == typeof o.options.beforeMove &&
              o.options.beforeMove.apply(this, [o.$elem]),
            t >= o.maximumItem ? (t = o.maximumItem) : 0 >= t && (t = 0),
            (o.currentItem = o.owl.currentItem = t),
            !1 !== o.options.transitionStyle &&
            "drag" !== e &&
            1 === o.options.items &&
            !0 === o.browser.support3d
              ? (o.swapSpeed(0),
                !0 === o.browser.support3d
                  ? o.transition3d(o.positionsInArray[t])
                  : o.css2slide(o.positionsInArray[t], 1),
                o.afterGo(),
                o.singleItemTransition(),
                !1)
              : ((t = o.positionsInArray[t]),
                !0 === o.browser.support3d
                  ? ((o.isCss3Finish = !1),
                    !0 === s
                      ? (o.swapSpeed("paginationSpeed"),
                        i.setTimeout(function () {
                          o.isCss3Finish = !0;
                        }, o.options.paginationSpeed))
                      : "rewind" === s
                      ? (o.swapSpeed(o.options.rewindSpeed),
                        i.setTimeout(function () {
                          o.isCss3Finish = !0;
                        }, o.options.rewindSpeed))
                      : (o.swapSpeed("slideSpeed"),
                        i.setTimeout(function () {
                          o.isCss3Finish = !0;
                        }, o.options.slideSpeed)),
                    o.transition3d(t))
                  : !0 === s
                  ? o.css2slide(t, o.options.paginationSpeed)
                  : "rewind" === s
                  ? o.css2slide(t, o.options.rewindSpeed)
                  : o.css2slide(t, o.options.slideSpeed),
                void o.afterGo()));
      },
      jumpTo: function (t) {
        "function" == typeof this.options.beforeMove &&
          this.options.beforeMove.apply(this, [this.$elem]),
          t >= this.maximumItem || -1 === t
            ? (t = this.maximumItem)
            : 0 >= t && (t = 0),
          this.swapSpeed(0),
          !0 === this.browser.support3d
            ? this.transition3d(this.positionsInArray[t])
            : this.css2slide(this.positionsInArray[t], 1),
          (this.currentItem = this.owl.currentItem = t),
          this.afterGo();
      },
      afterGo: function () {
        this.prevArr.push(this.currentItem),
          (this.prevItem = this.owl.prevItem =
            this.prevArr[this.prevArr.length - 2]),
          this.prevArr.shift(0),
          this.prevItem !== this.currentItem &&
            (this.checkPagination(),
            this.checkNavigation(),
            this.eachMoveUpdate(),
            !1 !== this.options.autoPlay && this.checkAp()),
          "function" == typeof this.options.afterMove &&
            this.prevItem !== this.currentItem &&
            this.options.afterMove.apply(this, [this.$elem]);
      },
      stop: function () {
        (this.apStatus = "stop"), i.clearInterval(this.autoPlayInterval);
      },
      checkAp: function () {
        "stop" !== this.apStatus && this.play();
      },
      play: function () {
        var t = this;
        return (
          (t.apStatus = "play"),
          !1 === t.options.autoPlay
            ? !1
            : (i.clearInterval(t.autoPlayInterval),
              void (t.autoPlayInterval = i.setInterval(function () {
                t.next(!0);
              }, t.options.autoPlay)))
        );
      },
      swapSpeed: function (t) {
        "slideSpeed" === t
          ? this.$owlWrapper.css(this.addCssSpeed(this.options.slideSpeed))
          : "paginationSpeed" === t
          ? this.$owlWrapper.css(this.addCssSpeed(this.options.paginationSpeed))
          : "string" != typeof t && this.$owlWrapper.css(this.addCssSpeed(t));
      },
      addCssSpeed: function (t) {
        return {
          "-webkit-transition": "all " + t + "ms ease",
          "-moz-transition": "all " + t + "ms ease",
          "-o-transition": "all " + t + "ms ease",
          transition: "all " + t + "ms ease",
        };
      },
      removeTransition: function () {
        return {
          "-webkit-transition": "",
          "-moz-transition": "",
          "-o-transition": "",
          transition: "",
        };
      },
      doTranslate: function (t) {
        return {
          "-webkit-transform": "translate3d(" + t + "px, 0px, 0px)",
          "-moz-transform": "translate3d(" + t + "px, 0px, 0px)",
          "-o-transform": "translate3d(" + t + "px, 0px, 0px)",
          "-ms-transform": "translate3d(" + t + "px, 0px, 0px)",
          transform: "translate3d(" + t + "px, 0px,0px)",
        };
      },
      transition3d: function (t) {
        this.$owlWrapper.css(this.doTranslate(t));
      },
      css2move: function (t) {
        this.$owlWrapper.css({ left: t });
      },
      css2slide: function (t, i) {
        var s = this;
        (s.isCssFinish = !1),
          s.$owlWrapper.stop(!0, !0).animate(
            { left: t },
            {
              duration: i || s.options.slideSpeed,
              complete: function () {
                s.isCssFinish = !0;
              },
            }
          );
      },
      checkBrowser: function () {
        var t = s.createElement("div");
        (t.style.cssText =
          "  -moz-transform:translate3d(0px, 0px, 0px); -ms-transform:translate3d(0px, 0px, 0px); -o-transform:translate3d(0px, 0px, 0px); -webkit-transform:translate3d(0px, 0px, 0px); transform:translate3d(0px, 0px, 0px)"),
          (t = t.style.cssText.match(/translate3d\(0px, 0px, 0px\)/g)),
          (this.browser = {
            support3d: null !== t && 1 === t.length,
            isTouch: "ontouchstart" in i || i.navigator.msMaxTouchPoints,
          });
      },
      moveEvents: function () {
        (!1 !== this.options.mouseDrag || !1 !== this.options.touchDrag) &&
          (this.gestures(), this.disabledEvents());
      },
      eventTypes: function () {
        var t = ["s", "e", "x"];
        (this.ev_types = {}),
          !0 === this.options.mouseDrag && !0 === this.options.touchDrag
            ? (t = [
                "touchstart.owl mousedown.owl",
                "touchmove.owl mousemove.owl",
                "touchend.owl touchcancel.owl mouseup.owl",
              ])
            : !1 === this.options.mouseDrag && !0 === this.options.touchDrag
            ? (t = [
                "touchstart.owl",
                "touchmove.owl",
                "touchend.owl touchcancel.owl",
              ])
            : !0 === this.options.mouseDrag &&
              !1 === this.options.touchDrag &&
              (t = ["mousedown.owl", "mousemove.owl", "mouseup.owl"]),
          (this.ev_types.start = t[0]),
          (this.ev_types.move = t[1]),
          (this.ev_types.end = t[2]);
      },
      disabledEvents: function () {
        this.$elem.on("dragstart.owl", function (t) {
          t.preventDefault();
        }),
          this.$elem.on("mousedown.disableTextSelect", function (i) {
            return t(i.target).is("input, textarea, select, option");
          });
      },
      gestures: function () {
        function e(t) {
          if (void 0 !== t.touches)
            return { x: t.touches[0].pageX, y: t.touches[0].pageY };
          if (void 0 === t.touches) {
            if (void 0 !== t.pageX) return { x: t.pageX, y: t.pageY };
            if (void 0 === t.pageX) return { x: t.clientX, y: t.clientY };
          }
        }
        function o(i) {
          "on" === i
            ? (t(s).on(r.ev_types.move, n), t(s).on(r.ev_types.end, a))
            : "off" === i &&
              (t(s).off(r.ev_types.move), t(s).off(r.ev_types.end));
        }
        function n(o) {
          (o = o.originalEvent || o || i.event),
            (r.newPosX = e(o).x - l.offsetX),
            (r.newPosY = e(o).y - l.offsetY),
            (r.newRelativeX = r.newPosX - l.relativePos),
            "function" == typeof r.options.startDragging &&
              !0 !== l.dragging &&
              0 !== r.newRelativeX &&
              ((l.dragging = !0), r.options.startDragging.apply(r, [r.$elem])),
            (8 < r.newRelativeX || -8 > r.newRelativeX) &&
              !0 === r.browser.isTouch &&
              (void 0 !== o.preventDefault
                ? o.preventDefault()
                : (o.returnValue = !1),
              (l.sliding = !0)),
            (10 < r.newPosY || -10 > r.newPosY) &&
              !1 === l.sliding &&
              t(s).off("touchmove.owl"),
            (r.newPosX = Math.max(
              Math.min(r.newPosX, r.newRelativeX / 5),
              r.maximumPixels + r.newRelativeX / 5
            )),
            !0 === r.browser.support3d
              ? r.transition3d(r.newPosX)
              : r.css2move(r.newPosX);
        }
        function a(s) {
          s = s.originalEvent || s || i.event;
          var e;
          (s.target = s.target || s.srcElement),
            (l.dragging = !1),
            !0 !== r.browser.isTouch && r.$owlWrapper.removeClass("grabbing"),
            (r.dragDirection = r.owl.dragDirection =
              0 > r.newRelativeX ? "left" : "right"),
            0 !== r.newRelativeX &&
              ((e = r.getNewPosition()),
              r.goTo(e, !1, "drag"),
              l.targetElement === s.target &&
                !0 !== r.browser.isTouch &&
                (t(s.target).on("click.disable", function (i) {
                  i.stopImmediatePropagation(),
                    i.stopPropagation(),
                    i.preventDefault(),
                    t(i.target).off("click.disable");
                }),
                (s = t._data(s.target, "events").click),
                (e = s.pop()),
                s.splice(0, 0, e))),
            o("off");
        }
        var r = this,
          l = {
            offsetX: 0,
            offsetY: 0,
            baseElWidth: 0,
            relativePos: 0,
            position: null,
            minSwipe: null,
            maxSwipe: null,
            sliding: null,
            dargging: null,
            targetElement: null,
          };
        (r.isCssFinish = !0),
          r.$elem.on(r.ev_types.start, ".owl-wrapper", function (s) {
            s = s.originalEvent || s || i.event;
            var n;
            if (3 === s.which) return !1;
            if (!(r.itemsAmount <= r.options.items)) {
              if (
                (!1 === r.isCssFinish && !r.options.dragBeforeAnimFinish) ||
                (!1 === r.isCss3Finish && !r.options.dragBeforeAnimFinish)
              )
                return !1;
              !1 !== r.options.autoPlay && i.clearInterval(r.autoPlayInterval),
                !0 === r.browser.isTouch ||
                  r.$owlWrapper.hasClass("grabbing") ||
                  r.$owlWrapper.addClass("grabbing"),
                (r.newPosX = 0),
                (r.newRelativeX = 0),
                t(this).css(r.removeTransition()),
                (n = t(this).position()),
                (l.relativePos = n.left),
                (l.offsetX = e(s).x - n.left),
                (l.offsetY = e(s).y - n.top),
                o("on"),
                (l.sliding = !1),
                (l.targetElement = s.target || s.srcElement);
            }
          });
      },
      getNewPosition: function () {
        var t = this.closestItem();
        return (
          t > this.maximumItem
            ? (t = this.currentItem = this.maximumItem)
            : 0 <= this.newPosX && (this.currentItem = t = 0),
          t
        );
      },
      closestItem: function () {
        var i = this,
          s =
            !0 === i.options.scrollPerPage
              ? i.pagesInArray
              : i.positionsInArray,
          e = i.newPosX,
          o = null;
        return (
          t.each(s, function (n, a) {
            e - i.itemWidth / 20 > s[n + 1] &&
            e - i.itemWidth / 20 < a &&
            "left" === i.moveDirection()
              ? ((o = a),
                (i.currentItem =
                  !0 === i.options.scrollPerPage
                    ? t.inArray(o, i.positionsInArray)
                    : n))
              : e + i.itemWidth / 20 < a &&
                e + i.itemWidth / 20 > (s[n + 1] || s[n] - i.itemWidth) &&
                "right" === i.moveDirection() &&
                (!0 === i.options.scrollPerPage
                  ? ((o = s[n + 1] || s[s.length - 1]),
                    (i.currentItem = t.inArray(o, i.positionsInArray)))
                  : ((o = s[n + 1]), (i.currentItem = n + 1)));
          }),
          i.currentItem
        );
      },
      moveDirection: function () {
        var t;
        return (
          0 > this.newRelativeX
            ? ((t = "right"), (this.playDirection = "next"))
            : ((t = "left"), (this.playDirection = "prev")),
          t
        );
      },
      customEvents: function () {
        var t = this;
        t.$elem.on("owl.next", function () {
          t.next();
        }),
          t.$elem.on("owl.prev", function () {
            t.prev();
          }),
          t.$elem.on("owl.play", function (i, s) {
            (t.options.autoPlay = s), t.play(), (t.hoverStatus = "play");
          }),
          t.$elem.on("owl.stop", function () {
            t.stop(), (t.hoverStatus = "stop");
          }),
          t.$elem.on("owl.goTo", function (i, s) {
            t.goTo(s);
          }),
          t.$elem.on("owl.jumpTo", function (i, s) {
            t.jumpTo(s);
          });
      },
      stopOnHover: function () {
        var t = this;
        !0 === t.options.stopOnHover &&
          !0 !== t.browser.isTouch &&
          !1 !== t.options.autoPlay &&
          (t.$elem.on("mouseover", function () {
            t.stop();
          }),
          t.$elem.on("mouseout", function () {
            "stop" !== t.hoverStatus && t.play();
          }));
      },
      lazyLoad: function () {
        var i, s, e, o, n;
        if (!1 === this.options.lazyLoad) return !1;
        for (i = 0; i < this.itemsAmount; i += 1)
          (s = t(this.$owlItems[i])),
            "loaded" !== s.data("owl-loaded") &&
              ((e = s.data("owl-item")),
              (o = s.find(".lazyOwl")),
              "string" != typeof o.data("src")
                ? s.data("owl-loaded", "loaded")
                : (void 0 === s.data("owl-loaded") &&
                    (o.hide(),
                    s.addClass("loading").data("owl-loaded", "checked")),
                  (n =
                    !0 === this.options.lazyFollow
                      ? e >= this.currentItem
                      : !0) &&
                    e < this.currentItem + this.options.items &&
                    o.length &&
                    this.lazyPreload(s, o)));
      },
      lazyPreload: function (t, s) {
        function e() {
          t.data("owl-loaded", "loaded").removeClass("loading"),
            s.removeAttr("data-src"),
            "fade" === a.options.lazyEffect ? s.fadeIn(400) : s.show(),
            "function" == typeof a.options.afterLazyLoad &&
              a.options.afterLazyLoad.apply(this, [a.$elem]);
        }
        function o() {
          (r += 1),
            a.completeImg(s.get(0)) || !0 === n
              ? e()
              : 100 >= r
              ? i.setTimeout(o, 100)
              : e();
        }
        var n,
          a = this,
          r = 0;
        "DIV" === s.prop("tagName")
          ? (s.css("background-image", "url(" + s.data("src") + ")"), (n = !0))
          : (s[0].src = s.data("src")),
          o();
      },
      autoHeight: function () {
        function s() {
          var s = t(n.$owlItems[n.currentItem]).height();
          n.wrapperOuter.css("height", s + "px"),
            n.wrapperOuter.hasClass("autoHeight") ||
              i.setTimeout(function () {
                n.wrapperOuter.addClass("autoHeight");
              }, 0);
        }
        function e() {
          (o += 1),
            n.completeImg(a.get(0))
              ? s()
              : 100 >= o
              ? i.setTimeout(e, 100)
              : n.wrapperOuter.css("height", "");
        }
        var o,
          n = this,
          a = t(n.$owlItems[n.currentItem]).find("img");
        void 0 !== a.get(0) ? ((o = 0), e()) : s();
      },
      completeImg: function (t) {
        return !t.complete ||
          ("undefined" != typeof t.naturalWidth && 0 === t.naturalWidth)
          ? !1
          : !0;
      },
      onVisibleItems: function () {
        var i;
        for (
          !0 === this.options.addClassActive &&
            this.$owlItems.removeClass("active"),
            this.visibleItems = [],
            i = this.currentItem;
          i < this.currentItem + this.options.items;
          i += 1
        )
          this.visibleItems.push(i),
            !0 === this.options.addClassActive &&
              t(this.$owlItems[i]).addClass("active");
        this.owl.visibleItems = this.visibleItems;
      },
      transitionTypes: function (t) {
        (this.outClass = "owl-" + t + "-out"),
          (this.inClass = "owl-" + t + "-in");
      },
      singleItemTransition: function () {
        var t = this,
          i = t.outClass,
          s = t.inClass,
          e = t.$owlItems.eq(t.currentItem),
          o = t.$owlItems.eq(t.prevItem),
          n =
            Math.abs(t.positionsInArray[t.currentItem]) +
            t.positionsInArray[t.prevItem],
          a = Math.abs(t.positionsInArray[t.currentItem]) + t.itemWidth / 2;
        (t.isTransition = !0),
          t.$owlWrapper
            .addClass("owl-origin")
            .css({
              "-webkit-transform-origin": a + "px",
              "-moz-perspective-origin": a + "px",
              "perspective-origin": a + "px",
            }),
          o
            .css({ position: "relative", left: n + "px" })
            .addClass(i)
            .on(
              "webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend",
              function () {
                (t.endPrev = !0),
                  o.off(
                    "webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend"
                  ),
                  t.clearTransStyle(o, i);
              }
            ),
          e
            .addClass(s)
            .on(
              "webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend",
              function () {
                (t.endCurrent = !0),
                  e.off(
                    "webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend"
                  ),
                  t.clearTransStyle(e, s);
              }
            );
      },
      clearTransStyle: function (t, i) {
        t.css({ position: "", left: "" }).removeClass(i),
          this.endPrev &&
            this.endCurrent &&
            (this.$owlWrapper.removeClass("owl-origin"),
            (this.isTransition = this.endCurrent = this.endPrev = !1));
      },
      owlStatus: function () {
        this.owl = {
          userOptions: this.userOptions,
          baseElement: this.$elem,
          userItems: this.$userItems,
          owlItems: this.$owlItems,
          currentItem: this.currentItem,
          prevItem: this.prevItem,
          visibleItems: this.visibleItems,
          isTouch: this.browser.isTouch,
          browser: this.browser,
          dragDirection: this.dragDirection,
        };
      },
      clearEvents: function () {
        this.$elem.off(".owl owl mousedown.disableTextSelect"),
          t(s).off(".owl owl"),
          t(i).off("resize", this.resizer);
      },
      unWrap: function () {
        0 !== this.$elem.children().length &&
          (this.$owlWrapper.unwrap(),
          this.$userItems.unwrap().unwrap(),
          this.owlControls && this.owlControls.remove()),
          this.clearEvents(),
          this.$elem
            .attr("style", this.$elem.data("owl-originalStyles") || "")
            .attr("class", this.$elem.data("owl-originalClasses"));
      },
      destroy: function () {
        this.stop(),
          i.clearInterval(this.checkVisible),
          this.unWrap(),
          this.$elem.removeData();
      },
      reinit: function (i) {
        (i = t.extend({}, this.userOptions, i)),
          this.unWrap(),
          this.init(i, this.$elem);
      },
      addItem: function (t, i) {
        var s;
        return t
          ? 0 === this.$elem.children().length
            ? (this.$elem.append(t), this.setVars(), !1)
            : (this.unWrap(),
              (s = void 0 === i || -1 === i ? -1 : i),
              s >= this.$userItems.length || -1 === s
                ? this.$userItems.eq(-1).after(t)
                : this.$userItems.eq(s).before(t),
              void this.setVars())
          : !1;
      },
      removeItem: function (t) {
        return 0 === this.$elem.children().length
          ? !1
          : ((t = void 0 === t || -1 === t ? -1 : t),
            this.unWrap(),
            this.$userItems.eq(t).remove(),
            void this.setVars());
      },
    };
    (t.fn.owlCarousel = function (i) {
      return this.each(function () {
        if (!0 === t(this).data("owl-init")) return !1;
        t(this).data("owl-init", !0);
        var s = Object.create(e);
        s.init(i, this), t.data(this, "owlCarousel", s);
      });
    }),
      (t.fn.owlCarousel.options = {
        items: 5,
        itemsCustom: !1,
        itemsDesktop: [1199, 4],
        itemsDesktopSmall: [979, 3],
        itemsTablet: [768, 2],
        itemsTabletSmall: !1,
        itemsMobile: [479, 1],
        singleItem: !1,
        itemsScaleUp: !1,
        slideSpeed: 200,
        paginationSpeed: 800,
        rewindSpeed: 1e3,
        autoPlay: !1,
        stopOnHover: !1,
        navigation: !1,
        navigationText: ["prev", "next"],
        rewindNav: !0,
        scrollPerPage: !1,
        pagination: !0,
        paginationNumbers: !1,
        responsive: !0,
        responsiveRefreshRate: 200,
        responsiveBaseWidth: i,
        baseClass: "owl-carousel",
        theme: "owl-theme",
        lazyLoad: !1,
        lazyFollow: !0,
        lazyEffect: "fade",
        autoHeight: !1,
        jsonPath: !1,
        jsonSuccess: !1,
        dragBeforeAnimFinish: !0,
        mouseDrag: !0,
        touchDrag: !0,
        addClassActive: !1,
        transitionStyle: !1,
        beforeUpdate: !1,
        afterUpdate: !1,
        beforeInit: !1,
        afterInit: !1,
        beforeMove: !1,
        afterMove: !1,
        afterAction: !1,
        startDragging: !1,
        afterLazyLoad: !1,
      });
  })(jQuery, window, document);

/*! Stellar.js v0.6.2 | Copyright 2014, Mark Dalgleish | http://markdalgleish.com/projects/stellar.js | http://markdalgleish.mit-license.org */
!(function (a, b, c, d) {
  function e(b, c) {
    (this.element = b),
      (this.options = a.extend({}, g, c)),
      (this._defaults = g),
      (this._name = f),
      this.init();
  }
  var f = "stellar",
    g = {
      scrollProperty: "scroll",
      positionProperty: "position",
      horizontalScrolling: !0,
      verticalScrolling: !0,
      horizontalOffset: 0,
      verticalOffset: 0,
      responsive: !1,
      parallaxBackgrounds: !0,
      parallaxElements: !0,
      hideDistantElements: !0,
      hideElement: function (a) {
        a.hide();
      },
      showElement: function (a) {
        a.show();
      },
    },
    h = {
      scroll: {
        getLeft: function (a) {
          return a.scrollLeft();
        },
        setLeft: function (a, b) {
          a.scrollLeft(b);
        },
        getTop: function (a) {
          return a.scrollTop();
        },
        setTop: function (a, b) {
          a.scrollTop(b);
        },
      },
      position: {
        getLeft: function (a) {
          return -1 * parseInt(a.css("left"), 10);
        },
        getTop: function (a) {
          return -1 * parseInt(a.css("top"), 10);
        },
      },
      margin: {
        getLeft: function (a) {
          return -1 * parseInt(a.css("margin-left"), 10);
        },
        getTop: function (a) {
          return -1 * parseInt(a.css("margin-top"), 10);
        },
      },
      transform: {
        getLeft: function (a) {
          var b = getComputedStyle(a[0])[k];
          return "none" !== b
            ? -1 * parseInt(b.match(/(-?[0-9]+)/g)[4], 10)
            : 0;
        },
        getTop: function (a) {
          var b = getComputedStyle(a[0])[k];
          return "none" !== b
            ? -1 * parseInt(b.match(/(-?[0-9]+)/g)[5], 10)
            : 0;
        },
      },
    },
    i = {
      position: {
        setLeft: function (a, b) {
          a.css("left", b);
        },
        setTop: function (a, b) {
          a.css("top", b);
        },
      },
      transform: {
        setPosition: function (a, b, c, d, e) {
          a[0].style[k] =
            "translate3d(" + (b - c) + "px, " + (d - e) + "px, 0)";
        },
      },
    },
    j = (function () {
      var b,
        c = /^(Moz|Webkit|Khtml|O|ms|Icab)(?=[A-Z])/,
        d = a("script")[0].style,
        e = "";
      for (b in d)
        if (c.test(b)) {
          e = b.match(c)[0];
          break;
        }
      return (
        "WebkitOpacity" in d && (e = "Webkit"),
        "KhtmlOpacity" in d && (e = "Khtml"),
        function (a) {
          return (
            e + (e.length > 0 ? a.charAt(0).toUpperCase() + a.slice(1) : a)
          );
        }
      );
    })(),
    k = j("transform"),
    l =
      a("<div />", { style: "background:#fff" }).css(
        "background-position-x"
      ) !== d,
    m = l
      ? function (a, b, c) {
          a.css({ "background-position-x": b, "background-position-y": c });
        }
      : function (a, b, c) {
          a.css("background-position", b + " " + c);
        },
    n = l
      ? function (a) {
          return [
            a.css("background-position-x"),
            a.css("background-position-y"),
          ];
        }
      : function (a) {
          return a.css("background-position").split(" ");
        },
    o =
      b.requestAnimationFrame ||
      b.webkitRequestAnimationFrame ||
      b.mozRequestAnimationFrame ||
      b.oRequestAnimationFrame ||
      b.msRequestAnimationFrame ||
      function (a) {
        setTimeout(a, 1e3 / 60);
      };
  (e.prototype = {
    init: function () {
      (this.options.name = f + "_" + Math.floor(1e9 * Math.random())),
        this._defineElements(),
        this._defineGetters(),
        this._defineSetters(),
        this._handleWindowLoadAndResize(),
        this._detectViewport(),
        this.refresh({ firstLoad: !0 }),
        "scroll" === this.options.scrollProperty
          ? this._handleScrollEvent()
          : this._startAnimationLoop();
    },
    _defineElements: function () {
      this.element === c.body && (this.element = b),
        (this.$scrollElement = a(this.element)),
        (this.$element = this.element === b ? a("body") : this.$scrollElement),
        (this.$viewportElement =
          this.options.viewportElement !== d
            ? a(this.options.viewportElement)
            : this.$scrollElement[0] === b ||
              "scroll" === this.options.scrollProperty
            ? this.$scrollElement
            : this.$scrollElement.parent());
    },
    _defineGetters: function () {
      var a = this,
        b = h[a.options.scrollProperty];
      (this._getScrollLeft = function () {
        return b.getLeft(a.$scrollElement);
      }),
        (this._getScrollTop = function () {
          return b.getTop(a.$scrollElement);
        });
    },
    _defineSetters: function () {
      var b = this,
        c = h[b.options.scrollProperty],
        d = i[b.options.positionProperty],
        e = c.setLeft,
        f = c.setTop;
      (this._setScrollLeft =
        "function" == typeof e
          ? function (a) {
              e(b.$scrollElement, a);
            }
          : a.noop),
        (this._setScrollTop =
          "function" == typeof f
            ? function (a) {
                f(b.$scrollElement, a);
              }
            : a.noop),
        (this._setPosition =
          d.setPosition ||
          function (a, c, e, f, g) {
            b.options.horizontalScrolling && d.setLeft(a, c, e),
              b.options.verticalScrolling && d.setTop(a, f, g);
          });
    },
    _handleWindowLoadAndResize: function () {
      var c = this,
        d = a(b);
      c.options.responsive &&
        d.bind("load." + this.name, function () {
          c.refresh();
        }),
        d.bind("resize." + this.name, function () {
          c._detectViewport(), c.options.responsive && c.refresh();
        });
    },
    refresh: function (c) {
      var d = this,
        e = d._getScrollLeft(),
        f = d._getScrollTop();
      (c && c.firstLoad) || this._reset(),
        this._setScrollLeft(0),
        this._setScrollTop(0),
        this._setOffsets(),
        this._findParticles(),
        this._findBackgrounds(),
        c &&
          c.firstLoad &&
          /WebKit/.test(navigator.userAgent) &&
          a(b).load(function () {
            var a = d._getScrollLeft(),
              b = d._getScrollTop();
            d._setScrollLeft(a + 1),
              d._setScrollTop(b + 1),
              d._setScrollLeft(a),
              d._setScrollTop(b);
          }),
        this._setScrollLeft(e),
        this._setScrollTop(f);
    },
    _detectViewport: function () {
      var a = this.$viewportElement.offset(),
        b = null !== a && a !== d;
      (this.viewportWidth = this.$viewportElement.width()),
        (this.viewportHeight = this.$viewportElement.height()),
        (this.viewportOffsetTop = b ? a.top : 0),
        (this.viewportOffsetLeft = b ? a.left : 0);
    },
    _findParticles: function () {
      {
        var b = this;
        this._getScrollLeft(), this._getScrollTop();
      }
      if (this.particles !== d)
        for (var c = this.particles.length - 1; c >= 0; c--)
          this.particles[c].$element.data("stellar-elementIsActive", d);
      (this.particles = []),
        this.options.parallaxElements &&
          this.$element.find("[data-stellar-ratio]").each(function () {
            var c,
              e,
              f,
              g,
              h,
              i,
              j,
              k,
              l,
              m = a(this),
              n = 0,
              o = 0,
              p = 0,
              q = 0;
            if (m.data("stellar-elementIsActive")) {
              if (m.data("stellar-elementIsActive") !== this) return;
            } else m.data("stellar-elementIsActive", this);
            b.options.showElement(m),
              m.data("stellar-startingLeft")
                ? (m.css("left", m.data("stellar-startingLeft")),
                  m.css("top", m.data("stellar-startingTop")))
                : (m.data("stellar-startingLeft", m.css("left")),
                  m.data("stellar-startingTop", m.css("top"))),
              (f = m.position().left),
              (g = m.position().top),
              (h =
                "auto" === m.css("margin-left")
                  ? 0
                  : parseInt(m.css("margin-left"), 10)),
              (i =
                "auto" === m.css("margin-top")
                  ? 0
                  : parseInt(m.css("margin-top"), 10)),
              (k = m.offset().left - h),
              (l = m.offset().top - i),
              m.parents().each(function () {
                var b = a(this);
                return b.data("stellar-offset-parent") === !0
                  ? ((n = p), (o = q), (j = b), !1)
                  : ((p += b.position().left), void (q += b.position().top));
              }),
              (c =
                m.data("stellar-horizontal-offset") !== d
                  ? m.data("stellar-horizontal-offset")
                  : j !== d && j.data("stellar-horizontal-offset") !== d
                  ? j.data("stellar-horizontal-offset")
                  : b.horizontalOffset),
              (e =
                m.data("stellar-vertical-offset") !== d
                  ? m.data("stellar-vertical-offset")
                  : j !== d && j.data("stellar-vertical-offset") !== d
                  ? j.data("stellar-vertical-offset")
                  : b.verticalOffset),
              b.particles.push({
                $element: m,
                $offsetParent: j,
                isFixed: "fixed" === m.css("position"),
                horizontalOffset: c,
                verticalOffset: e,
                startingPositionLeft: f,
                startingPositionTop: g,
                startingOffsetLeft: k,
                startingOffsetTop: l,
                parentOffsetLeft: n,
                parentOffsetTop: o,
                stellarRatio:
                  m.data("stellar-ratio") !== d ? m.data("stellar-ratio") : 1,
                width: m.outerWidth(!0),
                height: m.outerHeight(!0),
                isHidden: !1,
              });
          });
    },
    _findBackgrounds: function () {
      var b,
        c = this,
        e = this._getScrollLeft(),
        f = this._getScrollTop();
      (this.backgrounds = []),
        this.options.parallaxBackgrounds &&
          ((b = this.$element.find("[data-stellar-background-ratio]")),
          this.$element.data("stellar-background-ratio") &&
            (b = b.add(this.$element)),
          b.each(function () {
            var b,
              g,
              h,
              i,
              j,
              k,
              l,
              o = a(this),
              p = n(o),
              q = 0,
              r = 0,
              s = 0,
              t = 0;
            if (o.data("stellar-backgroundIsActive")) {
              if (o.data("stellar-backgroundIsActive") !== this) return;
            } else o.data("stellar-backgroundIsActive", this);
            o.data("stellar-backgroundStartingLeft")
              ? m(
                  o,
                  o.data("stellar-backgroundStartingLeft"),
                  o.data("stellar-backgroundStartingTop")
                )
              : (o.data("stellar-backgroundStartingLeft", p[0]),
                o.data("stellar-backgroundStartingTop", p[1])),
              (h =
                "auto" === o.css("margin-left")
                  ? 0
                  : parseInt(o.css("margin-left"), 10)),
              (i =
                "auto" === o.css("margin-top")
                  ? 0
                  : parseInt(o.css("margin-top"), 10)),
              (j = o.offset().left - h - e),
              (k = o.offset().top - i - f),
              o.parents().each(function () {
                var b = a(this);
                return b.data("stellar-offset-parent") === !0
                  ? ((q = s), (r = t), (l = b), !1)
                  : ((s += b.position().left), void (t += b.position().top));
              }),
              (b =
                o.data("stellar-horizontal-offset") !== d
                  ? o.data("stellar-horizontal-offset")
                  : l !== d && l.data("stellar-horizontal-offset") !== d
                  ? l.data("stellar-horizontal-offset")
                  : c.horizontalOffset),
              (g =
                o.data("stellar-vertical-offset") !== d
                  ? o.data("stellar-vertical-offset")
                  : l !== d && l.data("stellar-vertical-offset") !== d
                  ? l.data("stellar-vertical-offset")
                  : c.verticalOffset),
              c.backgrounds.push({
                $element: o,
                $offsetParent: l,
                isFixed: "fixed" === o.css("background-attachment"),
                horizontalOffset: b,
                verticalOffset: g,
                startingValueLeft: p[0],
                startingValueTop: p[1],
                startingBackgroundPositionLeft: isNaN(parseInt(p[0], 10))
                  ? 0
                  : parseInt(p[0], 10),
                startingBackgroundPositionTop: isNaN(parseInt(p[1], 10))
                  ? 0
                  : parseInt(p[1], 10),
                startingPositionLeft: o.position().left,
                startingPositionTop: o.position().top,
                startingOffsetLeft: j,
                startingOffsetTop: k,
                parentOffsetLeft: q,
                parentOffsetTop: r,
                stellarRatio:
                  o.data("stellar-background-ratio") === d
                    ? 1
                    : o.data("stellar-background-ratio"),
              });
          }));
    },
    _reset: function () {
      var a, b, c, d, e;
      for (e = this.particles.length - 1; e >= 0; e--)
        (a = this.particles[e]),
          (b = a.$element.data("stellar-startingLeft")),
          (c = a.$element.data("stellar-startingTop")),
          this._setPosition(a.$element, b, b, c, c),
          this.options.showElement(a.$element),
          a.$element
            .data("stellar-startingLeft", null)
            .data("stellar-elementIsActive", null)
            .data("stellar-backgroundIsActive", null);
      for (e = this.backgrounds.length - 1; e >= 0; e--)
        (d = this.backgrounds[e]),
          d.$element
            .data("stellar-backgroundStartingLeft", null)
            .data("stellar-backgroundStartingTop", null),
          m(d.$element, d.startingValueLeft, d.startingValueTop);
    },
    destroy: function () {
      this._reset(),
        this.$scrollElement
          .unbind("resize." + this.name)
          .unbind("scroll." + this.name),
        (this._animationLoop = a.noop),
        a(b)
          .unbind("load." + this.name)
          .unbind("resize." + this.name);
    },
    _setOffsets: function () {
      var c = this,
        d = a(b);
      d
        .unbind("resize.horizontal-" + this.name)
        .unbind("resize.vertical-" + this.name),
        "function" == typeof this.options.horizontalOffset
          ? ((this.horizontalOffset = this.options.horizontalOffset()),
            d.bind("resize.horizontal-" + this.name, function () {
              c.horizontalOffset = c.options.horizontalOffset();
            }))
          : (this.horizontalOffset = this.options.horizontalOffset),
        "function" == typeof this.options.verticalOffset
          ? ((this.verticalOffset = this.options.verticalOffset()),
            d.bind("resize.vertical-" + this.name, function () {
              c.verticalOffset = c.options.verticalOffset();
            }))
          : (this.verticalOffset = this.options.verticalOffset);
    },
    _repositionElements: function () {
      var a,
        b,
        c,
        d,
        e,
        f,
        g,
        h,
        i,
        j,
        k = this._getScrollLeft(),
        l = this._getScrollTop(),
        n = !0,
        o = !0;
      if (
        this.currentScrollLeft !== k ||
        this.currentScrollTop !== l ||
        this.currentWidth !== this.viewportWidth ||
        this.currentHeight !== this.viewportHeight
      ) {
        for (
          this.currentScrollLeft = k,
            this.currentScrollTop = l,
            this.currentWidth = this.viewportWidth,
            this.currentHeight = this.viewportHeight,
            j = this.particles.length - 1;
          j >= 0;
          j--
        )
          (a = this.particles[j]),
            (b = a.isFixed ? 1 : 0),
            this.options.horizontalScrolling
              ? ((f =
                  (k +
                    a.horizontalOffset +
                    this.viewportOffsetLeft +
                    a.startingPositionLeft -
                    a.startingOffsetLeft +
                    a.parentOffsetLeft) *
                    -(a.stellarRatio + b - 1) +
                  a.startingPositionLeft),
                (h = f - a.startingPositionLeft + a.startingOffsetLeft))
              : ((f = a.startingPositionLeft), (h = a.startingOffsetLeft)),
            this.options.verticalScrolling
              ? ((g =
                  (l +
                    a.verticalOffset +
                    this.viewportOffsetTop +
                    a.startingPositionTop -
                    a.startingOffsetTop +
                    a.parentOffsetTop) *
                    -(a.stellarRatio + b - 1) +
                  a.startingPositionTop),
                (i = g - a.startingPositionTop + a.startingOffsetTop))
              : ((g = a.startingPositionTop), (i = a.startingOffsetTop)),
            this.options.hideDistantElements &&
              ((o =
                !this.options.horizontalScrolling ||
                (h + a.width > (a.isFixed ? 0 : k) &&
                  h <
                    (a.isFixed ? 0 : k) +
                      this.viewportWidth +
                      this.viewportOffsetLeft)),
              (n =
                !this.options.verticalScrolling ||
                (i + a.height > (a.isFixed ? 0 : l) &&
                  i <
                    (a.isFixed ? 0 : l) +
                      this.viewportHeight +
                      this.viewportOffsetTop))),
            o && n
              ? (a.isHidden &&
                  (this.options.showElement(a.$element), (a.isHidden = !1)),
                this._setPosition(
                  a.$element,
                  f,
                  a.startingPositionLeft,
                  g,
                  a.startingPositionTop
                ))
              : a.isHidden ||
                (this.options.hideElement(a.$element), (a.isHidden = !0));
        for (j = this.backgrounds.length - 1; j >= 0; j--)
          (c = this.backgrounds[j]),
            (b = c.isFixed ? 0 : 1),
            (d = this.options.horizontalScrolling
              ? (k +
                  c.horizontalOffset -
                  this.viewportOffsetLeft -
                  c.startingOffsetLeft +
                  c.parentOffsetLeft -
                  c.startingBackgroundPositionLeft) *
                  (b - c.stellarRatio) +
                "px"
              : c.startingValueLeft),
            (e = this.options.verticalScrolling
              ? (l +
                  c.verticalOffset -
                  this.viewportOffsetTop -
                  c.startingOffsetTop +
                  c.parentOffsetTop -
                  c.startingBackgroundPositionTop) *
                  (b - c.stellarRatio) +
                "px"
              : c.startingValueTop),
            m(c.$element, d, e);
      }
    },
    _handleScrollEvent: function () {
      var a = this,
        b = !1,
        c = function () {
          a._repositionElements(), (b = !1);
        },
        d = function () {
          b || (o(c), (b = !0));
        };
      this.$scrollElement.bind("scroll." + this.name, d), d();
    },
    _startAnimationLoop: function () {
      var a = this;
      (this._animationLoop = function () {
        o(a._animationLoop), a._repositionElements();
      }),
        this._animationLoop();
    },
  }),
    (a.fn[f] = function (b) {
      var c = arguments;
      return b === d || "object" == typeof b
        ? this.each(function () {
            a.data(this, "plugin_" + f) ||
              a.data(this, "plugin_" + f, new e(this, b));
          })
        : "string" == typeof b && "_" !== b[0] && "init" !== b
        ? this.each(function () {
            var d = a.data(this, "plugin_" + f);
            d instanceof e &&
              "function" == typeof d[b] &&
              d[b].apply(d, Array.prototype.slice.call(c, 1)),
              "destroy" === b && a.data(this, "plugin_" + f, null);
          })
        : void 0;
    }),
    (a[f] = function () {
      var c = a(b);
      return c.stellar.apply(c, Array.prototype.slice.call(arguments, 0));
    }),
    (a[f].scrollProperty = h),
    (a[f].positionProperty = i),
    (b.Stellar = e);
})(jQuery, this, document);
