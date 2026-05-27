# 部署信息

> 本文件用于记录本项目部署所需信息，便于后续直接执行部署。
> 请不要提交明文密码到公开仓库；如必须记录密码，请放在本机密码管理器中，并在此处记录获取方式。

## 项目

- 项目名称：agreement-policy-react
- 本地路径：`/Volumes/至太/code/privacy-policy-company`
- 构建命令：`npm run build`
- 构建产物目录：`dist`

## 服务器

- SSH 地址：`root@116.62.63.7`
- SSH 端口：`22`
- 登录方式：`密码登录`
- SSH key 路径：`无`
- 密码获取方式：`不记录在项目文件中，部署时向负责人确认`

## 部署目标

- 服务器部署目录：`/www/wwwroot/yszc`
- Web 服务：`Nginx 静态站点`
- 站点域名：`待填写`
- 备份策略：`部署前备份旧文件`
- 是否需要重载 Nginx：`不需要`

## 部署步骤

1. 本地构建：

   ```bash
   npm run build
   ```

2. 上传构建产物：

   ```bash
   scp -P 22 -r dist/* root@116.62.63.7:/www/wwwroot/yszc/
   ```

3. 如服务需要重载，执行：

   ```bash
   # 当前项目不需要重载 Nginx
   ```

4. 验证访问：

   ```bash
   curl -I <站点域名>
   ```

## 待确认信息

- 线上访问 URL：

## 部署记录

### 2026-05-27

- 本地构建：`npm run build`
- 服务器备份：`/www/backup/yszc-20260527-164459.tar.gz`
- 上传目录：`/www/wwwroot/yszc`
- Nginx：未重载
- 验证：`curl -I http://116.62.63.7` 返回 `200 OK`
