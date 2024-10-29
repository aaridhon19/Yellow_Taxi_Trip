const express = require('express');
const TripController = require('../controllers/tripController');

const router = express.Router();

// Rute GET untuk mendapatkan data semua perjalanan
router.get('/trips', TripController.getTrips);

// Rute GET untuk mendapatkan data perjalanan dengan filter
router.get('/trips/filter', TripController.getTripsByFilter);

module.exports = router;
