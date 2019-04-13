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
import { SpiritsMixin } from './spirits-mixin';
import './paginator-element';
import '@polymer/paper-input/paper-input';
import '@polymer/paper-dropdown-menu/paper-dropdown-menu';
import '@polymer/paper-listbox/paper-listbox';
import '@polymer/paper-item/paper-item';
import { NavigationMixin } from './navigation-mixin.js';
import './spirit-view';
class MyView1 extends NavigationMixin(SpiritsMixin(PolymerElement)) {
 
    static get template(){
        return html`
        <style include="shared-styles">
          :host {
            display: block;
  
            padding: 10px;
          }
          .carta{
            box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
            transition: all 0.3s cubic-bezier(.25,.8,.25,1);
            background-color: var(--paper-blue-grey-800);
            color: white;
            cursor:pointer;
            position: relative;
            

            border-radius: 5px;
          }
          .carta:hover{
              
              box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
          }
          [none-view]{
            display: none;
          }
          .image{
              width: 200px;
              height: 200px;
              background-position: center;
              background-size: contain;
              background-repeat: no-repeat;
              background-color: white;
              border-radius: 5px 5px 0px 0px;
/*              border: 1px solid var(--paper-blue-grey-400);
              border-radius: 5px 5px 0px 0px;*/
          }
          .floating-number{
            transition: opacity 300ms;
            opacity: 0.85;
          }
          .carta:hover .floating-number{
              opacity: 0;
          }
          paper-listbox{
              cursor:pointer;
          }

        </style>

        <template is="dom-if" if="[[selectedSpirit]]">
          <spirit-view spirit="[[selectedSpirit]]" total-elements="[[almightElements]]"></spirit-view>
</template>

        <div none-view$="[[selectedSpirit]]">


        <div style="display: flex; flex-wrap: wrap; margin: 8px 24px;" >
        <paper-input label="Search Spirits by ID, Name or Game" spellcheck="false" always-float-label value="{{searchValue}}" style="margin-right: 8px; flex-grow: 5;"></paper-input>
     
        <paper-dropdown-menu label="Series" style="margin-right: 8px;">
        <paper-listbox attr-for-selected="name" slot="dropdown-content" selected="{{filterSeries}}">
            <paper-item name="all">All Series</paper-item>
            <template is="dom-repeat" items="[[_series]]">
            <paper-item name="[[item.id]]">[[item.name]]</paper-item>
            </template>
        </paper-listbox>
        </paper-dropdown-menu>


     
        <paper-dropdown-menu label="Games">
                <paper-listbox attr-for-selected="name" slot="dropdown-content" style="max-width: 250px;" selected="{{filterGames}}">
                    <!--<paper-item name="spirit">Spirit Name</paper-item>
                    <paper-item name="game">Games</paper-item>-->
                    <paper-item style="border-bottom: 1px solid var(--paper-grey-500);" name="all">All Games</paper-item>
                    <template is="dom-repeat" items="[[_games]]" sort="_sortGames" filter="[[computeFilterGames(filterSeries)]]">
                    <paper-item style="border-bottom: 1px solid var(--paper-grey-500);" name="[[item.name]]">[[item.name]]</paper-item>

                    </template>

                </paper-listbox>
        </paper-dropdown-menu>

       
        
        </div>
          <div style="overflow-x: auto;">
        <div style="display: flex; align-items: center; justify-content: center; margin: 16px; min-width: 576px;">
        <paginator-element total-elements="[[totalElements]]" page-elements="[[elementsPerPage]]" selected-page="{{actualPage}}"></paginator-element>
        </div>
        </div>
        <div style="display: flex; align-items: center; justify-content: center; flex-wrap: wrap;">

        <template is="dom-repeat" items="[[getPageItems(_spirits,actualPage,searchValue,filterGames,filterSeries)]]" as="spirit">
          <div class="carta" on-click="navigateToSpirit" style="width: 200px; height: 270px; margin: 12px; position: relative;">
          <paper-ripple></paper-ripple>
            <div class="floating-number" style="position: absolute; top: 0px; right: 0px; border-radius: 0px 5px 0px 8px; color: white; background-color: var(--paper-red-800); font-style: italic; font-weight: 600; font-size: 14px; padding: 2px 6px; padding-right: 8px;">[[spirit.id]]</div>
            
            <div class="image" style$="background-image: url('../images/spirits/[[spirit.id]].jpg');"></div>
            
            <div style="height: calc(70px - 24px); margin: 12px; display: flex; align-items: center;"><iron-icon style="margin-right: 8px; min-width: 24px;" src="../images/series/[[spirit.series]].png" ></iron-icon>[[spirit.name]]</div>
            

          </div>
        </template>

        </div>

        </div>
        
        `;
    }
  ready(){
    super.ready();

  }
  navigateToSpirit(e){
    var spirit=e.model.spirit;
    
    NavigationUtils.navigate("view1",{spirit:spirit.id});

  }
  filterSpirit(spirit,searchValue,filterGames,filterSeries){
    if(!spirit){
        return false;
    }
    
        return ((filterSeries && filterSeries!="all") ? spirit.series==filterSeries : true) &&
        ((filterGames && filterGames!="all") ? spirit.games.indexOf(filterGames)!=-1 : true) &&
        ((searchValue ? spirit.games.toLowerCase().indexOf(searchValue.toLowerCase().trim())!=-1 : true)
        || (searchValue ? spirit.name.toLowerCase().indexOf(searchValue.toLowerCase().trim())!=-1 : true));

   
  }
  getPageItems(_spirits,page,searchValue,filterType,filterSeries){
      if(!_spirits){
          return;
      }


      var filteredArray=_spirits;
      this.set("almightElements",_spirits.length);

      if(searchValue || filterSeries){
          filteredArray=[];
        for(var i=0;i<_spirits.length;i++){
            if(this.filterSpirit(_spirits[i],searchValue,filterType,filterSeries)){
                filteredArray.push(_spirits[i]);
            }
        }
             

      }
      
      this.set("totalElements",filteredArray.length);

        var start=(page-1)*this.elementsPerPage;
        var end=start+this.elementsPerPage;
        var arr=[];
      for(var i=start;i<end;i++){
        var spirit=filteredArray[i];
        if(spirit){
            arr.push(spirit);
        }
      }
      return arr;
  }
  _sortGames(a,b){
      var aName=a.name.toLowerCase();
      var bName=b.name.toLowerCase();
      return aName.localeCompare(bName);
  }
  computeFilterGames(filterSeries){
      if(!filterSeries || filterSeries=="all"){
          return null;
      }
      return function(game){
        return game.series==filterSeries;
      };
  }
  _paramsChanged(params){
    //console.warn("PARAMS",params);
    if(params && params.spirit){
      var spirit=this.findSpirit(params.spirit);
     // console.log("PARAMS",spirit);
      this.set("selectedSpirit",spirit);
    }
    else{
      this.set("selectedSpirit",null);

    }
    if(params && params.lastSpirit){
      var original=params.lastSpirit/this.elementsPerPage;
      var floored=Math.floor(params.lastSpirit/this.elementsPerPage);
      if(floored!=original){
        floored++;
      }
      this.set("actualPage",floored);
    }
  }
  static get properties(){
    return{
      selectedSpirit:{
        type:Object,
        notify:true,
        value: null
      },
        filterGames:{
            type:String,
            notify:true,
            value: "all"
        },
        _pageName:{
          value: "view1"
        },
        _routeParams:{
          observer: "_paramsChanged"
        },
        filterSeries:{
            type:String,
            notify:true,
            value: "all"
        },
        elementsPerPage:{
            type:Number,
            notify:true,
            value: 40
        },
        totalElements:{
            type:Number,
            notify:true
        },
        almightElements:{
          type:Number,
          notify:true
        },
      actualPage:{
          type:Number,
          notify:true
      }
    };
  }
  
 
}

window.customElements.define('my-view1', MyView1);
