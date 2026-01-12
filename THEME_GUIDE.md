# DaisyUI Theme Customization Guide (For Designers)

## How to Customize Themes Without Writing Code

### Option 1: Use the DaisyUI Theme Generator (Easiest!)

1. Go to: https://daisyui.com/theme-generator/
2. Adjust colors, fonts, and other settings visually
3. Click "Copy Theme Code"
4. Open `tailwind.config.js` in this project
5. Replace the `mytheme` object with the copied theme

### Option 2: Edit the Theme File Directly

Open `tailwind.config.js` and find the `mytheme` section. You can change:

- **primary**: Main brand color (used for buttons, links, etc.)
- **secondary**: Secondary brand color
- **accent**: Accent color for highlights
- **neutral**: Neutral grays
- **base-100**: Background color
- **base-200**: Slightly darker background
- **base-300**: Even darker background
- **info**, **success**, **warning**, **error**: Status colors

### Example Theme Structure

```javascript
mytheme: {
  "primary": "#282439",      // Your main brand color
  "secondary": "#534f66",    // Secondary color
  "accent": "#37cdbe",        // Accent/highlight color
  "neutral": "#3d4451",       // Neutral grays
  "base-100": "#ffffff",     // Main background
  "base-200": "#f2f2f2",     // Secondary background
  "base-300": "#e5e6e6",     // Tertiary background
  "info": "#3abff8",         // Info color (blue)
  "success": "#36d399",      // Success color (green)
  "warning": "#fbbd23",      // Warning color (yellow)
  "error": "#f87272",        // Error color (red)
}
```

### How It Works

- All DaisyUI components automatically use these colors
- No need to change individual components
- Changes apply to the entire app instantly
- Just edit the colors and save!

### Testing Your Changes

1. Edit `tailwind.config.js`
2. Save the file
3. The dev server will automatically reload
4. See your changes immediately!

### Available DaisyUI Themes

You can also use built-in themes by changing `data-theme` in `index.html`:
- `light` - Light theme
- `dark` - Dark theme
- `cupcake`, `bumblebee`, `emerald`, `corporate`, `synthwave`, etc.

Just change: `<html lang="en" data-theme="light">` to switch themes.
