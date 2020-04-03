'use strict';
const mongoose = require('mongoose');
const fs = require('fs');

const Sounds = mongoose.model('Sounds');

/**
 * This function gets all the users in the Database
 */
exports.get_all_sounds = (req, res) => {
  Sounds.find({}, (err, sounds) => {
    if (err) {
      res.send({
        error: err,
        message: 'No sounds fround',
        code: 204
      });
    }
    res.send({
      message: 'All sounds returned',
      data: sounds,
      code: 200
    });
  });
};

exports.upload_single_track = (req, res) => {
  let newSound = new Sounds({
    title: req.body.title,
    sound_collection: req.body.sound_collection,
    character: req.body.character,
    sound_url: req.body.sound_url
  });
  newSound.save((err, sound) => {
    if (err) {
      res.send({
        error: err,
        message: "Couldn't create new sound",
        code: 400
      });
    }
    res.status(201).json({
      message: 'sound created',
      success: true,
      obj: sound
    });
  });
};
