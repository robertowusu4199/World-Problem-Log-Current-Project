import { Body, Controller, Get, HttpStatus, NotFoundException, Param, Post, Put, Query, Res } from "@nestjs/common";
//import { FilterProblemDTO } from "src/dtos/filter-problem";
import { CreateProblemDTO } from "src/dtos/problem.dto";
import { ProblemService } from "../services/problem.service";

@Controller()
export class ProblemController {
    constructor(private readonly problemService: ProblemService) {}

    @Get('/problems')
    async getProblems(@Res() response) {
        const allProblems = await this.problemService.getAllProblems();
        return response.status(HttpStatus.OK).json({ 
            allProblems
        })
    }

    @Get('/problem/:id')
    async getProblem(@Res() response, @Param('id') id ) {
        const problem = await this.problemService.getProblem(id);
        if (!problem) throw new NotFoundException('Problem does not exist!');
        return response.status(HttpStatus.OK).json({
            problem
        })
    }

    @Post('/postproblem')
    async addProblem(@Res() response, @Body() createProblemDTO: CreateProblemDTO) {
        const problem = await this.problemService.addProblem(createProblemDTO)
        return response.status(HttpStatus.CREATED).json({
            message: "Post has been created successfully", 
            problem
        })
    }

    @Put('/problemupdate/:id')
    async updateProblem(@Res() response, @Param('id') id: string, @Body() createProblemDTO: CreateProblemDTO) {
        const problem = await this.problemService.updateProblem(id, createProblemDTO);
        if(!problem) throw new NotFoundException('problem does not exist!');
        return response.status(HttpStatus.OK).json({
            message: 'Post has been successfully updated', 
            problem
        })
    } 
}









        //Other side of filter
    // @Get('/problems')
    // async getProblems(@Res() response, @Query() filterProblemDTO: FilterProblemDTO) {
    //     if (Object.keys(filterProblemDTO).length) {
    //         const filterProblems = await this.problemService.getFilteredProblems(filterProblemDTO);
    //         return filterProblems;
    //     } else {
    //         const allProblems = await this.problemService.getAllProblems();
    //         return response.status(HttpStatus.OK).json({ 
    //             allProblems
    //         })
    //     }
    // }

    
    // @Put('/:id')
    // async update(@Res() response, @Param('id') id, @Body() problem: Problem) {
    //     const updateProblem = await this.problemService.update(id, problem);
    //     if (!updateProblem) throw new NotFoundException('Id does not exist!');
    //     return response.status(HttpStatus.OK).json({
    //         message: 'Post has been successfully updated',
    //         updateProblem
    //     })
    // }

    // @Post()
    // async createProblem(@Res() response, @Body() problem: Problem) {
    //     const newProblem = await this.problemService.create(problem)
    //     return response.status(HttpStatus.CREATED).json({
    //         message: "Post has been created successfully",
    //         newProblem
    //     })
    // }

    // @Get()
    // async fetchAll(@Res() response) {
    //     const problems = await this.problemService.readAll();
    //     return response.status(HttpStatus.OK).json({
    //         problems
    //     })
    // }

    // @Get('/:id')
    // async findById(@Res() response, @Param('id') id) {
    //     const problem = await this.problemService.readById(id);
    //     if (!problem) throw new NotFoundException('Id does not exist!');
    //     return response.status(HttpStatus.OK).json({
    //         problem
    //     })
    // }
    
    // @Put('/:id')
    // async update(@Res() response, @Param('id') id, @Body() problem: Problem) {
    //     const updateProblem = await this.problemService.update(id, problem);
    //     if (!updateProblem) throw new NotFoundException('Id does not exist!');
    //     return response.status(HttpStatus.OK).json({
    //         message: 'Post has been successfully updated',
    //         updateProblem
    //     })
    // }
