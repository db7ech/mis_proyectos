var express = require('express');
var router = express.Router();

var quizController = require('../controllers/quiz_controller');
var creditsController = require('../controllers/credits_controller');


/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Quiz' });
});

/* GET credits page. */

router.get('/author', creditsController.credits);
router.get('/quizes/question', quizController.question);
router.get('/quizes/answer',   quizController.answer);

module.exports = router;
