/**
 * CORS estricto con whitelist
 */
const ALLOWED_ORIGINS = [
  'https://tudominio.com',
  'https://www.tudominio.com'
  // agrega staging o subdominios si aplica
];

function corsMiddleware(req, res, next) {
  const origin = req.headers.origin;

  if (ALLOWED_ORIGINS.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader(
      'Access-Control-Allow-Headers',
      'Content-Type, Authorization'
    );
    res.setHeader(
      'Access-Control-Allow-Methods',
      'GET, POST, PUT, PATCH, DELETE, OPTIONS'
    );
  }

  // Preflight
  if (req.method === 'OPTIONS') {
    return res.sendStatus(204);
  }

  next();
}

module.exports = corsMiddleware;
