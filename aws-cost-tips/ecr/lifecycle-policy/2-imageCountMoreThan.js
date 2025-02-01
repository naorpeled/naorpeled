// 💡 Keep Only the Last X Images
// 🎯 Perfect for keeping your ECR clean without manual deletions.

const policy = {
  "rules": [
    {
      "rulePriority": 2,
      "description": "Keep only the last 10 images",
      "selection": {
        "tagStatus": "any",
        "countType": "imageCountMoreThan",
        "countNumber": 10
      },
      "action": {
        "type": "expire"
      }
    }
  ]
}