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
    this.primary = "";
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
      primary: { type: String, reflect: true, DDDDataAttributes: "data-primary" },
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
        text-align: left;
        width: 400px;
  
      }
      .card{
        text-align: center;
        flex-wrap: wrap;
        width: 320px;
        border-radius: var(--ddd-border-radius, 8px);

      }
      .image img{
        width: 100%;     
        height: auto;   
        display: block;
      }
      .image{
        border-bottom: 12px var(--ddd-theme-default-nittanyNavy) solid;

      }
      .header{
        padding-left: 16px;
        text-align: left;
      }
      .text{
        padding-left: 16px;
        text-align: left;
        height: 200px;
      }
      img{
        border-radius: var(--ddd-border-radius, 12px) var(--ddd-border-radius, 12px) 0 0;
        
      }
      .wrapper {
        margin: var(--ddd-spacing-2);
        padding: var(--ddd-spacing-4);
      }
      .bar{
        text-align: left;
        padding-left: 10px;
        color: var(--ddd-theme-default-nittanyNavy) solid;
        border: none;
        font-weight: bold;
      }
      .box-wrapper {
        background-color: white;
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
    <div class="box-wrapper">
      <div class="bar">
        ${this.title}
      </div>
      <div class="header">
        <h3>${this.cardHeader}</h3>
      </div>
      <div class="text">
        <slot></slot>
      </div>
      <div class="btn">
        <a href = ${this.link} ><button>Explore</button></a>
      </div>
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