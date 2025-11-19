




STUDENT NAME : RILWELE SUCCESS KHANGALE
STUDENT NUMBER:ST10489805
LECTURE: C NUKERI
MODULE: WEDE5020

 
Overview


This project demonstrates the development and enhancement of a responsive, accessible, and fully interactive website application. Following feedback from Part 2, comprehensive improvements have been implemented to meet assessment requirements, including enhanced functionality, accessibility, dynamic content, interactivity, and visual design. The website incorporates:



•	Enquiry & Contact Forms: Client-side validation, user feedback messages, and mailto integration.

•	Dynamic Content Loader: Fetching items from items.json with live search and sorting features.

•	Gallery with Lightbox: Interactive image viewing with next/previous navigation and keyboard support.

•	Responsive Design: Media queries ensuring a seamless experience across desktop, tablet, and mobile devices.

•	Accessibility Features: Alt text, ARIA attributes, focus management, and error messaging.

•	Google Maps Integration: Embedded map with marker and information window.

•	UI Components: Accordions, tabs, and modals for improved interaction.This Part 3 submission reflects all changes and improvements made based on Part 2 feedback, ensuring the project meets high standards of usability, functionality, and documentation.


Features Implemented:



•	Fully validated Enquiry Form with cost calculation and availability simulation.

•	Contact Form integration using mailto for direct communication.

•	Dynamic Items List loaded from data/items.json with live search and sort.

•	Gallery Lightbox for viewing images interactively.

•	Google Maps integration with ARIA accessibility support.

•	Responsive Layout with media queries for tablets and mobile devices.

•	Interactive UI Components (accordions, tabs, modals) with keyboard accessibility.

•	Consistent Styling across pages using an external CSS stylesheet.




Improvements and Updates (Based on Feedback from Part 2)




•	Enhanced form validation with detailed user guidance.

•	Added interactive lightbox for gallery images.

•	Improved mobile responsiveness using media queries.

•	Optimized CSS for typography, layout, and color consistency.

•	Implemented dynamic content loading from JSON data.

•	Added ARIA attributes and accessibility improvements.

•	Updated README with detailed overview, changelog, and references.

•	Refined navigation for clarity and active page highlighting.








Changelog


2025-11-05: Expanded the project overview to provide more context and clearly explain the purpose and functionality of the website. This addressed feedback from Part 2 to make the README more informative and user-friendly.

2025-11-06: Updated SEO elements including meta tags, keywords, and page titles to improve search engine visibility and overall discoverability.

2025-11-07: Enhanced the Enquiry Form with custom validation, clear error messages, and success notifications to improve user guidance and form functionality.

2025-11-07: Improved the Contact Form by adding client-side validation and mailto integration to ensure functional communication and a seamless user experience.

2025-11-08: Implemented accessibility improvements, including meaningful alt text for images and ARIA attributes for interactive elements, addressing accessibility feedback.

2025-11-08: Refined the navigation system by adding active page highlighting and responsive adjustments, making the site more intuitive and user-friendly across devices.

2025-11-09: Added a gallery lightbox overlay with next/previous navigation, hover effects, and keyboard accessibility to enhance interactivity and visual appeal.

2025-11-09: Developed a dynamic items list using items.json, with live search and sorting functionality to make the content more engaging and functional.

2025-11-10: Integrated Google Maps with a marker and information window, including ARIA attributes to ensure accessibility compliance and proper organization location display.

2025-11-10: Improved form usability by retaining input data and managing focus on invalid fields, creating a better user experience and reducing user errors.

2025-11-11: Updated overall UI styling, including typography, spacing, color contrast, and mobile responsiveness, ensuring consistency and readability across all devices.

2025-11-12: Refined the footer design by updating contact information and visual styling to complete the website structure.

2025-11-12: Added interactive UI components such as accordions, tabs, and modals, enhancing user engagement and functionality.

2025-11-12: Documented all changes in the README with a detailed changelog, expanded overview, and references to ensure comprehensive project documentation and clarity for assessment purposes.




The website includes the following core pages:


•	Home — Organisation overview, mission, vision, and featured projects.

•	About Us — Information about GFF’s history and impact.

•	Get Involved — Volunteer, donation, and partnership opportunities.

•	Resources — Educational guides, articles, and videos.

•	Enquiry — Interactive enquiry form with validation and cost estimation.

•	Contact — Contact form linked to mailto for direct communication.







Features Implemented
1.	Responsive Design


•	Mobile-first design ensures accessibility on all devices.
•	CSS Grid and Flexbox used for layouts including gallery and sections.
•	Media queries handle typography, forms, gallery grids, and hero sections.


2.	SEO Optimization

•	Unique <title> tags for each page.
•	Meta descriptions and keywords added to improve search engine visibility.
•	Descriptive alt text for all images to support accessibility and SEO.


3.	Accessibility


•	ARIA roles and aria-live attributes used for form validation messages.
•	Forms include labels for all inputs and semantic structure.
•	Keyboard navigation supported for modals, tabs, accordions, and lightbox gallery.
•	Color contrast ensures readability (dark green headers on light background).

4.	Forms





•	Enquiry Form

o	Client-side validation for name, email, phone, enquiry type, item, and quantity.
o	Calculates cost based on item type, quantity, and enquiry type.
o	Simulates availability of services or items.

•	Contact Form

o	Validates name, email, message type, and message length.
o	Composes mailto: link for user’s default email client.

5.	Dynamic Content


•	Loads items dynamically from data/items.json.
•	Live search and sorting functionality implemented:
o	Sort by price (ascending/descending) or title.
o	Filter items by keywords from title, summary, or tags.
•	Enquiry buttons pre-fill the enquiry form with the selected item.

6.	Gallery / Lightbox

•	Interactive gallery supports thumbnails.
•	Clicking an image opens a lightbox overlay with:
o	Next/Previous navigation
o	Keyboard navigation (ArrowRight, ArrowLeft, Escape)
o	Close button and click outside to close


7. Google Maps Integration


•	initMap callback used to display the organisation location.

•	Interactive marker with info window.

•	Accessible map with role="region" and aria-label.

8. UI Components

•	Accordions — Expandable panels for content.

•	Tabs — Switch between tabbed content with ARIA roles.

•	Modals — Pop-up windows with focus management and keyboard support.


Accessibility & SEO




•	All images have descriptive alt text.

•	Forms have proper labels and ARIA attributes.

•	Pages use semantic headings (<h1>, <h2>) and lists.

•	Navigation is keyboard-friendly and responsive.

•	Meta description and keywords present for all pages.




Technologies Used


•	HTML5 — Semantic page structure.

•	CSS3 — Styling, responsive design, and layout management.

•	JavaScript (ES6+) — Dynamic content, form validation, lightbox, search/sort.

•	ARIA — Accessibility roles and live regions.

•	Google Maps API — Interactive map.





Instructions



1.	Clone or download the repository.
   
3.	Open index.html in a modern browser.
   
4.	Ensure js/script.js and data/items.json are in correct paths.
   
5.	Update CONFIG.recipientEmail in script.js to your actual email.
   
6.	Include a valid Google Maps API key in the <script> tag on the contact page if using maps.











































































References







developer, 2025. Developers. [Online] 
Available at: https://developer.android.com/kotlin/learn
[Accessed 8 april 2025].
Google developer training team, 2018. Android Developer fundamentals course. [Online] 
Available at: https://developer.android.com/courses
[Accessed 15 May 2025].
Programiz, 2011. Learn to code for free. [Online] 
Available at: https://www.prograniz.com
W3Schools Team, 2025. learn to code. [Online] 
Available at: https://www.w3schools.com












