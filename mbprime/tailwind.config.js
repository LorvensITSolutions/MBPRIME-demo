/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#0a192f",
                secondary: "#b69121",
                "secondary-light": "#d4af37",
                textMuted: "#a8b2d1",
            },
            fontFamily: {
                serif: ['Playfair Display', 'serif'],
                sans: ['Inter', 'sans-serif'],
            },
            backgroundImage: {
                'hero-pattern': "linear-gradient(to right, rgba(10, 25, 47, 0.9) 20%, rgba(10, 25, 47, 0.4) 100%), url('https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop')",
            }
        },
    },
    plugins: [],
}
