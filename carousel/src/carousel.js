const Carousel = {
  init() {
    console.log('okとしか言いようがない');
    Carousel.config = {
      indexIds: Carousel._getIndexIds(),
    }
    Carousel.state = {
      isAlready: true,
    }
    this.setEventListener();
  },
  setEventListener() {
    const leftArrow = document.getElementById('p-leftBtn');
    console.log(leftArrow);
    leftArrow.addEventListener('click', this.clickLeftArrow, false);
    const rightArrow = document.getElementById('p-rightBtn');
    rightArrow.addEventListener('click', this.clickRightArrow, false);
  },
  clickLeftArrow() {
    if (!Carousel.state.isAlready) return;
    Carousel._rollCarousel(Carousel._getShownId(), 'former');
  },
  clickRightArrow() {
    if (!Carousel.state.isAlready) return;
    Carousel._rollCarousel(Carousel._getShownId(), 'latter');
  },
  _getShownId() {
    const activeImage = document.getElementsByClassName('is-active');
    return activeImage[0].id;
  },
  _rollCarousel(shownId, towardOpt) {
    const _shownId = shownId;
    const towardId = Carousel.getTowardId(_shownId, towardOpt);
    if(_shownId !== towardId) {
      Carousel.changeShownImage(_shownId, towardId);
    }
  },
  _getIndexIds() {
    const ImagesArray = document.getElementsByClassName('p-image');
    const indexIds = [];
    Array.prototype.forEach.call(ImagesArray, (el) => {
      indexIds.push(el.id);
    });
    return indexIds
  },
  _refreshArrows(towardId) {
    const rightArrow = document.getElementById('p-rightBtn');
    const leftArrow = document.getElementById('p-leftBtn');
    const indexIds = Carousel.config.indexIds;
    if(towardId === indexIds[indexIds.length-1]){
      rightArrow.classList.add('is-hidden');
    }else if(towardId === indexIds[0]){
      leftArrow.classList.add('is-hidden');
    }else{
      rightArrow.classList.remove('is-hidden');
      leftArrow.classList.remove('is-hidden');
    }
  },
  getTowardId(shownId, towardOpt) {
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
    const _shownId = shownId;
    const _towardId = towardId;
    const shownImage = document.getElementById(_shownId);
    const towardImage = document.getElementById(_towardId);
    if (shownId < towardId) {
      // slide to left
      Carousel.state.isAlready = false;
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
          Carousel._refreshArrows(towardId);
          Carousel.state.isAlready = true;
        }, 1000);
      }, 10);
    } else if (shownId > towardId) {
      // slide to right
      Carousel.state.isAlready = false;
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
          Carousel._refreshArrows(towardId);
          Carousel.state.isAlready = true;
        }, 1000);
      }, 10);
    }
  },
}

module.exports = Carousel;
