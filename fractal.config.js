'use strict';

/* Create a new Fractal instance and export it for use elsewhere if required */
const fractal = module.exports = require('@frctl/fractal').create();

fractal.components.engine("@frctl/nunjucks"); // register the Nunjucks adapter for your components
fractal.components.set("ext", ".njk"); // look for files with a .nunj file extension

/* Set the title of the project */
fractal.set('project.title', 'Cor-Web Components Library');

/* Tell Fractal where the components will live */
fractal.components.set('path', __dirname + '/src/components');

/* Tell Fractal where the documentation pages will live */
fractal.docs.set('path', __dirname + '/src/docs');

/* Static assets */
fractal.web.set('static.path', __dirname + '/src');

/* Build directory */
fractal.web.set('builder.dest', __dirname + '/public');

