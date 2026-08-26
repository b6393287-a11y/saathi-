# 🕐 World Clock - Digital Clock with Multiple Time Zones

A beautiful, responsive digital clock application that displays the current time in multiple time zones simultaneously. Features digital displays, analog clocks, and a grid view.

## ✨ Features

### Display Modes
- **Digital View** - Large digital time displays with date and UTC offset
- **Analog View** - Classic analog clock faces for each timezone
- **Grid View** - Table format showing all timezone information at a glance

### Time Zone Management
- **16 Pre-configured Timezones**
  - UTC, EST, CST, MST, PST (US)
  - IST (India), JST (Japan), AEST (Australia)
  - GMT (London), CET (Europe), EET (Athens)
  - GST (Dubai), SGT (Singapore)
  - NZST (New Zealand), ACDST (Adelaide), AWST (Perth)

- **Easy Addition** - Click "Add Time Zone" to search and add more
- **Quick Removal** - Remove any timezone except the last one
- **Search & Filter** - Find timezones by city name, offset, or timezone code

### Real-Time Updates
- Live clock updates every second
- Accurate time calculations for each timezone
- Smooth animations and transitions

### Information Display
- Current time (12/24 hour format)
- Full date with day of week
- UTC offset for each timezone
- City name and timezone identifier

## 🛠️ Tech Stack

- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Icons**: Lucide React
- **Time Handling**: JavaScript Intl API

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/b6393287-a11y/saathi-.git
   cd saathi-
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173`

## 📁 Project Structure

```
src/
├── ClockApp.tsx                 - Main application component
├── components/
│   └── Clock/
│       ├── ClockDisplay.tsx    - Digital clock display
│       ├── AnalogClock.tsx     - Analog clock component
│       ├── ClockGrid.tsx       - Table view component
│       └── TimeZoneSelector.tsx - Timezone selection modal
├── utils/
│   └── timeUtils.ts            - Time conversion utilities
├── main.tsx                     - React entry point
└── index.css                    - Global styles
```

## 🎯 How to Use

### View Current Time
1. The main clock at the top displays your local time
2. Local date and time update automatically every second

### Add Time Zone
1. Click the "Add Time Zone" button
2. Search by city name or timezone code
3. Click on a timezone to add it
4. Multiple timezones can be displayed simultaneously

### Switch Display Modes
- **Digital**: Large time displays with full information
- **Analog**: Classic clock faces with moving hands
- **Grid**: Table view showing all data in columns

### Remove Time Zone
- Click the ❌ button on any timezone card to remove it
- At least one timezone must always remain

## 🌍 Supported Time Zones

### North America
- **EST** - Eastern (America/New_York)
- **CST** - Central (America/Chicago)
- **MST** - Mountain (America/Denver)
- **PST** - Pacific (America/Los_Angeles)

### Europe
- **GMT** - London (Europe/London)
- **CET** - Central Europe (Europe/Paris)
- **EET** - Eastern Europe (Europe/Athens)

### Asia
- **IST** - India (Asia/Kolkata)
- **JST** - Japan (Asia/Tokyo)
- **GST** - Dubai (Asia/Dubai)
- **SGT** - Singapore (Asia/Singapore)

### Oceania
- **AEST** - Sydney (Australia/Sydney)
- **ACDST** - Adelaide (Australia/Adelaide)
- **AWST** - Perth (Australia/Perth)
- **NZST** - Auckland (Pacific/Auckland)

### Universal
- **UTC** - Coordinated Universal Time

## 🎨 Design Features

### Dark Theme
- Modern dark gradient background
- Cyan/blue color scheme for highlights
- Glass-morphism effects for depth

### Responsive Layout
- Mobile-first design
- Adapts to different screen sizes
- Touch-friendly interface

### Visual Enhancements
- Smooth hover effects
- Subtle animations
- Clear visual hierarchy
- Readable monospace fonts for time

## ⚙️ API & Utilities

### Time Utilities (`timeUtils.ts`)

#### `getTimeInTimeZone(date, timeZone)`
Converts a Date object to a specific timezone using Intl API.
```typescript
const nyTime = getTimeInTimeZone(new Date(), 'America/New_York');
```

#### `getTimezoneOffset(date, timeZone)`
Gets the offset from UTC in minutes.
```typescript
const offset = getTimezoneOffset(new Date(), 'America/New_York');
```

#### `getTimeDifference(offset1, offset2)`
Calculates time difference between two timezones.
```typescript
const diff = getTimeDifference(-300, -480); // Returns formatted string
```

## 🚀 Deployment

### Vercel
```bash
npm install -g vercel
vercel
```

### Netlify
1. Connect GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy!

## 📊 Commands

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
npm run typecheck    # Check TypeScript types
```

## 🔍 Browser Compatibility

- Chrome/Edge 88+
- Firefox 89+
- Safari 14+
- Modern mobile browsers

## 💡 Technical Highlights

### Timezone Conversion
Uses JavaScript's `Intl.DateTimeFormat` API for accurate timezone conversions without external dependencies.

### Real-Time Updates
Optimized with `setInterval` for smooth 1-second updates without performance issues.

### Analog Clock Rendering
SVG-based analog clocks with precise angle calculations for hour, minute, and second hands.

### State Management
Simple React hooks for managing timezone list and current time updates.

## 🐛 Troubleshooting

### Times not updating
- Check browser console for errors
- Verify JavaScript is enabled
- Refresh the page

### Timezone not found
- Some timezones may have different naming conventions
- Use UTC offset search instead
- Check the full timezone list in the selector

### Incorrect time display
- Verify your system time is correct
- Check timezone settings in OS
- Try a different browser

## 📈 Future Enhancements

- [ ] Add more timezone presets
- [ ] Timezone comparison feature
- [ ] Time zone offset calculator
- [ ] Meeting planner across timezones
- [ ] Daylight saving time indicators
- [ ] Custom clock colors
- [ ] Local storage for saved timezones
- [ ] 12/24 hour format toggle
- [ ] Different clock face themes
- [ ] Time difference calculator

## 📄 License

MIT License - Feel free to use this project for any purpose

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

**Built with ❤️ using React, TypeScript, and Tailwind CSS**
