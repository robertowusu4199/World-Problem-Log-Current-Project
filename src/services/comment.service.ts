import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateCommentDTO } from "src/dtos/comment.dto";
import { Comment, CommentDocument } from "../schemas/comment.schema";
import { Schema as MongooseSchema } from 'mongoose';

@Injectable()
export class CommentService {

    constructor(@InjectModel(Comment.name) private commentModel: Model<CommentDocument>) {}


    async getAllComments(): Promise<Comment[]> {
        const comments = await this.commentModel.find().populate("problemId").exec();
        return comments;
    }

    async getComment(id): Promise<Comment> {
        const comment = await this.commentModel.findById(id).exec();
        return comment;
    }

    async addComment(createCommentDTO: CreateCommentDTO): Promise<Comment> {
        const newComment = await this.commentModel.create(createCommentDTO);
        return newComment.save();
    }







    // async create(comment: Comment): Promise<Comment> {
    //     const newComment = new this.commentModel(comment)
    //     return newComment.save();
    // }

    // async readAll(): Promise<Comment[]> {
    //     return await this.commentModel.find().exec()
    // }

    // async readById(id): Promise<Comment> {
    //     return await this.commentModel.findById(id).exec();
    // }

}