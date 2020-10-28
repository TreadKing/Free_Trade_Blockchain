# `@ux/styles-ionic` - UPS Ionic Styles

This module represents the UPSified ionic styles.


## Usage

To install this module, run `npm i @ux/styles-ionic --save`

<!--TODO embed image of theme colors-->
After that, select from one of the following themes:

- earn
- help
- move
- plan
- rest
- view
- work


### SCSS

To incorperate these files in your scss-based project, import the following files: 

```scss
@import 'node_modules/@ionic/ionic/css/core.css'; // Import Ionic Core CSS
@import 'node_modules/@ux/styles-ionic/scss/ionic'; // Import structural UPS ionic styles
@import 'node_modules/@ux/styles-ionic/scss/themes/work'; // Import themed ionic variables
```

__Note:__ If you are building your scss with Webpack, you can replace `node_modules/` with a tilde `~` instead.
`'~@ionic/ionic/css/core.css'`

### CSS

To incorperate these files in your css-based project, import the following files: 

```html
<head>
    <!-- Import Ionic Core CSS-->
    <link rel="stylesheet" type="text/css" href="node_modules/@ionic/ionic/css/core.css">
    <!-- Import structural UPS ionic styles-->
    <link rel="stylesheet" type="text/css" href="node_modules/@ux/styles-ionic/dist/ionic.css">
    <!--Import themed ionic variables-->
    <link rel="stylesheet" type="text/css" href="node_modules/@ux/styles-ionic/dist/themes/work.css">
</head>
```