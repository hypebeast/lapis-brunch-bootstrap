# lapis-brunch-bootstrap

Application built with [Lapis](http://leafo.net/lapis/), [Brunch](http://brunch.io) and [Bootstrap](http://getbootstrap.com/) running with [Docker](http://leafo.net/lapis/reference.html).


## Features

  * [Lapis](http://leafo.net/lapis) is a framework for building web applications using MoonScript or Lua that runs inside of a customized version of Nginx called OpenResty.
  * [Brunch](http://brunch.io) for building frontend code. Support for Javascript modules and CSS. In production mode all assets are minified.
  * [Bootstrap](http://getbootstrap.com/) v3.3.7.
  * [Docker](https://www.docker.com/) support using [docker-compose](https://docs.docker.com/compose/) for development and production.


## Getting started

  * Install (if you don't have them):
    * [Node.js](http://nodejs.org): `brew install node` on OS X
    * [Brunch](http://brunch.io): `npm install -g brunch`
  * Install dependencies
    * Brunch plugins and app dependencies: `npm install`
  * Run in _development_ mode:
    * `npm start` — watches the project with continuous rebuild.
    * Run the application with `docker-compose -f docker-compose-dev.yml up`
    * Now, you make changes to your code and just reload the page
  * Run in _production_ mode:
    * `npm run build` — builds minified project for production
    * Run the application with `docker-compose up`
  * Learn:
    * Write your server code in `server/` dir.
    * Write your frontend code in `app/` dir.
    * Place static files you want to be copied from `app/assets/` to `server/static`.
    * [Brunch site](http://brunch.io), [Getting started guide](https://github.com/brunch/brunch-guide#readme)
    * [Lapis reference](http://leafo.net/lapis/reference.html)
