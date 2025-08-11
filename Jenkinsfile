pipeline {
    agent any
    stages {
        stage('Build Docker images on Build Server') {
            steps {
                script {
                    // Execute Ansible playbook on Build Server
                    sh "ssh ubuntu@172.31.2.174 'ansible-playbook /home/ubuntu/build.yaml'"
                }
            }
        }
   }
}
