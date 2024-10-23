
# MY_CSS_THEME.md

## Global Styling Guidelines

- **Reset for all elements**: 
  - Remove all default padding and margin.
  - Apply `box-sizing: border-box` to ensure that padding and border are included in element’s total width and height.
  - Set transitions globally with a default of `all 0.5s ease` for smooth animation on changes.
  - Disable default `outline` on focusable elements for a cleaner look.

```css
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  outline: 0;
  transition: all 0.5s ease;
}
```

- **Body element**: 
  - Use a sans-serif font as default.
  - Apply a gradient background for visual appeal. Example: a diagonal gradient from dark purple to pink.

```css
body {
  font-family: sans-serif;
  background-image: linear-gradient(to top right, rgba(79,51,176,1.0),rgba(210,53,165));
}
```

## Containers and Layout

- **Containers**:
  - Set containers to take up full viewport height (`100vh`) and width (`100vw`).
  - Use CSS Grid or Flexbox to center content vertically and horizontally.
  - Recommended approach: `display: grid; place-items: center;` for easy centering.

```css
.container {
  height: 100vh;
  width: 100vw;
  display: grid;
  place-items: center;
}
```

## Element Styling Guidelines

- **General Element Guidelines**:
  - Ensure all elements have padding and border-radius for a clean, rounded look.
  - Set `box-shadow` for depth and dimension.

### Buttons
- **Button Dimensions**:
  - Default button size: `height: 60px` and `width: 60px`.
  - Round buttons using `border-radius: 30px` for a circular effect.

- **Button Colors**:
  - Default button background color: `#071115` (dark background).
  - Text color: `#aa00a4` (purple-pink text for contrast).
  
- **Hover Effect**:
  - Change background color on hover to a slightly lighter shade: `#1b2f38`.
  - Apply a subtle scaling effect with `transform: scale(1.1)` to give a "pop" effect.

```css
button {
  height: 60px;
  width: 60px;
  border-radius: 30px;
  margin: 5px;
  font-size: 20px;
  cursor: pointer;
  transition: all 200ms ease;
  background-color: #071115;
  color: #aa00a4;
}

button:hover {
  background-color: #1b2f38;
  transform: scale(1.1);
}
```

### Display or Info Panels

- **Panels**:
  - Use Flexbox for aligning content inside display areas. Align items to the bottom right for a calculator-style layout.
  - Set a large font size (`30px`) for display purposes (e.g., calculator screens or dashboards).
  - For maximum width, use values like `max-width: 270px` to limit expansion.

```css
.display-panel {
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  font-size: 30px;
  margin-bottom: 20px;
  color: #aa00a4;
}
```

## Color Palette

Define a consistent color scheme to maintain a cohesive look across projects:

- **Primary Background**: `#071115` (Dark background for containers and buttons).
- **Accent Color**: `#aa00a4` (Purple-pink for text, buttons, and highlights).
- **Hover Color**: `#1b2f38` (Slightly lighter shade for hover effects).
- **Gradient Background**: `linear-gradient(to top right, rgba(79,51,176,1.0), rgba(210,53,165))` (Used for the body background).

## Typography

- **Font Style**:
  - Set default font-family to sans-serif for a clean, modern look.
  - Use larger font sizes for headings, displays, and important information (e.g., `30px` for key displays).
  - Smaller font sizes (`20px`) for buttons and interactive elements.

```css
body {
  font-family: sans-serif;
  font-size: 16px;
}

.display-text {
  font-size: 30px;
}

button {
  font-size: 20px;
}
```

## Animations and Transitions

- **Smooth Transitions**:
  - Set transitions globally for all interactive elements to ensure a smooth appearance on hover, click, or any state changes.
  - Use `transition: all 0.5s ease` for large elements like containers, and `200ms` for smaller elements like buttons for a snappier feel.

```css
* {
  transition: all 0.5s ease;
}

button {
  transition: all 200ms ease;
}
```

---
This roadmap provides a cohesive styling foundation that can be applied to any project. You can modify values as needed, but the overall look and feel should remain consistent by following these guidelines.
