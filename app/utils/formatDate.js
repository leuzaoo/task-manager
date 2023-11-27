const moment = require("moment");

const formatDate = (date) => {
  return moment(date).format("DD/MMM");
};

export default formatDate;
