/*
* 2022年9月16日15:54:44 LXC
* */
module.exports = () => {
  return {
    plugins: {
      'autoprefixer': {},
      'postcss-px-to-viewport': {
        viewportWidth: 1920,
        viewportHeight: 1080,
        propList: ['*']
      }
    }
  };
};
