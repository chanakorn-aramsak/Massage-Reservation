# Massage-Reservation

## **MongoDB Dump and Sync Guide**

This guide explains how to use the **`dump-mongo.ps1`** and **`sync-mongo.ps1`** scripts to manage MongoDB data dumps and synchronization in a Docker environment.

## **Prerequisites**

-   Docker and Docker Compose
-   PowerShell (for Windows) or PowerShell Core (for Linux/macOS)
-   Git (optional, for version control)

## **Setup**

Ensure your Docker environment is set up with **`docker-compose.yml`**. Example MongoDB service definition:

```yaml
services:
    mongodb:
        image: mongo:latest
        container_name: your_mongodb_container
        ports:
            - "27017:27017"
        volumes:
            - ./data:/data/db
```

## **Using `dump-mongo.ps1`**

This script dumps the MongoDB database from a Docker container.

### **Usage**

Run the script in PowerShell:

```powershell
.\dump-mongo.ps1

```

### **Script Actions**

-   Starts the MongoDB container, if not already running.
-   Performs **`mongodump`** for the specified database.
-   Copies the dump to a specified local path.

## **Using `sync-mongo.ps1`**

This script synchronizes the MongoDB database dump with another environment.

### **Usage**

Run the script in PowerShell:

```powershell
.\sync-mongo.ps1

```

### **Script Actions**

-   Copies the local database dump to the target environment.
-   Restores the database in the target environment using **`mongorestore`**.
