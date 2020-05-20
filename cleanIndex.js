const fs = require('fs');

const fileData = fs.readFileSync('./build/index.html', 'utf-8');
console.log('got indx.html data');
const cleanHtml = fileData.replace(/href="\//g, 'href="').replace(/src="\//g, 'src="');
fs.writeFileSync('./build/index.html', cleanHtml);
console.log('replaced with gh-pages valid paths');


