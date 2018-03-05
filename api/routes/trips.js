const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");

const Trip = require("../../models/trip");

router.get('/', (req, res, next) => {
    Trip.find()
    .exec()
    .then(docs => {
      console.log(docs);
      //   if (docs.length >= 0) {
      res.status(200).json(docs);
      //   } else {
      //       res.status(404).json({
      //           message: 'No entries found'
      //       });
      //   }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});

router.get('/', (req, res, next) => {
    const trip = {
        _id: new mongoose.Types.ObjectId(),
        //Trip: req.body.Trip,
        //SOC: req.body.SOC
        Trip: req.query.Trip,
        SOC: req.query.SOC
    };
    const tripmongo = new Trip(trip);
    tripmongo
        .save()
        .then(result => {
        console.log(result);
        res.status(201)//.json({message: "Handling POST requests to /trip", createdTrip: result})
        ;
        })
        .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
    /*res.status(201).json({
        message: 'Handling POST requests to /trips - added tripId and soc',
        createdTrips: trip
    });*/
});

////

////

router.get('/:tripId', (req, res, next) => {
    const id = req.params.tripId;
    if (id === 'special') {
        res.status(200).json({
            message: 'You discovered the special ID',
            id: id
        });
    } else {
        res.status(200).json({
            message: 'You passed an ID'
        });
    }
});

router.patch('/:tripId', (req, res, next) => {
    res.status(200).json({
        message: 'Updated trip!'
    });
});

router.delete('/:tripId', (req, res, next) => {
    res.status(200).json({
        message: 'Deleted trip!'
    });
});

module.exports = router;