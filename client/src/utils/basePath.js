const basePath = "/DaniyalWajid";

export const withBasePath = (path) => {
  if (!path) return basePath;
  // Next.js basePath in next.config.js handles prefixing for public assets.
  // This utility just ensures the path starts with the basePath for img src etc.
  // that are not handled by Next.js automatically (plain <img> tags).
  return `${basePath}${path.startsWith("/") ? path : `/${path}`}`;
};
