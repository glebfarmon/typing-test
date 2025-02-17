module.exports = {
	'*.{js,jsx,ts,tsx}': [
		'eslint --fix', // Запускаем ESLint напрямую с автоматическим исправлением
		'prettier --write' // Запускаем Prettier для форматирования (опционально, но рекомендуется)
	]
}
