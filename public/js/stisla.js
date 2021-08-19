/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/stisla.js":
/*!********************************!*\
  !*** ./resources/js/stisla.js ***!
  \********************************/
/***/ (function() {



function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function ($, window, i) {
  // Bootstrap 4 Modal
  $.fn.fireModal = function (options) {
    var options = $.extend({
      size: 'modal-md',
      center: false,
      animation: true,
      title: 'Modal Title',
      closeButton: true,
      header: true,
      bodyClass: '',
      footerClass: '',
      body: '',
      buttons: [],
      autoFocus: true,
      removeOnDismiss: false,
      created: function created() {},
      appended: function appended() {},
      onFormSubmit: function onFormSubmit() {},
      modal: {}
    }, options);
    this.each(function () {
      i++;
      var id = 'fire-modal-' + i,
          trigger_class = 'trigger--' + id,
          trigger_button = $('.' + trigger_class);
      $(this).addClass(trigger_class); // Get modal body

      var body = options.body;

      if (_typeof(body) == 'object') {
        if (body.length) {
          var part = body;
          body = body.removeAttr('id').clone().removeClass('modal-part');
          part.remove();
        } else {
          body = '<div class="text-danger">Modal part element not found!</div>';
        }
      } // Modal base template


      var modal_template = '   <div class="modal' + (options.animation == true ? ' fade' : '') + '" tabindex="-1" role="dialog" id="' + id + '">  ' + '     <div class="modal-dialog ' + options.size + (options.center ? ' modal-dialog-centered' : '') + '" role="document">  ' + '       <div class="modal-content">  ' + (options.header == true ? '         <div class="modal-header">  ' + '           <h5 class="modal-title">' + options.title + '</h5>  ' + (options.closeButton == true ? '           <button type="button" class="close" data-dismiss="modal" aria-label="Close">  ' + '             <span aria-hidden="true">&times;</span>  ' + '           </button>  ' : '') + '         </div>  ' : '') + '         <div class="modal-body">  ' + '         </div>  ' + (options.buttons.length > 0 ? '         <div class="modal-footer">  ' + '         </div>  ' : '') + '       </div>  ' + '     </div>  ' + '  </div>  '; // Convert modal to object

      var modal_template = $(modal_template); // Start creating buttons from 'buttons' option

      var this_button;
      options.buttons.forEach(function (item) {
        // get option 'id'
        var id = "id" in item ? item.id : ''; // Button template

        this_button = '<button type="' + ("submit" in item && item.submit == true ? 'submit' : 'button') + '" class="' + item["class"] + '" id="' + id + '">' + item.text + '</button>'; // add click event to the button

        this_button = $(this_button).off('click').on("click", function () {
          // execute function from 'handler' option
          item.handler.call(this, modal_template);
        }); // append generated buttons to the modal footer

        $(modal_template).find('.modal-footer').append(this_button);
      }); // append a given body to the modal

      $(modal_template).find('.modal-body').append(body); // add additional body class

      if (options.bodyClass) $(modal_template).find('.modal-body').addClass(options.bodyClass); // add footer body class

      if (options.footerClass) $(modal_template).find('.modal-footer').addClass(options.footerClass); // execute 'created' callback

      options.created.call(this, modal_template, options); // modal form and submit form button

      var modal_form = $(modal_template).find('.modal-body form'),
          form_submit_btn = modal_template.find('button[type=submit]'); // append generated modal to the body

      $("body").append(modal_template); // execute 'appended' callback

      options.appended.call(this, $('#' + id), modal_form, options); // if modal contains form elements

      if (modal_form.length) {
        // if `autoFocus` option is true
        if (options.autoFocus) {
          // when modal is shown
          $(modal_template).on('shown.bs.modal', function () {
            // if type of `autoFocus` option is `boolean`
            if (typeof options.autoFocus == 'boolean') modal_form.find('input:eq(0)').focus(); // the first input element will be focused
            // if type of `autoFocus` option is `string` and `autoFocus` option is an HTML element
            else if (typeof options.autoFocus == 'string' && modal_form.find(options.autoFocus).length) modal_form.find(options.autoFocus).focus(); // find elements and focus on that
          });
        } // form object


        var form_object = {
          startProgress: function startProgress() {
            modal_template.addClass('modal-progress');
          },
          stopProgress: function stopProgress() {
            modal_template.removeClass('modal-progress');
          }
        }; // if form is not contains button element

        if (!modal_form.find('button').length) $(modal_form).append('<button class="d-none" id="' + id + '-submit"></button>'); // add click event

        form_submit_btn.click(function () {
          modal_form.submit();
        }); // add submit event

        modal_form.submit(function (e) {
          // start form progress
          form_object.startProgress(); // execute `onFormSubmit` callback

          options.onFormSubmit.call(this, modal_template, e, form_object);
        });
      }

      $(document).on("click", '.' + trigger_class, function () {
        var modal = $('#' + id).modal(options.modal);

        if (options.removeOnDismiss) {
          modal.on('hidden.bs.modal', function () {
            modal.remove();
          });
        }

        return false;
      });
    });
  }; // Bootstrap Modal Destroyer


  $.destroyModal = function (modal) {
    modal.modal('hide');
    modal.on('hidden.bs.modal', function () {});
  }; // Card Progress Controller


  $.cardProgress = function (card, options) {
    var options = $.extend({
      dismiss: false,
      dismissText: 'Cancel',
      spinner: true,
      onDismiss: function onDismiss() {}
    }, options);
    var me = $(card);
    me.addClass('card-progress');

    if (options.spinner == false) {
      me.addClass('remove-spinner');
    }

    if (options.dismiss == true) {
      var btn_dismiss = '<a class="btn btn-danger card-progress-dismiss">' + options.dismissText + '</a>';
      btn_dismiss = $(btn_dismiss).off('click').on('click', function () {
        me.removeClass('card-progress');
        me.find('.card-progress-dismiss').remove();
        options.onDismiss.call(this, me);
      });
      me.append(btn_dismiss);
    }

    return {
      dismiss: function dismiss(dismissed) {
        $.cardProgressDismiss(me, dismissed);
      }
    };
  };

  $.cardProgressDismiss = function (card, dismissed) {
    var me = $(card);
    me.removeClass('card-progress');
    me.find('.card-progress-dismiss').remove();
    if (dismissed) dismissed.call(this, me);
  };

  $.chatCtrl = function (element, chat) {
    var chat = $.extend({
      position: 'chat-right',
      text: '',
      time: moment(new Date().toISOString()).format('HH:mm:ss'),
      picture: '',
      type: 'text',
      // or typing
      timeout: 0,
      onShow: function onShow() {}
    }, chat);
    var target = $(element),
        element = '<div class="chat-item ' + chat.position + '" style="display:none">' + '<img src="' + chat.picture + '">' + '<div class="chat-details">' + '<div class="chat-text">' + chat.text + '</div>' + '<div class="chat-time">' + chat.time + '</div>' + '</div>' + '</div>',
        typing_element = '<div class="chat-item chat-left chat-typing" style="display:none">' + '<img src="' + chat.picture + '">' + '<div class="chat-details">' + '<div class="chat-text"></div>' + '</div>' + '</div>';
    var append_element = element;

    if (chat.type == 'typing') {
      append_element = typing_element;
    }

    if (chat.timeout > 0) {
      setTimeout(function () {
        target.find('.chat-content').append($(append_element).fadeIn());
      }, chat.timeout);
    } else {
      target.find('.chat-content').append($(append_element).fadeIn());
    }

    var target_height = 0;
    target.find('.chat-content .chat-item').each(function () {
      target_height += $(this).outerHeight();
    });
    setTimeout(function () {
      target.find('.chat-content').scrollTop(target_height, -1);
    }, 100);
    chat.onShow.call(this, append_element);
  };

  $("body").niceScroll();
  $('.selectric').on("selectric-open", function (event, element, selectric) {
    $(selectric.elements.itemsScroll).niceScroll();
  });
  $('.select2').on('select2:open', function (e) {
    $('.select2-results__options').niceScroll();
  }); // settings

  setTheme();
  $(".settings").click(function () {
    if ($($(this).data('target')).hasClass('active')) {
      $($(this).data('target')).removeClass('active');
    } else {
      $($(this).data('target')).addClass('active');
    }
  });
  $('.settings-container').click(function (e) {
    if (!$.inArray('settings-container', e.target.classList)) {
      $(this).removeClass('active');
    }
  });
  $('.btn-theme').click(function () {
    var beforeTheme = sessionStorage.getItem('theme');
    var theme = $(this).data('theme');
    beforeTheme = beforeTheme ? beforeTheme : 'theme-primary';
    $(this).closest('.grid').find('.settings-ring-active').removeClass('settings-ring-active');
    $(this).addClass('settings-ring-active');
    $('body').addClass(theme).removeClass(beforeTheme);
    sessionStorage.setItem('theme', theme);
  });
  $('.btn-scheme').click(function () {
    var schemebefore = sessionStorage.getItem('scheme');
    var scheme = $(this).data('scheme');
    $('body').removeClass(schemebefore).addClass(scheme);
    $(this).closest('.grid').find('.settings-ring-active').removeClass('settings-ring-active');
    $(this).addClass('settings-ring-active');
    sessionStorage.setItem('scheme', scheme);

    if ($('body').hasClass('dark')) {
      $('body').find('.jqvmap-zoomin').parent().css('background-color', '#0f172a');
    } else {
      $('body').find('.jqvmap-zoomin').parent().css('background-color', '#ffffff');
    }
  });

  function setTheme() {
    $(document).ready(function () {
      var theme = sessionStorage.getItem('theme');
      var scheme = sessionStorage.getItem('scheme');

      if (theme == null) {
        theme = 'theme-primary';
        sessionStorage.setItem('theme', theme);
      }

      ;

      if (scheme == null) {
        scheme = 'light';
        sessionStorage.setItem('scheme', scheme);
      }

      ;

      if (scheme == 'dark') {
        $('body').find('.jqvmap-zoomin').parent().css('background-color', '#0f172a');
      } else {
        $('body').find('.jqvmap-zoomin').parent().css('background-color', '#ffffff');
      }

      $('body').addClass("".concat(theme, " ").concat(scheme));
      $(".btn-theme[data-theme=\"".concat(theme, "\"],.btn-scheme[data-scheme=\"").concat(scheme, "\"]")).addClass('settings-ring-active');
    });
  }
})(jQuery, this, 0);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/js/stisla.js"]();
/******/ 	
/******/ })()
;