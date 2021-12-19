#!/bin/bash
cd "$(dirname "$0")"

sudo snap install microk8s --classic
microk8s start
microk8s kubectl apply -f k8s-nextjs.yml
microk8s kubectl expose deployment nextjs-tailwind-deployment --type=NodePort --name=nextjs-tailwind-service --external-ip="$(hostname -I | cut -d ' ' -f 1)" --port=3000 --target-port=3000
# microk8s dashboard-proxy

# microk8s kubectl create secret docker-registry manhavn --docker-server="https://index.docker.io/v2/" --docker-username="manhavn" --docker-password="_______" --docker-email="____@____.___"
# microk8s kubectl create secret docker-registry manhavn --docker-server=<your-registry-server> --docker-username=<your-name> --docker-password=<your-pword> --docker-email=<your-email>
# microk8s kubectl get secret manhavn --output=yaml
# microk8s kubectl get secret manhavn --output="jsonpath={.data.\.dockerconfigjson}" | base64 --decode
