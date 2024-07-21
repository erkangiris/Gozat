export const isMobile = function(userAgent) {
  return /android.+mobile|ip(hone|[oa]d)/i.test(userAgent);
};