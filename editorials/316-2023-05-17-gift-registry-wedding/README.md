Author: Evan Marshall

Company: Hudson's Bay

Date: 2023-05-16

Version: 1.0.0

# A Guide on How to Setup a New Editorial

## Instructions

1. Copy the most recent editorial in order to ensure the most updated code will be used. Paste the editorial in the "hbc-editorials" directory.

2. Rename the copied editorial using the following syntax (www-yyyy-mm-dd-name-of-editorial).

3. Rename the "name" and "description" in the directory's package.json to match the directory name.

4. Run `yarn install` in order to install required node packages for the project.

The editorial directories are broken down into a "dev" directory (may not show until gulp build process has been run), "gulp" directory and a "src" directory.

The "dev" directory is created by running `g` or `g devFrench` in the command line / terminal. It contains all of the compiled / minified code (scripts, styles and html) to be used in our staging environment (production).

The "gulp" directory contains all of the build, compile, minify, testing and linting scripts to be used by the gulpfile.js in the root directory. These scripts help automate most of the development processes (i.e. watching for code changes and compiling sass into css).

The "src" directory contains all development directory and files (not normally used in production). The "assets" directory contains all documents, images, videos, etc. The "html" directory contains the templated homepage/index for both English and French. The homepage is utilized by the gulp build process in order to combine any templated HTML sections from the "templates" directory into the production homepage including the HTML head elements and any custom scripts and / or libraries. The "js" folder contains all custom scripts and external JavaScript libraries. The "scss" folder contains all of the styling to be used in the project. The project styles are broken down into smaller chunks in order to create a "DRY" structure to the style framework. The structure or architecture follows a standard similar to SMACSS (<https://sass-guidelin.es/#architecture>), which breaks down the styles into re-usable components, mixins, variables, theming and independant styles; to name a few. The style framework for editorials wil continue to be refined and standardized using design systems in future versions of this repository.

Lastly, the "templates" folder breaks down the HTML code into chunks of code, depending on the required needs of the editorial design and our CMS (Salesforce Commerce Cloud). The default file in this directory will be a singular "main.html" for both English and French.

## Instructions Cont'd

5. Have a look at the design file provided for the editorial and determine which page elements can be created using SFCC templates and which elements will have to be created using custom code. If only one section of custom code will be required then leave only a "main.html" file in the English and French directories of the "templates" directory and make sure the "html" folder contains "main.html" in the templates section of the "index.html." See the following code sample:

```

<body>

<!-- START OF #DSG-EDITORIAL. -->

<div id="dsg-editorial" class="dsg-editorial dsg-en" id="top">

<!-- START OF MAIN PAGE CONTENT. -->

<main>@@include('../../templates/english/main.html')</main>

</div>

<!-- END OF #DSG-EDITORIAL. -->

<!-- inject:js -->

<!-- endinject -->

</body>

```

If the content of the editorial will be a mixture of SFCC modules as well as custom code then split up the HTML in the "templates" folder to make up the custom code between the SFCC modules (i.e. a top.html, main.html, bottom.html).

6. Code the editorial files in the "src" folder and run `g` or `g devFrench` in the command line interface / terminal in order to fire up the local development server and watch for file changes. The server should open up a browser window at local host to allow for debugging and styling.

7. After development is completed you can stop the dev server using `CTRL C` in the command line interface / terminal. You will want to remove `<!-- inject:css --><link rel="stylesheet" href="/css/main.min.css"><!-- endinject -->` and `<!-- inject:js --><script src="/js/main.min.js"></script><!-- endinject -->` in the "index.html" file in the "dev" directory. This code is only used during the development process in order to load styles and scripts in the local server. You will then replace the aforementioned snippets of code with inline `<style></style>` and `<script></script>`, respectively (if required, some editorials will not have scripts).

8. If your editorial is broken up into SFCC modules as well as custom code then you only need to add the inline styles and scripts to the final HTML template that will be used in the last Salesforce content slot.

9. Copy and paste your code into the corresponding Salesforce content slot and you are done! You will have to make any changes or debugging to the source files, run the gulp development process again and follow steps #7 and on.

10. Make sure you update the "hbc-editorials" Github repository with your changes:

````

git add a .

git commit -m "commit message here."

git push```

````
