pureweave — SIMPLE HTML WEBSITE

OPEN ON YOUR COMPUTER
1. Extract the ZIP fully. Do not open the website from inside the ZIP preview.
2. Double-click index.html. No installation, PHP, WordPress or server needed.
3. On Windows you can also double-click START-WINDOWS.bat.
4. To manage the shop, use Shop administration at the bottom of the homepage.
   The dashboard opens without a password at index.html#admin.

UPLOAD TO STATIC HOSTING
Upload index.html and ALL supporting .js/.css files and assets/ together.
Do not upload only index.html. Preserve filenames and folder structure.
The website works on hosting that serves ordinary HTML/CSS/JavaScript files.
WhatsApp messaging needs an internet connection; UPI needs a configured merchant
UPI address/QR and a compatible payment app. No external scripts or fonts used.

EDIT PRODUCTS / LOGO / PRICES
Use the dashboard to add/edit/delete products, upload square photos, set prices,
MRP/discounts, description, category, sizes, cm/inch dimensions and collection.
Shop settings lets you upload the centred logo, set UPI ID/QR, shipping and notice.
Product images are cropped square. Smaller images conserve browser storage.
Sample products and illustrations are examples; replace them before selling.
Top selling / Most liked / Popular are owner-assigned collections, not analytics.

PUBLISH YOUR EDITS FOR OTHER VISITORS
Browser edits do NOT change the actual files on your host.
1. In the dashboard click Download catalogue for hosting.
2. A new catalogue-data.js file downloads. It contains pictures, prices and settings.
3. Replace the old catalogue-data.js in the website folder or on hosting with this file.
4. Visitors refresh to see the new catalogue. Ensure the downloaded filename is exactly
   catalogue-data.js, without a suffix such as (1).
5. This export intentionally excludes customer orders and details.
Your host's caching may require a cache refresh after replacing the file.

LOCAL STORAGE AND BACKUPS
Data is saved in this browser on this device. Use Backup browser data regularly.
Restore backup replaces the current browser's products/settings/orders after confirmation.
Clearing browser data, private browsing, moving the folder or changing browser/device can
lose access to saved data. Keep backups. Browsers may impose a small storage limit;
compress photos and download backups. If a save reports full storage, reduce photo sizes.
File:// browser storage behaviour varies; use the same index.html path. The dashboard
shares the SAME index.html document via #admin to keep local records together.
If your browser blocks local storage, enable it or try another modern browser.
No local HTML application can guarantee persistent storage across all browsers/devices.

ORDERING / PAYMENT
Add to cart, choose size/quantity, then checkout with name and WhatsApp number.
Address is optional and can be confirmed by chat. A request number is created.
Click Send order on WhatsApp and press Send in WhatsApp to submit to +91 9796111777.
The static website itself does NOT deliver orders to a central server or notify the owner.
Your WhatsApp inbox is the shared order channel for customers on different devices.
The dashboard only shows orders created in THAT browser, or imported via a backup.
Local order records and printable order invoices are conveniences, not a shared backend.
Verify prices, stock, shipping and payment manually in WhatsApp before confirmation.
UPI payment is manual and remains unverified. Upload your actual merchant QR and enter
verified UPI ID. A phone number alone does not establish a valid UPI ID.
No automatic bank verification, payment gateway, courier or stock reservation included.
Invoices can be printed / saved as PDF from the dashboard. They are not GST tax invoices.
Final delivery, returns and privacy terms should be added for your business before sales.

ADMIN ACCESS
There is no password. Any visitor can open this static admin editor, but edits affect
only their own browser. They cannot change your hosted catalogue file through the page.
A real secure administrator area or centrally stored orders needs a server/database
or connected commerce service. This package deliberately does not require those.

FILES
index.html — storefront and dashboard entry point
admin.html — shortcut to index.html#admin
style.css — dark green theme / phone layouts
app.js — cart, wishlist and WhatsApp checkout
admin.js — local product/order/customer/invoice editor
local-store.js — browser data handling
catalogue-data.js — published products, pictures and settings
admin-template.js + bootstrap.js — dashboard without server requests
assets/ — sample illustrations
START-WINDOWS.bat — optional Windows opener

VERIFICATION
JavaScript syntax and browser-storage logic tested, including order calculations,
product persistence, catalogue updates and data validation. Actual iPhone/Android
browser interaction and live WhatsApp/UPI payments have not been tested here.
The package contains NO PHP or server dependency. No deployment has been made.
