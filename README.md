
# RastMobile Cookie Consent Script

## Description
This repository contains a JavaScript-based cookie consent management system designed for websites to comply with privacy regulations. It includes a cookie bar and a settings modal, allowing users to manage their preferences for different categories of cookies.

## Features
- Dynamically generated cookie settings modal with multi-language support.
- Support for multiple cookie categories (e.g., Necessary, Analytics, Marketing).
- Accept/Reject options for individual cookie categories with detailed audit logging.
- Easy customization and integration with tag management systems.

![Modal Content](https://github.com/rastmob/cookie-management/assets/58806790/0aeb057b-3c26-4bb5-a0f1-64bd6fc05d3a)


## Installation
1. **Clone the Repository:**
   ```bash
   git clone https://github.com/rastmob/rastmobile-cookie-consent.git
   ```

2. **Include the Script and CSS:**
   Add the following lines to your HTML file:
   ```html
   <link rel="stylesheet" href="path/to/style.css">
   <script src="path/to/cookiesettings.js"></script>
   ```

3. **Add Script Tags:**
   Include your script tags with the necessary `data-` attributes in your HTML file. For example:
   ```html
   <script
     type="text/plain"
     data-rastmobile-cookiecategory="marketing"
     data-scriptname="Marketing Script"
     data-scripturl="/path/to/marketing-script.js">
   </script>
   ```

## Usage
The script automatically generates a cookie consent bar and a settings modal on page load. Users can choose to accept or reject cookies by category. The settings modal can be accessed by clicking the "Cookie Settings" button in the cookie bar.

### Customization
You can customize the appearance and behavior of the cookie consent system by modifying `style.css` and `cookiesettings.js`.

## Supported Versions
- Google Chrome: Version 60 and later
- Mozilla Firefox: Version 55 and later
- Safari: Version 10 and later
- Microsoft Edge: Version 15 and later
- Opera: Version 47 and later
- Internet Explorer: Version 11

### Notes:
- Mobile Browsers: If your audience uses mobile devices significantly, consider support for mobile browser versions like Chrome for Android, Safari on iOS, and Samsung Internet.
- Fallbacks and Polyfills: For older browsers, consider using JavaScript polyfills or fallback strategies for better compatibility.
- Testing: Always test your script across different browsers and versions to ensure compatibility.
- Updates: Keep an eye on browser market share and update supported versions accordingly, as browser landscapes can change relatively quickly.


## Contributing
Contributions are welcome! If you have suggestions or improvements, feel free to fork this repository and submit a pull request.

## License
This project is licensed under the [MIT License](LICENSE).

## Contact
For questions or feedback, please contact contact@rastmobile.com / mehmetakifalp@gmail.com 
