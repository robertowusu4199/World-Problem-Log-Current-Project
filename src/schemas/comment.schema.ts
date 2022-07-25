import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
//import { v4 as uuidv4 } from 'uuid';
import { Problem } from '../schemas/problem.schema'
import * as mongoose from 'mongoose';

export type CommentDocument = Comment & Document;

@Schema()
export class Comment {

    // @Prop({ type: String, default: function genUUID() {
    //     return uuidv4()
    // }})
    // _id: string;

    @Prop()
    id: string

    @Prop({type: String, required: true})
    textarea: string;

    @Prop({ type: Date, default: Date })
    createdDate: Date;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Problem', required: true })
    problemId: Problem;

    // @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Problem' })
    // problemId: Problem

}

export const CommentSchema = SchemaFactory.createForClass(Comment);

















//@Prop([{ type: SchemaTypes.ObjectId, ref: 'TagEntity' }])  tags!: Types.ObjectId[];