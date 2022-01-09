import { EntityRepository, Repository } from "typeorm";
import { Task } from "../models/Task";

@EntityRepository(Task)
export default class TaskRepository extends Repository<Task> {}
