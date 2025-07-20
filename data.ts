const audioSources = [
  "/sounds/effects/intro.mp3",
  "/sounds/voices/voice1_en.mp3",
  "/sounds/countdown.mp3",
  "/sounds/voices/voice1_so.mp3",
  "/sounds/voices/voice2_en.mp3",
  "/sounds/voices/voice2_so.mp3",
  "/sounds/voices/voice3_en.mp3",
  "/sounds/voices/voice3_so.mp3",
  "/sounds/effects/pause1.mp3",
  "/sounds/voices/voice4_en.mp3",
  "/sounds/voices/voice4_so.mp3",
  "/sounds/voices/voice5_en.mp3",
  "/sounds/voices/voice5_so.mp3",
  "/sounds/voices/voice6_en.mp3",
  "/sounds/voices/voice6_so.mp3",
  "/sounds/effects/pause2.mp3",
  "/sounds/voices/voice7_en.mp3",
  "/sounds/voices/voice7_so.mp3",
  "/sounds/voices/voice8_en.mp3",
  "/sounds/voices/voice8_so.mp3",
  "/sounds/voices/voice9_en.mp3",
  "/sounds/voices/voice9_so.mp3",
  "/sounds/voices/voice10_en.mp3",
  "/sounds/voices/voice10_so.mp3",
  "/sounds/effects/end.mp3",
  "/videos/bkg.mp4"
];

 

import { textContent } from "./words";


import { durations } from "./durations";


