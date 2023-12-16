<!-- client -->
## there are 6 pages: Home, Cart, Login, Register, Product, ProductList and 9 components: 
## font style: Urbanist

# Steps
## 1- I locally clone this project. Initialy it was not working because of the old packages then I search the solution for this problem at stackoverflow and the solution I got.

```js
npm install -g yarn-upgrade-all
yarn-upgrade-all
```

## 2- Navbar and Announcement section is developed without much effort. A minor issue occurred while adding tailwind styles to material UI search icon. The styles were applied but after these styles material UI default styles were applied too and the CSS rule is that the later styles have higher priority. So, to solve this, injectFirst prop was added to stylesProvider so that the material UI styles should be added first.

## 3- While implementing slider I designed almost similar component as the actual was but the problem is that I haven't think about how slider functionality can be implemented because of that a lot of time was wasted. Now, its time to understand how to implement slider functionality.

## 4- Tailwind styles were not added to element with javascript variable. Thanks to ALLAH SWT and the brother who gave the solution to this problem on stackoverflow.

## All pages have been developed, responsiveness will be added.