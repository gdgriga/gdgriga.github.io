# Google Developers Group Riga
> GDG Riga homepage

## Description

This project is made up using [React](https://github.com/facebook/react) and [Babel](https://github.com/babel/babel).

## Installation

To make it run, just copy `site` directory to the `root` of the web server and you will be ready.

## Development

For development you will need Nodejs. In the terminal type:

```sh
$ npm install
```

This will install all dependencies for the project.

To build javascript files you have following commands:
 - `npm run build:dev` - to build dev version of js.
 - `npm run build:prod` - to build production ready version. **If you make changes to js files, run this command before committing changes.**

Also, because Github Pages use [Jekyll](https://github.com/jekyll/jekyll) engine, `docker-compose.yml` file is supplied to run the project like in production. If you are using Mac or Windows, install [Docker Toolbox](https://www.docker.com/products/docker-toolbox) and follow the instructions. Then go to the project folder and type:
```sh
$ docker-compose up -d
```

After that, website will be available at `<docker-machine-ip>:4000`.

## Structure
```
|- /site                                   -- public folder, that will be discoverable by jekyll
  |- /assets                               -- all compiled assets for the website
  |- /storage                              -- local storage (database)
    |- /banners                            -- event banners
    |- main-info.json                      -- main information about GDG Riga
    |- events-upcoming.json                -- list of upcoming events
    |- events-archive.json                 -- list of archived events
|- /app
  |- /components                           -- all React components
|- main.js                                 -- application entrypoint
```

## Tool

Tool is a thing that can be used to help fetch data about events and main info. Go to the project folder and type:
```sh
$ ./tool --help

  Usage: tool [options] [command]


  Commands:

    dupc [options]    Dump upcoming events
    dinfo [options]   Dump info about group
    darchive-raw      Dump raw archive from GDG[X]

  Options:

    -h, --help     output usage information
    -V, --version  output the version number
```
