import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommentController } from './controllers/comment.controller';
import { ProblemController } from './controllers/problem.controller';
import { Comment, CommentSchema } from './schemas/comment.schema';
import { Problem, ProblemSchema } from './schemas/problem.schema';
import { CommentService } from './services/comment.service';
import { ProblemService } from './services/problem.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.MONGO_URI, 
      {useNewUrlParser: true, useUnifiedTopology: true}
    ),
    MongooseModule.forFeature([{name: Comment.name, 
      schema: CommentSchema,
    }]),
    MongooseModule.forFeature([{name: Problem.name, 
      schema: ProblemSchema,
    }])],
  controllers: [AppController, ProblemController, CommentController],
  providers: [AppService, ProblemService, CommentService],
})
export class AppModule {}




//Using discriminator
// MongooseModule.forFeature([{name: Problem.name, 
//   schema: ProblemSchema,
//   discriminators:[{
//     name: Comment.name,
//     schema: CommentSchema
//   },],
// },]),],
