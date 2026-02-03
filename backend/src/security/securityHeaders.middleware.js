/**
 * Security Headers Middleware
 * Protege contra XSS, clickjacking, sniffing y abusos del navegador
 */
function securityHeaders(req, res, next) {
  // Evita MIME sniffing
  res.setHeader('X-Content-Type-Options', 'nosniff');

  // Previene clickjacking
  res.setHeader('X-Frame-Options', 'DENY');

  // Desactiva XSS legacy (los navegadores modernos usan CSP)
  res.setHeader('X-XSS-Protection', '0');

  // Controla qué se envía como referrer
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');

  // Limita APIs del navegador
  res.setHeader(
    'Permissions-Policy',
    'geolocation=(), camera=(), microphone=(), payment=()'
  );

  // Fuerza HTTPS (solo en producción)
  if (process.env.NODE_ENV === 'production') {
    res.setHeader(
      'Strict-Transport-Security',
      'max-age=31536000; includeSubDomains; preload'
    );
  }

  next();
}

module.exports = securityHeaders;
