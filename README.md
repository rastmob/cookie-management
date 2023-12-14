
# RastMobile Cookie Consent Script

## Description
This repository contains a JavaScript-based cookie consent management system designed for websites to comply with privacy regulations. It includes a cookie bar and a settings modal, allowing users to manage their preferences for different categories of cookies.

## Features
- Dynamically generated cookie settings modal
- Support for multiple cookie categories (e.g., marketing, analytics)
- Accept/Reject options for individual cookie categories
- Easy customization and integration

![Screen Shot 2023-12-14 at 19 35 52](https://github.com/rastmob/cookie-management/assets/58806790/97a55426-263b-4419-9ad6-03bc4106159d)


## Installation
1. **Clone the Repository:**
   ```bash
   git clone https://github.com/yourusername/rastmobile-cookie-consent.git
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

## Contributing
Contributions are welcome! If you have suggestions or improvements, feel free to fork this repository and submit a pull request.

## License
This project is licensed under the [MIT License](LICENSE).

## Contact
For questions or feedback, please contact contact@rastmobile.com / mehmetakifalp@gmail.com 
