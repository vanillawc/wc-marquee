const template = document.createElement('template');
template.innerHTML = `
<style>
.marquee {
  margin: 0 auto;
  white-space: nowrap;
  overflow: hidden;
  box-sizing: border-box;
}

.marquee span {
  display: inline-block;
  padding-left: 100%;
  animation: marquee 15s linear infinite;
}

@keyframes marquee {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(-100%, 0);
  }
}
</style>
<p class="marquee" style="width: inherit;"><span><slot></slot></span></p>
`;

export class WCMarquee extends HTMLElement {

  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    this.shadowRoot.appendChild(document.importNode(template.content, true));

    // set default width
    this.style.width = (this.style.width) ?  this.style.width : '100%';

  };

  static get observedAttributes() {
    return ['font', 'party'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    switch(name) {
      case 'font':
        this.font = newValue;
        break;
      case 'party':
        this.party = this.hasAttribute('party');
    }
  }

  async connectedCallback() {
    this.font = this.hasAttribute('font') ? this.getAttribute('font') : 'Comic Sans MS';
    this.party = this.hasAttribute('party');
  }

  get font() { return this.getAttribute('font'); }
  set font(value) {
    const root = this.shadowRoot.querySelector('.marquee');
    if (value) {
      root.style.fontFamily = value;
    } else {
      this.removeAttribute('font');
    }
  }

  get party() { return this.getAttribute('party'); }
  set party(value) {
    const element = this.shadowRoot.querySelector('.marquee');
    if (value) {
      this.partifier = setInterval(function() {
          let r = Math.floor(Math.random() * 255);
          let g = Math.floor(Math.random() * 255);
          let b = Math.floor(Math.random() * 255);
          element.style.color = `rgb(${r}, ${g}, ${b})`;
      }, 400);
      return;
    }
    
    if (this.partifier) {
      clearInterval(this.partifier);
      this.removeAttribute('party');
    }
  }

}

customElements.define('wc-marquee', WCMarquee);
