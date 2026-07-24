const basePath = "/DaniyalWajid";

export const withBasePath = (path) => {
  if (!path) return basePath;
  return `${basePath}${path.startsWith("/") ? path : `/${path}`}`;
};
