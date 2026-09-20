# Web Development Project 1 - *Riverbend Trailhead Collective*

Submitted by: **Your Name Here**

This web app: A hiking resource board for the Arizona hiking/outdoors community. It displays 12 real Arizona trails — Camelback Mountain, Piestewa Peak, Devil's Bridge, Cathedral Rock, Humphreys Peak, two Grand Canyon corridor trails, Peralta Trail, Picacho Peak, Seven Falls, West Fork of Oak Creek, and the Grand Canyon Rim Trail — as cards in a responsive grid, each showing location, distance, trail type, elevation gain, a short description, a color-coded difficulty badge, and a link to a trail map.

Time spent: **X** hours spent in total

## Required Features

The following **required** functionality is completed:

- [x] **The app has a cohesive, unique theme for events or resources relevant to a specific community**
  - [x] Header/title describing the theme is displayed
- [x] **At least 10 unique events or resources are displayed in a responsive card format**
  - [x] There are at least 10 cards displayed for 10 different events (12 trails included)
  - [x] The cards should be displayed in an organized format (a responsive CSS grid)
  - [x] Each card should include some information about the event or resource

The following **optional** features are implemented:

- [x] Buttons or links to a related resources are on each card component
  - [x] All cards have buttons or links in addition to text
- [x] The site is responsive for both desktop and mobile formats
  - [x] Web app is shown in a mobile format
  - [ ] **Video Walkthrough Special Instructions**: use Chrome DevTools' "Toggle Device" button to demonstrate responsiveness in both desktop and mobile.

The following **additional** features are implemented:

* [x] Color-coded difficulty badges (Easy / Moderate / Hard) driven by a single CSS class per card
* [x] Trail data lives in its own `src/data/trails.js` file, separate from the components

## Video Walkthrough

Here's a walkthrough of implemented required features:

<img src='http://i.imgur.com/link/to/your/gif/file.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

<!-- Replace this with whatever GIF tool you used! -->
GIF created with ...
<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS
[ScreenToGif](https://www.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux. -->

## Notes

Describe any challenges encountered while building the app.

## Getting Started

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

## Project structure

```
src/
  components/
    Header.jsx       # title + intro copy
    TrailCard.jsx     # one card, takes a `trail` prop
  data/
    trails.js         # array of trail objects (edit this to add your own)
  App.jsx              # renders Header + a grid of TrailCard
  App.css              # layout, card, and responsive styles
  index.css            # fonts, color tokens, base styles
```

## License

    Copyright [yyyy] [name of copyright owner]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
