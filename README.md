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
git config --global user.name <'name'>				# 全局配置用户名
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

* 文件的状态变化周期![git文件的状态变化周期](D:\Desktop\git_leecode\README.assets\lifecycle.png)
*  检查当前文件状态

```powershell
git status		
git status -s	# 状态简览 ??:(untracked)未跟踪、M:(Modified)已修改、A:(Staged)暂存区
```

* 跟踪新文件

  ```powershell
  git add <fileName> 
  ```

  

* 忽略文件 .gitignore

  文件 `.gitignore` 的格式规范如下：

  * 所有空行或者以 `#` 开头的行都会被 Git 忽略。
  * 可以使用标准的 glob 模式匹配，它会递归地应用在整个工作区中。
  * 匹配模式可以以（`/`）开头防止递归。
  * 匹配模式可以以（`/`）结尾指定目录。
  * 要忽略指定模式以外的文件或目录，可以在模式前加上叹号（`!`）取反。

  所谓的 glob 模式是指 shell 所使用的简化了的正则表达式。 星号（`*`）匹配零个或多个任意字符；`[abc]` 匹配任何一个列在方括号中的字符 （这个例子要么匹配一个 a，要么匹配一个 b，要么匹配一个 c）； 问号（`?`）只匹配一个任意字符；如果在方括号中使用短划线分隔两个字符， 表示所有在这两个字符范围内的都可以匹配（比如 `[0-9]` 表示匹配所有 0 到 9 的数字）。 使用两个星号（`*`）表示匹配任意中间目录，比如 `a/**/z` 可以匹配 `a/z` 、 `a/b/z` 或 `a/b/c/z` 等。
