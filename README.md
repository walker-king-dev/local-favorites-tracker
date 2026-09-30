# Walker King - Local Favorites Tracker

A small web app for saving favorite places that the user has been to — countries, states, and cities — and being able to store them and find them again. Project 2 for
WRIT 40363 at TCU.

**Live site:** https://walker-king-dev.github.io/local-favorites-tracker/

## What it does

- Add a place with a name, category, star rating, and optional notes
- Search names and notes as you type, and filter by category
- Delete a favorite (with a confirmation step) without losing the current filter
- Keep your favorites between visits, saved in the browser with `localStorage`

## Built with

- Semantic HTML5 with labeled form controls
- CSS with design tokens for color, spacing, and type
- Vanilla JavaScript: an array of objects, `filter`, template literals, and DOM events
- `localStorage` and JSON for persistence
- Git and GitHub Pages

## Notes

Favorites are stored only in the browser you add them from. They do not sync
between devices, and clearing site data or using a private window starts you
with an empty list. If the saved data is ever unreadable, the app starts empty
instead of crashing.
