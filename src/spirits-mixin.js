import {dedupingMixin} from '@polymer/polymer/lib/utils/mixin.js';

import '@polymer/app-route/app-location.js';

let internalMixinNavigation = function(superClass) {
    return class extends superClass {
      constructor(){
          super();
      

      }
      findSpirit(id){
        for(var i=0;i<this._spirits.length;i++){
          if(this._spirits[i].id==id){
            return this._spirits[i];
          }
        }
        return null;
      }
      static get properties(){
          return{
            _games:{
              type:Array,
              notify:true,
              value:[
                {
                  "name": "Donkey Kong (1981 - Arcade)",
                  "series": "DK"
                },
                {
                  "name": "Super Mario Maker (2015 - Wii U)",
                  "series": "Mario"
                },
                {
                  "name": "Super Mario Odyssey (2017 - Switch)",
                  "series": "Mario"
                },
                {
                  "name": "Mario Bros. (1983 - Arcade)",
                  "series": "Mario"
                },
                {
                  "name": "Super Mario Bros (1985 - NES)",
                  "series": "Mario"
                },
                {
                  "name": "Super Mario Land (1989 - Game Boy)",
                  "series": "Mario"
                },
                {
                  "name": "Dr. Mario (1990 - NES)",
                  "series": "Mario"
                },
                {
                  "name": "Super Mario Galaxy (2007 - Wii)",
                  "series": "Mario"
                },
                {
                  "name": "Super Mario Sunshine (2002 - GameCube)",
                  "series": "Mario"
                },
                {
                  "name": "Super Mario Bros 3 (1988 - NES)",
                  "series": "Mario"
                },
                {
                  "name": "Super Mario Bros. 3 (1988 - NES)",
                  "series": "Mario"
                },
                {
                  "name": "Super Mario 64 (1996 - N64)",
                  "series": "Mario"
                },
                {
                  "name": "Super Mario Galaxy 2 (2010 - Wii)",
                  "series": "Mario"
                },
                {
                  "name": "New Super Mario Bros. 2 (2012 - 3DS)",
                  "series": "Mario"
                },
                {
                  "name": "New Super Mario Bros 2. (2012 - 3DS)",
                  "series": "Mario"
                },
                {
                  "name": "New Super Mario Bros. U (2012 - Wii U)",
                  "series": "Mario"
                },
                {
                  "name": "Mario & Luigi: Partners In Time (2005 - DS)",
                  "series": "Mario"
                },
                {
                  "name": "Super Mario 3D World (2013 - Wii U)",
                  "series": "Mario"
                },
                {
                  "name": "Mario Kart: Double Dash!! (2003 - GameCube)",
                  "series": "Mario"
                },
                {
                  "name": "Mario Tennis (2000 - N64)",
                  "series": "Mario"
                },
                {
                  "name": "Super Mario Bros. (1985 - NES)",
                  "series": "Mario"
                },
                {
                  "name": "Super Mario World (1990 - SNES)",
                  "series": "Yoshi"
                },
                {
                  "name": "Super Mario Bros 2 (1988 - NES)",
                  "series": "Mario"
                },
                {
                  "name": "Super Mario Bros. 2 (1988 - NES)",
                  "series": "Mario"
                },
                {
                  "name": "Luigi's Mansion (2001 - GameCube)",
                  "series": "Mario"
                },
                {
                  "name": "Boom Boom: Super Mario Bros. 3 (1988 - NES)\nPom Pom: Super Mario 3D Land (2011 - 3DS)",
                  "series": "Mario"
                },
                {
                  "name": "Super Mario World 2: Yoshi´s Island (1995 - SNES)",
                  "series": "Yoshi"
                },
                {
                  "name": "New Super Mario Bros. (2006 - DS)",
                  "series": "Mario"
                },
                {
                  "name": "New Super Mario Bros. Wii (2009 - Wii)",
                  "series": "Mario"
                },
                {
                  "name": "Super Mario Galaxy (Wii - 2007)",
                  "series": "Mario"
                },
                {
                  "name": "Super Mario Galaxy 2 (Wii - 2010)",
                  "series": "Mario"
                },
                {
                  "name": "Super Mario 3D World (Wii U - 2013)",
                  "series": "Mario"
                },
                {
                  "name": "Mario Kart Double Dash!! (2003 - Gamecube)",
                  "series": "Mario"
                },
                {
                  "name": "Mario Kart DS (2005 - DS)",
                  "series": "Mario"
                },
                {
                  "name": "Mario Kart Wii (2008 - Wii)",
                  "series": "Mario"
                },
                {
                  "name": "Mario Kart 8 (2014 - Wii U)",
                  "series": "Mario"
                },
                {
                  "name": "Paper Mario (2000 - N64)",
                  "series": "Mario"
                },
                {
                  "name": "Paper Mario: Sticker Star (2012 - 3DS)",
                  "series": "Mario"
                },
                {
                  "name": "Paper Mario: The Thousand-Year Door (2004 - Gamecube)",
                  "series": "Mario"
                },
                {
                  "name": "Super Paper Mario (2007 - Wii)",
                  "series": "Mario"
                },
                {
                  "name": "Paper Mario: Color Splash (2016 - Wii U)",
                  "series": "Mario"
                },
                {
                  "name": "Super Mario RPG: Legend of the Seven Stars (1996 - SNES)",
                  "series": "Mario"
                },
                {
                  "name": "Mario & Luigi: Superstar Saga (2003 - GBA)",
                  "series": "Mario"
                },
                {
                  "name": "Mario & Luigi: Partners in Time (2005 - DS)",
                  "series": "Mario"
                },
                {
                  "name": "Mario & Luigi: Bowser's Inside Story (2009 - DS)",
                  "series": "Mario"
                },
                {
                  "name": "Mario and Luigi: Bowser's Inside Story (2009 - DS)",
                  "series": "Mario"
                },
                {
                  "name": "Mario & Luigi: Dream Team (2013 - 3DS)",
                  "series": "Mario"
                },
                {
                  "name": "Mario & Luigi: Paper Jam (2015 - 3DS)",
                  "series": "Mario"
                },
                {
                  "name": "Wrecking Crew (1985 - NES)",
                  "series": "Mario"
                },
                {
                  "name": "Mario Paint (1992 - SNES)",
                  "series": "Mario"
                },
                {
                  "name": "Mario & Wario (1993 - SFC)",
                  "series": "Mario"
                },
                {
                  "name": "Mario Golf (1999 - Game Boy Color)",
                  "series": "Mario"
                },
                {
                  "name": "Luigi's Mansion (2001 - Gamecube)",
                  "series": "Mario"
                },
                {
                  "name": "Luigi's Mansion: Dark Moon (2013 - 3DS)",
                  "series": "Mario"
                },
                {
                  "name": "Super Princess Peach (2005 - DS)",
                  "series": "Mario"
                },
                {
                  "name": "Super Mario Strikers (2005 - Gamecube)",
                  "series": "Mario"
                },
                {
                  "name": "Mario Strikers Charged (2007 - Wii)",
                  "series": "Mario"
                },
                {
                  "name": "Mario vs. Donkey Kong (2004 - GBA)",
                  "series": "Mario"
                },
                {
                  "name": "Mario vs. Donkey Kong 2: March of the Minis (2006 - DS)",
                  "series": "Mario"
                },
                {
                  "name": "Mario Party 8 (2007 - Wii)",
                  "series": "Mario"
                },
                {
                  "name": "Mario + Rabbids: Kingdom Battle (2017 - Switch)",
                  "series": "Mario"
                },
                {
                  "name": "Mario Tennis Aces (2018 - Switch)",
                  "series": "Mario"
                },
                {
                  "name": "Donkey Kong Country (1994 - SNES)",
                  "series": "DK"
                },
                {
                  "name": "Donkey Kong Jr. (Arcade - 1982)",
                  "series": "DK"
                },
                {
                  "name": "Donkey Kong 3 (1983, Arcade)",
                  "series": "DK"
                },
                {
                  "name": "Donkey Kong Country 2: Diddy's Kong Quest (1995 - SNES)",
                  "series": "DK"
                },
                {
                  "name": "Donkey Kong 64 (1999 - N64)",
                  "series": "DK"
                },
                {
                  "name": "Donkey Kong Country 3: Dixie Kong's Double Trouble (1996 - SNES)",
                  "series": "DK"
                },
                {
                  "name": "Donkey Kong Country Returns (2010 - Wii)",
                  "series": "DK"
                },
                {
                  "name": "Donkey Kong Country: Tropical Freeze (2014 - Wii U)",
                  "series": "DK"
                },
                {
                  "name": "Donkey Kong Barrel Blast (2007 - Wii)",
                  "series": "DK"
                },
                {
                  "name": "Donkey Konga (2003 - GameCube)",
                  "series": "DK"
                },
                {
                  "name": "Donkey Kong Jungle Beat (2004 - GameCube)",
                  "series": "DK"
                },
                {
                  "name": "The Legend of Zelda (1986 - NES)",
                  "series": "Zelda"
                },
                {
                  "name": "The Legend of Zelda: Ocarina of Time (1998 - N64)",
                  "series": "Zelda"
                },
                {
                  "name": "The Legend of Zelda: The Wind Waker (2003 - Gamecube)",
                  "series": "Zelda"
                },
                {
                  "name": "The Legend of Zelda (NES - 1986)",
                  "series": "Zelda"
                },
                {
                  "name": "The Legend of Zelda: A Link to the Past (1991 - SNES)",
                  "series": "Zelda"
                },
                {
                  "name": "The Legend of Zelda: Link's Awakening (1993 - Game Boy)",
                  "series": "Zelda"
                },
                {
                  "name": "The Legend of Zelda: Majora's Mask (2000 - N64)",
                  "series": "Zelda"
                },
                {
                  "name": "The Legend of Zelda: Majora’s Mask (2000 - N64)",
                  "series": "Zelda"
                },
                {
                  "name": "The Legend of Zelda: Oracle of Seasons (2001 - GBC)",
                  "series": "Zelda"
                },
                {
                  "name": "The Legend of Zelda: Oracle of Ages (2001 - GBC)",
                  "series": "Zelda"
                },
                {
                  "name": "The Legend of Zelda: Oracle of Seasons & Oracle of Ages (2001 - GBC)",
                  "series": "Zelda"
                },
                {
                  "name": "The Legend of Zelda: Twilight Princess (2006 - Wii)",
                  "series": "Zelda"
                },
                {
                  "name": "The Legend of Zelda: Skyward Sword (2011 - Wii)",
                  "series": "Zelda"
                },
                {
                  "name": "The Legend of Zelda: A Link Between Worlds (2013 - 3DS)",
                  "series": "Zelda"
                },
                {
                  "name": "The Legend of Zelda: Breath of the Wild (Switch - 2017)",
                  "series": "Zelda"
                },
                {
                  "name": "Legend of Zelda: Breath of the Wild (Switch - 2017)",
                  "series": "Zelda"
                },
                {
                  "name": "The Legend of Zelda: Breath of the Wild (2017 - Switch)",
                  "series": "Zelda"
                },
                {
                  "name": "The Legend of Zelda: The Wind Waker (2002 - Gamecube)",
                  "series": "Zelda"
                },
                {
                  "name": "The Legend of Zelda: The Wind Waker (2002 - GameCube)",
                  "series": "Zelda"
                },
                {
                  "name": "The Legend of Zelda: Four Swords (2002 - GBA)",
                  "series": "Zelda"
                },
                {
                  "name": "The Legend of Zelda: The Minish Cap (2003 - GBA)",
                  "series": "Zelda"
                },
                {
                  "name": "The Legend of Zelda: Phantom Hourglass (2007 - DS)",
                  "series": "Zelda"
                },
                {
                  "name": "The Legend of Zelda: Spirit Tracks (2009 - DS)",
                  "series": "Zelda"
                },
                {
                  "name": "The Legend of Zelda: Tri Force Heroes (2015 - 3DS)",
                  "series": "Zelda"
                },
                {
                  "name": "Metroid (1986 - NES)",
                  "series": "Metroid"
                },
                {
                  "name": "Metroid Prime (2002 - Gamecube)",
                  "series": "Metroid"
                },
                {
                  "name": "Metroid: Zero Mission (2004 - GBA)",
                  "series": "Metroid"
                },
                {
                  "name": "Super Metroid (1994 - SNES)",
                  "series": "Metroid"
                },
                {
                  "name": "Metroid Fusion (2002 - GBA)",
                  "series": "Metroid"
                },
                {
                  "name": "Metroid Prime 2: Echoes (2004 - Gamecube)",
                  "series": "Metroid"
                },
                {
                  "name": "Metroid: Other M (2010 - Wii)",
                  "series": "Metroid"
                },
                {
                  "name": "Metroid II: Return of Samus (1990 - Game Boy)",
                  "series": "Metroid"
                },
                {
                  "name": "Metroid II: Return of Samus (1991 - Game Boy)",
                  "series": "Metroid"
                },
                {
                  "name": "Metroid: Samus Returns (2017 - 3DS)",
                  "series": "Metroid"
                },
                {
                  "name": "Metroid Prime 3: Corruption (2007 - Wii)",
                  "series": "Metroid"
                },
                {
                  "name": "Metroid Prime (2002 - GameCube)",
                  "series": "Metroid"
                },
                {
                  "name": "Metroid Prime Hunters (2006 - DS)",
                  "series": "Metroid"
                },
                {
                  "name": "Metroid Prime: Federation Force (2016 - 3DS)",
                  "series": "Metroid"
                },
                {
                  "name": "Super Mario World (1990 – SNES)",
                  "series": "Yoshi"
                },
                {
                  "name": "Yoshi's Crafted World (2019 - Switch)",
                  "series": "Yoshi"
                },
                {
                  "name": "Super Mario World 2: Yoshi's Island (1995 - SNES)",
                  "series": "Yoshi"
                },
                {
                  "name": "Yoshi’s Story (1997 - Nintendo 64)",
                  "series": "Yoshi"
                },
                {
                  "name": "Yoshi Topsy-Turvy (2004 - GBA)",
                  "series": "Yoshi"
                },
                {
                  "name": "Yoshi's New Island (2014 - 3DS)",
                  "series": "Yoshi"
                },
                {
                  "name": "Super Mario World 2: Yoshi’s Island (1995 - SNES)",
                  "series": "Yoshi"
                },
                {
                  "name": "Yoshi’s Woolly World (2015 - Wii U)",
                  "series": "Yoshi"
                },
                {
                  "name": "Kirby´s Dream Land (1992 - Game Boy)",
                  "series": "Kirby"
                },
                {
                  "name": "Kirby's Adventure (1993 – NES)",
                  "series": "Kirby"
                },
                {
                  "name": "Kirby's Dream Land (1992 - Game Boy)",
                  "series": "Kirby"
                },
                {
                  "name": "Kirby's Adventure (1993 - NES)",
                  "series": "Kirby"
                },
                {
                  "name": "Kirby's Return to Dream Land (2011 - Wii)",
                  "series": "Kirby"
                },
                {
                  "name": "Kirby Planet Robobot (2016 - 3DS)",
                  "series": "Kirby"
                },
                {
                  "name": "Kirby Super Star (1996 - SNES)",
                  "series": "Kirby"
                },
                {
                  "name": "Kirby Air Ride (2003 - GC)",
                  "series": "Kirby"
                },
                {
                  "name": "Kirby's Dream Land 2 (1995 - Game Boy)",
                  "series": "Kirby"
                },
                {
                  "name": "Kirby's Dream Land 3 (1997 - SNES)",
                  "series": "Kirby"
                },
                {
                  "name": "Kirby’s Dreamland (1992 - Gameboy)",
                  "series": "Kirby"
                },
                {
                  "name": "Kirby’s Adventure (1993 - NES)",
                  "series": "Kirby"
                },
                {
                  "name": "Kirby's Super Star Stacker (1998 - Super Famicom)",
                  "series": "Kirby"
                },
                {
                  "name": "Kirby & The Amazing Mirror (2004 - GBA)",
                  "series": "Kirby"
                },
                {
                  "name": "Kirby Squeak Squad (2006 - DS)",
                  "series": "Kirby"
                },
                {
                  "name": "Kirby Super Star Ultra (2008 - DS)",
                  "series": "Kirby"
                },
                {
                  "name": "Kirby´s Return to Dream Land (2011 - Wii)",
                  "series": "Kirby"
                },
                {
                  "name": "Kirby Triple Deluxe (2014 - 3DS)",
                  "series": "Kirby"
                },
                {
                  "name": "Kirby Planet Robot (2016 - 3DS)",
                  "series": "Kirby"
                },
                {
                  "name": "Kirby Star Allies (2018 - Switch)",
                  "series": "Kirby"
                },
                {
                  "name": "Kirby´s Adventure (1993 - NES)",
                  "series": "Kirby"
                },
                {
                  "name": "Kirby´s Epic Yarn (2010 - Wii)",
                  "series": "Kirby"
                },
                {
                  "name": "Kirby and the Rainbow Curse (2015 - Wii U)",
                  "series": "Kirby"
                },
                {
                  "name": "Star Fox (1993 - SNES)",
                  "series": "StarFox"
                },
                {
                  "name": "Star Fox 64 (1997 - N64)",
                  "series": "StarFox"
                },
                {
                  "name": "Star Fox Adventures (2002 - Gamecube)",
                  "series": "StarFox"
                },
                {
                  "name": "Star Fox Zero (2016 - Wii U)",
                  "series": "StarFox"
                },
                {
                  "name": "Star Fox Assault (2005 - GameCube)",
                  "series": "StarFox"
                },
                {
                  "name": "Star Fox Command (2006 - DS)",
                  "series": "StarFox"
                },
                {
                  "name": "Pokémon Red & Blue (1996 - Game Boy)",
                  "series": "Pokemon"
                },
                {
                  "name": "Pokémon Omega Ruby & Alpha Sapphire (2014 - 3DS)",
                  "series": "Pokemon"
                },
                {
                  "name": "Pokémon Gold & Silver (1999 - Game Boy Color)",
                  "series": "Pokemon"
                },
                {
                  "name": "Pokémon Fire Red & Leaf Green (2003 - GBA)",
                  "series": "Pokemon"
                },
                {
                  "name": "Pokémon Diamond & Pearl (2007 - DS)",
                  "series": "Pokemon"
                },
                {
                  "name": "Pokémon X & Y (2013 - 3DS)",
                  "series": "Pokemon"
                },
                {
                  "name": "Pokémon Sun & Moon (2016 - 3DS)",
                  "series": "Pokemon"
                },
                {
                  "name": "Pokémon Red and Blue (1996 - Game Boy)",
                  "series": "Pokemon"
                },
                {
                  "name": "Pokémon Sun and Moon (2016 - 3DS)",
                  "series": "Pokemon"
                },
                {
                  "name": "Pokémon Red and Blue (1996 - GB)",
                  "series": "Pokemon"
                },
                {
                  "name": "Pokémon Ruby & Sapphire (2002 - GBA)",
                  "series": "Pokemon"
                },
                {
                  "name": "Pokémon Ruby and Sapphire (2002 - GBA)",
                  "series": "Pokemon"
                },
                {
                  "name": "Pokémon Diamond & Pearl (2006 - DS)",
                  "series": "Pokemon"
                },
                {
                  "name": "Pokémon Platinum (2008 - DS)",
                  "series": "Pokemon"
                },
                {
                  "name": "Pokémon Black & White (2010 - DS)",
                  "series": "Pokemon"
                },
                {
                  "name": "Pokémon Black 2 & White 2 (2012 - DS)",
                  "series": "Pokemon"
                },
                {
                  "name": "Pokémon X and Y (2013 - 3DS)",
                  "series": "Pokemon"
                },
                {
                  "name": "Detective Pikachu - Birth of a New Duo (2016 - 3DS)",
                  "series": "Pokemon"
                },
                {
                  "name": "Earthbound (1994 - SNES)",
                  "series": "Mother"
                },
                {
                  "name": "Mother 3 (2006 - GBA)",
                  "series": "Mother"
                },
                {
                  "name": "Earthbound Beginnings (1989 - Famicom)",
                  "series": "Mother"
                },
                {
                  "name": "F-Zero (1990 - SNES)",
                  "series": "FZero"
                },
                {
                  "name": "F-Zero X (1998 - N64)",
                  "series": "FZero"
                },
                {
                  "name": "Ice Climber (1985 - NES)",
                  "series": "IceClimber"
                },
                {
                  "name": "Fire Emblem: Shadow Dragon and the Blade of Light (1990 - Famicom)",
                  "series": "FireEmblem"
                },
                {
                  "name": "Fire Emblem Awakening (2012 - 3DS)",
                  "series": "FireEmblem"
                },
                {
                  "name": "Fire Emblem: Path of Radiance (2005 - Gamecube)",
                  "series": "FireEmblem"
                },
                {
                  "name": "Fire Emblem: Radiant Dawn (2007 - Wii)",
                  "series": "FireEmblem"
                },
                {
                  "name": "Fire Emblem Fates (2015 - 3DS)",
                  "series": "FireEmblem"
                },
                {
                  "name": "Fire Emblem: Mystery of the Emblem (1994 - SFC)",
                  "series": "FireEmblem"
                },
                {
                  "name": "Fire Emblem Echoes: Shadows of Valentia (2017 - 3DS)",
                  "series": "FireEmblem"
                },
                {
                  "name": "Fire Emblem Gaiden (1992 - Famicom)",
                  "series": "FireEmblem"
                },
                {
                  "name": "Fire Emblem Genealogy of the Holy War (1996 - SFC)",
                  "series": "FireEmblem"
                },
                {
                  "name": "Fire Emblem: Genealogy of the Holy War (1996 - SFC)",
                  "series": "FireEmblem"
                },
                {
                  "name": "Fire Emblem: The Binding Blade (2002 - GBA)",
                  "series": "FireEmblem"
                },
                {
                  "name": "Fire Emblem (2003 - GBA)",
                  "series": "FireEmblem"
                },
                {
                  "name": "Fire Emblem: The Sacred Stones (2004 - GBA)",
                  "series": "FireEmblem"
                },
                {
                  "name": "Fire Emblem Fates (2016 - 3DS)",
                  "series": "FireEmblem"
                },
                {
                  "name": "Tokyo Mirage Sessions #FE (2015 - Wii U)",
                  "series": "FireEmblem"
                },
                {
                  "name": "Ball (1980 - Game & Watch)",
                  "series": "GameWatch"
                },
                {
                  "name": "Flagman (1980 - Game & Watch)",
                  "series": "GameWatch"
                },
                {
                  "name": "Fire (1980 - Game & Watch)",
                  "series": "GameWatch"
                },
                {
                  "name": "Judge (1980 - Game & Watch)",
                  "series": "GameWatch"
                },
                {
                  "name": "Manhole (1981 - Game & Watch)",
                  "series": "GameWatch"
                },
                {
                  "name": "Helmet (1981 - Game & Watch)",
                  "series": "GameWatch"
                },
                {
                  "name": "Lion (1981 - Game & Watch)",
                  "series": "GameWatch"
                },
                {
                  "name": "Parachute (1981 - Game & Watch)",
                  "series": "GameWatch"
                },
                {
                  "name": "Octopus (1981 - Game & Watch)",
                  "series": "GameWatch"
                },
                {
                  "name": "Chef (1981 - Game & Watch)",
                  "series": "GameWatch"
                },
                {
                  "name": "Turtle Bridge (1982 - Game & Watch)",
                  "series": "GameWatch"
                },
                {
                  "name": "Fire Attack (1982 - Game & Watch)",
                  "series": "GameWatch"
                },
                {
                  "name": "Oil Panic (1982 - Game & Watch)",
                  "series": "GameWatch"
                },
                {
                  "name": "Kid Icarus (1986 - NES)",
                  "series": "KidIcarus"
                },
                {
                  "name": "Kid Icarus Uprising (2012 - 3DS)",
                  "series": "KidIcarus"
                },
                {
                  "name": "Kid Icarus Uprising (2012 -3DS)",
                  "series": "KidIcarus"
                },
                {
                  "name": "Super Mario Land 2: 6 Golden Coins (1992 - Game Boy)",
                  "series": "Wario"
                },
                {
                  "name": "WarioWare, Inc. Mega Microgame$ (2003 - GBA)",
                  "series": "Wario"
                },
                {
                  "name": "WarioWare: Twisted! (2004 - Game Boy Advance)",
                  "series": "Wario"
                },
                {
                  "name": "WarioWare: Touched! (2004 - DS)",
                  "series": "Wario"
                },
                {
                  "name": "WarioWare: Smooth Moves (2006 - Wii)",
                  "series": "Wario"
                },
                {
                  "name": "WarioWare: Twisted! (2004 - GBA)",
                  "series": "Wario"
                },
                {
                  "name": "Game & Wario (2013 - Wii U)",
                  "series": "Wario"
                },
                {
                  "name": "Wario Land: Super Mario Land 3 (1994 - Game Boy)",
                  "series": "Wario"
                },
                {
                  "name": "Wario Land 4 (2001 - GBA)",
                  "series": "Wario"
                },
                {
                  "name": "Wario: Master of Disguise (2007 - DS)",
                  "series": "Wario"
                },
                {
                  "name": "Wario Land: Shake It! (2008 - Wii)",
                  "series": "Wario"
                },
                {
                  "name": "Metal Gear (1987 - MSX2)",
                  "series": "MetalGear"
                },
                {
                  "name": "Metal Gear Solid (1998 - PS)",
                  "series": "MetalGear"
                },
                {
                  "name": "Metal Gear 2: Solid Snake (1990 - MSX)",
                  "series": "MetalGear"
                },
                {
                  "name": "Metal Gear Solid 2: Sons of Liberty (2001 - PS2)",
                  "series": "MetalGear"
                },
                {
                  "name": "Metal Gear Solid 3: Snake Eater (2004 - PS2)",
                  "series": "MetalGear"
                },
                {
                  "name": "Metal Gear (1987 - MSX)",
                  "series": "MetalGear"
                },
                {
                  "name": "Metal Gear Solid V: The Phantom Pain (2015 - PS4)",
                  "series": "MetalGear"
                },
                {
                  "name": "Metal Gear Solid: Peace Walker (2010 - PSP)",
                  "series": "MetalGear"
                },
                {
                  "name": "Metal Gear Solid 4: Peace Walker (2008 - PS3)",
                  "series": "MetalGear"
                },
                {
                  "name": "Sonic the Hedgehog (1991 - Genesis)",
                  "series": "Sonic"
                },
                {
                  "name": "Sonic the Hedgehog (1991 – Genesis)",
                  "series": "Sonic"
                },
                {
                  "name": "Sonic the Hedgehog 2 (1992 – Genesis)",
                  "series": "Sonic"
                },
                {
                  "name": "Sonic the Hedgehog 2 (1992 - Genesis)",
                  "series": "Sonic"
                },
                {
                  "name": "Sonic CD (1993 - Sega CD)",
                  "series": "Sonic"
                },
                {
                  "name": "Sonic the Hedgehog 3 (1994 - Genesis)",
                  "series": "Sonic"
                },
                {
                  "name": "Knuckles' Chaotix (1995 - 32X)",
                  "series": "Sonic"
                },
                {
                  "name": "Sonic Adventure (1999 - Dreamcast)",
                  "series": "Sonic"
                },
                {
                  "name": "Sonic Adventure (1998 – Dreamcast)",
                  "series": "Sonic"
                },
                {
                  "name": "Sonic Adventure 2 (2001 - Dreamcast)",
                  "series": "Sonic"
                },
                {
                  "name": "Sonic Advance 2 (2002 - GBA)",
                  "series": "Sonic"
                },
                {
                  "name": "Sonic Heroes (2003 - Gamecube)",
                  "series": "Sonic"
                },
                {
                  "name": "Sonic Rush (2005 - Nintendo DS)",
                  "series": "Sonic"
                },
                {
                  "name": "Sonic Riders (2006 - Gamecube)",
                  "series": "Sonic"
                },
                {
                  "name": "Sonic The Hedgehog (2006 - PS3)",
                  "series": "Sonic"
                },
                {
                  "name": "Sonic Unleashed (2008 - Wii)",
                  "series": "Sonic"
                },
                {
                  "name": "Sonic Forces (2017 - Switch)",
                  "series": "Sonic"
                },
                {
                  "name": "Pikmin (2001 – Gamecube)",
                  "series": "Pikmin"
                },
                {
                  "name": "Pikmin 3 (2013 - Wii U)",
                  "series": "Pikmin"
                },
                {
                  "name": "Pikmin 2 (2004 - GameCube)",
                  "series": "Pikmin"
                },
                {
                  "name": "Pikmin (2001 - GameCube)",
                  "series": "Pikmin"
                },
                {
                  "name": "Pikmin (2001 - Gamecube)",
                  "series": "Pikmin"
                },
                {
                  "name": "Hey! Pikmin (2017 - 3DS)",
                  "series": "Pikmin"
                },
                {
                  "name": "Stack-Up (1985 - NES)",
                  "series": "ROB"
                },
                {
                  "name": "Gyromite (1985 - NES)",
                  "series": "ROB"
                },
                {
                  "name": "Dōbutsu no Mori (2001 – N64)",
                  "series": "AnimalCrossing"
                },
                {
                  "name": "Dobutsu no Mori (2001 - N64)",
                  "series": "AnimalCrossing"
                },
                {
                  "name": "Animal Crossing: New Leaf (2012 - 3DS)",
                  "series": "AnimalCrossing"
                },
                {
                  "name": "Animal Crossing: New Leaf (2012 – 3DS)",
                  "series": "AnimalCrossing"
                },
                {
                  "name": "Dōbutsu no Mori + (2001 - Gamecube)",
                  "series": "AnimalCrossing"
                },
                {
                  "name": "Dōbutsu no Mori (2001 - N64)",
                  "series": "AnimalCrossing"
                },
                {
                  "name": "Animal Crossing: City Folk (2008 – Wii)",
                  "series": "AnimalCrossing"
                },
                {
                  "name": "Dobutsu no Mori+ (2001 - GameCube)",
                  "series": "AnimalCrossing"
                },
                {
                  "name": "Animal Crossing: Wild Word (2005 - Nintendo DS)",
                  "series": "AnimalCrossing"
                },
                {
                  "name": "Dōbutsu no Mori+ (2001 – Gamecube)",
                  "series": "AnimalCrossing"
                },
                {
                  "name": "Animal Crossing: Wild World (2005 – DS)",
                  "series": "AnimalCrossing"
                },
                {
                  "name": "Animal Crossing: Wild World (2005 - DS)",
                  "series": "AnimalCrossing"
                },
                {
                  "name": "Animal Crossing: City Folk (2008 - Wii)",
                  "series": "AnimalCrossing"
                },
                {
                  "name": "Animal Crossing: Happy Home Designer (2015 - 3DS)",
                  "series": "AnimalCrossing"
                },
                {
                  "name": "Mega Man (1987 - NES)",
                  "series": "MegaMan"
                },
                {
                  "name": "Mega Man 3 (1990 - NES)",
                  "series": "MegaMan"
                },
                {
                  "name": "Mega Man 7 (1995 - SNES)",
                  "series": "MegaMan"
                },
                {
                  "name": "Mega Man 5 (1992 - NES)",
                  "series": "MegaMan"
                },
                {
                  "name": "Mega Man 2: The Power Fighters (1996 - Arcade)",
                  "series": "MegaMan"
                },
                {
                  "name": "Mega Man 4 (1991 - NES)",
                  "series": "MegaMan"
                },
                {
                  "name": "Mega Man 2 (1988 - NES)",
                  "series": "MegaMan"
                },
                {
                  "name": "Mega Man 6 (1993 - NES)",
                  "series": "MegaMan"
                },
                {
                  "name": "Mega Man 8 (1996 - PS)",
                  "series": "MegaMan"
                },
                {
                  "name": "Mega Man 9 (2008 - Wii)",
                  "series": "MegaMan"
                },
                {
                  "name": "Mega Man X (1993 - SNES)",
                  "series": "MegaMan"
                },
                {
                  "name": "Mega Man X2 (1994 - SNES)",
                  "series": "MegaMan"
                },
                {
                  "name": "Mega Max X7 (2003 - PS2)",
                  "series": "MegaMan"
                },
                {
                  "name": "Mega Man Legends (1997 - PS)",
                  "series": "MegaMan"
                },
                {
                  "name": "Mega Man Battle Network (2001 - GBA)",
                  "series": "MegaMan"
                },
                {
                  "name": "Mega Man Star Force (2006 - Nintendo DS)",
                  "series": "MegaMan"
                },
                {
                  "name": "Megaman Star Force",
                  "series": "MegaMan"
                },
                {
                  "name": "Mega Man Zero (2002 - GBA)",
                  "series": "MegaMan"
                },
                {
                  "name": "Mega Man ZX (2006 - DS)",
                  "series": "MegaMan"
                },
                {
                  "name": "Wii Fit (2007 - Wii)",
                  "series": "WiiFit"
                },
                {
                  "name": "Wii Fit Plus (2009 - Wii)",
                  "series": "WiiFit"
                },
                {
                  "name": "Punch-Out!! (1983 – Arcade)",
                  "series": "PunchOut"
                },
                {
                  "name": "Punch-Out!! (2009 - Wii)",
                  "series": "PunchOut"
                },
                {
                  "name": "Mike Tyson's Punch Out!! (1987 - NES)",
                  "series": "PunchOut"
                },
                {
                  "name": "Punch-Out!! (1983 - Arcade)",
                  "series": "PunchOut"
                },
                {
                  "name": "Super Punch-Out!! (1984 - Arcade)",
                  "series": "PunchOut"
                },
                {
                  "name": "PAC-MAN (1980 – Arcade)",
                  "series": "PacMan"
                },
                {
                  "name": "Pac-Land (1984 - Arcade)",
                  "series": "PacMan"
                },
                {
                  "name": "Pac-Man (1980 - Arcade)",
                  "series": "PacMan"
                },
                {
                  "name": "Xenoblade Chronicles (2010 - Wii)",
                  "series": "Xenoblade"
                },
                {
                  "name": "Xenoblade Chronicles X (2015 - Wii U)",
                  "series": "Xenoblade"
                },
                {
                  "name": "Xenoblade Chronicles 2 (2017 - Switch)",
                  "series": "Xenoblade"
                },
                {
                  "name": "Duck Hunt (1984 – NES)",
                  "series": "DuckHunt"
                },
                {
                  "name": "Wild Gunman (1984 - NES)",
                  "series": "DuckHunt"
                },
                {
                  "name": "Hogan's Alley (1984 - NES)",
                  "series": "DuckHunt"
                },
                {
                  "name": "Street Fighter (1987 - Arcade)",
                  "series": "StreetFighter"
                },
                {
                  "name": "Street Fighter II: The World Warrior (1991 - Arcade)",
                  "series": "StreetFighter"
                },
                {
                  "name": "Street Fighter Alpha: Warrior's Dreams (1995 - Arcade)",
                  "series": "StreetFighter"
                },
                {
                  "name": "Super Street Fighter II: The New Challengers (1993 - Arcade)",
                  "series": "StreetFighter"
                },
                {
                  "name": "Super Street Fighter II Turbo (1994 - Arcade)",
                  "series": "StreetFighter"
                },
                {
                  "name": "Street Fighter Alpha 2 (1996 - Arcade)",
                  "series": "StreetFighter"
                },
                {
                  "name": "Street Fighter Alpha 3 (1998 - Arcade)",
                  "series": "StreetFighter"
                },
                {
                  "name": "Street Fighter III: New Generation (1997 - Arcade)",
                  "series": "StreetFighter"
                },
                {
                  "name": "Final Fantasy VII (1997 - PS)",
                  "series": "FinalFantasy"
                },
                {
                  "name": "Final Fantasy VII: Advent Children (2005 - Movie)",
                  "series": "FinalFantasy"
                },
                {
                  "name": "Bayonetta (2009 - PS3)",
                  "series": "Bayonetta"
                },
                {
                  "name": "Bayonetta 2 (2014 - Wii U)",
                  "series": "Bayonetta"
                },
                {
                  "name": "Splatoon (2015 - Wii U)",
                  "series": "Splatoon"
                },
                {
                  "name": "Splatoon 2 (2017 - Switch)",
                  "series": "Splatoon"
                },
                {
                  "name": "Splatoon 2: Octo Expansion (2018 - Switch)",
                  "series": "Splatoon"
                },
                {
                  "name": "Castlevania (1986 - NES)",
                  "series": "Castlevania"
                },
                {
                  "name": "Castlevania: Rondo of Blood (1993 - PC Engine)",
                  "series": "Castlevania"
                },
                {
                  "name": "Castlevania III: Dracula's Curse (1989 - NES)",
                  "series": "Castlevania"
                },
                {
                  "name": "Castlevania: Symphony of the Night (1997 - PS)",
                  "series": "Castlevania"
                },
                {
                  "name": "Castlevania III: Dracula's Curse (1989, NES)",
                  "series": "Castlevania"
                },
                {
                  "name": "Castlevania (1999 - N64)",
                  "series": "Castlevania"
                },
                {
                  "name": "Castlevania: Circle of the Moon (2001 - GBA)",
                  "series": "Castlevania"
                },
                {
                  "name": "Castlevania: Harmony of Dissonance (2002 - GBA)",
                  "series": "Castlevania"
                },
                {
                  "name": "Castlevania: Aria of Sorrow (2003 - GBA)",
                  "series": "Castlevania"
                },
                {
                  "name": "Castlevania: Lament of Innocence (2003 - PS2)",
                  "series": "Castlevania"
                },
                {
                  "name": "Castlevania: Curse of Darkness (2005 - PS2)",
                  "series": "Castlevania"
                },
                {
                  "name": "Castlevania: Portrait of Ruin (2006 - DS)",
                  "series": "Castlevania"
                },
                {
                  "name": "Castlevania: Order of Ecclesia (2008 - DS)",
                  "series": "Castlevania"
                },
                {
                  "name": "Castlevania: Lords of Shadow (2010 - PS3)",
                  "series": "Castlevania"
                },
                {
                  "name": "Castlevania II: Simon's Quest (1987 - NES)",
                  "series": "Castlevania"
                },
                {
                  "name": "Akumajo Special: Boku Dracula-kun (1990 - Famicom)",
                  "series": "Castlevania"
                },
                {
                  "name": "Wii Music (2008 - Wii)",
                  "series": "Mii"
                },
                {
                  "name": "Wii Party (2010 - Wii)",
                  "series": "Mii"
                },
                {
                  "name": "Streetpass Mii Plaza: Find Mii II (2011 - 3DS)",
                  "series": "Mii"
                },
                {
                  "name": "Streetpass Mii Plaza: Monster Manor (2013 - 3DS)",
                  "series": "Mii"
                },
                {
                  "name": "Streetpass Mii Plaza: Mii Force (2013 - 3DS)",
                  "series": "Mii"
                },
                {
                  "name": "Streetpass Mii Plaza: Ultimate Angler (2015 - 3DS)",
                  "series": "Mii"
                },
                {
                  "name": "Streetpass Mii Plaza: Ninja Launcher (2016 - 3DS)",
                  "series": "Mii"
                },
                {
                  "name": "Streetpass Mii Plaza: Feed Mii (2016 - 3DS)",
                  "series": "Mii"
                },
                {
                  "name": "Streetpass Mii Plaza: Slot Car Rivals (2016 - 3DS)",
                  "series": "Mii"
                },
                {
                  "name": "Pilotwings (2011 - SNES)",
                  "series": "Mii"
                },
                {
                  "name": "Nintendo Land (2012 - Wii U)",
                  "series": "Mii"
                },
                {
                  "name": "Mii Channel (2006 - Wii)",
                  "series": "Smash"
                },
                {
                  "name": "Super Smash Bros. Melee (2001 - Gamecube)",
                  "series": "Smash"
                },
                {
                  "name": "Super Smash Bros. Brawl (2008 - Wii)",
                  "series": "Smash"
                },
                {
                  "name": "Super Smash Bros. (1999 – N64)",
                  "series": "Smash"
                },
                {
                  "name": "Super Smash Bros. Melee (2001 – Gamecube)",
                  "series": "Smash"
                },
                {
                  "name": "Super Smash Bros. Ultimate (2018 – Switch)",
                  "series": "Smash"
                },
                {
                  "name": "Sheriff (1979 - Arcade)",
                  "series": "Other"
                },
                {
                  "name": "Baseball (1983 - NES)",
                  "series": "Other"
                },
                {
                  "name": "Tennis (1984 - NES)",
                  "series": "Other"
                },
                {
                  "name": "Devil World (1984 - NES)",
                  "series": "Other"
                },
                {
                  "name": "Urban Champion (1984 - NES)",
                  "series": "Other"
                },
                {
                  "name": "Clu Clu Land (1984 - NES)",
                  "series": "Other"
                },
                {
                  "name": "Excitebike (1984 - NES)",
                  "series": "Other"
                },
                {
                  "name": "Balloon Fight (1985 - NES)",
                  "series": "Other"
                },
                {
                  "name": "Mach Rider (1985 - NES)",
                  "series": "Other"
                },
                {
                  "name": "Famicom Disk System (1986 - FDS)",
                  "series": "Other"
                },
                {
                  "name": "The Mysterious Murasame Castle (1986 - FDS)",
                  "series": "Other"
                },
                {
                  "name": "Volleyball (1987 - NES)",
                  "series": "Other"
                },
                {
                  "name": "Famicom Fairytales: Shin Onigashima (1987 - FDS)",
                  "series": "Other"
                },
                {
                  "name": "Ice Hockey (1988 - NES)",
                  "series": "Other"
                },
                {
                  "name": "Famicom Grand Prix II: 3D Hot Rally (1988 - FDS)",
                  "series": "Other"
                },
                {
                  "name": "Famicom Wars (1988 - Famicom)",
                  "series": "Other"
                },
                {
                  "name": "Advance Wars (2001 - GBA)",
                  "series": "Other"
                },
                {
                  "name": "Famicom Detective Club: The Missing Heir (1988 - FDS)",
                  "series": "Other"
                },
                {
                  "name": "Famicom Fairytales: Yuyuki (1989 - FDS)",
                  "series": "Other"
                },
                {
                  "name": "Joy Mech Fight (1993 - NES)",
                  "series": "Other"
                },
                {
                  "name": "Yakuman (1989 – Game Boy)",
                  "series": "Other"
                },
                {
                  "name": "X (1992 – Game Boy)",
                  "series": "Other"
                },
                {
                  "name": "Kaeru no tame ni Kane wa Naru (1992 – Game Boy)",
                  "series": "Other"
                },
                {
                  "name": "Mole Mania (1996 – Game Boy)",
                  "series": "Other"
                },
                {
                  "name": "Trade & Battle: Card Hero (2000 – Game Boy)",
                  "series": "Other"
                },
                {
                  "name": "Kousoku Card Battle: Card Hero (2007 – DS)",
                  "series": "Other"
                },
                {
                  "name": "SimCity (1991 - SNES)",
                  "series": "Other"
                },
                {
                  "name": "Battle Clash (1992 - SNES)",
                  "series": "Other"
                },
                {
                  "name": "Stunt Race FX (1994 - SNES)",
                  "series": "Other"
                },
                {
                  "name": "Panel de Pon (1995 - SFC)",
                  "series": "Other"
                },
                {
                  "name": "Marvelous: Another Treasure Island (1996 - SFC)",
                  "series": "Other"
                },
                {
                  "name": "Sutte Hakkun (1998 - SFC)",
                  "series": "Other"
                },
                {
                  "name": "Famicom Bunko: Hajimari no Mori (1999 - SFC)",
                  "series": "Other"
                },
                {
                  "name": "Teleroboxer (1995 - Virtual Boy)",
                  "series": "Other"
                },
                {
                  "name": "Wave Race 64 (1996 - N64)",
                  "series": "Other"
                },
                {
                  "name": "1080° Snowboarding (1998 - N64)",
                  "series": "Other"
                },
                {
                  "name": "Custom Robo V2 (2000 - N64)",
                  "series": "Other"
                },
                {
                  "name": "Custom Robo Arena (2006 - DS)",
                  "series": "Other"
                },
                {
                  "name": "Custom Robo (1999 - N64)",
                  "series": "Other"
                },
                {
                  "name": "Sin & Punishment (2000 - N64)",
                  "series": "Other"
                },
                {
                  "name": "Sin & Punishment: Star Successor (2009 - Wii)",
                  "series": "Other"
                },
                {
                  "name": "Kuru Kuru Kururin (2001 - GBA)",
                  "series": "Other"
                },
                {
                  "name": "Napoleon (2001 - GBA)",
                  "series": "Other"
                },
                {
                  "name": "Golden Sun (2001 - GBA)",
                  "series": "Other"
                },
                {
                  "name": "Golden Sun: Dark Dawn (2010 - DS)",
                  "series": "Other"
                },
                {
                  "name": "Magical Vacation (2001 - GBA)",
                  "series": "Other"
                },
                {
                  "name": "Tomato Adventure (2002 - GBA)",
                  "series": "Other"
                },
                {
                  "name": "Densetsu no Stafy (2002 – GBA)",
                  "series": "Other"
                },
                {
                  "name": "Densetsu no Stafy 3 (2004 – GBA)",
                  "series": "Other"
                },
                {
                  "name": "Densetsu no Stafy 4 (2006 – DS)",
                  "series": "Other"
                },
                {
                  "name": "Sennen Kazoku (2005 - GBA)",
                  "series": "Other"
                },
                {
                  "name": "Chee-Chai Alien (2001 - GBC)",
                  "series": "Other"
                },
                {
                  "name": "The Tower SP (2005 - GBA)",
                  "series": "Other"
                },
                {
                  "name": "Drill Dozer (2005 - GBA)",
                  "series": "Other"
                },
                {
                  "name": "Calciobit (2005 - GBA)",
                  "series": "Other"
                },
                {
                  "name": "Rhythm Tengoku (2006 - GBA)",
                  "series": "Other"
                },
                {
                  "name": "Rhythm Heaven Fever (2011 - Wii)",
                  "series": "Other"
                },
                {
                  "name": "Rhythm Heaven (2008 - DS)",
                  "series": "Other"
                },
                {
                  "name": "Rhythm Heaven Megamix (2015 - 3DS)",
                  "series": "Other"
                },
                {
                  "name": "Cubivore: Survival of the Fittest (2002 - Gamecube)",
                  "series": "Other"
                },
                {
                  "name": "Eternal Darkness: Sanity´s Requiem (2002 - Gamecube)",
                  "series": "Other"
                },
                {
                  "name": "Giftpia (2003 - Gamecube)",
                  "series": "Other"
                },
                {
                  "name": "Baten Kaitos Origins (2006 - Gamecube)",
                  "series": "Other"
                },
                {
                  "name": "Chibi-Robo : Plug Into Adventure (2005 - Gamecube)",
                  "series": "Other"
                },
                {
                  "name": "Chibi-Robo : Plug Into Adventure (2005, GameCube)",
                  "series": "Other"
                },
                {
                  "name": "Chibi-Robo! Photo Finder (3DS - 2013)",
                  "series": "Other"
                },
                {
                  "name": "Daigasso! Band Brothers (2004 - DS)",
                  "series": "Other"
                },
                {
                  "name": "Trace Memory (2005 - DS)",
                  "series": "Other"
                },
                {
                  "name": "Electroplankton (2005 - DS)",
                  "series": "Other"
                },
                {
                  "name": "Brain Age: Train Your Brain in Minutes a Day! (2005 - DS)",
                  "series": "Other"
                },
                {
                  "name": "Brain Age: Concentration Training (2012 - 3DS)",
                  "series": "Other"
                },
                {
                  "name": "Big Brain Academy (2005 - DS)",
                  "series": "Other"
                },
                {
                  "name": "Osu! Tatakae! Ouendan! (2005 - DS)",
                  "series": "Other"
                },
                {
                  "name": "Elite Beat Agents (2006 - DS)",
                  "series": "Other"
                },
                {
                  "name": "Project Hacker: Kakusei (2006 - DS)",
                  "series": "Other"
                },
                {
                  "name": "Chosoju Mecha MG (2006 - DS)",
                  "series": "Other"
                },
                {
                  "name": "Hotel Dusk: Room 215 (2007 - DS)",
                  "series": "Other"
                },
                {
                  "name": "Kurikin Nano Island Story (2007 - DS)",
                  "series": "Other"
                },
                {
                  "name": "Sujin Taisen (2007 - DS)",
                  "series": "Other"
                },
                {
                  "name": "Slide Adventure MAGKID (2007 - DS)",
                  "series": "Other"
                },
                {
                  "name": "ASH: Archaic Sealed Heat (2007 - DS)",
                  "series": "Other"
                },
                {
                  "name": "Make 10: A Journey of Numbers (2008 - DS)",
                  "series": "Other"
                },
                {
                  "name": "Soma Bringer (2008 - DS)",
                  "series": "Other"
                },
                {
                  "name": "Fossil Fighters (2008 - DS)",
                  "series": "Other"
                },
                {
                  "name": "Fossil Fighters Frontier (2014 - 3DS)",
                  "series": "Other"
                },
                {
                  "name": "Glory of Heracles (2008 - DS)",
                  "series": "Other"
                },
                {
                  "name": "Shaberu! DS Oyori Navi (2006 – DS)",
                  "series": "Other"
                },
                {
                  "name": "Style Savvy (2008 - DS)",
                  "series": "Other"
                },
                {
                  "name": "Art Academy First Semester (2009 - DS)",
                  "series": "Other"
                },
                {
                  "name": "Looksley's Line Up (2010 - DS)",
                  "series": "Other"
                },
                {
                  "name": "Tsukutte Utau: Saru Band (2010 - DS)",
                  "series": "Other"
                },
                {
                  "name": "Fatal Frame II: Crimsom Butterfly (2003 - PS2)",
                  "series": "Other"
                },
                {
                  "name": "Fatal Frame: Maiden of Black Water (2014 - Wii U)",
                  "series": "Other"
                },
                {
                  "name": "Captain Rainbow (2009 - Wii)",
                  "series": "Other"
                },
                {
                  "name": "Disaster: Day of Crisis (2009 - Wii)",
                  "series": "Other"
                },
                {
                  "name": "Excitebots: Trick Racing (2009 - Wii)",
                  "series": "Other"
                },
                {
                  "name": "Takt of Magic (2009 - Wii)",
                  "series": "Other"
                },
                {
                  "name": "Zangeki no Reginleiv (2010 - Wii)",
                  "series": "Other"
                },
                {
                  "name": "And-Kensaku (2010 - Wii)",
                  "series": "Other"
                },
                {
                  "name": "Flingsmash (2010 - Wii)",
                  "series": "Other"
                },
                {
                  "name": "The Last Story (2011 - Wii)",
                  "series": "Other"
                },
                {
                  "name": "Pandora's Tower (2011 - Wii)",
                  "series": "Other"
                },
                {
                  "name": "nintendogs (2005 - DS)",
                  "series": "Other"
                },
                {
                  "name": "nintendogs + cats (2011 - 3DS)",
                  "series": "Other"
                },
                {
                  "name": "Steel Diver (2011 - 3DS)",
                  "series": "Other"
                },
                {
                  "name": "Pushmo (2011 - 3DS)",
                  "series": "Other"
                },
                {
                  "name": "Sakura Samurai: Art of the Sword (2011 - 3DS)",
                  "series": "Other"
                },
                {
                  "name": "Swapnote (2011 - 3DS)",
                  "series": "Other"
                },
                {
                  "name": "Kiki Trick (2012 - Wii)",
                  "series": "Other"
                },
                {
                  "name": "Dillon's Rolling Western (2012 - 3DS)",
                  "series": "Other"
                },
                {
                  "name": "Shovel Knight (2014 - Wii U)",
                  "series": "Other"
                },
                {
                  "name": "Culdcept (1997 - Saturn)",
                  "series": "Other"
                },
                {
                  "name": "Culdcept II (2001 - Dreamcast)",
                  "series": "Other"
                },
                {
                  "name": "Culdcept Revolt (2016 - 3DS)",
                  "series": "Other"
                },
                {
                  "name": "Harmoknight (2013 - 3DS)",
                  "series": "Other"
                },
                {
                  "name": "Fluidity: Spin Cycle (2012 - 3DS)",
                  "series": "Other"
                },
                {
                  "name": "Nintendoji (2012 - DS)",
                  "series": "Other"
                },
                {
                  "name": "Darumeshi Sports Store (2013 - 3DS)",
                  "series": "Other"
                },
                {
                  "name": "Rusty's Real Deal Baseball (2014 - 3DS)",
                  "series": "Other"
                },
                {
                  "name": "Nintendo Badge Arcade (2015 - 3DS)",
                  "series": "Other"
                },
                {
                  "name": "BoxBoy! (2015 - 3DS)",
                  "series": "Other"
                },
                {
                  "name": "Code Name: S.T.E.A.M. (2015 - 3DS)",
                  "series": "Other"
                },
                {
                  "name": "Ever Oasis (2017 - 3DS)",
                  "series": "Other"
                },
                {
                  "name": "The Wonderful 101 (2013 - Wii U)",
                  "series": "Other"
                },
                {
                  "name": "Rayman (1995 - Jaguar)",
                  "series": "Other"
                },
                {
                  "name": "Snipperclips (2017 - Switch)",
                  "series": "Other"
                },
                {
                  "name": "ARMS (2017 - Nintendo Switch)",
                  "series": "Other"
                },
                {
                  "name": "Galaga (1981 - Arcade)",
                  "series": "Other"
                },
                {
                  "name": "Bomberman (1983 - MSX)",
                  "series": "Other"
                },
                {
                  "name": "Virtua Fighter (1993 - Arcade)",
                  "series": "Other"
                },
                {
                  "name": "Monster Hunter (2004 - PS2)",
                  "series": "Other"
                },
                {
                  "name": "Shantae (2002 - GBC)",
                  "series": "Other"
                },
                {
                  "name": "Pokémon Let's Go, Pikachu! (2018 - Switch)",
                  "series": "Pokemon"
                },
                {
                  "name": "Pokémon Let's Go, Eevee! (2018 - Switch)",
                  "series": "Pokemon"
                },
                {
                  "name": "Mario Party (1998 - N64)",
                  "series": "Mario"
                },
                {
                  "name": "Super Mario Party (2018 - Switch)",
                  "series": "Mario"
                },
                {
                  "name": "Mario Kart 64 (1996 - Nintendo 64)",
                  "series": "Mario"
                }
              ]
            },
            _series:{
              type:Array,
              notify:true,
              value:[
                {
                  "id": "Mario",
                  "name": "Mario"
                },
                {
                  "id": "DK",
                  "name": "Donkey Kong"
                },
                {
                  "id": "Zelda",
                  "name": "Zelda"
                },
                {
                  "id": "Metroid",
                  "name": "Metroid"
                },
                {
                  "id": "Yoshi",
                  "name": "Yoshi"
                },
                {
                  "id": "Kirby",
                  "name": "Kirby"
                },
                {
                  "id": "StarFox",
                  "name": "Star Fox"
                },
                {
                  "id": "Pokemon",
                  "name": "Pokémon"
                },
                {
                  "id": "Mother",
                  "name": "Mother"
                },
                {
                  "id": "FZero",
                  "name": "F-Zero"
                },
                {
                  "id": "IceClimber",
                  "name": "Ice Climbers"
                },
                {
                  "id": "FireEmblem",
                  "name": "Fire Emblem"
                },
                {
                  "id": "GameWatch",
                  "name": "Game & Watch"
                },
                {
                  "id": "KidIcarus",
                  "name": "Kid Icarus"
                },
                {
                  "id": "Wario",
                  "name": "Wario"
                },
                {
                  "id": "MetalGear",
                  "name": "Metal Gear Solid"
                },
                {
                  "id": "Sonic",
                  "name": "Sonic"
                },
                {
                  "id": "Pikmin",
                  "name": "Pikmin"
                },
                {
                  "id": "ROB",
                  "name": "R.O.B."
                },
                {
                  "id": "AnimalCrossing",
                  "name": "Animal Crossing"
                },
                {
                  "id": "MegaMan",
                  "name": "Mega Man"
                },
                {
                  "id": "WiiFit",
                  "name": "Wii Fit"
                },
                {
                  "id": "PunchOut",
                  "name": "Punch-Out"
                },
                {
                  "id": "PacMan",
                  "name": "Pac Man"
                },
                {
                  "id": "Xenoblade",
                  "name": "Xenoblade"
                },
                {
                  "id": "DuckHunt",
                  "name": "Duck Hunt"
                },
                {
                  "id": "StreetFighter",
                  "name": "Street Fighter"
                },
                {
                  "id": "FinalFantasy",
                  "name": "Final Fantasy"
                },
                {
                  "id": "Bayonetta",
                  "name": "Bayonetta"
                },
                {
                  "id": "Splatoon",
                  "name": "Splatoon"
                },
                {
                  "id": "Castlevania",
                  "name": "Castlevania"
                },
                {
                  "id": "Mii",
                  "name": "Mii"
                },
                {
                  "id": "Smash",
                  "name": "Smash"
                },
                {
                  "id": "Other",
                  "name": "Other"
                }
              ]
              
            },
            _spirits:{
                type:Array,
                notify:true,
                value: [
    {
      "id": 1,
      "name": "Mario",
      "games": "Donkey Kong (1981 - Arcade)",
      "series": "Mario",
      "description": "It’s-a me, Mario! Mario is the Italian plumber with red and blue overalls that we all know and love. A true ace-of-all-trades, Mario is an expert of Goomba stomping, princess rescuing, medicine, sports, etc. His franchise is the best-selling one in the entire world, and Mario himself has already appeared in more than 200 games, of almost every genre. When you see that red cap, you know you’re in for a good time. Let’s-a go!",
      "bigName": "Mario"
    },
    {
      "id": 2,
      "name": "Builder Mario",
      "games": "Super Mario Maker (2015 - Wii U)",
      "series": "Mario",
      "description": "This version of Mario, with yellow and red overalls, appeared in Super Mario Maker, a game that allowed people to create their own Mario levels and play others' levels. You can create them in the style of four different games, and mix and match a bunch of elements to make some crazy stages. By now you should know that Mario can take on any challenge, so don't be afraid to make some tough levels!",
      "bigName": "Builder Mario"
    },
    {
      "id": 3,
      "name": "Wedding Mario",
      "games": "Super Mario Odyssey (2017 - Switch)",
      "series": "Mario",
      "description": "It's been 36 years since Mario first rescued Peach, and just now he proposes to her... it's a shame she didn't accept it, but at least they’re still friends! This Mario in a wedding suit appears in Super Mario Odyssey, a game in which Mario could wear a variety of different costumes. He looks quite dapper with that top hat, doesn’t he? Actually that’s just Cappy, so you can still throw it to capture enemies.",
      "bigName": "Wedding Mario"
    },
    {
      "id": 4,
      "name": "Luigi",
      "games": "Mario Bros. (1983 - Arcade)",
      "series": "Mario",
      "description": "Luigi is Mario's brother, and first appeared alongside him in the arcade game Mario Bros. In this game, they killed monsters that invaded the sewers of New York City together, and now, 30 years later, they are still a great duo, helping each other when needed. Sometimes, though, Luigi also goes on his own adventures, usually chasing ghosts, or being chased by them, and he even had a whole year dedicated to him!",
      "bigName": "Luigi"
    },
    {
      "id": 5,
      "name": "Peach",
      "games": "Super Mario Bros (1985 - NES)",
      "series": "Mario",
      "description": "Peach is the princess of the Mushroom Kingdom, and the one Mario has been rescuing since the beginning. Despite her tendencies to being kidnapped, she has shown to hold her own in a fight. Her loyal Toads will do anything for her, even take the blunt of attacks, and she can even float for a short time. Fun fact: she was first named Princess Toadstool, and once had her own game called Super Princess Peach!",
      "bigName": "Peach"
    },
    {
      "id": 6,
      "name": "Daisy",
      "games": "Super Mario Land (1989 - Game Boy)",
      "series": "Mario",
      "description": "Daisy is another princess rescued by Mario - she ruled over Sarasaland, but got captured by an alien invader called Tatanga. After she was rescued, she had the common sense to not be kidnapped again. Now she lives in the Mushroom Kingdom with Mario, Peach and the others, and mostly shows up when they get together for a kart race, or a party, or a tennis match, or… well, you get the idea. She also has developed a crush on Luigi.",
      "bigName": "Daisy"
    },
    {
      "id": 7,
      "name": "Bowser",
      "games": "Super Mario Bros (1985 - NES)",
      "series": "Mario",
      "description": "Bowser is the main antagonist of the Mario series, appearing in many games leading his army of Koopas and kidnapping Peach, in order to take over the Mushroom Kingdom. This resilient and stubborn Koopa has been stomped, beaten and thrown into lava countless times, and yet, he always comes back. Talk about persistence! As of recently, though, he doesn't mind playing tennis or go-kart with Mario and his crew.",
      "bigName": "Bowser"
    },
    {
      "id": 8,
      "name": "Dr. Mario",
      "games": "Dr. Mario (1990 - NES)",
      "series": "Mario",
      "description": "You may never have expected to see Mario in a lab coat and with a stethoscope around his neck, but here he is! Dr. Mario works at the Mushroom Kingdom Hospital, eliminating viruses and other diseases using Megavitamins. Dr. Mario isn't alone in his medical efforts. He occasionally gets assistance from Dr. Luigi and Nurse Toadstool as well.",
      "bigName": "Dr. Mario"
    },
    {
      "id": 9,
      "name": "Rosalina",
      "games": "Super Mario Galaxy (2007 - Wii)",
      "series": "Mario",
      "description": "Rosalina is a powerful princess that is tasked with the job of watching over and protecting the cosmos. She lives in the Comet Observatory, caring for her adopted children, the Lumas, star-like creatures with the ability to transform into planets and even galaxies! Once every one hundred years, she flies her observatory over the Mushroom Kingdom, an occasion which is cause for big celebration down there.",
      "bigName": "Rosalina"
    },
    {
      "id": 10,
      "name": "Bowser Jr.",
      "games": "Super Mario Sunshine (2002 - GameCube)",
      "series": "Mario",
      "description": "This little Koopa is Bowser Jr, and as you may have guessed, is the son of Bowser. He has helped his father to kidnap Peach and battle Mario and Luigi in many different occasions. At first, he believed she was his mama. He eventually found out the truth, but that didn’t make him want to kidnap her any less! That machine he flies on is the Jr. Clown Car, a miniature version of his father’s own machine, the Koopa Clown Car.",
      "bigName": "Bowser Jr."
    },
    {
      "id": 11,
      "name": "Iggy",
      "games": "Super Mario Bros 3 (1988 - NES)",
      "series": "Mario",
      "description": "Iggy is a crazed, mechanical genius that has a light green hair and black glasses. He is part of the Koopalings and loves to hang around with Lemmy. He tries to talk in a cutesy way, but his laugh gives away the fact that he's a maniac. You can even hear his giggling while running down the corridor that leads to him! He also likes taming Chain Chomps and even has one of his own to take down Mario!",
      "bigName": "Iggy"
    },
    {
      "id": 12,
      "name": "Wendy",
      "games": "Super Mario Bros. 3 (1988 - NES)",
      "series": "Mario",
      "description": "Wendy O. Koopa is the only female of the Koopalings, and is often seen around with rings on her arms and wielding a wand she stole from the Water King. Those rings aren’t just fashionable, though, she can also use them to attack, by enlarging them and having the fly across the room. She may be big and bossy, but it appears she's actually quite a graceful ice skater.",
      "bigName": "Wendy"
    },
    {
      "id": 13,
      "name": "Lemmy",
      "games": "Super Mario Bros 3 (1988 - NES)",
      "series": "Mario",
      "description": "Lemmy is the smallest Koopaling, but still manages to be a threat. You can recognize him easily due to his multicolored Mohawk and his often childish behavior. He may seem silly, riding around on a giant ball, but if you underestimate him, you're gonna get stomped. His magic wand can summon more of these balls to throw you off the platform, and he can also throw enormous, if goofy, bombs. Fun fact: He is named after the lead singer of Motörhead, Lemmy Kilmister.",
      "bigName": "Lemmy"
    },
    {
      "id": 14,
      "name": "Roy (Super Mario Bros.)",
      "games": "Super Mario Bros 3 (1988 - NES)",
      "series": "Mario",
      "description": "Roy is your typical \"don't think at all, just go with brute force\" guy. Sporting pink glasses and a cannon that can shoot Bullet Bills, this Koopaling is more brawn than brains and has a gruff, tough demeanor. He's also quite a heavy guy, when he climbs on the walls and ceiling and the drops to the floor, his weight is enough to cause mini-earthquakes that can stun Mario!",
      "bigName": "Roy (Super Mario Bros.)"
    },
    {
      "id": 15,
      "name": "Larry",
      "games": "Super Mario Bros 3 (1988 - NES)",
      "series": "Mario",
      "description": "Larry is the youngest of the Koopalings, and was even stated to be \"Bowser's number one Koopaling\". He has light blue hair and possesses a magic wand, which can shoot light-blue blasts. He gets very angry when Mario reaches him, almost as if he didn’t expect Mario to beat his castle. Because he's the youngest, you'd imagine he'd be the weakest, and indeed, most of the time, he's actually pretty easy to beat.",
      "bigName": "Larry"
    },
    {
      "id": 16,
      "name": "Ludwig",
      "games": "Super Mario Bros 3 (1988 - NES)",
      "series": "Mario",
      "description": "Ludwig von Koopa is the oldest of the Koopalings. He is also the smartest, Ludwig has a wild blue hair and often looks serious and mature. As serious and mature as Koopalings go, anyway. He is also a bit of a show-off, and he will get mad if Mario ignores him. He seems to have a unique ability among his siblings to flutter jump, which makes him more of an air fighter than any other Koopaling.",
      "bigName": "Ludwig"
    },
    {
      "id": 17,
      "name": "Morton",
      "games": "Super Mario Bros. 3 (1988 - NES)",
      "series": "Mario",
      "description": "His full name is Morton Koopa Jr, and he is easily distinguished from the other Koopalings because of his dark skin and his white head with a star painted on the left side. He's brawny and a bit lazy, sometimes he won't even move when fighting Mario, being content with letting his magic blasts and the traps in his stage do all the work. Despite this, he can be astute, and cares deeply for his siblings.",
      "bigName": "Morton"
    },
    {
      "id": 18,
      "name": "Super Mushroom",
      "games": "Super Mario Bros (1985 - NES)",
      "series": "Mario",
      "description": "You may think that mushrooms are poisonous, but this one is particularly good for Mario, since it transforms him into his Super Form. Other times, it can regain Mario's health, or give him a boost in races. Nowadays, this item has become the icon of the Mario franchise and is almost as recognizable as Mario himself. Don’t mix it up with the poison variety, or you'll be in for a nasty surprise.",
      "bigName": "Super Mushroom"
    },
    {
      "id": 19,
      "name": "Fire Flower",
      "games": "Super Mario Bros (1985 - NES)",
      "series": "Mario",
      "description": "The Fire Flower, as the name says, gives Mario fire powers, allowing him to throw fireballs from his bare hands. Well, his gloved hands, anyway. It really is a saviour when you have to deal with those enemies you don't feel brave enough to jump on. Those Hammer Bros have it coming. In Smash Bros. it seems Mario doesn’t need the flower to throw fireballs, so it instead shoots a continuous stream of flames.",
      "bigName": "Fire Flower"
    },
    {
      "id": 20,
      "name": "Super Star",
      "games": "Super Mario Bros (1985 - NES)",
      "series": "Mario",
      "description": "This is no ordinary star. This is the Super Star, an item that grants invincibility, and the power to defeat the toughest of enemies by simply touching them. Be quick, though, this star won't just sit around, waiting for you to grab it. If you're too slow, it might bounce off a cliff, and then how are you going to get past that tough section full of enemies and spikes? With your skills?",
      "bigName": "Super Star"
    },
    {
      "id": 21,
      "name": "Metal Mario",
      "games": "Super Mario 64 (1996 - N64)",
      "series": "Mario",
      "description": "Acquiring a metal cap will transform Mario into Metal Mario! With his metallic skin, Mario is completely impervious to damage, and, due to his increased weight, is able to walk underwater as if on dry land! Though originally just a power-up, he's since taken a form of his own and often plays the role of Mario's rival in spin-off titles like Mario Kart 7 and Mario Kart 8, and even appears as a boss in the original Super Smash Bros.",
      "bigName": "Metal Mario"
    },
    {
      "id": 22,
      "name": "Boo Mario",
      "games": "Super Mario Galaxy (2007 - Wii)",
      "series": "Mario",
      "description": "Don't be scared! This is just Mario under the effects of a Boo Mushroom. In this form, he can turn invisible and pass through certain walls, just like a real ghost! He still has his recognizable cap, nose, and mustache, though that arguably makes him even scarier... The Boo Mushroom can be found on some of the most haunted galaxies in the universe, but its effects wear off if Mario passes under a strong light.",
      "bigName": "Boo Mario"
    },
    {
      "id": 23,
      "name": "Rock Mario",
      "games": "Super Mario Galaxy 2 (2010 - Wii)",
      "series": "Mario",
      "description": "Mario is ready to rock and roll when he gets a Rock Mushroom. In this form, Mario can freely transform into a big boulder and hurl himself against any puny obstacle unfortunate enough to stand in his way. You'd think Mario would get really dizzy after some rolls like that, but he just gets back up and keeps going. He can even jump while in this form! Not even a big rocky body can keep Mario down.",
      "bigName": "Rock Mario"
    },
    {
      "id": 24,
      "name": "Gold Mario",
      "games": "New Super Mario Bros. 2 (2012 - 3DS)",
      "series": "Mario",
      "description": "Do you know what Mario likes more than mushrooms? Coins! When Mario picks up a Gold Flower, he turns into Gold Mario and can shoot special fireballs that turn any enemy or Brick Block they touch into gold coins. He’ll have so many lives by the end of it! Something similar to Gold Mario happens in Smash when a fighter gets a certain amount of coins on the Golden Plains stage. But instead of getting more coins, it gives them a power boost!",
      "bigName": "Gold Mario"
    },
    {
      "id": 25,
      "name": "Fox Luigi",
      "games": "New Super Mario Bros 2. (2012 - 3DS)",
      "series": "Mario",
      "description": "Although Mario gains his Raccoon costume when he grabs a Super Leaf, when Luigi does so, he gets a fox costume instead. Despite this, he keeps the same abilities, being able to fly by wagging his tail. Keep in mind, though, that this isn’t Kitsune Luigi, meaning that he won’t be able to turn into a statue. Regardless, in Super Smash Bros. when Luigi gets a Super Leaf, he gets raccoon ears and tail instead.",
      "bigName": "Fox Luigi"
    },
    {
      "id": 26,
      "name": "Flying Squirrel Toad",
      "games": "New Super Mario Bros. U (2012 - Wii U)",
      "series": "Mario",
      "description": "A person may gain the Flying Squirrel power-up by grabbing a Super Acorn, and since Toads began to help Mario to rescue the princess, they can gain the power-up as well! Using this costume, they can gracefully glide in the air, allowing them to make dangerous jumps more easily. They also gain the ability to cling to walls, allowing for safe repositioning before another jump. They resemble the cute Waddlewings that can be found all over Acorn Plains.",
      "bigName": "Flying Squirrel Toad"
    },
    {
      "id": 27,
      "name": "Baby Peach",
      "games": "Mario & Luigi: Partners In Time (2005 - DS)",
      "series": "Mario",
      "description": "Peach has had many adventures, even as a child! She was kidnapped by Kamek for being one of the seven Star Children, alongside Mario, Luigi, and others. However, she, alongside Mario, were rescued by the Yoshis, who took her in and helped rescue the five other Star Children. Baby Peach also was attacked by the Shroobs and taken to the future in a time machine. She later returned to the past, although she has returned for kart racing and baseball occasionally.",
      "bigName": "Baby Peach"
    },
    {
      "id": 28,
      "name": "Cat Princess Peach",
      "games": "Super Mario 3D World (2013 - Wii U)",
      "series": "Mario",
      "description": "This version of Peach has used a Super Bell to transform herself into a cat. As a cat, she can slide into enemies, pounce in midair and climb up walls. This power-up is also very useful for climbing up the flag pole in the end, even if your jump misses the top. Plus, it just looks so cute! A hand-puppet version of her is also one of the co-hosts of the series of educational shorts “The Cat Mario Show”",
      "bigName": "Cat Princess Peach"
    },
    {
      "id": 29,
      "name": "Peach (Wedding)",
      "games": "Super Mario Odyssey (2017 - Switch)",
      "series": "Mario",
      "description": "This is Peach dressed in the Lochlady Dress, a famous wedding dress from the Lake Kingdom. Bowser kidnapped Peach in an attempt to marry her, and is stealing all the wedding supplies. Peach is also not wearing her normal crown: It’s Cappy’s little sister, Tiara! Neither Peach nor Tiara are happy about this predicament, but it’ll be a while before they’re rescued, given that Mario and Cappy are being slowed down by the wedding planners, the Broodals.",
      "bigName": "Peach (Wedding)"
    },
    {
      "id": 30,
      "name": "Bowser (Wedding)",
      "games": "Super Mario Odyssey (2017 - Switch)",
      "series": "Mario",
      "description": "A challenger approaches! Bowser tried to steal Peach again, this time by marrying her, but she refused the invitation. Unfortunately, Bowser isn't one to give up so easily, so Mario and Cappy will need to work very hard to rescue the princess this time. He’s even gathered a shady group of rabbits known as the Broodals to help arrange the wedding. At least Bowser looks cool in this wedding suit.",
      "bigName": "Bowser (Wedding)"
    },
    {
      "id": 31,
      "name": "Toad",
      "games": "Super Mario Bros (1985 - NES)",
      "series": "Mario",
      "description": "Toad is often seen as Princess Peach’s attendant and a longtime protector of the Mushroom Kingdom, often helping Mario along the way in some form or another. He’s not the only Toad though. There’s an entire species of Toads, which look exactly like him! But some Toads wear different colored vests and have different colored spots on their heads to help tell them apart. And yes, that is their head, not a hat.",
      "bigName": "Toad"
    },
    {
      "id": 32,
      "name": "Captain Toad",
      "games": "Super Mario Galaxy (2007 - Wii)",
      "series": "Mario",
      "description": "This energetic Toad loves to go treasure hunting and exploring. One time, he helped Mario track Power Stars all throughout the universe, but then he began to focus on finding treasure on his own world. Once, he had to save his friend Toadette from a large bird that tried to steal a shiny star. His backpack is full of important equipment, but that made it so heavy that Captain Toad can’t jump while wearing it.",
      "bigName": "Captain Toad"
    },
    {
      "id": 33,
      "name": "Toadette",
      "games": "Mario Kart: Double Dash!! (2003 - GameCube)",
      "series": "Mario",
      "description": "Toadette loves to track treasure right alongside Captain Toad. However, when she attempts to prevent a valuable Power Star from being taken by Wingo, she grabs on and is carried right away with it! However, after Captain Toad rescues her, she joins the Toad Brigade, and has served many other roles over the years. In fact, she made her debut as a kart racer!",
      "bigName": "Toadette"
    },
    {
      "id": 34,
      "name": "Toadsworth",
      "games": "Super Mario Sunshine (2002 - GameCube)",
      "series": "Mario",
      "description": "Peach’s elderly adviser, Toadsworth, also functions as her caretaker. He frets every time Peach is in danger, and has been known to pass out from fright! Toadsworth tends not to play a central role in Mario’s adventures, although he is supportive, as he has run both Toad Houses and tutorials. He does hold a rather esteemed position in the Mushroom Kingdom, though, as he used to run the award ceremonies for kart races!",
      "bigName": "Toadsworth"
    },
    {
      "id": 35,
      "name": "Waluigi",
      "games": "Mario Tennis (2000 - N64)",
      "series": "Mario",
      "description": "Expecting a description? Too bad, Waluigi time! Originally created to be Wario’s partner in Mario Tennis, Waluigi has evolved into something bigger – not only is he just Wario’s friend and Luigi’s lanky rival, he’s always seen competing against others in a variety of sports. He would have you believe that everyone is cheating but him. In Smash Bros, he can appear as an Assist Trophy. Where he'll pummel opponents into the ground and proceed to beat them with his trusty tennis racket.",
      "bigName": "Waluigi"
    },
    {
      "id": 36,
      "name": "Goomba",
      "games": "Super Mario Bros (1985 - NES)",
      "series": "Mario",
      "description": "This little guy is the first enemy you see in the original Super Mario Bros. game, though he did little else other than just walk forward – and since then, he and his species have become one of the most popular among the Mario characters. Nothing can stop these guys, not even a bottomless pit right in front of them. Their “walk forward” strategy rarely changes, but there have been attempts to mix it up, such as stacking on top of each other and then walking forward.",
      "bigName": "Goomba"
    },
    {
      "id": 37,
      "name": "Koopa Troopa",
      "games": "Super Mario Bros (1985 - NES)",
      "series": "Mario",
      "description": "These are some of Mario’s most well-known foes, typically being the second type encountered after Goombas. Sometimes they walk on four legs, and other times they walk on two. They won’t be defeated with a single stomp though. They will instead retract into their shells, which can then be kicked. Koopa Troopas have played tennis and raced karts with Mario before, showing that they’re not always enemies. There are many types of Koopa Troopas, with shells coming in red, blue, yellow, green, and gold. Some have wings and are known as Koopa Paratroopas.",
      "bigName": "Koopa Troopa"
    },
    {
      "id": 38,
      "name": "Hammer Bro",
      "games": "Super Mario Bros (1985 - NES)",
      "series": "Mario",
      "description": "These Koopas are notable for standing upright and throwing lots of hammers at Mario. In Super Smash Bros, they can be summoned as Assist Trophies where they will heave a healthy helping of hammers onto helpless opponents. Their shells are bigger than the ones of regular Koopas, and they are the only ones to wear helmets. Maybe it's in case they hit themselves or each other. Don't throw hammers, kids.",
      "bigName": "Hammer Bro"
    },
    {
      "id": 39,
      "name": "Lakitu & Spiny",
      "games": "Super Mario Bros. (1985 - NES)",
      "series": "Mario",
      "description": "Lakitus are a type of Koopas that like to roam around in their little clouds. Some of them are hostile, like this one, dropping Spiny Eggs (that hatch into Spinies when they touch the ground) to kill Mario. As once described by a wise man, they “seem to be very free, floating in the air, going anywhere”. Non-hostile types can be seen filming Mario’s adventures on camera or serving as referees to kart races.",
      "bigName": "Lakitu & Spiny"
    },
    {
      "id": 40,
      "name": "Blooper",
      "games": "Super Mario Bros (1985 - NES)",
      "series": "Mario",
      "description": "Bloopers are enemies that roam the sea, often following Mario in a zig-zag pattern. Although the sea is their natural habitat, it has been observed that some Bloopers can survive out of the water. Some of them can even grow to incredible sizes, and throw some nasty ink. Some are followed by a bunch of baby Bloopers, forming a trail behind them. And some can even be used as surf boards! There’s truly an impressive variety.",
      "bigName": "Blooper"
    },
    {
      "id": 41,
      "name": "Bullet Bill",
      "games": "Super Mario Bros (1985 - NES)",
      "series": "Mario",
      "description": "A Bullet Bill is a big black bullet usually shot out of a big black cannon to hit Mario. Mostly they travel in a straight line, but some variants can home in like a missile to get Mario. Don’t be afraid to stomp them, though, they are just as vulnerable to Mario’s feet as a Goomba. Despite being dangerous enemies, they can sometimes be used as helpful items, such as in the Mario Kart and Super Smash Bros. series.",
      "bigName": "Bullet Bill"
    },
    {
      "id": 42,
      "name": "Banzai Bill",
      "games": "Super Mario World (1990 - SNES)",
      "series": "Mario",
      "description": "This special type of Bullet Bill is much bigger than a regular one, and only goes in a straight line. You better find some high platforms to stay on! You’ll usually see only one of a time, but tougher levels feature multiple of these baddies and can quickly become a nightmare. Despite its big and scary appearance, all it takes to defeat them is a simple jump. It has to be a pretty high jump, though.",
      "bigName": "Banzai Bill"
    },
    {
      "id": 43,
      "name": "Shy Guy",
      "games": "Super Mario Bros 2 (1988 - NES)",
      "series": "Mario",
      "description": "You can learn a lot about these guys from just their name and appearance. Turns out, they’re really shy, which is why they wear those masks all the time. What do you think is behind it? Despite being frequently seen as Mario's enemies, they actually appear much more often on Yoshi's Island, where a great number of variations also appear, such as Shy Guys on stilts, or with propellers on their heads. Think of them as Yoshi's version of Goombas.",
      "bigName": "Shy Guy"
    },
    {
      "id": 44,
      "name": "Pidgit",
      "games": "Super Mario Bros. 2 (1988 - NES)",
      "series": "Mario",
      "description": "Pidgits are rare bird-like enemies that are part of Wart’s army. In fact, when Mario and friends took down Wart, they only ever saw four! Pidgits tend to ride magic carpets. However, if they are defeated, someone else could ride the magic carpet. On the Mushroom Kingdom II stage, you don’t even need to defeat Pidgit to get a ride! I wonder, though, could Pidgits fit in Bullet Bill Blasters?",
      "bigName": "Pidgit"
    },
    {
      "id": 45,
      "name": "Birdo",
      "games": "Super Mario Bros. 2 (1988 - NES)",
      "series": "Mario",
      "description": "You may think Yoshi is the original expert of egg-throwing, but Birdo has been shooting eggs at Mario since way before! She originally appeared as one of Wart’s 8-bits, attempting to take over Subcon. Though she is somewhat vain, and started as out as an adversary, she’s grown to be a friend of the Mario crew, especially as a tennis partner for Yoshi himself! Her gender has been a subject of much debate, but be polite and don’t ask about it.",
      "bigName": "Birdo"
    },
    {
      "id": 46,
      "name": "Mouser",
      "games": "Super Mario Bros. 2 (1988 - NES)",
      "series": "Mario",
      "description": "One of the residents of Subcon and a commander for Wart’s 8 bits, this guy particularly likes throwing bombs, which he uses to destroy good dreams, and wearing very cool shades, which he uses to look his best. Luckily, he is not immune to his own bombs, so pick them up while you can and chuck them back at him. He's the boss of the first world, but don't think that's the last you'll see of him!",
      "bigName": "Mouser"
    },
    {
      "id": 47,
      "name": "Wart",
      "games": "Super Mario Bros. 2 (1988 - NES)",
      "series": "Mario",
      "description": "Even Mario has to have a new nemesis from time to time, and Wart was the one of the first to replace the Koopa King. This big green frog is an evil king intent on taking over the dream land of Subcon using his 8 bits, and army of monsters he created with his dream machine. Think you can defeat him? In your dreams! Actually, he may seem strong and scary, but we’ve heard he doesn’t take well to vegetables. Maybe that's why he's so fat.",
      "bigName": "Wart"
    },
    {
      "id": 48,
      "name": "Boo",
      "games": "Super Mario Bros. 3 (1988 - NES)",
      "series": "Mario",
      "description": "These ghastly enemies have been haunting Mario since the NES days, but Luigi seems to have become their greatest enemy. Hoards of these ghosts haunt the creepier mansions of the Mushroom Kingdom, and they will give chase the moment you turn your back on them. Don’t worry, they’re more scared of you than you are of them, they even hide their faces when you look at them! Are you sure these aren't the shy guys?",
      "bigName": "Boo"
    },
    {
      "id": 49,
      "name": "King Boo",
      "games": "Luigi's Mansion (2001 - GameCube)",
      "series": "Mario",
      "description": "King Boo is far more than an ordinary Boo. He has many more powers, including powers of illusion and trapping people in paintings. He even kidnapped Mario! This had led to Luigi coming up against King Boo more than once. King Boo hasn't only fought Luigi, of course, he took over a hotel on Delfino Island, fought against Peach on her quest to save Mario and sometimes enjoys a friendly kart race!",
      "bigName": "King Boo"
    },
    {
      "id": 50,
      "name": "Bob-omb",
      "games": "Super Mario Bros. 2 (1988 - NES)",
      "series": "Mario",
      "description": "A walking bomb, fuse included! Originating in Super Mario Bros. 2, they're still as explosive now as they were then. Once it starts walking, you better watch out! Its explosions make it easy to launch foes. They also drop from the sky if a Sudden Death takes too long to speed things up. Pink Bob-ombs are friendly and help Mario on his journeys.",
      "bigName": "Bob-omb"
    },
    {
      "id": 51,
      "name": "Chain Chomp",
      "games": "Super Mario Bros. 3 (1988 - NES)",
      "series": "Mario",
      "description": "Chain Chomps are big, angry, and indestructible. You really don’t want to mess with them. Luckily, they can’t reach very far, as they’re usually chained to a peg. You can set them free by stomping the peg, but the benefits of doing so may vary. Their behaviour somewhat resembles angry guard dogs, so it’s fitting that some of the braver and nastier villains like Iggy Koopa keep them as pets.",
      "bigName": "Chain Chomp"
    },
    {
      "id": 52,
      "name": "Thwomp",
      "games": "Super Mario Bros. 3 (1988 - NES)",
      "series": "Mario",
      "description": "Look out! Thwomps are big angry rocks that are almost invincible. They mostly cannot move. Some move up and down or side to side regularly, while others only do so if one lingers too long under them. One thing stays the same: whoever is unlucky enough to be in their way will be crushed. This even carries over into Super Smash Bros. and Mario Kart! Some Thwomps have spikes on the side, while others don’t. There are even variants of Thwomps, such as Thwimps and Whomps. They all share one thing in common: a love of crushing.",
      "bigName": "Thwomp"
    },
    {
      "id": 53,
      "name": "Nipper Plant",
      "games": "Super Mario Bros. 3 (1988 - NES)",
      "series": "Mario",
      "description": "Don’t confuse these guys for the stationary munchers! These guys will jump up and bite you if you’re not careful. You can’t just stomp one either, it will end just as badly for your feet. If you want to defeat them, you’re gonna need a bigger shoe. Nipper Plants can also be found in Yoshi’s Island, where they fall down slowly from the sky as Nipper Spores before blooming into the familiar munching plant.",
      "bigName": "Nipper Plant"
    },
    {
      "id": 54,
      "name": "Petey Piranha",
      "games": "Super Mario Sunshine (2002 - GameCube)",
      "series": "Mario",
      "description": "A big, mutated Piranha Plant first seen messing with the windmill of Bianco Hills in Delfino Island, shooting toxic goop everywhere and polluting the water! Petey has since then reappeared time and time again to fight Mario on behalf of his plant brethren. Or just play a game of tennis. In Smash Bros, he even assists his fellow Piranha Plant in its Final Smash by swinging two big cages around that opponents can get trapped in.",
      "bigName": "Petey Piranha"
    },
    {
      "id": 55,
      "name": "Boom Boom",
      "games": "Super Mario Bros. 3 (1988 - NES)",
      "series": "Mario",
      "description": "A henchman almost as persistent and stubborn as the Koopa King himself, Boom Boom keeps coming back to defend fortresses from the Mario Bros. To his credit, he keeps adding new tricks to his battle plan whenever he comes back, sometimes he even sprout wings! Three stomps are usually enough to do him in, until the next castle, where you’re sure to find him again.",
      "bigName": "Boom Boom"
    },
    {
      "id": 56,
      "name": "Boom Boom & Pom Pom",
      "games": "Boom Boom: Super Mario Bros. 3 (1988 - NES)\nPom Pom: Super Mario 3D Land (2011 - 3DS)",
      "series": "Mario",
      "description": "After many years of absence Boom Boom finally returned in Super Mario 3D Land, but he’s not alone this time. His new friend Pom Pom joins him in his eternal fight against the plumbers. While Boom Boom still enjoys running and flailing his arms, Pom Pom is an expert and throwing boomerangs and shurikens. She can also create fake clones of herself to distract you while attacking. They sure make a great team!",
      "bigName": "Boom Boom & Pom Pom"
    },
    {
      "id": 57,
      "name": "Tatanga",
      "games": "Super Mario Land (1989 - Game Boy)",
      "series": "Mario",
      "description": "A mysterious invader from an unknown planet, Tatanga planned to take over Sarasaland and kidnapped its princess, Daisy, to enable it. He also hypnotized the citizens of Sarasaland to work for him, which is why they attack Mario when he tries to rescue Daisy. His ship, the Pagosu, is equipped with powerful weapons, but are they strong enough to stop an airplane-riding plumber?",
      "bigName": "Tatanga"
    },
    {
      "id": 58,
      "name": "Hothead",
      "games": "Super Mario World (1990 - SNES)",
      "series": "Mario",
      "description": "The Hothead is an example of something that has appeared more often in Smash Bros. than in its home series. It first appeared in the castles of Dinosaur Land and the Ghost House of Vibe Island. Since then, it has only appeared in Smash. In all of its games, its behavior is the same: It circles a platform, hurting anyone who it touches. In Smash, though, you can make it up to three times as big by hitting it with a fire or electric attack.",
      "bigName": "Hothead"
    },
    {
      "id": 59,
      "name": "Chargin Chuck",
      "games": "Super Mario World (1990 - SNES)",
      "series": "Mario",
      "description": "These football-loving Koopas always act like they’re in the middle of a game. They’ll try to charge at and tackle Mario, which is how they get their name, and may also kick footballs at him. Their gear makes them hard to stomp, but a little help from Yoshi can make things a lot easier. There are many variations of Chucks, including a very confused one who throws baseballs.",
      "bigName": "Chargin Chuck"
    },
    {
      "id": 60,
      "name": "Wiggler",
      "games": "Super Mario World (1990 - SNES)",
      "series": "Mario",
      "description": "It may look like a caterpillar, but it's not! Wigglers are enemies who roam back and forth, and sometimes allies who manage a farm or join in on a kart race! However, due to one of several different reasons, such as the flower on their head being lost, or their beloved carrot being eaten, they will turn red with anger and receive a significant speed boost. At this point, they cannot be reasoned with, only defeated. They can't even be defeated with a jump!",
      "bigName": "Wiggler"
    },
    {
      "id": 61,
      "name": "Kamek",
      "games": "Super Mario World 2: Yoshi´s Island (1995 - SNES)",
      "series": "Mario",
      "description": "Magikoopas are some of the tougher enemies in the Koopa Troop, but even they have a hierarchy. Possibly the highest-ranking of them is Kamek, who was responsible for raising King Bowser as a baby. When he foresaw that the Mario Bros. would cause his king trouble, he tried to kidnap them when they even though they were only infants! Fun fact: in Japan, all Magikoopas are named Kamek.",
      "bigName": "Kamek"
    },
    {
      "id": 62,
      "name": "Mechakoopa",
      "games": "Super Mario World (1990 - SNES)",
      "series": "Mario",
      "description": "A little toy version of Bowser, looking like a cute wind up toy. They don't pack much of a punch, but Mario can throw them at enemies to deal damage. They don't go as far as Koopa shells, but they'll do the job just fine. Maybe Bowser should start selling these and give up on evil, he could make a fortune off of these buggers!",
      "bigName": "Mechakoopa"
    },
    {
      "id": 63,
      "name": "Dry Bowser",
      "games": "New Super Mario Bros. (2006 - DS)",
      "series": "Mario",
      "description": "Bowser has repeatedly been thrown into lava and always seemed to turn out fine, but one time was one too many. The mighty King Koopa was reduced to a skeleton, how gruesome! Yet, not even death can keep the stubborn Bowser down. He sprung right back up to stomp that plumber again! Dry Bowser has many of the same abilities as live Bowser, but is completely immune to fireballs.",
      "bigName": "Dry Bowser"
    },
    {
      "id": 64,
      "name": "Nabbit",
      "games": "New Super Mario Bros. U (2012 - Wii U)",
      "series": "Mario",
      "description": "Oh no! That was my all-time double favorite description! Now I'll never see it again! Wait, who did you say stole it? A purple rabbit with a bag? That sure sounds like Nabbit! Nabbit is a pesky thief and a public menace, mainly because he just runs past enemies like they don't exist! He's stolen all kinds of stuff, from power-ups to Bros. Attacks. I've heard a rumour that he helped save Peach once, though. Anyway, he's getting away! What'll I do? Oh, right! Pipes are a surefire answer when you're in a rush!",
      "bigName": "Nabbit"
    },
    {
      "id": 65,
      "name": "Big Urchin",
      "games": "New Super Mario Bros. Wii (2009 - Wii)",
      "series": "Mario",
      "description": "Are Urchins giving you trouble underwater? Well, imagine if they were bigger! Not only that, but invincible as well. That’s just what Big Urchins are like, but lucky for you, they don’t do much more than floating up and down. Just swim around them, and you'll be fine. A few of these dopey creatures also appear on the Mushroom Kingdom U stage, riding water pillars that rise from the bottom of the screen.",
      "bigName": "Big Urchin"
    },
    {
      "id": 66,
      "name": "King Bob-omb",
      "games": "Super Mario 64 (1996 - N64)",
      "series": "Mario",
      "description": "The original king of the hill, King Bob-omb awaits atop the mountain on Bob-omb Battlefield, where he guarded the first Power Star Mario needed to collect to restore Peach’s Castle. To defeat him, Mario needed to grab him from the back and toss it, but not over the edge! He has also reappeared as an explosive enemy in many of Mario’s parties. He may be an enemy, but he always acts like a true gentleman.",
      "bigName": "King Bob-omb"
    },
    {
      "id": 67,
      "name": "Shine Sprite",
      "games": "Super Mario Sunshine (2002 - GameCube)",
      "series": "Mario",
      "description": "The guardians of Isle Delfino, Shine Sprites are also the island's primary source of power. Without these sprites, the lifestyle of Isle Delfino would be impossible. These sprites usually gather in great numbers at the Shine Gate, but unfortunately for the residents, Bowser Jr. defaces the monument with grafitti, posing as a shadowy version of Mario, thus making the island's residents resent the plumber as soon as he arrives.",
      "bigName": "Shine Sprite"
    },
    {
      "id": 68,
      "name": "F.L.U.D.D",
      "games": "Super Mario Sunshine (2002 - GameCube)",
      "series": "Mario",
      "description": "Short for Flash Liquidizer Ultra Dousing Device, F.L.U.D.D is to Mario what the Poltergust is to Luigi. F.L.U.D.D has an AI that is capable of communicating with Mario and is primarily utilized for spraying water at enemies and objects, cleaning grafitti, or helping Mario reach high areas. However, its water supply isn't infinite, and Mario will need to enter a body of water to refill. In Super Smash Bros, F.L.U.D.D serves as Mario's down special. Try using it near ledges!",
      "bigName": "F.L.U.D.D"
    },
    {
      "id": 69,
      "name": "Piantas",
      "games": "Super Mario Sunshine (2002 - GameCube)",
      "series": "Mario",
      "description": "The residents of Isle Delfino, Piantas are laid back and calm, but with a short temper. Donning only grass skirts and dresses, the tree on their heads keeps them cool in the hot sun of the island. These guys are always up for fun, whether that be playing baseball or simply taking a backseat to other events. Life's always a vacation for them.",
      "bigName": "Piantas"
    },
    {
      "id": 70,
      "name": "Shadow Mario",
      "games": "Super Mario Sunshine (2002 - GameCube)",
      "series": "Mario",
      "description": "Someone has been causing trouble in the tropical Delfino Isle, vandalizing it with the use of a Magic Paintbrush stolen from Professor E. Gadd. Wait, is that Mario? Well, no, but the Piantas thought so, which is why Mario was arrested and sentenced to clean up the mess. Shadow Mario’s goop can be found all over the island, and he seems to be made of goop himself. Luckily, the F.L.U.D.D. is just what it takes to wash him off.",
      "bigName": "Shadow Mario"
    },
    {
      "id": 71,
      "name": "Luma",
      "games": "Super Mario Galaxy (2007 - Wii)",
      "series": "Mario",
      "description": "The adopted children of Rosalina, Lumas are small, star-like creatures with a tear drop shape. They come in a variety of colors, but all live together in the Comet Observatory, being cared after by their mother. Lumas can transform in order to assist Mario, ranging from minor stars to entire galaxies. Some would leave Rosalina to join Lubba, a large Luma who pilots the Starship Mario.",
      "bigName": "Luma"
    },
    {
      "id": 72,
      "name": "Hungry Luma",
      "games": "Super Mario Galaxy (Wii - 2007)",
      "series": "Mario",
      "description": "Lumas eventually transform into major celestial bodies, and the Hungry Luma is their final stage before this transformation. Turning into something that massive requires a hearty diet, and they're ready to eat! After consuming enough star bits or coins, they're overcome with power and transform before your eyes. Amazing to think entire galaxies used to be just a cute little Luma!",
      "bigName": "Hungry Luma"
    },
    {
      "id": 73,
      "name": "Honey Queen",
      "games": "Super Mario Galaxy (Wii - 2007)",
      "series": "Mario",
      "description": "Honey Queen, also known as Queen Bee, is the queen of the Honeybees found on Honeyhive Galaxy. She's much larger than the drone Honeybees. She's got a lot on her plate with all of the Honeybees she rules over and her kart racing hobby, so won't you help her with this nasty itching?",
      "bigName": "Honey Queen"
    },
    {
      "id": 74,
      "name": "Lubba",
      "games": "Super Mario Galaxy 2 (Wii - 2010)",
      "series": "Mario",
      "description": "Lubba is the captain of his very own Starship that he uses to explore the Galaxies at incredible speed. Well, he was anyway. That was before a certain evil Koopa shot it down. Since then, Lubba teamed up with Mario to get revenge. He created the Starship Mario to be a vessel for Mario to stop Bowser before he takes over the entire universe. Being a universe traveler, Lubba knows a lot about the different galaxies and species living on them. All you have to do is ask!",
      "bigName": "Lubba"
    },
    {
      "id": 75,
      "name": "Starship Mario",
      "games": "Super Mario Galaxy 2 (Wii - 2010)",
      "series": "Mario",
      "description": "Is that Mario soaring through the Galaxies? Or just his head? No, that's Starship Mario, a starship made by Lubba in Mario's image. Mario uses this huge and narcissistic vehicle to explore and find stars. Those stars are important, because Starship Mario isn't powerful enough to reach Bowser's Galaxy Generator yet. Mario needs a lot of stars to upgrade the engine enough to reach this far off goal! And hey, why not pick up a few passengers on the way?",
      "bigName": "Starship Mario"
    },
    {
      "id": 76,
      "name": "Sprixie Princesses",
      "games": "Super Mario 3D World (Wii U - 2013)",
      "series": "Mario",
      "description": "The Sprixie Princess are the rulers of the Sprixie Kingdom. It's under attack by Bowser, as these things go. As part of his conquest, he's captured the seven Sprixie Princesses and imprisoned them in glass jars. Each one is being held at one of his strongholds in the eight islands of the Sprixie Kingdom. Looks like Mario, Luigi, Peach, and Toad need to prowl through these islands to rescue the princesses and take back control from Bowser.",
      "bigName": "Sprixie Princesses"
    },
    {
      "id": 77,
      "name": "Plessie",
      "games": "Super Mario 3D World (Wii U - 2013)",
      "series": "Mario",
      "description": "Plessie seems to be the same species as our old friend Dorrie, who we met in Super Mario 64 in the Hazy Maze Cave. Not much is known about this species. All we really need to know is they're big, they're fantastic swimmers, and they always seem to be willing to help Mario out on his quest. Plessie in particular helps Mario and his friends out by giving them a lift down dangerous rivers at high speed multiple times throughout the entire Sprixie Kingdom.",
      "bigName": "Plessie"
    },
    {
      "id": 78,
      "name": "Cappy",
      "games": "Super Mario Odyssey (2017 - Switch)",
      "series": "Mario",
      "description": "After Mario was flung off Bowser’s airship, Cappy came to the rescue and revealed that his sister, Tiara, had also been kidnapped by Bowser. Cappy partners up with Mario, taking on the guise of his famous hat, and helps Mario by destroying obstacles and capturing other creatures not wearing hats. Cappy can even be used as a platform! In Super Mario Odyssey, Cappy could be controlled by Player 2, and in Smash Bros., he appears during one of Mario’s taunts and occasionally his Super Jump Punch.",
      "bigName": "Cappy"
    },
    {
      "id": 79,
      "name": "Pauline",
      "games": "Donkey Kong (1981 - Arcade)",
      "series": "Mario",
      "description": "No, that's not Peach Mario saved from Donkey Kong: it's Pauline! Pauline was Mario's first love, back when she was just know as Lady, but they broke up. They remained friends, however. Years later, Pauline has come a long way, being the mayor of her hometown, New Donk City, and a celebrity aside from that, being the pop star behind “Jump Up, Superstar!”",
      "bigName": "Pauline"
    },
    {
      "id": 80,
      "name": "The Odyssey",
      "games": "Super Mario Odyssey (2017 - Switch)",
      "series": "Mario",
      "description": "Mario’s latest mode of transportation to travelling around the world, which he used when he needed to save Peach from Bowser’s wedding plans. The Odyssey is based on old Bonneton airship models from the Cap Kingdom, although it was found in a broken-down state in the Cascade Kingdom. The ship runs on Power Moons, which are hidden everywhere in each kingdom it lands on.",
      "bigName": "The Odyssey"
    },
    {
      "id": 81,
      "name": "Goo-Goo Buggy",
      "games": "Mario Kart Double Dash!! (2003 - Gamecube)",
      "series": "Mario",
      "description": "The Goo-Goo Buggy is a lightweight kart that appears in 2003’s Mario Kart: Double Dash!! While any lightweight character can drive this vehicle, it is typically associated with Baby Mario and Baby Luigi. Although the kart’s top speed may be low, it has fantastic acceleration, meaning that you’ll recover from a wipeout quickly.",
      "bigName": "Goo-Goo Buggy"
    },
    {
      "id": 82,
      "name": "Barrel Train",
      "games": "Mario Kart: Double Dash!! (2003 - GameCube)",
      "series": "Mario",
      "description": "This is more of a locomotive than a kart, but it has been refitted to race along the crazy tracks of Mario Kart! This is the heaviest of all lightweight vehicles in Mario Kart: Double Dash, weighing the same as some middleweight karts, and it is tied for the fastest of the lightweights, but it suffers from poor acceleration. Nevertheless, it is a popular kart for getting good scores in Time Trials. It is mostly associated with Diddy Kong.",
      "bigName": "Barrel Train"
    },
    {
      "id": 83,
      "name": "Bloom Coach",
      "games": "Mario Kart: Double Dash!! (2003 - GameCube)",
      "series": "Mario",
      "description": "This is Princess Daisy’s kart, if you couldn’t tell by the orange and yellow color scheme, and the fact Daisy has put her trademark flower emblem all over it. She really wants you to know whose kart this is. It is a middleweight kart, but the lightest of them all. It can even get pushed around by the lightweight Barrel Train. Nevertheless, it provides good speed, acceleration and steering, just be sure not to bump on most other karts.",
      "bigName": "Bloom Coach"
    },
    {
      "id": 84,
      "name": "Turbo Yoshi",
      "games": "Mario Kart: Double Dash!! (2003 - GameCube)",
      "series": "Mario",
      "description": "We don’t even need to tell you whose kart this is, right? And we thought the Bloom Coach was a bit too on the nose, Yoshi’s kart is shaped and named after himself! To be fair, we don’t know if Yoshi built the kart, maybe it was a gift. Nevertheless, the Turbo Yoshi is a responsive kart with good acceleration, but its top speed isn’t the best. Still, if you’re going to ride around on a Yoshi, might as well be a Turbo Yoshi!",
      "bigName": "Turbo Yoshi"
    },
    {
      "id": 85,
      "name": "B Dasher",
      "games": "Mario Kart DS (2005 - DS)",
      "series": "Mario",
      "description": "Mario’s main kart of choice is the first in the series to have a proper racecar design, and became an inspiration for many later vehicles in the series. Though only Mario can use it at first, you can unlock the ability to use it with other characters. As you’d expect from Mario’s vehicle, it has very balanced stats, but it’s still quite fast. You’ll be racing by like you’re holding down the B button. Wait, is that where the name comes from?",
      "bigName": "B Dasher"
    },
    {
      "id": 86,
      "name": "Standard Kart",
      "games": "Mario Kart DS (2005 - DS)",
      "series": "Mario",
      "description": "That’s not a particularly exciting name for a kart, is it? Still, sometimes you just can’t beat simplicity, and, unlike other karts, there are actually distinct standard karts for each character, with their own color schemes and even stats! And, as later games allowed you to choose your own wheels or even hang-gliders, you can make each kart feel very much your own. Who’s standard now?",
      "bigName": "Standard Kart"
    },
    {
      "id": 87,
      "name": "Standard Bike",
      "games": "Mario Kart Wii (2008 - Wii)",
      "series": "Mario",
      "description": "Mario Kart Wii introduced a brand new type of vehicles to the series: motorcycles. While there are many different bikes available, all of them differ from karts in a few ways, such as the driver being able to perform a wheelie for a short boost. The basic bike model in the game is, of course, the Standard Bike, and much like the Standard Kart, each character has their own, featuring their color scheme and emblem. Although, by Mario Kart Wii, every vehicle could do that.",
      "bigName": "Standard Bike"
    },
    {
      "id": 88,
      "name": "Cheep Charger",
      "games": "Mario Kart Wii (2008 - Wii)",
      "series": "Mario",
      "description": "The Cheep Charger is a kart that appears in Mario Kart Wii. It is shaped like the Cheep-Cheep enemy that has appeared in many of Mario’s games. Any lightweight character can use this vehicle, and it has the best acceleration out of all the karts in Mario Kart Wii, though it is also the lightest. Fun fact: this kart is actually battery-powered. You can see the battery on its underside when the kart flips over.",
      "bigName": "Cheep Charger"
    },
    {
      "id": 89,
      "name": "Mach 8",
      "games": "Mario Kart 8 (2014 - Wii U)",
      "series": "Mario",
      "description": "The Mach 8 is a brand new kart body in Mario Kart 8. That’s right, we said kart body, as now you’ll be able to choose a combination of body, wheels and hang-gliders to put your kart together. Though this vehicle is mostly associated with Luigi, it can be used by anybody. It’s not going to actually reach mach 8, but it’s still a very fast kart, even if its acceleration and traction leave something to be desired.",
      "bigName": "Mach 8"
    },
    {
      "id": 90,
      "name": "Biddybuggy",
      "games": "Mario Kart 8 (2014 - Wii U)",
      "series": "Mario",
      "description": "This kart resembles a Para-biddybud, and comes in one of five colors, depending on who’s using it: Red, blue, yellow, green, or pink. The Biddybuggy is most often associated with the babies and Lakitu, but anyone can use it. It provides a major boost to acceleration and handling, but applies a penalty to speed and weight.",
      "bigName": "Biddybuggy"
    },
    {
      "id": 91,
      "name": "Badwagon",
      "games": "Mario Kart 8 (2014 - Wii U)",
      "series": "Mario",
      "description": "Now that’s a cool name for a cool car. The Badwagon resembles a muscle car (well, it also resembles a pig with sunglasses, but mostly a muscle car), but unlike them, it’s not built for speed. Instead it’s built to have great traction and for sending opponents off-road by crashing into them. This might not be the safest or most friendly way to have a round of go-kart, but it is certainly the most fun.",
      "bigName": "Badwagon"
    },
    {
      "id": 92,
      "name": "City Tripper",
      "games": "Mario Kart 8 (2014 - Wii U)",
      "series": "Mario",
      "description": "This cute bike body couldn’t be found on the original version of Mario Kart 8. Instead, it was acquired in DLC Pack 2, which included some Animal Crossing content. This bike is the signature vehicle for Isabelle and the female Villager, and judging by the name, it was used for many a trip to the city plaza. It provides a great handling boost and a small acceleration boost at the cost of weight and traction.",
      "bigName": "City Tripper"
    },
    {
      "id": 93,
      "name": "Master Cycle",
      "games": "Mario Kart 8 (2014 - Wii U)",
      "series": "Mario",
      "description": "What? Is that Link? That’s right, Link joined Mario Kart 8 as DLC and he brought with him his own vehicle, the Master Cycle, a motorcycle shaped like a horse. It has the highest top speed of any bike, but it is a little weak when it comes to handling. Regardless, it is worth using just for that image. Just picture it, Link riding a motorcycle! Something like that would never happen in a Zelda game.",
      "bigName": "Master Cycle"
    },
    {
      "id": 94,
      "name": "Paper Mario",
      "games": "Paper Mario (2000 - N64)",
      "series": "Mario",
      "description": "The box art for the original Paper Mario said \"Thinner Mario, Bigger Adventure!\", and there's a good reason for that. Paper Mario is a flat version of the titular hero we all know and love going on his own unique adventures throughout wonderful environments and meeting a huge assortment of characters. Unlike Mario, Paper Mario tends to focus on getting stronger throughout his quest, building strength, strategy, and a team fit to take on the world.",
      "bigName": "Paper Mario"
    },
    {
      "id": 95,
      "name": "Paper Bowser",
      "games": "Paper Mario (2000 - N64)",
      "series": "Mario",
      "description": "Bowser is best known for his rivalry with Mario, and it's how he's known in the paper world as well. He invaded the mythical Star Haven and stole their most precious item, the Star Rod. Using its power to grant wishes, Bowser became invincible, and thereby stronger than he's ever been. But that's in the past! Since then he's gone on to work together with Mario to stop Count Bleck from consuming the universe using the evil power of the Dark Prognosticus. I guess even the foulest of koopas have some good in them!",
      "bigName": "Paper Bowser"
    },
    {
      "id": 96,
      "name": "Paper Bowser (Paper Mario: Sticker Star)",
      "games": "Paper Mario: Sticker Star (2012 - 3DS)",
      "series": "Mario",
      "description": "Or maybe not. It looks like Bowser's back to his old ways. Upon breaking the wish-granting Sticker Comet, he became filled with an incredible power from a Royal Sticker that landed on his head. Strengthened by this wish granting power, he became near invincible and kidnapped Princess Peach. Wait, doesn't it seem like we've been here before?",
      "bigName": "Paper Bowser (Paper Mario: Sticker Star)"
    },
    {
      "id": 97,
      "name": "Kammy Koopa",
      "games": "Paper Mario (2000 - N64)",
      "series": "Mario",
      "description": "Kammy Koopa is a powerful magikoopa who's fiercely loyal to the throne. She often pals around with Bowser, offering him encouragement and magical backup. Her age doesn't slow her down, and you really shouldn't mention a lady's age anyway! Her devastating spells and brains often gets in Mario's way on his adventure. Even the brilliant Princess Peach was outsmarted by her when trying to break out of her prison cell. She manages Bowser's army as the Lieutenant of the entire force.",
      "bigName": "Kammy Koopa"
    },
    {
      "id": 98,
      "name": "Vivian",
      "games": "Paper Mario: The Thousand-Year Door (2004 - Gamecube)",
      "series": "Mario",
      "description": "Vivian is one of Mario’s partners from Paper Mario: The Thousand Year Door. She’s of the three Shadow Sirens that initially try to stop Mario from collecting the Crystal Stars. In The Thousand Year Door, Vivan can use fiery magic to attack or pull Mario into the shadows to hide and avoid taking damage. In some versions of the game, Vivian is portrayed as transgender.",
      "bigName": "Vivian"
    },
    {
      "id": 99,
      "name": "Shadow Queen",
      "games": "Paper Mario: The Thousand-Year Door (2004 - Gamecube)",
      "series": "Mario",
      "description": "Wait a minute... that looks like Princess Peach! Did she get a makeover or something? Well, sort of. This is actually the form that the Shadow Queen takes on after possessing Peach. The Shadow Queen is attempting to cover the world in darkness and make it her own. Her weakness is the power of the Crystal Stars – good thing Mario and friends collected them all!",
      "bigName": "Shadow Queen"
    },
    {
      "id": 100,
      "name": "Mr. L",
      "games": "Super Paper Mario (2007 - Wii)",
      "series": "Mario",
      "description": "Hold up, who’s this guy? He looks sorta familiar... but I can’t quite place from where. He appeared as a boss in Super Paper Mario, working for the evil Count Bleck, but his true identity remains unknown. He’s built some pretty cool robots, though, which he nicknamed Brobots, and used them to fight Mario. If only we know who he is...",
      "bigName": "Mr. L"
    },
    {
      "id": 101,
      "name": "Dimentio",
      "games": "Super Paper Mario (2007 - Wii)",
      "series": "Mario",
      "description": "Ah ha ha! This jester is not one to merely jest with. Dimentio is one of Count Bleck's four henchmen, alongside the mighty O'Chunks, the shape-shifting Mimi and the Count's assistant Nastasia. He appears throughout Mario's journey to prevent the destruction of all worlds, teasing them along the way. He prefers to fight his opponents in his selfmade dimension, Dimension D, which multiplies his power 256-fold...as well as doing the same for our heroes. He might seem loyal, but is that his true intent, or is he planning on something more, like a dog preparing to steal the food from someone's plate on a rainy day?",
      "bigName": "Dimentio"
    },
    {
      "id": 102,
      "name": "Huey",
      "games": "Paper Mario: Color Splash (2016 - Wii U)",
      "series": "Mario",
      "description": "Huey is the paint can guardian of Prisma Fountain, on Prisma Island. Mario wakes him up when finding out that Port Prisma is deserted, only for Huey to fly into an outrage over one very important fact: The Big Paint Stars are missing! Mario and Huey set off to recover the six Big Paint Stars from Bowser and save Princess Peach. What does Bowser want with the Big Paint Stars, anyway?",
      "bigName": "Huey"
    },
    {
      "id": 103,
      "name": "Mallow",
      "games": "Super Mario RPG: Legend of the Seven Stars (1996 - SNES)",
      "series": "Mario",
      "description": "Mallow is the prince of Nimbus Land, as well as Mario's first partner on his quest. In his youth, Mallow was taken in by the sage Frogfucius. He was raised believing he was a tadpole, but he never felt like he fit in, leaving him with poor self esteem. Mallow first met Mario after his pie was stolen by a thief. After seeing Mallow's powers, Mario decides to let him join his team. Mallow's attacks are primarily weather based, and he is able to use magic.",
      "bigName": "Mallow"
    },
    {
      "id": 104,
      "name": "Geno",
      "games": "Super Mario RPG: Legend of the Seven Stars (1996 - SNES)",
      "series": "Mario",
      "description": "A warrior from Star Road, he was sent down by a higher authority to restore peace to Mario's world. Assuming the form of a wooden doll to fight the Smithy gang, Geno hid out in the Forest Maze to obtain one of the star pieces. After receiving help from Mario and his crew, he joins forces with them to get the pieces back. His real name is ❤️♪!? But since it was impossible to pronounce, he adopted his current alias.",
      "bigName": "Geno"
    },
    {
      "id": 105,
      "name": "Prince Peasley",
      "games": "Mario & Luigi: Superstar Saga (2003 - GBA)",
      "series": "Mario",
      "description": "With spectacular hair and a spectacular smile, Prince Peasley is here to save the day! This fine fellow gets rescued by Mario and Luigi early into their Beanbean Kingdom adventure, but once free he is glad to swoop in, show off his lustrous hair, and lend the Bros a helping hand or share some valuable advice. In order to stop the main villain Cackletta, Peasley suggests that Luigi should disguise himself as Princess Peach and use a decoy Beanstar in order to stop Cackletta, but that plan ends in misadventure.",
      "bigName": "Prince Peasley"
    },
    {
      "id": 106,
      "name": "Fawful",
      "games": "Mario & Luigi: Superstar Saga (2003 - GBA)",
      "series": "Mario",
      "description": "I am the great Cackletta's most best pupil, who is named Fawful! The description of Fawful shall be written by me! Fawful! Who is smart! Not like you, who are very stupid! I have trounced many fink-rats, because I am the all powerful Fawful! What's that? Why is this saying Fawful is from Super Mario Series? I hate Mario! And Green Mario! I HATE HATE HATE THEM! I HAVE FURY!",
      "bigName": "Fawful"
    },
    {
      "id": 107,
      "name": "Princess Shroob",
      "games": "Mario & Luigi: Partners in Time (2005 - DS)",
      "series": "Mario",
      "description": "Many years in the past, an alien civilization called the Shroobs decides to invade the Mushroom Kingdom. Their leader is a princess much like Peach, Princess Shroob, a clever strategist who plays into the weaknesses of her opponents. When Princess Peach decides to travel to the past using E. Gadd's time machine, she gets kidnapped by the Shroob army, forcing Mario and Luigi to follow her into the past. Once there, they pair up with their past selves to take on this alien invasion and retake the Mushroom Kingdom!",
      "bigName": "Princess Shroob"
    },
    {
      "id": 108,
      "name": "Starlow",
      "games": "Mario & Luigi: Bowser's Inside Story (2009 - DS)",
      "series": "Mario",
      "description": "HELLO YELLO! Starlow is a representative of the Star Sprites and a close friend of Mario and Luigi. Starlow first meets them, alongside Peach, Toadbert, and Toadsworth, at a meeting to try to save the Mushroom Kingdom from the horrible disease known as the blorbs. She, along with everyone else at the meeting, is sucked inside of Bowser after he interrupts the meeting. She forms an uneasy alliance with Bowser, who knows her by the name “Chippy”. After the crisis of the Blorbs is resolved, Starlow later helps Mario and Luigi on other adventures, such as helping trigger Luiginary Works on Pi’illo Island.",
      "bigName": "Starlow"
    },
    {
      "id": 109,
      "name": "Broque Monsieur",
      "games": "Mario and Luigi: Bowser's Inside Story (2009 - DS)",
      "series": "Mario",
      "description": "The leading block collector in the Mushroom Kingdom. He is fluent in English, French, and even a bit of Spanish! Broque manages a store alongside his dog Broggy. He somehow ends up stuck on an island, where he is saved by Bowser, and as thanks, Broque teaches him the vacuum command in a fight. He battles with whatever he has from his extensive collection of ? blocks, which includes mushrooms, coins, and even the Mega Mushroom!",
      "bigName": "Broque Monsieur"
    },
    {
      "id": 110,
      "name": "Dreambert",
      "games": "Mario & Luigi: Dream Team (2013 - 3DS)",
      "series": "Mario",
      "description": "Prince Dreambert is the prince of the Pi'illo people, an ancient species responsible for guarding the Dream Stone and the Dark Stone. After a scuffle with Antasma, the Dark Stone broke into Nightmare Chunks, petrifying all of the Pi'illos, including Dreambert. After Mario rescued Dreambert from his paralysis, Dreambert taught him how to use the dream powers of the Pi'llos to enter the Dream World. All Luigi has to do is go to sleep! This might be Luigi's favorite quest yet.",
      "bigName": "Dreambert"
    },
    {
      "id": 111,
      "name": "Antasma",
      "games": "Mario & Luigi: Dream Team (2013 - 3DS)",
      "series": "Mario",
      "description": "With his sharp claws, skeleton body, sharp fangs, and a moniker like \"King of Bats\", Antasma is a real nightmare! I can't think of a more appropriate threat to the dream world. As well as threatening the entire Pi'illo people, Antasma takes on Bowser's role and kidnaps Princess Peach. Now Mario's involved, and that's never good news for a baddie. It's not going to be an easy adventure though. Antasma has stolen the Dream Stone, a legendary artifact that can grant any wish to whoever holds it. Luigi is going to have to do some serious sleeping to stop this monster before things get out of hand.",
      "bigName": "Antasma"
    },
    {
      "id": 112,
      "name": "Papercraft Mario",
      "games": "Mario & Luigi: Paper Jam (2015 - 3DS)",
      "series": "Mario",
      "description": "Ever since the Paper people entered Mario & Luigi's world, paper has been all the rage! You'd be amazed what you can do with paper! With the Paper Toads' experience with paper, and Toadette's unique creativity and engineering, they've created a new type of battle vehicle, the papercrafts. These toad powered constructions are made entirely of cardboard. After the genius of Papercraft Mario, Toadette seems to think they can improve even more on the design. I wonder what other sorts of papercrafts we'll see in the future?",
      "bigName": "Papercraft Mario"
    },
    {
      "id": 113,
      "name": "Sidestepper",
      "games": "Mario Bros. (1983 - Arcade)",
      "series": "Mario",
      "description": "These crabby enemies have a name inspired by the way they move, stepping to the side. If you think that’s a little obvious, in the Japanese version, they are simply called crabs. Mario and Luigi face these foes one the sewers, but unlike the turtle-like Shellcreepers, punching them from below will only make them angry. You’ll need to punch them a second time to knock them over. If there’s only one left, though, you’ll have to be much faster!",
      "bigName": "Sidestepper"
    },
    {
      "id": 114,
      "name": "Freezie",
      "games": "Mario Bros. (1983 - Arcade)",
      "series": "Mario",
      "description": "Freezies will sometimes pop out of the pipes in the sewers and slide slowly across platforms. Once they reach the center of one, they will turn it to ice, making it dangerously slippery, so Mario and Luigi should try to take them out as soon as they see one. Touching one is also a chillingly bad idea, but they’re safe to punch from below. In Smash Bros. You can safely grab one and throw it at your opponent to freeze them.",
      "bigName": "Freezie"
    },
    {
      "id": 115,
      "name": "Eggplant Man",
      "games": "Wrecking Crew (1985 - NES)",
      "series": "Mario",
      "description": "The name of these baddies is fairly descriptive; they are walking, or rather, jogging eggplants. For some reason, a bunch of them have invaded the demolition site in which Mario and Luigi are working. Their movement pattern is fairly predictable, as they’ll simply run straight, but they’re still implacable foes, particularly when in high numbers. Try trapping them with a Dead-End Drum for a safer experience.",
      "bigName": "Eggplant Man"
    },
    {
      "id": 116,
      "name": "Viruses",
      "games": "Dr. Mario (1990 - NES)",
      "series": "Mario",
      "description": "Bowser may be Mario’s greatest foe, but when he dons a lab coat, Mario is ready to fight viruses! The most famous variants are the red, blue and yellow viruses, which can cause fever, chill, and, uhm, “weird” respectively. They come in high numbers and spread quickly, but can be treated using Megavitamins. It has been scientifically proven that three or more viruses and Megavitamins of the same color cannot exist in a straight line, so put that research to use!",
      "bigName": "Viruses"
    },
    {
      "id": 117,
      "name": "Flies & Hand",
      "games": "Mario Paint (1992 - SNES)",
      "series": "Mario",
      "description": "Mario Paint is a widely beloved game, remembered for its in-depth creation tools for art, animation and even music. However, it also had some decidedly more game-like elements, such as the fun fly-swatting minigame, Gnat Attack. With the SNES Mouse, you control a gloved hand trying to swat all the flies that appear. After swatting a few hundred of them, the giant, robotic insect Watinga will appear to challenge you.",
      "bigName": "Flies & Hand"
    },
    {
      "id": 118,
      "name": "Wanda",
      "games": "Mario & Wario (1993 - SFC)",
      "series": "Mario",
      "description": "After an encounter with the mean Wario, Mario was unfortunate enough to have a bucket stuck on his head, and now, he can’t see where he’s going! Fearing for his safety, Wanda, the fairy living in the forest Mario is lost in, decides to take action and guide the sightless Mario to safety. Wanda must use her magic wand to create a safe path for Mario to wander across as he tries to reach Luigi at the end of each level.",
      "bigName": "Wanda"
    },
    {
      "id": 119,
      "name": "Kid",
      "games": "Mario Golf (1999 - Game Boy Color)",
      "series": "Mario",
      "description": "You may think this spirit is referring to just any regular kid, but no, this character’s name is, in fact, Kid. Kid is a talented golfer who’s been playing since he was three years old, and since then, both his skill and his fame have grown exponentially. He’s even made quite a few TV appearances and got to play against Mario and his friends. Kid re-appears in Mario Golf: Advance Tour, though many years have passed and he’s no longer a kid. Wait…",
      "bigName": "Kid"
    },
    {
      "id": 120,
      "name": "Professor Elvin Gadd",
      "games": "Luigi's Mansion (2001 - Gamecube)",
      "series": "Mario",
      "description": "Elvin Gadd, better known as Professor E. Gadd, is a brilliant scientist and the found of Gadd Science, Inc., the company behind many incredible gizmos, such as the Poltergust 3000, the Magic Paintbrush and the F.L.U.D.D. Gadd’s favorite research subject, however, is ghosts, and he often teams up with an unwilling Luigi to have him explore haunted places and capture ghosts for him to study.",
      "bigName": "Professor Elvin Gadd"
    },
    {
      "id": 121,
      "name": "Poltergust 5000",
      "games": "Luigi's Mansion: Dark Moon (2013 - 3DS)",
      "series": "Mario",
      "description": "This is the upgraded version of the Poltergust 3000 which Luigi used on his first time exploring a haunted mansion. While it retains the basic functions of its predecessor, such as a flashlight and the ability to suck up and contain ghosts, the Poltergust 5000 features many differences in design. It uses a Power Surge technique to fight ghosts, removing their health in chunks, and requires a Strobulb upgrade in order to stun them.",
      "bigName": "Poltergust 5000"
    },
    {
      "id": 122,
      "name": "Polterpup",
      "games": "Luigi's Mansion: Dark Moon (2013 - 3DS)",
      "series": "Mario",
      "description": "Not all ghosts that haunt Evershade Valley are evil, in fact, these ghostly dogs are quite friendly, and cute to boot. Yes, they do sometimes cause Luigi some trouble, but they’re not doing it out of malice, they just want to play. That’s not going to make you any less angry when one takes away your key, but how could you be mad at those puppy dog… uhm, holes? The one who wears a red collar instead of a blue one seems especially fond of Luigi.",
      "bigName": "Polterpup"
    },
    {
      "id": 123,
      "name": "Perry",
      "games": "Super Princess Peach (2005 - DS)",
      "series": "Mario",
      "description": "Oh, no! Bowser has kidnapped Mario! Wait, that’s not usually how it goes. Nevertheless, it’s what happened, and now it is Peach’s job to repay all those years of rescues, but she won’t do it alone. She is accompanied by Perry, a magical, talking parasol given to hear by Toadsworth, who found it in a mysterious old shop. Perry is great at breaking blocks and throwing bad guys, but he can also change into many useful forms.",
      "bigName": "Perry"
    },
    {
      "id": 124,
      "name": "Waluigi (Super Mario Strikers)",
      "games": "Super Mario Strikers (2005 - Gamecube)",
      "series": "Mario",
      "description": "The Mario gang loves playing all kinds of sports, but they get really intense when it’s time to play soccer. Waluigi is one of the team captains in Super Mario Strikers, and of the offensive variety, meaning he is great at shooting and passing. In the sequel, however, he became more defensive, losing his previous skills in favor of better movement and defense. His Super Strike is the Drop Rocket, in which he karate kicks the ball and sends it hurtling towards the goal.",
      "bigName": "Waluigi (Super Mario Strikers)"
    },
    {
      "id": 125,
      "name": "Petey Piranha (Super Mario Strikers)",
      "games": "Mario Strikers Charged (2007 - Wii)",
      "series": "Mario",
      "description": "Mario Strikers Charged introduced four new characters as team captains of the most intense soccer matches in gaming, and one of them was the big plant himself, Petey Piranha. And he’s the strikers league champion! Petey is a power player, having great defense and excellent shooting skills. His super ability, Mud Slinger, allows him to spit mud on the ground to slow down other characters, a great callback to his debut game!",
      "bigName": "Petey Piranha (Super Mario Strikers)"
    },
    {
      "id": 126,
      "name": "Mini-Mario",
      "games": "Mario vs. Donkey Kong (2004 - GBA)",
      "series": "Mario",
      "description": "Mario is a superstar, and turns out he is not one to pass on the opportunity to capitalize on his own success, as he launches a toy line based on himself. These adorable figurines are all the rage, so much so that they’re sold out everywhere. Unfortunately, Donkey Kong really, really wants one, and he’s not the patient kind, so he invades the factory and steals all the Mini-Marios! Mario chases the ape to get them back, he’s not gonna lose that profit, is he?",
      "bigName": "Mini-Mario"
    },
    {
      "id": 127,
      "name": "Mini-Mario & Hammers",
      "games": "Mario vs. Donkey Kong 2: March of the Minis (2006 - DS)",
      "series": "Mario",
      "description": "In the first Mario vs. Donkey Kong game, Mario must rescue the stolen Mini-Marios. However, in the sequel, the minis took on the leading role, as they try to rescue Pauline after she was kidnapped by Donkey Kong. They can actually use many of the same power-ups Mario can, including his iconic hammer. Actually, they wield two at a time, but their use is the same: to swing them wildly to destroy everything in your path.",
      "bigName": "Mini-Mario & Hammers"
    },
    {
      "id": 128,
      "name": "MC Ballyhoo & Big Top",
      "games": "Mario Party 8 (2007 - Wii)",
      "series": "Mario",
      "description": "Welcome to the Star Carnival, the home of the eighth major Mario Party! These are your hosts and the founders of the festival, MC Ballyhoo and Big Top. MC stands for “master of catastrophes”, and Ballyhoo fully embodies it, being energetic and over-the-top. The hat he wears is actually sentient and his inseparable partner, Big Top, who is much more composed. Together, they’ll host the games that will grant the winner a year’s supply of candy and the title of Superstar!",
      "bigName": "MC Ballyhoo & Big Top"
    },
    {
      "id": 129,
      "name": "Rabbid Peach",
      "games": "Mario + Rabbids: Kingdom Battle (2017 - Switch)",
      "series": "Mario",
      "description": "The Mushroom Kingdom is being invaded by the most wacky of rabbits, the Rabbids. However, due to the powerful and unpredictable SupaMerge, many Rabbid versions of familiar Mushroom Kingdom denizens have been created. Rabbid Peach was created by the fusion of a Rabbid and a Peach wig, and the result was a bossy and arrogant character who loves taking pictures of herself almost as much as she loves blasting opponents.",
      "bigName": "Rabbid Peach"
    },
    {
      "id": 130,
      "name": "Rabbid Mario",
      "games": "Mario + Rabbids: Kingdom Battle (2017 - Switch)",
      "series": "Mario",
      "description": "Created when the SupaMerge fused an ordinary Rabbid (well, as ordinary as a Rabbid can be) with a Mario cap, Rabbid Mario is one of a band of heroes trying to save the Mushroom Kingdom from Bowser Jr. and his army of Rabbid fusions. He is courageous and adventurous, and loves to mimic the original hero. He is a great fighter at close range and has very effective area attacks. Though he lags a bit in the defense department.",
      "bigName": "Rabbid Mario"
    },
    {
      "id": 131,
      "name": "Rabbid Kong",
      "games": "Mario + Rabbids: Kingdom Battle (2017 - Switch)",
      "series": "Mario",
      "description": "One of the many bizarre Rabbid fusions created by Bowser Jr. with the help of the SupaMerge, Rabbid Kong is based on everyone’s favorite king of the jungle, right down to the iconic necktie. His strength is so massive that he can cause shockwaves with his fists, although it’s not enough to defeat Mario and his gang. Rabbid Kong eventually reaches DK Island and fights the original Donkey Kong, as he plots revenge for his defeat.",
      "bigName": "Rabbid Kong"
    },
    {
      "id": 132,
      "name": "Mario (Mario Tennis Aces)",
      "games": "Mario Tennis Aces (2018 - Switch)",
      "series": "Mario",
      "description": "For the first time in the storied Mario Tennis series, Mario will actually play tennis wearing a proper tennis outfit! As in previous games, or really in most competitive games featuring him, Mario is an all-around character, with no particular strengths or weaknesses. His Special Shot is called Blazing Wall Jump. When using it, Mario wall jumps into thin air before hitting the ball with enough power to make it catch on fire.",
      "bigName": "Mario (Mario Tennis Aces)"
    },
    {
      "id": 133,
      "name": "Luigi (Mario Tennis Aces)",
      "games": "Mario Tennis Aces (2018 - Switch)",
      "series": "Mario",
      "description": "What would a Mario Tennis game be without Luigi? I mean, who would Mario play doubles with? Shy Guy? Please! Anyway, Luigi, much like his brother, is an all-around balanced character who also debuts a brand new tennis outfit in this game. His Special Shot, the pipe Cannon, makes use of the familiar green warp pipes, as Luigi jumps into one and is then launched into the air to strike the ball.",
      "bigName": "Luigi (Mario Tennis Aces)"
    },
    {
      "id": 134,
      "name": "Donkey Kong",
      "games": "Donkey Kong (1981 - Arcade)",
      "series": "DK",
      "description": "He’s the leader of the bunch, you know him well, he's finally back, to kick some tail! Donkey Kong mostly leads a peaceful life in his treehouse, until someone messes with his banana hoard, when that happens, it’s on! He’s more brawn than brains, but those muscles make him a formidable opponent. D.K! Donkey Kong!",
      "bigName": "Donkey Kong"
    },
    {
      "id": 135,
      "name": "Diddy Kong",
      "games": "Donkey Kong Country (1994 - SNES)",
      "series": "DK",
      "description": "He’s back again, and about time too, and this time, he's in the mood! Always a great partner in adventures, or even leading his own when DK is kidnapped. Diddy may not be as strong as DK, but he’s quick nimble, and full of tricks. He can even fly real high with his jetpack on. When not fighting Kremlings. He enjoys playing tennis or kart racing. Fun fact: He’s the only monkey in the Kong family.",
      "bigName": "Diddy Kong"
    },
    {
      "id": 136,
      "name": "King K. Rool",
      "games": "Donkey Kong Country (1994 - SNES)",
      "series": "DK",
      "description": "The King of the Kremling Krew, hailing from Crocodile Isle. He’s done it all, from stealing Donkey Kong's banana hoard, to kidnapping the Kongs to trying to blow up DK Island! He’s also a bit of a performer, always taking on a different persona whenever he appears, from king, to pirate, to scientist, and even a boxing champion!",
      "bigName": "King K. Rool"
    },
    {
      "id": 137,
      "name": "Donkey Kong and Lady",
      "games": "Donkey Kong (1981 - Arcade)",
      "series": "DK",
      "description": "Mario's pet gorilla has escaped and has stolen his girlfriend! But getting her back will be no easy task, as Mario must dodge the angry barrel-throwing ape and his living fireballs. Thankfully, Mario is equipped to deal with the brute's barrels with his trusty hammer. While the two may have a bitter rivalry now, rest assured that the two will eventually put their differences aside.",
      "bigName": "Donkey Kong and Lady"
    },
    {
      "id": 138,
      "name": "Donkey Kong Jr.",
      "games": "Donkey Kong Jr. (Arcade - 1982)",
      "series": "DK",
      "description": "He may be small, but Donkey Kong Jr. prides himself on heroism and will prove his worth any way he can. He does so by saving his father from the clutches of Mario. Now Donkey Kong Jr must free his father from his cell with a lot of vine-climbing and fruit-dropping.",
      "bigName": "Donkey Kong Jr."
    },
    {
      "id": 139,
      "name": "Stanley",
      "games": "Donkey Kong 3 (1983, Arcade)",
      "series": "DK",
      "description": "Stanley the Bugman is the protagonist of Donkey Kong 3, the sequel to Donkey Kong Jr. Stanley is a fumigator whose greenhouse was invaded by both Donkey Kong and a swarm of insects. To defeat Donkey Kong in each level, Stanley needs to spray him with insect repellent while simultaneously preventing the bugs from attacking his plants. Eventually, Donkey Kong will bump into a beehive and flee to the next greenhouse. Stanley has to then follow DK in order to save his plants. Did you know that this game has a sequel where Stanley chases Donkey into space? It’s true! That sequel is called Donkey Kong 3: Dai Gyakushū and was only ever released in Japan.",
      "bigName": "Stanley"
    },
    {
      "id": 140,
      "name": "Cranky Kong",
      "games": "Donkey Kong Country (1994 - SNES)",
      "series": "DK",
      "description": "The father of Donkey Kong, Cranky Kong is actually the one who fought Mario back in 1981, before passing his name onto his son. Cranky is a bitter old Kong who rambles on about how games were better in his days, all while despising most modern enhancements like these new fancy 3D graphics. Truly a man from a simpler time. He eventually lost his bitter personality to help his son save the island from the Snowmads, so can he really be considered cranky anymore?",
      "bigName": "Cranky Kong"
    },
    {
      "id": 141,
      "name": "Funky Kong",
      "games": "Donkey Kong Country (1994 - SNES)",
      "series": "DK",
      "description": "The coolest Kong in town, Donkey Kong often looks up to him as a role model. This bodacious ape isn't too fond of adventuring, but he'll help you out in other ways. Funky is the owner of Funky's Flights, the only way to get across DK Island. He's also dealt out weapons and even became a mechanic, and makes an appearance in Mario Kart Wii, where he's the fastest character in the game. Now that's gnarly!",
      "bigName": "Funky Kong"
    },
    {
      "id": 142,
      "name": "Candy Kong",
      "games": "Donkey Kong Country (1994 - SNES)",
      "series": "DK",
      "description": "Donkey Kong's girlfriend, she manages the save barrels found throughout DK Island in the first game. She wouldn't return until Donkey Kong 64, where she is the manager of a music shop, assigning each Kong an instrument of their own. These instruments can perform certain actions if used on a Music Pad. Since then, she's settled down and decided to host challenges and minigames.",
      "bigName": "Candy Kong"
    },
    {
      "id": 143,
      "name": "Swanky Kong",
      "games": "Donkey Kong Country 2: Diddy's Kong Quest (1995 - SNES)",
      "series": "DK",
      "description": "The flashiest of the Kong family, Swanky could be found in the Bonus Bonanza rooms throughout Diddy's adventure. All you have to do is answer his three questions and you'll earn yourself some extra lives! In DKC3, he runs a sideshow tent where you can throw balls at targets for points. Swanky just wants to have fun, is that so much to ask?",
      "bigName": "Swanky Kong"
    },
    {
      "id": 144,
      "name": "Wrinkly Kong",
      "games": "Donkey Kong Country 2: Diddy's Kong Quest (1995 - SNES)",
      "series": "DK",
      "description": "The caring wife of Cranky Kong, Wrinkly was the former manager of the Kong Kollege, the place where you could save the game as well as receive hints for certain levels. She eventually retires from her job, but retains the ability to save your game. However sometime after the events of DKC3, Wrinkly died, but even in death, she still helps out the Kongs on their journey.",
      "bigName": "Wrinkly Kong"
    },
    {
      "id": 145,
      "name": "Dixie Kong",
      "games": "Donkey Kong Country 2: Diddy's Kong Quest (1995 - SNES)",
      "series": "DK",
      "description": "Diddy Kong's girlfriend, after Donkey Kong ends up kidnapped by Kaptain K. Rool, she teams up with Diddy Kong to save DK from those nasty crocodiles and help prove that Diddy Kong can be a hero too. She's slower than Diddy Kong, but she has many abilities to make up for that, the most notable one being the ability to float through the air using her ponytail, which she also uses to carry barrels. Dixie also returns as the main playable character in Donkey Kong Country 3 alongside her cousin Kiddy Kong.",
      "bigName": "Dixie Kong"
    },
    {
      "id": 146,
      "name": "Dixie Kong & Kiddy Kong",
      "games": "Dixie Kong: Donkey Kong Country 2: Diddy's Kong Quest (1995 - SNES) / Kiddy Kong: Donkey Kong Country 3: Dixie Kong's Double Trouble (1996 - SNES)",
      "series": "DK",
      "description": "Donkey and Diddy decided to head on over to the Northern Kremisphere for a short vacation. However, they never came back, leaving Dixie Kong and her younger cousin Kiddy Kong as the only ones able to rescue our heroes and stop the Kremlings again. While Dixie retains her abilities from last time. Kiddy has a lot of tricks up his sleeves. Kiddy is far stronger than Donkey Kong, and is able to skip across water with ease.",
      "bigName": "Dixie Kong & Kiddy Kong"
    },
    {
      "id": 147,
      "name": "Lanky Kong",
      "games": "Donkey Kong 64 (1999 - N64)",
      "series": "DK",
      "description": "What he lacks in style and grace, he makes up for with a funny face. Due to his strange proportions, he is capable of stretching out his arms to deal damage from far distances. His abilities are just as bizarre as he is. One lets him puff up like a balloon to cover higher ground, and another lets him run on his hands to get up steep slopes. He sure is one crazy Kong!",
      "bigName": "Lanky Kong"
    },
    {
      "id": 148,
      "name": "Tiny Kong",
      "games": "Donkey Kong 64 (1999 - N64)",
      "series": "DK",
      "description": "The younger sister of Dixie Kong, she's quick and nimble when she needs to be. She also uses her ponytails to float through the air, much like Dixie Kong could. However, unlike her sister, Tiny is able to shrink herself to smaller sizes to access small spaces. She doesn't have as many abilities as the other Kongs, but with a skip and a hop, she's one cool Kong.",
      "bigName": "Tiny Kong"
    },
    {
      "id": 149,
      "name": "Chunky Kong",
      "games": "Donkey Kong 64 (1999 - N64)",
      "series": "DK",
      "description": "Finally, he's here for you, it's the last member of the DK crew! Chunky Kong doesn't like conflict, and is quite meek and cowardly. He is the younger cousin of Dixie Kong and the older brother of Kiddy Kong. Unfortunately, his large size hinders his jumping abilities, meaning he can't reach things the other Kongs might be able to. However, he can grow in size and throw powerful punches",
      "bigName": "Chunky Kong"
    },
    {
      "id": 150,
      "name": "Rambi",
      "games": "Donkey Kong Country (1994 - SNES)",
      "series": "DK",
      "description": "The first animal buddy DK and Diddy will meet on their journey. Rambi is a powerful rhinoceros, practically invincible from the front, so he plows through enemies and walls like they were paper. He's able to uncover hidden levels fairly easily, this big guy will help you obtain more bananas and lives!",
      "bigName": "Rambi"
    },
    {
      "id": 151,
      "name": "Enguarde",
      "games": "Donkey Kong Country (1994 - SNES)",
      "series": "DK",
      "description": "One of DK's animal buddies; since Donkey and Diddy are powerless underwater, Enguarde serves as their primary method of attack, jabbing forward with his bill. He isn't just for offense though, as he also increases their swimming speed. Enguarde is essentially the undersea equivalent of Rambi. Try not to go swimming without him!",
      "bigName": "Enguarde"
    },
    {
      "id": 152,
      "name": "Squawks",
      "games": "Donkey Kong Country (1994 - SNES)",
      "series": "DK",
      "description": "Squawks has the most tasks out of all of DK's animal buddies, changing his role with almost every game. In his debut, he merely held a light for you in one level. As the series went on, Squawks roles became more important, from being able to carry you through levels while shooting nuts at baddies, to giving you helpful hints and information as the game goes on. He may not seem like much, but he's probably the most important of DK's animal buddies.",
      "bigName": "Squawks"
    },
    {
      "id": 153,
      "name": "Expresso",
      "games": "Donkey Kong Country (1994 - SNES)",
      "series": "DK",
      "description": "Expresso is the fastest out of DK's animal buddies, able to run far distances and glide across gaps with ease. What he has in speed he lacks in attack, though, as Expresso's legs are too skinny to damage enemies. However, he can run above the smaller ones and not take any damage, which can prove very useful in certain scenarios. He's far more speed oriented than the others, but is nonetheless a welcome addition to the group.",
      "bigName": "Expresso"
    },
    {
      "id": 154,
      "name": "Winky",
      "games": "Donkey Kong Country (1994 - SNES)",
      "series": "DK",
      "description": "Winky is one of the more powerful animal friends, with the highest jump power out of them. His legs also allow him to kill enemies like Zingers, which normally wouldn't be harmed by jump attacks. His abilities usually allow him to reach bonus levels and bananas with ease. Winky is easily one of the more helpful buddies, and definitely deserves a spot next to DK on his quest.",
      "bigName": "Winky"
    },
    {
      "id": 155,
      "name": "Squitter",
      "games": "Donkey Kong Country 2: Diddy's Kong Quest (1995 - SNES)",
      "series": "DK",
      "description": "One of the animal buddies Diddy will run into on his quest, Squitter has the ability to fire webs from his mouth. These serve a dual purpose, they can either be projectiles to attack enemies, or you could utilize them as platforms to get over wide gaps. He's also got some nice shoes, they don't serve a purpose, but they sure are fashionable!",
      "bigName": "Squitter"
    },
    {
      "id": 156,
      "name": "Rattly",
      "games": "Donkey Kong Country 2: Diddy's Kong Quest (1995 - SNES)",
      "series": "DK",
      "description": "While Winky did not return for Diddy's adventure, Rattly fills the gap left by him, capable of doing everything he could do. The one unique ability he has allows him to shake rapidly, which drastically increases his jumping height. He's the one rattlesnake you'd want to get near.",
      "bigName": "Rattly"
    },
    {
      "id": 157,
      "name": "Ellie",
      "games": "Donkey Kong Country 3: Dixie Kong's Double Trouble (1996 - SNES)",
      "series": "DK",
      "description": "An elephant that accompanies Dixie and Kiddy on their quest through the Northern Kremisphere. Ellie might not have the strength of Rambi, but she can snort then spit out water from her trunk, and also carry barrels with it. But be warned, Ellie does not like mice, and will flee upon seeing them. Really puts those barrel throwing abilities to good use now, doesn't it?",
      "bigName": "Ellie"
    },
    {
      "id": 158,
      "name": "Professor Chops",
      "games": "Donkey Kong Country Returns (2010 - Wii)",
      "series": "DK",
      "description": "This smart pig helps Donkey Kong through the tutorial sections of his island, as well as run the checkpoints along the way. He also gives Donkey and Diddy the Super Kong ability if they're struggling, which will finish off the level for you. While not serving to combat the Tiki Tak Tribe, Chops still helps any way he can!",
      "bigName": "Professor Chops"
    },
    {
      "id": 159,
      "name": "Kritter",
      "games": "Donkey Kong Country (1994 - SNES)",
      "series": "DK",
      "description": "The main ground troops of the Kremlings, these bipedal crocodiles don't do much other than walk around. Think of them as DK's Goombas, except that a large crocodile is a bit more threatening than a mushroom with legs, wouldn't you say? Some of them get around in minecarts, some wear peg legs, you never know what to expect with these rowdy reptiles.",
      "bigName": "Kritter"
    },
    {
      "id": 160,
      "name": "Zinger",
      "games": "Donkey Kong Country (1994 - SNES)",
      "series": "DK",
      "description": "One of the most common enemies Donkey Kong will stumble into on his adventures, Zingers are large wasps, you'll hear them before you see them. With a low, droning buzz, the sound of a Zinger is more of a warning than anything else. They can't be killed with rolls or jumps, so make sure there's a barrel or animal buddy nearby if you want to get rid of them. The Zingers work under Queen B and King Zing, two larger variants of the Zinger family.",
      "bigName": "Zinger"
    },
    {
      "id": 161,
      "name": "Klaptrap",
      "games": "Donkey Kong Country (1994 - SNES)",
      "series": "DK",
      "description": "A small member of the Kremling Krew, but don't let his size fool you, this little bugger can deal out a nasty bite. His jaws are so large, Donkey and Diddy are unable to roll into him without being hurt, so your only option is to jump on them. As an Assist Trophy, they'll latch onto the nearest player and chomp away. These little crocodiles are proof that size isn't everything.",
      "bigName": "Klaptrap"
    },
    {
      "id": 162,
      "name": "Kaptain K. Rool",
      "games": "Donkey Kong Country 2: Diddy's Kong Quest (1995 - SNES)",
      "series": "DK",
      "description": "King K Rool's alternate personality in DKC2, he led the capture of Donkey Kong and lured Diddy and Dixie back to his home turf. His weapon of choice is a blunderbuss, but don't underestimate it, those cannonballs can pack a punch! The only way to end his reign and save Donkey Kong is to huck the cannonballs back at him. Those crazy crocodiles just don't learn now do they?",
      "bigName": "Kaptain K. Rool"
    },
    {
      "id": 163,
      "name": "Baron K. Roolenstein",
      "games": "Donkey Kong Country 3: Dixie Kong's Double Trouble (1996 - SNES)",
      "series": "DK",
      "description": "After being defeated on his home isle, it seems that nasty old K Rool was destroyed for good, being replaced by a robot named KAOS. The machine took over the Northern Kremisphere and kidnapped the Queen Banana Bird, the robot even got away with Donkey and Diddy as well! But it seems that robot was nothing but a ruse, as that crazy crocodile was back at it again, flying around the room on a jetpack. Dixie and Kiddy must hit him with barrels and zap him to finally bring him down. This crazy old king sure has an identity crisis, wouldn't you say?",
      "bigName": "Baron K. Roolenstein"
    },
    {
      "id": 164,
      "name": "Blast-o-Matic",
      "games": "Donkey Kong 64 (1999 - N64)",
      "series": "DK",
      "description": "After succumbing to the Kongs countless times, K Rool has had enough, so he gets his crew and a weasel named Snide to help him build a machine that will destroy the Kongs for good. Not only is it a dangerous weapon, but a base of operations for the Kremling Krew. Unfortunately, it seems the machine might have some issues and comes with a high risk of self destruction. This dangerous weapon also doubles as K Rool's Final Smash, where he uses it to destroy DK Island and the poor soul caught in the blast.",
      "bigName": "Blast-o-Matic"
    },
    {
      "id": 165,
      "name": "Tiki Tak Tribe",
      "games": "Donkey Kong Country Returns (2010 - Wii)",
      "series": "DK",
      "description": "When a volcano erupts on DK Island, it releases the Tiki Tak Tribe, a group of tikis in the shape of musical instruments. Led by Tiki Tong, the tribe has the ability to hypnotize animals, the only exception being the Kongs, who are too smart to fall for their tricks. Their origins and motivation are unknown, leaving them as a rather mysterious group. However, what we do know is that they're created by putting mushed-up bananas in crates, which is probably why they needed DK's hoard.",
      "bigName": "Tiki Tak Tribe"
    },
    {
      "id": 166,
      "name": "Lord Fredrik",
      "games": "Donkey Kong Country: Tropical Freeze (2014 - Wii U)",
      "series": "DK",
      "description": "While Donkey Kong was having his birthday party, Fredrik and his crew of Snowmads invaded the island, freezing it over and claiming it as their territory. Fredrik takes refuge in the island's now frozen volcano, wielding a magic blowhorn capable of summoning ice dragons and iceballs. He is not a foe to be taken lightly. Talk about a party crasher!",
      "bigName": "Lord Fredrik"
    },
    {
      "id": 167,
      "name": "Kip",
      "games": "Donkey Kong Barrel Blast (2007 - Wii)",
      "series": "DK",
      "description": "Diddy Kong's rival in Donkey Kong Barrel Blast, as such, they have similar stats. And the two will compete over almost everything. Kip is a naughty little trickster and the youngest member of the Kremling Krew. He's got a quick temper and will rush right into any situation. Kip has good agility, and can turn corners quite well, but his top speed is quite slow.",
      "bigName": "Kip"
    },
    {
      "id": 168,
      "name": "Kalypso",
      "games": "Donkey Kong Barrel Blast (2007 - Wii)",
      "series": "DK",
      "description": "One of the few female members of the Kremling Krew, and one of the few to have some kind of hair. Kalypso has a high rank among the Kremlings, and is considered a strong leader figure for the group, even garnering the trust of King K. Rool himself! She has the highest boost speed of the Kremlings on her bongos, and is the rival of Tiny Kong. She owns a clubhouse, which is seen as an oasis by her fellow Kremlings.",
      "bigName": "Kalypso"
    },
    {
      "id": 169,
      "name": "Donkey Kong & Bongos",
      "games": "Donkey Konga (2003 - GameCube)",
      "series": "DK",
      "description": "While the bongos were his instrument of choice back in Donkey Kong 64, you've never seen bongos like these before! While Donkey Kong might be a bit inexperienced with these new bongos, thankfully you receive a pair as well to help him play better. When Donkey Kong first discovers the bongos, Diddy thinks they're a trap set by K. Rool, but Cranky reassures them that there's nothing wrong with them. Donkey Kong now has a new goal; become the best bongo player there is.",
      "bigName": "Donkey Kong & Bongos"
    },
    {
      "id": 170,
      "name": "Karate Kong",
      "games": "Donkey Kong Jungle Beat (2004 - GameCube)",
      "series": "DK",
      "description": "Not all the Kongs are friendly, and this guy helps prove that. Karate Kong is a member of the Evil Kings and the ruler of the Pineapple Kingdom. Despite his old age, Karate Kong still has his fighting spirit, capable of doing powerful kicks and chops. However, he still ultimately proves weak against Donkey Kong when they battle on a log raft, and later pays respect to DK.",
      "bigName": "Karate Kong"
    },
    {
      "id": 171,
      "name": "Ninja Kong",
      "games": "Donkey Kong Jungle Beat (2004 - GameCube)",
      "series": "DK",
      "description": "A large, burly member of the Evil Kings, a group of four, martial-artist-using Kongs that stand in Donkey Kong’s way when he tries to become the strongest in the jungle. Ninja Kong rules over the Durian Kingdom, and his strength is on par with Donkey Kong, if not greater, making him one of the tougher opponents on DK's journey.",
      "bigName": "Ninja Kong"
    },
    {
      "id": 172,
      "name": "Link",
      "games": "The Legend of Zelda (1986 - NES)",
      "series": "Zelda",
      "description": "Whenever trouble arises in the land of Hyrule, the spirit of the hero is reincarnated into a young man, destined to save the kingdom from darkness. There have been many incarnations of Link, some of them have even eschewed their iconic green tunic, or switched their dominant hand, but all of them share the same unyielding bravery granted to them by the Triforce of Courage they bear.",
      "bigName": "Link"
    },
    {
      "id": 173,
      "name": "Zelda",
      "games": "The Legend of Zelda (1986 - NES)",
      "series": "Zelda",
      "description": "Once upon a time, Princess Zelda of Hyrule was put into an eternal slumber by a curse. Her brother, the prince, ordered that all daughters of the Royal Family be named Zelda in her honor. With divine blood running through their veins and powerful magic granted to them by the Triforce of Wisdom, the princesses of Hyrule rule over the kingdom wisely and protect it from the forces of darkness.",
      "bigName": "Zelda"
    },
    {
      "id": 174,
      "name": "Sheik",
      "games": "The Legend of Zelda: Ocarina of Time (1998 - N64)",
      "series": "Zelda",
      "description": "The Sheikah are a mysterious and secretive tribe, bound to protect the Royal Family, but nearly wiped out after the Hyrulean Civil War. However, seven years after the King of Evil took over the land, Sheik appeared to aid the Hero of Time in his quest, teaching him magical songs and guiding him to the Sages. But who is Sheik? Only the journey can yield the answers.",
      "bigName": "Sheik"
    },
    {
      "id": 175,
      "name": "Ganondorf",
      "games": "The Legend of Zelda: Ocarina of Time (1998 - N64)",
      "series": "Zelda",
      "description": "Once every one hundred years, the all-female Gerudo tribe gives birth to a male, who becomes their king. Ganondorf Dragmire was one such king, and he grew hateful towards the Royal Family of Hyrule for forcing his people to live in the harsh desert. Wielding the Triforce of Power, he uses his near god-like powers to attempt to take over the lush land of Hyrule. There may be many Links and Zeldas, but only one King of Evil.",
      "bigName": "Ganondorf"
    },
    {
      "id": 176,
      "name": "Young Link",
      "games": "The Legend of Zelda (1986 - NES) / As distinct from Adult Link: The Legend of Zelda: Ocarina of Time (1998 - N64)",
      "series": "Zelda",
      "description": "The legendary hero isn’t always a full grown man. In fact, many times he is but a mere child! One of these was the Hero of Time, who lived in the Kokiri Forest, but never received a fairy guide like the other Kokiris. After he began to have vivid nightmares, the Great Deku Tree, guardian of the Kokiris, sent the fairy Navi to call for him, starting a quest that would change Link’s, and Hyrule’s, fate forever.",
      "bigName": "Young Link"
    },
    {
      "id": 177,
      "name": "Toon Link",
      "games": "The Legend of Zelda: The Wind Waker (2003 - Gamecube)",
      "series": "Zelda",
      "description": "This cel-shaded version of Link first appeared in 2003’s The Legend of Zelda: The Wind Waker. Link travels the Great Sea in his talking boat, The King of Red Lions, in search of his sister, Aryll, who was kidnapped. This version of Link went on to star in two more games, The Legend of Zelda: Phantom Hourglass and The Legend of Zelda: Spirit Tracks. In those games, Link explored new worlds via boat and train, respectively.",
      "bigName": "Toon Link"
    },
    {
      "id": 178,
      "name": "Link (The Legend of Zelda)",
      "games": "The Legend of Zelda (1986 - NES)",
      "series": "Zelda",
      "description": "The first hero of the series. Even in his earliest appearances, Link wears the iconic green tunic, a staple of the legendary hero. He used to be a simple adventurer, but when he rescued Princess Zelda's maid Impa from the forces of Ganon, his goal changed to regaining the Triforce of Wisdom, reaching Death Mountain and defeating the Prince of Darkness before he could take over Hyrule. Yet even after Ganon's defeat, his adventures were far from over...",
      "bigName": "Link (The Legend of Zelda)"
    },
    {
      "id": 179,
      "name": "Octorok",
      "games": "The Legend of Zelda (1986 - NES)",
      "series": "Zelda",
      "description": "These strange looking octopi have been getting in Link's way since the beginning. They come in all sorts of different sub-species, some of which are strictly aquatic, and some of which roam around on land. If there's one thing they all have in common, it's their ability to shoot rocks out of their mouths. Luckily, all you need to protect yourself is a good sturdy shield. Give them a taste of their own medicine!",
      "bigName": "Octorok"
    },
    {
      "id": 180,
      "name": "Moblin",
      "games": "The Legend of Zelda (NES - 1986)",
      "series": "Zelda",
      "description": "Part pig, part goblin, all disgusting! These foot soldiers have appeared in nearly every one of Link's adventures, always putting their snouts where they don't belong. They're capable of using tools, so you'll find them wielding all sorts of weapons, such as clubs, bows, shields, or spears. Don't mistake them for their strange cousins, the Bokoblins. These ones can pack quite a punch!",
      "bigName": "Moblin"
    },
    {
      "id": 181,
      "name": "Tektite",
      "games": "The Legend of Zelda (1986 - NES)",
      "series": "Zelda",
      "description": "Tektites are a common creature throughout Hyrule. They live in a variety of habitats, but their biology remains the same. While rarely a threat, they are quite nimble, which makes them quite hard to hit sometimes. Tektites aren't very strong enemies, but they have strength in numbers. Be sure to always expect a few around the corner.",
      "bigName": "Tektite"
    },
    {
      "id": 182,
      "name": "Like Like",
      "games": "The Legend of Zelda (1986 - NES)",
      "series": "Zelda",
      "description": "One of the strangest and most aggravating enemies that roam the dungeons and caves of Hyrule, the Like Like is hard to describe. All it resembles is a cylindrical blob which scuttles slowly towards its prey. If one of these creatures swallows Link, it will spit him back out, but it will eat some of his gear, most often, his shield. Don’t worry, though, if Link kills it quickly enough, he can get his stuff back.",
      "bigName": "Like Like"
    },
    {
      "id": 183,
      "name": "Darknut",
      "games": "The Legend of Zelda (1986 - NES)",
      "series": "Zelda",
      "description": "Darknuts are powerful and sturdy knights usually working under the service of Ganon or some other dark lord. Their defense from the front is absolutely rock-solid, so the only way to harm them is to hit them from the side or from the back, which can be more difficult than it sounds due to their erratic movements. Under its plate armor, they actually wear another set, chain mail this time, meaning you’ll never see their true appearance.",
      "bigName": "Darknut"
    },
    {
      "id": 184,
      "name": "Fairy Bottle",
      "games": "The Legend of Zelda: A Link to the Past (1991 - SNES)",
      "series": "Zelda",
      "description": "Fairies are decidedly some of the most valuable partners to an adventurer in Hyrule. Not only can they greatly heal your wounds, but also revive you if you fall in battle. But what if there isn’t one around when you need them? Well, that’s why you should always carry them with you. Go to a fairy fountain, catch one with a bug net and keep them in a bottle. This way, you can use them whenever you need their help.",
      "bigName": "Fairy Bottle"
    },
    {
      "id": 185,
      "name": "Agahnim",
      "games": "The Legend of Zelda: A Link to the Past (1991 - SNES)",
      "series": "Zelda",
      "description": "Sudden and mysterious disasters began to plague the land of Hyrule, until the wizard Agahnim used his powerful magic to stop it. To repay him, the King of Hyrule granted Agahnim the role of royal advisor and he began to earn the king’s trust. It was all a ruse though, for when the time came, Agahnim betrayed the king and took the throne. He then used the knights of Hyrule to pursue the Seven Maidens in order to sacrifice them to release his true master, Ganon.",
      "bigName": "Agahnim"
    },
    {
      "id": 186,
      "name": "Cucco",
      "games": "The Legend of Zelda: A Link to the Past (1991 - SNES)",
      "series": "Zelda",
      "description": "Behold, mortal! Hyrule’s most powerful and fearsome monster! Tremble before its sight! This mighty beast can be found in the farmlands of Hyrule, peacefully roaming the fields. Should an adventurer be foolish enough to challenge it, the Cucco will show him mercy by allowing him to go free. However, should the mortal continue to test its patience, it will summon its accursed brethren to punish him. Then, all the adventurer can do before his demise is run, hide and pray.",
      "bigName": "Cucco"
    },
    {
      "id": 187,
      "name": "Marin",
      "games": "The Legend of Zelda: Link's Awakening (1993 - Game Boy)",
      "series": "Zelda",
      "description": "Marin is a young girl who lives in the peaceful seaside Mabe Village in Koholint Island. One day, as she took a stroll on the beach, she found an unconscious Link, washed to the shore after a storm destroyed his raft. She took him to her house and nursed him back to health, and they grow closer during his adventure. She is a talented singer and harpist, and she can often be found singing the Ballad of the Wind Fish near the village’s Weathercock.",
      "bigName": "Marin"
    },
    {
      "id": 188,
      "name": "Wind Fish",
      "games": "The Legend of Zelda: Link's Awakening (1993 - Game Boy)",
      "series": "Zelda",
      "description": "This colorful, winged whale is the Wind Fish, and don’t make fun of his looks, as he is actually a powerful deity. He sleeps inside an enormous egg, resting at the top of Mt. Tamaranch in Koholint Island. When Link finds himself stranded on the island, an owl tells him that the only way to leave it is to wake the Wind FIsh, by playing a tune on the Instruments of the Sirens. However, the instruments are guarded by eight nightmares, which Link must defeat in order to escape.",
      "bigName": "Wind Fish"
    },
    {
      "id": 189,
      "name": "Young Zelda",
      "games": "The Legend of Zelda: Ocarina of Time (1998 - N64)",
      "series": "Zelda",
      "description": "As Link infiltrates Hyrule Castle, hiding from the guards, he comes across a beautiful courtyard where he meets who he was sent to find, the Princess of Destiny. Zelda had been having prophetic dreams in which she saw a boy from the forest break through the veil of darkness. As they spy on Ganondorf through a window, they formulate a plan to find the Spiritual Stones before he can, and beat him to the Triforce.",
      "bigName": "Young Zelda"
    },
    {
      "id": 190,
      "name": "Zelda (Ocarina of Time)",
      "games": "The Legend of Zelda: Ocarina of Time (1998 - N64)",
      "series": "Zelda",
      "description": "The Princess of Hyrule during the era of the Hero of Time, Zelda and Link met as children, and they planned to stop Ganondorf from acquiring the Triforce. However, Ganondorf attacked Hyrule Castle, and forced the princess to flee, leaving only the Ocarina of Time behind for Link to find. Ganondorf eventually reached the Triforce and both the Hero of Time and the Princess of Destiny disappeared for seven dark years.",
      "bigName": "Zelda (Ocarina of Time)"
    },
    {
      "id": 191,
      "name": "Ganon",
      "games": "The Legend of Zelda (1986 - NES)",
      "series": "Zelda",
      "description": "Ganon is the Demon King, a terrible beast that has threatened Hyrule time and time again, only to be stopped by a hero and a princess. This pig-like monster is actually none other than Ganondorf, who, in an act of desperation, used the Triforce of Power to transform himself into this beast. No matter how many times he is defeated, Ganon always returns, either as a Gerudo or monster to unleash chaos upon Hyrule.",
      "bigName": "Ganon"
    },
    {
      "id": 192,
      "name": "Saria",
      "games": "The Legend of Zelda: Ocarina of Time (1998 - N64)",
      "series": "Zelda",
      "description": "Saria is a young Kokiri girl and Link’s best friend during his childhood in Kokiri Forest. Always cheerful, Saria is incredibly well-liked by all the Kokiri, but she is especially fond of Link. She enjoys hanging out in the Sacred Forest Meadow, playing her signature tune on her Fairy Ocarina. As Link leaves the forest on his journey, Saria gifts him her ocarina, and asks for him to return safely.",
      "bigName": "Saria"
    },
    {
      "id": 193,
      "name": "Impa",
      "games": "The Legend of Zelda (1986 - NES) / The Legend of Zelda: Ocarina of Time (1998 - N64)",
      "series": "Zelda",
      "description": "One of the most recurring characters in the Legend of Zelda series, other than the Triforce wielders, Impa usually appears as an old, frail woman, or as a young Sheikah warrior. Regardless, her role is usually that of a nursemaid or bodyguard to Princess Zelda, and as a guide to Link. In Ocarina of Time, Impa is the one who teaches Link his first ocarina song, Zelda’s Lullaby.",
      "bigName": "Impa"
    },
    {
      "id": 194,
      "name": "Kaepora Gaebora",
      "games": "The Legend of Zelda: Ocarina of Time (1998 - N64)",
      "series": "Zelda",
      "description": "The reincarnation of a wise old sage, Kaepora will give advice to Link throughout his quest, and can also carry Link to certain locations. In Majora's Mask, he teaches the Song of Soaring, an optional song that will allow you to warp to activated Owl Statues, sculptures he's scattered across the land to aid the one who will save the world. Would you like me to repeat that?",
      "bigName": "Kaepora Gaebora"
    },
    {
      "id": 195,
      "name": "Malon",
      "games": "The Legend of Zelda: Ocarina of Time (1998 - N64)",
      "series": "Zelda",
      "description": "Malon is a young farmgirl who lives in Lon Lon Ranch. She is the daughter of the ranch-keeper Talon, but works a lot harder, since her father sleeps most of the time. In particular, she loves the horses on the ranch, and her favorite is the white-maned Epona, for whom she composed a song. Link first meets her at Hyrule Castle Town, worried that her father hasn’t returned from his delivery trip to the castle.",
      "bigName": "Malon"
    },
    {
      "id": 196,
      "name": "Epona",
      "games": "The Legend of Zelda: Ocarina of Time (1998 - N64)",
      "series": "Zelda",
      "description": "This white-maned mare is Link’s loyal steed in many of his adventures. She is also very proud, and will only allow two people to ride her: Link, and her original caretaker, Malon. The original Epona was born and raised in Lon Lon Ranch, and bonds with Link once he plays her song on his ocarina, although she is much too young to carry him when they first meet. Link has had many companions through the years, but perhaps none as iconic.",
      "bigName": "Epona"
    },
    {
      "id": 197,
      "name": "Goron",
      "games": "The Legend of Zelda: Ocarina of Time (1998 - N64)",
      "series": "Zelda",
      "description": "Gorons are a race of peaceful, rock-eating mountain dwellers, and can most often be found on Death Mountain. They are incredibly strong and sturdy, and could easily best most humans in a fight, but they are usually content with sleeping and rolling around. Gorons can live for very long and reach massive sizes, and are also completely immune to hot temperatures. Gorons are a proud, noble race, and one would be honored to be considered their brother.",
      "bigName": "Goron"
    },
    {
      "id": 198,
      "name": "Darunia",
      "games": "The Legend of Zelda: Ocarina of Time (1998 - N64)",
      "series": "Zelda",
      "description": "Darunia was the leader of the Gorons of Death Mountain during the era of the Hero of Time. After he refused handing over the Goron’s Ruby to Ganondorf, the warlock closed off the entrance to Dodongo’s Cavern, from whence the Gorons harvested the rocks they feed on. With their food supply growing ever scarcer, Darunia began to fear for the survival of his people, until a young hero came his way.",
      "bigName": "Darunia"
    },
    {
      "id": 199,
      "name": "Zora",
      "games": "River Zoras: The Legend of Zelda (1986 - NES) / Sea Zoras: The Legend of Zelda: Ocarina of Time (1998 - N64)",
      "series": "Zelda",
      "description": "Zoras are a race of aquatic, fish-like people who are one of the most prominent races in Hyrule. They are divided into two subspecies: the green-skinned River Zoras, which are typically hostile to intruders, and the more peaceful Zoras who live in Zora’s Domain. Even within this latter group, Zoras are incredibly diverse, and comes in a variety of shapes and sizes, resembling many different kinds of fish.",
      "bigName": "Zora"
    },
    {
      "id": 200,
      "name": "Ruto",
      "games": "The Legend of Zelda: Ocarina of Time (1998 - N64)",
      "series": "Zelda",
      "description": "Ruto is the daughter of King Zora XVI and the princess of Zora’s Domain during the era of the Hero of Time. She is entrusted with the sacred duty of feeding the Zora’s god, Lord Jabu-Jabu. However, one day the enormous fish swallowed the Zora’s Sapphire, which Ruto’s mother had given to her, and Ruto goes inside his guts to get it back. Link rescues her and the stone, an act for which he is rewarded with the Sapphire and punished with Ruto’s infatuation.",
      "bigName": "Ruto"
    },
    {
      "id": 201,
      "name": "Great Fairy",
      "games": "The Legend of Zelda (1986 - NES)",
      "series": "Zelda",
      "description": "Not all fairies are created equal, and some are much greater and more powerful than most. Link can find these Great Fairies in a few select Fairy Fountains throughout Hyrule, and they always have something useful to offer, such as powerful items, magic spells and other goodies. Their appearance varies drastically throughout the ages, from the provocatively-dressed, pink-haired ones from Ocarina of Time, to the dark-skinned, four-armed ones from Wind Waker.",
      "bigName": "Great Fairy"
    },
    {
      "id": 202,
      "name": "Koume & Kotake",
      "games": "The Legend of Zelda: Ocarina of Time (1998 - N64)",
      "series": "Zelda",
      "description": "Koume is the red witch, with power over fire, and Kotake is the blue witch, with power over ice. These 400-year-old Gerudo twins are the surrogate mothers of Ganondorf, who raised him in his infancy and served him in his adulthood. These cackling witches often bicker with each other, but when they battle an opponent, they operate in perfect unison, almost as if they were one.",
      "bigName": "Koume & Kotake"
    },
    {
      "id": 203,
      "name": "Twinrova",
      "games": "The Legend of Zelda: Ocarina of Time (1998 - N64)",
      "series": "Zelda",
      "description": "Twinrova is the combined form of Koume and Kotake. The two old women can use their magic to fuse together into a tall, beautiful sorceress, who combines Koume’s fire spells, with Kotake’s ice powers. Link battles her at the end of the Spirit Temple, first as the twins, then as one. Luckily, Link’s trek through the temple granted him the Mirror Shield, which can reflect Twinrova’s magic back at her.",
      "bigName": "Twinrova"
    },
    {
      "id": 204,
      "name": "ReDead",
      "games": "The Legend of Zelda: Ocarina of Time (1998 - N64)",
      "series": "Zelda",
      "description": "Of all the dark creatures who roam the land under Ganon’s control, perhaps none are as feared as the ReDeads. These masked, clay-like creatures are widely thought to be reanimated corpses. You can hear their characteristic moaning before you see them, but once a careless adventurer veers too close, they emit a blood-curling scream that freezes the victim in place, rendering them helpless as the ReDead begins to feed on their energy.",
      "bigName": "ReDead"
    },
    {
      "id": 205,
      "name": "Skull Kid",
      "games": "The Legend of Zelda: Ocarina of Time (1998 - N64)",
      "series": "Zelda",
      "description": "Word around Hyrule is that when careless children wander into the Lost Woods, they will eventually become Skull Kids. No one knows for sure if that’s true or just a rumor, but regardless, many of these strange creatures can be found in the Lost Woods. These mischievous beings are quite friendly to children, but not at all to adults. The flutes they love to play also double as blowguns.",
      "bigName": "Skull Kid"
    },
    {
      "id": 206,
      "name": "Skull Kid & Majora's Mask",
      "games": "The Legend of Zelda: Majora's Mask (2000 - N64)",
      "series": "Zelda",
      "description": "One night, in the land of Termina, a particularly mischievous Skull Kid stole a mask from a wandering salesman. That mask, however, had immense destructive powers, and the Skull Kid, bitter and angry after his friends seemingly abandoned him, used these powers to throw the land into chaos, imprisoning its guardians, the Four Giants, and bringing the moon down to destroy it. But is the Skull Kid wearing the mask, or is the mask wearing him?",
      "bigName": "Skull Kid & Majora's Mask"
    },
    {
      "id": 207,
      "name": "Deku Link",
      "games": "The Legend of Zelda: Majora's Mask (2000 - N64)",
      "series": "Zelda",
      "description": "You've met with a terrible fate, haven't you? While chasing down Skull Kid in an effort to rescue his stolen horse, Link was cursed into the form of a Deku Shrub. In this form, he loses his iconic swordsmanship, but gains a few new abilities as well. That being said, Link would really rather not be a Deku for the rest of his life. Thankfully the \"Song of Healing\" released him from this fate, and left him with the ability to change back into Deku form at will.",
      "bigName": "Deku Link"
    },
    {
      "id": 208,
      "name": "Fierce Deity Link",
      "games": "The Legend of Zelda: Majora’s Mask (2000 - N64)",
      "series": "Zelda",
      "description": "If Link manages to find all 23 masks scattered around Termina, he can trade them for the powerful Fierce Deity mask. Link becomes an unstoppable force with his gigantic Helix Sword that doesn't even need to connect to its target to do massive damage! However, he can only don this mask during boss fights.",
      "bigName": "Fierce Deity Link"
    },
    {
      "id": 209,
      "name": "Majora's Mask",
      "games": "The Legend of Zelda: Majora's Mask (2000 - N64)",
      "series": "Zelda",
      "description": "This mask was created by an ancient, long lost civilization, who used it for their dark hexing rituals. However, the tribe eventually feared its evil powers, great enough to destroy the world, and sealed it away. The mask was then found by a mysterious collector, but it was soon stolen from him by a mischievous Skull Kid who was unaware of its power. As he wore it, the Skull Kid gained incredible magic abilities, which he used for evil.",
      "bigName": "Majora's Mask"
    },
    {
      "id": 210,
      "name": "Moon",
      "games": "The Legend of Zelda: Majora's Mask (2000 - N64)",
      "series": "Zelda",
      "description": "This bizarre looking moon used to orbit around the planet, hovering harmlessly above the land of Termina. However, using the Majora’s Mask’s powers, a Skull Kid pulled it from its orbit and caused it to plummet to the ground. When Link arrives in Termina, the Moon is three days away from falling and destroying the entire world. Link must find and rescue the Four Giants, the only ones capable of stopping it. But does he have enough time?",
      "bigName": "Moon"
    },
    {
      "id": 211,
      "name": "Tingle",
      "games": "The Legend of Zelda: Majora's Mask (2000 - N64)",
      "series": "Zelda",
      "description": "Hyrule and its many neighboring lands are home to many strange people, but few are as plain weird as Tingle. This thirty-five year old man is absolutely obsessed with fairies and wishes he could be one. He is, nevertheless, a friendly guy, and a skilled cartographer, and is always willing to sell you a map of the region or perform other useful services. Once he finishes one, he will often chant his trademarked and copyrighted magic words: Tingle Tingle Koolo-Limpah!",
      "bigName": "Tingle"
    },
    {
      "id": 212,
      "name": "Happy Mask Salesman",
      "games": "The Legend of Zelda: Ocarina of Time (1998 - N64)",
      "series": "Zelda",
      "description": "Arguably the most enigmatic character in the Legend of Zelda series, and that’s saying a lot. You may be taken aback by his friendly demeanor and ever-present smile and think he’s just a friendly salesman of rare and unusual masks, but he is, in fact, much more, although what exactly we’re not sure. He knows a great deal about the legendary Majora’s Mask, but his knowledge and power seem to be much greater than he lets on.",
      "bigName": "Happy Mask Salesman"
    },
    {
      "id": 213,
      "name": "Kafei",
      "games": "The Legend of Zelda: Majora's Mask (2000 - N64)",
      "series": "Zelda",
      "description": "The kid hiding his face behind a Keaton Mask in the alleys of Clock Town is Kafei, but he is actually not a child at all, but a grown adult. He used to be engaged with Anju the innkeeper and would fuse his Sun’s Mask with her Moon’s Mask for their wedding. However, he was turned into a child by the Skull Kid, and his Sun’s Mask was stolen by a thief. Ashamed, he went into hiding as he tries to retrieve the mask, making Anju believe he’s disappeared.",
      "bigName": "Kafei"
    },
    {
      "id": 214,
      "name": "Postman",
      "games": "The Legend of Zelda: Majora's Mask (2000 - N64)",
      "series": "Zelda",
      "description": "Wait a minute, Mr. Postman, is there a letter in your bag for me? Well, this one usually does. This hard-working Postman has done his rounds in Termina, Labrynna and Hyrule, and you can usually find him running around at top speed to deliver his letters on time. A professional with very high standards, the Postman is adamant about following his schedule to the dot, no matter the cost.",
      "bigName": "Postman"
    },
    {
      "id": 215,
      "name": "Din",
      "games": "The Legend of Zelda: Oracle of Seasons (2001 - GBC)",
      "series": "Zelda",
      "description": "Despite the name, this is not actually the Goddess of Power who created the land of Hyrule. Instead, this feisty young woman is an oracle, the Oracle of Seasons to be more precise, with the power to control the seasons. Din is a famous dancer living with a band of traveling performers in the land of Holodrum. However, one day, the evil General of Darkness, Onox, kidnaps her and buries the Temple of Seasons, throwing the seasons into disarray.",
      "bigName": "Din"
    },
    {
      "id": 216,
      "name": "Nayru",
      "games": "The Legend of Zelda: Oracle of Ages (2001 - GBC)",
      "series": "Zelda",
      "description": "This Nayru is not the Goddess of Wisom, but the Oracle of Ages, able to control the flow of time. Wishing to conceal her identity from those with evil intent, Nayru disguises herself as a regular singer, who enjoys playing music for the forest critters in Labrynna. However, the Sorceress of Darkness, Veran, eventually finds and possesses her, taking her back to the past to aid in her evil plans.",
      "bigName": "Nayru"
    },
    {
      "id": 217,
      "name": "Ricky",
      "games": "The Legend of Zelda: Oracle of Seasons & Oracle of Ages (2001 - GBC)",
      "series": "Zelda",
      "description": "Ricky is a mighty boxer kangaroo who aids Link in his journey through both Holodrum and Labrynna. He can throw powerful punches that cause whirlwinds, and jump high enough to help Link climb even the steepest cliffs. Unfortunately, it seems he is also a bit of an airhead, as he is constantly misplacing his boxing gloves. He also has a friendly rivalry with Blaino, a fellow boxer who runs a gym in Holodrum.",
      "bigName": "Ricky"
    },
    {
      "id": 218,
      "name": "Dimitri",
      "games": "The Legend of Zelda: Oracle of Seasons & Oracle of Ages (2001 - GBC)",
      "series": "Zelda",
      "description": "Dimitri is a Dodongo, but he is different from any other you might have encountered. For one he is friendly, and will try to help Link rather than eat him. He is so adamant about his pacifist nature that he even keeps his horn permanently blunt. Furthermore, it seems Dimitri is unable, or perhaps unwilling, to breathe fire, but he can swim, and cross deep waters with ease. Unfortunately, he is always being bullied and pestered by the locals, so help him out if you can.",
      "bigName": "Dimitri"
    },
    {
      "id": 219,
      "name": "Moosh",
      "games": "The Legend of Zelda: Oracle of Seasons & Oracle of Ages (2001 - GBC)",
      "series": "Zelda",
      "description": "Moosh might just be the strangest bear you’ve ever seen, if you can even call him that. What kind of bear has wings and blue fur, anyway? Regardless, Moosh is very helpful to Link during his journey through Labrynna and Holodrum. Though the combination of tiny wings and large body means he is unable to really soar through the sky, he can fly over holes and gaps to help reach otherwise inaccessible areas.",
      "bigName": "Moosh"
    },
    {
      "id": 220,
      "name": "Ganondorf (Twilight Princess)",
      "games": "The Legend of Zelda: Twilight Princess (2006 - Wii)",
      "series": "Zelda",
      "description": "Centuries prior to the Era of Twilight, the Hero of Time, as a child, warned the King of Ganondorf’s evil deeds, and he was promptly tried and executed. Or at least, they tried, but it is not easy to kill the King of Evil. The attempt left Ganondorf with a glowing scar on his chest, but that did little to deter him, so the Ancient Sages, in a desperate bid, sealed him in the Twilight Realm. Unfortunately, Ganondorf would use this perceived setback to gain even more power.",
      "bigName": "Ganondorf (Twilight Princess)"
    },
    {
      "id": 221,
      "name": "Beast Ganon",
      "games": "The Legend of Zelda: Twilight Princess (2006 - Wii)",
      "series": "Zelda",
      "description": "While Ganon has always been a large, pig-like monster, he has always had some kind of human-like quality. He could stand on two feet and wield spears like a man. This form of Ganon, however, was completely, and totally beast. When the Hero of Twilight reached the top of Hyrule Castle, Ganondorf transformed into an enormous, rampaging boar, which still retained the glowing scar left by the Sword of the Six Sages.",
      "bigName": "Beast Ganon"
    },
    {
      "id": 222,
      "name": "Midna",
      "games": "The Legend of Zelda: Twilight Princess (2006 - GameCube/Wii)",
      "series": "Zelda",
      "description": "Midna is one of the Twili, a race only found in the Twilight Realm. When Zant, the King of Twilight, begins his invasion of Hyrule, engulfing it in Twilight, Midna teams up with Link to stop him. She believes that by completing the Fused Shadow, she will have the power to single handedly defeat Zant. While she often acts rude towards Link and Zelda, you can tell there's a good heart deep inside her.",
      "bigName": "Midna"
    },
    {
      "id": 223,
      "name": "Wolf Link & Midna",
      "games": "The Legend of Zelda: Twilight Princess (2006 - GameCube/Wii)",
      "series": "Zelda",
      "description": "Under the influence of the overwhelming Twilight infesting Hyrule, Link finds himself transformed into a wolf. He can't exactly wield a sword in this form, but that sure doesn't mean he can't fight! Wolf Link's got claws and fangs and he's not afraid to use them. With Midna's Twilight powers and Wolf Link's savagery, they can perform a Dark Energy attack, wiping out groups of enemies in seconds.",
      "bigName": "Wolf Link & Midna"
    },
    {
      "id": 224,
      "name": "Zant",
      "games": "The Legend of Zelda: Twilight Princess (2006 - Wii)",
      "series": "Zelda",
      "description": "Zant is the cruel and unstable King of the Twilight Realm. With his face always obscured by a bizarre helmet, he invaded Hyrule with an army of Shadow Beasts and other dark creatures by his side, covering the land in twilight. As a result, the land is disfigured, and its inhabitants are turned into spirits. He even managed to invade Hyrule Castle and keep Princess Zelda hostage, threatening to kill all the people of Hyrule if she were to fight him.",
      "bigName": "Zant"
    },
    {
      "id": 225,
      "name": "Agitha",
      "games": "The Legend of Zelda: Twilight Princess (2006 - Wii)",
      "series": "Zelda",
      "description": "Agitha is the prime example of what happens if you get too deep into a particular hobby. Simply put, she likes bugs, but she likes them maybe a bit too much. She calls herself their princess, and intends to throw a ball for them at her “castle.” But, oh, what a shock, the bugs haven’t responded to her invitation, so she asks Link to bring them to her. In exchange, she will give him rupees and increase his wallet size. Maybe Link can use it to pay for her therapy.",
      "bigName": "Agitha"
    },
    {
      "id": 226,
      "name": "King Bulblin & Lord Bullbo",
      "games": "The Legend of Zelda: Twilight Princess (2006 - Wii)",
      "series": "Zelda",
      "description": "As the name suggest, this big guy is the leader of the Bulblins, bandit-like creatures who often cross paths with the Hero of Twilight to cause trouble, such as kidnapping his friends, or attacking the caravan who is carrying the ill Zora Prince. King Bulblin is often seen mounting his steed, the grotesque Lord Bullbo, and uses it to duel Link and Epona in a jousting match on the Bridge of Eldin. Despite appearances, there is an honorable side to him, deep down.",
      "bigName": "King Bulblin & Lord Bullbo"
    },
    {
      "id": 227,
      "name": "Fi",
      "games": "The Legend of Zelda: Skyward Sword (2011 - Wii)",
      "series": "Zelda",
      "description": "This mysterious spirit appeared to Link one night and guided him to a hidden chamber where he found the Goddess Sword. Fi is actually the spirit of the sword, and was created by the goddess Hylia to guide the chosen hero when the time came. She refers to Link as her “Master” and her manner of speech makes her sound rather robotic, always speaking of odds and probabilities. She is not just a cold machine, though, as she genuinely cares for Link.",
      "bigName": "Fi"
    },
    {
      "id": 228,
      "name": "Ghirahim",
      "games": "The Legend of Zelda: Skyward Sword (2011 - Wii)",
      "series": "Zelda",
      "description": "Ghirahim is a Demon Lord, ruling over the surface world while the people of Skyloft live blissfully unaware above it. He is the one who sends the tornado that knocks Zelda down to the world below, as he needs her for his nefarious plans. Ghirahim is a bizarre and off-putting character, appearing calm and gentlemanly, if incredibly flamboyant and narcissistic, at first, only to grow increasingly violent and sadistic as he becomes furious, outraged or sick with anger.",
      "bigName": "Ghirahim"
    },
    {
      "id": 229,
      "name": "The Imprisoned",
      "games": "The Legend of Zelda: Skyward Sword (2011 - Wii)",
      "series": "Zelda",
      "description": "In his nightmares, Link sees a dark, lumbering figure emerge from the ground to cover the world in darkness. This beast is very real, and it is imprisoned underneath the Sealed Grounds, guarded only by a frail old woman. As the seal that traps him weakens, the Imprisoned is able to break from its prison, only for Link to trap him again. However, each time he escapes, he grows stronger. At some point, it might not be possible to seal him back.",
      "bigName": "The Imprisoned"
    },
    {
      "id": 230,
      "name": "Demise",
      "games": "The Legend of Zelda: Skyward Sword (2011 - Wii)",
      "series": "Zelda",
      "description": "Demise is the Demon King, and many years in the past, he invaded the surface world with his demonic hordes in an attempt to take the Triforce. The goddess Hylia sent the surviving humans to live in the sky to protect them, and then sealed Demise away, but not before being mortally wounded by him. Demise’s most loyal servant, Ghirahim, searches for a way to break his master free from his prison.",
      "bigName": "Demise"
    },
    {
      "id": 231,
      "name": "Loftwing",
      "games": "The Legend of Zelda: Skyward Sword (2011 - Wii)",
      "series": "Zelda",
      "description": "Loftwings are enormous, intelligent birds, that have been tamed and bonded with by the people of Skyloft, and every citizen has one. In the annual Wing Ceremony, young students at the Knight Academy ride their Loftwings fulfilling tasks to prove their honor and their bond. The winner gets to take the next step towards Knighthood. Link bonds with a Crimsom Loftwing, a breed previously thought to be extinct.",
      "bigName": "Loftwing"
    },
    {
      "id": 232,
      "name": "Groose",
      "games": "The Legend of Zelda: Skyward Sword (2011 - Wii)",
      "series": "Zelda",
      "description": "One of Link’s fellow classmates at the Knight Academy, although “fellow” may not be a great descriptor. Conceited and pompous, Groose is a bully who consistently torments Link, but the reason for it is that he is actually jealous of Link’s talents, destiny and special bond with Zelda, for whom he has unrequited feelings. Truly he is a nasty character, but maybe, deep down, there is a noble soul, waiting to show itself.",
      "bigName": "Groose"
    },
    {
      "id": 233,
      "name": "Wall-Merged Link",
      "games": "The Legend of Zelda: A Link Between Worlds (2013 - 3DS)",
      "series": "Zelda",
      "description": "Oh no! The evil sorcerer, Yuga, trapped Link in a painting! Thankfully, the mysterious bracelet that Ravio gave him seems to have absorbed the magic, allowing Link to not only escape, but also merge onto walls at will. He can use this ability to escape combat, solve puzzles, and even travel between worlds.",
      "bigName": "Wall-Merged Link"
    },
    {
      "id": 234,
      "name": "Link (A Link Between Worlds)",
      "games": "The Legend of Zelda: A Link Between Worlds (2013 - 3DS)",
      "series": "Zelda",
      "description": "This reincarnation of Link works as the apprentice of a blacksmith, and a rather lazy one at that. On a job to deliver a sword to the captain, he found himself on a much longer journey than he intended. He stumbled onto an evil sorcerer named Yuga, who was capturing one of the Seven Sages. He made a powerful enemy when he charged in to stop Yuga, and there's no turning back now. Time to be a hero!",
      "bigName": "Link (A Link Between Worlds)"
    },
    {
      "id": 235,
      "name": "Ravio",
      "games": "The Legend of Zelda: A Link Between Worlds (2013 - 3DS)",
      "series": "Zelda",
      "description": "This bunny-hooded man is somewhat cowardly and lazy, preferring to stay back while Link saves the world. Ravio and his pet bird Sheerow set up an item shop in Link’s house, and his shop has an interesting policy. You can buy the items for a high price, or you can rent them for a lower price. Because his wares contain pretty much all items in the game, you can pick and choose the order you want to tackle the dungeons that require them.",
      "bigName": "Ravio"
    },
    {
      "id": 236,
      "name": "Hilda",
      "games": "The Legend of Zelda: A Link Between Worlds (2013 - 3DS)",
      "series": "Zelda",
      "description": "Hilda is the princess of Lorule, a parallel world that in many ways mirrors Hyrule, which also means that she is the Lorulean counterpart to Zelda. As Link chases the sorcerer Yuga to the ruined Lorule, Hilda reaches out to him telepathically, and begs him to rescue the Seven Sages that have been turned into paintings by Yuga. As a ruler, Hilda cares deeply for her struggling subjects, and will do anything for the sake of her kingdom.",
      "bigName": "Hilda"
    },
    {
      "id": 237,
      "name": "Yuga",
      "games": "The Legend of Zelda: A Link Between Worlds (2013 - 3DS)",
      "series": "Zelda",
      "description": "This sorcerer travelled from Lorule to Hyrule to go after the Seven Sages, trapping them into paintings with the help of his magic staff. He tried to do the same to Link, but Ravio’s bracelet saved him from the spell. Yuga is arrogant and narcissistic, obsessed with physical perfection and disgusted with anything and anyone who he perceives as ugly. In order to obtain the Triforce, Yuga plans to use the trapped Sages to revive and fuse with Ganon.",
      "bigName": "Yuga"
    },
    {
      "id": 238,
      "name": "Zelda (Breath of the Wild)",
      "games": "The Legend of Zelda: Breath of the Wild (Switch - 2017)",
      "series": "Zelda",
      "description": "Unlike other incarnations of Zelda, this Zelda has a curious, inquisitive mind that leads her spending much of her time observing and learning about the world, rather than focus on her Princess-ly duties. Her failure to use the sealing power that other incarnations of Zelda have possessed is why Calamity Ganon was able to take over Hyrule Castle. She loves fruitcake.",
      "bigName": "Zelda (Breath of the Wild)"
    },
    {
      "id": 239,
      "name": "Mipha",
      "games": "The Legend of Zelda: Breath of the Wild (Switch - 2017)",
      "series": "Zelda",
      "description": "The Zora Champion who piloted the Divine Beast Vah Ruta, who fell after Calamity Ganon seized control and corrupted the Divine Beasts. The introverted Zora was in love with Link, and made him the Zora Armor before her demise during the war against Calamity Ganon. The skilled spearwoman wields the Lightscale Trident. Mipha gives Link her healing power, called Mipha's Grace, which allows Link to revive from death once in a while.",
      "bigName": "Mipha"
    },
    {
      "id": 240,
      "name": "Daruk",
      "games": "Legend of Zelda: Breath of the Wild (Switch - 2017)",
      "series": "Zelda",
      "description": "The Goron Champion who piloted the Divine Beast Vah Rudania in the war against Calamity Ganon, who fell after Calamity Ganon seized control and corrupted the Divine Beasts. Daruk has the ability Daruk's Protection, which is a red crystal spherical barrier that can deflect any attack or incoming damage to the user, and wields a giant stone sword called the Boulder Breaker. For some reason, Daruk has a fear of dogs, which is said to be his only weakness.",
      "bigName": "Daruk"
    },
    {
      "id": 241,
      "name": "Revali",
      "games": "The Legend of Zelda: Breath of the Wild (2017 - Switch)",
      "series": "Zelda",
      "description": "This Rito Champion piloted Vah Medoh before the Calamity. He is brash and jealous that Link is the one wielding the Master Sword. Revali was subsequently killed and imprisoned in his own Divine Beast.",
      "bigName": "Revali"
    },
    {
      "id": 242,
      "name": "Urbosa",
      "games": "The Legend of Zelda: Breath of the Wild (2017 - Switch)",
      "series": "Zelda",
      "description": "One of the Champions of Hyrule, Urbosa is the Gerudo Chieftain of her people, as well as the pilot of the Divine Beast Vah Naboris. She has a very passionate hate for Ganon, far more than the other champions, as he was first born into her kingdom. She is considered a powerful warrior of impeccable skill, strength, and speed. She wields the Scimitar of the Seven and the Daybreaker shield, both of which have become sacred treasures among the Gerudo People.",
      "bigName": "Urbosa"
    },
    {
      "id": 243,
      "name": "Calamity Ganon",
      "games": "The Legend of Zelda: Breath of the Wild (Switch - 2017)",
      "series": "Zelda",
      "description": "A primal evil that has appeared throughout Hyrule's history. Calamity Ganon never leaves Hyrule Castle, and instead sends his hordes of monsters and corrupted Guardians and Divine Beasts in his stead. With Hyrule's biggest weapons turned against them, the castle stood little chance. He likes long swirls along the sides of the castle and menacing shades of purple and black.",
      "bigName": "Calamity Ganon"
    },
    {
      "id": 244,
      "name": "Bokoblin",
      "games": "The Legend of Zelda: The Wind Waker (2002 - Gamecube)",
      "series": "Zelda",
      "description": "These impish creatures have recently become one of the most numerous monsters that roam Hyrule. Their strength comes not only from numbers, but also their intelligence relative to other creatures. They live in primitive, tribal-like groups, can operate rudimentary machinery, employ a variety of weapons, and can even use simple battle tactics. All that said, “intelligence” is a relative term, they’re still not all that bright, so use your superior brain to defeat them.",
      "bigName": "Bokoblin"
    },
    {
      "id": 245,
      "name": "Guardian",
      "games": "The Legend of Zelda: Breath of the Wild (2017 - Switch)",
      "series": "Zelda",
      "description": "These powerful automata were creating by the Sheikah many centuries in the past to protect the kingdom. However, they eventually came to be controlled by Calamity Ganon, and turned against the very people they were made to defend. They can be found both in fully functioning and in broken down states throughout Hyrule. Their powerful lasers can kill most creatures with a single shot, and even level entire towns. On the other hand, that eye is a perfectly vulnerable target.",
      "bigName": "Guardian"
    },
    {
      "id": 246,
      "name": "Tetra",
      "games": "The Legend of Zelda: The Wind Waker (2002 - Gamecube)",
      "series": "Zelda",
      "description": "This pirate leader with attitude takes Link aboard their ship so that he can travel to the Forsaken Fortress to save his kidnapped little sister, Aryll. While she doesn’t quite trust Link at first, she eventually does as she gets to know him better. Concerned for Link’s well-being, she slips the Pirate’s Charm into his pocket so that she can give him advice remotely before launching him in a barrel into the Fortress. Wait a minute... does Tetra look familiar to anyone else?",
      "bigName": "Tetra"
    },
    {
      "id": 247,
      "name": "Zelda (The Wind Waker)",
      "games": "The Legend of Zelda: The Wind Waker (2002 - GameCube)",
      "series": "Zelda",
      "description": "After travelling under the ocean and fighting a massive group of enemies, the King of Red Lions decides it’s safest to keep Princess Zelda in a secret chamber in the undersea palace. Unfortunately, Ganondorf caught on to their plan and kidnapped Zelda from her hiding spot while Link was busy collecting Triforce Shards. Link then needs to use the power of the recharged Master Sword to break the barrier that is blocking the road to Ganondorf’s castle. Princess Zelda also appears to have a twin, as sightings of a similar-looking individual roaming the Great Sea have been reported...",
      "bigName": "Zelda (The Wind Waker)"
    },
    {
      "id": 248,
      "name": "King of Red Lions",
      "games": "The Legend of Zelda: The Wind Waker (2002 - GameCube)",
      "series": "Zelda",
      "description": "This talking boat is Link’s companion for the majority of his adventure. They first meet after Link gets tossed off the top of the Forsaken Fortress, and the King somehow pulls Link out of the water and onto his deck. Link later wakes to the sound of a voice - the voice of his boat! Yes, the King of Red Lions can talk! Despite being a boat, and an excellent means of transportation in a flooded world, the King always has helpful advice for Link or will direct him as to where to go next. The King of Red Lions even has a couple of upgrades as Link acquires new tools, such as a treasure salvage arm and a bomb cannon!",
      "bigName": "King of Red Lions"
    },
    {
      "id": 249,
      "name": "King of Hyrule",
      "games": "The Legend of Zelda: The Wind Waker (2002 - GameCube)",
      "series": "Zelda",
      "description": "Ever wonder how the King of Red Lions got so knowledgeable about the ancient and flooded land of Hyrule? Well it turns out he's more than just a talking boat, his true name is Daphnes Nohansen Hyrule. Yes, the King of Hyrule! Once the Master Sword lost the power to repel evil and all hope seemed to be lost, Daphnes made a desperation move in revealing his true identity to Link and instructing him to rescue the sages that have the ability to return power to the Master Sword. He's putting it all on the line in one last effort to save his kingdom.",
      "bigName": "King of Hyrule"
    },
    {
      "id": 250,
      "name": "Aryll",
      "games": "The Legend of Zelda: The Wind Waker (2002 - GameCube)",
      "series": "Zelda",
      "description": "A cheerful little girl, Link’s younger sister is always in a good mood. In fact, she (and their Grandma!) remembered Link’s birthday when even Link himself forgot about it! Aryll’s birthday gift to Link, the Telescope, is useful for checking up to see if the mailman is doing his job correctly, to spot distant enemies, or to find seagulls circling a Big Octo location. Many enemies in the game carry a similar type of telescope - don’t get spotted!",
      "bigName": "Aryll"
    },
    {
      "id": 251,
      "name": "Medli",
      "games": "The Legend of Zelda: The Wind Waker (2002 - GameCube)",
      "series": "Zelda",
      "description": "Medli is a timid young member of the Rito tribe of bird people and recently became attendant to the great dragon, Valoo. This role was passed to her unexpectedly following the passing of the previous aide, Prince Komali’s grandmother, who chose Medli to be her eventual successor. Link and Medli help each other through the treacherous caverns of Dragon Roost Island, where Medli supplies Link with an ever-useful Empty Bottle. A talent with the harp, Medli assists Link again in the Earth Temple, where Medli leans much about her lineage, and, at the end of the dungeon, her true role in this world.",
      "bigName": "Medli"
    },
    {
      "id": 252,
      "name": "Valoo",
      "games": "The Legend of Zelda: The Wind Waker (2002 - GameCube)",
      "series": "Zelda",
      "description": "Valoo, also known as the \"Spirit of the Skies\", sits atop the highest mountain in Dragon Roost Island. How do you think it got that name? When the Rito people reach a certain age, they journey up this mountain to be granted a special scale that allows them to grow their wings. However, lately Valoo has been enraged and far too panicked to bestow his scales onto anyone. Something awful must be happening to bring him so much pain! Could this be Ganondorf's doing?",
      "bigName": "Valoo"
    },
    {
      "id": 253,
      "name": "Beedle",
      "games": "The Legend of Zelda: The Wind Waker (2002 - Gamecube)",
      "series": "Zelda",
      "description": "Beedle is a traveling merchant who sells goods to travelers in need. He has a polite demeanor, and even provides discounts and benefits to preferred customers who visit his store frequently. His stores usually vary in appearance, from being in a boat to becoming a nomad. Rest assured though that he'll still have whatever you may need. He is also very fond of beetles, and will offer items to trade in exchange for them.",
      "bigName": "Beedle"
    },
    {
      "id": 254,
      "name": "Fishman",
      "games": "The Legend of Zelda: The Wind Waker (2002 - Gamecube)",
      "series": "Zelda",
      "description": "As you explore the vast ocean, you may eventually feel lost, so who better to ask for information than a fish? These artistic fish people can be found swimming around under the surface, but if you throw some All-Purpose Bait at them, they’ll come up to eat it and talk to you. As a reward for the food, they’ll paint the nearest island on your Sea Chart and give you some info on it.",
      "bigName": "Fishman"
    },
    {
      "id": 255,
      "name": "Vaati",
      "games": "The Legend of Zelda: Four Swords (2002 - GBA)",
      "series": "Zelda",
      "description": "Vaati is the main villain from The Legend of Zelda: The Minish Cap who becomes greedy with power after learning about the existence of the Light Force. He turns Princess Zelda to stone to avoid having her interfere with his plans, and impersonates King Daltus to try and have the King’s soldiers find the Light Force for him. Vaati can only be defeated with the powerful Four Sword that Link acquired during his adventure.",
      "bigName": "Vaati"
    },
    {
      "id": 256,
      "name": "Ezlo",
      "games": "The Legend of Zelda: The Minish Cap (2003 - GBA)",
      "series": "Zelda",
      "description": "This cheery cap chap accompanies Link throughout most of his adventure after Link saves him from being beat up by Octoroks. Ezlo, due to his lack of legs, can’t move very far by himself, so he hops on Link’s head for a ride. As your adventure companion, Ezlo is always willing to offer you advice on what to do or where to go next, and is even more willing to offer up some wisecracks about Link along the way. Ezlo has a great sense of humor, and is more than glad to help Link - offering him the ability to down to Minish size to access otherwise inaccessible places - since Ezlo needs Link’s help to complete a quest of his own.",
      "bigName": "Ezlo"
    },
    {
      "id": 257,
      "name": "Linebeck",
      "games": "The Legend of Zelda: Phantom Hourglass (2007 - DS)",
      "series": "Zelda",
      "description": "Linebeck is an old sea-dog who lives for treasure. He first cross paths with Link when the young hero saves him from a trap in the Temple of the Ocean King. Links needs his help to search for the Ghost Ship, but the sailor is too much of a coward to go on such a quest – until he hears that a big treasure is involved. Link and he then depart to the ocean, sailing on Linebeck’s steamship, the S.S.Linebeck. Can you tell he has a bit of an ego?",
      "bigName": "Linebeck"
    },
    {
      "id": 258,
      "name": "Phantom",
      "games": "The Legend of Zelda: Phantom Hourglass (2007 - DS)",
      "series": "Zelda",
      "description": "These animated sets of armor guard both the Temple of the Ocean King and the Tower of Spirits. Their sturdy armor is nearly impenetrable, so fighting them is not an option for Link, so he’ll have to sneak by undetected. Luckily, there are ways for Link to make this easier. He can use certain items to stun them, make noise to distract them, making them fall on traps, or simply hiding in safe zones.",
      "bigName": "Phantom"
    },
    {
      "id": 259,
      "name": "Zelda (Spirit Tracks)",
      "games": "The Legend of Zelda: Spirit Tracks (2009 - DS)",
      "series": "Zelda",
      "description": "From fairies, to imps, to sword spirits, to talking hats, Link has had numerous companions throughout the years, but after almost 20 years he actually teamed up with Zelda! Unfortunately, Zelda isn’t quite all there. The evil Chancellor Cole separated Zelda’s spirit from her body, and now, only Link can see her! Fortunately, Zelda’s new ghostly look has its advantages, as she can use it to control the powerful Phantoms.",
      "bigName": "Zelda (Spirit Tracks)"
    },
    {
      "id": 260,
      "name": "Alfonzo & Engineer Link",
      "games": "The Legend of Zelda: Spirit Tracks (2009 - DS)",
      "series": "Zelda",
      "description": "Who’d have thought that Link had a degree in railroad engineering? Actually, he didn’t go to college for one, instead, he studied under the Master Engineer Alfonzo. A former soldier and master swordsman, Alfonzo eventually became a train engineer and mentored Link in the craft. As the Royal Engineers, Link and Alfonzo are responsible for transporting goods and people across Hyrule, so if you need someone to take you through the kingdom, leave it to them!",
      "bigName": "Alfonzo & Engineer Link"
    },
    {
      "id": 261,
      "name": "Byrne",
      "games": "The Legend of Zelda: Spirit Tracks (2009 - DS)",
      "series": "Zelda",
      "description": "Byrne is the right-hand man of Chancellor Cole, New Hyrule’s chancellor, who is actually an evil demon in disguise. Though he was once a member of the Lokomos tribe, Byrne eventually turned away from serving the Spirits of Good to instead serve Cole and the Demon King, Malladus. His strength comes from the gauntlet on his left hand, which also double as a Hookshot",
      "bigName": "Byrne"
    },
    {
      "id": 262,
      "name": "Totem Link",
      "games": "The Legend of Zelda: Tri Force Heroes (2015 - 3DS)",
      "series": "Zelda",
      "description": "In The Legend of Zelda: Tri Force Heroes, you play as not one, not two, but three separate Links! Unlike the Link that was split by the Four Sword, these Links are three individual heroes. While exploring or battling, these Links can climb on each other’s shoulders, forming stacks that are two to three Links tall, in order to fight taller monsters or solve puzzles. This trick isn’t exclusive to the Links though, so watch out for totems of enemies as well.",
      "bigName": "Totem Link"
    },
    {
      "id": 263,
      "name": "Madame Couture",
      "games": "The Legend of Zelda: Tri Force Heroes (2015 - 3DS)",
      "series": "Zelda",
      "description": "In the fashion-forward kingdom of Hytopia, one designer’s name stands taller than the rest: Madame Couture. This stylish lady runs a self-titled boutique in which she provides adventurers with outfits that are both imbued with useful magic and, most importantly, very fashionable. Her sister, Lady Maud, put a curse on the Hytopian princess Styla, and Couture then aided the Witch-Hunting Brigade in stopping her.",
      "bigName": "Madame Couture"
    },
    {
      "id": 264,
      "name": "Samus Aran",
      "games": "Metroid (1986 - NES)",
      "series": "Metroid",
      "description": "The galaxy's most famous bounty hunter. Born on the Earth colony of K-2L, she lost her parents when the Space Pirates attacked her home, and was then taken into care by the Chozo. She was given her Power Suit to protect others for the good of the galaxy. Later on in life, she became a galaxy-renowned bounty hunter and was tasked by the Galactic Federation to destroy Mother Brain and her cohorts. Thus, began a long struggle with the Space Pirates.",
      "bigName": "Samus Aran"
    },
    {
      "id": 265,
      "name": "Dark Samus",
      "games": "Metroid Prime (2002 - Gamecube)",
      "series": "Metroid",
      "description": "After Samus defeats Metroid Prime, the creature reaches out for Samus in its dying moments. managing to tear off her Phazon Suit. The remains of Prime combined with the suit to create Dark Samus, a replica of the famous bounty hunter comprised entirely out of phazon, who is capable of brainwashing victims and cloning herself. Dark Samus lacks a motive, merely seeking power",
      "bigName": "Dark Samus"
    },
    {
      "id": 266,
      "name": "Zero Suit Samus",
      "games": "Metroid: Zero Mission (2004 - GBA)",
      "series": "Metroid",
      "description": "After fighting Mother Brain in the depths of Zebes, Samus assumes that it's all over, until she is shot down by the Space Pirates. Now left with just her Zero Suit and an emergency pistol, she must now stealthily move her way through the base to get her suit back and get out of this place for good. Unfortunately, her pistol doesn't prove helpful, only briefly stunning enemies, so your best bet is to get moving and get your suit back.",
      "bigName": "Zero Suit Samus"
    },
    {
      "id": 267,
      "name": "Ridley",
      "games": "Metroid (1986 - NES)",
      "series": "Metroid",
      "description": "The leader of the Space Pirates military, Ridley murdered Samus's parents on the colony of K-2L. He may appear as a mindless pterodactyl, but he's a leader for a reason. Ridley is a highly intelligent and sadistic creature, killing for the mere thrill of it, ever since the incident. Samus has clashed with Ridley on numerous occasions, but no matter how hard she tries to get rid of him, he always comes back somehow.",
      "bigName": "Ridley"
    },
    {
      "id": 268,
      "name": "Meta Ridley",
      "games": "Metroid Prime (2002 - Gamecube)",
      "series": "Metroid",
      "description": "After his death in the depths of Norfair, the Space Pirates on Zebes recovered his remains and revived him by making him into a cybernetic organism. While painful for him, these enhancements increased Ridley's abilities tremendously. He is first encountered in the Artifact Temple, but alas, even with his enhancements, he stood no chance against Samus.",
      "bigName": "Meta Ridley"
    },
    {
      "id": 269,
      "name": "Gravity Suit",
      "games": "Super Metroid (1994 - SNES)",
      "series": "Metroid",
      "description": "One of the classic upgrades to Samus’ Power Suit, the Gravity Suit’s main attribute is its ability to allow Samus to negate extreme gravitational effects, or the resistance of certain environments. This means that Samus can move in the vacuum of space or deep underwater, as if she were on the planet’s surface. To top it off, it also has higher defense capabilities than even the Varia Suit, and can sometimes completely shield Samus from magma.",
      "bigName": "Gravity Suit"
    },
    {
      "id": 270,
      "name": "Fusion Suit",
      "games": "Metroid Fusion (2002 - GBA)",
      "series": "Metroid",
      "description": "The Fusion Suit is merely what’s left of Samus’ Power Suit after an attempted surgery. When Samus was infected with the X Parasite, Federation doctors tried to treat her, but could not remove her suit, as its biological components had bonded with her. After removing what they could, the doctors gave her a vaccine made from Metroid DNA. Though much weaker than the original suit in many regards, it has the ability to convert X Parasites to energy and missiles",
      "bigName": "Fusion Suit"
    },
    {
      "id": 271,
      "name": "Phazon Suit",
      "games": "Metroid Prime (2002 - Gamecube)",
      "series": "Metroid",
      "description": "This Power Suit upgrade may look cool, but it’s actually the result of Phazon infection, after Samus defeated the Omega Pirate in Tallon IV. Other than its new look, the suit could also provide greater defense, as well as protection from blue Phazon radiation. Most importantly, it allowed Samus to channel Phazon energy to fire an extremely powerful Phazon Beam, the strongest weapon in her arsenal.",
      "bigName": "Phazon Suit"
    },
    {
      "id": 272,
      "name": "Dark Suit",
      "games": "Metroid Prime 2: Echoes (2004 - Gamecube)",
      "series": "Metroid",
      "description": "On the rogue planet Aether, live a race of advanced aliens called the Luminoth. After a Leviathan, a living meteor from the planet Phaaze, crashed on Aether, it caused a dimensional rift which created a twisted, lethal version of the planet, called Dark Aether. The Luminoth created the Dark Suit to withstand this new world’s poisonous atmosphere, but it seems to fit Samus quite well.",
      "bigName": "Dark Suit"
    },
    {
      "id": 273,
      "name": "Light Suit",
      "games": "Metroid Prime 2: Echoes (2004 - Gamecube)",
      "series": "Metroid",
      "description": "This is the ultimate armor created by the Luminoth to combat the Ing, a race of shapeshifters from Dark Aether. It was created through a combination of Luminoth and Chozo technology, and is power by the Light of Aether, an energy source that comes from the planet itself. This suit allows its wearer to safely traverse Dark Water and Ingstorm, as well as use the Light Shafts that connect the four temples.",
      "bigName": "Light Suit"
    },
    {
      "id": 274,
      "name": "Young Samus",
      "games": "Metroid: Other M (2010 - Wii)",
      "series": "Metroid",
      "description": "Samus as she used to look during her time as a cadet in the Federation, as shown in Metroid: Other M. After leaving the Chozo she enrolled in the Federation Army and eventually went to serve under Commander Adam Malkovich, with whom she developed a strong bond, along with her teammates Anthony and Ian, Adam’s brother. However, after Adam sacrificed Ian to save 300 innocents, Samus left the army to work as a lone bounty hunter.",
      "bigName": "Young Samus"
    },
    {
      "id": 275,
      "name": "Geemer",
      "games": "Metroid (1986 - NES)",
      "series": "Metroid",
      "description": "Geemers are little alien bugs that can be found on many planets, including Zebes and Tallon IV. They can usually be found clinging to and moving along walls in search for food, and are normally not immediately hostile, though their spiked, hardened carapace can cause some pain if you were to bump into it. Geemers are also sometimes called Zoomers, although there is debate over whether they are the same creature, or different variants of the same species.",
      "bigName": "Geemer"
    },
    {
      "id": 276,
      "name": "Chozo Statue",
      "games": "Metroid (1986 - NES)",
      "series": "Metroid",
      "description": "These statues depicting a sitting Chozo are some of the most well-known architectural remnants of that great civilization. They can be found on most planets which used to be inhabited by the Chozo, such as Zebes and Tallon IV. Most of the time, these statues simply hold items which Samus can use, but some of them have been outfitted for defense and will stand up and attack intruders.",
      "bigName": "Chozo Statue"
    },
    {
      "id": 277,
      "name": "Metroid",
      "games": "Metroid (1986 - NES)",
      "series": "Metroid",
      "description": "Samus has encountered these foes time and time again. They have been used as biological weapons by the Space Pirates, they have been corrupted by Phazon, and so on. This stage of the life cycle, the most iconic, always falls the same way: Freeze with the Ice Beam, than shatter with a Super Missile. However, this is but one of the stages; the larval stage. From here, they become Alpha Metroids, Gamma Metroids, Zeta Metroids, and finally, Omega Metroids. Each of these forms have their own strengths and weaknesses, but they each want to drain the energy out of other living creatures. There’s something profoundly unnatural about them, though…",
      "bigName": "Metroid"
    },
    {
      "id": 278,
      "name": "Mother Brain",
      "games": "Metroid (1986 - NES)",
      "series": "Metroid",
      "description": "A cold, soulless AI created by the Chozo. However, when Ridley and his gang of Space Pirates infiltrated Zebes, Mother Brain saw potential in them, and decided to side with them instead. She saw that order could be brought to the universe by \"resetting everything back to zero.\" Despite her prominent role in the Space Pirates, it is unknown if Mother Brain is their supreme leader, considering that Ridley was with the team far longer.",
      "bigName": "Mother Brain"
    },
    {
      "id": 279,
      "name": "Mother Brain (2nd Form)",
      "games": "Super Metroid (1994 - SNES)",
      "series": "Metroid",
      "description": "Surely the next time we fight Mother Brain, it'll go down the same, right? Wrong, once you think you've won, she rises with a new body and terrifying screech. You can wail on it all you want, but nothing you can hit it with will bring it down. The beast will pelt you with rainbow beams from its eye. If only there was someone or something that could help out right about now.",
      "bigName": "Mother Brain (2nd Form)"
    },
    {
      "id": 280,
      "name": "Gunship",
      "games": "Metroid II: Return of Samus (1990 - Game Boy)",
      "series": "Metroid",
      "description": "Every bounty hunter needs a way to get around the galaxy, and Samus is no exception. While it serves its main purpose well, Samus also uses the gunship as a base of operations, with it being able to refuel your suit and replenish missiles. She has used many different ships over the years, eachh each one resembling her helmet. Despite the name of the ship, we never actually see it do any shooting.",
      "bigName": "Gunship"
    },
    {
      "id": 281,
      "name": "Queen Metroid",
      "games": "Metroid II: Return of Samus (1991 - Game Boy)",
      "series": "Metroid",
      "description": "The largest member of the Metroid species. As their Queen, it is the only one capable of reproduction, meaning that if this behemoth dies, the Metroid species goes with it. It is said that it is the last stage of the Metroid's life cycle, coming after the Omega Metroid, The creature's main weakness is it's stomach, so if Samus is somehow eaten by the creature, a single power bomb should be sufficient enough to finish the job.",
      "bigName": "Queen Metroid"
    },
    {
      "id": 282,
      "name": "Zebesian",
      "games": "Super Metroid (1994 - SNES)",
      "series": "Metroid",
      "description": "The inhabitants of planet Zebes. These crustacean-like creatures make up a good chunk of the Space Pirates's grunts. Despite their name, they weren't the original denizens of Zebes, merely conquering the planet after wiping out the Chozo on there. The Zebesians come in many variants, from the highly athletic Silver Space Pirates to the aquatic Pink Space Pirates. Each one has a different way to take them down, rest assured that they're no match for Samus.",
      "bigName": "Zebesian"
    },
    {
      "id": 283,
      "name": "Kraid",
      "games": "Metroid (1986 - NES)",
      "series": "Metroid",
      "description": "The biggest member of the Space Pirates, in almost every confrontation with him, he takes up more than half of the screen. His ranking in the Space Pirates is unknown, but judging by his prominent appearances in the series, he is likely pretty high up there (no pun intended). He is capable of shooting the spikes on his stomach for attacks, but this often backfires as Samus will use these as platforms to blast him in the head. He also appears as a stage hazard on the Brinstar Depths stage, where he will swipe at the stage, changing its layout.",
      "bigName": "Kraid"
    },
    {
      "id": 284,
      "name": "Phantoon",
      "games": "Super Metroid (1994 - SNES)",
      "series": "Metroid",
      "description": "A spectral entity that has an intangible body. Leaving it invulnerable to damage. The only part that can be harmed is his eye. When open, it connects Phantoon's body to the mortal world. Which allows him to be damaged, he feeds off of raw energy, which attracts it to abandoned ships. Phantoon's connection to the Space Pirates is unknown.",
      "bigName": "Phantoon"
    },
    {
      "id": 285,
      "name": "X Parasite",
      "games": "Metroid Fusion (2002 - GBA)",
      "series": "Metroid",
      "description": "This parasitic organism from SR388 can infect, kill, and mimic its hosts. After Samus exterminated their only predator, the Metroids, the X came back at the top of the food chain. Soon enough, Samus ends up being infected, but is subsequently cured by a Metroid-based vaccine. Unfortunately, the X spread through the B.S.L. Research Station, leaving Samus as the only survivor.",
      "bigName": "X Parasite"
    },
    {
      "id": 286,
      "name": "Nightmare",
      "games": "Metroid Fusion (2002 - GBA)",
      "series": "Metroid",
      "description": "Created by the B.S.L. Research Station as a biomechanical weapon, the appropriately-named Nightmare roams around in the sub-zero Sector 5 (ARC), held in captivity. Infected by the X, it eventually breaks out and corners Samus. Nightmare can manipulate gravity, rendering missiles unusable. Its ominous mask hides a grotesque face.",
      "bigName": "Nightmare"
    },
    {
      "id": 287,
      "name": "Mecha Ridley",
      "games": "Metroid: Zero Mission (2004 - GBA)",
      "series": "Metroid",
      "description": "An incomplete robotic replica of Ridley built by the pirate himself. It was never finished, leaving its walking and flying components missing. The robot was meant to watch over the ship while Ridley was gone. However Samus comes in and ends up confronting the mechanical doppelganger, leaving it as nothing more than a heap of scrap metal. One of Ridley's alternate costumes is based on this robot.",
      "bigName": "Mecha Ridley"
    },
    {
      "id": 288,
      "name": "Adam Malkovich",
      "games": "Metroid Fusion (2002 - GBA)",
      "series": "Metroid",
      "description": "You are not authorized to view this description. Just kidding! Adam Malkovich was a commander to the Galactic Federation Army. A celebrated military genius, he was Samus Aran’s Commanding Officer during her time in the Galactic Federation. He may have been harsh and quick to criticize but behind it all, was a brilliant man who earned Samus’ respect. Besides, he always made sure to ask if Samus had any objections.",
      "bigName": "Adam Malkovich"
    },
    {
      "id": 289,
      "name": "Little Birdie",
      "games": "Metroid: Other M (2010 - Wii)",
      "series": "Metroid",
      "description": "This little fuzzy thing was one of the many creatures bred on the BOTTLE SHIP to be used as bioweapons by the Galactic Federation. The ringleaders of the operation didn't think Little Birdie (as they dubbed it) would be of much use for that, so they treated him as their pet. That was a lethal mistake. Little Birdie may appear cute, but its actually cunning and cruel, and brutally murders its victims. It's only a baby, imagine how frightening it'll be when it grows up.",
      "bigName": "Little Birdie"
    },
    {
      "id": 290,
      "name": "Diggernaut",
      "games": "Metroid: Samus Returns (2017 - 3DS)",
      "series": "Metroid",
      "description": "The Diggernaut is an ancient mining robot created by the Chozo in order to dig out tunnels in the Metroid homeworld of SR388 to aid in the Chozo’s settlement of the planet. However, something went wrong, and the Diggernaut malfunctioned and went rogue. Once Samus arrives on the planet to wipe out the Metroids, the Diggernaut reawakens and begins to chase her throughout the tunnels.",
      "bigName": "Diggernaut"
    },
    {
      "id": 291,
      "name": "Omega Ridley",
      "games": "Metroid Prime 3: Corruption (2007 - Wii)",
      "series": "Metroid",
      "description": "After his defeat on Norion, Ridley was exposed to the Phazon Core, making him even more resilient and dangerous. Now with Phazon-enhanced armorskin, he can tank far more hits, but the Phazon didn't heal one thing: an injury on his chest that never recovered from his previous defeat. He will try his hardest to keep it covered, but once he forgets, let him have it!",
      "bigName": "Omega Ridley"
    },
    {
      "id": 292,
      "name": "Parasite Queen",
      "games": "Metroid Prime (2002 - GameCube)",
      "series": "Metroid",
      "description": "A parasite that was mutated from an experiment by the Space Pirates. Aside from an obvious increase in size, this creature also has stronger jaws with acidic sacs around it. The mouth is also its only weak spot. Its tail ends in a large orifice that is presumably used to make more offspring. The first one Samus encounters lurks in the Reactor Core of the Frigate Orpheon, and you can also find it in the stage of the same name in Super Smash Bros.",
      "bigName": "Parasite Queen"
    },
    {
      "id": 293,
      "name": "Kanden",
      "games": "Metroid Prime Hunters (2006 - DS)",
      "series": "Metroid",
      "description": "A hunter that was created in a lab experiment, the goal of which was to create a powerful, invincible Hunter. Something went wrong during the experiment though, and Kanden escaped to seek the \"Ultimate Power.\" He is surrounded by an electromagnetic field, as well as possessing the Volt Driver, a weapon that shoots charged blasts that can disrupt Samus's visor. He can also turn his body into a small snake-like organism, allowing him to evade capture.",
      "bigName": "Kanden"
    },
    {
      "id": 294,
      "name": "Trace",
      "games": "Metroid Prime Hunters (2006 - DS)",
      "series": "Metroid",
      "description": "A member of the Kriken Empire, a race that searches for planets to invade. He has no thoughts of remorse, only thinking about bringing supremacy to the Krikens and to honor himself. He can also turn into the Triskelion, a three-legged war machine. While it makes him smaller, he is far more dangerous in this form, giving him quicker speed and the ability to turn invisible when not moving.",
      "bigName": "Trace"
    },
    {
      "id": 295,
      "name": "Gandrayda",
      "games": "Metroid Prime 3: Corruption (2007 - Wii)",
      "series": "Metroid",
      "description": "A bounty hunter of unknown origin, she possesses metamorphic abilities, which she often uses to mess with others. Her base form is a purple humanoid. She views bounty hunting more as a sport and considers Samus her rival. While capable in combat, she's most often given stealth and espionage missions due to her shapeshifting abilities.",
      "bigName": "Gandrayda"
    },
    {
      "id": 296,
      "name": "Mech",
      "games": "Metroid Prime: Federation Force (2016 - 3DS)",
      "series": "Metroid",
      "description": "These suits of armor are used exclusively by the Federation Force. Modeled after Samus Aran's power suit, the suits were created during Project Golem, which was the Galactic Federation's effort to crack down on the Space Pirates after the eradication of Phazon. While the suits resemble Samus's own power suit, they are much bulkier, which prevents them from using some of Samus's abilities like the Space Jump. On their spare time, most marines in these suits often play a nice game of Blast Ball.",
      "bigName": "Mech"
    },
    {
      "id": 297,
      "name": "Yoshi",
      "games": "Super Mario World (1990 – SNES)",
      "series": "Yoshi",
      "description": "The Yoshi is a smaller-sized subspecies of dinosaur native to Yoshi’s Island and certain areas of the Mushroom Kingdom. The Yoshi distinguishes itself from other species of dinosaurs by its long tongue capable of stretching for great lengths. With its tongue, the Yoshi enjoys an omnivorous diet consisting of fruits such as watermelons and small creatures such as Shy Guys and Koopa Troopas. The Yoshi also has an incredibly efficient digestive system, being able to break down most of what it consumes in mere seconds. Whatever has been digested can be laid as eggs and used in combat, an ability both genders are capable of.",
      "bigName": "Yoshi"
    },
    {
      "id": 298,
      "name": "Yoshi (Yoshi's Crafted World)",
      "games": "Yoshi's Crafted World (2019 - Switch)",
      "series": "Yoshi",
      "description": "This plush-looking version of Yoshi stars in Yoshi’s Crafted World, where he and other Yoshis attempt to retrieve the gems of the wish-granting Sundream Stone, after Kamek and Baby Bowser tried to steal it. Yoshi explores a world that seems hand-crafted with materials such as cardboard and paper, and for the first time, solve puzzle and defeating enemies with eggs thrown at the background or foreground.",
      "bigName": "Yoshi (Yoshi's Crafted World)"
    },
    {
      "id": 299,
      "name": "Baby Mario",
      "games": "Super Mario World 2: Yoshi´s Island (1995 - SNES)",
      "series": "Yoshi",
      "description": "Awww! It's Mario as a baby. Before fighting Bowser and rescuing Peach, Mario was just a little baby. When he was born, a stork carrying him and Luigi was attacked by Toadies and Mario was sent hurdling down to Yoshi Island. Thankfully the Yoshis protected him and stopped Bowser. Since then Mario and the Yoshis have been great friends (even when battling).",
      "bigName": "Baby Mario"
    },
    {
      "id": 300,
      "name": "Baby Mario (Superstar Mario)",
      "games": "Super Mario World 2: Yoshi's Island (1995 - SNES)",
      "series": "Yoshi",
      "description": "We all know what happens when Mario collects a Super Star as an adult: the familiar tune plays and Mario becomes invincible. Strangely enough, Mario got a way better deal if he picked it up when he was a baby. Aside from invincibility, he’d instantly learn how to walk, and not only that, he’d be so fast he could run up walls or on the ceiling! How come he can’t do that as a grown up?",
      "bigName": "Baby Mario (Superstar Mario)"
    },
    {
      "id": 301,
      "name": "Baby Bowser",
      "games": "Super Mario World 2: Yoshi´s Island (1995 - SNES)",
      "series": "Yoshi",
      "description": "The King of the Koopas was a rotten egg even when he was just a baby. Nevertheless, it was his caretaker Kamek who plotted the evil schemes back then, Bowser was just a bratty, spoiled kid. He’s not to be underestimated though, with a little help from Kamek’s magic, he could grow to gargantuan sizes. By the way, don’t confuse Baby Bowser with Bowser Jr. The former is Bowser as a baby, the latter is Bowser’s son.",
      "bigName": "Baby Bowser"
    },
    {
      "id": 302,
      "name": "Stork",
      "games": "Super Mario World 2: Yoshi's Island (1995 - SNES)",
      "series": "Yoshi",
      "description": "This hard-working bird is in charge of delivering Mario and Luigi to their expecting parents, but Kamek and the Toadies attacked him on the way, kidnapping him and Baby Luigi. Storks would later help out the Yoshis and the Star Children after Kamek kidnaps all babies from the Mushroom Kingdom. Of course, they later returned the babies to their respective homes. Can you imagine if a stork delivered babies to the wrong house? That’d be embarrassing.",
      "bigName": "Stork"
    },
    {
      "id": 303,
      "name": "Toadies",
      "games": "Super Mario World 2: Yoshi's Island (1995 - SNES)",
      "series": "Yoshi",
      "description": "Toadies are the loyal flying minions of Kamek, ready to assist on all baby-snatching schemes. They usually fly on groups of four and don’t directly attack Yoshi, but if he drops a baby and takes too long to recover them, BAM, the toadies appear to take the child away. They can’t be attacked, so the only way to stop them is to beat them to the punch. As if Baby Mario’s cry wasn’t incentive enough to get him back quickly.",
      "bigName": "Toadies"
    },
    {
      "id": 304,
      "name": "Crazee Dayzee",
      "games": "Super Mario World 2: Yoshi's Island (1995 - SNES)",
      "series": "Yoshi",
      "description": "These flower-like enemies are fairly harmless creatures that inhabit Yoshi’s Island. Really, outside of their appearance, they aren’t too different from Shy Guys, and mostly just walk back and forth. They are tougher however, and can survive being eaten and spat out. Some variations are more aggressive, relatively speaking, and can spit out bubbles or put enemies to sleep.",
      "bigName": "Crazee Dayzee"
    },
    {
      "id": 305,
      "name": "Tap-Tap",
      "games": "Super Mario World 2: Yoshi's Island (1995 - SNES)",
      "series": "Yoshi",
      "description": "Tap tap tap tap tap. These spiky enemies are named after the distinctive clinking noise they make when they tap their feet. They grin like that because they know they’re tough to defeat, Yoshi will need more than a tongue or an egg to beat them. In fact, one of them, Tap-Tap the Red Nose, after being enchanted by Kamek, became so strong as to be completely impervious to attacks!",
      "bigName": "Tap-Tap"
    },
    {
      "id": 306,
      "name": "Bandit",
      "games": "Super Mario World 2: Yoshi's Island (1995 - SNES)",
      "series": "Yoshi",
      "description": "You’d expect Yoshi’s Island to be a peaceful, crime-free place, but it’s actually full of larcenous bandits, they even have an entire valley named after them. It’d be one thing if they just took your coins, but they actually try to ambush Yoshi and kidnap whichever baby he is carrying. To top it off, they’re really tough; it takes six eggs just to get rid of one! They also compete in various minigames, and you can net many handy items if you win.",
      "bigName": "Bandit"
    },
    {
      "id": 307,
      "name": "Slugger & Green Glove",
      "games": "Super Mario World 2: Yoshi's Island (1995 - SNES)",
      "series": "Yoshi",
      "description": "These two enemies form a duo called The Baseball Boys, and they utilize techniques of their favorite sport in the battle against Yoshi. The yellow Sluggers will bat any Yoshi eggs thrown at them, while the Green Gloves will catch them and pitch them back at their target. However, a clever Yoshi might use them to their advantage. These guys may be the key to catch a Smiley Flower or Winged Cloud that’s just out of reach.",
      "bigName": "Slugger & Green Glove"
    },
    {
      "id": 308,
      "name": "Little Mouser",
      "games": "Super Mario World 2: Yoshi's Island (1995 - SNES)",
      "series": "Yoshi",
      "description": "Bandits aren’t the only thieving rascals that roam around Yoshi’s Island, these mice also try to ambush unsuspecting Yoshis in order to rob them. Unlike Bandits, however, they won’t try to snatch your baby, merely your eggs, so it’s not as bad. But on the other hand, if eggs contain babies, then it’s just as bad! But on the other, other hand, if that’s the case, maybe it’s better for the baby to be stolen by a mouse than flung at an enemy.",
      "bigName": "Little Mouser"
    },
    {
      "id": 309,
      "name": "Grim Leecher",
      "games": "Super Mario World 2: Yoshi's Island (1995 - SNES)",
      "series": "Yoshi",
      "description": "Grim Leechers are spooky ghost-like enemies that haunt Yoshi’s Island. They will stay put if you’re far away, but if you come close, they will hover toward you until they catch you. This is where the leeching comes in, once they touch a Yoshi, they’ll kick Baby Mario off and take their place. As if that wasn’t bad enough, Yoshi’s controls will be reversed, making it even harder to get Baby Mario back.",
      "bigName": "Grim Leecher"
    },
    {
      "id": 310,
      "name": "Roger the Potted Ghost",
      "games": "Super Mario World 2: Yoshi's Island (1995 - SNES)",
      "series": "Yoshi",
      "description": "Roger was just a regular, lifeless flower pot, but once Blue Yoshi reached its castle, Kamek used his magic to transform it into a huge ghost. Roger may be immobile, but he can push Yoshi away and breathe homing flames. To top it off, he can’t be harmed by Yoshi eggs, so the only way to defeat him, is to push him off the edge. There are a couple of Shy Guys tasked with protecting him, but they aren’t very strong.",
      "bigName": "Roger the Potted Ghost"
    },
    {
      "id": 311,
      "name": "Burt the Bashful",
      "games": "Super Mario World 2: Yoshi's Island (1995 - SNES)",
      "series": "Yoshi",
      "description": "This was a regular Burt that was made giant by Kamek’s magic. His size makes him more threatening, but his battle tactics remained the same, just jump around and hope to hurt Yoshi. However, his pants are a bit loose, so if you throw some eggs at him, they’ll fall off a bit. Once they’re gone, he’ll be so embarrassed he will run off and, well, explode. Look, I know it’s embarrassing, but that seems like an overreaction.",
      "bigName": "Burt the Bashful"
    },
    {
      "id": 312,
      "name": "Raphael the Raven",
      "games": "Super Mario World 2: Yoshi's Island (1995 - SNES)",
      "series": "Yoshi",
      "description": "The leader of the Ravens of Yoshi’s Island, he was of ordinary size until Kamek magically enlarged him in order to defeat Yoshi. He became so strong he could even launch Yoshi to the moon, where they then fought. He never returned to his regular size, but he did mend his ways and led a group of reformed ravens to Lavalava Island. There, he’d even come to help and adult Mario out.",
      "bigName": "Raphael the Raven"
    },
    {
      "id": 313,
      "name": "Super Happy Tree",
      "games": "Yoshi’s Story (1997 - Nintendo 64)",
      "series": "Yoshi",
      "description": "The mystical Super Happy Tree is found on Yoshi’s Island and grows every possible kind of fruit, from the basic apples and bananas to the mystical Heart Fruit! However, right before six baby Yoshis hatch, Baby Bowser steals the tree! The baby Yoshis immediately set about returning it. In Smash Bros., you even fight in front of the tree!",
      "bigName": "Super Happy Tree"
    },
    {
      "id": 314,
      "name": "Pak E. Derm",
      "games": "Yoshi’s Story (1997 - Nintendo 64)",
      "series": "Yoshi",
      "description": "Pak E. Derm won’t let Yoshi pass, as the big stop sign that they’re holding shows. But, the Yoshis cannot jump over them either, as the stop signs are solid. How do you get them to go away? As an old rhyme says, Pak E. Derm won’t let you by until you give something special a try.” What could that mean? Pak E. Derm may only appear in the first level, but you can see one wandering around in the background of the Yoshi’s Story stage with its trademark stop sign.",
      "bigName": "Pak E. Derm"
    },
    {
      "id": 315,
      "name": "Blargg",
      "games": "Super Mario World (1990 - SNES)",
      "series": "Yoshi",
      "description": "When you see eyes peeking out from the lava, watch out, because there’s a Blargg just waiting to come out. They will lurk below the surface until Mario, Luigi, or Yoshi come near and then they will attack. They do have several variants with different behavior, such as the Magmaargh. Did you know, though, that adult Yoshi can stand on them and eat them? Blarggs are mostly found in the caves beneath Yoshi’s Island.",
      "bigName": "Blargg"
    },
    {
      "id": 316,
      "name": "Don Bongo",
      "games": "Yoshi’s Story (1997 - Nintendo 64)",
      "series": "Yoshi",
      "description": "Don Bongo is the third fierce boss that the Baby Yoshis must face in order to reclaim the Super Happy Tree. Don Bongo himself can’t hurt the Yoshis, as they bounce off his blubber, but the pots and pans that rain down whenever Don Bongo steps certainly can. Deliver him three smacks to the lips, and the Yoshis can move on to World 4.",
      "bigName": "Don Bongo"
    },
    {
      "id": 317,
      "name": "Hongo",
      "games": "Yoshi Topsy-Turvy (2004 - GBA)",
      "series": "Yoshi",
      "description": "Hongo is the spirit in control of the Forbidden Pop-Up Book. When Bowser starts wreaking havoc on Yoshi’s Island, Hongo tries to seal Bowser in the book. He does, but he also seals the entirety of Yoshi’s Island and everyone on it! He will not let anyone out for fear of releasing Bowser, so Yoshi must adventure through the pop-up book to find another place to seal Bowser.",
      "bigName": "Hongo"
    },
    {
      "id": 318,
      "name": "Spirit Who Loves Surprises",
      "games": "Yoshi Topsy-Turvy (2004 - GBA)",
      "series": "Yoshi",
      "description": "This spirit loves surprises, and is one of the Yoshi Island Spirits. He used to be Hongo’s assistant before being fired for being unable to keep a secret. He convinces Yoshi to go defeat Bowser to get Yoshi’s Island removed from the pop-up book. He gives Yoshi the power to tilt the entire world, but Yoshi tests it by moving a boulder straight into the Spirit Who Loves Surprises!",
      "bigName": "Spirit Who Loves Surprises"
    },
    {
      "id": 319,
      "name": "Mega Eggdozer",
      "games": "Yoshi's New Island (2014 - 3DS)",
      "series": "Yoshi",
      "description": "When a Yoshi swallows a Mega Guy, instead of a normal Yoshi Egg, they get a Mega Eggdozer! If Yoshi has one, he cannot have any other eggs, and his Flutter Jump is limited. On the plus side, this gargantuan eggs can break blocks and defeat most enemies. There is also a smaller variant called a Metal Eggdozer used to make Yoshi sink in water.",
      "bigName": "Mega Eggdozer"
    },
    {
      "id": 320,
      "name": "Ukiki",
      "games": "Super Mario World 2: Yoshi’s Island (1995 - SNES)",
      "series": "Yoshi",
      "description": "This mischievous monkey loves to steal things! It first stole Baby Mario and Baby Peach, while also attacking Yoshi. Several bunches of Ukiki appear in the jungles of Yoshi’s Island, usually shooting watermelon seeds at Yoshi. Many years later, one took to acting innocent and stealing Mario’s cap! They also love to join in on parties, although they prefer tormenting the partygoers.",
      "bigName": "Ukiki"
    },
    {
      "id": 321,
      "name": "Yarn Yoshi",
      "games": "Yoshi’s Woolly World (2015 - Wii U)",
      "series": "Yoshi",
      "description": "This Yoshi is made of yarn! When Kamek shows up and turns all of the Yoshis living on Craft Island but this Yoshi and Red Yarn Yoshi into Wonder Wool, they set out to defeat Kamek and restore all of their friends. Fun fact: While Yarn Yoshi is green in the first save file of Yoshi’s Woolly World, he is light-blue in the second save file and pink in the third.",
      "bigName": "Yarn Yoshi"
    },
    {
      "id": 322,
      "name": "Yarn Poochy",
      "games": "Yoshi’s Woolly World (2015 - Wii U)",
      "series": "Yoshi",
      "description": "Poochy is a dog that first appeared in the original Yoshi’s Island, and normally helps his pal Yoshi by acting as a ride. Here, its the exact same, but he’s made of wool! Poochy can stand on spikes and lava, and is very fast. In addition, in the 3DS remake of Yoshi’s Woolly World, Poochy Pups are added that follow Yoshi around and help him find secrets!",
      "bigName": "Yarn Poochy"
    },
    {
      "id": 323,
      "name": "Kirby",
      "games": "Kirby´s Dream Land (1992 - Game Boy)",
      "series": "Kirby",
      "description": "First you draw a circle, then you dot the eyes, add a great big smile... and presto, it's Kirby! He's a young Star Warrior that takes up residence in Dream Land, on Planet Popstar. With a super-powered inhale, the ability to copy abilities from opponents, a trusty Warp Star, and a friendly attitude, Kirby is the name you should know! Whenever there's a disturbance in the Milky Way, you can count on Kirby and company to help clean up the mess!",
      "bigName": "Kirby"
    },
    {
      "id": 324,
      "name": "Meta Knight",
      "games": "Kirby's Adventure (1993 – NES)",
      "series": "Kirby",
      "description": "The masked swordsman Meta Knight is a sharp contrast to the cutesy nature of Dreamland. The sword he wields is named Galaxia, and with it, he sets out to become the strongest warrior in the Milky Way Galaxy. Meta Knight is a man of chivalry, never dueling an opponent before offering them a weapon. He used to find himself as an adversary to Kirby, whether it be due to a nightmare-inducing misunderstanding or a conflict of interest, but he has since mellowed out toward him and more often sees himself teaming up with the puffball.",
      "bigName": "Meta Knight"
    },
    {
      "id": 325,
      "name": "King Dedede",
      "games": "Kirby´s Dream Land (1992 - Game Boy)",
      "series": "Kirby",
      "description": "How Dedede entered the throne is a mystery to this day given Dreamland's lack of any real government, but his presence is still appreciated as a figurehead nonetheless. For the most part, he is a benevolent figurehead, more often than not putting aside his gluttony and greed for the greater good of his people, but he did one time indulge in selfishness and rob his citizens of their food. Kirby eventually put a stop to his misdeeds, and his victory over the king established a rivalry that pushed King Dedede to learn how to inhale. The two's rivalry has become far friendlier in recent times, with things never escalating beyond a low-stakes Gourmet Race.",
      "bigName": "King Dedede"
    },
    {
      "id": 326,
      "name": "Warp Star",
      "games": "Kirby's Dream Land (1992 - Game Boy)",
      "series": "Kirby",
      "description": "Popstar is a big planet so Kirby needs a special mode of transport to get around quickly. That's where the Warp Star comes in. The Warp Star is one of the fastest things in all of the universe. Kirby uses it mostly when going from one place to another. It can fly through space and it can even warp as it's name implies, explaining how Kirby used it to avoid Galeem's devastating light. Now anyone can use the Warp Star as an item in Smash Bros. Try it out if you can!",
      "bigName": "Warp Star"
    },
    {
      "id": 327,
      "name": "Star Rod",
      "games": "Kirby's Adventure (1993 - NES)",
      "series": "Kirby",
      "description": "The Star Rod is the power source for the Fountain of Dreams. In Kirby's Adventure, King Dedede breaks the rod into seven pieces resulting in a shortage of dreams in Dream Land. But Kirby gets all the pieces back and puts the Star Rod back together. However, Dedede was right to break the rod as the fountain had been corrupted by Nightmare! Now Kirby must use the Star Rod as an ability to defeat Nightmare.",
      "bigName": "Star Rod"
    },
    {
      "id": 328,
      "name": "Ultra Sword",
      "games": "Kirby's Return to Dream Land (2011 - Wii)",
      "series": "Kirby",
      "description": "In Kirby's Return to Dream Land, there are five special abilities that Kirby can find and Ultra Sword is one of them. They are all enhanced versions of existing Copy Abilities such as Ice, Fire, Beam, Hammer, and of course Sword. The Ultra Sword ability gives Kirby a giant sword almost ten times his own body that he can swing around and destroy everything in his path. The Ultra Sword also shows up in Kirby's Final Smash.",
      "bigName": "Ultra Sword"
    },
    {
      "id": 329,
      "name": "Robobot Armor",
      "games": "Kirby Planet Robobot (2016 - 3DS)",
      "series": "Kirby",
      "description": "A robotic suit of armor manufactured by the Haltmann Works Company. The suits start off as Invader Armor, which were sent down to subdue the inhabitants of Popstar. Kirby does manage to take one down and use it for himself. It is capable of learning over 10 different abilities, with each one changing the armor's appearance using more powerful attacks than Kirby would normally be able to pull off with said ability. Kirby's about to give these rowdy robots a piece off their own medicine!",
      "bigName": "Robobot Armor"
    },
    {
      "id": 330,
      "name": "Halberd",
      "games": "Kirby Super Star (1996 - SNES)",
      "series": "Kirby",
      "description": "Meta Knight's infamous airship, first used by Meta Knight and his crew try to take over Dream Land to \"put an end to its lazy lifestyle.\" The ship is armed with a variety of weapons and top notch security. A few examples include cannons, a reactor core, Meta Knight's minions, and even a giant mechanical lobster! In Super Smash Bros Ultimate, the Halberd appears as a stage, where you can duke it out on the main deck of the ship.",
      "bigName": "Halberd"
    },
    {
      "id": 331,
      "name": "Dragoon",
      "games": "Kirby Air Ride (2003 - GC)",
      "series": "Kirby",
      "description": "Along with the combat-oriented Hydra, the Dragoon is one of the Legendary Air Ride machines. It can only be used by collecting its three pieces (the nosecone, the body, and the tail) during the City Trial mode. While it lacks the Hydra's power and endurance, it makes up for it by being able to fly for an extremely long period of time, making it unstoppable in races.",
      "bigName": "Dragoon"
    },
    {
      "id": 332,
      "name": "Rick",
      "games": "Kirby's Dream Land 2 (1995 - Game Boy)",
      "series": "Kirby",
      "description": "Rick is a round, fluffy hamster who prefers to spend most of his days sleeping about. He first became Kirby’s friend after the puffball saved him from captivity, and he joined him in his quest to retrieve the Rainbow Drops and stop Dark Matter’s reign of chaos. As one of Kirby’s animal buddies, he can further enhance Kirby’s copy abilities once Kirby hops on his back for a ride. Rick is especially great at traversing the land, making him a great companion for long stretches of ground.",
      "bigName": "Rick"
    },
    {
      "id": 333,
      "name": "Kine",
      "games": "Kirby's Dream Land 2 (1995 - Game Boy)",
      "series": "Kirby",
      "description": "Kine is a blue sunfish who lives in the waters of Dreamland’s Ripple Field. He was originally taken hostage by Master Green, but he joined Kirby’s quest to find the Rainbow Drops and defeat Dark Matter after the boy rescued him. Kine allowed Kirby to situate himself in his mouth, and together, the two were able to push Kirby’s copy abilities to new limits. With Kine, Kirby can use his elemental abilities underwater. Kine is best for sea travel, he can make his way through the surface world just fine, albeit very awkwardly.",
      "bigName": "Kine"
    },
    {
      "id": 334,
      "name": "Coo",
      "games": "Kirby's Dream Land 2 (1995 - Game Boy)",
      "series": "Kirby",
      "description": "Coo is a small owl who allows Kirby to reach new heights whenever he takes the puffball for a ride. He aided Kirby in his effort to restore the bridges connecting the Rainbow Islands after Kirby freed him from captivity. Coo allows Kirby to adapt his copy abilities into several useful aerial attacks through the use of his flight capabilities.",
      "bigName": "Coo"
    },
    {
      "id": 335,
      "name": "Gooey",
      "games": "Kirby's Dream Land 2 (1995 - Game Boy)",
      "series": "Kirby",
      "description": "An absent-minded blob of Dark Matter, he forgets that Kirby is meant to be his foe and joins forces with him. He is quite similar to Kirby, right down to nabbing enemy abilities, but rather than inhale, he licks the enemies up to gain them. He can even do it underwater! He may not be the brightest, but he'll be your friend until the end!",
      "bigName": "Gooey"
    },
    {
      "id": 336,
      "name": "Nago",
      "games": "Kirby's Dream Land 3 (1997 - SNES)",
      "series": "Kirby",
      "description": "Nago is one of the three new animal friends introduced in Kirby's Dream Land 3. Whatever ability you have when using Nago, he rolls and swings Kirby around like a ball. Most of his abilities act as projectiles but some are melee attacks like Stone and Parasol. His love interest in the game is a white cat named Shiro who will give you a Heart Star if you bring Nago to her.",
      "bigName": "Nago"
    },
    {
      "id": 337,
      "name": "Pitch",
      "games": "Kirby's Dream Land 3 (1997 - SNES)",
      "series": "Kirby",
      "description": "Pitch is one of the three new animal friends introduced in Kirby's Dream Land 3. Whenever you have to fly with Pitch, he always seems to struggle to lift Kirby, being the small bird that he is. When combining Pitch with the Spark ability, Kirby pulls out a controller and controls Pitch like an RC bird. He and the other animal friends also return in the Stone Friends mix ability from Kirby 64: The Crystal Shards.",
      "bigName": "Pitch"
    },
    {
      "id": 338,
      "name": "ChuChu",
      "games": "Kirby's Dream Land 3 (1997 - SNES)",
      "series": "Kirby",
      "description": "ChuChu is one of the three new animal friends introduced in Kirby's Dream Land 3. ChuChu is a pink octopus with a big red bow on the back of her head. When paired with Kirby, she can swallow enemies under water and even cling and walk on ceilings. Although she's sweet to Kirby, she can be very short-tempered to the other animal friends. She, Nago, and Pitch all return in Kirby Star Allies as part of the Cleaning ability.",
      "bigName": "ChuChu"
    },
    {
      "id": 339,
      "name": "Whispy Woods",
      "games": "Kirby’s Dreamland (1992 - Gameboy)",
      "series": "Kirby",
      "description": "Whispy Woods is the Guardian of the Forest. He is a sentient colossal tree capable of bearing apples. Although he seems like a peaceful being, he has an odd habit of getting hostile with Kirby, usually acting as the first boss in most Kirby games. Luckily, he isn’t very powerful, with most of his battle strategies boiling down to puffing air and poorly weaponizing his apples. With that said, he does occasionally pull off some new tricks, such as summoning a set of Whispy Woods Juniors to fight on his behalf in Kirby 64: The Crystal Shards.",
      "bigName": "Whispy Woods"
    },
    {
      "id": 340,
      "name": "Kracko",
      "games": "Kirby´s Dream Land (1992 - Game Boy)",
      "series": "Kirby",
      "description": "Kracko is a giant rolling thunder cloud who lives in the Bubbly Clouds high above Dream Land. Unlike most recurring Kirby bosses, Kracko has only one other form of itself: Kracko Jr. Kracko cannot be permanently destroyed by Kirby. He can always reform as long as there are clouds in the sky. He takes Kirby's victories personally and seeks revenge on Kirby for his past defeats. A-Are those.. tears in his eye? Must take them VERY personally it seems.",
      "bigName": "Kracko"
    },
    {
      "id": 341,
      "name": "Nightmare's Power Orb",
      "games": "Kirby’s Adventure (1993 - NES)",
      "series": "Kirby",
      "description": "Nightmare initially intended to take over Planet Popstar by taking control of the Fountain of Dreams. Luckily, King Dedede used his quick wits and destroyed the Star Rod on top of the fountain, scattering its remains all over Dreamland. This left Nightmare trapped in the Fountain of Dreams and unable to take control of it. However, when Kirby accidentally restored the Star Rod to the fountain, he freed Nightmare, allowing him to take the form pictured and spread dark and terror-inducing nightmares to all the innocent denizens of the galaxy.",
      "bigName": "Nightmare's Power Orb"
    },
    {
      "id": 342,
      "name": "Nightmare Wizard",
      "games": "Kirby’s Adventure (1993 - NES)",
      "series": "Kirby",
      "description": "Pictured is Nightmare’s true form: a large wizard donning a dream-like cloak. Unhinged, Nightmare wished to unleash his everlasting catalog of terrible nightmares to not just Popstar, but the entire galaxy. Luckily, Kirby and King Dedede were able to put aside their differences to defeat this great evil. Using his powerful inhale, King Dedede launched Kirby into space, leaving the young puffball to defeat Nightmare with the power of the Star Rod.",
      "bigName": "Nightmare Wizard"
    },
    {
      "id": 343,
      "name": "Dark Matter",
      "games": "Kirby's Dream Land 2 (1995 - Game Boy)",
      "series": "Kirby",
      "description": "Pictured is Dark Matter in the form of swordsman ready to duel Kirby. Dark Matter has no real form, so to speak; it is simply a dark cloud-like entity capable of shapeshifting, size manipulation, and even a bizarre form of budding. Not much is known about Dark Matter, other than that it originates from Void Termina and that it only seems to wish darkness and chaos upon the universe.",
      "bigName": "Dark Matter"
    },
    {
      "id": 344,
      "name": "Gryll",
      "games": "Kirby's Super Star Stacker (1998 - Super Famicom)",
      "series": "Kirby",
      "description": "A cheerful witch who set out with her three comrades, Pepper, Salt, and Sugar to challenge the planet's best Star Stacker. Unfortunately for them, that just so happens to be Kirby, and he's not willing to give up his title that easily. To challenge her, you must have beaten every other boss without using a continue, only then will you be able to face the second greatest Star Stacker, behind you of course.",
      "bigName": "Gryll"
    },
    {
      "id": 345,
      "name": "Dyna Blade",
      "games": "Kirby Super Star (1996 - SNES)",
      "series": "Kirby",
      "description": "A large rainbow colored bird, she ruined the crops across Dream Land, leaving everything in ruins. When Kirby catches wind of this, he goes to stop the avian menace. Her only weak spot is the head, so go for it and let her have it! Dyna Blade returns in the Revenge of Meta Knight sub-game as well, helping Kirby get back aboard the Halberd, but being severely wounded by gunfire in the process.",
      "bigName": "Dyna Blade"
    },
    {
      "id": 346,
      "name": "Heavy Lobster",
      "games": "Kirby Super Star (1996 - SNES)",
      "series": "Kirby",
      "description": "The mighty Heavy Lobster is a large, gold robot lobster that served under Meta Knight in the Kirby Super Star sub-game: Revenge of Meta Knight. Equipped with flamethrowers in its claws and jets near its feet, Heavy Lobster is one of the most powerful standard bosses Kirby has come across on his journey. Not only that but Kirby had to fight him not once, but TWICE! Swallow one of the Paint Slimes he deploys to gain the rare Paint ability.",
      "bigName": "Heavy Lobster"
    },
    {
      "id": 347,
      "name": "Marx",
      "games": "Kirby Super Star (1996 - SNES)",
      "series": "Kirby",
      "description": "This little jester goes to Kirby when the Sun and Moon of Planet Popstar start fighting. He tells Kirby that creating peace between the two will be difficult, but if he can summon Galactic Nova by gathering the energy from the planets in the Milky Way, they will stop fighting. Wishing Kirby good luck as he sets out, Marx stays behind on Planet Popstar. I wonder how he knew how the solution to such a rare occurrence...",
      "bigName": "Marx"
    },
    {
      "id": 348,
      "name": "Marx (True Form)",
      "games": "Kirby Super Star (1996 - SNES)",
      "series": "Kirby",
      "description": "After Kirby succesfully summons Nova, he is granted a wish as promised. But Marx pushes Kirby away, declaring: \"Well, I want to control Popstar!\" In secret, Marx tricked the Sun and Moon into fighting each other and then made Kirby summon Nova so that he could take over Planet Popstar! His wish is granted, and he transforms into this creature of immense power! He's able to teleport, fly, shoot lasers, summon vines, hide in shadows... However, his opponent is Kirby, who doesn't let him get away with his trickery that easily.",
      "bigName": "Marx (True Form)"
    },
    {
      "id": 349,
      "name": "Moley",
      "games": "Kirby & The Amazing Mirror (2004 - GBA)",
      "series": "Kirby",
      "description": "This mole is the boss of Cabbage Cavern. His boss fight puts Kirby at a disadvantage, with not a lot of room to move around, as Moley could appear in any of the six holes on the map. His primary method of attacking is to emerge from one of these holes and chuck garbage at Kirby. Thankfully, Kirby can get a Copy Ability from some of those and hit him back harder. In Kirby Squeak Squad, you fight his wife Mrs. Moley, presumably mad about the her husband's defeat by your hands.",
      "bigName": "Moley"
    },
    {
      "id": 350,
      "name": "Dark Mind",
      "games": "Kirby & The Amazing Mirror (2004 - GBA)",
      "series": "Kirby",
      "description": "A mysterious entity who corrupts the Mirror World with his evil. Meta Knight tries to go into the Mirror World to stop him, but is stopped by his Mirror World counterpart, Dark Meta Knight. To defeat Dark Mind, Kirby must go through 6 different phases of battle, all while wielding the Master Sword. The first four keep his basic appearance, albeit with slightly different attacks each time, while the last two appear as a giant eye to take you down, but as we all know, Kirby doesn't go down that easily.",
      "bigName": "Dark Mind"
    },
    {
      "id": 351,
      "name": "Daroach",
      "games": "Kirby Squeak Squad (2006 - DS)",
      "series": "Kirby",
      "description": "The tactical leader of the Squeaks, Daroach, has decided to grace you with his presence. The Squeaks are a greedy gang of thieves who search for treasure all across Dream Land. In Kirby Star Allies, Daroach returns as a Dream Friend with his crew members: Spinni, Storo, and Doc in tow. When Daroach and Kirby first met, he and the Squeaks stole Kirby's strawberry shortcake and in turn... a death wish. Squeak squeak.",
      "bigName": "Daroach"
    },
    {
      "id": 352,
      "name": "Dark Daroach",
      "games": "Kirby Squeak Squad (2006 - DS)",
      "series": "Kirby",
      "description": "Throughout the story of Kirby: Squeak Squad, Kirby is after Daroach and his Squeaks for stealing his shortcake. But near the end, Daroach steals the wrong treasure and gets possessed by an evil force named Dark Nebula, ruler of the underworld and a specimen of Kirby's old enemy, Dark Matter. Kirby must defeat the possessed Daroach with his own weapon: the Triple Star! After defeating Dark Nebula and saving Daroach, Kirby and the Squeaks all become friends. Aww!",
      "bigName": "Dark Daroach"
    },
    {
      "id": 353,
      "name": "Masked Dedede",
      "games": "Kirby Super Star Ultra (2008 - DS)",
      "series": "Kirby",
      "description": "In the sub-game, Revenge of the King, in Kirby Super Star Ultra; King Dedede wanted revenge against Kirby. When Kirby breaks through his defenses and troops at Mt. Dedede, he dawns his steel mask and special jet hammer for the final fight in an electrified ring. The fight is tense with zero people in the stands watching (except for Bandana Waddle Dee of course). Despite losing the match against the pink puffball, King Dedede tried his hardest and you can see him dawn his Masked Dedede persona once more in his Final Smash.",
      "bigName": "Masked Dedede"
    },
    {
      "id": 354,
      "name": "Galacta Knight",
      "games": "Kirby Super Star Ultra (2008 - DS)",
      "series": "Kirby",
      "description": "Upon Meta Knight's arrival at Galactic Nova, he wishes to fight the strongest warrior in the galaxy, who just so happens to be Galacta Knight, a warrior so powerful he was sealed away to prevent him from using said power. Now free to fight the masked swordsman, Galacta Knight doesn't mess around, with his attacks being able to deal severe damage. His attacks are similar to Meta Knights's own moves, such as creating tornadoes, summoning his minions, dashing across the battlefield, and much more. It is never stated if he is explicitly evil or not, so his motives remain a mystery...",
      "bigName": "Galacta Knight"
    },
    {
      "id": 355,
      "name": "Magolor",
      "games": "Kirby´s Return to Dream Land (2011 - Wii)",
      "series": "Kirby",
      "description": "In Kirby's Return to Dream Land, a strange flying ship known as the Lor Starcutter pops out of a portal and crash lands on the lush green meadows of Dream Land. Kirby and his friends go to investigate and find the ship's pilot: Magolor. Magolor is from a planet called Halcandra in another dimension and his home is under the tyrannic control of a four headed dragon named Landia. He needs Kirby and his friend's help to find the missing parts to his ship and help him defeat the beast. Kirby and Friends are all willing to help their new friend, but is Magolor really an ally or is he just all lies?",
      "bigName": "Magolor"
    },
    {
      "id": 356,
      "name": "Landia",
      "games": "Kirby's Return to Dream Land (2011 - Wii)",
      "series": "Kirby",
      "description": "Landia is four-headed dragon that that has made a home on Planet Halcandra. He is the designated guardian of several ancient treasures, including the Master Crown. Landia was once in a deep slumber before he was disrupted by Magolor, who had “retrieved” the Master Crown from him. This made him extremely hostile and pitted him against Kirby and friends. Landia’s four heads aren’t simply for show; he is capable of splitting his heads into four separate individuals, each with a concise of their own.",
      "bigName": "Landia"
    },
    {
      "id": 357,
      "name": "Queen Sectonia",
      "games": "Kirby Triple Deluxe (2014 - 3DS)",
      "series": "Kirby",
      "description": "A power hungry tyrant who seeks to rule the kingdom of Floralia, accompanied by her loyal servant Taranza, who kidnaps King Dedede at the start of the game. Kirby takes note of his friend's absence, and goes to hunt down this mad queen. She's one tough opponent, utilizing swords and large blades to carve up the little guy. While she's never seen again, her minion Taranza appears in Kirby Star Allies as one of your Dream Friends.",
      "bigName": "Queen Sectonia"
    },
    {
      "id": 358,
      "name": "Susie",
      "games": "Kirby Planet Robot (2016 - 3DS)",
      "series": "Kirby",
      "description": "Susie, the reliable, confident, and sassy secretary of Haltmann Enterprises. She constantly tries to halt Kirby on his journey to stop Haltmann Enterprises from mechanizing all of Dream Land. She apparently had a tragic past with the president and secretly wants to teach him a lesson. Her full name is Susanna Patrya Haltmann.",
      "bigName": "Susie"
    },
    {
      "id": 359,
      "name": "The Three Mage-Sisters",
      "games": "Kirby Star Allies (2018 - Switch)",
      "series": "Kirby",
      "description": "Juh! It's the Three Mage-Sisters: Francisca, Flamberge, and Zan Partizanne. These three were once ordinary girls on the brink of death before a mysterious hooded figure came to their rescue. Now they have elemental powers; ice, fire, and electricity respectively, and they now serve their savor, Lord Hyness. They help him in his crazy plan to resurrect his religion's dark lord by retrieving the dark Jamba Hearts. It's up to Kirby to stop them. Jambuhbye!",
      "bigName": "The Three Mage-Sisters"
    },
    {
      "id": 360,
      "name": "Waddle Dee",
      "games": "Kirby´s Dream Land (1992 - Game Boy)",
      "series": "Kirby",
      "description": "King Dedede's loyal servants and some of the most recognizable enemies in Kirby history; the Waddle Dees are always doing crazy things that end up disrupting Kirby's adventure. Whether it be riding Nruffs around, paddling canoes, floating with parasols, attacking with spears, cutting down trees, or just simply walking along, they find a way to get in Kirby's way whether intentionally or not (most times not). Some Waddle Dees rise to the occasion and come to Kirby's aid such as the various Parasol Waddle Dees and a certain spear wielding Dee with a blue bandana...",
      "bigName": "Waddle Dee"
    },
    {
      "id": 361,
      "name": "Bandana Waddle Dee",
      "games": "Kirby Super Star (1996 - SNES)",
      "series": "Kirby",
      "description": "There may be thousands of Waddle Dees out there in Dream Land but there is only one Bandana Waddle Dee! Bandana Waddle Dee (or just Bandana Dee for short) was at first a background character but when Kirby's Super Star Ultra came around, he rose to the ranks and became King Dedede's top Dee. In Kirby's Return to Dream Land, he even joined his king, Meta Knight, and Kirby on their adventure to help Magolor. Ever since then, Bandana Dee has been there to help stop the big enemies that threaten Dream Land. With hard work, dedication, and some apple juice, he's mastered the art of the Spear Ability and has even added his own moves to the kit. He's a super star for sure and deserves a prize. A chance to show that he's not just a pretty face. But what could that be...",
      "bigName": "Bandana Waddle Dee"
    },
    {
      "id": 362,
      "name": "Waddle Doo",
      "games": "Kirby's Dream Land (1992 - Game Boy)",
      "series": "Kirby",
      "description": "Waddle Doos resemble the common Waddle Dee, but the major difference is the giant eye that takes up its face. They use this eye to fire out a beam of electricity to attack Kirby, Waddle Doos are a common enemy throughout Dream Land, sometimes you'll even find them on parasols! They can also be used by Kracko as minions, which he'll send down to get Kirby.",
      "bigName": "Waddle Doo"
    },
    {
      "id": 363,
      "name": "Bronto Burt",
      "games": "Kirby´s Dream Land (1992 - Game Boy)",
      "series": "Kirby",
      "description": "These buzzy little bug creatures are called Bronto Burts. They are one of the most common aerial enemies in all of the Kirby games. It's really easy to simply run into them while floating in the skies of Dream Land as Kirby. These pesky little buggers yield no real benefit to you because even if you manage to swallow one, you won't obtain any ability for your efforts.",
      "bigName": "Bronto Burt"
    },
    {
      "id": 364,
      "name": "Poppy Bros. Jr.",
      "games": "Kirby´s Dream Land (1992 - Game Boy)",
      "series": "Kirby",
      "description": "A small elf who loves bombs, you'll almost never see them without one! Although some members prefer to use boomerangs or nothing at all. They get around any way they can, whether by walking, riding on Grizzos, riding on apples, or even Maxim Tomatoes! There's a larger variant of Poppy Bros. named Poppy Bros. Sr. He's not much different from his smaller counterparts, other than his longer jump.",
      "bigName": "Poppy Bros. Jr."
    },
    {
      "id": 365,
      "name": "Gordo",
      "games": "Kirby´s Dream Land (1992 - Game Boy)",
      "series": "Kirby",
      "description": "Gordos are completely indestructible, and Kirby can't inhale them either. All he can do is avoid this foe or force it down into a pit. If you touch a Gordo, it'll definitely do damage. But they probably don't mean to hurt anyone. Regardless, many bosses throughout the Kirby games like Whispy Woods use them as projectiles. In Smash Bros, even King Dedede use Gordos with his Gordo Throw. He can even inhale them unlike Kirby.",
      "bigName": "Gordo"
    },
    {
      "id": 366,
      "name": "Scarfy",
      "games": "Kirby´s Dream Land (1992 - Game Boy)",
      "series": "Kirby",
      "description": "A common enemy in the Kirby series; these cat like creatures like to float around in Bubbly Clouds and Green Greens galore! Scarfy is one of the few Kirby enemies that can't be directly copied but when using the Copy ability in Kirby Super Star, you can copy a Scarfy and gain the explosive Crash ability. Scarfies may look cute and cuddly but don't get too close to them and don't try to inhale them. Just don't do it. I'm warning you! Don't...",
      "bigName": "Scarfy"
    },
    {
      "id": 367,
      "name": "Angry Scarfy",
      "games": "Kirby´s Dream Land (1992 - Game Boy)",
      "series": "Kirby",
      "description": "I warned you... but you didn't listen did you? Scarfies may look cute on the outside but when threatened, their explosive temper boils to the surface and they lash out at anyone in their line of sight. Don't worry though. Just fly or run away from them. A Scarfy's temper is so explosive that soon after unleashing it, it will soon implode with a bang. You just got to remember to be careful next time.",
      "bigName": "Angry Scarfy"
    },
    {
      "id": 368,
      "name": "Rocky",
      "games": "Kirby's Adventure (1993 - NES)",
      "series": "Kirby",
      "description": "Stone is one of Kirby's best abilities, but like the rest of them, they gotta come from somewhere, and more often than not, you'll get this ability from this little dude. Like most other enemies in the series, they behave in a simple manner, taking a few steps before slamming into the ground. He can also appear as one of Kirby's helpers, where he'll slam into opponents, the main difference being that he's now invincible when in stone form. This little dude is sure to rock your world!",
      "bigName": "Rocky"
    },
    {
      "id": 369,
      "name": "Wheelie",
      "games": "Kirby's Adventure (1993 - NES)",
      "series": "Kirby",
      "description": "These speed demons can often be seen roaming the landscapes of Dream Land, and are the quickest way to get the wheel ability. Their appearance usually suggests that you'll be needing them for a quick ride down a long path. Kirby can also utilize these guys as vehicles in certain games and gain the Wheelie Rider ability. A larger variant of this enemy can appear as a mid-boss named Grand Wheelie.",
      "bigName": "Wheelie"
    },
    {
      "id": 370,
      "name": "Bomber",
      "games": "Kirby´s Adventure (1993 - NES)",
      "series": "Kirby",
      "description": "Bomber is an explosive enemy from the Kirby series. They are weak, accident-prone missile-like enemies with legs and a skull painted on either side. They have the tendency to walk the edge of cliffs and platforms so make sure you don't end up under one of them. If Kirby's lucky enough to absorb one, he will gain the powerful Crash ability. You can even find Bombers as items in Smash Ultimate. Hold it over your head for a big bang!",
      "bigName": "Bomber"
    },
    {
      "id": 371,
      "name": "Bugzzy",
      "games": "Kirby's Adventure (1993 - NES)",
      "series": "Kirby",
      "description": "One of the most memorable mid-bosses in the entire Kirby series. Appearing as a large stag beetle that'll grab Kirby and slam him into the ground. He can also summon smaller insects as minions in some games. He is usually the only enemy in the game that gives the Suplex ability. Which allows Kirby to bash and slam his foes into the ground. Bugzzy can also appear as one of Kirby's many helpers, where he utilizes some of the same moves he has as a boss.",
      "bigName": "Bugzzy"
    },
    {
      "id": 372,
      "name": "Bonkers",
      "games": "Kirby's Adventure (1993 - NES)",
      "series": "Kirby",
      "description": "The Hammer ability is one of the most powerful and versatile Copy Abilities Kirby can acquire, but there’s usually only one way to get it: by defeating and inhaling this big beast. Bonkers’ battle tactics live up to his name, as he is a very aggressive opponent. He’ll jump around, swing his hammer and even throw coconuts at Kirby. Defeating him is worth it though, as the Hammer ability is also one of the only ways to break wooden pegs and unlock new paths.",
      "bigName": "Bonkers"
    },
    {
      "id": 373,
      "name": "Mr. Frosty",
      "games": "Kirby's Adventure (1993 - NES)",
      "series": "Kirby",
      "description": "Mr. Frosty is probably one of Kirby’s most memorable recurring opponents. But you don’t remember him for the fact he gives the useful Ice Copy Ability, or his cute, walrus-like appearance. No, you remember him for one thing, and one thing only: his butt. Yes, Mr. Frosty is not afraid to shake what his mama gave him before chucking an ice block at Kirby. Maybe it’s supposed to be a distraction tactic? C’mon, Mr. Frosty, there are kids playing.",
      "bigName": "Mr. Frosty"
    },
    {
      "id": 374,
      "name": "Meta-Knights",
      "games": "Kirby's Adventure (1993 - NES)",
      "series": "Kirby",
      "description": "A group of noble warriors led by, who else, Meta Knight, to whom they owe undying loyalty. The four elite members of the team are warriors trained in using the trident, the mace, the javelin, and the axe. These four have fought Kirby multiple times under orders from Meta Knight, but the team also consists of other members, such as Meta Knight’s second-in-command, Captain Vul, and a cute Waddle Dee dressed as a sailor.",
      "bigName": "Meta-Knights"
    },
    {
      "id": 375,
      "name": "Mr. Shine & Mr. Bright",
      "games": "Kirby's Adventure (1993 - NES)",
      "series": "Kirby",
      "description": "Mario once had to flee from an angry sun, but Kirby has had to battle both an angry sun and a furious moon at the same time. Mr. Shine (the moon) and Mr. Bright (the sun) were entrusted by King Dedede to guard the piece of the Star Rod kept at Butter Building, but have fought Kirby a few more times after that. Their attack strategy consists of taking turns in which one of them battles Kirby on the ground, while the other hangs out in the sky and fires projectiles. However, inhaling one of these projectiles will grant Kirby a copy ability, so it may not have been a very bright move,",
      "bigName": "Mr. Shine & Mr. Bright"
    },
    {
      "id": 376,
      "name": "Plasma Wisp",
      "games": "Kirby Super Star (1996 - SNES)",
      "series": "Kirby",
      "description": "Plasma Wisp is a glowing mass of plasma, usually blue or green in color. When this enemy is sucked up by Kirby, he gains the Plasma ability. As a Helper in Kirby Super Star, Plasma Whip is unique as he's the only helper that can fly freely without the need of jumping constantly. He can even shoot his Plasma underwater which Plasma Kirby can't do. The Plasma ability returned in Kirby Star Allies but sadly Plasma Wisp was replaced by Plugg.",
      "bigName": "Plasma Wisp"
    },
    {
      "id": 377,
      "name": "Tac",
      "games": "Kirby Super Star (1996 - SNES)",
      "series": "Kirby",
      "description": "This little cat burglar may look cute but watch out. It knows many powerful techniques. Tac can be found in Kirby's Super Star and its remake, Kirby's Super Star Ultra. Tac often acts as a little thief, stealing your helper and holding them hostage in his sack. If Kirby absords Tac, he gains the exclusive and underwhelming Copy ability. Don't disregard Tac just yet though. As a helper, he's one of the most powerful with a guard that makes him invincible and the ability to copy most enemies. What a copycat!",
      "bigName": "Tac"
    },
    {
      "id": 378,
      "name": "Chef Kawasaki",
      "games": "Kirby Super Star (1996 - SNES)",
      "series": "Kirby",
      "description": "Let's get cooking!! In his debut game, Kirby's Super Star, he acts as a mid-boss that gives Kirby an exclusive Cook ability when absorbed. In the recent Kirby game, Kirby Star Allies, he returns as a mid-boss but can also be a playable ally with ladle attacks and a cook pot Friend Ability. In Smash Bros, Kawasaki can be summoned as an assist trophy where he cooks your opponent in a big bronze pot; an attack similar to Kirby's Final Smash from Brawl.",
      "bigName": "Chef Kawasaki"
    },
    {
      "id": 379,
      "name": "Knuckle Joe",
      "games": "Kirby Super Star (1996 - SNES)",
      "series": "Kirby",
      "description": "Knuckle Joe is a fighter full of fury. He's a master of Martial Arts and a very common enemy in the Kirby series. When inhaled, Kirby gains the powerful Fighter ability: a power full of punches and kicks that may even be inspired off of Street Fighter's own Ryu and Ken. Enemy or ally, whatever form Knuckle Joe comes in, he'll pack a whallop! In Smash Bros, you can even summon Knuckle Joe as an assist trophy and he'll give your opponent a flury of fists!",
      "bigName": "Knuckle Joe"
    },
    {
      "id": 380,
      "name": "Prince Fluff",
      "games": "Kirby´s Epic Yarn (2010 - Wii)",
      "series": "Kirby",
      "description": "Prince Fluff, the Prince of Patch Land, needed Kirby's help. The dastardly Yin Yarn had stolen the magic yarn keeping the different sections of Patch Land together. Both Kirby and Prince Fluff must \"stitch\" together in order to stop Yin Yarn, retrieve the magic yarn, and save both Patch Land and Dream Land. During the making of Kirby's Epic Yarn, it was originally going to be a game about just Prince Fluff but then Kirby was added, turning it into the game it is today.",
      "bigName": "Prince Fluff"
    },
    {
      "id": 381,
      "name": "Elline",
      "games": "Kirby and the Rainbow Curse (2015 - Wii U)",
      "series": "Kirby",
      "description": "Elline is a young friendly fairy with a passion for the visual arts. She was initially part of an artistic duo with her best friend Claycia, with Elline acting as the painter to Claycia’s sculptor. Together, they created their own world—Seventopia. One day, Claycia seemingly became evil, abandoning her friend and stealing all the color and life from Popstar. Luckily, she stumbled upon the kindhearted Kirby and Bandana Dee, who agreed to help her restore the planet’s color and life. Elline has the ability to become a paintbrush, which she used to paint a pathway for Kirby on their adventure.",
      "bigName": "Elline"
    },
    {
      "id": 382,
      "name": "Fox McCloud",
      "games": "Star Fox (1993 - SNES)",
      "series": "StarFox",
      "description": "Fox is an intrepid pilot and the fearless leader of the mercenary team, Star Fox. Born on Papetoon, but raised on Corneria, Fox was a cadet at the Cornerian Defense Army Academy when he heard the news his father had been betrayed and killed. He then formed a new Star Fox team, which defends the Lylat System from evil, for a price. Although they are mercenaries, they only accept mission that serve to uphold justice.",
      "bigName": "Fox McCloud"
    },
    {
      "id": 383,
      "name": "Falco Lombardi",
      "games": "Star Fox (1993 - SNES)",
      "series": "StarFox",
      "description": "The ace pilot the Star Fox team, the hot-tempered Falco Lombardi was the leader of his own galactic gang before Fox asked him to join Star Fox. He’s cocky and arrogant, likes to do things his way and is too proud to accept help. Despite not being the best team player and even having left Star Fox at one point, Falco is loyal to his friends, and his skills as a pilot are absolutely invaluable in the fight against Andross.",
      "bigName": "Falco Lombardi"
    },
    {
      "id": 384,
      "name": "Wolf O'Donnell",
      "games": "Star Fox 64 (1997 - N64)",
      "series": "StarFox",
      "description": "Wolf O’Donnell is Fox lifelong rival and the leader of the mercenary team Star Wolf, which is very similar to Star Fox, but much less concerned with the morality of their employers. Wolf and his gang of criminals were hired by Andross during the Lylat Wars in order to take down team Star Fox. Ironically, Wolf might have taken the job for free, as he is determined to prove that, though Fox is good, he is better.",
      "bigName": "Wolf O'Donnell"
    },
    {
      "id": 385,
      "name": "Slippy Toad",
      "games": "Star Fox (1993 - SNES)",
      "series": "StarFox",
      "description": "Slippy is the inventor and mechanic in team Star Fox, and quite a genius on his field. He’s a childhood friend of Fox’s and flew with him for many years before Fox asked him to take part in the new Star Fox team. Slippy is not a great pilot, and often requires help from his teammates during battles, but his engineering know-how is second to none. In fact, he is the mind behind many of the team’s vehicles, such as the Landmaster and the Blue Marine.",
      "bigName": "Slippy Toad"
    },
    {
      "id": 386,
      "name": "Peppy Hare",
      "games": "Star Fox (1993 - SNES)",
      "series": "StarFox",
      "description": "The oldest member of the Star Fox team, and a mentor figure to Fox, Peppy was actually a member of the original version of the team. However, after the death of their leader, James McCloud, Peppy insisted that his son Fox take up the leadership, rather than take it himself. Though he lacks the energy and youth of his teammates he makes up for it in experience, as he is often the one to give helpful advice, such as when to do a barrel roll.",
      "bigName": "Peppy Hare"
    },
    {
      "id": 387,
      "name": "Krystal",
      "games": "Star Fox Adventures (2002 - Gamecube)",
      "series": "StarFox",
      "description": "Krystal is a telepathic vixen from the now-destroyed planet Cerinia. Seeking answers about the fate of her home planet, Krystal arrived on the dinosaur planet Sauria, where she encountered Fox McCloud. Armed with her magical staff, Krystal and Fox unite to save the planet from the plans of General Scales, after which Fox welcomes Krystal into the Star Fox team. Using her telepathic abilities, she can sense distress signal, which becomes a vital asset for the team.",
      "bigName": "Krystal"
    },
    {
      "id": 388,
      "name": "ROB 64",
      "games": "Star Fox 64 (1997 - N64)",
      "series": "StarFox",
      "description": "Don't confuse him for that other ROB, this is the robotic operator of the Great Fox, Team Star Fox's mothership. Built by Space Dynamics Co Ltd on the orders of James McCcloud, ROB is networked to the ship's main computer, allowing him to fully control the ship. ROB can communicate directly to the Arwings; whenever the team is in a pinch, ROB can help by either sending them supplies, or using the Great Fox's laser guns to provide support.",
      "bigName": "ROB 64"
    },
    {
      "id": 389,
      "name": "James McCloud",
      "games": "Star Fox 64 (1997 - N64)",
      "series": "StarFox",
      "description": "Fox’s late father, James McCloud, was a legendary pilot known throughout the Lylat System, and was the founder and original leader of team Star Fox. The team consisted of himself, Peppy Hare and Pigma Dengar, but Pigma would soon betray the team after being bribed by the evil scientist Andross. James and Peppy were captured, but while Peppy managed to escape and return home, James met his fate at the hands of Andross.",
      "bigName": "James McCloud"
    },
    {
      "id": 390,
      "name": "Arwing",
      "games": "Star Fox (1993 - SNES)",
      "series": "StarFox",
      "description": "The Arwings are a personal, high-performance spacecraft and the primary combat vehicle used by team Star Fox ever since its inception. There are four, one for which pilot of the team, and they are known for their balance of speed, power and performance, making them extremely versatile vehicles. Armed with laser cannons, smart bombs and a reflector shield, the Arwings are undoubtedly, the team’s most important asset.",
      "bigName": "Arwing"
    },
    {
      "id": 391,
      "name": "Great Fox",
      "games": "Star Fox 64 (1997 - N64)",
      "series": "StarFox",
      "description": "The Great Fox is an enormous battleship that serves as the Star Fox team’s mobile headquarters, launching platform and residence. It is equipped with incredible plasma engines that enable it to warp between planets, allowing the team to quickly travel through the system. It was built by Fox’s father, James, and to do it, he needed to take a loan so massive the team is still trying to pay it to this day.",
      "bigName": "Great Fox"
    },
    {
      "id": 392,
      "name": "Landmaster",
      "games": "Star Fox 64 (1997 - N64)",
      "series": "StarFox",
      "description": "A high-powered tank originally designed as an exploration vehicle but modified by Slippy into a combat machine, the Landmaster is the Star Fox team’s go-to ground vehicle. The Landmaster is capable of rolling and hovering for a short time, and contains mostly the same arsenal as the Arwings, but with the addition of a missile launcher. If something is stopping Star Fox from taking to the skies, this tank ensures they can still complete their mission.",
      "bigName": "Landmaster"
    },
    {
      "id": 393,
      "name": "Walker",
      "games": "Star Fox Zero (2016 - Wii U)",
      "series": "StarFox",
      "description": "As of the more recent Star Fox outings, the Arwings have gained the ability to transform into these bipedal Walkers upon touching the ground. This allows the team to explore areas that are either too small for the regular Arwing, or would require more careful, deliberate exploration. They may look quite funny, but they pack the same weaponry as the regular Arwing, so they’re definitely no laughing matter.",
      "bigName": "Walker"
    },
    {
      "id": 394,
      "name": "Gyrowing",
      "games": "Star Fox Zero (2016 - Wii U)",
      "series": "StarFox",
      "description": "A slow-flying hovercraft built for exploration rather than combat, the Gyrowing was originally a property of the Cornerian army, and used to pacify Andross’ enormous Gigarilla robot after its confiscation. Star Fox took ownership of the machine after using it to defend Gigarilla from enemy forces trying to retake it. The Gyrowing contains a small, tethered robot called Direct-I, which can be deployed to recover items or hack into computer systems.",
      "bigName": "Gyrowing"
    },
    {
      "id": 395,
      "name": "Leon Powalski",
      "games": "Star Fox 64 (1997 - N64)",
      "series": "StarFox",
      "description": "He is the great Leon, the sniper of the Star Wolf team, and one of the two members to have been on the team since its inception, alongside Wolf himself. He is well known for his fierce rivalry with that annoying bird, Falco Lombardi, and almost exclusively targets him when the two teams clash. Leon loves the thrill of fighting and, especially, defeating an opponent, and will never show them mercy.",
      "bigName": "Leon Powalski"
    },
    {
      "id": 396,
      "name": "Pigma Dengar",
      "games": "Star Fox 64 (1997 - N64)",
      "series": "StarFox",
      "description": "Pigma was once a member of the legendary original Star Fox team, but even back then, his only goal was to get as rich as possible. It was money which led him to betray his teammates to Andross, leading to James’ death. He went on to join Star Wolf and fought with them in the Lylat Wars. And yet, it seems Pigma was too untrustworthy even for Wolf, and he was eventually kicked out of the team.",
      "bigName": "Pigma Dengar"
    },
    {
      "id": 397,
      "name": "Andrew Oikonny",
      "games": "Star Fox 64 (1997 - N64)",
      "series": "StarFox",
      "description": "Andrew is a member of team Star Wolf and nephew of the evil scientist Andross, a fact that he will make sure you know and remember. Maybe he wants his relationship with Andross to cover up the fact that he is not an experienced pilot. Andrew and the rest of Star Wolf would eventually part ways for unspecified reasons, though it’s likely that he was kicked out. Even by himself, he continues to search for ways to continue his uncle’s legacy.",
      "bigName": "Andrew Oikonny"
    },
    {
      "id": 398,
      "name": "Panther Caroso",
      "games": "Star Fox Assault (2005 - GameCube)",
      "series": "StarFox",
      "description": "A new member of the Star Wolf team who joined some time after Pigma and Andrew left. Unlike those two, Panther is actually a competent and highly-skilled pilot, as well as sophisticated and something of a romantic. He first engaged the Star Fox team at the Sargasso Space Zone, and that was when he met, and became infatuated with, Krystal. Despite his penchant for womanizing, his feelings for her seem genuine.",
      "bigName": "Panther Caroso"
    },
    {
      "id": 399,
      "name": "Wolfen",
      "games": "Star Fox 64 (1997 - N64)",
      "series": "StarFox",
      "description": "The Wolfen is a class of combat spacecraft manufactured by Andross with the objective to mimic and even surpass the technology used by the Arwings. It was promptly adopted by team Star Wolf during the Lylat Wars, and continued to be used beyond it, to the point that it became a symbol for the team. It has a very similar arsenal to the Arwings, though the shields aren’t quite as strong.",
      "bigName": "Wolfen"
    },
    {
      "id": 400,
      "name": "Andross",
      "games": "Star Fox (1993 - SNES)",
      "series": "StarFox",
      "description": "A brilliant scientist that worked for the Cornerian Army, and whose research was once incredibly beneficial to the Lylat System. However, as his ego grew, so did the dangerous and immoral nature of his experiments, and he was eventually banished to the desolate planet Venom, where he began to plot his revenge. This giant face is simply a metallic manifestation of him, or maybe even a hologram, but whatever it is, it’s definitely not Andross’ true appearance.",
      "bigName": "Andross"
    },
    {
      "id": 401,
      "name": "Andross (Star Fox 64 3D)",
      "games": "Star Fox 64 (1997 - N64)/Star Fox 64 3D (2011 - 3DS)",
      "series": "StarFox",
      "description": "This is the incarnation of Andross that appears in Star Fox 64 and its 2011 remake, Star Fox 64 3D. This form more closely resembles Andross’ true simian appearance, however, the countless lethal experiments he performed on himself transformed into an immense, disembodied head, with only giant mechanical hands left for a body. Nevertheless, his intellect and sheer size make him a dangerous opponent.",
      "bigName": "Andross (Star Fox 64 3D)"
    },
    {
      "id": 402,
      "name": "Andross (True Form)",
      "games": "Star Fox 64 (1997 - N64)",
      "series": "StarFox",
      "description": "“Only I have the brains to rule Lylat!” It seems that quote is more relevant that it first seemed. This is the true form of Andross, all that was left of him after countless experiments, and only encountered by those who were brave enough to approach Venom by way of Area 6. His bizarre, disembodied eyes can move independently and fire laser beams, but his brain is large and vulnerable, so fire away!",
      "bigName": "Andross (True Form)"
    },
    {
      "id": 403,
      "name": "Aparoid",
      "games": "Star Fox Assault (2005 - GameCube)",
      "series": "StarFox",
      "description": "The Aparoids are an insect-like race of cyborgs that live on a mysterious, unnamed homeworld far beyond the Lylat System, or the reach of any of its spaceships. They are a hive mind controlled by a queen, and live to spread across the universe, infecting other machines and life forms in a manner known as Aparoidedation. The Aparoids launched an invasion against the Lylat System, causing even bitter enemies to come together to fight them off.",
      "bigName": "Aparoid"
    },
    {
      "id": 404,
      "name": "General Pepper",
      "games": "Star Fox (1993 - SNES)",
      "series": "StarFox",
      "description": "Pepper is the general of the Cornerian Army and, therefore, the commander of all of Corneria’s forces. Despite the might of his forces, he often needs to call for the aid of team Star Fox, so they end up obeying his order and reporting to him, even if they are independent. Pepper is a brave and competent dog, but he is getting old, and he’s starting to make mistakes. Maybe it’s time he stepped down and let someone else take his place.",
      "bigName": "General Pepper"
    },
    {
      "id": 405,
      "name": "Tricky",
      "games": "Star Fox Adventures (2002 - Gamecube)",
      "series": "StarFox",
      "description": "Tricky is the crown prince of the EarthWalker tribe, one of the two ruling tribes of Sauria, the Dinosaur Planet. Tricky was rescued from the SharpClaw tribe by Fox McCloud, which led the two to become friends and to partner up to save the planet from breaking apart after the SharpClaw’s leader, General Scales, removed the four SpellStones from their rightful place.",
      "bigName": "Tricky"
    },
    {
      "id": 406,
      "name": "Dash Bowman",
      "games": "Star Fox Command (2006 - DS)",
      "series": "StarFox",
      "description": "Dash Bowman is a young, but talented, rookie pilot for the Cornerian Army. He also happens to be Andross’ grandson. Though that fact might worry some, Dash is in the side of good, and in fact, is a great admirer of team Star Fox and wishes to be a part of it. His custom starfighter, the Monkey Arrow, was even made to resemble an Arwing. Though disagreeing with his grandfather’s methods, he does respect his original dream of making Lylat a better place.",
      "bigName": "Dash Bowman"
    },
    {
      "id": 407,
      "name": "Pikachu",
      "games": "Pokémon Red & Blue (1996 - Game Boy)",
      "series": "Pokemon",
      "description": "This Electric type Mouse Pokemon is surely known by everyone in the world. Pikachu is considered even more popular than it's evolved form, Raichu! It has small electric sacs on both its cheeks where it stores electric energy. It can learn a wide range of Normal and Electric attacks like Thunder and Quick Attack. It even uses the exclusive Volt Tackle for its Final Smash where it dashes around in a sphere of sparks and bolts. Pikachu can wear many different costumes relating to many Pokemon protagonists",
      "bigName": "Pikachu"
    },
    {
      "id": 408,
      "name": "Pikachu Libre",
      "games": "Pokémon Omega Ruby & Alpha Sapphire (2014 - 3DS)",
      "series": "Pokemon",
      "description": "In Pokemon Omega Ruby & Alpha Sapphire, Pikachu Libre and the other Cosplay Pikachu are available after taking part in the Pokemon Contest Spectacular. Each of the Pikachu cosplays correspond to each of the five Contest conditions (Coolness, Beauty, Cuteness, Cleverness, and Toughness). Pikachu Libre in particular can also learn Flying Press, a move originally exclusive to Hawlucha. Did you notice that Pikachu Libre is a girl? You can tell by the heart shaped tail!",
      "bigName": "Pikachu Libre"
    },
    {
      "id": 409,
      "name": "Jigglypuff",
      "games": "Pokémon Red & Blue (1996 - Game Boy)",
      "series": "Pokemon",
      "description": "This Balloon Pokemon may be an unexpected fighter in Smash but a welcome one nonetheless. Jigglypuff is a Normal and Fairy type Pokemon. It evolves from Igglybuff with high friendship and will evolve further into Wigglytuff when exposed to a Moon Stone. Jigglypuff mesmerizes his opponents with its big round eyes and then puts them to sleep with a soothing lullaby. In Smash, its Rest move has the potential to KO an opponent if the timing is right. Now that's what I call a power nap!",
      "bigName": "Jigglypuff"
    },
    {
      "id": 410,
      "name": "Pichu",
      "games": "Pokémon Gold & Silver (1999 - Game Boy Color)",
      "series": "Pokemon",
      "description": "The pre-evolution of the famous Pikachu, Pichu was first discovered in the Johto region in Pokemon Gold & Silver. Like Pikachu, it has electric sacs on its cheeks where it stores electric energy. However, it is not yet skilled at storing electricity. It may send out a jolt if amused or startled. It may even damage itself in the process of attack! Pichu charges itself with electricity more easily on days with thunderclouds. While it may damage himself, Pichu's attacks may possibly be more powerful than Pikachu's.",
      "bigName": "Pichu"
    },
    {
      "id": 411,
      "name": "Mewtwo",
      "games": "Pokémon Red & Blue (1996 - Game Boy)",
      "series": "Pokemon",
      "description": "The legend itself, Mewtwo the Genetic Pokemon! A vicious Psychic type Pokemon created by genetic engineering. However, even through the scientific power of humans created this Pokemon's body, they failed to endow Mewtwo with a compassionate heart. It only longs to battle. Its DNA is almost the same as Mew's. However, its size and disposition are vastly different. Its cold, glowing eyes strike fear into its enemy. Many trainers have spent their entire lives to find this Legendary creature.",
      "bigName": "Mewtwo"
    },
    {
      "id": 412,
      "name": "Pokémon Trainer (Male)",
      "games": "Pokémon Red & Blue (1996 - Game Boy)",
      "series": "Pokemon",
      "description": "The Pokemon games aren't just about the Pokemon themselves. The Pokemon Trainers are just as important. This Pokemon Trainer is based on the famous Red in his look from Fire Red & Leaf Green. The trainer has three different Pokemon at his disposal: Squirtle, Ivysaur, and Charizard. Skilled players can master all three Pokemon and use them together for a super effective strategy!",
      "bigName": "Pokémon Trainer (Male)"
    },
    {
      "id": 413,
      "name": "Pokémon Trainer (Female)",
      "games": "Pokémon Fire Red & Leaf Green (2003 - GBA)",
      "series": "Pokemon",
      "description": "In Pokémon Fire Red & Leaf Green, you could choose to play as a male or female trainer and you can do the same here in Smash. With her Poke Balls in her bag and her VS Seeker clipped to her strap, she's ready to go out there and be the very best like no one ever was! Like the Male Pokemon Trainer, she has Squirtle, Ivysaur, and Charizard as her three Pokémon. Using the Down Special, she can switch between them, even in the air!",
      "bigName": "Pokémon Trainer (Female)"
    },
    {
      "id": 414,
      "name": "Squirtle",
      "games": "Pokémon Red & Blue (1996 - Game Boy)",
      "series": "Pokemon",
      "description": "It's Squirtle, the Tiny Turtle Pokemon! Squirtle may be the first stage of the Blastoise line but it can still be powerful. This Water type Starter shoots high pressure water at prey while in the water. Its strong shell is not just for protection. Its rounded shape minimizes resistance in the water, enabling Squirtle to swim at high speeds. In Smash Bros, Squirtle acts as one third of Pokemon Trainer's team. It acts as the fast tricky lightweight of the team.",
      "bigName": "Squirtle"
    },
    {
      "id": 415,
      "name": "Ivysaur",
      "games": "Pokémon Red & Blue (1996 - Game Boy)",
      "series": "Pokemon",
      "description": "Oh it's Bulbasaur! Or is it Venusaur? Actually it's the middle stage of this evolution line, Ivysaur! This Grass and Poison dual-type Pokemon has a big pink bulb on its back that grows by drawing energy from the sun. It gives off an aroma when it is ready to bloom. In Smash Bros, Ivysaur acts as one third of Pokemon Trainer's team. It uses its Vine Whip and Bullet Seed moves to preform attacks, combos, and grabs.",
      "bigName": "Ivysaur"
    },
    {
      "id": 416,
      "name": "Charizard",
      "games": "Pokémon Red & Blue (1996 - Game Boy)",
      "series": "Pokemon",
      "description": "It's Charizard, the final evolution of the starter Charmander line. This Fire and Flying dual type uses its majestic wings and long tail to attack with strong slashes. It spits fire that is hot enough to melt boulders. Charizard flies around the sky in search of powerful opponents. In Smash Bros, Charizard acts as one third of Pokemon Trainer's team. It acts as the slow but strong heavyweight of the group but it can use a Flame Charge move to make a speedy comeback.",
      "bigName": "Charizard"
    },
    {
      "id": 417,
      "name": "Lucario",
      "games": "Pokémon Diamond & Pearl (2007 - DS)",
      "series": "Pokemon",
      "description": "\"The Aura is with me!\" Lucario is a Fighting and Steel dual type Pokemon introduced in Pokemon Diamond, Pearl, & Platinum. It has the ability to sense the Auras of all things and it understands human speech. Over the course of the battle, the damage of its attacks increases with the amount of damage it has taken. It evolves from the Baby Pokemon, Riolu, and it can Mega Evolve into Mega Lucario for its Final Smash. Time to release MAX AURA!!",
      "bigName": "Lucario"
    },
    {
      "id": 418,
      "name": "Greninja",
      "games": "Pokémon X & Y (2013 - 3DS)",
      "series": "Pokemon",
      "description": "Shadow sneaking into battle is Greninja, the Ninja Pokemon. It's the final evolution of the Kalos region's Water Starter, Froakie. It creates throwing stars out of compressed water. When it spins them and throws them at high speed, these stars can split metal in two. Greninja's pink scarf may look fashionable but it's actually its tongue. In Smash Bros, it has the special Battle Bond ability that allows it to transform into Ash-Greninja during its Final Smash.",
      "bigName": "Greninja"
    },
    {
      "id": 419,
      "name": "Incineroar",
      "games": "Pokémon Sun & Moon (2016 - 3DS)",
      "series": "Pokemon",
      "description": "Let's get ready to rumble! Incineroar is the big buff cat that's gonna break your back! It's a Fire and Dark type Pokemon and the final evolution of Litten, one of the Alolan starters. Being a Heel Pokemon, Incineroar is very violent in the wrestling ring (although it's supposedly good with kids). It will make you run the ropes and then get you dirty with the Darkest Lariat. For its Final Smash, it preforms a beefed up version of its exclusive Z-Move from Sun and Moon: Max Malicious Moonsault.",
      "bigName": "Incineroar"
    },
    {
      "id": 420,
      "name": "Venusaur",
      "games": "Pokémon Red & Blue (1996 - Game Boy)",
      "series": "Pokemon",
      "description": "Venusaur, the Seed Pokémon and the evolved form of Ivysaur. Venusaur is a Grass and Poison Type that can Mega Evolve using the Venusaurite stone. Venusaur are mostly known for their powerful spores and Razor Leaf. They have been known to come out of the elevator on Saffron City to demonstrate said Razor Leaf. The plant on its back blooms when it absorbs sunlight, and it is always on the lookout for it.",
      "bigName": "Venusaur"
    },
    {
      "id": 421,
      "name": "Charmander",
      "games": "Pokémon Red & Blue (1996 - Game Boy)",
      "series": "Pokemon",
      "description": "Charmander is known as the Lizard Pokémon. It is a Fire-type that might not look like much, but it will eventually become a Charizard! Plus, it can hold its own in battle too; it attacks with powerful moves such as Dragon Rage and Flamethrower, the latter of which can be seen on the Saffron City stage. However, if a Charmander’s tail flame is ever extinguished, they will die.",
      "bigName": "Charmander"
    },
    {
      "id": 422,
      "name": "Mega Charizard X",
      "games": "Pokémon X & Y (2013 - 3DS)",
      "series": "Pokemon",
      "description": "One of Charizard's two mega evolutions, acquired by using Charizardite X. Due to the overwhelming amount of power that fills its entire body, Charizard is now black in coloration and his flames have turned blue, implying that its fire now burns far hotter than before, much like his fighting spirit has.",
      "bigName": "Mega Charizard X"
    },
    {
      "id": 423,
      "name": "Blastoise",
      "games": "Pokémon Red & Blue (1996 - Game Boy)",
      "series": "Pokemon",
      "description": "The Shellfish Pokémon, Blastoise is Squirtle's final evolution, now possessing two pressurized water jets on its shell, which can blast out water with more force than a fire hose. The blasts are strong enough to break through thick steel! Its bulk ensures that it won't be knocked back whenever it attacks, a helpful adaptation. Blastoise is also capable of mega evolving into Mega Blastoise if given Blastoisinite.",
      "bigName": "Blastoise"
    },
    {
      "id": 424,
      "name": "Metapod",
      "games": "Pokémon Red & Blue (1996 - Game Boy)",
      "series": "Pokemon",
      "description": "This Bug-type cannot learn any moves aside from Harden. It evolves from Caterpie at level 7, and patiently waits, hardening its shell, until it evolves into Butterfree. However, if it moves too much, it might disembowel itself. This tough shell has its advantages, though; it can sometimes cure itself of status conditions by shedding its shell!",
      "bigName": "Metapod"
    },
    {
      "id": 425,
      "name": "Pidgey",
      "games": "Pokémon Red & Blue (1996 - Game Boy)",
      "series": "Pokemon",
      "description": "The Tiny Bird Pokémon, Pidgey are fairly common throughout the Kanto region. Pidgey have a very sharp sense of direction and homing instincts. They can locate their nests even when far removed from their surroundings. They are docile, and prefer to flee from their enemies rather than fight. Pidgey will eventually become Pidgeotto at level 18, and Pidgeot at level 36.",
      "bigName": "Pidgey"
    },
    {
      "id": 426,
      "name": "Arbok",
      "games": "Pokémon Red & Blue (1996 - Game Boy)",
      "series": "Pokemon",
      "description": "The Cobra Pokémon, and the evolved form of Ekans. Arbok's frill isn't just for show, there have been six different patterns observed across this species of Pokémon. These patterns serve as a warning to potential predators or careless trainers who aren't paying attention. If that doesn't stop them from coming closer, Arbok will bite and then constrict its prey. It has enough force to crush a steel oil drum, so be cautious around this dangerous snake!",
      "bigName": "Arbok"
    },
    {
      "id": 427,
      "name": "Alolan Raichu",
      "games": "Pokémon Sun & Moon (2016 - 3DS)",
      "series": "Pokemon",
      "description": "In Alola, some Pokémon change their appearance to better suit the tropical climate, with Raichu being a good example. Alolan Raichu's tail is now wider, and full of its psychic energy, allowing it to fly around on it. Supposedly it underwent these changes due to its diet. Beyond the difference in appearance, Alolan Pokémon bear many other differences from types to some attacks. In Super Smash Bros Ultimate, Alolan Raichu will fly around the stage with Surge Surfer, damaging anyone in its path.",
      "bigName": "Alolan Raichu"
    },
    {
      "id": 428,
      "name": "Sandshrew",
      "games": "Pokémon Red & Blue (1996 - Game Boy)",
      "series": "Pokemon",
      "description": "The Mouse Pokémon, Sandshrews live in burrows across arid deserts, emerging only to feed. How does it survive in such a harsh desert? Simple! Sandshrew can absorb water through its skin, allowing it to make the most of the minimal amount it can get. If threatened, a Sandshrew can roll up into a ball, allowing it protection from predators. Like a few other Pokémon, Sandshrew has an Alolan form, with this version being adapted to icy climates instead.",
      "bigName": "Sandshrew"
    },
    {
      "id": 429,
      "name": "Clefairy",
      "games": "Pokémon Red & Blue (1996 - Game Boy)",
      "series": "Pokemon",
      "description": "The Fairy Pokémon, Clefairy are a rare species, only being seen at night in small groups. When day falls, Clefairy go to sleep nestled up against each other inside of mountains. Clefairy collect moonlight in their wings, and are quite popular among trainers for their cute appearance, making them highly-desired pets, if they're able to be found. Fun fact: Clefairy was originally intended as the mascot for the Pokémon series, but they eventually decided on Pikachu.",
      "bigName": "Clefairy"
    },
    {
      "id": 430,
      "name": "Vulpix",
      "games": "Pokémon Red and Blue (1996 - Game Boy)",
      "series": "Pokemon",
      "description": "Vulpix is a Fire-type Pokémon that evolves into Ninetales with the use of a Fire Stone. When Vulpix is born, it has one white tail, but as it matures, the tail splits into six and develops its orange-red color. Vulpix normally has the Flash Fire ability, which causes it to absorb Fire-type attacks to raise its Fire power. In Smash Bros., Vulpix will burn your opponents with Ember.",
      "bigName": "Vulpix"
    },
    {
      "id": 431,
      "name": "Alolan Vulpix",
      "games": "Pokémon Sun and Moon (2016 - 3DS)",
      "series": "Pokemon",
      "description": "This is the form of Vulpix in the Alola region, being Ice-type instead of Fire. Alolan Ninetales also exists, but requires an Ice Stone rather than a Fire Stone. It exhales air colder than -58 degrees Fahrenheit, which you will see if you summon it in Smash Bros. Another name for Alolan Vulpix is Keokeo. Fun fact: Ke’oke’o is Hawaiian for “white”!",
      "bigName": "Alolan Vulpix"
    },
    {
      "id": 432,
      "name": "Dugtrio",
      "games": "Pokémon Red and Blue (1996 - Game Boy)",
      "series": "Pokemon",
      "description": "Dugtrio is a Ground-type, and the evolved form of Diglett. Like Diglett, nobody knows what’s underneath Dugtrio. Dugtrio also has an Alolan form which is Ground/Steel-type with flowing blond hair. Dugtrio normally has one of two abilities: Sand Veil or Arena Trap. Dugtrio mostly attacks with moves such as Dig and Earthquake, although there is one curiosity: it can learn Scratch and Slash. Does this mean that Dugtrio has claws under the ground?",
      "bigName": "Dugtrio"
    },
    {
      "id": 433,
      "name": "Meowth",
      "games": "Pokémon Red and Blue (1996 - Game Boy)",
      "series": "Pokemon",
      "description": "Meowth, also known as the Scratch Cat Pokémon, is a Normal-type. Meowth normally has one of two abilities: Pickup or Technician. Meowth also has a Dark-type Alolan form. When Meowth reaches level 28, it evolves into Persian. Meowth prefers to attack with scratching moves as well as its signature move Pay Day. Pay Day does damage and scatters coins on the ground to be picked up after the battle. Meowth will use Pay Day if you summon it in Smash, as well.",
      "bigName": "Meowth"
    },
    {
      "id": 434,
      "name": "Psyduck",
      "games": "Pokémon Red and Blue (1996 - Game Boy)",
      "series": "Pokemon",
      "description": "Psyduck is a Water-type and the pre-evolution of Golduck. Despite the name, Psyduck isn’t actually a Psychic-type, but attacks with several Psychic-type moves. Psyduck normally has one of two abilities: Damp or Cloud Nine. Psyduck is said to have a constant headache, and its Psychic-type moves grow more powerful when its headache is more painful. However, it never remembers using the Psychic moves afterwards. Poor Psyduck!",
      "bigName": "Psyduck"
    },
    {
      "id": 435,
      "name": "Arcanine",
      "games": "Pokémon Red and Blue (1996 - Game Boy)",
      "series": "Pokemon",
      "description": "Despite being known as the Legendary Pokémon, this Fire-type is not a legendary Pokémon at all. Arcanine is the evolution of Growlithe, and normally has the Intimidate or Flash Fire abilities. Arcanine is said to be able to run 6200 miles in a single day. Arcanine is also notable for being the signature Pokémon of the Cinnabar Island Gym Leader, Blaine.",
      "bigName": "Arcanine"
    },
    {
      "id": 436,
      "name": "Abra",
      "games": "Pokémon Red and Blue (1996 - Game Boy)",
      "series": "Pokemon",
      "description": "This little Psychic-type might not look like much, but with enough care, it can become a powerful Alakazam. Abra itself can only use the move Teleport, but this fleeing has served it well, as it can be found in every currently known region except for Unova. When you summon it from a Poké Ball, it can cause chaos, teleporting opponents around the stage.",
      "bigName": "Abra"
    },
    {
      "id": 437,
      "name": "Machamp",
      "games": "Pokémon Red & Blue (1996 - Game Boy)",
      "series": "Pokemon",
      "description": "The Superpower Pokémon, Machamp is the final evolution of Machop, just one of its arms can move a mountain! So what chance does your opponent have against one? Despite his immense strength, it is not good with work involving care and dexterity. Which causes its arms to get tangled. A Machamp also helps you in Pokémon Sun & Moon as a Poké Ride, where it carries you in two of its arms. While the other two will deal with heavy boulders, replacing the Strength HM.",
      "bigName": "Machamp"
    },
    {
      "id": 438,
      "name": "Geodude",
      "games": "Pokémon Red & Blue (1996 - Game Boy)",
      "series": "Pokemon",
      "description": "This one is rock solid! Geodude is a Rock/Ground Pokémon, numbered #074 on the Kanto Pokédex. It's often found in fields and mountains, being mistaken for boulders, and is described as having a \"hard, craggy and rough\" heart. However, Geodude is especially weak to water, so be careful!",
      "bigName": "Geodude"
    },
    {
      "id": 439,
      "name": "Rapidash",
      "games": "Pokémon Red and Blue (1996 - Game Boy)",
      "series": "Pokemon",
      "description": "Rapidash is the Fire Horse Pokémon and the evolution of Ponyta. Rapidash is a blisteringly fast Fire-type said to be able to run at 150 mph. Rapidash loves to race, and is said to be even more beautiful while running. Rapidash attacks with moves such as Flame Charge and Bounce, and can have the Run Away or Flash Fire ability.",
      "bigName": "Rapidash"
    },
    {
      "id": 440,
      "name": "Slowpoke",
      "games": "Pokémon Red & Blue (1996 - Game Boy)",
      "series": "Pokemon",
      "description": "The Dopey Pokémon, Slowpoke are lax and slow Pokémon. Taking up to 5 seconds to even register pain, Slowpoke don't feel pain on their tails though. When they're hungry, Slowpoke will dangle their tails in the water hoping to catch something. Slowpoke tails are also a delicacy in certain regions, even then the tail regrows. So it doesn't harm it all that much.",
      "bigName": "Slowpoke"
    },
    {
      "id": 441,
      "name": "Magneton",
      "games": "Pokémon Red & Blue (1996 - Game Boy)",
      "series": "Pokemon",
      "description": "This Electric/Steel-type Pokémon seems to be just three instances of its pre-evolution, Magnemite, joined together, and that’s precisely what it is. Due to the strong electrical and magnetic field generated within it, Magneton sends strange radio signals, heats up and dries the air around it, and can cause earaches to people nearby. In the Sinnoh region, it was discovered that Magneton can evolve into Magnezone when on a special magnetic field.",
      "bigName": "Magneton"
    },
    {
      "id": 442,
      "name": "Farfetch'd",
      "games": "Pokémon Red and Blue (1996 - Game Boy)",
      "series": "Pokemon",
      "description": "Farfetch’d is the Wild Duck Pokémon, as well as a Normal/Flying type. Farfetch’d carries its leek everywhere, and it even has a unique held item, the Stick, which makes it land critical hits more often. Unfortunately for Farfetch’d, it is very delicious, and goes well with leek, leading to its rarity.",
      "bigName": "Farfetch'd"
    },
    {
      "id": 443,
      "name": "Gengar",
      "games": "Pokémon Red & Blue (1996 - Game Boy)",
      "series": "Pokemon",
      "description": "Known as the Shadow Pokémon, Gengar is the final evolution of Gastly and Haunter, the only Ghost-type Pokémon in the Kanto region, though they also have a Poison type. Gengar and its pre-evolution haunt the Pokémon Tower in Lavender Town, which serves as Pokémon graveyard. Gengar steals the heat from the surrounding air, causing chills on all nearby, and likes to disguise itself as people’s shadows and laugh at them in the moonlight.",
      "bigName": "Gengar"
    },
    {
      "id": 444,
      "name": "Electrode",
      "games": "Pokémon Red & Blue (1996 - Game Boy)",
      "series": "Pokemon",
      "description": "Who's that Pokemon!? It's Jigglypuff seen from above! Just kidding it's Electrode, the Electric Type Pokemon from Pokemon Red & Blue and the evolution of Voltorb. It stores electric energy under very high pressure. It often explodes with little or no provocation. In Smash Bros, Electrode can be found in the Poke Ball item and can even be thrown. Its Explosion move can cause explosive damage.",
      "bigName": "Electrode"
    },
    {
      "id": 445,
      "name": "Alolan Exeggutor",
      "games": "Pokémon Sun and Moon (2016 - 3DS)",
      "series": "Pokemon",
      "description": "This is Exeggutor’s Alola Form, found if an Exeggcute is evolved in Alola. Alolan Exeggutor is Grass/Dragon instead of its normal Grass/Psychic type, and is said to be Exeggutor’s true form, grown large due to the massive amounts of sun in Alola. Alolan Exeggutor’s signature move is Dragon Hammer, a powerful Dragon-type move.",
      "bigName": "Alolan Exeggutor"
    },
    {
      "id": 446,
      "name": "Cubone",
      "games": "Pokémon Red & Blue (1996 - Game Boy)",
      "series": "Pokemon",
      "description": "The Lonely Pokémon, Cubone wears the skull of its deceased mother on its head. Nobody knows what a Cubone actually looks like without the skull, as it never removes it. Sometimes they stare up at the moon late at night, seeing their mother's likeness in the moon. Cubone will then start to cry in mourning of the one they never got to know. It evolves into Marowak at level 28.",
      "bigName": "Cubone"
    },
    {
      "id": 447,
      "name": "Hitmonlee",
      "games": "Pokémon Red and Blue (1996 - Game Boy)",
      "series": "Pokemon",
      "description": "This fierce Pokémon is a pure Fighting type that can repeatedly kick its enemy without stopping due to its legs that freely stretch and contract, and it's no surprise it earned the title of \"Kick Master\". Don't get too close, or else you might have a not so pleasant encounter with its feet!",
      "bigName": "Hitmonlee"
    },
    {
      "id": 448,
      "name": "Weezing",
      "games": "Pokémon Red and Blue (1996 - Game Boy)",
      "series": "Pokemon",
      "description": "Weezing is a Poison-type and the evolved form of Koffing. Weezing has the Levitate ability, which negates its weakness to Ground. It is said that two Koffing merge to form a Weezing, and that rarely, there can be triplet Weezing. Weezing mostly attacks with moves such as Poison Gas, Smog, and Explosion.",
      "bigName": "Weezing"
    },
    {
      "id": 449,
      "name": "Chansey",
      "games": "Pokémon Red and Blue (1996 - Game Boy)",
      "series": "Pokemon",
      "description": "Chansey is a Normal-type, the evolved form of Happiny, and the pre-evolved form of Blissey. Chansey is known for being very rare, as well as being kind and affectionate, often going out of its way to cure sick Pokémon. Chansey isn’t the greatest at attacking or defending, but it has the second-highest HP stat of every Pokémon, with only its evolution Blissey having more. On Saffron City in Smash, Chansey can appear and throw healing eggs, too!",
      "bigName": "Chansey"
    },
    {
      "id": 450,
      "name": "Kangaskhan",
      "games": "Pokémon Red & Blue (1996 - Game Boy)",
      "series": "Pokemon",
      "description": "Kangaskhan is a Normal-type Pokémon who’s earned the name of the Parent Pokémon due to its undying devotion to its offspring. When you find a Kangaskhan you inevitable find two, as a baby will always be housed in its belly pouch. The baby rarely leaves this pouch until the age of three, and the mother will violently attack anything it sees as a threat to it. It even sleeps standing up to avoid crushing it. Now that’s parental devotion!",
      "bigName": "Kangaskhan"
    },
    {
      "id": 451,
      "name": "Mega Kangaskhan",
      "games": "Pokémon X & Y (2013 - 3DS)",
      "series": "Pokemon",
      "description": "What happens when Kangaskhan Mega Evolves? I bet it grows extra horns and wings and… oh, nevermind, the baby just leaves the pouch. That’s cool. To be fair, the child also grows up during the process, and the Pokémon’s true strength comes from the mother’s happiness and pride seeing her child all grown up. However, because all the child does is fight, the mother is constantly worried about its future.",
      "bigName": "Mega Kangaskhan"
    },
    {
      "id": 452,
      "name": "Goldeen",
      "games": "Pokémon Red & Blue (1996 - Game Boy)",
      "series": "Pokemon",
      "description": "This elegant Water type Pokemon is Goldeen. It's known for both its strength and grace. It can even evolve into the mighty Seaking and learn the effective Bug type move, Megahorn! However, in Smash Bros, it's pretty much useless. If you summon Goldeen from a Poke Ball, it just uses the ineffective Splash move. Splash is usually more of Magikarp's thing but I guess any Pokemon using Splash gets the same message across.",
      "bigName": "Goldeen"
    },
    {
      "id": 453,
      "name": "Staryu",
      "games": "Pokémon Red and Blue (1996 - Game Boy)",
      "series": "Pokemon",
      "description": "Staryu is the Star Shape Pokémon and the pre-evolution of Starmie. Staryu is a Water-type. Staryu can effortlessly regenerate lost limbs as long as its red core is intact, and is theorized to have an extraterrestrial origin due to it and Starmie’s cores flashing at night. Staryu can also be found in the Smash Bros. series, appearing from a Pokéball to attack fighters with Swift.",
      "bigName": "Staryu"
    },
    {
      "id": 454,
      "name": "Pinsir",
      "games": "Pokémon Red and Blue (1996 - Game Boy)",
      "series": "Pokemon",
      "description": "Pinsir is the Stag Beetle Pokémon, as well as a Bug-type. Although Pinsir has no evolutions or pre-evolutions, it does have a Bug/Flying type Mega Evolution. It catches prey in its massive horns and tears them in half. What it can’t tear, it throws. Normally, Pinsir and Heracross are huge rivals, but, in Alola, both get along well because they have a bigger, common enemy: Vikavolt.",
      "bigName": "Pinsir"
    },
    {
      "id": 455,
      "name": "Tauros",
      "games": "Pokémon Red and Blue (1996 - Game Boy)",
      "series": "Pokemon",
      "description": "Tauros is the Wild Bull Pokémon, and a Normal-type. Tauros is famous for its violent nature and charging when it spots an enemy. Tauros in Alola, however, are a Poké Ride Pokémon, replacing the Bicycle and Rock Smash from other regions. Tauros are considered, due to them only being male, to be a counterpart to Miltank, who is another Normal-type, but is all female.",
      "bigName": "Tauros"
    },
    {
      "id": 456,
      "name": "Gyarados",
      "games": "Pokémon Red and Blue (1996 - Game Boy)",
      "series": "Pokemon",
      "description": "Gyarados is a Water/Flying type Pokémon. Magikarp might seem useless, but if you can bear training it to level 20, you’ll be rewarded with a powerful Gyarados. Gyarados is completely different from Magikarp, using powerful Water moves. Gyarados even has a Mega Evolution where it becomes Water/Dark type. Gyarados is known for its extreme rage, and there are rumors of a Shiny Gyarados making its home in Johto’s Lake of Rage.",
      "bigName": "Gyarados"
    },
    {
      "id": 457,
      "name": "Lapras",
      "games": "Pokémon Red and Blue (1996 - Game Boy)",
      "series": "Pokemon",
      "description": "Lapras is the Transport Pokémon and a Water/Ice type. Lapras has been overhunted almost to extinction, but it is perfect for riding and loves to ferry people and Pokémon across the water. Lapras is very intelligent, and is even used as a Poké Ride Pokémon in the Alola region, taking the place of Surf in the other regions.",
      "bigName": "Lapras"
    },
    {
      "id": 458,
      "name": "Ditto",
      "games": "Pokémon Red & Blue (1996 - Game Boy)",
      "series": "Pokemon",
      "description": "Ditto may look bland, but it's quite the unique Pokémon for a Normal Type. Using its signature move, Transform, Ditto rearranges its cell structure to transform its self into other shapes and Pokémon. However, if it tries to transform itself into something relying on its memory, this Pokémon manages to get details wrong. If you get Ditto through the Poké Ball item, he'll transform into a copy of you and help you attack your opponent.",
      "bigName": "Ditto"
    },
    {
      "id": 459,
      "name": "Eevee",
      "games": "Pokémon Red and Blue (1996 - GB)",
      "series": "Pokemon",
      "description": "Eevee is a unique Pokémon, as it has the most evolutionary forms of any Pokémon, at eight! This Normal-type can evolve into the Water-type Vaporeon, the Electric-type Jolteon, the Fire-type Flareon, the Psychic-type Espeon, the Dark-type Umbreon, the Grass-type Leafeon, the Ice-type Glaceon, or the Fairy-type Sylveon. Each have their own strengths and weaknesses, which makes it hard to decide. However, don’t underestimate Eevee itself! Eevee has a unique Z-Move called Extreme Evoboost, where each of its eight evolutions show up and lend Eevee some strength.",
      "bigName": "Eevee"
    },
    {
      "id": 460,
      "name": "Porygon",
      "games": "Pokémon Red & Blue (1996 - Game Boy)",
      "series": "Pokemon",
      "description": "Porygon is very unique, being created out of programming code from the Pokémon Lab on Cinnabar Island. Even though this Pokémon is Normal-type, it has the Conversion move that can copy the elemental type of other Pokémon or change to a type that counters the enemy's. It has also shown that can change color for camouflage. You can see for yourself this miracle of technology at the Saffron City stage!",
      "bigName": "Porygon"
    },
    {
      "id": 461,
      "name": "Snorlax",
      "games": "Pokémon Red & Blue (1996 - Game Boy)",
      "series": "Pokemon",
      "description": "Snorlax is a Normal-type and the evolution of Munchlax. Snorlax is famous for falling asleep and blocking roads due to its immense size in Kanto and Kalos. Snorlax falls into so deep a sleep that only the smell of food or the sound of a Poké Flute will wake them up. Snorlax in Alola, on the other hand, have an exclusive Z-Move, Pulverizing Pancake, where they wake up, jump, land on the opponent, and crush them.",
      "bigName": "Snorlax"
    },
    {
      "id": 462,
      "name": "Articuno, Zapdos, & Moltres",
      "games": "Pokémon Red & Blue (1996 - Game Boy)",
      "series": "Pokemon",
      "description": "This trio is known as the Legendary Birds of Kanto, and serve as the Legendary Pokémon of Generation I, alongside Mewtwo. Articuno can control ice and roams the icy mountains, Zapdos controls electricity and lives in the thunderclouds, and Moltres scatters embers with its wings and controls fire.",
      "bigName": "Articuno, Zapdos, & Moltres"
    },
    {
      "id": 463,
      "name": "Dragonite",
      "games": "Pokémon Red & Blue (1996 - Game Boy)",
      "series": "Pokemon",
      "description": "The Dragon Pokémon, Dragonite is the final form of Dratini. Despite its bulky appearance, Dragonite can fly at high speeds, up to that of a jet plane. It is able to circle the Earth in 16 hours at a speed of 1,556 MPH. Dragonite shows signs of altruism, it is said to save drowning humans and lead lost ships to safety. Not all dragons are big and scary, some are nice and friendly like Dragonite!",
      "bigName": "Dragonite"
    },
    {
      "id": 464,
      "name": "Mega Mewtwo Y",
      "games": "Pokémon X & Y (2013 - 3DS)",
      "series": "Pokemon",
      "description": "Beyond evolution! MEGA EVOLVE!! Starting in Pokemon X & Y, many Pokemon gained another stage of evolution through the power of Mega Evolution and the Mega Evolution stones. Mewtwo in particular has two different Mega Evolved forms: Mega Mewtwo X and Mega Mewtwo Y. Both forms were exclusive to their respective games. Mega Mewtwo Y is the form Mewtwo takes when he releases his Final Smash.",
      "bigName": "Mega Mewtwo Y"
    },
    {
      "id": 465,
      "name": "Mew",
      "games": "Pokémon Red & Blue (1996 - Game Boy)",
      "series": "Pokemon",
      "description": "A Mythical Pokémon that was once thought to be extinct until scientists found it in the jungles of South America. Due to its unique ability to use all TMs and HMs, some speculate Mew to be the ancestor of all Pokémon. Its elusive nature even shows itself on the battlefield – if you are lucky enough to summon Mew with a Pokéball, it will simply use Fly to vanish from the fray! Wait, doesn't that make you unlucky instead?",
      "bigName": "Mew"
    },
    {
      "id": 466,
      "name": "Chikorita",
      "games": "Pokémon Gold & Silver (1999 - Game Boy Color)",
      "series": "Pokemon",
      "description": "You’ve caught all 151 Pokémon in your journey through the Kanto region, but there are actually so many more Pokémon to catch! The Johto region adds one hundred new Pokémon to find, and Chikorita is the very first on the list. The Grass-type starter offered to Ethan by Professor Elm to help him reach Mr. Pokémon’s house, Chikorita is a docile creature whose leaf emits a sweet fragrance that calms those around it.",
      "bigName": "Chikorita"
    },
    {
      "id": 467,
      "name": "Togepi",
      "games": "Pokémon Gold & Silver (1999 - Game Boy Color)",
      "series": "Pokemon",
      "description": "This Fairy Type baby Pokemon, Togepi, was introduced in Pokemon Gold and Silver. Togepi is filled with an energy that makes people happy. After giving it friendship, it will evolve in to Togetic and will evolve further into Togekiss with help from a Shiny Stone. When you get Togepi in Smash through the Poke Ball item, it uses the move Metronome which randomly selects a move to use like Night Shade, Leech Seed, and more. See how many moves it can do!",
      "bigName": "Togepi"
    },
    {
      "id": 468,
      "name": "Ampharos",
      "games": "Pokémon Gold & Silver (1999 - Game Boy Color)",
      "series": "Pokemon",
      "description": "The Light Pokémon Ampharos is the final stage of the family of Electric-type Pokémon that consists of it, Flaaffy and Mareep. The orb at the tip of Ampharos’ tail emits an incredibly bright light, and people in ancient times used it in many ways, such as a beacon or to send signals at long distances. The magnificent hairdo it sports when it Mega Evolves must be seen to be believed.",
      "bigName": "Ampharos"
    },
    {
      "id": 469,
      "name": "Bellossom",
      "games": "Pokémon Gold & Silver (1999 - Game Boy Color)",
      "series": "Pokemon",
      "description": "The Pokémon Gloom is known for not being the most attractive Pokémon, so how does it evolve into this beautiful Flower Pokémon? Well, it normally evolves into Vileplume, but if you expose it to a Sun Stone, it turns into Bellossom! Perhaps because of this (or the fact that it’s a plant) Bellossom is quite fond of them sun. Groups of Bellossom gather to perform a dance to call for the sun. Sunlight also grants it many benefits, including making it faster.",
      "bigName": "Bellossom"
    },
    {
      "id": 470,
      "name": "Marill",
      "games": "Pokémon Gold & Silver (1999 - Game Boy Color)",
      "series": "Pokemon",
      "description": "Marill, the Aqua Mouse Pokémon, is an absolutely adorable Water-type, and it is very popular with trainers for it. That big ball at the end of its tail is actually a container that holds a special oil that’s lighter than water. This makes it act as buoy for Marill, allowing it to swim safely without drowning. Because of this, it is not uncommon to see a body of water with a bunch of those little balls on the surface.",
      "bigName": "Marill"
    },
    {
      "id": 471,
      "name": "Sudowoodo",
      "games": "Pokémon Gold & Silver (1999 - Game Boy Color)",
      "series": "Pokemon",
      "description": "There is an item on the other side of this fence, but a tree is standing in my way! No, matter, I’ll just use Cut on it and… Nope! It’s a Pokémon. Doesn’t matter, this tree-looking Pokémon is clearly a Grass-type. I’ll just use a Fire-type move on it and… wait, why is it not effective? Upon closer inspection, this Pokémon is actually made of rock! It’s a Rock-type pretending to be a Grass-type! Oh, no! I left all my Water-types on my PC! AAAAH!",
      "bigName": "Sudowoodo"
    },
    {
      "id": 472,
      "name": "Wooper",
      "games": "Pokémon Gold & Silver (1999 - Game Boy Color)",
      "series": "Pokemon",
      "description": "The Water Fish Pokémon, Wooper usually stay in the water, but will leave when it gets too cold. To prevent itself from dehydrating, it will coat its body in a poisonous mucus membrane. Wooper aren't very smart, and are usually oblivious to their surroundings. It evolves into Quagsire at level 20.",
      "bigName": "Wooper"
    },
    {
      "id": 473,
      "name": "Unown",
      "games": "Pokémon Gold & Silver (1999 - Game Boy Color)",
      "series": "Pokemon",
      "description": "In the Johto region, there’s a mysterious place called the Ruins of Alph. In it, you’ll hear strange noises coming from your radio, and find mysterious puzzles and writings on the wall. Soon, you’ll see these mysterious Pokémon that look like the letters of the alphabet. With a setup like that, these Psychic-types have to be some sort of powerful Legendaries, right? Well, no. They’re not very strong, and can only learn Hidden Power. But at least you can spell “FART” with them.",
      "bigName": "Unown"
    },
    {
      "id": 474,
      "name": "Wobbuffett",
      "games": "Pokémon Gold & Silver (1999 - Game Boy Color)",
      "series": "Pokemon",
      "description": "Wobbufett is a Psychic-type that’s known as the Patient Pokémon, and for good reason. In a fight, it never attacks first, as it doesn’t have any attacks! Instead, all of its moves revolve around reflecting an opponent’s strike onto it. It lives in caves, trying to keep its black tail hidden and protected. Because of this, many theorize the black tail is the actual Pokémon, and the body is merely a decoy. Female Wobbuffet may be identifies by their lipstick-like marks.",
      "bigName": "Wobbuffett"
    },
    {
      "id": 475,
      "name": "Steelix",
      "games": "Pokémon Gold & Silver (1999 - Game Boy Color)",
      "series": "Pokemon",
      "description": "The Iron Snake Pokémon evolves from Onix, but it only does so if a trainer trades onix while it holds a Metal Coat. This titanic metal snake has skin harder than diamonds due to years of living underground. Able to learn powerful moves such as Stone Edge and Iron Tail, as well as being able to mega evolve, and being one of the largest known Pokémon, this is one Pokémon you don't want to mess with.",
      "bigName": "Steelix"
    },
    {
      "id": 476,
      "name": "Scizor",
      "games": "Pokémon Gold & Silver (1999 - Game Boy Color)",
      "series": "Pokemon",
      "description": "In Pokemon Gold and Silver, Scyther can evolve into the mighty Scizor using a Metal Coat. This Bug and Steel Type Pokemon swings its eye-patterned pincers up to scare its foes, making it look like it has three heads. It's wings are not used for flying. They are flapped at high speed to adjust its body temperature. You can find Scizor as a Poke Ball item where he slashes opponents using the move, Metal Claw, and can help you \"steel\" a victory!",
      "bigName": "Scizor"
    },
    {
      "id": 477,
      "name": "Heracross",
      "games": "Pokémon Gold & Silver (1999 - Game Boy Color)",
      "series": "Pokemon",
      "description": "Bug-type Pokémon didn’t have the best reputation in Kanto, but the introductions of the likes of Scizor and Heracross in Johto may have helped their popularity. Heracross in particular is known and prized for its strength. The horn on this Bug/Fighting-type is very powerful, and Heracross will drive it into the bellies of foes to then toss them away. It can easily toss objects up to 100 times its own weight. If all that wasn’t enough, it can even Mega Evolve!",
      "bigName": "Heracross"
    },
    {
      "id": 478,
      "name": "Skarmory",
      "games": "Pokémon Gold & Silver (1999 - Game Boy Color)",
      "series": "Pokemon",
      "description": "How is something as heavy as a plane able to fly? Well, engineers may have studied Skarmory, a Steel/Flying-type that can fly at speeds up to 186 miles per hour, despite having a body made entirely of steel. Its feathers are very sharp, and have been used by ancient people as swords. However, its wings become tattered after repeated battles, and can rust when exposed to water. Luckily, they regrow as new once a year.",
      "bigName": "Skarmory"
    },
    {
      "id": 479,
      "name": "Houndoom",
      "games": "Pokémon Gold & Silver (1999 - Game Boy Color)",
      "series": "Pokemon",
      "description": "Houndoom is a violent Dark/Fire-type Pokémon that lives up to its hellish name and appearance. It hunts in packs, the leadership of which is decided by fights within it. Its body generates toxins that serve as the fuel to its pungent flames. If you are burned by them, the pain is said to never go away, and its eerie howl sends even the bravest Pokémon scurrying to their nests.",
      "bigName": "Houndoom"
    },
    {
      "id": 480,
      "name": "Smeargle",
      "games": "Pokémon Gold & Silver (1999 - Game Boy Color)",
      "series": "Pokemon",
      "description": "What a work of art! Straight out of Pokemon Gold and Silver, Smeargle is a Normal Type Pokemon with a special tail that looks just like a paintbrush! A special fluid oozes from the tip of it's tail. It paints the fluid everywhere to mark its territory. Once it becomes an adult, it has a tendency to let its comrades plant footprints on its back. Using its signature move, Sketch, Smeargle can copy almost any move from any Pokemon. Now that's being creative!",
      "bigName": "Smeargle"
    },
    {
      "id": 481,
      "name": "Miltank",
      "games": "Pokémon Gold & Silver (1999 - Game Boy Color)",
      "series": "Pokemon",
      "description": "This Normal-type cow is known for several things. The first is its healing milk, Moo-Moo Milk. It can be used in battle, and is farmed at the Moomoo Farm on Route 39 in Johto. The other thing Miltank is remembered for is being the ace Pokémon of the Goldenrod City Gym Leader, Whitney. She uses Normal-types and can pack quite a punch.",
      "bigName": "Miltank"
    },
    {
      "id": 482,
      "name": "Raikou, Entei, & Suicune",
      "games": "Pokémon Gold & Silver (1999 - Game Boy Color)",
      "series": "Pokemon",
      "description": "The three legendary beasts of Johto. When the Brass Tower in Ecruteak City burnt to the ground, Ho-Oh reincarnated three Pokémon that died in the blaze. Each beast was made to represent what occurred, one for the fire that burnt the place down, one for the winds, and one for the storm that extinguished the flames. The beasts can each be seen roaming around the Johto region. The pokémon from which the beasts were reincarnated are unknown.",
      "bigName": "Raikou, Entei, & Suicune"
    },
    {
      "id": 483,
      "name": "Tyranitar",
      "games": "Pokémon Gold & Silver (1999 - Game Boy Color)",
      "series": "Pokemon",
      "description": "The adorable Larvitar will son retreat into a cocoon form called Pupitar, and it will stay that way until level 55, when it will evolve into the mighty Rock/Dark-type Tyranitar. It is known as the Armor Pokémon because its sturdy body can’t be harmed by any sort of attack, which is why it constantly seeks to challenge opponents. Just one of its hands is strong enough to cause earthquakes and change the landscape.",
      "bigName": "Tyranitar"
    },
    {
      "id": 484,
      "name": "Lugia",
      "games": "Pokémon Gold & Silver (1999 - Game Boy Color)",
      "series": "Pokemon",
      "description": "The Legendary Diving Pokémon Lugia is a Psychic/Flying-type that’s known as the guardian of the seas. Very few people have ever seen it, as it spends most of its time sleeping at the bottom of the ocean, near Whirl Islands, as its powers are so great they could endanger the world, even if accidentally. Its signature move, Aeroblast, has an extremely high chance to land a critical hit, as if it wasn’t strong enough.",
      "bigName": "Lugia"
    },
    {
      "id": 485,
      "name": "Ho-oh",
      "games": "Pokémon Gold & Silver (1999 - Game Boy Color)",
      "series": "Pokemon",
      "description": "The Legendary Rainbow Pokémon, Ho-oh is a Fire/Flying type, and is sometimes called the polar opposite of Lugia, and the guardian of the skies. As it flies through the world searching for a pure hearted trainer, it leaves behind a magnificent rainbow. Ho-oh is the one who created the legendary beasts of Johto by resurrecting a trio of Pokémon which died in a fire. Its signature move, Sacred Fire, often leaves foes with painful burns.",
      "bigName": "Ho-oh"
    },
    {
      "id": 486,
      "name": "Celebi",
      "games": "Pokémon Gold & Silver (1999 - Game Boy Color)",
      "series": "Pokemon",
      "description": "Celebi is a Mythical Psychic/Grass-type Pokémon known in Johto legends as the Voice of the Forest. Plant life flourishes wherever it passes, and it has the incredible ability to travel through time. It lives near a shrine in Ilex Forest, but it only appears during times of peace, which is why spotting Celebi is deemed to be a very good sign. It also has the power to purify Shadow Pokémon.",
      "bigName": "Celebi"
    },
    {
      "id": 487,
      "name": "Blaziken",
      "games": "Pokémon Ruby & Sapphire (2002 - GBA)",
      "series": "Pokemon",
      "description": "The Blaze Pokémon, Blaziken is the final form of Torchic, and a strategic fighter as well. When in battle, it utilizes intense flames from its wrists and will courageously attack. The stronger the opponent, the brighter its wrists will burn. Its legs are also quite strong, being able to leap over a 30 story building in one go. Blaziken can also mega evolve into Mega Blaziken if given the right mega stone.",
      "bigName": "Blaziken"
    },
    {
      "id": 488,
      "name": "Gardevoir",
      "games": "Pokémon Ruby & Sapphire (2002 - GBA)",
      "series": "Pokemon",
      "description": "The Embrace Pokémon, Gardevoir, is one of the two possible evolutions of Kirlia, the other being Gallade. A strong Psychic/Fairy-type, Gardevoir has psychokinetic powers that allow it to levitate and create small black holes and the ability to see the future. It is very protective of its trainer, and would give their life to keep them safe. It can Mega Evolve into Mega Gardevoir using a Gardevoirite.",
      "bigName": "Gardevoir"
    },
    {
      "id": 489,
      "name": "Shedinja",
      "games": "Pokémon Ruby & Sapphire (2002 - GBA)",
      "series": "Pokemon",
      "description": "When Nincada evolves into Ninjask, if you have an empty spot in your party and a Poké Ball in your bag, you might get a surprise: Shedinja! This Bug/Ghost type is the shed shell of Nincada reanimated as a ghost. Shedinja has the unique ability Wonder Guard: While Shedinja only has 1 HP, it only takes damage from super-effective attacks, such as Fire or Dark type moves.",
      "bigName": "Shedinja"
    },
    {
      "id": 490,
      "name": "Flygon",
      "games": "Pokémon Ruby & Sapphire (2002 - GBA)",
      "series": "Pokemon",
      "description": "The Mystic Pokemon, Flygon, is a Ground and Dragon dual-type from Pokemon Ruby and Sapphire. It's the final form of the Trapinch line. Flygon is nicknamed \"The Desert Spirit\" because it whips up a sandstorm simply by flapping its wings. The flapping of its wings create a series of notes that sound like a woman singing. People continue to have their hearts stolen by its enchanting songs and find themselves stranded in the desert.",
      "bigName": "Flygon"
    },
    {
      "id": 491,
      "name": "Milotic",
      "games": "Pokémon Ruby & Sapphire (2002 - GBA)",
      "series": "Pokemon",
      "description": "This magnificent Tender Pokémon somehow evolves from the dopey-looking Feebas, although it needs to be beautiful enough for it, or be traded holding a Prism Scale. It has the reputation of being the most beautiful of all Pokémon, and its presence is enough to quell anger and hostility in people’s hearts. If you’re lucky, you might see one appear in the Unova Pokémon League stage in Super Smash Bros. Ultimate.",
      "bigName": "Milotic"
    },
    {
      "id": 492,
      "name": "Absol",
      "games": "Pokémon Ruby and Sapphire (2002 - GBA)",
      "series": "Pokemon",
      "description": "The Dark-type Absol has a very special ability: The ability to sense when disasters are near! People often mistake it as the cause of the disasters, but it simply comes to warn people of them. Absol also has a Mega Evolution that it can achieve with an Absolite. This gives in wings that, unfortunately, do not make it Flying-type.",
      "bigName": "Absol"
    },
    {
      "id": 493,
      "name": "Salamence",
      "games": "Pokémon Ruby & Sapphire (2002 - GBA)",
      "series": "Pokemon",
      "description": "The Dragon Pokémon, Salamence is the final form of Bagon. In its previous forms, it had a desire to fly like the other dragons, so much so that it developed wings in this form. To express its joy, it flies and wheels all across Hoenn while breathing fire. However, Salamence isn't always a happy dragon. If enraged, it will fly around scorching everything in its path. This continues until Salamence tires itself out. Salamence can mega evolve using Salamencite.",
      "bigName": "Salamence"
    },
    {
      "id": 494,
      "name": "Metagross",
      "games": "Pokémon Ruby & Sapphire (2002 - GBA)",
      "series": "Pokemon",
      "description": "The Iron Leg Pokémon, Metagross is the final form of Beldum. Metagross is formed by the fusion of two Metangs, which gives this Pokémon four brains, giving it intelligence that rivals a supercomputer! It puts these smarts to good use by analyzing its opponents during battle. It can also float through the air by tucking away its four legs. Metagross can also appear as a Poké Ball Pokémon, where it repeatedly uses Earthquake to bury opponents. It is also capable of Mega Evolving into Mega Metagross with the Metagrossite",
      "bigName": "Metagross"
    },
    {
      "id": 495,
      "name": "Latias & Latios",
      "games": "Pokémon Ruby & Sapphire (2002 - GBA)",
      "series": "Pokemon",
      "description": "These Legendary Dragon/Psychic-types are both known as the Eon Pokémon. They travel in small herds and can fly faster than jet planes, as well as understand human speech. The red Latias is always female and can learn the move Mist Ball, while the blue Latios is always male and can learn the move Luster Purge. Both these Pokémon can Mega Evolve using the Latiasite and Latiosite stones.",
      "bigName": "Latias & Latios"
    },
    {
      "id": 496,
      "name": "Kyogre",
      "games": "Pokémon Ruby & Sapphire (2002 - GBA)",
      "series": "Pokemon",
      "description": "The Legendary Sea Basin Pokémon is a peaceful being, who slumbers quietly in the ocean floor, and is hailed for having brought rains to quell heavy droughts. In fact, it is credited with having created the world’s oceans. However, it becomes enraged when it meets Groudon, and will engage with it in a cataclysmic battle. Team Aqua plans to use this Pokémon’s power to expand the seas of the world.",
      "bigName": "Kyogre"
    },
    {
      "id": 497,
      "name": "Primal Kyogre",
      "games": "Pokémon Omega Ruby & Alpha Sapphire (2014 - 3DS)",
      "series": "Pokemon",
      "description": "By holding an ancient blue orb, Kyogre can undergo a process called Primal Reversion, in which it absorbs enough natural energy to reverts to its true form, the one it had centuries in the past when it formed the oceans: Primal Kyogre. Kyogre takes on this form as soon as it enters battle while holding the blue orb, and once it does, heavy rain starts to fall, which makes any Fire-type attacks impossible to be used.",
      "bigName": "Primal Kyogre"
    },
    {
      "id": 498,
      "name": "Groudon",
      "games": "Pokémon Ruby & Sapphire (2002 - GBA)",
      "series": "Pokemon",
      "description": "The Continent Pokémon, this legendary beast is capable of expanding continents. Groudon is also known for battling Kyogre. Supposedly this legendary battle shaped our planet into its current form, split by land and sea. Team Magma sought after this beast in order to lower sea levels to create more habitats for land Pokémon. With its size and strength, Groudon is one of the stronger legendary Pokémon out there, and also ranks as one of the heaviest.",
      "bigName": "Groudon"
    },
    {
      "id": 499,
      "name": "Primal Groudon",
      "games": "Pokémon Omega Ruby & Alpha Sapphire (2014 - 3DS)",
      "series": "Pokemon",
      "description": "Much like its counterpart Kyogre, Groudon is also able to undergo Primal Reversion to go back to its true form. The energy that seeps through its body escapes in the form of magma, burning with such intensity that its body always shimmers from the heat, creating land with every step it takes. Once it takes on this form, Groudon calls harsh sunlight, which nullifies any Water-type attacks.",
      "bigName": "Primal Groudon"
    },
    {
      "id": 500,
      "name": "Rayquaza",
      "games": "Pokémon Ruby & Sapphire (2002 - GBA)",
      "series": "Pokemon",
      "description": "The Sky High Pokémon, Rayquaza lives in the Earth's ozone layer, surviving off of water and atmospheric particles, only descending if Groudon and Kyogre were to fight. Rayquaza is able to Mega Evolve, and does not require a Mega Stone to do so. Rayquaza also appeared in Super Smash Bros Brawl as one of the bosses in the Subspace Emissary, where he attacked Diddy Kong before being defeated by Fox.",
      "bigName": "Rayquaza"
    },
    {
      "id": 501,
      "name": "Jirachi",
      "games": "Pokémon Ruby & Sapphire (2002 - GBA)",
      "series": "Pokemon",
      "description": "The Wish Pokémon, Jirachi is only awake for seven days every thousand years. During this time, it can grant any wish written on the notes attached to its head. To keep it safe from any enemies, it protects itself in a crystal shell before falling back asleep. Jirachi conceals a third eye on its stomach, known as its \"true\" eye. If you end up lucky enough to see this Pokémon in your lifetime, don't hesitate to make a wish!",
      "bigName": "Jirachi"
    },
    {
      "id": 502,
      "name": "Deoxys (Normal Forme)",
      "games": "Pokémon Fire Red & Leaf Green (2003 - GBA)",
      "series": "Pokemon",
      "description": "Deoxys is not even from the Pokémon world at all: it came from outer space! Deoxys came to the Pokémon world as a virus within a meteorite that got mutated into this terrifying Mythical Pokémon. It is a Psychic-type able to take multiple forms by touching a meteorite: the Normal Forme, the Attack Forme, the Defense Forme, and the Speed Forme.",
      "bigName": "Deoxys (Normal Forme)"
    },
    {
      "id": 503,
      "name": "Piplup",
      "games": "Pokémon Diamond & Pearl (2006 - DS)",
      "series": "Pokemon",
      "description": "Piplup is the Water-type starter offered by Professor Rowan to young, starting trainers in the Sinnoh region. The Penguin Pokémon may be adorable, but it is also very proud, so much so that it refuses to take any food offered to it. It isn’t a great walker, often clumsily waddling and falling over, but it is a fantastic swimmer that can dive for over ten minutes. It evolves into Prinplup and then into Empoleon.",
      "bigName": "Piplup"
    },
    {
      "id": 504,
      "name": "Garchomp",
      "games": "Pokémon Diamond & Pearl (2006 - DS)",
      "series": "Pokemon",
      "description": "The final form of Gible and Gabite, Garchomp is a Dragon/Ground-type that’s highly valued among trainers for its power. In fact, the Champion of the Sinnoh League famously has one on her team. It can fold up its body and extend its wings to fly at high speeds, equal or even greater to that of a jet plane, earning it the name, the Mach Pokémon. It can Mega Evolve into Mega Garchomp using a Garchompite.",
      "bigName": "Garchomp"
    },
    {
      "id": 505,
      "name": "Mega Lucario",
      "games": "Pokémon X & Y (2013 - 3DS)",
      "series": "Pokemon",
      "description": "Korrina, a Gym Leader in the Kalos region, studies Mega Evolution, a phenomenon in which, if a Pokémon holds the appropriate Mega Stone, and its trainer, a Key Stone, the Pokémon can temporarily take on a more powerful form. The first Pokémon known to Mega Evolve, and the first you witness doing it, was a Lucario. As Mega Lucario, its combative instinct take hold, and it becomes a merciless fighting machine.",
      "bigName": "Mega Lucario"
    },
    {
      "id": 506,
      "name": "Abomasnow",
      "games": "Pokémon Diamond & Pearl (2006 - DS)",
      "series": "Pokemon",
      "description": "The evolution of Snover, Abomasnow is known as the Frost Tree Pokémon, and it is, appropriately, a Grass/Ice-type. It can create blizzards to disguise itself, which led many to call it the abominable snowman. Abomasnow will only come out of hiding when snow flowers bloom, and when said flowers’ petals fall, it retreats back into its hiding place. It can Mega Evolve by holding an Abomasite.",
      "bigName": "Abomasnow"
    },
    {
      "id": 507,
      "name": "Rotom",
      "games": "Pokémon Diamond & Pearl (2006 - DS)",
      "series": "Pokemon",
      "description": "Rotom is a Pokémon made entirely out of plasma, and resembles a living bolt of electricity. Rotom has the unique ability to possess ordinary electrical appliances, including microwaves, refrigerators, washing machines, etc. While it is normally an Electric/Ghost-type, its typing changes to reflect whatever appliance it possesses. In the Alola region, some Rotoms have taken over Pokédexes, which even granted them the ability to speak.",
      "bigName": "Rotom"
    },
    {
      "id": 508,
      "name": "Uxie, Mesprit & Azelf",
      "games": "Pokémon Diamond & Pearl (2006 - DS)",
      "series": "Pokemon",
      "description": "These three Legendary Psychic-types are known as the lake guardians, and they each reside in one of the three lakes of the Sinnoh region. They were born from a single egg, created by Arceus at the beginning of time. Uxie, Mesprit and Azelf are said to have given human knowledge, emotion and willpower, respectively, and a horrific myth states that undesired humans that approach them are at risk of having those taken away.",
      "bigName": "Uxie, Mesprit & Azelf"
    },
    {
      "id": 509,
      "name": "Dialga",
      "games": "Pokémon Diamond & Pearl (2006 - DS)",
      "series": "Pokemon",
      "description": "The Temporal Pokémon, this Steel/Dragon-type is a common figure in the creation myths of the Sinnoh region. It is said time started flowing when Dialga was born, and its powers allow it to travel through time as well as control its flow. It resides in a separate dimension, but can be summoned at the Spear Pillar atop Mt. Coronet. Its signature move, Roar of Time, is so powerful that a Pokémon hit with it must take another turn to recover.",
      "bigName": "Dialga"
    },
    {
      "id": 510,
      "name": "Palkia",
      "games": "Pokémon Diamond & Pearl (2006 - DS)",
      "series": "Pokemon",
      "description": "The Spatial Pokémon, this Water/Dragon-type was created along with Palkia and Giratina by Arceus at Spear Pillar. While Dialga has power over time, Palkia has power over space, and has the ability to warp it to its will. Team Galactic planned to use either Dialga or Palkia’s power to further their plan to reshape the universe. Palkia’s signature move is Spacial Rend, in which it tears the space around its foe.",
      "bigName": "Palkia"
    },
    {
      "id": 511,
      "name": "Regigigas",
      "games": "Pokémon Diamond & Pearl (2006 - DS)",
      "series": "Pokemon",
      "description": "Regigigas is a legendary Pokémon from the Sinnoh region which moved the continents. It was feared by humans, so they sealed it away in Snowpoint Temple, sealing the keys (Regirock, Regice, and Registeel) in the Hoenn region. Regigigas is a powerful Normal-type, with the unique ability Slow Start. This makes Regigigas move slower for the first five turns in battle. This is needed, however, as Regigigas also has a powerful signature move, Crush Grip, which does more damage the more HP the target has remaining.",
      "bigName": "Regigigas"
    },
    {
      "id": 512,
      "name": "Giratina (Altered Forme)",
      "games": "Pokémon Diamond & Pearl (2006 - DS)",
      "series": "Pokemon",
      "description": "A legendary Dark/Dragon-type, Giratina was created along with Dialga and Palkia by Arceus, but it was banished from the world for its extremely violent nature, leading it to be known as the Renegade Pokémon. It represents antimatter, and has the power to control dimensions beyond those of time and space. By using its signature move, Shadow Force, Giratina can turn invisible for a brief time before striking its foe.",
      "bigName": "Giratina (Altered Forme)"
    },
    {
      "id": 513,
      "name": "Giratina (Origin Forme)",
      "games": "Pokémon Platinum (2008 - DS)",
      "series": "Pokemon",
      "description": "When in the normal world, Giratina’s appearance is altered due to gravitational changes, but it can revert to its true form if it holds a Griseous Orb or goes back to its home, the Distortion World. When Giratina was banished, it set up its home in this bizarre dimension, said to be the reverse of our world, where the laws of time and space are irrelevant. In this form, Giratina can levitate, and is much more offensive.",
      "bigName": "Giratina (Origin Forme)"
    },
    {
      "id": 514,
      "name": "Cresselia",
      "games": "Pokémon Diamond & Pearl (2006 - DS)",
      "series": "Pokemon",
      "description": "Cresselia, the Legendary Psychic-type Lunar Pokémon, is said to represent the crescent moon. It can be found on Fullmoon Island, but will then fly away and must be chased throughout Sinnoh before being caught. Those who sleep holding its feather, the Lunar Wing, are assured pleasant dreams. Its signature move, Lunar Dance, causes Cresselia to faint, but fully restores the Pokémon that takes its place.",
      "bigName": "Cresselia"
    },
    {
      "id": 515,
      "name": "Manaphy",
      "games": "Pokémon Diamond & Pearl (2006 - DS)",
      "series": "Pokemon",
      "description": "Manaphy, the Seafaring Pokémon, is a Mythical Water-type, whose body is said to be composed 80% of water. It has the wondrous ability to bond with any Pokémon, and can use its Heart Swap move to switch its stats with an opponent. Unusual among Mythical Pokémon, Manaphy can breed, laying an egg that hatches into a Phione. Stranger still, Phione cannot actually evolve into Manaphy.",
      "bigName": "Manaphy"
    },
    {
      "id": 516,
      "name": "Darkrai",
      "games": "Pokémon Diamond & Pearl (2006 - DS)",
      "series": "Pokemon",
      "description": "The Pitch-Black Pokémon Darkrai is a Mythical Dark-type often associated with the lunar eclipse. It inhabits people’s dreams, and can afflict them with unending nightmares. However, it means no harm to anyone, this is merely a defense mechanism. Its signature move is Dark Void, which can lull all those nearby to sleep, which doesn’t sound as impressive, until you remember what happens to those who sleep near Darkrai.",
      "bigName": "Darkrai"
    },
    {
      "id": 517,
      "name": "Shaymin (Land Forme)",
      "games": "Pokémon Diamond & Pearl (2006 - DS)",
      "series": "Pokemon",
      "description": "This Mythical Grass-type is known as the Gratitude Pokémon, as it can sense those with grateful hearts. A letter from Professor Oak tells you to head to Route 224, where you then find your way to Flower Paradise, where this Pokémon hides among the flowers. Shaymin can dissolve toxins in the air and instantly turn ruined lands into blooming fields. Its signature move, Seed Flare, can lower an opponent’s Special Defense.",
      "bigName": "Shaymin (Land Forme)"
    },
    {
      "id": 518,
      "name": "Shaymin (Sky Forme)",
      "games": "Pokémon Platinum (2008 - DS)",
      "series": "Pokemon",
      "description": "When Shaymin holds a blooming Gracidea flower during daytime, its body begins to change dramatically. It temporarily becomes its Sky Forme, where it gains the secondary Flying-type and the ability to take to the skies. While Shaymin in its Land Forme is shy and cowardly, in its Sky Forme it gains a confidence boost, becoming courageous and playful. Shaymin will revert to its Land Forme at night, if it is frozen or deposited into a PC.",
      "bigName": "Shaymin (Sky Forme)"
    },
    {
      "id": 519,
      "name": "Arceus",
      "games": "Pokémon Diamond & Pearl (2006 - DS)",
      "series": "Pokemon",
      "description": "The Alpha Pokémon, Arceus is known as the \"original one\". It is said that it not only created the Sinnoh region, but the universe, which it shaped by itself with its 1000 arms. Arceus is essentially the god of the Pokémon world, thus it is incredibly strong in battle. If you find one in a Poké Ball, it will use a gravity attack, which will send opponents hurdling towards the ground.",
      "bigName": "Arceus"
    },
    {
      "id": 520,
      "name": "Victini",
      "games": "Pokémon Black & White (2010 - DS)",
      "series": "Pokemon",
      "description": "A Mythical Psychic/Fire-type Pokémon, Victini is widely sought after, as it is said that any trainer that befriends it will always be victorious, hence it was named the Victory Pokémon. It creates infinite energy within its body, which it can share with anyone it touches. Victini can increase the accuracy of moves used by it and its allies through its ability Victory Star, especially useful in conjunction with its Searing Shot attack.",
      "bigName": "Victini"
    },
    {
      "id": 521,
      "name": "Oshawott",
      "games": "Pokémon Black & White (2010 - DS)",
      "series": "Pokemon",
      "description": "This cute Sea Otter Pokémon is the Water-type starter offered by Professor Juniper to young trainers in the Unova region. The shell on its stomach is actually a weapon called the scalchop, made of the same material of its claws, and it can be used for both attack and defense. Oshawott evolves into Dewott and then into Samurott, and it eventually leaves the scalchop behind and takes up the mighty seamitar.",
      "bigName": "Oshawott"
    },
    {
      "id": 522,
      "name": "Zoroark",
      "games": "Pokémon Black & White (2010 - DS)",
      "series": "Pokemon",
      "description": "Zoroark and his pre-evolution, Zorua, are the fabled Illusion Fox Pokemon from the Black and White games. This deceptive Dark-type Pokemon has the unique Illusion ability that allows it to disguise itself as any Pokemon in the game. It's not a perfect illusion as it retains its own moveset so skilled players can see through its ruse. \"That can't be a Suicune! It can't learn Night Daze!\" Zoroark can be summoned from a Poke Ball where it uses Fury Swipes to finish the fight.",
      "bigName": "Zoroark"
    },
    {
      "id": 523,
      "name": "Chandelure",
      "games": "Pokémon Black & White (2010 - DS)",
      "series": "Pokemon",
      "description": "Chandelure is the final stage of the Litwick line, and it evolves from a Lampent when exposed to a Dusk Stone. This Ghost/Fire-type is known as the Luring Pokémon for a truly chilling reason. By waving its arms, it creates a hypnotizing effect that puts its victims in a trance. Chandelure will then absorb the victim’s spirit and burn it as fuel. Some may also absorb fire based attack to make themselves stronger.",
      "bigName": "Chandelure"
    },
    {
      "id": 524,
      "name": "Hydreigon",
      "games": "Pokémon Black & White (2010 - DS)",
      "series": "Pokemon",
      "description": "Every time Deino evolves, it gains a new head. So, it becomes the two-headed Zweilous and finally, the three-headed monstrosity Hydreigon. Its central head is the only one with actual brains, while the other two are only there to bite and to eat. It is a ruthless Dark/Dragon-type that considers anything that moves an enemy and, therefore, something to be destroyed. I wonder how brave you’d have to be, as a trainer, to try and bond with such a beast.",
      "bigName": "Hydreigon"
    },
    {
      "id": 525,
      "name": "Cobalion, Terrakion, & Virizion",
      "games": "Pokémon Black & White (2010 - DS)",
      "series": "Pokemon",
      "description": "From left to right: the Grassland Pokémon, Virizion; the Cavern Pokémon Terrakion; and the Iron Will Pokémon, Cobalion. These three Pokémon form a group called the Swords of Justice, which defend wild Pokémon and their habitats from humans’ destructive actions. Because of this, all three greatly distrust humans. They share the ability Justified, the signature move Sacred Sword, and a secondary Fighting type.",
      "bigName": "Cobalion, Terrakion, & Virizion"
    },
    {
      "id": 526,
      "name": "Tornadus (Incarnate Forme)",
      "games": "Pokémon Black & White (2010 - DS)",
      "series": "Pokemon",
      "description": "The Legendary Cyclone Pokémon, Tornadus is a member of the Forces of Nature, a trio of Pokémon which can control the weather. Tornadus’ powers involve creating incredible and destructive windstorms, and it is capable of traveling at speeds up to 200 miles per hour. When exposed to a Reveal Glass, it turns into its bird-like Therian Forme. Fun fact: Tornadus is the only known Pokémon to be a pure Flying-type.",
      "bigName": "Tornadus (Incarnate Forme)"
    },
    {
      "id": 527,
      "name": "Thundurus (Incarnate Forme)",
      "games": "Pokémon Black & White (2010 - DS)",
      "series": "Pokemon",
      "description": "The Legendary Bolt Strike Pokémon, Thundurus is an Electric/Flying-type, and a member of the Forces of Nature. As its name suggests, its tail can discharge immense lightning bolts, which char the land wherever it passes, causing forest fires and other problems which lead it to being disliked among the people of Unova. It often fights against Tornadus, and these battles create terrible and destructive storms.",
      "bigName": "Thundurus (Incarnate Forme)"
    },
    {
      "id": 528,
      "name": "Reshiram",
      "games": "Pokémon Black & White (2010 - DS)",
      "series": "Pokemon",
      "description": "Known as the Vast White Pokémon, Reshiram is a Legendary Dragon/Fire-type which resides atop the Dragonspiral Tower in the Unova region. Legends say that it and Zekrom were once a single Pokémon, which aided a pair of twin brothers in creating the Unova region. However, when the brothers began to argue over what they wished to pursue, the Pokémon spilt in two. Reshiram sided with the older brother, who sought truth.",
      "bigName": "Reshiram"
    },
    {
      "id": 529,
      "name": "Zekrom",
      "games": "Pokémon Black & White (2010 - DS)",
      "series": "Pokemon",
      "description": "Zekrom is a Legendary Dragon/Electric-type that is known as the Deep Black Pokémon. It can generate electricity and hides in a thunder cloud as it flies across Unova. It was once one with Reshiram, but when the legendary dragon split, Zekrom sided with the younger twin, which sought to build an ideal world. In the present day, Team Plasma leader N seeks one of the dragons to further his goal, and the only way to stop it is to use the other.",
      "bigName": "Zekrom"
    },
    {
      "id": 530,
      "name": "Landorus (Therian Forme)",
      "games": "Landorus: Pokémon Black & White (2010 - DS)/ Therian Forme: Pokémon Black 2 & White 2 (2012 - DS)",
      "series": "Pokemon",
      "description": "The Abundance Pokémon, this Legendary Ground/Flying-type is one of the Forces of Nature, and unlike the other two, it is revered by the populace for granting bountiful crops, and keeping Thunderus and Tornadus in check. Like the other Forces of Nature, it has a humanoid Incarnate Forme, but when exposed to a Reveal Glass, changes to its true, beast-like Therian Forme. This form has different stats and the Intimidate ability.",
      "bigName": "Landorus (Therian Forme)"
    },
    {
      "id": 531,
      "name": "Kyurem",
      "games": "Pokémon Black & White (2010 - DS)",
      "series": "Pokemon",
      "description": "Kyurem is a Legendary Dragon/Ice-type that is known as the Boundary Pokémon. Legend says that it arrived on the planet as a meteor, which crashed in the Unova region in a location now known as the Giant Chasm. Others yet claim Kyurem is what remained of the legendary Pokémon after it was split into Reshiram and Zekrom. It generates incredible freezing energy within it, but when it leaked out, its body became completely frozen.",
      "bigName": "Kyurem"
    },
    {
      "id": 532,
      "name": "Kyurem (Black Kyurem)",
      "games": "Pokémon Black 2 & White 2 (2012 - DS)",
      "series": "Pokemon",
      "description": "According to the legend which claims Kyurem is the remains of the legendary dragon, it is constantly waiting for someone to fill its body with either truth or ideals. This can be done by way of DNA Splicers to start a process called Absofusion, which combines Kyurem with one of the other dragons. When fused with Zekrom, it becomes Black Kyurem, gaining the Teravolt ability, as well as the signature move Freeze Shock, and Zekrom’s move Fusion Bolt.",
      "bigName": "Kyurem (Black Kyurem)"
    },
    {
      "id": 533,
      "name": "Kyurem (White Kyurem)",
      "games": "Pokémon Black 2 & White 2 (2012 - DS)",
      "series": "Pokemon",
      "description": "When DNA Splicers are used to fuse Kyurem with Reshiram, it becomes White Kyurem. In this form, Kyurem’s ability becomes Turboblaze, which, much like Black Kyurem’s Teravolt, allows moves to hit the target regardless of its abilities. It is also able to learn both Kyurem’s and Reshiram’s signature moves, Glaciate and Fusion Flare, respectively, and a new move of its own, the powerful Ice Burn.",
      "bigName": "Kyurem (White Kyurem)"
    },
    {
      "id": 534,
      "name": "Keldeo (Ordinary Forme)",
      "games": "Pokémon Black & White (2010 - DS)",
      "series": "Pokemon",
      "description": "The Mythical Colt Pokémon, Keldeo is a Water/Fighting-type and the newest member of the Swords of Justice. When a human war caused a destructive fire in the Moor of Icirrus, the Swords of Justice led the Pokémon to safety, but young Keldeo was separated from its parents and adopted by them. Keldeo can blast water from its hooves, and is able to run across water, which it does as it travels the world.",
      "bigName": "Keldeo (Ordinary Forme)"
    },
    {
      "id": 535,
      "name": "Keldeo (Resolute Forme)",
      "games": "Pokémon Black 2 & White 2 (2012 - DS)",
      "series": "Pokemon",
      "description": "If a trainer brings Keldeo to the Pledge Grove, the Pokémon will wish to come out of its Pokémon in order to examine the enormous rock with carvings on its surface. These marks were made by the Swords of Justice, and upon seeing it, Keldeo will then learn the Swords of Justice’s signature move, Sacred Sword. This causes a change in Keldeo’s body, changing it into its Resolute Forme, in which he is stronger and swifter.",
      "bigName": "Keldeo (Resolute Forme)"
    },
    {
      "id": 536,
      "name": "Meloetta (Aria Forme)",
      "games": "Pokémon Black & White (2010 - DS)",
      "series": "Pokemon",
      "description": "The Mythical Melody Pokémon, Meloetta is a Normal/Psychic-type known for its beauty and love of music. It can sing melodies which affect the feelings of those who hear it, and many famous songs were composed inspired by Meloetta’s singing. Though normally in Aria Forme, when it uses its signature move, Relic Song, in battle, Meloetta will change into its Normal/Fighting-type Pirouette Forme, in which it prefers to dance rather than sing.",
      "bigName": "Meloetta (Aria Forme)"
    },
    {
      "id": 537,
      "name": "Genesect",
      "games": "Pokémon Black & White (2010 - DS)",
      "series": "Pokemon",
      "description": "Genesect is a Mythical Bug/Steel-type that was previously extinct before one was revived from a fossil by Team Plasma, leading to it being known as the Paleozoic Pokémon. Not content with simply bringing this powerful hunter back, they performed several modifications on it, most notably adding the cannon on its back. Depending on the specific Drive that’s inserted into the cannon, the attack type of its signature move, Techno Blast, changes.",
      "bigName": "Genesect"
    },
    {
      "id": 538,
      "name": "Chespin",
      "games": "Pokémon X & Y (2013 - 3DS)",
      "series": "Pokemon",
      "description": "Chespin is the Grass Starter of Kalos alongside the Fire Starter, Fennekin, and the Water Starter, Froakie. It evolves into Quilladin starting at level 16, which evolves into Chesnaught starting at level 36. The quills on it's head are usually soft. When it flexes them, the points become so hard and sharp that they can pierce rock. Chespin can be found as a Poke Ball summon where it uses Seed Bomb to damage opponents.",
      "bigName": "Chespin"
    },
    {
      "id": 539,
      "name": "Aegislash",
      "games": "Pokémon X and Y (2013 - 3DS)",
      "series": "Pokemon",
      "description": "Watch out! It's the Ghost and Steel type Pokemon, Aegislash, from the Kalos region. It's the final stage of the Honedge line and it evolves from the second stage, Doublade, through use of a Dusk Stone. Apparently, it can detect the innate qualities of leadership. According to legend, whoever it recognizes is destined to become king. Aegislash has the power to \"change it's stance\" depending on what moves it does. \"Blade Form\" for offensive moves and \"Shield Form\" for defense moves.",
      "bigName": "Aegislash"
    },
    {
      "id": 540,
      "name": "Inkay",
      "games": "Pokémon X & Y (2013 - 3DS)",
      "series": "Pokemon",
      "description": "From Pokemon X & Y, Inkay bounces its way into the battle! This Dark and Psychic squid flashes the light-emitting spots on its body, which drains its opponent's will to fight. When you get Inkay in Smash with the Poke Ball item, it will flop around and cause your opponent to trip, leaving them vulnerable. In order to evolve Inkay into Malamar, you must hold your Nintendo 3DS upside down when it hits level 30.",
      "bigName": "Inkay"
    },
    {
      "id": 541,
      "name": "Dedenne",
      "games": "Pokémon X & Y (2013 - 3DS)",
      "series": "Pokemon",
      "description": "What? No, that’s not a Pikachu! It’s a Dedenne, an Electric/Fairy type that resembles Pikachu. Dedenne normally has one of two abilities: Pickup or Cheek Pouch. The latter is unique to Dedenne, Bunnelby, and Diggersby, and causes it to heal some HP whenever it eats a Berry. Dedenne mostly attacks with Electric and Fairy moves, as you’ll see if you summon it during a battle. In Smash, Dedenne attacks with Discharge, creating a circle of electricity around itself.",
      "bigName": "Dedenne"
    },
    {
      "id": 542,
      "name": "Xerneas",
      "games": "Pokémon X & Y (2013 - 3DS)",
      "series": "Pokemon",
      "description": "The Life Pokémon and counterpart to Yveltal, Xerneas is a Fairy-type Legendary Pokémon who resides in the Kalos region. Its horns change in coloration depending on whether it is in battle or resting. When it reaches the end of its life cycle, it shares its life energy with the beings around it and turns into a tree to sleep a millennium before reviving. Its signature move, Geomancy, sharply raises some of its stats.",
      "bigName": "Xerneas"
    },
    {
      "id": 543,
      "name": "Yveltal",
      "games": "Pokémon X & Y (2013 - 3DS)",
      "series": "Pokemon",
      "description": "The Destruction Pokémon, while Xerneas brings life to the world, Yveltal only brings destruction wherever it goes. To the point where if it was to die, it would absorb the life energy of every living creature along with it. Yveltal is rather powerful, utilizing its signature move Oblivion Wing to drain the opponent's health, and then absorbing it to himself. Yveltal should not be taken lightly, and is an incredibly dangerous foe.",
      "bigName": "Yveltal"
    },
    {
      "id": 544,
      "name": "Zygarde (50% Forme)",
      "games": "Pokémon X & Y (2013 - 3DS)",
      "series": "Pokemon",
      "description": "The Order Pokémon, Zygarde is a Ground/Dragon-type Legendary Pokémon native to the Kalos region. Zygarde lives deep within a cave, and carefully monitors the ecosystem, attacking when it is disrupted. He also acts to keep the balance between Xerneas and Ylveltal, and its ability, Aura Break, serves to reverse their respective Fairy Aura and Dark Aura abilities, which normally increase the power of fairy and dark type moves respectively.",
      "bigName": "Zygarde (50% Forme)"
    },
    {
      "id": 545,
      "name": "Zygarde (Complete Forme)",
      "games": "Pokémon Sun & Moon (2016 - 3DS)",
      "series": "Pokemon",
      "description": "Unique among Pokémon, Zygarde is composed of numerous individual units, Zygarde Cells which compose its body, and Zygarde Cores, which compose its brain. Depending on how many of them are collected, the Pokémon takes on a different form. At 10% collected cells, it resembles a hound. At 50% cells, he resembles a serpentine creature. When all cells are united, it takes on its true, complete forme, whose power exceeds both Xerneas and Ylveltal. The incomplete forms can also temporarily take on this form with the Power Construct ability.",
      "bigName": "Zygarde (Complete Forme)"
    },
    {
      "id": 546,
      "name": "Diancie",
      "games": "Pokémon X & Y (2013 - 3DS)",
      "series": "Pokemon",
      "description": "The Jewel Pokémon, Diancie is a Mythical Rock/Fairy-type Pokémon, which is said to be a sudden transformation of a Carbink, although it is not an evolution of it, and the process itself has never been seen. Its glimmering body is one of the most wondrous sights in the world, and it has power to turn the carbon in the air into diamonds. Its signature move, Diamond Storm, raises its defense for each enemy that it hits.",
      "bigName": "Diancie"
    },
    {
      "id": 547,
      "name": "Mega Diancie",
      "games": "Pokémon Omega Ruby & Alpha Sapphire (2014 - 3DS)",
      "series": "Pokemon",
      "description": "Diancie is actually the only Mythical Pokémon that is known to Mega Evolve, which it does by holding a Diancite. This mega form greatly changes Diancie’s appearance, with the crystals in its body growing and changing to take on the appearance of a dress. Its noble beauty has earned it the nickname “the Royal Pink Princess.” Mega Diancie gains the Magic Bounce ability, which allows it to reflect stat-altering moves.",
      "bigName": "Mega Diancie"
    },
    {
      "id": 548,
      "name": "Hoopa (Confined)",
      "games": "Pokémon X & Y (2013 - 3DS)",
      "series": "Pokemon",
      "description": "The Djinn Pokémon, Hoopa is a Mythical Psychic/Ghost-type Pokémon with dimension-bending powers. This mischievous troublemaker gathers things it likes and then uses its loop to warp them through space to somewhere else. It has a signature move called Hyperspace Hole, in which Hoopa uses its loop to warp next to the opponent and strike it. This allows the move to always hit, even if the opponent is protected by Protect or similar moves.",
      "bigName": "Hoopa (Confined)"
    },
    {
      "id": 549,
      "name": "Hoopa (Unbound)",
      "games": "Pokémon Omega Ruby & Alpha Sapphire (2014 - 3DS)",
      "series": "Pokemon",
      "description": "This is the true form of Hoopa, a Psychic/Dark-type whose dimension-bending powers are truly immense; it’s even said to once have stolen an entire castle. Fearing its power, ancient people sealed it with a Prison Bottle, turning it into his confined form. You can use that same bottle to release his Unbound form, but he’ll only remain in it for three days at a time. Hoopa Unbound has a new signature move, Hyperspace Fury, which deals damage and lowers the enemy’s Defense.",
      "bigName": "Hoopa (Unbound)"
    },
    {
      "id": 550,
      "name": "Volcanion",
      "games": "Pokémon X & Y (2013 - 3DS)",
      "series": "Pokemon",
      "description": "It's the rare Mythical Pokemon, Volcanion, here to help steam up your Spirit Battles. Volcanion is very unique as its currently the only Pokemon in existence to have the dual-typing of Fire and Water. And when you mix fire and water together, you get steam. Big and bulky, this brute expels its internal steam from the arms on its back. It has enough power to blow away a mountain. Like most Mythical Pokemon, Volcanion was released in his debut games, Pokemon X & Y, through an event post launch in late 2015.",
      "bigName": "Volcanion"
    },
    {
      "id": 551,
      "name": "Rowlet",
      "games": "Pokémon Sun & Moon (2016 - 3DS)",
      "series": "Pokemon",
      "description": "Little Rowlet is one of the starters in Pokemon Sun and Moon along with Litten and Popplio. It evolves into Dartrix starting at level 17, which evolves into Decidueye starting at level 34. Unlike the other starters, it's has a dual typing of Grass and Flying, becoming Grass and Ghost when it fully evolves. It sends its feathers, which are as sharp as blades, flying in attack. It feels relaxed in tight, dark places like a Trainer's bag.",
      "bigName": "Rowlet"
    },
    {
      "id": 552,
      "name": "Bewear",
      "games": "Pokémon Sun & Moon (2016 - 3DS)",
      "series": "Pokemon",
      "description": "This Normal/Fighting-type evolution of the plush-like Stufful has a name that doubles as a warning. Do not approach Bewear carelessly. It is not known as the Strong Arm Pokémon for nothing. It loves to hug its friends, but it cannot control its overwhelming strength, so if it hugs you, you can kiss your spine goodbye. This led it to be deemed the most deadly Pokémon in Alola, and its habitat is typically off-limits.",
      "bigName": "Bewear"
    },
    {
      "id": 553,
      "name": "Pyukumuku",
      "games": "Pokémon Sun & Moon (2016 - 3DS)",
      "series": "Pokemon",
      "description": "The Sea Cucumber Pokémon, while it learns no attacking moves, Pyukumuku is capable of learning many defensive moves. Pyukumuku will use their innards to catch food and deal with foes. They often strand themselves on beaches trying to reach food. In Super Smash Bros Ultimate, it can appear in a Poké Ball and use Counter. You can pick him up and toss him across the map!",
      "bigName": "Pyukumuku"
    },
    {
      "id": 554,
      "name": "Togedemaru",
      "games": "Pokémon Sun & Moon (2016 - 3DS)",
      "series": "Pokemon",
      "description": "Alolan Raichu obviously evolves from Alolan Pikachu, the variant of the famed Pokémon that evolved in the tropical clima… wait a minute. We’re receiving word that there is no such thing as Alolan Pikachu. This is actually a completely different Pokémon called Togedemaru, an Electric/Steel-type whose spikes act as lightning rods. It is also the only Pokémon capable of learning the move Zing Zap.",
      "bigName": "Togedemaru"
    },
    {
      "id": 555,
      "name": "Mimikyu",
      "games": "Pokémon Sun & Moon (2016 - 3DS)",
      "series": "Pokemon",
      "description": "The Ghost/Fairy-type Mimikyu has probably one of the most heart-wrenching stories of any Pokémon. Its true appearance is unknown, because anyone who sees it becomes ill or even dies. This leads people to avoid it, and Mimikyu became very lonely as a result. Because of this, it disguises itself as the popular Pikachu, hoping that people will love it as much as they love Pikachu. If its disguise is damaged, Mimikyu will become very sad, and will work through the night to fix it. It has an exclusive Z-Move, Let’s Snuggle Forever, which… we don’t want to describe.",
      "bigName": "Mimikyu"
    },
    {
      "id": 556,
      "name": "Tapu Koko",
      "games": "Pokémon Sun & Moon (2016 - 3DS)",
      "series": "Pokemon",
      "description": "Tapu Koko, a dual-type Electric/Fairy Legendary Pokemon, hails from the Alola region in Pokemon Sun and Moon. It is the guardian deity of Melemele Island, with Tapu Bulu, Tapu Lele, and Tapu Fini being the deities of the other islands. It summons thunderclouds and stores their lightning inside its body. It can be summoned in Smash with the Poke Ball item, where it uses it's Electric Surge ability to stun and shock with an electric field.",
      "bigName": "Tapu Koko"
    },
    {
      "id": 557,
      "name": "Solgaleo",
      "games": "Pokémon Sun & Moon (2016 - 3DS)",
      "series": "Pokemon",
      "description": "The Sunne Pokémon, this Legendary Psychic/Steel-type is sometimes called the beast that devours the sun. Solgaleo is one of the first Legendary Pokémon to be a part of an evolutionary line, being the final evolution of Cosmog and Cosmoem. It can create Ultra Wormholes and radiates light so intense it turns the darkest nights into midday. It changes into its Radiant Sun phase when it uses its signature move, Sunsteel Strike, or its exclusive Z-Move Searing Sunraze Smash.",
      "bigName": "Solgaleo"
    },
    {
      "id": 558,
      "name": "Lunala",
      "games": "Pokémon Sun & Moon (2016 - 3DS)",
      "series": "Pokemon",
      "description": "The Moone Pokémon, this Legendary Psychic/Ghost-type is known as the beast that calls the moon and, along with Solgaleo, is one of the possible evolutions of Cosmog. Together, Solgaleo and Lunala can create more Cosmog. Lunala has the power to absorb light, which can make a dark veil cover even the brightest of days. It changes into its Full Moon phase when it uses its signature move, Moongeist Beam, or its exclusive Z-move Menacing Moonraze Maelstrom.",
      "bigName": "Lunala"
    },
    {
      "id": 559,
      "name": "Nihilego",
      "games": "Pokémon Sun & Moon (2016 - 3DS)",
      "series": "Pokemon",
      "description": "Nihilego is one of the Ultra Beasts, bizarre extradimensional Pokémon hailing from a different world known as the Ultra Space. This Rock/Poison-type was known as UB-01 Symbiont, when scientific understanding of it and other Ultra Beasts was still in its infancy. Nihilego is a parasitic organism, operating by latching onto a person’s head and secreting neurotoxins in their brain to alter their behavior.",
      "bigName": "Nihilego"
    },
    {
      "id": 560,
      "name": "Necrozma",
      "games": "Pokémon Sun & Moon (2016 - 3DS)",
      "series": "Pokemon",
      "description": "This Psychic Legendary Pokemon is known as Necrozma here in this dimension. This powerful Pokemon makes up a third of the Light trio with Solgaleo and Lunala making up the other two. It's powerful Photon Geyser attack can be extremely deadly to inexperienced Pokemon. While it wasn't that prevalent in Sun and Moon, in Ultra Sun and Ultra Moon it fuses with either Solgaleo or Lunala (depending on the game). In some realms, Necrozma is known as the \"Blinding One\". I wonder why...",
      "bigName": "Necrozma"
    },
    {
      "id": 561,
      "name": "Magearna",
      "games": "Pokémon Sun & Moon (2016 - 3DS)",
      "series": "Pokemon",
      "description": "There have been many Pokémon artificially created by humans, such as Porygon or Mewtwo, but what sets this Mythical Steel/Fairy-type apart is just how old it is. Created by a scientist five centuries ago, Magearna’s metallic, faded body is merely a vessel; its true form is the Soul-Heart in its center. Created using the life energy of other Pokémon, it is very sensitive to other’s pain. Its signature move is called the Fleur Cannon.",
      "bigName": "Magearna"
    },
    {
      "id": 562,
      "name": "Detective Pikachu",
      "games": "Detective Pikachu - Birth of a New Duo (2016 - 3DS)",
      "series": "Pokemon",
      "description": "This isn't your average Pikachu, unlike most other Pokémon, Detective Pikachu is capable of speech, although only one person can understand him. He also has many human traits to him, such as drinking tea and coffee and is easily infatuated with human women. However, his ability to speak comes at a price, as he is unable to use any moves and lacks the speed of a normal Pikachu. But he can interpret and translate other Pokémon to get information out of them. You can count on this unlikely hero to help Ryme City!",
      "bigName": "Detective Pikachu"
    },
    {
      "id": 563,
      "name": "Ness",
      "games": "Earthbound (1994 - SNES)",
      "series": "Mother",
      "description": "Ness, along with his friends Paula. Jeff, and Poo, are the protagonists of EarthBound. Ness himself is the ‘tank’ of the group, capable of dealing large amounts of damage to enemies while being able to easily heal himself and/or his friends using his psychic powers. While Ness is a brave adventurer, he loves his Mom and phones her up every once in a while to avoid getting homesick. Fun Fact: EarthBound contains many homages to Western music, such as the drumbeat from The Megaton Walk song being a reference to The Beatles’ Sgt. Pepper’s Lonely Hearts Club!",
      "bigName": "Ness"
    },
    {
      "id": 564,
      "name": "Lucas",
      "games": "Mother 3 (2006 - GBA)",
      "series": "Mother",
      "description": "A young boy from Tazmilly Village, the gentle younger twin of Claus and son of Flint and Hinawa. Lucas fights using sticks and baseball bats as his primary weapons, along with his signature PK Love power. Lucas is very reserved and shy, he can show determination, but only when the situation permits it. He and his family go missing from Alec's house, causing his village to search for him. Lucas and Claus are saved, but his parents are gone. He mutters something about how the \"forest came to life and took his family.\" While Ness is more lax and carefree, it seems Lucas can't escape tragedy.",
      "bigName": "Lucas"
    },
    {
      "id": 565,
      "name": "Ninten",
      "games": "Earthbound Beginnings (1989 - Famicom)",
      "series": "Mother",
      "description": "A young boy from the suburbs of Podunk. He uses baseball bats as his primary weapon alongside boomerangs and slingshots. Ninten also suffers from asthma, which can affect him during battle. His adventure starts when a poltergeist invades his home, posessing a lamp and baby doll. It turns out it was no poltergeist, but the work of the intergalactic evil known as Giygas. Like the other protagonists of his series, Ninten is capable of PSI, and learns many moves along the way.",
      "bigName": "Ninten"
    },
    {
      "id": 566,
      "name": "Ana",
      "games": "Earthbound Beginnings (1989 - Famicom)",
      "series": "Mother",
      "description": "At the Union Station in Reindeer, an old woman gives to Ninten a hat that belonged to a girl named Ana. Ninten finds this Ana in a church in the remote town of Snowman, where she is famous for her psychic powers. Recently, Ana has been troubled by bad dreams, and to top it off, her mother has disappeared. She joins Ninten's party in hopes of finding clues to her mother’s whereabouts.",
      "bigName": "Ana"
    },
    {
      "id": 567,
      "name": "Lloyd",
      "games": "Earthbound Beginnings (1989 - Famicom)",
      "series": "Mother",
      "description": "One of Ninten's allies on his journey. He utilizes guns as his primary weapons. But he can use slingshots as well as boomerangs, he is incapable of PSI. However what he lacks in psychic abilities he more than makes up for in his wisdom. There's also plenty of items exclusive to him like bottle rockets. Unfortunately for him, he has very poor self-esteem and is also physically weak. Due to him being frequently bullied, he hid in a garbage can on the rooftops. Ninten proves he's not out to bully him by giving him a bottle rocket. Sometimes even one friend can go a long way!",
      "bigName": "Lloyd"
    },
    {
      "id": 568,
      "name": "Teddy",
      "games": "Earthbound Beginnings (1989 - Famicom)",
      "series": "Mother",
      "description": "Teddy is the boss of the fearsome BB Gang, a group of delinquents which terrorize the city of Ellay. Teddy is a ruthless leader and criminal, with no qualms about attacking young children such as Ninten, which he does. However, he soon decides to (rather forcibly) join Ninten’s party in order to avenge his parent’s death in Mt. Itoi. He can use no PSI, but he is very strong, and can use actual weapons such as Katanas.",
      "bigName": "Teddy"
    },
    {
      "id": 569,
      "name": "EVE",
      "games": "Earthbound Beginnings (1989 - Famicom)",
      "series": "Mother",
      "description": "EVE is a robot who joins your party for a short time in EarthBound Beginnings. She was built by ninten's great-grandfather, George, to protect him. While her offense and defence are both extremely high, her time with Ninten and his friends is unfortunately limited, as she is necessary in order to obtain the seventh melody (of the eight Ninten needs).",
      "bigName": "EVE"
    },
    {
      "id": 570,
      "name": "Flying Man",
      "games": "Earthbound Beginnings (1989 - Famicom)",
      "series": "Mother",
      "description": "The Flying Men are the physical manifestations of one’s courage and can be found in Magicant in both EarthBound and EarthBound Beginnings. They can be recruited to aid Ninten or Ness in battle, and will fight until they are knocked out. However, there are only five Flying Men in total, so enlist their help wisely!",
      "bigName": "Flying Man"
    },
    {
      "id": 571,
      "name": "Starman",
      "games": "Earthbound Beginnings (1989 - Famicom)",
      "series": "Mother",
      "description": "High ranking soldiers in Giygas's army and one of the original users of PSI. In 1909, a man named George was abducted by them, taking advantage by documenting their strange psychic abilities. It is unknown if they are organic or inorganic, as their body is covered by a suit. As an assist trophy, they will teleport around the stage and blast you with electricity. Fun fact: their name is a homage to a song by David Bowie.",
      "bigName": "Starman"
    },
    {
      "id": 572,
      "name": "Paula",
      "games": "Earthbound (1994 - SNES)",
      "series": "Mother",
      "description": "Paula Jones is a young girl who helps her parents out at Polestar Preschool. After getting kidnapped and being rescued by Ness, Paula joins the party with her Teddy Bear in tow. She also gives Ness the Franklin Badge, allowing him to defeat the evil Mr. Carpainter. In battle, Paula primarly uses her magic abilites to attack, but she can also equip Frying Pans to SMAAAASH her enemies!",
      "bigName": "Paula"
    },
    {
      "id": 573,
      "name": "Jeff",
      "games": "Earthbound (1994 - SNES)",
      "series": "Mother",
      "description": "The third ally Ness meets on his journey. He is very similar to Lloyd from the previous game. Not being able to use PSI and having a high wisdom stat. As well as utilizing bottle rockets. Jeff is the son of the brilliant Dr. Andonuts. Due to this, he is able to make useless items into helpful machines and items for battle. He also has the unique ability Spy. Which allows him to see the attributes of enemies and even snatch the item they're carrying. As an assist trophy. Jeff will stand in one spot and launch bottle rockets that home in on the closest opponent. You don't need psychic powers to be powerful yourself!",
      "bigName": "Jeff"
    },
    {
      "id": 574,
      "name": "Poo",
      "games": "Earthbound (1994 - SNES)",
      "series": "Mother",
      "description": "Yes, his name is Poo. Get the laughs out, and let’s be grownups about this, ok? So, Poo is the Crown Prince of Dalaam, and has undergone extreme physical training to perfect his abilities. Equipping most weapons actually makes him weaker than simply using his fists, and he has a variety of powerful offensive and defensive PSI. He even has the ability to transform into most enemies. You could say any party is improved by adding Poo to it.",
      "bigName": "Poo"
    },
    {
      "id": 575,
      "name": "Buzz Buzz",
      "games": "Earthbound (1994 - SNES)",
      "series": "Mother",
      "description": "A bee he is... not. One night, a meteor crashed on the hills near the peaceful town of Onett. When Ness went to investigate, he met this not-a-bee, Buzz Buzz. He is actually a messenger from the future, and he tells Ness that he must stop the advent of the evil alien Giygas. He may seem small, but he is actually very powerful, being able to deal with Starmen with ease. Porky's mom, however, is a different story.",
      "bigName": "Buzz Buzz"
    },
    {
      "id": 576,
      "name": "Ness´s Father",
      "games": "Earthbound (1994 - SNES)",
      "series": "Mother",
      "description": "No, Ness's father is not literally a phone, but that's the only way you'll be able to reach him. He's not around much, but that doesn't mean he doesn't love his son. Give him a call and he'll help you in anyway he can, even if you just wanna talk. Never forget what you're fighting for, Ness.",
      "bigName": "Ness´s Father"
    },
    {
      "id": 577,
      "name": "Mr. Saturn",
      "games": "Earthbound (1994 - SNES)",
      "series": "Mother",
      "description": "Boing! These cute little creatures - referred to as Mr. Saturn regardless of their genders - have become the unofficial ‘face’ of the EarthBound franchise. The Mr. Saturns themselves are of unknown origin - they may or may not be extraterrestrial. Regardless, they’re adorable, incredibly intelligent, and always willing to help, as they worked with Dr. Andonuts to build the Phase Distorter for Ness and his friends to use. The Mr. Saturn font used in the Japanese version of this game was inspired by Shigesato Itoi’s daughter’s handwriting. Zoom!",
      "bigName": "Mr. Saturn"
    },
    {
      "id": 578,
      "name": "Dungeon Man",
      "games": "Earthbound (1994 - SNES)",
      "series": "Mother",
      "description": "Created by Dr. Andonuts, Dungeon Man is a gigantic stone tower looking like a man, made to satisfy dungeon designer Brick Road's biggest dream... becoming a dungeon?! He can control the entire tower by himself and briefly accompanies Ness and friends, dealing massive damage to enemies. If you look closely, you can see Brick Road's original face inside of the Dungeon Man.",
      "bigName": "Dungeon Man"
    },
    {
      "id": 579,
      "name": "Ramblin' Evil Mushroom",
      "games": "Earthbound (1994 - SNES)",
      "series": "Mother",
      "description": "This walking mushroom can be found outside Twoson. They're almost always in groups, so you'll have to plan ahead. They don't deal much damage, but leave you with the \"Mushroom\" status effect, which reverses your overworld controls. In Super Smash Bros Ultimate, they appear as an item with the same function.",
      "bigName": "Ramblin' Evil Mushroom"
    },
    {
      "id": 580,
      "name": "Master Belch",
      "games": "Earthbound (1994 - SNES)",
      "series": "Mother",
      "description": "This boss stinks! Master Belch is quite literally a giant, animated pile of vomit, who controls many other slimy little piles. He settled on a base hidden behind the waterfall at Saturn Valley, and enslaved the poor Mr. Saturns to mass produce the Fly Honey which he loves so much. His nauseating breath can make you sick instantly, and he can resist almost anything you throw at him, but if you can distract him with something, he is rather easy to defeat.",
      "bigName": "Master Belch"
    },
    {
      "id": 581,
      "name": "Flint",
      "games": "Mother 3 (2006 - GBA)",
      "series": "Mother",
      "description": "This man is the father of Lucas and Claus, the husband of Hinawa, and the initial player character of Mother 3. After the prologue, the entirety of Chapter 1 is played as Flint. His skills involve brute force, including Swing, Strengthen Up, and Power Smash. Flint’s chapter involves him going out to rescue Fuel from a forest fire, followed by him going out to look for Lucas, Claus, and Hinawa after they never arrive home. He finds out, however, that Hinawa has been stabbed through the chest by a Drago, which causes him to lash out and be the first person ever to get thrown in Tazmily Village’s jail.",
      "bigName": "Flint"
    },
    {
      "id": 582,
      "name": "Hinawa",
      "games": "Mother 3 (2006 - GBA)",
      "series": "Mother",
      "description": "Hinawa is a lover of sunflowers, the mother of Lucas and Claus, and the wife of Flint. She is on a trip to her father Alec’s house when, on the way back, she, Lucas, and Claus are attacked by a Drago. The kids escape, but Hinawa’s fate is uncertain until Bronson returns to Flint and tells him the news: Hinawa has been pierced through the chest. Each of her family members react in a different way, although there is something none of them consider: Is her spirit truly gone from this world?",
      "bigName": "Hinawa"
    },
    {
      "id": 583,
      "name": "Boney",
      "games": "Mother 3 (2006 - GBA)",
      "series": "Mother",
      "description": "Boney is the loyal dog of Flint. Boney is a very fast dog, and usually attacks first dring battle. Boney first appears in his doghouse, and then fetches Duster for Flint so they can search for Hinawa. Later, once Lucas grows up, Boney joins his party as the second permanent member, after Lucas himself. Boney’s special skill is Sniff, allowing him to see enemies’ weaknesses. Boney is normally very well-behaved and intelligent, but he sometimes steals and eats healing items from other characters! Bad dog, Boney!",
      "bigName": "Boney"
    },
    {
      "id": 584,
      "name": "Duster",
      "games": "Mother 3 (2006 - GBA)",
      "series": "Mother",
      "description": "Duster is the fourth main party member of Mother 3, as well as a thief. He cannot use PSI, and makes up for it with his thief skills such as Wall Staples, Smoke Bombs, and Rope Snake. Duster’s main weapon is shoes, and, despite his injured leg, he mainly attacks with kicks. He first appears to help Flint search for Hinawa, and later is assigned by his father to infiltrate Osohe Castle. This leads to his meeting with Kumatora. Later, after an attack on the castle by the Pigmask Army, Duster vanishes, along with the Egg of Light. Where could he have gone?",
      "bigName": "Duster"
    },
    {
      "id": 585,
      "name": "Kumatora",
      "games": "Mother 3 (2006 - GBA)",
      "series": "Mother",
      "description": "Kumatora is the princess of Osohe Castle, despite lacking royal blood. She was raised by the Magypsies, leading to her tomboyish personality and PSI abilities. She is the third main party member of Mother 3, and she first appears when Duster takes her pendant. She is very understanding after finding out Duster was trying to find something else, and joins the party during the attack on Osohe Castle. Later, she along with Wess defend Duster after his disappearance, and later rescues Salsa from his bonds under the greedy Fassad. She had to go undercover, though, so she wouldn’t get caught by the Pigmask Army. Where could she be now?",
      "bigName": "Kumatora"
    },
    {
      "id": 586,
      "name": "Salsa",
      "games": "Mother 3 (2006 - GBA)",
      "series": "Mother",
      "description": "Salsa is a monkey separated from his girlfriend, Samba, by the Pigmask Army commander, Fassad. He is forced to obey Fassad or get shocked by the Punishizer, a special shock collar. His special abilities in battle include Apologize, Monkey Mimic, and Make Laugh. Salsa is forced into helping the Pigmasks and Fassad take over Tazmily Village, including selling Happy Boxes to the villagers. When he sells one near Kumatora, she reads his mind with her PSI, and promises to rescue him. After Kumatora follows through with this promise, Salsa sets off to rescue Samba.",
      "bigName": "Salsa"
    },
    {
      "id": 587,
      "name": "Ultimate Chimera",
      "games": "Mother 3 (2006 - GBA)",
      "series": "Mother",
      "description": "A terrifying creation made by the brilliant scientist Dr. Andonuts. One has to wonder which species were combined to create this creature. In Smash, it roams New Pork City, instantly crushing anyone who touches it with a horrific bite! But don't worry, there's an off-button on his back, which...doesn't work?! Get away from it, as fast as you can!!",
      "bigName": "Ultimate Chimera"
    },
    {
      "id": 588,
      "name": "Absolutely Safe Capsule",
      "games": "Mother 3 (2006 - GBA)",
      "series": "Mother",
      "description": "Designed by the brilliant scientist Dr. Andonuts and the Saturns, the Absolutely Safe Capsule was made for Porky Minch to protect himself from any and all harm, but this capsule seems to have many design flaws. For example, its inability to attack or even to allow its rider to leave it, but at least it does its primary function right!",
      "bigName": "Absolutely Safe Capsule"
    },
    {
      "id": 589,
      "name": "Masked Man",
      "games": "Mother 3 (2006 - GBA)",
      "series": "Mother",
      "description": "The Masked Man is Porky’s slave robot, used to pull the seven Needles due to him being one of the only two people with the ability to use PK Love, alongside Lucas. The Masked Man can attack with lightning, a sword and an arm cannon. The Masked Man first debuts at the end of Chapter 5, entering the Pigmask’s ship atop Thunder Tower. It is rumored that the Masked Man can talk. Where exactly did Porky get the Masked Man, though?",
      "bigName": "Masked Man"
    },
    {
      "id": 590,
      "name": "Claus",
      "games": "Mother 3 (2006 - GBA)",
      "series": "Mother",
      "description": "Claus is Lucas’s brother, as well as his partner during the prologue. Later, after he and Lucas narrowly survive a fluke Drago attack, he grieves for his mom and helps his dad, Flint, escape jail. He is angry at the Drago for killing his mom, Hinawa, and therefore goes after it. However, the only weapon that can pierce a Drago’s hide is its own fang, which Claus lacks. After learning PSI from the Magypsies, Claus goes and attempts to fight the Mecha-Drago, but disappears before Flint and Alec arrive, and is presumed dead.",
      "bigName": "Claus"
    },
    {
      "id": 591,
      "name": "Captain Falcon",
      "games": "F-Zero (1990 - SNES)",
      "series": "FZero",
      "description": "Little is known about Captain Douglas Jay Falcon, other than he is 36-years-old and hails from Port Town. Despite the mystery that surrounds him, he’s well known throughout the galaxy as both a legendary bounty hunter and an ace F-Zero pilot. His machine, the Blue Falcon, is a well-rounded vehicle that is impeccably tuned, although Captain Falcon plans to use the Grand Prix prize money to build an even better Neo Blue Falcon.",
      "bigName": "Captain Falcon"
    },
    {
      "id": 592,
      "name": "Dr. Stewart",
      "games": "F-Zero (1990 - SNES)",
      "series": "FZero",
      "description": "Dr. Stewart is a medical doctor and a remarkably-skilled surgeon, but after the death of his father, a professor and F-Zero pilot, Stewart picked up his father’s Golden Fox machine and entered the Grand Prix. After the Horrific Grand Finale, Dr. Stewart put his surgical skills to good use, and was able to save multiple participants. He claims the red scarf he always wears around his neck is a symbol of friendship, although, to whom, he will not say.",
      "bigName": "Dr. Stewart"
    },
    {
      "id": 593,
      "name": "Pico",
      "games": "F-Zero (1990 - SNES)",
      "series": "FZero",
      "description": "This humanoid alien from an unspecified species is an aggressive, cold-blooded pilot. He used to work for the Polipoto Army’s Special Fighting Unit, but rumors have spread that he is also an infamous hitman. His machine, the Wild Goose, was originally designed as a military vehicle and not for racing, explaining its high durability but lack of acceleration. Though, Pico is 124-years-old, that makes him only an adolescent among his people.",
      "bigName": "Pico"
    },
    {
      "id": 594,
      "name": "Samurai Goroh",
      "games": "F-Zero (1990 - SNES)",
      "series": "FZero",
      "description": "Formerly a member of the Internova Police Force who was expelled for his extreme methods, Samurai Goroh is now the leader of a renegade group of bandits based in Red Canyon. Goroh also doubles as a bounty hunter, and has developed a bitter rivalry with Captain Falcon. In fact, Goroh became an F-Zero pilot solely in hopes of defeating Falcon, though he is yet to succeed. His machine, the Fire Stingray, has excellent stats, as Goroh continually works to improve it.",
      "bigName": "Samurai Goroh"
    },
    {
      "id": 595,
      "name": "Jody Summer",
      "games": "F-Zero X (1998 - N64)",
      "series": "FZero",
      "description": "From a very young age, Jody Summer was always a prodigy, setting numerous athletic records at a young age before becoming one of the Galactic Space Federation’s top combat pilots, leading her to be hailed as a hero. After the death of her father, the inventor of the G-Diffuser anti-gravity system used by F-Zero machines, Summer entered the Grand Prix to honor him. She named her machine “White Cat”, which was her father’s nickname for her.",
      "bigName": "Jody Summer"
    },
    {
      "id": 596,
      "name": "Mighty Gazelle",
      "games": "F-Zero X (1998 - N64)",
      "series": "FZero",
      "description": "After years of playing racing games, Mighty Gazelle decided to try the real thing and soon qualified for the F-Zero Grand Prix, piloting his Red Gazelle. Unfortunately, he was severely injured during the infamous Horrific Grand Finale. Cyber Stick, Inc. was able to rebuild him as a cyborg, which saved his life, but caused his wife to leave him. With nothing left to lose, Mighty Gazelle returned to the tracks, polishing his skills with no fear of death.",
      "bigName": "Mighty Gazelle"
    },
    {
      "id": 597,
      "name": "Baba",
      "games": "F-Zero X (1998 - N64)",
      "series": "FZero",
      "description": "The pilot of the Iron Tiger machine, this promising rookie grew up in the lush natural beauty of the planet Giant, and trained exceptionally hard for his first F-Zero circuit, at the age of 18. Though he didn't win, he acknowledged he still had much to learn, so he set out on a spiritual journey in which he grew much stronger. With this newfound strength, he is confident he can win, maybe too confident.",
      "bigName": "Baba"
    },
    {
      "id": 598,
      "name": "Octoman",
      "games": "F-Zero X (1998 - N64)",
      "series": "FZero",
      "description": "Octoman is an alien representative of the planet Takora, a world at odds with the Milky Way Space Federation… and with most of the galaxy, a situation which put the planet’s economy in a dire state. Octoman then entered the F-Zero Grand Prix in hopes of using the prize money to pay for the education of his children, and donate the rest to the government of Takora. His machine, Deep Claw, has been especially designed to fit his unusual anatomy.",
      "bigName": "Octoman"
    },
    {
      "id": 599,
      "name": "Mr. EAD",
      "games": "F-Zero X (1998 - N64)",
      "series": "FZero",
      "description": "Mr. EAD is an advanced, highly intelligent android developed by the mysterious EAD group. The group entered him into the F-Zero Grand Prix in order to complete the test of his AI programming; his victory would signal the creation of a truly flawless android. Despite his name being the same as that of the group which created him, he claims he took it from the stats of his machine, the Great Star. He also holds a few similarities to a certain plumber.",
      "bigName": "Mr. EAD"
    },
    {
      "id": 600,
      "name": "Bio-Rex",
      "games": "F-Zero X (1998 - N64)",
      "series": "FZero",
      "description": "Bio-Rex was created by the Keerlon Corporation using long-outlawed genetic engineering research on the DNA of a fossilized dinosaur egg. The result of this experiment was a creature with the body of a T-Rex, but human-level brain functions. Soon after being born, Bio-Rex had to endure multiple press conferences, public appearances and scrutiny, until he had one too many. Now, he races his Big Fang machine to prove he is superior to humans.",
      "bigName": "Bio-Rex"
    },
    {
      "id": 601,
      "name": "Blood Falcon",
      "games": "F-Zero X (1998 - N64)",
      "series": "FZero",
      "description": "Blood Falcon is an evil clone of Captain Falcon created by his arch-nemesis, Black Shadow, using blood stolen when the Captain was hospitalized after a terrible accident. Despite being listed as 37-years-old on the F-Zero listings, he’s actually only four years old. Blood Falcon is unyieldingly loyal to his creator, and aims to destroy Captain Falcon so there remains only one. His machine, the Blood Hawk, was especially designed to compete with the Blue Falcon.",
      "bigName": "Blood Falcon"
    },
    {
      "id": 602,
      "name": "Jack Levin",
      "games": "F-Zero X (1998 - N64)",
      "series": "FZero",
      "description": "Jack Levin is a former member of an extremely popular pop music group, which he joined in order to lift his family from poverty. His popularity only increased when he became an F-Zero pilot with his Astro Robin machine, leading to huge sales in merchandise, and hordes of female fans. Much to his frustration, though, his fame and looks often overshadow his legitimate racing skills in public discussion.",
      "bigName": "Jack Levin"
    },
    {
      "id": 603,
      "name": "Zoda",
      "games": "F-Zero X (1998 - N64)",
      "series": "FZero",
      "description": "The leader of the Zolorkian Coalition of Uma-41, Zoda is an alien super-villain intent on conquering Earth. He is the arch-nemesis of the superhero couple, Super Arrow and Mrs. Arrow, and has also been marked by Captain Falcon. His machine, the Death Anchor, was illegally modified to give him an unfair advantage over other racers. His unstable behavior comes from a machine which continuously pumps adrenaline and dopamine into his body.",
      "bigName": "Zoda"
    },
    {
      "id": 604,
      "name": "Black Shadow",
      "games": "F-Zero X (1998 - N64)",
      "series": "FZero",
      "description": "The (other) King of Evil, Black Shadow is wanted by the Federation and the mortal enemy of Captain Falcon, who’s one of the few to have had any success in capturing his minions. Because of this, Black Shadow wishes to destroy Falcon, preferably in front of millions of his fans, so he had his own F-Zero machine, the Black Bull, built in order to enter the race, and kill Captain Falcon during it.",
      "bigName": "Black Shadow"
    },
    {
      "id": 605,
      "name": "The Skull",
      "games": "F-Zero X (1998 - N64)",
      "series": "FZero",
      "description": "The Skull was born Sterling LaVaughn, the greatest pilot in the F-MAX Grand Prix, the precursor to F-Zero, some two hundred years pilot. Conscious of his own mortality, he used an unknown combination of science and black magic in order to live forever. At the F-MAX Grand Finale, he and many others crashed and burned to death, but two centuries later, his skeleton rose and returned to the races, piloting the Sonic Phantom, and calling himself The Skull.",
      "bigName": "The Skull"
    },
    {
      "id": 606,
      "name": "Ice Climbers",
      "games": "Ice Climber (1985 - NES)",
      "series": "IceClimber",
      "description": "Popo (the male in the blue parka) and Nana (the female in the pink parka) are a duo of hammer-wielding mountain climbers who spend most of their days scaling enormous peaks in hopes of finding vegetables such as cucumbers, carrots, and most noteworthy, eggplants. Traversing these mountains is no easy task; creatures such as topis and polar bears often get in their way, and one wrong move on the ice can result in a serious fall. Such difficulties do not stop them, however. Their expertise makes short work of any obstacle in their path. No matter the challenge, they always stick together, although whether they are siblings, lovers, or just friends remains a mystery to this day.",
      "bigName": "Ice Climbers"
    },
    {
      "id": 607,
      "name": "Condor",
      "games": "Ice Climber (1985 - NES)",
      "series": "IceClimber",
      "description": "The Condor is a creature that appears at the end of the bonus stages in Ice Climber. He's the one who the climbers' vegetables, so they have to climb after him! Grabbing on to his talons as one of the Ice Climbers will end the level, sort of like the flagpole from Mario's games. The Condor makes an appearence in the Ice Climbers' Break the Targets stage in Melee, then again as part of their entrance animations in Super Smash Bros. Brawl and Ultimate.",
      "bigName": "Condor"
    },
    {
      "id": 608,
      "name": "Polar Bear",
      "games": "Ice Climber (1985 - NES)",
      "series": "IceClimber",
      "description": "See this smug looking polar bear? He may look funny, but you won’t be laughing when he appears. Skilled climbers will never actually see him, but if Popo or Nana takes too long dilly-dallying in one floor of the mountain, this bear will appear and jump. The earthquake caused by this massive guy’s jumps causes the entire screen to move up one level, dooming any Ice Climbers stuck down there.",
      "bigName": "Polar Bear"
    },
    {
      "id": 609,
      "name": "Eggplant",
      "games": "Ice Climber (1985 - NES)",
      "series": "IceClimber",
      "description": "These cute little eggplants with eyes are just one of the many types of vegetables that Popo and Nana must retrieve from the Condor atop the icy mountains. There are also carrots, pumpkins, you name it, but the eggplants are more famous because they appeared on the first bonus level. Don’t take too long trying to collect them all though, or else you might run out of time and lose the stage!",
      "bigName": "Eggplant"
    },
    {
      "id": 610,
      "name": "Marth",
      "games": "Fire Emblem: Shadow Dragon and the Blade of Light (1990 - Famicom)",
      "series": "FireEmblem",
      "description": "The betrayed prince of the Kingdom of Altea, descendant of the hero Anri. He was forced into exile when the Dolhr Empire invaded his home kingdom. He went on to wield the divine weapon Falchion to defeat the dark dragon Medeus. He later goes on to another campaign to save Altea from the empire of Archanea. Known as a gifted swordsman and tactician, Marth always strives to finish battles with zero casualties on his side. In Super Smash Brothers, Marth's Falchion does more damage at the tip of the blade than closer to the hilt. His neutral special, the shield breaker, does more damage to shields, potentially breaking and opponent's shield and leaving them in a vulnerable state.",
      "bigName": "Marth"
    },
    {
      "id": 611,
      "name": "Lucina",
      "games": "Fire Emblem Awakening (2012 - 3DS)",
      "series": "FireEmblem",
      "description": "Lucina is the daughter of Chrom and princess of Ylisse. She is but a baby during the events of Fire Emblem Awakening, but in the future, the fell dragon Grima brings ruin to the world, and an adult Lucina travels back in time with her friends to prevent it from happening. She tries to hide her identity from the people of the past by donning a mask and calling herself Marth, after her ancestor, the Hero-King of Altea.",
      "bigName": "Lucina"
    },
    {
      "id": 612,
      "name": "Roy (Fire Emblem)",
      "games": "Super Smash Bros. Melee (2001 - Gamecube) / Fire Emblem: The Binding Blade (2002 - GBA)",
      "series": "FireEmblem",
      "description": "Roy is the fifteen-year old heir to Pherae, one of the noble houses of the country of Lycia. With his father Eliwood falling ill, and the militant nation of Bern threatening war against the other countries, Roy is called back from his studies and entrusted with leading Pherae’s army. In Smash, Roy wields the Binding Blade, a legendary weapon once wielded by the founder of Bern, and which had been sealed away in a temple.",
      "bigName": "Roy (Fire Emblem)"
    },
    {
      "id": 613,
      "name": "Chrom",
      "games": "Fire Emblem Awakening (2012 - 3DS)",
      "series": "FireEmblem",
      "description": "A distant descendant of the Hero-King Marth, Chrom is the prince of the Halidom of Ylisse, which now stands where once stood the nation of Archanea. More a man of action than of politics, Chrom leads a group of soldiers called the Shepherds, as they protect the country’s people from bandits, and the ever-growing threat of the neighbouring nation of Plegia. His weapon is the Exalted Falchion, a treasure inherited by his family from the Hero-King.",
      "bigName": "Chrom"
    },
    {
      "id": 614,
      "name": "Ike (Path of Radiance)",
      "games": "Fire Emblem: Path of Radiance (2005 - Gamecube)",
      "series": "FireEmblem",
      "description": "After his father, Greil, is killed by a mysterious Black Knight, Ike succeeds him as the leader of a band of mercenaries who fight brigands and protect local villagers for money. However, Ike and his group would be destined for much greater things, as they find out once they meet with Princess Elincia. His weapon of choice is the Ragnell, a sword blessed by the goddess Ashera. Despite it being a two-handed sword, Ike is strong enough to swing it with one hand.",
      "bigName": "Ike (Path of Radiance)"
    },
    {
      "id": 615,
      "name": "Ike (Radiant Dawn)",
      "games": "Fire Emblem: Radiant Dawn (2007 - Wii)",
      "series": "FireEmblem",
      "description": "Three years after the end of the Mad King’s War, Daein and Crimea are still in the process of rebuilding, but new conflicts are on the horizon, as the Begnion Empire oppresses the people of Daein and wages war on the laguz. Ike, who gave up a position on Elincia’s court to return to the simple life of a mercenary, joins the newly-formed Laguz Alliance to help fight against the forces of Begnion.",
      "bigName": "Ike (Radiant Dawn)"
    },
    {
      "id": 616,
      "name": "Robin (Male)",
      "games": "Fire Emblem Awakening (2012 - 3DS)",
      "series": "FireEmblem",
      "description": "Robin was found lying unconscious on an open field by Chrom and his shepherds. Though he could remember little other than his name, he immediately proved to have incredible tactical knowledge, and helped the Shepherds win many battles. Him and Chrom form an unbreakable friendship as they fight the escalating forces which threaten Ylisse and the world. In Smash, he brings a magical Levin Sword, a weak Bronze Sword, and a variety of tomes.",
      "bigName": "Robin (Male)"
    },
    {
      "id": 617,
      "name": "Robin (Female)",
      "games": "Fire Emblem Awakening (2012 - 3DS)",
      "series": "FireEmblem",
      "description": "Robin is the Avatar of Fire Emblem Awakening, as they represent the player, they can be customized. You can change their hair and overall appearance, their name, and even their gender. This is more than simply and aesthetic change though, as choosing a female Robin can change the marriage options available to you. You could even have the female Robin marry Chrom, and therefore, become Lucina’s mother!",
      "bigName": "Robin (Female)"
    },
    {
      "id": 618,
      "name": "Corrin (Male)",
      "games": "Fire Emblem Fates (2015 - 3DS)",
      "series": "FireEmblem",
      "description": "Two kingdoms, two ways of life. Corrin was born to the royal family of Hoshido, a kingdom of peace, but was kidnapped at a very young age by King Garon of the militant nation of Nohr, and raised as his son through most of his life. Now a teenager, Corrin finds himself at the crux of a war between the two nations and must make choice. Side with his blood relatives in Hoshido, with his adoptive family in Nohr, or forge his own, separate path.",
      "bigName": "Corrin (Male)"
    },
    {
      "id": 619,
      "name": "Corrin (Female)",
      "games": "Fire Emblem Fates (2015 - 3DS)",
      "series": "FireEmblem",
      "description": "Corrin is the first Lord in the Fire Emblem series to also be a customizable Avatar, and like Robin you can change their name, gender and appearance. Otherwise, Corrin’s story and abilities remain the same. Corrin is a half-dragon, who can transform her body parts into a dragon’s, and use the power of Dragon Vein to alter surrounding terrain. She also yields the legendary sword Yato, in its final and most powerful form, Omega Yato.",
      "bigName": "Corrin (Female)"
    },
    {
      "id": 620,
      "name": "Caeda",
      "games": "Fire Emblem: Shadow Dragon and the Blade of Light (1990 - Famicom)",
      "series": "FireEmblem",
      "description": "The pure-hearted princess of Talys, and eventual wife of Marth. She rides a pegasus into battle and wields the Wing Spear. Ever devout to Marth, she stays by his side for most of both The War of Shadows and The War of Heroes. In both wars, she serves an important role not only as a fighter, but as one who coerced many enemies to Marth's side. History remembers her as a model pegasus knight, remembered for her strength, kindness, and uncanny ability to persuade. Long after her death, royal marriages are held with the bride holding a wing-tipped spear, similar to the one that she used in battle.",
      "bigName": "Caeda"
    },
    {
      "id": 621,
      "name": "Jagen",
      "games": "Fire Emblem: Shadow Dragon and the Blade of Light (1990 - Famicom)",
      "series": "FireEmblem",
      "description": "Jagen is a veteran knight of Altea, acting as Marth's guardian and advisor. The 58-year-old is fiercely patriotic to his kingdom, participating in many battles under its banner for decades. Later on, during Marth's campaign against Archanea, Jagen retires as a knight, but continues to serve a King Marth's advisor. Jagen is seen as both wise and forward-thinking.",
      "bigName": "Jagen"
    },
    {
      "id": 622,
      "name": "Draug",
      "games": "Fire Emblem: Shadow Dragon and the Blade of Light (1990 - Famicom)",
      "series": "FireEmblem",
      "description": "Draug is a 25 year old Altean armored knight who follows Marth through both of his campaigns. Like many Altean knights, he is strongly patriotic, willing to lay his life on the line during both wars. He is friends with Gordin and Gordin's younger brother Ryan. As an armor knight, he can only move a few spaces each turn, but has incredible defense. Draug is fantastic at choking points.",
      "bigName": "Draug"
    },
    {
      "id": 623,
      "name": "Wrys",
      "games": "Fire Emblem: Shadow Dragon and the Blade of Light (1990 - Famicom)",
      "series": "FireEmblem",
      "description": "He is Wrys, a humble priest. He cannot fight, but the staff he wields can heal Marth's wounded soldiers. When retaking Talys from pirates, Marth took Wrys with him, and he was very glad he did. After the wars were over, Wrys started a monastery and spent the rest of his days taking care of children orphaned during the wars.",
      "bigName": "Wrys"
    },
    {
      "id": 624,
      "name": "Bord & Cord & Barst",
      "games": "Fire Emblem: Shadow Dragon and the Blade of Light (1990 - Famicom)",
      "series": "FireEmblem",
      "description": "These three are axemen and are a part of a mecenary group based in Talys. They used to be woodcutters before joining with Marth and Caeda in the War of Shadows. Bord and Cord look and act almost identically to each other, though Bord would proclaim that he is the more handsome of the two. Barst is a fairly indecisive individual, switching from job to job quickly, though despite the chaos of his life, Barst strongly dislikes the chaos of war, and only wishes peace for he and his comrades. These three settle down as woodcutters at the end of the two wars that they participate in, eventually getting their wish.",
      "bigName": "Bord & Cord & Barst"
    },
    {
      "id": 625,
      "name": "Navarre",
      "games": "Fire Emblem: Shadow Dragon and the Blade of Light (1990 - Famicom)",
      "series": "FireEmblem",
      "description": "The \"Crimson Fencer,\" a deadly mercenary who wields the Killing Edge. He has a tenancy to work alongside bandits, although he has an even stronger tendency to protect women and children from harm, which often leads to him betraying bandit groups that he joins. The aloof swordsman has no loyalty to any country, and instead seeks wealth and more importantly, challenging battles. Some say that he has been spotted in several places at once, however, which leads to some speculation as to if he has an imposter.",
      "bigName": "Navarre"
    },
    {
      "id": 626,
      "name": "Merric",
      "games": "Fire Emblem: Shadow Dragon and the Blade of Light (1990 - Famicom)",
      "series": "FireEmblem",
      "description": "The Wind Mage who wields the tome Excalibur. Merric is an Altean noble who grew up with Marth, and then left to Khadein to study magic under Wendell. The naive mage is a close friend of Marth's, and helps him in both of his campaigns across Archanea. Humble and good to his core, Merric is often the one to teach and encourage his peers to continue learning, and after the two wars, he settles in Altea and builds a magical academy, where he serves as a teacher for the rest of his days.",
      "bigName": "Merric"
    },
    {
      "id": 627,
      "name": "Minerva",
      "games": "Fire Emblem: Shadow Dragon and the Blade of Light (1990 - Famicom)",
      "series": "FireEmblem",
      "description": "Minerva is the warrior princess of the kingdom of Macedon, a dracoknight and the leader of the Whitewings, a group of Pegasus Knights which defend the kingdom. She fights on the side of Dolhr, but it is not by choice. Her young sister Maria is being held hostage, and Minerva’s cooperation is the price to pay for Maria to continue to live. Many fear, but she is actually a kind person, and only wishes for her sister’s safety.",
      "bigName": "Minerva"
    },
    {
      "id": 628,
      "name": "Linde",
      "games": "Fire Emblem: Shadow Dragon and the Blade of Light (1990 - Famicom)",
      "series": "FireEmblem",
      "description": "Linde is the daughter of Miloah, a student of Gotoh, and a powerful mage who opposed Gharnef, and was killed by him. Gharnef then targeted Linde, who disguised as a boy to escpae him, but was ultimately captured by slavers and sold to the slave market. Linde is a talented mage, like her father, and can wield his powerful Aura spell, one of the most powerful light magic tomes in Archanea.",
      "bigName": "Linde"
    },
    {
      "id": 629,
      "name": "Pegasus Sisters",
      "games": "Fire Emblem: Shadow Dragon and the Blade of Light (1990 - Famicom)",
      "series": "FireEmblem",
      "description": "These three sisters are Pegasus Knights and the remaining members of the Whitewings, aside from their leader, Minerva. The green-haired Palla is the eldest and most down to earth, so to speak. The blue-haired Catria is the middle child, and the most serious and quiet. The red-haired Est is the youngest and most innocent, and though she starts out rather weak, she grows stronger at an impressive rate.",
      "bigName": "Pegasus Sisters"
    },
    {
      "id": 630,
      "name": "Tiki",
      "games": "Fire Emblem: Shadow Dragon and the Blade of Light (1990 - Famicom)",
      "series": "FireEmblem",
      "description": "Tiki may look and act like a child, no older than eight, but she is actually a thousand-year-old manakete, a race of dragons who take human form and store their draconic powers in Dragonstones. She is not just any other manakete either; Tiki is the princess of the Divine Dragons, and the daughter of Naga. Her power is so great, that if she were to lose control of it, it could be catastrophic, so her mother puts her in a deep slumber in the Ice Dragon Temple.",
      "bigName": "Tiki"
    },
    {
      "id": 631,
      "name": "Tiki (Naga's Voice)",
      "games": "Fire Emblem Awakening (2012 - 3DS)",
      "series": "FireEmblem",
      "description": "Two thousand years after the end of the War of Shadows, Tiki is now a young woman, a known to the people as the “Voice of the Divine Dragon”, as she is believed to speak for Naga and give her blessings to the people. She resides in a shrine atop the sacred Mila Tree, where she safeguards the Azure gem of the Fire Emblem. When she meets Lucina, she initially mistakes her for her old friend Marth, and nicknames her “Mar-Mar”.",
      "bigName": "Tiki (Naga's Voice)"
    },
    {
      "id": 632,
      "name": "Nyna",
      "games": "Fire Emblem: Shadow Dragon and the Blade of Light (1990 - Famicom)",
      "series": "FireEmblem",
      "description": "The princess of Archanea and the last surviving member of the royal family after it was decimated by the Dolhr Empire, Nyna’s sorrow is overwhelming and ever-evident. She joins Marth in his quest to destroy the Empire, and gifts him the sacred treasure of her kingdom, the Fire Emblem. She may not be of much use in combat, but she is a vital political ally to Marth’s cause.",
      "bigName": "Nyna"
    },
    {
      "id": 633,
      "name": "Camus",
      "games": "Fire Emblem: Shadow Dragon and the Blade of Light (1990 - Famicom)",
      "series": "FireEmblem",
      "description": "Camus is the leader of the Sable Knightsof Grust. When his king decides to ally with the empire of Dolhr, he stays with his country and fights Marth, despite what his integrity tells him to do. Above all else, he values loyalty to Grust. The 29 year old is the most able warrior alive, although after the War of Shadows, he seems to disappear. Where could have he left to?",
      "bigName": "Camus"
    },
    {
      "id": 634,
      "name": "Sirius",
      "games": "Fire Emblem: Mystery of the Emblem (1994 - SFC)",
      "series": "FireEmblem",
      "description": "Sirius is a mysterious knight of mysterious origin. He says he's from across the sea, but is he really? He wears that mask all of the time, so it's hard to say, but he seems awfully familiar. Speaking of, that mask is allegedly from a royal family across the sea. Regardless, this knight is awfully able, and he seems awfully interested in protecting the Grustian royal children...",
      "bigName": "Sirius"
    },
    {
      "id": 635,
      "name": "Medeus",
      "games": "Fire Emblem: Shadow Dragon and the Blade of Light (1990 - Famicom)",
      "series": "FireEmblem",
      "description": "The prince of the Earth Dragons and the only one to accept taking manakete form, Medeus was entrusted with guarding the sealed Earth Dragons, but as the centuries passed, he grew hateful of the humans who persecuted his fellow manaketes. He founded the Dolhr Empire to rule over humans, but was defeated by the hero Anri, wielding the Falchion and the Fire Emblem. Centuries later, he was resurrected by Gharnef to launch another attack on Archanea.",
      "bigName": "Medeus"
    },
    {
      "id": 636,
      "name": "Gharnef",
      "games": "Fire Emblem: Shadow Dragon and the Blade of Light (1990 - Famicom)",
      "series": "FireEmblem",
      "description": "Gharnef was once a just man, but when his master Gotoh chose Miloah as his successor over him, Gharnef was twisted by jealousy and hatred. He stole the Darkshpere, and his soul was sealed within it, corrupting him even further. The dark priest became a spectre of hatred, and resurrected the Shadow Dragon Medeus to aid him in conquering the world. He created the Imhullu spell, which renders him invulnerable to all attacks save for his master’s Starlight tome.",
      "bigName": "Gharnef"
    },
    {
      "id": 637,
      "name": "Alm & Celica (Young)",
      "games": "Fire Emblem Echoes: Shadows of Valentia (2017 - 3DS)",
      "series": "FireEmblem",
      "description": "In the peaceful Ram Village, the young Alm is raised and trained in combat by his grandfather, Mycen. A young girl named Celica comes into Mycen’s care, and Alm and her grow incredibly close, a friendship fortified by the fact they bore similar birthmarks on their opposite hands. When some shady characters take an interest in Celica, Mycen takes her away for her safety. As they say goodbye, Alm promises Celica that they’ll meet again someday.",
      "bigName": "Alm & Celica (Young)"
    },
    {
      "id": 638,
      "name": "Alm & Celica",
      "games": "Fire Emblem Gaiden (1992 - Famicom)",
      "series": "FireEmblem",
      "description": "The protagonists of Fire Emblem Gaiden, Alm and Celica are separated childhood friends who meet again once war breaks out between the kingdoms of Zofia, followers of Mila, and Rigel, followers of Duma. Alm is the strong fighter, the farm boy. Celica is the exiled princess of Zofia, and a powerful magic user. Together, the old friends must bring peace to the war-torn continent of Valentia.",
      "bigName": "Alm & Celica"
    },
    {
      "id": 639,
      "name": "Sigurd",
      "games": "Fire Emblem Genealogy of the Holy War (1996 - SFC)",
      "series": "FireEmblem",
      "description": "A descendant of one of the Twelve Crusaders and the prince of the Duchy of Chalphy. Sigurd leads his forces on a campaign across the continent of Jugdral, starting in his home castle where he fights off the bandit nation of Verdane. He means well, but often leaps into battle without considering the consequences of his actions. Unique among other main characters in Fire Emblem, Sigurd starts the game already promoted.",
      "bigName": "Sigurd"
    },
    {
      "id": 640,
      "name": "Deirdre",
      "games": "Fire Emblem: Genealogy of the Holy War (1996 - SFC)",
      "series": "FireEmblem",
      "description": "A mysterious young woman whom Sigurd found living in a small village deep within the spirit forest of Verdane. She was forbidden to speak or meet with men from outside the forest, but despite this, Sigurd and her fell in love, and the two eventually marry and have a child together, young Seliph. Unfortunately for them, Manfroy and his followers of the Loptyrian Cult seem to have a sinister interest in Deirdre.",
      "bigName": "Deirdre"
    },
    {
      "id": 641,
      "name": "Seliph",
      "games": "Fire Emblem: Genealogy of the Holy War (1996 - SFC)",
      "series": "FireEmblem",
      "description": "Seliph is the son of Sigurd and Deirdre and the true heir to the Duchy of Chalphy. Seliph was raised in a Jugdral dominated by the kingdom of Grannvale, now turned into a tyrannical empire by Arvis, his son Julius, and their horde of Loptyrian cultists. Seliph lived in hiding through most of his life, but revealed his existence to the empire when he fought to save a nearby village from the empire’s forces.",
      "bigName": "Seliph"
    },
    {
      "id": 642,
      "name": "Leif (Fire Emblem)",
      "games": "Fire Emblem: Genealogy of the Holy War (1996 - SFC)",
      "series": "FireEmblem",
      "description": "Leif is the deposed heir of the kingdom of Leonster who, as a baby, was rescued from an attack by Thracian forces by the knight Finn. He spent most of his life on the run from imperial forces, who wish to finish the job of destroying Leonster's royal lineage. However, after a village is destroyed and his friends are captured in an attempt to protect him, Leif decides that he is done running away, and will face the empire head on.",
      "bigName": "Leif (Fire Emblem)"
    },
    {
      "id": 643,
      "name": "Julius",
      "games": "Fire Emblem: Genealogy of the Holy War (1996 - SFC)",
      "series": "FireEmblem",
      "description": "Julius was born to Deirdre and Lord Arvis after the latter took control of the Kingdom of Grannvale. The Loptyrian archbishop gifts Julius with the tome of Loptous, which corrupts the young prince, turning into an extremely cruel ruler. His father is powerless to stop him, as Julius leads Jugdral into a dark age and starts the Child Hunts, the practice of kidnapping civilian kids to be brainwashed to serve Loptous.",
      "bigName": "Julius"
    },
    {
      "id": 644,
      "name": "Lilina",
      "games": "Fire Emblem: The Binding Blade (2002 - GBA)",
      "series": "FireEmblem",
      "description": "Lilina is the daughter of Marquess Hector of Ostia, and one of Roy’s closest friends since childhood. They studied together in Ostia, but had very different talents, with Roy taking up swordsmanship, and Lilina focusing on magic. When Roy was called back to his homeland by his sickly father, he found that bandits were attacking Pherae, and had kidnapped Lilina, who had gone ahead of him.",
      "bigName": "Lilina"
    },
    {
      "id": 645,
      "name": "Lyn",
      "games": "Fire Emblem (2003 - GBA)",
      "series": "FireEmblem",
      "description": "Lyndis, or Lyn, as most call her, is a young girl who lives alone in the Sacaen Plains after her tribe, the Lorca, was ravaged by bandits. Unbeknownst to her, her mother was actually the daughter of Lord Hausen, the Marquess of Caelin, making Lyn his heir. Once she discovers this, she decides to return to her grandfather. She is a skilled swordswoman, and wields the Mani Katti, a sacred weapon she received from a priest as a reward for saving his life.",
      "bigName": "Lyn"
    },
    {
      "id": 646,
      "name": "Lyn (Blade Lord)",
      "games": "Fire Emblem (2003 - GBA)",
      "series": "FireEmblem",
      "description": "By use of a Heaven Seal, Lyn can promote to the Blade Lord class, which is entirely exclusive to her, is particularly strong in the skill and speed stats, and allows her to equip both swords and bows, the only non-mounted class to do so. By this point in the story, Lyn has traded her trusted Mani Katti for its even more powerful sister weapon, the Sol Katti, which is particularly effective against dragons and wyverns.",
      "bigName": "Lyn (Blade Lord)"
    },
    {
      "id": 647,
      "name": "Eliwood",
      "games": "Fire Emblem: The Binding Blade (2002 - GBA)",
      "series": "FireEmblem",
      "description": "Eliwood, the future father of Roy, is the gentle and chivalrous son of the Marquess of Pherae. After the mysterious disappearance of his father Elbert, Eliwood sets out with his best friend Hector and their vassals to discover an assassin ring called the Black Fang transforming the continent of Elibe from underneath. A charming and well-composed youth, he can take one of three women for his wife and Roy's eventual mother – fellow noblewoman Lyn, the dutiful knight Fiora, or the enigmatic dancer Ninian.",
      "bigName": "Eliwood"
    },
    {
      "id": 648,
      "name": "Hector (Fire Emblem)",
      "games": "Fire Emblem: The Binding Blade (2002 - GBA)",
      "series": "FireEmblem",
      "description": "The restless, hot-blooded younger brother to the Marquess of Ostia, Hector is extremely loyal to his best friend Eliwood. When Eliwood’s father, Elbert, disappears, Hector immediately urges his brother to do something about it, but when he refuses, Hector decides to take action himself. Hector is a strong fighter and very good with an axe, being possibly the toughest of the three Lords in the game.",
      "bigName": "Hector (Fire Emblem)"
    },
    {
      "id": 649,
      "name": "Raven",
      "games": "Fire Emblem (2003 - GBA)",
      "series": "FireEmblem",
      "description": "A bitter teenage mercenary with a deep grudge against Ostia, Raven is first seen fighting alongside the Laus soldiers at Castle Caelin, which Eliwood is attempting to retake. He is actually Lord Raymond of the now-extinct House Cornwell, and the brother of Priscilla, who can convince him to change sides and join Eliwood’s army, though the real reason why he does so is to get close enough to Hector to get his revenge.",
      "bigName": "Raven"
    },
    {
      "id": 650,
      "name": "Ninian",
      "games": "Fire Emblem (2003 - GBA)",
      "series": "FireEmblem",
      "description": "Ninian is a mysterious dancer who, along with her younger brother Nils, is constantly targeted by the Black Fang, an organization which is attempting to capture them for some nefarious purpose. Lyn and Eliwood first meet her after rescuing her from a kidnapping, and her story would soon become inextricably tied to theirs. Her dancing can help other move twice on the same turn, but due to a sprained ankle, she couldn’t help out at first.",
      "bigName": "Ninian"
    },
    {
      "id": 651,
      "name": "Karel",
      "games": "Fire Emblem: The Binding Blade (2002 - GBA)",
      "series": "FireEmblem",
      "description": "When Roy and his allies meet Karel, he is called the Sword Saint, a sage-like swordmaster who seeks to enlighten young fighters on the art of the blade. However, he wasn’t always like this. When Roy’s father Eliwood knew him, Karel was instead called the Sword Demon, a battle-crazed warrior who wants nothing more in life than to find strong opponents to challenge him, who he then kills without remorse.",
      "bigName": "Karel"
    },
    {
      "id": 652,
      "name": "Nino",
      "games": "Fire Emblem (2003 - GBA)",
      "series": "FireEmblem",
      "description": "Nino is a fourteen-year-old girl who is exceptionally talented in the magical arts, despite never having received formal training or even learning how to read. Her parents were powerful mages, but were killed by the Black Fang, and Nino, still a mere child, was taken hostage by then and raised by Sonia, who resented the girl, no matter how much she craved her affection. Nino learned magic by hearing and memorizing the incantations that Sonia chanted.",
      "bigName": "Nino"
    },
    {
      "id": 653,
      "name": "Eirika",
      "games": "Fire Emblem: The Sacred Stones (2004 - GBA)",
      "series": "FireEmblem",
      "description": "The princess of Renais and twin sister of Ephraim. While she intends to solve conflicts without fighting, she is often forced to use her sword in battle. After the fall of her homeland, she was forced to flee to neighboring friendly territory. When reunited with her brother, she can use her bracelet to regain the Sacred Stone of Renais, a treasure used to seal the destructive Demon King.",
      "bigName": "Eirika"
    },
    {
      "id": 654,
      "name": "Ephraim",
      "games": "Fire Emblem: The Sacred Stones (2004 - GBA)",
      "series": "FireEmblem",
      "description": "The prince of Renais and the twin brother of Eirika. His skill with a lance is able to get him out of any fight he gets himself into. When war breaks out in Magvel, Ephraim sets out with a trusted group of retainers to charge into enemy territory. When reunited with Eirika, he can use his bracelet to access the Sacred Twin weapons of Renais; the thunder blade Sieglinde and the flame lance Siegmund.",
      "bigName": "Ephraim"
    },
    {
      "id": 655,
      "name": "L'Arachel",
      "games": "Fire Emblem: The Sacred Stones (2004 - GBA)",
      "series": "FireEmblem",
      "description": "I am L'Arachel of Rausten, the beautiful princess of peerless beauty and scourge of all evildoers! But surely you already know of my heroic quest to rid the world of miscreants, on which I was even accompanied by the delightful twins of Renais! With my holy staff, I vanquished not only their wounds, but also the grip of evil on our lands! ...Oh my, what a brilliant slogan that was. Excuse me, for I must quickly share it with my devout retainers!",
      "bigName": "L'Arachel"
    },
    {
      "id": 656,
      "name": "Lyon",
      "games": "Fire Emblem: The Sacred Stones (2004 - GBA)",
      "series": "FireEmblem",
      "description": "The prince of Grado and a friend of Eirika and Ephraim. Aided by a team of researchers, Lyon sought a spell which could let him see the future. However, he saw his country in ruins due to an earthquake, after which he tried to use the power of Grado's Sacred Stone to prevent this disaster. He split the stone in two; a Sacred Stone and the Dark Stone, containing the sealed Demon King. The Demon King's influence over Lyon spread as he continued his research until finally he was convinced that he had to resurrect the sealed demon. His plans put into motion, Eirika and Ephraim had no choice but to stop their best friend.",
      "bigName": "Lyon"
    },
    {
      "id": 657,
      "name": "Titania",
      "games": "Fire Emblem: Path of Radiance (2005 - Gamecube)",
      "series": "FireEmblem",
      "description": "A mighty paladin, Titania is the second-in-command for the Greil Mercenaries and something of a surrogate mother figure for Ike, especially after his father’s death. She was one of the most vocal supporters for Ike’s succession of Greil as leader of the mercenaries, and serves as one of his most trusted advisors. She dislikes talking about her past, in which she was a knight in service to Crimea, before meeting Greil.",
      "bigName": "Titania"
    },
    {
      "id": 658,
      "name": "Soren",
      "games": "Fire Emblem: Path of Radiance (2005 - Gamecube)",
      "series": "FireEmblem",
      "description": "Soren is the tactician of the Greil Mercenaries, and one of Ike’s closest and most loyal friends. He also possesses incredible magical abilities after being trained as a sage since a very young age. Soren is a logical and cynical thinker, approaching problems with a careful and calculating attitude, but he’s also rather cold towards others, preferring the company of his books than of most people.",
      "bigName": "Soren"
    },
    {
      "id": 659,
      "name": "Mist",
      "games": "Fire Emblem: Path of Radiance (2005 - Gamecube)",
      "series": "FireEmblem",
      "description": "Ike’s younger sister and daughter of Greil and Elena, Mist is a cleric who decides she doesn’t want to be left behind and joins the Greil Mercenaries to accompany her brother after their father’s death. When she was younger, her father entrusted her to keep a mysterious medallion, although she’s not fully aware of its true nature. Mist is a cheerful girl who always tries to help others, even when she’s not fully qualified for it.",
      "bigName": "Mist"
    },
    {
      "id": 660,
      "name": "Sothe",
      "games": "Fire Emblem: Path of Radiance (2005 - Gamecube)",
      "series": "FireEmblem",
      "description": "When Ike first met Sothe, he was but an orphaned stowaway on their ship to Begnion, and joins them as he searches for his lost companion. Three years later, during the events of Fire Emblem: Radiant Dawn, Sothe has found said companion, Micaiah. The two met as young children, and grew to be as close as brother and sister. Sothe is a talented swordsman and thief, and will protect Micaiah at all costs.",
      "bigName": "Sothe"
    },
    {
      "id": 661,
      "name": "Elincia",
      "games": "Fire Emblem: Path of Radiance (2005 - Gamecube)",
      "series": "FireEmblem",
      "description": "Princess Elincia Ridell Crimea’s birth was kept a secret, as it happened after her uncle, the king’s brother, had already been named the next in line for the throne, and her existence could trigger a power struggle. She was raised sheltered from the world in a small villa, until the Daein invasion of her country. Once she met the Greil Mercenaries, she hires their services to escort her to the capital and reclaim Crimea.",
      "bigName": "Elincia"
    },
    {
      "id": 662,
      "name": "Queen Elincia",
      "games": "Fire Emblem: Radiant Dawn (2007 - Wii)",
      "series": "FireEmblem",
      "description": "After the conclusion of the Mad King’s War, Elincia was crowned Queen of Crimea, ushering a new era of peace and prosperity. However, her decision not to demand reparations from Daein has caused discontent among the nobles, which may threaten her reign. Elincia rides into battle on a beautiful Pegasus, and comes to wield the mighty Amity, a sword passed down by Crimean royalty.",
      "bigName": "Queen Elincia"
    },
    {
      "id": 663,
      "name": "Ashnard",
      "games": "Fire Emblem: Path of Radiance (2005 - Gamecube)",
      "series": "FireEmblem",
      "description": "The Mad King of Daein, Ashnard strives to conquer the country of Crimea in order to ignite a continent-wide war, and spark the revival of a dark god. Before becoming King of Daein, he was a mighty warrior, able to single-handedly gain victory in minor conflicts against neighboring country Begnion. He strongly believes in the idea of one's standing in life should be earned with their power, rather than their heritage. Ashnard's armor is blessed by the goddess, granting him near invulnerability, and he uses the sword Gurugant.",
      "bigName": "Ashnard"
    },
    {
      "id": 664,
      "name": "Zelgius",
      "games": "Fire Emblem: Path of Radiance (2005 - Gamecube)",
      "series": "FireEmblem",
      "description": "Zelgius is a renowned knight of the Begnion Empire, the commander of the Imperial Central Army, and hailed as one of the finest swordsmen in the land. As if all of that wasn’t enough, he is also the personal confidant to Chancellor Sephiran, Prime Minister of Begnion. During the Mad King’s War, Zelgius leads Begnion’s forces to Crimea’s aid. Some call Zelgius the last true knight, as he lives by chivalry and honor.",
      "bigName": "Zelgius"
    },
    {
      "id": 665,
      "name": "Black Knight",
      "games": "Fire Emblem: Path of Radiance (2005 - Gamecube)",
      "series": "FireEmblem",
      "description": "One of Daein’s Four Riders and its most powerful general, the mysterious Black Knight is the right-hand man to the Mad King Ashnard himself. No one has ever seen his face or heard his true name. One fateful night, the Black Knight fights Ike’s father in a duel and kills him, leading Ike to swear vengeance. The Black Knight wields the powerful Alondite, the sister sword to Ragnell.",
      "bigName": "Black Knight"
    },
    {
      "id": 666,
      "name": "Micaiah",
      "games": "Fire Emblem: Radiant Dawn (2007 - Wii)",
      "series": "FireEmblem",
      "description": "Throughout the streets of Daein, the oppressed people speak in whispers of a name that gives them hope, the Silver-Haired Maiden. Micaiah is the leader of the Dawn Brigade, a band of rebellious freedom fighters who wish to liberate Daein from Begnion, which occupied the kingdom after the Mad King’s War. Micaiah can use very powerful light magic, but can’t take much damage. Luckily, Sothe is always nearby to protect her.",
      "bigName": "Micaiah"
    },
    {
      "id": 667,
      "name": "Lissa",
      "games": "Fire Emblem Awakening (2012 - 3DS)",
      "series": "FireEmblem",
      "description": "The younger sister of Chrom and Exalt Emmeryn, Lissa is a princess of Ylisse, but rather than at court, she can be found out in the country with her brother and the Shepherds. She may seem spoiled and immature, but at heart she wants to better herself, and looks up to her older sister as a role model. Lissa is a Cleric, and the one to call should one of your units be wounded in battle, but she can be reclassed into a combat unit.",
      "bigName": "Lissa"
    },
    {
      "id": 668,
      "name": "Lon'qu",
      "games": "Fire Emblem Awakening (2012 - 3DS)",
      "series": "FireEmblem",
      "description": "A master swordsman who fled his homeland of Chon’sin after he was accused of being responsible for the death of his friend, Lon’qu then settled in Regna Ferox, where he became the champion of the West-Khan Basilio, who was impressed by his skills. Basilio would then offer Lon’qu’s services to Chrom, to aid in the Plegia-Ylisse War. Lon’qu is a man of few words, and fears nothing. Well, except for conversations with women.",
      "bigName": "Lon'qu"
    },
    {
      "id": 669,
      "name": "Cordelia",
      "games": "Fire Emblem Awakening (2012 - 3DS)",
      "series": "FireEmblem",
      "description": "One of Ylisse’s top Pegasus Knights, Cordelia’s duty is to keep the royal family safe. Ever since childhood, Cordelia was a prodigy, and excelled in nearly everything she did, except for running, oddly enough. Because of this, Cordelia became a perfectionist, who will not be satisfied with simply ‘average’. She has strong feelings for Chrom, but refuses to tell him, and therefore, the two cannot marry.",
      "bigName": "Cordelia"
    },
    {
      "id": 670,
      "name": "Tharja",
      "games": "Fire Emblem Awakening (2012 - 3DS)",
      "series": "FireEmblem",
      "description": "Tharja is a Dark Mage from Plegia, though she questions the reasons to fight such a war, and holds nothing but hatred for King Gangrel. For this reasons, Tharja agrees to change sides and fight for Ylisse once asked by Chrom. Tharja has a somewhat dark personality, keeping people away by threatening to curse them. The only one she seems fine with approaching her is Robin. In fact, she seems to be a bit more than “fine” with it.",
      "bigName": "Tharja"
    },
    {
      "id": 671,
      "name": "Anna",
      "games": "Fire Emblem: Shadow Dragon and the Blade of Light (1990 - Famicom)",
      "series": "FireEmblem",
      "description": "Anna is a character who has appeared in some form in nearly every Fire Emblem game, although she holds a variety of different roles. She has been a tutorial guide, a shopkeeper, a villager, and sometimes just the person who asks you if you want to save. In Fire Emblem Awakening, however, she made her first playable appearance. She is a merchant who mostly cares about making lots of gold.",
      "bigName": "Anna"
    },
    {
      "id": 672,
      "name": "Gangrel",
      "games": "Fire Emblem Awakening (2012 - 3DS)",
      "series": "FireEmblem",
      "description": "The Mad King of Plegia, so called because of his cruel and bloodthirsty ways, Gangrel notoriously allied himself with the cult of the Grimleal and turned Plegia into a religious dictatorship. He is constantly attempting to provoke a war with Ylisse, in an attempt to both kickstart his invasion of the whole content and to acquire the Fire Emblem. For as much pain he caused the people of Ylisse, the Plegians are the ones who really suffer under him.",
      "bigName": "Gangrel"
    },
    {
      "id": 673,
      "name": "Walhart",
      "games": "Fire Emblem Awakening (2012 - 3DS)",
      "series": "FireEmblem",
      "description": "Walhart the Conqueror didn’t earn such a title for nothing. He is the ruler of the continent of Valm, which was once called Valentia, and is considered by some to be the second coming of the first emperor, Alm. Unlike him, however, Walhart is a ruthless force, and will stop at nothing in his goals of expanding the empire as much as possible, even across the sea to Ylisse. He is also a steadfast vegetarian.",
      "bigName": "Walhart"
    },
    {
      "id": 674,
      "name": "Owain",
      "games": "Fire Emblem Awakening (2012 - 3DS)",
      "series": "FireEmblem",
      "description": "Owain is, or rather, will be the son of Lissa, in the distant future. He travelled back in time with his cousin, Lucina, after their time was ravaged by the Fell Dragon. Unlike the serious Lucina, though, Owain has a much more colorful personality. He speaks in a exaggerated manner, and claims that his sword hand has a mind of its own and craves for battle. He proudly wields the sword Missiletainn, which he doesn’t realize is but a cheap replica of the real legendary sword Mystletainn.",
      "bigName": "Owain"
    },
    {
      "id": 675,
      "name": "Severa",
      "games": "Fire Emblem Awakening (2012 - 3DS)",
      "series": "FireEmblem",
      "description": "Severa is the daughter of Cordelia, and came back in time with her friends to prevent an apocalyptic future. Severa’s relationship with her mother was difficult, as she often lived in the shadow of Cordelia’s achievements, and developed a severe inferiority complex as a result. She strives to find some sort of talent or skill in which she is superior. Despite all this, she loves her mother, and keeps her ring as a memento after her death in the future.",
      "bigName": "Severa"
    },
    {
      "id": 676,
      "name": "Azura",
      "games": "Fire Emblem Fates (2015 - 3DS)",
      "series": "FireEmblem",
      "description": "“You are the ocean’s grey waves…” this beloved song is sung by Azura, a mysterious songstress and dancer who joins Corrin regardless of their path. She is actually a Nohrian princess who was kidnapped by and raised in Hoshido, as a mirror of Corrin’s own situation. She may be young, but she is wise beyond her years. Despite being capable of wielding spears, she is most useful in combat by allowing units to move twice.",
      "bigName": "Azura"
    },
    {
      "id": 677,
      "name": "Jakob",
      "games": "Fire Emblem Fates (2015 - 3DS)",
      "series": "FireEmblem",
      "description": "Corrin's butler, though formerly the son of aristocrats. Jakob feels a sense of loyalty towards Corrin, following them regardless of which path they choose. The Butler class in Fire Emblem Fates can use throwing daggers and healing staves, being one of the few classes that can heal and deal physical damage.",
      "bigName": "Jakob"
    },
    {
      "id": 678,
      "name": "Ryoma",
      "games": "Fire Emblem Fates (2015 - 3DS)",
      "series": "FireEmblem",
      "description": "The eldest of the late king Sumeragi’s children and the heir apparent to the kingdom of Hoshido, Ryoma is a powerful samurai, whose sword is almost as sharp as his mind. Said sword, by the way, is the legendary katana Raijinto, crafted by the Rainbow Sage and capable of summoning lightning in battle. Although he cares deeply for his sibling, his duty to his nation will override any personal feelings, if necessary.",
      "bigName": "Ryoma"
    },
    {
      "id": 679,
      "name": "Hinoka",
      "games": "Fire Emblem Fates (2015 - 3DS)",
      "series": "FireEmblem",
      "description": "Hinoka is the second eldest of the Hoshidan royal children. After her young sibling, Corrin, was taken by Nohr, she began to train as a Sky Knight, which is essentially what Hoshidans call the Pegasus Knight, though her hot-blooded attitude often made training difficult for her. She tried many times to infiltrate Nohr and rescue Corrin on her own, but her attempts were constantly blocked by her concerned family.",
      "bigName": "Hinoka"
    },
    {
      "id": 680,
      "name": "Takumi",
      "games": "Fire Emblem Fates (2015 - 3DS)",
      "series": "FireEmblem",
      "description": "The third eldest of the Hoshidan royal siblings, Takumi is an archer who wields the Fujin Yumi, an incredible bow that can shoot wind arrows and has two distinct forms with distinct abilities. He may seem rather moody and cynical, but that’s because he often feels he lives in the shadow of his older siblings, and works diligently to improve himself as a result. He’s also not a very trusting person, and is suspicious of almost anyone from Nohr.",
      "bigName": "Takumi"
    },
    {
      "id": 681,
      "name": "Sakura (Fire Emblem)",
      "games": "Fire Emblem Fates (2015 - 3DS)",
      "series": "FireEmblem",
      "description": "Sakura is the youngest of the Hoshidan royal siblings, and a kind-hearted, but shy girl, especially when compared with her confident older siblings. Due to rumors she heard as a child, Sakura grew to believe that it was her fault that Corrin was kidnapped by Nohr. Sakura is a Shrine Maiden, the Hoshidan equivalent of a Cleric, and a gifted healer, possibly the best in all of Hoshido.",
      "bigName": "Sakura (Fire Emblem)"
    },
    {
      "id": 682,
      "name": "Xander",
      "games": "Fire Emblem Fates (2015 - 3DS)",
      "series": "FireEmblem",
      "description": "The eldest of Corrin’s adoptive Nohrian siblings, Xander is the crown prince of the country, and a fearsome paladin. As a child, he had no particular talents, so he had to train himself incredibly hard to earn the right to wield Siegfried, a legendary sword crafted by the Rainbow Sage, and imbued with dark magic. Xander is known to be a reserved man, and very loyal to his father, King Garon, and his country.",
      "bigName": "Xander"
    },
    {
      "id": 683,
      "name": "Camilla",
      "games": "Fire Emblem Fates (2016 - 3DS)",
      "series": "FireEmblem",
      "description": "The second oldest Nohrian royal child, Camilla is known for her elegance and allure, but she’s also quite a formidable fighter. She’s a self-trained wyvern rider and many enemies have fallen under her merciless axe. She loves her family very much, but seems to especially adore her adopted sibling Corrin, as she is over-protective and even possessive of them. Possibly, this is to compensate for the lack of love she received from her own mother. Now then, it looks like you missed your big sister~",
      "bigName": "Camilla"
    },
    {
      "id": 684,
      "name": "Leo",
      "games": "Fire Emblem Fates (2015 - 3DS)",
      "series": "FireEmblem",
      "description": "The second youngest child of the Nohrian royal siblings, Leo is a renowned genius, who is said to be able to handle any situation easily and flawlessly. He resolutely maintains a calm exterior at all times, even if that’s not how he’s truly feeling. An avid studier of tomes, Leo wields another of the Rainbow Sage’s weapons, the Brynhildr tome which can control the Earth, gravity and life itself.",
      "bigName": "Leo"
    },
    {
      "id": 685,
      "name": "Elise",
      "games": "Fire Emblem Fates (2015 - 3DS)",
      "series": "FireEmblem",
      "description": "Elise is the youngest child of the Nohrian royal family, and comes across as a rather spoiled and innocent girl, who idolizes her older siblings, even the adopted Corrin. Perhaps to fight back against the harshest parts of her childhood, in particular her relationship with her mother, Elise tries her best to always stay positive and cheerful. Elise is a Troubador, so not only can she move fast, she can also heal your units.",
      "bigName": "Elise"
    },
    {
      "id": 686,
      "name": "Garon",
      "games": "Fire Emblem Fates (2015 - 3DS)",
      "series": "FireEmblem",
      "description": "The king of Nohr is known for many things, but a kind heart is not one of them. He is a ruthless, cold-blooded man who wishes to rule Hoshido at all costs. He’s also not much better in the treatment of his children, and would often force Corrin to perform inhuman acts in order to gain his trust. Strangely, it seems he wasn’t always like this. Some time in the past, he was described as a loving father. What changed?",
      "bigName": "Garon"
    },
    {
      "id": 687,
      "name": "Tsubasa Oribe",
      "games": "Tokyo Mirage Sessions #FE (2015 - Wii U)",
      "series": "FireEmblem",
      "description": "Tsubasa in an eighteen-year-old student who joins the Fortuna Enterntainment talent agent to pursue her dreams of becoming a singer, and in hopes of finding her missing sister. Many years ago, said sister, Ayaha Oribe, was holding a concert when suddenly, everyone on site disappeared, including her, her staff, and the audience. The only one to survive was Tsubasa and she needs to find out what happened.",
      "bigName": "Tsubasa Oribe"
    },
    {
      "id": 688,
      "name": "Tsubasa Oribe (Carnage Form)",
      "games": "Tokyo Mirage Sessions #FE (2015 - Wii U)",
      "series": "FireEmblem",
      "description": "Parallel to the normal world lies the Idolashpere, a world inhabited by entities known as Mirages, which feed on humans’ creative energies, but can be tamed and bonded with by Mirage Masters. These Mirages can then take on the Carnage Form by combining their abilities with their Master’s. Tsubasa awakened as a Mirage Master and bonded with the Mirage Caeda, based on the princess of Talys.",
      "bigName": "Tsubasa Oribe (Carnage Form)"
    },
    {
      "id": 689,
      "name": "Mr. Game & Watch",
      "games": "Ball (1980 - Game & Watch)",
      "series": "GameWatch",
      "description": "The Game and Watch is a series of handheld consoles Nintendo first released in 1980. Each Game and Watch handheld contained a unique game from a total of 39 that was simplistic and intuitive. Most notable about these handhelds was its use of LCD technology to display the images on its screen and its ability to keep track of time, elements that made their way to future Nintendo handhelds in some capacity. The image featured is of a generic denizen from the game Manhole.",
      "bigName": "Mr. Game & Watch"
    },
    {
      "id": 690,
      "name": "Ball",
      "games": "Ball (1980 - Game & Watch)",
      "series": "GameWatch",
      "description": "The pioneer of the Game & Watch series! This simplistic little LCD game involved tossing around balls in the air without dropping them on the ground. Up to three balls can be juggled at once, and if the player has three lives before the game is over. In Super Smash Bros. Ultimate, Mr. Game & Watch uses the graphics from Ball for his throws, using his opponent's stock icon as the ball.",
      "bigName": "Ball"
    },
    {
      "id": 691,
      "name": "Flagman",
      "games": "Flagman (1980 - Game & Watch)",
      "series": "GameWatch",
      "description": "Most Game & Watch consoles had a Game A and a Game B mode. In most cases, Game B would be the harder and faster of the two. In Flagman's case, however, both games were different: Game A had the player repeating the flag's patterns, while Game B tested players' reflexes by making them press the corresponding number as fast as they can. In Super Smash Bros. Ultimate, the titular Flagman appears as Mr. Game & Watch's up-tilt.",
      "bigName": "Flagman"
    },
    {
      "id": 692,
      "name": "Fire",
      "games": "Fire (1980 - Game & Watch)",
      "series": "GameWatch",
      "description": "Another classic from the old-school Game & Watch series. In this iteration, you had to save people jumping from a flaming house with a trampoline. As with other Game & Watch games, miss three times and you're out. Mr. Game & Watch's up special calls for the same fire brigade, although he also carries a parachute for safety.",
      "bigName": "Fire"
    },
    {
      "id": 693,
      "name": "Judge",
      "games": "Judge (1980 - Game & Watch)",
      "series": "GameWatch",
      "description": "One of the (nearly) sixty Game & Watch games. In this one, players held up numbers from 1 to 9 at the same time. Whoever had the highest number had to hit the other with a hammer, while the lower number had to flee. In Super Smash Bros. Ultimate, Mr. Game & Watch uses the Judge's hammer as his side special, with damage going from negligible with 1 to devastating with 9.",
      "bigName": "Judge"
    },
    {
      "id": 694,
      "name": "Manhole",
      "games": "Manhole (1981 - Game & Watch)",
      "series": "GameWatch",
      "description": "Manhole is a think-fast game from the Game & Watch series. Set in a pretty unsafe-looking city, you had to make sure pedestrians crossed through without falling into the sewers by covering them up with a manhole. Mr. Game & Watch flips a similar manhole during his down-tilt, and if you look closely, you can see the character from Manhole appearing underneath Flat Zone X's platforms.",
      "bigName": "Manhole"
    },
    {
      "id": 695,
      "name": "Helmet",
      "games": "Helmet (1981 - Game & Watch)",
      "series": "GameWatch",
      "description": "In this Game & Watch title, the player has to guide a worker towards a house on the other side of the screen. However, this task may not be as easy as one would think, as hammers, screwdrivers, and buckets are falling from the sky. Mr. Game & Watch uses a helmet for his dash attack, and the falling tools come back as a hazard in Flat Zone X.",
      "bigName": "Helmet"
    },
    {
      "id": 696,
      "name": "Lion",
      "games": "Lion (1981 - Game & Watch)",
      "series": "GameWatch",
      "description": "Most Game & Watch games have the ability to tell time and set alarms, pertaining to the \"Watch\" part of the series. In this case, Lion has both! It involves a lion tamer trying to keep lions inside of their cages using a chair. Mr. Game & Watch uses the tamer's chair for his forward-tilt, although the lion itself is nowhere to be found.",
      "bigName": "Lion"
    },
    {
      "id": 697,
      "name": "Parachute",
      "games": "Parachute (1981 - Game & Watch)",
      "series": "GameWatch",
      "description": "A more tropical rendition of Fire: Parachute has the player controlling a boat to save falling parachutists from deadly shark-infested waters. Although the game is pretty simple, like all Game & Watch games, it gets more and more hectic as time goes on, with parachutes falling faster and even getting stuck on trees!",
      "bigName": "Parachute"
    },
    {
      "id": 698,
      "name": "Octopus",
      "games": "Octopus (1981 - Game & Watch)",
      "series": "GameWatch",
      "description": "As the name suggests Octopus was a game where you have to collect treasure from a giant Octopus. If you were caught, another diver would have to risk it all. Now, Octopus takes the form of Mr. Game and Watch's final smash. Its sticky tentacles will drag opponents off the stage. If you're fast enough you may escape but at high percents, you're a goner.",
      "bigName": "Octopus"
    },
    {
      "id": 699,
      "name": "Chef (Game & Watch)",
      "games": "Chef (1981 - Game & Watch)",
      "series": "GameWatch",
      "description": "This Game & Watch title is about a chef... juggling sausages in his kitchen. The objective is to keep the sausages in the air without letting them drop on the floor for the mouse to eat. Mr. Game & Watch imitates this questionable cooking technique during his standard special move, where he chucks sausages at his opponent. Try using it near the edge!",
      "bigName": "Chef (Game & Watch)"
    },
    {
      "id": 700,
      "name": "Turtle Bridge",
      "games": "Turtle Bridge (1982 - Game & Watch)",
      "series": "GameWatch",
      "description": "Yet another Game & Watch game! The player has to jump across a pond using harmless turtles that sometimes dive in the water to eat fish. The catch? You have to pick up a package from the left side of the screen and carry it over to the right side. Mr. Game & Watch uses the aforementioned turtles for his back aerial.",
      "bigName": "Turtle Bridge"
    },
    {
      "id": 701,
      "name": "Fire Attack",
      "games": "Fire Attack (1982 - Game & Watch)",
      "series": "GameWatch",
      "description": "Watch out! In this Game & Watch game, you had to protect your wooden fort from being set on fire by bandits. You had to hit the bandits and thrown torches to save yourself. In Super Smash Bros. Ultimate, Mr. Game & Watch uses the torches for his forward smash. He's got quite a diverse moveset!",
      "bigName": "Fire Attack"
    },
    {
      "id": 702,
      "name": "Oil Panic",
      "games": "Oil Panic (1982 - Game & Watch)",
      "series": "GameWatch",
      "description": "Unlike the previous Game & Watch devices, this one didn't have one screen... but two! Could this be the ancestor of the Nintendo DS?... Anyway, Oil Panic was a tiny bit complex: the player had to collect falling drops of oil on the top screen, and then dump the bucket in their colleague's barrel. Try not to miss, or else your costumers won't be happy...",
      "bigName": "Oil Panic"
    },
    {
      "id": 703,
      "name": "Pit",
      "games": "Kid Icarus (1986 - NES)",
      "series": "KidIcarus",
      "description": "Pit is an angel of Skyworld and the Captain of Lady Palutena’s Guard. From that description, you might expect a serious, tough character, but Pit is actually a pretty silly, good-hearted guy. Despite being an angel, Pit can’t actually fly on his own, and can only take flight with some divine help by Lady Palutena. He’s a master with the bow and arrow, and usually wields Palutena’s Bow, but he can actually use a variety of weapons.",
      "bigName": "Pit"
    },
    {
      "id": 704,
      "name": "Dark Pit",
      "games": "Kid Icarus Uprising (2012 - 3DS)",
      "series": "KidIcarus",
      "description": "Dark Pit is a flawed, incomplete clone of Pit, created when he smashed Pandora’s Mirror of Truth. The Mirror created a copy of Pit’s darker side, but Dark Pit is not evil, as he refuses to serve Medusa. In fact, he refuses to serve anyone, and he values his independence more than almost anything. Dark Pit still views Pit as an enemy, or at least a rival, as he claims – or wishes – to be the original. Palutena calls him “Pittoo”, much to his chagrin.",
      "bigName": "Dark Pit"
    },
    {
      "id": 705,
      "name": "Palutena",
      "games": "Kid Icarus (1986 - NES)",
      "series": "KidIcarus",
      "description": "Palutena is the Goddess of Light - equipped with countless divine powers and an endlessly sassy attitude, she is the leader of Skyworld, and commander of well... Palutena's Army, who face off against many threats to the people of Earth. She and the captain of her army, Pit, share an unbreakable bond.",
      "bigName": "Palutena"
    },
    {
      "id": 706,
      "name": "Pit (Original)",
      "games": "Kid Icarus (1986 - NES)",
      "series": "KidIcarus",
      "description": "Yep, this is what Pit originally looked like. Quite different, isn’t he? The design you probably know better actually debuted in Super Smash Bros. Brawl, rather than any actual Kid Icarus game. In the original Kid Icarus, Pit was thrown into a dungeon in the Underworld, and after escaping, needed to make his way back to Skyworld armed with a much more ordinary bow.",
      "bigName": "Pit (Original)"
    },
    {
      "id": 707,
      "name": "Centurion",
      "games": "Kid Icarus (1986 - NES)",
      "series": "KidIcarus",
      "description": "Centurions are the rank-and-file of Palutena’s Army and Pit’s underlings. They aren’t very tough on their own, but when they team up, they can pack quite the punch. Many of them have been petrified within various fortresses, but Pit can free them by hitting them with a mallet. Once freed, they’ll help Pit fight against that fortress’ gatekeeper, usually in groups of three.",
      "bigName": "Centurion"
    },
    {
      "id": 708,
      "name": "Three Sacred Treasures",
      "games": "Kid Icarus (1986 - NES)",
      "series": "KidIcarus",
      "description": "The Arrow of Light, a weapon which can pierce through anything. The Mirror Shield, which can deflect anything, even Medusa’s petrifying gaze. The Wings of Pegasus, which can grant their wearer limitless flight. These are the Three Sacred Treasures that have belonged to Angel Land for centuries. Medusa stole them when she launched her attack on Skyworld, and it was up to Pit to recover them, as only they had the power to defeat her.",
      "bigName": "Three Sacred Treasures"
    },
    {
      "id": 709,
      "name": "Daybreak",
      "games": "Kid Icarus Uprising (2012 - 3DS)",
      "series": "KidIcarus",
      "description": "The Daybreak is an extremely powerful weapon exclusive to Kid Icarus: Uprising’s Together Mode, where two teams of three players battle each other. One fighter must collect three scattered pieces of the weapon in order to use it, but doing so is worth it, as the ensuing firepower is truly devastating. The Daybreak and its parts also appears in Smash, functioning in much the same way.",
      "bigName": "Daybreak"
    },
    {
      "id": 710,
      "name": "Medusa",
      "games": "Kid Icarus (1986 - NES)",
      "series": "KidIcarus",
      "description": "Once upon a time, Medusa was one of the two goddesses who ruled Angel Land in peace, alongside Palutena, the Goddess of Light. But while Palutena was kind to humans, the goddess of darkness hated them, and enjoyed drying their crops and petrifying them. Angered by this, Palutena turned Medusa into a hideous monster and banished her to the Underworld. However, Medusa declared herself Queen of the Underworld and used its monsters to launch an attack on Skyworld.",
      "bigName": "Medusa"
    },
    {
      "id": 711,
      "name": "Medusa (Kid Icarus Uprising)",
      "games": "Kid Icarus Uprising (2012 - 3DS)",
      "series": "KidIcarus",
      "description": "Pit and Palutena were quite sure Medusa had been destroyed for good, but twenty-five years later, she reappeared, sporting a much more fashionable design. The manner through which Medusa returned to this world is a mystery, even to her! However, her goals have not changed, and she leads the Underworld Army along with old and new followers to destroy the forces of light.",
      "bigName": "Medusa (Kid Icarus Uprising)"
    },
    {
      "id": 712,
      "name": "Twinbellows",
      "games": "Kid Icarus (1986 - NES)",
      "series": "KidIcarus",
      "description": "This demonic, fire-breathing, two-headed dog is Twinbellows the Ferocious. As the Watchdog of the Underworld, he guards its fortresses, and was entrusted by Medusa to guard one of the Three Sacred Treasures. Twenty-five years later, a resurrected Medusa sent Twinbellows to attack a human town, and Pit once again had to fight him. However, despite his frightening appearance, he’s actually not that tough.",
      "bigName": "Twinbellows"
    },
    {
      "id": 713,
      "name": "Hewdraw",
      "games": "Kid Icarus (1986 - NES)",
      "series": "KidIcarus",
      "description": "Hewdraw is a giant, flying serpent who serves as one of the Underworld Army’s top commanders. When he was tasked by Medusa to guard one of the Three Sacred Treasures in the Overworld Fortress, Hewdraw appeared as a single serpent, but whenhe returned twenty-five years later, he had grown two additional heads. Unfortunately, all three heads have their own personalities, and they rarely seem to agree on anything.",
      "bigName": "Hewdraw"
    },
    {
      "id": 714,
      "name": "Pandora",
      "games": "Kid Icarus (1986 - NES)",
      "series": "KidIcarus",
      "description": "Pandora is the Goddess of Calamity and one of the Underworld Army’s top commanders. Once a beautiful woman, Pandora lost her physical form and became an amorphous, ghastly blob. She once guarded the Skyworld Fortress at Medusa’s behest, but later came to inhabit the Labyrinth of Deceit, a strange, polygonal place hidden within a space pocket, where she used the Mirror of Truth to create more Underworld troops.",
      "bigName": "Pandora"
    },
    {
      "id": 715,
      "name": "Amazon Pandora",
      "games": "Kid Icarus Uprising (2012 - 3DS)",
      "series": "KidIcarus",
      "description": "The original appearance of the Goddess of Calamity, Pandora. This beautiful, yet mighty goddess was reduced to her more familiar ghostly form due to some events in the past, but she is determined to regain her look. For this, she searched for the Rewind Spring in the City of Souls, whose magical waters can revert the effects of time on anyone, even a goddess.",
      "bigName": "Amazon Pandora"
    },
    {
      "id": 716,
      "name": "Thanatos",
      "games": "Kid Icarus (1986 - NES)",
      "series": "KidIcarus",
      "description": "Thanatos is the God of Death and Medusa’s second-in-command in the Underworld Army. A mischievous and rather flamboyant genie, Thanatos is nevertheless a powerful shapeshifter, able to take many forms. In fact, he appeared in the guise of a giant snake in Medusa and Pit’s first battle. Many years later, he showed his full power when he needed to guard the Underworld Key from Pit.",
      "bigName": "Thanatos"
    },
    {
      "id": 717,
      "name": "Hades",
      "games": "Kid Icarus Uprising (2012 - 3DS)",
      "series": "KidIcarus",
      "description": "Hades is the true God of Underworld, who has manipulating events from the shadows in order to further his plan of harvesting human souls destroyed in the conflicts between the gods. Hades is extremely powerful, even among the divine pantheon, and represents a threat to all, but perhaps the most terrifyingly powerful weapon in his arsenal is his personality. Just a few minutes of hearing his dialogue might make you forget all of his heinous actions.",
      "bigName": "Hades"
    },
    {
      "id": 718,
      "name": "Hades (Final Form)",
      "games": "Kid Icarus Uprising (2012 -3DS)",
      "series": "KidIcarus",
      "description": "Pit eventually needed to use the Three Sacred Treasures to fight Hades, but the god was much too powerful even for them, so Pit needed to get a new, more powerful weapon, the Great Sacred Treasure. This weapon was finally able to present a challenge to Hades, but the god was yet to reveal his true strength, where he could even regrow his limbs and head. Angel versus god, the final battle begins!",
      "bigName": "Hades (Final Form)"
    },
    {
      "id": 719,
      "name": "Specknose",
      "games": "Kid Icarus (1986 - NES)",
      "series": "KidIcarus",
      "description": "This rather bizarre and gross monster is just one of the many soldiers in the Underworld Army’s ranks. Specknoses aren’t fans of brightly lit places, so they usually stay inside their own lair, but will quickly swarm any enemy that enters. Though still rather cowardly, Specknoses eventually left their lairs and learned to attack enemies by sneezing bombs at them. When joined by two Monoeyes and a Mik, they form a very funny face.",
      "bigName": "Specknose"
    },
    {
      "id": 720,
      "name": "Reaper & Reapette",
      "games": "Kid Icarus (1986 - NES)",
      "series": "KidIcarus",
      "description": "These Reapers are henchmen for the Underworld Army, usually employed as lookouts. Though they appear scary, they may seem rather harmless at first glance, since they mostly just walk back and forth and can’t see very far, but as soon as an enemy enters their line of sight, they’ll become aggressive and telepathically call for their flying minions, the Reapettes, to swoop in and attack the intruder.",
      "bigName": "Reaper & Reapette"
    },
    {
      "id": 721,
      "name": "Eggplant Wizard",
      "games": "Kid Icarus (1986 - NES)",
      "series": "KidIcarus",
      "description": "One of the most feared monsters in the ranks of the Underworld Army, Eggplant Wizards usually appear in pairs and will throw some projectiles at Pit. Should any of these projectiles make contact, Pit will be cursed by the wizards and turned into a walking Eggplant! Pit will then be rendered incapable of attacking, and will need to rush to the nearest hospital to remove the curse. Luckily, Palutena’s power can also remove it.",
      "bigName": "Eggplant Wizard"
    },
    {
      "id": 722,
      "name": "Psuedo Palutena",
      "games": "Kid Icarus Uprising (2012 - 3DS)",
      "series": "KidIcarus",
      "description": "A fake, heavily deformed imitation of Palutena created by the god of the forge, Dyntos, to test Pit. At first she appeared just as the regular Palutena, only much meaner, but enough damage caused her true appearance to reveal itself, which only made her angrier. Dyontos actually put the real Palutena to sleep during this fight, so Pit needed to beat this monster all by himself.",
      "bigName": "Psuedo Palutena"
    },
    {
      "id": 723,
      "name": "Viridi",
      "games": "Kid Icarus Uprising (2012 - 3DS)",
      "series": "KidIcarus",
      "description": "Viridi is the vengeful goddess of nature, and she has a deep hatred of humans, whom she considers a plague to the planet that needs to be eradicated. Viridi commands an army collectively known as the Forces of Nature, who fight to return the planet to its “purer” state. One way she accomplishes this is with Reset Bombs, which return an area to its original state upon exploding. Despite her divine age, she looks young, and often acts like it.",
      "bigName": "Viridi"
    },
    {
      "id": 724,
      "name": "Phosphora",
      "games": "Kid Icarus Uprising (2012 - 3DS)",
      "series": "KidIcarus",
      "description": "Lightning Flash Phosphora is one of the top commanders of the Forces of Nature, a powerful warrior who can control electricity and move at unbelievable speeds. She easily defeated Thanatos, but the wounds she suffered made her weak during her battle against Pit in the Thunder Cloud Temple. Phosphora put up a fight even before then, as her abilities allowed her to power and control the Temple itself.",
      "bigName": "Phosphora"
    },
    {
      "id": 725,
      "name": "Lurchthorn",
      "games": "Kid Icarus Uprising (2012 - 3DS)",
      "series": "KidIcarus",
      "description": "This enormous, fish-bone looking enemy is one of the soldiers of the Forces of Nature. These creatures slowly fly around, waiting for someone to come close enough to become a target for their turrets. Each of its segments contains a cannon that can shoot independently, and they’re very powerful. You can destroy them, but the better strategy is to target the monster’s head, as that will bring down the entire thing!",
      "bigName": "Lurchthorn"
    },
    {
      "id": 726,
      "name": "Magnus",
      "games": "Kid Icarus Uprising (2012 - 3DS)",
      "series": "KidIcarus",
      "description": "Magnus is a god!... among humans. That may not be an impressive description in a world of literal gods and angels, but Magnus is the mightiest human of all, and strong enough to put up a fight with the Underworld Army. The strength he needs to carry that sword is only matched by his years of experience in battles as a mercenary. Pit and him first team up to bring down Dark Lord Gaol, though Magnus’ reasons to fight Gaol may be deeper than they seem.",
      "bigName": "Magnus"
    },
    {
      "id": 727,
      "name": "Dyntos",
      "games": "Kid Icarus Uprising (2012 - 3DS)",
      "series": "KidIcarus",
      "description": "Dyntos is the god of the forge, the original creator of the Three Sacred Treasures, and, possibly, the most powerful of all the gods. He lives in an alternate dimension which houses his workshop, where he spends his time creating powerful weapons and, most importantly, staying far, far away from the affairs of humans and gods. He can even craft living creatures, including ones from the Underworld or the Forces of Nature.",
      "bigName": "Dyntos"
    },
    {
      "id": 728,
      "name": "Mimicutie",
      "games": "Kid Icarus Uprising (2012 - 3DS)",
      "series": "KidIcarus",
      "description": "Hey, look! A treasure chest! Alright, it could contain all sorts of goods, like foods, hearts and- OUCH! That chest just kicked me! Well, it’s not actually a chest, it’s a Mimicutie. These creatures disguise themselves as treasure chests to lure in some poor idiot, but once he gets close, they’ll spawn legs and start running around and kicking. Instead of regaining health, you’ll probably lose a lot; life is full of disappointment, sometimes.",
      "bigName": "Mimicutie"
    },
    {
      "id": 729,
      "name": "Wario",
      "games": "Super Mario Land 2: 6 Golden Coins (1992 - Game Boy)/ Biker Wario: WarioWare, Inc. Mega Microgame$ (2003 - GBA)",
      "series": "Wario",
      "description": "As the rotten, greedy and mean counterpart to Mario, there are few things Wario loves more than money, garlic, and… well, bodily functions. Despite being known as Mario’s rival, Wario has achieved greater fame as the star of his own franchise. Sporting a biker outfit, Wario founded his own game development studio, WarioWare, Inc. headquartered in Diamond City, in order to make some quick cash with easy-to-make microgames.",
      "bigName": "Wario"
    },
    {
      "id": 730,
      "name": "Wario (Overalls)",
      "games": "Super Mario Land 2: 6 Golden Coins (1992 - Game Boy)",
      "series": "Wario",
      "description": "Wario in his classic yellow and purple get-up, which he uses whenever he appears in the Mario series, or when he is starring in the Wario Land series. When not developing cheap microgames, Wario satisfies his greed by searching for treasure in distant lands. He may do some good along the way, such as rescuing princesses and others in need, but that’s hardly the first thing on his mind.",
      "bigName": "Wario (Overalls)"
    },
    {
      "id": 731,
      "name": "Jimmy T.",
      "games": "WarioWare, Inc. Mega Microgame$ (2003 - GBA)",
      "series": "Wario",
      "description": "Hey, hey! It’s Jimmy Thang, better known as Jimmy T. This disco-loving dude spends every night at the clubs, in particular, his beloved Club Sugar, the heart of Diamond City’s nightlife. Besides dancing, he enjoys collecting ringtones, climbing stairs six steps at a time, and developing microgames with his childhood friend Wario. His blue afro hides a secret, but we won’t tell you what it is, otherwise, it wouldn’t be a secret anymore, would it?",
      "bigName": "Jimmy T."
    },
    {
      "id": 732,
      "name": "Mona",
      "games": "WarioWare, Inc. Mega Microgame$ (2003 - GBA)",
      "series": "Wario",
      "description": "Like any high-school attending teenager, Mona likes to earn her own salary, and she does it by doing… well, most of everything. She’s worked at a Gelateria, a restaurant, a pizzeria, a theme park, as a delivery girl, a photojournalist, an explorer, a cheerleader, a bassist, and of course, a microgame designer. Aside from that last job, her boss is always a dog named Joe. She seems to have some affection, even admiration, for Wario. We’re not sure why either.",
      "bigName": "Mona"
    },
    {
      "id": 733,
      "name": "9-Volt & 18-Volt",
      "games": "9-Volt: WarioWare, Inc.: Mega Microgame$ (2003 – GBA)/ 18-Volt: WarioWare: Twisted! (2004 – GBA)",
      "series": "Wario",
      "description": "9-Volt is a troublesome kid with one passion over all others: video games, specifically Nintendo games. Him and his best friend 18-Volt met in school and bonded after 18-Volt got in trouble for playing loud rock ‘n’ roll music from his boombox. Since then, they’ve become inseparable, riding skateboards, playing music and videogames all day long. The microgames they develop for WarioWare, Inc. are usually themed after classic Nintendo games.",
      "bigName": "9-Volt & 18-Volt"
    },
    {
      "id": 734,
      "name": "Dribble & Spitz",
      "games": "WarioWare, Inc. Mega Microgame$ (2003 - GBA)",
      "series": "Wario",
      "description": "Dribble is the big orange bulldog, and Spitz, the small yellow cat. They may seem like an unlikely duo, but they’re actually best friends who run Diamond Taxi together as cabbies. They drive a super-powered taxi modified by Dr. Crygor, which is capable of space travel. As expected of Diamond City, they often come across many strange passengers, and are sometimes so distracted, they even forget to collect the fares.",
      "bigName": "Dribble & Spitz"
    },
    {
      "id": 735,
      "name": "Kat & Ana",
      "games": "WarioWare, Inc. Mega Microgame$ (2003 - GBA)",
      "series": "Wario",
      "description": "Kat and Ana are twin sisters from the Iga Clan, a family of ninjas, and the two are ninjas themselves, despite only being in kindergarten. In fact, they have to attend both Diamond Kindergarten and Mystical Ninja Elementary. It may seem like a lot of work, but they need to master ninja techniques to fight the multiple threats that come their way. They both love nature, with Kat, the oldest, preferring animals, and Ana preferring plants.",
      "bigName": "Kat & Ana"
    },
    {
      "id": 736,
      "name": "Dr. Crygor",
      "games": "WarioWare, Inc. Mega Microgame$ (2003 - GBA)",
      "series": "Wario",
      "description": "Dr. Crygor is a 103-years-old mad scientist who spends his days in his private island laboratory, preforming numerous wacky, even senseless, experiments. He seems to have turned himself into a cyborg for reasons known only to him. Despite his eccentricity, he is a brilliant inventor, having designed gadgets used by many Diamond City residents, such as 9-Volt’s SK8, Kat and Ana’s high tech swords, and even Wario’s bike!",
      "bigName": "Dr. Crygor"
    },
    {
      "id": 737,
      "name": "Orbulon",
      "games": "WarioWare, Inc. Mega Microgame$ (2003 - GBA)",
      "series": "Wario",
      "description": "A highly-intelligent alien invader from an unknown planet who came to Earth on his spaceship, the Oinker, in order to conquer it. However, after crash landing on Diamond City, he seems to have changed his mind, and settled down in the city, helping Wario to develop some microgames. Despite his IQ of 300, he still can’t quite grasp human languages.",
      "bigName": "Orbulon"
    },
    {
      "id": 738,
      "name": "Wario-Man",
      "games": "WarioWare: Twisted! (2004 - Game Boy Advance)",
      "series": "Wario",
      "description": "Faster than a doughnut, stronger than cardboard! After eating a strange-looking clove of garlic, Wario turned into the spandex-wearing super zero Wario-Man! Feeling newfound power in his veins, Wario-Man often boasts about how cool and strong he is… But for now, the best favor he has done for people is opening locked bathroom stalls.",
      "bigName": "Wario-Man"
    },
    {
      "id": 739,
      "name": "Ashley",
      "games": "WarioWare: Touched! (2004 - DS)",
      "series": "Wario",
      "description": "Who’s that girl next door, living in the haunted mansion? You better know her name cause it’s Ashley! Ashley is a witch in training who lives with her best friend and loyal servant, the shape-shifting imp Red. Ashley is pretty distant and quick to anger, as well as resentful of others, but in reality she’s just shy and lonely, and wishes for more friends. In fact, we’re not sure why you’re reading this, if you want to know about Ashley, just listen to the theme song!",
      "bigName": "Ashley"
    },
    {
      "id": 740,
      "name": "Young Cricket",
      "games": "WarioWare: Smooth Moves (2006 - Wii)",
      "series": "Wario",
      "description": "Young Cricket is a student of the martial art We-Yu-Ken, practicing under Master Mantis. Young Cricket is totally obedient to his Master and will follow any commands, even when Master Mantis wants to train in unusual locations, such as a fancy café. Like his master, Cricket has a (rather extreme) love for dumplings, and spends an unreasonable amount of his money on it.",
      "bigName": "Young Cricket"
    },
    {
      "id": 741,
      "name": "5-Volt",
      "games": "WarioWare: Twisted! (2004 - GBA)",
      "series": "Wario",
      "description": "As you may have guessed from her name, 5-Volt is the mother of 9-Volt (but not 18-Volt). 5-Volt has a real can-do attitude, and whenever she sets her mind on something, she won’t quit until she does it perfectly. She loves gardening and cooking, and is a loving mother, but very strict, especially regarding playing games after bedtime. Despite this, she’s actually pretty good at video games, and eventually became a micro-game developer for WarioWare, Inc.",
      "bigName": "5-Volt"
    },
    {
      "id": 742,
      "name": "5-Volt (Angry)",
      "games": "Game & Wario (2013 - Wii U)",
      "series": "Wario",
      "description": "5-Volt is usually a very sweet person and mother, but if there’s one thing she doesn’t tolerate, is when 9-Volt stays up past his bedtime to play videogames. In the Game & Wario game called ‘Gamer’, 9-Volt must beat his mother’s high score while trying not to get caught by her. She can appear from anywhere, the door, the window, even the TV, and if she catches him, he’ll get the scolding of a lifetime.",
      "bigName": "5-Volt (Angry)"
    },
    {
      "id": 743,
      "name": "Pyoro",
      "games": "WarioWare, Inc. Mega Microgame$ (2003 - GBA)",
      "series": "Wario",
      "description": "Pyoro is the mascot of the most popular videogames franchise in Diamond City: the Pyoro series. The long-running series includes many games, in fact, almost every WarioWare game contains a Pyoro minigame, usually unlocked at the very end. The games are pretty simple, mostly involving moving Pyoro left to right in order to eat food falling from the sky, although there are variations.",
      "bigName": "Pyoro"
    },
    {
      "id": 744,
      "name": "Fronks",
      "games": "WarioWare, Inc. Mega Microgame$ (2003 - GBA)",
      "series": "Wario",
      "description": "Fronks are… uhm, well… they are Fronks. The most famous one is probably that one who lives in 9-Volt’s house. 9-Volt rescued him when he was lost and now keeps him as a pet, though he hates being called that. The inhabitants of Diamond City seem to be very fond of the Fronks, as they include the creatures in many of the microgames they develop. However, some of these games treat the poor Fronks not very nicely.",
      "bigName": "Fronks"
    },
    {
      "id": 745,
      "name": "Captain Syrup",
      "games": "Wario Land: Super Mario Land 3 (1994 - Game Boy)",
      "series": "Wario",
      "description": "Wario’s longtime rival and leader of the Brown Sugar Pirates, Captain Syrup’s rivalry with the greedy microgame developer began when he invaded her base, Kitchen Island, and took all the treasure that she had rightfully stolen. Wario and her have butted heads a few times afterwards, but the Captain is not above helping him if she’s got something to gain from him. She used to sail on the SS Tea Cup, but has since changed to the treasure chest shaped The Sweet Stuff.",
      "bigName": "Captain Syrup"
    },
    {
      "id": 746,
      "name": "Princess Shokora",
      "games": "Wario Land 4 (2001 - GBA)",
      "series": "Wario",
      "description": "Long ago, Princess Shokora reigned over an unknown kingdom and resided within the Golden Pyramid. One day, however, an evil, greedy being called the Golden Diva sunk the Pyramid and cursed the Princess, robbing her of her human form. Recently, the Pyramid has been re-discovered, so it’s the perfect time for a brave, noble hero to appear and save the princess. Or, I guess Wario will do.",
      "bigName": "Princess Shokora"
    },
    {
      "id": 747,
      "name": "Count Cannoli",
      "games": "Wario: Master of Disguise (2007 - DS)",
      "series": "Wario",
      "description": "Starring in the popular TV show \"The Silver Zephyr\", Count Cannoli is a treasure-seeking thief carrying a magic wand called Goodstyle. It isn't too long until Wario becomes tempted with the idea of entering the TV show to steal its treasures. After Goodstyle is nabbed by Wario, Cannoli constantly chases him around to get his clan's prized wand back.",
      "bigName": "Count Cannoli"
    },
    {
      "id": 748,
      "name": "Shake King",
      "games": "Wario Land: Shake It! (2008 - Wii)",
      "series": "Wario",
      "description": "The captain of an evil band of pirates, the Shake King attempted to take over the Shake Dimmension by imprisoning its ruler, Queen Merelda, and her loyal Merfles, and then stealing their greatest treasure, the Bottomless Coin Sack. Out of the goodness of his heart, Wario sets out to rescue the poor treasure, but he needs to be quick. If he takes too long to finish a level, the Shake King will take all the riches he’s collected!",
      "bigName": "Shake King"
    },
    {
      "id": 749,
      "name": "Solid Snake",
      "games": "Metal Gear (1987 - MSX2)",
      "series": "MetalGear",
      "description": "A product of the Les Enfants Terribles project, Solid Snake is a clone of Big Boss, but has become a legendary soldier in his own right. As an infiltration specialist, he went on to join the black ops unit FOXHOUND, with his goals mostly remaining the same: to destroy the bipedal tanks known as Metal Gears. He was wrongfully labeled a terrorist after the Shadow Moses Incident and was forced to fake his own death. Things aren't all guts and glory when you're a soldier.",
      "bigName": "Solid Snake"
    },
    {
      "id": 750,
      "name": "Liquid Snake",
      "games": "Metal Gear Solid (1998 - PS)",
      "series": "MetalGear",
      "description": "The leader of FOXHOUND during the Shadow Moses Incident, Liquid was cloned from Big Boss's DNA as part of the Les Enfants Terribles project, the same project which created Solid Snake and Solidus Snake. He was led to believe that he was created to express Big Boss's recessive traits and was therefore inferior to Solid Snake, who had received his dominant traits, thus leading to a long rivalry with Solid Snake to reclaim his birthright and prove his superiority to his clone.",
      "bigName": "Liquid Snake"
    },
    {
      "id": 751,
      "name": "Gray Fox",
      "games": "Metal Gear (1987 - MSX2)",
      "series": "MetalGear",
      "description": "A mercenary and former agent of FOXHOUND. Frank Jaeger started off as a child soldier, and he would be the only operative of FOXHOUND to receive the code name Fox, the highest commendation available. He was an ally of Solid Snake during the Outer Heaven Uprising, but eventually had to fight his former friend. After the battle, he was forcibly fitted with a cybernetic exoskeleton. As an assist trophy, he runs around the stage cutting up anyone in his way.",
      "bigName": "Gray Fox"
    },
    {
      "id": 752,
      "name": "Hal Emmerich",
      "games": "Metal Gear Solid (1998 - PS)",
      "series": "MetalGear",
      "description": "Better known by his nickname of \"Otacon\", he was the chief engineer on the Metal Gear REX project. He became close friends with Solid Snake after he was rescued during the Shadow Moses Incident, and became an adoptive father after the Guns of the Patriots incident. Hal suffered through a rough childhood, being taken into custody by his mother after she deemed his father too dangerous, and with him also having a role in the death of his father. He was eventually hired by ArmsTech where he would join the Metal Gear REX project.",
      "bigName": "Hal Emmerich"
    },
    {
      "id": 753,
      "name": "Roy Campbell",
      "games": "Metal Gear 2: Solid Snake (1990 - MSX)",
      "series": "MetalGear",
      "description": "A former US Army colonel in command of FOXHOUND. He'd go on to work for an advisory body under the UN Security Council to monitor PMC activities. He was a close friend of Solid Snake and the father of Meryl Silverburgh. Roy served under the USMC under the 5th Marine Regiment. He left the marines to join the Green Berets. In 1970, he was dispatched from Fort Bragg to the San Hieronymo Penninsula to investigate a secret Soviet missile base, leading to the death of his entire crew and leaving him a POW to a rogue FOX unit.",
      "bigName": "Roy Campbell"
    },
    {
      "id": 754,
      "name": "Meryl Silverburgh",
      "games": "Metal Gear Solid (1998 - PS)",
      "series": "MetalGear",
      "description": "The commanding officer of Rat Patrol Team 01 of the CID, which was a task force for investigating private military action for the CID. She was a well known career soldier due to her involvement with the Shadow Moses Incident, where she worked alongside Solid Snake. Raised in a military family, she trained herself in the arts of soldiery, though her father died in the Gulf War when she was still young. She primarily admired the FOXHOUND unit, reminiscing on the times when her father and Solid Snake were members in their heyday.",
      "bigName": "Meryl Silverburgh"
    },
    {
      "id": 755,
      "name": "Mei Ling",
      "games": "Metal Gear Solid (1998 - PS)",
      "series": "MetalGear",
      "description": "A Chinese-American data analyst who served on Solid Snake's radio support team during the Shadow Moses Incident. Afterwards, she went to join Philantropy, an anti-Metal Gear organization, and assisted Snake once again by providing stolen military equipment. Years later, she became the captain of the USS Missouri, commanding it in battle during the Guns of the Patriots Incident. She is well versed in all kinds of literature, primarily Chinese Proverbs and Shakespeare. This was to \"keep in touch\" with both sides of her heritage.",
      "bigName": "Mei Ling"
    },
    {
      "id": 756,
      "name": "Solidus Snake",
      "games": "Metal Gear Solid 2: Sons of Liberty (2001 - PS2)",
      "series": "MetalGear",
      "description": "One of the clones of Big Boss from the Les Enfants Terribles project, Solidus was the only perfect clone of Big Boss, being made with both of his genetic traits. After secretly investigating the events on Shadow Moses Island in Alaska, he ended up directly involved with the Big Shell Incident. He was dispatched to Liberia in the 1980s to aid in the Civil War. He adopted a young boy named Jack (better known as Raiden), and trained him to become a dangerous killer from as early as age six. He raised Jack to be the most dangerous member of his Small Boy Unit in the Army of the Devil. In the early 2000's, Solidus became the 43rd President of the United States. Let's hope nobody digs up the dirt on his past or his presidency will be in severe jeopardy!",
      "bigName": "Solidus Snake"
    },
    {
      "id": 757,
      "name": "Rosemary",
      "games": "Metal Gear Solid 2: Sons of Liberty (2001 - PS2)",
      "series": "MetalGear",
      "description": "Raiden's wife, she was a data analyst for the Pentagon before she went to join The Patriots, the secret operation that controlled the US undercover. She was to keep an eye on Raiden by developing a romance with him. The two met outside of Federal Hall in 2007, when the two got in an argument over what building King Kong climbed up. The two got back together a week later after she discovered they worked together. She was to date him for two years under The Patriots's orders, but her love transcended those rules, and the two stayed together even after she left. She even had a kid with him! Unfortunately, their love wasn't meant to last, as Raiden would always come home drunk, trying to forget the memories of his past as a soldier for Solidus.",
      "bigName": "Rosemary"
    },
    {
      "id": 758,
      "name": "Naked Snake",
      "games": "Metal Gear Solid 3: Snake Eater (2004 - PS2)",
      "series": "MetalGear",
      "description": "On August 24, 1964, under command of Major Zero, the supervision of The Boss, and the assistance of Para-Medic, Naked Snake took part in the Virtuous Mission as a member of the CIA's FOX Unit, in which he was to rescue Nikolai Stepanovich Sokolov. He infiltrated Tselinoyarsk after undertaking the first HALO Jump. Evading the KGB troops, Snake finally made contact with Sokolov and escorted him to safety. Sokolov explained to him that the Soviets forced him to work on a new weapon, the Shagohod. Fearing the power of the weapon, Sokolov begged Snake to warn the Soviet government about it and have it destroyed. Unfortunately, this mission ended in failure.",
      "bigName": "Naked Snake"
    },
    {
      "id": 759,
      "name": "Big Boss",
      "games": "Metal Gear (1987 - MSX)",
      "series": "MetalGear",
      "description": "The legendary mercenary himself, Big Boss founded the US Special Forces Unit FOXHOUND, along with the mercenary company Militaires Sans Frontières and was also one of the founding member of The Patriots. He later would establish the military states of Outer Heaven and Zanizibar Land for his companies. He sure lives a busy life, but there's rarely a break when you're a soldier. He also had his genetic code used as part of the Les Enfants Terribles, which created 3 clones of Big Boss, Solid Snake, Liquid Snake,and Solidus Snake.",
      "bigName": "Big Boss"
    },
    {
      "id": 760,
      "name": "The Boss",
      "games": "Metal Gear Solid 3: Snake Eater (2004 - PS2)",
      "series": "MetalGear",
      "description": "A renouned American soldier, founder, and leader of the Cobra Unit, the biological mother of Revolver Ocelot and a mentor to Naked Snake. She led the Cobra Unit to victory at the Battle of Normandy in 1944, and also developed the CQC techniques, which allowed for rapid alternation between armed and hand-to-hand combat. She founded the Cobra Unit in 1942. which consisted of herself, The Pain, The Fear, The End, The Fury, and The Sorrow, all of which helped to ensure an allied victory by the end of WW2.",
      "bigName": "The Boss"
    },
    {
      "id": 761,
      "name": "EVA",
      "games": "Metal Gear Solid 3: Snake Eater (2004 - PS2)",
      "series": "MetalGear",
      "description": "A spy who fought alongside Naked Snake during Operation Snake Eater, and served as the surrogate mother of both Solid and Liquid Snake. She works as a spy for the Chinese People's Liberation Army, and was tasked with obtaining the Philosopher's Legacy. She was taken by The Philosophers in her youth and raised in a joint U.S-Soviet-Chinese facility. She was trained as a sleeper agent, which made her indistinguishable from any other American. She then joined the CIA's Virtuous Mission in 1964, and, posing as a KGB Operative named Tatanya, she was sent to Tselinoyarsk to oversee the development of a new weapon called the Shagohod, but she was taken prisoner by GRU forces. She eventually met Naked Snake during Operation Snake Eater, and the two became partners.",
      "bigName": "EVA"
    },
    {
      "id": 762,
      "name": "Revolver Ocelot (Metal Gear Solid 3)",
      "games": "Metal Gear Solid 3: Snake Eater (2004 - PS2)",
      "series": "MetalGear",
      "description": "Ocelot is a Russian-American operative of FOXHOUND and an agent for The Patriots. In August 1964. Ocelot and his crew Infiltrated Rassvet, Tselinoyarsk. The plan? To capture the Russian weapons scientist Nikolai Stepanovich Sokolov for the GRU, interrupting the CIA's own extraction on Sokolov to get his job done. His entire unit was defeated from a simple error, a jam in his Makarov pistol. Due to his lack of close combat skills, he was left defenseless and his entire crew was killed. If only he spent less time with his guns and more time with his fists!",
      "bigName": "Revolver Ocelot (Metal Gear Solid 3)"
    },
    {
      "id": 763,
      "name": "Revolver Ocelot (Metal Gear Solid 5)",
      "games": "Metal Gear Solid V: The Phantom Pain (2015 - PS4)",
      "series": "MetalGear",
      "description": "In 1984 during the Phantom Pain Incident, Ocelot informed Big Boss on the status of his clones and the ruse that he and Zero had created. He elaborated that he'd use hospital staff as decoys against attackers. The last step involved him using hypnotherapy on himself in order to make himself believe that the body-double they had was actually Big Boss himself. All of which was to aid him in his campaign against XOF. He aids Venom Snake (the body-double), throughout his campaign, and became one of his greatest allies during his mission.",
      "bigName": "Revolver Ocelot (Metal Gear Solid 5)"
    },
    {
      "id": 764,
      "name": "Zero (Metal Gear Solid 3)",
      "games": "Metal Gear Solid 3: Snake Eater (2004 - PS2)",
      "series": "MetalGear",
      "description": "Also known by his nickname of \"Major Tom.\" Zero is the original commander of Special Forces Unit FOX. Both him and Big Boss founded The Patriots in 1970. Later on in life, the two would develop a bitter enmity. In 1964, he served as FOX's commanding officer during the Virtuous Mission under the oversight of The Boss. Their objective: to rescue Sokolov in Tselinoyarsk, USSR.",
      "bigName": "Zero (Metal Gear Solid 3)"
    },
    {
      "id": 765,
      "name": "Raiden",
      "games": "Metal Gear Solid 2: Sons of Liberty (2001 - PS2)",
      "series": "MetalGear",
      "description": "A former child soldier under Solidus Snake, Raiden was selected by the patriots to test the S3 Plan as a new recruit for FOXHOUND. However, during this project, he was captured and forced to undergo heavy cybernetic experimentation. After his escape, he went on to assist Solid Snake during the Guns of the Patriots Incident. He would eventually manage to suppress these horrible memories, but still suffers from PTSD because of them.",
      "bigName": "Raiden"
    },
    {
      "id": 766,
      "name": "Kazuhira Miller",
      "games": "Metal Gear 2: Solid Snake (1990 - MSX)",
      "series": "MetalGear",
      "description": "The subcommander of both the Militaires Sans Frontières and Diamond Dogs and later on, the survival trainer for FOXHOUND. He is a well read man, and possesses immense scientific knowledge. He was the child of an American GHQ officer and an unknown Japanese woman. He was named after the Japanese word for peace, and was raised when Japan was under occupation from US military forces. He was unable to attain Japanese citizenship due to him never knowing his father. He was also bullied in his youth for looking like an American. He joined the Japan Self-Defense Forces to pay for his mother's hospital bills and to get a taste for battle. Unfortunately, war is never glamorous, and he learnt this the hard way.",
      "bigName": "Kazuhira Miller"
    },
    {
      "id": 767,
      "name": "Paz Ortega Andrade",
      "games": "Metal Gear Solid: Peace Walker (2010 - PSP)",
      "series": "MetalGear",
      "description": "A Cipher agent who infiltrated the Militaires Sans Frontières in 1974. Her real name is Pacifica Ocean, and was taken in by Cipher after becoming an orphan. Though she felt that she owed him her life, her loyalty was primarily born out of fear, as she believed that if she so much as disobeyed Cipher, it would result in \"a fate far worse than death.\" She was also the only member of Cipher to see the man face-to-face and receive orders from him directly. Later on, she'd work for both the CIA and KGB, becoming a triple agent. Pacifica adopted her identity of Paz Ortega Andrade thanks to Cypher, posing as a 16 year old Costa Rican high school girl.",
      "bigName": "Paz Ortega Andrade"
    },
    {
      "id": 768,
      "name": "Strangelove",
      "games": "Metal Gear Solid: Peace Walker (2010 - PSP)",
      "series": "MetalGear",
      "description": "Born shortly before WWII, Strangelove is an AI research scientist responsible for the Mammal Pod AI as part of the Peace Walker Project in the 1970s, and the mother of Hal Emmerich. As an albino, she couldn't be outside for long periods of time without being burnt. She also had no understanding of how others seemed to behave. She became associated with The Boss in 1961, and oversaw the launch of the first American spacecraft the same year. Fun fact: Her name comes from the 1964 movie Dr Strangelove: or how I Learned to Stop Worrying and Love the Bomb.",
      "bigName": "Strangelove"
    },
    {
      "id": 769,
      "name": "Metal Gear REX",
      "games": "Metal Gear Solid (1998 - PS)",
      "series": "MetalGear",
      "description": "A prototype Metal Gear, its design was first made back in the 1960s by Leonovitch Granin, but the idea was rejected in favor of the Shagohod. Bitter about this, Granin sent his plans to the US. Now, with the project headed by Hal Emmerich, REX was finished in the early 2000s, a weapon capable of launching a nuclear weapon to any point on the globe.",
      "bigName": "Metal Gear REX"
    },
    {
      "id": 770,
      "name": "Metal Gear RAY",
      "games": "Metal Gear Solid 2: Sons of Liberty (2001 - PS2)",
      "series": "MetalGear",
      "description": "An amphibious Metal Gear designed by the US Marine Corps that was later stolen by The Patriots. Unlike most other Metal Gears, it did not have any nuclear capabilities. It's function was more or less to eliminate Metal Gear derivatives, thus making it an \"Anti-Metal Gear.\" However, since its role still applied to nuclear strategy, it could still technically be considered a Metal Gear. They were developed as a counter measure to the Metal Gear REX units being built across the globe following the Shadow Moses Incident. A prototype model was stolen by Revolver Ocelot during the Tanker Incident.",
      "bigName": "Metal Gear RAY"
    },
    {
      "id": 771,
      "name": "Gekko",
      "games": "Metal Gear Solid 4: Peace Walker (2008 - PS3)",
      "series": "MetalGear",
      "description": "Large, unmanned autonomous fighting vehicles designed by AT Corp for use in ground combat. Their official designation is IRVING by the US Army. These machines were a combination of the technologies used in Metal Gears REX and RAY. However, they weren't Metal Gears, due to a lack of nuclear abilities. Think of them more as mobile tanks if you will. The Gekkos were used mostly in 2014 by PMC forces under Liquid Ocelot, nearly replacing tanks on the battlefield due to their superior attributes. Some were deployed in the Middle East to deal with militias.",
      "bigName": "Gekko"
    },
    {
      "id": 772,
      "name": "Metal Gear ZEKE",
      "games": "Metal Gear Solid: Peace Walker (2010 - PSP)",
      "series": "MetalGear",
      "description": "A Metal Gear designed by the Militaires Sans Frontières in 1974. Big Boss commissioned doctors Huey Emmerich and Strangelove to create the Metal Gear ZEKE. Emmerich supervised the assembly of the frame, while Strangelove developed the AI for the machine. However, a problem came with the lack of a defense budget, thus resulting in them having to salvage parts from other Metal Gears. Its AI wasn't a replica of human thought like the other Metal Gears, rather, it wasn't able to make decisions for retaliation.",
      "bigName": "Metal Gear ZEKE"
    },
    {
      "id": 773,
      "name": "Sahelanthropus",
      "games": "Metal Gear Solid V: The Phantom Pain (2015 - PS4)",
      "series": "MetalGear",
      "description": "After the destruction of Mother Base during the Ground Zeroes Incident, Huey Emmerich went underground, but was eventually absorbed into XOF's staff to help develop a new Metal Gear that wover in Afghanistan, with finances for the project coming from the Soviets. Unfortunately, the project was rushed, not allowing anyone larger than a child to fit within the machine, as it was meant to fit an AI pod inside. This resulted in the falling out between Huey and Strangelove, as their son Hal had to go inside the machine to test it. However, XOF had different plans, as their boss Skull Face wanted to use it in their grand scheme of arming the world with nuclear bombs.",
      "bigName": "Sahelanthropus"
    },
    {
      "id": 774,
      "name": "Cardboard Box",
      "games": "Metal Gear (1987 - MSX)",
      "series": "MetalGear",
      "description": "Sneaking suits, camouflage, even invisibility; technology marches ever forward, but sometimes, the oldest trick in the book is still the best. Cardboard boxes are still the best way to avoid detection by enemy soldiers when sneaking around their base. They have been used by Solid Snake, Raiden, and even the legendary Big Boss, no one is too good to use the old box. Just be careful not to get caught moving it, otherwise, it is absoluty foolproof.",
      "bigName": "Cardboard Box"
    },
    {
      "id": 775,
      "name": "Sonic the Hedgehog",
      "games": "Sonic the Hedgehog (1991 - Genesis)",
      "series": "Sonic",
      "description": "Capable of reaching Mach 1 on foot, Sonic the Hedgehog is dubbed by many as the “fastest thing alive.” He is often cocky, impulsive, and overall cheeky, but he has a strong sense of justice and always helps anybody he finds in need. The teenaged hedgehog first entered the hero scene when his current arch-nemesis, Dr. Ivo “Eggman” Robotnik, kidnapped all the animals on South Island and used them to power his robots for advancing world domination. He has since found himself in all sorts of adventures, with new friends and enemies alike.",
      "bigName": "Sonic the Hedgehog"
    },
    {
      "id": 776,
      "name": "Dr. Eggman",
      "games": "Sonic the Hedgehog (1991 – Genesis)",
      "series": "Sonic",
      "description": "Dr. Ivo “Eggman” Robotnik is a scientist extraordinaire who has mastered the craft of building robotic armies, awakening powerful demigods, and regularly losing to an oversized rodent. Dr. Eggman, as he is dubbed by Sonic and friends, dreams of conquering the world and building Eggmanland, a mechanical wonderland where denizens are to kneel to his eminence. With an IQ of 300, he constantly comes up with brilliant schemes to extend his empire, but his arch-nemesis Sonic always puts a stop to them. He never gives up, however, because he is the Eggman, and he has a master plan.",
      "bigName": "Dr. Eggman"
    },
    {
      "id": 777,
      "name": "Tails",
      "games": "Sonic the Hedgehog 2 (1992 – Genesis)",
      "series": "Sonic",
      "description": "Miles Prower earned the nickname “Tails” due to his genetic abnormality of having two tails. The fox was often picked on by the other kids for this, causing his self-esteem to shrink away. It was not until he saw his hero Sonic the Hedgehog running through Westside Island that he grew more confident. He joined the hedgehog in his quest to stop Dr. Eggman from launching the Death Egg and has since become like a brother to him. Tails can use his two tails to fly over incredible distances. Not only that, he is a genius mechanic to the point that the Tornado, Sonic’s personal biplane, is far more associated with him than the owner.",
      "bigName": "Tails"
    },
    {
      "id": 778,
      "name": "Super Sonic",
      "games": "Sonic the Hedgehog 2 (1992 - Genesis)",
      "series": "Sonic",
      "description": "With the power of the 7 Chaos Emeralds, certain individuals can achieve extraordinary power. Sonic is one of those people, and when he is exposed to all 7 Emeralds, he transforms into Super Sonic. This increases Sonic's trademark speed to simply absurd levels, grants him immense power, and even bestows the ability of flight upon him. This power does not come cheap however, and Super Sonic will lose Rings while transformed. Once all Super Sonic's Rings have been depleted, he will revert to regular old Sonic.",
      "bigName": "Super Sonic"
    },
    {
      "id": 779,
      "name": "Amy Rose",
      "games": "Sonic CD (1993 - Sega CD)",
      "series": "Sonic",
      "description": "Amy Rose is a sweet energetic hedgehog who loves ice cream, her friends, and especially Sonic. Amy Rose first met Sonic on Little Planet as her tarot cards foretold her and has since become infatuated with the blue blur. Although she seems a bit on the petite side, she can make short work of anyone who dares cross her with her signature weapon, the Piko Piko Hammer. Her power with the hammer even rivals those of characters such as Knuckles and Vector. She may seem a bit eccentric at times due to her crush on Sonic, but she is a genuinely nice girl who would go through extraordinary lengths to help those in need.",
      "bigName": "Amy Rose"
    },
    {
      "id": 780,
      "name": "Metal Sonic",
      "games": "Sonic CD (1993 - Sega CD)",
      "series": "Sonic",
      "description": "An extraordinarily deadly and capable robot created by Dr. Eggman, in Sonic's image. With speed rivaling Sonic himself, and a resolve of pure steel, you can always count on Metal Sonic to deliver a challenge. Sonic's first encounter with this souped-up Badnik of a doppelgänger was in Stardust Speedway Zone, where the two mirror images faced of in a race. Maybe Eggman programmed a little chivalry in there somewhere, after all.",
      "bigName": "Metal Sonic"
    },
    {
      "id": 781,
      "name": "Knuckles",
      "games": "Sonic the Hedgehog 3 (1994 - Genesis)",
      "series": "Sonic",
      "description": "A resident of the floating Angel Island, and the guardian of the Master Emerald. Knuckles is the last of his kind, but despite his best efforts to keep a stoic appearance, he's secretly pretty gullible. When Sonic first arrived on Angel Island, Knuckles would antagonize him constantly... until it turns out Eggman was manipulating him the whole time! When Eggman tried steal the Master Emerald, Sonic & Knuckles worked together to get it back, forming a longtime friendship in the process.",
      "bigName": "Knuckles"
    },
    {
      "id": 782,
      "name": "Chaotix",
      "games": "Knuckles' Chaotix (1995 - 32X)",
      "series": "Sonic",
      "description": "While Sonic prefers to hunt down the enemy head on, Chaotix are more of a detective agency. Their members consist of Vector the Crocodile, Charmy the Bee, and Espio the Chameleon. The team came together during the Chaos Ring incident to stop Eggman's operations. They aren't as involved with the fighting, but they'll always be there to lend a hand when needed.",
      "bigName": "Chaotix"
    },
    {
      "id": 783,
      "name": "Big the Cat",
      "games": "Sonic Adventure (1999 - Dreamcast)",
      "series": "Sonic",
      "description": "He may look rather big and imposing, but Big the Cat is quite gentle and easy-going. Big doesn't like going on grand adventures like the rest of Sonic's crew, preferring to stay home and fish with his best friend Froggy. Even though he prefers this tranquil lifestyle, that doesn't mean he will hesitate to help his friends if the need ever arises. Although he's one of Sonic's strongest allies, this comes at the cost of his speed, forcing him to rely on brute strength rather than speed to deal with problems.",
      "bigName": "Big the Cat"
    },
    {
      "id": 784,
      "name": "Gamma",
      "games": "Sonic Adventure (1998 – Dreamcast)",
      "series": "Sonic",
      "description": "E-102 Gamma is the second installment in the E-100 series, a series of robots designed to serve as elites in Dr. Eggman’s robot army. Out of the original five E-Series robots, Gamma is the only one Dr. Eggman deemed competent since the other four failed to live up to expectations. E-102 Gamma unquestioningly served Dr. Eggman until Amy Rose introduced him to the idea of love. Upon gaining a grasp on the concept of love, he saw the wretched things Dr. Eggman did to his E-Series brethren and the flickies inside them; he then broke free of Eggman’s programming and vowed to save them all. He went on a quest to destroy the E-Series robots for good, freeing both the robots from their misery and the flickies from their captivity.",
      "bigName": "Gamma"
    },
    {
      "id": 785,
      "name": "Chaos",
      "games": "Sonic Adventure (1998 – Dreamcast)",
      "series": "Sonic",
      "description": "Chaos is a godlike creature that was once the guardian of both the Chao and the Master Emerald. It lived a peaceful existence until Pachacamac and the Knuckles Tribe attacked the Alter of the Emeralds in a power lust. For their greed, Chaos killed Pachacamac and his men in an intense anger and has fittingly become the “God of Destruction.” In Sonic Adventure, Dr. Eggman awakens Chaos by shattering the Master Emerald on Angel Island. He plans to use the Chaos Emeralds to strengthen Chaos so that he can use it to destroy Station Square and build his empire on the city's remains.",
      "bigName": "Chaos"
    },
    {
      "id": 786,
      "name": "Chao",
      "games": "Sonic Adventure (1998 – Dreamcast)",
      "series": "Sonic",
      "description": "The Chao is a small puffball-like species native to Angel Island, although dispersion has made it so that they can be found all over the world. The Chao begins it life as a plain blue Chao, but its upbringing influences what type of Chao it is once it matures, making it so that there are a variety of different species of Chao. Possible variables that play into the upbringing of the Chao includes its diet, the species of animals it interacts with, and even the morality of its caregiver. The Chao Garden is a manmade facility that is specialized for optimal Chao upbringing; Chao Gardens allow Chao to interact with other Chao in diversions such as races and karate tournaments.",
      "bigName": "Chao"
    },
    {
      "id": 787,
      "name": "Hero Chao",
      "games": "Sonic Adventure 2 (2001 - Dreamcast)",
      "series": "Sonic",
      "description": "The Hero Chao is an evolved form of the Neutral Chao, differentiating itself from the Neutral Chao through its white body, gold wings, and blue halo. A Neutral Chao evolves into a Hero Chao usually from being cared for by somebody who identifies as a “Hero” (e.g. Sonic, Tails, and Knuckles), but a diet of Hero Fruits is equally sufficient. The Chao will then enter its first cocoon, where it will emerge a Hero Chao after some maturing. As indicated by its name, the Hero Chao tends to gravitate more toward the “heroic” side on the morality scale.",
      "bigName": "Hero Chao"
    },
    {
      "id": 788,
      "name": "Shadow the Hedgehog",
      "games": "Sonic Adventure 2 (2001 - Dreamcast)",
      "series": "Sonic",
      "description": "Shadow is an artificial hedgehog created by Dr. Gerald Robotnik to be the “Ultimate Lifeform.” Gerald Robotnik’s research on the Space Colony ARK was going swimmingly until the government deemed his research a threat, taking him captive and killing his granddaughter, Maria Robotnik, in the process. Fifty years later, when Shadow was awakened by Dr. Eggman, Gerald’s grandson, he was filled with a new sense of purpose: to act out Maria’s dying wish. With a top speed and ego that can rival Sonic’s, Shadow will not let anybody get in his way.",
      "bigName": "Shadow the Hedgehog"
    },
    {
      "id": 789,
      "name": "Super Shadow",
      "games": "Sonic Adventure 2 (2001 - Dreamcast)",
      "series": "Sonic",
      "description": "Much like Sonic, Shadow also has a Super State upon collecting the 7 Chaos Emeralds, granting him immense power. As Super Shadow, he was able to go toe-to-toe with Solaris, singlehandedly stop Devil Doom, and even prevent a space station from crashing into the Earth. He commands ultimate power and energy in this form, on top of all this, it grants him the ability of flight. All of these help make Super Shadow one of the most powerful characters in the entire series.",
      "bigName": "Super Shadow"
    },
    {
      "id": 790,
      "name": "Rouge the Bat",
      "games": "Sonic Adventure 2 (2001 - Dreamcast)",
      "series": "Sonic",
      "description": "Rouge the Bat has a part-time job as a spy for the government agency G.U.N. Despite this, she is more often than not more likely to be found stealing jewels for her own personal gain than carrying out any actual orders. Rouge is very flirty and outgoing, giving Knuckles an especially hard time with all her teasing. With how frisky she is, it comes as a surprise that her closest friends are Shadow and E-123 Omega, but the three of them get along quite well.",
      "bigName": "Rouge the Bat"
    },
    {
      "id": 791,
      "name": "Cream & Cheese",
      "games": "Sonic Advance 2 (2002 - GBA)",
      "series": "Sonic",
      "description": "The rabbit pictured to the left is Cream, and the creature to the right is her pet Chao Cheese. Cream and Cheese live a tranquil life alongside Cream’s mother, who has raised her daughter to be a polite and well-mannered member of society. Cream is one of the youngest in Sonic’s circle of friends, so she is naturally overly idealistic and naive as to how the world works. Just because she is young doesn’t mean she can’t put up a fight, though; when fighting alongside her buddy Cheese, she can easily take on enemies many times her size.",
      "bigName": "Cream & Cheese"
    },
    {
      "id": 792,
      "name": "Omega",
      "games": "Sonic Heroes (2003 - Gamecube)",
      "series": "Sonic",
      "description": "The final model of Dr. Eggman's E-100 series of robots. He was stored away due to his immense strength and aggressive nature. Omega was reactivated by Rouge, and co-operated with her and Shadow to defeat Dr. Eggman. Omega is fueled by contempt for Dr. Eggman, and wishes to prove his superiority over his mechanical peers. A bit of an angry one, but at least he's a team player!",
      "bigName": "Omega"
    },
    {
      "id": 793,
      "name": "Blaze the Cat",
      "games": "Sonic Rush (2005 - Nintendo DS)",
      "series": "Sonic",
      "description": "Blaze is a pyrokinetic purple feline that hails from another dimension, where she serves as princess responsible for guarding the Sol Emeralds. Having such a prestigious job has put Blaze on edge, making her very antisocial and very cynical of people’s motives. It wasn’t until Sonic and Cream entered her life that she finally loosened up. Although she is still very timid and reserved, Blaze is now much friendlier and more optimistic, having made plenty of new friends to call her own. She has even taken a liking to the rowdy and rambunctious Marine.",
      "bigName": "Blaze the Cat"
    },
    {
      "id": 794,
      "name": "Jet the Hawk",
      "games": "Sonic Riders (2006 - Gamecube)",
      "series": "Sonic",
      "description": "Jet is the brash and arrogant leader of the Babylon Rogues, a group of treasure-seeking thieves that care only for riches. Jet is known as the Legendary Wind Master due to his mastery of Extreme Gear riding, a form of extreme sports which involve high-speeds races on hoverboards. However, his skills will be tested when he enters a race in which the prizes are the Chaos Emeralds, and his opponent is Sonic the Hedgehog.",
      "bigName": "Jet the Hawk"
    },
    {
      "id": 795,
      "name": "Silver The Hedgehog",
      "games": "Sonic The Hedgehog (2006 - PS3)",
      "series": "Sonic",
      "description": "It's no use! This hedgehog hails from 200 years in the future, his job is to protect his timeline by changing the past to prevent bad things from occurring. Silver uses psychokinesis as his primary weapon, while it seems weird to us, it is perfectly normal during his timeline. Despite the monumental tasks he has on hand, Silver remains optimistic about changing the future and doing what's right.",
      "bigName": "Silver The Hedgehog"
    },
    {
      "id": 796,
      "name": "Sonic the Werehog",
      "games": "Sonic Unleashed (2008 - Wii)",
      "series": "Sonic",
      "description": "Sonic was doing his daily routine of busting one of Dr. Eggman’s machines, when he accidentally was struck with a massive amount of Dark Gaia’s energy. This caused a bizarre transformation in him. When night falls, Sonic’s muscles swell and he grows heavy fur throughout his body, resulting into a bestial, wolf-like appearance. In this form, Sonic can’t go fast, but he is very strong, and his arms can stretch much farther than before.",
      "bigName": "Sonic the Werehog"
    },
    {
      "id": 797,
      "name": "Infinite",
      "games": "Sonic Forces (2017 - Switch)",
      "series": "Sonic",
      "description": "Also known by his nickname of the \"Ultimate Mercenary.\" Infinite is the captain of the Jackal Squad mercenary group. He was hired by Dr. Eggman to lead his army, but it was destroyed by the hands of Shadow. Ashamed of his loss, Infinite decides to obtain the power of the Phantom Ruby to abandon his weak past self, he also made a mask for himself to hide his face in shame. Now under Eggman, he extends his army to its largest size. Finally getting the power he wanted.",
      "bigName": "Infinite"
    },
    {
      "id": 798,
      "name": "Olimar",
      "games": "Pikmin (2001 – Gamecube)",
      "series": "Pikmin",
      "description": "Olimar is a veteran astronaut and engineer hailing from Planet Hocotate. One day, somewhat tired from his demanding job at the interstellar delivery company Hocotate Freight, he decides to take a short interstellar vacation. His spaceship, the S.S. Dolphin, is hit by a meteor and crashes into onto Planet PNF-404. Hope seems lost as his ship is ruined and the oxygen in the atmosphere will kill him in thirty days with his limited life support. Luckily, he discovers the Pikmin species and forms an owner-to-pet like relationship with them. They eventually repair the ship although Olimar returns to the planet two more times, with the dynamic between him and the Pikmin only strengthening.",
      "bigName": "Olimar"
    },
    {
      "id": 799,
      "name": "Alph",
      "games": "Pikmin 3 (2013 - Wii U)",
      "series": "Pikmin",
      "description": "Alph is a gentle and intelligent engineer from Planet Koppai. He and two of his colleagues, Brittany and Charlie, are tasked with heading out to the uncharted planet known as PNF-404 in hopes of finding food to combat the explosive growth in population on Koppai. Their ship, the S.S. Drake, malfunctions during the landing, leaving the three separated. Alph finds himself in the Tropical Wilds, where he is greeted by a group of friendly Red Pikmin. With his KoPad in hand, he and the Pikmin embark on a quest to find his crew and the S.S. Drake’s warp pad, which is needed for the ship. Along the way me meets several different types of Pikmin, and he and his crew develop a tight connection with the tiny Pikmin specimen.",
      "bigName": "Alph"
    },
    {
      "id": 800,
      "name": "Louie",
      "games": "Pikmin 2 (2004 - GameCube)",
      "series": "Pikmin",
      "description": "A new face in Hocotate Freight, Louie was charged with the task of shipping golden pikpik carrots across the galaxy. However, a ravenous space bunny allegedly overtook his spaceship and stole the carrots. With the company facing a huge debt, Louie and Olimar have no choice but to go back on the Pikmin's planet to collect valuable treasures in hopes of saving Hocotate Freight",
      "bigName": "Louie"
    },
    {
      "id": 801,
      "name": "Charlie",
      "games": "Pikmin 3 (2013 - Wii U)",
      "series": "Pikmin",
      "description": "Charlie is a retired space ranger that has been described as “one of Koppai’s greatest legends”. He’s an extremely loyal friend who makes every effort to protect his fellow space captains, largely due to his companionless space ranger life. He also finds the beauty of the natural world on PNF-404 surprisingly moving. Charlie’s soulmate, Elizabeth, waits for him at home, and he takes a good luck charm (in the form of a rubber ducky) with him on every mission.",
      "bigName": "Charlie"
    },
    {
      "id": 802,
      "name": "Brittany",
      "games": "Pikmin 3 (2013 - Wii U)",
      "series": "Pikmin",
      "description": "Brittany is one of the 3 playable captains that hail from the planet Koppai. Initially, she is stranded by herself in an area of PNF-404 and calls Alph for help on her KopPad. Back home, she is a botanist, and is fascinated with the Pikmin creatures here on this strange planet. Don’t tell anybody, but Brittany occasionally sneaks an extra helping of juice for herself...",
      "bigName": "Brittany"
    },
    {
      "id": 803,
      "name": "Red Pikmin",
      "games": "Pikmin (2001 - GameCube)",
      "series": "Pikmin",
      "description": "Red Pikmin are the first variety of Pikmin discovered by the leaders in all games. They are usually considered the \"main\" type of Pikmin due to their relatively simple traits. Compared to other Pikmin, their pointed noses, resistance to fire, and high attack power set them apart from the rest. In Smash Bros, Olimar and Alph use them with the other Pikmin to attack. The Red Pikmin attacks have fire properties to reflect their fire resistence.",
      "bigName": "Red Pikmin"
    },
    {
      "id": 804,
      "name": "Blue Pikmin",
      "games": "Pikmin (2001 - GameCube)",
      "series": "Pikmin",
      "description": "Blue Pikmin, as their name implies, are a blue species of Pikmin that reside on PNF-404. This species is present in all three Pikmin games, and are always the last type discovered. They have the astonishing ability to breathe both underwater and on dry land, thanks to the gills located on their cheeks. In Smash Bros, Blue Pikmin are the only Pikmin that won't drown when Olimar or Alph swim and they're extremely strong when used in grab attacks.",
      "bigName": "Blue Pikmin"
    },
    {
      "id": 805,
      "name": "Yellow Pikmin",
      "games": "Pikmin (2001 - GameCube)",
      "series": "Pikmin",
      "description": "Yellow Pikmin are the second type of Pikmin discovered by Captain Olimar, and their first discovery was in the first Pikmin game. These Pikmin are known for their resistance to electricity and their large ears. It is not known, however, whether or not this actually aids their hearing. Yellow Pikmin can be thrown higher as well; a feature that was carried into their portrayal in Olimar/Alph's moveset along with electric properties.",
      "bigName": "Yellow Pikmin"
    },
    {
      "id": 806,
      "name": "White Pikmin",
      "games": "Pikmin 2 (2004 - GameCube)",
      "series": "Pikmin",
      "description": "These cute little guys can only be obtained by throwing Pikmin into an Ivory Candypop Buds. Thanks to their light weight, they are faster than any other type of Pikmin, and are useful for carrying treasures. They are immune to poisonous gas, and even emit some of it when chomped on. Their big red eyes also make them able to detect buried treasure, making them extremely versatile.",
      "bigName": "White Pikmin"
    },
    {
      "id": 807,
      "name": "Purple Pikmin",
      "games": "Pikmin 2 (2004 - GameCube)",
      "series": "Pikmin",
      "description": "Purple Pikmin can be found in Pikmin 2 and only in non-story game modes in Pikmin 3. Their most noteworthy characteristics are their massive weight and carrying strength - 10 times those of a regular Pikmin. This is translated well into Smash Bros. When Olimar and Alph use them, they do the most consistent damage but they can't be thrown far and they are very slow. Their weight also means that they aren't the best Pikmin to carry when recovering with Winged Pikmin.",
      "bigName": "Purple Pikmin"
    },
    {
      "id": 808,
      "name": "Winged Pikmin",
      "games": "Pikmin 3 (2013 - Wii U)",
      "series": "Pikmin",
      "description": "Introduced in Pikmin 3, these pink Pikmin (Pinkmin?) are the only type of Pikmin that are capable of flight. Their winged nature allows them to avoid some ground-based enemies, lift certain gates, and even swarm their opponents. They can also fly items back to the S.S. Drake or Onions, but their slow carrying speed means it might not be the most efficient option. While they don’t deal very much damage in regular battles, they are extra-powerful aerial fighters, so use that to your advantage.",
      "bigName": "Winged Pikmin"
    },
    {
      "id": 809,
      "name": "Rock Pikmin",
      "games": "Pikmin 3 (2013 - Wii U)",
      "series": "Pikmin",
      "description": "Rock Pikmin are a species discovered by Alph and his crew on PNF-404. These Pikmin are immune to being crushed. If they are hit by a rock or other object, they will simply go back into the ground. These Pikmin have very hard exteriors, which allow them to break glass, crystals, and even the armor on some animals. They also deal heavy damage, the most of any Pikmin in the game. Due to their rock-like appearance, Rock Pikmin cannot latch onto opponents like other Pikmin, and will simply bounce off them.",
      "bigName": "Rock Pikmin"
    },
    {
      "id": 810,
      "name": "Bulborb",
      "games": "Pikmin (2001 - GameCube)",
      "series": "Pikmin",
      "description": "The Bulborb is a fairly common enemy in the Pikmin games. It can be defeated relatively easily by swarming it from behind, 'bum-rush' style, or by throwing Pikmin, preferably purple ones, onto it's back. In Smash, a Bulborb appears on the Distant Planet stage, where fighters can use it as a platform... until it gets hungry. In that case, the Bulborb can snap fighters into it's mouth and drag them off screen for a KO. Watch out!",
      "bigName": "Bulborb"
    },
    {
      "id": 811,
      "name": "Empress Bulblax",
      "games": "Pikmin 2 (2004 - GameCube)",
      "series": "Pikmin",
      "description": "The Empress Bulbax is an enemy that can crush multiple Pikmin at once with her large, thick body. She is also capable of producing children, but unfortunately those children often get squished, too. Sometimes boulders will fall when she slams into a wall - watch out!",
      "bigName": "Empress Bulblax"
    },
    {
      "id": 812,
      "name": "Emperor Bulblax",
      "games": "Pikmin (2001 - GameCube)",
      "series": "Pikmin",
      "description": "One of the larger members of the Grub-Dog family, Tte Emperor Bulblax is one of the most dangerous enemies in its debut, serving as the game's final boss. You can throw as many pikmin at it as you want, but it won't do much. You have to trick this behemoth into licking up the bomb rocks you drop right in front of him. Strangely enough, he is far weaker in Pikmin 2, you can even kill him before he lands an attack if you're lucky.",
      "bigName": "Emperor Bulblax"
    },
    {
      "id": 813,
      "name": "Burrowing Snagret",
      "games": "Pikmin (2001 - GameCube)",
      "series": "Pikmin",
      "description": "This pokey creature is an enemy from the Pikmin games. It appears to be a combination of a bird and a snake, and it's a member of the Snavian family. It remains underground for the majority of the time, surfacing only when approached by Pikmin or a leader. In Smash Bros, they appear as a summonable Assist Trophy that burrows out of the ground and pokes your opponents to oblivion.",
      "bigName": "Burrowing Snagret"
    },
    {
      "id": 814,
      "name": "Plasm Wraith",
      "games": "Pikmin 3 (2013 - Wii U)",
      "series": "Pikmin",
      "description": "The Plasm Wraith is a the puzzle-based final boss of Pikmin 3 that lives in the Formidable Oak. It is a strange life-form that kidnapped Captain Olimar and kept him asleep so that he couldn’t call for help. As Olimar accidentally took the Cosmic Drive key away from Alph and his friends, they need to defeat the Wraith in order to get their key back and escape from PNF-404.",
      "bigName": "Plasm Wraith"
    },
    {
      "id": 815,
      "name": "Firey Blowhog",
      "games": "Pikmin (2001 - GameCube)",
      "series": "Pikmin",
      "description": "This elephant-esque creature emits a chemical that ignites at moderate temperatures, making it appear that the creature is breathing fire. It has a red tip on the end of its snout to distinguish it from it’s cousin, the Watery Blowhog (who has a blue tip). Both of these crooked characters can harm your Pikmin, so be careful!",
      "bigName": "Firey Blowhog"
    },
    {
      "id": 816,
      "name": "Smoky Progg",
      "games": "Pikmin (2001 - Gamecube)",
      "series": "Pikmin",
      "description": "Found in the Distant Spring, this malformed larval Mamuta is initially hidden in a strange egg. While the Mamuta is normally docile and only plants Pikmin into the ground, the Smoky Progg will uproot and poison them. If Olimar can clear this beast out of the landing site, it will drop a golden pearl producing 100 Pikmin seeds of his choice.",
      "bigName": "Smoky Progg"
    },
    {
      "id": 817,
      "name": "Swooping Snitchbug",
      "games": "Pikmin (2001 - GameCube)",
      "series": "Pikmin",
      "description": "This annoying little pest won't do any harm on your Pikmin, but when opportunity knocks, it'll swoop down and snatch your Pikmin, two at a time. If left alone, the Snitchbug will throw the Pikmin on the ground, burying them. Its relative, the Bumbling Snitchbug, can pick up Olimar instead, leaving him and his Pikmin helpless to nearby creatures.",
      "bigName": "Swooping Snitchbug"
    },
    {
      "id": 818,
      "name": "Iridescent Glint Beetle",
      "games": "Pikmin 2 (2004 - GameCube)",
      "series": "Pikmin",
      "description": "This beetle resembles some of the other beetles Olimar and Louie find on their journey. If you're lucky enough to find one, damaging it will result in it dropping colored pellets. If you're underground, it will instead drop nectar and sprays. These enemies aren't hostile, but are rather hard to hit due to their speed. Be sure to hit them quickly before they go back underground!",
      "bigName": "Iridescent Glint Beetle"
    },
    {
      "id": 819,
      "name": "Yellow Wollywog",
      "games": "Pikmin (2001 - GameCube)",
      "series": "Pikmin",
      "description": "A frog-like enemy that is usually found around the moist rainy areas. It is far more colorful than its cousin, as it lives on the surface instead of in dark areas and caves. It cannot stay underwater for long periods of time due to an apparent adaptation that gave it higher jumping power, which they use to squash any intruders. They can take a fair amount of damage, so try and keep your pikmin away!",
      "bigName": "Yellow Wollywog"
    },
    {
      "id": 820,
      "name": "Peckish Aristocrab",
      "games": "Pikmin 3 (2013 - Wii U)",
      "series": "Pikmin",
      "description": "This large enemy appears in the Garden of Hope and the Tropical Wilds. He can block thrown Pikmin with his large claw, or can temporarily trap them in the bubbles he spits out. You can use Rock Pikmin to break the fragile half of his claw, or throw Bomb Rocks into the crab’s mouth to give him an unpleasant surprise. If he grabs your Pikmin, he’ll eat them, so make sure to keep your troops close.",
      "bigName": "Peckish Aristocrab"
    },
    {
      "id": 821,
      "name": "Mockiwi",
      "games": "Hey! Pikmin (2017 - 3DS)",
      "series": "Pikmin",
      "description": "Mockiwis are common enemies from the Brilliant Gardens sector of Hey! Pikmin. It has a round, bird-like body, and a large beak that it can use to scoop up and eat Pikmin. At one point, this creature was able to fly, but it lost that ability through its evolution into a ground-dwelling critter. Due to the amount of time it spends either eating or sleeping, it reminds Captain Olimar of his own pet back home, Bulbie.",
      "bigName": "Mockiwi"
    },
    {
      "id": 822,
      "name": "R.O.B.",
      "games": "Stack-Up (1985 - NES)",
      "series": "ROB",
      "description": "The video game console market in North America crashed in 1983, leaving the future of the medium uncertain in the region. Luckily, Nintendo launched the Robotic Operating Buddy (R.O.B. for short) controller in 1985. Although an unconventional mean of controlling a game, it disguised the NES as a toy in western markets and kickstarted a new video game renaissance. R.O.B. was compatible with two titles: Stack Up and Gyromite, both making use of R.O.B.’s claws in unique ways.",
      "bigName": "R.O.B."
    },
    {
      "id": 823,
      "name": "Stack-UP",
      "games": "Stack-Up (1985 - NES)",
      "series": "ROB",
      "description": "On this game, you must help R.O.B. to stack up colored blocks in a given order. To do this, Professor Hector, R.O.B.’s creator, must jump from key to key in order to issue R.O.B. the exact commands he needs. That may sound easy, but the professor sometimes needs to compete against his assistant, Professor Vector, or even against computer viruses, Spike and Flipper, who give R.O.B.’s commands of their own!",
      "bigName": "Stack-UP"
    },
    {
      "id": 824,
      "name": "Gyromite",
      "games": "Gyromite (1985 - NES)",
      "series": "ROB",
      "description": "Professor Hector is in big trouble! His laboratory has been filled with dynamite and invaded by evil Smicks! He doesn’t have much time, those dynamite will explode in a few minutes. R.O.B. must help his creator by taking rapidly spinning gyros and placing them on buttons to open and close the lab’s various gates. You’d think a brilliant scientist would design a more efficient way to open a door.",
      "bigName": "Gyromite"
    },
    {
      "id": 825,
      "name": "Villager (Boy)",
      "games": "Dōbutsu no Mori (2001 – N64)",
      "series": "AnimalCrossing",
      "description": "In Animal Crossing, you play as a young human that moves into a small town populated by anthropomorphic animals. You quickly assimilate into the slow-paced lifestyle of the town, enjoying relaxing activities such as fishing, fossil hunting, and gardening. With a variety of ways to express yourself from your clothes to your furniture, you find yourself liberated by small town life. In the most recent title, Animal Crossing: New Leaf, you take on light mayoral responsibilities after being mistakenly sworn into office.",
      "bigName": "Villager (Boy)"
    },
    {
      "id": 826,
      "name": "Villager (Girl)",
      "games": "Dobutsu no Mori (2001 - N64)",
      "series": "AnimalCrossing",
      "description": "Animal Crossing is a series all about customization, so, it’s fitting that you can customize yourself! Your hair and clothes can be changed at any time, but your gender and facial features are decided at the start of the game. You’ll usually have a character asking you questions on your way to town, and depending on your answers, you’ll decide whether you’ll be a boy or a girl, or how your face will look like.",
      "bigName": "Villager (Girl)"
    },
    {
      "id": 827,
      "name": "Isabelle",
      "games": "Animal Crossing: New Leaf (2012 - 3DS)",
      "series": "AnimalCrossing",
      "description": "Clumsy, hardworking, and overall a bit of a dork, Isabelle acts as your adorable secretary in Animal Crossing: New Leaf after you are mistakenly sworn into office. She is extremely dedicated to the town, willing to work late into the night and take on tasks you may find tedious if it means making the town a better place. Her joyous spirit is infectious as she can somehow make the opening ceremony of a bench an exciting occasion. Her wholesomeness has taken the world by storm, unfortunately leaving her twin brother Digby in the shadows.",
      "bigName": "Isabelle"
    },
    {
      "id": 828,
      "name": "Tom Nook",
      "games": "Dōbutsu no Mori (2001 – N64)",
      "series": "AnimalCrossing",
      "description": "For as long as he could remember, Tom Nook had always been business savvy. Even as a young tanuki, he dreamed of one day becoming an entrepreneur. His first successful business endeavor was Nook’s Cranny, a small store in his hometown that sold basic essentials such as home décor and outdoor equipment. On the side, he ran a real estate firm, selling houses at low prices to new residents. His store proved to be so successful that he could afford to upgrade it to a department store, but finding more joy in real estate, he quitted his job as store manager to pursue home real estate full time and passed the shop down to his two nephews: Timmy and Tommy.",
      "bigName": "Tom Nook"
    },
    {
      "id": 829,
      "name": "Tom Nook (Nookington's)",
      "games": "Dōbutsu no Mori (2001 – N64)",
      "series": "AnimalCrossing",
      "description": "Pictured is Tom Nook in a nice suit and tie after having achieved success in rebranding his shop as the department store Nookington’s. Getting here was not an easy journey, however; his humble beginnings as Nook’s Cranny in an old abandoned garden shack presented their own challenges, but he eventually climbed his way up the ladder and finally earned enough profit to upgrade it to the emporium store of his dreams. Nookington’s was so large that he even needed to hire his two nephews to assist in running the place, a testament to the tanuki’s success.",
      "bigName": "Tom Nook (Nookington's)"
    },
    {
      "id": 830,
      "name": "Timmy & Tommy",
      "games": "Dōbutsu no Mori (2001 – N64)",
      "series": "AnimalCrossing",
      "description": "Timothy and Thomas, or simply Timmy and Tommy to most, are a pair of identical twins and Tom Nook’s nephews. A knack for business must run in the family as much like Tom Nook, the two were involved in business matters from an early age. They ran the second floor in their uncle’s emporium shop, Nookington's, and once they were old enough, inherited the “Nook Stores” brand from him and transformed it into “The Nooklings.” They have since went on to achieve the same success that Tom Nook did in his prime. The two have a quirk of echoing the final phrase of their counterparts whenever in conversation.",
      "bigName": "Timmy & Tommy"
    },
    {
      "id": 831,
      "name": "DJ K.K.",
      "games": "Animal Crossing: New Leaf (2012 – 3DS)",
      "series": "AnimalCrossing",
      "description": "A DJ may be a far cry from his acoustic guitar, but most music artists go through that experimental phase at one point or another. Sundays through Fridays, DJ K.K. can be caught at Club LOL spinning some beats. Whether it be a fresh take on one of his acoustic classics or an entirely new song altogether, DJ K.K. always knows how to get a party started and makes Club LOL a hotspot for late-night partygoers.",
      "bigName": "DJ K.K."
    },
    {
      "id": 832,
      "name": "K.K. Slider",
      "games": "Dōbutsu no Mori (2001 – N64)",
      "series": "AnimalCrossing",
      "description": "Totakeke Slider, or simply dubbed “K.K. Slider,” is a mellowed dog who lives solely for the music. When not in his DJ K.K. persona, he goes from town to town with just the guitar on his back, playing his lovingly composed music to those with open ears. He can be seen in his classic getup every Saturday night at the local Club LOL, ready to play any personal requests from his fans. He often preaches about how music needs “to be free” from “the man,” so it is odd to see some of his tunes for sale at the Nooklings’.",
      "bigName": "K.K. Slider"
    },
    {
      "id": 833,
      "name": "Mr. Resetti",
      "games": "Dōbutsu no Mori (2001 – N64)",
      "series": "AnimalCrossing",
      "description": "Sonny Resetti is a mole who lives for justice; he has built an entire career on putting cheaters in their place. In Animal Crossing, it is very important that players save their progress after each play session since there is no proper autosave function. This comes with its drawbacks—players who have had a particularly rough session can simply press the reset button and start over again. This is where Mr. Resetti comes in. He will burrow his way to the houses of players who choose not to save, and he will give them a stern lecture. Repeated offenders will get to know Resetti at his absolute worse: high anger and even higher blood pressure. Do not get on his bad side, or else.",
      "bigName": "Mr. Resetti"
    },
    {
      "id": 834,
      "name": "Don Resetti",
      "games": "Dōbutsu no Mori + (2001 - Gamecube)",
      "series": "AnimalCrossing",
      "description": "Don Resetti is Mr. Resetti’s older brother. Whereas his brother is impatient and irate, Don is calm and collected. He works alongside his brother at the Reset Center, albeit delivering justice in a much more understanding and compassionate manner. Don cares deeply for his brother, always reminding him to keep his temper in check and his physician’s words in mind. He will even go as far to take over his brother’s shift alongside his own if his brother’s health is in particularly poor condition.",
      "bigName": "Don Resetti"
    },
    {
      "id": 835,
      "name": "Rover",
      "games": "Dōbutsu no Mori (2001 – N64)",
      "series": "AnimalCrossing",
      "description": "If there is one thing this cat loves, it is traveling. The excitement of exploring different locations; the joy of meeting new people; the blissfulness of delectable dishes—this guy loves it all. He usually travels via train, but he is not one for passing up on a good bus ride or two. Rover is usually the first face new players see when first moving into their towns; luckily, he is a friendly face, detailing to players about what to expect in the town and offering them a map. He is even nice enough to convince his longtime friend Tom Nook to prepare a house for you.",
      "bigName": "Rover"
    },
    {
      "id": 836,
      "name": "Redd",
      "games": "Dōbutsu no Mori (2001 - N64)",
      "series": "AnimalCrossing",
      "description": "Redd, or “Crazy Redd” as he dubs himself, is a kitsune who claims to sell his “cousins” rare items for “CRAAAAZZZYYY” prices, but let’s not beat around the bush: this guy is an expert traveling scam artist who tries to sell himself as an ally in order to get unsuspecting consumers to buy overpriced items from the black market. Sometimes, that is too much to ask for, as he will occasionally sell his customers counterfeit paintings instead of the real deal as he claims. Rumor has it that he once worked with Tom Nook before the tanuki cut ties with him due to an “awful experience.”",
      "bigName": "Redd"
    },
    {
      "id": 837,
      "name": "Gracie",
      "games": "Dōbutsu no Mori (2001 - N64)",
      "series": "AnimalCrossing",
      "description": "Gracie is a celebrity fashion-designer best known for her Gracie line of clothing, which is characterized by its use of orange circles inside a concentric green ring on a dark blue background. Not only has Gracie made a name for herself in the fashion industry, but she is also quite the businesswoman, having ran a successful emporium store in the city and currently managing her own store within the larger T&T Emporium. All this fame has gone to her head, however, as she can be surprisingly scathing to those she believes to have no sense of fashion and pays no respect to parking regulations.",
      "bigName": "Gracie"
    },
    {
      "id": 838,
      "name": "Gulliver",
      "games": "Dōbutsu no Mori (2001 - N64)",
      "series": "AnimalCrossing",
      "description": "Gulliver is somewhat of an enigma in the Animal Crossing series. In some titles, he is a sailor, as pictured, who gets washed up on shore after a seeming boat ride gone sour. In other titles, he is an astronaut manning a UFO that crashes in town after the player shoots down his UFO with a slingshot. Despite such different personas, there are a few characteristics that remain consistent throughout the series: his sense of adventure and his catalog of rare items for the players.",
      "bigName": "Gulliver"
    },
    {
      "id": 839,
      "name": "Pete",
      "games": "Dōbutsu no Mori (2001 - N64)",
      "series": "AnimalCrossing",
      "description": "Pete is the mailman, making two daily commutes at 9:00 A.M. and 5:00 P.M. to ensure everybody gets their mail on time. Pete is a fairly nice guy, always having a moment or two to chat during his mail runs. Pete has a crush on Phyllis, the pelican that runs the nighttime shift at the post office. Unfortunately, for him, she hates him. Luckily, her younger sister Pelly, who works the daytime shift, is in love with Pete. Unfortunately for her, Pete finds her far too childish to consider a legitimate romantic relationship with her.",
      "bigName": "Pete"
    },
    {
      "id": 840,
      "name": "Phyllis & Pelly",
      "games": "Dōbutsu no Mori (2001 - N64)",
      "series": "AnimalCrossing",
      "description": "Pictured to the left is older sister Phyllis and to the right is younger sister Pelly. This pair of pelican sisters are currently responsible for running the post office; although, they did also work at the Town Hall before Tortimer retired. Phyllis works the nighttime shift, in which she is moody, rude, and generally unpleasant to be around. Pelly works the daytime shift, in which she is upbeat, polite, and overall nice to talk to. Both pelicans have found themselves in a love triangle with Pete, in which all three birds are unhappy with their end of the deal.",
      "bigName": "Phyllis & Pelly"
    },
    {
      "id": 841,
      "name": "Copper and Booker",
      "games": "Dōbutsu no Mori (2001 - N64)",
      "series": "AnimalCrossing",
      "description": "Copper (the rightmost husky) and Booker (the leftmost) are a pair of guard dogs that usually take on protective roles, whether it be keeping watch of the Town Gate (as pictured), or in most recent times, acting as police officers. Copper is sharp, diligent, and extremely attentive; Booker, on the other hand, is docile, sedate, and absentminded. The two’s contrasting personalities balance each other’s out quite nicely, and together, they are an unstoppable pair of watchdogs.",
      "bigName": "Copper and Booker"
    },
    {
      "id": 842,
      "name": "Joan",
      "games": "Dōbutsu no Mori (2001 - N64)",
      "series": "AnimalCrossing",
      "description": "Joan has been selling turnips to the town’s residents every Sunday morning for sixty years. Joan sells two types of turnips: white turnips, which are sold at fluctuating prices depending on the happenings of the Stalk Market; and red turnips, which are sold at a consistent 1,000 bells. Red turnips are rare, however, as Joan only has one a week. It doesn’t matter how old this boar becomes— Joan will continue to sell her turnips joyously until she is no longer able.",
      "bigName": "Joan"
    },
    {
      "id": 843,
      "name": "Katrina",
      "games": "Dōbutsu no Mori (2001 - N64)",
      "series": "AnimalCrossing",
      "description": "Katrina is a panther who works as a fortune teller and claims to have the ability to see into the future. For the low price of 100 bells, villagers of all types can come to her and have their fortunes read. When reading a fortune, she will chant in tongues and look into her crystal ball to read into the fate of her clients. Many residents in town are afraid of her, although some of the more skeptical townsfolk believe her business is nothing more than an elaborate hoax.",
      "bigName": "Katrina"
    },
    {
      "id": 844,
      "name": "Lloid",
      "games": "Animal Crossing: City Folk (2008 – Wii)",
      "series": "AnimalCrossing",
      "description": "Gyroids can be found in nearly every corner of the Animal Crossing world, but very few have the same sentience as Lloid. Lloid used to run the Auction House in the city, but he has recently found himself settling into small-town life as the go-to construction guy for Public Works Projects. Lloid takes pride in his ability to speak, being sure to always address his colleagues and clients in a professional and respectful manner.",
      "bigName": "Lloid"
    },
    {
      "id": 845,
      "name": "Tortimer",
      "games": "Dobutsu no Mori+ (2001 - GameCube)",
      "series": "AnimalCrossing",
      "description": "The elderly mayor of your town, Tortimer can often be seen on holidays handing out holiday-specific items, although he's more often than not sleeping in the Town Hall. He also has a large ego, going as far as to having a cult of personality. In New Leaf, he has retired onto Tortimer Island, which also appears as a stage in Super Smash Bros Ultimate.",
      "bigName": "Tortimer"
    },
    {
      "id": 846,
      "name": "Kapp'n",
      "games": "Dōbutsu no Mori + (2001 - Gamecube)",
      "series": "AnimalCrossing",
      "description": "Kapp’n is a kappa who lives for the sea. He loves speaking like a sailor, singing sea shanties at the top of his lungs, and driving his boat across the ocean. He currently works as a ferry operator, offering customers rides to and from Tortimer Island. In his younger days, he used to be quite the flirt, but he has now settled down on Tortimer Island with his wife Leilani, his daughter Leila, and his mother Grams. True to his nature as a kappa, the man loves cucumber, but leave your prejudices at the door—he isn’t out to assault any children!",
      "bigName": "Kapp'n"
    },
    {
      "id": 847,
      "name": "Kapp'n (Wild World)",
      "games": "Animal Crossing: Wild Word (2005 - Nintendo DS)",
      "series": "AnimalCrossing",
      "description": "Kapp’n’s heart belongs to the sea, but he did temporarily quit his job as a ferry operator for a few years to find work as both a taxi and bus driver in Animal Crossing: Wild World and Animal Crossing: City Folk respectively. His services included driving new faces to their new town, and as a bus driver, transporting residents to and from the city. Even on land, his sea-based mannerisms stayed intact; he still had a sailor’s tongue, flirty talk and all, and he still loved to whistle his favorite sea shanty.",
      "bigName": "Kapp'n (Wild World)"
    },
    {
      "id": 848,
      "name": "Able Sisters",
      "games": "Mabel and Sable: Dobutsu no Mori+ (2001 - Gamecube)/ Labelle: Animal Crossing City Folk (2008 - Wii)",
      "series": "AnimalCrossing",
      "description": "The leftmost one is the eloquent middle child Labelle, the centered one is the sociable youngest child Mabel, and the rightmost one is the introverted oldest child Sable. Together, the three Able Sisters run the appropriately titled shop The Able Sisters. The shop originally belonged to their parents, but they unfortunately died while the three were still growing up. Sable stepped up and began running shop while caring for the young Mabel, but Labelle left for the city, feeling that such responsibility held her back from becoming a fashion designer. A once broken family has made up years later and now all use their talents to carry their parents’ legacy with Sable as seamstress, Labelle as the accessory girl, and Mabel as the salesgirl.",
      "bigName": "Able Sisters"
    },
    {
      "id": 849,
      "name": "Blathers",
      "games": "Dōbutsu no Mori+ (2001 – Gamecube)",
      "series": "AnimalCrossing",
      "description": "They say that the owl is the wisest of all birds because “the more it sees, the less it talks”—Blathers is not one of those owls. The nocturnal museum curator Blathers may be the most intelligent animal in town, but he is also the most talkative. Blathers’ wealth of knowledge extends to the fine arts, paleontology, ichthyology, and even entomology (despite his fear of insects), and his eagerness to share his knowledge makes his job a perfect fit. However, it is hard to be a proper curator when there is nothing to curate; luckily, the museum is always accepting donations from the generous locals.",
      "bigName": "Blathers"
    },
    {
      "id": 850,
      "name": "Celeste",
      "games": "Animal Crossing: Wild World (2005 – DS)",
      "series": "AnimalCrossing",
      "description": "Celeste may be the antithesis to her older brother Blathers with how quiet and easily flustered she is, but she is no slouch when it comes to academics. Celeste is the leading expert of all things astronomy as she used to run the museum’s observatory. The stars are no longer aligned for her, however, as she has recently found herself as the manager of the museum giftshop after the observatory was closed. At the very least, this new job still allows her to maintain her old nocturnal sleeping habits.",
      "bigName": "Celeste"
    },
    {
      "id": 851,
      "name": "Harriet",
      "games": "Animal Crossing: Wild World (2005 - DS)",
      "series": "AnimalCrossing",
      "description": "Harriet is the owner of Shampoodle’s, a salon that specializes in haircuts and makeovers. Harriet lives to help people find and express their true selves. She will often ask customers several questions before styling their hair so that she can tailor it to their personalities to the best of her abilities. If a customer is interested in a makeover, she will offer them a catalog of Mii faces that she can model the customer after. It doesn’t matter if the customer is a bit insecure about their appearance; Harriet thinks they’re beautiful and will do everything to ensure they feel the same.",
      "bigName": "Harriet"
    },
    {
      "id": 852,
      "name": "Brewster",
      "games": "Animal Crossing: Wild Word (2005 - Nintendo DS)",
      "series": "AnimalCrossing",
      "description": "Brewster used to run a coffee shop in the city; he eventually moved to a small town and reopened his shop in the local museum after prompted to do so by his good friend Curator Blathers. For years, this is where the pigeon operated before he was finally able to open a shop of his own from the funding of the Public Works Projects. He is most famous for insisting that coffee must be drunk at 175.38 degrees and his special pigeon milk blend. Interestingly, he has a hobby of collecting gyroids, and has even gone as far as attempting to make his own.",
      "bigName": "Brewster"
    },
    {
      "id": 853,
      "name": "Lyle",
      "games": "Animal Crossing: Wild Word (2005 - Nintendo DS)",
      "series": "AnimalCrossing",
      "description": "Lyle is fast-talking weasel who lives for the hustle. In Animal Crossing: Wild World, he used to go around door-to-door, claiming to sell insurance for a down payment of 3,000 bells. The compensation for each misfortune was lousy, and his shady nature led many to believe he was part of a scam. He later found more respectable work (albeit begrudgingly) at the Happy Room Academy and has even joined forces with Tom Nook’s real estate agency, Nook’s Homes, in Animal Crossing: New Leaf. Things are finally looking up for Lyle; his niece Lottie works alongside him and for the first time in a while, he actually likes his job.",
      "bigName": "Lyle"
    },
    {
      "id": 854,
      "name": "Kaitlin & Katie",
      "games": "Animal Crossing: Wild Word (2005 - Nintendo DS)",
      "series": "AnimalCrossing",
      "description": "Pictured to the left is doting mother Kaitlin and to the right is her innocent young daughter Katie. Back when Katie was still just a kitten, she had a tendency of getting lost while her mother was distracted. Often times, Katlin would be in one player’s town while Katie would be in another’s, and it would be up to said players to coordinate with one another so that daughter and mother could reunite once more. In Animal Crossing: New Leaf, now slightly older, Katie travels from town to town without her mother, although she is still just a kid, so she still greatly appreciates any kindhearted escorts to accompany her to the train station.",
      "bigName": "Kaitlin & Katie"
    },
    {
      "id": 855,
      "name": "Dr. Shrunk",
      "games": "Animal Crossing: Wild Word (2005 - Nintendo DS)",
      "series": "AnimalCrossing",
      "description": "Dr. Shrunk is a comedian who wants nothing more than to make people laugh. He used to perform standup at the marquee in the city under the mentorship of Master Frillard. Back then, animals used to give him a hard time, deeming his comedy “lousy.” Over time, he improved, gaining respect as a comedian even from Tom Nook of all animals and has found a student in Lyle. He now runs Club LOL, but if offered a snack, he is more than willing to put on the old jacket and perform some standup.",
      "bigName": "Dr. Shrunk"
    },
    {
      "id": 856,
      "name": "Frillard",
      "games": "Animal Crossing: City Folk (2008 - Wii)",
      "series": "AnimalCrossing",
      "description": "In Animal Crossing: City Folk, Dr. Shrunk opened a new venue at the city plaza called The Marquee. You can go there anytime to see his show, but if you’re lucky, you might actually catch the great Frillard performing instead! This 110-years-old lizard is actually Dr. Shrunk’s mentor, and the one who taught him many of his jokes. Frillard can teach you six emotions that you can’t learn from Shrunk.",
      "bigName": "Frillard"
    },
    {
      "id": 857,
      "name": "Kicks",
      "games": "Animal Crossing: City Folk (2008 - Wii)",
      "series": "AnimalCrossing",
      "description": "This skunk can be found roaming the city plaza during fair weather, performing his trade. He doesn’t have his own shop, so he works in the streets. If you ask him, he’ll shine your shoes, but he must use some special kind of polish, because he’ll also change your shoes color to match your outfit! In New Leaf, Kicks opened his own shop in the Main Street, called, what else, Kicks! There he can sell you shoes and socks to complete your look.",
      "bigName": "Kicks"
    },
    {
      "id": 858,
      "name": "Zipper T. Bunny",
      "games": "Animal Crossing: City Folk (2008 - Wii)",
      "series": "AnimalCrossing",
      "description": "Zipper is a bunny that appears on Bunny Day, a spring holiday that always falls on a Sunday. Upon talking to him, he will ask you to find bunny eggs buried throughout the village. Inside some of these eggs, you may find bunny foil, which Zipper will exchange for furniture from the Egg Series. We said he was a bunny, but that’s actually not true. You can see from the zipper on his back that it’s someone wearing a costume. But who could be behind it?",
      "bigName": "Zipper T. Bunny"
    },
    {
      "id": 859,
      "name": "Serena",
      "games": "Animal Crossing: City Folk (2008 – Wii)",
      "series": "AnimalCrossing",
      "description": "Serena is the goddess of the fountain. In Animal Crossing: City Folk, she could be summoned by throwing an axe into the local fountain. Upon being summoned, she will ask you a series of questions in order to test your “honesty,” but the truth is that she does not have the supernatural ability to detect honesty and that the way she reacts to your responses completely depends on how she is feeling that day. If Serena is feeling particularly elated, then expect to be rewarded with a gold axe, but if she’s been having a bad day, you can forget about seeing your original axe again.",
      "bigName": "Serena"
    },
    {
      "id": 860,
      "name": "Cyrus & Reese",
      "games": "Animal Crossing: New Leaf (2012 - 3DS)",
      "series": "AnimalCrossing",
      "description": "These friendly alpacas run Re-Tail, the new best place to sell all the items you don’t want anymore. You can sell them to Reese for good prices, or talk to her to hear about the stalk market. Cyrus will initially be sleeping, but by completing certain conditions, he’ll wake up and offer to customize your furniture. By the way, they’re not just business partners, but also husband and wife.",
      "bigName": "Cyrus & Reese"
    },
    {
      "id": 861,
      "name": "Leif (Animal Crossing)",
      "games": "Animal Crossing: New Leaf (2012 - 3DS)",
      "series": "AnimalCrossing",
      "description": "This sloth was too lazy to come up with a name for his gardening store, so he just called it \"Gardening Store.\" Despite this, and the fact you'll often find him dozing off, he is very enthusiastic about his trade, which involves selling seeds, saplings, fertilizer, and all kinds of gardening equipment. He is also very concerned about the state of the town's natural environments, and will show up, concerned, if there are too many weeds in town.",
      "bigName": "Leif (Animal Crossing)"
    },
    {
      "id": 862,
      "name": "Digby",
      "games": "Animal Crossing: New Leaf (2012 - 3DS)",
      "series": "AnimalCrossing",
      "description": "Isabelle’s twin brother, though they look quite different, Digby is often found at the Main Street in front of the Happy Home Showcase, of which he is in charge. If you talk to him, he’ll let you in, and show you some of the houses of players you’ve met through Spotpass. Maybe you’ll find some décor you’d like! He’s held other positions over time, but is always associated with Happy Homes and happy customers.",
      "bigName": "Digby"
    },
    {
      "id": 863,
      "name": "Lottie",
      "games": "Animal Crossing: Happy Home Designer (2015 - 3DS)",
      "series": "AnimalCrossing",
      "description": "You’ve just been hired for a new job at Nook’s Homes as a decorator. Your customers trust you to make their homes the best place on Earth for them. But how do you go about learning to do that? Worry not, this helpful otter will meet you on the first day of your job and guide you through the process. She’s quite a good teacher, so you’ll get the hang of it in no time. She is actually Lyle’s niece, and has a huge crush on Digby, but don’t tell him that!",
      "bigName": "Lottie"
    },
    {
      "id": 864,
      "name": "Mega Man",
      "games": "Mega Man (1987 - NES)",
      "series": "MegaMan",
      "description": "Nicknamed ‘The Blue Bomber’, Megaman made his debut in the 1987 NES platformer aptly named ‘Megaman’ (known as ‘Rockman’ in Japan). He is one of Dr. Light’s housekeeping robots, modified into a combat robot to stop the nefarious schemes of the maniacal Dr. Wily. Since then, there have been many different iterations and models of Megaman, most notably X from the Megaman X series. His real name is Rock, but when he gears up and dons his iconic blue helmet, he’s super fighting robot-Megaman.",
      "bigName": "Mega Man"
    },
    {
      "id": 865,
      "name": "Proto Man",
      "games": "Mega Man 3 (1990 - NES)",
      "series": "MegaMan",
      "description": "Named Blues in Japan, Protoman is Megaman’s brother, and Dr. Light’s first robot created using the ‘robots with independent thought’ technology. Thanks to a malfunctioning energy core, Protoman had problems functioning properly and refused to allow Light to fix this, fearing it would change his character. We see him first in Megaman 3, where he fights Megaman numerous times. In the end, he turns up to save his brother from destruction, deciding that this is where his loyalties lie. Protoman has appeared often since then, sometimes giving his brother tips, saving his life again and even featuring as a playable character in Megaman 10 (2010).",
      "bigName": "Proto Man"
    },
    {
      "id": 866,
      "name": "Bass",
      "games": "Mega Man 7 (1995 - SNES)",
      "series": "MegaMan",
      "description": "While Dr. Wily meant for Bass to be a counterpart to Mega Man, this plan certainly backfired when he rebelled against his creator. Bass is a power-hungry robot, and considers Mega Man as his rival. His Bass Buster can shoot rapidly in eight directions, but it is weaker and cannot go through walls. He can also fuse with his dog Treble to fly across gaps.",
      "bigName": "Bass"
    },
    {
      "id": 867,
      "name": "Dr. Light",
      "games": "Mega Man (1987 - NES)",
      "series": "MegaMan",
      "description": "Dr. Thomas Light is the mastermind behind the ‘Robots with emotion’ technology seen in the likes of Megaman, Roll and his robot masters, not to mention the Maverick Hunter, X. The ingenious scientist has been captured, framed and had his robots turned evil against his will many times over the years, all thanks to the dastardly Dr. Wily. Dr. Light later sealed X away in a diagnostic capsule for testing purposes, recognizing his dangerous nature. However, he assumedly died long before this plan came to fruition, leaving archaeologist Dr. Cain to dig up X many years later, starting the events of ‘Megaman X’ (1993).",
      "bigName": "Dr. Light"
    },
    {
      "id": 868,
      "name": "Roll",
      "games": "Mega Man (1987 - NES)",
      "series": "MegaMan",
      "description": "Mega Man's younger sister, she was created by Dr. Light to be a housekeeper for the lab, usually by cleaning and cooking. Her dream is to open a hospital to help people in need. She does not like fighting, and is usually seen as a background character in the ending of the game. However, her roles do change from game to game, with the plot of Mega Man 10 involving her catching the Roboenza virus.",
      "bigName": "Roll"
    },
    {
      "id": 869,
      "name": "Rush",
      "games": "Mega Man 3 (1990 - NES)",
      "series": "MegaMan",
      "description": "Mega Man was a bit lonely in his adventures, so Dr. Light created for him a new robotic companion. It’s a robot’s best friend, Rush! Rush acts a lot like a regular dog, but he is equipped with many weapons and tools that aid Mega Man throughout tricky stages. He has a coil to allow Mega Man to jump higher, turns into a jet that can lead him across chasms, and can even become a high-powered armor for Mega Man with the Rush Adaptor.",
      "bigName": "Rush"
    },
    {
      "id": 870,
      "name": "Beat",
      "games": "Mega Man 5 (1992 - NES)",
      "series": "MegaMan",
      "description": "A bird-type combat support robot built by Dr. Cossack for Mega Man, as an apology for the trouble he caused in Mega Man 4. Depending on his appearance, Beat will either attack enemies or defend Mega Man. He'll peck at nearby foes or help Mega Man out of pits. There's also an item called the Beat's Whistle, which allows Mega Man to call for him at any time. This helpful little bird will be sure to let you soar to victory!",
      "bigName": "Beat"
    },
    {
      "id": 871,
      "name": "Auto",
      "games": "Mega Man 7 (1995 - SNES)",
      "series": "MegaMan",
      "description": "Auto is a robot assistant that has been with Dr. Light for some time. Auto is actually an inventor robot, and can design and create many useful items to aid Mega Man in his adventures. He is often seen alongside Flip-Top Eddie, and even built his shop to look like him. He doesn’t give out his items for free, though. In order to build his creations, he needs a lot of screws, which Mega Man needs to collect in stages to give him.",
      "bigName": "Auto"
    },
    {
      "id": 872,
      "name": "Duo",
      "games": "Mega Man 2: The Power Fighters (1996 - Arcade)",
      "series": "MegaMan",
      "description": "This tall and powerful warrior is a space police robot, or at least some kind of galactic defender. He fell to Earth after being damaged from a fight with an evil robot, but was fixed up by Dr. Light. His head contains a radar that allows him to detect and track down Evil Energy, and his enormous left hand glows when it absorbs it. Despite being conceived for Mega Man 8, he actually debuted on the fighting game Mega Man 2: The Power Fighters.",
      "bigName": "Duo"
    },
    {
      "id": 873,
      "name": "Dr. Wily",
      "games": "Mega Man (1987 - NES)",
      "series": "MegaMan",
      "description": "An old colleague of Dr. Light’s, he turned evil when his planned ‘Double Gear system’ was scrapped in favour of Light’s ‘Robots with emotion’ technology. Megaman has faced Dr. Wily a number of times, most recently in his 2018 outing ‘Mega Man 11’. He created the robot’s arch nemesis, Bass and later went on to devise Zero, a high ranking Maverick Hunter from the Megaman X series-arguably his greatest creation.",
      "bigName": "Dr. Wily"
    },
    {
      "id": 874,
      "name": "Wily Capsule",
      "games": "Mega Man 4 (1991 - NES)",
      "series": "MegaMan",
      "description": "After destroying Dr. Wily's imposing machines, it might seem that the war is over; but don't be fooled, because Dr. Wily always has a trick up his sleeve! This compact capsule can teleport and fire energy shots at Mega Man. When summoned in battle, the Wily Capsule takes on the appearance it had in Mega Man 7, striking fear in the hearts of veteran Mega Man players.",
      "bigName": "Wily Capsule"
    },
    {
      "id": 875,
      "name": "Mettaur",
      "games": "Mega Man (1987 - NES)",
      "series": "MegaMan",
      "description": "Mettaurs, Mets, Hard Hats, Metalls, Mettools. These guys have been called many things, but that’s just because they’ve been around for a long time. Most of the time, they’ll stay in one spot, and hide under their indestructible hat, occasionally popping up to fire one shot at Mega Man, which is your chance to fire back. However, there have been many different variants over the years, with different abilities and behaviors.",
      "bigName": "Mettaur"
    },
    {
      "id": 876,
      "name": "Cut Man",
      "games": "Mega Man (1987 - NES)",
      "series": "MegaMan",
      "description": "Cut Man is a Robot Master created by Dr. Light as a timber-felling robot. However, he was reprogrammed by Dr. Wily to help him conquer the world, though he seems to believe Mega Man is the one who turned evil. His special weapon, the Rolling Cutter, is an extremely sharp pair of blades which can be thrown like boomerangs. Keep in mind that he is one big pair of scissors, so maybe you can beat him by throwing a rock at him.",
      "bigName": "Cut Man"
    },
    {
      "id": 877,
      "name": "Guts Man",
      "games": "Mega Man (1987 - NES)",
      "series": "MegaMan",
      "description": "A civil engineering Robot Master designed for land reclamation and construction alongside Bomb Man, before being reprogrammed for evil by Dr. Wily. His Super Arm is extremely strong and can lift and throw heavy objects such as boulders with ease. You’ll need something even stronger to beat him, maybe his old partner has something you can use. Dr. Wily seems to be fond of Guts Man, as he’s reused his design for several machines.",
      "bigName": "Guts Man"
    },
    {
      "id": 878,
      "name": "Ice Man",
      "games": "Mega Man (1987 - NES)",
      "series": "MegaMan",
      "description": "Wait, where'd Nana go? Just kidding! While also known for his love for polar regions, Ice Man is actually a robot created by Dr. Light and one of Mega Man's many brethren. Despite his penchant for bragging, he is kind and dutiful. Ice Man was reprogrammed by Dr. Wily to wield the Ice Slasher, a weapon that can freeze enemies on the spot. In Mega Man's hands, it's quite a handy tool to circumvent tough baddies instead of facing them upfront! He seems to have moved on to other weapons, though...",
      "bigName": "Ice Man"
    },
    {
      "id": 879,
      "name": "Bomb Man",
      "games": "Mega Man (1987 - NES)",
      "series": "MegaMan",
      "description": "Bomb Man is a demolition Robot Master who worked with Guts Man before Dr. Wily got his hands on both of them. Bomb Man is something of a rascal, a Mohawk wearing teenager, if robots can be teenagers. His Hyper Bomb special weapon is a powerful explosive that can make quick work of most enemies. He seems to really dislike matches and lighters, for some reason. Maybe he is afraid that something could light his fuse?",
      "bigName": "Bomb Man"
    },
    {
      "id": 880,
      "name": "Fire Man",
      "games": "Mega Man (1987 - NES)",
      "series": "MegaMan",
      "description": "Fire Man was created to work at an incinerator, and can generate flames up to 8000 degrees. His special weapon, the Fire Storm, combines offense and defense by creating pillars of flame that can protect him and melt opponents. He’s a hot-tempered guy, and sees himself as something of a hero, even calling himself the “Flame of Justice”. He needs to chill out, find a weapon that can help him cool down for a bit.",
      "bigName": "Fire Man"
    },
    {
      "id": 881,
      "name": "Elec Man",
      "games": "Mega Man (1987 - NES)",
      "series": "MegaMan",
      "description": "Elec Man is a Robot Master conceived to control the voltage at a nuclear power plant. He is conceited and egotistical, probably a result of being called Dr. Light’s greatest creation at the time. His special weapon, the Thunder Beam, can fire electricity in multiple directions, with enough power to break solid rock. To short circuit this guy, all you need to do is cut the right wires, if you know what we mean.",
      "bigName": "Elec Man"
    },
    {
      "id": 882,
      "name": "Yellow Devil",
      "games": "Mega Man (1987 - NES)",
      "series": "MegaMan",
      "description": "The Yellow Devil is the first combat robot created by Dr. Wily, and has since become one of his most recognizable creations. Its body consists of gooey shape-memory parts, which can disassemble and move independently from each other, before reforming somewhere else. Its only weak spot is its eye, and you should fire at it as soon as it opens, but be careful, because it will fire back.",
      "bigName": "Yellow Devil"
    },
    {
      "id": 883,
      "name": "Metal Man",
      "games": "Mega Man 2 (1988 - NES)",
      "series": "MegaMan",
      "description": "A fierce and rapid foe: Metal Man quickly hops around the stage, avoiding Mega Man's shots while firing Metal Blades of his own. And to top it all off, his arena even has conveyor belts to make the battle tougher. After being scrapped, Metal Man gives away his signature weapon, the Metal Blade, a powerful saw blade which can go in eight directions.",
      "bigName": "Metal Man"
    },
    {
      "id": 884,
      "name": "Air Man",
      "games": "Mega Man 2 (1988 - NES)",
      "series": "MegaMan",
      "description": "Created by the mad scientist Dr. Wily, Air Man has the ability to control tornadoes with his mouth... fan... thing. He is said to be unbeatable, but the Leaf Shield makes quick work of him. After Mega Man takes care of him, he obtains the Air Shooter, which fires three tornadoes in a rising arc.",
      "bigName": "Air Man"
    },
    {
      "id": 885,
      "name": "Quick Man",
      "games": "Mega Man 2 (1988 - NES)",
      "series": "MegaMan",
      "description": "As his name implies, Quick Man is based on speed, as he can run and jump faster than any other Robot Master. His stage is notorious for being nerve-wracking and stressful, being filled with giant killer laser beams... If Mega Man can survive the onslaught, he is rewarded with the Quick Boomerang, a rapid-fire gun that shoots tiny boomerangs.",
      "bigName": "Quick Man"
    },
    {
      "id": 886,
      "name": "Crash Man",
      "games": "Mega Man 2 (1988 - NES)",
      "series": "MegaMan",
      "description": "Crash Man is a Robot Master created by Dr. Wily based on the designs of Bomb Man and Guts Man. He is fast and agile, and armed with powerful explosive, such as his special weapon, the Crash Bomber, a time bomb which can stick to walls and enemies before detonating. During battle, Crash Man will run back and forth and jump to fire a Crash Bomber. If only you had a weapon that could hit him in the while he is in the air.",
      "bigName": "Crash Man"
    },
    {
      "id": 887,
      "name": "Flash Man",
      "games": "Mega Man 2 (1988 - NES)",
      "series": "MegaMan",
      "description": "This Robot Master was created by Dr. Wily to attain that most elusive of goals: to control time. Flash Man’s signature weapon is the Time Stopper, and when it is activated, the user may freely move while the world around him, including enemies and obstacles, are completely frozen. This effect last only a few seconds, but it’s a very useful tool nonetheless. If you want it, you’ll have to defeat Flash Man, so equip a weapon that can make him come crashing down.",
      "bigName": "Flash Man"
    },
    {
      "id": 888,
      "name": "Wood Man",
      "games": "Mega Man 2 (1988 - NES)",
      "series": "MegaMan",
      "description": "Wood Man is one of Dr. Wily’s favorite Robot Masters, mostly due to his resilient design, which is actually made of real wood! His signature special weapon is the Leaf Shield, four sharpened leaves made of Ceratanium, which float and rotate around the user, creating a protective shield which can also be launched at enemies. He may be sturdy, but he’s still made of flammable wood, so turn up the heat and bring him down!",
      "bigName": "Wood Man"
    },
    {
      "id": 889,
      "name": "Hard Man",
      "games": "Mega Man 3 (1990 - NES)",
      "series": "MegaMan",
      "description": "Hard Man is a Robot Master with a body made entirely of Ceratanium, which makes him incredibly durable, but also very heavy and slow. That weight can still be used to his advantage, though, as when he lands on the ground after jumping, the resulting shock waves can paralyze Mega Man. His Hard Knuckle weapon is strong and is bound to give you a hard time. A weapon that can track his metal body might be the best way to deal with him.",
      "bigName": "Hard Man"
    },
    {
      "id": 890,
      "name": "Top Man",
      "games": "Mega Man 3 (1990 - NES)",
      "series": "MegaMan",
      "description": "Top Man was created by Dr. Light and a (supposedly) reformed Dr. Wily to search other planets for Energy Elements needed for building Gamma, before he went crazy and turned on his masters. His Top Spin special weapon is very unpredictable, you can never tell how much damage it will do, how much energy it will use up, or even if it will hit. However, it is a powerful tool in the right hands. Top Man hits hard, so hit him harder.",
      "bigName": "Top Man"
    },
    {
      "id": 891,
      "name": "Snake Man",
      "games": "Mega Man 3 (1990 - NES)",
      "series": "MegaMan",
      "description": "Snake Man was one of the seven Robot Masters created jointly by Dr. Light and Dr. Wily after the latter reformed. He was designed to explore narrow areas and survey uninhabited planets marked for development. His special weapon, the Search Snake, is a set of serpentine missiles that slither along the ground and can climb up walls until they hit an enemy. He’s actually weak to his own weapon, but even more so to Needle Man’s Needle Cannon.",
      "bigName": "Snake Man"
    },
    {
      "id": 892,
      "name": "Spark Man",
      "games": "Mega Man 3 (1990 - NES)",
      "series": "MegaMan",
      "description": "Spark Man’s original purpose was to provide charge to equipment that ran on electricity, basically serving as the world’s most sentient battery. He was also made with no hands, so no wonder he turned on his creators. His special weapon is Spark Shock, an energy ball that can short-circuit electronics, briefly paralyzing robotic enemies. His sparks light up a room, so an attack from the shadows may do him in.",
      "bigName": "Spark Man"
    },
    {
      "id": 893,
      "name": "Shadow Man",
      "games": "Mega Man 3 (1990 - NES)",
      "series": "MegaMan",
      "description": "This ninja-themed Robot Master is not actually a Wily creation. Wily merely found his deactivated body, and reprogrammed him. Little is known of Shadow Man’s body, but his body is not made of earthly materials, so it’s possible he was made by extraterrestrials. His special weapon, the Shadow Blade, is a shuriken coated in a substance that can derail robotic mechanisms. You’ll need a strong weapon to come out on top.",
      "bigName": "Shadow Man"
    },
    {
      "id": 894,
      "name": "Drill Man",
      "games": "Mega Man 4 (1991 - NES)",
      "series": "MegaMan",
      "description": "Drill Man is a Robot Master designed by Dr. Cossack to dig in construction sites, until Cossack reprogrammed him as combat robot to help him take over the world. Drill Man can dig underground for a surprise attack, and use his special weapon, the Drill Bomb, which is an explosive drill that digs into objects before detonating. Since it’s hard to know where he’ll attack from, it’d be smart to use a weapon that can track his heat signature.",
      "bigName": "Drill Man"
    },
    {
      "id": 895,
      "name": "Dive Man",
      "games": "Mega Man 4 (1991 - NES)",
      "series": "MegaMan",
      "description": "Dr. Cossack created Dive Man to have all the AI functionalities of a mini-submarine, which came in handy when he was modified into a combat robot. He can fire three of his special weapon, the heat-seeking Dive Missile, at a time, and can also attack by ramming into his foes like a torpedo, although that wasn’t part of the original design. Dive Man dislikes Pirate Man, maybe because of the skull-and-bones thing, which may remind him of his weakness.",
      "bigName": "Dive Man"
    },
    {
      "id": 896,
      "name": "Skull Man",
      "games": "Mega Man 4 (1991 - NES)",
      "series": "MegaMan",
      "description": "This Robot Master was created specifically for combat by Dr. Cossack to eliminate Mega Man. Hiding in a strange cavern filled with mechanical bones, Skull Man's weapon of choice is the Skull Barrier, which protects him from most attacks. Mega Man obtains the same weapon when he defeats him. Skull Man is weak to Dust Man's Dust Crusher.",
      "bigName": "Skull Man"
    },
    {
      "id": 897,
      "name": "Gravity Man",
      "games": "Mega Man 5 (1992 - NES)",
      "series": "MegaMan",
      "description": "Gravity Man is a Robot Master whose special weapon, Gravity Hold, allows him to reverse and control gravity in short range. He was sent by Dr. Wily to take over an anti-gravity research institute, which he used against Mega Man. Other than his special weapon, though, his only means of attack is a simple buster. He dislikes outer space, as he can’t control gravity there. To beat him, pick a weapon that will make him see stars.",
      "bigName": "Gravity Man"
    },
    {
      "id": 898,
      "name": "Napalm Man",
      "games": "Mega Man 5 (1992 - NES)",
      "series": "MegaMan",
      "description": "Napalm Man is a dangerous Robot Master, who is basically a walking weapon. He was created by Dr. Wily to guard his secret weapons factory, and Napalm Man uses his time there well, collecting and searching for strong weapons. He’s armed to the teeth with bombs, missiles and explosives, including his special weapon, the Napalm Bomb. Fighting him may be a scary idea, but with the right weapon, the path to victory becomes crystal clear.",
      "bigName": "Napalm Man"
    },
    {
      "id": 899,
      "name": "Dark Man 4",
      "games": "Mega Man 5 (1992 - NES)",
      "series": "MegaMan",
      "description": "Dark Man was the central piece in one of Dr. Wily’s most devious schemes, as he was designed to impersonate Proto Man, framing him for his kidnapping of Dr. Light. The disguise wasn’t perfect, though, as he lost his scarf while kidnapping Light, and the signature whistle sounds somewhat dissonant. As the name implies, this is actually the fourth Dark Man, though the three others are mostly focused on combat.",
      "bigName": "Dark Man 4"
    },
    {
      "id": 900,
      "name": "Knight Man",
      "games": "Mega Man 6 (1993 - NES)",
      "series": "MegaMan",
      "description": "Knight Man is a combat-focused Robot Master designed in England and entered into the First Annual Robot Tournament. However, he and the other contestants had their minds hijacked by the tournament’s mysterious sponsor, Mr. X. Knight Man’s special weapon, the Knight Crusher, is a strong flail with good range. Fighting him brings to mind a medieval battle, so maybe there’s another medieval-like weapon you can use against him.",
      "bigName": "Knight Man"
    },
    {
      "id": 901,
      "name": "Wind Man",
      "games": "Mega Man 6 (1993 - NES)",
      "series": "MegaMan",
      "description": "Wind Man is a Chinese Robot Master originally designed for agricultural work, but was redesigned for combat in order to enter the First Annual Robot Tournament. His special, the Wind Storm, can generate powerful winds of up to 200 meters per second. He has jet engines on his feet and shoulders, allowing for very quick movement. A weapon that holds him in place may be just what you need to defeat him.",
      "bigName": "Wind Man"
    },
    {
      "id": 902,
      "name": "Slash Man",
      "games": "Mega Man 7 (1995 - SNES)",
      "series": "MegaMan",
      "description": "This Robot Master was created in order to clear forests for the construction of Wily’s secret bases. He is a quick and nimble fighter, who commands an army of robot dinosaurs from his base in the deep forest. His special weapon is the Slash Claw, a portable version of a powerful cutting device used to destroy asteroids. He is, however, susceptible to extreme temperatures, be them very hot or very cold.",
      "bigName": "Slash Man"
    },
    {
      "id": 903,
      "name": "Sword Man",
      "games": "Mega Man 8 (1996 - PS)",
      "series": "MegaMan",
      "description": "Dr. Wily built this Robot Master to make use of an ancient sword he had stolen from a museum. Because of the sword’s enormous weight, a special anti-gravity device was implemented into his body to stabilize him, which also allowed the upper and lower halves of his body to act independently. His special weapon, the Flame Sword, is exactly what it sounds like, so douse that fire with some water before going in.",
      "bigName": "Sword Man"
    },
    {
      "id": 904,
      "name": "Galaxy Man",
      "games": "Mega Man 9 (2008 - Wii)",
      "series": "MegaMan",
      "description": "Created by Dr. Light, this funny-looking robot was originally made to help out space research, thanks to its flying capabilities. Although Galaxy Man was past his expiration date alongside many other robots, Dr. Wily reprogrammed them to take over the world. He gives out the Black Hole Bomb when defeated, allowing Mega Man to summon a small black hole to suck up projectiles and enemies.",
      "bigName": "Galaxy Man"
    },
    {
      "id": 905,
      "name": "X",
      "games": "Mega Man X (1993 - SNES)",
      "series": "MegaMan",
      "description": "X was the final and greatest creation of Dr. Light, a truly free-thinking robot. Fearing the potential threat of his creation, Light put X in a stasis chamber to be tested, where he remained for a century before being found by Dr. Cain. Many similar robots, Reploids, were made following X’s specifications, although some went on to become criminal Mavericks. Though he abhors violence, X takes it upon himself to fight the Mavericks and restore peace to the world.",
      "bigName": "X"
    },
    {
      "id": 906,
      "name": "Full Armor X",
      "games": "Mega Man X (1993 - SNES)",
      "series": "MegaMan",
      "description": "Fearing that the world may someday need a champion once he and Mega Man were gone, Dr. Light hid a bunch of capsules contained armor upgrades to be found by X. There are four of these: the Foot Parts, which allow X to dash, the Head Parts, which allows him to break certain blocks, the Body Parts, which increase his defense, and finally the Arm Parts, which increases the power of his Charge Shots, and allows him to charge Special Weapons.",
      "bigName": "Full Armor X"
    },
    {
      "id": 907,
      "name": "Zero (Zero Buster)",
      "games": "Mega Man X (1993 - SNES)",
      "series": "MegaMan",
      "description": "Dr. Wily’s greatest creation, designed to be far superior in all regards to Mega Man and Bass. However, his violent and disobedient behavior led Wily to seal him in a capsule where he stayed for a century. Following a fateful fight with Sigma, Zero’s destructiveness subsided and he became a high-ranking Maverick Hunter and friend of X. His main long-range weapon, the Zero Buster, is much more powerful than the base X-Buster.",
      "bigName": "Zero (Zero Buster)"
    },
    {
      "id": 908,
      "name": "Zero (Z-Saber)",
      "games": "Mega Man X2 (1994 - SNES)",
      "series": "MegaMan",
      "description": "Why shoot an arm cannon when you can swing a sword? A laser sword, on top of that. The Z-Saber, also known as the Beam Saber, is Zero’s signature weapon, an extremely powerful energy blade. It was given to him after he was rebuilt by the X-Hunters, and he carries it with him in every appearance since, including the Mega Man Zero series. What it lacks in range in comparison with the Zero Buster, it makes up for it with power and style.",
      "bigName": "Zero (Z-Saber)"
    },
    {
      "id": 909,
      "name": "Axl",
      "games": "Mega Max X7 (2003 - PS2)",
      "series": "MegaMan",
      "description": "Axl was a member of the bounty hunter vigilante group Red Alert, until he felt his methods became too extreme and he joined the Maverick Hunters to stop them. Axl is a prototype for a new generation of Reploids, which contain a copy chip, a small device which allows Axl to copy the internal and external characteristics of anyone he meets. Axl may be cocky and act like a teenager, but he becomes a valuable asset in the battle against Mavericks.",
      "bigName": "Axl"
    },
    {
      "id": 910,
      "name": "Sigma",
      "games": "Mega Man X (1993 - SNES)",
      "series": "MegaMan",
      "description": "Sigma was Dr. Cain’s masterpiece, the finest of all the Reploids and the leader of the Maverick Hunters, dedicating his life to protecting the world from his renegade counterparts. Unfortunately, this was not to last. One day, Sigma unexpectedly goes Maverick, and with his incredible power, becomes their leader, forming an army bent on the eradication of humans. Using the Sigma Virus within him, he can infect other Reploids and turn them Maverick.",
      "bigName": "Sigma"
    },
    {
      "id": 911,
      "name": "Mega Man Volnutt",
      "games": "Mega Man Legends (1997 - PS)",
      "series": "MegaMan",
      "description": "Many centuries in the future, the Earth becomes almost completely flooded, with only a few sparse islands left of dry land, and energy has become very rare. Volnutt is a Digger, a person who excavates the ruins of the old world in search for energy sources and other valuable items. He was found as a baby by Barrell Caskett, and raised alongside his granddaughter Roll aboard their airship, the Flutter.",
      "bigName": "Mega Man Volnutt"
    },
    {
      "id": 912,
      "name": "Roll Caskett",
      "games": "Mega Man Legends (1997 - PS)",
      "series": "MegaMan",
      "description": "Roll is the granddaughter of Barrell Caskett and best friends with Volnutt. She was actually the one who gave him his name, after her favorite video game character. She is a genius mechanic, who can repair build, fix or pilot any type of machine. She works as Volnutt’s Spotter, meaning that while he goes to explore the ruins, Roll stays behind on the surface, providing him support and information using her equipment.",
      "bigName": "Roll Caskett"
    },
    {
      "id": 913,
      "name": "Tron Bonne",
      "games": "Mega Man Legends (1997 - PS)",
      "series": "MegaMan",
      "description": "Tron is the 14-year-old daughter of the Bonne family of air pirates, who steal treasures from Diggers, and often come into conflict with the Casketts. She is a genius mechanic, and was the one who built the family airship, the Gesellschaft, and the 40 Servbots that serve them. After Mega Man Volnutt saved her from a dog, she develops a crush on him, but alas, family comes first, so she fights him anyway.",
      "bigName": "Tron Bonne"
    },
    {
      "id": 914,
      "name": "MegaMan.EXE",
      "games": "Mega Man Battle Network (2001 - GBA)",
      "series": "MegaMan",
      "description": "In the future, everyone carries around little handheld devices called PETs, or PErsonal Terminals. These PETs each contain a unique personal assistant, or NetNavi. Lan Hikari's NetNavi was personally made by his Dad, who digitally converted his late brother's mind into Megaman.exe. Together, Lan and Megaman plug into the internet and various electronic devices to delete viruses and stop terrorist attacks.",
      "bigName": "MegaMan.EXE"
    },
    {
      "id": 915,
      "name": "ProtoMan.EXE",
      "games": "Mega Man Battle Network (2001 - GBA)",
      "series": "MegaMan",
      "description": "Few can match Lan and Megaman's natural talent for NetBattling, but Chaud and Protoman just might be an exception. This elite NetNavi trains for hours a day with his operator, so don't underestimate them! As Official NetBattlers of the NetPolice, they typically don't respect the carefree nature displayed by Lan and Megaman, but it seems like something they're doing is working. Maybe despite all the training, there's something Lan could still teach Chaud about NetBattling.",
      "bigName": "ProtoMan.EXE"
    },
    {
      "id": 916,
      "name": "Geo Stelar & Omega-Xis",
      "games": "Mega Man Star Force (2006 - Nintendo DS)",
      "series": "MegaMan",
      "description": "Omega-Xis, or Mega for short, is an alien from the planet AM. His body is made up of EM waves, allowing him to transmit himself into most electronic devices. He met Geo Stelar while crash landing onto earth, and promised him to help to find his dad lost somewhere out in space. While they don't always get along, together they accomplish more than they ever could on their own.",
      "bigName": "Geo Stelar & Omega-Xis"
    },
    {
      "id": 917,
      "name": "Star Force Mega Man",
      "games": "Megaman Star Force",
      "series": "MegaMan",
      "description": "Geo and Mega have more than just a friendship bonding them together. When danger calls, they perform a Wave Change, and transform into the powerful Megaman! When he saves the day, sometimes you'll never even know he was there, as he's invisible to the naked eye. To Geo Stelar, saving lives is its own reward.",
      "bigName": "Star Force Mega Man"
    },
    {
      "id": 918,
      "name": "Mega Man Zero",
      "games": "Mega Man Zero (2002 - GBA)",
      "series": "MegaMan",
      "description": "A century after the events of the Mega Man X series, Zero is awakened from stasis into a world vastly different from the world he remembers. Reploids and humans are at war, as the oppressive government of Neo Arcadia has arbitrarily deemed them Mavericks and attacked them. Worst yet, Neo Arcadia is led by his old friend X! Thus, Zero joins Dr. Ciel and the Reploid Resistance to fight for their freedom.",
      "bigName": "Mega Man Zero"
    },
    {
      "id": 919,
      "name": "Model X",
      "games": "Mega Man ZX (2006 - DS)",
      "series": "MegaMan",
      "description": "Biometals are special substances which can house the data or soul of a human or Reploid, and each can Megamerge with a specific person, their Biomatch, to grant them the abilities of whom it is based upon. Model X, the Blue Mega Man, houses the soul of X, and once it Megamerges with the male Vent, or the female Aile, it becomes their armor and grants them the famous X-Buster.",
      "bigName": "Model X"
    },
    {
      "id": 920,
      "name": "Model ZX",
      "games": "Mega Man ZX (2006 - DS)",
      "series": "MegaMan",
      "description": "Model ZX is the Ultimate Mega Man, acquired by combining the Model X Biometal, with Model Z, the Red Mega Man Biometal, which houses the soul of Zero. Model Z used to belong to Girouette, but he gave it to Vent or Aile, who activated a Double Megamerge to form Model ZX. This armor combines the abilities of both Biometals, granting its user both the ZX Saber and the ZX Buster.",
      "bigName": "Model ZX"
    },
    {
      "id": 921,
      "name": "Wii Fit Trainer (Female)",
      "games": "Wii Fit (2007 - Wii)",
      "series": "WiiFit",
      "description": "Pictured is one of the unnamed fitness instructors from the Wii Fit series of games. Exercising can be a bit of drag when done alone, but luckily, the players have the support of one of two trainers to keep them going throughout their training routine. Not only will these instructors act as comrades and perform the exercise alongside players, but they will also provide helpful commentary as to what they are doing well and what could use some improvement.",
      "bigName": "Wii Fit Trainer (Female)"
    },
    {
      "id": 922,
      "name": "Wii Fit Trainer (Male)",
      "games": "Wii Fit (2007 - Wii)",
      "series": "WiiFit",
      "description": "The male trainer from the Wii Fit series. Unlike other fighters with both male and female costumes in Smash, the Trainers aren’t simply different versions of the same character, but actually two separate characters. They work together on the Wii Fit Studio, and you can choose which one you wish to guide you in the yoga and strength training exercises. However, if one trainer is late or sick, the other will cover for them. Now that’s a nice workplace relationship.",
      "bigName": "Wii Fit Trainer (Male)"
    },
    {
      "id": 923,
      "name": "Wii Balance Board",
      "games": "Wii Fit (2007 - Wii)",
      "series": "WiiFit",
      "description": "The Wii Fit series is primarily controlled with the Wii Balance Board peripheral, which can measure your weight and recognize changes in your stance and balance. An anthropomorphic Board also appears as the in-game guide, and he will be your best friend in your quest to get fit. Don’t mind if he says you’re a bit overweight, he just wants to help. He’s also surprisingly expressive for someone without a face.",
      "bigName": "Wii Balance Board"
    },
    {
      "id": 924,
      "name": "Pet",
      "games": "Wii Fit Plus (2009 - Wii)",
      "series": "WiiFit",
      "description": "In Wii Fit Plus, the game introduced the feature of weighing your pets alongside you! They even get cute little avatars for themselves. Obviously, your dog isn’t going to be doing yoga or push-ups, but they can appear in certain minigames, particularly the ones that take place on Wuhu Island. Dogs will run alongside you when you're jogging or cycling, and even help you chase moles in the Segway Circuit minigame.",
      "bigName": "Pet"
    },
    {
      "id": 925,
      "name": "Jackknife",
      "games": "Wii Fit (2007 - Wii)",
      "series": "WiiFit",
      "description": "The Jackknife is a strength training exercise that will work your abs and help you develop a well-toned body. Place your feet on the Balance Board, then form a V-shape with your body at the sound of the whistle, lowering it back down when you hear another. Just remember to not let gravity do that job for you, it will put strain on your lower back. There’s also a Jackknife Challenge, where you can compete with the Wii Fit Trainer to see who can do more reps.",
      "bigName": "Jackknife"
    },
    {
      "id": 926,
      "name": "Deep Breathing",
      "games": "Wii Fit (2007 - Wii)",
      "series": "WiiFit",
      "description": "Breathing is one of the most important parts of, well, life, but it’s especially important while exercising. Too many people forget to breathe properly during a workout, which can cause problems. That’s why the first yoga exercise in any Wii Fit game is Deep breathing, where you learn to control your breathing properly and improve your metabolism to boot! In Smash, this also increases the Wii Fit Trainer’s power, though we cannot guarantee that works in real life.",
      "bigName": "Deep Breathing"
    },
    {
      "id": 927,
      "name": "Sun Salutation",
      "games": "Wii Fit (2007 - Wii)",
      "series": "WiiFit",
      "description": "Salute the sun! This yoga exercise is great for toning you arms and thighs. Raise your arms and extend your reach slightly behind you, then bend forward and touch your toes. To get back up, bend your knees, join your arms pointing them at the ceiling, then extend your knees. Focus on keeping a good balance throughout. In Smash, the Trainers use this as their neutral special, but usually, you cannot use it to shoot solar energy projectiles.",
      "bigName": "Sun Salutation"
    },
    {
      "id": 928,
      "name": "Tree",
      "games": "Wii Fit (2007 - Wii)",
      "series": "WiiFit",
      "description": "The Tree is a simple yoga pose that helps to stretch your spine, and strengthen your back and leg muscles, improving your balance and your posture. Try to hold it for the duration of the exercise. It’s normal to be a little shaky, especially the first few tries, so keep working on it. The yellow area with the red dot which appears in the exercises will help you watch your balance. This pose also serves as the Wii Fit Trainer’s up smash.",
      "bigName": "Tree"
    },
    {
      "id": 929,
      "name": "Dancer",
      "games": "Wii Fit (2007 - Wii)",
      "series": "WiiFit",
      "description": "Are you ready for a challenge? This pose is recommended for advanced users, as it requires good balance and flexibility, as well as strong legs, to maintain it, and you could get hurt if you don’t. Still, doing this exercise is worth it, as it lifts your hips and glutes as well as helping to realign your spine. The Wii Fit Trainer seems fond of this pose, as it is both her render in Smash for WiiU and 3DS, and the icon for the Wii Fit series.",
      "bigName": "Dancer"
    },
    {
      "id": 930,
      "name": "Warrior",
      "games": "Wii Fit (2007 - Wii)",
      "series": "WiiFit",
      "description": "This pose is really simple, it is in fact, one of the first poses available to the player in any Wii Fit game. But don’t underestimate its benefits because of that! This pose will tone your thighs and hips, and also help to align your pelvis, not to mention being a great warm-up for a beginner. It also a powerful forward smash that will send your opponents flying!",
      "bigName": "Warrior"
    },
    {
      "id": 931,
      "name": "Arm & Leg Lift",
      "games": "Wii Fit (2007 - Wii)",
      "series": "WiiFit",
      "description": "This is an advanced strength training exercise that will help tone your shoulder and hip muscles, as well as improving your balance. Starting from a crouched position, extend one leg back and the opposite arm forward, then hold. Do a few reps and then switch the arm and leg. Be sure to keep the arm and leg level with your body, not too high or low. Luckily, the Trainer will inform you if you need to improve.",
      "bigName": "Arm & Leg Lift"
    },
    {
      "id": 932,
      "name": "Little Mac",
      "games": "Punch-Out!! (1983 – Arcade)",
      "series": "PunchOut",
      "description": "Standing at a height of 5’7” (170 cm) and measuring in at a weight of 107 lbs (49 kg), seventeen-year-old Little Mac is relatively small for a boxer, but he doesn’t let that stop him from becoming the champion of the World Video Boxing Association. Little Mac started as a nobody from the Bronx, but former heavyweight champion Jerome “Doc” Louis eventually took him in as a student, touched by his determination to break his underdog status. Little Mac used his small size to his advantage, making his way to the top with his nimble and fast attacks. He is best known by the masses for his signature move, the Star Punch, a flashy personalized uppercut.",
      "bigName": "Little Mac"
    },
    {
      "id": 933,
      "name": "Giga Mac",
      "games": "Punch-Out!! (2009 - Wii)",
      "series": "PunchOut",
      "description": "What do you call the famously little Little Mac once he gets big? Giga Mac, of course! In the multiplayer mode of Punch Out!! for Wii, two Little Macs would face each other, and if one punched the other enough times in a certain area, they could turn into Giga Mac. This monstrous version of Mac would be larger and slower, but also stronger and even gained a new taunt.",
      "bigName": "Giga Mac"
    },
    {
      "id": 934,
      "name": "Doc Louis",
      "games": "Mike Tyson's Punch Out!! (1987 - NES)",
      "series": "PunchOut",
      "description": "Behind every star athlete, there’s a coach who got up before sunrise to train them. For Little Mac, that coach is Jerome “Doc” Louis. In his heyday, Doc was a WVBA heavyweight champion, and though nowadays he’d rather eat chocolate than throw punches, he hasn’t lost his touch, some say he’s still a formidable opponent. Aside from training Mac, he also gives advice in between rounds, and offers him some healthy chocolate bars.",
      "bigName": "Doc Louis"
    },
    {
      "id": 935,
      "name": "Glass Joe",
      "games": "Punch-Out!! (1983 - Arcade)",
      "series": "PunchOut",
      "description": "With a stunning 99-1 loss to win ratio, France’s Glass Jaw, as he is nicknamed, is hardly a very capable boxer. He has very poor defensive skills and hardly ever mounts a true offensive, not that it’s worth much when he does. Still, he’s persistent; after ninety-nine losses he’s still out there trying his best, even if his best is not very good. Maybe if he could find some way to protect his head, he’d be a better fighter.",
      "bigName": "Glass Joe"
    },
    {
      "id": 936,
      "name": "Bald Bull",
      "games": "Punch-Out!! (1983 - Arcade)",
      "series": "PunchOut",
      "description": "A true veteran of boxing, Turkey’s Bald Bull has showed up more times than any other opponent in the series. He’s famous for his Bull Charge, a move in which he rushes his opponent for massive damage, although, if you’re quick enough, you can knock him down in one counterpunch. At one point, Bald Bull took up Arm Wrestling wearing a luchador mask and going under the alias of Mask X.",
      "bigName": "Bald Bull"
    },
    {
      "id": 937,
      "name": "Mr. Sandman",
      "games": "Punch-Out!! (1983 - Arcade)",
      "series": "PunchOut",
      "description": "This heavyweight from Philadelphia is the original WVBA World Champion, and a formidable opponent. Mr. Sandman calls himself that because his punches can instantly put his adversaries to sleep and not in the nice way. His signature move is the Dreamland Express, three consecutive uppercuts, dangerous enough by itself, but Sandman will sometimes fake you out, so be sure not to fall for it.",
      "bigName": "Mr. Sandman"
    },
    {
      "id": 938,
      "name": "Bear Hugger",
      "games": "Super Punch-Out!! (1984 - Arcade)",
      "series": "PunchOut",
      "description": "A Canadian lumberjack turned boxing heavyweight, Bear Hugger is known for his sturdy, hook-resistant stomach, and his lethal hugs. Bear Hugger also has an actual, literal bear as a sparring and training partner, and the two are good friends. Despite his rugged and intimidating appearance, he is a pretty friendly guy, who loves to eat and drink, especially maple syrup. He also has a little squirrel pal who even has his own tiny boxing gloves.",
      "bigName": "Bear Hugger"
    },
    {
      "id": 939,
      "name": "Great Tiger",
      "games": "Super Punch-Out!! (1984 - Arcade)",
      "series": "PunchOut",
      "description": "An Indian mystic from Mumbai, Great Tiger’s father was actually an established magician, and Tiger brings many of these magic tricks to the ring when he fights. He can teleport around and create illusive copies of himself to confuse the opponent. Luckily, the jewel on his turban is usually a good indicator of what he’ll do. Keep an eye on it, if you lose your focus, he’ll disappear.",
      "bigName": "Great Tiger"
    },
    {
      "id": 940,
      "name": "Super Macho Man",
      "games": "Super Punch-Out!! (1984 - Arcade)",
      "series": "PunchOut",
      "description": "Super Macho Man is a 27-year-old (or so he says) Hollywood star who loves tanning and his own body, but what he loves most of all is attention. Macho Man lives for the paparazzi, autographs, and his legions of female fans. He’s arrogant and narcissistic, but his boxing skills aren’t just for show, he’s actually one of the WVBA’s strongest contenders. Fun fact: Super Macho Man’s debut actually predates the first televised appearance of real-life wrestler “Macho Man” and the two are not related.",
      "bigName": "Super Macho Man"
    },
    {
      "id": 941,
      "name": "Von Kaiser",
      "games": "Mike Tyson's Punch Out!! (1987 - NES)",
      "series": "PunchOut",
      "description": "Nicknamed the “German Steel Machine”, Von Kaiser is a militaristic boxing veteran from Berlin. His punches hit with the precision of a German machine, but he is a bit unstable. He’s been slightly traumatized by when he was beat up by a bunch of kids, so he twitches and will sometimes cry out for mommy when you beat him up too bad. Needless to say, his presentation is a bit more intimidating than his actual skills.",
      "bigName": "Von Kaiser"
    },
    {
      "id": 942,
      "name": "Don Flamenco",
      "games": "Mike Tyson's Punch Out!! (1987 - NES)",
      "series": "PunchOut",
      "description": "A bullfighter from Madrid, Don Flamenco brought many of his trade’s techniques to the ring when he took up boxing. Like a true bullfighter, Don Flamenco never attacks his opponents, instead preferring to taunt and goad them into attack him, at which point, Flamenco takes advantage of that opening to counterattack. He’s also something of a romantic, with his love of roses, tango and flirting, but he truly only has eyes for his beloved Carmen.",
      "bigName": "Don Flamenco"
    },
    {
      "id": 943,
      "name": "King Hippo",
      "games": "Mike Tyson's Punch Out!! (1987 - NES)",
      "series": "PunchOut",
      "description": "King Hippo is the leader of Hippo Island, a place located somewhere in the Pacific. He loves to eat and rest, but he is no slouch when it comes to boxing. He can block pretty much anything you throw at him, but when he opens his mouth, that’s your chance! If you punch it, his pants will fall, and he’ll be too busy pulling them back out to guard his stomach. Due to his size, if he’s knocked down once, he can’t get back up, so it’s a guaranteed KO!",
      "bigName": "King Hippo"
    },
    {
      "id": 944,
      "name": "Soda Popinski",
      "games": "Super Punch-Out!! (1984 - Arcade)",
      "series": "PunchOut",
      "description": "This Russian boxer is known for his boisterous laugh and his love of soda, drinking it actually recovers his health! Don't knock the bottle out of his hand, unless you want to see him angry! He went by a different name when he first joined the WVBA, but he changed it to be more family friendly.",
      "bigName": "Soda Popinski"
    },
    {
      "id": 945,
      "name": "Piston Hondo",
      "games": "Mike Tyson's Punch Out!! (1987 - NES)",
      "series": "PunchOut",
      "description": "Piston Hondo is a Tokyo native who takes his training very seriously. At his peak, he can catch swords and even outrun trains, so don’t underestimate his agility. He is a powerful opponent, having only been defeated by World Champion, Mr. Sandman. At first glance, he appears to be rather formal and very respectful, he even bows to you during the match. Although, notice he keeps his eyes open during that bow? Turns out he’s not being that polite.",
      "bigName": "Piston Hondo"
    },
    {
      "id": 946,
      "name": "Pac-Man",
      "games": "PAC-MAN (1980 – Arcade)",
      "series": "PacMan",
      "description": "Hailing from the game of the same name holding the Guinness World Record for \"Most Successful Coin-Operated Arcade Game,\" Pac-man hails from Pac-Land as one of its most reputable heroes. With a huge appetite, Pac-Man is often seen eating Pac-Pellets and fruits in order to build up strength and take on whatever obstacle is imposed on him. He usually goes up against the ghosts Inky, Blinky, Pinky, and Clyde, although he does occasionally team up with his ghostly rivals to take on bigger threats. As an overall selfless and friendly guy, it is not too big of a surprise that he has settled down in Pac-Village with a wife and child.",
      "bigName": "Pac-Man"
    },
    {
      "id": 947,
      "name": "Mother Fairy",
      "games": "Pac-Land (1984 - Arcade)",
      "series": "PacMan",
      "description": "Mother Fairy is the ruler of Fairyland. One day, one of her fairies got lost in Pac-Land, so far away from home. Ever willing to help, Pac-Man housed the fairy under his hat and travelled to Fairyland to return her, dodging the ghost gang along the way. As a thank you, Mother Fairy presented him magical flying boots to allow an easier return home. Since then, the fairies have been great friends of Pac-Man and helped him on many adventures.",
      "bigName": "Mother Fairy"
    },
    {
      "id": 948,
      "name": "Ghosts",
      "games": "Pac-Man (1980 - Arcade)",
      "series": "PacMan",
      "description": "Blinky, Pinky, Inky and Clyde, these four ghosts have been chasing Pac-Man through mazes for almost forty years now. The red Blinky chases him around, Pinky tries to ambush him, the light-blue Inky tries to employ different strategies, and the orange Clyde just kind of wanders and hopes to get lucky. They’d later be joined by more ghosts, such as the purple Sue and the green Funky, but these four are the most consistent.",
      "bigName": "Ghosts"
    },
    {
      "id": 949,
      "name": "TURN-TO-BLUE",
      "games": "Pac-Man (1980 - Arcade)",
      "series": "PacMan",
      "description": "On the four corners of the Pac-Maze there is a pellet that is bigger than the others. Those are Power Pellets, and eating them will make all the ghosts run for their, erm, lives. They will immediately turn blue for a short amount of time and Pac-Man will be able to eat them. Talk about turning the tables! They won’t be out for good though, they’ll simply return to the Ghost House and get ready to chase him again!",
      "bigName": "TURN-TO-BLUE"
    },
    {
      "id": 950,
      "name": "Bonus Fruit",
      "games": "Pac-Man (1980 - Arcade)",
      "series": "PacMan",
      "description": "These pixelated fruits would appear once a level next to the ghost house, and nabbing them will grant you lots of extra points. These are, in order: cherry, strawberry, orange, apple, melon, starship, bell and key. This is also the order in which Pac-Man can throw them as his neutral special in Smash, each having different properties. That starship, by the way, actually predates Pac-Man, originating in 1979’s Galaxian.",
      "bigName": "Bonus Fruit"
    },
    {
      "id": 951,
      "name": "Shulk",
      "games": "Xenoblade Chronicles (2010 - Wii)",
      "series": "Xenoblade",
      "description": "A budding scientist from Colony 9, he wields the legendary Monado a weapon which grants him the power to see the future, among others. He led a peaceful life for long, but once a vicious Mechon attack on his home took away what was most precious to him, he set out on a journey to destroy the Mechon threat, once and for all.",
      "bigName": "Shulk"
    },
    {
      "id": 952,
      "name": "Fiora",
      "games": "Xenoblade Chronicles (2010 - Wii)",
      "series": "Xenoblade",
      "description": "Shulk’s best friend since childhood, word is that their feelings for each other go above friendship, though her relationship hasn’t quite caught up to them. She’s also a great cook, though Shulk’s taste buds aren’t developed enough to appreciate it. She’s not much of a fighter, but she’s ready to defend her home, no matter the cost.",
      "bigName": "Fiora"
    },
    {
      "id": 953,
      "name": "Mecha-Fiora",
      "games": "Xenoblade Chronicles (2010 - Wii)",
      "series": "Xenoblade",
      "description": "SPOILER ALERT! Well, too late, I guess. No, Fiora didn't die during the attack on Colony 9, but her fate was arguably worse. She was taken by the Mechon and given a new mechanical body, erasing her memories and personality in the process. Now, she pilots the faced Mechon, Silver Nemesis, fighting against her former friends. I wonder if, deep down, the old Fiora is still in there.",
      "bigName": "Mecha-Fiora"
    },
    {
      "id": 954,
      "name": "Reyn",
      "games": "Xenoblade Chronicles (2010 - Wii)",
      "series": "Xenoblade",
      "description": "A member of Colony 9's defense force and Shulk and Fiora's friend since childhood. He is a bit of a meathead, but he makes up for it with his unwavering loyalty and his formidable skills in combat, especially useful at drawing an enemy’s aggro. He was the first to join Shulk in his quest, and is always happy to let those Mechon jokers know what time it is.",
      "bigName": "Reyn"
    },
    {
      "id": 955,
      "name": "Sharla",
      "games": "Xenoblade Chronicles (2010 - Wii)",
      "series": "Xenoblade",
      "description": "Sharla is a combat medic from Colony 6... or she was, until the Mechon destroyed the Colony and she lost both her home and her fiancée, Gadolt. Despite all this, Sharla remained brave and led the survivors to safety and kept them safe before joining Shulk’s quest to defeat the Mechon, and discover what happened to her beloved Gadolt.",
      "bigName": "Sharla"
    },
    {
      "id": 956,
      "name": "Dunban",
      "games": "Xenoblade Chronicles (2010 - Wii)",
      "series": "Xenoblade",
      "description": "Fiora’s older brother and a mentor to Shulk and Reyn, he is hailed as a hero by the people of the Bionis for using the Monado to stop a Mechon attack. Unfortunately, wielding the Monado cost him the use of his right arm, but his left arm is all he needs to keep fighting. As the party’s veteran and most mature member, he always has guidance and advice to share with the others.",
      "bigName": "Dunban"
    },
    {
      "id": 957,
      "name": "Melia",
      "games": "Xenoblade Chronicles (2010 - Wii)",
      "series": "Xenoblade",
      "description": "She may not look like it, but Melia is actually 88 years old! That’s because she is a half-High Entia, and they age much slower than Homs. She’s a powerful mage and one of the two children of the High Entian Emperor, who actually chose her as his successor. Although, as she soon finds out, politics can make dangerous enemies.",
      "bigName": "Melia"
    },
    {
      "id": 958,
      "name": "Riki",
      "games": "Xenoblade Chronicles (2010 - Wii)",
      "series": "Xenoblade",
      "description": "Riki is the hero of the Nopon, a Heropon, if you will. He talks a big talk, but the truth is that this middle-aged father of eleven is actually deeply indebted to the people of Frontier Village, and they will only forgive his debts if he slays the Dinobeast that threatens them. Luckily, he’s not just talk, and can use many powerful Arts in battle. He'll even show off these powerful arts when he's summoned as an Assist Trophy.",
      "bigName": "Riki"
    },
    {
      "id": 959,
      "name": "Mumkhar",
      "games": "Xenoblade Chronicles (2010 - Wii)",
      "series": "Xenoblade",
      "description": "A once honorable, if unreliable, man from Colony 9, Mumkhar was a competent warrior who grew obsessed with the legendary Monado and jealous of its wielder, Dunban. He was a comrade of both Dunban and Dickson and fought alongside them during the Battle of Sword Valley. In that battle, he deserted them and attempted to flee, but a hidden Mechon troop assured he never left the battlefield.",
      "bigName": "Mumkhar"
    },
    {
      "id": 960,
      "name": "Metal Face",
      "games": "Xenoblade Chronicles (2010 - Wii)",
      "series": "Xenoblade",
      "description": "The first of a mysterious new breed of Mechon who have faces, can speak, and are seemingly immune to the Monado. Named Metal Face by Shulk and his friends, this vicious and sadistic Mechon was the one who led the devastating attack on Colony 9. The destruction he wrought led Shulk to leave on his journey of revenge, where he would come face-to-face with his nemesis many times.",
      "bigName": "Metal Face"
    },
    {
      "id": 961,
      "name": "Elma",
      "games": "Xenoblade Chronicles X (2015 - Wii U)",
      "series": "Xenoblade",
      "description": "Elma is a member of the military organization BLADE, and leader of the Reclaimers division. The Reclaimers are tasked with retrieving scattered pieces of the White Whale, a gigantic Ark Ship that crash landed on planet Mira, bringing to it the remnants of humanity, who fled into space after the destruction of Earth. She takes her job very seriously, and never takes reckless actions; one cannot afford to do so on the hostile planet Mira.",
      "bigName": "Elma"
    },
    {
      "id": 962,
      "name": "Lin",
      "games": "Xenoblade Chronicles X (2015 - Wii U)",
      "series": "Xenoblade",
      "description": "Lin Lee Koo is a brilliant child prodigy and engineering expert who works for the Outfittes division of BLADE, tasked with the creations of weapons, including the enormous mechs known as Skells. Aside from tinkering with machines, she also enjoys cooking, and often jokes about cooking and eating the Nopon Tatsu. Despite her young age and small physique, she can deftly wield heavy weapons, such as Gatling Guns and Shields.",
      "bigName": "Lin"
    },
    {
      "id": 963,
      "name": "Lao",
      "games": "Xenoblade Chronicles X (2015 - Wii U)",
      "series": "Xenoblade",
      "description": "Lao Huang is a member of BLADE and the leader of team Belisarda of the Pathfinders division, whose job is to explore and map out the still vastly unknown planet Mira. It might not be the most attractive job, but it sure is important. Lao can often come across as cold and distant, and he has a bad habit of running off during missions and leaving his team to fend for themselves, but don’t judge him too harshly, he has gone through a lot recently…",
      "bigName": "Lao"
    },
    {
      "id": 964,
      "name": "Tatsu",
      "games": "Xenoblade Chronicles X (2015 - Wii U)",
      "series": "Xenoblade",
      "description": "Tatsu is a Nopon native of planet Mira, who Elma and company rescued from a vegetable bin, and then tagged along with them for safety. As thanks he gives… I mean, lends them the Follow Ball, a device that greatly helps them navigate planet Mira. Unlike, Riki or Tora, Natsu doesn’t fight with the team, merely supports them. He looks a bit like a potato, don’t you think? Maybe he tastes like one too…",
      "bigName": "Tatsu"
    },
    {
      "id": 965,
      "name": "Formula",
      "games": "Xenoblade Chronicles X (2015 - Wii U)",
      "series": "Xenoblade",
      "description": "Hello? Is this thing on? Can anyone hear me? I brought a bigger gun! Created in New Los Angeles for use by the mercenary organization BLADE, the Formula is a reliable entry-level model of Skell. Choose between taking in the scenery on Mira and hunting some Tyrants with its giant robot armament, or cruising past all that by transforming into motorbike mode - just make sure your insurance is paid up first either way!",
      "bigName": "Formula"
    },
    {
      "id": 966,
      "name": "Rex",
      "games": "Xenoblade Chronicles 2 (2017 - Switch)",
      "series": "Xenoblade",
      "description": "A 15-year-old boy hailing from Letheria, Rex is a Salvager, that is, someone who dives beneath the sea of clouds that covers Alrest in search of lost goods. He lives on the back of a small Titan named Azurda, whom he calls Gramps. During a mission scavenging and ancient ship, Rex meets and becomes the Driver of a Blade called Pyra, and together, they agree to travel to the World Tree and find the legendary paradise Elysium.",
      "bigName": "Rex"
    },
    {
      "id": 967,
      "name": "Pyra",
      "games": "Xenoblade Chronicles 2 (2017 - Switch)",
      "series": "Xenoblade",
      "description": "In the world of Alrest , there are beings known as Blades, weaponized life forms that become linked to a Driver, and give them incredible abilities and power. Pyra is one such Blade, but not just any Blade, but the legendary Aegis! She is found and awakened by Rex on an Ancient Ship and, after saving his life, he becomes her Driver and agrees to take her to Elysium. She grants him great fire-based powers that can scorch any opponent, and is not too shabby a cook either.",
      "bigName": "Pyra"
    },
    {
      "id": 968,
      "name": "Mythra",
      "games": "Xenoblade Chronicles 2 (2017 - Switch)",
      "series": "Xenoblade",
      "description": "Mythra is the two form of the Aegis, and the one who fought on the Aegis war over five hundred years ago. Unlike her fiery counterpart Pyra, she uses light-based powers instead. While she and Pyra are two halves of the same whole, they are actually very different people. Mythra is quite confident in herself, and can even be a little rude; and unlike Pyra, she definitely is too shabby a cook.",
      "bigName": "Mythra"
    },
    {
      "id": 969,
      "name": "Nia",
      "games": "Xenoblade Chronicles 2 (2017 - Switch)",
      "series": "Xenoblade",
      "description": "Nia is a member of the cat-like race who lives on the Titan Gormott, and a former member of the sinister organization Torna, from which she fled before joining Rex and his group. Nia is sarcastic and can come across as quite cynical, and she most definitely doesn’t like to talk about her past. She is often accompanied by her Blade Dromarch, whose beastly appearance makes quite the contrast with his sophisticated demeanor.",
      "bigName": "Nia"
    },
    {
      "id": 970,
      "name": "Tora",
      "games": "Xenoblade Chronicles 2 (2017 - Switch)",
      "series": "Xenoblade",
      "description": "Tora is a Nopon from Gormott, who has always had one dream: to become a Driver. However, much like his father and grandfather before him, his attempts of reasoning with a Core Crystal have been unsuccessful, so he started work on his own artificial Blade, Poppi. Tora cannot summon any other Blade, but he is the only one who can use Poppi. Tora joins Rex and his group quite early in the adventure, and in fact, he looks up to Rex as a “real” Driver.",
      "bigName": "Tora"
    },
    {
      "id": 971,
      "name": "Poppi α",
      "games": "Xenoblade Chronicles 2 (2017 - Switch)",
      "series": "Xenoblade",
      "description": "Poppi is something of a rarity, a Blade that is completely artificial, that is, built by someone, in this case, Tora. Seeing Tora as something of a father figure, she is very loyal to him, and even speaks with the curious Nopon dialect. Though she is the only Blade that Tora can use, she has some special characteristics of her own, such as the Poppiswap, which allows Tora to customize her elements, roles and skills among other things.",
      "bigName": "Poppi α"
    },
    {
      "id": 972,
      "name": "Mòrag",
      "games": "Xenoblade Chronicles 2 (2017 - Switch)",
      "series": "Xenoblade",
      "description": "Mòrag Ladair, the Flamebringer, is sister to the Emperor of Mor Ardain, and Special Inquisitor of the Empire, as well as commander of its armed forces. Often thought to be the most powerful Driver in the world, she uses the Blade named Brighid, who’s also known as the Jewel of Mor Ardain. With a résumé like that, you’d think there’s nothing Mòrag can’t do, but she often struggles to connect with her younger brother.",
      "bigName": "Mòrag"
    },
    {
      "id": 973,
      "name": "Zeke",
      "games": "Xenoblade Chronicles 2 (2017 - Switch)",
      "series": "Xenoblade",
      "description": "Behold the mighty Zeke Von Genbu! Bringer of Chaos! Mostly known as Zeke, and often addressed as...THE ZEKENATOR! He is the driver of Pandoria, holds an incredible power known as the Eye of Shining Justice!... or so he says. Zeke's luck may not be as great as some, but he makes up for it in hardiness, boastfulness and a sparky attitude. Zeke and Pandoria have a small pet turtle named Turters, whom they’ll always protect.",
      "bigName": "Zeke"
    },
    {
      "id": 974,
      "name": "Duck Hunt",
      "games": "Duck Hunt (1984 – NES)",
      "series": "DuckHunt",
      "description": "Duck Hunt first appeared on store shelves in 1985 and was a phenomenon of sorts. It consisted of only three characters: the ducks, the players’ shooting targets; the dog, a creature that spat in the face of the phrase “man’s best friend” with its infamous taunting laugh; and the players, who acted as the offscreen hunters. The game still resonates in the minds of gamers today in part to the NES Zapper, a light gun controller. When triggered, the screen would black out for a brief second while all the valid targets flashed white. The controller detected the change in lighting and used it to emulate shooting, making the game accessible to a wide audience. The NES Zapper went on to be used in other titles.",
      "bigName": "Duck Hunt"
    },
    {
      "id": 975,
      "name": "Wild Gunman",
      "games": "Wild Gunman (1984 - NES)",
      "series": "DuckHunt",
      "description": "The Old West is filled with lightning-fast gunslingers, and you need to be even faster if you want to survive. In a duel, timing if key; you can’t just shoot, you need to wait until your opponent says “FIRE!” to do it, or else you lose. It gets even trickier when you have to take on two at a time, or even a whole gang. Fun fact: Wild Gunman was also the name of one of Nintendo’s very first arcade games, back in 1974!",
      "bigName": "Wild Gunman"
    },
    {
      "id": 976,
      "name": "Gangster, Lady, & Policeman",
      "games": "Hogan's Alley (1984 - NES)",
      "series": "DuckHunt",
      "description": "Hello, cadet. In order to complete your training you must pass the Hogan’s Alley test. Shoot the gangsters, but leave the innocents alone. Don’t worry, these are just cardboard cut-outs, they won’t hurt you and you won’t hurt them, but they will test both your marksmanship as well as your restraint. Knowing when not to pull the trigger is just as important as being a good shot!",
      "bigName": "Gangster, Lady, & Policeman"
    },
    {
      "id": 977,
      "name": "Ryu",
      "games": "Street Fighter (1987 - Arcade)",
      "series": "StreetFighter",
      "description": "The wandering warrior Ryu brings his street fighting skills to Super Smash Bros. Orphaned at an early age, Ryu was raised and trained by Gouken in the martial art Ansatsuken, and grew to be a formidable fighter. He competed in all World Warrior tournaments, and won the very first one. However, he cares not for victory, a fight against a worthy opponent is all he asks for. Maybe in Smash he’ll find strong challengers, but they’ll need to defeat his Shoryuken to stand a chance.",
      "bigName": "Ryu"
    },
    {
      "id": 978,
      "name": "Ken",
      "games": "Street Fighter (1987 - Arcade)",
      "series": "StreetFighter",
      "description": "Master Gouken’s other pupil and Ryu’s best friend and rival, Ken’s life and personality could not be more different from Ryu’s. Heir to the wealthy Masters family, Ken was sent to master Gouken to be taught discipline, as he was getting too spoiled. Though Ryu and he trained together, Ken developed his own personal style, and went on to win the US Martial Arts Tournament. Fun fact: Ryu’s iconic headband was actually a gift from Ken.",
      "bigName": "Ken"
    },
    {
      "id": 979,
      "name": "E. Honda",
      "games": "Street Fighter II: The World Warrior (1991 - Arcade)",
      "series": "StreetFighter",
      "description": "A sumo wrestling master, Edmond Honda takes his training very seriously, viewing the martial art as a sacred Japanese tradition. Unfortunately, the rest of the world doesn’t give sumo the respect he believes it deserves, so he entered the second World Warrior tournament to prove the worth of sumo wrestlers to the world. Despite this, some of E. Honda’s techniques would hardly be permitted in a formal sumo match, which sort of undermines his point.",
      "bigName": "E. Honda"
    },
    {
      "id": 980,
      "name": "Chun-Li (Street Fighter Alpha)",
      "games": "Street Fighter Alpha: Warrior's Dreams (1995 - Arcade)",
      "series": "StreetFighter",
      "description": "A younger version of Chun-Li featured in the Street Fighter Alpha series, a prequel to the famous Street Fighter II series. An Interpol agent, Chun-Li searches for clues to her father’s disappearance, and finds the trail of Shadaloo and its mysterious leader, M. Bison. She then teams up with Charlie Nash in order to take down Bison, but he might prove too strong for the both of them.",
      "bigName": "Chun-Li (Street Fighter Alpha)"
    },
    {
      "id": 981,
      "name": "Chun-Li",
      "games": "Street Fighter II: The World Warrior (1991 - Arcade)",
      "series": "StreetFighter",
      "description": "The “first lady of fighting games” Chun-Li entered the second World Warrior tournament in order to shut down Shadaloo’s operations and avenge her father, who was murdered at the hands of tournament host and Shadaloo mastermind, M. Bison. Using iconic moves such as her Spinning Bird Kick and the Hyakuretsukyaku, Chun-Li is a formidable fighter who really owns the title of the strongest woman in the world.",
      "bigName": "Chun-Li"
    },
    {
      "id": 982,
      "name": "Blanka",
      "games": "Street Fighter II: The World Warrior (1991 - Arcade)",
      "series": "StreetFighter",
      "description": "Blanka was once an ordinary young kid named Jimmy, but when he was a mere child, the plane he was on crashed over the Amazon rainforest and he, the only survivor, needed to grow up in the wild. When he finally emerged back to civilization, he was more beast than man, with a truly feral fighting style. Despite this, Blanka is actually a calm and level-headed person, who fights for fun and enjoys tropical fruits.",
      "bigName": "Blanka"
    },
    {
      "id": 983,
      "name": "Zangief",
      "games": "Street Fighter II: The World Warrior (1991 - Arcade)",
      "series": "StreetFighter",
      "description": "The “Red Cyclone” Zangief is a star wrestler from Soviet Russia. He entered the World Warrior tournament at the behest of his president, in order to bring honor to his beloved country and show Russian strength to the world. As a fighter, Zangief lacks range and is a huge target, but once he gets up close, his grabs and throws will show you why he’s a Soviet hero. Despite his bulk and short temper, he’s actually a gentle guy.",
      "bigName": "Zangief"
    },
    {
      "id": 984,
      "name": "Guile",
      "games": "Street Fighter II: The World Warrior (1991 - Arcade)",
      "series": "StreetFighter",
      "description": "A major for the United States Air Force, Guile entered the second World Warrior tournament in order to take down M. Bison who was responsible for the death of his best friend. When you see Guile crouch in a corner, beware, for he is ready to activate either his Sonic Boom or his Flash Kick. Despite his military background and his desire for revenge, Guile is ultimately not a violent man, and what he really wants is to go home and be the family man his wife and daughter need.",
      "bigName": "Guile"
    },
    {
      "id": 985,
      "name": "Dhalsim",
      "games": "Street Fighter II: The World Warrior (1991 - Arcade)",
      "series": "StreetFighter",
      "description": "A Yoga Master from India, Dhalsim’s mastery of the technique allows him superhuman abilities, such as the power to stretch his limbs, teleport and spit fire from his mouth. These techniques make up a fighting style focused on keeping the enemy at a distance. A calm pacifist, Dhalsim fights exclusively to help others. In fact, he entered the second World Warrior tournament in order to raise money for his village.",
      "bigName": "Dhalsim"
    },
    {
      "id": 986,
      "name": "Balrog",
      "games": "Street Fighter II: The World Warrior (1991 - Arcade)",
      "series": "StreetFighter",
      "description": "A brutal Las Vegas boxer, Balrog’s skills lifted him from a childhood of poverty, but also fed his love of money and sadistic tendencies. After being banned from the sport for permanently injuring his opponents, Balrog joined the criminal organization Shadaloo as an enforcer. The syndicate’s immoral actions don’t concern him, all he cares about is the pay. As a boxer, you’ll rarely see him jump or kick, but you will be seeing stars when he rushes towards you.",
      "bigName": "Balrog"
    },
    {
      "id": 987,
      "name": "Vega",
      "games": "Street Fighter II: The World Warrior (1991 - Arcade)",
      "series": "StreetFighter",
      "description": "Shadaloo’s top assassin, this Spaniard has a truly unique fighting style, being able to stick to walls, and wielding a lethal claw. A dangerously narcissistic psychopath, Vega believes only the beautiful deserve to live, and takes great pleasure in murdering the ugly. In fact, the mask he always wears is not to hide his identity, but to protect his flawless face from being injured in a fight.",
      "bigName": "Vega"
    },
    {
      "id": 988,
      "name": "Sagat",
      "games": "Street Fighter (1987 - Arcade)",
      "series": "StreetFighter",
      "description": "The “Emperor of Muay Thai”, Sagat is incredibly proud of his martial arts skills, to the point where he hosts the first World Warrior tournament to prove himself the strongest fighter. However, after being beaten by Ryu in a battle that left him permanently scarred, Sagat swore to defeat him. This obsession for revenge led him to a dark path, and he even joined Shadaloo as one of its Grand Masters. Deep down, he is an honorable man, and hopefully he’ll come to see the error of his ways.",
      "bigName": "Sagat"
    },
    {
      "id": 989,
      "name": "M. Bison",
      "games": "Street Fighter II: The World Warrior (1991 - Arcade)",
      "series": "StreetFighter",
      "description": "The ruthless dictator of the crime syndicate Shadaloo, M. Bison has but one goal: world domination. Using the evil energy known as Psycho Power, Bison expelled all humanity from his soul and gained numerous supernatural powers, such as the ability to possess other bodies. This energy can exceed his own body’s limits, however, which is why he searches for a stronger one. He hosts the second World Warrior tournament to lure in strong fighters whose bodies he can use.",
      "bigName": "M. Bison"
    },
    {
      "id": 990,
      "name": "Cammy",
      "games": "Super Street Fighter II: The New Challengers (1993 - Arcade)",
      "series": "StreetFighter",
      "description": "Cammy White was genetically experimented on by Shadaloo using M. Bison’s DNA, so that she could serve as a replacement body if needed. Operating as one of the Dolls, kidnapped girls brainwashed by Shadaloo to become soldiers, Cammy executed operations for the group before being freed of their mind control. With no memory of her past, she joined the British paramilitary group Delta Red and the fight against Bison.",
      "bigName": "Cammy"
    },
    {
      "id": 991,
      "name": "Fei Long",
      "games": "Super Street Fighter II: The New Challengers (1993 - Arcade)",
      "series": "StreetFighter",
      "description": "This guy looks familiar, right? You definitely recognize him if you’re a fan of martial arts films, it’s the most famous star of Hong Kong kung fu cinema, the dragon himself, Fei Long! What, you didn’t think it was somebody else, did you? Anyway, Fei Long may be an actor, but his fighting skills are for real, and he joined the second World Warrior tournament in order to put his abilities to the test against real martial artists.",
      "bigName": "Fei Long"
    },
    {
      "id": 992,
      "name": "Dee Jay",
      "games": "Super Street Fighter II: The New Challengers (1993 - Arcade)",
      "series": "StreetFighter",
      "description": "A talented kickboxer from Jamaica, Dee Jay likes fighting, but what he truly loves is music. He loves hearing it, he loves making it; he even incorporated the beat of his songs into his techniques, creating a truly unique fighting style. By the time he entered the second World Warrior tournament, he was already a world-famous musician, and entered the tournament mainly to find inspiration for his next album.",
      "bigName": "Dee Jay"
    },
    {
      "id": 993,
      "name": "T. Hawk",
      "games": "Super Street Fighter II: The New Challengers (1993 - Arcade)",
      "series": "StreetFighter",
      "description": "A Native American fighter from the Thunderfoot tribe in Mexico, T. Hawk was forced to watch helplessly as Shadaloo drove the tribe from their homeland and destroyed their sacred sites, when he was little more than an infant. After being trained in his tribe’s ancient martial arts techniques, T. Hawk entered the World Warrior tournament to find Bison and reclaim his land. The “T” in his name stands for “Thunder”, by the way.",
      "bigName": "T. Hawk"
    },
    {
      "id": 994,
      "name": "Akuma",
      "games": "Super Street Fighter II Turbo (1994 - Arcade)",
      "series": "StreetFighter",
      "description": "Akuma is a cold and extremely powerful warrior fixated on perfecting the Satsui no Hado, a dark force known for corrupting its users. Akuma is the killer of his own brother and Ryu and Ken’s master Gouken, setting off Ryu’s quest for revenge against him. Despite his cruel tendencies, Akuma follows a strict code of honor and only fights opponents he deems worthy. His Shun Goku Satsu technique is one of the most powerful moves known to any street fighter.",
      "bigName": "Akuma"
    },
    {
      "id": 995,
      "name": "Nash",
      "games": "Street Fighter Alpha: Warrior's Dreams (1995 - Arcade)",
      "series": "StreetFighter",
      "description": "A former Captain to the United States Air Force and best friend to Guile, Charlie Nash is given a mission to uncover Shadaloo soldiers infiltrated in the US military. His investigation eventually leads him to team up with Chun-Li and to find and confront M. Bison in a fateful duel. As Guile’s superior officer, it was Nash who taught him how to fight. Because of this, Nash uses many of the same techniques.",
      "bigName": "Nash"
    },
    {
      "id": 996,
      "name": "Dan",
      "games": "Street Fighter Alpha: Warrior's Dreams (1995 - Arcade)",
      "series": "StreetFighter",
      "description": "Dan Hibiki is a Hong Kong martial artist who’s out on a mission: to avenge his father, killed in a duel with Sagat. He’s got the courage, he’s got the determination, he’s got the taunts to do it! The only problem is Dan is not very good. He surely talks a big talk, but in an actual fight Dan… well, he tries his best. It doesn’t help that Dan is arrogant, over-confident and jealous of other fighters, meaning he rarely tries to learn and improve himself.",
      "bigName": "Dan"
    },
    {
      "id": 997,
      "name": "Sakura (Street Fighter)",
      "games": "Street Fighter Alpha 2 (1996 - Arcade)",
      "series": "StreetFighter",
      "description": "Sakura Kasugano is a Japanese schoolgirl whose life changed completely when she watched the first World Warrior tournament on TV. After witnessing Ryu fighting in the tournament, Sakura decided that she wanted to be a street fighter too. Her moves are inspired by those of her idol, though she isn’t as strong or skilled. She travels the world trying to find Ryu in hopes that he’ll teach her.",
      "bigName": "Sakura (Street Fighter)"
    },
    {
      "id": 998,
      "name": "Gen",
      "games": "Street Fighter (1987 - Arcade)",
      "series": "StreetFighter",
      "description": "This elderly man may look old, sick and fragile, but Gen made a name for himself as a master assassin, known as \"The Devil of Hong Kong\", and he even trained Chun-Li in her youth. He retired later in life, becoming a peaceful restaurateur, but when he was diagnosed with leukemia, and found he wouldn't live much longer, he decided he would go out fighting. He now seeks an opponent strong enough to kill him, and his eyes are set on the fearsome Akuma.",
      "bigName": "Gen"
    },
    {
      "id": 999,
      "name": "Karin",
      "games": "Street Fighter Alpha 3 (1998 - Arcade)",
      "series": "StreetFighter",
      "description": "Karin Kanzuki is the heir of the extremely wealthy Kanzuki family, and was taught from infancy that she needed to be the best of the best, and that victory was the most important thing. As a child, she needed to pass numerous ludicrous tests in order to be eligible to the family fortune. When Sakura defeated her in a fight, Karin declared herself her rival and began searching for her to get a rematch, but she might learn a few important lessons along the way.",
      "bigName": "Karin"
    },
    {
      "id": 1000,
      "name": "Cody",
      "games": "Final Fight (1989 - Arcade) / In Street Fighter: Street Fighter Alpha 3 (1998 - Arcade)",
      "series": "StreetFighter",
      "description": "A reckless vigilante, Cody was once hailed as the hero of Metro City for helping to defeat the Mad Gear gang. After saving the city, and getting the girl, Cody soon grew bored of the peaceful life and began looking for people to fight on the street, eventually being jailed as a result. He escaped shortly after, but is now on the run from the police, a tragic example of a hero who fell off the path.",
      "bigName": "Cody"
    },
    {
      "id": 1001,
      "name": "Ibuki",
      "games": "Street Fighter III: New Generation (1997 - Arcade)",
      "series": "StreetFighter",
      "description": "Ibuki is a young ninja-in-training from an ancient clan who lives in a secluded village entirely composed of ninjas. Though she works hard to live up to expectations, deep down, she dislikes training and wishes she could just be a normal teenage girl. Her clan enters her into the World Warrior tournament hosted by the Secret Society so that she can retrieve documents pertaining to their secret “G-file” project.",
      "bigName": "Ibuki"
    },
    {
      "id": 1002,
      "name": "Yun & Yang",
      "games": "Street Fighter III: New Generation (1997 - Arcade)",
      "series": "StreetFighter",
      "description": "Yun and Yang, also known as the Lee brothers, are two twin brother who are masters of kun fu. Adopted by a restaurant owner of Shanghai, they grew to become the informal leaders of their local town. They entered the World Warrior tournament together in order to show off the skills. Their fighting styles used to be identical, but Yang soon developed his own techniques. Fun fact, Yun and Yang are the nephews of Lee from the original Street Fighter.",
      "bigName": "Yun & Yang"
    },
    {
      "id": 1003,
      "name": "Juri",
      "games": "Super Street Fighter IV (2010 - PS3/Xbox 360)",
      "series": "StreetFighter",
      "description": "Juri Han is a Tae Kwan Do martial artist from South Korea. A brutal combatant, Juri fights purely for the thrill of battle, as she likes inflicting pain on others. She joined the Shadaloo weapons division S.I.N. and enjoys carrying out their lethal operations, although she secretly plots revenge against M. Bison for the murder of her parents. Juri’s style is fast and aggressive, using traditional Tae Kwan Do moves with her own sadistic twist.",
      "bigName": "Juri"
    },
    {
      "id": 1004,
      "name": "Cloud",
      "games": "Final Fantasy VII (1997 - PS)",
      "series": "FinalFantasy",
      "description": "Cloud Strife is a former member of Shinra’s elite paramilitary unit, SOLDIER, but he’s left it to become a mercenary-for-hire, now working for the anti-Shinra group AVALANCHE. He’s a bit cocky, and seems to not be interested in a lot of things, but he has a good heart. Cloud wields the enormous Buster Sword into battle, and can use techniques known as Limit Breaks. In Smash, these techniques are strengthened when the Limit Gauge is full.",
      "bigName": "Cloud"
    },
    {
      "id": 1005,
      "name": "Cloud (Advent Children)",
      "games": "Final Fantasy VII: Advent Children (2005 - Movie)",
      "series": "FinalFantasy",
      "description": "In Smash, Cloud can take an appearance based on his outfit in Final Fantasy VII: Advent Children, making it one of the few elements of Smash based on a movie, rather than a game. Advent Children takes place about two years after the end of Final Fantasy VII, and in it, Cloud, while rescuing some kidnapped children, discovers a plot to resurrect Sephiroth. While using this costume, Cloud’s Buster Sword is replaced with the combined Fusion Swords.",
      "bigName": "Cloud (Advent Children)"
    },
    {
      "id": 1006,
      "name": "Bayonetta",
      "games": "Bayonetta (2009 - PS3)",
      "series": "Bayonetta",
      "description": "Bayonetta is one of the last of the Umbra Witches, a clan that went extinct long ago. She is exceptionally skilled in the Bullet Arts and possesses a wide array of powerful magics, making her a force to be reckoned with on the battlefield. She even has the ability to slow down time for her opponents and can use her hair as a conduit to summon infernal demons to aid her in combat! All this and more she brings to Smash; if you hold down the button during and after an attack, she'll unleash a stream of bullets from her guns that can be used to deal damage or even steal a KO!",
      "bigName": "Bayonetta"
    },
    {
      "id": 1007,
      "name": "Bayonetta (Bayonetta)",
      "games": "Bayonetta (2009 - PS3)",
      "series": "Bayonetta",
      "description": "This is Bayonetta’s design from the original game, sporting a different outfit, longer hairstyle and the red Scarborough Fair guns. Before the events of the first game, Bayonetta was put to sleep and hidden at the bottom of a lake, only to be found five hundred years later. Once she awoke, she had little memory of her past and carried one of the Eyes of the World with her, the Left Eye of Darkness.",
      "bigName": "Bayonetta (Bayonetta)"
    },
    {
      "id": 1008,
      "name": "Gomorrah",
      "games": "Bayonetta (2009 - PS3)",
      "series": "Bayonetta",
      "description": "The Devourer of the Divine, Gomorrah, is an Infernal Demon, a supernatural creature from Inferno which the Umbra Witches can summon. Gomorrah is a territorial creature hailing from the demonic Johnson Forest, and is one of the many Demons Bayonetta can summon during her Climax Attack, in which the monster will gnaw any angel unfortunate enough to be caught in its maw.",
      "bigName": "Gomorrah"
    },
    {
      "id": 1009,
      "name": "Madama Butterfly",
      "games": "Bayonetta (2009 - PS3)",
      "series": "Bayonetta",
      "description": "Umbra Witches often make pacts with Infernal Demons in order to receive immense power and wisdom in exchange for their souls. The Mistress of Atrocity, Madama Butterfly, is a Demon in the form of a woman who left the world under unfortunate circumstances and was reincarnated in hell. She is the one was contracted by Bayonetta, who can summon Madama Butterfly’s limbs as part of her Wicked Weaves.",
      "bigName": "Madama Butterfly"
    },
    {
      "id": 1010,
      "name": "Jeanne",
      "games": "Bayonetta (2009 - PS3)",
      "series": "Bayonetta",
      "description": "Jeanne is the former heiress to the Umbra Witches and Bayonetta’s childhood best friend and rival. Five hundred years later, after an amnesiac Bayonetta awakens, Jeanne reappears, but as an enemy. She was mind controlled by the forces of Paradiso and forced to face her former friend in battle many times. In the second game, Jeanne’s soul is dragged into Inferno, and Bayonetta must rescue her.",
      "bigName": "Jeanne"
    },
    {
      "id": 1011,
      "name": "Cutie J",
      "games": "Bayonetta (2009 - PS3)",
      "series": "Bayonetta",
      "description": "When she is not fighting angels and demons, Jeanne actually has a day job as a mild-mannered school teacher, but she also has yet another persona. By donning the battle uniform of the Umbra Witches, Jeanne becomes the powerful Cutie J, a superhero who defends her students and her city from evil with the aid of her blade, the Bloody Moon. Villains, beware, for the Platinum Knight is here to defend the weak and uphold justice!",
      "bigName": "Cutie J"
    },
    {
      "id": 1012,
      "name": "Rodin",
      "games": "Bayonetta (2009 - PS3)",
      "series": "Bayonetta",
      "description": "Rodin is the owner of a shady underground bar known as the Gates of Hell, but his real business is as a weaponsmith and arms dealer, who creates and sells weapons made from the souls of Demons. His creations aren’t cheap, but they sure are powerful; in fact, all of Bayonetta’s weapons, including her guns Scarborough Fair and Love is Blue, were made by Rodin.",
      "bigName": "Rodin"
    },
    {
      "id": 1013,
      "name": "Rodin, the Infinite One",
      "games": "Bayonetta (2009 - PS3)",
      "series": "Bayonetta",
      "description": "There is much more to the Gates of Hell proprietor than meets the eye. Rodin was actually a powerful angel, who ruled a portion of Paradiso and was said to be almost as powerful as Jubileus, the Creator. After fighting in and losing and insurgency against Paradiso, Rodin was banished to Inferno, but later came to reside in the human world. By collecting ten thousand halos, Bayonetta may restore Rodin to his true power, and fight him.",
      "bigName": "Rodin, the Infinite One"
    },
    {
      "id": 1014,
      "name": "Luka",
      "games": "Bayonetta (2009 - PS3)",
      "series": "Bayonetta",
      "description": "Luka Redgrave is a journalist and escape artist who is the son of the world renowned Antonio Redgrave, who spent his life researching the Umbra Witches and Lumen Sages. Holding Bayonetta responsible for the death of his father, Luke begins a relentless pursuit of the witch. He also honored his father’s legacy by continuing his research, and his notes reveal many hidden truths about the world.",
      "bigName": "Luka"
    },
    {
      "id": 1015,
      "name": "Cereza",
      "games": "Bayonetta (2009 - PS3)",
      "series": "Bayonetta",
      "description": "Cereza is a mysterious young girl whom Bayonetta finds wandering around, lost in the stronghold city of Vigrid. Her mother is nowhere to be found, but she mistakes Bayonetta for her and follows her around, always carrying her stuffed toy, Cheshire. Despite appearances, Cereza may not be an ordinary girl, as she can see angels, which no normal human should be able to do.",
      "bigName": "Cereza"
    },
    {
      "id": 1016,
      "name": "Loki",
      "games": "Bayonetta 2 (2014 - Wii U)",
      "series": "Bayonetta",
      "description": "In order to rescue Jeanne’s soul, Bayonetta must climb the sacred mountain Fimbulventr, near the town of Noatun. In the town, Bayonetta meets and joins Loki, a young boy who also aims to climb the mountain for reasons he cannot recall. Loki can travel between the human world and Purgatorio, and possesses powers to control time and space beyond any known to the Umbra Witches.",
      "bigName": "Loki"
    },
    {
      "id": 1017,
      "name": "Balder",
      "games": "Bayonetta (2009 - PS3)",
      "series": "Bayonetta",
      "description": "Balder is the mysterious chief executive of the Ithavoll Group a massive conglomerate that is the center of modern life in Vigrid, and whose impressive capital is used to fund most of the city’s projects. Originally a small IT company, the Group’s incredible growth has made it a symbol for the city’s progress, and Balder has gained the people’s admiration, and even their worship.",
      "bigName": "Balder"
    },
    {
      "id": 1018,
      "name": "Father Balder",
      "games": "Bayonetta (2009 - PS3)",
      "series": "Bayonetta",
      "description": "Once Bayonetta reaches the top of Isla del Sol, she discovers that Balder is not only her father, but also the last of the Lumen Sages, the same one who incited the Witch Hunts that nearly destroyed the Umbra Witches five centuries prior. He plans to retrieve the Left Eye of Darkness that Bayonetta holds and use both Eyes of the World to revive the creator, Jubileus, and unite the realities under Paradiso’s rule.",
      "bigName": "Father Balder"
    },
    {
      "id": 1019,
      "name": "Masked Lumen",
      "games": "Bayonetta 2 (2014 - Wii U)",
      "series": "Bayonetta",
      "description": "This man of unknown identity attacked Loki in Noatun, and he was only narrowly saved by Bayonetta, who was shocked to deduce that the man was a Lumen Sage, as she assumed they were extinct. They were evenly matched in power, and the Masked Lumen eventually retreated, but it would not be their last meeting, as he continued in pursuit of Loki for his own mysterious reasons.",
      "bigName": "Masked Lumen"
    },
    {
      "id": 1020,
      "name": "Prophet",
      "games": "Bayonetta 2 (2014 - Wii U)",
      "series": "Bayonetta",
      "description": "This figure appeared before Bayonetta and Loki as they neared the Gates of inferno, but merely as a projection, neither physical, nor spiritual; neither angel nor demon. The Prophetic One, also known as Loptr, has the form of a youth nearly identical to Loki, and appears in many of Loki’s visions, holding an apparent grudge against him. In fact, he is the one who is inciting the Masked Lumen against Loki.",
      "bigName": "Prophet"
    },
    {
      "id": 1021,
      "name": "Affinity",
      "games": "Bayonetta (2009 - PS3)",
      "series": "Bayonetta",
      "description": "These angels are the lowest of the low in the Hierarchy of Laguna, and serve as the most common soldiers in Paradiso’s army. It is said that humans with deep faith can feel these angels closest to their hearts, and that their weapons are merely tools to protect the good and destroy the wicked. Unfortunately, for them, the Wicked Weaves are much too powerful for them, and they stand no chance against an Umbra Witch.",
      "bigName": "Affinity"
    },
    {
      "id": 1022,
      "name": "Inspired",
      "games": "Bayonetta (2009 - PS3)",
      "series": "Bayonetta",
      "description": "These snake-like angels are beings of high rank in the Hierarchy of Laguna, and never directly interact with humanity. Many artists envision these creatures as flaming wheels, which form the chariot of God himself. They are, however, fierce and brutal in combat. They can fly at high speeds, whip their bodies, bite and even spit fireballs. A particularly powerful Infernal Demon is should be summoned if one were to face these monsters.",
      "bigName": "Inspired"
    },
    {
      "id": 1023,
      "name": "Fortitudo",
      "games": "Bayonetta (2009 - PS3)",
      "series": "Bayonetta",
      "description": "Fortitudo is one of the Cardinal Virtues, the third highest rank in the Hierarchy of Laguna, below only the Infinite One and the Dea. He, like the other Cardinal Virtues, sought after the Left Eye of Darkness in order to resurrect Jubileus, the Creator, and attempted to persuade Bayonetta to aid the angels, but to no avail. This insanely powerful angel is said to be able to summon magma flows at will.",
      "bigName": "Fortitudo"
    },
    {
      "id": 1024,
      "name": "Alraune",
      "games": "Bayonetta 2 (2014 - Wii U)",
      "series": "Bayonetta",
      "description": "Alraune, known as either the Whisper of Dementia or the Whisper of Insanity, is a powerful demon who captured Jeanne’s soul. In life, she doused herself in poison as revenge on the man who left her, but the poison consumed her soul and she was reincarnated in Inferno. She now searches the depths of hell for souls to turn into eternal lovers at her palace. Beyond this obsession, she’s known for her rivalry with, and hatred for, Madama Butterfly.",
      "bigName": "Alraune"
    },
    {
      "id": 1025,
      "name": "Inkling (Girl)",
      "games": "Splatoon (2015 - Wii U)",
      "series": "Splatoon",
      "description": "Wait, is that a kid or a squid? It’s both and neither, she’s an Inkling! After the human race was wiped out due to rising sea levels, squids evolved into the terrestrial Inklings to become the dominant race on the planet. Due to the small amount of land that was left, they had to fight for territory with the octopus-like Octarians, in a war which the Inklings won. Nowadays, the Inklings recreate these battles as their favorite sport, the Turf Wars.",
      "bigName": "Inkling (Girl)"
    },
    {
      "id": 1026,
      "name": "Inkling (Boy)",
      "games": "Splatoon (2015 - Wii U)",
      "series": "Splatoon",
      "description": "Inklings, of course, may be boys or girls. They can also have a variety of different hairstyles, skin and eye colors, and, most importantly outfits. Inklings love being trending and fashionable, but they’re also quite fickle. Whenever, a new trend appears, they abandon the old one. The only constant really seems to be the Turf Wars, a game in which Inklings, in teams of four, attempt to cover as much turf as possible with their team’s ink.",
      "bigName": "Inkling (Boy)"
    },
    {
      "id": 1027,
      "name": "Inkling Squid",
      "games": "Splatoon (2015 - Wii U)",
      "series": "Splatoon",
      "description": "Though Inklings mostly stay in their humanoid forms, they can also transform into this squid form. This allows them to swim through ink of their own color, which has several advantages, as it allows them to move faster, climb up walls, and hide from enemies. This form can also pass through grates, so it’s really multi-purpose. Ironically, despite evolving from actual squids Inklings do not deal well with water.",
      "bigName": "Inkling Squid"
    },
    {
      "id": 1028,
      "name": "Judd",
      "games": "Splatoon (2015 - Wii U)",
      "series": "Splatoon",
      "description": "This cat functions as the judge for multiplayer matches. He was born with the ability to judge turf areas at a glance to separate winners from losers. He may look like he's wearing a fancy suit, but it's merely the pattern of his fur. Supposedly, he was cryogenically frozen by his owner in case of an apocalypse, leaving him as the only surviving mammalian life form left in the Mollusc Era.",
      "bigName": "Judd"
    },
    {
      "id": 1029,
      "name": "Lil' Judd",
      "games": "Splatoon 2 (2017 - Switch)",
      "series": "Splatoon",
      "description": "While Judd represents the team that you're playing for, Li'l Judd represents the enemy team. He is a lot more energetic and happy than his father. Since no other cats survived alongside Judd, Li'l Judd's origins are shrouded in mystery. However, it is implied he may have been cloned upon reactivating the device that brought Judd into the Mollusc Age.",
      "bigName": "Lil' Judd"
    },
    {
      "id": 1030,
      "name": "Squid Sisters",
      "games": "Splatoon (2015 - Wii U)",
      "series": "Splatoon",
      "description": "Hold on to your tentacles, it's Inkopolis News time! You may have gotten tired of seeing this message, but you can't get tired of the Squid Sisters! Well, they're not actually sisters, they're cousins, but Callie and Marie are so close, they might as well be. They began performing together on talent shows in their native Calamari Country, but they soon became Inkopolis biggest pop superstars. They'll even hold a concert on the stage if you summon them as Assist Trophies, making the camera zoom in and causing the blast zones to shrink. Their star has faded a bit in recent years, but they'll never be forgotten. Stay fresh!",
      "bigName": "Squid Sisters"
    },
    {
      "id": 1031,
      "name": "Off the Hook",
      "games": "Splatoon 2 (2017 - Switch)",
      "series": "Splatoon",
      "description": "Question: who is the hottest pop duo in Inkopolis? The Squid Sisters? WRONG! Those Squid Sisters were so two years ago. Now it’s all about Off the Hook, who took over both the spotlight and the duty of announcing Splatfests and stage rotations. Pearl, the rapper, is very aggressive and in your face, while Marina, the singer and DJ, is more timid. She’s also a little different from everyone else, can you tell?",
      "bigName": "Off the Hook"
    },
    {
      "id": 1032,
      "name": "Sheldon",
      "games": "Splatoon (2015 - Wii U)",
      "series": "Splatoon",
      "description": "All Inklings need a weapon if they want to fight a Turf War, and there’s no better place to get one than Ammo Knights, Inkopolis number one weapon store. It is run by Sheldon, a horseshoe crab from a respected family with a fascination for and great knowledge of weapons. Knowledge that he’ll be sure to impart to you. In great detail. We recommend you grab a seat, he might go on for a while.",
      "bigName": "Sheldon"
    },
    {
      "id": 1033,
      "name": "Annie",
      "games": "Splatoon (2015 - Wii U)",
      "series": "Splatoon",
      "description": "Annie is a sea anemone who owns the Cooler Heads shop for hats and headgear of all sorts. Like all other types of gear which Inklings wear, her hats don’t just look fashionable, they also grant extra abilities as well. Annie is very shy and reserved, but Moe, the clownfish who lives in her hair, is anything but. He’ll tell you loud and clear (mostly loud) to buy something or get out. Nobody knows how they manage to get along.",
      "bigName": "Annie"
    },
    {
      "id": 1034,
      "name": "Jelonzo",
      "games": "Splatoon (2015 - Wii U)",
      "series": "Splatoon",
      "description": "BLUUUH! Welcome to Jelly Fresh! I am being Jelonzo, thanking your visit. You want the fashionable, no? You are coming to the right place. In Jelly Fresh you be finding many clothes that have the freshness. Only the best and new freshness, of course! Please to the shopping. What? You want knowing why I speaking this way? Not knowing what you mean. I speak the correct grammar. This is being a bit of the rude to ask…",
      "bigName": "Jelonzo"
    },
    {
      "id": 1035,
      "name": "Crusty Sean",
      "games": "Splatoon (2015 - Wii U)",
      "series": "Splatoon",
      "description": "Crusty Sean used to be the friendly shopkeeper of Shrimp Kicks, the shoe store at Inkopolis Plaza. You can see he’s proud of his shoes, as he wears a bunch of them at once. He’s since left the store, and now he runs the Crust Bucket food truck in Inkopolis Square, where he sell snacks that give various bonus. Now, we know what you’re thinking, but don’t worry! He hasn’t been deep fried, that’s just a slightly morbid designer jacket.",
      "bigName": "Crusty Sean"
    },
    {
      "id": 1036,
      "name": "Spyke",
      "games": "Splatoon (2015 - Wii U)",
      "series": "Splatoon",
      "description": "What’s up, love? This shady sea urchin can be found in a back alley in Inkopolis Plaza, and he can provide you with some valuable services… for a price. If you see an Inkling some particularly fresh-looking gear, you could order it from Spyke, and he’ll get it for you. He can also increase the amount of ability slots on gear or even reroll them, if you didn’t like what you get. Nobody knows where he gets all this gear from, but we doubt he’d tell you.",
      "bigName": "Spyke"
    },
    {
      "id": 1037,
      "name": "Flow",
      "games": "Splatoon 2 (2017 - Switch)",
      "series": "Splatoon",
      "description": "After Inkopolis hot spot moved from the Plaza to the Square, Inklings flocked to new stores to obtain the freshest gear around. The hat store of the moment is now Headspace, run by the sea slug Flow, whom Iinklings often call their “crazy aunt” due to her spaced-out and loopy vibe. An emperor shrimp named Craymond lives above her head, and he’s decidedly more anxious than the chill Flow.",
      "bigName": "Flow"
    },
    {
      "id": 1038,
      "name": "Jelfonzo",
      "games": "Splatoon 2 (2017 - Switch)",
      "series": "Splatoon",
      "description": "One day, Jelonzo was minding his business, when suddenly a new jellyfish just “split off” from him and became Jelfonzo. Technically, that would make him Jelonzo’s son, in a way. Jelfonzo learned to speak Inkling by reading ancient texts, so his speech sounds a bit outdated, full of “thous” and “thees”. Like his father, he also runs a clothing store, Ye Olde Cloth Shoppe, at Inkopolis Square.",
      "bigName": "Jelfonzo"
    },
    {
      "id": 1039,
      "name": "Bisk",
      "games": "Splatoon 2 (2017 - Switch)",
      "series": "Splatoon",
      "description": "“DAAAANG, DUDE!” Bisk is the owner of Shella Fresh, the premier shoe store at Inkopolis Square, which is appropriate, considering how many of them he wears at a time. He’s a laid-back spider crab who’s as cool as cool gets. He also seems to have an interest in music. He broke up with his girlfriend to pursue a music career, but now he runs a store with his guitar hanging in the back. What happened to the dream, man?",
      "bigName": "Bisk"
    },
    {
      "id": 1040,
      "name": "Murch",
      "games": "Splatoon 2 (2017 - Switch)",
      "series": "Splatoon",
      "description": "Spyke made so much money with all the Inklings in the original Splatoon that he decided to retire on it. However, he left a guide behind with his brilliant get-rich-quick scheme. Murch is a young sea urchin who wants to get as rich as Spyke, so he provides the same service in Splatoon 2. He doesn’t quite have Spyke’s charisma, though, as he is pretty arrogant and even somewhat rude to customers.",
      "bigName": "Murch"
    },
    {
      "id": 1041,
      "name": "Cap'n Cuttlefish",
      "games": "Splatoon (2015 - Wii U)",
      "series": "Splatoon",
      "description": "During the Great Turf War between Inklings and Octarians, Cuttlefish led the Squidbeak Splatoon, a legendary group of soldiers who are now considered heroes. However, once the Octarians came out of hiding and stole the Great Zapfish, the now elderly captain formed the New Squidbeak Splatoon, and he wants you! Yes, you, to be Agent 3, the hero that will fight back the Octarian menace.",
      "bigName": "Cap'n Cuttlefish"
    },
    {
      "id": 1042,
      "name": "Octoling",
      "games": "Splatoon (2015 - Wii U)",
      "series": "Splatoon",
      "description": "The Octolings are elite fighters in the Octarian army, basically their equivalent of the Inklings, and they have mostly the same abilities as our beloved squid-kids. They appear during special missions in Octo Valley and Octo Canyon, where Agents 3 and 4 need to fight a team of them to recover a group of Zapfish. There is also a stronger, elite variant with black tentacles. These are faster and can deal and take more damage.",
      "bigName": "Octoling"
    },
    {
      "id": 1043,
      "name": "DJ Octavio",
      "games": "Splatoon (2015 - Wii U)",
      "series": "Splatoon",
      "description": "Octavio is the leader of the Octarians and the mastermind behind their plan to deprive Inkopolis of energy by stealing their Zapfish. As he name suggests, he is also a DJ, who uses stalks of wasabi to play the records on his turntable. He’s a veteran of the Great Turf War, and seems to have some sort of past with Cap’n Cuttlefish, a not entirely hostile one. Maybe there could have been another way?",
      "bigName": "DJ Octavio"
    },
    {
      "id": 1044,
      "name": "Octobot King",
      "games": "Splatoon (2015 - Wii U)",
      "series": "Splatoon",
      "description": "The Octobot King is DJ Octavio’s personal flying machine, that serves as a mode of transport, a weapon, and, most importantly, a complete DJ set. Once you come face to face with this monstrous machine, beware, for DJ Octavio is fully equipped with an arsenal of powerful weapons, sick beats and even sicker fish puns. If you can’t handle his spicy wasabi beats, it’s gonna be cross-fade to black for you.",
      "bigName": "Octobot King"
    },
    {
      "id": 1045,
      "name": "Zapfish",
      "games": "Splatoon (2015 - Wii U)",
      "series": "Splatoon",
      "description": "These little catfish keep everything in Inkopolis running, but the Octarians wanted some of that power too. Now they're scattered across the land, and you're the only one who can save them! While some are found in individual levels, many of them got in the hands of the more powerful troops. Just how do these little guys keep such a bustling city going?",
      "bigName": "Zapfish"
    },
    {
      "id": 1046,
      "name": "Great Zapfish",
      "games": "Splatoon (2015 - Wii U)",
      "series": "Splatoon",
      "description": "This is a massive, over one hundred year old Zapfish, probably the biggest of its kind, and can generate so much electricity, that it powers all of Inkopolis. Where can you find? Oh, just look over there at the tower… wait, WHERE DID IT GO? Curses! Those dastardly Octarians must have stolen it to deprive Inkopolis of its powers. They must be keeping it deep in their underground lairs. We’ll need a real hero to go and rescue it.",
      "bigName": "Great Zapfish"
    },
    {
      "id": 1047,
      "name": "Octoling Girl & Octoling Boy",
      "games": "Splatoon 2: Octo Expansion (2018 - Switch)",
      "series": "Splatoon",
      "description": "Not all Octolings are actually evil, some were simply brainwashed by DJ Octavio’s music, but a good dose of Calamari Inkantation freed their minds, and they went to live on Iinkling society. The Splatoon 2 Octo Expansion stars an amnesiac Octoling who becomes Agent 8 of the New Squidbeak Splatoon. If you beat the expansion, you’ll be able to play as an Octoling in multiplayer, and just like the Inklings, they can be boys or girls.",
      "bigName": "Octoling Girl & Octoling Boy"
    },
    {
      "id": 1048,
      "name": "Octoling Octopus",
      "games": "Splatoon (2015 - Wii U)",
      "series": "Splatoon",
      "description": "Much like the Inklings, who can turn into squids, the Octolings can turn into these cute, little octopi, and have all of the same abilities. By default, and Octoling octopus is purple, much like their ink, but they can take on many different colors during turf wars. There’s actually a distinct difference between the octopus forms of friendly and enemy octolings. The friendly ones have normal eyes, while the enemies have Octarian eyes.",
      "bigName": "Octoling Octopus"
    },
    {
      "id": 1049,
      "name": "Super Sea Snail",
      "games": "Splatoon (2015 - Wii U)",
      "series": "Splatoon",
      "description": "Super Sea Snails are a special and very valuable form of currency in Iinkopolis. They can be traded in for the chance to increase the number of slots on gear, or reroll a piece’s secondary abilities. These are usually given out as reward for good performance in Splatfest, but if these are no longer occurring, there are still other ways to earn it, such as winning thirty regular matches, or gaining a level after level 30.",
      "bigName": "Super Sea Snail"
    },
    {
      "id": 1050,
      "name": "Simon Belmont",
      "games": "Castlevania (1986 - NES)",
      "series": "Castlevania",
      "description": "He was the first Belmont we got to know, but he wasn't the first of his lineage, being the fifth of his family to take on the count. At the age of 22, he set out to prove himself worthy to his family by destroying Dracula, however, he was wounded in battle, leaving him with a devastating curse. Either he dies, or he revives Dracula and he is cured of it. It certainly is a horrible night to have a curse.",
      "bigName": "Simon Belmont"
    },
    {
      "id": 1051,
      "name": "Richter Belmont",
      "games": "Castlevania: Rondo of Blood (1993 - PC Engine)",
      "series": "Castlevania",
      "description": "The seventh member of the Belmont Clan, not motivated by fame or sheer will, but by the loss of his loved ones. After witnessing his girlfriend taken away by the forces of Dracula, he sets out to retrieve her and save the world from darkness again. This hot-headed youth will push the vampire and his forces to their limits. After his victory, however, he is hypnotized by a dark priest and betrays his family, turning towards evil and taking Dracula's position as the ruler of the castle.",
      "bigName": "Richter Belmont"
    },
    {
      "id": 1052,
      "name": "Trevor C. Belmont",
      "games": "Castlevania III: Dracula's Curse (1989 - NES)",
      "series": "Castlevania",
      "description": "The year is 1476, and the Belmont name is feared throughout Wallachia, for the family's super-human power, forcing them to go into exile. However, when Count Dracula appears to ravage the land, the Church is faced with no other option than call for the aid of Trevor C. Belmont. Armed with his family's legendary Vampire Killer, Trevor ventures into Dracula's Castle, aided by the pirate Grant Danasty, the mage Sypha Belnades, and Dracula's own son, Alucard, to destroy the vampire and his army of demons.",
      "bigName": "Trevor C. Belmont"
    },
    {
      "id": 1053,
      "name": "Maria Renard",
      "games": "Castlevania: Rondo of Blood (1993 - PC Engine)",
      "series": "Castlevania",
      "description": "A young vampire hunter and distant relative of the Belmont Clan. Rather than attacking with whips and axes, Maria uses animals like birds and dogs, as well as magic spells. She was trapped in a dungeon and was eventually freed by Richter. She uses her magic to keep him protected from harm. Just because she's young doesn't mean she isn't strong.",
      "bigName": "Maria Renard"
    },
    {
      "id": 1054,
      "name": "Maria Renard (Symphony of the Night)",
      "games": "Castlevania: Symphony of the Night (1997 - PS)",
      "series": "Castlevania",
      "description": "Five years after Richter defeated Dracula, Maria obviously shows concern for him. Suddenly, Dracula's Castle returns as if to show her the way, but the structure is different from last time. She would eventually meet Alucard on her quest to save Richter, with the two having the same goal, destroy the castle and find what happened to Richter. She then helps Alucard during his journey, even giving him some necessary items to save him from evil.",
      "bigName": "Maria Renard (Symphony of the Night)"
    },
    {
      "id": 1055,
      "name": "Alucard",
      "games": "Castlevania III: Dracula's Curse (1989, NES)",
      "series": "Castlevania",
      "description": "The son of Count Dracula, half human, half vampire, but all powerful. You may have noticed his name is simply his father's name backwards, this was to rebel against his father and prove his loyalty towards humans . Unlike his father, he set out to free humanity of his evil, teaming up with Trevor Belmont in 1476 to take down his father, 321 years later, he awoke once again to take out his father when a Belmont was strangely missing. He won't help his father, but if you manage to get him in the assist trophy. He'll be more than happy to help you.",
      "bigName": "Alucard"
    },
    {
      "id": 1056,
      "name": "Reinhardt Schneider",
      "games": "Castlevania (1999 - N64)",
      "series": "Castlevania",
      "description": "A descendant of the Belmont clan. While he doesn't share the iconic surname, he does possess the vampire killer. He was often teased in his youth, as nobody believed someone like him could be related to such a grand clan of warriors, which left him in a state of self-doubt. Eventually though, he viewed this as a chance to prove his worth as a warrior. He was trained by his father, who taught him in the ways of the vampire hunter and the power of God.",
      "bigName": "Reinhardt Schneider"
    },
    {
      "id": 1057,
      "name": "Nathan Graves",
      "games": "Castlevania: Circle of the Moon (2001 - GBA)",
      "series": "Castlevania",
      "description": "Nathan isn't with any clan, merely fighting on his own. Since he isn't associated with the Belmont Clan, he wields the Hunter Whip. After his father lost his friends to Dracula during a battle against him, he set out to train his son in the ways of vampire hunting. Ten years after this incident, a vampire named Carmilla managed to summon Dracula. Nathan and his friends came to stop her, only to have one of them kidnapped and his training partner Hugh cast away. Knowing it's what his father would've wanted, Nathan goes in to stop Dracula.",
      "bigName": "Nathan Graves"
    },
    {
      "id": 1058,
      "name": "Hugh Baldwin",
      "games": "Castlevania: Circle of the Moon (2001 - GBA)",
      "series": "Castlevania",
      "description": "Nathan Graves' rival and adopted brother, Hugh was jealous of Nathan because he believed that he should be their father's successor. He also believes that Nathan is too weak to even fight alongside him. Hugh was bested during every challenge he faced, he ended up cast into an unknown part of a castle while out with Morris and Nathan. Despite his hatred for his brother, it seems that Nathan still cares about him, as he is seen saving his life on numerous occasions.",
      "bigName": "Hugh Baldwin"
    },
    {
      "id": 1059,
      "name": "Juste Belmont",
      "games": "Castlevania: Harmony of Dissonance (2002 - GBA)",
      "series": "Castlevania",
      "description": "The sixth Belmont in the lineage, Juste possesses magical abilities derived from the Belnades Clan, another group of vampire hunters who have aided the Belmonts in the past. Upon hearing that his childhood friend Liste was kidnapped, he proceeds to investigate where she could be, before stumbling into a castle unmarked on any map. After being chased in by Talos, he has no choice but to follow his family's destiny and destroy the evil within.",
      "bigName": "Juste Belmont"
    },
    {
      "id": 1060,
      "name": "Yoko Belnades",
      "games": "Castlevania: Aria of Sorrow (2003 - GBA)",
      "series": "Castlevania",
      "description": "A descendant of the Belnades Clan, Yoko preforms tasks for the Roman Catholic Church in their search for Dracula and the remainder of his powers. She is also an exorcist when not hunting down the count. She provides aid to Soma inside the castle, as well as helpful information. Fun fact: in Dawn of Sorrow, the succubus enemies will disguise themselves as Yoko to lure Soma in, only assuming their true form when attacked.",
      "bigName": "Yoko Belnades"
    },
    {
      "id": 1061,
      "name": "Leon Belmont",
      "games": "Castlevania: Lament of Innocence (2003 - PS2)",
      "series": "Castlevania",
      "description": "The first member of the Belmont Clan, he lost both of his parents at a young age and was knighted at the age of 16. He joined a company of knights, where he met his friend Matthias Cronqvist. However, when his fiancee is taken by Walter Bernhard, he sets out to destroy the vampire. Leon would eventually swear his clan to fight evil for all eternity, thus beginning the Belmont's eternal struggle.",
      "bigName": "Leon Belmont"
    },
    {
      "id": 1062,
      "name": "Julius Belmont",
      "games": "Castlevania: Aria of Sorrow (2003 - GBA)",
      "series": "Castlevania",
      "description": "The first Belmont to surface in over a century, Julius made the Belmonts reappear to finish the fight against Dracula. Leading the Battle of 1999, he called upon the military and Alucard to defeat the Dark Lord once and for all. While he managed to destroy Dracula and seal the vampire's castle into an eclipse, he lost his memories in the process. 35 years later, he goes under \"J\", reappearing in Dracula's Castle to regain his lost memories. After his memories return, Julius promises Soma that he will defeat Dracula in case he's resurrected, a promise he will keep no matter what.",
      "bigName": "Julius Belmont"
    },
    {
      "id": 1063,
      "name": "Hector (Castlevania)",
      "games": "Castlevania: Curse of Darkness (2005 - PS2)",
      "series": "Castlevania",
      "description": "A former general of Dracula, Hector was a Forgemaster, someone who created the monsters that would be sent out upon the world. But eventually, Hector decided to rebel against Dracula, which led to the vampire's death by the hands of Trevor Belmont in 1476. After starting a new life with his wife Rosaly, she is tried for witchcraft and killed. Someone had clearly manipulated the trial. Now, Hector must go back to his former abode and get revenge.",
      "bigName": "Hector (Castlevania)"
    },
    {
      "id": 1064,
      "name": "Jonathan Morris",
      "games": "Castlevania: Portrait of Ruin (2006 - DS)",
      "series": "Castlevania",
      "description": "The son of John Morris, Johnathan Morris joins with his childhood friend Charlotte Aulin to fight off Dracula, reawakened by tormented souls in the midst of World War 2. Due to not being part of the Belmont lineage, the whip is slightly weaker for him, thus causing him to resort to swords and axes instead. He shows anger towards his father John for not teaching him the whip's full power, which he was able to use back in 1917 to defeat Elizabeth Bartley and Dracula.",
      "bigName": "Jonathan Morris"
    },
    {
      "id": 1065,
      "name": "Charlotte Aulin",
      "games": "Castlevania: Portrait of Ruin (2006 - DS)",
      "series": "Castlevania",
      "description": "Charlotte is a young witch and close friend of Johnathan Morris. The two have known each other since childhood. She is quite intelligent, but is far too confident in her book smarts. She talks a lot and sticks her nose into others' business. She comes off as emotionless because of her logical approach to everything. She has great magic power, and is seen as the potential final weapon against Dracula. Instead of the standard sub-weapons, she is able to use magic spells such as summoning ghosts of past Belmonts, and even creating small volcanoes. Warriors reborn!",
      "bigName": "Charlotte Aulin"
    },
    {
      "id": 1066,
      "name": "Shanoa",
      "games": "Castlevania: Order of Ecclesia (2008 - DS)",
      "series": "Castlevania",
      "description": "After Richter Belmont vanished, the Belmont Clan vanished with him, leaving Shanoa, a representative of the Order of Ecclesia as the only one able to battle the forces of evil. While lacking a whip, she possesses many glyphs to help her attack, with them being able to take on the form of weapons like swords and spears, or even changing her form into things like automatons and werebats. Magic sure works in strange ways",
      "bigName": "Shanoa"
    },
    {
      "id": 1067,
      "name": "Gabriel Belmont",
      "games": "Castlevania: Lords of Shadow (2010 - PS3)",
      "series": "Castlevania",
      "description": "Gabriel is a member of the Brotherhood of Light, an elite group of knights who protect the innocent from supernatural threats. He lost his mother when God abandoned the Earth, and now he is embarking on a quest to get the God Mask to revive her. Armed with the Combat Cross, he must fight off the Lords of Shadow to obtain his reward.",
      "bigName": "Gabriel Belmont"
    },
    {
      "id": 1068,
      "name": "Medusa Head",
      "games": "Castlevania (1986 - NES)",
      "series": "Castlevania",
      "description": "Spawned from the hair of Medusa, these small heads fly around trying to ram into the player, usually appearing at the worst possible time, to the dismay of our heroes. Since they all fly in the same pattern, they can be easy to deal with by themselves, but couple them with other enemies or bottomless pits and you've got a lot of rage in the making. Our advice? Stay alert and watch your step.",
      "bigName": "Medusa Head"
    },
    {
      "id": 1069,
      "name": "Mummy",
      "games": "Castlevania (1986 - NES)",
      "series": "Castlevania",
      "description": "Reanimated corpses whose skin and bodies have been preserved for centuries by ancient mummification rituals, mummies can often be found inside coffins in Dracula’s castle. Most of them appear in pairs, or even trios, launching their own bandages as projectiles. The most powerful of the mummies is possibly Akmodan II, the mummy that fought Simon Belmont on the hands of the castle’s clock tower.",
      "bigName": "Mummy"
    },
    {
      "id": 1070,
      "name": "The Creature & Flea Man",
      "games": "Castlevania (1986 - NES)",
      "series": "Castlevania",
      "description": "The Creature is a monster artificially created and given life by a mad scientist, who then abandoned it for deeming it an affront against nature. This lonesome monster now resides in Dracula’s Castle and can usually be found guarding areas like the laboratory or the library. It is often accompanied by a flea man, a small, deformed person that quickly hops around and can be annoyingly dangerous.",
      "bigName": "The Creature & Flea Man"
    },
    {
      "id": 1071,
      "name": "Death",
      "games": "Castlevania (1986 - NES)",
      "series": "Castlevania",
      "description": "Dracula's second-in-command, Death is one of the most fearsome bosses in the entire series. He is born out of chaos, which came from the evil within the hearts of humans. He is capable of using the dark arts to summon all kinds of monsters to defeat the living. Death's role varies from game to game, and he sometimes takes over Dracula's position as the final boss!",
      "bigName": "Death"
    },
    {
      "id": 1072,
      "name": "Carmilla",
      "games": "Castlevania II: Simon's Quest (1987 - NES)",
      "series": "Castlevania",
      "description": "A female vampire that takes on many forms, usually that of a beautiful woman. However, in her debut appearance, she took the form of a large stone mask, which could shed letahl, viery tears. She is one of Dracula's most loyal servants, always either plotting to revive him or awakening from a slumber just to come to his aid.",
      "bigName": "Carmilla"
    },
    {
      "id": 1073,
      "name": "Werewolf",
      "games": "Castlevania II: Simon's Quest (1987 - NES)",
      "series": "Castlevania",
      "description": "Whenever the moon is full, the werewolf will strike. They are large bipedal wolves capable of moving at high speeds and jump quickly. Their status varies throughout the games, sometimes they're minor enemies, sometimes they're full on bosses. The main character of Legacy of Darkness is actually a lycanthrope, so they've even been playable! There's many similarities between werewolves and vampires, such as their weakness to silver and the fact they can only roam at night. Maybe they have some ties?",
      "bigName": "Werewolf"
    },
    {
      "id": 1074,
      "name": "Shaft",
      "games": "Castlevania: Rondo of Blood (1993 - PC Engine)",
      "series": "Castlevania",
      "description": "The dark priest who set out to revive Dracula and kidnapped Richter's love interest in order to provide his master with a bride. Richter won't let the kidnapping of his girlfriend go unpunished, and sets out to destroy him and Dracula. After his defeat, Shaft manages to kidnap Richter, and Dracula's castle suspiciously rises again.",
      "bigName": "Shaft"
    },
    {
      "id": 1075,
      "name": "Dracula",
      "games": "Castlevania (1986 - NES)",
      "series": "Castlevania",
      "description": "The lord of all evil; after the death of his wife, this vampire turned against the human race, unleashing unspeakable evil across Europe, and showing distaste towards all who got in his way, even his own son. No matter how many times he is destroyed, Dracula and his castle are reborn every hundred years to start his reign of terror anew. The Belmont Clan is the sole hope of humanity whenever he rises again. Ready to strike, but enough talk. Have at you!",
      "bigName": "Dracula"
    },
    {
      "id": 1076,
      "name": "Soma Cruz",
      "games": "Castlevania: Aria of Sorrow (2003 - GBA)",
      "series": "Castlevania",
      "description": "Soma was only in high school when the first solar eclipse of the 21st century strikes, and an all too familiar castle rises again. Yet strangely enough, it seems like nobody is in command this time, as Dracula is in fact, dead. Soma must destroy the evil within though, and he's armed to the teeth. With a variety of old weapons like swords and axes, to more modern ones like handguns and rocket launchers. He's also able to steal the souls of the monsters he's killed. Maybe a certain something or someone still lurks within him...",
      "bigName": "Soma Cruz"
    },
    {
      "id": 1077,
      "name": "Dracula (2nd Form)",
      "games": "Castlevania (1986 - NES)",
      "series": "Castlevania",
      "description": "You may have defeated his regular form, but Dracula isn't going down without one more fight. This form usually varies from game to game, but it is most commonly a large blue demon. Now with far more attacks at his disposal, he's intent on taking you down. However, his weakness is that you can now hit him anywhere, so go on and save humanity from darkness!",
      "bigName": "Dracula (2nd Form)"
    },
    {
      "id": 1078,
      "name": "Kid Dracula",
      "games": "Akumajo Special: Boku Dracula-kun (1990 - Famicom)",
      "series": "Castlevania",
      "description": "The self proclaimed demon king, his tale is set 10,000 years in the future. He awakens from his rest only to be told that his enemy Galamoth has challenged him. Taking his father's cape, he sets out to defeat Galamoth and show him who the real king of evil is. Little is known about his identity, and he is assumed to have some relation to Alucard, but this is still up to debate.",
      "bigName": "Kid Dracula"
    },
    {
      "id": 1079,
      "name": "Sebastian Tute",
      "games": "Wii Music (2008 - Wii)",
      "series": "Mii",
      "description": "This Mii may look a bit pompous, but he’s earned that wig, for sure. Sebastian Tute is the host of Wii Music, a game where the Wii Remotes serve as all of your instruments. Sebastian will teach you how to play each and every one, as well as guide through the various game modes. He’s also the conductor of a musical ensemble group called The Tutes. Their rendition of ‘Twinkle, Twinkle, Little Star’ really is something to behold.",
      "bigName": "Sebastian Tute"
    },
    {
      "id": 1080,
      "name": "Party Phil",
      "games": "Wii Party (2010 - Wii)",
      "series": "Mii",
      "description": "Mario isn’t the only one who throw an awesome, minigame-filled party; the Miis got in on the action in Wii Party, hosted by the charming Party Phil. With a name like that, maybe he was destined for the job, but it’s his energy and enthusiasm that make him the perfect host. In Wii Party U, he was joined by his little sister Party Penny. Speaking of family, he does look a bit like Sebastian Tute, could they be related?",
      "bigName": "Party Phil"
    },
    {
      "id": 1081,
      "name": "Dark Emperor",
      "games": "Streetpass Mii Plaza: Find Mii II (2011 - 3DS)",
      "series": "Mii",
      "description": "The real, REAL, mastermind behind the kidnapping of the Monarch and the Royal Family in Find Mii. This powerful beast is as hard to beat as he is to encounter. In fact, you may think you fought him at the end of Find Mii II, but notice the eyes are a different color? That was actually the Dark Lord, in order to find the Dark Emperor, you need to play through Find Mii II a second time. That’s a lot of heroes you’re gonna need.",
      "bigName": "Dark Emperor"
    },
    {
      "id": 1082,
      "name": "Iris Archwell",
      "games": "Streetpass Mii Plaza: Monster Manor (2013 - 3DS)",
      "series": "Mii",
      "description": "The titular monster manor has been placed under a ghostly curse; monsters invaded its halls, the rooms have disappeared, and several passersby have been kidnapped and taken inside. You are a master investigator tasked with solving the manor’s mystery, but you are not alone. Iris is your self-described brilliant assistant, and she seems a tad too enthused about the job, she’s even gone ahead of you! What could go wrong?",
      "bigName": "Iris Archwell"
    },
    {
      "id": 1083,
      "name": "Gold Bone",
      "games": "Streetpass Mii Plaza: Mii Force (2013 - 3DS)",
      "series": "Mii",
      "description": "The leader of the dastardly Gold Bone Gang, this intergalactic criminal is pillaging planets throughout the Streetpass Galaxy using his prime battleship, the Goldie VII. Only the Mii Force, a squad of the best Mii pilots around, can take down this villain. Unfortunately, the Mii Force consists only of the captain and you at the moment, so you might need to do some recruiting. Gold Bone’s ship and his giant robot, Robo-Bone, are armed to the teeth, so be careful!",
      "bigName": "Gold Bone"
    },
    {
      "id": 1084,
      "name": "Coraline",
      "games": "Streetpass Mii Plaza: Ultimate Angler (2015 - 3DS)",
      "series": "Mii",
      "description": "The tropical Streetpass Islands are the dream of anglers throughout the world for their variety of fish, including a few legendary sea monsters. Coraline is an employee of the local fishing club and the daughter of a famous marine biologist. She’s going to help you out getting just the right bait you need to catch each type of fish. And, hey, maybe you’ll find a monster or two on your journey.",
      "bigName": "Coraline"
    },
    {
      "id": 1085,
      "name": "Shinobu",
      "games": "Streetpass Mii Plaza: Ninja Launcher (2016 - 3DS)",
      "series": "Mii",
      "description": "What weapons do you usually associate with ninja? Shurikens, kunai, katanas… cannons? Your Mii’s Ninja Clan uses the ancient Ninjutsu Cannon to fight the demon army that threatens the land. Shinobu, your loyal apprentice, will help you use it and aim it at the enemies, as for you, the heir to the clan, goes the honorable role of the cannonball itself. You’ll also have to take off your clothes before entering, by the way, lest they catch fire. Funny that your apprentice has to teach you all this.",
      "bigName": "Shinobu"
    },
    {
      "id": 1086,
      "name": "Crispin",
      "games": "Streetpass Mii Plaza: Feed Mii (2016 - 3DS)",
      "series": "Mii",
      "description": "Boy, saving the world sure makes me hungry! There are plenty of adventurers out there trying to save the Monarch from the Dark Emperor, but they’ll have to eat something on the way. Crispin is the head of a restaurant where many adventurers go to grab a bite, and it’s your job, as the chef, to make the right recipes to give them strength and courage to complete their mission.",
      "bigName": "Crispin"
    },
    {
      "id": 1087,
      "name": "Nico Fire",
      "games": "Streetpass Mii Plaza: Slot Car Rivals (2016 - 3DS)",
      "series": "Mii",
      "description": "Nico Fire is the manager of a store where he hosts regular slot car races, he is something of an expert on the matter. By the way, he may look like him, but he is not the slot car champion Iceman. It’s just a family resemblance, Nico is actually Iceman’s little brother! Nico may not be as famous as his brother, but he knows his stuff, and is very willing to show you around a track. Maybe, with his help, you could be the next champ.",
      "bigName": "Nico Fire"
    },
    {
      "id": 1088,
      "name": "Plane",
      "games": "Pilotwings (2011 - SNES)",
      "series": "Mii",
      "description": "The Pilotwings series is all about piloting different types of aircraft, like hang gliders and rocket belts, but most popular are the planes. The original game featured a light plane to complete several missions for the Flight Club, but when the Miis took over in Pilotwings Resort, they used a more advanced, but still basic, propeller plane to fly around Wuhu Island. Despite their popularity, planes were completely absent in Pilotwings 64.",
      "bigName": "Plane"
    },
    {
      "id": 1089,
      "name": "Monita",
      "games": "Nintendo Land (2012 - Wii U)",
      "series": "Mii",
      "description": "Monita is the robotic guide to the incredible Nintendo Land theme park. She’s a monitor, as her name suggests, but she still has a lot of personality to her. She’ll show you around the park and teach you how to play of its twelve minigames, er, I mean, attractions. Monita is even something of an actress, as she will play the role of various characters in some of the attractions, including a kidnapped princess.",
      "bigName": "Monita"
    },
    {
      "id": 1090,
      "name": "Mii Brawler",
      "games": "Mii Channel (2006 - Wii)",
      "series": "Smash",
      "description": "Mii characters are digital avatars that can be used in a variety of software across the Wii, 3DS, Wii U, and Switch libraries. They first appeared on the Wii’s Mii Channel in 2006 and became a cultural phenomenon with how they embodied the wide appeal of the Wii. With a multitude of customizable options, you can create caricatures of your friends and family, and they can even join the battle here in Smash! Mii Brawlers specifically are close-ranged fighters that specialize in martial arts, using a close-ranged style to overwhelm opponents.",
      "bigName": "Mii Brawler"
    },
    {
      "id": 1091,
      "name": "Mii Swordfighter",
      "games": "Mii Channel (2006 - Wii)",
      "series": "Smash",
      "description": "Although Miis first made their debut to the public on the Wii, the concept for them goes as far back as the Famicom days. Miiyamoto tried to implement the concept on both the Famicom and the 64 DD. Miis were finally fully realized when the Wii Sports developers needed basic yet relatable characters; Miis made in the Mii Channel appeared in Wii Sports with Japanese kokeshi doll proportions and have since appeared in numerous titles. Mii Swordfighters specifically go to battle with a sword, using its decent range to ward off opponents.",
      "bigName": "Mii Swordfighter"
    },
    {
      "id": 1092,
      "name": "Mii Gunner",
      "games": "Mii Channel (2006 - Wii)",
      "series": "Smash",
      "description": "The Miis’ most notable role is Wii Sports, in which they acted as competitors in the five sports available. Other noticeable endeavors of theirs include their roles as courageous warriors in Find Mii, quirky laidback islanders in Tomodachi Life, and amusement park thrill seekers in Nintendo Land. They can practically fit into almost any role without problem— chameleons, if you will. Mii Gunners specifically are armed with revolutionary motion-controlled arm cannons, using a variety of ammo to fight from a distance.",
      "bigName": "Mii Gunner"
    },
    {
      "id": 1093,
      "name": "Sandbag",
      "games": "Super Smash Bros. Melee (2001 - Gamecube)",
      "series": "Smash",
      "description": "In previous Super Smash Bros. games, this determined sandbag was the main character of Home-Run Contest, where he was sent flying over countless yards by various fighters. Punches, kicks, slashes, this little guy took it all, and you have to feel sorry for him. But despite what you might think, Sandbag loves his job and doesn't mind being flung around.",
      "bigName": "Sandbag"
    },
    {
      "id": 1094,
      "name": "Smash Ball",
      "games": "Super Smash Bros. Brawl (2008 - Wii)",
      "series": "Smash",
      "description": "This mysterious sphere contains an intense amount of glowing energy. Whoever breaks it first gains access to their Final Smash, a special technique filled with immense power. If used correctly, Final Smashes can turn the tide of the battle, making the Smash Ball one of the most important items in a free-for-all.",
      "bigName": "Smash Ball"
    },
    {
      "id": 1095,
      "name": "Master Hand",
      "games": "Super Smash Bros. (1999 – N64)",
      "series": "Smash",
      "description": "Master Hand is one of the two links between the world of Smash and the world beyond. He is the link of creation, being the one who imagines and designs much of the constructs in the world of Smash. Master Hand spends most of his time waiting for challengers in Final Destination. Although there have been many victors against him, not many comprehend his true absolute power because he holds himself back against the challengers.",
      "bigName": "Master Hand"
    },
    {
      "id": 1096,
      "name": "Crazy Hand",
      "games": "Super Smash Bros. Melee (2001 – Gamecube)",
      "series": "Smash",
      "description": "Crazy Hand is the second of the two links between the world of Smash and the world beyond. Whereas Master Hand is the link of creation, Crazy Hand is the link of destruction, bringing only ruination to anything and anyone in his wake. Much like Master Hand, Crazy Hand mostly resides in Final Destination waiting for those he deems worthy to challenge him. He often teams up with Master Hand to perform a variety of team attacks, but he does occasionally like to handle things alone. Like Master Hand, he keeps his true absolute power hidden, with challengers only getting a small taste of what he is capable of.",
      "bigName": "Crazy Hand"
    },
    {
      "id": 1097,
      "name": "Giga Bowser",
      "games": "Super Smash Bros. Melee (2001 - Gamecube)",
      "series": "Smash",
      "description": "A larger version of Bowser that appears as the true final boss of Melee's Adventure Mode. Roughly twice the size of his smaller counterpart, this also increases his damage output and makes him even harder to kill. In Ultimate, he's relatively unchanged from his original appearance, only now he can't be knocked out. This gargantuan reptile is sure to test your abilities.",
      "bigName": "Giga Bowser"
    },
    {
      "id": 1098,
      "name": "Galleom",
      "games": "Super Smash Bros. Brawl (2008 - Wii)",
      "series": "Smash",
      "description": "This enormous robot from the Subspace Army can feely transform between a tank and a more ape-like form. As a tank, it can move at high speeds, and as a robot, it has many devastating attacks, such as guided missiles, or slamming opponents with its enormous hands. It also has a Subspace Bomb hidden in its head that it can use at desperate moments. He was brought back by Galeem and tasked with guarding the Base in the World of Light.",
      "bigName": "Galleom"
    },
    {
      "id": 1099,
      "name": "Duon",
      "games": "Super Smash Bros. Brawl (2008 - Wii)",
      "series": "Smash",
      "description": "This conjoined robot is a classic two-in-one deal. Both the pink and blue sides are separate entities with their own individual attacks, but they share a single wheel, so they can never attack the same enemy at the same time. The pink half has a head cannon and rockets, while the blue half has two arm cannons and mines. Duon guards the bridge of the Haldberd after it was captured by the Subspace Army.",
      "bigName": "Duon"
    },
    {
      "id": 1100,
      "name": "Tabuu",
      "games": "Super Smash Bros. Brawl (2008 - Wii)",
      "series": "Smash",
      "description": "Tabuu created an army out of Shadow Bugs extracted from Mr. Game & Watch, recruiting the mysterious Ancient Minister, as well as tricking Bowser, Wario, and Ganondorf to joining his cause, to further his ultimate goal: Turning all of the fighters into trophies. He controlled Master Hand with the Chains of Light, but was discovered and defeated by King Dedede, with the help of Luigi, Ness, Kirby, Bowser, and Sonic.",
      "bigName": "Tabuu"
    },
    {
      "id": 1101,
      "name": "Master Giant",
      "games": "Super Smash Bros. for Wii U and Nintendo 3DS (2014 - Wii U/3DS)",
      "series": "Smash",
      "description": "When you reach the end of Classic Mode, you usually expect a climatic fight with Master Hand, and maybe even Crazy Hand. But if you play on the higher difficulties, Master Hand will burst open, and a bunch of black objects called “The Swarm” will fly out and take different shapes to fight you. This giant form is the toughest you can fight in the 3DS version, and second only to the Master Fortress form in the Wii U version.",
      "bigName": "Master Giant"
    },
    {
      "id": 1102,
      "name": "Master Beast",
      "games": "Super Smash Bros. for Wii U and Nintendo 3DS (2014 - Wii U/3DS)",
      "series": "Smash",
      "description": "Once you defeat Master Giant, or if you are playing somewhere between intensity 6.0 and 7.0, the Swarm will take the form of the Master Beast. This creature has the tail of a scorpion and the mouth of… well, a monster, and you will definitely feel it if it bites you. It doesn’t just rely on its maw and sting to attack though, as it can leap off-stage and back, or even summon lightning.",
      "bigName": "Master Beast"
    },
    {
      "id": 1103,
      "name": "Master Edges",
      "games": "Super Smash Bros. for Wii U and Nintendo 3DS (2014 - Wii U/3DS)",
      "series": "Smash",
      "description": "One of the weaker forms that the Swarm can take, appearing as early as intensity 5.1, but it’s still no joke. These giant, floating blades have some pretty devastating and wide-reaching attacks. There’s five swords in total, but they all function as one, so if you damage one, you damage them all. Once you defeat it, the Swarm will copy the fighter that challenges it and become Master Shadow.",
      "bigName": "Master Edges"
    },
    {
      "id": 1104,
      "name": "Master Core",
      "games": "Super Smash Bros. for Wii U and Nintendo 3DS (2014 - Wii U/3DS)",
      "series": "Smash",
      "description": "Once you defeat Master Shadow (or, in the highest difficulties of the Wii U version, Master Fortress), the Swarm will disperse, and the true enemy will reveal itself. This sphere is Master Core, and it has no offense, no defense, not even any movement. It will simply resign itself to standing in the middle of the stage and do nothing. This means that, after all those lengthy battles, all you need to do is pummel it to oblivion to claim the victory.(editado)",
      "bigName": "Master Core"
    },
    {
      "id": 1105,
      "name": "Galeem",
      "games": "Super Smash Bros. Ultimate (2018 – Switch)",
      "series": "Smash",
      "description": "Galeem is the Lord of Light. Not much is known about is existence, but its primary goal is to destroy the universe and recreate it as it sees fit. It takes the all-mighty Master Hand hostage and creates a myriad of identical puppet fighters in his image to serve in its army. It then engulfs the universe in light, leaving nothing but a barren wasteland. Those who choose not to fight it have their bodies burned, leaving them as spirits under its control. Those who unite to fight against it are enslaved, their bodies being used as templates for puppet fighters to host the now captive spirits. Kirby is the only one who managed to miraculously survive the attack, and it is now up to him to find his friends and put an end to Galeem’s reign.",
      "bigName": "Galeem"
    },
    {
      "id": 1106,
      "name": "Dharkon",
      "games": "Super Smash Bros. Ultimate (2018 – Switch)",
      "series": "Smash",
      "description": "Dharkon is the Embodiment of Chaos and Darkness. Much about its existence remains a mystery, but like Galeem, it wishes to destroy the universe and recreate it in its image. It takes the powerful Crazy Hand as prisoner, using his body to create an army of identical puppet fighters. While Galeem is temporarily wounded, it and its army abduct the remaining puppet fighters and spirits originally under Galeem’s control and begin entrenching the universe in darkness. Liberated spirits and fighters succeed in wounding it, freeing even more spirits and puppet fighters along the way. Galeem, angered by how Dharkon has hijacked its plans to recreate the universe, declares war on Dharkon, and the two entities use their remaining fighters and spirits to fight for dominance over the universe.",
      "bigName": "Dharkon"
    },
    {
      "id": 1107,
      "name": "Fighting Alloy Team",
      "games": "Super Smash Bros. Brawl (2008 - Wii)",
      "series": "Smash",
      "description": "It's a team... of fighting alloys. These strange enemies were fought in Super Smash Bros. Brawl's Multi-Man mode. As with all other Fighting Teams, they were relatively weak and easily defeated. Their movesets were also limited versions of other characters: Red Alloy is Captain Falcon, Blue Alloy is Zelda, Yellow Alloy is Mario and Green Alloy is Kirby.",
      "bigName": "Fighting Alloy Team"
    },
    {
      "id": 1108,
      "name": "Primid",
      "games": "Super Smash Bros. Brawl (2008 - Wii)",
      "series": "Smash",
      "description": "These mindless soldiers are the most basic troops of the Subspace Army. They mostly attack with their fists and feet, and are easy to defeat. They also have variants made of metal, that can breath fire, that are larger, and wielding a sword, Super Scope, or boomerang. Their faces change every time, for some reason… And what’s that purple stuff they were formed out of?",
      "bigName": "Primid"
    },
    {
      "id": 1109,
      "name": "Mite",
      "games": "Super Smash Bros. Brawl (2008 - Wii)",
      "series": "Smash",
      "description": "These creatures do look like Mr. Game & Watch, but the relationship is unknown. They are Mites, some of the weakest monsters in the Subspace Army, but also really dangerous in high numbers. They can come in three colors; red, green, or yellow, though there’s no actual difference between them besides that. There are often portals that spawn an endless number of them.",
      "bigName": "Mite"
    },
    {
      "id": 1110,
      "name": "Bytans",
      "games": "Super Smash Bros. Brawl (2008 - Wii)",
      "series": "Smash",
      "description": "Although they resemble Electrode, Bytans are anything but! They are members of the subspace army that come in a variety of colors. They can duplicate themselves at will, and the new one will roll into things to attack them just like the original. Bytans themselves can come in nine different colors, and if you’re not quick, you might find yourself swarmed by them in no time.",
      "bigName": "Bytans"
    },
    {
      "id": 1111,
      "name": "Roturret",
      "games": "Super Smash Bros. Brawl (2008 - Wii)",
      "series": "Smash",
      "description": "Roturrets are stationary turrets with a skull face in the center. They will rotate around the skull face and shoot laser shots at wherever its giant arrow is pointing. However, it can still miss, as the laser shots can go on either side of the fighter that the Roturret is trying to hit. Use that blindspot to your advantage and attack it to make it spin around and lose its target.",
      "bigName": "Roturret"
    },
    {
      "id": 1112,
      "name": "Shadow Bug",
      "games": "Super Smash Bros. Brawl (2008 - Wii)",
      "series": "Smash",
      "description": "This purple stuff isn’t actually a bunch of bugs: they’re Shadow Bugs! This weird substance can form monsters out of nowhere, and it can even copy the trophy of a character to make a false version of them! You can also see the stuff leaking out from within Primids. I wonder where the Subspace Army is getting all these? And why are they being dropped from the Halberd?",
      "bigName": "Shadow Bug"
    },
    {
      "id": 1113,
      "name": "Subspace Bomb",
      "games": "Super Smash Bros. Brawl (2008 - Wii)",
      "series": "Smash",
      "description": "Whenever this shows up, it can only mean bad things. The Subspace Army sets these off to drag places into Subspace. Only one has ever known to be destroyed instead of firing. In addition, to set one off, the two ROBs that carry and open it must be sacrificed. Anyone who is caught in the blast is killed, and the surrounding region is dragged into Subspace.",
      "bigName": "Subspace Bomb"
    },
    {
      "id": 1114,
      "name": "Ancient Minister",
      "games": "Super Smash Bros. Brawl (2008 - Wii)",
      "series": "Smash",
      "description": "This mysterious figure shows up every time a Subspace Bomb is detonated, leading to many characters pursuing him. He commands the Subspace Army from the floating Island of the Ancients, and seems intent on tearing up the world with the bombs. But, who could he actually be? Who does he take orders from? And why does he look at the Subspace Bombs with sadness whenever one is about to detonate?",
      "bigName": "Ancient Minister"
    },
    {
      "id": 1115,
      "name": "Sheriff",
      "games": "Sheriff (1979 - Arcade)",
      "series": "Other",
      "description": "A classic game as old as time, Sheriff is one of the oldest series in Nintendo's portfolio. The player controlled the titular Sheriff with the objective of shooting down countless gangs of bandits. Shooting the vultures that occasionally flew by gave extra points. He makes a triumphant return as an Assist Trophy, complete with his little tune and choppy walking. He misses his shots often, but when he hits, it's bound to do some damage.",
      "bigName": "Sheriff"
    },
    {
      "id": 1116,
      "name": "Pitcher & Batter",
      "games": "Baseball (1983 - NES)",
      "series": "Other",
      "description": "You know what these guys are playing? Baseball. No championship, no league, no player’s name, no team name, no year, no backyard, out of the park, no loading of bases; just good, old, regular Baseball. Baseball was actually one of the first games released for the Famicom, far predating even Super Mario Bros, and it was key to its success. I guess you could say, they hit a homerun.",
      "bigName": "Pitcher & Batter"
    },
    {
      "id": 1117,
      "name": "Tennis Player",
      "games": "Tennis (1984 - NES)",
      "series": "Other",
      "description": "Once again, this guys are playing Tennis. Just Tennis. Tennis has really come a long way in Nintendo history, Mario has played, the Miis have played, you could even say Link and Ganon play it. These guys don’t have that sort of brand recognition, they have to rely purely on their tennis skills. Well, sort of, Mario was still the referee, but the players themselves? That’s all they are, Tennis Players.",
      "bigName": "Tennis Player"
    },
    {
      "id": 1118,
      "name": "Tamagon",
      "games": "Devil World (1984 - NES)",
      "series": "Other",
      "description": "This tiny dragon is the protagonist of the game Devil World, which was never released in America. In it, Tamagon must traverse the mazes of Devil World, completing numerous tasks, such as collecting dots, crosses or bibles, while avoiding the Devil’s minions and the walls of the maze itself. He is harmless on his own, but can spit fireballs when he collects a cross or bible. He sure is devout!",
      "bigName": "Tamagon"
    },
    {
      "id": 1119,
      "name": "Devil",
      "games": "Devil World (1984 - NES)",
      "series": "Other",
      "description": "Yes, this is THE Devil, and he rules Devil World with a demonic fist. The dragon Tamagon is attacking his realm, but he must traverse its numerous mazes. While his minions chase Tamagon around, the Devil floats above the maze, and whenever he points, the maze will shift to that direction. In Smash Ultimate, he appears as an Assist Trophy, and he can move the screen around by pointing.",
      "bigName": "Devil"
    },
    {
      "id": 1120,
      "name": "Urban Champion",
      "games": "Urban Champion (1984 - NES)",
      "series": "Other",
      "description": "This guy is getting into a fist fight in front of the local Snack Bar, but he is no Ryu. Instead of numerous combos and special moves, Urban Champion’s attack options are limited. There’s a button for heavy punch, and one for light punch; and you can aim them up or down with the D-pad. You win by knocking the opponent down the nearest sewer hole. Now that’s the stench of defeat!",
      "bigName": "Urban Champion"
    },
    {
      "id": 1121,
      "name": "Bubbles",
      "games": "Clu Clu Land (1984 - NES)",
      "series": "Other",
      "description": "Bubbles is a bubblefish who lives in the underwater kingdom of Clu Clu Land. After the kingdom’s treasure, the golden Ingots, were stolen by the Unira, Bubbles goes out to retrieve them. She needs to traverse numerous underwater mazes and find the Ingots, which only reveal themselves when she swims over them. She needs to grab onto poles in order to make a turn, so it’s quite a puzzling quest, to boot.",
      "bigName": "Bubbles"
    },
    {
      "id": 1122,
      "name": "Unira",
      "games": "Clu Clu Land (1984 - NES)",
      "series": "Other",
      "description": "The Unira are an evil bunch of sea urchins who have stolen Clu Clu Land’s treasured Ingots. Bubbles is out to stop them, but Unira are dangerous, just touching one will cause Bubbles to pop! Bubbles can fight back by send out sound waves to stun them, and then ramming them against the wall, however, new ones will come out to take their place. In Smash Ultimate, the Unira appears as item which sticks to a spot and spike anyone who comes near.",
      "bigName": "Unira"
    },
    {
      "id": 1123,
      "name": "Excitebike",
      "games": "Excitebike (1984 - NES)",
      "series": "Other",
      "description": "This person is riding a top-of-the-line motocross motorcycle, racing to the finish line. There’s more to excitebiking than just that, though. The bike’s turbo is fast, but used too often, it will cause the bike to overheat. The track is also filled with ramps, which can give you great airs, but you need to angle carefully when you land. There are also many other obstacles, including other racers. These can be toppled, if you’re the sort of person who’d do anything for victory.",
      "bigName": "Excitebike"
    },
    {
      "id": 1124,
      "name": "Balloon Fighter",
      "games": "Balloon Fight (1985 - NES)",
      "series": "Other",
      "description": "The protagonist of Balloon Fight, he is a young man who can fly around with the help of two balloons attached to his back. His objective is to take down multiple enemies, by popping their balloons. Unfortunately for him, the stages are full of dangers. Not only can his balloons be popped by the enemies, but there are also lightning clouds, some annoying flippers, and a very hungry fish hiding out at the bottom.",
      "bigName": "Balloon Fighter"
    },
    {
      "id": 1125,
      "name": "Fish",
      "games": "Balloon Fight (1985 - NES)",
      "series": "Other",
      "description": "This voracious fish hangs out in the lake at the bottom of the stages in Balloon Fight. If anyone comes too close to the water, they have little time before the fish pops out and eats them! Naturally, this fish is also present, in his original pixelated look, in the Balloon Fight stage in Smash Bros. However, he also appears, fully 3D, in the Ice Climber stage, Summit. How did he get so far?",
      "bigName": "Fish"
    },
    {
      "id": 1126,
      "name": "Mach Rider",
      "games": "Mach Rider (1985 - NES)",
      "series": "Other",
      "description": "Mach Rider (the game) takes place in the year 20X- er, 2112. In it, you control Mach Rider (the character) who races through different sectors on his motorcycle, shooting enemies and obstacles with his machine gun. Ramming into enemies earns you more points and replenishes your ammo, while slowing down while in a high gear will result in your bike suffering from poor acceleration. In the Famicom version of the game, you could even design and save your own tracks.! Fun Fact: Mach Rider was originally released as a racecar toy in 1972.",
      "bigName": "Mach Rider"
    },
    {
      "id": 1127,
      "name": "Diskun",
      "games": "Famicom Disk System (1986 - FDS)",
      "series": "Other",
      "description": "Diskun was the mascot for the Famicom Disk System, a floppy disk-based add-on for the Japanese NES, the Famicom. Diskun never made more than small cameos in games, but he could be found on the cover of every Disk System game manual, and became quite popular, enough to have his own merchandise. Many famous NES games actually started out on the Disk System, including Castlevania, Metroid and The Legend of Zelda.",
      "bigName": "Diskun"
    },
    {
      "id": 1128,
      "name": "Takamaru",
      "games": "The Mysterious Murasame Castle (1986 - FDS)",
      "series": "Other",
      "description": "A long time ago, Murasame Castle housed a stone statue known as Murasame. One night a mysterious object fell onto the castle, giving life to the statue and taking over Japan. Its evil power controls four neighboring castles, corrupting their lords into terrorizing nearby villages. A young samurai apprentice is sent to investigate this mysterious case: Takamaru. In Smash, his swift swordplay will be displayed when close to an opponent. When distant, he throws his windmill swords instead.",
      "bigName": "Takamaru"
    },
    {
      "id": 1129,
      "name": "Volleyball Player",
      "games": "Volleyball (1987 - NES)",
      "series": "Other",
      "description": "There aren’t nearly as many volleyball games as there are of football, baseball and the like. I guess that even back then that would make Volleyball stand out. But the game offers more than just simple six-a-side volleyball. You could choose either men’s or women’s competitions and pick teams from ten different countries! One of the female players, like the one here, even made an appearance as a costume in Super Mario Maker!",
      "bigName": "Volleyball Player"
    },
    {
      "id": 1130,
      "name": "Donbe & Hikari",
      "games": "Famicom Fairytales: Shin Onigashima (1987 - FDS)",
      "series": "Other",
      "description": "Once upon a time, there was an elderly couple, who had no children. In a dream, they had a prophecy they would receive two. Donbe, the boy, was born in a rice bowl floating down the river. Hikari, the girl, was born in a glittering bamboo tree. The two grew up together, but when they reached eight years of age, a dragon attacked the village and turned all into ogres, except for the siblings, who set out to save the world.",
      "bigName": "Donbe & Hikari"
    },
    {
      "id": 1131,
      "name": "Donbe & Hikari (Shin Onigashima Kouhen)",
      "games": "Famicom Fairytales: Shin Onigashima (1987 - FDS)",
      "series": "Other",
      "description": "Like many Famicom Disk System games of the era, Shin Onigashima was Split into two disks: Zenpen, or “first part”, and Kouhen, or “last”. On the second disk of this adventure, Donbe, transformed into a fully grown boy by a magic gavel, searches for his sister, Hikari, who disappeared when their boat sunk into the ocean.",
      "bigName": "Donbe & Hikari (Shin Onigashima Kouhen)"
    },
    {
      "id": 1132,
      "name": "Hockey Players",
      "games": "Ice Hockey (1988 - NES)",
      "series": "Other",
      "description": "In real life, hockey players come in all sorts of different shapes and sizes, but on the NES, they came in exactly three. The rightmost one is weak and feeble, but good at face-offs, the center one is pretty average, and that big one on the right is very slow, but very powerful, both in body checking and shooting strength. You’ll need to use all three types wisely if you wish to score that winning goal.",
      "bigName": "Hockey Players"
    },
    {
      "id": 1133,
      "name": "MONSTER",
      "games": "Famicom Grand Prix II: 3D Hot Rally (1988 - FDS)",
      "series": "Other",
      "description": "As the name suggests, MONSTER is a monster truck, one of the three cars that Mario and Luigi could race in the second Famicom Grand Prix game, way before Mario Kart! MONSTER was the slowest of the three cars, but had the most durability and was perfect for dealing with bad roads and obstacles. Fun fact: MONSTER’s design was the basis for the Tiny Titan car in Mario Kart Wii.",
      "bigName": "MONSTER"
    },
    {
      "id": 1134,
      "name": "Tank & Infantry",
      "games": "Famicom Wars (1988 - Famicom)",
      "series": "Other",
      "description": "These basic units are the backbone of any army throughout all the Advance Wars series, starting with the very first Famicom Wars. Infantry are cheap to deploy and not very powerful, but they can capture enemy buildings and bases. Tanks come in different sizes, but all of them more expensive and powerful than infantry. Use them well and conquer the battlefield, as the superior Commanding Officer.",
      "bigName": "Tank & Infantry"
    },
    {
      "id": 1135,
      "name": "Andy",
      "games": "Advance Wars (2001 - GBA)",
      "series": "Other",
      "description": "Young and naive, Andy is a newly enlisted CO in the Orange Star Army. He is a competent commander, although his impulsive behavior leads him into trouble more often than not. On the battlefield, Andy is a jack of all trades, sporting no advantages or disadvantages. His CO Power, Hyper Repair, restores health to all of his units and makes them stronger for a while.",
      "bigName": "Andy"
    },
    {
      "id": 1136,
      "name": "Eagle",
      "games": "Advance Wars (2001 - GBA)",
      "series": "Other",
      "description": "A kinda pretentious CO from Green Earth. Eagle is specialized in aerial units, giving them increased firepower. However, he makes up for this advantage by having significantly weaker naval units. With his CO Power, Eagle can command his non-infantry units to move for a second time. He has a friendly rivalry with the Orange Star CO Andy.",
      "bigName": "Eagle"
    },
    {
      "id": 1137,
      "name": "Olaf",
      "games": "Advance Wars (2001 - GBA)",
      "series": "Other",
      "description": "With his coat and boots, Olaf guides forth the Blue Moon army from his HQ. He loves winter, making his units unaffected by snowstorms. Speaking of, his CO Power Blizzard turns the battlefield into a frigid landscape. He despises rain, however. Olaf is seemingly the one behind Blue Moon's invasion of Orange Star. However, things may not be as they seem...",
      "bigName": "Olaf"
    },
    {
      "id": 1138,
      "name": "Ayumi Tachibana",
      "games": "Famicom Detective Club: The Missing Heir (1988 - FDS)",
      "series": "Other",
      "description": "Ayumi may seem like an ordinary, shy schoolgirl, but she’s actually a master detective. She formed a detective club in school with her friend Yoko, but after Yoko was murdered and Ayumi caught the killer, she became an assistant at the Utsugi detective agency.",
      "bigName": "Ayumi Tachibana"
    },
    {
      "id": 1139,
      "name": "Goku & Chao",
      "games": "Famicom Fairytales: Yuyuki (1989 - FDS)",
      "series": "Other",
      "description": "A long time ago, in a village in China, lived a young girl named Chao. One day, a meteor crashed near her home, and inside it, was a monkey, which she named Goku. Goku is rude and selfish, and Chao soon discovers that Goku is a criminal against the heavens, and the meteor was his prison. When Goku is imprisoned again, Chao sets out to rescue him, and Goku begins to learn the importance of kindness.",
      "bigName": "Goku & Chao"
    },
    {
      "id": 1140,
      "name": "Sukapon",
      "games": "Joy Mech Fight (1993 - NES)",
      "series": "Other",
      "description": "The eight robot created by Dr. Emon and his friend Dr. Walnuts. Built to be a comedian, he was quickly reprogrammed into a fighting robot to save his 7 brothers after Dr. Walnut reprogrammed them to conquer the world. His comedic nature has led to an...unusual fighting style. In Smash, Sukapon can throw fighters away with his Sukapon Toss, spin into opponents with Sukapon Roll and shoot a copy of his head with Tondeker! But don't lose your head; you can stop his attacks by defeating him!",
      "bigName": "Sukapon"
    },
    {
      "id": 1141,
      "name": "Yakuman Player",
      "games": "Yakuman (1989 – Game Boy)",
      "series": "Other",
      "description": "This happy-looking gentleman is really excited because he is about to play his favourite game: mahjong. Mahjong is a tile-based Chinese game, in which players compete to form sets using the characters and symbols on the tiles. A ‘yakuman’ are hands that are so difficult to achieve, that you get maximum points just for having it! Do you think that’s why he is so happy?",
      "bigName": "Yakuman Player"
    },
    {
      "id": 1142,
      "name": "Commander",
      "games": "X (1992 – Game Boy)",
      "series": "Other",
      "description": "In a far-off year, at the height of the space age, humanity gets most of its energy from crystals mined at the Planet Tetamus II, but the planet has come under attack from alien invaders. It’s your job to pilot the advanced tank VIXIV to fend off the invaders, and this vector head will be your superior. He’ll give you instructions at the start of each mission, informing you of its objectives, which can range from recovering stolen crystals, to destroying alien structures.",
      "bigName": "Commander"
    },
    {
      "id": 1143,
      "name": "Frog & Snake",
      "games": "Kaeru no tame ni Kane wa Naru (1992 – Game Boy)",
      "series": "Other",
      "description": "After the Prince of Sablé drank the magic potions brewed by the witch Mandola, he became able to take different forms, such as a frog and a snake. As a frog, the prince can survive in the water and eat insect enemies, while as a snake, the Prince can enter tight holes, talk to other snakes, and bite weaker enemies. And of course, by eating the Joy Fruit, the prince can safely return to his human form.",
      "bigName": "Frog & Snake"
    },
    {
      "id": 1144,
      "name": "Prince of Sablé",
      "games": "Kaeru no tame ni Kane wa Naru (1992 – Game Boy)",
      "series": "Other",
      "description": "The nameless (until you name him) Prince of the kingdom of Sablé, one of the wealthiest in the land. A king, carefree, but somewhat spoiled and sheltered kid, the prince tends to believe most problems can be solved by tossing money at them, which he often does. He does have his brave side, however, when the princess Tiramisu from a neighbouring kingdom is kidnapped, he spares no effort trying to save her.",
      "bigName": "Prince of Sablé"
    },
    {
      "id": 1145,
      "name": "Prince Richard",
      "games": "Kaeru no tame ni Kane wa Naru (1992 – Game Boy)",
      "series": "Other",
      "description": "The prince of Sablé’s close friend since childhood, prince Richard, the prince of the Custard kingdom, is also his rival. They compete in almost everything, and though often evenly matched, Richard was always the best fencer. They’re so competitive in fact, that when Princess Tiramisu is kidnapped they compete to see who can save her first! Maybe these princes aren’t all that altruistic after all.",
      "bigName": "Prince Richard"
    },
    {
      "id": 1146,
      "name": "Muddy Mole",
      "games": "Mole Mania (1996 – Game Boy)",
      "series": "Other",
      "description": "The mean old cabbage farmer Jinbe took a few moles that were digging up his farm. Unlucky for him, however, those moles were Muddy Mole’s wife and kids, and he won’t stand for that! In order to do this, Muddy will have to traverse the appropriately named Jinbe Land, burrowing the ground, stealing cabbages, and using steel balls to defeat the various enemies which swarm the place.",
      "bigName": "Muddy Mole"
    },
    {
      "id": 1147,
      "name": "Maruhige Shop Owner",
      "games": "Trade & Battle: Card Hero (2000 – Game Boy)",
      "series": "Other",
      "description": "The oldest son of a famous card merchant, Maruo Maruhige (as he is named), worked many jobs, including taxi driver and convenience store employee, before inheriting the Maruhige Card Shop from his father. Now, he sells cards for the popular game Card Hero, and everyone, from protagonists Hiroshi and Satoru, to their friends, rivals and enemies, get their cards from him. His father would be so proud!",
      "bigName": "Maruhige Shop Owner"
    },
    {
      "id": 1148,
      "name": "Satoru",
      "games": "Kousoku Card Battle: Card Hero (2007 – DS)",
      "series": "Other",
      "description": "A second year student in Kadohiro Middle School, Satoru Higashiyama is an easy going guy who thinks the most important thing in life is to have fun. His childhood friend Haruka introduces him to Card Hero, the trading card game that’s all the rage around town, and he immediately finds his true calling. But does Satoru have what it takes to become a true Card Hero?",
      "bigName": "Satoru"
    },
    {
      "id": 1149,
      "name": "Dr. Wright",
      "games": "SimCity (1991 - SNES)",
      "series": "Other",
      "description": "The gentleman with the… interesting hairdo is Dr. Wright, the chief advisor to the mayor of SimCity. The mayor himself is not quite adept in politics, but lucky for the city, Dr. Wright has an in-depth knowledge of government and is always ready to inform the player of the status and going-ons of the city, as well as giving helpful advice. Fun fact: he was named after the game’s creator, Will Wright!",
      "bigName": "Dr. Wright"
    },
    {
      "id": 1150,
      "name": "ST Falcon",
      "games": "Battle Clash (1992 - SNES)",
      "series": "Other",
      "description": "In the future, the “Battle Game” is the only order that remains on Earth, and its winner takes control of the world. Battles are fought using powerful mechas called Standing Tanks, or STs. You are the gunner of the ST Falcon, and along with its pilot, Mike Anderson, you fight to bring down the current champion, Anubis, who killed Mike’s father. The Falcon is equipped with incredible firepower and can be controlled using the Super Scope.",
      "bigName": "ST Falcon"
    },
    {
      "id": 1151,
      "name": "F-Type",
      "games": "Stunt Race FX (1994 - SNES)",
      "series": "Other",
      "description": "One of the many cartoony sentient cars available in Stunt Race FX. F-Type turns quickly and is easy to control, not to mention, once he gets a chance to accelerate he can reach incredible speeds! One problem, though, his body is very weak, so if you crash into something, you will feel it. F-Type is recommended for more advanced players, so, once you’re a super driver, try him out!",
      "bigName": "F-Type"
    },
    {
      "id": 1152,
      "name": "Tractor Trailer",
      "games": "Stunt Race FX (1994 - SNES)",
      "series": "Other",
      "description": "No matter how cool he looks, you won’t be able to drive the Tractor Trailer in a regular race. No, the Trailer is only available in the bonus mode Speed Trax. Controlling him can be a bit difficult, not only because of his size and the flexibility of the hitch between the cab and the trailer, but also because of the camera angle, which is different from other cars! He can hardly wait for the race though, so reach that Bonus Game quickly!",
      "bigName": "Tractor Trailer"
    },
    {
      "id": 1153,
      "name": "Lip",
      "games": "Panel de Pon (1995 - SFC)",
      "series": "Other",
      "description": "Lip, the Fairy of Flowers, lives in the world of Popples with her fairy friends. However, her friends have been cursed by the evil Thanatos, and only Lip can save them with… puzzles? Yes, Lip is the protagonist of Panel de Pon, the first game in the series known as Puzzle League in the West, although she’s always gotten the short end of the (Lip’s) stick when it comes to localization. Fun fact: while this is Lip’s first appearance in a Smash Bros game, her stick, her theme song, and her garbage blocks have been fixtures of the series for years!",
      "bigName": "Lip"
    },
    {
      "id": 1154,
      "name": "Dion, Max & Jack",
      "games": "Marvelous: Another Treasure Island (1996 - SFC)",
      "series": "Other",
      "description": "Dion, the leader, Max, the brawn, and Jack, the brains; these three students ended up on an island during a school field trip, but this is no ordinary island. That was the island in which the legendary pirate, Captain Maverick, guarded his treasure, the “Marvelous” back when pirates ruled the seas. No one who looked for the treasure has returned to tell the tale, but the three are determined to be the first.",
      "bigName": "Dion, Max & Jack"
    },
    {
      "id": 1155,
      "name": "Hakkun",
      "games": "Sutte Hakkun (1998 - SFC)",
      "series": "Other",
      "description": "Hakkun is an inhabitant of the Peaceful Islands. One day, the Rainbow of Happiness which shone above the Hakkun's island broke into little shards which were scattered across the island. Now it's up to Hakkun to collect the shards and restore the rainbow. His body can store colors from objects around him, which he can then use to make blocks move. Red makes them more vertically, blue blocks move horizontally, and yellow blocks go diagonally!",
      "bigName": "Hakkun"
    },
    {
      "id": 1156,
      "name": "Girl from Hajimari no Mori",
      "games": "Famicom Bunko: Hajimari no Mori (1999 - SFC)",
      "series": "Other",
      "description": "Hey! She has a name, you know? It’s Komurasaki, and she’s not an ordinary girl. She’s a yokai, a spirit of the forest, although things don’t seem to be going too well for her tribe, the Ayakashi. The forest has been cut down, and if she isn’t able to restore it, her people might be forced to leave! Maybe that young boy who just moved in to the nearby village may be able to help…",
      "bigName": "Girl from Hajimari no Mori"
    },
    {
      "id": 1157,
      "name": "Harry",
      "games": "Teleroboxer (1995 - Virtual Boy)",
      "series": "Other",
      "description": "In the 22nd century, telerobotics has allowed humans to remotely control robots by having them mimic a human’s movements. Dr. Edward Maki Jr. created the idea of a boxing match between robots to increase people’s interest in the technology, and it was a world-wide success. Harry is the cutting-edge robot you will use in the next Teleroboxing tournament. It’s a highly-responsible machine, so take down your opponents with its powerful Machine Gun Attacks!",
      "bigName": "Harry"
    },
    {
      "id": 1158,
      "name": "Ryota Hayami",
      "games": "Wave Race 64 (1996 - N64)",
      "series": "Other",
      "description": "Ryota Hayami is only 18 years old and already a star Wave Racer. Hailing from Japan, Ryota doesn’t exceed in any one attribute, but has them all quite balanced. He gets good top speed, but loses a lot during turns, making him an excellent racer for the earlier, straighter courses, like Sunny Beach. On his next tournament, he got rid of the helmet and goggles to make his face more recognizable outside of Japan. You tell us if it worked.",
      "bigName": "Ryota Hayami"
    },
    {
      "id": 1159,
      "name": "Akari Hayami",
      "games": "1080° Snowboarding (1998 - N64)",
      "series": "Other",
      "description": "This 17-year-old from Japan is new to snowboarding, but works hard and shows great promise. She is one of the slowest and lightest boarders on the team, but has great technique, can jump high, and has the best balance out of them all. Her surname is no coincidence, she is the little sister of Wave Race’s Ryota Hayami. In fact, she appeared alongside her brother as a playable character in Wave Race: Blue Storm.",
      "bigName": "Akari Hayami"
    },
    {
      "id": 1160,
      "name": "Ray Mk II",
      "games": "Custom Robo V2 (2000 - N64)",
      "series": "Other",
      "description": "The second model in the popular Ray line of Custom Robos, miniature toy robots that can be pitted in battle with each other. Ray Mk II is a Shining Fighter class, making it well-balanced, easy to control, and with good movement capabilities. In fact, Mk II is the most balanced of the Ray line. It also has a powerful charge that can deal heavy damage to opponents. The Hero of Custom Robo V2 wins one as a lottery prize.",
      "bigName": "Ray Mk II"
    },
    {
      "id": 1161,
      "name": "Ray Mk III",
      "games": "Custom Robo Arena (2006 - DS)",
      "series": "Other",
      "description": "The latest robo in the Ray series, Mk III is a power style robo won by the Hero of Custom Robo Arena after giving their father their old Mk II. It’s a beginner-friendly robo with average stats, and very adaptable to different fighting styles, but it might not be the best choice against more experienced Commanders. It is also the first Ray model to be developed by NeoBrain, and not the series’ original developer, Lambda Ltd.",
      "bigName": "Ray Mk III"
    },
    {
      "id": 1162,
      "name": "Flare",
      "games": "Custom Robo (1999 - N64)",
      "series": "Other",
      "description": "Flare is an Aerial Beauty, a class of female robos known for their high aerial mobility and for their excellency at all combat ranges. Flare itself is the middle ground when it comes to Aerial Beauties, having a balanced combination of stats. Flare is the robo of choice of Karin, a promising young Commander who won nearly 300 battles with it. An upgraded version called Flare Mk II was introduced in Custom Robo GX.",
      "bigName": "Flare"
    },
    {
      "id": 1163,
      "name": "Bayonette",
      "games": "Custom Robo V2 (2000 - N64)",
      "series": "Other",
      "description": "Twin brothers Tsurugi and Yaiba were already deep under the influence of the evil Goliath Organization when they combined their beloved robos, Spear and Lance, into one beast of a machine. They used the Strike Vanisher class as a base, but added even more stealth capabilities, resulting in a robo that is both highly illegal, and immensely powerful. You’ll need a very smartly selected set to win against this monster.",
      "bigName": "Bayonette"
    },
    {
      "id": 1164,
      "name": "Saki Amamiya",
      "games": "Sin & Punishment (2000 - N64)",
      "series": "Other",
      "description": "In the dystopian far-off year of 2007, attempts to engineer a new food source go awry, resulting in monsters called Ruffians, which prey on mankind. The Armed Volunteers meant to stop them have also begun oppressing the Japanese people. Saki is a member of a Savior Group that fights both the Ruffians and the Volunteers, using his gun/blade hybrid, the Dolphin Gun. He had actually been killed, but was resurrected by the mysterious Achi, giving him super-human prowess.",
      "bigName": "Saki Amamiya"
    },
    {
      "id": 1165,
      "name": "Isa Jo",
      "games": "Sin & Punishment: Star Successor (2009 - Wii)",
      "series": "Other",
      "description": "The son of Saki Amamiya and Airan Jo, Isa was born on Earth-5 and is ordered by the leaders of Inner Space to destroy an Outer Space recon unit that fell on the ruined Earth-4. However, when Isa found the recon unit, in the form of a human girl he called Kachi, concluded that she was harmless after losing her memory, and befriended her instead. This angered the leaders of Inner Space, so Isa must protect himself and Kachi from the elite fighters sent to kill them both.",
      "bigName": "Isa Jo"
    },
    {
      "id": 1166,
      "name": "Helirin",
      "games": "Kuru Kuru Kururin (2001 - GBA)",
      "series": "Other",
      "description": "That little blue bird is called Kururin, and he’s out to rescue his brothers and sisters who have gone missing. He’s never left his home world before, but Teacher Hare has instructed him on piloting the Helirin. This bladed helicopter rotates slowly while navigating through mazes, but if the wings touch the walls, it will take damage, so Kururin needs to carefully control the rotation in order to fly safely.",
      "bigName": "Helirin"
    },
    {
      "id": 1167,
      "name": "Alessandro Inzaghi",
      "games": "Napoleon (2001 - GBA)",
      "series": "Other",
      "description": "Alessandro is a commander of the French and longtime friend of the legendary Napoleon, ever since the two attended military school. An honourable man, he values the individual over any nation. Inzaghi respects Napoleon more than any man and is ready to aid him in his battles against royalists, the British and man-eating ogres.",
      "bigName": "Alessandro Inzaghi"
    },
    {
      "id": 1168,
      "name": "Isaac",
      "games": "Golden Sun (2001 - GBA)",
      "series": "Other",
      "description": "In the world of Weyard, there are those who can use form of elemental magic called Psynergy. Isaac is a young man from the village of Vale, who is also a Venus Adept, someone who can utilize Earth-based Psynergy. After some mysterious villains attempt to return the sealed Alchemy to the world, Isaac leads a group of Adepts to stop them. Isaac can cause earthquakes and summon giant, magical hands. Those are quite handy!",
      "bigName": "Isaac"
    },
    {
      "id": 1169,
      "name": "Isaac (Dark Dawn)",
      "games": "Golden Sun: Dark Dawn (2010 - DS)",
      "series": "Other",
      "description": "This is Isaac as he appears in Golden Sun: Dark Dawn, which takes place over thirty years after the events of its predecessor. Isaac is now married to Jenna and has a son, Matthew, though he is hardly a settled-down family man. With Alchemy having returned to the world, Isaac keeps an observatory with Garet, where he watches over Mt. Aleph and trains his son, greatly concerned about an age of unrest returning to Weyard.",
      "bigName": "Isaac (Dark Dawn)"
    },
    {
      "id": 1170,
      "name": "Garet",
      "games": "Golden Sun (2001 - GBA)",
      "series": "Other",
      "description": "Garet is a close childhood friend of Isaac’s and a Mars Adept, meaning that he can use Psynergy based on the element of fire. Fittingly, he is the hot head of the group, and often acts before thinking. He joins Isaac at the start of his adventure and they venture into the world of Weyard together. He can take a lot of damage, but despite his burly physique can’t quite deal as much as Isaac.",
      "bigName": "Garet"
    },
    {
      "id": 1171,
      "name": "Ivan",
      "games": "Golden Sun (2001 - GBA)",
      "series": "Other",
      "description": "Ivan is a young Jupiter Adept of mysterious origin and a good friend of Isaac's. He was raised in Kalay by a merchant named Hammet, but there are no Jupiter Adepts native to that region of Weyard... so where is he really from? Even he doesn't know. His Psynergy powers include calling on the powers of wind and thunder as well as... mind reading! As Isaac and Garet have experienced, that seems to be his preferred method of acquainting with other people. How inconsiderate of him.",
      "bigName": "Ivan"
    },
    {
      "id": 1172,
      "name": "Mia",
      "games": "Golden Sun (2001 - GBA)",
      "series": "Other",
      "description": "Mia is a Mercury Adept, meaning she can use water-based Psynergy, which has extensive healing abilities beside the typical offensive spells. She is actually one of the last known Mercury Adepts, and would use her healing talents to treat the wounded and ill in her village before joining Isaac and his group, as they pursue a group of Adepts who enter the nearby Mercury Lighthouse.",
      "bigName": "Mia"
    },
    {
      "id": 1173,
      "name": "Felix",
      "games": "Golden Sun (2001 - GBA)",
      "series": "Other",
      "description": "Prior to Isaac's quest, Felix lived in a village named Vale with his friends Isaac, Garet and Jenna, his sister. But disaster caused a boulder to fall onto the village, seemingly killing Felix in its path. Three years later, he reappears when Isaac's party investigates Soul Sanctum, revealing his plan to use the Elemental Stars to relight the Elemental Lighthouses, returning Alchemy to the world. From that point on, Isaac is forced to thwart his old friend's plans and prevent the return of Alchemy. The second game focuses on his side of the story rather than Isaac's. As a Venus adept, Felix shares many abilities with Isaac, like summoning earthquakes.",
      "bigName": "Felix"
    },
    {
      "id": 1174,
      "name": "Jenna",
      "games": "Golden Sun (2001 - GBA)",
      "series": "Other",
      "description": "Jenna is the younger sister of Felix, a close friend of Isaac and Garet and, like the latter, a Mars Adept. Three years after her brother is apparently killed, Jenna and the village scholar Kraden are taken hostage by a group of Adepts who intend to return Alchemy to the world, and Felix is among them! However, in Golden Sun: The Lost Age, Jenna actually joins her brother in his quest, going from damsel-in-distress to permanent party member.",
      "bigName": "Jenna"
    },
    {
      "id": 1175,
      "name": "Matthew",
      "games": "Golden Sun: Dark Dawn (2010 - DS)",
      "series": "Other",
      "description": "Mathew is the son of Isaac and Jenna and the protagonist of Golden Sun: Dark Dawn. He is a Venus Adept, much like his father, and the live together in an observatory where Isaac trains his son for the day he will eventually take up his mantle. When Matthew’s friend Tyrell breaks an important machine, Matthew and his friends are sent to find a rare Mountain Roc feather that is needed to fix it.",
      "bigName": "Matthew"
    },
    {
      "id": 1176,
      "name": "Magical Vacation Protagonists",
      "games": "Magical Vacation (2001 - GBA)",
      "series": "Other",
      "description": "Whether a girl or a boy, you are a student of the magical school Will-O’-Wisp, and have been ostracized for most of your life for your ability to see spirits. During the summer, you and other students go to the Valencian seaside, where many students have gone missing. Soon after you arrive, mysterious monsters called Enigmas abduct all students, except for you, and it is up to you to save them.",
      "bigName": "Magical Vacation Protagonists"
    },
    {
      "id": 1177,
      "name": "Putty",
      "games": "Magical Vacation (2001 - GBA)",
      "series": "Other",
      "description": "These Traveling Putties are just what their name suggest: walking pieces of putty! They can talk too, and their speaking style is very distinct. They can be found on almost every planet, traveling across the universe searching for the mysterious chests which contain Putty Peas. Word is that the Putty on Razen, the fire planet, will give you a special reward if you give him thirty putty peas.",
      "bigName": "Putty"
    },
    {
      "id": 1178,
      "name": "Mokka",
      "games": "Magical Vacation (2001 - GBA)",
      "series": "Other",
      "description": "This 12000 year old robot was found by Principal Biscotti in a curiosity shop and enrolled as a student at the Will-O’-Wisp Academy, where he soon befriends the protagonists. He’s sarcastic, impatient, and even rather cynical, but he is actually kind and loyal and is even looking to be in a romantic relationship. He’s not very fast, but he can take and deal damage better than anyone else.",
      "bigName": "Mokka"
    },
    {
      "id": 1179,
      "name": "DeMille",
      "games": "Tomato Adventure (2002 - GBA)",
      "series": "Other",
      "description": "This little hare boy lives on a school bus in Cobore Village, on the outskirts of the Ketchup Kingdom, a country run by kids, for kids. He lives there as one of the “Dropper”, he is an outcast because he dislikes tomatoes. He’s optimistic and a bit gullible, but his courage will be tested once he and his girlfriend Patharan set out to explore the dangerous Toy Ruins, kicking off an exciting Miracle Adventure!",
      "bigName": "DeMille"
    },
    {
      "id": 1180,
      "name": "Tomatrio",
      "games": "Tomato Adventure (2002 - GBA)",
      "series": "Other",
      "description": "These three colourful fellows just want to help DeMille and Patharam change their minds about tomatoes. They also serve different roles in the game. The fully-ripe Redtoma is the narrator of the story, the half-cooked Tomallow will instruct DeMille and Patharan on how to capture enemies, and the unripe Tomagreen makes helpful signs to guide them on their journey; when he manages to stay awake, that is.",
      "bigName": "Tomatrio"
    },
    {
      "id": 1181,
      "name": "Starfy",
      "games": "Densetsu no Stafy (2002 – GBA)",
      "series": "Other",
      "description": "Neither a star nor a starfish, it’s just Starfy! He is the 7-year old prince of the Pufftop Kingdom, and he surely acts his age. He’s clumsy, he’s naïve, he has his head in the clouds way too often, but when his kingdom is in trouble he is always quick to act! At first, his adventures revolved around saving Pufftop Kingdom from the evil genie Ogura, but he has since helped other kingdoms against other villains. He even teamed up with Wario once!",
      "bigName": "Starfy"
    },
    {
      "id": 1182,
      "name": "Starly",
      "games": "Densetsu no Stafy 3 (2004 – GBA)",
      "series": "Other",
      "description": "Starfy’s younger sister, though she often acts older. She’s more responsible than her brother, but also rude and impolite. Nevertheless, she’s always pushing Starfy to do his best, in fact, she was the one who gave Starfy and Moe the – quite literal – push that they needed to stop Ogura when he was freed a third time. Starly can also do things that her brother can’t, such as crawling, wall jumping and performing a Low Spin.",
      "bigName": "Starly"
    },
    {
      "id": 1183,
      "name": "Moe",
      "games": "Densetsu no Stafy (2002 – GBA)",
      "series": "Other",
      "description": "Starfy’s best friend and partner in his adventures, although he is not usually very thrilled about it. More often than not, he’d rather be treasure hunting than saving the world. He’s kind of a jerk, and always has an angry expression on his face, but don’t judge him too harshly. He’s had a rough life, and beneath that thick shell beats a heart of gold. He also hosts his own talk show, “The Moe Show”.",
      "bigName": "Moe"
    },
    {
      "id": 1184,
      "name": "Old Man Lobber",
      "games": "Densetsu no Stafy (2002 – GBA)",
      "series": "Other",
      "description": "This elderly lobster once saved the world from the evil genie Ogura along with Starfy’s father, and now he helps the young Starfy achieve the same goal. With every adventure, Old Man Lobber will teach Starfy old and new techniques as well as give him helpful advice along the way. Don’t underestimate him because he’s old, though, he can also be quite a formidable opponent.",
      "bigName": "Old Man Lobber"
    },
    {
      "id": 1185,
      "name": "Mermaid",
      "games": "Densetsu no Stafy (2002 – GBA)",
      "series": "Other",
      "description": "Hi hi! A good friend to Starfy and his pals, this helpful little mermaid has aided them in all of their adventures. You can usually find her inside her signature purple clam shell, at various points throughout a level. If you approach her, she’ll help out by saving your progress and restoring all of your health. I wonder if her little clam knows how to jam.",
      "bigName": "Mermaid"
    },
    {
      "id": 1186,
      "name": "Mattel",
      "games": "Densetsu no Stafy 4 (2006 – DS)",
      "series": "Other",
      "description": "The fish of Starfy’s eye. Mattel is a princess of the Amy Kingdom, which lived in peace until the evil Degil invaded and took control of the kingdom’s power source, the Mon Amour Stone. Hearing of Starfy’s adventures against evil, Mattel promptly swam to Pufftop Kingdom to ask for his help. Of course, Starfy is more than eager to help, especially someone so cute! They do make quite the adorable couple, don’t they?",
      "bigName": "Mattel"
    },
    {
      "id": 1187,
      "name": "Cupid",
      "games": "Sennen Kazoku (2005 - GBA)",
      "series": "Other",
      "description": "If you think Cupid is only about making people fall in love, you haven’t met this Cupid yet. This angel was tasked by God with taking care of a family throughout multiple generations, and to do this, Cupid’s arrows need to do a lot more than creating couples. He’s got arrows for most situations: some can make the target work harder, change their mood, or drive them toward a goal. All to assure that the family leads a prosperous life.",
      "bigName": "Cupid"
    },
    {
      "id": 1188,
      "name": "Lil' Blue",
      "games": "Chee-Chai Alien (2001 - GBC)",
      "series": "Other",
      "description": "A cute little race of aliens called the Chaliens live on the Petit Galaxy, a tiny galaxy which looks like a pig’s nose when you see it from Earth. You can use the Infrared Port of the Game Boy Color to find the Chaliens hiding in artificial lights, then you can capture and collect them. Lil’ Blue is just one of the Chailiens, the very first one, in fact! You can also find him and other Cchailiens in other games, like Nonono Puzzle Chalien.",
      "bigName": "Lil' Blue"
    },
    {
      "id": 1189,
      "name": "Yama",
      "games": "The Tower SP (2005 - GBA)",
      "series": "Other",
      "description": "Yama is short for Yamanouchi, the CEO of the Yamanouchi Group, the best construction company around. He is giving you the great task of building an enormous skyscraper filled with offices, hotel rooms, entertainment centres, and so much more, and populate it with as many people as you can. Unfortunately, he’s only giving you so much money to do this with, so you’re going to need to put your management skills to the test if you wish to complete the job.",
      "bigName": "Yama"
    },
    {
      "id": 1190,
      "name": "Jill & the Drill Dozer",
      "games": "Drill Dozer (2005 - GBA)",
      "series": "Other",
      "description": "After her father Doug is ambushed and injured by a rival gang called the Skullkers, Jill takes up the leadership of their righteous bandit gang, the Red Dozers. She then sets off to retrieve the precious Red Diamond, given to her by her mother and stolen by the Skullkers. To do this, Jill mounts the Drill Dozer, and with it, she can drill through blocks, skip over gaps, and even deflect enemy bullets.",
      "bigName": "Jill & the Drill Dozer"
    },
    {
      "id": 1191,
      "name": "Pocket Football Player",
      "games": "Calciobit (2005 - GBA)",
      "series": "Other",
      "description": "These cute little pixelated football players have a big dream, of being football champions and winning the coveted World Cup Classic. Unfortunately, they can’t do it themselves, they need a manager that’ll help them train and guide them through their careers to allow them to become better players. That’s where you come in; analyse and pick players, devise a training regime, and lead them to the championship!",
      "bigName": "Pocket Football Player"
    },
    {
      "id": 1192,
      "name": "Karate Joe",
      "games": "Rhythm Tengoku (2006 - GBA)",
      "series": "Other",
      "description": "“UH! Time for some training.” Karate Joe is the star of the first minigame in the Rhythm Heaven series, Karate Man, and has appeared in some form in every title, and in more games than any other. He practices his karate moves by punching and kicking several objects that are being thrown at him, including flower pots, stones and even bombs. He must master karate quickly, or else his father will not let him leave the house. His father is a very strict trainer.",
      "bigName": "Karate Joe"
    },
    {
      "id": 1193,
      "name": "The Wandering Samurai",
      "games": "Rhythm Tengoku (2006 - GBA)",
      "series": "Other",
      "description": "This honorable warrior travels the world defending towns from the forces of evil. Evil Demons come at night and intend to attack the town, but the samurai stands in their way, slicing them in half with perfect rhythm. In the morning, all that’s left of the monsters are piles of rubble, which mystify the villagers. None know what the samurai does for them, but he doesn’t do it for the recognition.",
      "bigName": "The Wandering Samurai"
    },
    {
      "id": 1194,
      "name": "Wandering Samurai (Rhythm Heaven Fever)",
      "games": "Rhythm Heaven Fever (2011 - Wii)",
      "series": "Other",
      "description": "What would drive an evil demon to steal a child’s pinwheel? Malice? Greed? Loneliness? Whatever the reason, that’s what they did, and though the loss may seem small, the courageous wandering samurai wasted no time going to retrieve it. Hopefully, his sword still has the same rhythm. Later, these same demons would go on to steal a little girl’s bunny. Now that’s just mean.",
      "bigName": "Wandering Samurai (Rhythm Heaven Fever)"
    },
    {
      "id": 1195,
      "name": "Sick Beats Doctor",
      "games": "Rhythm Tengoku (2006 - GBA)",
      "series": "Other",
      "description": "This doctor is on the verge of an important medical breakthrough. However, a virus outbreak threatens to destroy all of his work. The doctor must protect a fragile micro-organism from the virus onslaught, by attacking them with forks. All to the beat of the music of course. Music is actually very important to the doctor’s work, as he found groovy tunes lead to healthier patients. That’s why he always keeps a boom box in his office.",
      "bigName": "Sick Beats Doctor"
    },
    {
      "id": 1196,
      "name": "The Chorus Kids",
      "games": "Rhythm Heaven (2008 - DS)",
      "series": "Other",
      "description": "These three singing kids are trying to form a chorus together, but they have a few problems. Though they are all talented, one of them keeps getting nervous and singing out of tune. They were discovered performing on the streets by one of the members of the Clappy Trio, who was amazed by their performance and became their conductor, in order to help them improve. One day, they’ll hit the big time!",
      "bigName": "The Chorus Kids"
    },
    {
      "id": 1197,
      "name": "Munchy Monk",
      "games": "Rhythm Heaven (2008 - DS)",
      "series": "Other",
      "description": "This guy is a monk who is adamant about becoming a master of the ancient art of eating dumplings, Yes, specifically dumplings. He can eat them so fast you wouldn’t believe. You may think that’s not too useful a skill, but it has helped him in surprising ways. A bear actually gave up on eating him because it was too weirded out by his dumpling destruction. Plus, he got hired for a job at the circus to boot!",
      "bigName": "Munchy Monk"
    },
    {
      "id": 1198,
      "name": "Reporter & Wrestler",
      "games": "Rhythm Heaven Fever (2011 - Wii)",
      "series": "Other",
      "description": "“Wubbadubbadub, is that true?” this young reporter has just landed a big interview with a famous wrestler, right after an important match. This is a big chance for her, but it looks like he is actually the one who’s nervous, as he seems to just give a monosyllabic answer to every question. Doesn’t seem to matter much, though, as the press and the fans love the interview anyway. Whoa, you go big guy!",
      "bigName": "Reporter & Wrestler"
    },
    {
      "id": 1199,
      "name": "Baxter & Forthington",
      "games": "Rhythm Heaven Fever (2011 - Wii)",
      "series": "Other",
      "description": "This dog and cat are big fans of badminton, but not just any game will do. They like to turn it up a notch by playing it in the sky, while riding airplanes. Sometimes, if you look up to the skies above the Rhythm Islands you can see them, batting the birdie back and forth (get it?). It’s probably a bit of a pain to recover it if it falls, though. Outside of the game, they’re good friends, though they often disagree on what to have for a snack.",
      "bigName": "Baxter & Forthington"
    },
    {
      "id": 1200,
      "name": "Sumo Brothers",
      "games": "Rhythm Heaven Megamix (2015 - 3DS)",
      "series": "Other",
      "description": "These two brothers train the ancient art of sumo together, and also practice some cool poses with their Inu-Sensei. They’re both equally strong, so matches are quite lengthy and intense. The one on the left doesn’t actually need glasses, he just started wearing them because people couldn’t tell him and his brother apart. He also noticed that the ladies pay more attention to him because of the glasses, but don’t tell his brother that!",
      "bigName": "Sumo Brothers"
    },
    {
      "id": 1201,
      "name": "Pig",
      "games": "Cubivore: Survival of the Fittest (2002 - Gamecube)",
      "series": "Other",
      "description": "In the world of the blocky Cubivores, one Killer Cubivore has climbed to the top of the food chain, and stripped the land of the Wilderness. If only you were strong enough to stop it, but you’re just a meagre blocky pig. But maybe, a distant offspring, after generations of mutations and natural selection, there might come a Cubivore that is powerful enough to topple the tyrant and become King of All Cubivores.",
      "bigName": "Pig"
    },
    {
      "id": 1202,
      "name": "Alexandra Roivas",
      "games": "Eternal Darkness: Sanity´s Requiem (2002 - Gamecube)",
      "series": "Other",
      "description": "A university student from Washington, Alexandra travels to her family’s estate after her grandfather is found brutally murdered. Exploring the mansion for clues, she finds a secret book bound by human skin, The Tome of Eternal Darkness. Reading it, she discovers a horrifying truth about the fate of the world.",
      "bigName": "Alexandra Roivas"
    },
    {
      "id": 1203,
      "name": "Mappo",
      "games": "Giftpia (2003 - Gamecube)",
      "series": "Other",
      "description": "This robot cop guards the jail of Nanashi Island and he really takes following the law to heart. And he does have one, just look at his chest! It’s his job to keep an eye on criminal rascals and keep them in line. When that no-good Pockle oversleeps through an important ceremony, costing the mayor millions of Mane, it is Mappo’s task to assure Pockle does the community service necessary to recoup the costs.",
      "bigName": "Mappo"
    },
    {
      "id": 1204,
      "name": "Sagi",
      "games": "Baten Kaitos Origins (2006 - Gamecube)",
      "series": "Other",
      "description": "Sagi is a Spiriter, someone with the ability to communicate and bond with the mysterious Guardian Spirit, a being from beyond the fourth wall. Sagi joined the army at the age of fifteen to help provide for his struggling family, but he is soon recruited to be an assassin by The Dark Service, an elite paramilitary group of the Alfard Empire. In order to prove himself, Sagi is given a suspicious assignment: kill Emperor Olgan.",
      "bigName": "Sagi"
    },
    {
      "id": 1205,
      "name": "Milly",
      "games": "Baten Kaitos Origins (2006 - Gamecube)",
      "series": "Other",
      "description": "Her full name is actually Milliarde, a daughter of nobility who feels too constrained by her life and decides to run away and see the world. She first meets Sagi and his friend Guillo while helping them escape the city of Mintaka after they are framed for the assassination of the Emperor. She may not be as strong as her friends, but she can hit a lot more often, quickly overwhelming enemies with her twin maces.",
      "bigName": "Milly"
    },
    {
      "id": 1206,
      "name": "Chibi-Robo",
      "games": "Chibi-Robo : Plug Into Adventure (2005 - Gamecube)",
      "series": "Other",
      "description": "Chibi-Robo is a helpful little robot designed by Citrusoft, and when we say little, we mean it! He measures in at only 4 inches tall, but as they say, good things come in small packages. He can cook, clean, tend a garden, restore artifacts, or even defend the world from aliens if necessary! Chibi-Robo does whatever it takes to make everyone happy, happy, happy!",
      "bigName": "Chibi-Robo"
    },
    {
      "id": 1207,
      "name": "Super Chibi-Robo",
      "games": "Chibi-Robo : Plug Into Adventure (2005, GameCube)",
      "series": "Other",
      "description": "The rare \"Super Chibi-Robo\" title is not given out lightly. All Chibi-Robo units are competing with each other on the Chibi-Ranking to see who can accrue the most Happy Points, which are physical manifestations of someone's happiness. The number one ranked helper is assigned the \"Super Chibi-Robo\" title and a corresponding badge. In Chibi-Robo : Zip Lash, Super Chibi-Robo is a handy invincibility mode if you're having trouble with a tough level.",
      "bigName": "Super Chibi-Robo"
    },
    {
      "id": 1208,
      "name": "Telly",
      "games": "Chibi-Robo : Plug Into Adventure (2005 - Gamecube)",
      "series": "Other",
      "description": "Every hard worker needs a manager, and Chibi-Robo is no different. This flying robot comes in all sorts of shapes and sizes, with each new model of Chibi-Robo getting a new style of Telly. Chibi-Robo is a bot of few words, so if you want to talk to him, it's going to have to be through his manager. This Telly is from Chibi-Robo : Zip Lash. His strange jetpack seems to allow him to fly freely in both normal gravity and zero gravity conditions, as he was originally designed to assist a Chibi-Robo unit living on a space station.",
      "bigName": "Telly"
    },
    {
      "id": 1209,
      "name": "Drake Redcrest",
      "games": "Chibi-Robo : Plug Into Adventure (2005 - Gamecube)",
      "series": "Other",
      "description": "What IS justice? What IS evil? Space Hunter Drake Redcrest struggles with this question on his galactic quest for justice. Nevertheless, he fights for what he believes is right as he patrols... the living room? It turns out that this is not the real Drake Redcrest, but an action figure! The toys in the Sanderson household mysteriously come to life when nobody is around. I wonder what other toys Chibi-Robo might meet while living there?",
      "bigName": "Drake Redcrest"
    },
    {
      "id": 1210,
      "name": "Chibi-Tot",
      "games": "Chibi-Robo! Photo Finder (3DS - 2013)",
      "series": "Other",
      "description": "These little scraps are a rambunctious bunch of robotic youngsters. In Chibi-Robo! Photo Finder, the tots play a hide-and-seek game with Chibi-Robo. Chibi-Robo has to find them, or bear their childish heckling. The tots return in Chibi-Robo! Zip Lash. Even during a hostile alien invasion, the Chibi-Tots will run and hide from Chibi-Robo. Be careful, Chibi-Robo! One hit from your cord and these bots are tot-ally busted!",
      "bigName": "Chibi-Tot"
    },
    {
      "id": 1211,
      "name": "Barbara the Bat",
      "games": "Daigasso! Band Brothers (2004 - DS)",
      "series": "Other",
      "description": "Don’t be fooled by her human-like appearance, Barbara is, indeed, a bat. Barbara is the manager of the GB Music store in Waruwaru town, and will mostly try to sell you things. She is arrogant and pampered, but a talented guitarist, notheless. She’ll even teach you how to play, but she may have some hidden intentions behind it. She’s also said to have some interest in magic. By the way, the name of her store stands for “Great Barbara”, NOT anything else!",
      "bigName": "Barbara the Bat"
    },
    {
      "id": 1212,
      "name": "Ashley Robbins",
      "games": "Trace Memory (2005 - DS)",
      "series": "Other",
      "description": "Ashley is the teenage daughter of biology and memory researchers Richard and Sayoko Robbins, but she’s lived with her Aunt Jessica ever since her parents disappeared when she was three. When Ashley is about to turn fourteen, she receives a package by mail, supposedly from her long-missing father. Inside, is one of her father’s DTS machines and a letter telling her to meet him on the mysterious Blood Edward Island.",
      "bigName": "Ashley Robbins"
    },
    {
      "id": 1213,
      "name": "Hanenbow",
      "games": "Electroplankton (2005 - DS)",
      "series": "Other",
      "description": "Contrary to games like Super Mario or Kirby, Electroplankton doesn't have any enemies, or even a plot. It is simply a musical tool, made to create little jingles in different modes. One of said modes is Hanenbow, where the player (wouldn't it be musician?) changes the leaves' angle to control the trajectory of the Hanenbow. Depending on the angles, you can create quite the soothing orchestra.",
      "bigName": "Hanenbow"
    },
    {
      "id": 1214,
      "name": "Dr. Kawashima",
      "games": "Brain Age: Train Your Brain in Minutes a Day! (2005 - DS)",
      "series": "Other",
      "description": "This floating, polygonal head is actually the brilliant scientist Dr. Kawashima! He will be your guide through the mega-popular Brain Age series, and will help not only to assess the age of your brain (which is hopefully close to your actual age), but also keep it healthy through daily exercises. Fun fact: Dr. Kawashima is based on the real-life neuroscientist Dr. Ryuta Kawashima, whose work inspired the Brain Age series.",
      "bigName": "Dr. Kawashima"
    },
    {
      "id": 1215,
      "name": "Dr. Kawashima (Concentration Training)",
      "games": "Brain Age: Concentration Training (2012 - 3DS)",
      "series": "Other",
      "description": "In the third day of the Brain Age series, Dr. Kawashima will help you improve your concentration rather than overall brain functionality. Some of these new exercises can get pretty difficult, even devilish, some might say, and Dr. Kawashima will take on a demonic appearance to match it. Also, for the first time, the doctor has hands and a voice! Maybe someday he’ll get the rest of his body.",
      "bigName": "Dr. Kawashima (Concentration Training)"
    },
    {
      "id": 1216,
      "name": "Dr. Lobe",
      "games": "Big Brain Academy (2005 - DS)",
      "series": "Other",
      "description": "Dr. Lobe is the headmaster of the Big Brain Academy, a school aimed at turning tiny brains into huge, hefty ones. “Embiggerate your brain for life” is their motto. Just like Brain Age’s Dr. Kawashima, Dr. Lobe wants to help you improve your brain. His methods may be a bit a different, but they’re just as effective, focusing on more approachable, puzzle-like activities than Kawashima’s rigorous cognitive exercises.",
      "bigName": "Dr. Lobe"
    },
    {
      "id": 1217,
      "name": "Ouendan",
      "games": "Osu! Tatakae! Ouendan! (2005 - DS)",
      "series": "Other",
      "description": "Is life getting you down? Do you feel like you’re not strong to take on the challenges life throws at you? What you need is an Ouendan, a Cheer Squad! This mysterious group always show up on time to give you the motivation to conquer any challenge, no matter how absurd, usually with a catchy song to go with it. These men here are, from left to right: Atsushi Saitou, Ryuuta Ippongi, and Ittetsu Suzuki, the Normal Difficulty Ouendan. Go! Fight! Cheer Squad!",
      "bigName": "Ouendan"
    },
    {
      "id": 1218,
      "name": "Ouendan Cheerleaders",
      "games": "Osu! Tatakae! Ouendan! (2005 - DS)",
      "series": "Other",
      "description": "When the challenges are much too extreme, when the motivation needed is much too great, when the songs are much too difficult; in short, when you put the game on the Hardest difficulty, the Ouendan sends its most elite squad: the Ouendan Cheerleaders! From left to right: Aoi Kanda, Sayaka Amemiya, and Anna Lindhurst, these gals can cheer like no one else, and conquer even the most difficult of stages.",
      "bigName": "Ouendan Cheerleaders"
    },
    {
      "id": 1219,
      "name": "Elite Beat Agents",
      "games": "Elite Beat Agents (2006 - DS)",
      "series": "Other",
      "description": "“Agents are GO!” The West has its own version of the Ouendan, the Elite Beat Agents! When this secret government agency detects people in need of any kind, Commander Khan sends its agents to help. How do they do that? Through song, of course! Agents Derek, J and Morris, pictured here, as well as Agents Spin and Chieftan, always have exactly the song to help you through that rough spot, whether you’re just finishing a movie, or fighting a giant golem.",
      "bigName": "Elite Beat Agents"
    },
    {
      "id": 1220,
      "name": "Elite Beat Divas",
      "games": "Elite Beat Agents (2006 - DS)",
      "series": "Other",
      "description": "Is “Jumpin’ Jack Flash” too easy for you? Can you beat that final stage with your eyes closed and the sound off? Well give the highest difficulty a try, then. These are the American equivalent of the Ouendan Cheerleaders, the Elite Beat Divas, reporting for duty! Agents Missy, Starr and Foxx, these jet packing divas are sure to give even the most skilled players a challenge, just to play them you have to prove yourself by clearing every other difficulty level!",
      "bigName": "Elite Beat Divas"
    },
    {
      "id": 1221,
      "name": "Satoru Amatsubo",
      "games": "Project Hacker: Kakusei (2006 - DS)",
      "series": "Other",
      "description": "Satoru Amatsubo and his childhood friend Rina are university students and extremely talented hackers, being even capable of hacking into the government’s computer system. This talent catches the eye of the internet crime-fighting agency GIS, and Satoru and Rina are recruited as detectives for the agency. Now, Satoru uses his remarkable hacking skills to stop cyber-terrorists and criminals, including the legendary hacker Blitz.",
      "bigName": "Satoru Amatsubo"
    },
    {
      "id": 1222,
      "name": "Warrior Mech Gauss",
      "games": "Chosoju Mecha MG (2006 - DS)",
      "series": "Other",
      "description": "This is only one of the hundreds of Marionation Gears, or MGs, that the hero Martin can control during his missions. Like the others, it is a giant, powerful robot which can be controlled from within, but this isn’t just any MG. The Warrior Mech Gauss is a masterpiece created by the acclaimed Auguist from Wheel Workshop. This MG is equipped with the Magic Sword Farsys and the Vortex Ultra Weapon and can even turn into a car!",
      "bigName": "Warrior Mech Gauss"
    },
    {
      "id": 1223,
      "name": "Kyle Hyde",
      "games": "Hotel Dusk: Room 215 (2007 - DS)",
      "series": "Other",
      "description": "Nevada, 1979. Kyle Hyde is a former NYC detective and current Red Crown door-to-door salesman. This bitter and sarcastic man is actually using his salesman job to secretly look for his ex-partner Bradley, who is presumed dead, though Hyde believes he’s still alive. This search eventually leads him to a rundown motel called Hotel Dusk. While staying there, he is given Room 215, about which many strange rumours have been spread.",
      "bigName": "Kyle Hyde"
    },
    {
      "id": 1224,
      "name": "Kurikin",
      "games": "Kurikin Nano Island Story (2007 - DS)",
      "series": "Other",
      "description": "You are a student at Nano Academy, a university located in, where else, Nano Island. The Island is notable for being home to a plethora of bacteria, like this one here. There are over one hundred species of the Solid, Edge and Veil types. Your job in researching these bacteria is to use your stylus and microphone to catch them, raise them and even pit them in battles against other bacteria. It’s like Pokémon, except they’re really, really small.",
      "bigName": "Kurikin"
    },
    {
      "id": 1225,
      "name": "Hsien",
      "games": "Sujin Taisen (2007 - DS)",
      "series": "Other",
      "description": "This strange old man also goes by Master Fu Sui, and yes he is indeed a Master, of the ancient Chinese art of Feng Shui. If you can open your mind to it, he’ll instruct you on the ways of Feng Shui, teaching you how to make sequence links, number links, loop links and even lockout links, which are worth double the points! What? That doesn’t sound like Feng Shui to you? Well, which one of you is the Master here? Exactly.",
      "bigName": "Hsien"
    },
    {
      "id": 1226,
      "name": "Magkid",
      "games": "Slide Adventure MAGKID (2007 - DS)",
      "series": "Other",
      "description": "You may think Magkid looks rather unimpressive, but that’s because he is just a fridge magnet, a LIVING fridge magnet! One night, a freak storm struck an ordinary house and it somehow caused all sorts of ordinary objects to come to life, and they began to wreak havoc. Magkid won’t stand for that! Well, actually, he won’t stand at all; he can only move by sliding across flat surfaces, but maybe you can help him move around so he can save the house.",
      "bigName": "Magkid"
    },
    {
      "id": 1227,
      "name": "Aisya",
      "games": "ASH: Archaic Sealed Heat (2007 - DS)",
      "series": "Other",
      "description": "Aisya is the princess of the Kingdom of Millinear and, sadly, its only survivor. On the day of her coronation, the fearsome Fire Serpent appeared and kills the entire population, except for Aisya. However, the princess discovers that she is able to summon her friends for the ash, bounding their real souls to fake bodies made from it. On that moment, it is clear what she must do: revive the entire population of Millinear.",
      "bigName": "Aisya"
    },
    {
      "id": 1228,
      "name": "Num Diddly",
      "games": "Make 10: A Journey of Numbers (2008 - DS)",
      "series": "Other",
      "description": "Imagine a math book… dozing off already? We can’t blame you, the protagonist of this DS game also fell asleep while reading a math book, but when they woke up, they were greeted by a bunch of pixies from the Make 10 kingdom, asking if they added up to ten. When they answered correctly, one of the pixies, Num Diddly, asked the protagonist to come with him to the kingdom, so as to help the other pixies know if they made 10.",
      "bigName": "Num Diddly"
    },
    {
      "id": 1229,
      "name": "Idea",
      "games": "Soma Bringer (2008 - DS)",
      "series": "Other",
      "description": "A mysterious girl found by Pharzuph Division 7 on their first mission. Found in a large pod, Idea has no memories of anything other than her own name. However, she possesses latent and powerful abilities related to Soma, the mystical force that is the source to the energy that feeds everyday life. Because of this, Idea is recruited as a new member for Division 7, where she forms a strong bond with the other recruit, Welt.",
      "bigName": "Idea"
    },
    {
      "id": 1230,
      "name": "Welt",
      "games": "Soma Bringer (2008 - DS)",
      "series": "Other",
      "description": "Welt is a fresh-faced recruit at Pharzuph, a dedicated military force aimed at investigating and combating the Visitors, mysterious monsters which take the form of corrupted plants and animals. Despite his young age, his enthusiasm earned him a spot at the elite Division 7 of Pharzuph. Welt is a Battler, a class that is proficient with melee weapons and who take a lot of damage in combat.",
      "bigName": "Welt"
    },
    {
      "id": 1231,
      "name": "T-Rex",
      "games": "Fossil Fighters (2008 - DS)",
      "series": "Other",
      "description": "#001 in the Fossilary, T-Rex is a fire type Vivosaur with a toolkit that can scare opponents, replenish health from its allies, and attack up to three targets simultaneously. While it is one of the strongest close range Vivosaurs, it cannot fight in support without severely hindering its allies. When given a Miraculous Fossil in Champions, it super evolves into T-Rex Lord, becoming even stronger in exchange for costlier attacks.",
      "bigName": "T-Rex"
    },
    {
      "id": 1232,
      "name": "Nibbles",
      "games": "Fossil Fighters Frontier (2014 - 3DS)",
      "series": "Other",
      "description": "This young Vivosaur was dormant inside Professor Llittle’s lab, until the Hero and their friend Nate awakened him. Nibbles runs off into Fossil Park, but him and the hero form a strong bond after saving each other’s lives. Captain Stryker, leader of the Wardens which investigate Vivosaur activity, assigns Nibbles to be the Hero’s partner. Although, Captain Stryker may know something about Nibbles which the Hero doesn’t…",
      "bigName": "Nibbles"
    },
    {
      "id": 1233,
      "name": "Glory of Heracles Hero",
      "games": "Glory of Heracles (2008 - DS)",
      "series": "Other",
      "description": "In Ancient Greece, the age of mythology, this nameless youth awoke washed up on a beach, with no memories except for one: someone calling him “Heracles”. He also discovers that he is immortal, and soon comes across four other immortals with no memory of who they are. Together, they set out on a journey for answers. Nymphs say they sense the spirit of Heracles in the young man, but could he really be the mythical hero?",
      "bigName": "Glory of Heracles Hero"
    },
    {
      "id": 1234,
      "name": "Heracles",
      "games": "Glory of Heracles (2008 - DS)",
      "series": "Other",
      "description": "The real Heracles! Or at least, that’s what he calls himself. This loud, obnoxious and spirited man certainly looks the part, being incredibly strong and also immortal. However, he also has no real memory of who he is, except for one: of someone calling him “Heracles”. But wait, that’s the same memory the Hero had! But how can they both have the same memory? And which one of them is the real Heracles?",
      "bigName": "Heracles"
    },
    {
      "id": 1235,
      "name": "Chef (Personal Trainer: Cooking)",
      "games": "Shaberu! DS Oyori Navi (2006 – DS)",
      "series": "Other",
      "description": "Games come in all sorts of genres, but few could be described as “digital cookbooks”. Yet, that’s precisely what the personal Trainer: Cooking series is. With each game comes numerous recipes and instructions, as well as this helpful little Chef who guides you through them. He can also speak and hear your voice, so that he can still help even if you keep the DS at a safe distance from the stove while cooking.",
      "bigName": "Chef (Personal Trainer: Cooking)"
    },
    {
      "id": 1236,
      "name": "Shop Assistant",
      "games": "Style Savvy (2008 - DS)",
      "series": "Other",
      "description": "Throughout the Style Savvy series, you play as different people in completely unrelated places, but the setup is usually the same. You are hired as an assistant in the most fashionable boutique around. Your keen eye for style quickly allows you to ascend in the fashion world and become the owner of your own boutique. The life of a fashionista is not easy, as you constantly need to manage stock, promote your store, and most importantly, keep your customers happy!",
      "bigName": "Shop Assistant"
    },
    {
      "id": 1237,
      "name": "Vince",
      "games": "Art Academy First Semester (2009 - DS)",
      "series": "Other",
      "description": "His name is Vincent, but he likes to be called Vince. He’s a simple man, living a quiet life with his beloved dog Bacon, but he is actually a master artist, and he’s more than willing to impart his wisdom to you. He’s a tender, humble teacher, and if you prove to be just as good as a student, you’ll soon be painting some masterpieces of your own. Every great artist has to start somewhere, right?",
      "bigName": "Vince"
    },
    {
      "id": 1238,
      "name": "Looksley",
      "games": "Looksley's Line Up (2010 - DS)",
      "series": "Other",
      "description": "Dear, oh dear! You know who that is, don’t you? Why, it’s Looksley, the world-famous author! This rabbit may be a great writer, but he sure has trouble finding things. He needs to find a number of letters and objects to research for his next book, but it’s hard seeing them from his tiny perspective. Hey, you there, the giant holding the DS! Maybe if you move the DS around you might see a different angle of the map!",
      "bigName": "Looksley"
    },
    {
      "id": 1239,
      "name": "Prince Saruno",
      "games": "Tsukutte Utau: Saru Band (2010 - DS)",
      "series": "Other",
      "description": "Prince Saruno and his loyal subjects of the Sarudamon Kingdom have formed a band together. They seem excited to perform but there’s one problem: they don’t have any music to play! Why don’t you make them some? You can write the lyrics, compose the melodies, and select from several backing tracks and arrangements. Make and sing, the crowd will love it. Music is no monkey business, after all.",
      "bigName": "Prince Saruno"
    },
    {
      "id": 1240,
      "name": "Mio & Mayu Amakura",
      "games": "Fatal Frame II: Crimsom Butterfly (2003 - PS2)",
      "series": "Other",
      "description": "Mio and Mayu are twin sisters visiting their favourite childhood playspot before it is lost to the construction of a dam. However, when they follow a crimson butterfly into the woods, they found themselves on Minakami Village, which had disappeared many years ago. Mayu falls under the village’s spell and Mio, whilst looking for her, learns the village is inhabited by tormented spirits, who are targeting the twins for some sinister purpose.",
      "bigName": "Mio & Mayu Amakura"
    },
    {
      "id": 1241,
      "name": "Yuri Kozukata",
      "games": "Fatal Frame: Maiden of Black Water (2014 - Wii U)",
      "series": "Other",
      "description": "Yuri is a 19-year-old teen with the ability to see spirits, which she has had ever since surviving the accident that killed her family. Yuri works at an antique store with her friend Hisoka Kurosawa, but when Hisoka disappears on the infamously haunted Mt. Hikami, Yuri picks up the Camera Obscura and sets out to look for her. While on the mountain, Yuri battles frightening spirits and uncovers the mystery of the Maiden of Black Water.",
      "bigName": "Yuri Kozukata"
    },
    {
      "id": 1242,
      "name": "Nick",
      "games": "Captain Rainbow (2009 - Wii)",
      "series": "Other",
      "description": "Nick may seem like an ordinary guy, but he is actually the alter-ego of the mighty CAPTAIN RAINBOW!... What? You never heard of him? Not surprising, Captain Rainbow isn’t as popular as he used to be. That’s why Nick sets out for the famous Mimin Island, where dreams are said to come true. There, he meets a number of characters who have also been forgotten, including Lip, Hikari, Takamaru and Little Mac!",
      "bigName": "Nick"
    },
    {
      "id": 1243,
      "name": "Captain Rainbow",
      "games": "Captain Rainbow (2009 - Wii)",
      "series": "Other",
      "description": "“Shouri no sain ni niji wo kakero! Mirai wa ima, Captain Rainbow!” Everyone, young or old, knew the lyrics to the Captain Rainbow theme song by heart. This tokusatsu-styled hero always saved the day with his trusty yoyo, but his star has faded in recent years. Now Nick, his alter ego, has gone to Mimin Island in hopes of restoring his popularity, but there, Captain Rainbow will have the chance to prove that he is a real hero!",
      "bigName": "Captain Rainbow"
    },
    {
      "id": 1244,
      "name": "Raymond Bryce",
      "games": "Disaster: Day of Crisis (2009 - Wii)",
      "series": "Other",
      "description": "A US Marine turned International Rescue Team member turned public servant, Raymond Bryce used to make a living performing rescue operations in dangerous scenarios, but he retired when he was unable to save his partner Steve during a mission. However, when Steve’s sister Lisa is kidnapped by a terrorist organization who threatens to detonate multiple stolen nukes, Ray comes back to service to repay his debt to Steve, and save the country.",
      "bigName": "Raymond Bryce"
    },
    {
      "id": 1245,
      "name": "Beetle",
      "games": "Excitebots: Trick Racing (2009 - Wii)",
      "series": "Other",
      "description": "The Excite series has come a long way. No more motorbikes and trucks, now it’s all about insect robots! We’re not sure how it went from point A to point B, but it’s still the same fun. One of those robots is the Beetle, which is appropriately named. It’s a good, all-around bot but has one of the longest turbo times in the game. It’s also the narrowest of all bots, which make it perfect to going through trees and getting lots of stars!",
      "bigName": "Beetle"
    },
    {
      "id": 1246,
      "name": "Orville",
      "games": "Takt of Magic (2009 - Wii)",
      "series": "Other",
      "description": "After a millennia of peace, the land of Entrall is thrown into internal revolt, and from it, a ruthless empire is born. Five years later, on Orville’s 17th birthday, his village is attacked and taken over by the Empire’s forces. In roder to save the world, Orville must realize his skills as a Caster, a person with the power to use powerful magic, and summon objects to aid them on their quest.",
      "bigName": "Orville"
    },
    {
      "id": 1247,
      "name": "Frey & Freya",
      "games": "Zangeki no Reginleiv (2010 - Wii)",
      "series": "Other",
      "description": "These two siblings are actually gods of Asgard. Frey is a master with melee weapons, while Freya is more proficient with bows and magic, even though she is still a bit dependant on her brother. When a race of giants begins to attack a village of humans in Midgard, Frey & Freya descend in order to help them. But this battle was to be only the beginning of what would escalate into the most cataclysmic of cosmic events: Ragnarok.",
      "bigName": "Frey & Freya"
    },
    {
      "id": 1248,
      "name": "Ando-Kensaku",
      "games": "And-Kensaku (2010 - Wii)",
      "series": "Other",
      "description": "Imagine a party game in which you and your friends play minigames based on how frequently a word is searched on Google. Sounds fun, right? Well, Ando here thinks so. This cute little robot with an even cuter voice is the presenter of And-Kensaku, and he’ll guide through a variety of minigames, all of them based on Google search terms. Go and test your knowledge, but Ando gets pretty concerned if you’re in risk of losing, so do well, for him.",
      "bigName": "Ando-Kensaku"
    },
    {
      "id": 1249,
      "name": "Zip",
      "games": "Flingsmash (2010 - Wii)",
      "series": "Other",
      "description": "The tropical Suthon Island, which protects the world from harm, is under attack, and only the mythical pearls can save it. The legendary hero who once saved the island, has been sealed away inside a chest but it is time for him to arise and… wait, that’s him? He looks like a pinball! But that’s a good description. Zip can be flung and paddled around with the Wii Remote, and he’ll fly across the screen, destroying obstacles and enemies on the way!",
      "bigName": "Zip"
    },
    {
      "id": 1250,
      "name": "Zael",
      "games": "The Last Story (2011 - Wii)",
      "series": "Other",
      "description": "Orphaned at an early age when his city was ravaged, Zael earned his living by joining a mercenary group led by his best friend Dagran. However, he dreams of bettering his life by becoming a Knight. While one a mission, Zael receives the mystical “Mark of the Outsider”, branded on his right arm, granting him magical powers. Soon after, he meets a woman named Calista, and this meeting would change both their lives forever.",
      "bigName": "Zael"
    },
    {
      "id": 1251,
      "name": "Calista",
      "games": "The Last Story (2011 - Wii)",
      "series": "Other",
      "description": "Calista is the niece and only heir to Count Arganan, ruler of Lazulis Island. However, she is unhappy with her noble life, as her uncle keeps her a prisoner within the castle and has forcibly engaged her to the vain Count Jirall. Wishing to escape to a life of freedom and adventure, she sneaks out of the castle and into town. It is there, while dodging her uncle’s guards, that she meets Zael and his band of mercenaries.",
      "bigName": "Calista"
    },
    {
      "id": 1252,
      "name": "Aeron",
      "games": "Pandora's Tower (2011 - Wii)",
      "series": "Other",
      "description": "A young knight of the Kingdom of Athos, he was wounded in battle and nursed back to health by Elena, a woman of the enemy nation. Despite the war between their countries, they fell in love with each other and began to live together. But when Elena is afflicted with a terrible curse, Aeron takes up the whip-like Oraclos Chain weapon, and braves the fearsome Thirteen Towers to slay the Masters and gather the flesh that will cure his beloved Elena.",
      "bigName": "Aeron"
    },
    {
      "id": 1253,
      "name": "Elena",
      "games": "Pandora's Tower (2011 - Wii)",
      "series": "Other",
      "description": "A young woman from Elyria who falls in love with an enemy soldier. Their life together was peaceful until Elena was cursed while performing at her village’s Harvest Festival. The curse will slowly transform her into a hideous monster, and she needs to regularly consume the repulsive flesh of the creatures of the Towers, just to keep it at bay. However, only the hearts of the Towers’ masters can cure her completely, but she might not have enough time…",
      "bigName": "Elena"
    },
    {
      "id": 1254,
      "name": "Toy Poodle",
      "games": "nintendogs (2005 - DS)",
      "series": "Other",
      "description": "Aww! Look at this little guy! This is a nintendog, a virtual dog that you can pet with your stylus, and train with your voice. This French breed is very intelligent and athletic, making excellent show dogs. You can sign him up on the Athletic Trial, I’m sure you can get first place and win lots of prizes. You may also recognize the Toy Poodle as the nintendog that sometimes gets in front of your match in this game, but can you really be mad at him?",
      "bigName": "Toy Poodle"
    },
    {
      "id": 1255,
      "name": "French Bulldog",
      "games": "nintendogs + cats (2011 - 3DS)",
      "series": "Other",
      "description": "Despite the name, this breed of nintendog actually originated in England! They were very popular in France due to their big, round eyes and their ears, which stick straight up, that they began to be bred there until they picked up the name “French Bulldog”. It is also not actually a bull, just a dog. This nintendog is very independent, but they love to be around their owners just the same.",
      "bigName": "French Bulldog"
    },
    {
      "id": 1256,
      "name": "Labrador Retriever",
      "games": "nintendogs (2005 - DS)",
      "series": "Other",
      "description": "This English breed of nintendog is highly prized for its intelligence, kind nature, and trust in its owners, not only making great pets and companions, but also perfect assistant dogs. They also get along well with pretty much any other breed. In short, they’re very good boys. They were also the first nintendog to appear as an Assist Trophy in Smash, and had their own version of nintendogs, Labrador & Friends. These guys really have it all.",
      "bigName": "Labrador Retriever"
    },
    {
      "id": 1257,
      "name": "BlueShark",
      "games": "Steel Diver (2011 - 3DS)",
      "series": "Other",
      "description": "Sometime during the 20th century, a rouge nation launched an attack on nearby countries. The “Steel Divers”, a secret fleet of submarines composed of the best and brightest of all the world’s navies, was created to combat this threat. One of the submarines tasked with that mission is the ND-03 BlueShark, a medium sized sub piloted by Ben Triton. It is a balanced, all-round sub, perfect for any mission.",
      "bigName": "BlueShark"
    },
    {
      "id": 1258,
      "name": "Mallo",
      "games": "Pushmo (2011 - 3DS)",
      "series": "Other",
      "description": "What a mess! A mean bully has trapped innocent children inside the Pushmos of Pushmo Park, and Papa Blox is too old to get them out! Enter Mallo: this little sumo wrestler is an expert at pushing and pulling, so he’s perfect for solving the Pushmo puzzles and rescuing the trapped children. Some of these puzzles may even form some interesting pictures! Now why did that mean bully have to pull such a nasty prank?",
      "bigName": "Mallo"
    },
    {
      "id": 1259,
      "name": "Sakura Samurai",
      "games": "Sakura Samurai: Art of the Sword (2011 - 3DS)",
      "series": "Other",
      "description": "Long ago, a god who lived in the mountains had one daughter, princess Cherry Blossom, who lived in a cherry tree. She watched over the land, but when an evil being kidnapped her, the land grew violent without her care. Long after the princess had been forgotten, this wandering samurai came across the tree, the hero destined to save the princess and to be known as the Sakura Samurai!",
      "bigName": "Sakura Samurai"
    },
    {
      "id": 1260,
      "name": "Nikki",
      "games": "Swapnote (2011 - 3DS)",
      "series": "Other",
      "description": "“Welcome to Swapnote!” is how Nikki greets you when you first start said 3DS application. She would teach you how to send notes and doodles to your friends, and she’d even send you some notes herself. You can bet that at least she will remember your birthday. You may have received a note, saying that she’s going away for a while, but she’s just moved on to bigger and better things. You can even find her in Smash, and she’ll make some nice doodles for you.",
      "bigName": "Nikki"
    },
    {
      "id": 1261,
      "name": "Noise",
      "games": "Kiki Trick (2012 - Wii)",
      "series": "Other",
      "description": "Wow, those are some big headphones! But it turns out Noise isn’t just listening to his favourite tunes, he’s going to need those headphones if he’s to be the host of the Wii game Kiki Trick. In this game, Noise is constantly trying to talk to people, but their voices are so distorted, you can barely understand what they say! It’s your time to be a good listener and help Noise find the answer to their questions.",
      "bigName": "Noise"
    },
    {
      "id": 1262,
      "name": "Dillon",
      "games": "Dillon's Rolling Western (2012 - 3DS)",
      "series": "Other",
      "description": "Known as the Red Flash, Dillon is the fastest armadillo in the West, and possibly the fastest animal in general. He might even give Sonic a roll for his money! He is 0% talk and 100% action, but he is a kind armadillo at heart. He’s in need of money, so he takes a job as a ranger, protecting towns from the threat of the ever advancing Grocks. If you're lucky, he'll even protect you if you summon him as an Assist Trophy in Smash.",
      "bigName": "Dillon"
    },
    {
      "id": 1263,
      "name": "Russ",
      "games": "Dillon's Rolling Western (2012 - 3DS)",
      "series": "Other",
      "description": "Russ is Dillon’s loyal squirrel friend. He goes anywhere Dillon goes and does enough talking for both of them. I wonder if he ever closes his mouth? Regardless, Russ is still a capable ranger. Though not as Strong as Dillon, he is a capable inventor, and usually flies over the battlefield on his machine, keeping the earthbound Dillon informed of the Grocks’ movement. Together, they make a truly unstoppable team.",
      "bigName": "Russ"
    },
    {
      "id": 1264,
      "name": "Shovel Knight",
      "games": "Shovel Knight (2014 - Wii U)",
      "series": "Other",
      "description": "Steel thy shovel! Shovel Knight's game digs up the graphic style of classic and beloved NES titles, despite being released in 2014. With his trusty Shovel Blade, he buries all in his path, figuratively and literally. His fighting style is truly groundbreaking! You might meet him yourself, he's available to use as your ace of spades in the assist trophies. For Shovelry!",
      "bigName": "Shovel Knight"
    },
    {
      "id": 1265,
      "name": "Shield Knight",
      "games": "Shovel Knight (2014 - Wii U)",
      "series": "Other",
      "description": "Shovel Knight's partner in knighthood. Together, she and Shovel Knight roamed the land, searching for treasures and adventure. However, rumors of a cursed amulet led the pair to the Tower of Fate, where an accident caused Shield Knight to disappear from the face of the earth. A grieving Shovel Knight retreats to the countryside, but when the powerful Enchantress takes over the land, Shovel Knight sets out to make things right and rescue her. Her shield provides both defensive and offensive abilities, like allowing Shovel Knight to reach higher places.",
      "bigName": "Shield Knight"
    },
    {
      "id": 1266,
      "name": "Plague Knight",
      "games": "Shovel Knight (2014 - Wii U)",
      "series": "Other",
      "description": "Sometimes, the bomb is mightier than the sword. Deep in the recesses of his alchemical lab, Plague Knight perfects concoctions both poisonous and explosive. With an arry of mysterious and magical bottles at his side, Plague Knight can be considered the black sheep of \"The Order of No Quarter\". Being a boss at first, Plague Knight eventually got his time to shine as the protagonist of the Plague of Shadows campaign.",
      "bigName": "Plague Knight"
    },
    {
      "id": 1267,
      "name": "King Knight",
      "games": "Shovel Knight (2014 - Wii U)",
      "series": "Other",
      "description": "After the Order of No Quarter's successful raid on Pridemoor Keep, King Knight instantly took over as the kingdom's lord. With his regal looks, flowing cape, and (fake) golden crown, King Knight's ego is certainly higher than his skills at maintaining a monarchy. Along with Specter Knight, he is one of the first members of the Enchantress' forces fought by the brave Shovel Knight.",
      "bigName": "King Knight"
    },
    {
      "id": 1268,
      "name": "Specter Knight",
      "games": "Shovel Knight (2014 - Wii U)",
      "series": "Other",
      "description": "A fearsome Knight from the Order of No Quarter. Ruling over the Lich Yard, Specter Knight wields a giant scythe at all times which he may use as a boomerang during battle. His attacks are fast and disorienting, making him a tough and cruel foe. Specter Knight is a playable character in the Specter of Torment campaign, portraying his grim past as a cunning thief.",
      "bigName": "Specter Knight"
    },
    {
      "id": 1269,
      "name": "Culdra",
      "games": "Culdcept (1997 - Saturn)",
      "series": "Other",
      "description": "Culdra, absolute goddess of all worlds, and creator of Culdcept, the book of creation and destruction. From its pages emerge creatures which can be controlled by those called Cepters, who fight with each for control of the book in battles awfully to card games. But don’t be mistaken, these card games are serious business, as he who controls Culdcept can inherit the goddess’ power, including the power to create – or destroy – worlds.",
      "bigName": "Culdra"
    },
    {
      "id": 1270,
      "name": "Goligan",
      "games": "Culdcept II (2001 - Dreamcast)",
      "series": "Other",
      "description": "One day, Culdra, using her powers to foresee the future, saw that an evil Cepter by the name of Geminigh would use his power to destroy the entire universe. So, Culdra sent Goligan, her magical talking staff, to the world of Soldaria in order to find a Cepter who can prevent him from achieving his goal. Goligan talks quite a bit for a staff, even a magical one, but he’s more than capable of guiding you on your journey to Culdcept.",
      "bigName": "Goligan"
    },
    {
      "id": 1271,
      "name": "Allen",
      "games": "Culdcept Revolt (2016 - 3DS)",
      "series": "Other",
      "description": "On the streets of the city of Celphas, this young man was found unconscious by members of the rebel group Free Bats. When he awoke, he remembered nothing but his name, but he soon recalls his powers as a Cepter. Now, he searches for clues about his past while joining the Free Bats and aiding them in their fight against the city’s tyrannical ruler, Count Kraniss.",
      "bigName": "Allen"
    },
    {
      "id": 1272,
      "name": "Tempo",
      "games": "Harmoknight (2013 - 3DS)",
      "series": "Other",
      "description": "Oh no! The peaceful, music-loving planet of Melodia is under attack by the alien Gargan and his army of Noizoids, filling the planet with awful noise! The planet’s old hero, Master Woodwin, entrusts his pupil Tempo with a music note staff, and sends him on his way to Symphony City to give the staff to a potential Harmoknight that can restore harmony to Melodia. But maybe, Tempo has enough rhythm to become a Harmoknight himself.",
      "bigName": "Tempo"
    },
    {
      "id": 1273,
      "name": "Eddy",
      "games": "Fluidity: Spin Cycle (2012 - 3DS)",
      "series": "Other",
      "description": "Once, a wizard dropped a few Rainbow Spirits on his encyclopaedia, to bring its beautiful illustrations to life. However, when the wizard was away, evil Goop dropped onto the book, trapping the spirits inside and draining their power. It is now up to Eddy, a pure-hearted Water Spirit living in a bottle on the wizard's shelf, to enter the book, clean up the Goop, and rescue the poor spirits.",
      "bigName": "Eddy"
    },
    {
      "id": 1274,
      "name": "Kageshina Kurabe",
      "games": "Nintendoji (2012 - DS)",
      "series": "Other",
      "description": "Kageshina Kurabe is a young monk with a big task ahead of him. The holy relics of his shrine have been stolen and taken deep inside a dungeon, and his country is on the brink of collapse because of it. The kappa who is the main priest at his temple, entrusts him with crawling deep within the dungeon and retrieve the holy treasures. These treasures, by the way, are all familiar Nintendo items, like a bottle of Moo Moo Milk, one of DK’s barrels, and even Mario’s cap!",
      "bigName": "Kageshina Kurabe"
    },
    {
      "id": 1275,
      "name": "Inuji Darumeshi",
      "games": "Darumeshi Sports Store (2013 - 3DS)",
      "series": "Other",
      "description": "Inuji used to be one of the best baseball players around, but now his glory days are behind him and he opened up the Darumeshi Sports Shop where he sells sports goods. Unfortunately, kids these days are more into video games than sports, so his shop isn’t doing too well. He’s trying to sell baseball videogames now, but they haven’t sold either. Unfortunately, his personal life is doing about as well as his business.",
      "bigName": "Inuji Darumeshi"
    },
    {
      "id": 1276,
      "name": "Rusty Slugger",
      "games": "Rusty's Real Deal Baseball (2014 - 3DS)",
      "series": "Other",
      "description": "In the western version of Darumeshi Sports Store, Inuji was changed to a different looking dog called Rusty Slugger, of Rusty Slugger’s Sports Shack. His story, unfortunately, is the same. With his business failing, his wife left him, and he now cares alone for his ten identical kids. He’ll try to sell you some baseball games for pretty steep prices, but maybe if you help him out with his problems, he’ll reconsider them.",
      "bigName": "Rusty Slugger"
    },
    {
      "id": 1277,
      "name": "Arcade Bunny",
      "games": "Nintendo Badge Arcade (2015 - 3DS)",
      "series": "Other",
      "description": "This friendly rabbit is your guide in the Nintendo 3DS application Nintendo Badge Arcade. In it, players could earn a variety of badges with which they could decorate their 3DS home screen. To win them, however, you must play a claw game, but you only have a limited number of plays. The Bunny will teach you how to use the claw, and he is very glad to do it too. In fact, he described working at the Badge Arcade as his dream job",
      "bigName": "Arcade Bunny"
    },
    {
      "id": 1278,
      "name": "Qbby",
      "games": "BoxBoy! (2015 - 3DS)",
      "series": "Other",
      "description": "Even a little white box can be a big hero. In the hit puzzle platform video game, BoxBoy!, for the 3DS. Qbby can't jump very far or very high but he does have one thing on his side: BOXES!! Qbby can spawn boxes out of him and use them to do many different things. Cover up pits, shield from lasers, and latch onto ledges. Is there anything these boxes can't do? Qbby likes to make little cameos in Kirby series games. Makes sense as they were both made by HAL Laboratories.",
      "bigName": "Qbby"
    },
    {
      "id": 1279,
      "name": "Henry Fleming",
      "games": "Code Name: S.T.E.A.M. (2015 - 3DS)",
      "series": "Other",
      "description": "The protagonist of the classic American Civil War novel The Red Badge of Courage. After the war, Henry was attacked by eldritch aliens and rescued by President Lincoln , who recruits him along with other classic literary characters to the Strike Team Eliminating the Alien Menace (or S.T.E.A.M.) to use steampunk technology and destroy the alien threat. We're not sure why they left that part out of the novel.",
      "bigName": "Henry Fleming"
    },
    {
      "id": 1280,
      "name": "Tethu",
      "games": "Ever Oasis (2017 - 3DS)",
      "series": "Other",
      "description": "Tethu is a young Seedling whose home is in a vast desert threatened by the forces of Chaos. The Oasis is the last safe haven against Chaos, but its chief, and Tethu’s brother, Nour is kidnapped and the Oasis falls. Tethu then teams up with the Water Spirit Esna to build an Oasis of their own. Together, they must bring more villagers to expand the Oasis, and also fight to keep it safe from monsters.",
      "bigName": "Tethu"
    },
    {
      "id": 1281,
      "name": "Esna",
      "games": "Ever Oasis (2017 - 3DS)",
      "series": "Other",
      "description": "Esna is the last of the Water Spirits, and a Child of the Great Tree, much like the Seedling Tethu. Together, they work to build the last Oasis, but Esna’s nature brings her some limitations. She can only be seen by other Children, who are Chiefs of Oases, so she can’t communicate with the Oasis’ other residents. She always wanted to see what lies beyond her lake, but unfortunately, is unable to physically leave her spring.",
      "bigName": "Esna"
    },
    {
      "id": 1282,
      "name": "Musashi",
      "games": "Sushi Striker: The Way of Sushido (2018 – 3DS/Switch)",
      "series": "Other",
      "description": "Musashi lives in a world where all sushi was banned, following the bitter and violent Sushi Struggles which ravaged the world. Musashi joins the Sushi Liberation Front, a resistance which battles the oppressive Empire, and partners up with a sprite (one of the spirits from which sushi comes) to become a mighty sushi striker! Musashi’s plate-throwing skills will be put to the test as he (or she) fights to destroy the empire and revert its ban on delicious sushi.",
      "bigName": "Musashi"
    },
    {
      "id": 1283,
      "name": "Wonder-Red",
      "games": "The Wonderful 101 (2013 - Wii U)",
      "series": "Other",
      "description": "Will Wedgeworth is just a mild-mannered Elementary School Teacher, right? Well, looks can be deceiving. With one thought, Will dons his Centinel-Suit in a mere 3 billionths of a second and becomes Wonder-Red, the current leader of the Wonderful 100! These 100 heroes use their Centinel-Suits together to form massive objects in their effort to defend earth from invading aliens.",
      "bigName": "Wonder-Red"
    },
    {
      "id": 1284,
      "name": "Wonder-Blue",
      "games": "The Wonderful 101 (2013 - Wii U)",
      "series": "Other",
      "description": "Wonder-Blue is one of the main members of the CENTINELS Planetary Secret Service. Having a strong sense of identity and a stronger dislike for authority, Blue is not the easiest Wonderful One to deal with in the organization; however, his ability to act quickly and make decisions in a blink of an eye has led to a chain of successful missions. His real name is Eliot Hooker and he is an LAPD Detective outside of being a superhero.",
      "bigName": "Wonder-Blue"
    },
    {
      "id": 1285,
      "name": "Rayman",
      "games": "Rayman (1995 - Jaguar)",
      "series": "Other",
      "description": "The Glade of Dreams is a strange and surreal world created by the dreams of the divine Polokus. When he started having bad dreams, the nymphs tried to create a being to defend the world. The result was Rayman! Due to some bumbling on the part of the nymphs, he was born without limbs, but that never stopped him moving around and saving the day. He’s a bit more unruly than the nymphs would have liked, but you make do with what you get.",
      "bigName": "Rayman"
    },
    {
      "id": 1286,
      "name": "Clip & Snip",
      "games": "Snipperclips (2017 - Switch)",
      "series": "Other",
      "description": "This cute little couple star in the puzzle game Snipperclips. Clip (the yellow one) and Snip (the pink one) must work together to solve puzzles in order to progress through the levels. They do this by cutting each other up into a variety of shapes that can be used to interact with the level. Don’t worry, this doesn’t hurt them at all, in fact, they seem to have a lot of fun do it. They are full of charming expressions too! Just be careful not to get a paper cut!",
      "bigName": "Clip & Snip"
    },
    {
      "id": 1287,
      "name": "Spring Man",
      "games": "ARMS (2017 - Nintendo Switch)",
      "series": "Other",
      "description": "Spring Man is a young ARMS athlete who trains at Spring Gym. With arms made of spring, it's no wonder they call him \"The Bouncer\". At first glance, it may be hard to take this guy seriously, but don't underestimate him. He can perma-charge in a pinch and he even got into Smash Ultimate as an Assist Trophy. If you summon him, make sure to cheer him on!",
      "bigName": "Spring Man"
    },
    {
      "id": 1288,
      "name": "Ribbon Girl",
      "games": "ARMS (2017 - Nintendo Switch)",
      "series": "Other",
      "description": "Hailing from Ribbonics Records, it's \"The Airess\", Ribbon Girl! This peppy pop star can jump over and over without touching the ground, like she's dancing in the air. If she wins the Grand Prix, she's promised her fans a championship concert in the ring! Everyone loves her especially the ARMS commentator, Biff, but don't tell anyone about that.",
      "bigName": "Ribbon Girl"
    },
    {
      "id": 1289,
      "name": "Min Min",
      "games": "ARMS (2017 - Nintendo Switch)",
      "series": "Other",
      "description": "Let us all welcome \"The Ramen Bomber\", Min Min! A member of ramen royalty, she hails from the famed Mintendo Noodle House! Unlike other fighters in the ARMS league, she uses her spicy kicks to deflect oncoming attacks. She even has the power to turn her left noodle arm into a dragon with enough charge! Can her fiery personality bring the championship belt home to her family's restaurant!?",
      "bigName": "Min Min"
    },
    {
      "id": 1290,
      "name": "Twintelle",
      "games": "ARMS (2017 - Nintendo Switch)",
      "series": "Other",
      "description": "Roll out the red carpet! \"The Silver Screen Queen\" herself, Twintelle is making an entrance. Unlike other members of the ARMS league, she doesn't have extendable arms and instead her hair has the ability to preform powerful punches. While dashing, she has the ability to slow down time to avoid attacks, even in mid-air. Not content with her acting awards and accolades, she's gonna use those stretchy silver locks of hers to secure a victory.",
      "bigName": "Twintelle"
    },
    {
      "id": 1291,
      "name": "Ninjara",
      "games": "ARMS (2017 - Nintendo Switch)",
      "series": "Other",
      "description": "Ninjara is a Japanese ninja student at the Rasen Ninjutsu University, training to become a ninja. The ninjutsu techniques of this \"Student of Stealth\" allow him to dodge attacks by disappearing in thin air, making fools of his opponents. Competing in the ARMS Grand Prix doubles as his senior project, and that challenge is the one thing he won't hide from.",
      "bigName": "Ninjara"
    },
    {
      "id": 1292,
      "name": "Boss Galaga",
      "games": "Galaga (1981 - Arcade)",
      "series": "Other",
      "description": "The Galaga are a dangerous species of alien invaders bent on conquering the Earth. Only a lone spacecraft stand between them and the planet, but the Galaga are strong and come in a smartly planned formation. The Boss Galaga is the most powerful of the group, not only can it take two hits, but it can even capture the ship if it’s not careful! In Smash Ultimate, it appears as an item, and Pac-Man can use its tractor beam as a grab.",
      "bigName": "Boss Galaga"
    },
    {
      "id": 1293,
      "name": "Bomberman",
      "games": "Bomberman (1983 - MSX)",
      "series": "Other",
      "description": "Bomberman, also known as White Bomberman, is one of a race of robotic people who live on Planet Bomber. Like other of his kind, Bomberman has the ability to generate bombs, which explode in a familiar, cross-shaped pattern. With them, he has been able to defend the planet and even the galaxy from many a threat. Just be careful when laying those bombs, you don’t want to get caught in your own blast!",
      "bigName": "Bomberman"
    },
    {
      "id": 1294,
      "name": "Akira",
      "games": "Virtua Fighter (1993 - Arcade)",
      "series": "Other",
      "description": "Akira Yuki is the star of the Virtua Fighter series and a master of the Chinese martial art Bajiquan. He is hot-blooded and impulsive, and can also be a bit naïve, but no one can doubt his fighting sklills. Akira is a mainstay of the World Fighting Tournament, and many opponents have fallen to his infamous tetsuzanko move. Iin Smash Ultimate, he appars as an Assist Trophy, taking on his polygonal appearance of the original Virtua Fighter. Juunen Haiyan Dayo!",
      "bigName": "Akira"
    },
    {
      "id": 1295,
      "name": "Rathalos",
      "games": "Monster Hunter (2004 - PS2)",
      "series": "Other",
      "description": "Rathalos is a species of Flying Wyvern known to monster hunters everywhere as the “King of the Skies”. Many hunters have fallen to its fiery breath and poisonous claws, and yet, many more keep pursuing it, as defeating one is a reward in and of itself. Rathalos can be found in many different environments, and they're extremely territorial, so their nests must be approached with great care.",
      "bigName": "Rathalos"
    },
    {
      "id": 1296,
      "name": "Shantae",
      "games": "Shantae (2002 - GBC)",
      "series": "Other",
      "description": "The half-genie guardian of Scuttle Town, Shantae works tirelessly to thwart the plans of the treacherous Risky Boots. When not fighting off pirates, she is a professional belly dancer; when she is fighting threats, she has a wide array of abilities at her disposal, the most notable being the ability to transform into many different things, including an elephant, a mermaid, and even a car! She also uses her hair and dancing skills for attacks. The citizens of Scuttle Town have nothing to worry about with Shantae on their side!",
      "bigName": "Shantae"
    },
    {
      "id": 1297,
      "name": "Risky Boots",
      "games": "Shantae (2002 - GBC)",
      "series": "Other",
      "description": "Watch out for this lass! She's the self-proclaimed and unchallenged \"Queen of the Seven Seas\" herself, Risky Boots! Risky Boots is the archenemy of Shantae, and often opposes her in every game in the Shantae series. She is known all throughout Sequin Land for her love of wealth, power, and all things shiny. She commands an endless army of Tinkerbats who follow her order without question.",
      "bigName": "Risky Boots"
    },
    {
      "id": 1298,
      "name": "Partner Pikachu",
      "games": "Pokémon Let's Go, Pikachu! (2018 - Switch)",
      "series": "Pokemon",
      "description": "In Pokemon Let's Go Pikachu, you will explore the colorful Kanto region with your special little Partner Pikachu. This Pikachu is different to other Pikachus with its increased stats and its ability to learn three exclusive moves: Zippy Zap, Floaty Fall, and Splishy Splash. Pikachu is also the only Pokemon in your party that you can dress up and groom. Have fun in your Pokemon battles with Partner Pikachu!",
      "bigName": "Partner Pikachu"
    },
    {
      "id": 1299,
      "name": "Partner Eevee",
      "games": "Pokémon Let's Go, Eevee! (2018 - Switch)",
      "series": "Pokemon",
      "description": "In Pokemon Let's Go Eevee, you will explore the colorful Kanto region with your special little Partner Eevee. This Eevee is different to other Eevees with its increased stats and its ability to learn eight exclusive moves like Bouncy Bubble, Glitzy Glow, and Buzzy Buzz just to name a few. Eevee also can learn secret techniques that will help you progress through the region. Have fun on your Pokemon quest with Partner Eevee!",
      "bigName": "Partner Eevee"
    },
    {
      "id": 1300,
      "name": "Dice Block",
      "games": "Mario Party (1998 - N64)",
      "series": "Mario",
      "description": "This is the dice Mario and folk use to move spaces during games of Mario Party. The dice originally went from 1 to 10, although it now goes from 1 to 6 in a more traditional manner. Some items can give you double or even triple dice, and getting the same number in a row from these items can get you a nice coin bonus.",
      "bigName": "Dice Block"
    },
    {
      "id": 1301,
      "name": "River Survival",
      "games": "Super Mario Party (2018 - Switch)",
      "series": "Mario",
      "description": "Mario Party is normally competitive, but what happens when you cram four characters into a raft rushing down a river? You get River Survival! This cooperative mode has four players steering the raft downstream, but there's a time limit! Steering into minigame balloons and winning the minigame will result in more time. The river even has branching paths!",
      "bigName": "River Survival"
    },
    {
      "id": 1302,
      "name": "Golden Dash Mushroom",
      "games": "Mario Kart 64 (1996 - Nintendo 64)",
      "series": "Mario",
      "description": "Hey! That's not a Golden Dash Mushroom! That is simply known as a Golden Mushroom, although the two varieties look almost identical and have similar effects: When the Golden Dash Mushroom is used, it provides a single, powerful boost in speed, while Golden Mushrooms provide as many small boosts as you like for a limited period of time, or heal or grant coins. The former is used in parties, while the latter is used mostly in kart races.",
      "bigName": "Golden Dash Mushroom"
    },
    {
      "id": 1303,
      "name": "Piranha Plant",
      "games": "Super Mario Bros. (1985 - NES)",
      "series": "Mario",
      "description": "Piranha Plants are a long-running enemy in the Super Mario series. They're typically immobile, but get too close and you'll find out they have a fierce bite! The Piranha Plant who entered the fray in Super Smash Bros. is very special: it embodies the traits of many different sub-species of Piranha Plant, such as Poison Piranha Plants, Fire Piranha Plants, and Jumping Piranha Plants. All of these along with its unique ability to run around freely make it a terrifying force!",
      "bigName": "Piranha Plant"
    }
  ]


        }
      };
    }
  }
}
export const SpiritsMixin = dedupingMixin(internalMixinNavigation);