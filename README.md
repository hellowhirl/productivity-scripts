# console-js-hacks

These are code snippets that you can run in the dev tools console to optimize your experience on certain websites like YouTube and Facebook.

They can be pasted in tn the console and executed manually or be automatically executed with a userscript manager (Tampermonkey, Greasemonkey, etc.)

## Contents

- facebookHomepage.js
- youtubeHomepage.js
- youtubeVideoPage.js

### facebookHomepage.js

- Remove newsfeed from Facebook homepage

### youtubeHomepage.js

- Remove Recommended Videos on YT homepage

### youtubeVideoPage.js

- Remove comments and recommended videos from video page

- Provide way to skip the ads on YouTube with the press of a button (customizabe).
  After pasting the code in the console an input element will appear at the top navbar near the search bar.
  Click in the input element and wait until a YouTube advertisement comes on.

  The moment the ad comes up you can push the button (default is set to "0" key) to skip, without having to wait the standard 5 seconds or so.
  If another ad comes on during the same video the one-button-skip will still continue to work.
