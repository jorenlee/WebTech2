# source

## Common GIT Commands

Never forget to pull from master, especially if there's a recent merge
` git pull origin master `

Read the message in your terminal/git bash and check for conflicts. If there are any, go to the file with the conflict and fix 'em.

To check the status of your modified files
` git status `

To add your modified files and to ready for commit 
` git add . `
- the ' . ' means all, so all modified files will be added

After every ` git add . ` , commit your changes
` git commit -m "commit-description here" `

Don't forget to check your branch
` git branch `

If you are in master, please create a new branch. Go to your specific ticket/issue/task in linear.app and copy its branch name, or you can copy using the shortcut: 
For Windows, CTRL + SHIFT + .
For Mac, CMD + SHIFT + .

If its already copied, go back to your terminal/git bash
` git checkout -b branchname `
Ex: ` git checkout -b zairacadainggan/web-39-fix-export-names-on-components `
' -b ' means new branch

If you are in the wrong branch, you can switch branches using this git command
` git checkout branchname `

If you are already on the right branch, and done with the commit then you can push your changes to your branch
` git push origin branchname `
Ex: `git push origin zairacadainggan/web-39-fix-export-names-on-components `