# ShipmentDeliveryService

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


# Git pull request guide
This is a guide containing the necessary information on how to create pull requests and use git.


## Table of Contents:

* [Common Terms](#common-terms)

* [Setting up - First Time User](#set-up)

* [Working with pull requests](#working-with-pull-requests)

* [Amending commits](#amending-commits)

* [Useful tips and tricks](#useful-tips-and-tricks)

## <a name="common-terms"></a>

## Common Terms
Some of the basic terms used while working with git are:
* **Repository** : A basic folder or a collection of files that represents one project. The name of this repository is **DDD-FrontEnd**. When you clone, you clone an entire repository and every repository is identified by a unique URL.

* **Local Repository** : The project folder which exists in your machine, locally. It is where you make your changes and push them to the github repository. No one can make changes to your local repository directly other than yourself, you need to sync (connect) this local repository with a repository on github in order to push and pull changes.

* **Remote Repository** : This is the respository hosted on github to which your local repository is connected. You push your changes to this and others working on the same project can see your changes. Only those with write permissions to this repository can make direct changes to it. Many people can make changes to this repository and you can pull those changes to your local repository and push your own to this. A single local repository can be connected to multiple remote repositories. Remote repositories are referred by keywords like **origin** and **upstream**.

* **Fork**: This is how you make a copy of a project owned by someone else. A person or organisation. Apart from the owner of the repository, no one is allowed to make direct changes to the project. So fork is used to make a copy of the project that is owned by you.

* **Clone**: You got the project in your account, now what? A clone is just that, a copy. It does not care about ownership. It is aimed to bring the copy of the project hosted on github in your machine. This is where you will make the changes and later update your remote project.

* **Commit**: This is a checkpoint in your project history. All the commits are recorded in git logs with the description provided by user. After you add, modify or remove any files, a commit is made to save these changes in history.

* **Push**: This is how you send the changes made in your local repository to your remote. All your changes remain unsynced until you have pushed them and this is necessary step to keep the changes parallel. Only the files you commit(as in the previous definition) are pushed and rest of the changes remain local to your project.

* **Fetch**: This is in very simple terms means to download any updates and changes from a remote repository. This does not mean that you have included the changes in your project. Just downloaded.

* **Merge**: This means to merge or combine updates fetched from remote repository with your local one. This may lead to merge conflicts if a change in remote is incompatible with a change in your local project.

* **Pull**: This means to fetch any updates that may have occured in a remote branch in your local repository and merge them. This is basically a fetch followed by a merge.

* **Pull Request (PR)**: Pull Request or PR as it is generally known, is a method to contribute to open development projects by including bug fixes or adding new features. Its a way of contributing by asking the owner of project to include changes made in the external repository.

## <a name="set-up"></a>

## Set Up


In order to set up the user through terminal:

`git config --global user.name <name>`

`git config --global user.email <email>`

This is the user your commits and PR will be shown through. This step can be skipped if using VSCode github extensions.


## <a name="working-with-pull-requests"></a>

## Working with pull requests


In order to work on an existing project that is not owned by you, follow the following steps:

1. Copy the HTTPS or SSH link of the project and go to the location through terminal or command prompt where you want to have the repository locally.

2. Run `git clone <HTTPS/SSH>`. This will give you a local copy of the project which you can work with. Example scenario would be: `git clone https://github.com/L3sius/DDD-FrontEnd`

3. After you cloned a fresh master branch, be sure to create a new branch! This can be achieved by running `git checkout -b <DDD-X>`. In short, branches helps us to browse through different parts of the code. They are also a good way of showing on which task you are currently working on, so make sure to use DDD-X (Where X is the ticket number).

4. Any changes in the local repository can be tracked by running `git status` in that directory. Files in red will be the ones that have been modified, added or deleted.

5. To have your remote repository(the one hosted online also referred to as *origin*) reflect the changes, do
`git add <file-path>` for all the files who's changes you wish to see in the remote. You can also run `git add .` to add all the files that have been changed (not advisable though).

6. Run `git status` once again and you will see the files that you have added in green.

7. In case you need to un-add any file, run `git reset HEAD -- <file path>`

8. To commit the changes (equivalent to locking down the changes you have made), run `git commit -m "Your commit message"`
"Your commit message" part should contain the following: <br/>
    8.1 if its a new feature: "feat(DDD-X): your commit message" <br/>
    8.2 if its a fix to an old feature: "fix(DDD-X): your commit message" <br/>

9. So far you have made and saved the changes in your local repository, to send the changes to and create a pull request, run
`git push origin <DDD-X>`.

10. And thats it! Your pull request should be created. It can be found either on github or the link is visible on the terminal.

## <a name="amending-commits"></a>

## Amending commits


When updating your PR with fixes and changes, make sure to use the following sequence of commands:
1. `git add <file-path>`
2. `git commit --amend -m "Your commit message"`
3. `git push -f origin <DDD-X>`

 Ammending lets us to have only 1 commit at a time, thus its easier to understand what needs to be reviewed.

Steps to amend (update PR) in VSCode:
1. Stage your changes.
2. Commit Staged (Amend).
3. Push to... (force) and select the origin branch. (For example DDD-FrontEnd).

## <a name="useful-tips-and-tricks"></a>

## Useful tips and tricks


1. Make sure you are in the master branch before creating a new branch! : `git checkout master`.

2. Always before starting to work on a new project checkout to master and run `git pull` to sync your copy with the remote copy.

3. (optional) If you stopped working with a branch and your PR was accepted, you can delete your local branch by running these three commands: <br/>
    3.1 `git checkout master` <br/>
    3.2 `git branch -D <localbranchname>` <br/>
    3.3 `git push origin --delete <localbranchname>` <br/>
Note: remote branch can also be deleted after clicking "merge" in PR and selecting checkbox "delete this branch".

4. If you want to see all of your local branches, run `git branch`

5. In order to perform force push in VSCode - you need to turn it on. It can be achieved by doing the following: settings -> extensions -> git -> allow force push (select checkbox). Remember, only use force push while updating your PR after commit amend!