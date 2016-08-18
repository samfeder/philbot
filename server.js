'use strict';
const express = require('express');
const Slapp = require('slapp');
const BeepBoopConvoStore = require('slapp-convo-beepboop');
const BeepBoopContext = require('slapp-context-beepboop');
const _ = require('lodash');

const philResponse = [
  'Sorry guys, i can’t talk rn — on my way to the hamptons',
  'I’m up on the 9th floor, did you know they have almond milk here? Ridiculous',
  'Headin to the ‘nox to work on my fitness, will be back on slack later!',
  'DK run anybody?',
  'Can\'t tonight - running a 5K',
  'I didn\'t ask to be part of this narrative'
];

if (!process.env.PORT) throw Error('PORT missing but required');

let slapp = Slapp({
  convo_store: BeepBoopConvoStore(),
  context: BeepBoopContext()
});

var app = slapp.attachToExpress(express());

app.get('/', function (req, res) {
  res.send('Hello')
});

slapp.message('phillip', msg => {
  msg.say(_.shuffle(philResponse)[0]);
});

slapp.message('<@U0PG1GRLH>', msg => {
  msg.say(_.shuffle(philResponse)[0]);
});

slapp.message('(.*)', ['direct_message'], msg => {
  msg.say(_.shuffle(philResponse)[0]);
});

console.log('Listening on :' + process.env.PORT);
app.listen(process.env.PORT);