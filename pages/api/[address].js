const axios = require("axios");
// import axios from 'axios' // es6

async function getRewards({ address }) {
  try {
    const response = await axios.request({
      method: "get",
      url: "https://vmtest.adaseal.eu/api.php",
      params: {
        action: "get_reward_breakdown",
        token:
          "58f4f1d3e8f8a5c1f9d1de211fc4e1804342281136d1a18babfce52f621d0072",
        staking_address: address,
      },
    });

    console.log("response data", response.data);
    return response.data;
  } catch (e) {
    console.log("error: ", e);

    if (e?.response?.data) {
      console.log("error response data:", e.response.data);
      return e.response.data;
    }
    return e.message;
  }
}

export default async function handler(req, res) {
  const { address } = req.query;

  const data = await getRewards({ address });
  console.log(req.query);
  res.status(200).json(data);
}
