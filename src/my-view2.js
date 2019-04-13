/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';

class MyView2 extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }
      </style>

      <div class="card">
      <h4>Logical Keyboard Tapper</h4>
      Andrew "Slowback1" Wobeck<br/><br/>
      
      <h4>Doodle Manipulators</h4>
      Andrew "Slowback1" Wobeck<br/><br/>
      
      VitFerreira<br/><br/>
      
      <h4>Creative Keyboard Tappers</h4>
      Insertusernamehere51<br/><br/>
      
      VitFerreira<br/><br/>
      
      Feminine Eminem<br/><br/>
      
      StreakingSteam<br/><br/>
      
      SuperLuigi1026<br/><br/>
      
      PK_Water<br/><br/>
      
      Leviathan<br/><br/>
      
      PKThoron<br/><br/>
      
      Woop<br/><br/>
      
      ThatGuy456<br/><br/>
      
      AdamZam<br/><br/>
      
      FishAndChipper<br/><br/>
      
      Andrew "Slowback1" Wobeck<br/><br/>
      
      The-Zekenator<br/><br/>
      
      Jackaloped<br/><br/>
      
      Cad48<br/><br/>
      
      Duncaster<br/><br/>
      </div>
    `;
  }
}

window.customElements.define('my-view2', MyView2);
