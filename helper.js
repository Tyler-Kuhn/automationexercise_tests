module.exports = {
    getElementByText: async function (obj) {
        return await $(`div=${obj.toString()}`);
      }
}