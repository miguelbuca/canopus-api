import { EntityRepository, Repository } from "typeorm";
import { Note } from "../models/Note";

@EntityRepository(Note)
export default class NoteRepository extends Repository<Note> {}
