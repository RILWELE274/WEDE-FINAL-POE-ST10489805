# Green Future Foundation Website – Part 3
**Module:** Web Development (WEDE5020)  
**Student:** [Your Name]  
**Year:** 2025  

---

## 1. Introduction
Part 3 of the Green Future Foundation project focuses on enhancing the functionality, interactivity, and SEO optimization of the existing website developed in Part 2.  
While Part 2 emphasized CSS and responsive layouts, Part 3 builds on that foundation by adding **JavaScript features**, **SEO optimization**, and **testing** to create a more dynamic and user-friendly experience.

---

## 2. Objectives
By the end of this part, the following objectives were achieved:
- Integrate JavaScript for form validation and user interactivity.
- Improve accessibility through ARIA attributes and semantic HTML.
- Optimize the website for search engines using metadata, sitemap, and robots.txt.
- Validate HTML, CSS, and JavaScript for compliance and usability.
- Demonstrate testing across devices and browsers.

---

## 3. Implementation Overview

### 3.1 JavaScript Features
**File:** `js/script.js`  
JavaScript was introduced to improve user experience and validate form submissions.  
Key functionalities include:
- **Form Validation:** Ensures all enquiry form fields are filled before submission.  
  - Checks for a valid email format.  
  - Displays a custom response message dynamically in the `#enquiry-response` div.  
- **Dynamic Feedback:** Users see real-time confirmation or error messages without reloading the page.  
- **ARIA Integration:** The `aria-live="polite"` attribute provides accessible live updates for screen readers.  

```js
// Example JavaScript validation summary
document.getElementById("enquiryForm").addEventListener("submit", function(event) {
  event.preventDefault();
  const name = document.getElementById("e-name").value.trim();
  const email = document.getElementById("e-email").value.trim();
  const message = document.getElementById("e-message").value.trim();
  const response = document.getElementById("enquiry-response");

  if (!name || !email || !message) {
    response.textContent = "Please complete all required fields.";
    response.style.color = "red";
  } else {
    response.textContent = "Thank you for your enquiry. We will contact you soon!";
    response.style.color = "green";
    this.reset();
  }
});
3.2 SEO Optimization
The website was optimized for better visibility on search engines.

SEO Enhancements:

Added <meta name="description"> and <meta name="keywords"> for every HTML page.

Implemented robots.txt to guide search engines:

txt
Copy code
User-agent: *
Allow: /
Disallow: /js/
Disallow: /images/temp/
Sitemap: https://www.greenfuturefoundation.org/sitemap.xml
Created sitemap.xml listing all pages for improved indexing.

Used descriptive and semantic HTML tags (<header>, <main>, <section>, <footer>).

3.3 Enquiry Page (New Feature)
A new page enquiry.html was created to allow users to contact the organization about volunteering, sponsorships, or partnerships.

Features:

Accessible form elements (label and for attributes).

Dropdown menu for enquiry type.

Checkboxes for user availability.

JavaScript validation and dynamic messages.

Fully responsive layout with consistent styling.

4. Testing and Validation
4.1 Browser and Device Testing
Platform	Browser Tested	Result
Windows 10	Chrome, Edge	Passed
macOS	Safari	Passed
Android	Chrome Mobile	Passed
iOS	Safari Mobile	Passed

4.2 Validation
HTML: Passed W3C HTML Validator (no critical errors).

CSS: Passed W3C CSS Validator (warnings resolved).

JS: Tested using console; no syntax errors or runtime issues.

4.3 Accessibility
All forms include label and aria-live for screen readers.

Color contrast verified for readability.

5. Improvements from Part 2
Area	Part 2	Part 3
Focus	CSS & Responsive Design	JavaScript & SEO
Styling	Consistent layout, colors, spacing	Enhanced interactivity
Functionality	Static pages	Dynamic form behavior
SEO	Basic metadata	Full robots.txt & sitemap
Testing	Layout responsiveness	Cross-browser + form validation

6. Repository Files
File/Folder	Description
index.html	Homepage
about.html	About the foundation
get-involved.html	Volunteer, Donate, Partner sections
resources.html	Learning resources
contact.html	Contact page with map
enquiry.html	New enquiry form with JS validation
style.css	Global styling and responsive design
js/script.js	JavaScript functionality
robots.txt	SEO crawler instructions
sitemap.xml	Sitemap for search engines
screenshots/	Device and layout screenshots

7. References
W3Schools Team, 2025. Learn to Code. [Online] Available at: https://www.w3schools.com

Programiz, 2011. Learn to Code for Free. [Online] Available at: https://www.programiz.com

Canva, 2025. Wireframes. [Online] Available at: https://www.canva.com/

Figma, 2025. Design Resources. [Online] Available at: https://www.figma.com/community/wireframes?editor_type=figma

8. Conclusion
This phase (Part 3) successfully expanded the Green Future Foundation website from a static responsive design into an interactive, accessible, and SEO-optimized platform.
Through JavaScript functionality and validation, improved metadata, and performance testing, the website now offers a complete, professional, and user-friendly experience aligned with modern web development standards.