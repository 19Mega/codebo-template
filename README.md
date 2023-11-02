## HOW TO START BACKEND ✨

To run your Flask project, ensure that your virtual environment is activated. If you haven't created a virtual environment yet, you can do so using the following command (make sure you are in the main folder of your project):

```bash
# Get in back-end folder:  
cd back-end  

# Create a new virtual enviroment (only once):  
python -m venv venv  

# Next, activate the virtual environment:    
source venv/Scripts/activate  

# Install requirements (only once):  
pip install -r requirements.txt  

# Run server:
python wsgi.py  
```

## DATABASE ✨
```
Inside the "app" directory, a folder named "instance/" will be created where the database will be located.
```

## HOW TO START FRONTEND ✨
```bash
# Get in front-end folder:
cd front-end  

# Install packages (only once):
npm install  

# Copy the env.example file to get enviroments variables (only once): 
cp .env.example .env

# Run server: 
npm run dev  
```


<hr>
<br></br>

## **HOW TO GET THIS REPOSITORY LOCAL**
Initialize the folder as a Git repository:
```bash
# Initializate git in an empty folder:
git init

# Add a remote repository:
git remote add origin https://github.com/CodeBo-CDB/proyecto-1

# Rename the current branch to "main":
git branch -m "main"

# Pull changes from the "main" branch:
git pull origin main
```

## BRANCH MANAGMENT


```bash
# Create a new branch "ft-new-branch":
$ git checkout -b "ft-new-branch"


# Switch to a different branch "ft-switch-branch":
$ git checkout ft-switch-branch


# List available branches:
$ git branch
```

