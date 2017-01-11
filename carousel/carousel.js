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
    Carousel.changeShownImage(_shownId, towardId);
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
    shownImage.classList.remove('is-active');
    towardImage.classList.add('is-active');
  },
}

module.exports = Carousel;
