# innovateq

# Steps to run the app

1. Install all dependencies from package.json using `npm install` inside the folder.

2. Since we are using couple of api in our application, before runnning need to up the json db. Navigate to data folder and run the command `json-server --watch db.json` - make sure that you already installed http server using the commmand - `npm install -g json-server`
Try these urls are working
 . http://localhost:3000/users
 . http://localhost:3000/cards
 . http://localhost:3000/blogs
3. Now run our angular application on different terminal using `ng serve` - inside project folder
4. Once compiled successfully, application available on `http://localhost:4200`

## Additional steps required [step 1 & 2 if package.json not updating the packages manuallly need to run]
1. Adding material UI - `ng add @angular/material`
2. Installing flex layout - `npm i @angular/flex-layout`
3. Go to `node_module/@angular/material/_theming.scss`

Add below color palllet

$mat-custom-blue: (
  50 : #e9f4fe,
  100 : #c8e3fc,
  200 : #a3d0fb,
  300 : #7ebdf9,
  400 : #63aff7,
  500 : #47a1f6,
  600 : #4099f5,
  700 : #378ff3,
  800 : #2f85f2,
  900 : #2074ef,
  A100 : #ffffff,
  A200 : #f3f8ff,
  A400 : #c0d8ff,
  A700 : #a7c8ff,
  contrast: (
    50: $dark-primary-text,
    100: $dark-primary-text,
    200: $dark-primary-text,
    300: $light-primary-text,
    400: $light-primary-text,
    500: $light-primary-text,
    600: $light-primary-text,
    700: $light-primary-text,
    800: $light-primary-text,
    900: $light-primary-text,
    A100: $dark-primary-text,
    A200: $light-primary-text,
    A400: $light-primary-text,
    A700: $light-primary-text,
  )
);
