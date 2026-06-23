# NestJS 从零到就业级架构师

总计：

```text
150讲
8个阶段
3个企业项目
1个大型架构项目
覆盖90%以上NestJS岗位
```

------

# 第一阶段：Node.js 与 TypeScript 底层筑基（1-20讲）

目标：

```text
成为真正理解NestJS的人
而不是API调用工程师
```

------

### Node.js核心

1. Node.js运行机制
2. Event Loop详解
3. 宏任务与微任务
4. Buffer原理
5. Stream原理
6. HTTP模块实现Web服务器
7. TCP与HTTP关系
8. CommonJS与ESM
9. Cluster多进程
10. Worker Thread

------

### TypeScript核心

1. 类型系统
2. Interface与Type
3. 泛型
4. 装饰器Decorator
5. Reflect Metadata
6. 联合类型
7. 条件类型
8. Infer
9. Utility Types
10. TS高级面试题

------

# 第二阶段：NestJS核心原理（21-45讲）

目标：

```text
彻底理解Nest
```

------

### Nest启动流程

1. 创建第一个Nest项目
2. main.ts到底干了什么
3. NestFactory源码分析
4. Module扫描机制
5. Metadata收集机制

------

### Controller

1. Controller原理
2. 路由映射机制
3. 参数装饰器
4. 自定义参数装饰器
5. RESTful设计规范

------

### Provider

1. Provider本质
2. Dependency Injection
3. IoC容器
4. Token机制
5. Factory Provider
6. Value Provider
7. Existing Provider
8. 生命周期钩子
9. Singleton
10. Request Scope
11. Transient Scope

------

### Module

1. Module组织架构
2. exports机制
3. Global Module
4. Dynamic Module

------

# 第三阶段：NestJS核心武器库（46-75讲）

目标：

```text
掌握企业开发最常用能力
```

------

### Middleware

1. Middleware机制
2. 请求链路
3. 自定义Middleware

------

### Pipe

1. Pipe原理
2. ValidationPipe
3. DTO设计
4. class-validator
5. class-transformer
6. 自定义Pipe

------

### Guard

1. Guard原理
2. AuthGuard实现
3. RolesGuard实现
4. RBAC权限模型
5. ABAC权限模型

------

### Interceptor

1. Interceptor原理
2. 响应统一封装
3. 日志拦截器
4. 缓存拦截器
5. 超时拦截器
6. 链路追踪

------

### Exception Filter

1. 异常过滤器
2. HttpException
3. 业务异常体系
4. 全局异常设计

------

### 自定义Decorator

1. 元数据设计
2. 权限注解
3. 日志注解
4. 缓存注解
5. 审计注解
6. AOP思想

------

# 第四阶段：数据库与ORM（76-105讲）

目标：

```text
达到企业CRUD开发水平
```

------

### MySQL

1. MySQL基础
2. 索引原理
3. 事务
4. MVCC
5. 锁机制
6. Explain分析

------

### Prisma（重点）

1. Prisma介绍
2. Schema设计
3. Migration
4. CRUD
5. Relation
6. Pagination
7. Transaction
8. Middleware
9. 性能优化

------

### TypeORM（了解）

1. Entity
2. Repository
3. QueryBuilder
4. Transaction
5. Relation

------

### Redis

1. Redis基础
2. String
3. Hash
4. Set
5. ZSet
6. 缓存设计
7. 分布式锁
8. 秒杀设计
9. 布隆过滤器
10. Redis面试题

------

# 第五阶段：认证授权系统（106-120讲）

目标：

```text
掌握企业用户系统
```

1. 用户注册
2. 登录
3. JWT
4. Refresh Token
5. Passport
6. Local Strategy
7. Jwt Strategy
8. OAuth2
9. Github登录
10. 微信登录设计
11. RBAC
12. 数据权限
13. 菜单权限
14. 多租户权限
15. SSO单点登录

------

# 第六阶段：企业项目一（博客系统）（121-130讲）

目标：

```text
初级Node岗位
```

模块：

- 用户
- 文章
- 评论
- 标签
- 分类
- 文件上传

重点：

- DTO
- Prisma
- Redis缓存
- JWT

------

# 第七阶段：企业项目二（后台管理系统）（131-140讲）

目标：

```text
中级Node岗位
```

模块：

- 用户管理
- 角色管理
- 权限管理
- 操作日志
- 数据字典
- 文件中心

重点：

- RBAC
- 动态菜单
- 动态权限
- 审计日志

------

# 第八阶段：就业级架构师训练营（141-150讲）

目标：

```text
冲击20K+岗位
```

------

### 微服务

1. 微服务架构
2. TCP通信
3. Redis通信
4. RabbitMQ
5. Kafka
6. 服务发现

------

### 高并发

1. 缓存架构
2. 限流
3. 熔断
4. 降级

------

# 第九阶段：NestJS源码与架构设计（加餐30讲）

内容：

- NestFactory源码
- IoC容器源码
- Reflect Metadata源码
- Dependency Graph
- Module Compiler
- Dynamic Module源码
- Execution Context
- Guard源码
- Pipe源码
- Interceptor源码
- Exception源码

最终手写：

```text
Mini Nest
```

实现：

- @Controller
- @Get
- @Injectable
- @Module
- DI容器
- 路由系统

------

# 就业最优技术栈（2026）

建议：

```text
NestJS
TypeScript
Prisma
MySQL
Redis
Docker
Nginx
JWT
RabbitMQ
Kafka（了解）
WebSocket
Swagger
Jest
GitHub Actions
```

------

# 最终项目（简历项目）

学完后至少完成 3 个项目：

### 项目1

博客系统

难度 ★★

------

### 项目2

RBAC后台管理系统

难度 ★★★

------

### 项目3

电商系统（重点）

模块：

- 用户
- 商品
- 购物车
- 订单
- 支付
- 库存
- 秒杀

难度 ★★★★★

这个项目做完，基本已经达到绝大多数 NestJS 招聘要求。