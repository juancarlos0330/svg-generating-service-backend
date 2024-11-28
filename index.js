const axios = require("axios");

const refreshScroll = async () => {
  for (var i = 43068; i <= 43129; i++) {
    const response = await axios.post(
      "https://api.znsconnect.io/v1/create-metadata",
      {
        chain: 534352,
        id: i,
      }
    );
    console.log(response, "----", i);
  }
};

const refreshBnb = async () => {
  for (var i = 2635; i <= 2639; i++) {
    const response = await axios.post(
      "https://api.znsconnect.io/v1/create-metadata",
      {
        chain: 56,
        id: i,
      }
    );
    console.log(response, "----", i);
  }
};

refreshScroll();
