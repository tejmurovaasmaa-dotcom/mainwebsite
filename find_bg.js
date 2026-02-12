const fs = require('fs');
const path = require('path');

function searchFiles(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        if (stat.isDirectory()) {
            if (file !== 'node_modules' && file !== '.next' && file !== '.git') {
                searchFiles(filePath);
            }
        } else {
            if (file.endsWith('.tsx') || file.endsWith('.jsx') || file.endsWith('.ts') || file.endsWith('.js') || file.endsWith('.css')) {
                const content = fs.readFileSync(filePath, 'utf8');
                const regex = /bg-\[url\(/g;
                let match;
                while ((match = regex.exec(content)) !== null) {
                    console.log(`Found in: ${filePath}`);
                    const start = Math.max(0, match.index - 50);
                    const end = Math.min(content.length, match.index + 100);
                    console.log(content.substring(start, end));
                    console.log('---');
                }
                
                if (content.includes('bg-[url(') || content.includes("bg-[url(")) { // simple check
                     // handled by regex above
                }
                
                // Check if file contains the canvas.jpg specifically
                if (content.includes('canvas.jpg') || content.includes('v1770459959')) {
                     console.log(`Found canvas.jpg in: ${filePath}`);
                     console.log('---');
                }
            }
        }
    }
}

searchFiles('src');
