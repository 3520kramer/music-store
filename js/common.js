export const formatTime = (ms) => {
  const date = new Date(ms);
  return `${date.getMinutes()}:${date.getSeconds()} min`;
};

export const formatSize = (bytes) => {
  const result = parseFloat(bytes / 1000000).toFixed(2);
  return `${result} mb`;
};
