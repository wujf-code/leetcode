

[TOC]

# Git

 [Git - Book (git-scm.com)](https://git-scm.com/book/zh/v2)

https://raw.hellogithub.com/hosts

## 配置

Git 自带一个 git config 的工具来帮助设置控制 Git 外观和行为的配置变量。 这些变量存储在三个不同的位置：

1. `/etc/gitconfig` 文件: 包含系统上每一个用户及他们仓库的通用配置。 如果在执行 `git config` 时带上 `--system` 选项，那么它就会读写该文件中的配置变量。 （由于它是系统配置文件，因此你需要管理员或超级用户权限来修改它。）
2. `~/.gitconfig` 或 `~/.config/git/config` 文件：只针对当前用户。 你可以传递 `--global` 选项让 Git 读写此文件，这会对你系统上 **所有** 的仓库生效。
3. 当前使用仓库的 Git 目录中的 `config` 文件（即 `.git/config`）：针对该仓库。 你可以传递 `--local` 选项让 Git 强制读写此文件，虽然默认情况下用的就是它。

每一个级别会覆盖上一级别的配置。

在 Windows 系统中，Git 会查找 `$HOME` 目录下（一般情况下是 `C:\Users\$USER` ）的 `.gitconfig` 文件。 Git 同样也会寻找 `/etc/gitconfig` 文件，但只限于 MSys 的根目录下，即安装 Git 时所选的目标位置。

```powershell
git config --list	 								# 查看所有配置
git config --list --show-origin						# 查看所有配置及其所在文件
git config <key>									# 查看某项配置	<key>: 配置名称
git config --show-origin <key>						# 查看某项配置最后被哪个文件设置为哪个值	<key>: 配置名称
git config --global user.name <name>				# 全局配置用户名
git config --global user.email <email>				# 全局配置邮箱
git config core.editor <name|path>					# 配置文本编辑器,在window中需指定为地址
git config --global core.editor "'D:/Notepad++/notepad++.exe' -multiInst -notabbar -nosession -noPlugin"													# 配置文本编辑器为nodepad++
```

## git基础

### 获取Git仓库

* 将尚未进行版本控制的本地目录转换为 Git 仓库；

  ```powershell
  git init
  ```

* 从其他服务器上克隆已存在的GIt仓库，dirname用于自定义本地仓库的名字（可选）

  ```powershell
  git clone <url>
  ```

* 追踪文件,可以用`git add`开始跟踪新文件，或者把已跟踪的文件放到暂存区，还能用于合并时把有冲突的文件标记为已解决状态等。 将这个命令理解为“精确地将内容添加到下一次提交中”而不是“将一个文件添加到项目中”要更加合适。

  ```
  git add *.c
  git add LICENSE
  git commit -m 'initial project version'
  ```

### 记录每次更新到仓库

* 文件的状态变化周期![git文件的状态变化周期](D:\Desktop\git_leetcode\gitGuide.assets\lifecycle-1690675992888-1.png)
* 检查当前文件状态

```powershell
git status		
git status -s	# 状态简览 ??:(untracked)未跟踪、M:(Modified)已修改、A:(Staged)暂存区
```

* 跟踪新文件

  ```
  git add <fileName> 
  ```

* 查看已暂存和未暂存的修改

  ```powershell
  git diff					# 查看尚未暂存的文件更新了哪些部分
  git diff --staged			# 查看已暂存的将要添加到下次提交里的内容
  git diff --cached			# 同 git diff --staged
  git difftool --tool-help	# 查看你的系统支持哪些 Git Diff 插件。
  ```

* 忽略文件 .gitignore

  文件 `.gitignore` 的格式规范如下：

  * 所有空行或者以 `#` 开头的行都会被 Git 忽略。
  * 可以使用标准的 glob 模式匹配，它会递归地应用在整个工作区中。
  * 匹配模式可以以（`/`）开头防止递归。
  * 匹配模式可以以（`/`）结尾指定目录。
  * 要忽略指定模式以外的文件或目录，可以在模式前加上叹号（`!`）取反。

  所谓的 glob 模式是指 shell 所使用的简化了的正则表达式。 星号（`*`）匹配零个或多个任意字符；`[abc]` 匹配任何一个列在方括号中的字符 （这个例子要么匹配一个 a，要么匹配一个 b，要么匹配一个 c）； 问号（`?`）只匹配一个任意字符；如果在方括号中使用短划线分隔两个字符， 表示所有在这两个字符范围内的都可以匹配（比如 `[0-9]` 表示匹配所有 0 到 9 的数字）。 使用两个星号（`*`）表示匹配任意中间目录，比如 `a/**/z` 可以匹配 `a/z` 、 `a/b/z` 或 `a/b/c/z` 等。

* 提交更新

  ```powershell
  git commit				# 提交暂存区里的所有文件
  git commit -m <desc>	# 带提交说明的
  git commit -a 			# 跳过使用暂存区域，自动把所有已跟踪的文件暂存起来并提交，从而跳过 git add 步骤
  ```

* 移除文件

  ```powershell
  git rm <fileName>
  git rm -f <fileName>			# 删除修改过或已放到暂存区的文件
  git rm --cached <fileName>		# 从仓库删除，但保留本地文件
  ```

* 移动文件

  Git 并不显式跟踪文件移动操作。

  ```powershell
  git mv <oldName> <newName>	# 状态信息体现为重命名，相当于下面3条命令
  mv <oldName> <newName> 		# 本地移动
  git rm <oldName>			# 移除文件
  git add <newName>			# 最终文件
  ```

  

### 查看提交历史

* 指令及常用参数

  ```powershell
  git log							# 最近的提交记录在上面
  -p								# 显示差异
  -<n>							# 最近n条
  --stat							# 简易统计信息
  --shortstat						# 只显示 --stat 中最后的行数修改添加移除统计。
  --pretty=online 				# 每个提交放在一行显示
  --pretty=<short|full|fuller>	# 3种展示格式
  --pretty=format:<format>		# 自定义格式
  --graph							# 添加了一些ASCII字符串来形象地展示分支
  --name-only						# 仅在提交信息后显示已修改的文件清单。
  --name-status					# 显示新增、修改、删除的文件清单。
  --abbrev-commit					# 仅显示 SHA-1 校验和所有 40 个字符中的前几个字符。
  --oneline						# --pretty=oneline --abbrev-commit 合用的简写。
  --relative-date					# 使用较短的相对时间而不是完整格式显示日期
  --no-merges						# 避免显示的合并提交弄乱历史记录
  --since=<time>,--after=<time> 	# 指定时间之后
  --until=<time>,--before=<time> 	# 指定时间之前
  --author=<author> 				# 指定作者
  --committer=<committer> 		# 提交者匹配指定字符串
  --grep=<string> 				# 说明中包含指定字符串
  -S <sting>						# 添加或删除了该字符串的提交。
  ```

* `git log --pretty=format` 常用的选项

  | `%H`  | 提交的完整哈希值                              |
  | ----- | --------------------------------------------- |
  | `%h`  | 提交的简写哈希值                              |
  | `%T`  | 树的完整哈希值                                |
  | `%t`  | 树的简写哈希值                                |
  | `%P`  | 父提交的完整哈希值                            |
  | `%p`  | 父提交的简写哈希值                            |
  | `%an` | 作者名字                                      |
  | `%ae` | 作者的电子邮件地址                            |
  | `%ad` | 作者修订日期（可以用 --date=选项 来定制格式） |
  | `%ar` | 作者修订日期，按多久以前的方式显示            |
  | `%cn` | 提交者的名字                                  |
  | `%ce` | 提交者的电子邮件地址                          |
  | `%cd` | 提交日期                                      |
  | `%cr` | 提交日期（距今多长时间）                      |
  | `%s`  | 提交说明                                      |

### 撤销操作

* 有时候我们提交完了才发现漏掉了几个文件没有添加，或者提交信息写错了。 此时，可以运行带有 `--amend` 选项的提交命令来重新提交：

  ```powershell
  git commit --amend			# 将暂存区中的文件提交。 如果自上次提交以来你还未做任何修改（例如，在上次提交后马上执行了此命令）， 那么快照会保持不变，而你所修改的只是提交信息。
  ```

  * 最终你只会有一个提交——第二次提交将代替第一次提交的结果。
  * 当你在修补最后的提交时，与其说是修复旧提交，倒不如说是完全用一个 **新的提交** 替换旧的提交， 理解这一点非常重要。从效果上来说，就像是旧有的提交从未存在过一样，它并不会出现在仓库的历史中。
  * 修补提交最明显的价值是可以稍微改进你最后的提交，而不会让“啊，忘了添加一个文件”或者 “小修补，修正笔误”这种提交信息弄乱你的仓库历史。

* 取消暂存的文件

  ```powershell
  git reset HEAD <fileName>
  ```

* 撤销对文件的修改

  ```
  git checkout -- <dirnanme>
  ```

  * 将它还原成上次提交时的样子（或者刚克隆完的样子，或者刚把它放入工作目录时的样子）？

### 远程仓库的使用

* 常用命令：

  ```powershell
  git clone <url>							# 克隆远程仓库
  git remote add <shortname> <url> 		# 添加一个新的远程 Git 仓库，同时指定一个方便使用的简写
  git fetch <remote>						# 从远程仓库中获得数据
  git push <remote> <branch>				# 推送到远程仓库
  git remote								# 查看所有远程仓库
  git remote -v							# 显示需要读写远程仓库使用的 Git 保存的简写与其对应的 URL。
  git remote show <remote>				# 查看某个远程仓库
  git remote rename <oldName> <newName> 	# 修改远程仓库的简称
  git remote remove <remote>				# 移除该远程仓库
  git remote rm <remote>					# 同9
  ```

* 抓取与拉取(`git fetch origin` 会抓取克隆（或上一次抓取）后新推送的所有工作。 必须注意 `git fetch` 命令只会将数据下载到你的本地仓库——它并不会自动合并或修改你当前的工作。

  如果你的当前分支设置了跟踪远程分支（阅读下一节和 [Git 分支](https://git-scm.com/book/zh/v2/ch00/ch03-git-branching) 了解更多信息）， 那么可以用 `git pull` 命令来自动抓取后合并该远程分支到当前分支。 这或许是个更加简单舒服的工作流程。默认情况下，`git clone` 命令会自动设置本地 master 分支跟踪克隆的远程仓库的 `master` 分支（或其它名字的默认分支）。 运行 `git pull` 通常会从最初克隆的服务器上抓取数据并自动尝试合并到当前所在的分支。

  ```
  git pull 
  ```

### 标签

* Git 支持两种标签：轻量标签（lightweight）与附注标签（annotated）。

  * 轻量标签很像一个不会改变的分支——它只是某个特定提交的引用。

  * 附注标签是存储在 Git 数据库中的一个完整对象， 它们是可以被校验的，其中包含打标签者的名字、电子邮件地址、日期时间， 此外还有一个标签信息，并且可以使用 GNU Privacy Guard （GPG）签名并验证。

  * 通常会建议创建附注标签，这样你可以拥有以上所有信息。但是如果你只是想用一个临时的标签， 或者因为某些原因不想要保存这些信息，那么也可以用轻量标签。

* 默认情况下，`git push` 命令并不会传送标签到远程仓库服务器上。 在创建完标签后你必须显式地推送标签到共享服务器上。 这个过程就像共享远程分支一样

* 如果你想查看某个标签所指向的文件版本，可以使用 `git checkout` 命令， 虽然这会使你的仓库处于“分离头指针（detached HEAD）”的状态——这个状态有些不好的副作用：

  * 在“分离头指针”状态下，如果你做了某些更改然后提交它们，标签不会发生变化， 但你的新提交将不属于任何分支，并且将无法访问，除非通过确切的提交哈希才能访问。
  * 因此，如果你需要进行更改，比如你要修复旧版本中的错误，那么通常需要创建一个新分支。

```powershell
git tag									# 列出标签
git tag -l "<tagName>" 					# 过滤
git tag -list "<tagName>"				# 同2
git show <tagname>						# 查看指定标签
git tag -a <tagName> -m <info>			# 创建附注标签（指定 -a 选项）
git tag <tagName>						# 创建轻量标签
git tag <-a> <tagName> <checksum>		# 后期打标签 <checksum>: 部分或全部校验和
git push <remote> <tagName>				# 共享标签,显式地推送标签到共享服务器上
git push <remote> --tags				# 把所有不在远程服务器的标签全部推送上去
git tag -d <tagName>					# 删除标签，不会从任何远程仓库中移除这个标签
git push <remote> :refs/tags/<tagName>	# 更新远程服务器上的标签，这种操作的含义是，将冒号前面的空值推送到远程标签名，从而高效地删除它。
git push <remote> --delete <tagName>	# 更直观的删除远程标签方式检出标签
git checkout <tagName>					# 检出标签
```

### git别名

* Git 并不会在你输入部分命令时自动推断出你想要的命令。 如果不想每次都输入完整的 Git 命令，可以通过 `git config` 文件来轻松地为每一个命令设置一个别名。例如：

```
git config --global alias.co checkout
git config --global alias.br brance
git config --global alias.unstage 'reset HEAD --'
git config --global alias.last = 'log -1 HEAD'
// co->commit,st ->status等等，根据习惯自己设置
```

### 分支

```powershell
git branch <branchName>		# 创建新分支
git log --decorate	--oneline		# 查看各个分支当前所指的对象。--oneline为显示方式参数
git checkout <branchName>	# 切换到一个已存在的分支
```

* Git是怎么知道当前在哪一个分支上：它有一个名为 `HEAD` 的特殊指针。 在 Git 中，它是一个指针，指向当前所在的本地分支（译注：将 `HEAD` 想象为当前分支的别名）。 `git branch` 命令仅仅 **创建** 一个新分支，并不会自动切换到新分支中去。
* 从分支1切换到分支2后提交代码，分支2向前移动，分支1仍然指向原来的对象。
* 从分支2切换回分支1，HEAD指回分支1，并且将工作目录恢复成分支1所指向的快照内容。 也就是说，你现在做修改的话，项目将始于一个较旧的版本。 本质上来讲，这就是忽略分支2所做的修改，以便于向另一个方向进行开发。

