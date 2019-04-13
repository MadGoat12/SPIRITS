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
import '@polymer/iron-image/iron-image';
class SpiritView extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;

          padding: 10px 20px;
        }
        iron-image {
            width: 400px;
            height: 400px;
            
          }
          [invisible-div]{
            opacity: 0;
            pointer-events: none;
          }
          .title{
              font-weight: 600;
              font-size: 80px;
              font-weight: 500;
              font-family: 'Roboto', sans-serif;
              line-height: 65px;
              padding-bottom: 16px;
              font-variant: small-caps;
/*                animation: pulse .6s infinite ease-out, flash .05s linear 1;*/

/*                text-shadow: black 0 0 5px, black 0 0 5px, black 0 0 5px, black 0 0 5px, black 0 0 5px, black 0 0 5px, black 0 0 5px, black 0 0 5px, black 0 0 5px, black 0 0 5px, black 0 0 5px, black 0 0 5px, black 0 0 5px, black 0 0 5px, black 0 0 5px, black 0 0 5px, black 0 0 5px, black 0 0 5px, black 0 0 5px, black 0 0 5px, black 0 0 5px, black 0 0 5px, black 0 0 5px, black 0 0 5px, black 0 0 5px, black 0 0 5px, black 0 0 5px, black 0 0 5px, black 0 0 5px, black 0 0 5px, black 0 0 5px, black 0 0 5px, black 0 0 5px, black 0 0 5px, black 0 0 5px, black 0 0 5px, black 0 0 5px, black 0 0 5px, black 0 0 5px, black 0 0 5px, black 0 0 5px, black 0 0 5px, black 0 0 5px, black 0 0 5px, black 0 0 5px, black 0 0 5px;*/
                text-shadow: white 0 0 5px, white 0 0 5px, white 0 0 5px, white 0 0 5px, white 0 0 5px, white 0 0 5px, white 0 0 5px, white 0 0 5px, white 0 0 5px, white 0 0 5px, white 0 0 5px, white 0 0 5px, white 0 0 5px, white 0 0 5px, white 0 0 5px, white 0 0 5px, white 0 0 5px, white 0 0 5px, white 0 0 5px, white 0 0 5px, white 0 0 5px, white 0 0 5px, white 0 0 5px, white 0 0 5px, white 0 0 5px, white 0 0 5px, white 0 0 5px, white 0 0 5px, white 0 0 5px, white 0 0 5px, white 0 0 5px, white 0 0 5px, white 0 0 5px, white 0 0 5px, white 0 0 5px, white 0 0 5px, white 0 0 5px, white 0 0 5px, white 0 0 5px, white 0 0 5px, white 0 0 5px, white 0 0 5px, white 0 0 5px, white 0 0 5px, white 0 0 5px, white 0 0 5px;

                
              color: var(--paper-grey-900);
          }

       
        

      </style>
      <div style="display: flex; text-align: center; margin-bottom: 24px;">
      <div invisible-div$="[[theresNothingBefore(totalElements,spirit)]]" style="text-align: left; flex-grow: 1;" on-click="goBack"><paper-icon-button icon="arrow-back"></paper-icon-button></div>


      <div style="flex-grow:1; display: flex; justify-content: center; align-items: center;">
      <div on-click="goIndex" style="cursor:pointer; font-size: 20px; font-weight: 600; background-color: var(--paper-red-600); color: white; border-radius: 10px; padding: 8px; height: 30px; ">[[spirit.id]]</div>
</div>
        

      <div style="text-align: right; flex-grow: 1;" on-click="goNext" invisible-div$="[[theresNothingNext(totalElements,spirit)]]"><paper-icon-button icon="arrow-forward"></paper-icon-button></div>
 
      
          
      </div>
      <div style="display: flex; flex-wrap: wrap; align-items: center; justify-content: center; text-align: center;">
      <iron-image sizing="contain" preload src$="../images/spirits/[[spirit.id]].jpg"></iron-image>
      <div style="display: flex; align-items: center; justify-content: center; flex-direction: column;">  
      <div class="title" style="position: relative;">
      <!--<div style$="background-color: var(--paper-red-500); border-radius: 50%; z-index: 2; width: 80px; height: 80px; background-image: url('../images/series/[[spirit.series]].png');position: absolute; top: 120px; right: -50px; background-position: center; background-repeat: no-repeat; background-size: contain;">
      </div>-->
      
      [[spirit.name]]
      
      
   

      </div>
        <div style="width: 400px; font-weight: 500; font-style: italic; max-width: 95% !important; text-align: left;">[[spirit.description]]</div>
        </div>
        </div>

        <div style="text-align: center; margin: 40px 24px; color: var(--paper-indigo-800); font-weight: 900;">
        <iron-icon style="background-color: var(--paper-indigo-600); border-radius: 50%; margin-right: 8px; width: 40px; height: 40px;" src$="../images/series/[[spirit.series]].png"></iron-icon>[[spirit.games]]
        </div>

    `;
  }
  goIndex(){
    NavigationUtils.navigate("view1",{lastSpirit:Number(this.spirit.id)});
  }
  goBack(){
    NavigationUtils.navigate("view1",{spirit:Number(this.spirit.id)-1});
  }
  goNext(){
    NavigationUtils.navigate("view1",{spirit:Number(this.spirit.id)+1});
    
  }
  theresNothingNext(total,spirit){
    if(!spirit){
      return true;
    }
    if(spirit.id+1<=total){
      return false;
    }
    return true;
  }
  theresNothingBefore(total,spirit){
    if(!spirit){
      return true;
    }
    if(spirit.id-1>0){
      return false;
    }
    return true;
  }
  static get properties(){
      return{
        spirit:{
            type:Object,
            notify:true
        },
        totalElements:{
          type:Number,
          notify:true
        }
      };
  }
}

window.customElements.define('spirit-view', SpiritView);
