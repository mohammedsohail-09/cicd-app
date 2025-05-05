
# k8s-canary-deployment

This project demonstrates a **Canary Deployment strategy** using **Kubernetes**, **Istio**, **Helm**, and **Docker**. It features two versions of a simple Node.js application deployed on a local **K3s** cluster with **Istio** as the service mesh.

## 🚀 Tech Stack

- [x] K3s (Lightweight Kubernetes)
- [x] Istio (Service Mesh)
- [x] Helm (Package Manager for Kubernetes)
- [x] Docker (Containerization)
- [x] Node.js (Sample App)
- [x] WSL2 (for Linux support on Windows)

## 📁 Project Structure

```
.
├── Dockerfile
├── app-deployment-v1.yml       # Kubernetes manifest for version 1
├── app-deployment-v2.yml       # Kubernetes manifest for version 2
├── app-v1.js                   # Version 1 of the app
├── app-v2.js                   # Version 2 of the app
├── istio-1.25.2/               # Istio release files
└── README.md
```

## 🔧 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/mohammedsohail-09/cicd-app.git
cd cicd-app
```

### 2. Start K3s Cluster (if not already running)

Install [K3s](https://k3s.io/) and make sure your kubeconfig is set:
```bash
export KUBECONFIG=/etc/rancher/k3s/k3s.yaml
```

### 3. Install Istio

```bash
cd istio-1.25.2
export PATH=$PWD/bin:$PATH
istioctl install --set profile=demo -y
kubectl label namespace default istio-injection=enabled
```

### 4. Build and Push Docker Images

```bash
docker build -t app:v1 -f Dockerfile .
docker tag app:v1 your-dockerhub-username/app:v1
docker push your-dockerhub-username/app:v1

docker build -t app:v2 -f Dockerfile .
docker tag app:v2 your-dockerhub-username/app:v2
docker push your-dockerhub-username/app:v2
```

### 5. Apply Kubernetes Manifests

```bash
kubectl apply -f app-deployment-v1.yml
kubectl apply -f app-deployment-v2.yml
```

### 6. Deploy Istio Gateway & VirtualService

```bash
kubectl apply -f istio-gateway.yml
kubectl apply -f virtualservice.yml
```

### 7. Access the Application

You can now access the app using the Istio Ingress Gateway IP:
```bash
kubectl get svc istio-ingressgateway -n istio-system
```
Open the IP in your browser to see the canary routing in action.

---

## 📸 Screenshots (optional)

Add screenshots showing traffic routing between v1 and v2.

---

## 📚 Resources

- [Istio Docs](https://istio.io/latest/docs/)
- [K3s Documentation](https://docs.k3s.io/)
- [Canary Deployment](https://martinfowler.com/bliki/CanaryRelease.html)

---

## 🙋‍♂️ Author

**Mohammed Sohail**  
[GitHub](https://github.com/mohammedsohail-09)

---

## 📝 License

This project is licensed under the MIT License.
