Important GIT Commands
------------------------------------------------------------------------
Test
------------------------------------------------------------------------
SETUP & INIT
Configuring user information used across all local repositories

	git config --global user.name “[firstname lastname]”
		set a name that is identifiable for credit when review version history
	git config --global user.email “[valid-email]”
		set an email address that will be associated with each history marker
	git config --global diff.tool meld
	
	git init
		initialize an existing directory as a Git repository
	git clone [url]
		retrieve an entire repository from a hosted location via URL
		
------------------------------------------------------------------------
STAGE & SNAPSHOT
Working with snapshots and the Git staging area		
	
git status
	show modified files in working directory, staged for your next commit
git add [file]
	add a file as it looks now to your next commit (stage)
git reset [file]
	unstage a file while retaining the changes in working directory

git diff / git difftool
	diff of what is changed but not staged	

git diff --staged
	diff of what is staged but not yet commited

git commit -m “[descriptive message]”
	commit your staged content as a new commit snapshot	
------------------------------------------------------------------------

BRANCH & MERGE
Isolating work in branches, changing context, and integrating changes

git branch
	list your branches. a * will appear next to the currently active branch
git branch [branch-name]
	create a new branch at the current commit
git checkout
	switch to another branch and check it out into your working directory
git merge [branch]
	merge the specified branch’s history into the current one
git log or git log --oneline (for shorter version)
	show all commits in the current branch’s history
------------------------------------------------------------------------
INSPECT & COMPARE
Examining logs, diffs and object information

git log
	show the commit history for the currently active branch
	git log -p -2
	for last 2 commits
	To see what changes each commit introduces, remember that you can pass the -p option to git log

git log branchB..branchA
	show the commits on branchA that are not on branchB
git diff branchB...branchA
	show the diff of what is in branchA that is not in branchB
----------------------------------------------------------------------	
SHARE & UPDATE
Retrieving updates from another repository and updating local repos	

git remote add [alias] [url]
	add a git URL as an alias
git fetch [alias]
	fetch down all the branches from that Git remote
	git fetch downloads the latest from remote without trying to merge or rebase anything.
git merge [alias]/[branch]
	merge a remote branch into your current branch to bring it up to date
git push [alias] [branch] 
	Transmit local branch commits to the remote repository branch
git pull
	fetch and merge any commits from the tracking remote branch
-------------------------------------------------------------------

TRACKING PATH CHANGES
Versioning file removes and path changes

git rm [file]
	delete the file from project and stage the removal for commit
git mv [existing-path] [new-path]
	change an existing file path and stage the move
git log --stat -M
	show all commit logs with indication of any paths that moved	
	
	
TEMPORARY COMMITS
Temporarily store modified, tracked files in order to change branches

git stash
	Save modified and staged changes
git stash list
	list stack-order of stashed file changes
git stash pop
	write working from top of stash stack
git stash drop
	discard the changes from top of stash stack
-----------------------------------------------------------------

1.git init
2.git remote add origin "https://github.com/Prafulljohri/Git-Test.git"
3.git pull origin master
	git	fetch command pulls the data to your local repository
	git pull command automatically fetch and then merge a remote branch into your current branch

4.git status
5.git add .  lets you to add your file to your index
6.git commit -a -m " "   -> -a for all files
7.git log
		git log --oneline for shorter version
8.git log -p -2 for last 2 commits
9.git push [remote-name] [branch-name]


Branches
	-Local Branches
	-Remote-tracking branches
1.git branch branchname
2.git checkout branchname -> switching for branch

Merging
1.git checkout master
2.git merge <branch wich you want to merge>

Rebasing --> Another type of merging
		-can be used to make linear sequence of commits
		-With the rebase command, you can take all the changes that were committed on one branch and replay them on another one
1. git checkout master
2. git rebase firstbranch


Revert
------
	git revert HEAD
	1.git log
	2.git checkout ea8eb134 text

Unstaging a Staged File
-------------------
git reset HEAD <file>.	
	git reset HEAD benchmarks.rb
	
Unmodifying a Modified File
---------------------------
git checkout -- benchmarks.rb		
