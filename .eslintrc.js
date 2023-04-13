module.exports = {
	root: true,
	env: {
	  node: true
	},
	extends: [
		'plugin:vue/essential',
		'@vue/standard'
	],
	parserOptions: {
		parser: 'babel-eslint'
	},
	globals: {
	},
	rules: {
		/*
		0：关闭规则
		1：打开规则，作为一个警告，不会导致检查不通过
		2：打开规则，作为一个错误，会导致检查不通过
		 */
		'arrow-parens': 0, // 要求箭头函数的参数使用圆括号
		'brace-style': [2, 'stroustrup'], // 大括号风格要求
		'comma-dangle': [2, 'never'], // 要求或禁止使用拖尾逗号
		'comma-spacing': 2, // 强制在逗号周围使用空格
		'eol-last': 2, // 要求或禁止文件末尾保留一行空行
		'indent': [2, 2], // 强制使用一致的缩进
		'key-spacing': 2, // 强制在对象字面量的键和值之间使用一致的空格
		'keyword-spacing': [2, {
			'before': true,
			'after': true
		}], // 强制关键字周围空格的一致性
		'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0, // 禁用 debugger
		'no-empty': 0, // 禁用空块语句
		'no-eval': 0, // 禁用 eval()
		'prefer-const': 2, // 建议使用 const
		'quotes': [2, 'single'], // 强制使用一致的反勾号、双引号或单引号；single：要求尽可能地使用单引号
		'quote-props': [2, 'consistent'], // 要求对象字面量属性名称使用引号；consistent：要求对象字面量属性名称使用一致的引号，要么全部用引号，要么都不用
		'semi': [2, 'always'], // 要求或禁止使用分号代替 ASI
		'space-before-function-paren': [2, 'never'], // 要求或禁止函数圆括号之前有一个空格
		'space-infix-ops': 2, // 要求中缀操作符周围有空格
    'vue/no-parsing-error': [2, {
      'absence-of-digits-in-numeric-character-reference': false,
      'invalid-first-character-of-tag-name': false
    }]
	}
}
