let currentDate = new Date();

global.date = currentDate;

module.exports.getMessage = () => {
	let hour = currentDate.getHours();
	if (hour > 16) {
		return `Что скажешь? ${global.name}`;
	} else if (hour > 10) {
		return `Агааа, попався, ${global.name}`;
	} else {
		return `ДБ, ${global.name}`;
	}
};

console.log('greeting module');

// let currentDate = new Date();
// module.exports.date = currentDate;
//
// module.exports.getMessage = (name) => {
// 	let hour = currentDate.getHours();
// 	if (hour > 16) {
// 		return `Good evening ${name}`;
// 	} else if (hour > 10) {
// 		return `Nice to meet you, ${name}`;
// 	} else {
// 		return `Morning, ${name}`;
// 	}
// };

module.exports.name = 'Artem';
