# Jay's Portfolio Website

Portfolio website showcasing projects and professional information.

## 📁 Project Structure

```
Website-portofolio/
├── index.html          # Main HTML file
├── css/
│   └── style.css       # Styling for the website
├── js/
│   └── script.js       # JavaScript functionality
├── images/             # Project images and assets
├── .gitignore          # Git ignore file
└── README.md           # This file
```

## 🎨 Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Smooth Navigation**: Smooth scrolling between sections
- **Modern UI**: Clean and professional design using Bootstrap 5
- **Fast Loading**: Optimized assets and minimal dependencies
- **SEO Friendly**: Proper meta tags and semantic HTML

## 🔧 Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with CSS variables and animations
- **JavaScript**: Vanilla JS for interactivity
- **Bootstrap 5**: Responsive framework
- **Font Awesome**: Icon library
- **Google Fonts**: Typography

## 🚀 Getting Started

### Prerequisites

- A modern web browser
- A text editor (VS Code, Sublime Text, etc.)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/Sapnap00000/Portofolio.git
cd Website-portofolio
```

2. Open `index.html` in your web browser:
   - Double-click the file, or
   - Use a local server (recommended):

```bash
# Using Python 3
python -m http.server 8000

# Using Python 2
python -m SimpleHTTPServer 8000

# Using Node.js (with http-server)
npx http-server
```

3. Visit `http://localhost:8000` in your browser

## 📝 Content Structure

### Sections

- **Hero Section**: Welcome message with call-to-action
- **Projects Section**: Showcase of projects and work samples
- **About Section**: Personal information and introduction
- **Contact Section**: Contact information and links

## 🎯 Customization Guide

### Updating Personal Information

Edit `index.html`:

- Change profile image path in `<img src="images/profile.jpg">`
- Update name and title in hero section
- Add your social links in contact section
- Update your email address

### Modifying Colors

Edit `css/style.css` - Change CSS variables in `:root`:

```css
:root {
  --primary-color: #008000; /* Green accent color */
  --secondary-color: #444; /* Dark gray text */
  --light-bg: #f8f8f8; /* Light background */
}
```

### Adding New Projects

1. Add image to `images/` folder
2. Duplicate a project card in `index.html`:

```html
<article class="project-card">
  <img src="images/your-image.jpg" alt="Project description" />
  <div class="project-content">
    <h3>Project Title</h3>
    <p>Project description here</p>
  </div>
</article>
```

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px

## 🔗 External Resources

- [Bootstrap 5 Documentation](https://getbootstrap.com/docs/5.3/)
- [Font Awesome Icons](https://fontawesome.com/)
- [Google Fonts](https://fonts.google.com/)

## 📧 Contact Information

- **Email**: jay123@gmail.com
- **GitHub**: [github.com/Sapnap00000](https://github.com/Sapnap00000)

## 📄 License

This project is open source and available for personal and commercial use.

## 🎓 Tips for Further Development

1. **Add a Blog Section**: Create a blog to share articles
2. **Implement Contact Form**: Add a backend for contact messages
3. **Add Dark Mode**: Implement theme switching
4. **Improve SEO**: Add structured data (JSON-LD)
5. **Performance**: Optimize images and minify CSS/JS
6. **Analytics**: Add Google Analytics tracking
7. **Testing**: Implement automated testing

## 📚 Resources for Learning

- [MDN Web Docs](https://developer.mozilla.org/)
- [CSS-Tricks](https://css-tricks.com/)
- [Web Development Roadmap](https://roadmap.sh/frontend)

---

Last Updated: December 30, 2025

Happy coding! 🚀
