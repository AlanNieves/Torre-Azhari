// src/utils/security.js

const XSS_PATTERNS = [
  /<\s*script\b/i,
  /<\s*\/\s*script\s*>/i,
  /\bon\w+\s*=/i,                // onerror=, onload=, onclick=...
  /javascript\s*:/i,
  /data\s*:\s*text\/html/i,
  /vbscript\s*:/i,
  /<\s*img\b/i,
  /<\s*svg\b/i,
  /<\s*iframe\b/i,
  /document\.cookie/i,
  /window\.location/i,
  /eval\s*\(/i,
];

function containsMaliciousContent(input) {
  if (typeof input !== "string") return false;
  const v = input.trim();
  return XSS_PATTERNS.some((re) => re.test(v));
}

module.exports = { containsMaliciousContent };