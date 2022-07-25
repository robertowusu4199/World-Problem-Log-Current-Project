import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { FilterProblemDTO } from "src/dtos/filter-problem";
import { CreateProblemDTO } from "src/dtos/problem.dto";
import { Problem, ProblemDocument } from "../schemas/problem.schema";

@Injectable()
export class ProblemService {

    constructor(@InjectModel('Problem') private readonly problemModel: Model<ProblemDocument>) {}

    async getFilteredProblems(filterProblemDTO: FilterProblemDTO): Promise<Problem[]> {
        const { topic, search } = filterProblemDTO;
        let problems = await this.getAllProblems();

        if(search) {
            problems = problems.filter(problem => 
                problem.textarea.includes(search)
            );
        }

        if (topic) {
            problems = problems.filter(problem => problem.topic === topic)
        }

        return problems;
    }

    async getAllProblems(): Promise<Problem[]> {
        const problems = await this.problemModel.find().exec();
        return problems;
    }

    async getProblem(id): Promise<Problem> {
        const problem = await this.problemModel.findById(id).exec();
        return problem;
    }

    async addProblem(createProblemDTO: CreateProblemDTO): Promise<Problem> {
        const newProblem = await this.problemModel.create(createProblemDTO);
        return newProblem.save();
    }

    async updateProblem(id: string, createProblemDTO: CreateProblemDTO): Promise<Problem> {
        const updatedProblem = await this.problemModel
        .findByIdAndUpdate(id, createProblemDTO, {new:true});
        return updatedProblem;
    }


    // async create(problem: Problem): Promise<Problem> {
    //     const newProblem = new this.problemModel(problem);
    //     return newProblem.save();
    // }

    // async readAll(): Promise<Problem[]> {
    //     return await this.problemModel.find().exec()
    // }

    // async readById(id): Promise<Problem> {
    //     return await this.problemModel.findById(id).exec();
    // }
    
    // async update(id, problem: Problem): Promise<Problem> {
    //     return await this.problemModel.findByIdAndUpdate(id, problem, {new: true})
    //}

}