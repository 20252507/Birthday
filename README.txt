FAHMEETAH'S BIRTHDAY SURPRISE WEBSITE

WHAT'S INCLUDED
- A dreamy birthday welcome page
- Your 10 photographs, shown one at a time in an automatic slideshow
- Previous/next slideshow controls and a progress indicator
- Birthday wish section
- Animated envelope with a personal letter
- Soft original instrumental-style background melody (starts after a tap)
- Responsive design for phones and computers

RUN ON YOUR COMPUTER
1. Extract this ZIP file.
2. Open the extracted fahmeetah_birthday_website folder in VS Code.
3. Open the VS Code terminal.
4. Run: py -m http.server 5500
5. Open this address in your browser: http://localhost:5500

If the py command is unavailable, try: python -m http.server 5500

DEPLOY ON VERCEL (NO REACT OR BUILD STEP NEEDED)
1. Open https://vercel.com/drop and sign in.
2. Extract this ZIP first.
3. Drag the fahmeetah_birthday_website folder into Vercel Drop.
4. Deploy and wait for the public .vercel.app link.
5. Open the link on your phone and test the photos, music and letter.

IMPORTANT
- Keep the images and audio folders beside index.html.
- Do not rename the image files unless you also update script.js.
- Background music begins only after the welcome button or music button is tapped, because browsers restrict autoplay.
- This is a static website, so npm install is not required.
