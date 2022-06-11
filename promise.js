const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async function (emotion) {
  let ixxRead = await promiseTheaterIXX();
  let vgcRead = await promiseTheaterVGC();
  try {
    let hasil =
      (await angryOrNot(ixxRead, emotion)) +
      (await angryOrNot(vgcRead, emotion));
    return hasil;
  } catch (error) {
    console.log(error);
  }
};

const angryOrNot = async function (data, emotion) {
  let hasil = 0;
  for (counter = 0; counter < data.length; counter++) {
    if (data[counter].hasil == emotion) hasil++;
  }
  return hasil;
};

module.exports = {
  promiseOutput,
};
