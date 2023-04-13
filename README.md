# 公司-PC-展厅项目

#### 当前项目框架主要负责人：刘晓晨

#### 当前项目需求主要负责人：李可

## 各功能文件夹及其目录说明

## 当前项目基础框架说明及主要三方组件说明（包含官方路径）

#### 当前项目基础框架：vue v2.x （ https://cn.vuejs.org/index.html ）

#### 主要三方组件： Element （ https://element.eleme.cn/#/zh-CN ）

## 项目代码 GitLab 路径、提交标准及日志规范说明

### 1. GitLab 路径（ http://git.jiankangsn.com/sn-dashboard/sn-dashboard.git ）

### 2. 提交标准

+ 各个文件中没有任何报错信息

+ 符合 eslint 、 styleLint 规范

+ 页面中去除全部测试中所添加的代码，例如 console 等

+ 先从 GitLab 中获取更新的代码，各小程序相关平台通过真机调试查看是否可以正常打包

+ 本地开发全部在 dev 分支中进行开发，提交也只允许提交至 dev 分支，提交成功后，在 GitLab 中新建合并分支，并将合并请求指派给项目负责人，项目负责人合并成功后，拉取 master 分支中代码进行测试

### 3. 日志规范

yyyy年MM月dd日 HH:mm:ss 提交人姓名

1. XXX

2. XXX

3. XXX

## 项目发布流程说明

+ 项目负责人检查 GitLab 中是否有未合并的代码，本地拉取最新代码后进行项目启动，检查启动是否有异常

+ 在 Jenkins （ https://jenkins.sunus.jiankangsn.com/ ）中找到项目，选择 master 分支进行打包并布署到 OSS 中

+ 清除 cdn 缓存
