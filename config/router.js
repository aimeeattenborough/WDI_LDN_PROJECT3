const router = require('express').Router();
const trips = require('../controllers/trips');
const days = require('../controllers/days');
const places = require('../controllers/places');
const auth = require('../controllers/auth');
//const secureRoute = require('../lib/secureRoute');

router.route('/trips')
  .post(trips.createTrip)
  .get(trips.indexTrip);

router.route('/trips/:id')
  .get(trips.showTrip)
  .put(trips.updateTrip)
  .delete(trips.deleteTrip);

//add a new place to trip
router.route('/trips/:id/places')
  .post(places.createPlaceDay); //changed to post as creating new place

//delete a place from trip
router.route('/trips/:id/places/:placeId')
  .delete(places.deletePlaceDay); //changed to post as creating new place

//registration
router.post('/register', auth.register);
router.post('/login', auth.login);

router.route('/*')
  .all((req, res) => res.status(404).json({ message: 'Not found' }));

module.exports = router;
