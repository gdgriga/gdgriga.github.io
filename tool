#!/usr/bin/env node
'use strict';

require('es6-promise').polyfill();
require('isomorphic-fetch');
var chalk = require('chalk');
var program = require('commander');
var fs = require("fs");

var endpoints = {
  meetup: {
    upcoming: '//api.meetup.com/GDG-Riga/events?status=upcoming&fields=plain_text_description&omit=description',
    info: '//api.meetup.com/GDG-Riga?photo-host=public&sig_id=201794305&fields=plain_text_description&only=plain_text_description%2Cname&sig=48dcf296356ef34c77d6f6d43fdff416219c280f'
  },
  gdgx: {
    archive: '//hub.gdgx.io/api/v1/chapters/105327287996815830446/events'
  }
};

var storage = {
  events_upcoming: './site/storage/events-upcoming.json',
  info: './site/storage/main-info.json'
};

program
  .version('1.0.0-alpha');

program.command('dupc')
  .description('Dump upcoming events')
  .option('-s', '--source [source]', 'Which source to use for upcoming events')
  .action(options => {
    var mode = options.source || "meetup";

    if (! endpoints.hasOwnProperty(mode)) {
      console.log(chalk.white.bgRed.bold('Source `%s` not supported, yet.'), mode);
      process.exit();
    }

    fetch(endpoints.meetup.upcoming)
      .then(response => {
          if (response.status >= 400) {
              throw new Error("Bad response from server");
          }
          return response.json();
      })
      .then(stories => {

        var toWrite = stories.map(function(storie) {
          return {
            name: storie.name,
            places_total: (storie.rsvp_limit || 0),
            places_reserved: storie.yes_rsvp_count,
            time: storie.time,
            utc_offset: storie.utc_offset,
            description: storie.plain_text_description.replace(/(\r\n|\n|\r)/gm,"").substring(0, 351) + '[...]',
            banner: '',
            link: storie.link,
            venue: {
              name: storie.venue.name,
              lat: storie.venue.lat,
              lon: storie.venue.lon,
              address: storie.venue.address_1,
              city: storie.venue.city,
              country: storie.venue.localized_country_name
            }
          }
        });

          fs.writeFileSync(storage.events_upcoming, JSON.stringify(toWrite, null, 2));
          console.log(chalk.white.bgGreen.bold('Upcoming events dumpled! Check %s and make necessary edits.'), storage.events_upcoming);
      });
});

program.command('dinfo')
  .description('Dump info about group')
  .option('-s', '--source [source]', 'Which source to use for upcoming events')
  .action(options => {
    var mode = options.source || "meetup";

    if (! endpoints.hasOwnProperty(mode)) {
      console.log(chalk.white.bgRed.bold('Source `%s` not supported, yet.'), mode);
      process.exit();
    }

    fetch(endpoints.meetup.info)
    .then(response => {
      if (response.status >= 400) {
        throw new Error("Bad response from server");
      }

      return response.json();
    })
    .then(info => {
      var toWrite  = JSON.parse(fs.readFileSync(storage.info, 'utf8'));
      console.log(toWrite);
      toWrite = Object.assign(toWrite, {
        title_long: info.name,
        description: info.plain_text_description
      });

      fs.writeFileSync(storage.info, JSON.stringify(toWrite, null, 2));
      console.log(chalk.white.bgGreen.bold('Upcoming events dumpled! Check %s and make necessary edits.'), storage.info);
    });
  });

program.command('darchive-raw')
  .description('Dump raw archive from GDG[X]')
  .action(() => {
    fetch(endpoints.gdgx.archive)
    .then(response => {
      if (response.status >= 400) {
        throw new Error("Bad response from server");
      }

      return response.json();
    })
    .then(archive => {
      var toWrite = archive.items.map(item => {
        return {
          name: item.title,
          participants: (item.participants || 0),
          time: Date.parse(item.start),
          utc_offset: 10800000,
          description: item.about.replace(/(\r\n|\n|\r)/gm,"").substring(0, 351) + '[...]',
          banner: '',
          link: item.eventUrl,
          venue: {
            name: '',
            lat: item.geo.lat,
            lon: item.geo.lng,
            address: item.location,
            city: '',
            country: ''
          }
        }
      });

      toWrite.sort(function(a, b) {
        return parseFloat(b.time) - parseFloat(a.time);
      });

      var fileName = './_tmp.archive.json';
      fs.writeFileSync(fileName, JSON.stringify(toWrite, null, 2));
      console.log(chalk.white.bgGreen.bold('Archive dumped! Check %s and make necessary edits.'), fileName);

    });
  });

program.parse(process.argv);
