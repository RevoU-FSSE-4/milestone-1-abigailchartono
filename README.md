# Hello, welcome to Abigail's Milestone Assignment - PassePort

## Version History
### V1 - 4 March 2024 - Simple 1 page website with simple footer, hamburger button, and dark mode implementation.

### V2 - 5 March 2024 - Added pages for each card destination on the Tours section. When "Find out more" is clicked, you will be lead to a different page for each card.

## A little description about PassePort

PassePort is an online travel agency that provides the best experience for travellers all around the world. The goal is to be the best online travel agency across the globe. 

![PassePort Hero Page](/readme-images/passeport-homepage.png)

**PassePort website: http://passeport.site/**

## A little description about the website

### PassePort.site contains 5 main sections:

- Home
- About
- Gallery
- Tours
- Contact

Each tour has their own specific page


# Development Stages

## Day 1 - Build the HTML

The first stage of building the website is building the HTML structure using semantics. The HTML file is [here](/html/index.html).

### HTML Head
![Head HTML](/readme-images/html-head.png)
The HTML Head has several dependencies which are:

- Stylesheet link to style.css
- Custom font from Google fonts called "Noto Sans"

### Navigation Bar

The HTML navigation bar is made out of unordered list, h1 and images. 

![NavBar HTML](/readme-images/html-nav.png)


### Hero Page

The Hero page consists of Contact Us button, and the website title. Here, a video tag is used along with the video setting. Underneath the hero page, there is an animated flag slider representing the global inclusion that PassePort offers.

![Hero HTML](/readme-images/hero-html.png)

### About Page

The about page only consist of the section heading, a tagline for PassePort and a responsive PNG of the world map.

![About HTML](/readme-images/about-html.png)

### Gallery Page

The gallery page only contains an unsymmetrical grid that highlights several cities/islands that becomes the main attractive destinations for PassePort to market.

![About HTML](/readme-images/gallery-html.png)

### Tours Page

The Tours page shows several tours that PassePort can offer and highlights. The button in each tour will bring you to the tour specific page.

![About HTML](/readme-images/tours-html.png)

### Contact Page

The Contact page consists of a form, with each field label and input along with a text area where future customers can input their message to PassePort. A grid will be implemented for this section.

![About HTML](/readme-images/contact-html.png)

### Footer

The footer will be developed to contain more information, however the content displays the author.

![About HTML](/readme-images/footer-html.png)

## Day 2 - Decorate using external CSS and implementing Responsive design!

The next fun part of the website is to decorate using CSS. The css file is [here](/css/style.css). There is only one CSS file to speed up the website. There are several techniques used in the CSS implementation, namely:

### CSS Flexbox
This website uses CSS flexbox for the following parts of the page:

- NavBar
- Gallery (on mobile)
- Form (on mobile)

Example of flexbox implementation:

![flexbox implementation](/readme-images/flexbox-css.png)


### CSS Grid
CSS grid is used to design two parts of the page:
- Gallery (on desktop)
- Form (on desktop)

Example of a grid implementation:

![grid implementation](/readme-images/grid-css.png)


### Transition and Animation
This website uses a lot of transition especially in **Navigation** and **Gallery** on hover. 

Animation is also used on the animated flag slider underneath the hero page. Animation is implemented using @keyframes tag.

Example of a transition implementation: 
![transition implementation](/readme-images/transition-css.png)

Example of the use of @keyframes: 
![animation implementation](/readme-images/keyframes-css.png)


### Hamburger button

The navigation bar also contains a responsive hamburger button to replace the desktop navigation on mobile. Implementation is using @media query and transition. 

Hamburger button CSS:
![hamburger implementation](/readme-images/hamburger-css.png)

Some js is also used to trigger the hamburger button to expand the navigation stack when the hamburger button is clicked. You can view the script on [script.js](/script/script.js).

### Light and Dark mode

The light and dark mode switch is used to enhance the user experience, some people prefer light background and some prefers darker background. The navbar also contains a **Switch Mode** button to switch between light and dark mode. This feature is implemented using js and transition and animation, with an additional css tag of .dark-mode followed by the elements that need to change when dark mode is activated. 

CSS implementation of dark mode:
![dark mode implementation](/readme-images/dark-mode-css.png)

Script to trigger dark-mode activation and DOM manipulation:
![dark mode javascript](/readme-images/darkmode-js.png)

HTML onclick tag to trigger script to activate dark-mode:
![dark mode html](/readme-images/darkmode-html.png)

## Day 3 - Deployment