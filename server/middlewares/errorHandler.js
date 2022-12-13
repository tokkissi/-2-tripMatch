export default function errorHandler(err, req, res, next) {
  console.log(err);
  res.status(err.status || 500).end();
}
