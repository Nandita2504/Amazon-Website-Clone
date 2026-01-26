# Amazon Clone (Frontend)

A simple Amazon-inspired e-commerce frontend built using React and Vite.
The project focuses on clean UI, routing, and basic cart functionality.

## Features
- Product listing with categories
- Search and category-based filtering
- Product detail page
- Shopping cart with quantity management
- Cart data persisted using localStorage
- Dedicated pages:
  - Home
  - Today’s Deals
  - Customer Service
  - Registry
  - Gift Cards
  - Sell
- Responsive design for mobile and desktop

## 🛠️ Tech Stack

### Frontend
- **React 18.3.1** - UI library
- **React Router DOM 7.1.3** - Client-side routing
- **Vite 7.3.1** - Build tool and dev server
- **Lucide React** - Modern icon library

### Styling
- **Vanilla CSS** - Custom styles with CSS variables
- **CSS Grid & Flexbox** - Responsive layouts
- **CSS Animations** - Smooth transitions and effects

### State Management
- **React Context API** - Global cart state
- **localStorage** - Persistent cart data

### Data
- **JSON** - Local product database
- **No backend required** - Pure frontend architecture

## 📁 Project Structure

```
amazon-clone/
├── public/                 # Static assets
├── src/
│   ├── components/        # Reusable components
│   │   ├── Navbar/       # Navigation bar
│   │   └── ProductCard/  # Product display card
│   ├── context/          # React Context for state management
│   │   └── CartContext.jsx
│   ├── data/             # JSON data source
│   │   └── products.json
│   ├── pages/            # Page components
│   │   ├── Home/
│   │   ├── CartPage/
│   │   ├── ProductDetail/
│   │   ├── Deals/
│   │   ├── CustomerService/
│   │   ├── Registry/
│   │   ├── GiftCards/
│   │   └── Sell/
│   ├── styles/           # Global styles
│   │   └── global.css
│   ├── App.jsx           # Main app component
│   └── main.jsx          # Entry point
├── index.html
├── package.json
├── vite.config.js
└── vercel.json           # Vercel deployment config
```
## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/amazon-clone.git
   cd amazon-clone
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
   ```
   http://localhost:5173
   ```




