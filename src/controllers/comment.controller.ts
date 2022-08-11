import { Body, Controller, Get, HttpStatus, NotFoundException, Param, Post, Res } from "@nestjs/common";
import { CreateCommentDTO } from "src/dtos/comment.dto";
import { CommentService } from "../services/comment.service";

@Controller()
export class CommentController{
    constructor(private readonly commentService: CommentService) {}

    @Get('/comments')
    async getAllComments(@Res() response) {
        const allComments = await this.commentService.getAllComments();
        return response.status(HttpStatus.CREATED).json({
            allComments
        })
    }

    @Get('comment/:id')
    async getComment(@Res() response, @Param('id') id ) {
        const comment = await this.commentService.getComment(id);
        if (!comment) throw new NotFoundException('Comment does not exist!');
        return response.status(HttpStatus.OK).json({
            comment
        })
    }

    // @Get('comment/problem/:id')
    // async getProblem(@Res() response, @Param()id) {
    //     const problem = await this.commentService.getProblem(id);
    //     if (!problem) throw new NotFoundException('Comment does not exist!');
    //     return response.status(HttpStatus.OK).json({
    //         problem
    //     })
    // }

    @Post('/postcomment')
    async addComment(@Res() response, @Body() createCommentDTO: CreateCommentDTO) {
        const comment = await this.commentService.addComment(createCommentDTO)
        return response.status(HttpStatus.CREATED).json({
            message: "Post has been created successfully", 
            comment
        })
    }








    
    // @Post()
    // async createComment(@Res() response, @Body() comment: Comment) {
    //     const newComment = await this.commentService.create(comment)
    //     return response.status(HttpStatus.CREATED).json({
    //         message: "Comment has been created successfully",
    //         newComment
    //     })
    // }

    // @Get()
    // async fetchAll(@Res() response) {
    //     const comments = await this.commentService.readAll();
    //     return response.status(HttpStatus.OK).json({
    //         comments
    //     })
    // }

    // @Get('/:id')
    // async findById(@Res() response, @Param('id') id) {
    //     const comment = await this.commentService.readById(id);
    //     if (!comment) throw new NotFoundException('Id does not exist!');
    //     return response.status(HttpStatus.OK).json({
    //         comment
    //     })
    // }

}