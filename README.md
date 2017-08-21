# weebly

> weebly frontend project

## Production Build
This project uses the vue-cli webpack template. The `npm run build` command in `package.json` runs the production build, which outputs everything into the `./dist` folder. This folder containers and `index.html` file and a `static/` folder.

- `index.html`: The template for this file is located at the root of this project with the same name. webpack takes this template and adjusts certain aspects of the file that make it production ready. For instance, the css(with hash), js(with hash), and meta information are injected into the output. Images are converted into data uri's and injected into this file wherever they're used. The file is also minified.

- `static/`: This folder containers the compiled and minified css and js folders/files as well as the source maps for each.
