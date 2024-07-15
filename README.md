# Project Name
[![Typing SVG](https://readme-typing-svg.herokuapp.com?font=Kanit&weight=500&size=30&pause=1000&color=94F7D8&width=435&lines=Node.js+Test+-+Sharing+the+Code)](https://git.io/typing-svg)

## Table of Contents

- [Initialisation](#initialisation)
- -[Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Contributing](#contributing)
- [License](#license)

## Initialisation

> I have create a new repo named temp-node-tut in remote github in order to store it my local project of nodejs and upload it here.
> Here, in this empty remote repo we upload our project created locally but before that  .gitignore file must have node_modules and other files (large usually):
     ```
     node_modules
     ```
> As no need to give node_modules along with the code as user can install it on his own dvice using package names in package.json automatically recognizing the required node_modules.
> First , it is empty then in terminal of local run the commands:
```bash
git init
git add .
git commit -m "First commit"
```
> After running these commands, you have a local Git repository with one commit containing all your project files.
However, at this point, your project still only exists on your local machine. The subsequent commands following
would be necessary to connect this local repository to a remote repository on a service like GitHub and push your changes there.
> Following which add the commands:(given by girhub itself after initializing an empty repo)
```bash
git remote add origin https://github.com/PrasannaMishra001/temp-node-tut.git
git branch -M main
git push -u origin main
```
> Now our project that we first created locally gets uploaded in github remotely.

## Installation 
### How can a third-person install and use my project locally? 
1. .gitignore file must have node_modules as told.
2. Moreover as we shared everything elso so dependencies and packages need to install is already in package.json.
3. Hence, node will recognize and install required packages using the following commands:
4. Insure that npm and node is installed in users system.
   ```bash
   npm install
   ```
