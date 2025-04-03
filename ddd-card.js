/**
 * Copyright 2025 FreddyBono5
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";
import { DDD, DDDPulseEffectSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { DDDDataAttributes } from "@haxtheweb/d-d-d/lib/DDDStyles";
/**
 * `ddd-card`
 * 
 * @demo index.html
 * @element ddd-card
 */
export class DddCard extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "ddd-card";
  }

  constructor() {
    super();
    this.link = "";
    this.img = "";
    this.cardHeader = "Campus";
    this.cardText = "Text";
    this.title = "";
    this.t = this.t || {};
    this.t = {
      ...this.t,
      title: "Title",
    };
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
      img: { type: String },
      cardHeader: { type: String },
      cardText: { type: String },
      link: { type: String },
    };
  }

  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
        color: var(--ddd-theme-primary);
        background-color: var(--ddd-theme-accent);
        font-family: var(--ddd-font-navigation);
      }
      .card{
        border: 1px solid;
        text-align: center;
        flex-wrap: wrap;
        width: 240px;
        border-radius: var(--ddd-border-radius, 8px);

      }
      .image img{
        width: 100%;
        height: auto;
        border-radius: var(--ddd-border-radius, 8px);
      }
      .wrapper {
        margin: var(--ddd-spacing-2);
        padding: var(--ddd-spacing-4);
      }
      .btn button{
        background-color: var(--ddd-theme-default-link);
        color: white;
        width: 95%;
        margin-bottom: 8px
            }
      h3 span {
        font-size: var(--ddd-card-list-label-font-size, var(--ddd-font-size-s));
      }
    `];
  }

  // Lit render the HTML
  render() {
    return html`
<div class="wrapper">
  <div class="card">
    <div class="image">
      <img src = ${this.img}>
    </div>
    <div class="header">
      <h3>${this.cardHeader}</h3>
    </div>
    <div class="text">
      <p>${this.cardText}</p>
    </div>
    <div class="btn">
      <a href = ${this.link} ><button>Explore</button></a>
    </div>
  </div>
</div>`;
  }

  /**
   * haxProperties integration via file reference
   */
  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url)
      .href;
  }
}

globalThis.customElements.define(DddCard.tag, DddCard);