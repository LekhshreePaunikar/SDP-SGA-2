# Use official Nginx image as the base
FROM nginx:alpine

# Remove the default nginx web files
RUN rm -rf /usr/share/nginx/html/*

# Copy all contents of your MusicPlayer folder to nginx's web directory
COPY . /usr/share/nginx/html

# Expose port 80 so we can access it from outside the container
EXPOSE 80

# Start Nginx web server (this is default, so no CMD needed)
