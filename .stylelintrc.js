module.exports = {
  rules: {
    'color-hex-case': 'lower', // 为十六进制颜色指定小写或大写（可自动修复）
    'color-hex-length': 'long', // 指定十六进制颜色的短或长符号（可自动修复）
    'no-descending-specificity': null, // 禁止在具有较高优先级的选择器后出现被其覆盖的较低优先级的选择器
    'selector-class-pattern': null // 指定类选择器的模式
  },
  extends: ['stylelint-config-standard'],
  plugins: ['stylelint-scss'],
  defaultSeverity: 'error'
};
