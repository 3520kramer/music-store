export const formatTime = (ms) => {
  const date = new Date(ms);
  return `${date.getMinutes()}:${date.getSeconds()} min`;
};

export const formatSize = (bytes) => {
  const result = parseFloat(bytes / 1000000).toFixed(2);
  return `${result} mb`;
};

export const getUrlAndParam = () => {
  const pathname = window.location.pathname;
  const url = pathname.substr(0, pathname.lastIndexOf("/") + 1); //window.location.pathname.split("/");
  const param = pathname.substr(pathname.lastIndexOf("/") + 1, pathname.length);
  return [url, param];
};