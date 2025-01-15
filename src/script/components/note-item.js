class NoteItem extends HTMLElement {
  _shadowRoot = null;
  _style = null;
  _note = {
    id: null,
    title: null,
    body: null,
  };

  constructor() {
    super();

    this._shadowRoot = this.attachShadow({ mode: "open" });
    this._style = document.createElement("style");
  }

  _emptyContent() {
    this._shadowRoot.innerHTML = "";
  }

  set note(value) {
    this._note = value;

    // Render ulang
    this.render();
  }

  get note() {
    return this._note;
  }

  _updateStyle() {
    this._style.textContent = `
      /* Host element styling */
      :host {
        font-family: "Arial", sans-serif;
        display: block;
        width: 100%;
        max-width: 600px; /* Restrict the maximum width */
        margin: 10px auto;
        box-sizing: border-box;
        padding: 10px;
      }

      /* Card Container */
      .card {
        display: flex;
        flex-direction: column;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        padding: 16px;
        background-color: #fff;
        transition: transform 0.2s;
        box-sizing: border-box;
        margin-bottom: 10px; /* Spacing between cards */
      }

      /* Title Styling */
      .note-info__title h3 {
        font-size: 1.3rem;
        font-weight: bold;
        color: #333;
        margin: 0;
        text-align: center;
        padding: 8px;
      }

      /* Body Styling */
      .note-info__body p {
        font-size: 1rem;
        color: #555;
        margin-top: 8px;
        line-height: 1.5;
        text-align: center;
      }

      /* Responsive adjustments */
      @media (max-width: 600px) {
        .card {
          padding: 12px;
        }

        .note-info__title h3 {
          font-size: 1.2rem;
          padding: 6px;
        }

        .note-info__body p {
          font-size: 0.95rem;
        }
      }

      @media (max-width: 400px) {
        .card {
          padding: 10px;
          margin-bottom: 8px;
        }

        .note-info__title h3 {
          font-size: 1rem;
        }

        .note-info__body p {
          font-size: 0.85rem;
        }
      }
    `;
  }

  render() {
    this._emptyContent();
    this._updateStyle();

    this._shadowRoot.appendChild(this._style);
    this._shadowRoot.innerHTML += `
    
    <div class="card">
          <div class="note-info">
            <div class="note-info__title">
              <h3>${this._note.title}</h3>
            </div>
            <div class="note-info__body">
              <p>${this._note.body}</p>
            </div>
          </div>
        </div>
      `;
  }
}

customElements.define("note-item", NoteItem);
