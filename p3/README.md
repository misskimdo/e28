# Project 3
+ By: Kim Do
+ Production URL: <http://e28p3.kimdo.me/>

## Outside resources
- [vue Uncaught (in promise) TypeError: Cannot read property 'name' of undefined](https://forum.vuejs.org/t/i-am-getting-an-error-in-render-function-typeerror-cannot-read-property-of-undefined-using-vuex-and-vue-router/13990)

## How is authentication being used in your application?
User must login to make recipes a favorite. The "add to favorite" button only shows up on individual recipe pages if user is logged in. Once user clicks the button, a star shows up in place of the button to show it is a favorite. User can also click the star to un-favorite it.

## What data entities of your application are being managed via Vuex?
- retrieving recipe
- authorizing, registering users

## E2E Testing screenshot

![Kim's Kitchen passing E2E tests](https://raw.githubusercontent.com/susanBuck/e28/main/zipfoods/e2e-tests.png)