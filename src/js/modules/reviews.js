export default () => {
      $(".reviews__block").slick({
        infinite: true,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: 0,
        autoplaySpeed: 10000,
        dots: true,
        prevArrow: $(".reviews-left"),
        nextArrow: $(".reviews-right"),
        lazyLoad: 'ondemand',
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              autoplay: false,
              centerMode: false,
              dots: true
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              autoplay: false,
              centerMode: false,
              dots: true
            },
          },
          {
            breakpoint: 640,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              autoplay: false,
              adaptiveHeight: true,
              dots: true
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              adaptiveHeight: true,
              dots: false
            },
          },
        ],
      });
    };



  $(document).ready(function () {
    var toggleFormBtn = $('.toggle-form-btn');
    var reviewsBottom = $('.reviews__bottom');
    var reviewsCta = $('.reviews-cta');
    var inputNum = document.querySelectorAll('.input-num');
    var reviewsInputsWrap = $('.reviews-form__field-wrap');
    var inputAgeWrap = $('.reviews-form__field-wrap--age');
    var inputAge = $('.input-age');
    var inputFile = $('.input-file');
    var labelFile = $('.reviews-form__file');
    var reviewsInput = $('.reviews-input');
    var reviewsInputText = $('.reviews-input-text');
    var reviewsInputTextarea = $('.reviews-form__textarea');
    var reviewsInputTextareaJS = document.querySelector('.reviews-form__textarea');
    var reviewsInputName = $('.reviews-form__input-name');
    var reviewsPopup = $('.reviews-popup');
    var fileText = $('.reviews-form__file-text');
    var fileImg = $('.reviews-form__file-img img');
    var fileIcon = $('.reviews-form__checkmark-icon');
    var fileFlag = true;
    reviewsInputTextareaJS.value = '';
    reviewsInputTextarea.on('input', function () {
      if ($(this).val().trim().length > 0) {
        $(this).addClass('o-auto');
      } else {
        $(this).removeClass('o-auto');
      }
    });
    inputFile.change(function (e) {
      if (inputFile.val() && fileFlag) {
        fileText.html('Фото загружено!');
        fileImg.hide();
        fileIcon.show();
        labelFile.addClass('rloaded');
        fileFlag = false;
      }
    });
    inputAge.on('change', function () {
      if (Number($(this).val().slice(0, 2)) > 17 && Number($(this).val().slice(0, 2)) < 91) {
        inputAgeWrap.addClass('valid');
        inputAgeWrap.removeClass('invalid');
      } else {
        inputAgeWrap.addClass('invalid');
        inputAgeWrap.removeClass('valid');
      }
    });
    reviewsInputText.on('input', function () {
      var that = this;
      setTimeout(function () {
        var res = /[^a-zA-Zа-яА-ЯїЇєЄіІёЁ ]/g.exec(that.value);
        that.value = that.value.replace(res, '');

        if (that.value.replace(res, '').length === 0) {
          that.parentElement.classList.add('invalid');
          that.parentElement.classList.remove('valid');
        } else {
          that.parentElement.classList.remove('invalid');
          that.parentElement.classList.add('valid');
        }
      }, 0);
    });
    reviewsInputTextareaJS.addEventListener('input', function () {
      var that = this;

      if (that.value.length === 0) {
        that.parentElement.classList.add('invalid');
        that.parentElement.classList.remove('valid');
      } else {
        that.parentElement.classList.remove('invalid');
        that.parentElement.classList.add('valid');
      }
    });
    inputFile.click(function () {
      if (!fileFlag) {
        return false;
      }
    });

    for (var i = 0; i < inputNum.length; i++) {
      inputNum[i].addEventListener('input', function () {
        this.value = this.value.replace(/\D/g, '');

        if (this.value.length > 2) {
          this.value = this.value.slice(0, 2);
        }
      });
    }

    toggleFormBtn.on('click', function () {
      toggleFormBtn.hide();
      reviewsCta.show();
    });
    $('.reviews-form').submit(function () {
      if (Number(inputAge.val()) > 17 && Number(inputAge.val()) < 91 && reviewsInputTextarea.val().length !== 0 && reviewsInputName.val().length !== 0) {
        reviewsCta.hide();
        toggleFormBtn.show();
        reviewsPopup.fadeIn();
        event.preventDefault();
        setTimeout(function () {
          reviewsPopup.fadeOut();
        }, 2000);
        fileFlag = true;
        reviewsInput.val('');
        fileText.html('Загрузить ваше фото');
        fileImg.show();
        fileIcon.hide();
        labelFile.removeClass('rloaded');
        reviewsInputsWrap.removeClass('invalid');
        reviewsInputsWrap.removeClass('valid');
        $('.reviews-form__star').removeClass('filled');
      } else {
        reviewsInputsWrap.each(function (i) {
          if (!reviewsInputsWrap[i].classList.contains('valid')) {
            reviewsInputsWrap[i].classList.add('invalid');
          }
        });
        event.preventDefault();
      }
    });
  });
  var starE = $('.feedback__star'),
    stars = document.querySelectorAll('.feedback__star'); //  Stars on mouse over
  starE.on('mouseover', function (e) {
    var onStar = parseInt($(e.target).data('value'), 10);
    for (var i = 0; i < stars.length; i++) {
      $(stars[i]).removeClass('hover');
    }
    for (var _i = 0; _i < onStar; _i++) {
      $(stars[_i]).addClass('hover');
    }
  }).on('mouseout', function () {
    for (var i = 0; i < stars.length; i++) {
      $(stars[i]).removeClass('hover');
    }
  }); //  Stars on click
  starE.on('click', function (e) {
    var onStar = parseInt($(e.target).data('value'), 10);
    for (var i = 0; i < stars.length; i++) {
      $(stars[i]).removeClass('selected');
    }
    for (var _i2 = 0; _i2 < onStar; _i2++) {
      $(stars[_i2]).addClass('selected');
    }
  });