const data = [

    //BkG-video
{ "type": "video", "src": "videos/bk.mp4", "startFrame": 0, "duration": 99999, "mute": true, "loop": true, "background": true, "effect": "none", "style": { "filter": "blur(8px) brightness(0.6)" } },

  
  { "type": "text", "text": "Somali Quiz", "fontFamily": "Arial Black", "whitespace": "nowrap", "fontSize": 150, "color": "Red", "position": { "x": 540, "y": 250 }, "startFrame": 0, "duration": 99999, "effect": "fadeIn", "style": { "textShadow": "4px px 1px rgba(0, 0, 0, 1)", "WebkitTextStroke": "8px black" } }, // added shadow + stroke

        { "type": "text", "text": "Easy", "fontFamily": "Arial Black", "whitespace":"nowrap", "fontSize": 100, "color": "Green", "position": { "x": 230, "y": 400 }, "startFrame": 0, "duration": 99999, "effect": "fadeIn","style": { "textShadow": "2px 2px 4px rgba(0,0,0,0.6)", "WebkitTextStroke": "4px black" } }, // added shadow + stroke },
    
            { "type": "text", "text": "Medium", "fontFamily": "Arial Black", "whitespace":"nowrap", "fontSize": 100, "color": "Yellow", "position": { "x": 300, "y": 900 }, "startFrame": 0, "duration": 99999, "effect": "fadeIn","style": { "textShadow": "2px 2px 4px rgba(0,0,0,0.6)", "WebkitTextStroke": "4px black" } }, // added shadow + stroke }, },

                { "type": "text", "text": "Hard", "fontFamily": "Arial Black", "whitespace":"nowrap", "fontSize": 100, "color": "Red", "position": { "x": 240, "y": 1400 }, "startFrame": 0, "duration": 99999, "effect": "fadeIn","style": { "textShadow": "2px 2px 4px rgba(0,0,0,0.6)", "WebkitTextStroke": "4px black" } }, // added shadow + stroke }, },

  { "type": "text", "text": "1.", "fontFamily": "Arial Black", "whitespace":"nowrap", "fontSize": 70, "color": "white", "position": { "x": 200, "y": 525 }, "startFrame": 0, "duration": 99999, "effect": "fadeIn","style": { "textShadow": "2px 2px 4px rgba(0,0,0,0.6)", "WebkitTextStroke": "2px black" } }, // added shadow + stroke }, },
  { "type": "text", "text": "2.", "fontFamily": "Arial Black", "whitespace":"nowrap", "fontSize": 70, "color": "white", "position": { "x": 200, "y": 625 }, "startFrame": 0, "duration": 99999, "effect": "fadeIn","style": { "textShadow": "2px 2px 4px rgba(0,0,0,0.6)", "WebkitTextStroke": "2px black" } }, // added shadow + stroke }, },
  { "type": "text", "text": "3.", "fontFamily": "Arial Black", "whitespace":"nowrap", "fontSize": 70, "color": "white", "position": { "x": 200, "y": 725 }, "startFrame": 0, "duration": 99999, "effect": "fadeIn","style": { "textShadow": "2px 2px 4px rgba(0,0,0,0.6)", "WebkitTextStroke": "2px black" } }, // added shadow + stroke }, },


    { "type": "text", "text": "4.", "fontFamily": "Arial Black", "whitespace":"nowrap", "fontSize": 70, "color": "white", "position": { "x": 200, "y": 1025 }, "startFrame": 0, "duration": 99999, "effect": "fadeIn","style": { "textShadow": "2px 2px 4px rgba(0,0,0,0.6)", "WebkitTextStroke": "2px black" } }, // added shadow + stroke }, },
  { "type": "text", "text": "5.", "fontFamily": "Arial Black", "whitespace":"nowrap", "fontSize": 70, "color": "white", "position": { "x": 200, "y": 1125 }, "startFrame": 0, "duration": 99999, "effect": "fadeIn","style": { "textShadow": "2px 2px 4px rgba(0,0,0,0.6)", "WebkitTextStroke": "2px black" } }, // added shadow + stroke }, },
  { "type": "text", "text": "6.", "fontFamily": "Arial Black", "whitespace":"nowrap", "fontSize": 70, "color": "white", "position": { "x": 200, "y": 1225 }, "startFrame": 0, "duration": 99999, "effect": "fadeIn","style": { "textShadow": "2px 2px 4px rgba(0,0,0,0.6)", "WebkitTextStroke": "2px black" } }, // added shadow + stroke }, },


    { "type": "text", "text": "7.", "fontFamily": "Arial Black", "whitespace":"nowrap", "fontSize": 70, "color": "white", "position": { "x": 200, "y": 1525 }, "startFrame": 0, "duration": 99999, "effect": "fadeIn","style": { "textShadow": "2px 2px 4px rgba(0,0,0,0.6)", "WebkitTextStroke": "2px black" } }, // added shadow + stroke }, }, },
  { "type": "text", "text": "8.", "fontFamily": "Arial Black", "whitespace":"nowrap", "fontSize": 70, "color": "white", "position": { "x": 200, "y": 1625 }, "startFrame": 0, "duration": 99999, "effect": "fadeIn","style": { "textShadow": "2px 2px 4px rgba(0,0,0,0.6)", "WebkitTextStroke": "2px black" } }, // added shadow + stroke }, },
  { "type": "text", "text": "9.", "fontFamily": "Arial Black", "whitespace":"nowrap", "fontSize": 70, "zindex":"2", "color": "white", "position": { "x": 200, "y": 1725 }, "startFrame": 0, "duration": 99999, "effect": "fadeIn","style": { "textShadow": "2px 2px 4px rgba(0,0,0,0.6)", "WebkitTextStroke": "2px black" } }, // added shadow + stroke }, },
   

  
 // Intro
  { "type": "audio", "src": audioSources[0], "startFrame": 0, "duration": durations.intro, "volume": 1 },

  // 1
  { "type": "audio", "src": audioSources[1], "startFrame": durations.intro, "duration": durations.voice1_en, "volume": 1 },
  { "type": "audio", "src": audioSources[2], "startFrame": durations.intro + durations.voice1_en, "duration": durations.countdown, "volume": 1 },
  { "type": "audio", "src": audioSources[3], "startFrame": durations.intro + durations.voice1_en + durations.countdown, "duration": durations.voice1_so, "volume": 1 },
  { "type": "text", "text": textContent[0], "fontFamily": "Arial Black", "fontSize": 70, "textAlign": "left", "color": "Green", "position": { "x": 360, "y": 525 }, "startFrame": durations.intro + durations.voice1_en + durations.countdown, "duration": 99999, "effect": "fadeIn","style": { "textShadow": "2px 2px 4px rgba(0,0,0,0.6)", "WebkitTextStroke": "2px black" } }, // added shadow + stroke }, },

  // 2
  { "type": "audio", "src": audioSources[4], "startFrame": durations.intro + durations.voice1_en + durations.countdown + durations.voice1_so, "duration": durations.voice2_en, "volume": 1 },
  { "type": "audio", "src": audioSources[2], "startFrame": durations.intro + durations.voice1_en + durations.countdown + durations.voice1_so + durations.voice2_en, "duration": durations.countdown, "volume": 1 },
  { "type": "audio", "src": audioSources[5], "startFrame": durations.intro + durations.voice1_en + durations.countdown + durations.voice1_so + durations.voice2_en + durations.countdown, "duration": durations.voice2_so, "volume": 1 },
  { "type": "text", "text": textContent[1], "fontFamily": "Arial Black", "fontSize": 70, "color": "Green","textAlign": "left", "position": { "x": 360, "y": 625 }, "startFrame": durations.intro + durations.voice1_en + durations.countdown + durations.voice1_so + durations.voice2_en + durations.countdown, "duration": 99999, "effect": "fadeIn","style": { "textShadow": "2px 2px 4px rgba(0,0,0,0.6)", "WebkitTextStroke": "2px black" } }, // added shadow + stroke }, },

  // 3
  { "type": "audio", "src": audioSources[6], "startFrame": durations.intro + durations.voice1_en + durations.countdown + durations.voice1_so + durations.voice2_en + durations.countdown + durations.voice2_so, "duration": durations.voice3_en, "volume": 1 },
  { "type": "audio", "src": audioSources[2], "startFrame": durations.intro + durations.voice1_en + durations.countdown + durations.voice1_so + durations.voice2_en + durations.countdown + durations.voice2_so + durations.voice3_en, "duration": durations.countdown, "volume": 1 },
  { "type": "audio", "src": audioSources[7], "startFrame": durations.intro + durations.voice1_en + durations.countdown + durations.voice1_so + durations.voice2_en + durations.countdown + durations.voice2_so + durations.voice3_en + durations.countdown, "duration": durations.voice3_so, "volume": 1 },
  { "type": "text", "text": textContent[2], "fontFamily": "Arial Black", "fontSize": 70, "color": "Green","textAlign": "left", "position": { "x": 360, "y": 725 }, "startFrame": durations.intro + durations.voice1_en + durations.countdown + durations.voice1_so + durations.voice2_en + durations.countdown + durations.voice2_so + durations.voice3_en + durations.countdown, "duration": 99999, "effect": "fadeIn","style": { "textShadow": "2px 2px 4px rgba(0,0,0,0.6)", "WebkitTextStroke": "2px black" } }, // added shadow + stroke }, },

  // Pause 1
  { "type": "audio", "src": audioSources[8], "startFrame": durations.intro + durations.voice1_en + durations.countdown + durations.voice1_so + durations.voice2_en + durations.countdown + durations.voice2_so + durations.voice3_en + durations.countdown + durations.voice3_so, "duration": durations.pause1, "volume": 1 },

  // 4
  { "type": "audio", "src": audioSources[9], "startFrame": durations.intro + durations.voice1_en + durations.countdown + durations.voice1_so + durations.voice2_en + durations.countdown + durations.voice2_so + durations.voice3_en + durations.countdown + durations.voice3_so + durations.pause1, "duration": durations.voice4_en, "volume": 1 },
  { "type": "audio", "src": audioSources[2], "startFrame": durations.intro + durations.voice1_en + durations.countdown + durations.voice1_so + durations.voice2_en + durations.countdown + durations.voice2_so + durations.voice3_en + durations.countdown + durations.voice3_so + durations.pause1 + durations.voice4_en, "duration": durations.countdown, "volume": 1 },
  { "type": "audio", "src": audioSources[10], "startFrame": durations.intro + durations.voice1_en + durations.countdown + durations.voice1_so + durations.voice2_en + durations.countdown + durations.voice2_so + durations.voice3_en + durations.countdown + durations.voice3_so + durations.pause1 + durations.voice4_en + durations.countdown, "duration": durations.voice4_so, "volume": 1 },
  { "type": "text", "text": textContent[3], "fontFamily": "Arial Black", "fontSize": 70, "color": "Yellow", "textAlign": "left","position": { "x": 360, "y": 1025 }, "startFrame": durations.intro + durations.voice1_en + durations.countdown + durations.voice1_so + durations.voice2_en + durations.countdown + durations.voice2_so + durations.voice3_en + durations.countdown + durations.voice3_so + durations.pause1 + durations.voice4_en + durations.countdown, "duration": 99999, "effect": "fadeIn","style": { "textShadow": "2px 2px 4px rgba(0,0,0,0.6)", "WebkitTextStroke": "2px black" } }, // added shadow + stroke }, },

  // 5
  { "type": "audio", "src": audioSources[11], "startFrame": durations.intro + durations.voice1_en + durations.countdown + durations.voice1_so + durations.voice2_en + durations.countdown + durations.voice2_so + durations.voice3_en + durations.countdown + durations.voice3_so + durations.pause1 + durations.voice4_en + durations.countdown + durations.voice4_so, "duration": durations.voice5_en, "volume": 1 },
  { "type": "audio", "src": audioSources[2], "startFrame": durations.intro + durations.voice1_en + durations.countdown + durations.voice1_so + durations.voice2_en + durations.countdown + durations.voice2_so + durations.voice3_en + durations.countdown + durations.voice3_so + durations.pause1 + durations.voice4_en + durations.countdown + durations.voice4_so + durations.voice5_en, "duration": durations.countdown, "volume": 1 },
  { "type": "audio", "src": audioSources[12], "startFrame": durations.intro + durations.voice1_en + durations.countdown + durations.voice1_so + durations.voice2_en + durations.countdown + durations.voice2_so + durations.voice3_en + durations.countdown + durations.voice3_so + durations.pause1 + durations.voice4_en + durations.countdown + durations.voice4_so + durations.voice5_en + durations.countdown, "duration": durations.voice5_so, "volume": 1 },
  { "type": "text", "text": textContent[4], "fontFamily": "Arial Black", "fontSize": 70, "color": "Yellow","textAlign": "left", "position": { "x": 360, "y": 1125 }, "startFrame": durations.intro + durations.voice1_en + durations.countdown + durations.voice1_so + durations.voice2_en + durations.countdown + durations.voice2_so + durations.voice3_en + durations.countdown + durations.voice3_so + durations.pause1 + durations.voice4_en + durations.countdown + durations.voice4_so + durations.voice5_en + durations.countdown, "duration": 99999, "effect": "fadeIn","style": { "textShadow": "2px 2px 4px rgba(0,0,0,0.6)", "WebkitTextStroke": "2px black" } }, // added shadow + stroke }, },

    // 6
  { "type": "audio", "src": audioSources[13], "startFrame": durations.intro + durations.voice1_en + durations.countdown + durations.voice1_so + durations.voice2_en + durations.countdown + durations.voice2_so + durations.voice3_en + durations.countdown + durations.voice3_so + durations.pause1 + durations.voice4_en + durations.countdown + durations.voice4_so + durations.voice5_en + durations.countdown + durations.voice5_so, "duration": durations.voice6_en, "volume": 1 },
  { "type": "audio", "src": audioSources[2], "startFrame": durations.intro + durations.voice1_en + durations.countdown + durations.voice1_so + durations.voice2_en + durations.countdown + durations.voice2_so + durations.voice3_en + durations.countdown + durations.voice3_so + durations.pause1 + durations.voice4_en + durations.countdown + durations.voice4_so + durations.voice5_en + durations.countdown + durations.voice5_so + durations.voice6_en, "duration": durations.countdown, "volume": 1 },
  { "type": "audio", "src": audioSources[14], "startFrame": durations.intro + durations.voice1_en + durations.countdown + durations.voice1_so + durations.voice2_en + durations.countdown + durations.voice2_so + durations.voice3_en + durations.countdown + durations.voice3_so + durations.pause1 + durations.voice4_en + durations.countdown + durations.voice4_so + durations.voice5_en + durations.countdown + durations.voice5_so + durations.voice6_en + durations.countdown, "duration": durations.voice6_so, "volume": 1 },
{ "type": "text", "text": textContent[5], "fontFamily": "Arial Black", "fontSize": (textContent[5].length > 5 ? 40 : 70), "color": "Yellow", "textAlign": "left", "position": { "x": 370, "y": 1237 }, "startFrame": durations.intro + durations.voice1_en + durations.countdown + durations.voice1_so + durations.voice2_en + durations.countdown + durations.voice2_so + durations.voice3_en + durations.countdown + durations.voice3_so + durations.pause1 + durations.voice4_en + durations.countdown + durations.voice4_so + durations.voice5_en + durations.countdown + durations.voice5_so + durations.voice6_en + durations.countdown, "duration": 99999, "effect": "fadeIn", "style": { "textShadow": "2px 2px 4px rgba(0,0,0,0.6)", "WebkitTextStroke": "2px black" } }, // added shadow + stroke
, // added shadow + stroke }, },

  // Pause 2
  { "type": "audio", "src": audioSources[15], "startFrame": durations.intro + durations.voice1_en + durations.countdown + durations.voice1_so + durations.voice2_en + durations.countdown + durations.voice2_so + durations.voice3_en + durations.countdown + durations.voice3_so + durations.pause1 + durations.voice4_en + durations.countdown + durations.voice4_so + durations.voice5_en + durations.countdown + durations.voice5_so + durations.voice6_en + durations.countdown + durations.voice6_so, "duration": durations.pause2, "volume": 1 },

  // 7
  { "type": "audio", "src": audioSources[16], "startFrame": durations.intro + durations.voice1_en + durations.countdown + durations.voice1_so + durations.voice2_en + durations.countdown + durations.voice2_so + durations.voice3_en + durations.countdown + durations.voice3_so + durations.pause1 + durations.voice4_en + durations.countdown + durations.voice4_so + durations.voice5_en + durations.countdown + durations.voice5_so + durations.voice6_en + durations.countdown + durations.voice6_so + durations.pause2, "duration": durations.voice7_en, "volume": 1 },
  { "type": "audio", "src": audioSources[2], "startFrame": durations.intro + durations.voice1_en + durations.countdown + durations.voice1_so + durations.voice2_en + durations.countdown + durations.voice2_so + durations.voice3_en + durations.countdown + durations.voice3_so + durations.pause1 + durations.voice4_en + durations.countdown + durations.voice4_so + durations.voice5_en + durations.countdown + durations.voice5_so + durations.voice6_en + durations.countdown + durations.voice6_so + durations.pause2 + durations.voice7_en, "duration": durations.countdown, "volume": 1 },
  { "type": "audio", "src": audioSources[17], "startFrame": durations.intro + durations.voice1_en + durations.countdown + durations.voice1_so + durations.voice2_en + durations.countdown + durations.voice2_so + durations.voice3_en + durations.countdown + durations.voice3_so + durations.pause1 + durations.voice4_en + durations.countdown + durations.voice4_so + durations.voice5_en + durations.countdown + durations.voice5_so + durations.voice6_en + durations.countdown + durations.voice6_so + durations.pause2 + durations.voice7_en + durations.countdown, "duration": durations.voice7_so, "volume": 1 },
  { "type": "text", "text": textContent[6], "fontFamily": "Arial Black", "fontSize": 70, "color": "Red","textAlign": "left", "position": { "x": 360, "y": 1525 }, "startFrame": durations.intro + durations.voice1_en + durations.countdown + durations.voice1_so + durations.voice2_en + durations.countdown + durations.voice2_so + durations.voice3_en + durations.countdown + durations.voice3_so + durations.pause1 + durations.voice4_en + durations.countdown + durations.voice4_so + durations.voice5_en + durations.countdown + durations.voice5_so + durations.voice6_en + durations.countdown + durations.voice6_so + durations.pause2 + durations.voice7_en + durations.countdown, "duration": 99999, "effect": "fadeIn","style": { "textShadow": "2px 2px 4px rgba(0,0,0,0.6)", "WebkitTextStroke": "2px black" } }, // added shadow + stroke }, },

  // 8
  { "type": "audio", "src": audioSources[18], "startFrame": durations.intro + durations.voice1_en + durations.countdown + durations.voice1_so + durations.voice2_en + durations.countdown + durations.voice2_so + durations.voice3_en + durations.countdown + durations.voice3_so + durations.pause1 + durations.voice4_en + durations.countdown + durations.voice4_so + durations.voice5_en + durations.countdown + durations.voice5_so + durations.voice6_en + durations.countdown + durations.voice6_so + durations.pause2 + durations.voice7_en + durations.countdown + durations.voice7_so, "duration": durations.voice8_en, "volume": 1 },
  { "type": "audio", "src": audioSources[2], "startFrame": durations.intro + durations.voice1_en + durations.countdown + durations.voice1_so + durations.voice2_en + durations.countdown + durations.voice2_so + durations.voice3_en + durations.countdown + durations.voice3_so + durations.pause1 + durations.voice4_en + durations.countdown + durations.voice4_so + durations.voice5_en + durations.countdown + durations.voice5_so + durations.voice6_en + durations.countdown + durations.voice6_so + durations.pause2 + durations.voice7_en + durations.countdown + durations.voice7_so + durations.voice8_en, "duration": durations.countdown, "volume": 1 },
  { "type": "audio", "src": audioSources[19], "startFrame": durations.intro + durations.voice1_en + durations.countdown + durations.voice1_so + durations.voice2_en + durations.countdown + durations.voice2_so + durations.voice3_en + durations.countdown + durations.voice3_so + durations.pause1 + durations.voice4_en + durations.countdown + durations.voice4_so + durations.voice5_en + durations.countdown + durations.voice5_so + durations.voice6_en + durations.countdown + durations.voice6_so + durations.pause2 + durations.voice7_en + durations.countdown + durations.voice7_so + durations.voice8_en + durations.countdown, "duration": durations.voice8_so, "volume": 1 },
  { "type": "text", "text": textContent[7], "fontFamily": "Arial Black", "fontSize": 70, "color": "Red","textAlign": "left", "position": { "x": 360, "y": 1625 }, "startFrame": durations.intro + durations.voice1_en + durations.countdown + durations.voice1_so + durations.voice2_en + durations.countdown + durations.voice2_so + durations.voice3_en + durations.countdown + durations.voice3_so + durations.pause1 + durations.voice4_en + durations.countdown + durations.voice4_so + durations.voice5_en + durations.countdown + durations.voice5_so + durations.voice6_en + durations.countdown + durations.voice6_so + durations.pause2 + durations.voice7_en + durations.countdown + durations.voice7_so + durations.voice8_en + durations.countdown, "duration": 99999, "effect": "fadeIn" ,"style": { "textShadow": "2px 2px 4px rgba(0,0,0,0.6)", "WebkitTextStroke": "2px black" } }, // added shadow + stroke },},

  // 9
  { "type": "audio", "src": audioSources[20], "startFrame": durations.intro + durations.voice1_en + durations.countdown + durations.voice1_so + durations.voice2_en + durations.countdown + durations.voice2_so + durations.voice3_en + durations.countdown + durations.voice3_so + durations.pause1 + durations.voice4_en + durations.countdown + durations.voice4_so + durations.voice5_en + durations.countdown + durations.voice5_so + durations.voice6_en + durations.countdown + durations.voice6_so + durations.pause2 + durations.voice7_en + durations.countdown + durations.voice7_so + durations.voice8_en + durations.countdown + durations.voice8_so, "duration": durations.voice9_en, "volume": 1 },
  { "type": "audio", "src": audioSources[2], "startFrame": durations.intro + durations.voice1_en + durations.countdown + durations.voice1_so + durations.voice2_en + durations.countdown + durations.voice2_so + durations.voice3_en + durations.countdown + durations.voice3_so + durations.pause1 + durations.voice4_en + durations.countdown + durations.voice4_so + durations.voice5_en + durations.countdown + durations.voice5_so + durations.voice6_en + durations.countdown + durations.voice6_so + durations.pause2 + durations.voice7_en + durations.countdown + durations.voice7_so + durations.voice8_en + durations.countdown + durations.voice8_so + durations.voice9_en, "duration": durations.countdown, "volume": 1 },
  { "type": "audio", "src": audioSources[21], "startFrame": durations.intro + durations.voice1_en + durations.countdown + durations.voice1_so + durations.voice2_en + durations.countdown + durations.voice2_so + durations.voice3_en + durations.countdown + durations.voice3_so + durations.pause1 + durations.voice4_en + durations.countdown + durations.voice4_so + durations.voice5_en + durations.countdown + durations.voice5_so + durations.voice6_en + durations.countdown + durations.voice6_so + durations.pause2 + durations.voice7_en + durations.countdown + durations.voice7_so + durations.voice8_en + durations.countdown + durations.voice8_so + durations.voice9_en + durations.countdown, "duration": durations.voice9_so, "volume": 1 },
  { "type": "text", "text": textContent[8], "fontFamily": "Arial Black", "fontSize": 70, "color": "Red","textAlign": "left", "position": { "x": 360, "y": 1725 }, "startFrame": durations.intro + durations.voice1_en + durations.countdown + durations.voice1_so + durations.voice2_en + durations.countdown + durations.voice2_so + durations.voice3_en + durations.countdown + durations.voice3_so + durations.pause1 + durations.voice4_en + durations.countdown + durations.voice4_so + durations.voice5_en + durations.countdown + durations.voice5_so + durations.voice6_en + durations.countdown + durations.voice6_so + durations.pause2 + durations.voice7_en + durations.countdown + durations.voice7_so + durations.voice8_en + durations.countdown + durations.voice8_so + durations.voice9_en + durations.countdown, "duration": 99999, "effect": "fadeIn","style": { "textShadow": "2px 2px 4px rgba(0,0,0,0.6)", "WebkitTextStroke": "2px black" } }, // added shadow + stroke }, },


  // End
  { "type": "audio", "src": audioSources[24], "startFrame": durations.intro + durations.voice1_en + durations.countdown + durations.voice1_so + durations.voice2_en + durations.countdown + durations.voice2_so + durations.voice3_en + durations.countdown + durations.voice3_so + durations.pause1 + durations.voice4_en + durations.countdown + durations.voice4_so + durations.voice5_en + durations.countdown + durations.voice5_so + durations.voice6_en + durations.countdown + durations.voice6_so + durations.pause2 + durations.voice7_en + durations.countdown + durations.voice7_so + durations.voice8_en + durations.countdown + durations.voice8_so + durations.voice9_en + durations.countdown + durations.voice9_so + durations.voice10_en + durations.countdown + durations.voice10_so, "duration": durations.end, "volume": 1 },

  

  
];

export default data;


export const totalDurationInFrames = 
  durations.intro 
  + durations.voice1_en 
  + durations.countdown 
  + durations.voice1_so 
  + durations.voice2_en 
  + durations.countdown 
  + durations.voice2_so 
  + durations.voice3_en 
  + durations.countdown 
  + durations.voice3_so 
  + durations.pause1 
  + durations.voice4_en 
  + durations.countdown 
  + durations.voice4_so 
  + durations.voice5_en 
  + durations.countdown 
  + durations.voice5_so 
  + durations.voice6_en 
  + durations.countdown 
  + durations.voice6_so 
  + durations.pause2 
  + durations.voice7_en 
  + durations.countdown 
  + durations.voice7_so 
  + durations.voice8_en 
  + durations.countdown 
  + durations.voice8_so 
  + durations.voice9_en 
  + durations.countdown 
  + durations.voice9_so 
  + durations.voice10_en 
  + durations.countdown 
  + durations.voice10_so 
  + durations.end;  // Add the final audio duration too
