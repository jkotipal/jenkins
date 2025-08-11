pipeline {
    agent any
    stages {
        stage('Build Docker images on Build Server') {
            steps {
                script {
                    // Execute Ansible playbook on Build Server
                    sh "ssh ubuntu@13.232.253.179 'ansible-playbook /home/ubuntu/build.yaml'"
                }
            }
        }
   }
}
