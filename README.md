# npm-package-tinker

This is a framework that we use to tinker with npm packages before publishing.

It comes preloaded with all the dependecies we use in our packages, such as Laravel Mix, Typescript or Vue.

## Usage

1. Clone your package. E.g.:  ```git clone https://github.com/teamfurther/cinderblock.git```
2. Go to the local folder where you cloned the package
3. Create an npm symbolic link in this folder: ```npm link```
4. Start working on cool new features
5. Clone this repo
6. Go to the local folder where cloned this repo
7. Type ```npm link <your-package-name>```. E.g. ```npm link @teamfurther/cinderblock```
8. Tinker away!
