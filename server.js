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
  'I didn\'t ask to be part of this narrative',
  'This is cyberbullying :face_with_head_bandage:',
  'Everything about this is mean!',
  'I don\'t wanna be a bot!',
  'Who hasn\'t lied about being robbed??',
  'Can I get some lox on that?',
  'Is powpow one word??',
  'Hold on, I need my martini first.',
  'If it\'s not a black car, I\'m not getting in.',
  'Ugh, where\'s my martini?',
  'Everything is Instagram.',
  'No, I do want suction cups!',
  'The Cyber Bullying around here is getting out of control',
  'Ughh, I need a new eye mask.',
  'Which club were you at? I\'ve had my clubbing days in Florence.',
  'I\'m about to go home sick cuz I\'m so sick of everyone',
  'That\'s not funny bro! It\'s mean!',
  'One of the good things about me is that I\'m always relevant.',
  'I\'m going to get a ponytail!',
  'I want to be a baby!',
  'We need a eucalyptus candle, you know? Make this place into a little spa.',
  'Carbs on a Friday?! Yeah right.',
  'I don\'t want to go to a desert island, I want to go to Turks and Caicos',
  'If your boat doesn\'t have elevators, you aren\'t on a real boat',
  'Facebook Live is like the Napster of animal birth.'
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
