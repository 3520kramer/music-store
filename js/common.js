/************* JQUERY *************/
export const globalJquery = () =>
  $(document).ready(function () {
    /* Header */
    $("#menu-icon").on("click", function (event) {
      event.preventDefault();
      $("nav").slideToggle(100);
    });

    /* */
  });

/************* FUNCTIONS *************/
export const formatTime = (ms) => {
  const date = new Date(ms);
  const seconds = (date.getSeconds() < 10 ? "0" : "") + date.getSeconds();
  return `${date.getMinutes()}:${seconds} min`;
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

export const reduceFormValues = (formValues) =>
  formValues
    .serializeArray()
    .reduce((obj, item) => ((obj[item.name] = item.value), obj), {});
