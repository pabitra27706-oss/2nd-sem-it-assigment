
# 📝 HTML Assignment Editor

A modern, mobile-first web application that helps students write, preview,
and print HTML/CSS assignment answers — all in one place.
No installation needed. Just open in a browser.

---

## ✨ Features

- 🖥️ **Live Preview** — See your HTML output instantly as you code
- 💾 **Auto Save** — Everything saves automatically to localStorage
- 📄 **Sample Answers** — All 26 questions come with pre-written answers
- 🌙☀️ **Dark / Light Mode** — Toggle between themes, preference is saved
- 🖨️ **PDF Output** — Generate a beautiful browser-style output for printing
- 🗂️ **Sidebar Navigator** — Jump to any question instantly
- 🔍 **Filter Questions** — Filter by All / HTML / CSS / Completed
- 📊 **Progress Tracker** — See how many questions you have completed
- 📋 **Copy Code** — One click to copy your code to clipboard
- ↩️ **Prev / Next** — Navigate between questions without going back
- 🏷️ **Custom vs Sample** — Cards show if answer is yours or sample
- 🔄 **Reset Answers** — Reset everything back to sample answers

---

## 📁 File Structure

```
HTML-Assignment-Editor/
│
├── index.html          → Main editor page
├── output.html         → PDF output page (browser window style)
├── style.css           → All styling (dark + light theme)
├── script.js           → App logic, localStorage, navigation
├── questions.js        → All 26 question texts
├── sampleAnswers.js    → Full sample answers for all 26 questions
└── README.md           → This file
```

---

## 🚀 How To Use

### Step 1 — Setup
```
1. Download or clone this project
2. Keep all files in the same folder
3. Open index.html in any modern browser
4. No server needed — works offline
```

### Step 2 — Write Your Answers
```
1. Click any question card to open the editor
2. Sample answer is pre-loaded for every question
3. Edit the code as you like or write from scratch
4. Click "Run Code" to see the live preview
5. Your code saves automatically as you type
```

### Step 3 — Generate PDF Output
```
1. Click "Generate PDF" button (top right or sidebar)
2. A new tab opens with all 26 outputs
3. Each output looks like a real browser window
4. Click "Save as PDF" button
5. Browser print dialog opens
6. Choose "Save as PDF" as the destination
7. Click Save
```

---

## 🖥️ Output Page Design

Each question output appears as a **macOS style browser window** with:

```
┌─────────────────────────────────────────┐
│  🔴 🟡 🟢   MyAssignment — Q1          │
├─────────────────────────────────────────┤
│  ← →   🔒 file:///MyAssignment_Q1.html │
├─────────────────────────────────────────┤
│                                         │
│   (Rendered HTML output here)           │
│                                         │
└─────────────────────────────────────────┘
```

---

## 📋 Question List

### HTML Questions (1–15)

| No | Topic |
|----|-------|
| 1  | h1 heading and paragraph |
| 2  | Unordered list |
| 3  | Ordered list 1 to 5 |
| 4  | Bold, Italic, Underline text |
| 5  | HTML form with text input |
| 6  | Minimal HTML5 structure |
| 7  | All heading tags h1 to h6 |
| 8  | Paragraphs with line break |
| 9  | Horizontal rule between paragraphs |
| 10 | Subscript and Superscript |
| 11 | HTML comment |
| 12 | Nested list |
| 13 | Image tag with alt text |
| 14 | Password input field |
| 15 | Radio buttons |

### CSS Questions (16–26)

| No | Topic |
|----|-------|
| 16 | Background color |
| 17 | Text color with internal CSS |
| 18 | Font size and font family |
| 19 | Border around a div |
| 20 | Text align center |
| 21 | Internal stylesheet structure |
| 22 | CSS targeting all paragraphs |
| 23 | Class selector |
| 24 | ID selector |
| 25 | Hexadecimal color code |
| 26 | Background color on a div |

---

## 💡 Tips

> ✅ You do not need to click Run Code every time.
> The app auto-saves your code as you type.

> ✅ If you make a mistake click the Clear button.
> It will restore the sample answer automatically.

> ✅ The "Custom" badge on a card means you have
> edited the answer yourself.

> ✅ The "Sample" badge means the original
> sample answer is being used.

> ✅ All data is stored in your browser localStorage.
> Clearing browser data will erase your answers.

> ✅ For best PDF results use Google Chrome or
> Microsoft Edge browser.

---

## 🛠️ Built With

| Technology | Purpose |
|------------|---------|
| HTML5 | Structure |
| CSS3 | Styling and themes |
| Vanilla JavaScript | Logic and localStorage |
| Google Fonts (Inter + Fira Code) | Typography |
| Font Awesome 6 | Icons |

---

## 🌐 Browser Support

| Browser | Supported |
|---------|-----------|
| Google Chrome | ✅ Recommended |
| Microsoft Edge | ✅ Recommended |
| Mozilla Firefox | ✅ Supported |
| Safari | ✅ Supported |
| Opera | ✅ Supported |

---

## 📱 Device Support

| Device | Experience |
|--------|-----------|
| Desktop | ✅ Full experience |
| Tablet | ✅ Full experience |
| Mobile | ✅ Optimized layout |

---

## ⚠️ Important Notes

```
1. All files must be in the same folder
2. Do not rename the files
3. Internet connection needed only for
   Google Fonts and Font Awesome icons
4. Works fully offline except icons and fonts
5. localStorage data stays in your browser
   until you clear browser data or reset
```

---

## 🔄 Version History

```
v1.0 — Initial release
     — 26 questions with sample answers
     — Live preview
     — localStorage auto save
     — PDF output generation

v2.0 — Major UI redesign
     — Dark / Light theme toggle
     — Sidebar question navigator
     — Progress tracker
     — Filter tabs
     — macOS style browser output
     — Fully complete sample answers
     — Separate sampleAnswers.js file
     — Prev / Next navigation
     — Copy code button
     — Toast notifications
     — Auto resize iframe outputs
```

---

## 👨‍💻 Made For

```
College IT Assignment
HTML and CSS - 26 Questions
Helps students write, preview and print
assignment answers cleanly and efficiently
```

---

## 📄 License

```
Free to use for educational purposes.
Modify and customize as needed.
```

---

> Made with ❤️ to make assignment submission easier for everyone
```

---

## ✅ What This README Covers

| Section | Details |
|---|---|
| ✨ Features | All 12+ features listed |
| 📁 File Structure | All 6 files explained |
| 🚀 How To Use | 3 step guide |
| 🖥️ Output Design | ASCII art preview |
| 📋 Question List | All 26 questions in table |
| 💡 Tips | 5 helpful tips |
| 🛠️ Built With | Tech stack |
| 🌐 Browser Support | 5 browsers |
| 📱 Device Support | All devices |
| ⚠️ Notes | Important warnings |
| 🔄 Version History | v1 and v2 changelog |