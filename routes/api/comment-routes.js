const {
    addComment,
    removeComment,
    addReply,
    removeReply
  } = require('../../controllers/comment-controller');
  
const router = require('express').Router();

// /api/comments/<pizzaId>
router.route('/:pizzaId').post(addComment);

// /api/comments/<pizzaId>/<commentId>
router
  .route('/:pizzaId/:commentId')
  .put(addReply)
  .delete(removeComment)

const commentRoutes = require('./comment-routes');
const pizzaRoutes = require('./pizza-routes');

router.route('/:pizzaId/:commentId/:replyId').delete(removeReply);


router.use('/comments', commentRoutes);
router.use('/pizzas', pizzaRoutes);

module.exports = router;
