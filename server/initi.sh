#!/bin/bash

# Stop MongoDB service
sudo systemctl stop mongod

# Remove MongoDB packages
sudo apt-get purge mongodb-org* -y

# Remove MongoDB data directories
sudo rm -r /var/log/mongodb
sudo rm -r /var/lib/mongodb

# Clean up any remaining dependencies and packages
sudo apt-get autoremove -y
sudo apt-get autoclean

# Import the public key used by the package management system
wget -qO - https://www.mongodb.org/static/pgp/server-4.4.asc | sudo apt-key add -

# Create a list file for MongoDB
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu $(lsb_release -sc)/mongodb-org/4.4 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.4.list

# Reload local package database
sudo apt-get update

# Install MongoDB packages
sudo apt-get install -y mongodb-org

# Start MongoDB service
sudo systemctl start mongod

# Enable MongoDB to start on boot
sudo systemctl enable mongod

# Verify installation
mongod --version

echo "MongoDB has been reinstalled successfully."
