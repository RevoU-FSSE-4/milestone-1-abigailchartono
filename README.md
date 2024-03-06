# Hello, welcome to Abigail's Milestone Assignment - PassePort

## Version History
### V1 - 4 March 2024 - Simple 1 page website with simple footer, hamburger button, and dark mode implementation.

### V2 - 5 March 2024 - Added pages for each card destination on the Tours section. When "Find out more" is clicked, you will be lead to a different page for each card.

### V3 re-arranging folder configuration for netlify deployment. Site is deployed on Netlify.

## A little description about PassePort

PassePort is an online travel agency that provides the best experience for travellers all around the world. The goal is to be the best online travel agency across the globe. 

![PassePort Hero Page](/readme-images/passeport-homepage.png)

**PassePort website: http://passeport.site/**
**Alternative link: moonlit-selkie-4788f7.netlify.app**

## A little description about the website

### PassePort.site contains 5 main sections:

- Home
- About
- Gallery
- Tours
- Contact

Each tour has their own specific page

# How to Install

### 1. Open up https://github.com/RevoU-FSSE-4/milestone-1-abigailchartono and click on _code_ then copy the HTTPS clone link
![Copy url](/readme-images/copy-https.png)

### 2. On your terminal, cd to your desired folder where you'd want the codes to land in
You can use this command
> cd [root/parent folder/child folder]

![cd to your directory](/readme-images/cd.png)

### 3. Run the git clone command on the desired folder

You can use this command
> git clone [copied url]

![git clone repository](/readme-images/git-clone.png)

### 4. On the folder of the cloned repository, you can open index.html on VS code or your code editor.

### 5. On the top bar, type in ">" then select external preview to view the website

![live preview on vscode](/readme-images/live-preview.png)


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

### Sign Up on Netlify

1. Go to https://www.netlify.com/
2. Click on SignUp
    ![Netlify SignUp](/readme-images/netlify-signup.png)
3. Select SignUp using GitHub
    ![SignUp with Github](/readme-images/signup-github.png)
4. Enter your GitHub Credentials
    ![GitHub Creds](/readme-images/github-credentials.png)
5. Congratulations! You've successfully logged in to Netlify!


### Deployment on Netlify

1. On your homepage on Netlify, go on to **Sites**
    ![Netlify Home](/readme-images/netlify-home.png)
2. Click on **New Site** and select _import from existing project_
    ![GitHub Deployment](/readme-images/netlify-newsite.png)
3. Select _deploy with GitHub_ as your deployment option
    ![deployment option](/readme-images/deploy-options.png)
4. Select the correct Repository on your GitHub account. Be sure that you are in the correct organisation.
    ![GitHub Creds](/readme-images/select-repo.png)
5. Fill in your deployment details, make sure you select the right branch, If you leave the Site Name as empty, Netlify will assign a random unused domain name for your site. Once done, click on **Deploy**
    ![Deployment Details](/readme-images/site-details.png)
6. Once you've deployed your site, Netlify will take some time to deploy your site. At this point, all you need to do is wait.
    ![Deployment Progress](/readme-images/deploy-progress.png)
7. Your Deployment is completed once you can see your domain url under your site name.
    ![Deployment Successful](/readme-images/deployed.png)
8. Congratulations! You just successfully deployed your site directly from GitHub!


### Initializing your Custom Domain on Netlify

1. Go to your Netlify Account, then login.

2. Go to _Site_ then select the website that you want to set up the custom domain for. 
    ![Select your site](/readme-images/netlifyhome.png)
3. Click on _Domain Management_.
    ![Domain Management](/readme-images/domain-management.png)
4. Click on _Add a Domain_.
    ![Add a domain](/readme-images/add-domain.png)
5. Enter the domain name that you have owned, then click on _Verify_, then _Add Domain_
    ![Enter domain](/readme-images/enter-domain.png)
6. You will be redirected to your _Production Domain_ page, then next to your domain name, click on _Options_ then select _Go to DNS Panel_
    ![DNS Panel](/readme-images/dns-panel.png)
7. Scroll down to your Name Servers, then copy all of the listed name servers and save them to clipboard, or any text editor. (This step is taken just to keep these nameservers).
    ![Nameservers](/readme-images/name-servers.png)
8. Go to your **Domain Registrar**, login and go to your Custom Domain's domain management, then go to the DNS/Nameserver page. 
    ![Manage Domain](/readme-images/manage-domain.png)
9. Click on Change Nameservers, then paste all the copied nameservers into the 4 available fields.
    ![Change nameservers](/readme-images/change-nameservers.png)
10. It will take 24 hours for your nameservers changes to propegate. After 24 hours, check again and your custom domain should now be connected to your