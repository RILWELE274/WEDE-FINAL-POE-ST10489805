




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
Features Implemented
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


Date	Section/Feature	Change/Improvement	Notes/Feedback Addressed
2025-11-05	README	Expanded project overview	Feedback: Provide context and purpose
2025-11-06	SEO	Updated meta tags, keywords, and page titles	Feedback: Improve search engine visibility
2025-11-07	Enquiry Form	Custom validation, error messages, success messages	Feedback: Ensure clear guidance and form functionality
2025-11-07	Contact Form	Validation & mailto integration	Feedback: Forms must be functional and user-friendly
2025-11-08	Accessibility	Added alt text, ARIA attributes	Feedback: Improve accessibility for screen readers
2025-11-08	Navigation	Active page highlighting & responsive adjustments	Feedback: Improve usability and clarity
2025-11-09	Gallery	Added lightbox overlay with navigation	Feedback: Enhance interactivity and visual appeal
2025-11-09	Dynamic Items List	Live search & sorting	Feedback: Content must be dynamic and user-friendly
2025-11-10	Google Maps	Embedded map with ARIA attributes & marker info	Feedback: Display organization location clearly
2025-11-10	Forms	Retain data and focus management for invalid fields	Feedback: Improve user experience
2025-11-11	UI & Styling	Typography, spacing, color contrast, mobile responsiveness	Feedback: Visual consistency and responsive design
2025-11-12	Footer	Updated contact info and styling	Feedback: Ensure footer completeness
2025-11-12	General	Added accordions, tabs, modals	Feedback: Improve interactivity and engagement
2025-11-12	Documentation	Added detailed changelog, overview, references	Feedback: Ensure comprehensive project documentation



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




Technologies Used


•	HTML5 — Semantic page structure.
•	CSS3 — Styling, responsive design, and layout management.
•	JavaScript (ES6+) — Dynamic content, form validation, lightbox, search/sort.
•	ARIA — Accessibility roles and live regions.
•	Google Maps API — Interactive map.





Instructions



1.	Clone or download the repository.
2.	Open index.html in a modern browser.
3.	Ensure js/script.js and data/items.json are in correct paths.
4.	Update CONFIG.recipientEmail in script.js to your actual email.
5.	Include a valid Google Maps API key in the <script> tag on the contact page if using maps.

Accessibility & SEO
•	All images have descriptive alt text.
•	Forms have proper labels and ARIA attributes.
•	Pages use semantic headings (<h1>, <h2>) and lists.
•	Navigation is keyboard-friendly and responsive.
•	Meta description and keywords present for all pages.














References
Anon., n.d. introduction to programming logic module manual. 1nd ed. s.l.:1987.
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












