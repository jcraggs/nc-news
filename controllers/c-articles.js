const {
  fetchArticleById,
  updateArticleVotes,
  createComment,
  fetchComments
} = require("../models/m-articles");

exports.getArticleById = (req, res, next) => {
  const { article_id } = req.params;
  fetchArticleById(article_id)
    .then(article => {
      res.status(200).json({ article });
    })
    .catch(next);
};

exports.patchArticleVotes = (req, res, next) => {
  const { article_id } = req.params;
  const update = req.body;
  updateArticleVotes(update, article_id)
    .then(updatedArticle => {
      res.status(200).json(updatedArticle);
    })
    .catch(next);
};

exports.postComment = (req, res, next) => {
  const { article_id } = req.params;
  const newComment = req.body;
  createComment(newComment, article_id)
    .then(postedComment => {
      res.status(201).json(postedComment);
    })
    .catch(next);
};

exports.getCommentsByArticleID = (req, res, next) => {
  const { article_id } = req.params;
  const { sort_by } = req.query;
  const { order } = req.query;
  fetchComments(article_id, sort_by, order)
    .then(comments => {
      res.status(200).json(comments);
    })
    .catch(next);
};
