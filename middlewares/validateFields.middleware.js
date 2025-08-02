module.exports = (req, res, next) => {
  const { content, category } = req.body || {};

  if (!category) {
    return res.status(400).json({ error: "Category is required" });
  }

  if (!content) {
    return res.status(400).json({ error: "Content is required" });
  }

  next();
};
