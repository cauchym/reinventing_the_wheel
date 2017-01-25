const Carousel = {
  init() {
    "use strict";
    Carousel.config = {
      indexIds: Carousel._getIndexIds(),
    }
    window.onload = this.setEventListener();
  },
  setEventListener() {
    "use strict";
    const leftArrow = document.getElementById('p-leftBtn');
    leftArrow.addEventListener('click', this.clickLeftArrow, false);
    const rightArrow = document.getElementById('p-rightBtn');
    rightArrow.addEventListener('click', this.clickRightArrow, false);
  },
  clickLeftArrow() {
    "use strict";
    Carousel._rollCarousel(Carousel._getShownId(), 'former');
  },
  clickRightArrow() {
    "use strict";
    Carousel._rollCarousel(Carousel._getShownId(), 'latter');
  },
  _getShownId() {
    "use strict";
    const activeImage = document.getElementsByClassName('is-active');
    return activeImage[0].id;
  },
  _rollCarousel(shownId, towardOpt) {
    "use strict";
    const _shownId = shownId;
    const towardId = Carousel.getTowardId(_shownId, towardOpt);
    if(_shownId !== towardId) {
      Carousel.changeShownImage(_shownId, towardId);
    }
  },
  _getIndexIds() {
    "use strict";
    const ImagesArray = document.getElementsByClassName('p-image');
    const indexIds = [];
    Array.prototype.forEach.call(ImagesArray, (el) => {
      indexIds.push(el.id);
    });
    return indexIds
  },
  getTowardId(shownId, towardOpt) {
    "use strict";
    const _shownId = shownId;
    const _indexIds = Carousel.config.indexIds;
    const shownIndex = _indexIds.indexOf(_shownId);
    let towardIndex  = -1;
    if (towardOpt === 'former' && shownIndex === 0) {
      towardIndex = shownIndex;
    } else if (towardOpt === 'latter' && shownIndex === (_indexIds.length - 1)) {
      towardIndex = shownIndex;
    } else {
      towardIndex = (towardOpt === 'former') ? (shownIndex - 1) : (shownIndex + 1);
    }
    return _indexIds[towardIndex];
  },
  changeShownImage(shownId, towardId) {
    "use strict";
    const _shownId = shownId;
    const _towardId = towardId;
    const shownImage = document.getElementById(_shownId);
    const towardImage = document.getElementById(_towardId);
    if (shownId < towardId) {
      // slide to left
      towardImage.classList.add('is-right');
      setTimeout(()=>{
        shownImage.classList.remove('is-active');
        shownImage.classList.add('is-sliding-ctol');
        towardImage.classList.add('is-sliding-rtoc');
        setTimeout(()=>{
          towardImage.classList.add('is-active');
          towardImage.classList.remove('is-right');
          shownImage.classList.remove('is-sliding-ctol');
          towardImage.classList.remove('is-sliding-rtoc');
        }, 1000);
      }, 10);
    } else {
      // slide to right
      towardImage.classList.add('is-left');
      setTimeout(()=>{
        shownImage.classList.remove('is-active');
        shownImage.classList.add('is-sliding-ctor');
        towardImage.classList.add('is-sliding-ltoc');
        setTimeout(()=>{
          towardImage.classList.remove('is-left');
          shownImage.classList.remove('is-sliding-ctor');
          towardImage.classList.remove('is-sliding-ltoc');
          towardImage.classList.add('is-active');
        }, 1000);
      }, 10);
    }
  },
}

module.exports = Carousel;
