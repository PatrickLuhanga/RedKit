Redkit: The "Impress Your Girl" Template

Want to impress a girl but don't know where to start? This is a fully built, interactive, and responsive web experience designed to be a digital romantic gift. 

It features a step-by-step narrative, polaroids that drop onto the screen, a pure CSS growing flower bouquet, and background music. 

The best part? It is 100% customizable. Fork the repo, swap in your own memories, host it for free, and send her the link (or attach it to a real bouquet via a QR code).

How to Make It Your Own

You don't need a backend or a database to make this work. Just edit the files in the root folder:

The Images: Delete my placeholder images and add your own. Name them `polaroid1.webp`, `polaroid2.webp`, `polaroid3.webp`, and `polaroid4.webp` (using `.webp` keeps the site loading instantly).
The Message: Open `script.js` and locate the `messages` array at the top. Swap out my poems/text for whatever you want to say to her. The code will automatically handle the typing animation.
The Music: Drop your own `.mp3` file into the folder. Open `index.html`, find the `<audio>` tag, and change the `src` attribute to match your song's filename.

Features
Zero Dependencies: Built with pure HTML, CSS, and Vanilla JS.
Pure CSS Animations: The final blooming bouquet and floating hearts are entirely animated using CSS `@keyframes`.
Mobile Ready: Includes a `@media` query that automatically scales the text, resizes the polaroids, and anchors the bouquet for phone screens.
Auto-Play Workaround: Music triggers seamlessly on the first "Click Me" interaction to bypass strict browser autoplay blocks.

How to Host It (For Free)

1. Fork or clone this repository to your own GitHub account.
2. Commit your custom images, audio, and text changes.
3. Go to your repository's Settings > Pages
4. Under "Build and deployment", set the source to Deploy from a branch and select your `main` branch.
5. Save, wait a minute for GitHub to build it, and your site is live! Send her the URL.
