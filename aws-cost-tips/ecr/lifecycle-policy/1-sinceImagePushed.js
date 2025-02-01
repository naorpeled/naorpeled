// 💡 Delete Untagged Images After X Days
// 🎯 Helps eliminate unused images left over from CI/CD builds.  

const policy = {
  "rules": [
    {
      "rulePriority": 1,
      "description": "Remove untagged images older than 7 days",
      "selection": {
        "tagStatus": "untagged",
        "countType": "sinceImagePushed",
        "countUnit": "days",
        "countNumber": 7
      },
      "action": {
        "type": "expire",
      }
    }
  ]
}