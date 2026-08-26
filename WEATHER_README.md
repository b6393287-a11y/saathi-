# Weather Dashboard

A beautiful, responsive weather dashboard built with React, TypeScript, and Tailwind CSS. Fetches real-time weather data from the OpenWeatherMap API.

## 🌤️ Features

- **Real-time Weather Data** - Get current weather conditions for any city
- **5-Day Forecast** - Plan ahead with 5-day weather predictions
- **Temperature Units** - Toggle between Celsius and Fahrenheit
- **Detailed Metrics** - View humidity, wind speed, visibility, and pressure
- **Beautiful UI** - Glass-morphism design with smooth animations
- **Responsive Design** - Works perfectly on mobile, tablet, and desktop
- **Error Handling** - Helpful error messages for invalid cities or API issues

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **API**: OpenWeatherMap API
- **HTTP Client**: Axios
- **Icons**: Lucide React

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

3. **Get Free API Key**
   - Visit [OpenWeatherMap](https://openweathermap.org/api)
   - Sign up for a free account
   - Get your API key from the dashboard

4. **Set up environment variables**
   Create a `.env.local` file in the project root:
   ```
   VITE_OPENWEATHER_API_KEY=your_api_key_here
   ```

5. **Start the development server**
   ```bash
   npm run dev
   ```

6. **Open in browser**
   Navigate to `http://localhost:5173`

## 🎯 How to Use

1. **Search for a City** - Use the search bar at the top to find weather for any city
2. **Switch Units** - Click the °C or °F buttons to toggle temperature units
3. **View Details** - See comprehensive weather metrics at a glance
4. **Check Forecast** - Scroll down to see the 5-day weather forecast

## 📁 Project Structure

```
src/
├── components/
│   ├── SearchBar.tsx        - Search input component
│   ├── CurrentWeather.tsx   - Current weather display
│   ├── Forecast.tsx         - 5-day forecast
│   ├── ErrorMessage.tsx     - Error display
│   └── LoadingSpinner.tsx   - Loading state
├── services/
│   └── weatherService.ts    - OpenWeatherMap API calls
├── App.tsx                  - Main application
├── main.tsx                 - React entry point
└── index.css                - Global styles
```

## 🌐 API Details

### OpenWeatherMap Free Tier
- **Endpoint**: `https://api.openweathermap.org/data/2.5`
- **Current Weather**: `/weather`
- **Forecast (5-day)**: `/forecast`
- **Rate Limit**: 60 calls/minute, 1,000,000 calls/month

### Environment Variables
```env
# Required for production
VITE_OPENWEATHER_API_KEY=your_api_key
```

## 🎨 Customization

### Change Default City
Edit in `App.tsx`:
```typescript
const [city, setCity] = useState('London'); // Change this
```

### Modify Temperature Unit
Update the initial state:
```typescript
const [unit, setUnit] = useState<'metric' | 'imperial'>('metric');
```

### Style Adjustments
- Colors: Update Tailwind classes in components
- Fonts: Modify in `tailwind.config.js`
- Icons: Switch from Lucide React library

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

Add environment variable in Vercel dashboard:
```
VITE_OPENWEATHER_API_KEY=your_api_key
```

### Netlify
1. Connect GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Add environment variable in Site Settings

### GitHub Pages
```bash
npm run build
# Push dist folder to gh-pages branch
```

## 📊 Sample API Response

### Current Weather
```json
{
  "name": "London",
  "main": {
    "temp": 15.2,
    "feels_like": 14.8,
    "humidity": 72,
    "pressure": 1013
  },
  "weather": [
    {
      "main": "Clouds",
      "description": "overcast clouds"
    }
  ],
  "wind": { "speed": 3.5 }
}
```

## 🔒 Security Notes

- Never commit your `.env.local` file
- Use free tier for development/testing
- For production, use a backend API to hide your key
- Implement rate limiting on your server

## 🐛 Troubleshooting

### "City not found" error
- Check spelling of city name
- Try using city name without country code first

### API Key errors
- Verify key is correct in `.env.local`
- Ensure it's activated in OpenWeatherMap dashboard
- Wait a few minutes after creating a new key

### CORS errors
- The free OpenWeatherMap API doesn't have CORS enabled
- Use a CORS proxy or backend server as middleware

## 📈 Future Enhancements

- [ ] Add hourly forecast
- [ ] Implement weather alerts
- [ ] Add multiple city comparison
- [ ] Weather history charts
- [ ] Dark/Light theme toggle
- [ ] Map view with weather layers
- [ ] Save favorite cities
- [ ] Push notifications

## 📄 License

MIT License - feel free to use this project for any purpose

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

**Built with ❤️ using OpenWeatherMap API**
