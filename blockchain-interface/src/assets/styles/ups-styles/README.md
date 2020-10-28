# Using this ups-styles archive		

This is an archive of ups-styles for usage off of the UPS network.

## How to

1. Navigate to the root of your angular project (i,e, where `package.json` is located)
2. Unzip contents of `ups-styles.zip` to `./src/assets/styles`
3. For all example usages of `ups-styles` packages, within any import statements, replace `@ux/<package-name>` or `node_modules/@ux/<package-name>` with `assets/styles/<package-name>` 
-- Do a similar exercise with anything found in build configuration, such as `angular.json`
-- For each case, take care to ensure proper relative paths are used to point to these `./src/assets/styles` folders
4. Remove any references (if any) to `@ux/` packages from your `package.json`