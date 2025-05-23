# CI/CD Pipeline with GitHub Actions & Docker 🐳⚙️

This project demonstrates a complete **CI/CD pipeline** using **GitHub Actions** and **Docker**. The workflow builds a Docker image, pushes it to Docker Hub, and runs the container locally.

## 🔧 Tools Used
- **GitHub Actions** for CI/CD automation
- **Docker** for containerization
- **Docker Hub** for storing the built images
- **PowerShell** (Windows) for local development
- Optional: **Minikube** or **VirtualBox** for local Kubernetes testing

## 📁 Folder Structure
cicd-app/ ├── Dockerfile ├── docker-compose.yml ├── .github/ │ └── workflows/ │ └── docker.yml ├── screenshots/ │ ├── build-success.png │ └── dockerhub-push.png └── README.md


## 🚀 CI/CD Workflow

1. **GitHub Actions** is triggered on every `push` to the `main` branch.
2. Docker image is built from the `Dockerfile`.
3. The image is then pushed to [Docker Hub](https://hub.docker.com/repository/docker/mohammedsohail1047/cicd-app).
4. You can run the image locally:

   ```bash
   docker run -p 8080:80 mohammedsohail1047/cicd-app:latest

📸 Screenshots

✅ GitHub Actions Workflow Success

🐳 Docker Hub Image Pushed

📌 Conclusion
This project automates the entire Docker build and deployment process using GitHub Actions, enabling seamless CI/CD workflows without any cloud provider.