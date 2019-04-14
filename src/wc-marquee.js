const template = document.createElement('template');
template.innerHTML = `
<style>
.marquee {
  width: 450px;
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

.marquee span:hover {
  animation-play-state: paused
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
<p class="marquee"><span>Windows 8 and ...</span></p>
`;

export class WCMarquee extends HTMLElement {

  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    this.shadowRoot.appendChild(document.importNode(template.content, true));
    this.shadowRoot.querySelector('span').innerHTML = this.innerHTML;
  };

  static get observedAttributes() {
    return [];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this[name] = newValue;
  }

  async connectedCallback() {}

}

customElements.define('wc-marquee', WCMarquee);
