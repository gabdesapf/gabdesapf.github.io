class MiFooter
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<p>
        &copy; 2021
        Amaro Martínez Gabriel Karim.
      </p>`;
  }
}

customElements.define(
  "mi-footer", MiFooter);
