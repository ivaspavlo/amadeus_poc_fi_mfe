# Stage 1: Compile and build angular codebase

# Use official node image as the base image
FROM node:latest as build

# Set the working directory
WORKDIR /app

# Copy package.json / package-lock.json
COPY package*.json ./

# Install all the dependencies
RUN npm install

# Add the source code to app
COPY . .

# Generate the build of the application
RUN npm run build


# Stage 2: Serve app with nginx server

# Use official nginx image as the base image
FROM nginx:latest

# Copy the custom nginx configuration
COPY ./nginx.conf /etc/nginx/nginx.conf

# Copy the build output to replace the default nginx contents.
COPY --from=build /app/dist/fi-mfe/browser /usr/share/nginx/html

# Expose port 80
EXPOSE 80
