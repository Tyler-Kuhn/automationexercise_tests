module.exports = {
    getH2ElementByText: async function (obj) {
        return await $(`h2=${obj.toString()}`);
      },

    getBElementByText: async function (obj) {
        return await $(`b=${obj.toString()}`);
      }
}