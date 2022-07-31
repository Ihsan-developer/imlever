
// Library buatan
const $ = (className) => {
  
    this.elms = document.getElementsByClassName(className);
  
    this.scale = (elm) => {
      if (elm.className.includes('scale')) {
        elm.classList.remove('scale');
      } else {
        elm.classList.add('scale')
      }
    } 
  
    this.rotate = (elm) => {
      if (elm.className.includes('rotate')) {
        elm.classList.remove('rotate');
      } else {
        elm.classList.add('rotate')
      }
    }
    
    this.translate = (elm) => {
      if (elm.className.includes('translate')) {
        elm.classList.remove('translate');
      } else {
        elm.classList.add('translate')
      }
    } 
    this.click = (animation) => {
       // Animasi pertama : scale perbesar
      if (this.elms && this.elms.length && animation === 'toggle-scale-1') {
        for (let i = 0; i < this.elms.length; i++) {
          const elm = this.elms[i];
          elm.addEventListener('click', this.scale.bind(this, elm));
        }
      }
      // Animasi kedua : rotasi
      if (this.elms && this.elms.length && animation === 'toggle-rotate-2') {
        for (let i = 0; i < this.elms.length; i++) {
          const elm = this.elms[i];
          elm.addEventListener('click', this.rotate.bind(this, elm));
        }
      }
      // Animasi ketiga : scale perkecil
      if (this.elms && this.elms.length && animation === 'toggle-scale-3') {
        for (let i = 0; i < this.elms.length; i++) {
          const elm = this.elms[i];
          elm.addEventListener('click', this.scale.bind(this, elm));
        }
      }
      // Animasi keempat : Geser ke kanan
      if (this.elms && this.elms.length && animation === 'toggle-translate-4') {
        for (let i = 0; i < this.elms.length; i++) {
          const elm = this.elms[i];
          elm.addEventListener('click', this.translate.bind(this, elm));
        }
      }
       // Animasi keempat : Geser ke kiri
      if (this.elms && this.elms.length && animation === 'toggle-translate-5') {
        for (let i = 0; i < this.elms.length; i++) {
          const elm = this.elms[i];
          elm.addEventListener('click', this.translate.bind(this, elm));
        }
      }
      // Animasi kelima : Geser ke atas
      if (this.elms && this.elms.length && animation === 'toggle-translate-6') {
        for (let i = 0; i < this.elms.length; i++) {
          const elm = this.elms[i];
          elm.addEventListener('click', this.translate.bind(this, elm));
        }
      }
        // Animasi keenam : Geser ke bawah
      if (this.elms && this.elms.length && animation === 'toggle-translate-7') {
        for (let i = 0; i < this.elms.length; i++) {
          const elm = this.elms[i];
          elm.addEventListener('click', this.translate.bind(this, elm));
        }
      }
    }
  
    return this
  }
  
  
  