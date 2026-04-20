FROM node:18-slim`nWORKDIR /usr/src/app`nCOPY package*.json ./`nRUN npm install --only=production`nCOPY . .`nEXPOSE 8080`nCMD [ "npm", "start" ]
