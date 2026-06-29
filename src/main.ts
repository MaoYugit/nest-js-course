/**
 *  应用程序的入口文件，它使用核心函数 NestFactory 来创建 Nest 应用程序实例。
 * */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  // 1. 实例化阶段：通过根模块创建一个 Nest 应用实例
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('v1');

  // 2. 监听阶段：启动 HTTP 服务器，监听端口
  await app.listen(process.env.PORT ?? 3000);
}
void bootstrap();

// import { NestFactory } from '@nestjs/core';
// import { AppModule } from './app.module';
// import {
//   FastifyAdapter,
//   NestFastifyApplication,
// } from '@nestjs/platform-fastify';

// async function bootstrap() {
//   // 1. 实例化阶段：通过根模块创建一个 Nest 应用实例
//   const app = await NestFactory.create<NestFastifyApplication>(
//     AppModule,
//     new FastifyAdapter(),
//   );

//   // 2. 监听阶段：启动 HTTP 服务器，监听端口
//   await app.listen({
//     port: Number(process.env.PORT) || 3000,
//     host: '0.0.0.0',
//   });
// }
// void bootstrap();
