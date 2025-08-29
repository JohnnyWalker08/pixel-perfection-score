import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
					light: 'hsl(var(--primary-light))',
					lighter: 'hsl(var(--primary-lighter))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))',
					light: 'hsl(var(--secondary-light))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				luxury: {
					gold: 'hsl(var(--luxury-gold))',
					silver: 'hsl(var(--luxury-silver))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				}
			},
			fontFamily: {
				'serif': ['Playfair Display', 'Georgia', 'serif'],
				'sans': ['Inter', 'system-ui', 'sans-serif'],
				'display': ['Playfair Display', 'Georgia', 'serif'],
			},
			fontSize: {
				'display-2xl': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
				'display-xl': ['3.75rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
				'display-lg': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
			},
			spacing: {
				'luxury': '8rem',
				'premium': '6rem',
				'elegant': '4rem',
			},
			backgroundImage: {
				'hero-gradient': 'var(--hero-gradient)',
				'rose-gold-gradient': 'var(--rose-gold-gradient)',
				'luxury-gradient': 'var(--luxury-gradient)',
				'glass-gradient': 'var(--glass-gradient)',
				'mesh-gradient': 'var(--mesh-gradient)',
			},
			boxShadow: {
				'luxury': 'var(--shadow-luxury)',
				'premium': 'var(--shadow-premium)',  
				'elegant': 'var(--shadow-elegant)',
				'glow': 'var(--shadow-glow)',
				'gold': 'var(--shadow-gold)',
			},
			backdropBlur: {
				'luxury': '20px',
			},
			borderRadius: {
				'luxury': '1.5rem',
				'premium': '1rem',
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			transitionTimingFunction: {
				'luxury': 'var(--ease-luxury)',
				'premium': 'var(--ease-premium)',
				'bounce': 'var(--ease-bounce)',
			},
			keyframes: {
				'luxury-fade-in': {
					'0%': { 
						opacity: '0', 
						transform: 'translateY(40px) scale(0.95)',
						filter: 'blur(10px)'
					},
					'100%': { 
						opacity: '1', 
						transform: 'translateY(0) scale(1)',
						filter: 'blur(0)'
					}
				},
				'premium-slide-up': {
					'0%': { 
						opacity: '0', 
						transform: 'translateY(60px)',
					},
					'100%': { 
						opacity: '1', 
						transform: 'translateY(0)',
					}
				},
				'elegant-scale': {
					'0%': { 
						opacity: '0', 
						transform: 'scale(0.8) rotate(-5deg)',
					},
					'100%': { 
						opacity: '1', 
						transform: 'scale(1) rotate(0deg)',
					}
				},
				'luxury-glow': {
					'0%, 100%': { 
						boxShadow: 'var(--shadow-glow)',
						filter: 'brightness(1)'
					},
					'50%': { 
						boxShadow: '0 0 80px hsl(265 89% 65% / 0.6)',
						filter: 'brightness(1.1)'
					}
				},
				'float-gentle': {
					'0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
					'50%': { transform: 'translateY(-10px) rotate(1deg)' }
				},
				'parallax': {
					'0%': { transform: 'translateY(0px)' },
					'100%': { transform: 'translateY(-50px)' }
				},
				'shimmer': {
					'0%': { backgroundPosition: '-1000px 0' },
					'100%': { backgroundPosition: '1000px 0' }
				}
			},
			animation: {
				'luxury-fade-in': 'luxury-fade-in 1.2s var(--ease-luxury)',
				'premium-slide-up': 'premium-slide-up 0.8s var(--ease-premium)',
				'elegant-scale': 'elegant-scale 0.6s var(--ease-bounce)',
				'luxury-glow': 'luxury-glow 4s ease-in-out infinite',
				'float-gentle': 'float-gentle 6s ease-in-out infinite',
				'shimmer': 'shimmer 3s ease-in-out infinite',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
