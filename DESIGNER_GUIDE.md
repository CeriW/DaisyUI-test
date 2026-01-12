# Designer Guide: Customizing DaisyUI Themes

## Quick Color Tweaks (Recommended for Small Changes)

### Step 1: Open the Theme File
Open `src/index.css` in your code editor.

### Step 2: Find the Color You Want to Change
Look for the `@plugin "daisyui/theme"` block. You'll see colors like:
- `--color-primary` - Main brand color
- `--color-secondary` - Secondary color
- `--color-accent` - Accent/highlight color
- `--color-error` - Error/danger color
- `--color-success` - Success color
- `--color-warning` - Warning color
- `--color-info` - Info color

### Step 3: Change the Color Value
Colors use `oklch()` format. Examples:
- `oklch(55% 0.22 25)` - Red color
- `oklch(75% 0.20 56)` - Yellow/Orange
- `oklch(60% 0.25 240)` - Blue

**Quick Reference:**
- First number (0-100%): Lightness (0% = black, 100% = white)
- Second number (0-0.4): Chroma/Saturation (0 = gray, higher = more colorful)
- Third number (0-360): Hue (0/360 = red, 120 = green, 240 = blue)

### Step 4: Save and See Changes
Save the file and refresh your browser. Changes appear instantly!

## Example: Making Primary Color Brighter

**Before:**
```css
--color-primary: oklch(37.45% 0.189 325.02);
```

**After (brighter):**
```css
--color-primary: oklch(50% 0.189 325.02);
```

Just increase the first number (lightness) to make it brighter!

## Creating a New Theme from Scratch

1. Go to https://daisyui.com/theme-generator/
2. Adjust colors using the sliders
3. Click "Copy Theme Code"
4. Open `src/index.css`
5. Find the `@plugin "daisyui/theme"` block
6. Replace the entire block with the new code
7. Update the `name` field to something unique (e.g., "my-theme-v2")
8. Update `index.html` to use the new theme name: `<html data-theme="my-theme-v2">`

## Tips

- **Small tweaks**: Edit `src/index.css` directly (fastest!)
- **Big changes**: Use the theme generator, then copy/paste
- **Testing**: Save the file and refresh browser to see changes
- **Multiple themes**: You can have multiple themes in the same file, just change `data-theme` in `index.html` to switch

## Color Format Notes

⚠️ **Important**: All colors must use `oklch()` format. Plain color names like "red" or "orange" won't work properly.

**Convert colors:**
- Use https://oklch.com/ to convert hex colors to oklch
- Or use the theme generator which does this automatically
