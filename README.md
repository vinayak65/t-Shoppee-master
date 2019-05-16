echo "# t-Shoppee-master " >> README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin https://github.com/vinayak65/t-Shoppee-master.git
git push -u origin master


# this project requires the following 
# AWS  account with Cognito user pool and region
# 
# AWS User Pool : 
# https://us-east-2.console.aws.amazon.com/cognito/users/?region=us-east-2#/pool/us-east-# 2_uHuwYpeiX/details?_k=osjvzj

#  Pool Id  us-east-2_uHuwYpeiX

# UserName  angular_user4 (angular_2) 

For the AWS testing process click the localhost:4200/login url and then provide the above credentials

This will take you to the profile page 