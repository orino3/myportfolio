const fs = require('fs');
const path = require('path');

function findTsxFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      findTsxFiles(filePath, fileList);
    } else if (file.endsWith('.tsx')) {
      fileList.push(filePath);
    }
  });

  return fileList;
}

function addReactImport(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Skip if React is already imported
  if (content.includes("import React") || content.includes("import * as React")) {
    return;
  }

  // Add React import at the beginning of the file
  content = `import * as React from 'react';\n${content}`;
  
  fs.writeFileSync(filePath, content);
  console.log(`Added React import to ${filePath}`);
}

const srcDir = path.join(process.cwd(), 'src');
const tsxFiles = findTsxFiles(srcDir);

tsxFiles.forEach(addReactImport); 