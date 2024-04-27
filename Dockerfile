# Use official Node.js image as base
FROM node:14-alpine

# Set working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to work directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Next.js app
RUN npm run build

# Expose the port Next.js runs on
EXPOSE 3000

# Run the Next.js app in production mode
CMD ["npm", "start"]



# docker build -t my-next-app .
# docker run -p 3000:3000 my-next-app