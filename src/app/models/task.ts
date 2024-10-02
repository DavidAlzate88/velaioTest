export interface Task {
  id: number;
  name: string;
  dueDate: string;
  completed: boolean;
  assignedTo: {
    fullName: string;
    age: number;
    skills: string[];
  }[];
}
