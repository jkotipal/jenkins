pipeline {
    agent any
    stages {
        stage('Build Docker images on Build Server') {
            steps {
                script {
                    // Execute build.sh on Build Server
                    sh "ssh ubuntu@13.232.253.179 'bash -lc /home/ubuntu/build.sh'"
                }
            }
        }
    }
}
