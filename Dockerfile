# Use an official Node.js runtime as the base image
FROM node:18.16.0-alpine

# Set the working directory inside the container
WORKDIR /usr/src/app/admin

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Use the ARG directives to define the build-time arguments
ARG PORT
ARG NODE_ENV

# Set environment variables in the Node.js application
ENV PORT=$PORT
ENV NODE_ENV=$NODE_ENV


# Install all dependencies, including development dependencies
RUN --mount=type=cache,target=/usr/src/app/admin/.npm \
    npm set cache /usr/src/app/admin/.npm && \
    npm ci

# Copy the rest of the application code to the working directory
COPY . .

# Expose a port that your application will listen on
EXPOSE $PORT


# Command to start your Node.js application with the appropriate environment
CMD ["npm", "start"]

















