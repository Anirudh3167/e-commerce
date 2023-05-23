

# Website Structure
This website is divided into two parts :-
   ```
   1. User site
   2. CMS site
   3. Blocked pages
   ```

### User Site
These are the pages that are available to everyone.
```
  1. Dashboard
  2. About
  3. Contact
  4. Product page
  5. cart
  6. favourites
  7. order tracking
  8. login / signup
  9. Profile page
```

### CMS site
These are the pages that are made for the company for content management. 

Users do not have access to These pages.
```
  1. Login
  2. Add Product
  3. Dashboard
```

### Blocked pages
Although this not generally used but the purpose of this is when some pages have a time limit and are needed to be disabled.

They will appear here.
```
  1. Login (CMS login)
  2. Dashboard
```

# DBMS 

1. User

       1.1. First name
       1.2 Last name
       1.3 mobile
       1.4 Email
       1.5 password (encrypted)
       1.6 Account Type
       1.7 Address (optional)
       1.8 Validity (For subscribed users)
2. Product

       2.1 Title
       2.2 sub-Title
       2.3 Preview content (optional)
       2.4 content
       2.5 Rating (done by algorithm)
       2.6 price
       2.7 stock
       2.8 Name (optional)
       2.9 TAGS (used for easy identification)
       2.10 Manufacturing company
       2.11 MFD date
       2.12 EXP date (default None)
       2.13 Entry date
       2.14 Contains (like a mobile box containing a charger with a USB cable,...)
       2.15 Detail (Detailed info regarding its constituents like processor in case of mobile)
       2.16 GST
       2.17 Discount
 
 3. Reviews 

        3.1 Product ID (Foreign Key)
        3.2 Rating
        3.3 Content
        3.4 Date Posted
 4. Orders
 
        4.1 OrderId (Primary key)
        4.2 Items list (many to many)
        4.3 total price
        4.4 delivery date
        4.5 status
        4.6 User (Many orders to One user)
        4.7 Reason (if not delivered)
        4.8 Address (for custom address)
5. Cart 

       5.1 User (One to One)
       5.2 Items list (many to many)
6. Item 

       6.1 ItemId (Primary key)
       6.2 ProductId (Foreign Key)
       6.3 Qty (check <= stock(ProductId))
7. Favourite

       7.1 User (One to One)
       7.2 ProductId (many to many)

# Backend 
1. User Authentication
2. API handling 
3. Payment Checkout
