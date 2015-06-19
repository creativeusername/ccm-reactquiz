## CCM-Reactquiz

ccm-reactquiz is a web component which lets you easily create, share, and do quizes.
It uses ccm.js to be a dynamically loadable web component and react.js as a
view layer. ccm-reactquiz is part of a college project and a work in progress.

To see ccm-reactquiz in action just clone the repository and open up ./build/ccm-reactquiz.html
in Firefox (Chrome doesn't work yet, haven't tried others).

`git clone https://github.com/creativeusername/ccm-reactquiz.git`

## Developement

If you want to hack on ccm-reactquiz yourself you will have to install the
dependencies with `npm install` and start watching for changes with `npm start`.

## Usage

Once ccm-reactquiz reaches a stable version you will be able to dynamically load
it with:
```
ccm.render(
  'https://raw.githubusercontent.com/creativeusername/ccm-reactquiz/master/build/reactquiz.js',
  {...}
);
```
