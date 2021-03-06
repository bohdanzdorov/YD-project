// Create TaskDTO
class TaskDTO{
    task_id;
    due_to;
    description;
    files;
    student_files;

    constructor(task_id = 0, due_to = "", description = "", files = [], student_files = []){
        this.task_id = task_id;
        this.due_to = due_to;
        this.description = description;
        this.files = [];
        this.student_files = [];

        for(let i = 0 ;i < files.length; i++){
            this.files.push(files[i]);
        }

        for(let i = 0 ;i < student_files.length; i++){
            this.student_files.push(student_files[i]);
        }
    }

    static copy(TaskDTO) {
        return new UserDTO(TaskDTO.login, TaskDTO.password, TaskDTO.access);
    }
}

// Export 'TaskDTO' to project
module.exports = TaskDTO;