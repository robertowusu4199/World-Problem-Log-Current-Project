import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
//import { Document, Types, Schema as MongooseSchema } from 'mongoose';
import * as mongoose from 'mongoose';
//import { v4 as uuidv4 } from 'uuid';
//import { Comment } from '../schemas/comment.schema'

export type ProblemDocument = Problem & Document;

@Schema()
export class Problem {

    // @Prop({ type: String, default: function genUUID() {
    //     return uuidv4()
    // }})
    // _id: string;

    @Prop()
    id: string

    @Prop({type: String, required: true})
    topic: string;

    @Prop({type: String, required: true})
    textarea: string;

    @Prop({ type: Date, default: Date })
    createdDate: Date;

    // @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Comment'})
    // commentId: Comment;

    // @Prop({ default: Date.now })  
    // createdAt!: Date;

    // @Prop({ default: Date.now })  
    // updatedAt!: Date;

    // @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }] })
    // commentId: Comment[];

    // @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' })
    // commentId: Comment

}

export const ProblemSchema = SchemaFactory.createForClass(Problem);







// @Schema({ timestamps: true }) 1


//@Prop({ type: Date, default: Date.Now })
// @Prop({ default: Date.now })  
//     createdAt!: Date;

//     @Prop({ default: Date.now })  
//     updatedAt!: Date;